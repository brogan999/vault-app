import type { Big5Dimension, Big5Level } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Level thresholds                                                   */
/* ------------------------------------------------------------------ */

export function toLevel(score: number): Big5Level {
  if (score >= 65) return "high";
  if (score >= 35) return "moderate";
  return "low";
}

/* ------------------------------------------------------------------ */
/*  Dimension metadata                                                 */
/* ------------------------------------------------------------------ */

export const DIMENSION_META: Record<
  Big5Dimension,
  {
    label: string;
    shortLabel: string;
    color: string;
    leftLabel: string;
    rightLabel: string;
    summaryAdjectives: { high: string; moderate: string; low: string };
  }
> = {
  openness: {
    label: "Openness to Experience",
    shortLabel: "Openness",
    color: "#328181",
    leftLabel: "Conventional",
    rightLabel: "Open",
    summaryAdjectives: { high: "curious", moderate: "balanced", low: "practical" },
  },
  conscientiousness: {
    label: "Conscientiousness",
    shortLabel: "Conscientiousness",
    color: "#315E36",
    leftLabel: "Flexible",
    rightLabel: "Disciplined",
    summaryAdjectives: { high: "disciplined", moderate: "adaptable", low: "spontaneous" },
  },
  extraversion: {
    label: "Extraversion",
    shortLabel: "Extraversion",
    color: "#C97A30",
    leftLabel: "Reserved",
    rightLabel: "Outgoing",
    summaryAdjectives: { high: "socially energized", moderate: "selectively social", low: "inwardly oriented" },
  },
  agreeableness: {
    label: "Agreeableness",
    shortLabel: "Agreeableness",
    color: "#818D59",
    leftLabel: "Challenging",
    rightLabel: "Accommodating",
    summaryAdjectives: { high: "empathetic", moderate: "diplomatically direct", low: "independent-minded" },
  },
  neuroticism: {
    label: "Neuroticism",
    shortLabel: "Neuroticism",
    color: "#916368",
    leftLabel: "Resilient",
    rightLabel: "Sensitive",
    summaryAdjectives: { high: "emotionally attuned", moderate: "emotionally steady", low: "even-keeled" },
  },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const BIG5_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "openness", leftLabel: "Conventional", rightLabel: "Open", barColor: "#328181", dominantSide: "right", dominantLabel: "Openness" },
  { dimensionId: "conscientiousness", leftLabel: "Flexible", rightLabel: "Disciplined", barColor: "#315E36", dominantSide: "right", dominantLabel: "Conscientiousness" },
  { dimensionId: "extraversion", leftLabel: "Reserved", rightLabel: "Outgoing", barColor: "#C97A30", dominantSide: "right", dominantLabel: "Extraversion" },
  { dimensionId: "agreeableness", leftLabel: "Challenging", rightLabel: "Accommodating", barColor: "#818D59", dominantSide: "right", dominantLabel: "Agreeableness" },
  { dimensionId: "neuroticism", leftLabel: "Resilient", rightLabel: "Sensitive", barColor: "#916368", dominantSide: "right", dominantLabel: "Neuroticism" },
];

/* ------------------------------------------------------------------ */
/*  Profile summary generation                                         */
/* ------------------------------------------------------------------ */

const DIMENSION_ORDER: Big5Dimension[] = [
  "openness",
  "conscientiousness",
  "extraversion",
  "agreeableness",
  "neuroticism",
];

/**
 * Build a short descriptive tagline from the user's dimension levels.
 * Picks the 2-3 most extreme traits (furthest from 50) and joins their
 * adjectives into a natural phrase.
 */
export function buildProfileSummary(
  dimensions: Record<Big5Dimension, { score: number; level: Big5Level }>,
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

/* ------------------------------------------------------------------ */
/*  Hero image path builder                                            */
/* ------------------------------------------------------------------ */

export function buildProfileKey(
  dominantTrait: Big5Dimension,
  dominantLevel: Big5Level,
): string {
  const dimKey: Record<Big5Dimension, string> = {
    openness: "o",
    conscientiousness: "c",
    extraversion: "e",
    agreeableness: "a",
    neuroticism: "n",
  };
  const lvl = dominantLevel === "low" ? "low" : "high";
  return `${dimKey[dominantTrait]}-${lvl}`;
}

export function buildHeroImagePath(profileKey: string): string {
  return `/characters/big5/${profileKey}/${profileKey}-reveal.svg`;
}

export function buildSectionImages(
  profileKey: string,
): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/big5/${profileKey}/${profileKey}-strengths.svg`,
    relationships: `/characters/big5/${profileKey}/${profileKey}-relationships.svg`,
    career: `/characters/big5/${profileKey}/${profileKey}-career.svg`,
    growth: `/characters/big5/${profileKey}/${profileKey}-growth.svg`,
  };
}
