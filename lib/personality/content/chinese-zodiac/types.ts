import type { ChineseAnimal, ChineseElement, YinYang } from "./shared";

export interface ChineseAnimalContent {
  animal: ChineseAnimal;
  name: string;
  shortName: string;
  tagline: string;
  color: string;
  heroImage: string;
  sectionImages: Record<string, string>;
  fixedElement: ChineseElement;
  polarity: YinYang;
  earthlyBranch: string;

  overview: string;

  elementInteractions: Record<ChineseElement, string>;

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
  compatibilityNotes: Partial<Record<ChineseAnimal, string>>;

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

import { RAT } from "./animals/rat";
import { OX } from "./animals/ox";
import { TIGER } from "./animals/tiger";
import { RABBIT } from "./animals/rabbit";
import { DRAGON } from "./animals/dragon";
import { SNAKE } from "./animals/snake";
import { HORSE } from "./animals/horse";
import { GOAT } from "./animals/goat";
import { MONKEY } from "./animals/monkey";
import { ROOSTER } from "./animals/rooster";
import { DOG } from "./animals/dog";
import { PIG } from "./animals/pig";

export const CHINESE_ANIMALS: Record<ChineseAnimal, ChineseAnimalContent> = {
  Rat: RAT,
  Ox: OX,
  Tiger: TIGER,
  Rabbit: RABBIT,
  Dragon: DRAGON,
  Snake: SNAKE,
  Horse: HORSE,
  Goat: GOAT,
  Monkey: MONKEY,
  Rooster: ROOSTER,
  Dog: DOG,
  Pig: PIG,
};
