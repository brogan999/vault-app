import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "sagittarius";

export const SAGITTARIUS: ZodiacSignContent = {
  sign: "Sagittarius",
  name: "The Explorer",
  shortName: "The Archer",
  tagline: "Born to seek — you chase truth across horizons and return with wisdom for the world",
  color: "#876E00",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Fire",
  modality: "Mutable",
  rulingPlanet: "Jupiter",
  symbol: "♐",

  sunOverview: `Sagittarius Sun enters the zodiac as the year turns toward winter — the season when the harvest is gathered and the soul turns inward toward meaning. Yours is the energy of the seeker: expansive, philosophical, and perpetually drawn toward the horizon. You don't settle for surface truths; you chase the big questions — why we're here, what matters, and how to live a life that means something.

Jupiter, your planetary ruler, grants you optimism, generosity, and an insatiable hunger for experience. You're at your best when you're learning, teaching, traveling, or wrestling with ideas that stretch the mind. Confinement — whether physical, intellectual, or spiritual — feels like death to you; you need room to roam, to question, and to grow.

At your core, you carry the mutable fire archetype — the philosopher whose flame spreads through curiosity and conviction. You inspire not through authority but through the infectious quality of your wonder, the courage of your questions, and the generosity with which you share what you've discovered.`,

  moonOverview: `A Sagittarius Moon processes emotions through meaning and movement. Where others might dwell in feeling, you instinctively need to understand, reframe, or transcend — to find the lesson, the silver lining, or the broader perspective. Emotional claustrophobia is intolerable; you process by expanding your view.

This placement gives you an optimistic emotional baseline and a tendency to look forward rather than back. You recover from heartbreak by seeking new horizons — literal or philosophical. Your challenge is learning to sit with difficult feelings before rushing to reframe them; sometimes the deepest wisdom comes from simply feeling.`,

  risingOverview: `With Sagittarius Rising, the world sees you as open, enthusiastic, and larger than life — someone who radiates possibility and seems to have just returned from somewhere fascinating. Your first impression is one of warmth and curiosity, a person who makes others feel that adventure is always within reach.

This ascendant gives you an athletic or expansive presence and a laugh that carries. You approach new situations with optimism and a readiness to learn. People sense your freedom-loving nature immediately — and your tendency to speak your truth without filter.`,

  coreEnergies: [
    { name: "Philosophical Depth", score: 94, description: "Mutable fire at its peak — you chase meaning across disciplines and return with wisdom that connects the dots" },
    { name: "Adventurous Spirit", score: 96, description: "Jupiter-ruled restlessness that drives you toward new horizons, both literal and intellectual" },
    { name: "Optimism & Faith", score: 92, description: "A deep trust in life's expansiveness — you believe in growth, possibility, and the goodness of the journey" },
    { name: "Truth-Seeking", score: 93, description: "An insatiable need to find what's real — you question dogma and chase authenticity wherever it leads" },
    { name: "Freedom & Independence", score: 90, description: "A non-negotiable need for space to explore, think, and move without constraint" },
  ],

  strengths: [
    {
      title: "Natural Philosopher",
      description: "You possess the rare ability to connect disparate ideas into coherent meaning. Where others see fragments, you see patterns — and you're driven to share what you've found. Your questions open doors for others; your enthusiasm for truth is contagious.",
      deepDive: "Your philosophical gift isn't abstraction — it's a genuine hunger for what's real. Jupiter expands whatever it touches, and in Sagittarius that expansion moves toward wisdom. You're at your best when you're learning, teaching, or traveling between worlds of thought. The key is learning to ground your insights — the most evolved Sagittarians know that the greatest truths are those that can be lived, not just contemplated.",
    },
    {
      title: "Infectious Optimism",
      description: "You carry a natural faith in life's possibilities. Even in difficulty, you tend to find the silver lining, the lesson, or the reason to keep going. This isn't naivety — it's a choice to orient toward hope, and it lifts everyone around you.",
      deepDive: "Sagittarius optimism is a spiritual practice — you understand that perspective shapes reality. Your challenge is ensuring that your positivity doesn't become avoidance — that you can sit with darkness when it's present without rushing to reframe it. The most evolved Archers know that true faith includes the capacity to witness suffering without turning away.",
    },
    {
      title: "Freedom as a Gift",
      description: "You model what it means to live unconstrained — to follow curiosity, to question authority, to refuse the small life. Your very presence gives others permission to dream bigger and move beyond what they thought was possible.",
      deepDive: "Your relationship with freedom isn't escapism — it's a recognition that the soul needs room to grow. You understand that confinement kills spirit. Your growth edge is learning that commitment and freedom can coexist — that the deepest bonds are those that liberate rather than limit. The Archer at their best shows that the greatest adventure can be shared.",
    },
  ],

  growthEdges: [
    {
      title: "Grounding the Vision",
      teaser: "Your greatest challenge is turning insight into sustained action.",
      fullExplanation: "As the sign of the seeker, you excel at finding truth but can struggle with the mundane work of embodying it. You may accumulate knowledge without application, chase new horizons while neglecting what you've already built, or inspire others without following through on your own promises. True mastery for Sagittarius lies not in the next quest but in the discipline of depth — learning that some wisdom is earned only through staying put.",
      premiumHook: "Unlock your personalized grounding framework with strategies tailored to your Jupiter placement and house.",
    },
    {
      title: "Tact & Timing",
      teaser: "Your commitment to truth can override your sensitivity to context.",
      fullExplanation: "Honesty is your superpower, but it can land as bluntness when delivered without consideration for the listener. You may speak your mind when silence would serve, or share hard truths before others are ready to hear them. The Sagittarius growth path includes learning that wisdom isn't just what you say — it's when, how, and to whom. The most profound truths sometimes need to be earned by the receiver.",
      premiumHook: "Discover how your Mercury and Venus placements shape your communication style and receive custom delivery strategies.",
    },
    {
      title: "Depth Over Breadth",
      teaser: "Your hunger for experience can scatter your energy across too many pursuits.",
      fullExplanation: "Jupiter expands, and in Sagittarius that expansion can become diffusion. You may start many projects, collect many interests, and struggle to go deep in any single direction. The evolved Archer learns that the richest discoveries come from sustained focus — that sometimes the greatest adventure is the one that requires years of commitment. Breadth teaches; depth transforms.",
      premiumHook: "Your premium report maps your Jupiter aspects to reveal your expansion patterns and focus strategies.",
    },
  ],

  relationships: `In relationships, Sagittarius brings enthusiasm, honesty, and a spirit of adventure. You love with your whole being — when you're in, you're fully present, curious, and eager to explore life alongside your partner. You need someone who can match your intellectual energy, respect your need for freedom, and share your appetite for experience.

Your love language is adventure — you show care through shared journeys, philosophical conversations, and the gift of your optimism. You struggle with the mundane maintenance of intimacy; routine can feel like a cage. What you're learning is that the deepest bonds are built not only in the peaks of excitement but in the quiet ordinary moments — and that freedom within commitment is the most mature form of love.

The Sagittarius partner at their best is devoted, inspiring, and capable of making life feel like an endless discovery. At your growing edge, you're discovering that the greatest journey can be the one you take with someone who chooses to walk beside you — not ahead or behind.`,

  compatibilityNotes: {
    Aries: "Fire meets fire — mutual enthusiasm, shared love of adventure, and a partnership that feels like a perpetual quest. Both value independence and excitement; the challenge is sustaining depth amid the thrill.",
    Leo: "A warm, expansive pairing. Leo's dramatic flair meets your philosophical fire; both appreciate grand gestures and the joy of being alive. Mutual admiration and creative energy when aligned.",
    Gemini: "Your zodiac opposite — magnetic attraction with built-in tension. Gemini teaches you nuance; you teach Gemini scope. Intellectual chemistry is electric; the challenge is grounding the connection.",
    Aquarius: "Fellow truth-seeker with shared ideals. Aquarius brings innovation; Sagittarius brings wisdom. Together you can envision and build a more expansive world — if you navigate Aquarius's need for detachment.",
    Libra: "Air and fire create warmth and intellectual exchange. Libra's diplomacy softens your bluntness; your optimism lifts Libra's indecision. Both value fairness and beauty — the challenge is Libra's need for harmony versus your need for honesty.",
  },

  careerPaths: `Sagittarius thrives in careers that reward curiosity, teaching, and the pursuit of meaning. You're naturally drawn to roles where you can learn, share wisdom, or move across boundaries — environments where growth and expansion are valued.

You excel as teachers, professors, philosophers, travel writers, spiritual guides, publishers, lawyers, and any role that requires synthesizing information and communicating it with conviction. You're also effective in international work, higher education, and fields that bridge cultures or disciplines.

The careers that drain you are those requiring rigid routine, confined spaces, or the suppression of your need to question and explore. You need autonomy, intellectual stimulation, and the sense that your work expands something — whether that's minds, horizons, or possibilities.`,

  workStyle: `You work in bursts of inspired productivity, especially when a project connects to your sense of meaning. You're the colleague who asks the big questions, finds unexpected connections, and brings enthusiasm to the team — but you may need support for follow-through and detail work. You prefer variety, intellectual freedom, and the ability to see how your contribution fits into a larger picture.`,

  spiritualTheme: `Your spiritual journey is one of conscious seeking — learning to distinguish between the quest that expands the soul and the quest that merely distracts it. The Sagittarius soul lesson is that the greatest wisdom is found not only in the far horizon but in the present moment, fully inhabited. You're here to learn that truth without embodiment is incomplete — and that the most profound adventure may be the one that asks you to stay.`,

  lifeLessons: [
    "The horizon is infinite — but the present moment is where you actually live",
    "Truth without tact can wound; wisdom includes knowing when to speak",
    "Depth is earned through staying, not only through seeking",
    "Freedom and commitment can coexist when both are chosen consciously",
    "Your optimism is a gift — and so is your capacity to witness darkness",
  ],

  toolkit: [
    {
      title: "The Grounding Question",
      context: "When you're tempted to chase a new horizon instead of finishing what you've started",
      action: "Ask: 'What would I learn if I stayed?' Write down one way you could go deeper in your current situation. Often the most profound expansion comes from commitment, not escape.",
    },
    {
      title: "The Truth Filter",
      context: "When you're about to share a hard truth with someone",
      action: "Pause. Ask: 'Is this true? Is it necessary? Is now the right time?' Sagittarius wisdom includes the art of delivery. Sometimes the most honest act is waiting until the listener is ready.",
    },
    {
      title: "The Depth Log",
      context: "When you notice your energy scattered across too many pursuits",
      action: "List your current commitments. Choose the three that matter most. For one week, say no to anything new that doesn't serve those three. Notice what deepens when you focus.",
    },
  ],

  descriptionInsight: "Sagittarius is the zodiac's explorer — mutable fire that chases truth across horizons and returns with wisdom for the world. As the Archer, you carry the energy of the seeker: expansive, philosophical, and perpetually drawn toward meaning. Your Jupiter-ruled nature drives you to question, to travel, and to share what you've found with infectious enthusiasm.",
};
