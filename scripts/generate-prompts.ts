#!/usr/bin/env npx tsx
// ============================================================================
// Midjourney Prompt Generator
// ============================================================================
// Generates all Midjourney prompts organized by production phase, ready to
// copy-paste into Midjourney Discord or the web app.
//
// Usage:
//   npx tsx scripts/generate-prompts.ts
//   npx tsx scripts/generate-prompts.ts --sref "https://cdn.midjourney.com/..."
//   npx tsx scripts/generate-prompts.ts --phase portraits
//   npx tsx scripts/generate-prompts.ts --type INTJ
//   npx tsx scripts/generate-prompts.ts --phase scenes --sref "URL" --cref-file scripts/cref-urls.json
//
// Flags:
//   --sref <url>          Style reference URL (used on every generation)
//   --cref-file <path>    JSON file mapping type codes to character ref URLs
//   --phase <name>        Only generate prompts for a specific phase
//                          (portraits | reveals | avatars | banners | scenes | global)
//   --type <code>         Only generate prompts for a specific type (e.g. INTJ)
//   --version <ver>       Midjourney version flag (default: 6.1)
//   --out <dir>           Output directory (default: scripts/output/prompts)
// ============================================================================

import * as fs from "fs";
import * as path from "path";

// ---------------------------------------------------------------------------
// Import character data (we inline the import path so this runs standalone)
// ---------------------------------------------------------------------------
import {
  MASTER_PROMPT,
  ASSET_MODIFIERS,
  CHARACTERS,
  TYPE_CODES,
  TYPE_GROUPS,
  type TypeCode,
  type AssetType,
  type SceneType,
  type Character,
} from "../lib/characters";

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--") && i + 1 < args.length) {
      parsed[args[i].slice(2)] = args[i + 1];
      i++;
    }
  }
  return {
    sref: parsed["sref"] || "",
    crefFile: parsed["cref-file"] || "",
    phase: parsed["phase"] || "all",
    type: (parsed["type"]?.toUpperCase() || "") as TypeCode | "",
    version: parsed["version"] || "6.1",
    outDir: parsed["out"] || path.join(__dirname, "output", "prompts"),
  };
}

// ---------------------------------------------------------------------------
// Prompt assembly
// ---------------------------------------------------------------------------

function buildPrompt(opts: {
  character: Character;
  assetType: AssetType;
  sceneOverride?: string;
  sref: string;
  cref: string;
  version: string;
}): string {
  const { character, assetType, sceneOverride, sref, cref, version } = opts;
  const modifier = ASSET_MODIFIERS[assetType];

  // For scene types, the scene prompt IS the character-specific part
  const characterPart = sceneOverride || character.characterPrompt;
  const suffixPart = modifier.suffix ? ` ${modifier.suffix}` : "";

  let prompt = `/imagine ${MASTER_PROMPT} ${characterPart}${suffixPart}`;

  // Add Midjourney flags
  prompt += ` --ar ${modifier.ar}`;
  if (sref) prompt += ` --sref ${sref}`;
  if (cref) prompt += ` --cref ${cref}`;
  prompt += ` --v ${version}`;

  return prompt;
}

// ---------------------------------------------------------------------------
// File writing
// ---------------------------------------------------------------------------

function writePromptFile(outDir: string, filename: string, content: string) {
  fs.mkdirSync(outDir, { recursive: true });
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`  Written: ${filePath}`);
}

// ---------------------------------------------------------------------------
// Phase generators
// ---------------------------------------------------------------------------

function generatePortraits(
  types: TypeCode[],
  sref: string,
  version: string,
  outDir: string
) {
  console.log("\n--- Phase 2: Solo Character Portraits (3:4) ---\n");
  let content = "# Phase 2: Solo Character Portraits\n";
  content += "# Aspect ratio: 3:4 | Use --sref from Phase 1 winner\n\n";

  for (const code of types) {
    const char = CHARACTERS[code];
    const prompt = buildPrompt({
      character: char,
      assetType: "portrait",
      sref,
      cref: "",
      version,
    });
    content += `## ${code} — ${char.name}\n\n${prompt}\n\n---\n\n`;
  }

  writePromptFile(outDir, "phase-2-portraits.md", content);
}

function generateReveals(
  types: TypeCode[],
  sref: string,
  crefs: Record<string, string>,
  version: string,
  outDir: string
) {
  console.log("\n--- Phase 3: Results Reveals (16:9) ---\n");
  let content = "# Phase 3: Results Page Reveals\n";
  content += "# Aspect ratio: 16:9 | Use both --sref and --cref\n\n";

  for (const code of types) {
    const char = CHARACTERS[code];
    const prompt = buildPrompt({
      character: char,
      assetType: "reveal",
      sref,
      cref: crefs[code] || "[THIS CHARACTER'S REF URL]",
      version,
    });
    content += `## ${code} — ${char.name}\n\n${prompt}\n\n---\n\n`;
  }

  writePromptFile(outDir, "phase-3-reveals.md", content);
}

function generateAvatars(
  types: TypeCode[],
  sref: string,
  crefs: Record<string, string>,
  version: string,
  outDir: string
) {
  console.log("\n--- Phase 4: Avatars (1:1) ---\n");
  let content = "# Phase 4: Character Avatars\n";
  content += "# Aspect ratio: 1:1 | Use both --sref and --cref\n";
  content += "# Pro tip: Try cropping the portrait first before generating\n\n";

  for (const code of types) {
    const char = CHARACTERS[code];
    const prompt = buildPrompt({
      character: char,
      assetType: "avatar",
      sref,
      cref: crefs[code] || "[THIS CHARACTER'S REF URL]",
      version,
    });
    content += `## ${code} — ${char.name}\n\n${prompt}\n\n---\n\n`;
  }

  writePromptFile(outDir, "phase-4-avatars.md", content);
}

function generateBanners(
  types: TypeCode[],
  sref: string,
  crefs: Record<string, string>,
  version: string,
  outDir: string
) {
  console.log("\n--- Phase 5: Hero Banners (32:9) ---\n");
  let content = "# Phase 5: Hero Banners\n";
  content += "# Aspect ratio: 32:9 | Use both --sref and --cref\n\n";

  for (const code of types) {
    const char = CHARACTERS[code];
    const prompt = buildPrompt({
      character: char,
      assetType: "hero-banner",
      sref,
      cref: crefs[code] || "[THIS CHARACTER'S REF URL]",
      version,
    });
    content += `## ${code} — ${char.name}\n\n${prompt}\n\n---\n\n`;
  }

  writePromptFile(outDir, "phase-5-hero-banners.md", content);
}

function generateScenes(
  types: TypeCode[],
  sref: string,
  crefs: Record<string, string>,
  version: string,
  outDir: string
) {
  console.log("\n--- Phase 8: Article Scenes (16:10) ---\n");

  const sceneTypes: SceneType[] = [
    "strengths",
    "relationships",
    "friendships",
    "parenthood",
    "career",
    "workplace",
    "growth",
  ];

  // Batch by scene type (not by character) as recommended in the style guide
  for (const scene of sceneTypes) {
    let content = `# Phase 8: ${scene.charAt(0).toUpperCase() + scene.slice(1)} Scenes\n`;
    content += `# Aspect ratio: 16:10 | Use both --sref and --cref\n\n`;

    for (const code of types) {
      const char = CHARACTERS[code];
      const scenePrompt = char.scenePrompts[scene];
      const prompt = buildPrompt({
        character: char,
        assetType: scene as AssetType,
        sceneOverride: scenePrompt,
        sref,
        cref: crefs[code] || "[THIS CHARACTER'S REF URL]",
        version,
      });
      content += `## ${code} — ${char.name}\n\n${prompt}\n\n---\n\n`;
    }

    writePromptFile(outDir, `phase-8-scenes-${scene}.md`, content);
  }
}

function generateGlobal(sref: string, version: string, outDir: string) {
  console.log("\n--- Phase 6/9: Global & Shared Assets ---\n");
  let content = "# Global & Shared Assets\n\n";

  // Homepage World Scene
  content += "## Homepage World Scene (Option B: Atmospheric)\n\n";
  content += `/imagine ${MASTER_PROMPT} A magical miniature village at golden hour, `;
  content += "seen from a gentle aerial perspective. Different areas of the village represent ";
  content += "different temperaments — a library-workshop quarter, a garden district, an organized ";
  content += "town center, and a wild creative quarter. Tiny figures going about their lives, ";
  content += "warm lights glowing from windows, a sense of harmony and diversity. A world where ";
  content += `every personality has a place. --ar 16:9 ${sref ? `--sref ${sref} ` : ""}--v ${version}\n\n---\n\n`;

  // Group Banners
  for (const group of TYPE_GROUPS) {
    const chars = group.codes.map((c) => CHARACTERS[c]);
    const charDescs = chars
      .map((ch) => `a figure representing ${ch.name} (${ch.code})`)
      .join(", ");

    content += `## Group Banner: ${group.label}\n\n`;
    content += `/imagine ${MASTER_PROMPT} Four distinct claymation characters standing `;
    content += `together: ${charDescs}. Group portrait, each character distinct, `;
    content += `warm camaraderie. --ar 32:9 ${sref ? `--sref ${sref} ` : ""}--v ${version}\n\n---\n\n`;
  }

  // Framework illustrations
  const frameworks = [
    { name: "Big Five / OCEAN", prompt: "Five figures standing on a spectrum/gradient, each embodying a different personality trait — one wildly creative, one meticulously organized, one warmly social, one deeply agreeable, one anxiously alert. Scientific diagram feeling rendered in miniature world style." },
    { name: "Personality Types", prompt: "A grid of 16 tiny dioramas viewed from above, like looking into an apartment building where each room reveals a different personality world. Warm bird's-eye perspective." },
    { name: "Enneagram", prompt: "Nine distinct figures arranged in the enneagram circle/star pattern, each with a unique posture and expression. Geometric yet warm, sacred geometry in miniature." },
    { name: "Work Style", prompt: "Four figures collaborating in a workplace, each working in a distinctly different style — one at a whiteboard, one organizing files, one in deep conversation, one tinkering with tools." },
    { name: "Western Astrology", prompt: "A character looking up at a night sky filled with detailed constellations, standing on a hill with an astrolabe. Stars glow warmly, zodiac patterns visible." },
    { name: "Vedic Astrology", prompt: "A character in a traditional setting with detailed star charts and ancient texts, warm candlelight illuminating Jyotish symbols and planetary diagrams." },
    { name: "Numerology", prompt: "A character surrounded by glowing numbers and mathematical patterns, standing in a room where digits float and form meaningful sequences in warm light." },
    { name: "Human Design", prompt: "A character with their bodygraph visible as a glowing overlay — energy centers lit up in warm colors, channels connecting them. Mystical yet precise." },
    { name: "Chinese Zodiac", prompt: "Twelve small animal figures arranged in a circle on a jade platform, each with distinct personality. Warm lantern light, festive yet ancient atmosphere." },
    { name: "Mayan Astrology", prompt: "A character standing before a Tzolkin calendar stone, ancient glyphs glowing with warm amber light. Jungle setting, mystical atmosphere." },
  ];

  for (const fw of frameworks) {
    content += `## Framework: ${fw.name}\n\n`;
    content += `/imagine ${MASTER_PROMPT} ${fw.prompt} --ar 16:9 ${sref ? `--sref ${sref} ` : ""}--v ${version}\n\n---\n\n`;
  }

  // AI Mirror
  content += "## AI Mirror / Chat Interface\n\n";
  content += `/imagine ${MASTER_PROMPT} A claymation figure looking into an ornate golden mirror. `;
  content += "Instead of their reflection, the mirror shows a kaleidoscope of different tiny ";
  content += "versions of themselves — one reading stars, one meditating, one surrounded by numbers, ";
  content += "one with a glowing bodygraph. The mirror frame is decorated with zodiac symbols, ";
  content += "numbers, and personality icons. Magical, self-reflective mood. ";
  content += `--ar 1:1 ${sref ? `--sref ${sref} ` : ""}--v ${version}\n\n---\n\n`;

  // Quiz Progress
  const quizStages = [
    "A small claymation figure at the beginning of a winding path through a misty miniature landscape. The path ahead is hazy and undefined. The mood is curious and uncertain — the journey is just beginning.",
    "A small claymation figure a quarter of the way along a winding path. The mist is clearing slightly, revealing hints of the landscape. Small landmarks visible. Growing confidence.",
    "A small claymation figure halfway along the path. The landscape is becoming detailed and colorful. The figure walks with more purpose. Halfway to discovery.",
    "A small claymation figure nearly at the end of the path, approaching a glowing doorway. The landscape is vivid and clear. Anticipation and excitement. The answer is close.",
  ];

  quizStages.forEach((stage, i) => {
    content += `## Quiz Progress ${i + 1}/4\n\n`;
    content += `/imagine ${MASTER_PROMPT} ${stage} --ar 2:1 ${sref ? `--sref ${sref} ` : ""}--v ${version}\n\n---\n\n`;
  });

  // Error States
  const errorStates = [
    { name: "404 / Page Not Found", prompt: "A confused claymation figure looking at a completely blank map, scratching their head, surrounded by an empty miniature diorama with no furniture or details yet. Charming and funny, not frustrating." },
    { name: "Empty State", prompt: "A claymation figure sitting in an empty diorama, waiting patiently on a small chair. Nothing built yet. The figure looks expectant and hopeful, like they're waiting for their world to be created." },
    { name: "Loading / Generating", prompt: "A claymation figure building their diorama piece by piece — placing tiny furniture, painting walls, arranging miniature objects. A world under construction, cheerful and industrious." },
  ];

  for (const err of errorStates) {
    content += `## Error State: ${err.name}\n\n`;
    content += `/imagine ${MASTER_PROMPT} ${err.prompt} --ar 1:1 ${sref ? `--sref ${sref} ` : ""}--v ${version}\n\n---\n\n`;
  }

  writePromptFile(outDir, "phase-6-9-global.md", content);
}

// ---------------------------------------------------------------------------
// Phase 1: Style Establishment (always included as guidance)
// ---------------------------------------------------------------------------

function generateStyleEstablishment(version: string, outDir: string) {
  console.log("\n--- Phase 1: Style Establishment ---\n");

  let content = "# Phase 1: Nail the Style\n\n";
  content += "## Step 1: Generate the first image\n\n";
  content += "Start with The Harmonizer (INFP) — the cozy attic room gives Midjourney a lot to work with.\n\n";
  content += `/imagine ${MASTER_PROMPT} ${CHARACTERS.INFP.characterPrompt} --ar 3:4 --v ${version}\n\n`;
  content += "---\n\n";
  content += "## Step 2: Iterate\n\n";
  content += "If the result isn't right:\n\n";
  content += "- **Too photorealistic?** Add: `handcrafted clay texture, visible sculpting marks, matte painted surfaces`\n";
  content += "- **Too flat/cartoony?** Add: `volumetric lighting, subsurface scattering, detailed material textures`\n";
  content += "- **Wrong vibe?** Adjust mood words in the character prompt\n";
  content += "- **Wrong proportions?** Add: `chibi proportions` (more exaggerated) or `slightly stylized proportions` (more realistic)\n\n";
  content += "## Step 3: Save the winner\n\n";
  content += "Upscale your favorite (U button), save the URL — this becomes your `--sref` for everything.\n\n";
  content += "Then re-run this script with: `npx tsx scripts/generate-prompts.ts --sref <YOUR_URL>`\n";

  writePromptFile(outDir, "phase-1-style.md", content);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const opts = parseArgs();
  console.log("=== Midjourney Prompt Generator ===");
  console.log(`Style ref: ${opts.sref || "(not set)"}`);
  console.log(`Phase: ${opts.phase}`);
  console.log(`Type filter: ${opts.type || "all"}`);
  console.log(`MJ version: ${opts.version}`);
  console.log(`Output: ${opts.outDir}`);

  // Load character reference URLs if provided
  let crefs: Record<string, string> = {};
  if (opts.crefFile && fs.existsSync(opts.crefFile)) {
    crefs = JSON.parse(fs.readFileSync(opts.crefFile, "utf-8"));
    console.log(`Loaded ${Object.keys(crefs).length} character refs from ${opts.crefFile}`);
  }

  // Filter types if --type is specified
  const types: TypeCode[] = opts.type
    ? TYPE_CODES.filter((c) => c === opts.type)
    : [...TYPE_CODES];

  if (types.length === 0) {
    console.error(`Unknown type code: ${opts.type}`);
    process.exit(1);
  }

  const phase = opts.phase;

  // Always generate Phase 1 guidance
  if (phase === "all" || phase === "style") {
    generateStyleEstablishment(opts.version, opts.outDir);
  }

  if (phase === "all" || phase === "portraits") {
    generatePortraits(types, opts.sref, opts.version, opts.outDir);
  }

  if (phase === "all" || phase === "reveals") {
    generateReveals(types, opts.sref, crefs, opts.version, opts.outDir);
  }

  if (phase === "all" || phase === "avatars") {
    generateAvatars(types, opts.sref, crefs, opts.version, opts.outDir);
  }

  if (phase === "all" || phase === "banners") {
    generateBanners(types, opts.sref, crefs, opts.version, opts.outDir);
  }

  if (phase === "all" || phase === "scenes") {
    generateScenes(types, opts.sref, crefs, opts.version, opts.outDir);
  }

  if (phase === "all" || phase === "global") {
    generateGlobal(opts.sref, opts.version, opts.outDir);
  }

  console.log("\nDone! Prompts written to:", opts.outDir);

  // Print summary
  const files = fs.readdirSync(opts.outDir).filter((f) => f.endsWith(".md"));
  console.log(`\nGenerated ${files.length} prompt files:`);
  files.forEach((f) => console.log(`  - ${f}`));
}

main();
