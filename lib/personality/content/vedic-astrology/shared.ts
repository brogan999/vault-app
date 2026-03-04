export type VedicRashi =
  | "Mesha"
  | "Vrishabha"
  | "Mithuna"
  | "Karka"
  | "Simha"
  | "Kanya"
  | "Tula"
  | "Vrischika"
  | "Dhanu"
  | "Makara"
  | "Kumbha"
  | "Meena";

export type VedicElement = "Agni" | "Prithvi" | "Vayu" | "Jala";
export type VedicGuna = "Sattva" | "Rajas" | "Tamas";

export interface RashiMeta {
  rashi: VedicRashi;
  label: string;
  shortLabel: string;
  westernEquivalent: string;
  color: string;
  element: VedicElement;
  guna: VedicGuna;
  graha: string;
  grahaEnglish: string;
  symbol: string;
  assetKey: string;
}

export const VALID_RASHIS: readonly VedicRashi[] = [
  "Mesha",
  "Vrishabha",
  "Mithuna",
  "Karka",
  "Simha",
  "Kanya",
  "Tula",
  "Vrischika",
  "Dhanu",
  "Makara",
  "Kumbha",
  "Meena",
];

export const WESTERN_TO_VEDIC: Record<string, VedicRashi> = {
  Aries: "Mesha",
  Taurus: "Vrishabha",
  Gemini: "Mithuna",
  Cancer: "Karka",
  Leo: "Simha",
  Virgo: "Kanya",
  Libra: "Tula",
  Scorpio: "Vrischika",
  Sagittarius: "Dhanu",
  Capricorn: "Makara",
  Aquarius: "Kumbha",
  Pisces: "Meena",
};

export const RASHI_META: Record<VedicRashi, RashiMeta> = {
  Mesha: {
    rashi: "Mesha",
    label: "Mesha",
    shortLabel: "The Ram",
    westernEquivalent: "Aries",
    color: "#A03B0F",
    element: "Agni",
    guna: "Rajas",
    graha: "Mangal",
    grahaEnglish: "Mars",
    symbol: "♈",
    assetKey: "mesha",
  },
  Vrishabha: {
    rashi: "Vrishabha",
    label: "Vrishabha",
    shortLabel: "The Bull",
    westernEquivalent: "Taurus",
    color: "#315E36",
    element: "Prithvi",
    guna: "Tamas",
    graha: "Shukra",
    grahaEnglish: "Venus",
    symbol: "♉",
    assetKey: "vrishabha",
  },
  Mithuna: {
    rashi: "Mithuna",
    label: "Mithuna",
    shortLabel: "The Twins",
    westernEquivalent: "Gemini",
    color: "#93A2B6",
    element: "Vayu",
    guna: "Rajas",
    graha: "Budha",
    grahaEnglish: "Mercury",
    symbol: "♊",
    assetKey: "mithuna",
  },
  Karka: {
    rashi: "Karka",
    label: "Karka",
    shortLabel: "The Crab",
    westernEquivalent: "Cancer",
    color: "#328181",
    element: "Jala",
    guna: "Sattva",
    graha: "Chandra",
    grahaEnglish: "Moon",
    symbol: "♋",
    assetKey: "karka",
  },
  Simha: {
    rashi: "Simha",
    label: "Simha",
    shortLabel: "The Lion",
    westernEquivalent: "Leo",
    color: "#C97A30",
    element: "Agni",
    guna: "Sattva",
    graha: "Surya",
    grahaEnglish: "Sun",
    symbol: "♌",
    assetKey: "simha",
  },
  Kanya: {
    rashi: "Kanya",
    label: "Kanya",
    shortLabel: "The Maiden",
    westernEquivalent: "Virgo",
    color: "#818D59",
    element: "Prithvi",
    guna: "Rajas",
    graha: "Budha",
    grahaEnglish: "Mercury",
    symbol: "♍",
    assetKey: "kanya",
  },
  Tula: {
    rashi: "Tula",
    label: "Tula",
    shortLabel: "The Scales",
    westernEquivalent: "Libra",
    color: "#C7A356",
    element: "Vayu",
    guna: "Tamas",
    graha: "Shukra",
    grahaEnglish: "Venus",
    symbol: "♎",
    assetKey: "tula",
  },
  Vrischika: {
    rashi: "Vrischika",
    label: "Vrischika",
    shortLabel: "The Scorpion",
    westernEquivalent: "Scorpio",
    color: "#5D2200",
    element: "Jala",
    guna: "Rajas",
    graha: "Mangal",
    grahaEnglish: "Mars",
    symbol: "♏",
    assetKey: "vrischika",
  },
  Dhanu: {
    rashi: "Dhanu",
    label: "Dhanu",
    shortLabel: "The Archer",
    westernEquivalent: "Sagittarius",
    color: "#876E00",
    element: "Agni",
    guna: "Sattva",
    graha: "Guru",
    grahaEnglish: "Jupiter",
    symbol: "♐",
    assetKey: "dhanu",
  },
  Makara: {
    rashi: "Makara",
    label: "Makara",
    shortLabel: "The Sea-Goat",
    westernEquivalent: "Capricorn",
    color: "#626350",
    element: "Prithvi",
    guna: "Tamas",
    graha: "Shani",
    grahaEnglish: "Saturn",
    symbol: "♑",
    assetKey: "makara",
  },
  Kumbha: {
    rashi: "Kumbha",
    label: "Kumbha",
    shortLabel: "The Water-Bearer",
    westernEquivalent: "Aquarius",
    color: "#93A2B6",
    element: "Vayu",
    guna: "Tamas",
    graha: "Shani",
    grahaEnglish: "Saturn",
    symbol: "♒",
    assetKey: "kumbha",
  },
  Meena: {
    rashi: "Meena",
    label: "Meena",
    shortLabel: "The Fish",
    westernEquivalent: "Pisces",
    color: "#328181",
    element: "Jala",
    guna: "Sattva",
    graha: "Guru",
    grahaEnglish: "Jupiter",
    symbol: "♓",
    assetKey: "meena",
  },
};

export function isValidRashi(s: string): s is VedicRashi {
  return VALID_RASHIS.includes(s as VedicRashi);
}

export function westernToVedic(western: string): VedicRashi | null {
  return WESTERN_TO_VEDIC[western] ?? null;
}

export function getRashiColor(rashi: VedicRashi): string {
  return RASHI_META[rashi].color;
}

export function getRashiElement(rashi: VedicRashi): VedicElement {
  return RASHI_META[rashi].element;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/vedic/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/vedic/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/vedic/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/vedic/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/vedic/${assetKey}/${assetKey}-growth.svg`,
  };
}
