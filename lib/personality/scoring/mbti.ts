import type { TestScores } from "@/lib/tests/types";
import {
  extractDimensionScores,
  computeCognitiveStack,
  computeEnvironmentPrefs,
  buildCognitivePortrait,
  buildDimensionBars,
} from "@/lib/results-content/mbti-scoring";
import type { DimensionScores } from "@/lib/results-content/mbti-scoring";
import type {
  CognitiveCard,
  EnvironmentPref,
} from "@/lib/results-content/mbti-scoring";
import type { DimensionBarConfig } from "@/lib/results-content/types";

export type { DimensionScores } from "@/lib/results-content/mbti-scoring";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type CognitiveFunctionCode =
  | "Ni" | "Ne" | "Si" | "Se"
  | "Ti" | "Te" | "Fi" | "Fe";

export interface MBTIRawScores {
  EI: number; // -100 to +100 (negative = I, positive = E)
  SN: number; // -100 to +100 (negative = S, positive = N)
  TF: number; // -100 to +100 (negative = T, positive = F)
  JP: number; // -100 to +100 (negative = J, positive = P)
}

export interface MBTIDimensionResult {
  preference: string;
  strength: number;
  percentage: number;
}

export interface MBTIScoredResult {
  typeCode: string;
  dimensions: {
    EI: MBTIDimensionResult;
    SN: MBTIDimensionResult;
    TF: MBTIDimensionResult;
    JP: MBTIDimensionResult;
  };
  cognitiveStack: CognitiveFunctionCode[];
  /** 0-100 bipolar dimension scores (reused from existing scoring) */
  dimensionScores: DimensionScores;
  /** Pre-built UI data from existing scoring utilities */
  ui: {
    cognitivePortrait: CognitiveCard[];
    dimensionBarConfig: DimensionBarConfig[];
    environmentPrefs: EnvironmentPref[];
    cognitiveStackScored: Array<{
      position: "Dominant" | "Auxiliary" | "Tertiary" | "Inferior";
      code: string;
      name: string;
      score: number;
      roleDescription: string;
      description: string;
    }>;
  };
}

/* ------------------------------------------------------------------ */
/*  Cognitive stack lookup                                             */
/* ------------------------------------------------------------------ */

const COGNITIVE_STACK_MAP: Record<string, CognitiveFunctionCode[]> = {
  ENFP: ["Ne", "Fi", "Te", "Si"],
  ENFJ: ["Fe", "Ni", "Se", "Ti"],
  ENTP: ["Ne", "Ti", "Fe", "Si"],
  ENTJ: ["Te", "Ni", "Se", "Fi"],
  INFP: ["Fi", "Ne", "Si", "Te"],
  INFJ: ["Ni", "Fe", "Ti", "Se"],
  INTP: ["Ti", "Ne", "Si", "Fe"],
  INTJ: ["Ni", "Te", "Fi", "Se"],
  ESFP: ["Se", "Fi", "Te", "Ni"],
  ESFJ: ["Fe", "Si", "Ne", "Ti"],
  ESTP: ["Se", "Ti", "Fe", "Ni"],
  ESTJ: ["Te", "Si", "Ne", "Fi"],
  ISFP: ["Fi", "Se", "Ni", "Te"],
  ISFJ: ["Si", "Fe", "Ti", "Ne"],
  ISTP: ["Ti", "Se", "Ni", "Fe"],
  ISTJ: ["Si", "Te", "Fi", "Ne"],
};

/* ------------------------------------------------------------------ */
/*  scoreMBTI — from raw bipolar scores                                */
/* ------------------------------------------------------------------ */

export function scoreMBTI(raw: MBTIRawScores): MBTIScoredResult {
  const getPreference = (
    score: number,
    neg: string,
    pos: string,
  ): MBTIDimensionResult => ({
    preference: score < 0 ? neg : pos,
    strength: Math.abs(score),
    percentage: Math.round(50 + score / 2),
  });

  const dims = {
    EI: getPreference(raw.EI, "I", "E"),
    SN: getPreference(raw.SN, "S", "N"),
    TF: getPreference(raw.TF, "T", "F"),
    JP: getPreference(raw.JP, "J", "P"),
  };

  const typeCode = `${dims.EI.preference}${dims.SN.preference}${dims.TF.preference}${dims.JP.preference}`;
  const cognitiveStack = COGNITIVE_STACK_MAP[typeCode] ?? [];

  const dimensionScores: DimensionScores = {
    EI: 100 - dims.EI.percentage, // invert: higher = more I (matching existing convention)
    SN: dims.SN.percentage,       // higher = more N
    TF: 100 - dims.TF.percentage, // invert: higher = more T
    JP: 100 - dims.JP.percentage, // invert: higher = more J
  };

  return {
    typeCode,
    dimensions: dims,
    cognitiveStack,
    dimensionScores,
    ui: {
      cognitivePortrait: buildCognitivePortrait(typeCode, dimensionScores),
      dimensionBarConfig: buildDimensionBars(typeCode, dimensionScores),
      environmentPrefs: computeEnvironmentPrefs(typeCode, dimensionScores),
      cognitiveStackScored: computeCognitiveStack(typeCode, dimensionScores),
    },
  };
}

/* ------------------------------------------------------------------ */
/*  fromTestScores — bridge from existing TestScores format            */
/* ------------------------------------------------------------------ */

/**
 * Convert the existing `TestScores` (produced by `lib/tests/mbti.ts`)
 * into an `MBTIScoredResult` consumable by the new content generators.
 */
export function fromTestScores(scores: TestScores): MBTIScoredResult {
  const dimensionScores = extractDimensionScores(scores);
  const code =
    scores.typeCode?.replace(/-[A-Z]$/, "").toUpperCase() ?? "INTJ";

  const cognitiveStack = COGNITIVE_STACK_MAP[code] ?? [];

  const toPref = (
    axis: keyof DimensionScores,
    low: string,
    high: string,
  ): MBTIDimensionResult => {
    const score = dimensionScores[axis];
    const preference = score >= 50 ? high : low;
    return {
      preference,
      strength: Math.abs(score - 50) * 2,
      percentage: score,
    };
  };

  return {
    typeCode: code,
    dimensions: {
      EI: toPref("EI", "E", "I"),
      SN: toPref("SN", "S", "N"),
      TF: toPref("TF", "S", "T"), // note: high = T in existing scoring
      JP: toPref("JP", "P", "J"),
    },
    cognitiveStack,
    dimensionScores,
    ui: {
      cognitivePortrait: buildCognitivePortrait(code, dimensionScores),
      dimensionBarConfig: buildDimensionBars(code, dimensionScores),
      environmentPrefs: computeEnvironmentPrefs(code, dimensionScores),
      cognitiveStackScored: computeCognitiveStack(code, dimensionScores),
    },
  };
}
