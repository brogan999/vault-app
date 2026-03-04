import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "capricorn";

export const CAPRICORN: ZodiacSignContent = {
  sign: "Capricorn",
  name: "The Architect",
  shortName: "The Sea-Goat",
  tagline: "Born to build — you climb toward mastery and leave structures that outlast you",
  color: "#626350",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Earth",
  modality: "Cardinal",
  rulingPlanet: "Saturn",
  symbol: "♑",

  sunOverview: `Capricorn Sun enters the zodiac at the winter solstice — the darkest point of the year, when the seed of light begins its slow return. Yours is the energy of the builder: disciplined, strategic, and oriented toward what endures. You don't chase fleeting wins; you invest in structures — careers, legacies, institutions — that will outlast you.

Saturn, your planetary ruler, grants you patience, responsibility, and a sober understanding of what it takes to achieve something real. You're at your best when you're climbing, building, or upholding standards that others have let slip. Frivolity feels like a waste to you; you need purpose, progress, and the satisfaction of earned achievement.

At your core, you carry the cardinal earth archetype — the architect whose presence brings order to chaos and form to possibility. You inspire not through charisma but through reliability, competence, and the quiet authority of someone who has done the work.`,

  moonOverview: `A Capricorn Moon processes emotions through responsibility and achievement. Where others might wear their hearts on their sleeves, you instinctively need to contain, manage, or channel feeling into something productive. Emotional display feels risky; you process by building — creating security, meeting obligations, or proving your worth through action.

This placement gives you emotional resilience and a tendency to defer gratification. You recover from heartbreak by focusing on what you can control — your work, your duties, your long-term goals. Your challenge is learning to honor your feelings before they become fuel for achievement; sometimes the deepest security comes from vulnerability, not from walls.`,

  risingOverview: `With Capricorn Rising, the world sees you as composed, capable, and slightly reserved — someone who carries themselves with quiet authority and seems to have their life in order. Your first impression is one of seriousness and competence, a person who inspires trust through presence alone.

This ascendant gives you a structured, often mature appearance and a manner that commands respect. You approach new situations with caution and strategy, preferring to assess before engaging. People sense that you're not easily swayed — and that your word, once given, is binding.`,

  coreEnergies: [
    { name: "Discipline & Mastery", score: 96, description: "Cardinal earth at its peak — you do what others won't and build what lasts" },
    { name: "Strategic Vision", score: 94, description: "Saturn-ruled capacity to see the long game and plan accordingly" },
    { name: "Authority & Responsibility", score: 93, description: "A natural capacity to lead, to uphold standards, and to be relied upon" },
    { name: "Legacy-Building", score: 91, description: "An instinctive drive to create something that outlives you — structures, institutions, traditions" },
    { name: "Resilience & Endurance", score: 92, description: "The ability to persist through difficulty when others would quit" },
  ],

  strengths: [
    {
      title: "Master Builder",
      description: "You possess the rare ability to turn vision into structure. Where others dream, you plan — and then you execute. Your discipline, patience, and willingness to do the unglamorous work make you the person who actually gets things built.",
      deepDive: "Your building gift isn't rigidity — it's a profound understanding that lasting achievement requires time, effort, and sacrifice. Saturn teaches that nothing of value comes easily. You're at your best when you're creating something that will outlast you — a business, a body of work, a tradition. The key is learning to balance structure with flexibility — the most evolved Capricorns know when to hold the line and when to adapt.",
    },
    {
      title: "Quiet Authority",
      description: "You don't need to demand respect — you earn it through consistency, competence, and the simple fact that you keep your word. People trust you because you've proven yourself reliable, and that trust becomes the foundation for influence.",
      deepDive: "Capricorn authority is born from Saturn's domain — the realm of time, consequence, and earned wisdom. You understand that real power is built slowly. Your challenge is ensuring that your seriousness doesn't become heaviness — that you can lead without crushing the spirit of those around you. The most effective Capricorn leaders know that the greatest structures are built by people who feel valued, not merely managed.",
    },
    {
      title: "Strategic Endurance",
      description: "You outlast. When others quit at the first setback, you recalibrate and continue. Your capacity for delayed gratification — to work for years toward a goal that won't pay off until later — is one of your greatest assets.",
      deepDive: "Your endurance comes from earth's relationship with time. You understand that mountains are climbed one step at a time. Your growth edge is learning that not every climb is worth the cost — that sometimes the wisest act is to redirect your energy toward what truly serves you. The Sea-Goat at their best knows the difference between stubborn persistence and conscious commitment.",
    },
  ],

  growthEdges: [
    {
      title: "Rest & Permission to Soften",
      teaser: "Your greatest challenge is allowing yourself to receive before you've earned.",
      fullExplanation: "As the sign of achievement, you've learned that worth is proven through effort. You may struggle to rest, to accept help, or to feel deserving of love and ease before you've accomplished something. True mastery for Capricorn lies not only in building but in receiving — learning that you are worthy of rest, care, and joy simply because you exist. The mountain will still be there tomorrow; sometimes the bravest act is to stop climbing.",
      premiumHook: "Unlock your personalized rest framework with strategies tailored to your Saturn placement and house.",
    },
    {
      title: "Vulnerability as Strength",
      teaser: "Your instinct to contain emotion can isolate you from the intimacy you crave.",
      fullExplanation: "Control is your superpower, but it can become a prison when applied to your inner life. You may withhold feelings, avoid asking for help, or present an invulnerable front even with those who love you. The Capricorn growth path includes learning that the strongest structures have flexible joints — that allowing yourself to be seen, to need, and to receive is not weakness but the foundation for the deepest connection.",
      premiumHook: "Discover how your Moon and Venus placements shape your emotional expression and receive custom vulnerability strategies.",
    },
    {
      title: "Joy Without Justification",
      teaser: "Your orientation toward achievement can eclipse the simple pleasure of being alive.",
      fullExplanation: "Saturn's sober influence can make joy feel frivolous — something to be earned after the work is done. You may defer happiness to a future milestone that never quite arrives. The evolved Capricorn learns that life is not only a project to be completed but an experience to be lived. The greatest legacy may be the quality of presence you bring to each moment — not just the monuments you leave behind.",
      premiumHook: "Your premium report maps your Saturn aspects to reveal your achievement patterns and joy-blocking beliefs.",
    },
  ],

  relationships: `In relationships, Capricorn brings loyalty, reliability, and a deep commitment to building something lasting. You love seriously — when you're in, you're building a life together, not just enjoying the moment. You need a partner who respects your ambition, values stability, and can meet you in the work of creating a shared future.

Your love language is provision — you show care through practical support, kept promises, and the steady presence of someone who won't abandon the project when it gets hard. You struggle with emotional expression; you may show love through action rather than words. What you're learning is that the people who love you want to hear it — and that vulnerability deepens the very structures you're trying to build.

The Capricorn partner at their best is devoted, dependable, and capable of a bond that grows stronger with time. At your growing edge, you're discovering that the greatest achievement in love is not the perfect structure but the willingness to be imperfectly, fully present.`,

  compatibilityNotes: {
    Taurus: "Earth meets earth — shared values around security, stability, and the pleasures of the material world. Both understand the long game; the challenge is avoiding mutual rigidity.",
    Virgo: "A complementary alliance of discipline and discernment. Virgo's precision meets your strategy; both value competence and service. Together you can build something of lasting quality.",
    Cancer: "Your zodiac opposite — magnetic attraction with built-in tension. Cancer teaches you emotional expression; you teach Cancer structure. Nurturing meets ambition when aligned.",
    Scorpio: "A powerful alliance of depth and determination. Scorpio brings transformation; Capricorn brings structure. Both understand the long game and are willing to work for what matters.",
    Pisces: "Earth and water create fertile ground. Pisces brings imagination and compassion; Capricorn brings grounding and form. You can help each other balance dream and discipline — if you navigate Pisces's need for fluidity.",
  },

  careerPaths: `Capricorn thrives in careers that reward discipline, strategy, and the ability to build lasting structures. You're naturally drawn to roles where you can lead, create institutions, or uphold standards — environments where competence and longevity are valued.

You excel as executives, administrators, architects, engineers, financiers, politicians, and any role that requires long-term planning and responsible execution. You're also effective in traditional professions — law, medicine, academia — where mastery is earned over time.

The careers that drain you are those requiring constant improvisation, disregard for structure, or the pretense that shortcuts work. You need clear hierarchies, measurable progress, and the sense that your work contributes to something that will endure.`,

  workStyle: `You work with methodical focus and a preference for quality over speed. You're the colleague who meets deadlines, upholds standards, and can be relied upon when it matters. You prefer clear expectations, measurable outcomes, and recognition for the work you've actually done. You may need support for delegation and for celebrating milestones before rushing to the next goal.`,

  spiritualTheme: `Your spiritual journey is one of conscious building — learning to create structures that serve the soul, not just the ego. The Capricorn soul lesson is that the greatest achievement is not the mountain climbed but the wisdom earned in the climb. You're here to learn that rest is not laziness, vulnerability is not weakness, and that the most enduring legacy may be the love you allowed yourself to give and receive.`,

  lifeLessons: [
    "Worth is not only earned — it is inherent",
    "Rest is part of the structure, not a deviation from it",
    "Vulnerability deepens every bond you're trying to build",
    "Joy does not require justification",
    "The climb teaches; the summit is only the view",
  ],

  toolkit: [
    {
      title: "The Permission Pause",
      context: "When you're pushing through exhaustion or denying yourself rest",
      action: "Stop. Say aloud: 'I am allowed to rest before I've earned it.' Take 15 minutes to do something that has no productive purpose. Capricorn's evolution includes receiving without proving.",
    },
    {
      title: "The Vulnerability Experiment",
      context: "When you're withholding emotion from someone who has earned your trust",
      action: "Share one thing you've been holding back — a fear, a need, or a moment of doubt. Use the words. Notice what happens. Often the act of speaking creates the connection you've been building toward.",
    },
    {
      title: "The Joy Log",
      context: "When achievement has eclipsed simple pleasure",
      action: "Each day for one week, note one moment of joy that had nothing to do with accomplishment — a taste, a sound, a moment of connection. Capricorn's depth includes the capacity to savor what is, not only what will be.",
    },
  ],

  descriptionInsight: "Capricorn is the zodiac's architect — cardinal earth that climbs toward mastery and leaves structures that outlast the builder. As the Sea-Goat, you carry the energy of winter solstice: disciplined, strategic, and oriented toward what endures. Your Saturn-ruled nature drives you to build, to lead, and to earn your place through the quiet authority of someone who has done the work.",
};
