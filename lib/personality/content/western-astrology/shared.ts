export type ZodiacSign =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export type Element = "Fire" | "Earth" | "Air" | "Water";
export type Modality = "Cardinal" | "Fixed" | "Mutable";

export const VALID_SIGNS: readonly ZodiacSign[] = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
];

export interface SignMeta {
  sign: ZodiacSign;
  label: string;
  shortLabel: string;
  color: string;
  element: Element;
  modality: Modality;
  rulingPlanet: string;
  symbol: string;
  assetKey: string;
}

export const SIGN_META: Record<ZodiacSign, SignMeta> = {
  Aries:       { sign: "Aries",       label: "Aries",       shortLabel: "The Ram",         color: "#A03B0F", element: "Fire",  modality: "Cardinal", rulingPlanet: "Mars",            symbol: "♈", assetKey: "aries" },
  Taurus:      { sign: "Taurus",      label: "Taurus",      shortLabel: "The Bull",        color: "#315E36", element: "Earth", modality: "Fixed",    rulingPlanet: "Venus",           symbol: "♉", assetKey: "taurus" },
  Gemini:      { sign: "Gemini",      label: "Gemini",      shortLabel: "The Twins",       color: "#C7A356", element: "Air",   modality: "Mutable",  rulingPlanet: "Mercury",         symbol: "♊", assetKey: "gemini" },
  Cancer:      { sign: "Cancer",      label: "Cancer",      shortLabel: "The Crab",        color: "#CC8D90", element: "Water", modality: "Cardinal", rulingPlanet: "Moon",            symbol: "♋", assetKey: "cancer" },
  Leo:         { sign: "Leo",         label: "Leo",         shortLabel: "The Lion",        color: "#C97A30", element: "Fire",  modality: "Fixed",    rulingPlanet: "Sun",             symbol: "♌", assetKey: "leo" },
  Virgo:       { sign: "Virgo",       label: "Virgo",       shortLabel: "The Maiden",      color: "#818D59", element: "Earth", modality: "Mutable",  rulingPlanet: "Mercury",         symbol: "♍", assetKey: "virgo" },
  Libra:       { sign: "Libra",       label: "Libra",       shortLabel: "The Scales",      color: "#93A2B6", element: "Air",   modality: "Cardinal", rulingPlanet: "Venus",           symbol: "♎", assetKey: "libra" },
  Scorpio:     { sign: "Scorpio",     label: "Scorpio",     shortLabel: "The Scorpion",    color: "#916368", element: "Water", modality: "Fixed",    rulingPlanet: "Pluto / Mars",    symbol: "♏", assetKey: "scorpio" },
  Sagittarius: { sign: "Sagittarius", label: "Sagittarius", shortLabel: "The Archer",      color: "#876E00", element: "Fire",  modality: "Mutable",  rulingPlanet: "Jupiter",         symbol: "♐", assetKey: "sagittarius" },
  Capricorn:   { sign: "Capricorn",   label: "Capricorn",   shortLabel: "The Sea-Goat",    color: "#626350", element: "Earth", modality: "Cardinal", rulingPlanet: "Saturn",          symbol: "♑", assetKey: "capricorn" },
  Aquarius:    { sign: "Aquarius",    label: "Aquarius",    shortLabel: "The Water Bearer", color: "#328181", element: "Air",   modality: "Fixed",    rulingPlanet: "Uranus / Saturn", symbol: "♒", assetKey: "aquarius" },
  Pisces:      { sign: "Pisces",      label: "Pisces",      shortLabel: "The Fish",        color: "#7B6B8A", element: "Water", modality: "Mutable",  rulingPlanet: "Neptune / Jupiter", symbol: "♓", assetKey: "pisces" },
};

export function isValidSign(s: string): s is ZodiacSign {
  return VALID_SIGNS.includes(s as ZodiacSign);
}

export function getSignColor(sign: ZodiacSign): string {
  return SIGN_META[sign].color;
}

export function getSignElement(sign: ZodiacSign): Element {
  return SIGN_META[sign].element;
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/western-astro/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(assetKey: string): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/western-astro/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/western-astro/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/western-astro/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/western-astro/${assetKey}/${assetKey}-growth.svg`,
  };
}
