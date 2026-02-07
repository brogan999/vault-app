import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, topNDimensions } from "./scoring";

const dimensions = [
  { id: "dominance", label: "Dominance", description: "Direct, results-oriented, decisive, and competitive" },
  { id: "influence", label: "Influence", description: "Outgoing, enthusiastic, optimistic, and collaborative" },
  { id: "steadiness", label: "Steadiness", description: "Even-tempered, patient, reliable, and team-oriented" },
  { id: "conscientiousness", label: "Conscientiousness", description: "Detail-oriented, accurate, analytical, and quality-focused" },
];

const L7 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Slightly Disagree" },
  { value: 4, label: "Neutral" },
  { value: 5, label: "Slightly Agree" },
  { value: 6, label: "Agree" },
  { value: 7, label: "Strongly Agree" },
];

const STYLE_LETTER: Record<string, string> = {
  dominance: "D",
  influence: "i",
  steadiness: "S",
  conscientiousness: "C",
};

export const discTest: TestDefinition = {
  id: "disc",
  title: "Work Style Assessment",
  subtitle: "Discover your behavioural style at work: Dominance, Influence, Steadiness, and Conscientiousness",
  dimensions: [...dimensions],
  scoringMethod: "likert",
  questionsPerPage: 6,

  questions: [
    // Dominance (6) — workplace framing
    { id: "d1", text: "In meetings, I prefer to take charge and make decisions quickly.", dimension: "dominance", type: "likert-7", options: L7 },
    { id: "d2", text: "I am comfortable confronting conflict head-on at work.", dimension: "dominance", type: "likert-7", options: L7 },
    { id: "d3", text: "I focus on results and getting things done.", dimension: "dominance", type: "likert-7", options: L7 },
    { id: "d4", text: "I like to set challenging goals for myself and others.", dimension: "dominance", type: "likert-7", options: L7 },
    { id: "d5", text: "I am direct and to the point in communication.", dimension: "dominance", type: "likert-7", options: L7 },
    { id: "d6", text: "I get impatient when progress is slow.", dimension: "dominance", type: "likert-7", options: L7 },

    // Influence (6)
    { id: "i1", text: "I enjoy motivating and inspiring others at work.", dimension: "influence", type: "likert-7", options: L7 },
    { id: "i2", text: "I am optimistic and see the upside in situations.", dimension: "influence", type: "likert-7", options: L7 },
    { id: "i3", text: "I build rapport easily and like to connect with people.", dimension: "influence", type: "likert-7", options: L7 },
    { id: "i4", text: "I prefer a collaborative, open environment.", dimension: "influence", type: "likert-7", options: L7 },
    { id: "i5", text: "I express my ideas with enthusiasm.", dimension: "influence", type: "likert-7", options: L7 },
    { id: "i6", text: "I am comfortable being in the spotlight when needed.", dimension: "influence", type: "likert-7", options: L7 },

    // Steadiness (6)
    { id: "s1", text: "I value stability and consistent routines at work.", dimension: "steadiness", type: "likert-7", options: L7 },
    { id: "s2", text: "I am a good listener and patient with others.", dimension: "steadiness", type: "likert-7", options: L7 },
    { id: "s3", text: "I prefer to work at a steady, predictable pace.", dimension: "steadiness", type: "likert-7", options: L7 },
    { id: "s4", text: "I am loyal and supportive in teams.", dimension: "steadiness", type: "likert-7", options: L7 },
    { id: "s5", text: "I avoid unnecessary change and prefer the familiar.", dimension: "steadiness", type: "likert-7", options: L7 },
    { id: "s6", text: "I stay calm under pressure and help others stay calm.", dimension: "steadiness", type: "likert-7", options: L7 },

    // Conscientiousness (6)
    { id: "c1", text: "I pay close attention to details and accuracy in my work.", dimension: "conscientiousness", type: "likert-7", options: L7 },
    { id: "c2", text: "I prefer to follow standards and do things the right way.", dimension: "conscientiousness", type: "likert-7", options: L7 },
    { id: "c3", text: "I think through decisions carefully before acting.", dimension: "conscientiousness", type: "likert-7", options: L7 },
    { id: "c4", text: "I value quality over speed.", dimension: "conscientiousness", type: "likert-7", options: L7 },
    { id: "c5", text: "I like to have clear procedures and documentation.", dimension: "conscientiousness", type: "likert-7", options: L7 },
    { id: "c6", text: "I am cautious about risks and prefer to analyse first.", dimension: "conscientiousness", type: "likert-7", options: L7 },

    // Attention checks (2)
    { id: "ws_ac1", text: "Please select Agree for this item to show you are reading.", type: "likert-7", options: L7, isAttentionCheck: true, attentionCheckExpectedValue: 6 },
    { id: "ws_ac2", text: "This is an attention check. Please choose Slightly Agree.", type: "likert-7", options: L7, isAttentionCheck: true, attentionCheckExpectedValue: 5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions], 7);
    const top = topNDimensions(dimScores, 2);
    const primary = top[0];
    const secondary = top[1];
    const blend = primary && secondary
      ? `${STYLE_LETTER[primary.dimensionId] ?? ""}${STYLE_LETTER[secondary.dimensionId] ?? ""}`
      : (primary ? STYLE_LETTER[primary.dimensionId] ?? "unknown" : "unknown");
    return {
      dimensions: dimScores,
      overall: primary?.score ?? 0,
      typeCode: blend,
      typeLabel: primary?.label ?? "Unknown",
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const sorted = [...scores.dimensions].sort((a, b) => b.score - a.score);
    const primary = sorted[0];
    const secondary = sorted[1];
    const blend = scores.typeCode ?? "—";
    const summary = `Your work style blend is ${blend}: primary ${primary?.label ?? "Unknown"} with strong ${secondary?.label ?? "secondary"} influence. ${primary?.description ?? ""}. Most people are a blend of two styles; use this to adapt how you communicate at work.`;

    const dimensionDetails = sorted.map((d) => ({
      dimensionId: d.dimensionId,
      text: `${d.label}: ${d.score}% — ${d.description}`,
    }));

    const tips: string[] = [
      primary?.dimensionId === "dominance" ? "Balance directness with listening; others may need more time to contribute." : "",
      primary?.dimensionId === "influence" ? "Pair your enthusiasm with follow-through; detail-oriented colleagues may need more structure from you." : "",
      primary?.dimensionId === "steadiness" ? "Your calm is an asset; consider speaking up when you have a strong opinion." : "",
      primary?.dimensionId === "conscientiousness" ? "Your standards drive quality; allow room for iteration when speed matters." : "",
    ].filter(Boolean);

    return {
      summary,
      dimensionDetails,
      typeLabel: primary?.label,
      tips: tips.length > 0 ? tips : ["Use your work style profile to adapt your communication with different styles."],
    };
  },
};
