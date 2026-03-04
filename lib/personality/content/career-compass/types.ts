export type CareerDimensionId =
  | "realistic"
  | "investigative"
  | "artistic"
  | "social"
  | "enterprising"
  | "conventional";

export type CareerLevel = "high" | "moderate" | "low";

export interface CareerLevelContent {
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

  careerPaths: string;
  workEnvironment: string;
  collaborationStyle: string;

  energyDrains: string[];
  motivators: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;
}

export interface CareerDimensionContent {
  id: CareerDimensionId;
  label: string;
  shortLabel: string;
  color: string;
  heroImage: string;
  sectionImages: Record<string, string>;

  levels: Record<CareerLevel, CareerLevelContent>;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { REALISTIC } from "./dimensions/realistic";
import { INVESTIGATIVE } from "./dimensions/investigative";
import { ARTISTIC } from "./dimensions/artistic";
import { SOCIAL } from "./dimensions/social";
import { ENTERPRISING } from "./dimensions/enterprising";
import { CONVENTIONAL } from "./dimensions/conventional";

export const CAREER_DIMENSIONS: Record<CareerDimensionId, CareerDimensionContent> = {
  realistic: REALISTIC,
  investigative: INVESTIGATIVE,
  artistic: ARTISTIC,
  social: SOCIAL,
  enterprising: ENTERPRISING,
  conventional: CONVENTIONAL,
};
