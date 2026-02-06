import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { dichotomyLetter } from "./scoring";

/* 8 poles across 4 dichotomies */
const dimensions = [
  { id: "extraversion-m", label: "Extraversion (E)", description: "Energised by the outer world of people and activity" },
  { id: "introversion", label: "Introversion (I)", description: "Energised by the inner world of reflection and solitude" },
  { id: "sensing", label: "Sensing (S)", description: "Focused on concrete, present-moment details and facts" },
  { id: "intuition", label: "Intuition (N)", description: "Focused on patterns, possibilities, and future potential" },
  { id: "thinking", label: "Thinking (T)", description: "Makes decisions based on logic and objective analysis" },
  { id: "feeling", label: "Feeling (F)", description: "Makes decisions based on values and how they affect people" },
  { id: "judging", label: "Judging (J)", description: "Prefers structure, plans, and decisiveness" },
  { id: "perceiving", label: "Perceiving (P)", description: "Prefers flexibility, spontaneity, and keeping options open" },
];

const FC = (a: string, aLabel: string, b: string, bLabel: string) => ({
  type: "forced-choice" as const,
  options: [
    { value: a, label: aLabel },
    { value: b, label: bLabel },
  ],
});

export const mbtiTest: TestDefinition = {
  id: "mbti",
  title: "MBTI Type Indicator",
  subtitle: "Discover your four-letter personality type",
  dimensions: [...dimensions],
  scoringMethod: "forced-choice",

  questions: [
    // E/I (8 items)
    { id: "mb1", text: "After a long week, you prefer to:", dimension: undefined, ...FC("extraversion-m", "Go out and socialise with friends", "introversion", "Spend a quiet evening at home recharging") },
    { id: "mb2", text: "In group projects, you tend to:", dimension: undefined, ...FC("extraversion-m", "Take the lead in brainstorming and discussions", "introversion", "Think things through before sharing your ideas") },
    { id: "mb3", text: "You recharge your energy by:", dimension: undefined, ...FC("extraversion-m", "Being around people and talking through ideas", "introversion", "Having time alone to reflect and process") },
    { id: "mb4", text: "At a networking event, you:", dimension: undefined, ...FC("extraversion-m", "Circulate and meet as many people as possible", "introversion", "Find one or two people to have deep conversations with") },
    { id: "mb5", text: "When solving a problem, you prefer to:", dimension: undefined, ...FC("extraversion-m", "Talk it out with someone else", "introversion", "Think about it internally before discussing") },
    { id: "mb6", text: "You find it more energising to:", dimension: undefined, ...FC("extraversion-m", "Be in a bustling, lively environment", "introversion", "Be in a calm, quiet space") },
    { id: "mb7", text: "In conversations, you:", dimension: undefined, ...FC("extraversion-m", "Speak quickly and think out loud", "introversion", "Pause and choose your words carefully") },
    { id: "mb8", text: "Your ideal working style is:", dimension: undefined, ...FC("extraversion-m", "Collaborative with frequent team interaction", "introversion", "Independent with focused solo work time") },

    // S/N (8 items)
    { id: "mb9", text: "You are more interested in:", dimension: undefined, ...FC("sensing", "What is real and happening now", "intuition", "What could be possible in the future") },
    { id: "mb10", text: "When reading, you prefer:", dimension: undefined, ...FC("sensing", "Practical how-to guides and factual accounts", "intuition", "Theoretical concepts and imaginative stories") },
    { id: "mb11", text: "You tend to trust:", dimension: undefined, ...FC("sensing", "Direct experience and verifiable evidence", "intuition", "Your gut feeling and hunches") },
    { id: "mb12", text: "When describing an event, you focus on:", dimension: undefined, ...FC("sensing", "The specific details of what happened", "intuition", "The meaning and implications behind it") },
    { id: "mb13", text: "In your work, you prefer tasks that:", dimension: undefined, ...FC("sensing", "Have clear steps and tangible outcomes", "intuition", "Require innovation and abstract thinking") },
    { id: "mb14", text: "You are more drawn to:", dimension: undefined, ...FC("sensing", "Established methods that have been proven to work", "intuition", "Novel approaches that have not been tried before") },
    { id: "mb15", text: "When learning something new, you prefer:", dimension: undefined, ...FC("sensing", "Step-by-step instructions with concrete examples", "intuition", "An overview of the big picture and underlying theory") },
    { id: "mb16", text: "In conversations, you notice:", dimension: undefined, ...FC("sensing", "The literal meaning of what people say", "intuition", "The hidden meaning or subtext behind words") },

    // T/F (8 items)
    { id: "mb17", text: "When making an important decision, you rely more on:", dimension: undefined, ...FC("thinking", "Logical analysis and objective criteria", "feeling", "Personal values and how it affects people") },
    { id: "mb18", text: "When giving feedback, you prioritise:", dimension: undefined, ...FC("thinking", "Being truthful and direct, even if it is tough", "feeling", "Being tactful and considering the person's feelings") },
    { id: "mb19", text: "In a debate, you value:", dimension: undefined, ...FC("thinking", "Finding the most logical and correct position", "feeling", "Finding common ground and maintaining harmony") },
    { id: "mb20", text: "You are more bothered when people are:", dimension: undefined, ...FC("thinking", "Illogical or irrational", "feeling", "Insensitive or unkind") },
    { id: "mb21", text: "You believe the best decisions are:", dimension: undefined, ...FC("thinking", "Fair and consistent based on universal principles", "feeling", "Compassionate and consider unique circumstances") },
    { id: "mb22", text: "When a friend is upset, your first instinct is to:", dimension: undefined, ...FC("thinking", "Help them analyse the situation and find a solution", "feeling", "Listen empathetically and validate their feelings") },
    { id: "mb23", text: "In your career, you are more motivated by:", dimension: undefined, ...FC("thinking", "Competence, efficiency, and achievement", "feeling", "Meaningful work that positively impacts others") },
    { id: "mb24", text: "You would describe yourself as more:", dimension: undefined, ...FC("thinking", "Objective and analytical", "feeling", "Warm and empathetic") },

    // J/P (8 items)
    { id: "mb25", text: "You prefer your schedule to be:", dimension: undefined, ...FC("judging", "Planned and structured well in advance", "perceiving", "Flexible and open to change") },
    { id: "mb26", text: "When starting a project, you:", dimension: undefined, ...FC("judging", "Create a detailed plan before starting", "perceiving", "Dive in and figure it out as you go") },
    { id: "mb27", text: "You feel most comfortable when:", dimension: undefined, ...FC("judging", "Decisions are made and plans are finalised", "perceiving", "Options are still open and nothing is set in stone") },
    { id: "mb28", text: "Your workspace tends to be:", dimension: undefined, ...FC("judging", "Neat and organised with everything in its place", "perceiving", "Somewhat messy but you know where things are") },
    { id: "mb29", text: "With deadlines, you typically:", dimension: undefined, ...FC("judging", "Finish well ahead of time", "perceiving", "Work best under last-minute pressure") },
    { id: "mb30", text: "On vacation, you prefer:", dimension: undefined, ...FC("judging", "A well-planned itinerary with reservations", "perceiving", "A loose plan that allows spontaneous adventures") },
    { id: "mb31", text: "When plans change unexpectedly, you feel:", dimension: undefined, ...FC("judging", "Frustrated and need to re-organise quickly", "perceiving", "Excited about the new possibility") },
    { id: "mb32", text: "You prefer to:", dimension: undefined, ...FC("judging", "Complete one task fully before moving to the next", "perceiving", "Work on multiple things simultaneously") },
  ],

  score(answers: Answer[]): TestScores {
    // Count votes per dimension
    const counts = new Map<string, number>();
    dimensions.forEach((d) => counts.set(d.id, 0));
    for (const a of answers) {
      const dimId = String(a.value);
      counts.set(dimId, (counts.get(dimId) ?? 0) + 1);
    }

    const dimScores = dimensions.map((dim) => {
      const raw = counts.get(dim.id) ?? 0;
      // Each pole gets 8 questions max, score as percentage of max
      const score = Math.round((raw / 8) * 100);
      return { dimensionId: dim.id, label: dim.label, score, rawScore: raw, description: dim.description };
    });

    // Determine four-letter type
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

    const summary = `Your MBTI type is ${code} — "${nickname}". ${getTypeDescription(code)}`;

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
        "Remember that MBTI reflects preferences, not abilities. You can develop skills in any area.",
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
