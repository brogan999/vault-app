/* ------------------------------------------------------------------ */
/*  IQ dimension & level types                                         */
/* ------------------------------------------------------------------ */

export type IQDimensionId =
  | "verbal"
  | "numerical"
  | "pattern"
  | "spatial";

export type IQLevel = "strong" | "moderate" | "developing";

/* ------------------------------------------------------------------ */
/*  Per-dimension content — the content database entry for one domain  */
/* ------------------------------------------------------------------ */

export interface IQLevelContent {
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
  learningStyle: string;
  emotionalPattern: string;

  enhancementTriggers: string[];
  depletionTriggers: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;
}

export interface IQDimensionContent {
  id: IQDimensionId;
  label: string;
  shortLabel: string;
  color: string;

  levels: Record<IQLevel, IQLevelContent>;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { VERBAL } from "./dimensions/verbal";
import { NUMERICAL } from "./dimensions/numerical";
import { PATTERN } from "./dimensions/pattern";
import { SPATIAL } from "./dimensions/spatial";

export const IQ_DIMENSIONS: Record<IQDimensionId, IQDimensionContent> = {
  verbal: VERBAL,
  numerical: NUMERICAL,
  pattern: PATTERN,
  spatial: SPATIAL,
};
