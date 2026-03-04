import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Stress response IDs                                                */
/* ------------------------------------------------------------------ */

export type StressResponseId =
  | "fight"
  | "flight"
  | "freeze"
  | "fawn";

/* ------------------------------------------------------------------ */
/*  Response metadata                                                  */
/* ------------------------------------------------------------------ */

export interface StressResponseMeta {
  id: StressResponseId;
  name: string;
  shortName: string;
  color: string;
}

export const RESPONSE_META: Record<StressResponseId, StressResponseMeta> = {
  fight:  { id: "fight",  name: "Fight",  shortName: "The Warrior",   color: "#A03B0F" },
  flight: { id: "flight", name: "Flight", shortName: "The Evader",    color: "#C97A30" },
  freeze: { id: "freeze", name: "Freeze", shortName: "The Sentinel",  color: "#93A2B6" },
  fawn:   { id: "fawn",   name: "Fawn",   shortName: "The Appeaser",  color: "#CC8D90" },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/stress-profile/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/stress-profile/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/stress-profile/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/stress-profile/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/stress-profile/${assetKey}/${assetKey}-growth.svg`,
  };
}

export const STRESS_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "fight",  leftLabel: "Low", rightLabel: "Fight",  barColor: "#A03B0F", dominantSide: "right", dominantLabel: "Fight" },
  { dimensionId: "flight", leftLabel: "Low", rightLabel: "Flight", barColor: "#C97A30", dominantSide: "right", dominantLabel: "Flight" },
  { dimensionId: "freeze", leftLabel: "Low", rightLabel: "Freeze", barColor: "#93A2B6", dominantSide: "right", dominantLabel: "Freeze" },
  { dimensionId: "fawn",   leftLabel: "Low", rightLabel: "Fawn",   barColor: "#CC8D90", dominantSide: "right", dominantLabel: "Fawn" },
];
