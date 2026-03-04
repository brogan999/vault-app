import type {
  StressFlow,
  GrowthPath,
  CareerAlignment,
} from "@/lib/personality/schemas/content";

/* ------------------------------------------------------------------ */
/*  Enneagram center of intelligence                                   */
/* ------------------------------------------------------------------ */

export type EnneagramCenter = "head" | "heart" | "body";

/* ------------------------------------------------------------------ */
/*  EnneagramTypeContent — content database entry for a single type    */
/* ------------------------------------------------------------------ */

export interface EnneagramTypeContent {
  typeNumber: number;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  center: EnneagramCenter;

  coreFear: string;
  coreDesire: string;
  coreMotivation: string;
  defensePattern: string;

  overview: string;

  strengths: Array<{ title: string; description: string; deepDive?: string }>;

  growthEdges: Array<{
    title: string;
    teaser: string;
    fullExplanation: string;
  }>;

  relationshipStyle: string;
  relationshipPreview: string;
  relationshipDeepDive: string;

  careerHeadline: string;
  careerDirections: string[];
  careerDeepDive: string;

  emotionalPattern: string;

  stressTriggers: string[];
  flowTriggers: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  stressFlow: StressFlow;
  careerAlignment: CareerAlignment;
  growthPathStructured: GrowthPath;

  descriptionInsight: string;

  heroImage: string;
  sectionImages: {
    strengths: string;
    relationships: string;
    career: string;
    growth: string;
  };
}

/* ------------------------------------------------------------------ */
/*  Registry (populated as type files are added)                       */
/* ------------------------------------------------------------------ */

import { TYPE_1 } from "./type1";
import { TYPE_2 } from "./type2";
import { TYPE_3 } from "./type3";
import { TYPE_4 } from "./type4";
import { TYPE_5 } from "./type5";
import { TYPE_6 } from "./type6";
import { TYPE_7 } from "./type7";
import { TYPE_8 } from "./type8";
import { TYPE_9 } from "./type9";

export const ENNEAGRAM_TYPES: Record<number, EnneagramTypeContent> = {
  1: TYPE_1,
  2: TYPE_2,
  3: TYPE_3,
  4: TYPE_4,
  5: TYPE_5,
  6: TYPE_6,
  7: TYPE_7,
  8: TYPE_8,
  9: TYPE_9,
};
