import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";

/**
 * Birth Chart Analysis is unique — it collects date/time/location data
 * rather than personality questions. The "scoring" maps birth data to
 * astrological placements using simplified calculations.
 */

const dimensions = [
  { id: "sun", label: "Sun Sign", description: "Your core identity and conscious self" },
  { id: "moon", label: "Moon Sign", description: "Your emotional inner world and instincts" },
  { id: "rising", label: "Rising Sign", description: "How others perceive you and your outward style" },
  { id: "mercury", label: "Mercury Sign", description: "How you think, communicate, and process information" },
  { id: "venus", label: "Venus Sign", description: "How you love, what you value, and your aesthetic sense" },
  { id: "mars", label: "Mars Sign", description: "Your drive, ambition, and how you assert yourself" },
];

const ZODIAC = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
] as const;

const ELEMENTS: Record<string, string> = {
  Aries: "Fire", Taurus: "Earth", Gemini: "Air", Cancer: "Water",
  Leo: "Fire", Virgo: "Earth", Libra: "Air", Scorpio: "Water",
  Sagittarius: "Fire", Capricorn: "Earth", Aquarius: "Air", Pisces: "Water",
};

export const birthChartTest: TestDefinition = {
  id: "birth-chart",
  title: "Birth Chart Analysis",
  subtitle: "Generate your natal chart from your birth details",
  dimensions: [...dimensions],
  scoringMethod: "data-input",

  questions: [
    { id: "bc-date", text: "What is your date of birth?", type: "date-input", options: [] },
    { id: "bc-time", text: "What time were you born? (as close as you know)", type: "text-input", options: [] },
    { id: "bc-city", text: "In which city were you born?", type: "text-input", options: [] },
    { id: "bc-country", text: "In which country were you born?", type: "text-input", options: [] },
  ],

  score(answers: Answer[]): TestScores {
    // Simplified sun sign calculation from birth date
    const dateAnswer = answers.find((a) => a.questionId === "bc-date");
    const dateStr = String(dateAnswer?.value ?? "");
    const sunSign = getSunSign(dateStr);

    // For moon, rising, etc. we use a simplified offset (real calculations need ephemeris data)
    const moonSign = getOffsetSign(sunSign, 4);
    const timeUnknown = isTimeUnknown(answers);
    const risingSign = timeUnknown
      ? "Unknown (birth time required)"
      : getOffsetSign(sunSign, getHourOffset(answers));
    const mercurySign = getOffsetSign(sunSign, 1);
    const venusSign = getOffsetSign(sunSign, 2);
    const marsSign = getOffsetSign(sunSign, 3);

    const placements = [
      { id: "sun", sign: sunSign },
      { id: "moon", sign: moonSign },
      { id: "rising", sign: risingSign },
      { id: "mercury", sign: mercurySign },
      { id: "venus", sign: venusSign },
      { id: "mars", sign: marsSign },
    ];

    const dimScores = dimensions.map((dim) => {
      const p = placements.find((pl) => pl.id === dim.id);
      const sign = p?.sign ?? "Unknown";
      const signIdx = ZODIAC.indexOf(sign as typeof ZODIAC[number]);
      return {
        dimensionId: dim.id,
        label: dim.label,
        score: signIdx >= 0 ? Math.round(((signIdx + 1) / 12) * 100) : 50,
        rawScore: signIdx >= 0 ? signIdx + 1 : 0,
        description: `${sign} — ${dim.description}`,
      };
    });

    return {
      dimensions: dimScores,
      typeCode: `${sunSign}/${moonSign}/${risingSign}`,
      typeLabel: `Sun in ${sunSign}`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const parts = (scores.typeCode ?? "//").split("/");
    const sunSign = parts[0] || "Unknown";
    const moonSign = parts[1] || "Unknown";
    const risingSign = parts[2] || "Unknown";

    const sunElement = ELEMENTS[sunSign] ?? "Unknown";
    const moonElement = ELEMENTS[moonSign] ?? "Unknown";
    const risingNeedsTime = risingSign.startsWith("Unknown");

    const summary = risingNeedsTime
      ? `According to Western astrology, your Sun is in ${sunSign} (${sunElement}) and Moon in ${moonSign} (${moonElement}). Your Rising sign could not be calculated because birth time is required; enter your birth time in Settings or when taking this assessment to see it.`
      : `According to Western astrology, your Sun is in ${sunSign} (${sunElement}), Moon in ${moonSign} (${moonElement}), and Rising in ${risingSign}. In this tradition, this combination is often described as a ${sunElement.toLowerCase()} core identity with a ${moonElement.toLowerCase()} emotional landscape and a ${risingSign} first impression.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: getSignBlurb(d.dimensionId, d.description.split(" — ")[0] ?? ""),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `Sun in ${sunSign}`,
      tips: [
        `As a ${sunSign} Sun, focus on developing the best qualities of your sign: ${getSignStrength(sunSign)}.`,
        `Your ${moonSign} Moon suggests your emotional needs centre around ${getSignNeed(moonSign)}.`,
        "For a more detailed analysis with exact planetary degrees and aspects, consider consulting a professional astrologer.",
      ],
    };
  },
};

/* --- Helpers --- */

function getSunSign(dateStr: string): string {
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
  const idx = ZODIAC.indexOf(baseName as typeof ZODIAC[number]);
  if (idx < 0) return ZODIAC[offset % 12];
  return ZODIAC[(idx + offset) % 12];
}

/** True when birth time is missing or explicitly "unknown" — do not compute Rising/Ascendant. */
function isTimeUnknown(answers: Answer[]): boolean {
  const timeAnswer = answers.find((a) => a.questionId === "bc-time");
  const v = timeAnswer?.value;
  if (v == null || v === "") return true;
  const s = String(v).trim().toLowerCase();
  if (s === "unknown" || s === "unk" || s === "?") return true;
  return false;
}

function getHourOffset(answers: Answer[]): number {
  if (isTimeUnknown(answers)) return 0;
  const timeAnswer = answers.find((a) => a.questionId === "bc-time");
  const timeStr = String(timeAnswer?.value ?? "12:00");
  const match = timeStr.match(/(\d{1,2})/);
  const hour = match ? parseInt(match[1], 10) : 12;
  return Math.floor(hour / 2);
}

function getSignBlurb(placement: string, sign: string): string {
  if (placement === "rising" && sign.startsWith("Unknown")) {
    return "Your Rising sign (Ascendant) depends on your exact birth time. Enter your birth time in Settings or above to calculate it.";
  }
  const blurbs: Record<string, string> = {
    sun: `Your Sun in ${sign} shapes your core identity. This is who you are at your essence — your fundamental drives and life purpose.`,
    moon: `Your Moon in ${sign} governs your emotional world. This reveals how you process feelings, what makes you feel secure, and your instinctive reactions.`,
    rising: `Your Rising sign in ${sign} is your social mask — the first impression you make and how the world perceives you.`,
    mercury: `Mercury in ${sign} colours your communication style and thinking patterns. This influences how you learn, speak, and process information.`,
    venus: `Venus in ${sign} shapes your approach to love, beauty, and values. This reveals what you find attractive and how you express affection.`,
    mars: `Mars in ${sign} drives your ambition, passion, and assertiveness. This shows how you pursue goals and handle conflict.`,
  };
  return blurbs[placement] ?? `${placement} in ${sign}.`;
}

function getSignStrength(sign: string): string {
  const strengths: Record<string, string> = {
    Aries: "courage and initiative", Taurus: "patience and reliability", Gemini: "adaptability and communication",
    Cancer: "nurturing and emotional depth", Leo: "creativity and leadership", Virgo: "precision and service",
    Libra: "diplomacy and harmony", Scorpio: "depth and transformation", Sagittarius: "optimism and exploration",
    Capricorn: "discipline and ambition", Aquarius: "innovation and humanitarianism", Pisces: "intuition and compassion",
  };
  return strengths[sign] ?? "your unique qualities";
}

function getSignNeed(sign: string): string {
  const needs: Record<string, string> = {
    Aries: "independence and taking action", Taurus: "stability and comfort", Gemini: "variety and mental stimulation",
    Cancer: "safety and emotional connection", Leo: "recognition and creative expression", Virgo: "order and being useful",
    Libra: "partnership and balance", Scorpio: "intensity and deep bonds", Sagittarius: "freedom and meaning",
    Capricorn: "achievement and structure", Aquarius: "individuality and community", Pisces: "transcendence and empathy",
  };
  return needs[sign] ?? "understanding and connection";
}
