import type { FocusDimensionId, FocusLevel } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Level thresholds                                                   */
/* ------------------------------------------------------------------ */

export function toLevel(score: number): FocusLevel {
  if (score >= 70) return "high";
  if (score >= 40) return "moderate";
  return "low";
}

/* ------------------------------------------------------------------ */
/*  Overall focus labels                                               */
/* ------------------------------------------------------------------ */

export function getOverallLabel(score: number): string {
  if (score >= 80) return "Peak Focus";
  if (score >= 65) return "Strong Focus";
  if (score >= 45) return "Moderate Focus";
  return "Developing Focus";
}

/* ------------------------------------------------------------------ */
/*  Dimension metadata                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_META: Record<
  FocusDimensionId,
  {
    label: string;
    shortLabel: string;
    color: string;
    summaryAdjectives: { high: string; moderate: string; low: string };
  }
> = {
  "deep-focus": {
    label: "Deep Focus",
    shortLabel: "Deep Focus",
    color: "#315E36",
    summaryAdjectives: { high: "intensely concentrated", moderate: "selectively focused", low: "easily pulled away" },
  },
  "task-switching": {
    label: "Task Switching",
    shortLabel: "Task Switching",
    color: "#C97A30",
    summaryAdjectives: { high: "cognitively agile", moderate: "adaptable under guidance", low: "preferring continuity" },
  },
  "ambient-focus": {
    label: "Ambient Focus",
    shortLabel: "Ambient Focus",
    color: "#93A2B6",
    summaryAdjectives: { high: "broadly aware", moderate: "situationally attentive", low: "narrowly tuned" },
  },
  "flow-propensity": {
    label: "Flow Propensity",
    shortLabel: "Flow Propensity",
    color: "#328181",
    summaryAdjectives: { high: "flow-prone", moderate: "occasionally immersed", low: "rarely in flow" },
  },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const FOCUS_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "deep-focus",      leftLabel: "Low", rightLabel: "Deep Focus",      barColor: "#315E36", dominantSide: "right", dominantLabel: "Deep Focus" },
  { dimensionId: "task-switching",   leftLabel: "Low", rightLabel: "Task Switching",  barColor: "#C97A30", dominantSide: "right", dominantLabel: "Task Switching" },
  { dimensionId: "ambient-focus",    leftLabel: "Low", rightLabel: "Ambient Focus",   barColor: "#93A2B6", dominantSide: "right", dominantLabel: "Ambient Focus" },
  { dimensionId: "flow-propensity",  leftLabel: "Low", rightLabel: "Flow Propensity", barColor: "#328181", dominantSide: "right", dominantLabel: "Flow Propensity" },
];

/* ------------------------------------------------------------------ */
/*  Dimension ordering                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_ORDER: FocusDimensionId[] = [
  "deep-focus",
  "task-switching",
  "ambient-focus",
  "flow-propensity",
];

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  SVG image helpers                                                  */
/* ------------------------------------------------------------------ */

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/focus-style/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/focus-style/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/focus-style/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/focus-style/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/focus-style/${assetKey}/${assetKey}-growth.svg`,
  };
}

const DIMENSION_ASSET_PREFIX: Record<string, string> = {
  "deep-focus": "df",
  "task-switching": "ts",
  "ambient-focus": "af",
  "flow-propensity": "fp",
};

export function getFocusStyleAssetKey(dimensionId: string, level: "high" | "low"): string {
  const prefix = DIMENSION_ASSET_PREFIX[dimensionId] ?? "df";
  return `${prefix}-${level}`;
}

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

export function buildProfileSummary(
  dimensions: Record<FocusDimensionId, { score: number; level: FocusLevel }>,
): string {
  const ranked = DIMENSION_ORDER.map((d) => ({
    dim: d,
    score: dimensions[d].score,
    level: dimensions[d].level,
    extremity: Math.abs(dimensions[d].score - 50),
  })).sort((a, b) => b.extremity - a.extremity);

  const top = ranked.slice(0, 3);
  const adjectives = top.map(
    (t) => DIMENSION_META[t.dim].summaryAdjectives[t.level],
  );

  if (adjectives.length <= 2) return adjectives.join(" and ");
  return `${adjectives.slice(0, -1).join(", ")}, and ${adjectives[adjectives.length - 1]}`;
}
