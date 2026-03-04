import type {
  StressFlow,
  GrowthPath,
  CareerAlignment,
} from "@/lib/personality/schemas/content";
import type { AttachmentStyleId } from "./shared";

/* ------------------------------------------------------------------ */
/*  AttachmentStyleContent — content entry for a single style          */
/* ------------------------------------------------------------------ */

export interface AttachmentStyleContent {
  styleId: AttachmentStyleId;
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
  }>;

  romanticRelationships: string;
  friendships: string;
  familyDynamics: string;

  communicationCalm: string;
  communicationConflict: string;

  pathToEarnedSecurity: string;

  stressTriggers: string[];
  comfortStrategies: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  compatibilityNotes: Record<AttachmentStyleId, string>;

  stressFlow: StressFlow;
  careerAlignment: CareerAlignment;
  growthPathStructured: GrowthPath;

  descriptionInsight: string;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { SECURE } from "./secure";
import { ANXIOUS } from "./anxious";
import { AVOIDANT } from "./avoidant";
import { FEARFUL } from "./fearful";

export const ATTACHMENT_STYLES: Record<AttachmentStyleId, AttachmentStyleContent> = {
  secure: SECURE,
  anxious: ANXIOUS,
  avoidant: AVOIDANT,
  fearful: FEARFUL,
};
