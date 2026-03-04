import { describe, it, expect } from "vitest";
import type { TestScores } from "@/lib/tests/types";
import {
  extractDimensionScores,
  computeCognitiveStack,
  buildCognitivePortrait,
  computeEnvironmentPrefs,
  buildDimensionBars,
} from "@/lib/results-content/mbti-scoring";
import type { DimensionScores } from "@/lib/results-content/mbti-scoring";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function makeTestScores(overrides: {
  introversion?: number;
  intuition?: number;
  thinking?: number;
  judging?: number;
  extraversionM?: number;
  sensing?: number;
  feeling?: number;
  perceiving?: number;
  typeCode?: string;
}): TestScores {
  return {
    dimensions: [
      { dimensionId: "extraversion-m", label: "Extraversion (E)", score: overrides.extraversionM ?? 50, rawScore: 0, description: "" },
      { dimensionId: "introversion", label: "Introversion (I)", score: overrides.introversion ?? 50, rawScore: 0, description: "" },
      { dimensionId: "sensing", label: "Sensing (S)", score: overrides.sensing ?? 50, rawScore: 0, description: "" },
      { dimensionId: "intuition", label: "Intuition (N)", score: overrides.intuition ?? 50, rawScore: 0, description: "" },
      { dimensionId: "thinking", label: "Thinking (T)", score: overrides.thinking ?? 50, rawScore: 0, description: "" },
      { dimensionId: "feeling", label: "Feeling (F)", score: overrides.feeling ?? 50, rawScore: 0, description: "" },
      { dimensionId: "judging", label: "Judging (J)", score: overrides.judging ?? 50, rawScore: 0, description: "" },
      { dimensionId: "perceiving", label: "Perceiving (P)", score: overrides.perceiving ?? 50, rawScore: 0, description: "" },
    ],
    typeCode: overrides.typeCode,
  };
}

const ALL_TYPES = [
  "INTJ", "INTP", "ENTJ", "ENTP",
  "INFJ", "INFP", "ENFJ", "ENFP",
  "ISTJ", "ISFJ", "ESTJ", "ESFJ",
  "ISTP", "ISFP", "ESTP", "ESFP",
];

/* ------------------------------------------------------------------ */
/*  extractDimensionScores                                             */
/* ------------------------------------------------------------------ */

describe("extractDimensionScores", () => {
  it("maps 8-pole dimension IDs to 4-bipolar scores", () => {
    const scores = makeTestScores({
      introversion: 78,
      intuition: 72,
      thinking: 91,
      judging: 68,
    });
    const dims = extractDimensionScores(scores);

    expect(dims.EI).toBe(78);
    expect(dims.SN).toBe(72);
    expect(dims.TF).toBe(91);
    expect(dims.JP).toBe(68);
  });

  it("defaults to 50 for missing dimensions", () => {
    const scores: TestScores = { dimensions: [] };
    const dims = extractDimensionScores(scores);

    expect(dims.EI).toBe(50);
    expect(dims.SN).toBe(50);
    expect(dims.TF).toBe(50);
    expect(dims.JP).toBe(50);
  });

  it("ignores non-axis poles (extraversion-m, sensing, feeling, perceiving)", () => {
    const scores = makeTestScores({
      extraversionM: 99,
      sensing: 99,
      feeling: 99,
      perceiving: 99,
      introversion: 60,
      intuition: 70,
      thinking: 80,
      judging: 55,
    });
    const dims = extractDimensionScores(scores);

    expect(dims.EI).toBe(60);
    expect(dims.SN).toBe(70);
    expect(dims.TF).toBe(80);
    expect(dims.JP).toBe(55);
  });
});

/* ------------------------------------------------------------------ */
/*  computeCognitiveStack                                              */
/* ------------------------------------------------------------------ */

describe("computeCognitiveStack", () => {
  it("INTJ with strong scores produces correct stack and scores", () => {
    const dims: DimensionScores = { EI: 78, SN: 72, TF: 91, JP: 68 };
    const stack = computeCognitiveStack("INTJ", dims);

    expect(stack[0].code).toBe("Ni");
    expect(stack[1].code).toBe("Te");
    expect(stack[2].code).toBe("Fi");
    expect(stack[3].code).toBe("Se");

    expect(stack[0].position).toBe("Dominant");
    expect(stack[1].position).toBe("Auxiliary");
    expect(stack[2].position).toBe("Tertiary");
    expect(stack[3].position).toBe("Inferior");

    // Worked example from architecture doc:
    // Ni: (72 * 0.55) + (78 * 0.15) + 30 = 39.6 + 11.7 + 30 = 81.3 → 81
    expect(stack[0].score).toBe(81);
    // Te: (91 * 0.55) + (22 * 0.15) + 20 = 50.05 + 3.3 + 20 = 73.35 → 73
    expect(stack[1].score).toBe(73);
    // Fi: (9 * 0.55) + (78 * 0.15) + 10 = 4.95 + 11.7 + 10 = 26.65 → 27
    expect(stack[2].score).toBe(27);
    // Se: (28 * 0.55) + (22 * 0.15) + 0 = 15.4 + 3.3 + 0 = 18.7 → 19
    expect(stack[3].score).toBe(19);

    // Dominant highest, inferior lowest
    expect(stack[0].score).toBeGreaterThan(stack[1].score);
    expect(stack[3].score).toBeLessThan(stack[2].score);
  });

  it("handles borderline scores without inverting stack", () => {
    const dims: DimensionScores = { EI: 52, SN: 51, TF: 53, JP: 50 };
    const stack = computeCognitiveStack("INTJ", dims);

    expect(stack[0].score).toBeGreaterThanOrEqual(stack[3].score);
  });

  it("all 16 types produce valid stacks", () => {
    const dims: DimensionScores = { EI: 65, SN: 60, TF: 70, JP: 55 };

    for (const type of ALL_TYPES) {
      const stack = computeCognitiveStack(type, dims);
      expect(stack).toHaveLength(4);
      expect(stack[0].position).toBe("Dominant");
      expect(stack[1].position).toBe("Auxiliary");
      expect(stack[2].position).toBe("Tertiary");
      expect(stack[3].position).toBe("Inferior");
    }
  });

  it("includes role descriptions for every position", () => {
    const dims: DimensionScores = { EI: 65, SN: 60, TF: 70, JP: 55 };
    const stack = computeCognitiveStack("INTJ", dims);

    expect(stack[0].roleDescription).toBe("Your primary lens. Always running.");
    expect(stack[1].roleDescription).toBe("How you support and execute.");
    expect(stack[2].roleDescription).toBe("Developing. Present but inconsistent.");
    expect(stack[3].roleDescription).toBe("Your blind spot. Requires conscious effort.");
  });

  it("throws for unknown type code", () => {
    const dims: DimensionScores = { EI: 50, SN: 50, TF: 50, JP: 50 };
    expect(() => computeCognitiveStack("XXXX", dims)).toThrow("Unknown type: XXXX");
  });

  it("clamps scores to 0-100 range", () => {
    const dims: DimensionScores = { EI: 100, SN: 100, TF: 100, JP: 100 };
    const stack = computeCognitiveStack("INTJ", dims);

    for (const fn of stack) {
      expect(fn.score).toBeGreaterThanOrEqual(0);
      expect(fn.score).toBeLessThanOrEqual(100);
    }

    const dimsLow: DimensionScores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    const stackLow = computeCognitiveStack("INTJ", dimsLow);

    for (const fn of stackLow) {
      expect(fn.score).toBeGreaterThanOrEqual(0);
      expect(fn.score).toBeLessThanOrEqual(100);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  buildCognitivePortrait                                             */
/* ------------------------------------------------------------------ */

describe("buildCognitivePortrait", () => {
  const descriptions = [
    "EI description",
    "SN description",
    "TF description",
    "JP description",
  ];

  it("maps dimension scores to correct card scores", () => {
    const dims: DimensionScores = { EI: 78, SN: 72, TF: 91, JP: 68 };
    const portrait = buildCognitivePortrait("INTJ", dims, descriptions);

    expect(portrait[0].score).toBe(78);
    expect(portrait[1].score).toBe(72);
    expect(portrait[2].score).toBe(91);
    expect(portrait[3].score).toBe(68);
  });

  it("uses correct mode labels for INTJ", () => {
    const dims: DimensionScores = { EI: 78, SN: 72, TF: 91, JP: 68 };
    const portrait = buildCognitivePortrait("INTJ", dims, descriptions);

    expect(portrait[0].mode).toBe("Inner World");
    expect(portrait[1].mode).toBe("Patterns First");
    expect(portrait[2].mode).toBe("Logic-First");
    expect(portrait[3].mode).toBe("Structured Closure");
  });

  it("uses correct mode labels for ESFP (opposite poles)", () => {
    const dims: DimensionScores = { EI: 30, SN: 40, TF: 35, JP: 25 };
    const portrait = buildCognitivePortrait("ESFP", dims, descriptions);

    expect(portrait[0].mode).toBe("Outer World");
    expect(portrait[1].mode).toBe("Details First");
    expect(portrait[2].mode).toBe("Values-First");
    expect(portrait[3].mode).toBe("Flexible Exploration");
  });

  it("returns 4 cards with correct dimension labels", () => {
    const dims: DimensionScores = { EI: 50, SN: 50, TF: 50, JP: 50 };
    const portrait = buildCognitivePortrait("INTJ", dims);

    expect(portrait).toHaveLength(4);
    expect(portrait[0].dimension).toBe("How You Recharge");
    expect(portrait[1].dimension).toBe("How You Take In Information");
    expect(portrait[2].dimension).toBe("How You Decide");
    expect(portrait[3].dimension).toBe("How You Organize");
  });

  it("passes through descriptions and defaults to empty string", () => {
    const dims: DimensionScores = { EI: 50, SN: 50, TF: 50, JP: 50 };
    const withDescs = buildCognitivePortrait("INTJ", dims, descriptions);
    expect(withDescs[0].description).toBe("EI description");

    const without = buildCognitivePortrait("INTJ", dims);
    expect(without[0].description).toBe("");
  });
});

/* ------------------------------------------------------------------ */
/*  computeEnvironmentPrefs                                            */
/* ------------------------------------------------------------------ */

describe("computeEnvironmentPrefs", () => {
  it("INTJ worked example produces expected scores", () => {
    const dims: DimensionScores = { EI: 78, SN: 72, TF: 91, JP: 68 };
    const prefs = computeEnvironmentPrefs("INTJ", dims);

    // Autonomy:   70 + (78-50)*0.6  = 70 + 16.8 = 86.8 → 87
    expect(prefs[0].factor).toBe("Autonomy");
    expect(prefs[0].score).toBe(87);

    // Complexity:  75 + (72-50)*0.5  = 75 + 11 = 86
    expect(prefs[1].factor).toBe("Intellectual Complexity");
    expect(prefs[1].score).toBe(86);

    // Strategic:   65 + (68-50)*0.4  = 65 + 7.2 = 72.2 → 72
    expect(prefs[2].factor).toBe("Strategic Scope");
    expect(prefs[2].score).toBe(72);

    // Structure:   40 + (68-50)*0.5  = 40 + 9 = 49
    expect(prefs[3].factor).toBe("Structure");
    expect(prefs[3].score).toBe(49);

    // Team Size:   35 + (78-50)*-0.5 = 35 - 14 = 21
    expect(prefs[4].factor).toBe("Team Size (Small \u2190 Large)");
    expect(prefs[4].score).toBe(21);

    // Social:      25 + (78-50)*-0.6 = 25 - 16.8 = 8.2 → 8
    expect(prefs[5].factor).toBe("Social Interaction");
    expect(prefs[5].score).toBe(8);
  });

  it("clamps scores between 0 and 100", () => {
    const extreme: DimensionScores = { EI: 100, SN: 100, TF: 100, JP: 100 };
    const prefs = computeEnvironmentPrefs("INTJ", extreme);

    for (const p of prefs) {
      expect(p.score).toBeGreaterThanOrEqual(0);
      expect(p.score).toBeLessThanOrEqual(100);
    }
  });

  it("returns empty array for unknown type", () => {
    const dims: DimensionScores = { EI: 50, SN: 50, TF: 50, JP: 50 };
    expect(computeEnvironmentPrefs("XXXX", dims)).toEqual([]);
  });

  it("all 16 types produce non-empty preferences", () => {
    const dims: DimensionScores = { EI: 60, SN: 55, TF: 65, JP: 58 };

    for (const type of ALL_TYPES) {
      const prefs = computeEnvironmentPrefs(type, dims);
      expect(prefs.length).toBeGreaterThan(0);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  buildDimensionBars                                                 */
/* ------------------------------------------------------------------ */

describe("buildDimensionBars", () => {
  it("returns 4 bars matching the type's dominant poles", () => {
    const dims: DimensionScores = { EI: 78, SN: 72, TF: 91, JP: 68 };
    const bars = buildDimensionBars("INTJ", dims);

    expect(bars).toHaveLength(4);
    expect(bars[0].dimensionId).toBe("introversion");
    expect(bars[0].dominantLabel).toBe("Introverted");
    expect(bars[1].dimensionId).toBe("intuition");
    expect(bars[1].dominantLabel).toBe("Intuitive");
    expect(bars[2].dimensionId).toBe("thinking");
    expect(bars[2].dominantLabel).toBe("Thinking");
    expect(bars[3].dimensionId).toBe("judging");
    expect(bars[3].dominantLabel).toBe("Judging");
  });

  it("returns opposite-pole bars for ESFP", () => {
    const dims: DimensionScores = { EI: 30, SN: 40, TF: 35, JP: 25 };
    const bars = buildDimensionBars("ESFP", dims);

    expect(bars[0].dimensionId).toBe("extraversion-m");
    expect(bars[1].dimensionId).toBe("sensing");
    expect(bars[2].dimensionId).toBe("feeling");
    expect(bars[3].dimensionId).toBe("perceiving");
  });
});
