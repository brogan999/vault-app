import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, topNDimensions } from "./scoring";

const dimensions = [
  { id: "deep-focus", label: "Deep Focus", description: "Ability to sustain intense concentration on a single task for extended periods" },
  { id: "task-switching", label: "Task Switching", description: "Ability to shift between tasks efficiently without losing momentum" },
  { id: "ambient-focus", label: "Ambient Focus", description: "Ability to maintain broad awareness while working, noticing changes around you" },
  { id: "flow-propensity", label: "Flow Propensity", description: "Tendency to enter a state of complete immersion and peak performance" },
];

const L5 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

export const focusStyleTest: TestDefinition = {
  id: "focus-style",
  title: "Focus & Flow Profile",
  subtitle: "Discover your optimal conditions for peak concentration",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // Deep Focus (5)
    { id: "ff1", text: "I can concentrate intensely on a single task for 90 minutes or more without needing a break.", dimension: "deep-focus", type: "likert-5", options: L5 },
    { id: "ff2", text: "When I am working on something important, I lose awareness of my surroundings.", dimension: "deep-focus", type: "likert-5", options: L5 },
    { id: "ff3", text: "I produce my best work in long, uninterrupted stretches of time.", dimension: "deep-focus", type: "likert-5", options: L5 },
    { id: "ff4", text: "Interruptions during focused work significantly derail my productivity.", dimension: "deep-focus", type: "likert-5", options: L5 },
    { id: "ff5", text: "I prefer to block out all distractions and work in silence or with minimal background noise.", dimension: "deep-focus", type: "likert-5", options: L5 },

    // Task Switching (5)
    { id: "ff6", text: "I can move between different types of tasks without losing much time or energy.", dimension: "task-switching", type: "likert-5", options: L5 },
    { id: "ff7", text: "I find variety in my work stimulating rather than draining.", dimension: "task-switching", type: "likert-5", options: L5 },
    { id: "ff8", text: "I handle multiple projects simultaneously without feeling overwhelmed.", dimension: "task-switching", type: "likert-5", options: L5 },
    { id: "ff9", text: "I can quickly re-focus after a necessary interruption.", dimension: "task-switching", type: "likert-5", options: L5 },
    { id: "ff10", text: "I work well in environments where priorities shift frequently.", dimension: "task-switching", type: "likert-5", options: L5 },

    // Ambient Focus (5)
    { id: "ff11", text: "I naturally notice changes in my environment even while working.", dimension: "ambient-focus", type: "likert-5", options: L5 },
    { id: "ff12", text: "I work well in open or semi-noisy environments like cafes.", dimension: "ambient-focus", type: "likert-5", options: L5 },
    { id: "ff13", text: "I can stay productive while keeping an ear open for important information.", dimension: "ambient-focus", type: "likert-5", options: L5 },
    { id: "ff14", text: "I often have background music, podcasts, or conversation while I work.", dimension: "ambient-focus", type: "likert-5", options: L5 },
    { id: "ff15", text: "I am good at monitoring several things at once without dropping any.", dimension: "ambient-focus", type: "likert-5", options: L5 },

    // Flow Propensity (5)
    { id: "ff16", text: "I frequently lose track of time because I am so absorbed in what I am doing.", dimension: "flow-propensity", type: "likert-5", options: L5 },
    { id: "ff17", text: "I experience moments where my skills perfectly match the challenge and everything clicks.", dimension: "flow-propensity", type: "likert-5", options: L5 },
    { id: "ff18", text: "When I am in the zone, I feel a sense of effortless control over my work.", dimension: "flow-propensity", type: "likert-5", options: L5 },
    { id: "ff19", text: "I feel deeply satisfied and energised after a session of highly focused work.", dimension: "flow-propensity", type: "likert-5", options: L5 },
    { id: "ff20", text: "I actively seek out tasks that stretch my abilities just beyond my current skill level.", dimension: "flow-propensity", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const top = topNDimensions(dimScores, 1)[0];
    const flowScore = dimScores.find((d) => d.dimensionId === "flow-propensity")?.score ?? 0;

    return {
      dimensions: dimScores,
      overall: flowScore,
      typeCode: top?.dimensionId ?? "deep-focus",
      typeLabel: `${top?.label ?? "Deep Focus"} (Flow: ${flowScore}%)`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const sorted = topNDimensions(scores.dimensions, 4);
    const primary = sorted[0];
    const flowScore = scores.dimensions.find((d) => d.dimensionId === "flow-propensity")?.score ?? 0;

    const summary = `Your dominant focus style is ${primary.label} (${primary.score}%), with a Flow Propensity of ${flowScore}%. This means you ${getFocusDesc(primary.dimensionId)} and ${flowScore >= 65 ? "frequently enter flow states — a strong indicator of peak performance potential" : "have room to cultivate more frequent flow states for enhanced productivity"}.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: getFocusBlurb(d.dimensionId, d.score),
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: primary.label,
      tips: [
        getEnvironmentTip(primary.dimensionId),
        getFlowTip(flowScore),
        "Track your peak focus hours for a week, then schedule your most important work during those windows.",
      ],
    };
  },
};

function getFocusDesc(id: string): string {
  const descs: Record<string, string> = {
    "deep-focus": "excel at sustained, intense concentration on a single task",
    "task-switching": "thrive when moving between different types of work",
    "ambient-focus": "maintain productive awareness across multiple streams of input",
    "flow-propensity": "naturally enter immersive flow states during challenging work",
  };
  return descs[id] ?? "have a unique focus profile";
}

function getFocusBlurb(id: string, score: number): string {
  const level = score >= 70 ? "high" : score >= 40 ? "moderate" : "low";
  const blurbs: Record<string, Record<string, string>> = {
    "deep-focus": {
      high: "Excellent sustained attention. You are built for deep work — protect your focused time fiercely.",
      moderate: "You can concentrate for reasonable periods but may benefit from more structured deep-work blocks.",
      low: "Deep focus is an area for development. Start with 25-minute focused blocks (Pomodoro) and gradually increase.",
    },
    "task-switching": {
      high: "You handle context switches well. Great for roles requiring variety, but guard against superficiality.",
      moderate: "You manage task switches reasonably but may lose some efficiency with frequent interruptions.",
      low: "You lose significant time when switching tasks. Batch similar work together and minimise context switches.",
    },
    "ambient-focus": {
      high: "You maintain excellent peripheral awareness. Ideal for monitoring roles and collaborative environments.",
      moderate: "You can work with some background activity, but deep tasks may suffer in noisy environments.",
      low: "You need a quiet, controlled environment for your best work. Noise-cancelling headphones are your friend.",
    },
    "flow-propensity": {
      high: "You frequently experience flow states — protect the conditions that enable them. This is a rare and valuable ability.",
      moderate: "You enter flow occasionally. Matching task difficulty to your skill level can increase flow frequency.",
      low: "Flow states are rare for you. Experiment with activities that are challenging but achievable, with clear goals and immediate feedback.",
    },
  };
  return blurbs[id]?.[level] ?? "";
}

function getEnvironmentTip(id: string): string {
  const tips: Record<string, string> = {
    "deep-focus": "Design your environment for zero interruptions: close notifications, use DND mode, and communicate your focused hours to colleagues.",
    "task-switching": "Use a task board or kanban system to smoothly transition between projects without losing context on any of them.",
    "ambient-focus": "Position yourself where you can observe activity without being directly interrupted. Cafes or open-plan corners can work well.",
    "flow-propensity": "Create a 'flow ritual' — the same music, same location, same starting routine — to signal your brain it is time to enter flow.",
  };
  return tips[id] ?? "Experiment with different environments to find what works best for you.";
}

function getFlowTip(score: number): string {
  if (score >= 70) return "You are a natural flow-seeker. Push your skills with increasingly challenging projects to maintain flow as you grow.";
  if (score >= 40) return "To increase flow: set clear goals for each work session, eliminate distractions, and choose tasks that are challenging but achievable.";
  return "Start building flow by choosing one activity you enjoy and gradually increasing the challenge level while keeping clear goals.";
}
