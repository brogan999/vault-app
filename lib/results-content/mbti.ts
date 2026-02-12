import type { TestScores } from "@/lib/tests/types";
import type {
  ResultsPageContent,
  TypeResultContent,
  ResultSection,
  DimensionBarConfig,
} from "./types";

/* ------------------------------------------------------------------ */
/*  MBTI dimension bar configuration (bipolar sliders)                */
/* ------------------------------------------------------------------ */

const DIMENSION_BAR_CONFIG: DimensionBarConfig[] = [
  {
    dimensionId: "extraversion-m",
    leftLabel: "Extraverted",
    rightLabel: "Introverted",
    barColor: "#6366f1",
    dominantSide: "left",
    dominantLabel: "Extraverted",
  },
  {
    dimensionId: "introversion",
    leftLabel: "Extraverted",
    rightLabel: "Introverted",
    barColor: "#6366f1",
    dominantSide: "right",
    dominantLabel: "Introverted",
  },
  {
    dimensionId: "sensing",
    leftLabel: "Intuitive",
    rightLabel: "Sensing",
    barColor: "#f59e0b",
    dominantSide: "right",
    dominantLabel: "Sensing",
  },
  {
    dimensionId: "intuition",
    leftLabel: "Intuitive",
    rightLabel: "Sensing",
    barColor: "#f59e0b",
    dominantSide: "left",
    dominantLabel: "Intuitive",
  },
  {
    dimensionId: "thinking",
    leftLabel: "Thinking",
    rightLabel: "Feeling",
    barColor: "#10b981",
    dominantSide: "left",
    dominantLabel: "Thinking",
  },
  {
    dimensionId: "feeling",
    leftLabel: "Thinking",
    rightLabel: "Feeling",
    barColor: "#10b981",
    dominantSide: "right",
    dominantLabel: "Feeling",
  },
  {
    dimensionId: "judging",
    leftLabel: "Judging",
    rightLabel: "Perceiving",
    barColor: "#8b5cf6",
    dominantSide: "left",
    dominantLabel: "Judging",
  },
  {
    dimensionId: "perceiving",
    leftLabel: "Judging",
    rightLabel: "Perceiving",
    barColor: "#8b5cf6",
    dominantSide: "right",
    dominantLabel: "Perceiving",
  },
];

/* ------------------------------------------------------------------ */
/*  Helper to build the 3 standard sections                           */
/* ------------------------------------------------------------------ */

function buildSections(data: {
  career: { desc: string[]; strengths: { title: string; desc: string }[]; weaknesses: { title: string; desc: string }[] };
  growth: { desc: string[]; strengths: { title: string; desc: string }[]; weaknesses: { title: string; desc: string }[] };
  relationships: { desc: string[]; strengths: { title: string; desc: string }[]; weaknesses: { title: string; desc: string }[] };
}): ResultSection[] {
  return [
    {
      id: "career-path",
      number: 2,
      title: "Career and Work",
      description: data.career.desc,
      strengths: data.career.strengths.map((s) => ({ title: s.title, description: s.desc })),
      weaknesses: data.career.weaknesses.map((w) => ({ title: w.title, description: w.desc })),
      influentialTraits: [
        { name: "Perfectionism", color: "blue" },
        { name: "Ambition", color: "gold" },
        { name: "Motivation", color: "green" },
        { name: "Desire to Lead", color: "purple" },
      ],
      lockedSubsections: [
        {
          title: "Career Ideas You Might Love",
          unlockTeaser: "Get the full report to unlock 10 career paths tailored to your personality.",
          items: [
            { title: "Creative Director", description: "Lead creative projects and teams in media, design, or advertising." },
            { title: "UX Designer", description: "Combine empathy and creativity to design intuitive digital experiences." },
            { title: "Counsellor", description: "Support others through meaningful one-on-one guidance." },
            { title: "Entrepreneur", description: "Build something of your own with vision and determination." },
            { title: "Strategist", description: "Plan and execute long-term business or organizational goals." },
            { title: "Researcher", description: "Deep-dive into subjects that fascinate you and share discoveries." },
          ],
        },
        {
          title: "Work Styles that Suit You",
          unlockTeaser: "Get the full report to discover 6 work styles that bring out your best.",
          items: [
            { title: "Autonomous Work", description: "You perform best with independence and minimal supervision." },
            { title: "Collaborative Projects", description: "Working with a small, trusted team energizes your creativity." },
            { title: "Flexible Scheduling", description: "Non-rigid schedules help you stay motivated and productive." },
            { title: "Meaningful Impact", description: "You need to see how your work contributes to a larger purpose." },
          ],
        },
      ],
    },
    {
      id: "personal-growth",
      number: 3,
      title: "Growth and Development",
      description: data.growth.desc,
      strengths: data.growth.strengths.map((s) => ({ title: s.title, description: s.desc })),
      weaknesses: data.growth.weaknesses.map((w) => ({ title: w.title, description: w.desc })),
      influentialTraits: [
        { name: "Resilience", color: "blue" },
        { name: "Confidence", color: "gold" },
        { name: "Grit", color: "green" },
        { name: "Sense of Control", color: "purple" },
      ],
      lockedSubsections: [
        {
          title: "What Energizes You",
          unlockTeaser: "Get the full report to reveal 6 ways to tap into your natural energy.",
          items: [
            { title: "Deep Conversations", description: "Meaningful exchanges that go below the surface." },
            { title: "Creative Expression", description: "Art, writing, music, or any form of self-expression." },
            { title: "Nature & Solitude", description: "Quiet time in natural settings restores your energy." },
            { title: "Learning New Skills", description: "The challenge of mastering something new excites you." },
            { title: "Helping Others", description: "Supporting someone in need gives you a deep sense of purpose." },
            { title: "Physical Activity", description: "Movement and exercise help clear your mind and recharge." },
          ],
        },
        {
          title: "What Drains You",
          unlockTeaser: "Get the full report to uncover 6 energy-drainers you should avoid.",
          items: [
            { title: "Superficial Socializing", description: "Small talk and shallow interactions leave you exhausted." },
            { title: "Rigid Structures", description: "Too many rules and bureaucracy stifle your creativity." },
            { title: "Constant Criticism", description: "Persistent negativity affects your motivation and self-esteem." },
            { title: "Monotonous Tasks", description: "Repetitive work without variety quickly drains your engagement." },
            { title: "Conflict Avoidance", description: "Suppressing your needs to avoid disagreements takes a toll." },
            { title: "Overcommitment", description: "Taking on too much at once leads to burnout and resentment." },
          ],
        },
      ],
    },
    {
      id: "relationships",
      number: 4,
      title: "Relationships and Connection",
      description: data.relationships.desc,
      strengths: data.relationships.strengths.map((s) => ({ title: s.title, description: s.desc })),
      weaknesses: data.relationships.weaknesses.map((w) => ({ title: w.title, description: w.desc })),
      influentialTraits: [
        { name: "Authenticity", color: "blue" },
        { name: "Loyalty", color: "gold" },
        { name: "Altruism", color: "green" },
        { name: "Emotional Intelligence", color: "purple" },
      ],
      lockedSubsections: [
        {
          title: "Your Relationship Superpowers",
          unlockTeaser: "Get the full report to discover 6 hidden relationship strengths.",
          items: [
            { title: "Deep Empathy", description: "You intuitively understand others' emotional states." },
            { title: "Unwavering Loyalty", description: "You commit fully to those you care about." },
            { title: "Active Listening", description: "You make others feel truly heard and understood." },
            { title: "Thoughtful Gestures", description: "You show love through meaningful, personal actions." },
            { title: "Emotional Safety", description: "People feel safe being vulnerable around you." },
            { title: "Growth Mindset", description: "You encourage personal development in your relationships." },
          ],
        },
        {
          title: "Relationship Pitfalls",
          unlockTeaser: "Get the full report to identify 6 habits that may strain your relationships.",
          items: [
            { title: "Holding Feelings Inside", description: "You struggle to voice emotional hurts clearly." },
            { title: "Avoiding Confrontation", description: "Your dislike of conflict may let tensions linger." },
            { title: "Unspoken Expectations", description: "You assume others know your emotional needs." },
            { title: "People-Pleasing", description: "Putting others first at the expense of your own needs." },
            { title: "Idealization", description: "Setting unrealistically high standards for partners." },
            { title: "Withdrawal", description: "Pulling away when hurt instead of communicating." },
          ],
        },
      ],
    },
  ];
}

/* ------------------------------------------------------------------ */
/*  Per-type content for all 16 MBTI types                            */
/* ------------------------------------------------------------------ */

const TYPE_CONTENT: Record<string, Omit<TypeResultContent, "dimensionBarConfig">> = {
  INTJ: {
    typeName: "The Mastermind",
    typeCode: "INTJ",
    heroColor: "#7c3aed",
    description: [
      "As an INTJ, you are a strategic and independent thinker with an exceptional ability to see the big picture. Your mind naturally gravitates toward systems, patterns, and long-term planning. You combine imagination with determination to achieve your goals methodically.",
      "Your analytical nature is complemented by a deep inner vision. While others may see you as reserved, beneath the surface lies a rich intellectual world where you're constantly refining ideas and developing innovative solutions to complex problems.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "In your professional life, you thrive in roles that challenge your intellect and allow you to implement your strategic vision. You have a natural talent for identifying inefficiencies and creating elegant systems to solve complex problems.",
          "However, your perfectionist tendencies and preference for working independently can sometimes create friction in collaborative environments. Your path to professional fulfillment lies in finding roles that value both your strategic mind and your need for autonomy.",
        ],
        strengths: [
          { title: "Strategic Vision", desc: "You naturally see the long-term implications of decisions and plan accordingly." },
          { title: "Analytical Depth", desc: "Your ability to dissect complex problems is unmatched." },
          { title: "Independent Drive", desc: "You don't need external motivation to pursue excellence." },
          { title: "Systems Thinking", desc: "You instinctively create efficient frameworks and processes." },
          { title: "Innovative Solutions", desc: "You find creative approaches that others overlook." },
          { title: "Decisive Action", desc: "Once you've analyzed the situation, you act with confidence." },
        ],
        weaknesses: [
          { title: "Impatience with Inefficiency", desc: "You struggle with colleagues who don't meet your standards." },
          { title: "Difficulty Delegating", desc: "Trusting others with important tasks doesn't come naturally." },
          { title: "Overlooking Emotions", desc: "You may miss the emotional impact of your decisions on others." },
          { title: "Perfectionist Tendencies", desc: "Your high standards can slow down progress." },
          { title: "Resistance to Small Talk", desc: "Networking and casual workplace socializing feel draining." },
          { title: "Stubbornness", desc: "Once convinced of a path, you may resist alternative viewpoints." },
        ],
      },
      growth: {
        desc: [
          "Your journey of personal growth is deeply connected to balancing your powerful intellect with emotional awareness. You have an innate drive for self-improvement, but your tendency to intellectualize feelings can sometimes limit your personal development.",
          "As you evolve, embracing vulnerability and developing patience with both yourself and others will unlock new dimensions of fulfillment. Growth for you isn't about changing who you are, but about expanding the range of your remarkable capabilities.",
        ],
        strengths: [
          { title: "Self-Directed Learning", desc: "You proactively seek knowledge and master new subjects." },
          { title: "Goal Setting", desc: "You set ambitious goals and create detailed plans to achieve them." },
          { title: "Critical Self-Reflection", desc: "You honestly assess your strengths and weaknesses." },
          { title: "Resilience", desc: "Setbacks are data points for improvement, not reasons to quit." },
          { title: "Intellectual Curiosity", desc: "Your desire to understand drives continuous growth." },
          { title: "Long-term Perspective", desc: "You invest in growth that compounds over years." },
        ],
        weaknesses: [
          { title: "Emotional Avoidance", desc: "You may intellectualize feelings rather than fully experiencing them." },
          { title: "Isolation Tendency", desc: "Too much solitude can reinforce blind spots." },
          { title: "Analysis Paralysis", desc: "Overthinking can prevent you from taking necessary risks." },
          { title: "Difficulty Asking for Help", desc: "Your independence makes vulnerability feel uncomfortable." },
          { title: "Burnout Risk", desc: "Your drive for achievement can override self-care needs." },
          { title: "Impatience with Process", desc: "You want results faster than growth naturally allows." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you bring depth, loyalty, and intellectual stimulation. You value deep connections over superficial ones and invest heavily in the few people you let into your inner circle. Your partner benefits from your unwavering commitment and thoughtful nature.",
          "While you may not always express emotions openly, your love runs deep. Your challenge in relationships is learning to communicate your feelings as effectively as you communicate your ideas, and accepting that emotional needs are just as valid as intellectual ones.",
        ],
        strengths: [
          { title: "Deep Commitment", desc: "When you choose someone, you're all in for the long term." },
          { title: "Intellectual Partnership", desc: "You stimulate growth through deep conversations." },
          { title: "Problem Solving", desc: "You approach relationship challenges with thoughtful solutions." },
          { title: "Reliability", desc: "Your word is your bond — you follow through on promises." },
          { title: "Independence", desc: "You give your partner space without being clingy." },
          { title: "Growth Encouragement", desc: "You inspire your partner to reach their full potential." },
        ],
        weaknesses: [
          { title: "Emotional Distance", desc: "Partners may feel shut out of your inner world." },
          { title: "Critical Nature", desc: "Your high standards can feel like constant evaluation." },
          { title: "Difficulty with Vulnerability", desc: "Opening up emotionally doesn't come naturally." },
          { title: "Neglecting Romance", desc: "You may prioritize logic over romantic gestures." },
          { title: "Control Issues", desc: "Your need for competence can extend to managing the relationship." },
          { title: "Dismissing Feelings", desc: "You may invalidate emotions that seem illogical to you." },
        ],
      },
    }),
    famousPeople: [
      { name: "Elon Musk" },
      { name: "Friedrich Nietzsche" },
      { name: "Michelle Obama" },
      { name: "Christopher Nolan" },
    ],
  },

  INTP: {
    typeName: "The Philosopher",
    typeCode: "INTP",
    heroColor: "#7c3aed",
    description: [
      "As an INTP, you are an innovative thinker driven by an insatiable curiosity about how the world works. Your mind is a playground of ideas, constantly exploring abstract concepts and building theoretical frameworks that others find fascinating.",
      "Your intellectual independence is one of your greatest strengths. You question assumptions, challenge conventional thinking, and seek truth above comfort. While this can make you seem detached, those who know you well appreciate the depth and originality of your perspective.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You thrive in environments that value intellectual exploration and original thinking. Roles that let you analyze complex systems, design solutions, and work at your own pace bring out your best.",
          "Your challenge is bridging the gap between brilliant ideas and practical execution. Finding a career that values both your theoretical insights and gives you the freedom to explore will lead to deep satisfaction.",
        ],
        strengths: [
          { title: "Original Thinking", desc: "You generate ideas that others simply don't consider." },
          { title: "Analytical Precision", desc: "You break down complex problems with remarkable clarity." },
          { title: "Pattern Recognition", desc: "You see connections across seemingly unrelated domains." },
          { title: "Intellectual Honesty", desc: "You pursue truth regardless of popular opinion." },
          { title: "Adaptable Problem-Solving", desc: "You approach challenges from multiple creative angles." },
          { title: "Deep Focus", desc: "When engaged, your concentration is extraordinary." },
        ],
        weaknesses: [
          { title: "Follow-Through", desc: "Finishing projects is harder than starting them." },
          { title: "Social Navigation", desc: "Workplace politics and networking feel unnatural." },
          { title: "Procrastination", desc: "Interesting tangents can derail important deadlines." },
          { title: "Overcomplication", desc: "You may create overly complex solutions for simple problems." },
          { title: "Sensitivity to Criticism", desc: "Critiques of your ideas can feel deeply personal." },
          { title: "Neglecting Details", desc: "Mundane but important details may slip through." },
        ],
      },
      growth: {
        desc: [
          "Your growth path involves learning to translate your rich inner world into tangible outcomes. You have unlimited potential for insight, but developing the discipline to act on your ideas is key to personal fulfillment.",
          "Embracing emotional intelligence alongside your formidable intellect will open doors you didn't know existed. Growth for you means not just understanding the world, but participating in it more fully.",
        ],
        strengths: [
          { title: "Endless Curiosity", desc: "Your desire to learn fuels continuous self-improvement." },
          { title: "Self-Awareness", desc: "You understand your own thought patterns with unusual clarity." },
          { title: "Openness to Ideas", desc: "You consider perspectives that most people dismiss." },
          { title: "Logical Self-Assessment", desc: "You can objectively evaluate your strengths and gaps." },
          { title: "Independence", desc: "You don't need validation to pursue your growth path." },
          { title: "Intellectual Humility", desc: "You're willing to change your mind when presented with evidence." },
        ],
        weaknesses: [
          { title: "Avoiding Emotions", desc: "You may dismiss feelings as irrational rather than processing them." },
          { title: "Social Isolation", desc: "Extended withdrawal from others can stunt personal growth." },
          { title: "Theoretical vs Practical", desc: "Understanding a concept isn't the same as applying it." },
          { title: "Avoidance of Routine", desc: "Healthy habits feel constraining to your free-thinking nature." },
          { title: "Difficulty with Commitment", desc: "Keeping options open can prevent meaningful progress." },
          { title: "Neglecting Physical Needs", desc: "Getting lost in thought may override basic self-care." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you bring a unique combination of loyalty, intellectual depth, and quiet affection. You may not be the most overtly romantic person, but your commitment to understanding your partner on a deep level is its own form of love.",
          "Your challenge is learning to express your feelings in ways your partner can receive. While you may think your actions speak clearly, many partners need verbal affirmation and emotional engagement to feel secure in the relationship.",
        ],
        strengths: [
          { title: "Deep Understanding", desc: "You seek to truly know your partner at a fundamental level." },
          { title: "Intellectual Stimulation", desc: "You keep conversations fresh and thought-provoking." },
          { title: "Unconditional Acceptance", desc: "You appreciate people for who they truly are." },
          { title: "Loyalty", desc: "Once committed, you're remarkably devoted." },
          { title: "Problem-Solving Support", desc: "You help partners think through challenges logically." },
          { title: "Respect for Autonomy", desc: "You naturally give partners the space they need." },
        ],
        weaknesses: [
          { title: "Emotional Expression", desc: "Putting feelings into words doesn't come naturally." },
          { title: "Forgetting Occasions", desc: "Birthdays and anniversaries may slip your mind." },
          { title: "Debating vs Supporting", desc: "You may argue when your partner needs comfort." },
          { title: "Withdrawal Under Stress", desc: "You retreat inward when things get emotionally intense." },
          { title: "Neglecting Quality Time", desc: "Getting absorbed in projects can push partners aside." },
          { title: "Difficulty with Conflict", desc: "You may avoid emotional confrontations entirely." },
        ],
      },
    }),
    famousPeople: [
      { name: "Albert Einstein" },
      { name: "Bill Gates" },
      { name: "Marie Curie" },
      { name: "Larry Page" },
    ],
  },

  ENTJ: {
    typeName: "The Executive",
    typeCode: "ENTJ",
    heroColor: "#7c3aed",
    description: [
      "As an ENTJ, you are a natural-born leader with an extraordinary ability to organize people and resources toward ambitious goals. Your combination of strategic thinking and decisive action makes you a force to be reckoned with in any setting.",
      "Your confidence and drive inspire others to reach higher than they thought possible. While some may find your directness intimidating, those who work with you appreciate your clarity of vision and your ability to turn plans into reality.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You are built for leadership and thrive when steering teams toward big objectives. Your talent lies in seeing the end goal clearly, creating the strategy, and mobilizing people to execute.",
          "Your challenge is balancing your drive for results with the human side of leadership. The most effective version of you combines your strategic brilliance with genuine empathy for your team.",
        ],
        strengths: [
          { title: "Visionary Leadership", desc: "You articulate a compelling future that people want to follow." },
          { title: "Decisive Action", desc: "You make tough calls quickly and confidently." },
          { title: "Strategic Planning", desc: "You break big goals into actionable steps effortlessly." },
          { title: "Organizational Talent", desc: "You create efficient systems and clear structures." },
          { title: "Confidence Under Pressure", desc: "High-stakes situations bring out your best." },
          { title: "Drive for Excellence", desc: "You push yourself and others toward the highest standards." },
        ],
        weaknesses: [
          { title: "Insensitivity", desc: "Your bluntness can hurt feelings without you realizing it." },
          { title: "Impatience", desc: "You struggle when others can't keep up with your pace." },
          { title: "Workaholism", desc: "You may sacrifice personal life for professional achievement." },
          { title: "Controlling Tendencies", desc: "Delegation is hard when you want things done your way." },
          { title: "Dismissing Emotions", desc: "You may undervalue emotional input in decisions." },
          { title: "Difficulty Relaxing", desc: "Downtime feels unproductive to your achievement-oriented mind." },
        ],
      },
      growth: {
        desc: [
          "Your growth journey is about developing the softer skills that complement your natural strengths. Learning to listen as well as you lead, and to be vulnerable as well as strong, will make you not just more effective but more fulfilled.",
          "The greatest leaders are those who can inspire through empathy as well as vision. Your potential is limitless when you combine your strategic mind with emotional wisdom.",
        ],
        strengths: [
          { title: "Goal Orientation", desc: "You set and pursue growth targets with remarkable discipline." },
          { title: "Feedback Utilization", desc: "You take constructive criticism and turn it into improvement." },
          { title: "Continuous Learning", desc: "You actively seek out knowledge that gives you an edge." },
          { title: "Accountability", desc: "You hold yourself to the standards you set for others." },
          { title: "Adaptability", desc: "You adjust your approach when the data shows a better path." },
          { title: "Mentoring Others", desc: "Teaching and developing others accelerates your own growth." },
        ],
        weaknesses: [
          { title: "Vulnerability Avoidance", desc: "Showing weakness feels dangerous to your self-image." },
          { title: "Emotional Blind Spots", desc: "You may not notice your own emotional needs until burnout hits." },
          { title: "Relationship Neglect", desc: "Personal relationships may take a back seat to goals." },
          { title: "Difficulty Slowing Down", desc: "Reflection and rest don't come naturally." },
          { title: "Accepting Imperfection", desc: "You struggle to accept good enough when perfect is possible." },
          { title: "Listening Skills", desc: "You may formulate responses before others finish speaking." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you bring passion, commitment, and a desire to build something great together. You approach love with the same energy you bring to everything — fully and ambitiously. Your partner benefits from your reliability and your drive to make the relationship the best it can be.",
          "Your challenge is learning that relationships can't be managed like projects. Embracing spontaneity, practicing patience, and leading with your heart as much as your head will deepen your connections immensely.",
        ],
        strengths: [
          { title: "Total Commitment", desc: "When you're in, you're fully invested in making it work." },
          { title: "Direct Communication", desc: "Your honesty creates a foundation of trust." },
          { title: "Stability", desc: "You provide a solid, reliable presence for your partner." },
          { title: "Growth Partnership", desc: "You encourage and support your partner's ambitions." },
          { title: "Problem Resolution", desc: "You address issues head-on rather than letting them fester." },
          { title: "Providing Security", desc: "Your competence creates a sense of safety." },
        ],
        weaknesses: [
          { title: "Dominating Conversations", desc: "You may inadvertently take over discussions." },
          { title: "Being Too Critical", desc: "Your standards can make your partner feel inadequate." },
          { title: "Work-Life Imbalance", desc: "Career often takes priority over quality time." },
          { title: "Difficulty with Feelings", desc: "Emotional conversations can feel uncomfortable." },
          { title: "Need to Be Right", desc: "Arguments can escalate when you won't concede." },
          { title: "Impatience", desc: "You expect your partner to keep up with your fast pace." },
        ],
      },
    }),
    famousPeople: [
      { name: "Steve Jobs" },
      { name: "Margaret Thatcher" },
      { name: "Gordon Ramsay" },
      { name: "Napoleon Bonaparte" },
    ],
  },

  ENTP: {
    typeName: "The Visionary",
    typeCode: "ENTP",
    heroColor: "#7c3aed",
    description: [
      "As an ENTP, you are a quick-witted innovator who thrives on intellectual challenge and creative problem-solving. Your mind moves at lightning speed, connecting ideas in ways that surprise and inspire those around you.",
      "Your energy is infectious and your ability to see possibilities where others see dead ends makes you invaluable in any creative or strategic endeavor. You live to explore, debate, and push boundaries.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You flourish in dynamic environments that reward creative thinking and quick adaptation. Routine is your enemy; you need novelty, challenge, and the freedom to experiment with new approaches.",
          "Your entrepreneurial spirit and ability to see opportunities everywhere make you a natural innovator. The key is channeling your many ideas into focused execution.",
        ],
        strengths: [
          { title: "Innovative Thinking", desc: "You generate breakthrough ideas that reshape how things are done." },
          { title: "Quick Adaptation", desc: "You pivot effortlessly when circumstances change." },
          { title: "Persuasive Communication", desc: "You can sell any idea with charisma and logic." },
          { title: "Big-Picture Vision", desc: "You see opportunities that others miss entirely." },
          { title: "Resourcefulness", desc: "You find creative solutions with whatever's available." },
          { title: "Energetic Leadership", desc: "Your enthusiasm motivates teams to take on bold challenges." },
        ],
        weaknesses: [
          { title: "Difficulty Finishing", desc: "New ideas are more exciting than completing old ones." },
          { title: "Boredom with Routine", desc: "Maintenance work feels soul-crushing to you." },
          { title: "Argumentativeness", desc: "Your love of debate can create unnecessary friction." },
          { title: "Scattered Focus", desc: "Too many interests can dilute your effectiveness." },
          { title: "Authority Issues", desc: "You resist rules and structures that feel arbitrary." },
          { title: "Overlooking Details", desc: "Implementation details bore you, but they matter." },
        ],
      },
      growth: {
        desc: [
          "Your growth path involves learning to channel your extraordinary creativity into sustained effort. You have more potential than almost anyone, but turning potential into achievement requires the discipline you sometimes resist.",
          "Developing emotional depth alongside your intellectual breadth will transform your life. The most fulfilled ENTPs are those who've learned that feelings are as important as ideas.",
        ],
        strengths: [
          { title: "Boundless Curiosity", desc: "You naturally seek out growth opportunities everywhere." },
          { title: "Openness to Change", desc: "You embrace transformation rather than fearing it." },
          { title: "Diverse Interests", desc: "Your breadth of knowledge supports holistic growth." },
          { title: "Self-Awareness", desc: "You understand your patterns even when you can't change them." },
          { title: "Humor", desc: "You use wit to navigate challenges and maintain perspective." },
          { title: "Social Intelligence", desc: "You read people and situations with natural skill." },
        ],
        weaknesses: [
          { title: "Commitment Avoidance", desc: "Choosing one path feels like closing other doors." },
          { title: "Emotional Processing", desc: "You may intellectualize feelings rather than feeling them." },
          { title: "Consistency", desc: "Maintaining habits and routines is a constant struggle." },
          { title: "Impatience with Growth", desc: "You want results faster than sustainable change allows." },
          { title: "Conflict with Authority", desc: "Mentors and guides may be dismissed too quickly." },
          { title: "Underestimating Effort", desc: "Your quick mind makes you think everything should be easy." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you bring excitement, humor, and intellectual stimulation. You keep things interesting and your partner will never be bored. Your curiosity extends to people — you genuinely want to understand what makes your partner tick.",
          "Your challenge is developing the consistency and emotional depth that long-term relationships require. Learning to be fully present rather than always chasing the next idea will deepen your connections profoundly.",
        ],
        strengths: [
          { title: "Exciting Partnership", desc: "You keep the relationship fresh with new ideas and adventures." },
          { title: "Intellectual Connection", desc: "You foster deep, stimulating conversations." },
          { title: "Humor", desc: "You bring laughter and lightness to the relationship." },
          { title: "Open-Mindedness", desc: "You accept your partner's quirks without judgment." },
          { title: "Problem-Solving", desc: "You approach relationship challenges with creative solutions." },
          { title: "Encouragement", desc: "You push your partner to try new things and grow." },
        ],
        weaknesses: [
          { title: "Inconsistency", desc: "Your moods and interests shift, creating instability." },
          { title: "Arguing for Sport", desc: "Not everything needs to be debated." },
          { title: "Emotional Avoidance", desc: "Serious emotional conversations feel uncomfortable." },
          { title: "Restlessness", desc: "Long-term commitment can trigger fear of being trapped." },
          { title: "Neglecting Routine", desc: "Day-to-day relationship maintenance bores you." },
          { title: "Insensitive Humor", desc: "Your wit can sometimes cross lines without you realizing." },
        ],
      },
    }),
    famousPeople: [
      { name: "Mark Twain" },
      { name: "Thomas Edison" },
      { name: "Sacha Baron Cohen" },
      { name: "Celine Dion" },
    ],
  },

  INFJ: {
    typeName: "The Champion",
    typeCode: "INFJ",
    heroColor: "#059669",
    description: [
      "As an INFJ, you are a rare combination of empathy and insight, driven by a deep desire to make a positive impact on the world. Your intuitive understanding of people and situations gives you a unique perspective that few others possess.",
      "You live with a sense of purpose and meaning that guides everything you do. While the world may not always understand your vision, your quiet determination and compassion inspire those lucky enough to be close to you.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You thrive in roles that align with your values and allow you to make a meaningful difference. Whether in counseling, writing, advocacy, or creative fields, you need work that feels purposeful.",
          "Your intuitive understanding of people makes you an exceptional guide, advisor, or leader — but only when the cause resonates with your core beliefs. Meaningless work drains you faster than any other type.",
        ],
        strengths: [
          { title: "Purpose-Driven Focus", desc: "Your values give you unwavering direction and motivation." },
          { title: "Deep Empathy", desc: "You understand what people need, often before they do." },
          { title: "Creative Vision", desc: "You see innovative possibilities for creating positive change." },
          { title: "Written Communication", desc: "You express complex ideas with eloquence and depth." },
          { title: "Big-Picture Thinking", desc: "You connect dots that others can't see." },
          { title: "Quiet Influence", desc: "You lead through inspiration rather than authority." },
        ],
        weaknesses: [
          { title: "Burnout Risk", desc: "Your deep caring can lead to emotional exhaustion." },
          { title: "Perfectionism", desc: "Your idealistic standards can be paralyzing." },
          { title: "Difficulty with Criticism", desc: "Negative feedback can feel like a personal attack." },
          { title: "Avoidance of Conflict", desc: "You may let problems fester rather than address them directly." },
          { title: "Overcommitment", desc: "Saying no feels selfish, but saying yes to everything hurts you." },
          { title: "Isolation", desc: "You may withdraw when the workplace doesn't align with your values." },
        ],
      },
      growth: {
        desc: [
          "Your growth journey involves learning to protect your energy while still honoring your desire to help others. Setting healthy boundaries isn't selfish — it's necessary for you to sustain the impact you want to make.",
          "Embracing your own needs with the same compassion you show others is your greatest challenge and your most important lesson. You deserve the same care you so freely give.",
        ],
        strengths: [
          { title: "Self-Reflection", desc: "You naturally examine your inner world with depth and honesty." },
          { title: "Value Clarity", desc: "You know what matters to you and let it guide your growth." },
          { title: "Emotional Intelligence", desc: "Your awareness of emotional dynamics supports deep growth." },
          { title: "Commitment to Growth", desc: "Self-improvement isn't optional — it's woven into who you are." },
          { title: "Wisdom Seeking", desc: "You draw on philosophy, psychology, and spirituality for insight." },
          { title: "Transformative Potential", desc: "When you grow, you help everyone around you grow too." },
        ],
        weaknesses: [
          { title: "Absorbing Others' Pain", desc: "You take on emotional burdens that aren't yours to carry." },
          { title: "Neglecting Self-Care", desc: "Others' needs consistently come before your own." },
          { title: "All-or-Nothing Thinking", desc: "You may see things in black and white extremes." },
          { title: "Difficulty with Imperfection", desc: "Accepting your own flaws is harder than accepting others'." },
          { title: "Overthinking", desc: "Your rich inner life can become a trap of rumination." },
          { title: "Martyr Complex", desc: "You may suffer silently rather than asking for help." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you seek deep, soulful connections that go far beyond the surface. You want a partner who truly sees you and shares your commitment to growth and meaning. When you find this, your devotion is extraordinary.",
          "Your challenge is maintaining your sense of self within intimate relationships. Your empathetic nature can lead you to lose yourself in your partner's needs, and learning to maintain healthy boundaries while staying connected is your key to relationship fulfillment.",
        ],
        strengths: [
          { title: "Soulful Connection", desc: "You create bonds that feel profoundly meaningful." },
          { title: "Intuitive Understanding", desc: "You sense your partner's needs without being told." },
          { title: "Devoted Loyalty", desc: "Your commitment to those you love is unwavering." },
          { title: "Emotional Depth", desc: "You bring richness and meaning to every interaction." },
          { title: "Growth Support", desc: "You nurture your partner's personal development." },
          { title: "Meaningful Communication", desc: "You facilitate conversations that truly matter." },
        ],
        weaknesses: [
          { title: "Losing Yourself", desc: "You may prioritize your partner's needs over your own." },
          { title: "Idealization", desc: "You may project qualities onto partners that aren't there." },
          { title: "Difficulty Setting Boundaries", desc: "Saying no to loved ones feels almost impossible." },
          { title: "Emotional Overwhelm", desc: "Relationship conflicts can feel devastatingly intense." },
          { title: "Passive Communication", desc: "You hint at needs rather than stating them directly." },
          { title: "Door-Slamming", desc: "When pushed too far, you may cut people off entirely." },
        ],
      },
    }),
    famousPeople: [
      { name: "Martin Luther King Jr." },
      { name: "Nelson Mandela" },
      { name: "Lady Gaga" },
      { name: "Fyodor Dostoevsky" },
    ],
  },

  INFP: {
    typeName: "The Harmonizer",
    typeCode: "INFP",
    heroColor: "#059669",
    description: [
      "As an INFP, you are a compassionate idealist who seeks meaning and authenticity in everything you do. Your rich inner world is filled with vivid imagination, deep emotions, and a strong personal value system that guides your every decision.",
      "Your sensitivity is a superpower — it allows you to see beauty where others see ordinary, and to feel connections that others miss. While the world can sometimes feel overwhelming, your ability to find meaning in the mundane is a gift.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You need work that resonates with your values and allows creative self-expression. Whether through writing, counseling, art, or advocacy, you need to feel that your work matters on a deeper level.",
          "Your challenge is finding practical outlets for your idealism. The most fulfilled INFPs are those who've found a way to make a living doing what they love, even if the path there wasn't conventional.",
        ],
        strengths: [
          { title: "Creative Expression", desc: "You naturally find authentic ways to communicate beauty and meaning." },
          { title: "Genuine Empathy", desc: "Your deep emotional awareness helps colleagues feel valued." },
          { title: "Attention to Atmosphere", desc: "You instinctively create pleasant environments." },
          { title: "Quick to Adapt", desc: "You smoothly handle unexpected changes." },
          { title: "Flexible Approach", desc: "Rigid processes don't constrain you — you improve them." },
          { title: "Practical Creativity", desc: "You skillfully merge aesthetics and functionality." },
        ],
        weaknesses: [
          { title: "Lost in Routine", desc: "Tasks lacking variety quickly drain your interest." },
          { title: "Reluctant to Promote Yourself", desc: "You find networking and self-promotion difficult." },
          { title: "Struggles with Deadlines", desc: "You tend toward last-minute effort." },
          { title: "Easily Discouraged by Criticism", desc: "Negative feedback significantly impacts your motivation." },
          { title: "Avoiding Long-Term Planning", desc: "Spontaneous action may neglect beneficial future strategies." },
          { title: "Technical Challenges", desc: "You feel uneasy with overly analytical tasks." },
        ],
      },
      growth: {
        desc: [
          "Your journey of personal growth is deeply intertwined with your quest for authenticity and self-expression. You have an innate desire to stay true to yourself, which can sometimes clash with societal expectations.",
          "As you evolve, you'll find it beneficial to work on expressing your emotions more openly and assertively. While your rich inner world is a source of strength, learning to share it with others can lead to deeper connections and personal satisfaction.",
        ],
        strengths: [
          { title: "Insightful About Emotions", desc: "Your self-awareness helps you deeply explore inner thoughts." },
          { title: "Authenticity", desc: "You prioritize being true to yourself over meeting expectations." },
          { title: "Savoring the Present", desc: "Your understanding that happiness lies in the moment enriches daily life." },
          { title: "Personal Reflection", desc: "You comfortably use solitary time to recharge and reflect." },
          { title: "Open-Minded Curiosity", desc: "You're receptive toward new experiences." },
          { title: "Imaginative Thinking", desc: "Your capacity to visualize possibilities motivates creative self-discovery." },
        ],
        weaknesses: [
          { title: "Trouble Communicating Needs", desc: "Expressing your deepest feelings to others often feels uncomfortable." },
          { title: "Avoiding Consistent Habits", desc: "You resist regular routines, hindering personal projects." },
          { title: "Sensitive Self-Esteem", desc: "Criticism and setbacks trigger significant self-doubt." },
          { title: "Distracted from Goals", desc: "Living freely in the moment can make personal ambitions feel unclear." },
          { title: "Reluctant to Leave Comfort", desc: "You hesitate to explore outside familiar surroundings." },
          { title: "Difficulty Handling Stress", desc: "You become easily overwhelmed in tense situations." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, your caring nature and loyalty shine bright. You have a gift for creating harmonious environments and making others feel accepted and understood. Your empathy allows you to form deep, meaningful connections.",
          "While you feel emotions intensely, you may struggle to express them verbally, preferring to show your affection through actions rather than words. Your path to fulfilling relationships involves finding partners who appreciate your unique way of showing love and respect your need for autonomy.",
        ],
        strengths: [
          { title: "Empathetic Listening", desc: "You naturally sense others' feelings, making them feel valued." },
          { title: "Warmth and Affection", desc: "You instinctively offer care through thoughtful gestures." },
          { title: "Cherishing Small Moments", desc: "You create meaningful connections through simple shared experiences." },
          { title: "Respecting Others' Autonomy", desc: "Your acceptance lets loved ones comfortably express who they are." },
          { title: "Forgiving Spirit", desc: "Your willingness to give second chances helps relationships feel safe." },
          { title: "Quiet Support", desc: "You show understanding unobtrusively, providing gentle comfort." },
        ],
        weaknesses: [
          { title: "Holding Feelings Inside", desc: "You struggle to voice emotional hurts clearly." },
          { title: "Uncomfortable Confrontations", desc: "Your dislike of conflict may allow tensions to linger." },
          { title: "Avoiding Commitment Pressure", desc: "You withdraw when a relationship demands more structure." },
          { title: "Unspoken Expectations", desc: "You assume others know your emotional needs." },
          { title: "Easily Feeling Neglected", desc: "You take small gestures personally, triggering distress." },
          { title: "Inconsistent with Plans", desc: "You often change plans spontaneously, inconveniencing others." },
        ],
      },
    }),
    famousPeople: [
      { name: "William Shakespeare" },
      { name: "J.R.R. Tolkien" },
      { name: "Princess Diana" },
      { name: "Johnny Depp" },
    ],
  },

  ENFJ: {
    typeName: "The Hero",
    typeCode: "ENFJ",
    heroColor: "#059669",
    description: [
      "As an ENFJ, you are a charismatic leader who inspires others with your warmth, vision, and genuine desire to help people grow. You have an extraordinary ability to see the potential in everyone and to motivate them to reach it.",
      "Your empathy is matched by your organizational skills, making you uniquely effective at bringing people together for a common cause. You lead with your heart, and people follow because they trust both your intentions and your competence.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You excel in people-oriented roles where you can mentor, teach, and inspire. Your natural charisma and organizational ability make you effective in leadership positions, especially those focused on human development.",
          "Your challenge is learning to lead yourself as well as you lead others. The tendency to pour all your energy into helping others can leave you depleted if you don't prioritize your own growth and rest.",
        ],
        strengths: [
          { title: "Inspirational Leadership", desc: "You motivate others through genuine enthusiasm and vision." },
          { title: "Emotional Attunement", desc: "You read people accurately and respond to their needs." },
          { title: "Mentoring Ability", desc: "You naturally develop others' talents and confidence." },
          { title: "Organizational Skills", desc: "You coordinate people and projects with ease." },
          { title: "Diplomatic Communication", desc: "You navigate sensitive situations with grace." },
          { title: "Vision for Others", desc: "You see what people can become and help them get there." },
        ],
        weaknesses: [
          { title: "People-Pleasing", desc: "Your desire to be liked can compromise your decisions." },
          { title: "Overextending", desc: "You take on too much in your effort to help everyone." },
          { title: "Avoiding Tough Conversations", desc: "You may soften necessary criticism too much." },
          { title: "Neglecting Self", desc: "Others' needs consistently come before your own." },
          { title: "Sensitivity to Rejection", desc: "Not being appreciated deeply affects you." },
          { title: "Controlling Tendencies", desc: "Your vision for others may override their own wishes." },
        ],
      },
      growth: {
        desc: [
          "Your growth involves learning that you can't pour from an empty cup. Developing strong self-care practices and learning to say no are essential for sustaining your impact over the long term.",
          "The most powerful growth for you comes from turning your remarkable insight inward — understanding your own needs and boundaries with the same depth you understand others'.",
        ],
        strengths: [
          { title: "Growth Mindset", desc: "You genuinely believe in continuous improvement for yourself and others." },
          { title: "Emotional Wisdom", desc: "Your deep understanding of emotions accelerates personal growth." },
          { title: "Community Building", desc: "You create support networks that facilitate growth." },
          { title: "Inspiring Others", desc: "Your growth journey motivates those around you." },
          { title: "Value Alignment", desc: "You consistently align your actions with your beliefs." },
          { title: "Reflective Practice", desc: "You regularly examine your impact and adjust." },
        ],
        weaknesses: [
          { title: "Martyr Complex", desc: "You sacrifice yourself for others and resent it silently." },
          { title: "External Validation", desc: "You need appreciation to feel your growth is real." },
          { title: "Difficulty Being Alone", desc: "Solitary reflection can feel uncomfortable." },
          { title: "Overidentification", desc: "You may define yourself too much by your role as helper." },
          { title: "Boundary Setting", desc: "Protecting your energy feels selfish to you." },
          { title: "Avoiding Inner Work", desc: "Focusing on others can be a way to avoid your own issues." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you are devoted, attentive, and deeply invested in your partner's happiness and growth. You create a warm, nurturing environment where love can flourish, and your partner always knows they are cared for.",
          "Your challenge is maintaining your identity within the relationship. Your tendency to become what your partner needs can erode your sense of self over time. The healthiest relationships for you are those where both partners grow equally.",
        ],
        strengths: [
          { title: "Devoted Partnership", desc: "You show up fully for your partner every day." },
          { title: "Emotional Warmth", desc: "You create a loving atmosphere that feels like home." },
          { title: "Growth-Oriented", desc: "You encourage your partner to be their best self." },
          { title: "Excellent Communication", desc: "You facilitate deep, meaningful dialogue." },
          { title: "Thoughtful Romance", desc: "You remember details and create meaningful moments." },
          { title: "Conflict Resolution", desc: "You work to find solutions that honor both perspectives." },
        ],
        weaknesses: [
          { title: "Over-Giving", desc: "You may give more than is healthy or reciprocated." },
          { title: "Need for Appreciation", desc: "Not feeling valued can create resentment." },
          { title: "Difficulty Receiving", desc: "Accepting help or care from others feels awkward." },
          { title: "Manipulative Potential", desc: "Your insight into people can be used to influence unfairly." },
          { title: "Avoiding Own Needs", desc: "You may not know what you want for yourself." },
          { title: "Idealization", desc: "You may see potential rather than reality in partners." },
        ],
      },
    }),
    famousPeople: [
      { name: "Barack Obama" },
      { name: "Oprah Winfrey" },
      { name: "Maya Angelou" },
      { name: "Martin Luther King Jr." },
    ],
  },

  ENFP: {
    typeName: "The Inspirer",
    typeCode: "ENFP",
    heroColor: "#059669",
    description: [
      "As an ENFP, you are an enthusiastic and creative free spirit who sees life as full of possibilities. Your warmth, energy, and ability to connect with people on an emotional level make you magnetic and inspiring.",
      "You live life with a sense of wonder and adventure that is contagious. Your ability to see the best in people and situations, combined with your natural charisma, makes you a catalyst for positive change wherever you go.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You flourish in creative, people-oriented roles that give you freedom and variety. Your ability to inspire others and generate innovative ideas makes you valuable in entrepreneurship, marketing, counseling, and the arts.",
          "Your challenge is maintaining focus and following through on your many brilliant ideas. Learning to prioritize and see projects through to completion will multiply your impact enormously.",
        ],
        strengths: [
          { title: "Creative Innovation", desc: "You generate ideas that excite and inspire entire teams." },
          { title: "People Connection", desc: "You build rapport with almost anyone effortlessly." },
          { title: "Enthusiasm", desc: "Your energy is contagious and lifts team morale." },
          { title: "Adaptability", desc: "You thrive in changing environments and embrace uncertainty." },
          { title: "Visionary Thinking", desc: "You see possibilities that others haven't imagined." },
          { title: "Empathetic Leadership", desc: "You lead by understanding and valuing each team member." },
        ],
        weaknesses: [
          { title: "Follow-Through", desc: "Starting is exciting; finishing is a different story." },
          { title: "Difficulty with Routine", desc: "Structured, repetitive work drains you rapidly." },
          { title: "Overcommitting", desc: "You say yes to everything because everything sounds amazing." },
          { title: "Shiny Object Syndrome", desc: "New ideas distract you from current priorities." },
          { title: "Conflict Avoidance", desc: "You may sidestep difficult conversations to keep the peace." },
          { title: "Disorganization", desc: "Your free-spirited nature can lead to chaos." },
        ],
      },
      growth: {
        desc: [
          "Your growth journey is about channeling your incredible potential into sustained action. You have more creative energy and people skills than almost anyone — learning to harness these gifts consistently is your path to fulfillment.",
          "Developing discipline doesn't mean losing your spark. The most effective ENFPs are those who've built systems that support their creativity rather than constrain it.",
        ],
        strengths: [
          { title: "Enthusiasm for Growth", desc: "You approach self-improvement with genuine excitement." },
          { title: "Emotional Awareness", desc: "You process and understand your feelings naturally." },
          { title: "Openness", desc: "You welcome new perspectives and experiences." },
          { title: "Resilient Optimism", desc: "Setbacks are temporary — your spirit bounces back." },
          { title: "Connection-Based Growth", desc: "You grow through meaningful relationships and conversations." },
          { title: "Values-Driven", desc: "Your personal values provide a strong foundation for growth." },
        ],
        weaknesses: [
          { title: "Inconsistency", desc: "Growth habits come and go with your moods." },
          { title: "Avoiding Hard Truths", desc: "Optimism can blind you to problems that need addressing." },
          { title: "External Focus", desc: "You may focus on others' growth to avoid your own." },
          { title: "Impatience", desc: "You want transformation now, not through gradual change." },
          { title: "Difficulty with Solitude", desc: "Being alone with your thoughts can feel restless." },
          { title: "Emotional Reactivity", desc: "Your moods can swing dramatically and derail progress." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you bring passion, creativity, and deep emotional connection. You love intensely and express your feelings openly. Your partner will never doubt your enthusiasm or your desire to make them happy.",
          "Your challenge is maintaining depth and consistency. The initial excitement of a relationship comes naturally to you, but the everyday work of maintaining a deep partnership requires skills you'll need to develop over time.",
        ],
        strengths: [
          { title: "Passionate Love", desc: "You express your feelings openly and enthusiastically." },
          { title: "Emotional Depth", desc: "You connect on a level that many find profoundly meaningful." },
          { title: "Fun and Adventure", desc: "You keep the relationship exciting and spontaneous." },
          { title: "Acceptance", desc: "You embrace your partner's true self without judgment." },
          { title: "Encouragement", desc: "You champion your partner's dreams and aspirations." },
          { title: "Creative Romance", desc: "You find unique ways to show your love." },
        ],
        weaknesses: [
          { title: "Inconsistent Attention", desc: "Your focus shifts, and partners may feel neglected." },
          { title: "Avoiding Difficult Topics", desc: "You may use humor or distraction to escape hard conversations." },
          { title: "Idealization", desc: "You fall in love with potential rather than reality." },
          { title: "Restlessness", desc: "Routine in relationships makes you anxious." },
          { title: "Over-Promising", desc: "Your enthusiasm leads to commitments you can't always keep." },
          { title: "Emotional Volatility", desc: "Your highs are high, but your lows can be dramatic." },
        ],
      },
    }),
    famousPeople: [
      { name: "Robin Williams" },
      { name: "Robert Downey Jr." },
      { name: "Ellen DeGeneres" },
      { name: "Walt Disney" },
    ],
  },

  ISTJ: {
    typeName: "The Director",
    typeCode: "ISTJ",
    heroColor: "#0284c7",
    description: [
      "As an ISTJ, you are the backbone of any organization or community you belong to. Your reliability, thoroughness, and strong sense of duty make you someone others can always count on. You approach life with a practical, no-nonsense attitude that gets things done.",
      "Your respect for tradition and your methodical approach to challenges provide stability in an unpredictable world. While you may not seek the spotlight, your consistent excellence speaks for itself.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You excel in roles that value accuracy, reliability, and systematic approaches. Whether in finance, law, engineering, or management, your ability to create and maintain order is invaluable.",
          "Your challenge is adapting to rapid change and embracing innovation. The most successful ISTJs are those who combine their love of proven methods with openness to new approaches when the evidence supports them.",
        ],
        strengths: [
          { title: "Unwavering Reliability", desc: "You deliver on your commitments without fail." },
          { title: "Attention to Detail", desc: "Nothing escapes your careful, thorough approach." },
          { title: "Organizational Excellence", desc: "You create systems that run smoothly and efficiently." },
          { title: "Strong Work Ethic", desc: "You put in the effort regardless of whether anyone is watching." },
          { title: "Logical Decision-Making", desc: "You base decisions on facts and careful analysis." },
          { title: "Integrity", desc: "Your word is your bond — you uphold standards consistently." },
        ],
        weaknesses: [
          { title: "Resistance to Change", desc: "New methods feel risky when proven ones already work." },
          { title: "Rigidity", desc: "Your adherence to rules can frustrate more flexible colleagues." },
          { title: "Difficulty Expressing Emotions", desc: "Professional warmth doesn't come naturally." },
          { title: "Perfectionism", desc: "Your standards can slow down progress unnecessarily." },
          { title: "Narrow Focus", desc: "You may miss creative opportunities outside your expertise." },
          { title: "Difficulty with Ambiguity", desc: "Undefined situations create discomfort." },
        ],
      },
      growth: {
        desc: [
          "Your growth journey involves expanding your comfort zone while honoring your need for structure. Learning to embrace uncertainty and express emotions more openly will enrich your life in ways you might not expect.",
          "Growth for you isn't about changing your fundamental nature — it's about adding flexibility to your remarkable foundation of discipline and integrity.",
        ],
        strengths: [
          { title: "Disciplined Practice", desc: "You stick to growth habits consistently." },
          { title: "Measurable Progress", desc: "You track improvement and celebrate milestones." },
          { title: "Reliability in Commitments", desc: "When you commit to growth, you follow through." },
          { title: "Practical Application", desc: "You immediately apply what you learn." },
          { title: "Patience", desc: "You understand that meaningful growth takes time." },
          { title: "Evidence-Based Approach", desc: "You seek proven methods for self-improvement." },
        ],
        weaknesses: [
          { title: "Fear of Vulnerability", desc: "Opening up emotionally feels like a risk." },
          { title: "Resistance to Therapy", desc: "Talking about feelings with a stranger feels unnatural." },
          { title: "Comfort Zone Attachment", desc: "Growth often requires discomfort you'd rather avoid." },
          { title: "Difficulty with Abstract Growth", desc: "Spiritual or emotional development feels vague." },
          { title: "Stubbornness", desc: "Once you've decided on a path, changing course is hard." },
          { title: "Neglecting Relationships", desc: "Personal connections may not get the same attention as tasks." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you are the rock that others lean on. Your loyalty, dependability, and practical support make your partner feel secure and cared for. You show love through actions — by being there, by being reliable, by taking care of responsibilities.",
          "Your challenge is learning to express your feelings verbally and to embrace the emotional dimensions of your relationships. Your partner may need words of affirmation and emotional engagement alongside your practical devotion.",
        ],
        strengths: [
          { title: "Steadfast Loyalty", desc: "Your commitment is absolute once given." },
          { title: "Practical Support", desc: "You show love through actions and reliability." },
          { title: "Financial Responsibility", desc: "You create stability and security for your family." },
          { title: "Trustworthiness", desc: "Your partner never needs to doubt your integrity." },
          { title: "Consistency", desc: "You provide a steady, predictable presence." },
          { title: "Protective Nature", desc: "You look out for your loved ones' welfare." },
        ],
        weaknesses: [
          { title: "Emotional Stoicism", desc: "Expressing love verbally feels awkward and vulnerable." },
          { title: "Rigidity in Routine", desc: "Your need for structure may stifle spontaneity." },
          { title: "Difficulty with Change", desc: "Relationship evolution can feel threatening." },
          { title: "Over-Focusing on Duty", desc: "Relationships are about joy, not just responsibility." },
          { title: "Criticism of Partners", desc: "Your standards can make partners feel inadequate." },
          { title: "Withholding Feelings", desc: "You may bottle up emotions until they explode." },
        ],
      },
    }),
    famousPeople: [
      { name: "George Washington" },
      { name: "Queen Elizabeth II" },
      { name: "Warren Buffett" },
      { name: "Angela Merkel" },
    ],
  },

  ISFJ: {
    typeName: "The Guardian",
    typeCode: "ISFJ",
    heroColor: "#0284c7",
    description: [
      "As an ISFJ, you are a warm and dedicated protector who goes above and beyond for the people you care about. Your combination of compassion and practicality makes you an irreplaceable presence in others' lives.",
      "You remember the details that matter — birthdays, preferences, struggles, dreams. Your quiet attentiveness creates a web of care that holds your community together, even when no one realizes you're the one doing it.",
    ],
    sections: buildSections({
      career: {
        desc: [
          "You thrive in roles that combine helping others with tangible, practical outcomes. Healthcare, education, social work, and administrative support are natural fits for your caring and organized nature.",
          "Your challenge is advocating for yourself as strongly as you advocate for others. Learning to set boundaries and ask for recognition will ensure your career growth matches your contribution.",
        ],
        strengths: [
          { title: "Compassionate Service", desc: "You find deep satisfaction in helping others tangibly." },
          { title: "Meticulous Organization", desc: "You maintain order and efficiency in everything you do." },
          { title: "Reliable Execution", desc: "Tasks are completed thoroughly and on time, every time." },
          { title: "Supportive Team Player", desc: "You elevate everyone around you with your helpfulness." },
          { title: "Memory for Details", desc: "You remember important information that others forget." },
          { title: "Patient Perseverance", desc: "You see tasks through with unwavering dedication." },
        ],
        weaknesses: [
          { title: "Difficulty Saying No", desc: "You take on more than you should to help others." },
          { title: "Undervaluing Yourself", desc: "You don't advocate for the recognition you deserve." },
          { title: "Resistance to Change", desc: "New methods feel risky when familiar ones work fine." },
          { title: "Burnout from Over-Giving", desc: "Your selflessness can deplete your own resources." },
          { title: "Avoiding Conflict", desc: "You may let issues slide rather than address them." },
          { title: "Difficulty with Criticism", desc: "Even constructive feedback can feel deeply personal." },
        ],
      },
      growth: {
        desc: [
          "Your growth journey is about learning that taking care of yourself is not selfish. You give so much to others that you often forget you need nurturing too. Developing strong self-care practices is essential.",
          "The most powerful growth for you comes from learning to voice your needs and set boundaries without guilt. You are worthy of the same care and attention you so generously give to everyone else.",
        ],
        strengths: [
          { title: "Consistent Effort", desc: "You show up for your growth practice day after day." },
          { title: "Empathetic Growth", desc: "Your understanding of others deepens your self-awareness." },
          { title: "Practical Application", desc: "You turn insights into concrete daily habits." },
          { title: "Community Support", desc: "You grow well in supportive group settings." },
          { title: "Value-Driven", desc: "Your strong values provide direction for growth." },
          { title: "Patience", desc: "You accept that meaningful change takes time." },
        ],
        weaknesses: [
          { title: "Neglecting Own Needs", desc: "Others always come first, at your expense." },
          { title: "Fear of Change", desc: "Growth requires leaving your comfort zone." },
          { title: "People-Pleasing", desc: "You may grow in directions others expect rather than your own." },
          { title: "Difficulty with Assertiveness", desc: "Speaking up for yourself feels aggressive." },
          { title: "Holding onto the Past", desc: "Past hurts and traditions can hold you back." },
          { title: "Guilt", desc: "Taking time for yourself triggers feelings of selfishness." },
        ],
      },
      relationships: {
        desc: [
          "In relationships, you are the ultimate caring partner — attentive, loyal, and endlessly supportive. You show love through acts of service and remember every detail that matters to your partner.",
          "Your challenge is ensuring the relationship is as nourishing for you as it is for your partner. Learning to receive love as well as give it, and to express your own needs without guilt, will create a more balanced and fulfilling partnership.",
        ],
        strengths: [
          { title: "Unwavering Care", desc: "Your partner always feels looked after and cherished." },
          { title: "Thoughtful Attention", desc: "You remember preferences, dates, and important moments." },
          { title: "Stable Presence", desc: "You provide consistent emotional and practical support." },
          { title: "Loyalty", desc: "Your commitment is deep and unshakeable." },
          { title: "Creating Home", desc: "You make any space feel warm, safe, and welcoming." },
          { title: "Selfless Love", desc: "You put your partner's needs on par with your own." },
        ],
        weaknesses: [
          { title: "Suppressing Needs", desc: "You hide your own desires to avoid burdening others." },
          { title: "Resentment Build-Up", desc: "Unspoken needs can create silent resentment." },
          { title: "Over-Functioning", desc: "You may do everything, preventing partners from contributing." },
          { title: "Difficulty with Confrontation", desc: "Important issues go unaddressed to keep the peace." },
          { title: "Sensitivity to Criticism", desc: "Feedback from partners feels like rejection." },
          { title: "Martyrdom", desc: "Your sacrifices may come with unspoken expectations." },
        ],
      },
    }),
    famousPeople: [
      { name: "Beyoncé" },
      { name: "Kate Middleton" },
      { name: "Vin Diesel" },
      { name: "Halle Berry" },
    ],
  },

  ESTJ: {
    typeName: "The Governor",
    typeCode: "ESTJ",
    heroColor: "#0284c7",
    description: [
      "As an ESTJ, you are a natural organizer and leader who brings order and efficiency to everything you touch. Your strong sense of duty and your practical, results-oriented approach make you an indispensable pillar of any community.",
      "You value tradition, loyalty, and honest hard work. When you commit to something, you see it through with determination and attention to detail that sets the standard for everyone around you.",
    ],
    sections: buildSections({
      career: { desc: ["You excel in management and leadership roles where you can create structure, set standards, and ensure accountability. Your ability to organize people and processes is unmatched.", "Your growth area is developing flexibility and empathy as a leader. Combining your organizational excellence with genuine warmth creates an unstoppable leadership style."], strengths: [{ title: "Organizational Mastery", desc: "You create systems that work and people follow." }, { title: "Decisive Leadership", desc: "You make clear decisions and stand behind them." }, { title: "Results Focus", desc: "You drive projects to completion efficiently." }, { title: "Accountability", desc: "You hold yourself and others to high standards." }, { title: "Practical Problem-Solving", desc: "You find realistic solutions to real problems." }, { title: "Reliability", desc: "Deadlines and commitments are sacred to you." }], weaknesses: [{ title: "Inflexibility", desc: "Your way is the right way — until it isn't." }, { title: "Insensitivity", desc: "Your directness can overlook others' feelings." }, { title: "Resistance to Innovation", desc: "If it works, why change it?" }, { title: "Over-Controlling", desc: "You may micromanage rather than trust." }, { title: "Difficulty Relaxing", desc: "Free time feels unproductive." }, { title: "Judgmental Tendencies", desc: "You may be harsh on those who don't share your work ethic." }] },
      growth: { desc: ["Your growth involves softening your edges while keeping your incredible strength. Learning that there are multiple right ways to do things will expand your effectiveness and your relationships.", "Developing emotional intelligence and flexibility alongside your natural competence will make you not just a good leader, but a great one."], strengths: [{ title: "Discipline", desc: "You commit to growth practices and stick with them." }, { title: "Action-Oriented", desc: "You immediately put new insights into practice." }, { title: "Goal Setting", desc: "You set clear growth targets and track progress." }, { title: "Responsibility", desc: "You own your development without making excuses." }, { title: "Practical Learning", desc: "You prefer growth methods with tangible outcomes." }, { title: "Mentoring", desc: "Teaching others reinforces your own growth." }], weaknesses: [{ title: "Emotional Avoidance", desc: "Feelings seem inefficient and unreliable." }, { title: "Stubborn Habits", desc: "Changing long-standing patterns feels wrong." }, { title: "Difficulty with Vulnerability", desc: "Admitting weakness contradicts your self-image." }, { title: "Rigidity", desc: "Your way of growing may be too structured." }, { title: "Impatience", desc: "You expect quick results from growth efforts." }, { title: "Neglecting Inner Life", desc: "You focus on external achievements over inner peace." }] },
      relationships: { desc: ["In relationships, you are loyal, dependable, and committed to building a solid foundation. You show love through reliability, protection, and creating a stable environment for your family.", "Your challenge is balancing your strong personality with tenderness and emotional availability. Learning that sometimes your partner needs your heart more than your help will transform your relationships."], strengths: [{ title: "Commitment", desc: "You take your relationship vows seriously." }, { title: "Stability", desc: "You provide a secure, well-organized home life." }, { title: "Direct Communication", desc: "Your partner always knows where they stand." }, { title: "Protectiveness", desc: "You fiercely defend and provide for your loved ones." }, { title: "Responsibility", desc: "You handle family obligations with care." }, { title: "Traditions", desc: "You create and maintain meaningful family rituals." }], weaknesses: [{ title: "Domineering", desc: "Your strong will can overpower your partner's voice." }, { title: "Emotional Unavailability", desc: "Feelings conversations are avoided when possible." }, { title: "Rigid Expectations", desc: "You may have inflexible ideas about how things should be." }, { title: "Criticism", desc: "Your standards can feel like constant judgment." }, { title: "Work Priority", desc: "Career obligations may consistently come first." }, { title: "Difficulty Apologizing", desc: "Admitting you were wrong is extremely hard." }] },
    }),
    famousPeople: [{ name: "Judge Judy" }, { name: "Sonia Sotomayor" }, { name: "Frank Sinatra" }, { name: "Martha Stewart" }],
  },

  ESFJ: {
    typeName: "The Anchor",
    typeCode: "ESFJ",
    heroColor: "#0284c7",
    description: [
      "As an ESFJ, you are the heart and soul of your community. Your warmth, generosity, and genuine concern for others create a welcoming environment wherever you go. You have an extraordinary ability to make people feel seen, valued, and supported.",
      "Your social intelligence and organizational skills allow you to bring people together and create harmony. You remember names, preferences, and important dates, making everyone feel special in your presence.",
    ],
    sections: buildSections({
      career: { desc: ["You thrive in people-centered roles where you can organize, support, and nurture. Healthcare, education, event planning, and human resources are natural fits for your warm, structured approach.", "Your challenge is learning to balance your desire to please with your own professional ambitions. You deserve to pursue your goals with the same energy you invest in helping others achieve theirs."], strengths: [{ title: "People Skills", desc: "You connect with colleagues and clients effortlessly." }, { title: "Team Harmony", desc: "You create a positive, cohesive work environment." }, { title: "Organized Execution", desc: "Events, projects, and processes run smoothly under your care." }, { title: "Service Excellence", desc: "You go above and beyond for clients and colleagues." }, { title: "Reliability", desc: "People count on you, and you always deliver." }, { title: "Conflict Resolution", desc: "You mediate disagreements with diplomacy." }], weaknesses: [{ title: "Need for Approval", desc: "Your self-worth is too tied to others' opinions." }, { title: "Difficulty with Criticism", desc: "Negative feedback feels like a personal attack." }, { title: "Over-Accommodating", desc: "You may sacrifice your own priorities for others." }, { title: "Resistance to Change", desc: "You prefer familiar, proven approaches." }, { title: "Gossip Risk", desc: "Your social nature may lead to sharing too much." }, { title: "Burnout", desc: "Constant people-pleasing is exhausting." }] },
      growth: { desc: ["Your growth path involves developing a stronger sense of self that doesn't depend on others' approval. Learning to validate yourself from within is your most important lesson.", "You have incredible gifts, and the most powerful version of you is one who gives from abundance rather than obligation — because you want to, not because you feel you have to."], strengths: [{ title: "Community-Based Growth", desc: "You grow best with supportive groups and partners." }, { title: "Consistent Practice", desc: "You maintain habits and routines faithfully." }, { title: "Empathetic Learning", desc: "You learn through emotional connection and stories." }, { title: "Service as Growth", desc: "Helping others naturally deepens your self-understanding." }, { title: "Value Alignment", desc: "Your strong values guide meaningful development." }, { title: "Relationship Wisdom", desc: "Your social experience provides deep insights." }], weaknesses: [{ title: "External Validation Dependence", desc: "You need others to confirm your progress." }, { title: "Difficulty Being Alone", desc: "Solitary self-reflection feels lonely." }, { title: "Conformity", desc: "You may grow in socially expected directions rather than authentic ones." }, { title: "Avoiding Uncomfortable Truths", desc: "You'd rather maintain harmony than face hard realities." }, { title: "Self-Neglect", desc: "Growth for others takes priority over growth for yourself." }, { title: "Fear of Being Different", desc: "Standing out from your community feels risky." }] },
      relationships: { desc: ["In relationships, you create a warm, nurturing environment filled with love and stability. Your attentiveness makes your partner feel truly special, and your loyalty means they always have someone in their corner.", "Your challenge is learning that you can't be everything to everyone. Developing the ability to say no and to prioritize your own happiness will actually make you a better partner in the long run."], strengths: [{ title: "Nurturing Love", desc: "You create a warm, caring atmosphere in your relationship." }, { title: "Attentive Partner", desc: "You notice and respond to your partner's needs." }, { title: "Social Connection", desc: "You create a vibrant social life for you both." }, { title: "Tradition Building", desc: "You establish meaningful rituals and celebrations." }, { title: "Emotional Availability", desc: "You're present and responsive when your partner needs you." }, { title: "Practical Care", desc: "You handle the details that make daily life smoother." }], weaknesses: [{ title: "Need for Reciprocity", desc: "You keep score of giving and receiving." }, { title: "Sensitivity", desc: "Minor slights feel disproportionately hurtful." }, { title: "Controlling Through Care", desc: "Your helpfulness can become a way to manage others." }, { title: "Difficulty with Independence", desc: "Your partner's need for space feels like rejection." }, { title: "Avoiding Hard Conversations", desc: "Harmony preservation overrides honesty." }, { title: "Jealousy", desc: "Your partner's other relationships may trigger insecurity." }] },
    }),
    famousPeople: [{ name: "Taylor Swift" }, { name: "Jennifer Garner" }, { name: "Ed Sheeran" }, { name: "Danny DeVito" }],
  },

  ISTP: {
    typeName: "The Master",
    typeCode: "ISTP",
    heroColor: "#d97706",
    description: [
      "As an ISTP, you are a skilled problem-solver with an innate understanding of how things work. Your combination of analytical thinking and hands-on practicality makes you uniquely effective at troubleshooting and building.",
      "You live in the moment, responding to challenges with cool-headed competence that others admire. Your quiet confidence and self-reliance set you apart in a world of noise and dependency.",
    ],
    sections: buildSections({
      career: { desc: ["You thrive in hands-on roles that challenge your problem-solving abilities. Engineering, mechanics, emergency services, forensics, and skilled trades let you apply your natural talents.", "Your need for autonomy and your dislike of bureaucracy mean you work best in environments that value competence over politics."], strengths: [{ title: "Technical Mastery", desc: "You understand systems and mechanics intuitively." }, { title: "Cool Under Pressure", desc: "Crisis situations bring out your best performance." }, { title: "Practical Problem-Solving", desc: "You find efficient solutions that actually work." }, { title: "Independence", desc: "You work effectively without supervision." }, { title: "Adaptability", desc: "You adjust quickly to new tools and situations." }, { title: "Efficiency", desc: "You find the simplest path to the best result." }], weaknesses: [{ title: "Communication Brevity", desc: "Your short responses can seem dismissive." }, { title: "Dislike of Bureaucracy", desc: "Paperwork and protocols feel pointless." }, { title: "Difficulty with Long-Term Plans", desc: "You prefer to live in the present." }, { title: "Risk-Taking", desc: "Your thrill-seeking can lead to unnecessary danger." }, { title: "Emotional Detachment", desc: "Colleagues may find you cold or aloof." }, { title: "Authority Resistance", desc: "You bristle at rules that don't make practical sense." }] },
      growth: { desc: ["Your growth involves developing emotional awareness and communication skills without sacrificing your natural independence. Learning to express your feelings, even briefly, creates stronger connections.", "The most fulfilled ISTPs are those who've learned to balance their love of freedom with meaningful commitments."], strengths: [{ title: "Self-Reliance", desc: "You take charge of your own development." }, { title: "Practical Learning", desc: "You grow through doing, not just thinking." }, { title: "Adaptability", desc: "You adjust your approach based on what works." }, { title: "Present Focus", desc: "You engage fully with the current moment." }, { title: "Honest Self-Assessment", desc: "You see your skills and gaps clearly." }, { title: "Resilience", desc: "Setbacks are problems to solve, not reasons to quit." }], weaknesses: [{ title: "Emotional Avoidance", desc: "Feelings are uncomfortable territory for you." }, { title: "Commitment Issues", desc: "Long-term plans for growth feel constraining." }, { title: "Communication Gaps", desc: "You may not share your inner world with anyone." }, { title: "Impulsiveness", desc: "Acting before thinking can create problems." }, { title: "Isolation", desc: "Too much independence limits growth opportunities." }, { title: "Neglecting Relationships", desc: "Personal connections may not get enough attention." }] },
      relationships: { desc: ["In relationships, you bring quiet strength, loyalty, and practical support. You show love through actions — fixing things, solving problems, and being there when it counts.", "Your challenge is learning to communicate your feelings in words, not just actions. Your partner may need verbal reassurance and emotional engagement to feel secure in the relationship."], strengths: [{ title: "Practical Support", desc: "You show love by solving problems and fixing things." }, { title: "Calm Presence", desc: "You don't create drama or overreact." }, { title: "Independence", desc: "You give your partner healthy space." }, { title: "Loyalty", desc: "Your commitment is steady and reliable." }, { title: "Adventure", desc: "You bring excitement through shared physical activities." }, { title: "Authenticity", desc: "You are genuine — what you see is what you get." }], weaknesses: [{ title: "Emotional Silence", desc: "Your partner may feel shut out of your inner world." }, { title: "Avoidance of Conflict", desc: "You may disappear rather than engage in arguments." }, { title: "Difficulty with Planning", desc: "You resist making long-term plans together." }, { title: "Insensitivity", desc: "You may not notice when your partner needs emotional support." }, { title: "Fear of Commitment", desc: "Labels and expectations can feel suffocating." }, { title: "Unpredictability", desc: "Your spontaneous nature can feel destabilizing." }] },
    }),
    famousPeople: [{ name: "Bruce Lee" }, { name: "Clint Eastwood" }, { name: "Bear Grylls" }, { name: "Scarlett Johansson" }],
  },

  ISFP: {
    typeName: "The Trailblazer",
    typeCode: "ISFP",
    heroColor: "#d97706",
    description: [
      "As an ISFP, you are a true artist of life, crafting beauty and meaning in everything you do. Your creative spirit is matched only by your deep sensitivity to the world around you. You have an uncanny ability to live fully in the present moment, savoring life's experiences through your finely tuned senses.",
      "Your spontaneous nature leads you to embrace life's adventures with open arms. You're not one for rigid plans or structures; instead, you prefer to go with the flow, adapting to situations as they arise. This flexibility allows you to make the most of every opportunity that comes your way.",
    ],
    sections: buildSections({
      career: { desc: ["In your professional life, you thrive in environments that allow you to express your creativity and work with your hands. You have a natural talent for bringing beauty and practicality together, whether through art, design, or craftsmanship.", "However, the traditional career ladder may not always align with your free-spirited nature. You might find yourself struggling with long-term career planning or feeling stifled in overly structured environments."], strengths: [{ title: "Creative Expression", desc: "You naturally find authentic ways to communicate beauty and meaning through your work." }, { title: "Genuine Empathy", desc: "Your deep emotional awareness helps colleagues feel valued and supported." }, { title: "Attention to Atmosphere", desc: "You instinctively create pleasant environments that make work enjoyable." }, { title: "Quick to Adapt", desc: "You smoothly handle unexpected changes, comfortably shifting your approach in any task." }, { title: "Flexible Approach", desc: "Rigid processes don't constrain you; you're adept at improving situations as they arise." }, { title: "Practical Creativity", desc: "You skillfully merge aesthetics and functionality in purposeful and appealing ways." }], weaknesses: [{ title: "Lost in Routine", desc: "Tasks lacking variety quickly drain your interest and energy." }, { title: "Reluctant to Promote Yourself", desc: "You find networking difficult, often missing chances to advance professionally." }, { title: "Struggles with Deadlines", desc: "You tend toward last-minute effort, making strict timelines stressful." }, { title: "Easily Discouraged by Criticism", desc: "Negative feedback can significantly impact your motivation and self-esteem." }, { title: "Avoiding Long-Term Planning", desc: "Constant spontaneous action means you may neglect beneficial future strategies." }, { title: "Technical Challenges", desc: "You feel uneasy tackling overly technical problems or complicated analytical tasks." }] },
      growth: { desc: ["Your journey of personal growth is deeply intertwined with your quest for authenticity and self-expression. You have an innate desire to stay true to yourself, which can sometimes clash with societal expectations. One of your key challenges is developing the self-discipline to turn your creative visions into reality, without losing the spontaneity that makes you unique.", "As you evolve, you may find it beneficial to work on expressing your emotions more openly and assertively. While your rich inner world is a source of strength, learning to share it with others can lead to deeper connections and personal satisfaction. Growth for you isn't about changing who you are, but about becoming the fullest, most authentic version of yourself."], strengths: [{ title: "Insightful About Emotions", desc: "Your self-awareness helps you deeply explore and understand inner thoughts and feelings." }, { title: "Authenticity", desc: "You confidently prioritize being true to yourself over meeting others' expectations." }, { title: "Savoring the Present", desc: "Your understanding that happiness lies in the moment enriches daily life experiences." }, { title: "Personal Reflection", desc: "You comfortably use solitary time to recharge, reflect, and maintain emotional balance." }, { title: "Open-Minded Curiosity", desc: "You're receptive toward new experiences, allowing steady personal exploration." }, { title: "Imaginative Thinking", desc: "Your capacity to visualize possibilities motivates you toward creative self-discovery." }], weaknesses: [{ title: "Trouble Communicating Needs", desc: "Expressing your deepest thoughts or feelings to others often feels uncomfortable." }, { title: "Avoiding Consistent Habits", desc: "You resist regular routines, hindering personal projects requiring structure." }, { title: "Sensitive Self-Esteem", desc: "Criticism and setbacks trigger significant self-doubt more than you'd like." }, { title: "Distracted from Goals", desc: "Living freely in the moment can make personal ambitions feel unclear or unattainable." }, { title: "Reluctant to Leave Comfort", desc: "You hesitate to explore opportunities outside familiar surroundings or practices." }, { title: "Difficulty Handling Stress", desc: "You become easily overwhelmed in tense or emotionally charged situations." }] },
      relationships: { desc: ["In relationships, your caring nature and loyalty shine bright. You have a gift for creating harmonious environments and making others feel accepted and understood. Your empathy allows you to form deep, meaningful connections with those close to you. However, your need for personal space and independence can sometimes create a push-pull dynamic in your relationships.", "While you feel emotions intensely, you may struggle to express them verbally, preferring to show your affection through actions rather than words. This can sometimes lead to misunderstandings, especially with those who communicate differently. Your path to fulfilling relationships involves finding partners and friends who appreciate your unique way of showing love and respect your need for autonomy."], strengths: [{ title: "Empathetic Listening", desc: "You naturally sense others' feelings, making them feel understood and valued." }, { title: "Warmth and Affection", desc: "You instinctively offer care through thoughtful gestures rather than just words." }, { title: "Cherishing Small Moments", desc: "You create meaningful connections through simple shared experiences." }, { title: "Respecting Others' Autonomy", desc: "Your acceptance lets loved ones comfortably express who they genuinely are." }, { title: "Forgiving Spirit", desc: "Your willingness to give second chances helps relationships feel safe and secure." }, { title: "Quiet Support", desc: "You show understanding unobtrusively, providing gentle and consistent comfort." }], weaknesses: [{ title: "Holding Feelings Inside", desc: "You struggle to voice emotional hurts clearly, risking misunderstanding." }, { title: "Uncomfortable Confrontations", desc: "Your dislike of conflict may allow relationship tensions to linger unresolved." }, { title: "Avoiding Commitment Pressure", desc: "You withdraw subtly when a relationship demands more structure or future planning." }, { title: "Unspoken Expectations", desc: "You often assume others know your emotional needs even without direct communication." }, { title: "Easily Feeling Neglected", desc: "You take small gestures (or lack of them) personally, triggering unintended distress." }, { title: "Inconsistent with Plans", desc: "You often change plans spontaneously, inadvertently inconveniencing others." }] },
    }),
    famousPeople: [{ name: "Lana Del Rey" }, { name: "Jungkook" }, { name: "Avril Lavigne" }, { name: "Kevin Costner" }],
  },

  ESTP: {
    typeName: "The Dynamo",
    typeCode: "ESTP",
    heroColor: "#d97706",
    description: [
      "As an ESTP, you are an energetic and action-oriented individual who thrives in the moment. Your ability to think on your feet and respond instantly to changing situations makes you incredibly effective in high-pressure environments.",
      "You bring a pragmatic, no-nonsense approach to everything you do, combined with a natural charm and charisma that draws people to you. Life is never boring when you're around.",
    ],
    sections: buildSections({
      career: { desc: ["You excel in dynamic, fast-paced environments where quick decisions and practical skills are valued. Sales, entrepreneurship, emergency services, and sports are natural fits.", "Your challenge is developing patience for long-term planning and strategic thinking. Combining your action-oriented nature with a bit more forethought will amplify your already impressive results."], strengths: [{ title: "Quick Decision-Making", desc: "You act decisively when others are still deliberating." }, { title: "Practical Intelligence", desc: "You solve real problems with real solutions." }, { title: "Charisma", desc: "You naturally draw people in with your energy." }, { title: "Risk Tolerance", desc: "You thrive in situations that intimidate others." }, { title: "Adaptability", desc: "You pivot effortlessly when plans change." }, { title: "Negotiation Skills", desc: "You read people and close deals effectively." }], weaknesses: [{ title: "Impulsiveness", desc: "Acting before thinking can create problems." }, { title: "Boredom with Routine", desc: "Maintenance work feels like punishment." }, { title: "Insensitivity", desc: "Your bluntness can hurt feelings unintentionally." }, { title: "Difficulty with Long-Term Plans", desc: "Patience for multi-year strategies isn't your strength." }, { title: "Risk-Taking", desc: "Your thrill-seeking can lead to poor decisions." }, { title: "Dismissing Theory", desc: "Abstract thinking feels like a waste of time." }] },
      growth: { desc: ["Your growth involves developing the reflective practices that complement your action-oriented nature. Learning to pause, reflect, and plan will multiply the impact of your natural talents.", "The most effective ESTPs are those who've learned that sometimes the best action is thoughtful inaction."], strengths: [{ title: "Learning by Doing", desc: "You grow through direct experience, not theory." }, { title: "Resilience", desc: "You bounce back from failures without dwelling on them." }, { title: "Self-Confidence", desc: "You believe in your ability to handle whatever comes." }, { title: "Social Learning", desc: "You grow through interactions and feedback from others." }, { title: "Competitiveness", desc: "You push yourself to be better than yesterday." }, { title: "Present-Moment Awareness", desc: "You're naturally mindful in physical experiences." }], weaknesses: [{ title: "Avoiding Self-Reflection", desc: "You'd rather do than think about doing." }, { title: "Emotional Avoidance", desc: "Feelings are obstacles to action in your mind." }, { title: "Difficulty with Stillness", desc: "Meditation and quiet reflection feel torturous." }, { title: "Short-Term Focus", desc: "Long-term personal development plans don't stick." }, { title: "Dismissing Feedback", desc: "You may brush off insights that don't feel immediately useful." }, { title: "Excess as Coping", desc: "You may use thrill-seeking to avoid deeper issues." }] },
      relationships: { desc: ["In relationships, you bring excitement, spontaneity, and a vibrant energy that keeps things interesting. You're a passionate partner who lives fully in the moment.", "Your challenge is developing emotional depth and consistency. Learning to stay present not just physically but emotionally will deepen your connections immensely."], strengths: [{ title: "Exciting Partnership", desc: "You bring adventure and spontaneity to the relationship." }, { title: "Practical Support", desc: "You handle practical problems with ease." }, { title: "Confidence", desc: "Your self-assurance makes your partner feel secure." }, { title: "Living in the Moment", desc: "You make the most of the time you spend together." }, { title: "Direct Communication", desc: "Your partner always knows where you stand." }, { title: "Fun-Loving Nature", desc: "You keep the relationship light and enjoyable." }], weaknesses: [{ title: "Commitment Fears", desc: "Long-term commitment can feel like a trap." }, { title: "Emotional Unavailability", desc: "Deep emotional conversations make you uncomfortable." }, { title: "Impulsive Decisions", desc: "You may make relationship decisions too quickly." }, { title: "Insensitivity", desc: "Your directness can hurt your partner's feelings." }, { title: "Restlessness", desc: "You may seek novelty outside the relationship." }, { title: "Difficulty with Routine", desc: "The everyday work of maintaining a relationship bores you." }] },
    }),
    famousPeople: [{ name: "Ernest Hemingway" }, { name: "Madonna" }, { name: "Jack Nicholson" }, { name: "Eddie Murphy" }],
  },

  ESFP: {
    typeName: "The Muse",
    typeCode: "ESFP",
    heroColor: "#d97706",
    description: [
      "As an ESFP, you are a spontaneous and enthusiastic person who brings joy and energy to every room you enter. Your natural warmth, generosity, and love of life make you magnetic — people are drawn to your positivity and your ability to make every moment count.",
      "You live life with an openness and enthusiasm that inspires others. Your ability to connect with people on an emotional level and your genuine interest in their well-being make you a beloved friend, partner, and colleague.",
    ],
    sections: buildSections({
      career: { desc: ["You thrive in dynamic, people-facing roles that let you use your natural charisma and emotional intelligence. Entertainment, hospitality, sales, healthcare, and education are all arenas where you shine.", "Your challenge is developing the discipline for tasks that require sustained focus and long-term planning. Pairing your people skills with organizational systems will unlock your full professional potential."], strengths: [{ title: "Natural Entertainer", desc: "You bring energy and enthusiasm to any audience." }, { title: "People Connection", desc: "You build genuine rapport with everyone you meet." }, { title: "Adaptability", desc: "You handle changing situations with ease and grace." }, { title: "Positive Energy", desc: "You lift the mood and morale of any team." }, { title: "Practical Creativity", desc: "You find fun, effective ways to solve problems." }, { title: "Emotional Awareness", desc: "You read the room better than almost anyone." }], weaknesses: [{ title: "Difficulty with Routine", desc: "Structured, repetitive work crushes your spirit." }, { title: "Long-Term Planning", desc: "Future-focused projects lose your attention." }, { title: "Sensitivity to Criticism", desc: "Negative feedback hits hard and personally." }, { title: "Impulsiveness", desc: "You may act without considering long-term consequences." }, { title: "Easily Bored", desc: "You need constant stimulation to stay engaged." }, { title: "Avoiding Difficult Tasks", desc: "Unpleasant but necessary work gets postponed." }] },
      growth: { desc: ["Your growth journey involves developing the discipline and self-reflection that complement your natural spontaneity. Learning to sit with discomfort rather than seeking distraction will lead to profound personal development.", "The most fulfilled ESFPs are those who've learned to channel their incredible energy into consistent, purposeful action."], strengths: [{ title: "Enthusiasm for Growth", desc: "You approach self-improvement with genuine excitement." }, { title: "Social Support", desc: "You grow well with encouraging friends and community." }, { title: "Emotional Processing", desc: "You naturally feel and process emotions in real-time." }, { title: "Experiential Learning", desc: "You grow through direct experience and adventure." }, { title: "Optimistic Resilience", desc: "Your positive attitude helps you bounce back quickly." }, { title: "Present-Moment Joy", desc: "You naturally practice gratitude and mindfulness." }], weaknesses: [{ title: "Avoidance of Pain", desc: "You seek distraction rather than sitting with discomfort." }, { title: "Inconsistency", desc: "Growth habits come and go with your moods." }, { title: "External Focus", desc: "You may seek growth through experiences rather than inner work." }, { title: "Difficulty with Solitude", desc: "Being alone with your thoughts can feel challenging." }, { title: "Short Attention Span", desc: "Deep, sustained self-reflection is hard for you." }, { title: "Comparing to Others", desc: "Social comparison can distort your growth path." }] },
      relationships: { desc: ["In relationships, you bring warmth, fun, and an infectious joy that makes every day feel like an adventure. You're generous with your time, attention, and affection, and your partner always feels the full force of your love.", "Your challenge is maintaining depth and commitment through the inevitable difficult times. Learning that true love involves not just the highs but also the willingness to sit with the lows will transform your relationships."], strengths: [{ title: "Joyful Presence", desc: "You make every moment together feel special and fun." }, { title: "Generous Affection", desc: "You express love freely and abundantly." }, { title: "Social Warmth", desc: "You create a vibrant social life that enriches the relationship." }, { title: "Emotional Availability", desc: "You're present and responsive to your partner's feelings." }, { title: "Spontaneous Romance", desc: "You surprise your partner with thoughtful, creative gestures." }, { title: "Acceptance", desc: "You love your partner for who they are right now." }], weaknesses: [{ title: "Avoiding Serious Topics", desc: "Difficult conversations get deflected with humor." }, { title: "Inconsistency", desc: "Your attention and enthusiasm can wax and wane." }, { title: "Living for Today", desc: "Long-term relationship planning doesn't excite you." }, { title: "Sensitivity", desc: "Criticism from your partner cuts deeply." }, { title: "Jealousy", desc: "Your need for attention can trigger possessiveness." }, { title: "Difficulty with Routine", desc: "The everyday maintenance of a relationship bores you." }] },
    }),
    famousPeople: [{ name: "Marilyn Monroe" }, { name: "Jamie Oliver" }, { name: "Adele" }, { name: "Will Smith" }],
  },
};

/* ------------------------------------------------------------------ */
/*  Exported content resolver                                          */
/* ------------------------------------------------------------------ */

/** Fallback content when a type code is not recognised. */
function fallbackContent(typeCode: string): TypeResultContent {
  return {
    typeName: typeCode,
    typeCode,
    heroColor: "#6366f1",
    description: ["Your personality type results are ready. Explore the sections below to learn more about your unique traits and tendencies."],
    dimensionBarConfig: DIMENSION_BAR_CONFIG,
    sections: [],
    famousPeople: [],
  };
}

export const mbtiResultsContent: ResultsPageContent = {
  testId: "mbti",
  getContent(scores: TestScores): TypeResultContent {
    // Extract 4-letter type code from scores (e.g. "INFJ")
    const code = scores.typeCode?.replace(/-[A-Z]$/, "").toUpperCase() ?? "";
    const data = TYPE_CONTENT[code];
    if (!data) return fallbackContent(scores.typeCode ?? code);
    return {
      ...data,
      dimensionBarConfig: DIMENSION_BAR_CONFIG,
    };
  },
};
