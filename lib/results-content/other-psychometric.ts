import { createGenericResultsContent, standardSection, t } from "./generic-builder";

/* ------------------------------------------------------------------ */
/*  EQ - Emotional Intelligence                                        */
/* ------------------------------------------------------------------ */

export const eqResultsContent = createGenericResultsContent({
  testId: "eq",
  testName: "Emotional Intelligence",
  heroColor: "#e11d48",
  getTypeName: (scores) => scores.typeLabel ?? `EQ ${scores.overall ?? "—"}`,
  getTypeCode: (scores) => `EQ Score: ${scores.overall ?? "—"}`,
  getDescription: (scores) => [
    "Your Emotional Intelligence assessment reveals how effectively you perceive, use, understand, and manage emotions — both your own and others'. This capability is one of the strongest predictors of success in relationships and career.",
    `With an overall EQ score of ${scores.overall ?? "—"}%, you demonstrate ${(scores.overall ?? 50) >= 65 ? "strong" : (scores.overall ?? 50) >= 40 ? "moderate" : "developing"} emotional intelligence capabilities. Understanding your specific strengths and growth areas empowers you to develop this essential life skill.`,
  ],
  getSections: () => [
    standardSection({
      id: "career-path", number: 2, title: "EQ at Work",
      description: ["Emotional intelligence is a critical factor in workplace success. Leaders with high EQ build stronger teams, navigate conflicts more effectively, and create cultures of trust and innovation.", "Your EQ profile reveals specific strengths you bring to professional relationships and areas where development will have the greatest impact on your career."],
      strengths: [t("Emotional Awareness", "You recognize your own emotional states and their impact."), t("Social Perception", "You read others' emotions accurately."), t("Empathetic Response", "You respond to colleagues' feelings constructively."), t("Self-Regulation", "You manage your emotions under pressure."), t("Relationship Building", "You create positive professional connections."), t("Influence", "You inspire and motivate through emotional connection.")],
      weaknesses: [t("Emotional Blind Spots", "Areas where your self-awareness has gaps."), t("Stress Reactions", "How pressure affects your emotional regulation."), t("Communication Gaps", "Where emotional nuance is lost."), t("Boundary Issues", "Managing emotional investment in work."), t("Feedback Sensitivity", "How criticism affects your emotional state."), t("Conflict Avoidance", "Steering around rather than through emotional challenges.")],
      influentialTraits: [{ name: "Self-Awareness", color: "blue" }, { name: "Empathy", color: "gold" }, { name: "Regulation", color: "green" }, { name: "Social Skills", color: "purple" }],
      lockedSubsections: [
        { title: "EQ Development Strategies", unlockTeaser: "Get the full report to unlock personalized strategies for developing your emotional intelligence.", items: [t("Mindfulness Practice", "Build emotional awareness through present-moment attention."), t("Journaling", "Track emotional patterns and triggers."), t("Active Listening", "Deepen your empathetic connection skills."), t("Feedback Seeking", "Develop self-awareness through others' perspectives."), t("Emotion Labeling", "Build vocabulary for nuanced emotional states."), t("Stress Management", "Develop healthy coping strategies for emotional regulation.")] },
      ],
    }),
    standardSection({
      id: "personal-growth", number: 3, title: "Growing Your EQ",
      description: ["Unlike IQ, emotional intelligence is highly developable throughout life. Small, consistent practices can significantly increase your emotional capabilities over time.", "The most effective approach targets your specific development areas while building on your natural emotional strengths."],
      strengths: [t("Growth Potential", "EQ is one of the most developable forms of intelligence."), t("Self-Awareness Foundation", "Taking this assessment shows valuable self-reflection."), t("Practical Application", "EQ skills immediately improve daily interactions."), t("Measurable Progress", "Emotional skills can be tracked and developed."), t("Universal Relevance", "EQ applies across every area of life."), t("Ripple Effect", "Improving your EQ positively impacts everyone around you.")],
      weaknesses: [t("Habitual Patterns", "Emotional reactions are deeply ingrained and slow to change."), t("Vulnerability Resistance", "Growth requires emotional openness that feels risky."), t("Inconsistency", "Emotional skills require consistent practice to maintain."), t("Trigger Sensitivity", "Stressful situations can override learned emotional skills."), t("Measurement Difficulty", "Progress in EQ can feel intangible."), t("Cultural Factors", "Social norms may discourage emotional expression.")],
      lockedSubsections: [
        { title: "What Boosts Your EQ", unlockTeaser: "Get the full report to reveal 6 practices that strengthen your emotional intelligence.", items: [t("Deep Conversations", "Meaningful dialogue builds emotional skills."), t("Physical Exercise", "Movement regulates emotional states."), t("Creative Expression", "Art and music develop emotional fluency."), t("Meditation", "Mindfulness builds the foundation for all EQ skills."), t("Helping Others", "Service develops empathy and compassion."), t("Nature", "Time outdoors restores emotional balance.")] },
      ],
    }),
    standardSection({
      id: "relationships", number: 4, title: "EQ in Your Relationships",
      description: ["Emotional intelligence is arguably the single most important factor in relationship satisfaction. Your ability to understand, express, and manage emotions directly determines the quality of your closest connections.", "Your EQ profile reveals how you show up emotionally in relationships and where targeted development can deepen your bonds."],
      strengths: [t("Emotional Attunement", "You can sense your partner's emotional needs."), t("Conflict Navigation", "Your emotional skills help resolve disagreements."), t("Vulnerability", "You can share your feelings authentically."), t("Active Listening", "You make others feel truly heard."), t("Emotional Support", "You provide comfort and validation effectively."), t("Relationship Repair", "You can reconnect after emotional ruptures.")],
      weaknesses: [t("Emotional Flooding", "Intense emotions can overwhelm your coping skills."), t("Projection", "You may attribute your emotions to your partner."), t("Avoidance", "Difficult emotions may be suppressed rather than addressed."), t("Reactivity", "Quick emotional responses can escalate conflicts."), t("Emotional Labor Imbalance", "You may carry more or less emotional load than is healthy."), t("Boundary Confusion", "Distinguishing your emotions from your partner's can be challenging.")],
      lockedSubsections: [
        { title: "Your EQ Relationship Strengths", unlockTeaser: "Get the full report to discover 6 emotional strengths you bring to relationships.", items: [t("Empathetic Presence", "You create emotional safety."), t("Emotional Articulation", "You can name and discuss feelings."), t("Co-Regulation", "You help calm your partner during distress."), t("Emotional Generosity", "You give emotionally with openness."), t("Repair Capacity", "You reconnect after disagreements."), t("Growth Orientation", "You invest in emotional development.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Brené Brown" }, { name: "Daniel Goleman" }, { name: "Dalai Lama" }, { name: "Fred Rogers" }],
});

/* ------------------------------------------------------------------ */
/*  IQ Pro                                                             */
/* ------------------------------------------------------------------ */

export const iqProResultsContent = createGenericResultsContent({
  testId: "iq-pro",
  testName: "IQ Pro Assessment",
  heroColor: "#d97706",
  getTypeName: (scores) => `IQ ${scores.overall ?? "—"}`,
  getTypeCode: (scores) => `Cognitive Score: ${scores.overall ?? "—"}`,
  getDescription: (scores) => [
    `Your cognitive assessment places you at an IQ estimate of ${scores.overall ?? "—"}. This score reflects your performance across logical reasoning, spatial awareness, verbal fluency, and processing speed.`,
    "Remember that IQ measures a specific type of cognitive ability and doesn't capture emotional intelligence, creativity, practical wisdom, or many other forms of intelligence that contribute to success and fulfillment.",
  ],
  getSections: () => [
    standardSection({
      id: "cognitive-profile", number: 2, title: "Your Cognitive Profile",
      description: ["Your cognitive abilities represent one important dimension of your overall intelligence. Understanding your specific strengths helps you choose careers and activities where you'll naturally excel.", "Cognitive abilities can be developed through targeted practice, education, and challenging mental activities throughout life."],
      strengths: [t("Logical Reasoning", "Your ability to identify patterns and solve sequential problems."), t("Spatial Processing", "Your capacity for mental rotation and visual-spatial tasks."), t("Verbal Intelligence", "Your vocabulary, comprehension, and linguistic reasoning."), t("Processing Speed", "How quickly you can take in and respond to information."), t("Working Memory", "Your capacity to hold and manipulate information mentally."), t("Abstract Thinking", "Your ability to understand complex, non-concrete concepts.")],
      weaknesses: [t("Test Anxiety", "Performance may not fully reflect your true capabilities."), t("Cultural Bias", "IQ tests may not capture all forms of intelligence."), t("Practice Effects", "Familiarity with test types can influence scores."), t("Fatigue Impact", "Mental stamina affects performance on timed tests."), t("Narrow Measurement", "Many valuable cognitive skills aren't captured by IQ tests."), t("Motivation Factors", "Engagement level during testing affects results.")],
      influentialTraits: [{ name: "Logic", color: "blue" }, { name: "Spatial", color: "gold" }, { name: "Verbal", color: "green" }, { name: "Speed", color: "purple" }],
      lockedSubsections: [
        { title: "Cognitive Enhancement Strategies", unlockTeaser: "Get the full report to unlock personalized strategies for cognitive development.", items: [t("Brain Training", "Targeted exercises for your specific growth areas."), t("Physical Exercise", "How movement boosts cognitive function."), t("Sleep Optimization", "Maximizing cognitive recovery through sleep."), t("Nutrition", "Foods and supplements that support brain health."), t("Mindfulness", "How meditation improves cognitive flexibility."), t("Social Engagement", "How conversation strengthens mental acuity.")] },
      ],
    }),
    standardSection({
      id: "applications", number: 3, title: "Applying Your Intelligence",
      description: ["Your cognitive profile suggests specific environments and activities where your mental abilities will be most effectively deployed.", "The key is matching your cognitive strengths to challenges that genuinely engage you."],
      strengths: [t("Pattern Recognition", "You spot trends and connections others miss."), t("Problem Decomposition", "You break complex issues into manageable parts."), t("Learning Speed", "You acquire new skills and knowledge efficiently."), t("Strategic Thinking", "You plan and execute multi-step solutions."), t("Critical Analysis", "You evaluate information and arguments rigorously."), t("Innovation Capacity", "You combine existing knowledge in novel ways.")],
      weaknesses: [t("Over-Thinking", "Analysis paralysis can slow practical action."), t("Interpersonal Blind Spots", "Cognitive strength doesn't equal social intelligence."), t("Perfectionism", "High cognitive standards can be paralyzing."), t("Impatience", "You may struggle with those who process more slowly."), t("Emotional Neglect", "Favouring logic over feelings in decision-making."), t("Arrogance Risk", "Cognitive confidence can become intellectual snobbery.")],
      lockedSubsections: [
        { title: "Career Matches for Your Cognitive Profile", unlockTeaser: "Get the full report to unlock career paths matched to your cognitive strengths.", items: [t("Research & Science", "Leveraging analytical and reasoning abilities."), t("Technology", "Applying logical thinking to technical challenges."), t("Strategic Planning", "Using pattern recognition for long-term vision."), t("Creative Problem-Solving", "Combining cognitive domains innovatively."), t("Education & Training", "Sharing your cognitive insights with others."), t("Consulting", "Applying analytical skills across diverse domains.")] },
      ],
    }),
    standardSection({
      id: "growth", number: 4, title: "Cognitive Growth",
      description: ["Contrary to popular belief, cognitive abilities are not fixed. Targeted practice, healthy lifestyle habits, and continuous learning can all contribute to cognitive development throughout life.", "The most effective approach combines mental challenges with physical health and emotional well-being."],
      strengths: [t("Neuroplasticity", "Your brain continues to form new connections throughout life."), t("Self-Directed Learning", "Understanding your profile helps you target development."), t("Challenge Seeking", "Deliberately stretching your abilities builds cognitive resilience."), t("Cross-Domain Transfer", "Skills developed in one area can enhance others."), t("Metacognition", "Understanding how you think improves all cognitive functions."), t("Lifelong Development", "Cognitive growth doesn't stop at any age.")],
      weaknesses: [t("Plateau Risk", "Without new challenges, cognitive abilities can stagnate."), t("Fixed Mindset Trap", "Believing intelligence is fixed limits growth."), t("Neglecting Basics", "Sleep, exercise, and nutrition underpin all cognitive function."), t("Specialization Trap", "Over-focusing on strengths at the expense of breadth."), t("Technology Dependence", "Outsourcing thinking to devices weakens cognitive muscles."), t("Stress Impact", "Chronic stress significantly impairs cognitive function.")],
      lockedSubsections: [
        { title: "Brain Health Recommendations", unlockTeaser: "Get the full report for personalized brain health and cognitive optimization strategies.", items: [t("Exercise Protocol", "Specific exercise types that boost your cognitive profile."), t("Sleep Optimization", "Sleep strategies for cognitive recovery."), t("Nutrition Plan", "Brain-boosting foods and supplements."), t("Mental Challenges", "Activities that target your specific growth areas."), t("Mindfulness Practice", "Meditation approaches for cognitive flexibility."), t("Social Engagement", "How social interaction strengthens mental acuity.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Albert Einstein" }, { name: "Marie Curie" }, { name: "Stephen Hawking" }, { name: "Leonardo da Vinci" }],
});

/* ------------------------------------------------------------------ */
/*  Strengths Finder                                                   */
/* ------------------------------------------------------------------ */

export const strengthsResultsContent = createGenericResultsContent({
  testId: "strengths",
  testName: "Strengths Finder",
  heroColor: "#059669",
  getTypeName: (scores) => scores.typeLabel ?? "Your Signature Strengths",
  getTypeCode: (scores) => scores.typeCode ?? "Strengths Profile",
  getDescription: () => [
    "Your Strengths Finder results reveal the character strengths that come most naturally to you. These signature strengths are the foundation of your best work, deepest relationships, and greatest fulfillment.",
    "Research in positive psychology shows that people who actively use their signature strengths in daily life report higher levels of happiness, engagement, and meaning.",
  ],
  getSections: () => [
    standardSection({
      id: "career-path", number: 2, title: "Strengths at Work",
      description: ["Your signature strengths are most powerful when actively deployed in your career. Finding roles that leverage your top strengths leads to higher engagement, better performance, and greater job satisfaction.", "The key isn't just knowing your strengths — it's intentionally designing your work to use them every day."],
      strengths: [t("Natural Excellence", "Tasks aligned with your strengths feel effortless."), t("Flow States", "You enter deep focus more easily when using your strengths."), t("Authentic Performance", "You're at your best when you can be yourself."), t("Energy Generation", "Using strengths energizes rather than depletes you."), t("Rapid Learning", "You learn fastest in your areas of strength."), t("Distinctive Value", "Your strength combination is unique to you.")],
      weaknesses: [t("Strength Overuse", "Any strength taken to an extreme becomes a weakness."), t("Weakness Blind Spots", "Focusing on strengths may mean ignoring important gaps."), t("Role Mismatch", "Not all jobs let you use your top strengths."), t("Team Imbalance", "A team needs diverse strengths to function well."), t("Complacency", "Natural ability can reduce motivation to improve."), t("Narrow Application", "Using the same strengths in the same way leads to stagnation.")],
      influentialTraits: [{ name: "Excellence", color: "blue" }, { name: "Engagement", color: "gold" }, { name: "Purpose", color: "green" }, { name: "Growth", color: "purple" }],
      lockedSubsections: [
        { title: "Career Paths for Your Strengths", unlockTeaser: "Get the full report to unlock 10 career paths matched to your top strengths.", items: [t("Strength-Aligned Role", "A career that leverages your top 3 strengths daily."), t("Leadership Position", "Leading with your natural strengths."), t("Creative Role", "Expressing your strengths through creative work."), t("Service Role", "Using your strengths to help others."), t("Analytical Role", "Applying your strengths to problem-solving."), t("Entrepreneurial Path", "Building a career around your unique strengths.")] },
      ],
    }),
    standardSection({
      id: "personal-growth", number: 3, title: "Developing Your Strengths",
      description: ["Strength development isn't about fixing weaknesses — it's about taking what's already good and making it exceptional. The most successful people spend most of their growth energy on their top strengths.", "At the same time, managing your lesser strengths ensures they don't become derailers."],
      strengths: [t("Clear Direction", "You know exactly where to invest your development energy."), t("Motivation Advantage", "Developing strengths is inherently enjoyable."), t("Quick Returns", "Investing in strengths yields faster results."), t("Authenticity", "Growing your strengths feels natural, not forced."), t("Compounding Effect", "Strength development builds on itself over time."), t("Transferable Skills", "Strong character strengths apply across all life domains.")],
      weaknesses: [t("Strength Blindness", "You may not notice strengths because they feel effortless."), t("Comparison Trap", "Others' strengths can make yours seem less valuable."), t("Neglecting Basics", "Lower strengths may need attention to prevent problems."), t("Plateau Risk", "Without new challenges, strengths can stagnate."), t("Context Dependence", "Not all environments value the same strengths."), t("Identity Attachment", "Over-identifying with strengths can limit flexibility.")],
      lockedSubsections: [
        { title: "Strength Development Plan", unlockTeaser: "Get the full report for a personalized plan to maximize your signature strengths.", items: [t("Daily Practice", "Small ways to use each top strength every day."), t("Stretch Goals", "Challenging applications that push your strengths further."), t("Weakness Management", "Strategies for your lower strengths."), t("Accountability", "Systems for tracking your strength development."), t("Community", "Finding others who share and complement your strengths."), t("Reflection", "How to monitor and celebrate your progress.")] },
      ],
    }),
    standardSection({
      id: "relationships", number: 4, title: "Strengths in Relationships",
      description: ["Your character strengths shape how you love, connect, and support the people in your life. Understanding which strengths you bring to relationships helps you show up more intentionally.", "The strongest partnerships are those where both people's signature strengths complement each other."],
      strengths: [t("Authentic Connection", "You bring your best self to your relationships."), t("Natural Giving", "Your strengths naturally benefit those around you."), t("Strength Spotting", "You can identify and appreciate others' strengths."), t("Complementary Pairing", "You can find partners whose strengths balance yours."), t("Conflict Resolution", "Your strengths provide tools for navigating disagreements."), t("Mutual Growth", "Sharing strengths knowledge deepens partnership.")],
      weaknesses: [t("Strength Projection", "Expecting partners to share your strengths."), t("Overuse in Relationships", "Applying the same strength to every relationship challenge."), t("Comparison", "Rating your partner's strengths against your own."), t("Neglecting Weaknesses", "Strengths focus may miss important relationship gaps."), t("Rigid Expectations", "Expecting consistent strength-based behaviour from partners."), t("Growth Pressure", "Pushing strength development on unwilling partners.")],
      lockedSubsections: [
        { title: "Your Relationship Strengths", unlockTeaser: "Get the full report to discover how your signature strengths enhance your relationships.", items: [t("Love Language Alignment", "How your strengths connect to how you give and receive love."), t("Conflict Style", "How your strengths influence disagreement resolution."), t("Support Style", "How you naturally show care and support."), t("Growth Catalysis", "How your strengths inspire growth in partners."), t("Communication Enhancement", "How strengths improve your relational communication."), t("Intimacy Building", "How strengths create deeper emotional connection.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Martin Seligman" }, { name: "Angela Duckworth" }, { name: "Brené Brown" }, { name: "Mihaly Csikszentmihalyi" }],
});

/* ------------------------------------------------------------------ */
/*  Stress Response Profile                                            */
/* ------------------------------------------------------------------ */

export const stressProfileResultsContent = createGenericResultsContent({
  testId: "stress-profile",
  testName: "Stress Response Profile",
  heroColor: "#0891b2",
  getTypeName: (scores) => scores.typeLabel ?? "Stress Profile",
  getTypeCode: (scores) => scores.typeCode ?? `Stress Response`,
  getDescription: () => [
    "Your Stress Response Profile reveals your unique patterns of coping with pressure, adversity, and life's challenges. Understanding these patterns is the first step toward building genuine resilience.",
    "Everyone responds to stress differently, and no response style is inherently better or worse. The key is understanding your patterns so you can leverage your natural coping strengths while developing additional strategies.",
  ],
  getSections: () => [
    standardSection({
      id: "stress-at-work", number: 2, title: "Stress at Work",
      description: ["Your stress response patterns directly influence your workplace performance, relationships with colleagues, and career trajectory. Understanding your triggers and coping mechanisms empowers you to manage professional stress proactively.", "The most resilient professionals are those who have developed multiple coping strategies they can deploy based on the specific situation."],
      strengths: [t("Trigger Awareness", "You can identify what activates your stress response."), t("Coping Repertoire", "Your natural coping strategies have specific advantages."), t("Recovery Speed", "You understand what helps you bounce back."), t("Stress Signals", "You recognize early warning signs of burnout."), t("Support Seeking", "You know when and how to ask for help."), t("Boundary Setting", "You can protect your energy in demanding environments.")],
      weaknesses: [t("Default Reactions", "Under extreme stress, you may revert to less helpful patterns."), t("Avoidance Tendencies", "Certain stressors may be avoided rather than addressed."), t("Burnout Vulnerability", "Your specific stress points may lead to chronic depletion."), t("Communication Under Stress", "Pressure can distort how you communicate."), t("Decision Quality", "Stress may impair your judgment in predictable ways."), t("Physical Impact", "Chronic stress affects your body in specific patterns.")],
      influentialTraits: [{ name: "Resilience", color: "blue" }, { name: "Adaptability", color: "gold" }, { name: "Regulation", color: "green" }, { name: "Recovery", color: "purple" }],
      lockedSubsections: [
        { title: "Personalized Coping Toolkit", unlockTeaser: "Get the full report for a customized stress management toolkit based on your profile.", items: [t("Acute Stress Tools", "Techniques for in-the-moment stress relief."), t("Chronic Stress Management", "Long-term strategies for ongoing pressures."), t("Recovery Practices", "How to restore energy after stressful periods."), t("Prevention Strategies", "Building resilience before stress hits."), t("Communication Scripts", "How to express stress-related needs to others."), t("Boundary Templates", "Frameworks for protecting your energy.")] },
      ],
    }),
    standardSection({
      id: "building-resilience", number: 3, title: "Building Resilience",
      description: ["Resilience isn't a fixed trait — it's a set of skills and habits that can be developed over time. Your stress profile reveals exactly where your resilience has room to grow.", "The most resilient people aren't those who don't feel stress. They're those who have built robust systems for processing and recovering from it."],
      strengths: [t("Self-Knowledge", "Understanding your stress patterns is itself a resilience skill."), t("Adaptive Potential", "You can develop new coping strategies at any age."), t("Growth Mindset", "Viewing challenges as growth opportunities builds resilience."), t("Support Networks", "Relationships are a powerful resilience resource."), t("Physical Foundation", "Exercise, sleep, and nutrition support stress recovery."), t("Meaning-Making", "Finding purpose in adversity builds long-term resilience.")],
      weaknesses: [t("Habitual Patterns", "Old coping habits may persist even when they don't serve you."), t("Isolation Under Stress", "Withdrawing when support is most needed."), t("Neglecting Basics", "Stress often undermines the habits that would help most."), t("Emotional Suppression", "Pushing down feelings rather than processing them."), t("Over-Functioning", "Taking on more to feel in control actually increases stress."), t("Comparison", "Judging your resilience against others' perceived strength.")],
      lockedSubsections: [
        { title: "Resilience Development Plan", unlockTeaser: "Get the full report for a personalized resilience-building plan.", items: [t("Daily Practices", "Small habits that build stress resilience over time."), t("Emergency Tools", "Quick techniques for acute stress situations."), t("Recovery Rituals", "Structured approaches to post-stress restoration."), t("Social Support", "How to build and use your support network."), t("Physical Resilience", "Body-based approaches to stress management."), t("Mental Resilience", "Cognitive techniques for reframing stress.")] },
      ],
    }),
    standardSection({
      id: "relationships", number: 4, title: "Stress and Relationships",
      description: ["How you handle stress profoundly impacts your closest relationships. Stress can either drive partners apart or bring them closer together, depending on how it's managed.", "Understanding your stress patterns in relationships helps you communicate your needs and support your partner through their own challenges."],
      strengths: [t("Pattern Awareness", "You understand how stress affects your relationship behaviour."), t("Communication Skills", "You can articulate your stress-related needs."), t("Co-Regulation", "You can help calm your partner during stress."), t("Boundary Respect", "You understand when to give space and when to support."), t("Recovery Support", "You know how to help your partner recover."), t("Stress Bonding", "Shared challenges can strengthen your connection.")],
      weaknesses: [t("Stress Spillover", "Work stress may contaminate your relationship."), t("Withdrawal", "Retreating when your partner needs connection."), t("Reactivity", "Stress can shorten your emotional fuse."), t("Blame Patterns", "Attributing relationship problems to external stress."), t("Neglecting Connection", "Prioritizing stress management over quality time."), t("Co-Dependency Risk", "Managing stress through the relationship rather than within yourself.")],
      lockedSubsections: [
        { title: "Relationship Stress Strategies", unlockTeaser: "Get the full report for strategies to protect your relationships from stress.", items: [t("Communication Under Stress", "How to express needs when overwhelmed."), t("Co-Coping Strategies", "Working together to manage shared stressors."), t("Boundary Setting", "Protecting your relationship from external pressures."), t("Recovery Together", "Shared activities that restore connection."), t("Conflict De-Escalation", "Preventing stress-driven arguments."), t("Support Requesting", "How to ask for help without creating burden.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Viktor Frankl" }, { name: "Sheryl Sandberg" }, { name: "David Goggins" }, { name: "Arianna Huffington" }],
});

/* ------------------------------------------------------------------ */
/*  Attachment Style                                                   */
/* ------------------------------------------------------------------ */

export const attachmentResultsContent = createGenericResultsContent({
  testId: "attachment",
  testName: "Attachment Style",
  heroColor: "#ec4899",
  getTypeName: (scores) => scores.typeLabel ?? "Attachment Style",
  getTypeCode: (scores) => scores.typeCode ?? "Attachment Profile",
  getDescription: (scores) => [
    `Your attachment style assessment reveals how you tend to form emotional bonds, handle intimacy, and respond to relationship challenges. ${scores.typeLabel ? `As someone with a ${scores.typeLabel} tendency` : "Your profile"}, you bring specific patterns to your closest connections.`,
    "Attachment style isn't destiny — it's a starting point for understanding. With awareness and intentional effort, anyone can develop more secure attachment patterns over time.",
  ],
  getSections: () => [
    standardSection({
      id: "attachment-patterns", number: 2, title: "Your Attachment Patterns",
      description: ["Your attachment style shapes how you approach intimacy, handle conflict, and respond to your partner's needs. Understanding these deep patterns is one of the most powerful tools for relationship growth.", "These patterns often developed in early childhood and operate largely outside your conscious awareness — until you bring them into the light through self-examination."],
      strengths: [t("Self-Awareness", "Understanding your attachment style is itself a major strength."), t("Pattern Recognition", "You can identify your habitual relationship responses."), t("Intentional Choice", "Awareness allows you to choose different responses."), t("Compassionate Understanding", "You can understand why you react the way you do."), t("Growth Direction", "You know specifically where development will help most."), t("Empathy for Others", "Understanding attachment helps you understand others' behaviour.")],
      weaknesses: [t("Automatic Activation", "Attachment patterns trigger before conscious thought."), t("Childhood Origins", "Deep-rooted patterns are resistant to change."), t("Relationship Selection", "You may unconsciously choose partners who reinforce patterns."), t("Protest Behaviours", "Anxiety or avoidance can push partners away."), t("Communication Distortion", "Attachment anxiety can warp how you interpret messages."), t("Cycle Reinforcement", "Without intervention, patterns tend to self-perpetuate.")],
      influentialTraits: [{ name: "Security", color: "blue" }, { name: "Trust", color: "gold" }, { name: "Intimacy", color: "green" }, { name: "Independence", color: "purple" }],
      lockedSubsections: [
        { title: "Moving Toward Secure Attachment", unlockTeaser: "Get the full report for a personalized path toward more secure attachment.", items: [t("Self-Soothing Practices", "Techniques for managing attachment anxiety."), t("Communication Scripts", "Words that build security in your relationship."), t("Boundary Setting", "Healthy limits that support secure attachment."), t("Conflict Navigation", "How to disagree without triggering attachment fears."), t("Trust Building", "Gradual steps toward deeper relational trust."), t("Therapy Guidance", "When and how to seek professional support.")] },
      ],
    }),
    standardSection({
      id: "relationships-deep", number: 3, title: "Attachment in Love",
      description: ["Your attachment style is most visible and most impactful in your romantic relationships. It influences everything from who you're attracted to, to how you fight, to how you repair.", "The good news is that healthy relationships themselves are one of the most powerful vehicles for developing more secure attachment."],
      strengths: [t("Deep Capacity for Love", "Your attachment system exists because you're wired for connection."), t("Loyalty", "Attachment creates strong bonds of commitment."), t("Emotional Depth", "You experience love with intensity and meaning."), t("Protective Instincts", "You naturally want to care for those you love."), t("Growth Motivation", "Love motivates you to become a better person."), t("Repair Desire", "When things go wrong, you want to make them right.")],
      weaknesses: [t("Fear of Abandonment", "Anxiety about being left can create self-fulfilling prophecies."), t("Fear of Engulfment", "Intimacy may trigger withdrawal and distancing."), t("Jealousy", "Attachment insecurity can fuel possessiveness."), t("Conflict Avoidance", "Fear of rupture may prevent necessary conversations."), t("Testing Behaviour", "Unconsciously pushing partners to prove their love."), t("Emotional Reactivity", "Small triggers can provoke outsized emotional responses.")],
      lockedSubsections: [
        { title: "Your Attachment Superpowers", unlockTeaser: "Get the full report to discover your unique attachment gifts in love.", items: [t("Connection Depth", "How your style creates uniquely deep bonds."), t("Emotional Intelligence", "The emotional skills your attachment style gives you."), t("Partner Selection", "Understanding who complements your attachment style."), t("Conflict Gifts", "Unexpected strengths in how your style handles disagreements."), t("Intimacy Capacity", "Your unique ability to create closeness."), t("Healing Potential", "How your attachment awareness enables deep healing.")] },
        { title: "Attachment Pitfalls", unlockTeaser: "Get the full report to identify specific patterns that may undermine your relationships.", items: [t("Trigger Map", "Specific situations that activate your attachment system."), t("Protest Behaviours", "Actions you take when attachment fears are activated."), t("Communication Traps", "Habitual ways your style distorts communication."), t("Partner Selection Patterns", "How attachment influences who you choose."), t("Cycle Identification", "Recurring relationship dynamics your style creates."), t("Deactivation Patterns", "How and when you shut down emotionally.")] },
      ],
    }),
    standardSection({
      id: "growth", number: 4, title: "Earned Security",
      description: ["'Earned security' describes the process of developing a secure attachment style through self-awareness, healthy relationships, and intentional growth work. It is entirely achievable regardless of your starting point.", "The journey toward earned security is one of the most rewarding personal development paths you can take."],
      strengths: [t("Awareness Foundation", "You've already taken the crucial first step by understanding your style."), t("Neuroplasticity", "Your brain can form new attachment patterns at any age."), t("Relationship as Vehicle", "Healthy connections actively rewire attachment patterns."), t("Therapeutic Support", "Professional guidance can accelerate attachment healing."), t("Self-Compassion", "Understanding your patterns breeds kindness toward yourself."), t("Generational Impact", "Healing your attachment patterns benefits future relationships.")],
      weaknesses: [t("Patience Required", "Attachment healing is a gradual, non-linear process."), t("Old Patterns Resurface", "Stress can reactivate old attachment behaviours."), t("Partner Cooperation", "Healing works best when both partners are invested."), t("Vulnerability Risk", "The healing process requires emotional openness."), t("Regression Fear", "Progress can feel fragile and reversible."), t("Perfectionism", "Expecting constant security is itself unrealistic.")],
      lockedSubsections: [
        { title: "Your Healing Path", unlockTeaser: "Get the full report for a personalized attachment healing roadmap.", items: [t("Daily Practices", "Small exercises that build attachment security."), t("Relationship Experiments", "Safe ways to stretch your comfort zone."), t("Inner Work", "Self-reflection practices for deep healing."), t("Communication Tools", "Scripts and techniques for expressing attachment needs."), t("Support Resources", "Books, therapies, and communities for attachment growth."), t("Progress Markers", "How to recognize and celebrate your healing.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "John Bowlby" }, { name: "Amir Levine" }, { name: "Sue Johnson" }, { name: "Thích Nhất Hạnh" }],
});

/* ------------------------------------------------------------------ */
/*  Resilience Quotient                                                */
/* ------------------------------------------------------------------ */

export const resilienceResultsContent = createGenericResultsContent({
  testId: "resilience",
  testName: "Resilience Quotient",
  heroColor: "#ea580c",
  getTypeName: (scores) => `RQ ${scores.overall ?? "—"}`,
  getTypeCode: (scores) => `Resilience: ${scores.overall ?? "—"}%`,
  getDescription: (scores) => [
    `Your Resilience Quotient of ${scores.overall ?? "—"}% reflects your current capacity to bounce back from adversity, adapt to change, and maintain well-being under pressure.`,
    "Resilience is a dynamic skill, not a fixed trait. Understanding your current resilience profile across its six domains gives you a clear roadmap for building greater mental toughness.",
  ],
  getSections: () => [
    standardSection({
      id: "resilience-domains", number: 2, title: "Your Resilience Domains",
      description: ["Your resilience is built on six interconnected domains. Strength in some areas can compensate for development needs in others, creating a unique resilience profile.", "The most resilient people have developed capacity across all six domains, not just their natural strengths."],
      strengths: [t("Self-Awareness", "You understand where your resilience is strongest."), t("Growth Areas Identified", "You know exactly where development will have the most impact."), t("Existing Foundations", "Your current resilience levels provide a solid base for growth."), t("Interconnection", "Building one domain strengthens the others."), t("Measurable Progress", "You can track improvements across specific domains."), t("Targeted Development", "You can focus your energy where it matters most.")],
      weaknesses: [t("Domain Imbalance", "Over-reliance on strong domains while neglecting weaker ones."), t("Stress Testing", "Resilience is only tested under genuine adversity."), t("Measurement Limitations", "Self-assessment may not capture resilience under extreme conditions."), t("Overconfidence", "High resilience scores may lead to unnecessary risk-taking."), t("Neglecting Prevention", "Strong resilience shouldn't replace stress avoidance when possible."), t("Comparison", "Everyone's resilience journey is unique.")],
      influentialTraits: [{ name: "Grit", color: "blue" }, { name: "Adaptability", color: "gold" }, { name: "Optimism", color: "green" }, { name: "Support", color: "purple" }],
      lockedSubsections: [
        { title: "Resilience Building Plan", unlockTeaser: "Get the full report for a comprehensive resilience development strategy.", items: [t("Physical Resilience", "Building your body's stress resistance."), t("Emotional Resilience", "Strengthening your emotional coping capacity."), t("Social Resilience", "Developing your support network."), t("Cognitive Resilience", "Building mental flexibility and reframing skills."), t("Spiritual Resilience", "Finding meaning and purpose in adversity."), t("Professional Resilience", "Building career-specific stress management skills.")] },
      ],
    }),
    standardSection({
      id: "daily-resilience", number: 3, title: "Daily Resilience Practices",
      description: ["Resilience isn't built in moments of crisis — it's built in the small daily choices that prepare you for when challenges arise.", "The most effective resilience practices are those you can sustain consistently, not dramatic interventions you do occasionally."],
      strengths: [t("Habit Stacking", "You can attach resilience practices to existing routines."), t("Micro-Practices", "Even 2-minute exercises build meaningful resilience."), t("Compound Effect", "Small daily investments create massive long-term returns."), t("Flexibility", "Practices can be adapted to any schedule or situation."), t("Immediate Benefits", "Many resilience practices feel good in the moment too."), t("Social Reinforcement", "Sharing practices with others amplifies their effect.")],
      weaknesses: [t("Consistency Challenge", "Daily practice requires discipline that fluctuates."), t("Visibility Issue", "Resilience benefits aren't always immediately apparent."), t("Priority Drift", "Resilience practice can slip when life gets busy."), t("One-Size-Fits-None", "Generic advice may not match your specific needs."), t("Motivation Dips", "Without visible results, practice can feel pointless."), t("Perfectionism", "Missing a day can derail the whole habit.")],
      lockedSubsections: [
        { title: "Your Daily Resilience Toolkit", unlockTeaser: "Get the full report for personalized daily practices based on your resilience profile.", items: [t("Morning Routine", "Start your day with resilience-building practices."), t("Midday Reset", "Quick techniques to restore energy and focus."), t("Evening Wind-Down", "Practices that promote recovery and restoration."), t("Stress Interrupts", "In-the-moment tools for acute stress situations."), t("Weekly Practices", "Deeper resilience work for dedicated sessions."), t("Monthly Reviews", "Tracking and celebrating your resilience growth.")] },
      ],
    }),
    standardSection({
      id: "resilience-relationships", number: 4, title: "Resilience in Relationships",
      description: ["Relationships are both a source of stress and one of the most powerful resilience resources available. The quality of your connections profoundly impacts your ability to cope with life's challenges.", "Building resilient relationships — ones that can weather storms together — is one of the most important investments you can make."],
      strengths: [t("Shared Strength", "Partners can provide support during difficult times."), t("Co-Regulation", "Emotionally attuned relationships help regulate stress responses."), t("Perspective", "Partners offer different viewpoints on challenges."), t("Motivation", "Relationships provide reasons to persevere."), t("Practical Support", "Partners can share the burden of difficult situations."), t("Healing Connection", "Relationships can help heal past wounds.")],
      weaknesses: [t("Dependency Risk", "Over-relying on partners for emotional regulation."), t("Stress Contagion", "Your partner's stress becomes your stress."), t("Support Fatigue", "Constantly supporting others depletes your resilience."), t("Conflict Drain", "Relationship conflicts consume resilience resources."), t("Unequal Burden", "When one partner carries more emotional weight."), t("Isolation Instinct", "Stress may trigger withdrawal from the relationship.")],
      lockedSubsections: [
        { title: "Building Resilient Relationships", unlockTeaser: "Get the full report for strategies to build relationships that weather any storm.", items: [t("Communication Under Stress", "How to stay connected when things are hard."), t("Co-Coping Strategies", "Working together to face challenges."), t("Support Balance", "Ensuring both partners give and receive."), t("Repair Skills", "Reconnecting after stress-induced disconnection."), t("Shared Resilience Practices", "Activities you can do together."), t("Professional Support", "When to seek outside help.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Nelson Mandela" }, { name: "Malala Yousafzai" }, { name: "Maya Angelou" }, { name: "Viktor Frankl" }],
});

/* ------------------------------------------------------------------ */
/*  Focus & Flow Profile                                               */
/* ------------------------------------------------------------------ */

export const focusStyleResultsContent = createGenericResultsContent({
  testId: "focus-style",
  testName: "Focus & Flow Profile",
  heroColor: "#4f46e5",
  getTypeName: (scores) => scores.typeLabel ?? "Focus Profile",
  getTypeCode: (scores) => scores.typeCode ?? "Focus & Flow",
  getDescription: () => [
    "Your Focus and Flow Profile reveals your unique conditions for achieving deep work, your distraction patterns, and the environmental factors that help or hinder your concentration.",
    "Understanding your focus profile empowers you to design your environment, schedule, and habits for peak cognitive performance.",
  ],
  getSections: () => [
    standardSection({
      id: "deep-work", number: 2, title: "Your Deep Work Profile",
      description: ["Deep work is the ability to focus without distraction on cognitively demanding tasks. Your profile reveals the specific conditions that unlock your deepest concentration.", "The key to sustained focus isn't willpower — it's designing your environment and routines to support your natural focus patterns."],
      strengths: [t("Self-Knowledge", "You understand when and how you focus best."), t("Environmental Awareness", "You know which settings support your concentration."), t("Trigger Recognition", "You can identify what breaks your focus."), t("Flow Capacity", "You have the ability to enter deep focus states."), t("Recovery Awareness", "You understand your attention recovery patterns."), t("Peak Time Identification", "You know your most productive hours.")],
      weaknesses: [t("Distraction Vulnerability", "You know your specific weak points."), t("Attention Residue", "Switching tasks leaves mental fragments that reduce focus."), t("Environmental Sensitivity", "Your productivity is affected by surroundings."), t("Energy Cycles", "Focus capacity fluctuates throughout the day."), t("Digital Interruptions", "Technology constantly competes for your attention."), t("Context Switching Cost", "Moving between different types of work is costly.")],
      influentialTraits: [{ name: "Concentration", color: "blue" }, { name: "Discipline", color: "gold" }, { name: "Creativity", color: "green" }, { name: "Stamina", color: "purple" }],
      lockedSubsections: [
        { title: "Your Optimal Focus Environment", unlockTeaser: "Get the full report for a personalized deep work environment design guide.", items: [t("Physical Space", "How to set up your workspace for maximum focus."), t("Digital Environment", "Technology settings that support concentration."), t("Time Architecture", "Structuring your day around your focus patterns."), t("Social Environment", "Managing interruptions and collaboration needs."), t("Sensory Optimization", "Sound, light, and temperature for peak focus."), t("Ritual Design", "Focus rituals that signal deep work mode to your brain.")] },
      ],
    }),
    standardSection({
      id: "flow-states", number: 3, title: "Achieving Flow",
      description: ["Flow is the state of complete immersion where you perform at your peak and time seems to disappear. Your profile reveals the specific conditions that trigger flow for you.", "Not everyone achieves flow in the same way. Your path to flow is unique and understanding it can transform your productivity and satisfaction."],
      strengths: [t("Flow Awareness", "You know what flow feels like and can recognize it."), t("Challenge-Skill Balance", "Understanding the sweet spot between difficulty and ability."), t("Intrinsic Motivation", "You're driven by internal satisfaction."), t("Clear Goals", "You can define what success looks like for focused tasks."), t("Immediate Feedback", "You can assess your progress in real-time."), t("Autonomy", "You value control over your work approach.")],
      weaknesses: [t("Flow Fragility", "Flow states are easily broken by interruptions."), t("Addiction Risk", "Flow can become compulsive, leading to overwork."), t("Social Cost", "Deep flow may come at the expense of relationships."), t("Transition Difficulty", "Moving from flow to normal tasks feels jarring."), t("Unrealistic Expectations", "Not every work session can or should involve flow."), t("Recovery Neglect", "Post-flow fatigue may be ignored.")],
      lockedSubsections: [
        { title: "Your Flow Triggers", unlockTeaser: "Get the full report for personalized strategies to enter flow states.", items: [t("Task Design", "How to structure tasks for flow."), t("Environment Setup", "Physical conditions that promote flow."), t("Pre-Flow Ritual", "How to transition into a flow state."), t("Flow Extension", "Techniques for maintaining flow longer."), t("Recovery Protocol", "How to restore energy after deep flow."), t("Flow Tracking", "Monitoring and optimizing your flow patterns.")] },
      ],
    }),
    standardSection({
      id: "productivity", number: 4, title: "Sustainable Productivity",
      description: ["True productivity isn't about working harder — it's about working smarter by aligning your tasks with your natural focus patterns.", "Sustainable productivity balances deep work with recovery, social connection, and creative renewal."],
      strengths: [t("Self-Management", "You can direct your attention intentionally."), t("Priority Clarity", "You understand what deserves your focus."), t("Habit Potential", "You can build routines that automate focus."), t("Energy Awareness", "You know when you're at your best."), t("Tool Utilization", "You can leverage technology for focus support."), t("Boundary Setting", "You can protect your focus time from intrusion.")],
      weaknesses: [t("Burnout Risk", "Sustained high productivity can lead to exhaustion."), t("Guilt Without Productivity", "You may struggle to rest without feeling guilty."), t("Perfectionism", "Quality standards can prevent completion."), t("Comparison", "Others' productivity can make yours feel insufficient."), t("Flexibility Loss", "Rigid systems may not adapt to changing needs."), t("Purpose Disconnection", "Productivity for its own sake loses motivation.")],
      lockedSubsections: [
        { title: "Your Productivity System", unlockTeaser: "Get the full report for a personalized productivity system based on your focus profile.", items: [t("Daily Structure", "How to organize your day around your focus patterns."), t("Task Batching", "Grouping similar tasks for efficiency."), t("Break Protocol", "Optimal rest intervals for sustained performance."), t("Weekly Planning", "Designing your week for peak productivity."), t("Energy Management", "Matching task difficulty to energy levels."), t("Recovery Design", "Ensuring sustainable long-term performance.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Cal Newport" }, { name: "Mihaly Csikszentmihalyi" }, { name: "Tim Ferriss" }, { name: "Marie Kondo" }],
});
