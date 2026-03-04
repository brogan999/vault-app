import type { HumanDesignTypeId } from "./shared";

export interface HumanDesignTypeContent {
  typeId: HumanDesignTypeId;
  name: string;
  shortName: string;
  tagline: string;
  color: string;

  heroImage: string;
  sectionImages: Record<string, string>;

  strategy: string;
  authority: string;
  notSelfTheme: string;
  signature: string;

  overview: string;

  coreEnergies: Array<{
    name: string;
    score: number;
    description: string;
  }>;

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

  relationships: string;
  compatibilityNotes: Partial<Record<HumanDesignTypeId, string>>;

  careerPaths: string;
  workStyle: string;

  spiritualTheme: string;
  lifeLessons: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  descriptionInsight: string;
}

/* ------------------------------------------------------------------ */
/*  Registry                                                           */
/* ------------------------------------------------------------------ */

import { MANIFESTOR } from "./types/manifestor";
import { GENERATOR } from "./types/generator";
import { MANIFESTING_GENERATOR } from "./types/manifesting-generator";
import { PROJECTOR } from "./types/projector";
import { REFLECTOR } from "./types/reflector";

export const HUMAN_DESIGN_TYPES: Record<
  HumanDesignTypeId,
  HumanDesignTypeContent
> = {
  manifestor: MANIFESTOR,
  generator: GENERATOR,
  "manifesting-generator": MANIFESTING_GENERATOR,
  projector: PROJECTOR,
  reflector: REFLECTOR,
};
