import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";

/**
 * Human Design: date, time, place. Birth time is required; when unknown, omit Design chart results.
 * Full implementation requires: two charts (Personality + Design ~88° ecliptic before birth),
 * 64 Gates from planetary positions, Type from defined/undefined Centers. This is a simplified placeholder.
 */

const TYPES = [
  "Manifestor",
  "Generator",
  "Manifesting Generator",
  "Projector",
  "Reflector",
] as const;

const dimensions = [
  { id: "type", label: "Type", description: "Your Human Design type" },
  { id: "strategy", label: "Strategy", description: "Recommended decision-making strategy" },
  { id: "authority", label: "Authority", description: "Inner authority (simplified)" },
];

export const humanDesignTest: TestDefinition = {
  id: "human-design",
  title: "Human Design",
  subtitle: "Enter your birth details for a simplified Human Design type",
  dimensions: [...dimensions],
  scoringMethod: "data-input",
  questionsPerPage: 4,

  questions: [
    { id: "hd-date", text: "What is your date of birth?", type: "date-input", options: [] },
    { id: "hd-time", text: "What time were you born? (as close as you know)", type: "text-input", options: [] },
    { id: "hd-city", text: "In which city were you born?", type: "text-input", options: [] },
    { id: "hd-country", text: "In which country were you born?", type: "text-input", options: [] },
  ],

  score(answers: Answer[]): TestScores {
    const dateAnswer = answers.find((a) => a.questionId === "hd-date");
    const dateStr = String(dateAnswer?.value ?? "");
    const timeUnknown = isTimeUnknown(answers);
    if (timeUnknown) {
      const dimScores = [
        { dimensionId: "type", label: "Type", score: 0, rawScore: 0, description: "Birth time required" },
        { dimensionId: "strategy", label: "Strategy", score: 0, rawScore: 0, description: "—" },
        { dimensionId: "authority", label: "Authority", score: 0, rawScore: 0, description: "—" },
      ];
      return {
        dimensions: dimScores,
        typeCode: "unknown",
        typeLabel: "Birth time required",
      };
    }
    const typeIndex = getTypeIndex(dateStr, answers);
    const type = TYPES[typeIndex] ?? "Generator";
    const strategy = getStrategy(type);
    const authority = "Emotional" as string;

    const dimScores = [
      {
        dimensionId: "type",
        label: "Type",
        score: 80,
        rawScore: typeIndex,
        description: type,
      },
      {
        dimensionId: "strategy",
        label: "Strategy",
        score: 70,
        rawScore: 0,
        description: strategy,
      },
      {
        dimensionId: "authority",
        label: "Authority",
        score: 60,
        rawScore: 0,
        description: authority,
      },
    ];

    return {
      dimensions: dimScores,
      typeCode: type.replace(/\s+/g, "-").toLowerCase(),
      typeLabel: type,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const typeLabel = scores.typeLabel ?? "Generator";
    const strategyDim = scores.dimensions.find((d) => d.dimensionId === "strategy");
    const strategyText = strategyDim?.description ?? "";
    const needsTime = scores.typeCode === "unknown" || typeLabel === "Birth time required";

    const summary = needsTime
      ? "Human Design type, strategy, and authority all depend on your exact birth time. Please enter your birth time in Settings or when taking this assessment to see your simplified type."
      : `Your simplified Human Design type is ${typeLabel}. ${strategyText}. This is a high-level result; a full bodygraph calculation would require exact birth time and location.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: `${d.label}: ${d.description}`,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel,
      tips: needsTime
        ? ["Add your birth time in Settings (or above) and run this assessment again to see your type."]
        : [
            `As a ${typeLabel}, experiment with your strategy in small decisions.`,
            "For your full chart (centers, profile, channels), use a dedicated Human Design calculator or analyst.",
          ],
    };
  },
};

/** True when birth time is missing or "unknown" — do not compute Human Design type. */
function isTimeUnknown(answers: Answer[]): boolean {
  const timeAnswer = answers.find((a) => a.questionId === "hd-time");
  const v = timeAnswer?.value;
  if (v == null || v === "") return true;
  const s = String(v).trim().toLowerCase();
  if (s === "unknown" || s === "unk" || s === "?") return true;
  return false;
}

function getTypeIndex(dateStr: string, answers: Answer[]): number {
  if (!dateStr) return 1;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 1;
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const timeAnswer = answers.find((a) => a.questionId === "hd-time");
  const timeStr = String(timeAnswer?.value ?? "12:00");
  const hourMatch = timeStr.match(/(\d{1,2})/);
  const hour = hourMatch ? parseInt(hourMatch[1], 10) : 12;
  const seed = (year + month * 31 + day + hour) % 5;
  return Math.max(0, seed);
}

function getStrategy(type: string): string {
  const map: Record<string, string> = {
    Manifestor: "To inform before acting",
    Generator: "To wait to respond",
    "Manifesting Generator": "To wait to respond, then inform",
    Projector: "To wait for invitation",
    Reflector: "To wait a lunar cycle for big decisions",
  };
  return map[type] ?? "To wait to respond";
}
