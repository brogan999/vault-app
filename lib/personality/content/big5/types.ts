/* ------------------------------------------------------------------ */
/*  Big Five dimension & level types                                   */
/* ------------------------------------------------------------------ */

export type Big5Dimension =
  | "openness"
  | "conscientiousness"
  | "extraversion"
  | "agreeableness"
  | "neuroticism";

export type Big5Level = "high" | "moderate" | "low";

/* ------------------------------------------------------------------ */
/*  Per-dimension content — the content database entry for one trait   */
/* ------------------------------------------------------------------ */

export interface Big5LevelContent {
  overview: string;

  strengths: Array<{
    title: string;
    description: string;
    deepDive?: string;
  }>;

  growthEdges: Array<{
    title: string;
    teaser: string;
    fullExplanation: string;
    premiumHook: string;
  }>;

  relationshipPattern: string;
  careerImplications: string;
  emotionalPattern: string;

  stressTriggers: string[];
  flowTriggers: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;
}

export interface Big5DimensionContent {
  id: Big5Dimension;
  label: string;
  shortLabel: string;
  color: string;

  levels: Record<Big5Level, Big5LevelContent>;
}

/* ------------------------------------------------------------------ */
/*  Trait interactions — content for notable 2-trait combinations      */
/* ------------------------------------------------------------------ */

export interface TraitInteraction {
  traits: [Big5Dimension, Big5Dimension];
  levels: [Big5Level, Big5Level];
  title: string;
  insight: string;
  premiumDeepDive: string;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { OPENNESS } from "./dimensions/openness";
import { CONSCIENTIOUSNESS } from "./dimensions/conscientiousness";
import { EXTRAVERSION } from "./dimensions/extraversion";
import { AGREEABLENESS } from "./dimensions/agreeableness";
import { NEUROTICISM } from "./dimensions/neuroticism";

export const BIG5_DIMENSIONS: Record<Big5Dimension, Big5DimensionContent> = {
  openness: OPENNESS,
  conscientiousness: CONSCIENTIOUSNESS,
  extraversion: EXTRAVERSION,
  agreeableness: AGREEABLENESS,
  neuroticism: NEUROTICISM,
};
