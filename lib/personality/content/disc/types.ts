import type {
  StressFlow,
  GrowthPath,
  CareerAlignment,
} from "@/lib/personality/schemas/content";
import type { DISCStyleId } from "./shared";

/* ------------------------------------------------------------------ */
/*  DISCStyleContent — content database entry for a single style       */
/* ------------------------------------------------------------------ */

export interface DISCStyleContent {
  styleId: DISCStyleId;
  styleLetter: string;
  name: string;
  shortName: string;
  tagline: string;
  color: string;

  overview: string;

  strengths: Array<{ title: string; description: string; deepDive?: string }>;

  growthEdges: Array<{
    title: string;
    teaser: string;
    fullExplanation: string;
  }>;

  communicationStyle: string;
  leadershipApproach: string;
  conflictStyle: string;

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
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { DOMINANCE } from "./dominance";
import { INFLUENCE } from "./influence";
import { STEADINESS } from "./steadiness";
import { CONSCIENTIOUSNESS } from "./conscientiousness";

export const DISC_STYLES: Record<DISCStyleId, DISCStyleContent> = {
  dominance: DOMINANCE,
  influence: INFLUENCE,
  steadiness: STEADINESS,
  conscientiousness: CONSCIENTIOUSNESS,
};
