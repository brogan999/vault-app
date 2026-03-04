import type { LifePathNumber } from "./shared";

export interface LifePathContent {
  pathNumber: LifePathNumber;
  name: string;
  shortName: string;
  tagline: string;
  color: string;

  heroImage: string;
  sectionImages: Record<string, string>;

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
  compatibilityNotes: Partial<Record<LifePathNumber, string>>;

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

import { PATH_1 } from "./paths/path-1";
import { PATH_2 } from "./paths/path-2";
import { PATH_3 } from "./paths/path-3";
import { PATH_4 } from "./paths/path-4";
import { PATH_5 } from "./paths/path-5";
import { PATH_6 } from "./paths/path-6";
import { PATH_7 } from "./paths/path-7";
import { PATH_8 } from "./paths/path-8";
import { PATH_9 } from "./paths/path-9";
import { PATH_11 } from "./paths/path-11";
import { PATH_22 } from "./paths/path-22";

export const LIFE_PATHS: Record<LifePathNumber, LifePathContent> = {
  1: PATH_1,
  2: PATH_2,
  3: PATH_3,
  4: PATH_4,
  5: PATH_5,
  6: PATH_6,
  7: PATH_7,
  8: PATH_8,
  9: PATH_9,
  11: PATH_11,
  22: PATH_22,
};
