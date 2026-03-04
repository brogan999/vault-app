/* ------------------------------------------------------------------ */
/*  EQ dimension & level types                                         */
/* ------------------------------------------------------------------ */

export type EQDimensionId =
  | "self-awareness"
  | "self-regulation"
  | "motivation"
  | "empathy"
  | "social-skills";

export type EQLevel = "high" | "moderate" | "low";

/* ------------------------------------------------------------------ */
/*  Per-dimension content — the content database entry for one pillar  */
/* ------------------------------------------------------------------ */

export interface EQLevelContent {
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

  workplaceImplications: string;
  relationshipImplications: string;
  emotionalPattern: string;

  stressTriggers: string[];
  flowTriggers: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;
}

export interface EQDimensionContent {
  id: EQDimensionId;
  label: string;
  shortLabel: string;
  color: string;

  levels: Record<EQLevel, EQLevelContent>;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { SELF_AWARENESS } from "./dimensions/self-awareness";
import { SELF_REGULATION } from "./dimensions/self-regulation";
import { MOTIVATION } from "./dimensions/motivation";
import { EMPATHY } from "./dimensions/empathy";
import { SOCIAL_SKILLS } from "./dimensions/social-skills";

export const EQ_DIMENSIONS: Record<EQDimensionId, EQDimensionContent> = {
  "self-awareness": SELF_AWARENESS,
  "self-regulation": SELF_REGULATION,
  motivation: MOTIVATION,
  empathy: EMPATHY,
  "social-skills": SOCIAL_SKILLS,
};
