import { createGenericResultsContent, standardSection, t } from "./generic-builder";

/* ------------------------------------------------------------------ */
/*  Western Astrology (Birth Chart)                                    */
/* ------------------------------------------------------------------ */

export const birthChartResultsContent = createGenericResultsContent({
  testId: "birth-chart",
  testName: "Western Astrology",
  heroColor: "#7c3aed",
  getTypeName: (scores) => scores.typeLabel ?? "Your Natal Chart",
  getTypeCode: (scores) => scores.typeCode ?? "Western Astrology",
  getDescription: (scores) => [
    `Your natal chart is a snapshot of the sky at the exact moment you were born, creating a unique cosmic blueprint that influences your personality, relationships, and life path. ${scores.typeLabel ? `As a ${scores.typeLabel}` : "Your chart"} reveals layers of meaning that go far beyond your Sun sign.`,
    "While your Sun sign represents your core identity, your Moon sign reveals your emotional world, and your Rising sign shows how others perceive you. Together with planetary placements and aspects, they create a rich, multidimensional portrait.",
  ],
  getSections: () => [
    standardSection({
      id: "planetary-influences", number: 2, title: "Your Planetary Influences",
      description: ["Each planet in your chart rules different aspects of your life — from how you communicate (Mercury) to how you love (Venus) to how you assert yourself (Mars). Understanding these influences helps you navigate life with cosmic awareness.", "Your planetary placements create a unique energetic signature that shapes your approach to every area of life."],
      strengths: [t("Cosmic Self-Knowledge", "Your chart reveals deep patterns in your personality."), t("Timing Awareness", "Understanding planetary cycles helps you work with natural rhythms."), t("Elemental Balance", "Your chart shows your natural elemental strengths."), t("Modality Insight", "Your cardinal/fixed/mutable balance reveals your approach to change."), t("House Emphasis", "Where planets fall shows which life areas are most active."), t("Aspect Patterns", "Planetary relationships reveal your inner dynamics.")],
      weaknesses: [t("Over-Reliance on Stars", "Astrology informs but shouldn't dictate decisions."), t("Confirmation Bias", "You may see what you expect in your chart."), t("Complexity Overwhelm", "A full chart has many layers to interpret."), t("Fatalistic Thinking", "Planetary influences suggest, not determine."), t("Retrograde Anxiety", "Retrograde periods needn't cause panic."), t("Shadow Denial", "Challenging aspects reveal growth areas, not sentences.")],
      influentialTraits: [{ name: "Sun Sign", color: "gold" }, { name: "Moon Sign", color: "blue" }, { name: "Rising Sign", color: "green" }, { name: "Venus Sign", color: "purple" }],
      lockedSubsections: [
        { title: "Your Complete Planetary Profile", unlockTeaser: "Get the full report for detailed interpretations of all planetary placements.", items: [t("Mercury Placement", "How you think, communicate, and process information."), t("Venus Placement", "Your approach to love, beauty, and values."), t("Mars Placement", "How you assert yourself and pursue goals."), t("Jupiter Placement", "Your path to growth and abundance."), t("Saturn Placement", "Your lessons, responsibilities, and life structure."), t("Outer Planet Influences", "Generational themes and transpersonal growth.")] },
        { title: "Key Aspects in Your Chart", unlockTeaser: "Get the full report to understand the planetary conversations in your chart.", items: [t("Harmonious Aspects", "Trines and sextiles that support your natural flow."), t("Challenging Aspects", "Squares and oppositions that drive growth."), t("Conjunctions", "Planetary mergers that intensify energies."), t("Grand Patterns", "Large-scale configurations that define your life themes.")] },
      ],
    }),
    standardSection({
      id: "life-themes", number: 3, title: "Your Life Themes",
      description: ["Your natal chart reveals recurring themes and lessons that weave through your life. These aren't limitations — they're the curriculum of your soul's growth.", "Understanding your chart's themes helps you make sense of patterns you've noticed and prepares you for the growth opportunities ahead."],
      strengths: [t("Purpose Clarity", "Your chart points toward your life's meaningful direction."), t("Talent Identification", "Natural abilities are highlighted by planetary placements."), t("Cycle Awareness", "Understanding your personal rhythms and seasons."), t("Elemental Gifts", "Your dominant element reveals core strengths."), t("Karmic Understanding", "Nodal axis reveals your soul's growth direction."), t("Timing Wisdom", "Working with transits rather than against them.")],
      weaknesses: [t("Growth Challenges", "Difficult aspects indicate areas requiring development."), t("Habitual Patterns", "Comfort zones that may limit growth."), t("Blind Spots", "Areas of your chart you may resist exploring."), t("Shadow Work Needed", "Parts of yourself that need integration."), t("Resistance Areas", "Where you unconsciously resist change."), t("Projection Tendencies", "Qualities you may project onto others.")],
      lockedSubsections: [
        { title: "Your Karmic Path", unlockTeaser: "Get the full report to understand your North and South Node journey.", items: [t("South Node", "Where you've been — your default comfort zone."), t("North Node", "Where you're headed — your growth direction."), t("Nodal Houses", "Life areas most important for your evolution."), t("Nodal Aspects", "Planets that support or challenge your path."), t("Current Transits", "What the current sky is activating in your chart."), t("Upcoming Influences", "Major planetary events affecting you this year.")] },
      ],
    }),
    standardSection({
      id: "relationships-astro", number: 4, title: "Love and Compatibility",
      description: ["Your chart reveals your love language on a cosmic level — from your Venus sign's approach to romance, to your Moon sign's emotional needs, to your Mars sign's passion style.", "Understanding your astrological love profile helps you attract compatible partners and navigate relationship challenges with cosmic wisdom."],
      strengths: [t("Venus Wisdom", "You understand your unique approach to love and beauty."), t("Emotional Awareness", "Your Moon sign reveals your deepest emotional needs."), t("Passion Insight", "Your Mars sign shows how you pursue what you desire."), t("Compatibility Knowledge", "You can understand elemental and modal harmony."), t("Communication Style", "Mercury placement reveals your dialogue approach."), t("Commitment Style", "Saturn aspects show your approach to lasting bonds.")],
      weaknesses: [t("Venus Challenges", "Your Venus placement may create relationship blind spots."), t("Moon Vulnerabilities", "Emotional patterns that can destabilize partnerships."), t("Mars Conflicts", "How you may unconsciously create friction."), t("Projection Patterns", "7th house dynamics you may project onto partners."), t("Repetitive Patterns", "Relationship cycles your chart tends to create."), t("Idealization Risk", "Neptune influences that may cloud your vision of partners.")],
      lockedSubsections: [
        { title: "Your Cosmic Love Profile", unlockTeaser: "Get the full report for a complete astrological love analysis.", items: [t("Venus in Detail", "Your complete romantic style and preferences."), t("Moon Needs", "What you need to feel emotionally secure."), t("Mars Desires", "Your passion style and physical expression."), t("7th House", "What you seek in a committed partner."), t("Synastry Basics", "Which signs and placements complement yours."), t("Relationship Timing", "When Venus transits activate your love life.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Beyoncé (Virgo)" }, { name: "Leonardo da Vinci (Aries)" }, { name: "Frida Kahlo (Cancer)" }, { name: "David Bowie (Capricorn)" }],
});

/* ------------------------------------------------------------------ */
/*  Vedic Astrology                                                    */
/* ------------------------------------------------------------------ */

export const vedicResultsContent = createGenericResultsContent({
  testId: "vedic",
  testName: "Vedic Astrology",
  heroColor: "#a855f7",
  getTypeName: (scores) => scores.typeLabel ?? "Your Vedic Chart",
  getTypeCode: (scores) => scores.typeCode ?? "Jyotish Profile",
  getDescription: (scores) => [
    `Vedic astrology (Jyotish) uses the sidereal zodiac, which accounts for the precession of equinoxes, providing a different and complementary perspective to Western astrology. ${scores.typeLabel ? `Your Vedic profile as ${scores.typeLabel}` : "Your chart"} reveals karmic patterns and dharmic direction.`,
    "Jyotish is known as the 'science of light' and focuses on timing, karma, and spiritual evolution. Your chart serves as a guide for understanding your life's purpose and navigating its challenges.",
  ],
  getSections: () => [
    standardSection({
      id: "vedic-profile", number: 2, title: "Your Vedic Profile",
      description: ["Your Vedic chart's Lagna (Ascendant), Surya (Sun), and Chandra (Moon) form the foundation of your Jyotish identity. Each reveals different facets of your nature and destiny.", "The Nakshatras (lunar mansions) add an additional layer of meaning, connecting you to specific cosmic energies and qualities."],
      strengths: [t("Dharmic Clarity", "Your chart points toward your life's righteous path."), t("Karma Awareness", "Understanding past patterns helps navigate present choices."), t("Dasha Timing", "Planetary periods reveal natural life chapters."), t("Nakshatra Wisdom", "Your lunar mansion reveals hidden qualities and talents."), t("Remedial Options", "Vedic astrology offers specific practices for challenging periods."), t("Spiritual Guidance", "Your chart connects you to deeper spiritual purpose.")],
      weaknesses: [t("Complexity", "Vedic charts contain many layers requiring expert interpretation."), t("Fatalism Risk", "Karma doesn't mean destiny is fixed."), t("Cultural Context", "Some interpretations may need cultural adaptation."), t("Over-Reliance", "Astrology should complement, not replace, personal judgment."), t("Anxiety Potential", "Knowledge of challenging periods can cause unnecessary worry."), t("Accuracy Depends on Data", "Precise birth time is crucial for accurate charts.")],
      influentialTraits: [{ name: "Lagna", color: "gold" }, { name: "Surya", color: "blue" }, { name: "Chandra", color: "green" }, { name: "Nakshatra", color: "purple" }],
      lockedSubsections: [
        { title: "Your Dasha Periods", unlockTeaser: "Get the full report for a detailed analysis of your planetary periods.", items: [t("Current Dasha", "Which planet is currently ruling your life chapter."), t("Sub-Period", "The specific flavour of your current experience."), t("Upcoming Shifts", "When your next major period begins."), t("Dasha Strengths", "What your current period supports."), t("Dasha Challenges", "What your current period tests."), t("Remedial Practices", "Specific practices for your current period.")] },
      ],
    }),
    standardSection({
      id: "vedic-career", number: 3, title: "Dharma and Career",
      description: ["In Vedic astrology, your 10th house and its lord reveal your professional destiny and public reputation. Your chart indicates not just what you're good at, but what you're meant to do.", "Understanding your dharmic career path helps you align your professional life with your deeper purpose."],
      strengths: [t("Purpose Alignment", "Your chart reveals work that serves your dharma."), t("Natural Talents", "Planetary strengths indicate specific career aptitudes."), t("Timing for Success", "Dasha periods can indicate optimal career moves."), t("Wealth Indicators", "Your 2nd and 11th houses reveal financial potential."), t("Leadership Capacity", "Specific yogas indicate leadership and authority."), t("Service Direction", "How your work can benefit others.")],
      weaknesses: [t("Karmic Obstacles", "Challenging placements indicate career tests."), t("Timing Frustrations", "Success may be delayed by planetary periods."), t("Material vs Spiritual", "Balancing worldly success with spiritual growth."), t("Over-Ambition", "Strong career indicators can lead to workaholism."), t("Misalignment", "Following societal expectations instead of chart guidance."), t("Patience Required", "Some career yogas activate later in life.")],
      lockedSubsections: [
        { title: "Career Yogas in Your Chart", unlockTeaser: "Get the full report to discover specific career combinations in your Vedic chart.", items: [t("Raj Yogas", "Combinations that indicate authority and success."), t("Dhana Yogas", "Wealth-producing combinations in your chart."), t("Profession Indicators", "Specific career fields your chart supports."), t("Timing of Success", "When your career yogas are most likely to activate."), t("Remedies for Obstacles", "Practices to overcome career challenges."), t("Best Directions", "Geographic directions favourable for your career.")] },
      ],
    }),
    standardSection({
      id: "vedic-relationships", number: 4, title: "Love and Partnership",
      description: ["Vedic astrology has a rich tradition of relationship analysis through Kundali matching and the study of the 7th house. Your chart reveals your approach to partnership and the qualities you seek in a mate.", "Understanding your Vedic love profile can help you attract and maintain fulfilling partnerships aligned with your karmic path."],
      strengths: [t("7th House Wisdom", "Your chart reveals what you need in a partner."), t("Venus/Jupiter Analysis", "Benefic planets indicate relationship blessings."), t("Timing for Love", "Specific periods are more favourable for romance."), t("Compatibility Framework", "Kundali matching provides structured compatibility assessment."), t("Karmic Connection", "Understanding why certain relationships feel destined."), t("Growth Through Partnership", "How relationships serve your spiritual evolution.")],
      weaknesses: [t("Doshas", "Specific chart factors that may challenge relationships."), t("Timing Delays", "Love may arrive according to planetary timing, not your wishes."), t("Karmic Repetition", "Relationship patterns that need conscious breaking."), t("Over-Analysis", "Too much analysis can prevent spontaneous connection."), t("Cultural Pressure", "Traditional matching may conflict with personal desires."), t("Fatalistic Attitude", "Believing challenging placements mean relationship failure.")],
      lockedSubsections: [
        { title: "Your Vedic Love Profile", unlockTeaser: "Get the full report for a complete Vedic relationship analysis.", items: [t("7th House Lord", "Your relationship ruler and what it means."), t("Venus Analysis", "Your Vedic Venus placement and relationship style."), t("Marriage Timing", "Periods most favourable for committed partnership."), t("Compatible Signs", "Vedic signs most harmonious with yours."), t("Relationship Karmas", "Past-life patterns affecting current relationships."), t("Remedies for Love", "Practices to enhance your relationship sector.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Mahatma Gandhi" }, { name: "Steve Jobs" }, { name: "Deepak Chopra" }, { name: "Priyanka Chopra" }],
});

/* ------------------------------------------------------------------ */
/*  Human Design                                                       */
/* ------------------------------------------------------------------ */

export const humanDesignResultsContent = createGenericResultsContent({
  testId: "human-design",
  testName: "Human Design",
  heroColor: "#14b8a6",
  getTypeName: (scores) => scores.typeLabel ?? "Your Human Design",
  getTypeCode: (scores) => scores.typeCode ?? "Human Design Profile",
  getDescription: (scores) => [
    `Human Design combines astrology, the I Ching, Kabbalah, and the Hindu-Brahmin chakra system into a unique synthesis. ${scores.typeLabel ? `As a ${scores.typeLabel}` : "Your type"}, you have a specific strategy and authority for making aligned decisions.`,
    "Your Human Design chart (BodyGraph) reveals your energetic blueprint — how you're designed to interact with the world, make decisions, and fulfill your purpose.",
  ],
  getSections: () => [
    standardSection({
      id: "type-strategy", number: 2, title: "Your Type and Strategy",
      description: ["Your Human Design type is the foundation of your chart. It determines your strategy for engaging with the world — how to attract the right opportunities and avoid resistance.", "Living according to your strategy and authority is the single most powerful change you can make. It aligns you with your natural energetic flow."],
      strengths: [t("Clear Strategy", "You have a specific approach to decision-making."), t("Authority Guidance", "Your inner authority helps you make aligned choices."), t("Type Awareness", "Understanding your energy type prevents burnout."), t("Signature Theme", "When aligned, you experience your type's positive signature."), t("Aura Understanding", "You know how your energy affects others."), t("Deconditioning Path", "You can identify and release patterns that aren't truly yours.")],
      weaknesses: [t("Not-Self Theme", "When misaligned, your type's negative theme emerges."), t("Conditioning", "Society may have conditioned you away from your design."), t("Patience Required", "Living your design is a gradual deconditioning process."), t("Social Pressure", "Your strategy may differ from cultural expectations."), t("Misunderstanding", "Others may not understand your approach to life."), t("Oversimplification", "Reducing yourself to just your type misses chart nuances.")],
      influentialTraits: [{ name: "Type", color: "blue" }, { name: "Strategy", color: "gold" }, { name: "Authority", color: "green" }, { name: "Profile", color: "purple" }],
      lockedSubsections: [
        { title: "Living Your Design", unlockTeaser: "Get the full report for a detailed guide to living according to your Human Design.", items: [t("Strategy in Daily Life", "Practical applications of your strategy."), t("Authority Deep Dive", "How to use your specific authority for decisions."), t("Profile Exploration", "Your conscious and unconscious personality themes."), t("Defined Centers", "Your consistent, reliable energies."), t("Open Centers", "Where you're most susceptible to conditioning."), t("Incarnation Cross", "Your life's purpose and direction.")] },
      ],
    }),
    standardSection({
      id: "centers", number: 3, title: "Your Energy Centers",
      description: ["Your BodyGraph contains nine energy centers, each of which can be defined (coloured) or undefined (white). Defined centers represent consistent energy you project; undefined centers are where you absorb and amplify others' energy.", "Understanding your center definition is key to distinguishing your authentic self from conditioned patterns."],
      strengths: [t("Energy Clarity", "You know which energies are consistently yours."), t("Amplification Awareness", "You understand where you amplify others' energy."), t("Conditioning Recognition", "You can identify external influences on your behaviour."), t("Wisdom Potential", "Undefined centers become sources of wisdom over time."), t("Energy Management", "You can protect your energy in challenging environments."), t("Authenticity", "You can distinguish your true self from conditioning.")],
      weaknesses: [t("Conditioning Depth", "Decades of conditioning take time to unravel."), t("Pressure Points", "Undefined centers create vulnerability to specific pressures."), t("Energy Inconsistency", "Open centers fluctuate based on who you're around."), t("Decision Confusion", "Not-self themes from open centers can mislead."), t("People-Pleasing", "Open centers may drive you to prove yourself in those areas."), t("Overwhelm", "Too much amplified energy can be exhausting.")],
      lockedSubsections: [
        { title: "Your Center Analysis", unlockTeaser: "Get the full report for a complete analysis of all nine centers in your chart.", items: [t("Head Center", "Your relationship with inspiration and mental pressure."), t("Ajna Center", "How you process and conceptualize information."), t("Throat Center", "Your communication and manifestation style."), t("G Center", "Your identity, direction, and love."), t("Heart/Will Center", "Your relationship with willpower and value."), t("Sacral/Solar Plexus/Spleen/Root", "Your remaining energy dynamics.")] },
      ],
    }),
    standardSection({
      id: "hd-relationships", number: 4, title: "Relationships by Design",
      description: ["In Human Design, relationships are understood through the interaction of two BodyGraphs. When two people come together, their charts create a composite that can reveal areas of connection, compromise, and growth.", "Understanding your design in relationships helps you honour your needs while appreciating your partner's unique energetic makeup."],
      strengths: [t("Aura Awareness", "You understand how your energy field interacts with others."), t("Strategy in Love", "Your strategy applies to relationships as well as life."), t("Authority in Partnership", "Your decision-making guide works for relationship choices."), t("Electromagnetic Connections", "Specific channels create deep chemistry with compatible people."), t("Compromise Awareness", "You can identify where two charts create tension."), t("Growth Through Connection", "Relationships activate dormant parts of your chart.")],
      weaknesses: [t("Conditioning in Love", "Relationships are the strongest conditioning force."), t("Not-Self Attraction", "You may be drawn to people who amplify your not-self."), t("Strategy Challenges", "Your type's strategy may clash with your partner's."), t("Energy Mismatch", "Different types have different energy rhythms."), t("Communication Differences", "Defined vs undefined throat creates dynamics."), t("Compromise Overwhelm", "Too much compromise energy can feel draining.")],
      lockedSubsections: [
        { title: "Your Relationship Design", unlockTeaser: "Get the full report for a complete relationship analysis based on your Human Design.", items: [t("Your Type in Love", "How your type specifically shows up in romance."), t("Emotional Authority in Relationships", "How to make aligned partnership decisions."), t("Compatible Types", "Which types naturally harmonize with yours."), t("Electromagnetic Potential", "Channels that create powerful connections."), t("Partnership Strategy", "How to navigate dating according to your design."), t("Family Dynamics", "How your design interacts with family members.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Ra Uru Hu" }, { name: "Albert Einstein" }, { name: "Barack Obama" }, { name: "Angelina Jolie" }],
});

/* ------------------------------------------------------------------ */
/*  Life Path (Numerology)                                             */
/* ------------------------------------------------------------------ */

export const lifePathResultsContent = createGenericResultsContent({
  testId: "life-path",
  testName: "Life Path Number",
  heroColor: "#ec4899",
  getTypeName: (scores) => scores.typeLabel ?? `Life Path ${scores.typeCode ?? ""}`,
  getTypeCode: (scores) => `Life Path ${scores.typeCode ?? "Number"}`,
  getDescription: (scores) => [
    `Your Life Path number is derived from your birth date and represents the core themes, lessons, and opportunities of your life journey. ${scores.typeLabel ? `As a ${scores.typeLabel}` : "Your number"} carries specific vibrations that influence your personality, relationships, and destiny.`,
    "In numerology, your Life Path number is the most important number in your chart. It reveals the path you're walking, the challenges you'll face, and the gifts you bring to the world.",
  ],
  getSections: () => [
    standardSection({
      id: "life-purpose", number: 2, title: "Your Life Purpose",
      description: ["Your Life Path number points toward your life's central purpose and the lessons you're here to learn. Understanding this theme helps you make choices that align with your deeper calling.", "People who live in alignment with their Life Path often find that opportunities flow more naturally and challenges become meaningful stepping stones."],
      strengths: [t("Purpose Clarity", "Your number reveals your life's central theme."), t("Natural Gifts", "Specific talents associated with your Life Path."), t("Karmic Direction", "Understanding the lessons you're meant to learn."), t("Timing Insight", "Personal year cycles reveal optimal timing for action."), t("Compatibility Framework", "Understanding which numbers complement yours."), t("Spiritual Connection", "Your number connects you to universal patterns.")],
      weaknesses: [t("Shadow Expression", "Every number has a negative expression to watch for."), t("Karmic Lessons", "Challenges specific to your number that require growth."), t("Over-Identification", "Reducing yourself to a single number misses complexity."), t("Fatalistic Thinking", "Your number suggests themes, not fixed destiny."), t("Comparison", "Envying other numbers rather than embracing yours."), t("Neglecting Free Will", "Numerology guides but doesn't determine.")],
      influentialTraits: [{ name: "Life Path", color: "gold" }, { name: "Expression", color: "blue" }, { name: "Soul Urge", color: "green" }, { name: "Personality", color: "purple" }],
      lockedSubsections: [
        { title: "Your Complete Numerology Profile", unlockTeaser: "Get the full report for a complete numerological analysis beyond your Life Path.", items: [t("Expression Number", "Your outward personality and natural abilities."), t("Soul Urge Number", "Your deepest desires and motivations."), t("Personality Number", "How others perceive you."), t("Personal Year", "The theme and energy of your current year."), t("Pinnacle Numbers", "Major life phases and their themes."), t("Challenge Numbers", "Specific obstacles and growth areas.")] },
      ],
    }),
    standardSection({
      id: "num-career", number: 3, title: "Career and Abundance",
      description: ["Your Life Path number influences your natural career aptitudes, leadership style, and relationship with money and abundance.", "Understanding these patterns helps you make professional choices that feel aligned and attract the prosperity you're designed for."],
      strengths: [t("Natural Aptitudes", "Career areas where your number naturally excels."), t("Leadership Style", "How your number approaches authority and influence."), t("Abundance Mindset", "Your number's relationship with prosperity."), t("Creative Expression", "How your number expresses itself professionally."), t("Service Direction", "How your work serves the greater good."), t("Timing for Success", "Personal year cycles for career moves.")],
      weaknesses: [t("Career Traps", "Common career pitfalls for your number."), t("Money Challenges", "Financial patterns associated with your Life Path."), t("Overwork Tendencies", "How your number may push too hard professionally."), t("Undervaluing", "Ways you may undercharge or underperform."), t("Direction Confusion", "When multiple paths seem equally valid."), t("External Pressure", "Career expectations that don't match your number.")],
      lockedSubsections: [
        { title: "Career Paths by the Numbers", unlockTeaser: "Get the full report for career recommendations based on your numerological profile.", items: [t("Ideal Industries", "Professional fields aligned with your Life Path."), t("Leadership Role", "Your optimal position in organizations."), t("Entrepreneurship", "Your number's entrepreneurial potential."), t("Financial Strategy", "Wealth-building approaches suited to your number."), t("Career Timing", "When to make moves based on personal year cycles."), t("Service and Impact", "How your career can serve your life purpose.")] },
      ],
    }),
    standardSection({
      id: "num-relationships", number: 4, title: "Love by the Numbers",
      description: ["Numerology offers deep insight into relationship compatibility and dynamics. Your Life Path number reveals your approach to love, the partner qualities you're drawn to, and the relationship challenges you'll face.", "Understanding numerological compatibility helps you navigate relationships with greater awareness and intention."],
      strengths: [t("Love Language", "How your number expresses and receives love."), t("Compatibility Insight", "Which numbers complement yours romantically."), t("Communication Style", "Your number's natural dialogue approach."), t("Commitment Pattern", "How your number approaches long-term bonds."), t("Growth in Love", "How relationships help you fulfill your Life Path."), t("Timing for Love", "Personal year cycles favouring romance.")],
      weaknesses: [t("Number Conflicts", "Challenging dynamics with specific numbers."), t("Shadow Patterns", "Negative relationship expressions of your number."), t("Compatibility Myths", "Not all 'incompatible' numbers are doomed."), t("Communication Gaps", "Where your number's style may not land."), t("Commitment Challenges", "Specific obstacles your number faces in long-term love."), t("Karmic Relationships", "Intense connections that serve growth rather than ease.")],
      lockedSubsections: [
        { title: "Your Numerological Love Profile", unlockTeaser: "Get the full report for a complete numerological relationship analysis.", items: [t("Compatible Numbers", "Life Path numbers most harmonious with yours."), t("Challenging Numbers", "Numbers that create friction and growth."), t("Love Cycles", "Personal year themes in your love life."), t("Partnership Dynamics", "How your number functions in committed relationships."), t("Karmic Connections", "Numbers that indicate past-life bonds."), t("Soul Mate Indicators", "Numerological signs of deep connection.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Nikola Tesla (Life Path 1)" }, { name: "Mother Teresa (Life Path 9)" }, { name: "Albert Einstein (Life Path 6)" }, { name: "Princess Diana (Life Path 7)" }],
});

/* ------------------------------------------------------------------ */
/*  Mayan Astrology                                                    */
/* ------------------------------------------------------------------ */

export const mayanResultsContent = createGenericResultsContent({
  testId: "mayan",
  testName: "Mayan Astrology",
  heroColor: "#f97316",
  getTypeName: (scores) => scores.typeLabel ?? "Your Day Sign",
  getTypeCode: (scores) => scores.typeCode ?? "Tzolkin Profile",
  getDescription: (scores) => [
    `The Tzolkin is the sacred 260-day calendar of the ancient Maya, consisting of 20 day signs and 13 numbers. ${scores.typeLabel ? `Your day sign, ${scores.typeLabel}` : "Your Tzolkin sign"}, connects you to specific cosmic energies and archetypes that have guided Mayan civilization for millennia.`,
    "Your Mayan day sign represents your core essence and spiritual mission. It reveals qualities, challenges, and gifts that the Maya believed were imprinted on you at the moment of your birth.",
  ],
  getSections: () => [
    standardSection({
      id: "day-sign", number: 2, title: "Your Day Sign Meaning",
      description: ["Each of the 20 Mayan day signs carries a unique energy and symbolism. Your sign reveals your spiritual gifts, natural tendencies, and the specific medicine you bring to the world.", "The Maya believed that understanding your day sign was essential for living in harmony with the cosmic order."],
      strengths: [t("Spiritual Connection", "Your sign links you to ancient Mayan wisdom."), t("Archetypal Power", "You embody a specific cosmic archetype."), t("Natural Gifts", "Your sign reveals innate talents and abilities."), t("Directional Alignment", "Your sign is associated with a cardinal direction."), t("Elemental Connection", "Your sign connects to a specific natural element."), t("Community Role", "Your sign indicates your role in the greater whole.")],
      weaknesses: [t("Shadow Expression", "Your sign's negative tendencies to watch for."), t("Cultural Distance", "Interpretation requires bridging cultural contexts."), t("Oversimplification", "One sign cannot capture your full complexity."), t("Limited Resources", "Less scholarly material available than for other systems."), t("Modern Application", "Translating ancient wisdom to modern life requires reflection."), t("Spiritual Bypassing", "Using cosmic identity to avoid practical growth work.")],
      influentialTraits: [{ name: "Day Sign", color: "gold" }, { name: "Tone", color: "blue" }, { name: "Direction", color: "green" }, { name: "Element", color: "purple" }],
      lockedSubsections: [
        { title: "Your Complete Tzolkin Profile", unlockTeaser: "Get the full report for your complete Mayan astrological analysis.", items: [t("Galactic Tone", "Your specific number (1-13) and its meaning."), t("Day Sign Deep Dive", "Extended meaning of your day sign."), t("Directional Influence", "How your cardinal direction affects your path."), t("Compatible Signs", "Day signs that harmonize with yours."), t("Shadow Work", "Your sign's specific growth challenges."), t("Ceremony Guidance", "Mayan practices suited to your sign.")] },
      ],
    }),
    standardSection({
      id: "mayan-life", number: 3, title: "Living Your Sign",
      description: ["The Maya viewed the Tzolkin as a living calendar — not just for tracking time, but for understanding the spiritual qualities present each day.", "Learning to live in alignment with your day sign means honouring your gifts, facing your shadows, and contributing your unique medicine to the world."],
      strengths: [t("Daily Guidance", "Your sign provides direction for everyday decisions."), t("Seasonal Awareness", "The Tzolkin cycle creates natural rhythms for living."), t("Purpose Clarity", "Your sign points toward your spiritual mission."), t("Community Connection", "Shared sign understanding deepens relationships."), t("Nature Harmony", "Your sign connects you to the natural world."), t("Ancestral Wisdom", "You tap into thousands of years of spiritual tradition.")],
      weaknesses: [t("Modern Disconnect", "Daily urban life can feel far from Mayan rhythms."), t("Practice Consistency", "Maintaining Tzolkin awareness requires dedication."), t("Cultural Sensitivity", "Engaging respectfully with indigenous wisdom traditions."), t("Information Gaps", "Some traditional knowledge has been lost."), t("Interpretation Challenges", "Different Mayan traditions may offer different interpretations."), t("Integration Work", "Combining Tzolkin wisdom with other spiritual practices.")],
      lockedSubsections: [
        { title: "Daily Practices for Your Sign", unlockTeaser: "Get the full report for daily practices aligned with your Mayan day sign.", items: [t("Morning Practice", "Start your day aligned with your sign's energy."), t("Meditation Focus", "Contemplation themes for your sign."), t("Nature Connection", "How to deepen your elemental relationship."), t("Creative Expression", "Artistic practices suited to your sign."), t("Community Service", "How to share your sign's medicine."), t("Evening Reflection", "Closing practices for your sign.")] },
      ],
    }),
    standardSection({
      id: "mayan-relationships", number: 4, title: "Connections and Compatibility",
      description: ["In Mayan astrology, different day signs create specific dynamics when they interact. Some signs naturally harmonize, others create creative tension, and some offer powerful opportunities for mutual growth.", "Understanding these dynamics helps you navigate all your relationships with greater cosmic awareness."],
      strengths: [t("Sign Harmony", "Knowing which signs naturally complement yours."), t("Growth Partnerships", "Understanding which signs challenge you to grow."), t("Communication Insight", "How different signs prefer to connect."), t("Conflict Navigation", "Understanding the cosmic basis for disagreements."), t("Soul Connections", "Recognizing deep karmic bonds through sign interaction."), t("Community Building", "Creating balanced groups with diverse sign energies.")],
      weaknesses: [t("Sign Prejudice", "Judging people by their sign rather than character."), t("Compatibility Rigidity", "Assuming some signs can't work together."), t("Over-Analysis", "Analysing signs when direct communication would serve better."), t("Generalization", "Every person with your sign expresses it differently."), t("Missing Nuance", "Sign compatibility is one factor among many."), t("Destiny Assumption", "Believing signs determine relationship outcomes.")],
      lockedSubsections: [
        { title: "Your Sign Compatibility", unlockTeaser: "Get the full report for a detailed compatibility analysis with all 20 day signs.", items: [t("Harmonious Signs", "Day signs that naturally resonate with yours."), t("Growth Signs", "Signs that push you to evolve."), t("Challenge Signs", "Signs that create friction for learning."), t("Soul Group", "Signs connected to your cosmic family."), t("Romantic Compatibility", "Best romantic matches by day sign."), t("Friendship Dynamics", "How different signs show up in platonic relationships.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Frida Kahlo" }, { name: "Rigoberta Menchú" }, { name: "Carlos Santana" }, { name: "Salma Hayek" }],
});

/* ------------------------------------------------------------------ */
/*  Chinese Zodiac                                                     */
/* ------------------------------------------------------------------ */

export const chineseZodiacResultsContent = createGenericResultsContent({
  testId: "chinese-zodiac",
  testName: "Chinese Zodiac",
  heroColor: "#dc2626",
  getTypeName: (scores) => scores.typeLabel ?? "Your Animal Sign",
  getTypeCode: (scores) => scores.typeCode ?? "Chinese Zodiac",
  getDescription: (scores) => [
    `The Chinese zodiac assigns one of 12 animals to each birth year in a repeating cycle. ${scores.typeLabel ? `As a ${scores.typeLabel}` : "Your animal sign"}, you carry the characteristics, strengths, and challenges associated with your animal's energy.`,
    "Beyond your animal sign, Chinese astrology considers your element (Wood, Fire, Earth, Metal, Water), creating 60 unique combinations that provide rich, nuanced personality insights.",
  ],
  getSections: () => [
    standardSection({
      id: "animal-traits", number: 2, title: "Your Animal Sign",
      description: ["Your Chinese zodiac animal represents fundamental character traits that shape your personality, relationships, and approach to life. Each animal carries both celebrated strengths and notable challenges.", "Chinese wisdom teaches that understanding your animal's nature is the first step toward living in harmony with yourself and others."],
      strengths: [t("Natural Characteristics", "Your animal's core positive traits."), t("Elemental Influence", "How your element shapes your expression."), t("Compatibility Knowledge", "Understanding which animals harmonize with yours."), t("Cultural Wisdom", "Access to thousands of years of Chinese astrological insight."), t("Seasonal Alignment", "Your animal connects to a specific time of year."), t("Yin/Yang Balance", "Understanding your energy polarity.")],
      weaknesses: [t("Shadow Traits", "Your animal's challenging characteristics."), t("Clash Animals", "Signs that create natural friction."), t("Cultural Context", "Some interpretations need modern adaptation."), t("Generalization", "Everyone born in your year shares your sign but not your life."), t("Element Complexity", "Your specific element combination adds layers to interpret."), t("Year vs Hour", "Your hour of birth assigns a secondary animal that may differ.")],
      influentialTraits: [{ name: "Animal", color: "gold" }, { name: "Element", color: "blue" }, { name: "Yin/Yang", color: "green" }, { name: "Season", color: "purple" }],
      lockedSubsections: [
        { title: "Your Complete Chinese Zodiac Profile", unlockTeaser: "Get the full report for your complete Chinese astrological analysis.", items: [t("Element Deep Dive", "How your specific element shapes your personality."), t("Yin/Yang Balance", "Your energy polarity and its implications."), t("Inner Animal", "Your secret self based on birth month."), t("True Animal", "Your public self based on birth hour."), t("Compatible Animals", "Your most harmonious zodiac partners."), t("Clash Animals", "Signs to navigate carefully.")] },
      ],
    }),
    standardSection({
      id: "chinese-career", number: 3, title: "Career and Fortune",
      description: ["Chinese astrology has a rich tradition of career guidance and fortune reading. Your animal sign and element combination reveal your natural professional aptitudes and your relationship with wealth.", "Understanding these patterns helps you make career choices that align with your cosmic blueprint."],
      strengths: [t("Natural Aptitudes", "Career areas where your animal naturally excels."), t("Fortune Patterns", "Your sign's relationship with wealth and abundance."), t("Timing Wisdom", "Understanding favorable years for career moves."), t("Leadership Style", "How your animal approaches authority."), t("Networking Gifts", "Your sign's social and professional strengths."), t("Element Enhancement", "How your element boosts professional abilities.")],
      weaknesses: [t("Career Traps", "Professional pitfalls common to your sign."), t("Financial Challenges", "Money patterns to watch for."), t("Timing Obstacles", "Years that may present professional challenges."), t("Overwork", "How your animal may push too hard."), t("Conflict Patterns", "Professional relationship dynamics to manage."), t("Element Imbalance", "When your elemental energy is out of alignment.")],
      lockedSubsections: [
        { title: "Fortune and Career Guide", unlockTeaser: "Get the full report for detailed career and fortune analysis for your sign.", items: [t("Best Career Fields", "Industries aligned with your animal energy."), t("Wealth Strategy", "Financial approaches suited to your sign."), t("Lucky Numbers", "Numbers that resonate with your zodiac energy."), t("Favorable Directions", "Geographic and office orientations for success."), t("Annual Forecast", "What the current year holds for your sign."), t("Business Partnerships", "Ideal zodiac signs for professional collaboration.")] },
      ],
    }),
    standardSection({
      id: "chinese-relationships", number: 4, title: "Love Compatibility",
      description: ["Chinese zodiac compatibility is one of the most well-known aspects of Chinese astrology. The interactions between animal signs create predictable dynamics of harmony, tension, and growth.", "Understanding these animal dynamics helps you navigate relationships with greater awareness and appreciation for natural differences."],
      strengths: [t("Animal Harmony", "Knowing which signs naturally attract yours."), t("Triangle Groups", "Your compatibility group of three harmonious animals."), t("Seasonal Connection", "How your seasonal affinity affects relationships."), t("Elemental Matching", "How element compatibility enhances connections."), t("Communication Insight", "Understanding how different animals communicate."), t("Long-Term Patterns", "Predicting relationship dynamics over the 12-year cycle.")],
      weaknesses: [t("Clash Animals", "Your directly opposing zodiac sign."), t("Harm Relationships", "Subtle friction with specific signs."), t("Punishment Dynamics", "Complex three-way sign interactions."), t("Oversimplification", "Zodiac is one factor in relationship success."), t("Prejudice Risk", "Dismissing potential partners based solely on sign."), t("Cycle Challenges", "Certain years may test relationships with specific signs.")],
      lockedSubsections: [
        { title: "Your Love Compatibility Chart", unlockTeaser: "Get the full report for detailed compatibility analysis with all 12 animal signs.", items: [t("Best Matches", "Your most compatible animal partners."), t("Good Matches", "Animals that create pleasant, easy dynamics."), t("Growth Matches", "Animals that challenge you to evolve."), t("Challenge Matches", "Animals that require extra effort to harmonize."), t("Secret Friend", "Your special one-on-one zodiac connection."), t("Clash Animal", "Your opposing sign and how to navigate it.")] },
      ],
    }),
  ],
  famousPeople: [{ name: "Jackie Chan (Horse)" }, { name: "Bruce Lee (Dragon)" }, { name: "Confucius (Dog)" }, { name: "Jet Li (Tiger)" }],
});
