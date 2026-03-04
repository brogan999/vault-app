import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "aquarius";

export const AQUARIUS: ZodiacSignContent = {
  sign: "Aquarius",
  name: "The Visionary",
  shortName: "The Water Bearer",
  tagline: "Born to innovate — you pour the future into the present and see what others cannot yet imagine",
  color: "#328181",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Air",
  modality: "Fixed",
  rulingPlanet: "Uranus / Saturn",
  symbol: "♒",

  sunOverview: `Aquarius Sun enters the zodiac in the heart of winter — the season when the old year dies and the new one stirs beneath the frost. Yours is the energy of the visionary: innovative, humanitarian, and perpetually oriented toward what could be. You don't simply accept the world as it is; you imagine it as it might become, and you pour that future into the present like water from an ancient urn.

Uranus, your modern ruler, grants you sudden insight, rebellious clarity, and the courage to break from convention. Saturn, your traditional ruler, grounds that lightning in structure and endurance. You're at your best when you're inventing, advocating, or connecting people to ideas larger than themselves. Conformity feels like suffocation to you; you need freedom, progress, and the thrill of the unconventional.

At your core, you carry the fixed air archetype — the water bearer whose presence awakens minds and stirs collective possibility. You inspire not through emotion but through vision, originality, and the quiet conviction that another world is not only possible but already emerging.`,

  moonOverview: `An Aquarius Moon processes emotions through detachment and idealism. Where others might cling to personal feeling, you instinctively zoom out — seeking patterns, principles, and the universal thread that connects individual experience to the collective. Emotional intensity can feel overwhelming; you process by analyzing, sharing with your chosen tribe, or channeling feeling into causes larger than yourself.

This placement gives you emotional objectivity and a tendency to intellectualize when things get raw. You recover from heartbreak by connecting to purpose, community, or the certainty that you're part of something bigger. Your challenge is learning to honor the personal, the intimate, and the messy — sometimes the most revolutionary act is to feel fully, without distance.`,

  risingOverview: `With Aquarius Rising, the world sees you as unique, forward-thinking, and slightly otherworldly — someone who seems to operate on a different frequency than the mainstream. Your first impression is one of originality and detachment, a person who observes the crowd with curiosity rather than craving its approval.

This ascendant gives you an unconventional presence — perhaps an unusual style, an unexpected manner, or a quality that marks you as different. You approach new situations through the lens of possibility — what's new here, what could change, who else might benefit? People sense your independence immediately; you're friendly but not easily absorbed.`,

  coreEnergies: [
    { name: "Innovation & Vision", score: 96, description: "Fixed air at its peak — you see the future before it arrives and pour it into form" },
    { name: "Humanitarian Drive", score: 93, description: "Uranus-ruled capacity to care for the collective and work toward a better world" },
    { name: "Independence & Originality", score: 94, description: "A natural resistance to convention — you think and live outside the box" },
    { name: "Intellectual Detachment", score: 88, description: "The ability to observe clearly by maintaining perspective — even when the stakes are personal" },
    { name: "Future Orientation", score: 91, description: "An instinctive pull toward progress, novelty, and what has not yet been tried" },
  ],

  strengths: [
    {
      title: "Visionary Thinker",
      description: "You possess the rare ability to perceive patterns and possibilities that others miss. Where most see the present, you see the trajectory — the next iteration, the breakthrough waiting to happen. Your mind works in leaps rather than steps, and your ideas often arrive fully formed.",
      deepDive: "Your visionary gift isn't mere daydreaming — it's a genuine capacity to hold multiple futures in mind and sense which one wants to emerge. Uranus grants sudden clarity; Saturn gives you the discipline to build what you see. The key is learning to ground your visions — the most evolved Aquarians know that the future must be built in the present, one practical step at a time. Your challenge is patience when others can't yet see what seems obvious to you.",
    },
    {
      title: "Champion of the Collective",
      description: "You care about humanity as a whole — not in the abstract, but in the lived reality of communities, movements, and systems. You're drawn to causes that serve the many, and you'll fight for fairness, progress, and the rights of those who've been left behind.",
      deepDive: "Aquarius's humanitarian impulse comes from fixed air — the need to connect ideas to collective benefit. You understand that individual liberation is bound up with collective liberation. Your growth edge is balancing the big picture with the personal — sometimes the most revolutionary work happens in one relationship, one act of kindness, one moment of presence. The water bearer pours for all; the evolved Aquarius knows when to pour for one.",
    },
    {
      title: "Unconventional Pioneer",
      description: "You don't follow the path — you make it. Your independence isn't rebellion for its own sake; it's the natural expression of a mind that sees alternatives where others see only the given. You're willing to be the first, the different, the one who breaks the mold.",
      deepDive: "Your pioneering spirit is both gift and challenge. It frees you from the tyranny of 'how things are done' — but it can also isolate you when others can't or won't follow. The evolved Aquarius learns to bridge: to translate their vision into language others understand, to build alliances without sacrificing originality, and to recognize that sometimes the most radical act is to meet people where they are.",
    },
  ],

  growthEdges: [
    {
      title: "Emotional Intimacy & Vulnerability",
      teaser: "Your greatest challenge is allowing yourself to need and be needed on a personal level.",
      fullExplanation: "As the sign of the collective, you excel at connection in the abstract — causes, ideas, communities. But one-on-one intimacy can feel threatening to your need for independence. You may keep partners at arm's length, intellectualize feelings, or prioritize the group over the individual relationship. True mastery for Aquarius lies not only in serving humanity but in learning to be fully present, vulnerable, and committed in the intimate sphere — discovering that the deepest revolution sometimes happens between two people.",
      premiumHook: "Unlock your personalized intimacy framework with strategies tailored to your Venus and Moon placements.",
    },
    {
      title: "Patience With the Pace of Change",
      teaser: "Your vision can outrun others' readiness — and your impatience can create distance.",
      fullExplanation: "You see the future clearly, and it can be frustrating when the world — or the people you love — move slowly. You may dismiss those who don't 'get it,' withdraw when progress stalls, or become cynical about humanity's capacity for change. The Aquarius growth path includes learning that transformation happens at many speeds, that meeting people where they are is not compromise but strategy, and that the water bearer's job is to pour — not to control when or how the seeds will grow.",
      premiumHook: "Discover how your Saturn and Uranus placements shape your change-making style and receive custom pacing strategies.",
    },
    {
      title: "Grounding Vision in the Body",
      teaser: "Your air-dominant nature can leave you floating — disconnected from the physical and the present.",
      fullExplanation: "Aquarius lives in the mind and the future. You may neglect your body, dismiss earthy pleasures, or feel ungrounded when life demands presence in the here and now. The evolved Aquarius learns that the most radical visions are built by people who are embodied — who can feel, rest, and root. Your gift is seeing beyond; your evolution is learning to land, to inhabit the moment, and to let the body teach you what the mind cannot.",
      premiumHook: "Your premium report maps your earth placements to reveal grounding practices tailored to your chart.",
    },
  ],

  relationships: `In relationships, Aquarius brings intellectual connection, freedom-loving partnership, and a genuine commitment to growth — both individual and shared. You love unconventionally — you need space, mental stimulation, and a partner who respects your need to belong to something larger than the two of you. You're not possessive; you're devoted in your own way — through loyalty to the bond's evolution, through shared ideals, and through the freedom you grant each other.

Your love language is innovation — you show care through surprising gestures, stimulating conversation, and supporting your partner's uniqueness. You struggle with the mundane, the repetitive, or demands for constant emotional availability. What you're learning is that the deepest partnerships include both the extraordinary and the ordinary — that sometimes love is shown in the daily, the physical, the unglamorous.

The Aquarius partner at their best is loyal, stimulating, and capable of a love that evolves. At your growing edge, you're discovering that the most revolutionary relationship is one where both people can be fully seen — including the parts that need, that cling, and that don't need to be original to be real.`,

  compatibilityNotes: {
    Gemini: "Air meets air — intellectual rapport, endless conversation, and mutual appreciation for novelty. Both value ideas and connection; the challenge is sustaining emotional depth.",
    Libra: "Fellow air sign with shared ideals. Libra brings harmony and aesthetics; Aquarius brings innovation. Together you can envision and build a more beautiful world.",
    Leo: "Your zodiac opposite — magnetic attraction with built-in tension. Leo teaches you warmth and presence; you teach Leo detachment and vision. Passionate when aligned, combative when not.",
    Sagittarius: "Fire and air create expansion and adventure. Sagittarius's philosophical bent meets your humanitarian drive; both value freedom and the big picture.",
    Aries: "Cardinal fire meets fixed air — Aries initiates, you envision. Both are pioneers; together you can spark real change. The challenge is balancing Aries's need for action with your need for reflection.",
  },

  careerPaths: `Aquarius thrives in careers that reward innovation, humanitarian purpose, and the ability to work with systems and communities. You're naturally drawn to roles where you can invent, advocate, or connect — technology, social justice, science, design, education, and any field that serves the collective.

You excel as innovators, activists, researchers, designers, community organizers, and any role that requires seeing beyond the status quo. You're also effective in tech, sustainability, and the arts — anywhere your Uranus-ruled vision can find expression.

The careers that drain you are those requiring rigid hierarchy, mindless repetition, or indifference to the bigger picture. You need autonomy, purpose, and the sense that your work contributes to progress — for yourself and for others.`,

  workStyle: `You work best in environments that value ideas, allow independence, and offer room to innovate. You're the colleague who questions assumptions, proposes alternatives, and connects projects to larger purpose. You may need support for routine tasks, emotional labor, and the patience required when change moves slowly. You prefer flexible structures, collaborative teams, and recognition for your contributions to the future — not just the present.`,

  spiritualTheme: `Your spiritual journey is one of conscious evolution — learning to serve the collective without losing yourself, to hold vision without abandoning the present, and to pour the future into form without attachment to how it's received. The Aquarius soul lesson is that the water bearer serves all beings; the greatest innovation is the one that liberates. You're here to learn that independence and connection can coexist — that the most radical act may be to love fully, personally, and without the safety of distance.`,

  lifeLessons: [
    "The future is built in the present — one grounded step at a time",
    "Intimacy is not the opposite of freedom",
    "Patience with others is a form of respect",
    "The body is not the enemy of the mind",
    "The collective is made of individuals — each one matters",
  ],

  toolkit: [
    {
      title: "The Personal Check-In",
      context: "When you've been living in ideas, causes, or the future and feel disconnected",
      action: "Pause. Ask: 'What do I feel in my body right now? What does one person I love need from me?' Spend 10 minutes attending to the physical and the intimate. Aquarius's evolution includes landing in the personal.",
    },
    {
      title: "The Pace of Change Reflection",
      context: "When you're frustrated that others aren't moving as fast as your vision",
      action: "Write down one way you've changed slowly — a belief you held for years, a habit you took time to shift. Remember that transformation has its own timing. Extend that grace to others.",
    },
    {
      title: "The Grounding Ritual",
      context: "When you feel unrooted, scattered, or floating in abstraction",
      action: "Walk barefoot if possible, or press your feet firmly into the floor. Breathe into your belly. Name three physical sensations. Aquarius soars; the evolved water bearer knows when to land.",
    },
  ],

  descriptionInsight: "Aquarius is the zodiac's visionary — fixed air that pours the future into the present and sees what others cannot yet imagine. As the Water Bearer, you carry the energy of winter's turning: innovative, humanitarian, and perpetually oriented toward progress. Your Uranus-ruled nature drives you to break convention, serve the collective, and build a world that has not yet arrived — one radical idea at a time.",
};
