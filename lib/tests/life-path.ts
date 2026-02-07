import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";

/**
 * Life Path (Numerology): single birth-date question. Score = Life Path number 1–9 (or master 11, 22).
 */

const LIFE_PATH_DESCRIPTIONS: Record<number, string> = {
  1: "Leader, independent, pioneering",
  2: "Cooperative, diplomatic, sensitive",
  3: "Creative, expressive, sociable",
  4: "Practical, disciplined, builder",
  5: "Dynamic, freedom-loving, adaptable",
  6: "Nurturing, responsible, harmonious",
  7: "Analytical, introspective, spiritual",
  8: "Ambitious, authoritative, material focus",
  9: "Humanitarian, compassionate, completion",
  11: "Intuitive, inspirational (master number)",
  22: "Master builder, visionary (master number)",
};

const dimensions = [
  { id: "life-path", label: "Life Path Number", description: "Your core life path in numerology" },
];

export const lifePathTest: TestDefinition = {
  id: "life-path",
  title: "Life Path Number",
  subtitle: "Discover your numerology Life Path from your date of birth",
  dimensions: [...dimensions],
  scoringMethod: "data-input",
  questionsPerPage: 1,

  questions: [
    { id: "lp-date", text: "What is your date of birth?", type: "date-input", options: [] },
  ],

  score(answers: Answer[]): TestScores {
    const dateAnswer = answers.find((a) => a.questionId === "lp-date");
    const dateStr = String(dateAnswer?.value ?? "");
    const num = getLifePathFromDate(dateStr);
    const description = LIFE_PATH_DESCRIPTIONS[num] ?? "Your life path energy";

    return {
      dimensions: [
        {
          dimensionId: "life-path",
          label: "Life Path Number",
          score: Math.min(100, Math.round((num / 9) * 100)),
          rawScore: num,
          description: `${num} — ${description}`,
        },
      ],
      overall: num,
      typeCode: String(num),
      typeLabel: `Life Path ${num}`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const num = (scores.overall ?? parseInt(String(scores.typeCode ?? "1"), 10)) || 1;
    const desc = LIFE_PATH_DESCRIPTIONS[num] ?? "Your life path energy";

    const summary = `Your Life Path number is ${num}. In numerology, this represents your core purpose and the themes you're here to work with. ${desc}.`;

    return {
      summary,
      dimensionDetails: scores.dimensions.map((d) => ({ dimensionId: d.dimensionId, text: d.description })),
      typeLabel: `Life Path ${num}`,
      tips: [
        `Life Path ${num} suggests focusing on ${desc.toLowerCase()} themes in your choices and relationships.`,
        "Numerology is a symbolic tool; use it for reflection rather than prediction.",
      ],
    };
  },
};

/** Reduce to single digit, preserving master numbers 11, 22, 33. */
function reduceToDigit(n: number): number {
  if (n === 0) return 0;
  if (n === 11 || n === 22 || n === 33) return n;
  while (n > 9) {
    n = String(n)
      .split("")
      .reduce((s, digit) => s + parseInt(digit, 10), 0);
  }
  return n;
}

/** Life Path: reduce month, day, year separately (preserve 11, 22, 33), then sum and reduce. */
function getLifePathFromDate(dateStr: string): number {
  if (!dateStr) return 1;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 1;
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  const monthReduced = reduceToDigit(month);
  const dayReduced = reduceToDigit(day);
  const yearReduced = reduceToDigit(
    String(year)
      .split("")
      .reduce((s, digit) => s + parseInt(digit, 10), 0)
  );

  let sum = reduceToDigit(monthReduced) + reduceToDigit(dayReduced) + reduceToDigit(yearReduced);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum)
      .split("")
      .reduce((s, digit) => s + parseInt(digit, 10), 0);
  }
  if (sum === 0) return 1;
  return sum;
}
