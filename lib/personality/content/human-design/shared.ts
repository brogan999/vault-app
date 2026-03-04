export type HumanDesignTypeId =
  | "manifestor"
  | "generator"
  | "manifesting-generator"
  | "projector"
  | "reflector";

export const VALID_TYPE_IDS: readonly HumanDesignTypeId[] = [
  "manifestor",
  "generator",
  "manifesting-generator",
  "projector",
  "reflector",
];

export interface HDTypeMeta {
  typeId: HumanDesignTypeId;
  label: string;
  shortLabel: string;
  color: string;
  strategy: string;
  signature: string;
  notSelfTheme: string;
  populationPercent: string;
  assetKey: string;
}

export const TYPE_META: Record<HumanDesignTypeId, HDTypeMeta> = {
  manifestor: {
    typeId: "manifestor",
    label: "Manifestor",
    shortLabel: "The Initiator",
    color: "#A03B0F",
    strategy: "To inform before acting",
    signature: "Peace",
    notSelfTheme: "Anger",
    populationPercent: "~9%",
    assetKey: "manifestor",
  },
  generator: {
    typeId: "generator",
    label: "Generator",
    shortLabel: "The Life Force",
    color: "#315E36",
    strategy: "To wait to respond",
    signature: "Satisfaction",
    notSelfTheme: "Frustration",
    populationPercent: "~37%",
    assetKey: "generator",
  },
  "manifesting-generator": {
    typeId: "manifesting-generator",
    label: "Manifesting Generator",
    shortLabel: "The Express Builder",
    color: "#C97A30",
    strategy: "To wait to respond, then inform",
    signature: "Satisfaction",
    notSelfTheme: "Frustration & Anger",
    populationPercent: "~33%",
    assetKey: "mangen",
  },
  projector: {
    typeId: "projector",
    label: "Projector",
    shortLabel: "The Guide",
    color: "#328181",
    strategy: "To wait for the invitation",
    signature: "Success",
    notSelfTheme: "Bitterness",
    populationPercent: "~20%",
    assetKey: "projector",
  },
  reflector: {
    typeId: "reflector",
    label: "Reflector",
    shortLabel: "The Mirror",
    color: "#93A2B6",
    strategy: "To wait a lunar cycle",
    signature: "Surprise",
    notSelfTheme: "Disappointment",
    populationPercent: "~1%",
    assetKey: "reflector",
  },
};

export function getTypeLabel(id: HumanDesignTypeId): string {
  return TYPE_META[id].label;
}

export function getTypeColor(id: HumanDesignTypeId): string {
  return TYPE_META[id].color;
}

export function isValidTypeId(s: string): s is HumanDesignTypeId {
  return VALID_TYPE_IDS.includes(s as HumanDesignTypeId);
}

export function buildHeroImagePath(assetKey: string): string {
  return `/characters/humandesign/${assetKey}/${assetKey}-reveal.svg`;
}

export function buildSectionImages(
  assetKey: string,
): { strengths: string; relationships: string; career: string; growth: string } {
  return {
    strengths: `/characters/humandesign/${assetKey}/${assetKey}-strengths.svg`,
    relationships: `/characters/humandesign/${assetKey}/${assetKey}-relationships.svg`,
    career: `/characters/humandesign/${assetKey}/${assetKey}-career.svg`,
    growth: `/characters/humandesign/${assetKey}/${assetKey}-growth.svg`,
  };
}
