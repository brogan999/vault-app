import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "gemini";

export const GEMINI: ZodiacSignContent = {
  sign: "Gemini",
  name: "The Communicator",
  shortName: "The Twins",
  tagline: "Two minds, infinite curiosity — you translate the world into words",
  color: "#C7A356",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Air",
  modality: "Mutable",
  rulingPlanet: "Mercury",
  symbol: "♊",

  sunOverview: `Gemini Sun is the zodiac's quicksilver mind — mutable air that moves between ideas, perspectives, and social circles with effortless fluidity. You are wired for connection and communication, possessing an intellectual curiosity that makes the entire world your classroom.

Mercury, your ruling planet, gifts you with verbal dexterity, mental agility, and the ability to synthesize information from wildly different sources into coherent narratives. You see patterns and connections that others miss because your mind refuses to be confined to a single track.

The twins of your symbol represent not duplicity but multiplicity — your capacity to hold opposing ideas simultaneously, to see every side of every argument, and to adapt your communication style to whoever stands before you. This is not superficiality; it is the intelligence of a mind designed to translate between worlds.`,

  moonOverview: `A Gemini Moon processes emotions through language and analysis. You need to talk about what you feel, write it down, or at least mentally narrate the experience before it becomes real to you. Unspoken feelings create a kind of static in your emotional field.

This placement gives you emotional versatility — you can shift moods quickly, find humor in difficulty, and intellectually reframe challenges in ways that others find remarkably helpful. The shadow is emotional avoidance disguised as analysis: sometimes you explain your feelings so thoroughly that you never actually feel them.`,

  risingOverview: `Gemini Rising enters a room with curiosity and charm. People sense your intelligence immediately — your eyes are alert, your speech is quick, and you ask questions that show genuine interest. You're the person at the party who can talk to anyone about anything.

This ascendant gives you a youthful appearance and energy regardless of age. You approach new situations by gathering information — asking, observing, connecting dots. First impressions of you include "witty," "clever," and "surprisingly versatile."`,

  coreEnergies: [
    { name: "Intellectual Agility",   score: 96, description: "Mercury-powered mental speed that processes, connects, and communicates ideas faster than most" },
    { name: "Social Versatility",     score: 92, description: "The ability to connect authentically with diverse people across different contexts and cultures" },
    { name: "Curiosity & Learning",   score: 95, description: "An insatiable desire to understand — every conversation, book, and experience is a potential lesson" },
    { name: "Adaptability",           score: 93, description: "Mutable air flexibility that allows you to shift direction, reframe, and pivot without losing momentum" },
    { name: "Communication Mastery",  score: 94, description: "A gift for translating complex ideas into accessible language across written and spoken forms" },
  ],

  strengths: [
    {
      title: "Masterful Communicator",
      description: "You possess the rare ability to make complex ideas accessible, to read a room and adjust your message accordingly, and to find the exact words that bridge understanding between people.",
      deepDive: "Mercury doesn't just give you verbal skill — it gives you translational intelligence. You naturally sense what framework someone is operating from and adjust your language to meet them there. This makes you invaluable as a teacher, writer, mediator, or any role that requires bridging different worldviews. Your challenge is ensuring your communication serves depth as well as breadth — saying something meaningful, not just something clever.",
    },
    {
      title: "Rapid Learner",
      description: "You absorb new information with remarkable speed, drawing connections between seemingly unrelated fields and grasping concepts that take others much longer to process.",
      deepDive: "Your learning style is associative rather than linear — you understand things by connecting them to what you already know, creating an ever-expanding web of knowledge. This makes you exceptionally good at interdisciplinary thinking and innovation. The growth edge is depth: moving past the excitement of initial understanding into the mastery that comes from sustained study in a single domain.",
    },
    {
      title: "Social Intelligence",
      description: "You navigate social environments with natural ease, reading room dynamics, adjusting your approach, and building rapport across diverse groups and settings.",
      deepDive: "Your mutable air nature gives you a chameleonic social intelligence that is genuine, not manipulative. You're authentically interested in people and their perspectives, which makes connections feel easy and natural. This social fluidity is a professional superpower in networking, team building, and any collaborative environment. The growth edge is building depth in relationships rather than breadth — choosing quality of connection over quantity of contacts.",
    },
  ],

  growthEdges: [
    {
      title: "Cultivating Depth",
      teaser: "Your breadth of knowledge can come at the expense of true expertise in any single area.",
      fullExplanation: "Gemini's curse is the allure of the new — every fresh topic, person, or project sparks excitement that can pull you away from the one you're currently invested in. Your mind is designed for exploration, but growth requires periods of focused, sustained attention that can feel constraining. The evolved Gemini learns to go deep in a few areas while maintaining their natural curiosity in others — becoming a specialist with generalist instincts.",
      premiumHook: "Your premium report maps your Mercury placement to reveal your ideal depth-to-breadth ratio and focus strategies.",
    },
    {
      title: "Emotional Grounding",
      teaser: "Your tendency to intellectualize feelings can prevent you from fully experiencing your emotional life.",
      fullExplanation: "Mercury's influence means you naturally process everything through the mind first. While this gives you remarkable analytical clarity, it can create a buffer between you and your actual felt experience. You might describe your emotions with perfect articulation while never actually dropping into them. The growth path involves learning to sit with feelings before analyzing them — letting the body speak before the mind translates.",
      premiumHook: "Discover how your Moon placement interacts with your Gemini Sun to reveal your specific emotional processing patterns.",
    },
    {
      title: "Commitment & Consistency",
      teaser: "Your mutable nature can make sustained commitment — to people, projects, or positions — genuinely challenging.",
      fullExplanation: "Mutable signs are designed for change, and Gemini's restless curiosity amplifies this. You may find that your enthusiasm wanes once the learning curve flattens, or that you keep your options open so long that opportunities pass. The evolved Gemini learns that commitment doesn't mean imprisonment — it means choosing to explore the infinite depth within a single direction rather than the infinite breadth of all possible directions.",
      premiumHook: "Your chart reveals your specific commitment patterns and the conditions under which your Gemini nature thrives within structure.",
    },
  ],

  relationships: `In relationships, Gemini brings intellectual stimulation, playfulness, and a constant current of fresh energy. You need a partner who can keep up with your mind — someone who loves conversation, values mental connection as much as physical, and doesn't need you to be the same person every day.

Communication is your love language in every sense: you connect through words, debate, humor, and shared ideas. You're the partner who sends interesting articles, plans spontaneous adventures, and keeps the relationship from ever becoming boring.

The Gemini partner at their best is endlessly engaging, genuinely curious about their partner's inner world, and capable of bringing lightness and perspective to heavy moments. At your growing edge, you're learning that emotional presence — simply being with someone without needing to entertain or analyze — is its own form of love.`,

  compatibilityNotes: {
    Libra: "Fellow air sign who shares your love of conversation and beauty — a mentally stimulating, socially vibrant partnership.",
    Aquarius: "Air-air intellectual fireworks. Aquarius matches your mental speed and adds visionary depth — a relationship built on ideas and ideals.",
    Sagittarius: "Your zodiac opposite — magnetic tension between your local curiosity and their global philosophy. Together you cover the entire spectrum of knowledge.",
    Aries: "Fire-air synergy — Aries provides the bold action to your ideas, creating a dynamic, fast-paced partnership.",
    Virgo: "Both Mercury-ruled — you share analytical intelligence but apply it differently. Virgo grounds your scattered energy; you lighten Virgo's perfectionism.",
  },

  careerPaths: `Gemini thrives in careers that leverage communication, intellectual agility, and social versatility. You're naturally drawn to writing, journalism, teaching, marketing, sales, public relations, podcasting, and any role where your ability to synthesize and communicate information is valued.

You excel in fast-paced environments that offer variety — roles where no two days are the same and you're constantly learning something new. You're also gifted at technology, coding, and digital media, where your ability to quickly master new tools gives you a perpetual advantage.

The careers that drain you are isolated, repetitive roles with limited intellectual stimulation or social interaction.`,

  workStyle: `You work best with multiple projects running simultaneously, toggling between tasks to keep your mind engaged. Your productivity comes in waves of intense mental focus followed by periods of social recharging. You communicate prolifically and prefer collaborative environments where ideas are exchanged freely. You need intellectual stimulation to maintain motivation — routine kills your creativity.`,

  spiritualTheme: `Your spiritual path is one of sacred integration — learning to unify the many facets of yourself into a coherent whole. The Gemini soul lesson is that knowing and being are not the same thing. You're here to discover that the deepest truths can't be captured in words — and that sometimes the most profound communication happens in silence.`,

  lifeLessons: [
    "Depth and breadth are not enemies — mastery comes from knowing when to apply each",
    "Not everything needs to be analyzed to be understood",
    "Consistency is not the death of creativity — it's the container for it",
    "Your word is your bond — let your commitments match your promises",
    "Silence can be the most eloquent form of communication",
  ],

  toolkit: [
    {
      title: "The Single-Task Sprint",
      context: "When mental scatter prevents you from making meaningful progress on any one thing",
      action: "Set a timer for 25 minutes. Choose one task. Close every other tab, silence notifications, and commit to that single thing until the timer sounds. After, reward yourself with 5 minutes of guilt-free mental wandering. Repeat.",
    },
    {
      title: "The Body Check-In",
      context: "When you've been operating entirely in your head and feel disconnected from your emotional or physical state",
      action: "Stop. Place both hands on your chest. Take three slow breaths. Ask yourself: 'What am I feeling right now?' — and don't answer with a thought. Wait for a sensation. Name it without analyzing it. This practice builds the body-mind bridge that Gemini needs.",
    },
    {
      title: "The Depth Journal",
      context: "When your curiosity is pulling you in too many directions and you need to cultivate focus",
      action: "Choose one topic per week to explore deeply. Write about it daily — even just a paragraph. By the end of the week, you'll have reached a level of understanding that surface-level browsing never provides. This trains your Gemini mind for depth without sacrificing its love of learning.",
    },
  ],

  descriptionInsight: "Gemini is the zodiac's translator — mutable air that weaves connections between people, ideas, and worlds. Ruled by Mercury, you possess an intellectual curiosity and verbal brilliance that makes you a natural communicator, learner, and bridge-builder in every arena of life.",
};
