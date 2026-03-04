import type { MayanDaySign, MayanDirection, MayanElement } from "./shared";

export interface MayanSignContent {
  sign: MayanDaySign;
  name: string;
  shortName: string;
  englishName: string;
  tagline: string;
  color: string;
  heroImage: string;
  sectionImages: Record<string, string>;
  direction: MayanDirection;
  element: MayanElement;

  overview: string;

  toneInteractions: Record<number, string>;

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
  compatibilityNotes: Partial<Record<MayanDaySign, string>>;

  careerPath: string;
  workStyle: string;
  spiritualWisdom: string;
  lifeLessons: string[];

  toolkit: Array<{
    title: string;
    context: string;
    action: string;
  }>;

  descriptionInsight: string;
}

import { IMIX } from "./signs/imix";
import { IK } from "./signs/ik";
import { AKBAL } from "./signs/akbal";
import { KAN } from "./signs/kan";
import { CHICCHAN } from "./signs/chicchan";
import { CIMI } from "./signs/cimi";
import { MANIK } from "./signs/manik";
import { LAMAT } from "./signs/lamat";
import { MULUC } from "./signs/muluc";
import { OC } from "./signs/oc";
import { CHUEN } from "./signs/chuen";
import { EB } from "./signs/eb";
import { BEN } from "./signs/ben";
import { IX } from "./signs/ix";
import { MEN } from "./signs/men";
import { CIB } from "./signs/cib";
import { CABAN } from "./signs/caban";
import { ETZNAB } from "./signs/etznab";
import { CAUAC } from "./signs/cauac";
import { AHAU } from "./signs/ahau";

export const MAYAN_SIGNS: Record<MayanDaySign, MayanSignContent> = {
  Imix: IMIX,
  Ik: IK,
  Akbal: AKBAL,
  Kan: KAN,
  Chicchan: CHICCHAN,
  Cimi: CIMI,
  Manik: MANIK,
  Lamat: LAMAT,
  Muluc: MULUC,
  Oc: OC,
  Chuen: CHUEN,
  Eb: EB,
  Ben: BEN,
  Ix: IX,
  Men: MEN,
  Cib: CIB,
  Caban: CABAN,
  Etznab: ETZNAB,
  Cauac: CAUAC,
  Ahau: AHAU,
};
