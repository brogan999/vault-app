import type {
  StressFlow,
  GrowthPath,
  CareerAlignment,
} from "@/lib/personality/schemas/content";
import type { StressResponseId } from "./shared";

/* ------------------------------------------------------------------ */
/*  StressResponseContent — content entry for a single response type   */
/* ------------------------------------------------------------------ */

export interface StressResponseContent {
  responseId: StressResponseId;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  heroImage: string;
  sectionImages: Record<string, string>;

  overview: string;

  strengths: Array<{ title: string; description: string; deepDive?: string }>;

  growthEdges: Array<{
    title: string;
    teaser: string;
    fullExplanation: string;
    premiumHook: string;
  }>;

  workplaceImplications: string;
  relationshipImplications: string;
  emotionalPattern: string;
  somaticMarkers: string;

  stressTriggers: string[];
  recoveryTriggers: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  compatibilityNotes: Record<StressResponseId, string>;

  stressFlow: StressFlow;
  careerAlignment: CareerAlignment;
  growthPathStructured: GrowthPath;

  descriptionInsight: string;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { FIGHT } from "./fight";
import { FLIGHT } from "./flight";
import { FREEZE } from "./freeze";
import { FAWN } from "./fawn";

export const STRESS_RESPONSES: Record<StressResponseId, StressResponseContent> = {
  fight: FIGHT,
  flight: FLIGHT,
  freeze: FREEZE,
  fawn: FAWN,
};
