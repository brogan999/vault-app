import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "taurus";

export const TAURUS: ZodiacSignContent = {
  sign: "Taurus",
  name: "The Sustainer",
  shortName: "The Bull",
  tagline: "Rooted in what endures — you build what lasts",
  color: "#315E36",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Earth",
  modality: "Fixed",
  rulingPlanet: "Venus",
  symbol: "♉",

  sunOverview: `Taurus Sun carries the steadfast energy of fixed earth — the force that takes raw potential and shapes it into something tangible, beautiful, and enduring. You are the zodiac's master builder, driven not by urgency but by a deep understanding that anything worth having is worth cultivating slowly.

Venus, your ruling planet, infuses your earthy pragmatism with an appreciation for beauty, comfort, and sensory richness. You don't just want to survive — you want to create a life that feels luxurious in its simplicity: good food, beautiful surroundings, meaningful relationships, and financial security.

Your gift is persistence. While others chase novelty, you understand the compounding power of commitment. You plant seeds and tend them, trusting the process even when results are invisible. This patience, combined with your practical intelligence, makes you one of the zodiac's most reliable creators of lasting value.`,

  moonOverview: `A Taurus Moon seeks emotional security through stability, routine, and sensory comfort. Your emotional body craves predictability — not because you fear change, but because you process feelings slowly and deeply, needing time and space to fully absorb experiences.

This placement gives you remarkable emotional endurance. You can hold steady when others crumble, providing a grounding presence that others rely on instinctively. The shadow is stubbornness — once your emotions settle into a pattern, shifting them requires considerable effort, both from yourself and those around you.`,

  risingOverview: `Taurus Rising presents as calm, grounded, and pleasantly unhurried. People sense your steadiness immediately — you carry an air of reliability and quiet confidence that puts others at ease. Your physical presence tends toward solidity and warmth.

This ascendant moves through the world at its own pace, resistant to external pressure to rush. You approach new situations with careful evaluation, preferring to observe before committing. First impressions of you often include "trustworthy," "composed," and "hard to rattle."`,

  coreEnergies: [
    { name: "Steadfastness",       score: 96, description: "Fixed earth endurance — once committed, you hold your ground with unwavering determination" },
    { name: "Sensory Intelligence", score: 90, description: "Venus-given appreciation for beauty, texture, taste, and the physical world's richness" },
    { name: "Practical Wisdom",    score: 88, description: "An instinct for what works, what lasts, and what has real value versus hollow promise" },
    { name: "Patience",            score: 93, description: "The ability to sustain effort over long timelines without losing motivation or focus" },
    { name: "Resource Building",   score: 91, description: "A natural talent for accumulating, managing, and growing material and emotional resources" },
  ],

  strengths: [
    {
      title: "Unshakable Reliability",
      description: "You are the person others count on — the one who shows up consistently, follows through on commitments, and maintains stability when chaos surrounds you.",
      deepDive: "Your reliability isn't passive — it's an active, conscious choice to honor your word and maintain your standards. This fixed earth quality means you build trust through accumulated evidence, not promises. In a world of flaky commitments and shifting priorities, your consistency is a rare and deeply valued commodity. The growth edge is ensuring your reliability doesn't become rigidity — learning when consistency serves you and when it imprisons you.",
    },
    {
      title: "Aesthetic Vision",
      description: "Venus blesses you with an innate sense of beauty and quality. You can walk into a room and know what's off, taste a dish and identify the missing ingredient, or look at a design and see what would elevate it.",
      deepDive: "This isn't superficial materialism — it's a genuine sensory intelligence that allows you to create environments, experiences, and objects of lasting beauty. Your aesthetic sense extends to relationships and experiences: you curate your life with the same care an artist curates a gallery. When you trust this ability, it becomes a professional asset in design, food, fashion, architecture, or any field where quality matters.",
    },
    {
      title: "Financial Acumen",
      description: "You possess a natural understanding of value — how to create it, grow it, and protect it. Money and resources feel like a language you speak fluently.",
      deepDive: "Taurus has a relationship with material security that goes beyond greed. For you, financial stability represents freedom, safety, and the ability to create the beautiful life you envision. You're naturally patient with investments, resistant to get-rich-quick schemes, and instinctively understand that wealth is built through consistent, strategic effort over time.",
    },
  ],

  growthEdges: [
    {
      title: "Embracing Change",
      teaser: "Your greatest strength — stability — becomes your greatest limitation when it hardens into resistance.",
      fullExplanation: "As fixed earth, you are wired to maintain what exists. This serves you beautifully when what exists is worth preserving, but it can trap you in situations, relationships, and habits that have outlived their purpose. Your growth journey involves learning to distinguish between healthy stability and fear-based stagnation — recognizing when holding on has become holding back.",
      premiumHook: "Your premium report reveals how your Moon and Rising placements modify your relationship with change and provides tailored transition strategies.",
    },
    {
      title: "Releasing Possessiveness",
      teaser: "Your desire to hold what you value can extend into controlling behaviors in relationships and work.",
      fullExplanation: "Venus-ruled Taurus forms deep attachments — to people, possessions, routines, and ideas. While this capacity for devotion is beautiful, it can morph into possessiveness when fear enters the equation. The evolved Taurus learns that true abundance comes from open hands, not clenched fists — that security is an internal state, not something that can be guaranteed by controlling external circumstances.",
      premiumHook: "Discover how your Venus aspects reveal your specific attachment patterns and unlock healthier expressions of devotion.",
    },
    {
      title: "Allowing Discomfort",
      teaser: "Your pursuit of comfort can become avoidance of the growth that only discomfort provides.",
      fullExplanation: "You have a sophisticated relationship with pleasure and comfort, which is genuinely one of your gifts. But growth often requires periods of discomfort — physical, emotional, financial — that your Taurus nature instinctively resists. Learning to tolerate temporary discomfort for long-term gain, to push past the comfortable plateau into new territory, is essential for your evolution.",
      premiumHook: "Your chart reveals your comfort thresholds and the specific areas where strategic discomfort will yield the greatest growth.",
    },
  ],

  relationships: `In relationships, Taurus is devoted, sensual, and deeply loyal. You approach love with the same patient determination you bring to everything — willing to invest time, attention, and effort into building something that lasts. You're not interested in casual connections or surface-level romance; you want depth, consistency, and genuine partnership.

Your love language is physical — touch, shared meals, beautiful experiences, and tangible expressions of care. You show love through creating comfort and security for those you cherish. In conflict, you tend toward silence rather than explosion, processing internally before you're ready to discuss.

The Taurus partner at their best is a rock of unwavering support, a creator of beautiful shared experiences, and a lover whose devotion deepens with time rather than fading. At your growing edge, you're learning that love sometimes requires letting go of control and trusting the uncertain.`,

  compatibilityNotes: {
    Virgo: "Fellow earth sign who shares your practical approach and attention to quality — a quietly harmonious pairing built on mutual respect and shared standards.",
    Capricorn: "Earth-earth stability with complementary ambitions. You provide warmth and beauty; Capricorn provides structure and drive. Together, you build empires.",
    Scorpio: "Your zodiac opposite — deep magnetic attraction. Scorpio's emotional intensity challenges your comfort zone; together you explore the depths.",
    Cancer: "A nurturing, security-oriented pairing. Both of you value home, family, and emotional safety — creating a cocoon of comfort together.",
    Leo: "Fixed-sign tension — both of you are stubborn and loyal. When values align, this is a powerhouse; when they don't, neither budges.",
  },

  careerPaths: `Taurus excels in careers that combine practical skill with aesthetic sensibility. You're naturally drawn to roles involving finance, real estate, agriculture, culinary arts, design, music, and luxury goods — any field where patience, quality, and tangible results are rewarded.

You thrive in stable environments with clear growth trajectories rather than volatile startups or constantly shifting priorities. Your ideal career allows you to build something over time, accumulating expertise and resources steadily.

The careers that drain you are those requiring constant pivoting, high-pressure sales environments, or roles where your work is disposable rather than lasting.`,

  workStyle: `You work at a deliberate, thorough pace — not slow, but methodical. You prefer to do things right the first time rather than rushing to meet arbitrary deadlines. Your workspace matters to you; you're more productive in comfortable, aesthetically pleasing environments. You excel at long-term projects that reward sustained, consistent effort.`,

  spiritualTheme: `Your spiritual path is one of sacred embodiment — learning that the physical world is not separate from the spiritual but a direct expression of it. The Taurus soul lesson is that presence is the highest form of prayer. You're here to learn that impermanence doesn't diminish beauty — it enhances it — and that true security comes not from what you accumulate but from your relationship with the present moment.`,

  lifeLessons: [
    "True security is an internal state, not an external condition",
    "Comfort and growth are not enemies — but they must be balanced",
    "Letting go is not losing — it's making space for what comes next",
    "Your worth is not defined by what you own or produce",
    "The body is a temple of wisdom — listen to it",
  ],

  toolkit: [
    {
      title: "The Sensory Reset",
      context: "When stress, anxiety, or emotional overwhelm disconnects you from your grounded center",
      action: "Engage each of your five senses deliberately: touch something textured, smell something natural, taste something nourishing, listen to beautiful music, look at something that moves you. This sensory circuit reconnects you to your body's wisdom.",
    },
    {
      title: "The Voluntary Disruption",
      context: "When you notice your routines have become rigid or you're avoiding necessary changes",
      action: "Introduce one small, voluntary change per week — a new route, a different restaurant, an unfamiliar genre. Building comfort with small disruptions trains your nervous system for the larger changes life requires.",
    },
    {
      title: "The Value Audit",
      context: "When you feel stuck, overburdened, or unclear about priorities",
      action: "List everything you're holding onto — possessions, commitments, habits, relationships. For each, ask: 'Does this still serve my highest vision?' Release one thing that no longer aligns. Notice how the space created feels more valuable than what you released.",
    },
  ],

  descriptionInsight: "Taurus is the zodiac's anchor — fixed earth that transforms potential into tangible beauty and lasting value. Ruled by Venus, you combine practical intelligence with aesthetic sensibility, building a life of quality, comfort, and enduring meaning through patient, devoted effort.",
};
