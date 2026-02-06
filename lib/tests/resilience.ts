import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, estimatePercentile } from "./scoring";

const dimensions = [
  { id: "emotional-regulation", label: "Emotional Regulation", description: "Ability to manage and recover from intense emotions" },
  { id: "optimism", label: "Optimism", description: "Tendency to expect positive outcomes and see opportunities in challenges" },
  { id: "self-efficacy", label: "Self-Efficacy", description: "Belief in your ability to handle difficult situations" },
  { id: "social-support", label: "Social Support", description: "Ability to seek and accept help from your social network" },
  { id: "adaptability", label: "Adaptability", description: "Flexibility in adjusting to new conditions and uncertainty" },
];

const L5 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

export const resilienceTest: TestDefinition = {
  id: "resilience",
  title: "Resilience Quotient",
  subtitle: "Measure your capacity to bounce back from adversity",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // Emotional Regulation (5)
    { id: "re1", text: "I recover from setbacks relatively quickly.", dimension: "emotional-regulation", type: "likert-5", options: L5 },
    { id: "re2", text: "I can manage my emotions effectively even in high-pressure situations.", dimension: "emotional-regulation", type: "likert-5", options: L5 },
    { id: "re3", text: "I rarely let negative emotions spiral out of control.", dimension: "emotional-regulation", type: "likert-5", options: L5 },
    { id: "re4", text: "I have healthy coping strategies that I use when feeling overwhelmed.", dimension: "emotional-regulation", type: "likert-5", options: L5 },
    { id: "re5", text: "I can separate my emotions from the facts of a situation.", dimension: "emotional-regulation", type: "likert-5", options: L5 },

    // Optimism (5)
    { id: "re6", text: "I generally expect things to work out, even when they look difficult.", dimension: "optimism", type: "likert-5", options: L5 },
    { id: "re7", text: "I view failures as learning opportunities rather than personal flaws.", dimension: "optimism", type: "likert-5", options: L5 },
    { id: "re8", text: "I focus on what I can control rather than worrying about what I cannot.", dimension: "optimism", type: "likert-5", options: L5 },
    { id: "re9", text: "I can find something positive in most difficult situations.", dimension: "optimism", type: "likert-5", options: L5 },
    { id: "re10", text: "I believe my current difficulties are temporary, not permanent.", dimension: "optimism", type: "likert-5", options: L5 },

    // Self-Efficacy (5)
    { id: "re11", text: "I am confident I can handle whatever life throws at me.", dimension: "self-efficacy", type: "likert-5", options: L5 },
    { id: "re12", text: "When I face a challenge, I believe I have the skills to overcome it.", dimension: "self-efficacy", type: "likert-5", options: L5 },
    { id: "re13", text: "I take initiative to solve problems rather than waiting for them to resolve on their own.", dimension: "self-efficacy", type: "likert-5", options: L5 },
    { id: "re14", text: "Past successes give me confidence to tackle new challenges.", dimension: "self-efficacy", type: "likert-5", options: L5 },
    { id: "re15", text: "I set and achieve meaningful goals even in the face of obstacles.", dimension: "self-efficacy", type: "likert-5", options: L5 },

    // Social Support (5)
    { id: "re16", text: "I have people in my life I can turn to when things get tough.", dimension: "social-support", type: "likert-5", options: L5 },
    { id: "re17", text: "I am comfortable asking for help when I need it.", dimension: "social-support", type: "likert-5", options: L5 },
    { id: "re18", text: "I maintain strong relationships that support my well-being.", dimension: "social-support", type: "likert-5", options: L5 },
    { id: "re19", text: "I feel a sense of belonging in my community or social group.", dimension: "social-support", type: "likert-5", options: L5 },
    { id: "re20", text: "I offer support to others and receive support in return.", dimension: "social-support", type: "likert-5", options: L5 },

    // Adaptability (5)
    { id: "re21", text: "I adjust well to changes in plans or unexpected events.", dimension: "adaptability", type: "likert-5", options: L5 },
    { id: "re22", text: "I can thrive in ambiguous situations where the path is unclear.", dimension: "adaptability", type: "likert-5", options: L5 },
    { id: "re23", text: "I am willing to change my approach if something is not working.", dimension: "adaptability", type: "likert-5", options: L5 },
    { id: "re24", text: "I remain productive even when circumstances around me shift.", dimension: "adaptability", type: "likert-5", options: L5 },
    { id: "re25", text: "I embrace change as an opportunity rather than a threat.", dimension: "adaptability", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const overall = Math.round(dimScores.reduce((s, d) => s + d.score, 0) / dimScores.length);
    return { dimensions: dimScores, overall, typeLabel: getResilienceLabel(overall) };
  },

  interpret(scores: TestScores): TestInterpretation {
    const overall = scores.overall ?? 0;
    const sorted = [...scores.dimensions].sort((a, b) => b.score - a.score);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    const summary = `Your Resilience Quotient is ${overall}% (${getResilienceLabel(overall)}, ~${estimatePercentile(overall)}th percentile). Your greatest resilience asset is ${strongest.label} (${strongest.score}%), while ${weakest.label} (${weakest.score}%) offers the best opportunity for building greater resilience.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: getResilienceBlurb(d.dimensionId, d.score),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `RQ: ${overall}%`,
      tips: [
        getResilienceTip(weakest.dimensionId),
        "Build resilience gradually: pick one small daily practice and commit to it for 30 days.",
        "Resilience is a skill, not a fixed trait. Regular reassessment can help you track your growth.",
      ],
    };
  },
};

function getResilienceLabel(score: number): string {
  if (score >= 80) return "Highly Resilient";
  if (score >= 60) return "Resilient";
  if (score >= 40) return "Moderately Resilient";
  return "Building Resilience";
}

function getResilienceBlurb(dimId: string, score: number): string {
  const level = score >= 70 ? "high" : score >= 40 ? "moderate" : "low";
  const blurbs: Record<string, Record<string, string>> = {
    "emotional-regulation": {
      high: "Excellent emotional management. You process difficult feelings efficiently and return to baseline quickly.",
      moderate: "You generally manage your emotions well, though intense situations can sometimes throw you off balance.",
      low: "Emotional regulation is an area for growth. Building a toolkit of calming strategies can help you handle stress more effectively.",
    },
    optimism: {
      high: "Strong optimistic outlook. You naturally reframe setbacks as temporary and solvable.",
      moderate: "You maintain a fairly positive outlook but may struggle with pessimism during prolonged difficulties.",
      low: "Developing a more optimistic mindset can significantly boost your resilience. Start by noting one positive thing each day.",
    },
    "self-efficacy": {
      high: "Strong self-belief. You trust in your ability to handle challenges and take action confidently.",
      moderate: "You have a reasonable level of confidence in your abilities, with room to strengthen your self-trust.",
      low: "Building self-efficacy through small wins can transform your resilience. Set achievable goals and celebrate completing them.",
    },
    "social-support": {
      high: "Excellent social resources. You have a strong network and are comfortable both giving and receiving support.",
      moderate: "You have some social support but could benefit from deepening connections or expanding your network.",
      low: "Investing in relationships is one of the highest-impact resilience strategies. Consider joining a group or reaching out to an old friend.",
    },
    adaptability: {
      high: "Highly adaptable. You embrace change and thrive in uncertain environments.",
      moderate: "You can adapt to change with some effort, though significant disruptions may take time to process.",
      low: "Flexibility is a skill that can be practiced. Try deliberately changing your routine in small ways to build comfort with uncertainty.",
    },
  };
  return blurbs[dimId]?.[level] ?? "";
}

function getResilienceTip(dimId: string): string {
  const tips: Record<string, string> = {
    "emotional-regulation": "Try the 'name it to tame it' technique: simply labelling your emotions can reduce their intensity by up to 50%.",
    optimism: "Practice 'three good things' — each evening, write down three positive things that happened today, no matter how small.",
    "self-efficacy": "Start a 'wins journal' where you record one accomplishment per day to build confidence in your capabilities.",
    "social-support": "Reach out to one person this week just to check in. Strong relationships are built through small, consistent gestures.",
    adaptability: "Try one new thing this week that is outside your comfort zone — even something small like a new route or a new food.",
  };
  return tips[dimId] ?? "Focus on building one resilience factor at a time for sustainable growth.";
}
