/* ------------------------------------------------------------------ */
/*  Strengths type IDs, virtue IDs, and content interfaces             */
/* ------------------------------------------------------------------ */

export type StrengthId =
  | "creativity"
  | "curiosity"
  | "judgment"
  | "love-of-learning"
  | "perspective"
  | "bravery"
  | "perseverance"
  | "honesty"
  | "zest"
  | "love"
  | "kindness"
  | "social-intelligence"
  | "teamwork"
  | "fairness"
  | "leadership"
  | "forgiveness"
  | "humility"
  | "prudence"
  | "self-regulation-s"
  | "appreciation"
  | "gratitude"
  | "hope"
  | "humor"
  | "spirituality";

export type VirtueId =
  | "wisdom"
  | "courage"
  | "humanity"
  | "justice"
  | "temperance"
  | "transcendence";

/* ------------------------------------------------------------------ */
/*  Per-strength content                                               */
/* ------------------------------------------------------------------ */

export interface StrengthContent {
  id: StrengthId;
  label: string;
  virtue: VirtueId;
  description: string;
  inAction: string;
  atWork: string;
  inRelationships: string;
  overuseRisk: string;
  underuse: string;
  growthStrategies: string[];
  toolkit: string[];
}

export interface VirtueContent {
  heroImage: string;
  sectionImages: Record<string, string>;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { WISDOM_STRENGTHS, WISDOM_VIRTUE_CONTENT } from "./virtues/wisdom";
import { COURAGE_STRENGTHS, COURAGE_VIRTUE_CONTENT } from "./virtues/courage";
import { HUMANITY_STRENGTHS, HUMANITY_VIRTUE_CONTENT } from "./virtues/humanity";
import { JUSTICE_STRENGTHS, JUSTICE_VIRTUE_CONTENT } from "./virtues/justice";
import { TEMPERANCE_STRENGTHS, TEMPERANCE_VIRTUE_CONTENT } from "./virtues/temperance";
import { TRANSCENDENCE_STRENGTHS, TRANSCENDENCE_VIRTUE_CONTENT } from "./virtues/transcendence";

export const STRENGTHS = {
  ...WISDOM_STRENGTHS,
  ...COURAGE_STRENGTHS,
  ...HUMANITY_STRENGTHS,
  ...JUSTICE_STRENGTHS,
  ...TEMPERANCE_STRENGTHS,
  ...TRANSCENDENCE_STRENGTHS,
} as Record<StrengthId, StrengthContent>;

export const VIRTUE_CONTENT: Record<VirtueId, VirtueContent> = {
  wisdom: WISDOM_VIRTUE_CONTENT,
  courage: COURAGE_VIRTUE_CONTENT,
  humanity: HUMANITY_VIRTUE_CONTENT,
  justice: JUSTICE_VIRTUE_CONTENT,
  temperance: TEMPERANCE_VIRTUE_CONTENT,
  transcendence: TRANSCENDENCE_VIRTUE_CONTENT,
};
