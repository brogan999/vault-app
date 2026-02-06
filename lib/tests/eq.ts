import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, estimatePercentile } from "./scoring";

const dimensions = [
  { id: "self-awareness", label: "Self-Awareness", description: "Recognising and understanding your own emotions, strengths, and limitations" },
  { id: "self-regulation", label: "Self-Regulation", description: "Managing your emotions, impulses, and reactions effectively" },
  { id: "motivation", label: "Motivation", description: "Inner drive to pursue goals with energy and persistence" },
  { id: "empathy", label: "Empathy", description: "Understanding and sharing the feelings of others" },
  { id: "social-skills", label: "Social Skills", description: "Building and managing relationships, communicating effectively" },
];

const L5 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

export const eqTest: TestDefinition = {
  id: "eq",
  title: "Emotional Intelligence",
  subtitle: "Assess your emotional awareness and social effectiveness",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // Self-Awareness (5)
    { id: "sa1", text: "I can accurately name the emotions I am feeling in the moment.", dimension: "self-awareness", type: "likert-5", options: L5 },
    { id: "sa2", text: "I understand how my emotions influence my decisions.", dimension: "self-awareness", type: "likert-5", options: L5 },
    { id: "sa3", text: "I am aware of my emotional triggers and what sets them off.", dimension: "self-awareness", type: "likert-5", options: L5 },
    { id: "sa4", text: "I have a clear sense of my personal strengths and weaknesses.", dimension: "self-awareness", type: "likert-5", options: L5 },
    { id: "sa5", text: "I can tell when my mood is affecting my performance at work or in relationships.", dimension: "self-awareness", type: "likert-5", options: L5 },

    // Self-Regulation (5)
    { id: "sr1", text: "I can calm myself down quickly when I feel angry or upset.", dimension: "self-regulation", type: "likert-5", options: L5 },
    { id: "sr2", text: "I think before reacting when someone says something that bothers me.", dimension: "self-regulation", type: "likert-5", options: L5 },
    { id: "sr3", text: "I can stay focused even when I am experiencing strong emotions.", dimension: "self-regulation", type: "likert-5", options: L5 },
    { id: "sr4", text: "I rarely say things I later regret during heated moments.", dimension: "self-regulation", type: "likert-5", options: L5 },
    { id: "sr5", text: "I adapt my emotional responses appropriately to different situations.", dimension: "self-regulation", type: "likert-5", options: L5 },

    // Motivation (5)
    { id: "mo1", text: "I stay committed to my goals even when I face setbacks.", dimension: "motivation", type: "likert-5", options: L5 },
    { id: "mo2", text: "I am driven by a desire to grow rather than just external rewards.", dimension: "motivation", type: "likert-5", options: L5 },
    { id: "mo3", text: "I find it easy to motivate myself to start on tasks I find meaningful.", dimension: "motivation", type: "likert-5", options: L5 },
    { id: "mo4", text: "I look for ways to improve, even when things are going well.", dimension: "motivation", type: "likert-5", options: L5 },
    { id: "mo5", text: "I maintain a positive outlook even during challenging periods.", dimension: "motivation", type: "likert-5", options: L5 },

    // Empathy (5)
    { id: "em1", text: "I can sense how someone is feeling without them having to tell me.", dimension: "empathy", type: "likert-5", options: L5 },
    { id: "em2", text: "I listen attentively when others share their problems, without rushing to give advice.", dimension: "empathy", type: "likert-5", options: L5 },
    { id: "em3", text: "I naturally consider how others might feel before making decisions that affect them.", dimension: "empathy", type: "likert-5", options: L5 },
    { id: "em4", text: "I feel moved by other people's hardships and want to help.", dimension: "empathy", type: "likert-5", options: L5 },
    { id: "em5", text: "I can see a disagreement from the other person's perspective.", dimension: "empathy", type: "likert-5", options: L5 },

    // Social Skills (5)
    { id: "ss1", text: "I find it easy to build rapport with people from diverse backgrounds.", dimension: "social-skills", type: "likert-5", options: L5 },
    { id: "ss2", text: "I can navigate conflicts in a way that maintains the relationship.", dimension: "social-skills", type: "likert-5", options: L5 },
    { id: "ss3", text: "People often come to me for guidance or support.", dimension: "social-skills", type: "likert-5", options: L5 },
    { id: "ss4", text: "I communicate my ideas clearly and persuasively.", dimension: "social-skills", type: "likert-5", options: L5 },
    { id: "ss5", text: "I am effective at working collaboratively within a team.", dimension: "social-skills", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const overall = Math.round(dimScores.reduce((s, d) => s + d.score, 0) / dimScores.length);
    return { dimensions: dimScores, overall, typeLabel: getEQLabel(overall) };
  },

  interpret(scores: TestScores): TestInterpretation {
    const overall = scores.overall ?? 0;
    const sorted = [...scores.dimensions].sort((a, b) => b.score - a.score);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    const summary = `Your overall Emotional Intelligence score is ${overall}% (${getEQLabel(overall)}). Your greatest strength is ${strongest.label} (${strongest.score}%, ~${estimatePercentile(strongest.score)}th percentile), while ${weakest.label} (${weakest.score}%) presents the best opportunity for growth.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: getEQDimensionBlurb(d.dimensionId, d.score),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: getEQLabel(overall),
      tips: [
        getEQTip(weakest.dimensionId),
        "Practice daily emotional check-ins: pause three times a day to name what you are feeling.",
        "EQ grows with practice — revisit this assessment in a few months to track your progress.",
      ],
    };
  },
};

function getEQLabel(score: number): string {
  if (score >= 80) return "Exceptional EQ";
  if (score >= 65) return "High EQ";
  if (score >= 45) return "Moderate EQ";
  return "Developing EQ";
}

function getEQDimensionBlurb(dimId: string, score: number): string {
  const level = score >= 70 ? "high" : score >= 40 ? "moderate" : "low";
  const blurbs: Record<string, Record<string, string>> = {
    "self-awareness": {
      high: "You have strong insight into your emotional landscape. You recognise how feelings drive your behaviour and decisions.",
      moderate: "You have a reasonable understanding of your emotions, with room to deepen self-reflection practices.",
      low: "Developing greater self-awareness will be transformative. Consider journaling or mindfulness to build this skill.",
    },
    "self-regulation": {
      high: "You manage your emotions skillfully, maintaining composure even under pressure.",
      moderate: "You generally handle emotions well, though stress can sometimes override your usual composure.",
      low: "Building self-regulation skills — like pausing before reacting — can significantly improve your daily interactions.",
    },
    motivation: {
      high: "You have strong intrinsic drive. You pursue goals with passion and maintain optimism through setbacks.",
      moderate: "You are reasonably motivated but may struggle with consistency when external rewards are lacking.",
      low: "Connecting your tasks to deeper personal values can reignite your intrinsic motivation.",
    },
    empathy: {
      high: "You naturally tune in to others' emotional states and respond with genuine care and understanding.",
      moderate: "You show empathy in many situations but may miss subtle emotional cues from others.",
      low: "Practising active listening and asking open-ended questions can help you better understand others' perspectives.",
    },
    "social-skills": {
      high: "You navigate social situations with ease, building trust and resolving conflicts effectively.",
      moderate: "You have solid social skills with room to grow in areas like influence or conflict resolution.",
      low: "Focusing on communication skills and active listening can strengthen your social effectiveness.",
    },
  };
  return blurbs[dimId]?.[level] ?? "";
}

function getEQTip(dimId: string): string {
  const tips: Record<string, string> = {
    "self-awareness": "Try a daily feelings journal — write down three emotions you experienced today and what triggered them.",
    "self-regulation": "Practice the 'pause-breathe-respond' technique: when triggered, take three breaths before reacting.",
    motivation: "Set one meaningful micro-goal each morning that connects to your core values.",
    empathy: "In your next conversation, focus entirely on understanding the other person before sharing your own view.",
    "social-skills": "Practice giving one piece of genuine, specific positive feedback to someone each day.",
  };
  return tips[dimId] ?? "Continue building your emotional intelligence through daily practice.";
}
