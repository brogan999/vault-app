export type MayanDaySign =
  | "Imix"
  | "Ik"
  | "Akbal"
  | "Kan"
  | "Chicchan"
  | "Cimi"
  | "Manik"
  | "Lamat"
  | "Muluc"
  | "Oc"
  | "Chuen"
  | "Eb"
  | "Ben"
  | "Ix"
  | "Men"
  | "Cib"
  | "Caban"
  | "Etznab"
  | "Cauac"
  | "Ahau";

export type MayanTone = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type MayanDirection = "East" | "North" | "West" | "South";
export type MayanElement = "Fire" | "Air" | "Earth" | "Water";

export interface SignMeta {
  sign: MayanDaySign;
  label: string;
  englishName: string;
  shortLabel: string;
  color: string;
  direction: MayanDirection;
  element: MayanElement;
  assetKey: string;
  orderNumber: number;
}

export const VALID_SIGNS: readonly MayanDaySign[] = [
  "Imix", "Ik", "Akbal", "Kan", "Chicchan",
  "Cimi", "Manik", "Lamat", "Muluc", "Oc",
  "Chuen", "Eb", "Ben", "Ix", "Men",
  "Cib", "Caban", "Etznab", "Cauac", "Ahau",
];

export const SIGN_META: Record<MayanDaySign, SignMeta> = {
  Imix: {
    sign: "Imix", label: "Imix (Crocodile)", englishName: "Crocodile",
    shortLabel: "The Nurturer", color: "#A03B0F",
    direction: "East", element: "Fire", assetKey: "imix", orderNumber: 1,
  },
  Ik: {
    sign: "Ik", label: "Ik (Wind)", englishName: "Wind",
    shortLabel: "The Communicator", color: "#93A2B6",
    direction: "North", element: "Air", assetKey: "ik", orderNumber: 2,
  },
  Akbal: {
    sign: "Akbal", label: "Akbal (Night)", englishName: "Night",
    shortLabel: "The Dreamer", color: "#2D2D5E",
    direction: "West", element: "Earth", assetKey: "akbal", orderNumber: 3,
  },
  Kan: {
    sign: "Kan", label: "Kan (Seed)", englishName: "Seed",
    shortLabel: "The Catalyst", color: "#315E36",
    direction: "South", element: "Water", assetKey: "kan", orderNumber: 4,
  },
  Chicchan: {
    sign: "Chicchan", label: "Chicchan (Serpent)", englishName: "Serpent",
    shortLabel: "The Alchemist", color: "#A03B0F",
    direction: "East", element: "Fire", assetKey: "chicchan", orderNumber: 5,
  },
  Cimi: {
    sign: "Cimi", label: "Cimi (Death)", englishName: "Death",
    shortLabel: "The Transformer", color: "#93A2B6",
    direction: "North", element: "Air", assetKey: "cimi", orderNumber: 6,
  },
  Manik: {
    sign: "Manik", label: "Manik (Deer)", englishName: "Deer",
    shortLabel: "The Healer", color: "#626350",
    direction: "West", element: "Earth", assetKey: "manik", orderNumber: 7,
  },
  Lamat: {
    sign: "Lamat", label: "Lamat (Star)", englishName: "Star",
    shortLabel: "The Harmoniser", color: "#C7A356",
    direction: "South", element: "Water", assetKey: "lamat", orderNumber: 8,
  },
  Muluc: {
    sign: "Muluc", label: "Muluc (Moon)", englishName: "Moon",
    shortLabel: "The Purifier", color: "#A03B0F",
    direction: "East", element: "Fire", assetKey: "muluc", orderNumber: 9,
  },
  Oc: {
    sign: "Oc", label: "Oc (Dog)", englishName: "Dog",
    shortLabel: "The Guardian", color: "#5D2200",
    direction: "North", element: "Air", assetKey: "oc", orderNumber: 10,
  },
  Chuen: {
    sign: "Chuen", label: "Chuen (Monkey)", englishName: "Monkey",
    shortLabel: "The Artisan", color: "#C97A30",
    direction: "West", element: "Earth", assetKey: "chuen", orderNumber: 11,
  },
  Eb: {
    sign: "Eb", label: "Eb (Human)", englishName: "Human",
    shortLabel: "The Pilgrim", color: "#328181",
    direction: "South", element: "Water", assetKey: "eb", orderNumber: 12,
  },
  Ben: {
    sign: "Ben", label: "Ben (Reed)", englishName: "Reed",
    shortLabel: "The Skywalker", color: "#A03B0F",
    direction: "East", element: "Fire", assetKey: "ben", orderNumber: 13,
  },
  Ix: {
    sign: "Ix", label: "Ix (Jaguar)", englishName: "Jaguar",
    shortLabel: "The Shaman", color: "#315E36",
    direction: "North", element: "Air", assetKey: "ix", orderNumber: 14,
  },
  Men: {
    sign: "Men", label: "Men (Eagle)", englishName: "Eagle",
    shortLabel: "The Visionary", color: "#626350",
    direction: "West", element: "Earth", assetKey: "men", orderNumber: 15,
  },
  Cib: {
    sign: "Cib", label: "Cib (Owl)", englishName: "Owl",
    shortLabel: "The Sage", color: "#876E00",
    direction: "South", element: "Water", assetKey: "cib", orderNumber: 16,
  },
  Caban: {
    sign: "Caban", label: "Caban (Earth)", englishName: "Earth",
    shortLabel: "The Navigator", color: "#818D59",
    direction: "East", element: "Fire", assetKey: "caban", orderNumber: 17,
  },
  Etznab: {
    sign: "Etznab", label: "Etznab (Flint)", englishName: "Flint",
    shortLabel: "The Mirror", color: "#93A2B6",
    direction: "North", element: "Air", assetKey: "etznab", orderNumber: 18,
  },
  Cauac: {
    sign: "Cauac", label: "Cauac (Storm)", englishName: "Storm",
    shortLabel: "The Catalyst", color: "#2D2D5E",
    direction: "West", element: "Earth", assetKey: "cauac", orderNumber: 19,
  },
  Ahau: {
    sign: "Ahau", label: "Ahau (Sun)", englishName: "Sun",
    shortLabel: "The Enlightened", color: "#C7A356",
    direction: "South", element: "Water", assetKey: "ahau", orderNumber: 20,
  },
};

export const TONE_NAMES: Record<number, string> = {
  1: "Unity (Hun)",
  2: "Duality (Ka)",
  3: "Rhythm (Ox)",
  4: "Stability (Kan)",
  5: "Empowerment (Ho)",
  6: "Flow (Uac)",
  7: "Resonance (Uuc)",
  8: "Harmony (Uaxac)",
  9: "Completion (Bolon)",
  10: "Manifestation (Lahun)",
  11: "Liberation (Buluc)",
  12: "Understanding (La Ka)",
  13: "Transcendence (Ox Lahun)",
};

export function isValidSign(s: string): s is MayanDaySign {
  const normalised = normalizeSignInput(s);
  return VALID_SIGNS.includes(normalised as MayanDaySign);
}

export function normalizeSign(s: string): MayanDaySign {
  const normalised = normalizeSignInput(s);
  return VALID_SIGNS.includes(normalised as MayanDaySign)
    ? (normalised as MayanDaySign)
    : "Imix";
}

export function getSignColor(sign: MayanDaySign): string {
  return SIGN_META[sign].color;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/mayan/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/mayan/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/mayan/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/mayan/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/mayan/${assetKey}/${assetKey}-growth.svg`,
  };
}

function normalizeSignInput(s: string): string {
  const cleaned = s.replace(/\s*\(.*\)/, "").trim();
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
}
