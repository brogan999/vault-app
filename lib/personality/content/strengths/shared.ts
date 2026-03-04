import type { StrengthId, VirtueId } from "./types";
import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Virtue metadata (6 virtues, brand-aligned colours)                 */
/* ------------------------------------------------------------------ */

export const VIRTUE_META: Record<
  VirtueId,
  { label: string; color: string; tagline: string }
> = {
  wisdom:        { label: "Wisdom & Knowledge",  color: "#328181", tagline: "intellectual curiosity and good judgment" },
  courage:       { label: "Courage",             color: "#A03B0F", tagline: "emotional bravery and authentic action" },
  humanity:      { label: "Humanity",            color: "#CC8D90", tagline: "warmth, care, and interpersonal connection" },
  justice:       { label: "Justice",             color: "#C7A356", tagline: "fairness, leadership, and civic contribution" },
  temperance:    { label: "Temperance",          color: "#93A2B6", tagline: "self-control, humility, and careful balance" },
  transcendence: { label: "Transcendence",       color: "#916368", tagline: "meaning, beauty, and connection to something larger" },
};

/* ------------------------------------------------------------------ */
/*  Strength → Virtue mapping                                          */
/* ------------------------------------------------------------------ */

export const STRENGTH_TO_VIRTUE: Record<StrengthId, VirtueId> = {
  creativity:          "wisdom",
  curiosity:           "wisdom",
  judgment:            "wisdom",
  "love-of-learning":  "wisdom",
  perspective:         "wisdom",
  bravery:             "courage",
  perseverance:        "courage",
  honesty:             "courage",
  zest:                "courage",
  love:                "humanity",
  kindness:            "humanity",
  "social-intelligence": "humanity",
  teamwork:            "justice",
  fairness:            "justice",
  leadership:          "justice",
  forgiveness:         "temperance",
  humility:            "temperance",
  prudence:            "temperance",
  "self-regulation-s": "temperance",
  appreciation:        "transcendence",
  gratitude:           "transcendence",
  hope:                "transcendence",
  humor:               "transcendence",
  spirituality:        "transcendence",
};

/* ------------------------------------------------------------------ */
/*  Strength labels (matches test definition)                          */
/* ------------------------------------------------------------------ */

export const STRENGTH_META: Record<
  StrengthId,
  { label: string; shortLabel: string }
> = {
  creativity:          { label: "Creativity",              shortLabel: "Creativity" },
  curiosity:           { label: "Curiosity",               shortLabel: "Curiosity" },
  judgment:            { label: "Judgment",                 shortLabel: "Judgment" },
  "love-of-learning":  { label: "Love of Learning",        shortLabel: "Learning" },
  perspective:         { label: "Perspective",              shortLabel: "Perspective" },
  bravery:             { label: "Bravery",                  shortLabel: "Bravery" },
  perseverance:        { label: "Perseverance",             shortLabel: "Perseverance" },
  honesty:             { label: "Honesty",                  shortLabel: "Honesty" },
  zest:                { label: "Zest",                     shortLabel: "Zest" },
  love:                { label: "Love",                     shortLabel: "Love" },
  kindness:            { label: "Kindness",                 shortLabel: "Kindness" },
  "social-intelligence": { label: "Social Intelligence",   shortLabel: "Social Intel" },
  teamwork:            { label: "Teamwork",                 shortLabel: "Teamwork" },
  fairness:            { label: "Fairness",                 shortLabel: "Fairness" },
  leadership:          { label: "Leadership",               shortLabel: "Leadership" },
  forgiveness:         { label: "Forgiveness",              shortLabel: "Forgiveness" },
  humility:            { label: "Humility",                 shortLabel: "Humility" },
  prudence:            { label: "Prudence",                 shortLabel: "Prudence" },
  "self-regulation-s": { label: "Self-Regulation",          shortLabel: "Self-Reg" },
  appreciation:        { label: "Appreciation of Beauty",   shortLabel: "Appreciation" },
  gratitude:           { label: "Gratitude",                shortLabel: "Gratitude" },
  hope:                { label: "Hope",                     shortLabel: "Hope" },
  humor:               { label: "Humor",                    shortLabel: "Humor" },
  spirituality:        { label: "Spirituality",             shortLabel: "Spirituality" },
};

/* ------------------------------------------------------------------ */
/*  Virtue ordering + strength ordering within virtues                 */
/* ------------------------------------------------------------------ */

export const VIRTUE_ORDER: VirtueId[] = [
  "wisdom",
  "courage",
  "humanity",
  "justice",
  "temperance",
  "transcendence",
];

export const STRENGTHS_BY_VIRTUE: Record<VirtueId, StrengthId[]> = {
  wisdom:        ["creativity", "curiosity", "judgment", "love-of-learning", "perspective"],
  courage:       ["bravery", "perseverance", "honesty", "zest"],
  humanity:      ["love", "kindness", "social-intelligence"],
  justice:       ["teamwork", "fairness", "leadership"],
  temperance:    ["forgiveness", "humility", "prudence", "self-regulation-s"],
  transcendence: ["appreciation", "gratitude", "hope", "humor", "spirituality"],
};

export const ALL_STRENGTH_IDS: StrengthId[] = VIRTUE_ORDER.flatMap(
  (v) => STRENGTHS_BY_VIRTUE[v],
);

/* ------------------------------------------------------------------ */
/*  Dimension bar config (top-5 signature strengths shown as bars)     */
/* ------------------------------------------------------------------ */

export function buildSignatureBarConfig(
  top5: Array<{ id: StrengthId; score: number }>,
): DimensionBarConfig[] {
  return top5.map(({ id }) => {
    const virtue = STRENGTH_TO_VIRTUE[id];
    const color = VIRTUE_META[virtue].color;
    return {
      dimensionId: id,
      leftLabel: "Low",
      rightLabel: STRENGTH_META[id].label,
      barColor: color,
      dominantSide: "right" as const,
      dominantLabel: STRENGTH_META[id].shortLabel,
    };
  });
}

/* ------------------------------------------------------------------ */
/*  Profile summary builder                                            */
/* ------------------------------------------------------------------ */

export function buildProfileSummary(
  signatureIds: StrengthId[],
): string {
  const labels = signatureIds.slice(0, 3).map((id) => STRENGTH_META[id].label);
  if (labels.length <= 2) return labels.join(" and ");
  return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

export function getColorForStrength(id: StrengthId): string {
  return VIRTUE_META[STRENGTH_TO_VIRTUE[id]].color;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/strengths/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/strengths/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/strengths/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/strengths/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/strengths/${assetKey}/${assetKey}-growth.svg`,
  };
}
