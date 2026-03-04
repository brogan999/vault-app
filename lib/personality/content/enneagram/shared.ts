import type { DimensionBarConfig } from "@/lib/results-content/types";
import type { EnneagramCenter } from "./types";

/* ------------------------------------------------------------------ */
/*  Type metadata                                                      */
/* ------------------------------------------------------------------ */

export interface EnneagramTypeMeta {
  number: number;
  name: string;
  shortName: string;
  color: string;
  center: EnneagramCenter;
}

export const TYPE_META: Record<number, EnneagramTypeMeta> = {
  1: { number: 1, name: "The Reformer", shortName: "Reformer", color: "#315E36", center: "body" },
  2: { number: 2, name: "The Helper", shortName: "Helper", color: "#CC8D90", center: "heart" },
  3: { number: 3, name: "The Achiever", shortName: "Achiever", color: "#C7A356", center: "heart" },
  4: { number: 4, name: "The Individualist", shortName: "Individualist", color: "#916368", center: "heart" },
  5: { number: 5, name: "The Investigator", shortName: "Investigator", color: "#328181", center: "head" },
  6: { number: 6, name: "The Loyalist", shortName: "Loyalist", color: "#93A2B6", center: "head" },
  7: { number: 7, name: "The Enthusiast", shortName: "Enthusiast", color: "#C97A30", center: "head" },
  8: { number: 8, name: "The Challenger", shortName: "Challenger", color: "#A03B0F", center: "body" },
  9: { number: 9, name: "The Peacemaker", shortName: "Peacemaker", color: "#818D59", center: "body" },
};

/* ------------------------------------------------------------------ */
/*  Growth / Stress arrows (fixed per type)                            */
/* ------------------------------------------------------------------ */

export const GROWTH_ARROWS: Record<number, number> = {
  1: 7, 2: 4, 3: 6, 4: 1, 5: 8, 6: 9, 7: 5, 8: 2, 9: 3,
};

export const STRESS_ARROWS: Record<number, number> = {
  1: 4, 2: 8, 3: 9, 4: 2, 5: 7, 6: 3, 7: 1, 8: 5, 9: 6,
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const ENNEAGRAM_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "type1", leftLabel: "Low", rightLabel: "Reformer", barColor: "#315E36", dominantSide: "right", dominantLabel: "Type 1" },
  { dimensionId: "type2", leftLabel: "Low", rightLabel: "Helper", barColor: "#CC8D90", dominantSide: "right", dominantLabel: "Type 2" },
  { dimensionId: "type3", leftLabel: "Low", rightLabel: "Achiever", barColor: "#C7A356", dominantSide: "right", dominantLabel: "Type 3" },
  { dimensionId: "type4", leftLabel: "Low", rightLabel: "Individualist", barColor: "#916368", dominantSide: "right", dominantLabel: "Type 4" },
  { dimensionId: "type5", leftLabel: "Low", rightLabel: "Investigator", barColor: "#328181", dominantSide: "right", dominantLabel: "Type 5" },
  { dimensionId: "type6", leftLabel: "Low", rightLabel: "Loyalist", barColor: "#93A2B6", dominantSide: "right", dominantLabel: "Type 6" },
  { dimensionId: "type7", leftLabel: "Low", rightLabel: "Enthusiast", barColor: "#C97A30", dominantSide: "right", dominantLabel: "Type 7" },
  { dimensionId: "type8", leftLabel: "Low", rightLabel: "Challenger", barColor: "#A03B0F", dominantSide: "right", dominantLabel: "Type 8" },
  { dimensionId: "type9", leftLabel: "Low", rightLabel: "Peacemaker", barColor: "#818D59", dominantSide: "right", dominantLabel: "Type 9" },
];

/* ------------------------------------------------------------------ */
/*  Hero image path builder                                            */
/* ------------------------------------------------------------------ */

export function buildHeroImagePath(typeNumber: number): string {
  return `/characters/enneagram/type${typeNumber}/type${typeNumber}-reveal.svg`;
}

export function buildSectionImages(
  typeNumber: number,
): { strengths: string; relationships: string; career: string; growth: string } {
  const base = `/characters/enneagram/type${typeNumber}/type${typeNumber}`;
  return {
    strengths: `${base}-strengths.svg`,
    relationships: `${base}-relationships.svg`,
    career: `${base}-career.svg`,
    growth: `${base}-growth.svg`,
  };
}
