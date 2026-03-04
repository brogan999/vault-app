import type { IQDimensionId, IQLevel } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Level thresholds                                                   */
/* ------------------------------------------------------------------ */

export function toLevel(score: number): IQLevel {
  if (score >= 80) return "strong";
  if (score >= 50) return "moderate";
  return "developing";
}

/* ------------------------------------------------------------------ */
/*  Overall IQ labels                                                  */
/* ------------------------------------------------------------------ */

export function getIQLabel(iq: number): string {
  if (iq >= 130) return "Very Superior";
  if (iq >= 120) return "Superior";
  if (iq >= 110) return "High Average";
  if (iq >= 90) return "Average";
  if (iq >= 80) return "Low Average";
  return "Below Average";
}

/* ------------------------------------------------------------------ */
/*  Dimension metadata                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_META: Record<
  IQDimensionId,
  {
    label: string;
    shortLabel: string;
    color: string;
    summaryAdjectives: { strong: string; moderate: string; developing: string };
  }
> = {
  verbal: {
    label: "Verbal Reasoning",
    shortLabel: "Verbal",
    color: "#315E36",
    summaryAdjectives: { strong: "verbally sharp", moderate: "linguistically capable", developing: "building vocabulary" },
  },
  numerical: {
    label: "Numerical Reasoning",
    shortLabel: "Numerical",
    color: "#C7A356",
    summaryAdjectives: { strong: "quantitatively fluent", moderate: "numerically competent", developing: "growing numerically" },
  },
  pattern: {
    label: "Pattern Recognition",
    shortLabel: "Pattern",
    color: "#328181",
    summaryAdjectives: { strong: "pattern-perceptive", moderate: "analytically developing", developing: "building pattern awareness" },
  },
  spatial: {
    label: "Spatial Reasoning",
    shortLabel: "Spatial",
    color: "#916368",
    summaryAdjectives: { strong: "spatially gifted", moderate: "visually competent", developing: "growing spatially" },
  },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const IQ_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "verbal",    leftLabel: "Low", rightLabel: "Verbal Reasoning",    barColor: "#315E36", dominantSide: "right", dominantLabel: "Verbal" },
  { dimensionId: "numerical", leftLabel: "Low", rightLabel: "Numerical Reasoning", barColor: "#C7A356", dominantSide: "right", dominantLabel: "Numerical" },
  { dimensionId: "pattern",   leftLabel: "Low", rightLabel: "Pattern Recognition", barColor: "#328181", dominantSide: "right", dominantLabel: "Pattern" },
  { dimensionId: "spatial",   leftLabel: "Low", rightLabel: "Spatial Reasoning",   barColor: "#916368", dominantSide: "right", dominantLabel: "Spatial" },
];

/* ------------------------------------------------------------------ */
/*  Dimension ordering                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_ORDER: IQDimensionId[] = [
  "verbal",
  "numerical",
  "pattern",
  "spatial",
];

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  SVG image helpers                                                  */
/* ------------------------------------------------------------------ */

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/iq-pro/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/iq-pro/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/iq-pro/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/iq-pro/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/iq-pro/${assetKey}/${assetKey}-growth.svg`,
  };
}

const DIMENSION_ASSET_PREFIX: Record<string, string> = {
  verbal: "verbal",
  numerical: "numerical",
  pattern: "pattern",
  spatial: "spatial",
};

export function getIQProAssetKey(dimensionId: string, level: "high" | "low"): string {
  const prefix = DIMENSION_ASSET_PREFIX[dimensionId] ?? "verbal";
  return `${prefix}-${level}`;
}

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

export function buildProfileSummary(
  dimensions: Record<IQDimensionId, { score: number; level: IQLevel }>,
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
