#!/usr/bin/env npx tsx
// ============================================================================
// Production Tracker CLI
// ============================================================================
// View and update the status of character asset production.
//
// Usage:
//   npx tsx scripts/track-progress.ts                       # Show summary
//   npx tsx scripts/track-progress.ts --status              # Full status table
//   npx tsx scripts/track-progress.ts --set intj-portrait complete "https://cdn.midjourney.com/..."
//   npx tsx scripts/track-progress.ts --set-sref "https://cdn.midjourney.com/..."
//   npx tsx scripts/track-progress.ts --set-cref INTJ "https://cdn.midjourney.com/..."
//   npx tsx scripts/track-progress.ts --export-crefs        # Export cref URLs as JSON for prompt generator
//   npx tsx scripts/track-progress.ts --phase portraits     # Show status for a specific phase
// ============================================================================

import * as fs from "fs";
import * as path from "path";

const TRACKER_PATH = path.join(__dirname, "production-tracker.json");

type AssetStatus = "pending" | "in-progress" | "complete" | "needs-redo";

interface AssetEntry {
  status: AssetStatus;
  midjourneyUrl: string;
  notes: string;
}

interface TrackerData {
  styleRef: string;
  midjourneyVersion: string;
  characterRefs: Record<string, string>;
  assets: Record<string, AssetEntry>;
}

function loadTracker(): TrackerData {
  return JSON.parse(fs.readFileSync(TRACKER_PATH, "utf-8"));
}

function saveTracker(data: TrackerData) {
  fs.writeFileSync(TRACKER_PATH, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

function showSummary(data: TrackerData) {
  const entries = Object.values(data.assets);
  const total = entries.length;
  const complete = entries.filter((e) => e.status === "complete").length;
  const inProgress = entries.filter((e) => e.status === "in-progress").length;
  const needsRedo = entries.filter((e) => e.status === "needs-redo").length;
  const pending = entries.filter((e) => e.status === "pending").length;

  const pct = total > 0 ? Math.round((complete / total) * 100) : 0;
  const bar = "█".repeat(Math.round(pct / 2)) + "░".repeat(50 - Math.round(pct / 2));

  console.log("\n=== Character Production Tracker ===\n");
  console.log(`Style Ref: ${data.styleRef || "(not set)"}`);
  console.log(`MJ Version: ${data.midjourneyVersion}`);

  const crefCount = Object.values(data.characterRefs).filter(Boolean).length;
  console.log(`Character Refs: ${crefCount}/16 set\n`);

  console.log(`Progress: [${bar}] ${pct}%`);
  console.log(`  Complete:    ${complete}`);
  console.log(`  In Progress: ${inProgress}`);
  console.log(`  Needs Redo:  ${needsRedo}`);
  console.log(`  Pending:     ${pending}`);
  console.log(`  Total:       ${total}\n`);

  // Per-type summary
  const types = [
    "intj", "intp", "entj", "entp",
    "infj", "infp", "enfj", "enfp",
    "istj", "isfj", "estj", "esfj",
    "istp", "isfp", "estp", "esfp",
  ];

  console.log("Per-type progress:");
  for (const type of types) {
    const typeAssets = Object.entries(data.assets).filter(([k]) => k.startsWith(type + "-"));
    const typeComplete = typeAssets.filter(([, v]) => v.status === "complete").length;
    const typeTotal = typeAssets.length;
    const typePct = typeTotal > 0 ? Math.round((typeComplete / typeTotal) * 100) : 0;
    const miniBar = "█".repeat(Math.round(typePct / 10)) + "░".repeat(10 - Math.round(typePct / 10));
    const cref = data.characterRefs[type.toUpperCase()] ? "✓" : "·";
    console.log(`  ${type.toUpperCase()} [${miniBar}] ${typeComplete}/${typeTotal} (cref: ${cref})`);
  }

  // Global assets
  const globalAssets = Object.entries(data.assets).filter(
    ([k]) => k.startsWith("global-") || k.startsWith("group-")
  );
  const globalComplete = globalAssets.filter(([, v]) => v.status === "complete").length;
  console.log(`\n  Global/Groups: ${globalComplete}/${globalAssets.length}`);
}

function showFullStatus(data: TrackerData, filter?: string) {
  console.log("\n=== Full Asset Status ===\n");

  const statusIcon: Record<string, string> = {
    pending: "  ",
    "in-progress": "⏳",
    complete: "✅",
    "needs-redo": "🔄",
  };

  let entries = Object.entries(data.assets);
  if (filter) {
    entries = entries.filter(([k]) => k.includes(filter));
  }

  for (const [key, entry] of entries) {
    const icon = statusIcon[entry.status] || "  ";
    const url = entry.midjourneyUrl ? ` → ${entry.midjourneyUrl.slice(0, 60)}...` : "";
    const notes = entry.notes ? ` (${entry.notes})` : "";
    console.log(`${icon} ${key}: ${entry.status}${url}${notes}`);
  }
  console.log(`\nShowing ${entries.length} assets`);
}

function setAssetStatus(
  data: TrackerData,
  assetKey: string,
  status: AssetStatus,
  url?: string,
  notes?: string
) {
  if (!data.assets[assetKey]) {
    console.error(`Unknown asset key: ${assetKey}`);
    console.error("Available keys include:", Object.keys(data.assets).slice(0, 5).join(", "), "...");
    process.exit(1);
  }

  data.assets[assetKey].status = status;
  if (url) data.assets[assetKey].midjourneyUrl = url;
  if (notes) data.assets[assetKey].notes = notes;

  saveTracker(data);
  console.log(`Updated ${assetKey} → ${status}${url ? " (URL saved)" : ""}`);
}

function setStyleRef(data: TrackerData, url: string) {
  data.styleRef = url;
  saveTracker(data);
  console.log(`Style reference set: ${url}`);
}

function setCharacterRef(data: TrackerData, typeCode: string, url: string) {
  const upper = typeCode.toUpperCase();
  if (!data.characterRefs.hasOwnProperty(upper)) {
    console.error(`Unknown type code: ${upper}`);
    process.exit(1);
  }
  data.characterRefs[upper] = url;
  saveTracker(data);
  console.log(`Character ref for ${upper} set: ${url}`);
}

function exportCrefs(data: TrackerData) {
  const crefPath = path.join(__dirname, "cref-urls.json");
  fs.writeFileSync(crefPath, JSON.stringify(data.characterRefs, null, 2) + "\n", "utf-8");
  console.log(`Character reference URLs exported to: ${crefPath}`);
  console.log("Use with prompt generator: npx tsx scripts/generate-prompts.ts --cref-file scripts/cref-urls.json");
}

function showPhase(data: TrackerData, phase: string) {
  const phaseAssets: Record<string, string[]> = {
    portraits: ["portrait"],
    reveals: ["reveal"],
    avatars: ["avatar"],
    banners: ["hero-banner"],
    scenes: ["strengths", "relationships", "friendships", "parenthood", "career", "workplace", "growth"],
    social: ["social-card"],
    global: ["global-", "group-"],
  };

  const assetSuffixes = phaseAssets[phase];
  if (!assetSuffixes) {
    console.error(`Unknown phase: ${phase}`);
    console.error("Available phases:", Object.keys(phaseAssets).join(", "));
    process.exit(1);
  }

  console.log(`\n=== Phase: ${phase} ===\n`);
  showFullStatus(
    data,
    undefined // we'll filter manually
  );

  // Re-implement with proper filtering
  const filtered = Object.entries(data.assets).filter(([k]) =>
    assetSuffixes.some((suffix) =>
      suffix.endsWith("-") ? k.startsWith(suffix) : k.endsWith(`-${suffix}`)
    )
  );

  const statusIcon: Record<string, string> = {
    pending: "  ",
    "in-progress": "⏳",
    complete: "✅",
    "needs-redo": "🔄",
  };

  // Clear the full status output and show filtered
  console.clear();
  console.log(`\n=== Phase: ${phase} ===\n`);
  for (const [key, entry] of filtered) {
    const icon = statusIcon[entry.status] || "  ";
    console.log(`${icon} ${key}: ${entry.status}`);
  }

  const complete = filtered.filter(([, v]) => v.status === "complete").length;
  console.log(`\n${complete}/${filtered.length} complete`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const args = process.argv.slice(2);
  const data = loadTracker();

  if (args.length === 0) {
    showSummary(data);
    return;
  }

  const cmd = args[0];

  switch (cmd) {
    case "--status":
      showFullStatus(data, args[1]);
      break;

    case "--set": {
      const [, assetKey, status, url, ...notesParts] = args;
      setAssetStatus(data, assetKey, status as AssetStatus, url, notesParts.join(" "));
      break;
    }

    case "--set-sref":
      setStyleRef(data, args[1]);
      break;

    case "--set-cref":
      setCharacterRef(data, args[1], args[2]);
      break;

    case "--export-crefs":
      exportCrefs(data);
      break;

    case "--phase":
      showPhase(data, args[1]);
      break;

    default:
      console.log("Unknown command:", cmd);
      console.log("\nUsage:");
      console.log("  npx tsx scripts/track-progress.ts                        # Summary");
      console.log("  npx tsx scripts/track-progress.ts --status               # Full table");
      console.log("  npx tsx scripts/track-progress.ts --status intj          # Filter by type");
      console.log('  npx tsx scripts/track-progress.ts --set intj-portrait complete "URL"');
      console.log('  npx tsx scripts/track-progress.ts --set-sref "URL"');
      console.log('  npx tsx scripts/track-progress.ts --set-cref INTJ "URL"');
      console.log("  npx tsx scripts/track-progress.ts --export-crefs");
      console.log("  npx tsx scripts/track-progress.ts --phase portraits");
  }
}

main();
