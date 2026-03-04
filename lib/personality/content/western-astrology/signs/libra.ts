import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "libra";

export const LIBRA: ZodiacSignContent = {
  sign: "Libra",
  name: "The Harmonizer",
  shortName: "The Scales",
  tagline: "Born to balance — you weave beauty and justice into every connection",
  color: "#93A2B6",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Air",
  modality: "Cardinal",
  rulingPlanet: "Venus",
  symbol: "♎",

  sunOverview: `Libra Sun enters the zodiac at the autumnal equinox — the moment when day and night achieve perfect balance. Yours is the energy of harmony: refined, diplomatic, and perpetually attuned to the space between opposing forces. You don't simply observe beauty; you create it through the art of relationship, aesthetics, and fair exchange.

Venus, your planetary ruler, grants you an eye for elegance and a soul that seeks partnership in all its forms. You're at your best when you're bridging divides, curating environments of grace, or advocating for what is just. Discord feels like a wound to you — you're driven to restore equilibrium wherever it's been disturbed.

At your core, you carry the cardinal air archetype — the diplomat whose presence softens conflict and elevates the ordinary into the exquisite. You inspire not through force but through charm, persuasion, and an intuitive understanding of what others need to feel seen.`,

  moonOverview: `A Libra Moon processes emotions through relationship and aesthetics. Where others might sit alone with their feelings, you instinctively need to share, reflect, or beautify — to turn inner experience into something that can be witnessed and appreciated by another.

This placement gives you a refined emotional palate. You're sensitive to imbalance in your environment and in your connections; you may struggle with indecision when your heart is pulled in multiple directions. Peace is your emotional north star — you recover from upheaval by restoring harmony, often through acts of care, art, or mediation.`,

  risingOverview: `With Libra Rising, the world sees you as gracious, attractive, and effortlessly sociable — someone who moves through life with poise and an innate sense of style. Your first impression is one of charm and approachability, a person who makes others feel at ease.

This ascendant gives you a balanced, often symmetrical appearance and a manner that disarms tension. You approach new situations through the lens of relationship — who is here, what do they need, how can this be made more beautiful? People sense your desire for connection immediately.`,

  coreEnergies: [
    { name: "Diplomacy & Harmony", score: 95, description: "Cardinal air at its peak — you navigate opposing forces with grace and restore balance where others create division" },
    { name: "Aesthetic Sensibility", score: 93, description: "Venus-ruled refinement that transforms the mundane into the beautiful" },
    { name: "Partnership Orientation", score: 91, description: "A deep need to create through relationship — you thrive in the space between self and other" },
    { name: "Justice & Fairness", score: 88, description: "An instinctive drive to weigh all sides and advocate for what is equitable" },
    { name: "Charm & Persuasion", score: 90, description: "The ability to influence through warmth, reason, and an understanding of others' desires" },
  ],

  strengths: [
    {
      title: "Natural Mediator",
      description: "You possess the rare ability to hold multiple perspectives without losing your center. In conflict, you become the bridge — hearing each side, finding the thread of common ground, and guiding others toward resolution without forcing your will.",
      deepDive: "Your mediation gift isn't people-pleasing — it's a genuine capacity to perceive the truth in opposing viewpoints. Where others polarize, you synthesize. This makes you invaluable in negotiations, creative collaborations, and any situation where human dynamics have become stuck. The key is learning to trust your own needs in the process — your desire for peace can sometimes lead you to sacrifice your position for the sake of harmony. The evolved Libra mediator knows that true balance includes their own voice.",
    },
    {
      title: "Curator of Beauty",
      description: "You see potential for elegance everywhere — in spaces, in conversations, in the way people present themselves. Your Venus-ruled eye transforms chaos into composition, and others feel elevated simply by being in your presence.",
      deepDive: "Libra's relationship with beauty isn't superficial — it's a spiritual practice. You understand that aesthetics affect the soul; a well-designed room, a thoughtful gesture, or a moment of grace can shift someone's entire day. Your challenge is ensuring that your pursuit of beauty doesn't become avoidance of the messy, the raw, or the imperfect. The most evolved Libras learn that true beauty includes the shadows — and that sometimes the most profound harmony comes from embracing what cannot be balanced.",
    },
    {
      title: "Devoted Partner",
      description: "You bring commitment, romance, and a genuine desire for mutuality to your relationships. You're willing to invest deeply in partnership because you understand that the greatest creations emerge from collaboration.",
      deepDive: "Your devotion to partnership comes from Libra's cardinal nature — you initiate through relationship. You're not passive in love; you actively cultivate connection, fairness, and shared aesthetic experience. The growth edge here is distinguishing between healthy interdependence and codependence — learning that the strongest partnerships are built by two whole people choosing each other, not two halves seeking completion. Your gift is creating the conditions for love to flourish; your evolution is doing so without losing yourself in the process.",
    },
  ],

  growthEdges: [
    {
      title: "Decisiveness & Self-Advocacy",
      teaser: "Your greatest challenge is making choices when your scales can't find equilibrium.",
      fullExplanation: "As the sign of the Scales, you excel at weighing options but can struggle when the answer isn't clear — or when making a choice means disappointing someone. You may delay decisions, defer to others' preferences, or avoid conflict so thoroughly that your own needs go unmet. True mastery for Libra lies not in perfect balance but in the courage to choose — learning that some decisions must be made with incomplete information, and that advocating for yourself is not the same as creating discord.",
      premiumHook: "Unlock your personalized decision-making framework with strategies tailored to your Venus placement and house.",
    },
    {
      title: "Embracing Necessary Conflict",
      teaser: "Your instinct for harmony can override your ability to stand firm when it matters.",
      fullExplanation: "Peace is your superpower, but it can also become your avoidance. In your desire to keep relationships smooth, you may suppress legitimate grievances, swallow your truth, or enable behavior that deserves confrontation. The Libra growth path includes learning that some conflict is generative — that speaking your boundary clearly can deepen intimacy rather than destroy it, and that temporary discomfort often serves long-term connection.",
      premiumHook: "Discover how your Mars and Saturn placements shape your conflict style and receive custom boundary strategies.",
    },
    {
      title: "Solo Wholeness",
      teaser: "Your partnership orientation can obscure the richness of your own company.",
      fullExplanation: "Venus rules both love and self-worth — and Libra's emphasis on the former can sometimes eclipse the latter. You may feel incomplete without a partner, or define your value through others' approval. The evolved Libra learns to cultivate inner balance independent of relationship — to enjoy solitude, to make aesthetic choices for your own pleasure, and to recognize that you are already whole. Partnership then becomes a choice, not a necessity.",
      premiumHook: "Your premium report maps your Venus aspects to reveal your relationship patterns and self-worth dynamics.",
    },
  ],

  relationships: `In relationships, Libra brings romance, fairness, and a genuine commitment to partnership as art. You love beautifully — with attention to atmosphere, gesture, and the subtle dance of give-and-take. You need a partner who appreciates aesthetics, engages in meaningful conversation, and is willing to co-create a life that feels balanced and refined.

Your love language is harmony — you show care through creating peace, curating shared experiences, and ensuring that both voices are heard. You struggle with the messier emotions: jealousy, possessiveness, or the raw edges of conflict. What you're learning is that true intimacy includes the full spectrum — not just the beautiful moments.

The Libra partner at their best is devoted, charming, and capable of making everyday life feel like a shared masterpiece. At your growing edge, you're discovering that the deepest love doesn't avoid conflict — it moves through it with honesty and grace.`,

  compatibilityNotes: {
    Gemini: "A meeting of air signs — intellectual rapport, lively conversation, and mutual appreciation for variety. Both value connection and communication; the challenge is sustaining depth.",
    Aquarius: "Fellow air sign with shared ideals. Aquarius brings innovation; Libra brings refinement. Together you can envision and build a more beautiful world — if you navigate Aquarius's need for independence.",
    Aries: "Your zodiac opposite — magnetic attraction with built-in tension. Aries teaches you decisiveness; you teach Aries diplomacy. Passionate when aligned, combative when not.",
    Leo: "Fire and air create warmth and creativity. Leo's dramatic flair meets your aesthetic sense; both appreciate romance and grand gestures. Power dynamics need conscious attention.",
    Cancer: "A complementary square — Cancer's emotional depth can feel overwhelming to your need for lightness, but this pairing teaches profound lessons about nurturing, home, and vulnerability.",
  },

  careerPaths: `Libra thrives in careers that reward diplomacy, aesthetics, and relationship-building. You're naturally drawn to roles where you can mediate, design, advocate, or create — environments where harmony and beauty are valued.

You excel as lawyers, mediators, diplomats, designers, stylists, art directors, relationship counselors, and any role that requires balancing competing interests or curating experience. You're also effective in luxury brands, hospitality, and the arts — anywhere your Venus-ruled sensibility elevates the ordinary.

The careers that drain you are those requiring ruthless competition, isolation, or indifference to human dynamics. You need collaboration, aesthetic expression, and the sense that your work contributes to something fair and beautiful.`,

  workStyle: `You work best in collaborative environments with clear aesthetic standards and room for dialogue. You're the colleague who smooths team dynamics, elevates presentations, and ensures that multiple perspectives are considered. You may need support for solo deep work and for making final calls when consensus isn't possible. You prefer balanced workloads, beautiful spaces, and recognition for your contributions to harmony.`,

  spiritualTheme: `Your spiritual journey is one of conscious balance — learning to hold opposites without collapsing into either extreme. The Libra soul lesson is that true harmony isn't the absence of tension but the capacity to contain it with grace. You're here to learn that the most profound beauty emerges when you stop seeking perfect equilibrium and instead embrace the dance of light and shadow, self and other, choice and surrender.`,

  lifeLessons: [
    "Decisiveness is a form of self-respect",
    "Conflict, when approached with integrity, deepens connection",
    "Beauty is not escape — it is presence refined",
    "Your needs matter as much as anyone else's",
    "Partnership flourishes when both people are already whole",
  ],

  toolkit: [
    {
      title: "The 48-Hour Choice Rule",
      context: "When you're paralyzed between options and your scales won't settle",
      action: "Set a 48-hour deadline. Gather one more piece of information if needed, then choose. Write down your decision and the reasoning. Often the act of committing clarifies what you truly wanted all along.",
    },
    {
      title: "The Fairness Check",
      context: "When you're considering sacrificing your needs for the sake of harmony",
      action: "Ask: 'If a friend were in this situation, would I advise them to give this up?' Apply the same standard to yourself. Libra's gift is fairness — extend it inward.",
    },
    {
      title: "Solo Aesthetic Hour",
      context: "When you feel your sense of self blurring into your relationships",
      action: "Spend one hour creating beauty for yourself alone — arrange flowers, curate a playlist, design a space. No one else needs to see it. This practice grounds your Venus energy in self-worth rather than external validation.",
    },
  ],

  descriptionInsight: "Libra is the zodiac's harmonizer — cardinal air that weaves balance, beauty, and justice into every connection. As the sign of the Scales, you carry the energy of the autumnal equinox: refined, diplomatic, and perpetually attuned to the space between opposing forces. Your Venus-ruled nature drives you to create partnership, elevate the aesthetic, and advocate for what is fair.",
};
