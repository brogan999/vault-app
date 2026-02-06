import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, topNDimensions } from "./scoring";

const dimensions = [
  { id: "fight", label: "Fight", description: "Confronting stress head-on through action, assertiveness, or control" },
  { id: "flight", label: "Flight", description: "Managing stress by withdrawing, avoiding, or escaping the situation" },
  { id: "freeze", label: "Freeze", description: "Becoming immobilised or numb when overwhelmed by stress" },
  { id: "fawn", label: "Fawn", description: "Coping with stress by people-pleasing and prioritising others' needs" },
];

const L5 = [
  { value: 1, label: "Never" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Almost Always" },
];

export const stressProfileTest: TestDefinition = {
  id: "stress-profile",
  title: "Stress Response Profile",
  subtitle: "Understand your instinctive stress response patterns",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // Fight (5)
    { id: "sp1", text: "When stressed, I become more assertive and take charge of the situation.", dimension: "fight", type: "likert-5", options: L5 },
    { id: "sp2", text: "I argue my point more forcefully when I feel under pressure.", dimension: "fight", type: "likert-5", options: L5 },
    { id: "sp3", text: "My first instinct during conflict is to confront the problem directly.", dimension: "fight", type: "likert-5", options: L5 },
    { id: "sp4", text: "I feel a surge of energy and determination when faced with a threat.", dimension: "fight", type: "likert-5", options: L5 },
    { id: "sp5", text: "I become critical or impatient with others when I am overwhelmed.", dimension: "fight", type: "likert-5", options: L5 },

    // Flight (5)
    { id: "sp6", text: "When stress builds up, I tend to physically leave or mentally check out.", dimension: "flight", type: "likert-5", options: L5 },
    { id: "sp7", text: "I cope with stressful situations by staying busy with unrelated tasks.", dimension: "flight", type: "likert-5", options: L5 },
    { id: "sp8", text: "I avoid conversations or situations that might lead to conflict.", dimension: "flight", type: "likert-5", options: L5 },
    { id: "sp9", text: "I feel a strong urge to escape when things become overwhelming.", dimension: "flight", type: "likert-5", options: L5 },
    { id: "sp10", text: "I distract myself with entertainment or activities when I feel anxious.", dimension: "flight", type: "likert-5", options: L5 },

    // Freeze (5)
    { id: "sp11", text: "When faced with a major stressor, I sometimes feel paralysed and unable to act.", dimension: "freeze", type: "likert-5", options: L5 },
    { id: "sp12", text: "I find it hard to make decisions when I am under intense pressure.", dimension: "freeze", type: "likert-5", options: L5 },
    { id: "sp13", text: "I go blank or numb when someone confronts me unexpectedly.", dimension: "freeze", type: "likert-5", options: L5 },
    { id: "sp14", text: "I tend to overthink situations without taking action when stressed.", dimension: "freeze", type: "likert-5", options: L5 },
    { id: "sp15", text: "I feel disconnected from my body or emotions during high-stress events.", dimension: "freeze", type: "likert-5", options: L5 },

    // Fawn (5)
    { id: "sp16", text: "Under pressure, I focus on making sure everyone else is okay before attending to my own needs.", dimension: "fawn", type: "likert-5", options: L5 },
    { id: "sp17", text: "I find myself agreeing with others to keep the peace when I am stressed.", dimension: "fawn", type: "likert-5", options: L5 },
    { id: "sp18", text: "I apologise frequently, even when something is not my fault, to reduce tension.", dimension: "fawn", type: "likert-5", options: L5 },
    { id: "sp19", text: "I try to read what others need and adapt my behaviour accordingly when anxious.", dimension: "fawn", type: "likert-5", options: L5 },
    { id: "sp20", text: "I suppress my own feelings to avoid upsetting others during stressful times.", dimension: "fawn", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const top = topNDimensions(dimScores, 2);

    return {
      dimensions: dimScores,
      overall: top[0]?.score ?? 0,
      typeCode: top[0]?.dimensionId ?? "unknown",
      typeLabel: `Primary: ${top[0]?.label ?? "Unknown"}`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const sorted = topNDimensions(scores.dimensions, 4);
    const primary = sorted[0];
    const secondary = sorted[1];

    const summary = `Your dominant stress response is ${primary.label} (${primary.score}%), with a secondary tendency toward ${secondary.label} (${secondary.score}%). This means when faced with stress, you most often ${getResponseDesc(primary.dimensionId)}, with a backup pattern of ${getResponseDesc(secondary.dimensionId)}.`;

    const dimensionDetails = sorted.map((d) => ({
      dimensionId: d.dimensionId,
      text: getResponseBlurb(d.dimensionId, d.score),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `${primary.label} / ${secondary.label}`,
      tips: [
        getCopingTip(primary.dimensionId),
        getCopingTip(secondary.dimensionId),
        "Awareness of your stress response is the first step to healthier coping. Practice noticing your patterns in real time.",
      ],
    };
  },
};

function getResponseDesc(id: string): string {
  const descs: Record<string, string> = {
    fight: "confront the stressor with action and assertiveness",
    flight: "avoid or withdraw from the stressful situation",
    freeze: "become immobilised or go numb",
    fawn: "prioritise others' needs and people-please to reduce tension",
  };
  return descs[id] ?? "respond automatically";
}

function getResponseBlurb(id: string, score: number): string {
  const level = score >= 65 ? "strong" : score >= 40 ? "moderate" : "mild";
  const blurbs: Record<string, Record<string, string>> = {
    fight: {
      strong: "You have a strong confrontational response to stress. While this gives you determination, watch for aggression or burnout.",
      moderate: "You sometimes confront stress directly, which can be effective in measured doses.",
      mild: "You rarely default to a fight response, preferring other coping strategies.",
    },
    flight: {
      strong: "You strongly tend to withdraw or avoid when stressed. While self-preservation is natural, avoidance can delay resolution.",
      moderate: "You sometimes disengage under stress, which can be a healthy short-term strategy.",
      mild: "You rarely flee from stressors, generally staying present to address them.",
    },
    freeze: {
      strong: "You often become immobilised under stress. This is a protective mechanism but can leave problems unaddressed.",
      moderate: "You occasionally freeze up under pressure, especially when decisions feel overwhelming.",
      mild: "You rarely experience a freeze response, maintaining your ability to act under pressure.",
    },
    fawn: {
      strong: "You strongly prioritise others' comfort over your own when stressed. This can lead to burnout and resentment if unchecked.",
      moderate: "You sometimes people-please under stress, which can maintain relationships but at a personal cost.",
      mild: "You rarely resort to fawning, generally maintaining your own boundaries under pressure.",
    },
  };
  return blurbs[id]?.[level] ?? "";
}

function getCopingTip(id: string): string {
  const tips: Record<string, string> = {
    fight: "Channel your fight energy constructively: physical exercise, assertive (not aggressive) communication, and structured problem-solving.",
    flight: "Before withdrawing, try setting a timer for 5 minutes of 'staying present' with the stressor. Often the discomfort peaks and passes.",
    freeze: "Ground yourself with the 5-4-3-2-1 technique: name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, and 1 you taste.",
    fawn: "Practice saying 'Let me think about that' before automatically agreeing to requests during stressful moments.",
  };
  return tips[id] ?? "Practice mindful awareness of your stress patterns.";
}
