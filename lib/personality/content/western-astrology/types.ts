import type { ZodiacSign, Element, Modality } from "./shared";

export interface ZodiacSignContent {
  sign: ZodiacSign;
  name: string;
  shortName: string;
  tagline: string;
  color: string;

  heroImage: string;
  sectionImages: Record<string, string>;

  element: Element;
  modality: Modality;
  rulingPlanet: string;
  symbol: string;

  sunOverview: string;
  moonOverview: string;
  risingOverview: string;

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
  compatibilityNotes: Partial<Record<ZodiacSign, string>>;

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

import { ARIES } from "./signs/aries";
import { TAURUS } from "./signs/taurus";
import { GEMINI } from "./signs/gemini";
import { CANCER } from "./signs/cancer";
import { LEO } from "./signs/leo";
import { VIRGO } from "./signs/virgo";
import { LIBRA } from "./signs/libra";
import { SCORPIO } from "./signs/scorpio";
import { SAGITTARIUS } from "./signs/sagittarius";
import { CAPRICORN } from "./signs/capricorn";
import { AQUARIUS } from "./signs/aquarius";
import { PISCES } from "./signs/pisces";

export const ZODIAC_SIGNS: Record<ZodiacSign, ZodiacSignContent> = {
  Aries: ARIES,
  Taurus: TAURUS,
  Gemini: GEMINI,
  Cancer: CANCER,
  Leo: LEO,
  Virgo: VIRGO,
  Libra: LIBRA,
  Scorpio: SCORPIO,
  Sagittarius: SAGITTARIUS,
  Capricorn: CAPRICORN,
  Aquarius: AQUARIUS,
  Pisces: PISCES,
};
