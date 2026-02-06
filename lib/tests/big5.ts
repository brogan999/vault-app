import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, estimatePercentile } from "./scoring";

const dimensions = [
  { id: "openness", label: "Openness", description: "Receptivity to new ideas, creativity, and intellectual curiosity" },
  { id: "conscientiousness", label: "Conscientiousness", description: "Organisation, discipline, and goal-directed behaviour" },
  { id: "extraversion", label: "Extraversion", description: "Sociability, assertiveness, and positive emotionality" },
  { id: "agreeableness", label: "Agreeableness", description: "Cooperation, empathy, and concern for others" },
  { id: "neuroticism", label: "Neuroticism", description: "Tendency toward negative emotions and emotional reactivity" },
] as const;

const L5 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

export const big5Test: TestDefinition = {
  id: "big5",
  title: "Big 5 Personality Test",
  subtitle: "Measure your five core personality dimensions",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // --- Openness (6 items) ---
    { id: "o1", text: "I enjoy exploring abstract concepts and philosophical discussions.", dimension: "openness", type: "likert-5", options: L5 },
    { id: "o2", text: "I often seek out experiences that are unfamiliar or unconventional.", dimension: "openness", type: "likert-5", options: L5 },
    { id: "o3", text: "I find beauty in art, music, or nature on a regular basis.", dimension: "openness", type: "likert-5", options: L5 },
    { id: "o4", text: "I prefer routine and predictability over novelty.", dimension: "openness", type: "likert-5", options: L5, reverseScored: true },
    { id: "o5", text: "I like to imagine how things could be different from the way they are.", dimension: "openness", type: "likert-5", options: L5 },
    { id: "o6", text: "I am drawn to ideas that challenge my existing worldview.", dimension: "openness", type: "likert-5", options: L5 },

    // --- Conscientiousness (6 items) ---
    { id: "c1", text: "I make a plan and stick to it when working toward a goal.", dimension: "conscientiousness", type: "likert-5", options: L5 },
    { id: "c2", text: "I pay close attention to details in my work.", dimension: "conscientiousness", type: "likert-5", options: L5 },
    { id: "c3", text: "I tend to put off tasks until the last minute.", dimension: "conscientiousness", type: "likert-5", options: L5, reverseScored: true },
    { id: "c4", text: "I keep my living and working spaces well-organised.", dimension: "conscientiousness", type: "likert-5", options: L5 },
    { id: "c5", text: "I follow through on commitments even when it is inconvenient.", dimension: "conscientiousness", type: "likert-5", options: L5 },
    { id: "c6", text: "I set clear priorities and manage my time effectively.", dimension: "conscientiousness", type: "likert-5", options: L5 },

    // --- Extraversion (6 items) ---
    { id: "e1", text: "I feel energised after spending time with a group of people.", dimension: "extraversion", type: "likert-5", options: L5 },
    { id: "e2", text: "I am usually the one to start conversations in social settings.", dimension: "extraversion", type: "likert-5", options: L5 },
    { id: "e3", text: "I prefer spending evenings at home rather than going out.", dimension: "extraversion", type: "likert-5", options: L5, reverseScored: true },
    { id: "e4", text: "I find it easy to express enthusiasm openly.", dimension: "extraversion", type: "likert-5", options: L5 },
    { id: "e5", text: "I enjoy being the centre of attention in a group.", dimension: "extraversion", type: "likert-5", options: L5 },
    { id: "e6", text: "I actively seek out social gatherings and events.", dimension: "extraversion", type: "likert-5", options: L5 },

    // --- Agreeableness (6 items) ---
    { id: "a1", text: "I go out of my way to make others feel comfortable.", dimension: "agreeableness", type: "likert-5", options: L5 },
    { id: "a2", text: "I find it easy to forgive others after a disagreement.", dimension: "agreeableness", type: "likert-5", options: L5 },
    { id: "a3", text: "I tend to be skeptical of other people's intentions.", dimension: "agreeableness", type: "likert-5", options: L5, reverseScored: true },
    { id: "a4", text: "I genuinely care about the well-being of people I interact with.", dimension: "agreeableness", type: "likert-5", options: L5 },
    { id: "a5", text: "I try to see situations from the other person's point of view.", dimension: "agreeableness", type: "likert-5", options: L5 },
    { id: "a6", text: "I avoid confrontation even when I strongly disagree.", dimension: "agreeableness", type: "likert-5", options: L5 },

    // --- Neuroticism (6 items) ---
    { id: "n1", text: "I often worry about things that might go wrong.", dimension: "neuroticism", type: "likert-5", options: L5 },
    { id: "n2", text: "I feel stressed or overwhelmed more often than most people.", dimension: "neuroticism", type: "likert-5", options: L5 },
    { id: "n3", text: "I stay calm and composed even in difficult situations.", dimension: "neuroticism", type: "likert-5", options: L5, reverseScored: true },
    { id: "n4", text: "My mood can shift quickly in response to small events.", dimension: "neuroticism", type: "likert-5", options: L5 },
    { id: "n5", text: "I tend to dwell on negative experiences long after they happen.", dimension: "neuroticism", type: "likert-5", options: L5 },
    { id: "n6", text: "I frequently feel anxious about the future.", dimension: "neuroticism", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const overall = Math.round(dimScores.reduce((s, d) => s + d.score, 0) / dimScores.length);
    return { dimensions: dimScores, overall };
  },

  interpret(scores: TestScores): TestInterpretation {
    const sorted = [...scores.dimensions].sort((a, b) => b.score - a.score);
    const highest = sorted[0];
    const lowest = sorted[sorted.length - 1];

    const summary = `Your strongest trait is ${highest.label} (${highest.score}%), placing you in approximately the ${estimatePercentile(highest.score)}th percentile. Your most moderate trait is ${lowest.label} (${lowest.score}%). This combination suggests you are ${getSummaryPhrase(highest.dimensionId, lowest.dimensionId)}.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: getDimensionBlurb(d.dimensionId, d.score),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `Highest: ${highest.label}`,
      tips: getTips(sorted),
    };
  },
};

function getSummaryPhrase(highId: string, lowId: string): string {
  const phrases: Record<string, string> = {
    openness: "imaginative and intellectually curious",
    conscientiousness: "dependable and goal-oriented",
    extraversion: "socially energetic and expressive",
    agreeableness: "empathetic and cooperative",
    neuroticism: "emotionally sensitive and self-aware",
  };
  return `${phrases[highId] || "multifaceted"}, while being less oriented toward ${phrases[lowId] || "other areas"}`;
}

function getDimensionBlurb(dimId: string, score: number): string {
  const level = score >= 70 ? "high" : score >= 40 ? "moderate" : "low";
  const blurbs: Record<string, Record<string, string>> = {
    openness: {
      high: "You thrive on novelty and creativity. You actively seek out new perspectives and enjoy intellectual exploration.",
      moderate: "You balance curiosity with practicality. You appreciate new ideas but also value tried-and-true approaches.",
      low: "You prefer the familiar and practical. You value concrete thinking and established methods.",
    },
    conscientiousness: {
      high: "You are highly organised and reliable. You set goals methodically and follow through with discipline.",
      moderate: "You maintain a reasonable balance between structure and flexibility in your daily life.",
      low: "You prefer spontaneity over rigid planning. You may work best with flexible deadlines and open-ended projects.",
    },
    extraversion: {
      high: "You draw energy from social interaction and enjoy being around others. You tend to be expressive and enthusiastic.",
      moderate: "You enjoy social interaction but also value your alone time. You can adapt to both group and solitary settings.",
      low: "You recharge through solitude and prefer meaningful one-on-one conversations over large gatherings.",
    },
    agreeableness: {
      high: "You are warm, empathetic, and prioritise harmony in relationships. Others often see you as supportive and kind.",
      moderate: "You balance cooperation with assertiveness. You can be both accommodating and firm when needed.",
      low: "You are direct and independent in your approach to relationships. You value honesty over diplomacy.",
    },
    neuroticism: {
      high: "You experience emotions intensely and may be more sensitive to stress. This awareness can be channelled into empathy and self-reflection.",
      moderate: "You experience a normal range of emotional ups and downs, handling most stressors with reasonable composure.",
      low: "You are emotionally stable and resilient. You tend to stay calm under pressure and recover quickly from setbacks.",
    },
  };
  return blurbs[dimId]?.[level] ?? "";
}

function getTips(sorted: { dimensionId: string; score: number }[]): string[] {
  const tips: string[] = [];
  const lowest = sorted[sorted.length - 1];
  const tipMap: Record<string, string> = {
    openness: "Try exposing yourself to one new idea, art form, or cultural experience each week to gradually expand your comfort zone.",
    conscientiousness: "Start with a simple daily planner or to-do list to build the habit of intentional goal-setting.",
    extraversion: "Practice initiating one conversation per day with someone new — even a brief exchange can build social confidence.",
    agreeableness: "Practice active listening: repeat back what others say before responding, to build empathetic understanding.",
    neuroticism: "Consider a brief daily mindfulness or breathing practice to build emotional resilience over time.",
  };
  if (lowest && tipMap[lowest.dimensionId]) {
    tips.push(tipMap[lowest.dimensionId]);
  }
  tips.push("Revisit this assessment in 3–6 months to track how your personality evolves over time.");
  return tips;
}
