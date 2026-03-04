#!/usr/bin/env npx tsx
// ============================================================================
// Generate character assets for ANY personality framework as SVG line-art
// ============================================================================
// Reads character metadata from framework-characters.json and generates
// clean black-on-white SVG illustrations via the Recraft V3 vector API.
//
// Usage:
//   npx tsx scripts/generate-framework-assets.ts --framework big5 --dry-run
//   npx tsx scripts/generate-framework-assets.ts --framework big5
//   npx tsx scripts/generate-framework-assets.ts --framework big5 --type o-high --asset reveal
//   npx tsx scripts/generate-framework-assets.ts --framework enneagram
//   npx tsx scripts/generate-framework-assets.ts --framework western-astro --limit 5
//   npx tsx scripts/generate-framework-assets.ts --framework all
// ============================================================================

import * as fs from "fs";
import * as path from "path";
import * as https from "https";
import { optimize } from "svgo";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const API_BASE = "https://external.api.recraft.ai/v1";
const RECRAFT_MODEL = "recraftv3_vector";
const RECRAFT_STYLE = "Line art";
const DELAY_MS = 600;
const MAX_PROMPT_LENGTH = 1000;
const MAX_RETRIES = 2;

type AssetKind = "reveal" | "avatar" | "strengths" | "relationships" | "career" | "growth";

const ASSET_CONFIG: Record<AssetKind, { suffix: string; ar: string; recraftSize: string }> = {
  reveal: {
    suffix: "Wide composition, figure in their environment facing the viewer, bold framing.",
    ar: "16:9",
    recraftSize: "16:9",
  },
  avatar: {
    suffix: "",
    ar: "1:1",
    recraftSize: "1:1",
  },
  strengths: { suffix: "", ar: "14:10", recraftSize: "14:10" },
  relationships: { suffix: "", ar: "14:10", recraftSize: "14:10" },
  career: { suffix: "", ar: "14:10", recraftSize: "14:10" },
  growth: { suffix: "", ar: "14:10", recraftSize: "14:10" },
};

const ALL_ASSETS: AssetKind[] = ["reveal", "avatar", "strengths", "relationships", "career", "growth"];

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
// Load config
// ---------------------------------------------------------------------------

interface FrameworkType {
  name: string;
  characterPrompt: string;
  scenePrompts: Record<string, string>;
}

interface FrameworkConfig {
  masterPrompt: string;
  avatarPrompt: string;
  frameworks: Record<string, { types: Record<string, FrameworkType> }>;
}

function loadConfig(): FrameworkConfig {
  const configPath = path.join(__dirname, "framework-characters.json");
  return JSON.parse(fs.readFileSync(configPath, "utf-8"));
}

// ---------------------------------------------------------------------------
// API client
// ---------------------------------------------------------------------------

function getApiKey(): string {
  const key = process.env.RECRAFT_API_KEY;
  if (!key) {
    console.error("Set RECRAFT_API_KEY in your environment.");
    process.exit(1);
  }
  return key;
}

async function generateImage(apiKey: string, prompt: string, size: string): Promise<string> {
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
  size: string,
): Promise<string> {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await generateImage(apiKey, prompt, size);
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

function buildPrompt(config: FrameworkConfig, typeData: FrameworkType, asset: AssetKind): string {
  const isScene = ["strengths", "relationships", "career", "growth"].includes(asset);

  if (isScene) {
    return typeData.scenePrompts[asset] ?? typeData.characterPrompt;
  }

  if (asset === "avatar") {
    return `Minimalist line art portrait icon of a person representing ${typeData.name}, ${config.avatarPrompt}, focused and symbolic`;
  }

  const assetCfg = ASSET_CONFIG[asset];
  const suffixPart = assetCfg.suffix ? ` ${assetCfg.suffix}` : "";
  return `${typeData.characterPrompt}${suffixPart}`.trim();
}

function getOutputPath(framework: string, typeKey: string, asset: AssetKind): string {
  return path.join(__dirname, "..", "public", "characters", framework, typeKey, `${typeKey}-${asset}.svg`);
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const get = (k: string) => {
    const i = args.indexOf(`--${k}`);
    return i >= 0 && i + 1 < args.length ? args[i + 1] : "";
  };
  return {
    dryRun: args.includes("--dry-run"),
    force: args.includes("--force"),
    framework: get("framework") || "",
    type: get("type") || "",
    asset: (get("asset") || "") as AssetKind | "",
    limit: parseInt(get("limit") || "0", 10) || 9999,
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const opts = parseArgs();
  const config = loadConfig();

  if (!opts.framework) {
    console.error("Usage: --framework <name|all> [--type <key>] [--asset <type>] [--dry-run] [--force] [--limit N]");
    console.error("\nAvailable frameworks:", Object.keys(config.frameworks).join(", "));
    process.exit(1);
  }

  const frameworkKeys = opts.framework === "all"
    ? Object.keys(config.frameworks)
    : [opts.framework];

  for (const fk of frameworkKeys) {
    const fw = config.frameworks[fk];
    if (!fw) {
      console.error(`Unknown framework: ${fk}`);
      continue;
    }

    const typeKeys = opts.type ? [opts.type] : Object.keys(fw.types);
    const assets = opts.asset ? [opts.asset] : ALL_ASSETS;

    const jobs: { typeKey: string; asset: AssetKind }[] = [];
    for (const asset of assets) {
      for (const typeKey of typeKeys) {
        jobs.push({ typeKey, asset });
      }
    }

    const limitedJobs = jobs.slice(0, opts.limit);

    console.log(`\n╔═══════════════════════════════════════════════╗`);
    console.log(`║  ${fk.toUpperCase().padEnd(44)}║`);
    console.log(`╚═══════════════════════════════════════════════╝`);
    console.log(`  Model:    ${RECRAFT_MODEL}`);
    console.log(`  Style:    ${process.env.RECRAFT_STYLE_ID || RECRAFT_STYLE}`);
    console.log(`  Output:   SVG (optimized with SVGO)`);
    console.log(`  Types:    ${typeKeys.length}`);
    console.log(`  Assets:   ${assets.length} per type`);
    console.log(`  Jobs:     ${limitedJobs.length}`);
    console.log(`  Est cost: $${(limitedJobs.length * 0.08).toFixed(2)}\n`);

    if (opts.dryRun) {
      for (const { typeKey, asset } of limitedJobs.slice(0, 10)) {
        const t = fw.types[typeKey];
        console.log(`  ${typeKey.padEnd(16)} ${asset.padEnd(16)} ${t?.name ?? "???"}`);
      }
      if (limitedJobs.length > 10) console.log(`  ... and ${limitedJobs.length - 10} more`);
      continue;
    }

    const apiKey = getApiKey();
    let generated = 0, skipped = 0, failed = 0;

    for (let i = 0; i < limitedJobs.length; i++) {
      const { typeKey, asset } = limitedJobs[i];
      const typeData = fw.types[typeKey];
      if (!typeData) {
        console.log(`  [${i + 1}/${limitedJobs.length}] ${typeKey} — unknown type, skipping`);
        continue;
      }

      const outPath = getOutputPath(fk, typeKey, asset);
      process.stdout.write(`[${i + 1}/${limitedJobs.length}] ${typeKey.padEnd(16)} ${asset.padEnd(16)} `);

      if (fs.existsSync(outPath) && !opts.force) {
        console.log(`skip (exists)`);
        skipped++;
        continue;
      }

      try {
        const prompt = buildPrompt(config, typeData, asset);
        const imageUrl = await generateWithRetry(apiKey, prompt, ASSET_CONFIG[asset].recraftSize);
        const rawSvg = await downloadSvg(imageUrl);
        const optimizedSvg = optimizeSvg(rawSvg);

        const dir = path.dirname(outPath);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(outPath, optimizedSvg, "utf-8");

        console.log(`saved (${(optimizedSvg.length / 1024).toFixed(1)}KB)`);
        generated++;
        await sleep(DELAY_MS);
      } catch (e) {
        console.log(`ERROR: ${e instanceof Error ? e.message : e}`);
        failed++;
        await sleep(2000);
      }
    }

    console.log(`\n  Generated: ${generated}  Skipped: ${skipped}  Failed: ${failed}  Cost: ~$${(generated * 0.08).toFixed(2)}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
