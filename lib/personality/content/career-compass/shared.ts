import type { CareerDimensionId, CareerLevel } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Level thresholds                                                   */
/* ------------------------------------------------------------------ */

export function toLevel(score: number): CareerLevel {
  if (score >= 70) return "high";
  if (score >= 40) return "moderate";
  return "low";
}

/* ------------------------------------------------------------------ */
/*  Overall interest labels                                            */
/* ------------------------------------------------------------------ */

export function getOverallLabel(score: number): string {
  if (score >= 80) return "Highly Differentiated";
  if (score >= 65) return "Well-Defined";
  if (score >= 45) return "Emerging";
  return "Exploring";
}

/* ------------------------------------------------------------------ */
/*  Dimension metadata                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_META: Record<
  CareerDimensionId,
  {
    label: string;
    shortLabel: string;
    letter: string;
    color: string;
    summaryAdjectives: { high: string; moderate: string; low: string };
  }
> = {
  realistic: {
    label: "Realistic",
    shortLabel: "Realistic",
    letter: "R",
    color: "#315E36",
    summaryAdjectives: { high: "hands-on and practical", moderate: "selectively hands-on", low: "conceptually oriented" },
  },
  investigative: {
    label: "Investigative",
    shortLabel: "Investigative",
    letter: "I",
    color: "#328181",
    summaryAdjectives: { high: "analytically driven", moderate: "curious and methodical", low: "intuition-led" },
  },
  artistic: {
    label: "Artistic",
    shortLabel: "Artistic",
    letter: "A",
    color: "#916368",
    summaryAdjectives: { high: "creatively expressive", moderate: "selectively creative", low: "structure-preferring" },
  },
  social: {
    label: "Social",
    shortLabel: "Social",
    letter: "S",
    color: "#CC8D90",
    summaryAdjectives: { high: "people-centred", moderate: "interpersonally aware", low: "independently oriented" },
  },
  enterprising: {
    label: "Enterprising",
    shortLabel: "Enterprising",
    letter: "E",
    color: "#C97A30",
    summaryAdjectives: { high: "ambitious and persuasive", moderate: "situationally assertive", low: "collaborative over competitive" },
  },
  conventional: {
    label: "Conventional",
    shortLabel: "Conventional",
    letter: "C",
    color: "#93A2B6",
    summaryAdjectives: { high: "detail-oriented and systematic", moderate: "moderately organised", low: "flexibility-seeking" },
  },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const CAREER_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "realistic",      leftLabel: "Low", rightLabel: "Realistic",      barColor: "#315E36", dominantSide: "right", dominantLabel: "Realistic" },
  { dimensionId: "investigative",  leftLabel: "Low", rightLabel: "Investigative",  barColor: "#328181", dominantSide: "right", dominantLabel: "Investigative" },
  { dimensionId: "artistic",       leftLabel: "Low", rightLabel: "Artistic",       barColor: "#916368", dominantSide: "right", dominantLabel: "Artistic" },
  { dimensionId: "social",         leftLabel: "Low", rightLabel: "Social",         barColor: "#CC8D90", dominantSide: "right", dominantLabel: "Social" },
  { dimensionId: "enterprising",   leftLabel: "Low", rightLabel: "Enterprising",   barColor: "#C97A30", dominantSide: "right", dominantLabel: "Enterprising" },
  { dimensionId: "conventional",   leftLabel: "Low", rightLabel: "Conventional",   barColor: "#93A2B6", dominantSide: "right", dominantLabel: "Conventional" },
];

/* ------------------------------------------------------------------ */
/*  Dimension ordering                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_ORDER: CareerDimensionId[] = [
  "realistic",
  "investigative",
  "artistic",
  "social",
  "enterprising",
  "conventional",
];

/* ------------------------------------------------------------------ */
/*  Holland Code builder                                               */
/* ------------------------------------------------------------------ */

export function buildHollandCode(
  dimensions: Record<CareerDimensionId, { score: number }>,
): { code: string; label: string; topThree: CareerDimensionId[] } {
  const ranked = DIMENSION_ORDER
    .map((id) => ({ id, score: dimensions[id].score }))
    .sort((a, b) => b.score - a.score);

  const topThree = ranked.slice(0, 3).map((r) => r.id);
  const code = topThree.map((id) => DIMENSION_META[id].letter).join("");
  const label = topThree.map((id) => DIMENSION_META[id].label).join(" / ");

  return { code, label, topThree };
}

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/career-compass/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/career-compass/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/career-compass/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/career-compass/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/career-compass/${assetKey}/${assetKey}-growth.svg`,
  };
}

export function buildProfileSummary(
  dimensions: Record<CareerDimensionId, { score: number; level: CareerLevel }>,
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
