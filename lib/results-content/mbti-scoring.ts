import type { TestScores } from "@/lib/tests/types";
import type { DimensionBarConfig } from "./types";
import type { FunctionDef } from "./mbti-cognitive-stacks";
import { COGNITIVE_STACKS } from "./mbti-cognitive-stacks";
import { ENVIRONMENT_MAPPINGS } from "./mbti-environment";

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface DimensionScores {
  EI: number; // 0-100, higher = more Introverted
  SN: number; // 0-100, higher = more iNtuitive
  TF: number; // 0-100, higher = more Thinking
  JP: number; // 0-100, higher = more Judging
}

export interface CognitiveFunction {
  position: "Dominant" | "Auxiliary" | "Tertiary" | "Inferior";
  code: string;
  name: string;
  score: number;
  roleDescription: string;
  description: string;
}

export interface CognitiveCard {
  dimension: string;
  mode: string;
  score: number;
  accentColor: string;
  description: string;
}

export interface EnvironmentPref {
  factor: string;
  score: number;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const POSITION_SCORES = {
  dominant: 30,
  auxiliary: 20,
  tertiary: 10,
  inferior: 0,
} as const;

const ROLE_DESCRIPTIONS: Record<string, string> = {
  dominant: "Your primary lens. Always running.",
  auxiliary: "How you support and execute.",
  tertiary: "Developing. Present but inconsistent.",
  inferior: "Your blind spot. Requires conscious effort.",
};

const POSITIONS = ["dominant", "auxiliary", "tertiary", "inferior"] as const;

/**
 * Maps from the 8-pole dimension IDs used by the test scoring engine to
 * the pole that represents the "high" direction for each bipolar axis.
 */
const POLE_TO_AXIS: Record<string, keyof DimensionScores> = {
  introversion: "EI",
  intuition: "SN",
  thinking: "TF",
  judging: "JP",
};

const DIMENSION_BAR_DEFS: Record<
  string,
  { dimensionId: string; leftLabel: string; rightLabel: string; barColor: string; dominantSide: "left" | "right"; dominantLabel: string }
> = {
  E: { dimensionId: "extraversion-m", leftLabel: "Extraverted", rightLabel: "Introverted", barColor: "#328181", dominantSide: "left", dominantLabel: "Extraverted" },
  I: { dimensionId: "introversion", leftLabel: "Extraverted", rightLabel: "Introverted", barColor: "#328181", dominantSide: "right", dominantLabel: "Introverted" },
  S: { dimensionId: "sensing", leftLabel: "Intuitive", rightLabel: "Sensing", barColor: "#C7A356", dominantSide: "right", dominantLabel: "Sensing" },
  N: { dimensionId: "intuition", leftLabel: "Intuitive", rightLabel: "Sensing", barColor: "#C7A356", dominantSide: "left", dominantLabel: "Intuitive" },
  T: { dimensionId: "thinking", leftLabel: "Thinking", rightLabel: "Feeling", barColor: "#315E36", dominantSide: "left", dominantLabel: "Thinking" },
  F: { dimensionId: "feeling", leftLabel: "Thinking", rightLabel: "Feeling", barColor: "#315E36", dominantSide: "right", dominantLabel: "Feeling" },
  J: { dimensionId: "judging", leftLabel: "Judging", rightLabel: "Perceiving", barColor: "#916368", dominantSide: "left", dominantLabel: "Judging" },
  P: { dimensionId: "perceiving", leftLabel: "Judging", rightLabel: "Perceiving", barColor: "#916368", dominantSide: "right", dominantLabel: "Perceiving" },
};

/* ------------------------------------------------------------------ */
/*  1. extractDimensionScores                                          */
/* ------------------------------------------------------------------ */

/**
 * Bridge from the 8-pole test scoring system to the 4-bipolar format
 * used by all computation functions.
 *
 * Uses the "dominant-side" pole score directly:
 *   EI = introversion score  (higher → more I)
 *   SN = intuition score     (higher → more N)
 *   TF = thinking score      (higher → more T)
 *   JP = judging score       (higher → more J)
 */
export function extractDimensionScores(scores: TestScores): DimensionScores {
  const dims = scores.dimensions;
  const result: DimensionScores = { EI: 50, SN: 50, TF: 50, JP: 50 };

  for (const d of dims) {
    const axis = POLE_TO_AXIS[d.dimensionId];
    if (axis) result[axis] = d.score;
  }

  return result;
}

/* ------------------------------------------------------------------ */
/*  2. computeCognitiveStack                                           */
/* ------------------------------------------------------------------ */

/**
 * Whether a cognitive function sits on the dominant side of its dimension
 * for the given type. E.g. Ni is on the N side of S/N — dominant for INTJ.
 */
function isDominantFunction(func: FunctionDef, typeCode: string): boolean {
  if (func.dimension === "SN") {
    const snLetter = typeCode.charAt(1); // S or N
    const funcLetter = func.code.charAt(0) === "N" ? "N" : "S";
    return snLetter === funcLetter;
  }
  if (func.dimension === "TF") {
    const tfLetter = typeCode.charAt(2); // T or F
    const funcLetter = func.code.charAt(0) === "T" ? "T" : "F";
    return tfLetter === funcLetter;
  }
  return false;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Compute scored cognitive function stack for a type + dimension profile.
 *
 * Formula per function:
 *   score = (dimensionStrength * 0.55)
 *         + (attitudeAlignment * 0.15)
 *         + (positionBonus * 1.0)
 *
 * - dimensionStrength: raw dim score if on the dominant side, else inverted.
 * - attitudeAlignment: EI score if introverted function, else 100-EI.
 * - positionBonus: 30 / 20 / 10 / 0 for dom / aux / tert / inf.
 */
export function computeCognitiveStack(
  typeCode: string,
  dims: DimensionScores,
): CognitiveFunction[] {
  const stackDef = COGNITIVE_STACKS[typeCode];
  if (!stackDef) throw new Error(`Unknown type: ${typeCode}`);

  return POSITIONS.map((position) => {
    const func = stackDef[position];

    const rawDimScore = dims[func.dimension as keyof DimensionScores];
    const dimensionStrength = isDominantFunction(func, typeCode)
      ? rawDimScore
      : 100 - rawDimScore;

    const attitudeAlignment =
      func.attitude === "i" ? dims.EI : 100 - dims.EI;

    const positionBonus = POSITION_SCORES[position];

    const score = Math.round(
      Math.min(
        100,
        Math.max(
          0,
          dimensionStrength * 0.55 +
            attitudeAlignment * 0.15 +
            positionBonus * 1.0,
        ),
      ),
    );

    return {
      position: capitalize(position) as CognitiveFunction["position"],
      code: func.code,
      name: func.name,
      score,
      roleDescription: ROLE_DESCRIPTIONS[position],
      description: "",
    };
  });
}

/* ------------------------------------------------------------------ */
/*  3. buildCognitivePortrait                                          */
/* ------------------------------------------------------------------ */

const PORTRAIT_ACCENT_COLORS = [
  "#328181", // chart-1  EI
  "#C7A356", // chart-2  SN
  "#93A2B6", // chart-3  TF
  "#818D59", // chart-4  JP
] as const;

/**
 * Build the 4 Cognitive Portrait cards from dimension scores.
 *
 * @param descriptions - Per-type prose for each card (length 4).
 *   Indexes: 0 = EI, 1 = SN, 2 = TF, 3 = JP.
 */
export function buildCognitivePortrait(
  typeCode: string,
  dims: DimensionScores,
  descriptions: string[] = [],
): CognitiveCard[] {
  const isIntrovert = typeCode.charAt(0) === "I";
  const isIntuitive = typeCode.charAt(1) === "N";
  const isThinker = typeCode.charAt(2) === "T";
  const isJudger = typeCode.charAt(3) === "J";

  return [
    {
      dimension: "How You Recharge",
      mode: isIntrovert ? "Inner World" : "Outer World",
      score: dims.EI,
      accentColor: PORTRAIT_ACCENT_COLORS[0],
      description: descriptions[0] ?? "",
    },
    {
      dimension: "How You Take In Information",
      mode: isIntuitive ? "Patterns First" : "Details First",
      score: dims.SN,
      accentColor: PORTRAIT_ACCENT_COLORS[1],
      description: descriptions[1] ?? "",
    },
    {
      dimension: "How You Decide",
      mode: isThinker ? "Logic-First" : "Values-First",
      score: dims.TF,
      accentColor: PORTRAIT_ACCENT_COLORS[2],
      description: descriptions[2] ?? "",
    },
    {
      dimension: "How You Organize",
      mode: isJudger ? "Structured Closure" : "Flexible Exploration",
      score: dims.JP,
      accentColor: PORTRAIT_ACCENT_COLORS[3],
      description: descriptions[3] ?? "",
    },
  ];
}

/* ------------------------------------------------------------------ */
/*  4. computeEnvironmentPrefs                                         */
/* ------------------------------------------------------------------ */

/**
 * Compute career environment preference scores.
 *
 * Formula: score = clamp(0, 100, baseline + (dimScore − 50) × weight)
 */
export function computeEnvironmentPrefs(
  typeCode: string,
  dims: DimensionScores,
): EnvironmentPref[] {
  const mappings = ENVIRONMENT_MAPPINGS[typeCode] ?? [];

  return mappings.map((mapping) => {
    let score = mapping.typeBaseline;

    if (mapping.baseDimension) {
      const dimScore = dims[mapping.baseDimension];
      const adjustment = (dimScore - 50) * mapping.baseWeight;
      score = Math.round(Math.min(100, Math.max(0, score + adjustment)));
    }

    return { factor: mapping.factor, score };
  });
}

/* ------------------------------------------------------------------ */
/*  5. buildDimensionBars                                              */
/* ------------------------------------------------------------------ */

/**
 * Select the 4 dimension bar configs (one per dichotomy) that match the
 * user's type. E.g. INTJ → [ I-bar, N-bar, T-bar, J-bar ].
 */
export function buildDimensionBars(
  typeCode: string,
  _dims: DimensionScores,
): DimensionBarConfig[] {
  return [
    typeCode.charAt(0),
    typeCode.charAt(1),
    typeCode.charAt(2),
    typeCode.charAt(3),
  ].map((letter) => {
    const def = DIMENSION_BAR_DEFS[letter];
    return {
      dimensionId: def.dimensionId,
      leftLabel: def.leftLabel,
      rightLabel: def.rightLabel,
      barColor: def.barColor,
      dominantSide: def.dominantSide,
      dominantLabel: def.dominantLabel,
    };
  });
}
