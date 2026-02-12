import { createGenericResultsContent, standardSection, t } from "./generic-builder";

export const discResultsContent = createGenericResultsContent({
  testId: "disc",
  testName: "Work Style Assessment",
  heroColor: "#6366f1",
  getTypeName: (scores) => scores.typeLabel ?? "Work Style Profile",
  getTypeCode: (scores) => scores.typeCode ?? "DISC Profile",
  getDescription: (scores) => [
    `Your work style assessment reveals how you approach collaboration, communication, and decision-making in professional settings. ${scores.typeLabel ? `As a ${scores.typeLabel} style` : "Your profile"}, you bring a distinctive blend of behavioural tendencies to the workplace.`,
    "Understanding your DISC profile helps you communicate more effectively with colleagues, manage stress more proactively, and find roles where your natural work style is an asset rather than something you need to suppress.",
  ],
  getSections: () => [
    standardSection({
      id: "career-path", number: 2, title: "Your Work Environment",
      description: [
        "Your DISC profile directly influences the environments where you thrive and the roles where you'll feel most engaged and productive.",
        "The key is finding positions that leverage your natural behavioural strengths while providing opportunities to develop your less dominant styles.",
      ],
      strengths: [
        t("Communication Style", "Your natural way of expressing ideas resonates in specific professional contexts."),
        t("Decision-Making", "Your approach to decisions brings valuable perspective to teams."),
        t("Team Contribution", "You fill a critical role in group dynamics."),
        t("Stress Response", "Your coping style under pressure has distinct advantages."),
        t("Conflict Approach", "Your natural conflict style has productive applications."),
        t("Leadership Potential", "Your behavioural blend creates a unique leadership approach."),
      ],
      weaknesses: [
        t("Blind Spots", "Your dominant style may miss perspectives others value."),
        t("Communication Gaps", "Your default communication may not land with all styles."),
        t("Stress Vulnerabilities", "Certain pressures trigger your least effective patterns."),
        t("Team Friction", "Style differences can create misunderstandings."),
        t("Adaptability Challenges", "Situations requiring your non-dominant style feel draining."),
        t("Overplaying Strengths", "Your strongest traits become weaknesses when overused."),
      ],
      influentialTraits: [{ name: "Assertiveness", color: "blue" }, { name: "Sociability", color: "gold" }, { name: "Patience", color: "green" }, { name: "Precision", color: "purple" }],
      lockedSubsections: [
        { title: "Ideal Roles for Your Style", unlockTeaser: "Get the full report to unlock 8 career paths matched to your work style.", items: [t("Leadership Role", "Directing teams with your natural authority."), t("Collaborative Position", "Working closely with others on shared goals."), t("Analytical Role", "Applying your attention to detail and accuracy."), t("Creative Position", "Using your unique perspective to innovate."), t("Advisory Role", "Counselling others based on your insights."), t("Entrepreneurial Venture", "Building something that reflects your style.")] },
        { title: "Communication Strategies", unlockTeaser: "Get the full report to discover how to communicate effectively with every DISC style.", items: [t("With D-Styles", "How to adapt your communication for Dominance types."), t("With I-Styles", "How to connect with Influence types."), t("With S-Styles", "How to build trust with Steadiness types."), t("With C-Styles", "How to communicate clearly with Conscientiousness types.")] },
      ],
    }),
    standardSection({
      id: "personal-growth", number: 3, title: "Growth and Development",
      description: ["Your DISC profile isn't fixed — it's a starting point for intentional development. Understanding your natural tendencies empowers you to grow in specific, targeted ways.", "The most effective professionals are those who can flex between DISC styles as the situation demands, while staying rooted in their authentic self."],
      strengths: [
        t("Style Awareness", "You understand your default behavioural patterns."),
        t("Predictable Strengths", "You know exactly where you excel."),
        t("Growth Direction", "Your profile reveals where development has the most impact."),
        t("Adaptability Potential", "Understanding styles lets you consciously adapt."),
        t("Self-Management", "You can anticipate and manage your reactions."),
        t("Interpersonal Intelligence", "You can read and respond to others' styles."),
      ],
      weaknesses: [
        t("Style Rigidity", "Defaulting to your dominant style in all situations."),
        t("Avoidance Patterns", "Steering away from situations that require your weaker styles."),
        t("Overconfidence", "Assuming your way is always the most effective."),
        t("Stress Regression", "Falling into exaggerated versions of your style under pressure."),
        t("Judgment of Others", "Viewing other styles as wrong rather than different."),
        t("Comfort Zone Attachment", "Staying in environments that only require your strengths."),
      ],
      lockedSubsections: [
        { title: "What Energizes You", unlockTeaser: "Get the full report to reveal 6 ways to tap into your natural energy.", items: [t("Style-Aligned Tasks", "Work that matches your natural mode."), t("Recognition", "Being appreciated in ways that resonate with your style."), t("Autonomy", "Freedom to work in your preferred way."), t("Challenge", "Tasks that stretch your capabilities."), t("Connection", "Relationships that value your style."), t("Achievement", "Accomplishments that align with your values.")] },
        { title: "What Drains You", unlockTeaser: "Get the full report to uncover 6 energy-drainers you should avoid.", items: [t("Style Suppression", "Being forced to operate outside your mode."), t("Conflict", "Unresolved tension with other styles."), t("Monotony", "Lack of variety in your work."), t("Micromanagement", "Loss of autonomy and control."), t("Isolation", "Being cut off from collaborative energy."), t("Ambiguity", "Lack of clear goals or expectations.")] },
      ],
    }),
    standardSection({
      id: "relationships", number: 4, title: "Relationships and Connection",
      description: ["Your DISC style shapes how you connect, communicate, and handle conflict in personal relationships. Each style has characteristic patterns in love that create both strengths and challenges.", "Understanding these dynamics helps you build more conscious, effective partnerships."],
      strengths: [
        t("Communication Awareness", "You understand your default relationship communication style."),
        t("Conflict Insight", "You can predict how you'll react in disagreements."),
        t("Partner Understanding", "You can identify and appreciate different styles in partners."),
        t("Conscious Adaptation", "You can flex your style to meet your partner's needs."),
        t("Emotional Regulation", "Understanding your patterns helps manage reactions."),
        t("Growth Partnership", "You can grow together by understanding style dynamics."),
      ],
      weaknesses: [
        t("Style Clash", "Differences in DISC styles can create recurring friction."),
        t("Assumptions", "You may assume your style is the 'right' way to relate."),
        t("Over-Adaptation", "Flexing too much can feel inauthentic."),
        t("Stress Spillover", "Work style patterns often carry into personal life."),
        t("Communication Mismatch", "Your natural expression may not land with your partner."),
        t("Avoidance Patterns", "You may avoid relationship situations that trigger your weaker style."),
      ],
      lockedSubsections: [
        { title: "Your Relationship Superpowers", unlockTeaser: "Get the full report to discover 6 hidden relationship strengths.", items: [t("Authentic Engagement", "Bringing your genuine style to connections."), t("Reliable Patterns", "Your consistency creates security."), t("Natural Gifts", "Your style brings specific relationship strengths."), t("Growth Catalyst", "Your style challenges partners to develop."), t("Complementary Value", "What you uniquely bring to a partnership."), t("Communication Strengths", "How your style enhances dialogue.")] },
        { title: "Relationship Pitfalls", unlockTeaser: "Get the full report to identify 6 habits that may strain your relationships.", items: [t("Default Mode", "When your style becomes rigid in relationships."), t("Blind Spots", "What your style consistently misses."), t("Stress Reactions", "How pressure distorts your relationship behaviour."), t("Communication Failures", "Where your style breaks down in conflict."), t("Unmet Needs", "What you need but struggle to ask for."), t("Growth Blocks", "How your style can prevent relationship growth.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Steve Jobs" }, { name: "Oprah Winfrey" }, { name: "Bill Gates" }, { name: "Richard Branson" }],
});
