#!/usr/bin/env npx tsx
// ============================================================================
// Generate MBTI character assets as SVG line-art via Recraft AI API
// ============================================================================
// Uses Recraft V3 vector model with Line art style to generate clean
// black-on-white SVG illustrations matching the approved icon system.
//
// Prerequisites:
//   1. Get an API key from https://app.recraft.ai/profile/api
//   2. Set env: RECRAFT_API_KEY=your_key
//
// Usage:
//   npx tsx scripts/generate-via-recraft.ts --dry-run
//   npx tsx scripts/generate-via-recraft.ts --type INTJ --asset reveal
//   npx tsx scripts/generate-via-recraft.ts --type INTJ
//   npx tsx scripts/generate-via-recraft.ts --phase reveals
//   npx tsx scripts/generate-via-recraft.ts --phase scenes --limit 2
//   npx tsx scripts/generate-via-recraft.ts --force
// ============================================================================

import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import { optimize } from "svgo";

import {
  STYLE_DIRECTIVES,
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

const API_BASE = "https://external.api.recraft.ai/v1";
const RECRAFT_MODEL = "recraftv3_vector";
const RECRAFT_STYLE = "Line art";
const DELAY_MS = 600;
const MAX_RETRIES = 2;

const SCENE_ASSETS: AssetType[] = [
  "strengths", "relationships", "career", "growth",
];

const AR_MAP: Record<string, string> = {
  "3:4": "3:4",
  "16:9": "16:9",
  "1:1": "1:1",
  "32:9": "2:1",
  "16:10": "14:10",
  "1200x630": "16:9",
};

// ---------------------------------------------------------------------------
// SVGO optimization
// ---------------------------------------------------------------------------

function optimizeSvg(svgContent: string): string {
  const result = optimize(svgContent, {
    multipass: true,
    plugins: [
      "preset-default",
      "removeDimensions",
      "removeXMLProcInst",
      "sortAttrs",
      { name: "removeAttrs", params: { attrs: ["data-*", "class"] } },
    ],
  });
  return result.data;
}

// ---------------------------------------------------------------------------
// API client
// ---------------------------------------------------------------------------

function getApiKey(): string {
  const key = process.env.RECRAFT_API_KEY;
  if (!key) {
    console.error("Set RECRAFT_API_KEY in your environment.");
    console.error("Get one from https://app.recraft.ai/profile/api");
    process.exit(1);
  }
  return key;
}

const MAX_PROMPT_LENGTH = 1000;

async function generateImage(apiKey: string, prompt: string, aspectRatio: string): Promise<string> {
  const size = AR_MAP[aspectRatio] || "1:1";

  const bodyObj: Record<string, unknown> = {
    prompt: prompt.length > MAX_PROMPT_LENGTH ? prompt.slice(0, MAX_PROMPT_LENGTH - 1).trim() : prompt,
    model: RECRAFT_MODEL,
    style: RECRAFT_STYLE,
    size,
    response_format: "url",
    controls: {
      colors: [{ rgb: [0, 0, 0] }],
    },
  };

  if (process.env.RECRAFT_STYLE_ID) {
    delete bodyObj.style;
    bodyObj.style_id = process.env.RECRAFT_STYLE_ID;
  }

  const body = JSON.stringify(bodyObj);
  const url = new URL(`${API_BASE}/images/generations`);

  return new Promise((resolve, reject) => {
    const req = https.request(
      url.toString(),
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body, "utf-8"),
        },
      },
      (res) => {
        let data = "";
        res.on("data", (ch) => (data += ch));
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (res.statusCode && res.statusCode >= 400) {
              reject(new Error(`API ${res.statusCode}: ${json.message || data.slice(0, 200)}`));
              return;
            }
            const imageUrl = json.data?.[0]?.url;
            if (!imageUrl) {
              reject(new Error("No image URL in response"));
              return;
            }
            resolve(imageUrl);
          } catch {
            reject(new Error(`Invalid JSON: ${data.slice(0, 200)}`));
          }
        });
      }
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function downloadSvg(imageUrl: string): Promise<string> {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status} downloading SVG`);
  return res.text();
}

async function generateWithRetry(
  apiKey: string,
  prompt: string,
  aspectRatio: string,
): Promise<string> {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await generateImage(apiKey, prompt, aspectRatio);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("402")) {
        throw new Error("Insufficient API credits — top up at https://app.recraft.ai/profile/api");
      }
      if (attempt === MAX_RETRIES) throw err;
      console.warn(`  retry ${attempt + 1}/${MAX_RETRIES} in ${DELAY_MS * 2}ms...`);
      await sleep(DELAY_MS * 2);
    }
  }
  throw new Error("Unreachable");
}

// ---------------------------------------------------------------------------
// Prompt building
// ---------------------------------------------------------------------------

function buildPrompt(character: Character, assetType: AssetType): string {
  const isScene = (SCENE_ASSETS as string[]).includes(assetType) ||
    ["friendships", "parenthood", "workplace"].includes(assetType);

  if (isScene) {
    return character.scenePrompts[assetType as SceneType] ?? character.characterPrompt;
  }

  if (assetType === "avatar") {
    const name = character.name.replace(/^The\s+/i, "");
    return `Minimalist line art portrait icon of a person representing ${name}, ${STYLE_DIRECTIVES.avatar}, ${character.essence.toLowerCase()}`;
  }

  const modifier = ASSET_MODIFIERS[assetType];
  const suffixPart = modifier.suffix ? ` ${modifier.suffix}` : "";
  return `${character.characterPrompt}${suffixPart}`.trim();
}

function getAspectRatio(assetType: AssetType): string {
  return ASSET_MODIFIERS[assetType].ar;
}

function getOutputPath(publicDir: string, code: TypeCode, asset: AssetType): string {
  const lower = code.toLowerCase();
  return path.join(publicDir, lower, `${lower}-${asset}.svg`);
}

// ---------------------------------------------------------------------------
// CLI parsing
// ---------------------------------------------------------------------------

type Phase = "reveals" | "avatars" | "scenes" | "all";

function parseArgs(): {
  dryRun: boolean;
  force: boolean;
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
    force: args.includes("--force"),
    type: get("type").toUpperCase() as TypeCode | "",
    asset: get("asset") as AssetType | "",
    phase: (get("phase") || "all") as Phase,
    limit: parseInt(get("limit") || "0", 10) || 9999,
    publicDir: path.join(__dirname, "..", "public", "characters"),
  };
}

function* listJobs(phase: Phase, typeFilter: TypeCode | ""): Generator<{ code: TypeCode; asset: AssetType }> {
  const types: TypeCode[] = typeFilter ? [typeFilter] : [...TYPE_CODES];

  if (phase === "all" || phase === "reveals") {
    for (const code of types) yield { code, asset: "reveal" };
  }
  if (phase === "all" || phase === "avatars") {
    for (const code of types) yield { code, asset: "avatar" };
  }
  if (phase === "all" || phase === "scenes") {
    for (const asset of SCENE_ASSETS) {
      for (const code of types) yield { code, asset };
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runOne(
  apiKey: string,
  code: TypeCode,
  asset: AssetType,
  publicDir: string,
  force: boolean,
): Promise<boolean> {
  const outPath = getOutputPath(publicDir, code, asset);

  if (fs.existsSync(outPath) && !force) {
    console.log(`  skip (exists): ${path.relative(process.cwd(), outPath)}`);
    return false;
  }

  const character = CHARACTERS[code];
  const prompt = buildPrompt(character, asset);
  const ar = getAspectRatio(asset);

  const imageUrl = await generateWithRetry(apiKey, prompt, ar);
  const rawSvg = await downloadSvg(imageUrl);
  const optimizedSvg = optimizeSvg(rawSvg);

  const dir = path.dirname(outPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outPath, optimizedSvg, "utf-8");

  console.log(`  saved: ${path.relative(process.cwd(), outPath)} (${(optimizedSvg.length / 1024).toFixed(1)}KB)`);
  return true;
}

async function main() {
  const opts = parseArgs();

  if (opts.asset && opts.type) {
    if (opts.dryRun) {
      const char = CHARACTERS[opts.type];
      if (!char) {
        console.error(`Unknown type: ${opts.type}`);
        process.exit(1);
      }
      const prompt = buildPrompt(char, opts.asset);
      console.log("Dry run — would send prompt:");
      console.log(prompt.slice(0, 500) + (prompt.length > 500 ? "..." : ""));
      console.log(`\nAspect ratio: ${getAspectRatio(opts.asset)} -> ${AR_MAP[getAspectRatio(opts.asset)] || getAspectRatio(opts.asset)}`);
      console.log(`Model: ${RECRAFT_MODEL}`);
      console.log(`Style: ${process.env.RECRAFT_STYLE_ID || RECRAFT_STYLE}`);
      console.log(`Output: ${getOutputPath(opts.publicDir, opts.type, opts.asset)}`);
      return;
    }

    const apiKey = getApiKey();
    console.log(`Generating ${opts.type} ${opts.asset}...`);
    await runOne(apiKey, opts.type, opts.asset, opts.publicDir, opts.force);
    return;
  }

  const jobs = [...listJobs(opts.phase, opts.type)].slice(0, opts.limit);

  console.log("╔═══════════════════════════════════════════════╗");
  console.log("║  MBTI Character SVG Generator — Line Art      ║");
  console.log("╚═══════════════════════════════════════════════╝\n");
  console.log(`  Model:    ${RECRAFT_MODEL}`);
  console.log(`  Style:    ${process.env.RECRAFT_STYLE_ID || RECRAFT_STYLE}`);
  console.log(`  Output:   SVG (optimized with SVGO)`);
  console.log(`  Jobs:     ${jobs.length}`);
  console.log(`  Est cost: $${(jobs.length * 0.08).toFixed(2)}\n`);

  if (opts.dryRun) {
    console.log("DRY RUN — listing jobs:\n");
    for (const { code, asset } of jobs.slice(0, 10)) {
      console.log(`  ${code.padEnd(6)} ${asset.padEnd(16)} ${getOutputPath(opts.publicDir, code, asset)}`);
    }
    if (jobs.length > 10) console.log(`  ... and ${jobs.length - 10} more`);
    return;
  }

  const apiKey = getApiKey();
  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < jobs.length; i++) {
    const { code, asset } = jobs[i];
    process.stdout.write(`[${i + 1}/${jobs.length}] ${code} ${asset.padEnd(16)} `);

    try {
      const didGenerate = await runOne(apiKey, code, asset, opts.publicDir, opts.force);
      if (didGenerate) {
        generated++;
        await sleep(DELAY_MS);
      } else {
        skipped++;
      }
    } catch (e) {
      failed++;
      console.log(`  ERROR: ${e instanceof Error ? e.message : e}`);
      await sleep(2000);
    }
  }

  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`  Generated: ${generated}`);
  console.log(`  Skipped:   ${skipped}`);
  console.log(`  Failed:    ${failed}`);
  console.log(`  Cost:      ~$${(generated * 0.08).toFixed(2)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
