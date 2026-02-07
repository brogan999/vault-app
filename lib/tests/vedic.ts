import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";

/**
 * Vedic (Jyotish) astrology: collects date, time, place. Simplified result or "coming soon"
 * with inputs stored for future use.
 */

const dimensions = [
  { id: "lagna", label: "Lagna (Ascendant)", description: "Vedic rising sign" },
  { id: "sun", label: "Surya (Sun)", description: "Solar placement in Vedic chart" },
  { id: "moon", label: "Chandra (Moon)", description: "Lunar placement in Vedic chart" },
];

export const vedicTest: TestDefinition = {
  id: "vedic",
  title: "Vedic Astrology",
  subtitle: "Enter your birth details for a simplified Vedic chart (Jyotish)",
  dimensions: [...dimensions],
  scoringMethod: "data-input",
  questionsPerPage: 4,

  questions: [
    { id: "v-date", text: "What is your date of birth?", type: "date-input", options: [] },
    { id: "v-time", text: "What time were you born? (as close as you know)", type: "text-input", options: [] },
    { id: "v-city", text: "In which city were you born?", type: "text-input", options: [] },
    { id: "v-country", text: "In which country were you born?", type: "text-input", options: [] },
  ],

  score(answers: Answer[]): TestScores {
    const dateAnswer = answers.find((a) => a.questionId === "v-date");
    const dateStr = String(dateAnswer?.value ?? "");
    const sunSign = getWesternSunSign(dateStr);
    const moonSign = getOffsetSign(sunSign, 4);
    const timeUnknown = isTimeUnknown(answers);
    const lagnaSign = timeUnknown
      ? "Unknown (birth time required)"
      : getOffsetSign(sunSign, getHourOffset(answers));

    const dimScores = dimensions.map((dim, i) => {
      const signs = [lagnaSign, sunSign, moonSign];
      const sign = signs[i] ?? "Unknown";
      const desc = sign.startsWith("Unknown") && dim.id === "lagna"
        ? "Lagna (ascendant) requires birth time. Enter it in Settings or above to calculate."
        : `${sign} (simplified; full Vedic calculation coming soon)`;
      return {
        dimensionId: dim.id,
        label: dim.label,
        score: 50,
        rawScore: 0,
        description: desc,
      };
    });

    return {
      dimensions: dimScores,
      typeCode: `${lagnaSign}/${sunSign}/${moonSign}`,
      typeLabel: `Lagna in ${lagnaSign}`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const parts = (scores.typeCode ?? "//").split("/");
    const lagna = parts[0] || "Unknown";
    const surya = parts[1] || "Unknown";
    const chandra = parts[2] || "Unknown";
    // Vedic (Jyotish) uses sidereal zodiac; signs differ from Western. Frame as tradition, not fact.

    const lagnaNeedsTime = lagna.startsWith("Unknown");
    const summary = lagnaNeedsTime
      ? `In the Vedic (Jyotish) tradition, your simplified chart shows Surya (Sun) in ${surya} and Chandra (Moon) in ${chandra}. Lagna (ascendant) requires birth time — enter it in Settings or when taking this assessment to see it. Vedic uses the sidereal zodiac, so signs can differ from Western astrology.`
      : `In the Vedic (Jyotish) tradition, your simplified chart shows Lagna (ascendant) in ${lagna}, Surya (Sun) in ${surya}, and Chandra (Moon) in ${chandra}. Vedic uses the sidereal zodiac, so signs can differ from Western astrology. These are approximate; full Jyotish analysis requires exact birth time and location.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: d.description,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `Lagna in ${lagna}`,
      tips: [
        "Your birth details are saved; we'll use them for richer Vedic analysis in future updates.",
        "For precise dashas and nakshatras, consider consulting a professional Vedic astrologer.",
      ],
    };
  },
};

const ZODIAC = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
] as const;

function getWesternSunSign(dateStr: string): string {
  if (!dateStr) return "Aries";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "Aries";
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const cutoffs: [number, number, string][] = [
    [1, 20, "Capricorn"], [2, 19, "Aquarius"], [3, 20, "Pisces"],
    [4, 20, "Aries"], [5, 21, "Taurus"], [6, 21, "Gemini"],
    [7, 23, "Cancer"], [8, 23, "Leo"], [9, 23, "Virgo"],
    [10, 23, "Libra"], [11, 22, "Scorpio"], [12, 22, "Sagittarius"],
  ];
  for (let i = 0; i < cutoffs.length; i++) {
    if (month === cutoffs[i][0] && day <= cutoffs[i][1]) return cutoffs[i][2];
    if (month === cutoffs[i][0] && day > cutoffs[i][1] && i + 1 < cutoffs.length) return cutoffs[i + 1][2];
  }
  return "Capricorn";
}

function getOffsetSign(baseName: string, offset: number): string {
  const idx = ZODIAC.indexOf(baseName as (typeof ZODIAC)[number]);
  if (idx < 0) return ZODIAC[offset % 12];
  return ZODIAC[(idx + offset) % 12];
}

/** True when birth time is missing or "unknown" — do not compute Lagna (Ascendant). */
function isTimeUnknown(answers: Answer[]): boolean {
  const timeAnswer = answers.find((a) => a.questionId === "v-time");
  const v = timeAnswer?.value;
  if (v == null || v === "") return true;
  const s = String(v).trim().toLowerCase();
  if (s === "unknown" || s === "unk" || s === "?") return true;
  return false;
}

function getHourOffset(answers: Answer[]): number {
  if (isTimeUnknown(answers)) return 0;
  const timeAnswer = answers.find((a) => a.questionId === "v-time");
  const timeStr = String(timeAnswer?.value ?? "12:00");
  const match = timeStr.match(/(\d{1,2})/);
  const hour = match ? parseInt(match[1], 10) : 12;
  return Math.floor(hour / 2);
}
