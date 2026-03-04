import { notFound } from "next/navigation";
import type { TestScores, DimensionScore } from "@/lib/tests/types";
import type { TestType } from "@/lib/personality/schemas/content";
import { generateResultsPageContent } from "@/lib/personality";
import { PreviewClient } from "./PreviewClient";

/* ---- MBTI mock scores ---- */

const MBTI_MOCK_SCORES: Record<string, { EI: number; SN: number; TF: number; JP: number }> = {
  INTJ: { EI: 82, SN: 85, TF: 78, JP: 80 },
  ENTJ: { EI: 22, SN: 82, TF: 80, JP: 82 },
  ENTP: { EI: 20, SN: 84, TF: 76, JP: 18 },
  INTP: { EI: 80, SN: 82, TF: 82, JP: 20 },
  ENFP: { EI: 22, SN: 80, TF: 28, JP: 20 },
  ENFJ: { EI: 18, SN: 78, TF: 22, JP: 80 },
  INFJ: { EI: 82, SN: 84, TF: 24, JP: 78 },
  INFP: { EI: 80, SN: 80, TF: 20, JP: 22 },
  ISFJ: { EI: 78, SN: 22, TF: 28, JP: 78 },
  ISTJ: { EI: 82, SN: 18, TF: 78, JP: 82 },
  ESTJ: { EI: 20, SN: 20, TF: 80, JP: 80 },
  ESFJ: { EI: 18, SN: 22, TF: 22, JP: 78 },
  ESTP: { EI: 20, SN: 18, TF: 75, JP: 18 },
  ISTP: { EI: 80, SN: 20, TF: 80, JP: 20 },
  ISFP: { EI: 78, SN: 22, TF: 22, JP: 18 },
  ESFP: { EI: 18, SN: 18, TF: 20, JP: 20 },
};

function buildMBTIMockScores(typeCode: string): TestScores {
  const raw = MBTI_MOCK_SCORES[typeCode];
  if (!raw) throw new Error(`No mock scores for ${typeCode}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  return {
    dimensions: [
      dim("introversion", "Introversion", raw.EI),
      dim("intuition", "Intuition", raw.SN),
      dim("thinking", "Thinking", raw.TF),
      dim("judging", "Judging", raw.JP),
    ],
    typeCode,
  };
}

/* ---- Big Five mock profiles ---- */

const BIG5_MOCK_PROFILES: Record<string, { O: number; C: number; E: number; A: number; N: number }> = {
  "BIG5-1": { O: 82, C: 28, E: 45, A: 60, N: 35 },
  "BIG5-2": { O: 35, C: 85, E: 72, A: 30, N: 75 },
  "BIG5-3": { O: 70, C: 70, E: 25, A: 80, N: 20 },
};

function buildBig5MockScores(profileId: string): TestScores {
  const raw = BIG5_MOCK_PROFILES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  return {
    dimensions: [
      dim("openness", "Openness", raw.O),
      dim("conscientiousness", "Conscientiousness", raw.C),
      dim("extraversion", "Extraversion", raw.E),
      dim("agreeableness", "Agreeableness", raw.A),
      dim("neuroticism", "Neuroticism", raw.N),
    ],
  };
}

/* ---- Enneagram mock scores ---- */

const ENNEAGRAM_MOCK_SCORES: Record<string, { type: number; scores: number[] }> = {
  "ENNEA-4": { type: 4, scores: [45, 35, 40, 82, 68, 30, 55, 25, 50] },
  "ENNEA-1": { type: 1, scores: [80, 40, 35, 30, 45, 55, 25, 50, 60] },
  "ENNEA-7": { type: 7, scores: [25, 40, 55, 30, 35, 45, 85, 50, 30] },
};

function buildEnneagramMockScores(profileId: string): TestScores {
  const raw = ENNEAGRAM_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  const sorted = raw.scores
    .map((s, i) => ({ idx: i + 1, score: s }))
    .sort((a, b) => b.score - a.score);
  const coreType = sorted[0].idx;
  const wing = sorted[1].idx;

  return {
    dimensions: raw.scores.map((s, i) => dim(`type${i + 1}`, `Type ${i + 1}`, s)),
    typeCode: `${coreType}w${wing}`,
  };
}

/* ---- DISC mock scores ---- */

const DISC_MOCK_SCORES: Record<string, { D: number; I: number; S: number; C: number; typeCode: string }> = {
  "DISC-DI": { D: 82, I: 68, S: 35, C: 40, typeCode: "Di" },
  "DISC-SC": { D: 30, I: 25, S: 78, C: 72, typeCode: "SC" },
  "DISC-D":  { D: 85, I: 40, S: 30, C: 35, typeCode: "D" },
};

function buildDISCMockScores(profileId: string): TestScores {
  const raw = DISC_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  return {
    dimensions: [
      dim("dominance", "Dominance", raw.D),
      dim("influence", "Influence", raw.I),
      dim("steadiness", "Steadiness", raw.S),
      dim("conscientiousness", "Conscientiousness", raw.C),
    ],
    typeCode: raw.typeCode,
  };
}

/* ---- Attachment mock scores ---- */

const ATTACHMENT_MOCK_SCORES: Record<string, { secure: number; anxious: number; avoidant: number; fearful: number; typeCode: string }> = {
  "ATTACH-SECURE":   { secure: 82, anxious: 30, avoidant: 25, fearful: 20, typeCode: "secure" },
  "ATTACH-ANXIOUS":  { secure: 35, anxious: 80, avoidant: 28, fearful: 45, typeCode: "anxious" },
  "ATTACH-AVOIDANT": { secure: 28, anxious: 22, avoidant: 78, fearful: 40, typeCode: "avoidant" },
  "ATTACH-FEARFUL":  { secure: 30, anxious: 55, avoidant: 50, fearful: 75, typeCode: "fearful" },
};

function buildAttachmentMockScores(profileId: string): TestScores {
  const raw = ATTACHMENT_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  return {
    dimensions: [
      dim("secure", "Secure", raw.secure),
      dim("anxious", "Anxious-Preoccupied", raw.anxious),
      dim("avoidant", "Dismissive-Avoidant", raw.avoidant),
      dim("fearful", "Fearful-Avoidant", raw.fearful),
    ],
    typeCode: raw.typeCode,
  };
}

/* ---- EQ mock scores ---- */

const EQ_MOCK_SCORES: Record<string, { sa: number; sr: number; mo: number; em: number; ss: number }> = {
  "EQ-HIGH":     { sa: 82, sr: 78, mo: 85, em: 75, ss: 80 },
  "EQ-MODERATE": { sa: 55, sr: 50, mo: 60, em: 58, ss: 48 },
  "EQ-LOW":      { sa: 30, sr: 35, mo: 28, em: 32, ss: 25 },
};

function buildEQMockScores(profileId: string): TestScores {
  const raw = EQ_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  const overall = Math.round((raw.sa + raw.sr + raw.mo + raw.em + raw.ss) / 5);

  return {
    dimensions: [
      dim("self-awareness", "Self-Awareness", raw.sa),
      dim("self-regulation", "Self-Regulation", raw.sr),
      dim("motivation", "Motivation", raw.mo),
      dim("empathy", "Empathy", raw.em),
      dim("social-skills", "Social Skills", raw.ss),
    ],
    overall,
  };
}

/* ---- Resilience mock scores ---- */

const RESILIENCE_MOCK_SCORES: Record<string, { er: number; op: number; se: number; ss: number; ad: number }> = {
  "RQ-HIGH":     { er: 82, op: 78, se: 85, ss: 75, ad: 80 },
  "RQ-MODERATE": { er: 55, op: 50, se: 60, ss: 48, ad: 52 },
  "RQ-LOW":      { er: 30, op: 35, se: 28, ss: 32, ad: 25 },
};

function buildResilienceMockScores(profileId: string): TestScores {
  const raw = RESILIENCE_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  const overall = Math.round((raw.er + raw.op + raw.se + raw.ss + raw.ad) / 5);

  return {
    dimensions: [
      dim("emotional-regulation", "Emotional Regulation", raw.er),
      dim("optimism", "Optimism", raw.op),
      dim("self-efficacy", "Self-Efficacy", raw.se),
      dim("social-support", "Social Support", raw.ss),
      dim("adaptability", "Adaptability", raw.ad),
    ],
    overall,
  };
}

/* ---- Stress Profile mock scores ---- */

const STRESS_MOCK_SCORES: Record<string, { fight: number; flight: number; freeze: number; fawn: number; typeCode: string }> = {
  "STRESS-FIGHT":  { fight: 82, flight: 55, freeze: 30, fawn: 25, typeCode: "fight" },
  "STRESS-FLIGHT": { fight: 40, flight: 80, freeze: 35, fawn: 48, typeCode: "flight" },
  "STRESS-FREEZE": { fight: 25, flight: 30, freeze: 78, fawn: 45, typeCode: "freeze" },
  "STRESS-FAWN":   { fight: 30, flight: 42, freeze: 38, fawn: 82, typeCode: "fawn" },
};

function buildStressMockScores(profileId: string): TestScores {
  const raw = STRESS_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  return {
    dimensions: [
      dim("fight", "Fight", raw.fight),
      dim("flight", "Flight", raw.flight),
      dim("freeze", "Freeze", raw.freeze),
      dim("fawn", "Fawn", raw.fawn),
    ],
    typeCode: raw.typeCode,
  };
}

/* ---- IQ Pro mock scores ---- */

const IQ_MOCK_SCORES: Record<string, { verbal: number; numerical: number; pattern: number; spatial: number; iq: number }> = {
  "IQ-HIGH":       { verbal: 85, numerical: 90, pattern: 88, spatial: 82, iq: 132 },
  "IQ-MODERATE":   { verbal: 60, numerical: 55, pattern: 65, spatial: 58, iq: 108 },
  "IQ-DEVELOPING": { verbal: 35, numerical: 40, pattern: 30, spatial: 38, iq: 82 },
};

function buildIQMockScores(profileId: string): TestScores {
  const raw = IQ_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  return {
    dimensions: [
      dim("verbal", "Verbal Reasoning", raw.verbal),
      dim("numerical", "Numerical Reasoning", raw.numerical),
      dim("pattern", "Pattern Recognition", raw.pattern),
      dim("spatial", "Spatial Reasoning", raw.spatial),
    ],
    overall: raw.iq,
  };
}

/* ---- Strengths mock scores ---- */

const STRENGTHS_MOCK_SCORES: Record<string, Record<string, number>> = {
  "STR-WISDOM": {
    creativity: 88, curiosity: 82, perspective: 78, "love-of-learning": 75, judgment: 72,
    bravery: 55, perseverance: 60, honesty: 65, zest: 50, love: 45,
    kindness: 58, "social-intelligence": 48, teamwork: 42, fairness: 52, leadership: 40,
    forgiveness: 35, humility: 38, prudence: 30, "self-regulation-s": 32, appreciation: 62,
    gratitude: 55, hope: 50, humor: 45, spirituality: 28,
  },
  "STR-COURAGE": {
    leadership: 85, bravery: 82, perseverance: 80, zest: 78, fairness: 75,
    honesty: 68, teamwork: 65, creativity: 55, curiosity: 50, judgment: 48,
    "love-of-learning": 42, perspective: 45, love: 40, kindness: 52, "social-intelligence": 38,
    forgiveness: 35, humility: 30, prudence: 28, "self-regulation-s": 32, appreciation: 25,
    gratitude: 42, hope: 55, humor: 48, spirituality: 22,
  },
  "STR-HEART": {
    kindness: 88, love: 85, gratitude: 82, forgiveness: 78, "social-intelligence": 75,
    honesty: 65, empathy: 60, humor: 58, hope: 55, appreciation: 52,
    creativity: 45, curiosity: 48, judgment: 40, "love-of-learning": 42, perspective: 38,
    bravery: 35, perseverance: 50, zest: 48, teamwork: 55, fairness: 52,
    leadership: 30, humility: 62, prudence: 28, "self-regulation-s": 32, spirituality: 60,
  },
};

function buildStrengthsMockScores(profileId: string): TestScores {
  const raw = STRENGTHS_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dim = (id: string, label: string, score: number): DimensionScore => ({
    dimensionId: id,
    label,
    score,
    rawScore: score / 100 * 6 + 1,
    description: "",
  });

  const dims = Object.entries(raw).map(([id, score]) => dim(id, id, score));

  return { dimensions: dims };
}

/* ---- Focus Style mock scores ---- */

const FOCUS_STYLE_MOCK_SCORES: Record<string, Record<string, number>> = {
  "FS-DEEP": {
    "deep-focus": 85, "task-switching": 45, "ambient-focus": 40, "flow-propensity": 72,
  },
  "FS-FLOW": {
    "deep-focus": 68, "task-switching": 62, "ambient-focus": 58, "flow-propensity": 88,
  },
  "FS-SWITCH": {
    "deep-focus": 35, "task-switching": 82, "ambient-focus": 70, "flow-propensity": 55,
  },
};

function buildFocusStyleMockScores(profileId: string): TestScores {
  const raw = FOCUS_STYLE_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dims = Object.entries(raw).map(([id, score]) => ({
    dimensionId: id,
    label: id,
    score,
    rawScore: score,
    description: "",
  }));

  const overall = Math.round(
    Object.values(raw).reduce((s, v) => s + v, 0) / Object.values(raw).length,
  );

  return { dimensions: dims, overall };
}

/* ---- Career Compass mock scores ---- */

const CAREER_COMPASS_MOCK_SCORES: Record<string, Record<string, number>> = {
  "CC-RIA": {
    realistic: 82, investigative: 72, artistic: 65, social: 35, enterprising: 40, conventional: 30,
  },
  "CC-SEC": {
    realistic: 30, investigative: 35, artistic: 40, social: 85, enterprising: 68, conventional: 60,
  },
  "CC-AIE": {
    realistic: 30, investigative: 70, artistic: 82, social: 35, enterprising: 65, conventional: 40,
  },
};

function buildCareerCompassMockScores(profileId: string): TestScores {
  const raw = CAREER_COMPASS_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const dims = Object.entries(raw).map(([id, score]) => ({
    dimensionId: id,
    label: id,
    score,
    rawScore: score,
    description: "",
  }));

  const overall = Math.round(
    Object.values(raw).reduce((s, v) => s + v, 0) / Object.values(raw).length,
  );

  return { dimensions: dims, overall };
}

/* ---- Life Path (Numerology) mock scores ---- */

const LIFE_PATH_MOCK_SCORES: Record<string, { pathNumber: number }> = {
  "LP-1":  { pathNumber: 1 },
  "LP-7":  { pathNumber: 7 },
  "LP-11": { pathNumber: 11 },
};

function buildLifePathMockScores(profileId: string): TestScores {
  const raw = LIFE_PATH_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  return {
    dimensions: [
      {
        dimensionId: "life-path",
        label: "Life Path Number",
        score: Math.min(100, Math.round((raw.pathNumber / 9) * 100)),
        rawScore: raw.pathNumber,
        description: `Life Path ${raw.pathNumber}`,
      },
    ],
    overall: raw.pathNumber,
    typeCode: String(raw.pathNumber),
    typeLabel: `Life Path ${raw.pathNumber}`,
  };
}

/* ---- Human Design mock scores ---- */

const HUMAN_DESIGN_MOCK_SCORES: Record<string, { typeCode: string }> = {
  "HD-MAN":  { typeCode: "manifestor" },
  "HD-PROJ": { typeCode: "projector" },
  "HD-REF":  { typeCode: "reflector" },
};

function buildHumanDesignMockScores(profileId: string): TestScores {
  const raw = HUMAN_DESIGN_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  return {
    dimensions: [
      {
        dimensionId: "type",
        label: "Type",
        score: 80,
        rawScore: 0,
        description: raw.typeCode,
      },
      {
        dimensionId: "strategy",
        label: "Strategy",
        score: 70,
        rawScore: 0,
        description: "",
      },
      {
        dimensionId: "authority",
        label: "Authority",
        score: 60,
        rawScore: 0,
        description: "Emotional",
      },
    ],
    typeCode: raw.typeCode,
    typeLabel: raw.typeCode,
  };
}

/* ---- Western Astrology mock scores ---- */

const WESTERN_ASTROLOGY_MOCK_SCORES: Record<string, { typeCode: string }> = {
  "WA-ARIES":   { typeCode: "Aries/Leo/Sagittarius" },
  "WA-SCORPIO": { typeCode: "Scorpio/Pisces/Cancer" },
  "WA-LIBRA":   { typeCode: "Libra/Aquarius/Gemini" },
};

function buildWesternAstrologyMockScores(profileId: string): TestScores {
  const raw = WESTERN_ASTROLOGY_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const parts = raw.typeCode.split("/");
  const placements = ["sun", "moon", "rising", "mercury", "venus", "mars"];
  const ZODIAC = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
  ];

  return {
    dimensions: placements.map((id, i) => {
      const sign = parts[i] ?? parts[0];
      const signIdx = ZODIAC.indexOf(sign);
      return {
        dimensionId: id,
        label: id.charAt(0).toUpperCase() + id.slice(1) + " Sign",
        score: signIdx >= 0 ? Math.round(((signIdx + 1) / 12) * 100) : 50,
        rawScore: signIdx >= 0 ? signIdx + 1 : 0,
        description: sign,
      };
    }),
    typeCode: raw.typeCode,
    typeLabel: `Sun in ${parts[0]}`,
  };
}

/* ---- Vedic Astrology mock scores ---- */

const VEDIC_ASTROLOGY_MOCK_SCORES: Record<string, { typeCode: string }> = {
  "VA-MESHA":  { typeCode: "Cancer/Taurus/Aries" },
  "VA-KARKA":  { typeCode: "Unknown/Leo/Cancer" },
  "VA-DHANU":  { typeCode: "Virgo/Capricorn/Sagittarius" },
};

function buildVedicAstrologyMockScores(profileId: string): TestScores {
  const raw = VEDIC_ASTROLOGY_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const parts = raw.typeCode.split("/");
  const dims = ["lagna", "sun", "moon"];

  return {
    dimensions: dims.map((id, i) => {
      const sign = parts[i] ?? "Aries";
      const isUnknown = sign.startsWith("Unknown");
      return {
        dimensionId: id,
        label: id === "lagna" ? "Lagna (Ascendant)" : id === "sun" ? "Surya (Sun)" : "Chandra (Moon)",
        score: isUnknown ? 0 : 50,
        rawScore: 0,
        description: isUnknown
          ? "Lagna (ascendant) requires birth time."
          : `${sign} (simplified; full Vedic calculation coming soon)`,
      };
    }),
    typeCode: raw.typeCode,
    typeLabel: `Lagna in ${parts[0]}`,
  };
}

/* ---- Chinese Zodiac mock scores ---- */

const CHINESE_ZODIAC_MOCK_SCORES: Record<
  string,
  { animal: string; element: string; yinYang: string }
> = {
  "CZ-RAT":     { animal: "rat",    element: "Water", yinYang: "Yang" },
  "CZ-DRAGON":  { animal: "dragon", element: "Fire",  yinYang: "Yang" },
  "CZ-MONKEY":  { animal: "monkey", element: "Metal", yinYang: "Yang" },
};

function buildChineseZodiacMockScores(profileId: string): TestScores {
  const raw = CHINESE_ZODIAC_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  return {
    dimensions: [
      {
        dimensionId: "animal",
        label: "Chinese Zodiac",
        score: 50,
        rawScore: 0,
        description: raw.animal.charAt(0).toUpperCase() + raw.animal.slice(1),
      },
      {
        dimensionId: "element",
        label: "Element",
        score: 50,
        rawScore: 0,
        description: raw.element,
      },
      {
        dimensionId: "yin_yang",
        label: "Yin / Yang",
        score: 50,
        rawScore: 0,
        description: raw.yinYang,
      },
    ],
    typeCode: raw.animal,
    typeLabel: `${raw.animal.charAt(0).toUpperCase() + raw.animal.slice(1)} (${raw.element} ${raw.yinYang})`,
  };
}

/* ---- Mayan Astrology mock scores ---- */

const MAYAN_MOCK_SCORES: Record<
  string,
  { sign: string; tone: number }
> = {
  "MA-IMIX":  { sign: "Imix (Crocodile)", tone: 1 },
  "MA-IX":    { sign: "Ix (Jaguar)",      tone: 7 },
  "MA-AHAU":  { sign: "Ahau (Sun)",       tone: 13 },
};

function buildMayanMockScores(profileId: string): TestScores {
  const raw = MAYAN_MOCK_SCORES[profileId];
  if (!raw) throw new Error(`No mock scores for ${profileId}`);

  const signName = raw.sign.replace(/\s*\(.*\)/, "").trim();
  const signIndex = [
    "Imix", "Ik", "Akbal", "Kan", "Chicchan",
    "Cimi", "Manik", "Lamat", "Muluc", "Oc",
    "Chuen", "Eb", "Ben", "Ix", "Men",
    "Cib", "Caban", "Etznab", "Cauac", "Ahau",
  ].indexOf(signName);

  return {
    dimensions: [
      {
        dimensionId: "day-sign",
        label: "Tzolkin Day Sign",
        score: Math.round(((signIndex + 1) / 20) * 100),
        rawScore: signIndex,
        description: raw.sign,
      },
      {
        dimensionId: "tone",
        label: "Tone",
        score: Math.round((raw.tone / 13) * 100),
        rawScore: raw.tone,
        description: `Tone ${raw.tone}`,
      },
    ],
    typeCode: `${raw.tone} ${raw.sign}`,
    typeLabel: `${raw.tone} ${raw.sign}`,
  };
}

/* ---- Route handler ---- */

function resolvePreviewConfig(code: string): { testType: TestType; scores: TestScores } | null {
  if (MBTI_MOCK_SCORES[code]) {
    return { testType: "mbti", scores: buildMBTIMockScores(code) };
  }
  if (BIG5_MOCK_PROFILES[code]) {
    return { testType: "big5", scores: buildBig5MockScores(code) };
  }
  if (ENNEAGRAM_MOCK_SCORES[code]) {
    return { testType: "enneagram", scores: buildEnneagramMockScores(code) };
  }
  if (DISC_MOCK_SCORES[code]) {
    return { testType: "disc", scores: buildDISCMockScores(code) };
  }
  if (ATTACHMENT_MOCK_SCORES[code]) {
    return { testType: "attachment", scores: buildAttachmentMockScores(code) };
  }
  if (EQ_MOCK_SCORES[code]) {
    return { testType: "eq", scores: buildEQMockScores(code) };
  }
  if (RESILIENCE_MOCK_SCORES[code]) {
    return { testType: "resilience", scores: buildResilienceMockScores(code) };
  }
  if (STRESS_MOCK_SCORES[code]) {
    return { testType: "stress_profile", scores: buildStressMockScores(code) };
  }
  if (IQ_MOCK_SCORES[code]) {
    return { testType: "iq_pro", scores: buildIQMockScores(code) };
  }
  if (STRENGTHS_MOCK_SCORES[code]) {
    return { testType: "strengths", scores: buildStrengthsMockScores(code) };
  }
  if (FOCUS_STYLE_MOCK_SCORES[code]) {
    return { testType: "focus_style", scores: buildFocusStyleMockScores(code) };
  }
  if (CAREER_COMPASS_MOCK_SCORES[code]) {
    return { testType: "career_compass", scores: buildCareerCompassMockScores(code) };
  }
  if (LIFE_PATH_MOCK_SCORES[code]) {
    return { testType: "numerology", scores: buildLifePathMockScores(code) };
  }
  if (HUMAN_DESIGN_MOCK_SCORES[code]) {
    return { testType: "human_design", scores: buildHumanDesignMockScores(code) };
  }
  if (WESTERN_ASTROLOGY_MOCK_SCORES[code]) {
    return { testType: "western_astrology", scores: buildWesternAstrologyMockScores(code) };
  }
  if (VEDIC_ASTROLOGY_MOCK_SCORES[code]) {
    return { testType: "vedic_astrology", scores: buildVedicAstrologyMockScores(code) };
  }
  if (CHINESE_ZODIAC_MOCK_SCORES[code]) {
    return { testType: "chinese_zodiac", scores: buildChineseZodiacMockScores(code) };
  }
  if (MAYAN_MOCK_SCORES[code]) {
    return { testType: "mayan_astrology", scores: buildMayanMockScores(code) };
  }
  return null;
}

interface PageProps {
  params: Promise<{ typeCode: string }>;
}

export default async function PreviewPage({ params }: PageProps) {
  const { typeCode } = await params;
  const code = typeCode.toUpperCase();

  const config = resolvePreviewConfig(code);
  if (!config) notFound();

  const content = generateResultsPageContent(config.testType, config.scores);
  if (!content) notFound();

  return <PreviewClient content={content} scores={config.scores} frameworkKind="psychometric" />;
}
