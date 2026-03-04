/* ------------------------------------------------------------------ */
/*  Resilience dimension & level types                                 */
/* ------------------------------------------------------------------ */

export type ResilienceDimensionId =
  | "emotional-regulation"
  | "optimism"
  | "self-efficacy"
  | "social-support"
  | "adaptability";

export type ResilienceLevel = "high" | "moderate" | "low";

/* ------------------------------------------------------------------ */
/*  Per-dimension content — the content database entry for one pillar  */
/* ------------------------------------------------------------------ */

export interface ResilienceLevelContent {
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

export interface ResilienceDimensionContent {
  id: ResilienceDimensionId;
  label: string;
  shortLabel: string;
  color: string;

  levels: Record<ResilienceLevel, ResilienceLevelContent>;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { EMOTIONAL_REGULATION } from "./dimensions/emotional-regulation";
import { OPTIMISM } from "./dimensions/optimism";
import { SELF_EFFICACY } from "./dimensions/self-efficacy";
import { SOCIAL_SUPPORT } from "./dimensions/social-support";
import { ADAPTABILITY } from "./dimensions/adaptability";

export const RESILIENCE_DIMENSIONS: Record<ResilienceDimensionId, ResilienceDimensionContent> = {
  "emotional-regulation": EMOTIONAL_REGULATION,
  optimism: OPTIMISM,
  "self-efficacy": SELF_EFFICACY,
  "social-support": SOCIAL_SUPPORT,
  adaptability: ADAPTABILITY,
};
