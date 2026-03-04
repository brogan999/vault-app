import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  DISC style IDs                                                     */
/* ------------------------------------------------------------------ */

export type DISCStyleId =
  | "dominance"
  | "influence"
  | "steadiness"
  | "conscientiousness";

/* ------------------------------------------------------------------ */
/*  Style metadata                                                     */
/* ------------------------------------------------------------------ */

export interface DISCStyleMeta {
  id: DISCStyleId;
  letter: string;
  name: string;
  shortName: string;
  color: string;
}

export const STYLE_META: Record<DISCStyleId, DISCStyleMeta> = {
  dominance:          { id: "dominance",          letter: "D", name: "Dominance",          shortName: "Driver",  color: "#A03B0F" },
  influence:          { id: "influence",          letter: "i", name: "Influence",          shortName: "Inspirer", color: "#C7A356" },
  steadiness:         { id: "steadiness",         letter: "S", name: "Steadiness",         shortName: "Supporter", color: "#315E36" },
  conscientiousness:  { id: "conscientiousness",  letter: "C", name: "Conscientiousness",  shortName: "Analyst", color: "#328181" },
};

export const LETTER_TO_STYLE: Record<string, DISCStyleId> = {
  D: "dominance",
  d: "dominance",
  i: "influence",
  I: "influence",
  S: "steadiness",
  s: "steadiness",
  C: "conscientiousness",
  c: "conscientiousness",
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export const DISC_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "dominance",         leftLabel: "Low", rightLabel: "Dominance",         barColor: "#A03B0F", dominantSide: "right", dominantLabel: "D" },
  { dimensionId: "influence",         leftLabel: "Low", rightLabel: "Influence",         barColor: "#C7A356", dominantSide: "right", dominantLabel: "i" },
  { dimensionId: "steadiness",        leftLabel: "Low", rightLabel: "Steadiness",        barColor: "#315E36", dominantSide: "right", dominantLabel: "S" },
  { dimensionId: "conscientiousness", leftLabel: "Low", rightLabel: "Conscientiousness", barColor: "#328181", dominantSide: "right", dominantLabel: "C" },
];

/* ------------------------------------------------------------------ */
/*  Hero image path builder (uses existing assets at /characters/disc) */
/* ------------------------------------------------------------------ */

const VALID_CODES = new Set(["d", "i", "s", "c", "dc", "di", "ds", "ic", "is", "sc"]);

export function buildHeroImagePath(typeCode: string): string {
  const code = typeCode.toLowerCase();
  if (VALID_CODES.has(code)) {
    return `/characters/disc/${code}/${code}-reveal.svg`;
  }
  const primary = code.charAt(0);
  return `/characters/disc/${primary}/${primary}-reveal.svg`;
}

export function buildSectionImages(typeCode: string): { strengths: string; relationships: string; career: string; growth: string } {
  const code = typeCode.toLowerCase();
  const base = VALID_CODES.has(code) ? code : code.charAt(0);
  const dir = `/characters/disc/${base}/${base}`;
  return {
    strengths: `${dir}-strengths.svg`,
    relationships: `${dir}-relationships.svg`,
    career: `${dir}-career.svg`,
    growth: `${dir}-growth.svg`,
  };
}
