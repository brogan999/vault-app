import type { TestScores } from "@/lib/tests/types";
import type {
  ResultsPageContent,
  TypeResultContent,
  ResultSection,
  DimensionBarConfig,
} from "./types";

/* ------------------------------------------------------------------ */
/*  Big5 dimension bar configuration                                   */
/* ------------------------------------------------------------------ */

const DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  { dimensionId: "openness", leftLabel: "Conventional", rightLabel: "Open", barColor: "#8b5cf6", dominantSide: "right", dominantLabel: "Openness" },
  { dimensionId: "conscientiousness", leftLabel: "Flexible", rightLabel: "Disciplined", barColor: "#e4ae3a", dominantSide: "right", dominantLabel: "Conscientiousness" },
  { dimensionId: "extraversion", leftLabel: "Reserved", rightLabel: "Outgoing", barColor: "#4298b4", dominantSide: "right", dominantLabel: "Extraversion" },
  { dimensionId: "agreeableness", leftLabel: "Challenging", rightLabel: "Accommodating", barColor: "#33a474", dominantSide: "right", dominantLabel: "Agreeableness" },
  { dimensionId: "neuroticism", leftLabel: "Resilient", rightLabel: "Sensitive", barColor: "#f25e62", dominantSide: "right", dominantLabel: "Neuroticism" },
];

/* ------------------------------------------------------------------ */
/*  Per-trait content pools                                            */
/* ------------------------------------------------------------------ */

function level(score: number): "high" | "moderate" | "low" {
  if (score >= 65) return "high";
  if (score >= 35) return "moderate";
  return "low";
}

const TRAIT_DESCRIPTIONS: Record<string, Record<string, string[]>> = {
  openness: {
    high: [
      "You have a vivid imagination and a deep appreciation for art, beauty, and unconventional ideas. Your curiosity drives you to explore new experiences and perspectives that many others overlook.",
      "Your openness to experience makes you a natural creative thinker. You question assumptions, experiment freely, and find genuine joy in intellectual exploration and aesthetic experiences.",
    ],
    moderate: [
      "You balance curiosity with practicality, appreciating new ideas while also valuing proven approaches. This balanced perspective lets you innovate when needed while remaining grounded.",
      "You're open to new experiences but don't seek novelty for its own sake. You prefer ideas that have practical application and can appreciate both creative and conventional solutions.",
    ],
    low: [
      "You value practicality, clarity, and the tried-and-true. You prefer concrete thinking and established methods that have proven their worth over time.",
      "Your preference for the familiar gives you a grounded, stable perspective that others find reassuring. You focus on what works rather than chasing the latest trend.",
    ],
  },
  conscientiousness: {
    high: [
      "You are highly organized, disciplined, and goal-driven. Your ability to plan ahead and follow through makes you exceptionally reliable and effective at achieving long-term objectives.",
      "Your strong sense of duty and attention to detail mean that others can count on you to deliver quality work consistently. You set high standards for yourself and work diligently to meet them.",
    ],
    moderate: [
      "You maintain a reasonable balance between structure and flexibility. You can be organized when it matters while still adapting to changing circumstances without stress.",
      "You're reliable without being rigid, allowing you to meet obligations while still leaving room for spontaneity and creative problem-solving.",
    ],
    low: [
      "You prefer spontaneity over rigid planning and thrive in environments that allow flexibility and adaptability. Rules and structures that feel arbitrary quickly lose your compliance.",
      "Your free-flowing approach lets you adapt quickly to changing situations, though you may sometimes struggle with tasks requiring sustained, methodical effort.",
    ],
  },
  extraversion: {
    high: [
      "You draw energy from social interaction and feel most alive when surrounded by people. Your enthusiasm and expressiveness make you a natural connector who brings groups together.",
      "Your sociable nature and positive energy create a magnetic presence. You enjoy being at the center of activity and thrive in collaborative, energetic environments.",
    ],
    moderate: [
      "You enjoy social interaction but also value your alone time. You can adapt comfortably to both group settings and solitary activities, drawing energy from each as needed.",
      "Your balanced social style means you can be the life of the party when you choose, or enjoy a quiet evening alone without feeling drained or restless.",
    ],
    low: [
      "You recharge through solitude and prefer deep, meaningful conversations with a few close friends over large social gatherings. Your rich inner world is a constant source of energy and ideas.",
      "Your reserved nature masks a thoughtful, observant mind. While you may not seek the spotlight, your insights are often the most profound in any room.",
    ],
  },
  agreeableness: {
    high: [
      "You are warm, empathetic, and naturally oriented toward cooperation and harmony. You prioritize others' well-being and go out of your way to make people feel comfortable and valued.",
      "Your compassionate nature and willingness to help make you a trusted confidant and advisor. People feel safe being vulnerable around you because they sense your genuine caring.",
    ],
    moderate: [
      "You balance cooperation with assertiveness, knowing when to accommodate and when to stand firm. This flexibility lets you maintain relationships while still protecting your own interests.",
      "You can be both supportive and direct, adapting your approach based on the situation. You value harmony but won't sacrifice your principles to maintain it.",
    ],
    low: [
      "You are direct, independent, and straightforward in your interactions. You value honesty over diplomacy and prefer to address issues head-on rather than sugarcoating them.",
      "Your competitive nature and willingness to challenge others can drive innovation and excellence, though it may sometimes create friction with more harmony-oriented colleagues.",
    ],
  },
  neuroticism: {
    high: [
      "You experience emotions intensely and are highly attuned to potential threats and stressors. This sensitivity gives you a deep capacity for empathy and self-awareness, though it can sometimes feel overwhelming.",
      "Your emotional sensitivity is both a strength and a challenge. It fuels your creativity, empathy, and insight, but also requires intentional self-care to prevent burnout and anxiety.",
    ],
    moderate: [
      "You experience a normal range of emotional ups and downs, handling most stressors with reasonable composure. You're not immune to stress, but you recover at a healthy pace.",
      "Your emotional life is balanced — you feel things deeply enough to be empathetic and self-aware, but not so intensely that it disrupts your daily functioning.",
    ],
    low: [
      "You are emotionally stable and resilient, maintaining your composure even under significant pressure. Stress doesn't shake you easily, and you recover quickly from setbacks.",
      "Your calm, even-keeled nature provides stability for those around you. You process negative events efficiently and move forward with minimal emotional disruption.",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Section builders based on trait levels                             */
/* ------------------------------------------------------------------ */

function buildCareerSection(highest: string, lowest: string): ResultSection {
  const careerStrengths: Record<string, { title: string; desc: string }[]> = {
    openness: [
      { title: "Creative Problem-Solving", desc: "You approach challenges with originality and innovation." },
      { title: "Adaptability to Change", desc: "You embrace new technologies and methodologies eagerly." },
      { title: "Visionary Thinking", desc: "You see possibilities that others miss." },
    ],
    conscientiousness: [
      { title: "Organizational Excellence", desc: "You create order and efficiency in any environment." },
      { title: "Reliable Execution", desc: "You deliver on promises consistently and thoroughly." },
      { title: "Goal Achievement", desc: "You set and reach ambitious targets methodically." },
    ],
    extraversion: [
      { title: "Team Leadership", desc: "You energize and motivate those around you naturally." },
      { title: "Networking Ability", desc: "You build professional relationships with ease." },
      { title: "Persuasive Communication", desc: "You articulate ideas compellingly in any setting." },
    ],
    agreeableness: [
      { title: "Collaborative Spirit", desc: "You build consensus and bring teams together effectively." },
      { title: "Client Relations", desc: "Your warmth creates lasting professional relationships." },
      { title: "Conflict Resolution", desc: "You mediate disagreements with empathy and fairness." },
    ],
    neuroticism: [
      { title: "Risk Awareness", desc: "You identify potential problems before they materialize." },
      { title: "Empathetic Service", desc: "Your emotional sensitivity helps you serve others deeply." },
      { title: "Quality Consciousness", desc: "Your concern for outcomes drives attention to detail." },
    ],
  };

  const careerWeaknesses: Record<string, { title: string; desc: string }[]> = {
    openness: [
      { title: "Practical Follow-Through", desc: "Ideas outpace execution in your workflow." },
      { title: "Routine Tolerance", desc: "Repetitive tasks quickly drain your motivation." },
      { title: "Over-Ideation", desc: "Too many ideas can scatter your focus." },
    ],
    conscientiousness: [
      { title: "Flexibility Under Pressure", desc: "Rigid adherence to plans can backfire when circumstances change." },
      { title: "Perfectionism", desc: "Your standards can delay progress unnecessarily." },
      { title: "Delegation Difficulty", desc: "Trusting others to meet your standards is hard." },
    ],
    extraversion: [
      { title: "Solo Work Struggles", desc: "Extended independent work can feel isolating." },
      { title: "Impulsive Communication", desc: "Speaking before thinking through implications." },
      { title: "Attention Seeking", desc: "Your need for interaction can distract from focused tasks." },
    ],
    agreeableness: [
      { title: "Difficulty Saying No", desc: "Your desire to help can lead to overcommitment." },
      { title: "Avoiding Hard Conversations", desc: "Necessary confrontations get postponed." },
      { title: "Being Taken Advantage Of", desc: "Your goodwill may be exploited by less scrupulous people." },
    ],
    neuroticism: [
      { title: "Stress Management", desc: "High-pressure situations can overwhelm your coping mechanisms." },
      { title: "Decision Anxiety", desc: "Fear of making the wrong choice can paralyze action." },
      { title: "Negative Self-Talk", desc: "Internal criticism can undermine your confidence." },
    ],
  };

  return {
    id: "career-path",
    number: 2,
    title: "Career and Work",
    description: [
      `Your strongest trait, ${highest}, shapes your professional strengths and the environments where you naturally excel. Understanding this helps you find roles where you'll perform at your peak.`,
      `Being aware of your lower ${lowest} scores helps you anticipate challenges and develop strategies to address them. The most successful professionals are those who leverage their strengths while actively developing their growth areas.`,
    ],
    strengths: [
      ...(careerStrengths[highest] ?? []).map((s) => ({ title: s.title, description: s.desc })),
      { title: "Self-Awareness", description: "You understand your work style and can articulate it to others." },
      { title: "Authenticity", description: "You bring your genuine self to work, creating trust." },
      { title: "Balanced Perspective", description: "Your unique trait combination gives you versatile insights." },
    ],
    weaknesses: [
      ...(careerWeaknesses[lowest] ?? []).map((w) => ({ title: w.title, description: w.desc })),
      { title: "Comfort Zone Attachment", description: "You may avoid professional challenges that require your weaker traits." },
      { title: "Blind Spots", description: "Your lower traits may create gaps you don't notice." },
      { title: "Energy Management", description: "Activities outside your natural mode drain energy faster." },
    ],
    influentialTraits: [
      { name: "Drive", color: "blue" },
      { name: "Ambition", color: "gold" },
      { name: "Focus", color: "green" },
      { name: "Resilience", color: "purple" },
    ],
    lockedSubsections: [
      {
        title: "Career Ideas You Might Love",
        unlockTeaser: "Get the full report to unlock 10 career paths matched to your personality profile.",
        items: [
          { title: "Analyst", description: "Apply your unique perspective to data-driven insights." },
          { title: "Strategist", description: "Use your trait combination for long-term planning." },
          { title: "Consultant", description: "Leverage your self-awareness to advise others." },
          { title: "Creative Professional", description: "Express your unique viewpoint through your work." },
          { title: "Educator", description: "Share your knowledge and perspective with others." },
          { title: "Entrepreneur", description: "Build something that reflects your values and strengths." },
        ],
      },
      {
        title: "Work Styles that Suit You",
        unlockTeaser: "Get the full report to discover 6 work styles that bring out your best.",
        items: [
          { title: "Autonomous Work", description: "You perform best with independence and minimal oversight." },
          { title: "Collaborative Teams", description: "Small, focused groups bring out your strengths." },
          { title: "Structured Freedom", description: "Clear goals with flexible methods work best for you." },
          { title: "Meaningful Impact", description: "You need to see how your work makes a difference." },
        ],
      },
    ],
  };
}

function buildGrowthSection(highest: string, lowest: string): ResultSection {
  return {
    id: "personal-growth",
    number: 3,
    title: "Growth and Development",
    description: [
      `Your high ${highest} is a foundation of strength. Building on it while developing your lower ${lowest} will create a more balanced and resilient version of yourself.`,
      "Personal growth isn't about changing who you are — it's about expanding your range. The most fulfilled people are those who can access different modes of being as circumstances require.",
    ],
    strengths: [
      { title: "Self-Knowledge", description: "Understanding your Big Five profile gives you a roadmap for growth." },
      { title: "Trait Awareness", description: "You can predict how you'll respond in different situations." },
      { title: "Strength Leveraging", description: "You know where you excel and can double down." },
      { title: "Growth Direction", description: "Your lower traits show you exactly where to develop." },
      { title: "Emotional Intelligence", description: "Understanding your trait profile enhances self-regulation." },
      { title: "Authentic Development", description: "You can grow in ways that align with your nature." },
    ],
    weaknesses: [
      { title: "Comfort Zone Trap", description: "You may over-rely on your strongest traits." },
      { title: "Blind Spot Resistance", description: "Weaknesses in your lower traits may feel impossible to address." },
      { title: "Comparison to Others", description: "Seeing others' strengths where you have weaknesses can be discouraging." },
      { title: "Imbalanced Development", description: "You may neglect growth areas that feel unnatural." },
      { title: "Overthinking Traits", description: "Excessive self-analysis can become paralyzing." },
      { title: "Fixed Mindset Risk", description: "Viewing traits as fixed can limit your growth potential." },
    ],
    influentialTraits: [
      { name: "Resilience", color: "blue" },
      { name: "Self-Discipline", color: "gold" },
      { name: "Mindfulness", color: "green" },
      { name: "Adaptability", color: "purple" },
    ],
    lockedSubsections: [
      {
        title: "What Energizes You",
        unlockTeaser: "Get the full report to reveal 6 ways to tap into your natural energy.",
        items: [
          { title: "Playing to Strengths", description: "Activities aligned with your top traits feel effortless." },
          { title: "Personal Challenge", description: "Stretching your abilities in your strong areas energizes you." },
          { title: "Meaningful Connection", description: "Interactions that resonate with your values recharge you." },
          { title: "Creative Expression", description: "Expressing your unique perspective feels revitalizing." },
          { title: "Nature and Movement", description: "Physical activity and natural settings restore your energy." },
          { title: "Learning and Growth", description: "New knowledge and skills fuel your motivation." },
        ],
      },
      {
        title: "What Drains You",
        unlockTeaser: "Get the full report to uncover 6 energy-drainers you should avoid.",
        items: [
          { title: "Operating Against Type", description: "Extended time in your lower-trait modes is exhausting." },
          { title: "Inauthentic Demands", description: "Being forced to act contrary to your nature drains energy." },
          { title: "Lack of Control", description: "Situations where you have no agency are demoralizing." },
          { title: "Meaningless Tasks", description: "Work without purpose or impact feels soul-crushing." },
          { title: "Social Mismatch", description: "Too much or too little social interaction, depending on your type." },
          { title: "Constant Criticism", description: "Persistent negativity erodes your motivation." },
        ],
      },
    ],
  };
}

function buildRelationshipsSection(highest: string): ResultSection {
  return {
    id: "relationships",
    number: 4,
    title: "Relationships and Connection",
    description: [
      `Your ${highest} profile significantly influences how you connect with others. Understanding your relationship patterns helps you build deeper, more fulfilling connections.`,
      "The strongest relationships are built between people who understand not just each other's strengths, but each other's needs and vulnerabilities. Your Big Five profile provides this map.",
    ],
    strengths: [
      { title: "Self-Awareness in Love", description: "You understand your own relationship patterns clearly." },
      { title: "Authentic Connection", description: "You bring your genuine self to your relationships." },
      { title: "Predictable Reliability", description: "Partners can count on consistent behavior from you." },
      { title: "Growth Orientation", description: "You're willing to work on yourself for the relationship." },
      { title: "Communication Clarity", description: "Understanding your style helps you communicate better." },
      { title: "Empathetic Understanding", description: "Your profile awareness extends to understanding others." },
    ],
    weaknesses: [
      { title: "Projection Risk", description: "You may expect partners to share your trait preferences." },
      { title: "Comfort Seeking", description: "You may avoid relationship challenges that require growth." },
      { title: "Communication Gaps", description: "Different trait profiles can create misunderstandings." },
      { title: "Unbalanced Giving", description: "Your strengths may overshadow your partner's contributions." },
      { title: "Conflict Avoidance or Escalation", description: "Your trait profile influences how you handle disagreements." },
      { title: "Expectation Management", description: "Understanding your needs doesn't mean they'll always be met." },
    ],
    influentialTraits: [
      { name: "Empathy", color: "blue" },
      { name: "Trust", color: "gold" },
      { name: "Communication", color: "green" },
      { name: "Commitment", color: "purple" },
    ],
    lockedSubsections: [
      {
        title: "Your Relationship Superpowers",
        unlockTeaser: "Get the full report to discover 6 hidden relationship strengths.",
        items: [
          { title: "Deep Knowing", description: "You understand your own relationship needs intimately." },
          { title: "Authentic Love", description: "You love from a place of genuine self-awareness." },
          { title: "Growth Partnership", description: "You encourage mutual development in relationships." },
          { title: "Pattern Recognition", description: "You see relationship dynamics clearly." },
          { title: "Emotional Stability", description: "Your self-knowledge creates a stable emotional base." },
          { title: "Intentional Connection", description: "You choose partners consciously rather than reactively." },
        ],
      },
      {
        title: "Relationship Pitfalls",
        unlockTeaser: "Get the full report to identify 6 habits that may strain your relationships.",
        items: [
          { title: "Over-Analyzing", description: "You may intellectualize feelings rather than experiencing them." },
          { title: "Type Matching", description: "Seeking complementary traits may override genuine connection." },
          { title: "Rigidity", description: "Expecting consistent behavior may not allow for human variability." },
          { title: "Self-Focus", description: "Understanding yourself may overshadow understanding your partner." },
          { title: "Growth Pressure", description: "Expecting constant development can be exhausting for both." },
          { title: "Label Dependency", description: "Seeing yourself through your profile may limit spontaneity." },
        ],
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Exported content resolver                                          */
/* ------------------------------------------------------------------ */

export const big5ResultsContent: ResultsPageContent = {
  testId: "big5",
  getContent(scores: TestScores): TypeResultContent {
    const dims = scores.dimensions ?? [];
    const sorted = [...dims].sort((a, b) => b.score - a.score);
    const highest = sorted[0];
    const lowest = sorted[sorted.length - 1];

    const highId = highest?.dimensionId ?? "openness";
    const lowId = lowest?.dimensionId ?? "neuroticism";

    // Build description from all traits
    const description: string[] = [];
    for (const dim of dims) {
      const lvl = level(dim.score);
      const paragraphs = TRAIT_DESCRIPTIONS[dim.dimensionId]?.[lvl];
      if (paragraphs?.[0]) description.push(paragraphs[0]);
    }

    // If no dimensions, add a fallback
    if (description.length === 0) {
      description.push("Your Big Five personality results are ready. Explore the sections below for detailed insights into your unique personality profile.");
    }

    const typeName = highest
      ? `High ${highest.label}`
      : scores.typeLabel ?? "Big Five Profile";

    return {
      typeName,
      typeCode: `Big Five Profile`,
      heroColor: "#8b5cf6",
      description,
      dimensionBarConfig: DIMENSION_BAR_CONFIG,
      sections: [
        buildCareerSection(highId, lowId),
        buildGrowthSection(highId, lowId),
        buildRelationshipsSection(highId),
      ],
      famousPeople: [
        { name: "Albert Einstein" },
        { name: "Oprah Winfrey" },
        { name: "Leonardo da Vinci" },
        { name: "Maya Angelou" },
      ],
    };
  },
};
