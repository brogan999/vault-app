import type { ResilienceDimensionId, ResilienceLevel } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Level thresholds                                                   */
/* ------------------------------------------------------------------ */

export function toLevel(score: number): ResilienceLevel {
  if (score >= 70) return "high";
  if (score >= 40) return "moderate";
  return "low";
}

/* ------------------------------------------------------------------ */
/*  Overall resilience labels                                          */
/* ------------------------------------------------------------------ */

export function getOverallLabel(score: number): string {
  if (score >= 80) return "Highly Resilient";
  if (score >= 60) return "Resilient";
  if (score >= 40) return "Moderately Resilient";
  return "Building Resilience";
}

/* ------------------------------------------------------------------ */
/*  Dimension metadata                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_META: Record<
  ResilienceDimensionId,
  {
    label: string;
    shortLabel: string;
    color: string;
    summaryAdjectives: { high: string; moderate: string; low: string };
  }
> = {
  "emotional-regulation": {
    label: "Emotional Regulation",
    shortLabel: "Emotional Regulation",
    color: "#916368",
    summaryAdjectives: { high: "emotionally steady", moderate: "developing composure", low: "emotionally reactive" },
  },
  optimism: {
    label: "Optimism",
    shortLabel: "Optimism",
    color: "#C7A356",
    summaryAdjectives: { high: "naturally optimistic", moderate: "cautiously hopeful", low: "realism-oriented" },
  },
  "self-efficacy": {
    label: "Self-Efficacy",
    shortLabel: "Self-Efficacy",
    color: "#315E36",
    summaryAdjectives: { high: "deeply self-trusting", moderate: "situationally confident", low: "building confidence" },
  },
  "social-support": {
    label: "Social Support",
    shortLabel: "Social Support",
    color: "#CC8D90",
    summaryAdjectives: { high: "well-connected", moderate: "selectively supported", low: "independently coping" },
  },
  adaptability: {
    label: "Adaptability",
    shortLabel: "Adaptability",
    color: "#328181",
    summaryAdjectives: { high: "highly flexible", moderate: "adjusting with effort", low: "stability-seeking" },
  },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const RESILIENCE_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "emotional-regulation", leftLabel: "Low", rightLabel: "Emotional Regulation", barColor: "#916368", dominantSide: "right", dominantLabel: "Emotional Regulation" },
  { dimensionId: "optimism",             leftLabel: "Low", rightLabel: "Optimism",             barColor: "#C7A356", dominantSide: "right", dominantLabel: "Optimism" },
  { dimensionId: "self-efficacy",        leftLabel: "Low", rightLabel: "Self-Efficacy",        barColor: "#315E36", dominantSide: "right", dominantLabel: "Self-Efficacy" },
  { dimensionId: "social-support",       leftLabel: "Low", rightLabel: "Social Support",       barColor: "#CC8D90", dominantSide: "right", dominantLabel: "Social Support" },
  { dimensionId: "adaptability",         leftLabel: "Low", rightLabel: "Adaptability",         barColor: "#328181", dominantSide: "right", dominantLabel: "Adaptability" },
];

/* ------------------------------------------------------------------ */
/*  Dimension ordering                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_ORDER: ResilienceDimensionId[] = [
  "emotional-regulation",
  "optimism",
  "self-efficacy",
  "social-support",
  "adaptability",
];

/* ------------------------------------------------------------------ */
/*  Image paths                                                        */
/* ------------------------------------------------------------------ */

const DIMENSION_ASSET_PREFIX: Record<string, string> = {
  "emotional-regulation": "er",
  "optimism": "opt",
  "self-efficacy": "se",
  "social-support": "soc",
  "adaptability": "ada",
};

export function getResilienceAssetKey(dimensionId: string, level: "high" | "low"): string {
  const prefix = DIMENSION_ASSET_PREFIX[dimensionId] ?? "er";
  return `${prefix}-${level}`;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/resilience/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/resilience/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/resilience/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/resilience/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/resilience/${assetKey}/${assetKey}-growth.svg`,
  };
}

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

export function buildProfileSummary(
  dimensions: Record<ResilienceDimensionId, { score: number; level: ResilienceLevel }>,
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
