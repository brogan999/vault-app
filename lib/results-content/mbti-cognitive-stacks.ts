export interface FunctionDef {
  code: string;
  dimension: "SN" | "TF";
  attitude: "i" | "e";
  name: string;
}

export interface CognitiveStackDef {
  dominant: FunctionDef;
  auxiliary: FunctionDef;
  tertiary: FunctionDef;
  inferior: FunctionDef;
}

function fn(
  code: string,
  dimension: "SN" | "TF",
  attitude: "i" | "e",
  name: string,
): FunctionDef {
  return { code, dimension, attitude, name };
}

const Ni = (a: "i" | "e" = "i") =>
  fn("Ni", "SN", a, "Introverted Intuition");
const Ne = (a: "i" | "e" = "e") =>
  fn("Ne", "SN", a, "Extraverted Intuition");
const Si = (a: "i" | "e" = "i") => fn("Si", "SN", a, "Introverted Sensing");
const Se = (a: "i" | "e" = "e") => fn("Se", "SN", a, "Extraverted Sensing");
const Ti = (a: "i" | "e" = "i") =>
  fn("Ti", "TF", a, "Introverted Thinking");
const Te = (a: "i" | "e" = "e") =>
  fn("Te", "TF", a, "Extraverted Thinking");
const Fi = (a: "i" | "e" = "i") => fn("Fi", "TF", a, "Introverted Feeling");
const Fe = (a: "i" | "e" = "e") => fn("Fe", "TF", a, "Extraverted Feeling");

/**
 * Jungian cognitive function stack for every MBTI type.
 * Order: dominant → auxiliary → tertiary → inferior.
 */
export const COGNITIVE_STACKS: Record<string, CognitiveStackDef> = {
  // ---- NT Rationals ----
  INTJ: {
    dominant: Ni(),
    auxiliary: Te(),
    tertiary: Fi(),
    inferior: Se(),
  },
  INTP: {
    dominant: Ti(),
    auxiliary: Ne(),
    tertiary: Si(),
    inferior: Fe(),
  },
  ENTJ: {
    dominant: Te(),
    auxiliary: Ni(),
    tertiary: Se(),
    inferior: Fi(),
  },
  ENTP: {
    dominant: Ne(),
    auxiliary: Ti(),
    tertiary: Fe(),
    inferior: Si(),
  },

  // ---- NF Idealists ----
  INFJ: {
    dominant: Ni(),
    auxiliary: Fe(),
    tertiary: Ti(),
    inferior: Se(),
  },
  INFP: {
    dominant: Fi(),
    auxiliary: Ne(),
    tertiary: Si(),
    inferior: Te(),
  },
  ENFJ: {
    dominant: Fe(),
    auxiliary: Ni(),
    tertiary: Se(),
    inferior: Ti(),
  },
  ENFP: {
    dominant: Ne(),
    auxiliary: Fi(),
    tertiary: Te(),
    inferior: Si(),
  },

  // ---- SJ Guardians ----
  ISTJ: {
    dominant: Si(),
    auxiliary: Te(),
    tertiary: Fi(),
    inferior: Ne(),
  },
  ISFJ: {
    dominant: Si(),
    auxiliary: Fe(),
    tertiary: Ti(),
    inferior: Ne(),
  },
  ESTJ: {
    dominant: Te(),
    auxiliary: Si(),
    tertiary: Ne(),
    inferior: Fi(),
  },
  ESFJ: {
    dominant: Fe(),
    auxiliary: Si(),
    tertiary: Ne(),
    inferior: Ti(),
  },

  // ---- SP Artisans ----
  ISTP: {
    dominant: Ti(),
    auxiliary: Se(),
    tertiary: Ni(),
    inferior: Fe(),
  },
  ISFP: {
    dominant: Fi(),
    auxiliary: Se(),
    tertiary: Ni(),
    inferior: Te(),
  },
  ESTP: {
    dominant: Se(),
    auxiliary: Ti(),
    tertiary: Fe(),
    inferior: Ni(),
  },
  ESFP: {
    dominant: Se(),
    auxiliary: Fi(),
    tertiary: Te(),
    inferior: Ni(),
  },
};
