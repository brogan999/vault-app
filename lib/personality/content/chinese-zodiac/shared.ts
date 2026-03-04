export type ChineseAnimal =
  | "Rat"
  | "Ox"
  | "Tiger"
  | "Rabbit"
  | "Dragon"
  | "Snake"
  | "Horse"
  | "Goat"
  | "Monkey"
  | "Rooster"
  | "Dog"
  | "Pig";

export type ChineseElement = "Wood" | "Fire" | "Earth" | "Metal" | "Water";
export type YinYang = "Yin" | "Yang";

export interface AnimalMeta {
  animal: ChineseAnimal;
  label: string;
  shortLabel: string;
  color: string;
  fixedElement: ChineseElement;
  polarity: YinYang;
  earthlyBranch: string;
  assetKey: string;
  orderNumber: number;
}

export const VALID_ANIMALS: readonly ChineseAnimal[] = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

export const ANIMAL_META: Record<ChineseAnimal, AnimalMeta> = {
  Rat: {
    animal: "Rat",
    label: "Rat",
    shortLabel: "The Strategist",
    color: "#328181",
    fixedElement: "Water",
    polarity: "Yang",
    earthlyBranch: "子 (Zǐ)",
    assetKey: "rat",
    orderNumber: 1,
  },
  Ox: {
    animal: "Ox",
    label: "Ox",
    shortLabel: "The Perseverer",
    color: "#626350",
    fixedElement: "Earth",
    polarity: "Yin",
    earthlyBranch: "丑 (Chǒu)",
    assetKey: "ox",
    orderNumber: 2,
  },
  Tiger: {
    animal: "Tiger",
    label: "Tiger",
    shortLabel: "The Protector",
    color: "#C97A30",
    fixedElement: "Wood",
    polarity: "Yang",
    earthlyBranch: "寅 (Yín)",
    assetKey: "tiger",
    orderNumber: 3,
  },
  Rabbit: {
    animal: "Rabbit",
    label: "Rabbit",
    shortLabel: "The Diplomat",
    color: "#315E36",
    fixedElement: "Wood",
    polarity: "Yin",
    earthlyBranch: "卯 (Mǎo)",
    assetKey: "rabbit",
    orderNumber: 4,
  },
  Dragon: {
    animal: "Dragon",
    label: "Dragon",
    shortLabel: "The Emperor",
    color: "#A03B0F",
    fixedElement: "Earth",
    polarity: "Yang",
    earthlyBranch: "辰 (Chén)",
    assetKey: "dragon",
    orderNumber: 5,
  },
  Snake: {
    animal: "Snake",
    label: "Snake",
    shortLabel: "The Philosopher",
    color: "#5D2200",
    fixedElement: "Fire",
    polarity: "Yin",
    earthlyBranch: "巳 (Sì)",
    assetKey: "snake",
    orderNumber: 6,
  },
  Horse: {
    animal: "Horse",
    label: "Horse",
    shortLabel: "The Adventurer",
    color: "#876E00",
    fixedElement: "Fire",
    polarity: "Yang",
    earthlyBranch: "午 (Wǔ)",
    assetKey: "horse",
    orderNumber: 7,
  },
  Goat: {
    animal: "Goat",
    label: "Goat",
    shortLabel: "The Artist",
    color: "#818D59",
    fixedElement: "Earth",
    polarity: "Yin",
    earthlyBranch: "未 (Wèi)",
    assetKey: "goat",
    orderNumber: 8,
  },
  Monkey: {
    animal: "Monkey",
    label: "Monkey",
    shortLabel: "The Inventor",
    color: "#93A2B6",
    fixedElement: "Metal",
    polarity: "Yang",
    earthlyBranch: "申 (Shēn)",
    assetKey: "monkey",
    orderNumber: 9,
  },
  Rooster: {
    animal: "Rooster",
    label: "Rooster",
    shortLabel: "The Observer",
    color: "#C7A356",
    fixedElement: "Metal",
    polarity: "Yin",
    earthlyBranch: "酉 (Yǒu)",
    assetKey: "rooster",
    orderNumber: 10,
  },
  Dog: {
    animal: "Dog",
    label: "Dog",
    shortLabel: "The Guardian",
    color: "#626350",
    fixedElement: "Earth",
    polarity: "Yang",
    earthlyBranch: "戌 (Xū)",
    assetKey: "dog",
    orderNumber: 11,
  },
  Pig: {
    animal: "Pig",
    label: "Pig",
    shortLabel: "The Optimist",
    color: "#328181",
    fixedElement: "Water",
    polarity: "Yin",
    earthlyBranch: "亥 (Hài)",
    assetKey: "pig",
    orderNumber: 12,
  },
};

export function isValidAnimal(s: string): s is ChineseAnimal {
  const titleCase = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return VALID_ANIMALS.includes(titleCase as ChineseAnimal);
}

export function normalizeAnimal(s: string): ChineseAnimal {
  const titleCase = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  return VALID_ANIMALS.includes(titleCase as ChineseAnimal)
    ? (titleCase as ChineseAnimal)
    : "Rat";
}

export function getAnimalColor(animal: ChineseAnimal): string {
  return ANIMAL_META[animal].color;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/chinese-zodiac/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/chinese-zodiac/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/chinese-zodiac/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/chinese-zodiac/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/chinese-zodiac/${assetKey}/${assetKey}-growth.svg`,
  };
}
