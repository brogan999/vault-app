import type { DimensionBarConfig } from "@/lib/results-content/types";

/* ------------------------------------------------------------------ */
/*  Attachment style IDs                                               */
/* ------------------------------------------------------------------ */

export type AttachmentStyleId =
  | "secure"
  | "anxious"
  | "avoidant"
  | "fearful";

/* ------------------------------------------------------------------ */
/*  Style metadata                                                     */
/* ------------------------------------------------------------------ */

export interface AttachmentStyleMeta {
  id: AttachmentStyleId;
  name: string;
  shortName: string;
  color: string;
}

export const STYLE_META: Record<AttachmentStyleId, AttachmentStyleMeta> = {
  secure:   { id: "secure",   name: "Secure",              shortName: "The Anchor",    color: "#328181" },
  anxious:  { id: "anxious",  name: "Anxious-Preoccupied", shortName: "The Seeker",    color: "#C97A30" },
  avoidant: { id: "avoidant", name: "Dismissive-Avoidant", shortName: "The Island",    color: "#93A2B6" },
  fearful:  { id: "fearful",  name: "Fearful-Avoidant",    shortName: "The Waverer",   color: "#818D59" },
};

/* ------------------------------------------------------------------ */
/*  Dimension bar config for the results page UI                       */
/* ------------------------------------------------------------------ */

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/attachment/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/attachment/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/attachment/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/attachment/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/attachment/${assetKey}/${assetKey}-growth.svg`,
  };
}

export const ATTACHMENT_DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "secure",   leftLabel: "Low", rightLabel: "Secure",              barColor: "#328181", dominantSide: "right", dominantLabel: "Secure" },
  { dimensionId: "anxious",  leftLabel: "Low", rightLabel: "Anxious-Preoccupied", barColor: "#C97A30", dominantSide: "right", dominantLabel: "Anxious" },
  { dimensionId: "avoidant", leftLabel: "Low", rightLabel: "Dismissive-Avoidant", barColor: "#93A2B6", dominantSide: "right", dominantLabel: "Avoidant" },
  { dimensionId: "fearful",  leftLabel: "Low", rightLabel: "Fearful-Avoidant",    barColor: "#818D59", dominantSide: "right", dominantLabel: "Fearful" },
];
