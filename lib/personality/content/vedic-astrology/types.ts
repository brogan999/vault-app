import type { VedicRashi, VedicElement, VedicGuna } from "./shared";

export interface VedicRashiContent {
  rashi: VedicRashi;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  heroImage: string;
  sectionImages: Record<string, string>;
  element: VedicElement;
  guna: VedicGuna;
  graha: string;
  grahaEnglish: string;
  symbol: string;

  chandraOverview: string;
  suryaOverview: string;
  lagnaOverview: string;

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
  compatibilityNotes: Partial<Record<VedicRashi, string>>;

  careerDharma: string;
  workStyle: string;
  spiritualPath: string;
  lifeLessons: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  descriptionInsight: string;
}

import { MESHA } from "./rashis/mesha";
import { VRISHABHA } from "./rashis/vrishabha";
import { MITHUNA } from "./rashis/mithuna";
import { KARKA } from "./rashis/karka";
import { SIMHA } from "./rashis/simha";
import { KANYA } from "./rashis/kanya";
import { TULA } from "./rashis/tula";
import { VRISCHIKA } from "./rashis/vrischika";
import { DHANU } from "./rashis/dhanu";
import { MAKARA } from "./rashis/makara";
import { KUMBHA } from "./rashis/kumbha";
import { MEENA } from "./rashis/meena";

export const VEDIC_RASHIS: Record<VedicRashi, VedicRashiContent> = {
  Mesha: MESHA,
  Vrishabha: VRISHABHA,
  Mithuna: MITHUNA,
  Karka: KARKA,
  Simha: SIMHA,
  Kanya: KANYA,
  Tula: TULA,
  Vrischika: VRISCHIKA,
  Dhanu: DHANU,
  Makara: MAKARA,
  Kumbha: KUMBHA,
  Meena: MEENA,
};
