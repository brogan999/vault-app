import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { dichotomyLetter, scoreLikertDimensions } from "./scoring";

/* 8 poles across 4 dichotomies — used for scoring and type assignment; "attention" is for attention-check items only */
const dimensions = [
  { id: "extraversion-m", label: "Extraversion (E)", description: "Energised by the outer world of people and activity" },
  { id: "introversion", label: "Introversion (I)", description: "Energised by the inner world of reflection and solitude" },
  { id: "sensing", label: "Sensing (S)", description: "Focused on concrete, present-moment details and facts" },
  { id: "intuition", label: "Intuition (N)", description: "Focused on patterns, possibilities, and future potential" },
  { id: "thinking", label: "Thinking (T)", description: "Makes decisions based on logic and objective analysis" },
  { id: "feeling", label: "Feeling (F)", description: "Makes decisions based on values and how they affect people" },
  { id: "judging", label: "Judging (J)", description: "Prefers structure, plans, and decisiveness" },
  { id: "perceiving", label: "Perceiving (P)", description: "Prefers flexibility, spontaneity, and keeping options open" },
  { id: "attention", label: "Attention", description: "Attention check (not scored)" },
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

export const mbtiTest: TestDefinition = {
  id: "mbti",
  title: "Personality Type Indicator",
  subtitle: "Discover your four-letter personality type",
  dimensions: [...dimensions],
  scoringMethod: "likert",
  questionsPerPage: 6,

  questions: [
    // E/I — 15 items (8 E-keyed, 7 I-keyed)
    { id: "mb1", text: "After a long week, I prefer to go out and socialise with friends.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb2", text: "In group projects, I tend to think things through before sharing my ideas.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb3", text: "I recharge my energy by being around people and talking through ideas.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb4", text: "At a networking event, I prefer to find one or two people to have deep conversations with.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb5", text: "When solving a problem, I prefer to talk it out with someone else.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb6", text: "I find it more energising to be in a calm, quiet space.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb7", text: "In conversations, I tend to speak quickly and think out loud.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb8", text: "My ideal working style is independent with focused solo work time.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb9", text: "At a party, I am more likely to stay late and enjoy the crowd.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb10", text: "When I have big news, I reflect on it myself before telling anyone.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb11", text: "My ideal weekend includes social activities and being with people.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb12", text: "In meetings, I usually listen first and share when I have something clear to say.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb13", text: "I feel more like myself when I am in the middle of the action.", dimension: "extraversion-m", type: "likert-7", options: L7 },
    { id: "mb14", text: "After a busy day, I prefer time alone with no demands.", dimension: "introversion", type: "likert-7", options: L7 },
    { id: "mb15", text: "When making a decision, I tend to talk it through with others to clarify.", dimension: "extraversion-m", type: "likert-7", options: L7 },

    // S/N — 15 items (8 S-keyed, 7 N-keyed)
    { id: "mb16", text: "I am more interested in what is real and happening now than in future possibilities.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb17", text: "When reading, I prefer theoretical concepts and imaginative stories.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb18", text: "I tend to trust direct experience and verifiable evidence.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb19", text: "When describing an event, I focus on the meaning and implications behind it.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb20", text: "In my work, I prefer tasks that have clear steps and tangible outcomes.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb21", text: "I am more drawn to novel approaches that have not been tried before.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb22", text: "When learning something new, I prefer step-by-step instructions with concrete examples.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb23", text: "In conversations, I notice the hidden meaning or subtext behind words.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb24", text: "I am more convinced by data and real-world examples than by theories.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb25", text: "When someone describes a problem, I focus on the underlying causes and what it might mean.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb26", text: "I prefer work that produces visible, practical results.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb27", text: "In a new place, I tend to notice the atmosphere and what it might mean.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb28", text: "I would rather apply a proven method correctly than invent a new approach.", dimension: "sensing", type: "likert-7", options: L7 },
    { id: "mb29", text: "When planning, I rely more on my vision of what could work.", dimension: "intuition", type: "likert-7", options: L7 },
    { id: "mb30", text: "I find it easier to explain things using step-by-step facts and examples.", dimension: "sensing", type: "likert-7", options: L7 },

    // T/F — 15 items (8 T-keyed, 7 F-keyed)
    { id: "mb31", text: "When making an important decision, I rely more on logical analysis and objective criteria.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb32", text: "When giving feedback, I prioritise being tactful and considering the person's feelings.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb33", text: "In a debate, I value finding the most logical and correct position.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb34", text: "I am more bothered when people are insensitive or unkind than when they are illogical.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb35", text: "I believe the best decisions are fair and consistent based on universal principles.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb36", text: "When a friend is upset, my first instinct is to listen empathetically and validate their feelings.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb37", text: "In my career, I am more motivated by competence, efficiency, and achievement.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb38", text: "I would describe myself as more warm and empathetic than objective and analytical.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb39", text: "In a conflict, I care more about resolving the issue fairly and correctly.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb40", text: "I am more impressed when someone is warm and considerate of others.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb41", text: "When choosing a job, I weigh growth, challenge, and fair compensation more than team culture.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb42", text: "I believe criticism should be delivered with care for the person's feelings.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb43", text: "I get more frustrated when people ignore logic or facts.", dimension: "thinking", type: "likert-7", options: L7 },
    { id: "mb44", text: "My strengths are more in understanding and supporting people.", dimension: "feeling", type: "likert-7", options: L7 },
    { id: "mb45", text: "In a group, I tend to focus on the task and what makes sense.", dimension: "thinking", type: "likert-7", options: L7 },

    // J/P — 15 items (8 J-keyed, 7 P-keyed)
    { id: "mb46", text: "I prefer my schedule to be planned and structured well in advance.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb47", text: "When starting a project, I dive in and figure it out as I go.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb48", text: "I feel most comfortable when decisions are made and plans are finalised.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb49", text: "My workspace tends to be somewhat messy but I know where things are.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb50", text: "With deadlines, I typically finish well ahead of time.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb51", text: "On vacation, I prefer a loose plan that allows spontaneous adventures.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb52", text: "When plans change unexpectedly, I feel frustrated and need to re-organise quickly.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb53", text: "I prefer to work on multiple things simultaneously.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb54", text: "I prefer to know what is planned so I can prepare.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb55", text: "My to-do list is usually flexible or in my head.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb56", text: "I feel better when things are decided and under control.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb57", text: "When packing for a trip, I pack closer to the last minute.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb58", text: "I prefer projects that have a clear deadline and outcome.", dimension: "judging", type: "likert-7", options: L7 },
    { id: "mb59", text: "In my free time, I am more likely to do whatever feels right in the moment.", dimension: "perceiving", type: "likert-7", options: L7 },
    { id: "mb60", text: "I would rather finish tasks so I can relax than stay open to new options until the last moment.", dimension: "judging", type: "likert-7", options: L7 },

    // Attention checks (audit: 2–3 per assessment); dimension "attention" so they do not affect type scores
    { id: "mb_ac1", text: "Please select Agree for this item to show you are reading.", dimension: "attention", type: "likert-7", options: L7, isAttentionCheck: true, attentionCheckExpectedValue: 6 },
    { id: "mb_ac2", text: "This is an attention check. Please choose Slightly Agree.", dimension: "attention", type: "likert-7", options: L7, isAttentionCheck: true, attentionCheckExpectedValue: 5 },
  ],

  score(answers: Answer[]): TestScores {
    const allScores = scoreLikertDimensions(answers, this.questions, [...dimensions], 7);
    const dimScores = allScores.filter((d) => d.dimensionId !== "attention");

    const letter1 = dichotomyLetter(dimScores, "extraversion-m", "E", "introversion", "I");
    const letter2 = dichotomyLetter(dimScores, "sensing", "S", "intuition", "N");
    const letter3 = dichotomyLetter(dimScores, "thinking", "T", "feeling", "F");
    const letter4 = dichotomyLetter(dimScores, "judging", "J", "perceiving", "P");
    const typeCode = `${letter1}${letter2}${letter3}${letter4}`;

    return {
      dimensions: dimScores,
      typeCode,
      typeLabel: `${typeCode} — ${getTypeNickname(typeCode)}`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const code = scores.typeCode ?? "INFJ";
    const nickname = getTypeNickname(code);

    const summary = `Your personality type is ${code} — "${nickname}". ${getTypeDescription(code)}`;

    const pairs = [
      ["extraversion-m", "introversion"],
      ["sensing", "intuition"],
      ["thinking", "feeling"],
      ["judging", "perceiving"],
    ];

    const dimensionDetails = pairs.map(([a, b]) => {
      const aScore = scores.dimensions.find((d) => d.dimensionId === a);
      const bScore = scores.dimensions.find((d) => d.dimensionId === b);
      const winner = (aScore?.score ?? 0) >= (bScore?.score ?? 0) ? aScore : bScore;
      return {
        dimensionId: winner?.dimensionId ?? a,
        text: `${aScore?.label}: ${aScore?.score ?? 0}% vs ${bScore?.label}: ${bScore?.score ?? 0}%. You lean toward ${winner?.label ?? "unknown"}.`,
      };
    });

    return {
      summary,
      dimensionDetails,
      typeLabel: `${code} — ${nickname}`,
      tips: [
        `As an ${code}, your growth edge is ${getGrowthEdge(code)}.`,
        "Remember that type reflects preferences, not abilities. You can develop skills in any area.",
        "Explore your cognitive function stack for even deeper insight into how you process information.",
      ],
    };
  },
};

function getTypeNickname(code: string): string {
  const nicknames: Record<string, string> = {
    INTJ: "The Architect", INTP: "The Logician", ENTJ: "The Commander", ENTP: "The Debater",
    INFJ: "The Advocate", INFP: "The Mediator", ENFJ: "The Protagonist", ENFP: "The Campaigner",
    ISTJ: "The Logistician", ISFJ: "The Defender", ESTJ: "The Executive", ESFJ: "The Consul",
    ISTP: "The Virtuoso", ISFP: "The Adventurer", ESTP: "The Entrepreneur", ESFP: "The Entertainer",
  };
  return nicknames[code] ?? "The Explorer";
}

function getTypeDescription(code: string): string {
  const descriptions: Record<string, string> = {
    INTJ: "You are a strategic thinker with a clear vision. You combine imagination with determination to achieve your goals methodically.",
    INTP: "You are an innovative thinker who loves solving complex problems. You value logic and are driven by intellectual curiosity.",
    ENTJ: "You are a natural leader who sees the big picture and creates efficient systems. You are decisive and goal-oriented.",
    ENTP: "You are a creative problem-solver who thrives on intellectual challenges. You enjoy debating ideas and exploring new possibilities.",
    INFJ: "You are an idealist with deep empathy and insight. You are driven by your values and have a gift for understanding people.",
    INFP: "You are a compassionate idealist who seeks meaning and authenticity. You have a rich inner world and strong personal values.",
    ENFJ: "You are a charismatic leader who inspires others. You are deeply empathetic and committed to helping people grow.",
    ENFP: "You are an enthusiastic and creative free spirit. You see life as full of possibilities and inspire others with your energy.",
    ISTJ: "You are a dependable and thorough person who values tradition. You approach life with a strong sense of duty and responsibility.",
    ISFJ: "You are a warm and dedicated protector. You are attentive to others' needs and committed to fulfilling your responsibilities.",
    ESTJ: "You are an organised and practical leader. You value order and efficiency and are excellent at managing people and projects.",
    ESFJ: "You are a caring and sociable person who values harmony. You are attentive to others and work hard to create a supportive environment.",
    ISTP: "You are a practical problem-solver who enjoys understanding how things work. You are calm under pressure and resourceful.",
    ISFP: "You are a gentle and sensitive person who values personal freedom. You express yourself through actions and live in the moment.",
    ESTP: "You are an energetic and action-oriented person who thrives in the moment. You are pragmatic and bring fun to everything.",
    ESFP: "You are a spontaneous and enthusiastic person who loves life. You are generous, friendly, and make every moment count.",
  };
  return descriptions[code] ?? "You have a unique combination of preferences that shapes how you perceive the world and make decisions.";
}

function getGrowthEdge(code: string): string {
  const edges: Record<string, string> = {
    INTJ: "developing patience with others and being open to unplanned experiences",
    INTP: "turning your ideas into action and engaging emotionally with others",
    ENTJ: "slowing down to consider others' feelings and accepting imperfection",
    ENTP: "following through on commitments and focusing deeply on one project",
    INFJ: "setting boundaries and not absorbing others' emotional burdens",
    INFP: "taking practical action on your ideals rather than staying in your inner world",
    ENFJ: "attending to your own needs and accepting that you cannot help everyone",
    ENFP: "developing consistency and finishing what you start before moving to the next idea",
    ISTJ: "being more flexible with rules and open to new ways of doing things",
    ISFJ: "learning to say no and prioritising your own well-being alongside others'",
    ESTJ: "being more open to emotional input and considering unconventional approaches",
    ESFJ: "developing independent decision-making and accepting not everyone will be pleased",
    ISTP: "expressing your feelings more openly and committing to long-term plans",
    ISFP: "speaking up for your needs and engaging with conflict when necessary",
    ESTP: "thinking about long-term consequences before acting on impulse",
    ESFP: "building discipline for less exciting but important tasks and long-term goals",
  };
  return edges[code] ?? "expanding beyond your comfort zone in your less-preferred areas";
}
