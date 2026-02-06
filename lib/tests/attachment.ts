import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, topNDimensions } from "./scoring";

const dimensions = [
  { id: "secure", label: "Secure", description: "Comfortable with intimacy and independence; trusts others and self" },
  { id: "anxious", label: "Anxious-Preoccupied", description: "Desires closeness but fears rejection; seeks reassurance" },
  { id: "avoidant", label: "Dismissive-Avoidant", description: "Values independence highly; uncomfortable with emotional closeness" },
  { id: "fearful", label: "Fearful-Avoidant", description: "Wants closeness but fears getting hurt; vacillates between approach and withdrawal" },
];

const L5 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

export const attachmentTest: TestDefinition = {
  id: "attachment",
  title: "Attachment Style",
  subtitle: "Discover how you connect in relationships",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // Secure (5)
    { id: "at1", text: "I find it easy to get close to people and feel comfortable depending on them.", dimension: "secure", type: "likert-5", options: L5 },
    { id: "at2", text: "I am confident that my partner cares about me even when we are apart.", dimension: "secure", type: "likert-5", options: L5 },
    { id: "at3", text: "I feel at ease sharing my innermost thoughts and feelings with those I trust.", dimension: "secure", type: "likert-5", options: L5 },
    { id: "at4", text: "I can handle relationship disagreements without feeling my bond is threatened.", dimension: "secure", type: "likert-5", options: L5 },
    { id: "at5", text: "I balance my need for closeness with my need for personal space comfortably.", dimension: "secure", type: "likert-5", options: L5 },

    // Anxious-Preoccupied (5)
    { id: "at6", text: "I worry that my partner does not love me as much as I love them.", dimension: "anxious", type: "likert-5", options: L5 },
    { id: "at7", text: "I need frequent reassurance from people close to me that they care.", dimension: "anxious", type: "likert-5", options: L5 },
    { id: "at8", text: "I feel anxious when someone I am close to is emotionally distant or unresponsive.", dimension: "anxious", type: "likert-5", options: L5 },
    { id: "at9", text: "I tend to replay conversations or interactions in my mind, worrying about what they meant.", dimension: "anxious", type: "likert-5", options: L5 },
    { id: "at10", text: "I sometimes feel that I want to merge completely with another person, and this can scare people away.", dimension: "anxious", type: "likert-5", options: L5 },

    // Dismissive-Avoidant (5)
    { id: "at11", text: "I prefer not to depend on others and am uncomfortable when they depend on me.", dimension: "avoidant", type: "likert-5", options: L5 },
    { id: "at12", text: "I feel stifled when a relationship becomes too emotionally intense.", dimension: "avoidant", type: "likert-5", options: L5 },
    { id: "at13", text: "I am slow to open up to others and keep most people at arm's length.", dimension: "avoidant", type: "likert-5", options: L5 },
    { id: "at14", text: "I value my independence more than romantic closeness.", dimension: "avoidant", type: "likert-5", options: L5 },
    { id: "at15", text: "When others get too close emotionally, I have an urge to pull away.", dimension: "avoidant", type: "likert-5", options: L5 },

    // Fearful-Avoidant (5)
    { id: "at16", text: "I want close relationships but find it hard to fully trust anyone.", dimension: "fearful", type: "likert-5", options: L5 },
    { id: "at17", text: "I swing between wanting intense closeness and needing to push people away.", dimension: "fearful", type: "likert-5", options: L5 },
    { id: "at18", text: "I sometimes sabotage relationships when they start to feel too real.", dimension: "fearful", type: "likert-5", options: L5 },
    { id: "at19", text: "I am afraid of being hurt if I let someone get truly close to me.", dimension: "fearful", type: "likert-5", options: L5 },
    { id: "at20", text: "I feel confused about what I really want in relationships.", dimension: "fearful", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const top = topNDimensions(dimScores, 1)[0];

    return {
      dimensions: dimScores,
      overall: top?.score ?? 0,
      typeCode: top?.dimensionId ?? "secure",
      typeLabel: top?.label ?? "Secure",
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const sorted = topNDimensions(scores.dimensions, 4);
    const primary = sorted[0];
    const secureScore = scores.dimensions.find((d) => d.dimensionId === "secure")?.score ?? 0;

    const summary = `Your primary attachment style is ${primary.label} (${primary.score}%). ${secureScore >= 60 ? "You have a strong secure base, which is a great foundation for healthy relationships." : "Understanding your attachment patterns is the first step toward building more secure connections."} Your attachment style influences how you approach intimacy, handle conflict, and communicate needs in relationships.`;

    const dimensionDetails = sorted.map((d) => ({
      dimensionId: d.dimensionId,
      text: getAttachmentBlurb(d.dimensionId, d.score),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: primary.label,
      tips: [
        getAttachmentTip(primary.dimensionId),
        "Attachment styles are not fixed — they can evolve with awareness, intentional practice, and supportive relationships.",
        "Consider discussing your attachment patterns with a trusted friend or therapist for deeper insight.",
      ],
    };
  },
};

function getAttachmentBlurb(id: string, score: number): string {
  const blurbs: Record<string, string> = {
    secure: `Secure attachment (${score}%): You feel comfortable with emotional intimacy and can give and receive support naturally. You trust that relationships can weather challenges.`,
    anxious: `Anxious-Preoccupied (${score}%): You crave closeness and reassurance. You may be highly attuned to shifts in your partner's mood and worry about the stability of your bonds.`,
    avoidant: `Dismissive-Avoidant (${score}%): You value self-reliance and may feel uncomfortable with too much emotional closeness. Independence is central to your identity.`,
    fearful: `Fearful-Avoidant (${score}%): You desire connection but fear being hurt. This can create a push-pull dynamic where you approach and then withdraw from intimacy.`,
  };
  return blurbs[id] ?? "";
}

function getAttachmentTip(id: string): string {
  const tips: Record<string, string> = {
    secure: "Continue nurturing your secure tendencies by maintaining open communication and emotional availability in your relationships.",
    anxious: "Practice self-soothing techniques when feeling insecure. Journaling your worries before voicing them can help you communicate needs calmly.",
    avoidant: "Experiment with gradually increasing emotional vulnerability with safe people. Start small — share one feeling each day with someone you trust.",
    fearful: "Work on identifying your triggers for withdrawal. When you notice the urge to pull away, pause and ask yourself what you are afraid of.",
  };
  return tips[id] ?? "Continue exploring your attachment patterns for deeper self-understanding.";
}
