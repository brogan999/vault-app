import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";

/**
 * Mayan Astrology (Tzolkin): GMT correlation constant 584283.
 * JDN → subtract 584283 → Day Sign = result mod 20, Tone = (result mod 13) + 1.
 * Galactic Signature = Tone + Day Sign.
 */

const GMT_CORRELATION = 584283;

const TZOLKIN_SIGNS = [
  "Imix (Crocodile)",
  "Ik (Wind)",
  "Akbal (Night)",
  "Kan (Seed)",
  "Chicchan (Serpent)",
  "Cimi (Death)",
  "Manik (Deer)",
  "Lamat (Star)",
  "Muluc (Moon)",
  "Oc (Dog)",
  "Chuen (Monkey)",
  "Eb (Human)",
  "Ben (Reed)",
  "Ix (Jaguar)",
  "Men (Eagle)",
  "Cib (Owl)",
  "Caban (Earth)",
  "Etznab (Flint)",
  "Cauac (Storm)",
  "Ahau (Sun)",
];

const dimensions = [
  { id: "day-sign", label: "Tzolkin Day Sign", description: "Your Mayan day sign" },
  { id: "tone", label: "Tone", description: "Tzolkin tone 1–13" },
];

export const mayanTest: TestDefinition = {
  id: "mayan",
  title: "Mayan Astrology (Tzolkin)",
  subtitle: "Discover your Tzolkin day sign from your date of birth",
  dimensions: [...dimensions],
  scoringMethod: "data-input",
  questionsPerPage: 1,

  questions: [
    { id: "mayan-date", text: "What is your date of birth?", type: "date-input", options: [] },
  ],

  score(answers: Answer[]): TestScores {
    const dateAnswer = answers.find((a) => a.questionId === "mayan-date");
    const dateStr = String(dateAnswer?.value ?? "");
    const { daySignIndex, tone } = getTzolkinFromDate(dateStr);
    const sign = TZOLKIN_SIGNS[daySignIndex] ?? TZOLKIN_SIGNS[0];
    const galacticSignature = `${tone} ${sign}`;

    return {
      dimensions: [
        {
          dimensionId: "day-sign",
          label: "Tzolkin Day Sign",
          score: Math.round(((daySignIndex + 1) / 20) * 100),
          rawScore: daySignIndex,
          description: sign,
        },
        {
          dimensionId: "tone",
          label: "Tone",
          score: Math.round((tone / 13) * 100),
          rawScore: tone,
          description: `Tone ${tone}`,
        },
      ],
      typeCode: galacticSignature,
      typeLabel: galacticSignature,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const galacticSignature = scores.typeLabel ?? "";
    const sign = scores.dimensions?.find((d) => d.dimensionId === "day-sign")?.description ?? TZOLKIN_SIGNS[0];

    const summary = `In the Mayan Tzolkin calendar, your Galactic Signature is ${galacticSignature}. The 260-day Tzolkin cycle combines 20 day signs with 13 tones; this result is for reflection and symbolism.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: d.description,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: sign,
      tips: [
        "Explore the qualities associated with your day sign in Mayan cosmology.",
        "For a full Tzolkin birth date (sign + number), use a dedicated Mayan calendar calculator.",
      ],
    };
  },
};

/** Gregorian date to Julian Day Number (UTC noon). */
function gregorianToJDN(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  return (
    day +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045
  );
}

/** GMT correlation 584283: JDN - 584283; Day Sign = result mod 20, Tone = (result mod 13) + 1. */
function getTzolkinFromDate(dateStr: string): { daySignIndex: number; tone: number } {
  if (!dateStr) return { daySignIndex: 0, tone: 1 };
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return { daySignIndex: 0, tone: 1 };
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const jdn = gregorianToJDN(year, month, day);
  const kin = jdn - GMT_CORRELATION;
  const daySignIndex = ((kin % 20) + 20) % 20;
  const tone = ((kin % 13) + 13) % 13 + 1;
  return { daySignIndex, tone };
}
