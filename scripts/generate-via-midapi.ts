#!/usr/bin/env npx tsx
// ============================================================================
// Generate character assets via MidAPI (third-party Midjourney API)
// ============================================================================
// Midjourney does NOT offer an official public API. This script uses MidAPI
// (https://midapi.ai), which provides HTTP access to Midjourney-style generation.
//
// Prerequisites:
//   1. Get an API key from https://midapi.ai/api-key
//   2. Set env: MIDAPI_KEY=your_key (or MIDJOURNEY_API_KEY)
//   3. Optional: set style ref and character refs in production-tracker.json
//      (or pass --sref / --cref-file); MidAPI may support reference images
//      via taskType "mj_style_reference" / "mj_omni_reference" — see their docs.
//
// Usage:
//   npx tsx scripts/generate-via-midapi.ts --dry-run
//   npx tsx scripts/generate-via-midapi.ts --type INTJ --asset portrait
//   npx tsx scripts/generate-via-midapi.ts --phase portraits
//   npx tsx scripts/generate-via-midapi.ts --phase portraits --limit 2
// ============================================================================

import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import * as http from "http";

import {
  MASTER_PROMPT,
  ASSET_MODIFIERS,
  CHARACTERS,
  TYPE_CODES,
  type TypeCode,
  type AssetType,
  type SceneType,
  type Character,
} from "../lib/characters";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const BASE_URL = "https://api.midapi.ai/api/v1/mj";
const POLL_INTERVAL_MS = 15000;
const MAX_WAIT_MS = 10 * 60 * 1000; // 10 min

// Map our aspect ratios to MidAPI's supported values
// MidAPI: 1:2, 9:16, 2:3, 3:4, 5:6, 6:5, 4:3, 3:2, 1:1, 16:9, 2:1
const AR_MAP: Record<string, string> = {
  "3:4": "3:4",
  "16:9": "16:9",
  "1:1": "1:1",
  "32:9": "2:1",   // closest ultra-wide
  "16:10": "3:2",  // closest to 16:10
  "1200x630": "16:9",
};

// ---------------------------------------------------------------------------
// API client
// ---------------------------------------------------------------------------

function getApiKey(): string {
  const key = process.env.MIDAPI_KEY || process.env.MIDJOURNEY_API_KEY;
  if (!key) {
    console.error("Set MIDAPI_KEY or MIDJOURNEY_API_KEY to your MidAPI key (from https://midapi.ai/api-key)");
    process.exit(1);
  }
  return key;
}

async function apiRequest<T>(
  method: "GET" | "POST",
  path: string,
  apiKey: string,
  body?: object
): Promise<{ code: number; msg: string; data?: T }> {
  const url = new URL(path, BASE_URL);
  const bodyStr = body ? JSON.stringify(body) : undefined;

  return new Promise((resolve, reject) => {
    const req = (url.protocol === "https:" ? https : http).request(
      url.toString(),
      {
        method,
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          ...(bodyStr && { "Content-Length": Buffer.byteLength(bodyStr, "utf-8") }),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (ch) => (data += ch));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error(`Invalid JSON: ${data.slice(0, 200)}`));
          }
        });
      }
    );
    req.on("error", reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

interface TaskResult {
  taskId: string;
  successFlag?: number;
  resultInfoJson?: { resultUrls?: Array<{ resultUrl: string }> };
  errorMessage?: string;
}

async function createJob(
  apiKey: string,
  prompt: string,
  aspectRatio: string,
  options: { speed?: string; version?: string; fileUrls?: string[] } = {}
): Promise<string> {
  const ar = AR_MAP[aspectRatio] || "16:9";
  const res = await apiRequest<{ taskId: string }>("POST", "generate", apiKey, {
    taskType: "mj_txt2img",
    prompt,
    speed: options.speed ?? "relaxed",
    aspectRatio: ar,
    version: options.version ?? "6.1",
    ...(options.fileUrls?.length && { fileUrls: options.fileUrls }),
  });

  if (res.code !== 200 || !res.data?.taskId) {
    throw new Error(res.msg || "Create job failed");
  }
  return res.data.taskId;
}

async function getTaskStatus(apiKey: string, taskId: string): Promise<TaskResult> {
  const res = await apiRequest<TaskResult>("GET", `record-info?taskId=${encodeURIComponent(taskId)}`, apiKey);
  if (res.code !== 200 || !res.data) {
    throw new Error(res.msg || "Status check failed");
  }
  return res.data;
}

async function waitForCompletion(apiKey: string, taskId: string): Promise<string[]> {
  const start = Date.now();
  while (Date.now() - start < MAX_WAIT_MS) {
    const status = await getTaskStatus(apiKey, taskId);
    if (status.successFlag === 1 && status.resultInfoJson?.resultUrls?.length) {
      return status.resultInfoJson.resultUrls.map((u) => u.resultUrl);
    }
    if (status.successFlag === 2 || status.successFlag === 3) {
      throw new Error(status.errorMessage || "Generation failed");
    }
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
  }
  throw new Error("Timeout waiting for image");
}

function downloadToFile(url: string, filePath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(filePath);
    const protocol = url.startsWith("https") ? https : http;
    protocol.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        resolve();
      });
    }).on("error", reject);
  });
}

// ---------------------------------------------------------------------------
// Prompt building (API-friendly: no /imagine or --flags)
// ---------------------------------------------------------------------------

function buildPromptText(opts: {
  character: Character;
  assetType: AssetType;
  sceneOverride?: string;
}): string {
  const { character, assetType, sceneOverride } = opts;
  const modifier = ASSET_MODIFIERS[assetType];
  const characterPart = sceneOverride ?? character.characterPrompt;
  const suffixPart = modifier.suffix ? ` ${modifier.suffix}` : "";
  return `${MASTER_PROMPT} ${characterPart}${suffixPart}`.trim();
}

function getAspectRatio(assetType: AssetType): string {
  return ASSET_MODIFIERS[assetType].ar;
}

// ---------------------------------------------------------------------------
// Job queue from CLI
// ---------------------------------------------------------------------------

type Phase = "portraits" | "reveals" | "avatars" | "banners" | "scenes" | "all";

function parseArgs(): {
  dryRun: boolean;
  type: TypeCode | "";
  asset: AssetType | "";
  phase: Phase;
  limit: number;
  publicDir: string;
} {
  const args = process.argv.slice(2);
  const get = (k: string) => {
    const i = args.indexOf(`--${k}`);
    return i >= 0 && i + 1 < args.length ? args[i + 1] : "";
  };
  return {
    dryRun: args.includes("--dry-run"),
    type: get("type").toUpperCase() as TypeCode | "",
    asset: get("asset") as AssetType | "",
    phase: (get("phase") || "all") as Phase,
    limit: parseInt(get("limit") || "0", 10) || 9999,
    publicDir: path.join(__dirname, "..", "public", "characters"),
  };
}

function* listJobs(phase: Phase, typeFilter: TypeCode | ""): Generator<{ code: TypeCode; asset: AssetType }> {
  const types: TypeCode[] = typeFilter ? [typeFilter] : [...TYPE_CODES];

  if (phase === "all" || phase === "portraits") {
    for (const code of types) yield { code, asset: "portrait" };
  }
  if (phase === "all" || phase === "reveals") {
    for (const code of types) yield { code, asset: "reveal" };
  }
  if (phase === "all" || phase === "avatars") {
    for (const code of types) yield { code, asset: "avatar" };
  }
  if (phase === "all" || phase === "banners") {
    for (const code of types) yield { code, asset: "hero-banner" };
  }
  if (phase === "all" || phase === "scenes") {
    const sceneTypes: AssetType[] = [
      "strengths", "relationships", "friendships", "parenthood",
      "career", "workplace", "growth",
    ];
    for (const code of types) {
      for (const asset of sceneTypes) yield { code, asset };
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function runOne(
  apiKey: string,
  code: TypeCode,
  asset: AssetType,
  publicDir: string
): Promise<void> {
  const character = CHARACTERS[code];
  const sceneOverride =
    ["strengths", "relationships", "friendships", "parenthood", "career", "workplace", "growth"].includes(asset)
      ? character.scenePrompts[asset as SceneType]
      : undefined;

  const prompt = buildPromptText({ character, assetType: asset, sceneOverride });
  const aspectRatio = getAspectRatio(asset);

  const taskId = await createJob(apiKey, prompt, aspectRatio);
  console.log(`  Task ${taskId} ... waiting`);
  const urls = await waitForCompletion(apiKey, taskId);
  const imageUrl = urls[0];
  if (!imageUrl) throw new Error("No image URL in result");

  const lower = code.toLowerCase();
  const fileName = `${lower}-${asset}.png`;
  const filePath = path.join(publicDir, lower, fileName);
  await downloadToFile(imageUrl, filePath);
  console.log(`  Saved: ${filePath}`);
}

async function main() {
  const opts = parseArgs();

  if (opts.asset && opts.type) {
    // Single job
    if (opts.dryRun) {
      const char = CHARACTERS[opts.type];
      const sceneOverride = ["strengths", "relationships", "friendships", "parenthood", "career", "workplace", "growth"].includes(opts.asset)
        ? char.scenePrompts[opts.asset as SceneType]
        : undefined;
      const prompt = buildPromptText({ character: char, assetType: opts.asset, sceneOverride });
      console.log("Dry run — would send prompt:\n", prompt.slice(0, 300) + "...");
      console.log("Aspect ratio:", getAspectRatio(opts.asset));
      return;
    }
    const apiKey = getApiKey();
    await runOne(apiKey, opts.type, opts.asset, opts.publicDir);
    return;
  }

  // Phase or full run
  const jobs = [...listJobs(opts.phase, opts.type)].slice(0, opts.limit);
  console.log(`Total jobs: ${jobs.length} (limit: ${opts.limit})`);

  if (opts.dryRun) {
    jobs.slice(0, 3).forEach(({ code, asset }) => {
      console.log(`  Would generate: ${code} ${asset}`);
    });
    if (jobs.length > 3) console.log(`  ... and ${jobs.length - 3} more`);
    return;
  }

  const apiKey = getApiKey();
  let done = 0;
  for (const { code, asset } of jobs) {
    console.log(`[${done + 1}/${jobs.length}] ${code} ${asset}`);
    try {
      await runOne(apiKey, code, asset, opts.publicDir);
      done++;
    } catch (e) {
      console.error(`  Error: ${e instanceof Error ? e.message : e}`);
    }
  }
  console.log(`Done. ${done}/${jobs.length} succeeded.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
