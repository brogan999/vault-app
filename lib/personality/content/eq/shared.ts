import type { EQDimensionId, EQLevel } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Level thresholds                                                   */
/* ------------------------------------------------------------------ */

export function toLevel(score: number): EQLevel {
  if (score >= 70) return "high";
  if (score >= 40) return "moderate";
  return "low";
}

/* ------------------------------------------------------------------ */
/*  Overall EQ labels                                                  */
/* ------------------------------------------------------------------ */

export function getOverallLabel(score: number): string {
  if (score >= 80) return "Exceptional EQ";
  if (score >= 65) return "High EQ";
  if (score >= 45) return "Moderate EQ";
  return "Developing EQ";
}

/* ------------------------------------------------------------------ */
/*  Dimension metadata                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_META: Record<
  EQDimensionId,
  {
    label: string;
    shortLabel: string;
    color: string;
    summaryAdjectives: { high: string; moderate: string; low: string };
  }
> = {
  "self-awareness": {
    label: "Self-Awareness",
    shortLabel: "Self-Awareness",
    color: "#328181",
    summaryAdjectives: { high: "emotionally perceptive", moderate: "developing insight", low: "building awareness" },
  },
  "self-regulation": {
    label: "Self-Regulation",
    shortLabel: "Self-Regulation",
    color: "#315E36",
    summaryAdjectives: { high: "emotionally composed", moderate: "generally steady", low: "reactive under pressure" },
  },
  motivation: {
    label: "Motivation",
    shortLabel: "Motivation",
    color: "#C97A30",
    summaryAdjectives: { high: "intrinsically driven", moderate: "selectively motivated", low: "externally oriented" },
  },
  empathy: {
    label: "Empathy",
    shortLabel: "Empathy",
    color: "#CC8D90",
    summaryAdjectives: { high: "deeply attuned", moderate: "situationally empathic", low: "analytically oriented" },
  },
  "social-skills": {
    label: "Social Skills",
    shortLabel: "Social Skills",
    color: "#C7A356",
    summaryAdjectives: { high: "socially fluent", moderate: "interpersonally capable", low: "relationally developing" },
  },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const EQ_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "self-awareness",  leftLabel: "Low", rightLabel: "Self-Awareness",  barColor: "#328181", dominantSide: "right", dominantLabel: "Self-Awareness" },
  { dimensionId: "self-regulation", leftLabel: "Low", rightLabel: "Self-Regulation", barColor: "#315E36", dominantSide: "right", dominantLabel: "Self-Regulation" },
  { dimensionId: "motivation",      leftLabel: "Low", rightLabel: "Motivation",      barColor: "#C97A30", dominantSide: "right", dominantLabel: "Motivation" },
  { dimensionId: "empathy",         leftLabel: "Low", rightLabel: "Empathy",         barColor: "#CC8D90", dominantSide: "right", dominantLabel: "Empathy" },
  { dimensionId: "social-skills",   leftLabel: "Low", rightLabel: "Social Skills",   barColor: "#C7A356", dominantSide: "right", dominantLabel: "Social Skills" },
];

/* ------------------------------------------------------------------ */
/*  Dimension ordering                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_ORDER: EQDimensionId[] = [
  "self-awareness",
  "self-regulation",
  "motivation",
  "empathy",
  "social-skills",
];

/* ------------------------------------------------------------------ */
/*  Image paths                                                        */
/* ------------------------------------------------------------------ */

const DIMENSION_ASSET_PREFIX: Record<string, string> = {
  "self-awareness": "sa",
  "self-regulation": "sr",
  "motivation": "mot",
  "empathy": "emp",
  "social-skills": "ss",
};

export function getEQAssetKey(dimensionId: string, level: "high" | "low"): string {
  const prefix = DIMENSION_ASSET_PREFIX[dimensionId] ?? "sa";
  return `${prefix}-${level}`;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/eq/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/eq/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/eq/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/eq/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/eq/${assetKey}/${assetKey}-growth.svg`,
  };
}

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

export function buildProfileSummary(
  dimensions: Record<EQDimensionId, { score: number; level: EQLevel }>,
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
