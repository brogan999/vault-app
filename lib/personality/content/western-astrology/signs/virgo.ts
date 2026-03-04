import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "virgo";

export const VIRGO: ZodiacSignContent = {
  sign: "Virgo",
  name: "The Analyst",
  shortName: "The Maiden",
  tagline: "Precision with purpose — you refine the world into its highest expression",
  color: "#818D59",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Earth",
  modality: "Mutable",
  rulingPlanet: "Mercury",
  symbol: "♍",

  sunOverview: `Virgo Sun embodies mutable earth — the intelligence that observes, analyzes, and refines reality with extraordinary precision. You are the zodiac's master craftsperson, driven not by ego but by a sincere desire to make things work better, serve more effectively, and express a standard of excellence that most people don't even perceive.

Mercury rules your mind, but unlike Gemini's broad-spectrum curiosity, your Mercury energy is focused and discriminating. You see the detail others miss, the flaw in the system, the improvement that transforms good into exceptional. This isn't criticism — it's devotion to quality expressed through attention.

Your mutable nature gives you adaptability that belies your reputation for rigidity. You're constantly adjusting, optimizing, and refining your approach based on new information. The maiden symbol represents not innocence but wholeness — the self-contained individual who needs nothing external to be complete.`,

  moonOverview: `A Virgo Moon processes emotions through analysis and practical action. When feelings arise, your instinct is to understand them, categorize them, and then do something constructive with them. Emotional chaos is deeply unsettling; you need to make sense of what you feel.

This placement gives you emotional reliability and a service-oriented heart — you show care through acts of practical helpfulness and attention to the details of others' lives. The shadow is self-criticism: your analytical mind turned inward can become a merciless judge of your own emotional responses, telling you what you should feel rather than allowing what you actually feel.`,

  risingOverview: `Virgo Rising presents as composed, intelligent, and quietly observant. People notice your attention to detail immediately — your appearance tends toward understated elegance, and you carry yourself with a precision that suggests careful thought behind every choice.

This ascendant approaches the world through analysis — observing patterns, noting discrepancies, and forming assessments before engaging. You may appear reserved initially, but those who earn your trust discover a warm, witty, and deeply caring person beneath the composed surface. First impressions include "sharp," "thoughtful," and "together."`,

  coreEnergies: [
    { name: "Analytical Precision", score: 96, description: "Mercury-powered discernment that sees patterns, flaws, and opportunities for improvement invisible to others" },
    { name: "Service Orientation",  score: 93, description: "A genuine drive to be useful — to contribute meaningfully to systems, people, and processes" },
    { name: "Practical Intelligence", score: 94, description: "Earth-sign pragmatism that translates abstract ideas into workable, real-world applications" },
    { name: "Quality Standards",    score: 92, description: "An internal compass for excellence that refuses to accept 'good enough' when better is possible" },
    { name: "Adaptive Refinement",  score: 90, description: "Mutable flexibility that continuously adjusts and improves based on feedback and observation" },
  ],

  strengths: [
    {
      title: "Pattern Recognition",
      description: "You see what others miss — the small discrepancy in data, the subtle shift in someone's behavior, the systemic inefficiency that everyone else has learned to work around.",
      deepDive: "Your analytical gifts are not limited to spreadsheets and systems. You read people with the same precision you read data: noticing changes in tone, energy, and behavior that signal something beneath the surface. This makes you invaluable as an analyst, diagnostician, editor, quality controller, and strategic advisor. Your pattern recognition operates across domains — you see the forest and the trees. The growth edge is learning which patterns deserve your attention and which are noise.",
    },
    {
      title: "Devoted Craftsmanship",
      description: "You bring a level of care and attention to your work that transforms ordinary tasks into expressions of excellence. For you, the details aren't just details — they're the substance.",
      deepDive: "Virgo's relationship with work is almost spiritual: you believe that doing something well is a form of service, that craftsmanship is a moral act. This shows in everything you touch — your writing is precise, your cooking is thoughtful, your systems are elegant. You don't cut corners because it would violate something fundamental in your nature. The evolution is learning to direct this devotion proportionally — investing mastery where it matters most rather than applying equal intensity to everything.",
    },
    {
      title: "Healing Presence",
      description: "You possess a natural orientation toward health, healing, and wholeness — an instinct for identifying what's out of balance and knowing how to restore it.",
      deepDive: "Virgo has long been associated with health and healing, and this goes beyond physical wellness. You have an instinct for what's 'off' in a system — whether that's a body, a relationship, an organization, or a process — and a practical intelligence for restoring balance. This makes you a natural healer, troubleshooter, and problem-solver. Your healing approach is methodical rather than mystical: you diagnose, develop a protocol, and implement it with disciplined follow-through.",
    },
  ],

  growthEdges: [
    {
      title: "Softening Self-Criticism",
      teaser: "The analytical lens you turn on the world becomes merciless when turned inward.",
      fullExplanation: "Your gift for spotting imperfection can become a curse when directed at yourself. You may hold yourself to impossible standards, replay mistakes obsessively, and dismiss your accomplishments as insufficient. The inner critic that drives your excellence can also prevent you from enjoying it. The evolved Virgo learns self-compassion — applying the same practical wisdom they offer others to their own inner landscape, recognizing that perfection is a direction, not a destination.",
      premiumHook: "Your premium report examines your Saturn and Chiron placements to map your specific self-criticism patterns and healing pathways.",
    },
    {
      title: "Embracing Imperfection",
      teaser: "Your pursuit of excellence can prevent you from starting, sharing, or completing work that isn't yet 'ready.'",
      fullExplanation: "Perfectionism is the shadow side of quality consciousness. You may delay projects indefinitely because they're not polished enough, avoid new experiences because you can't guarantee competence, or withdraw from situations where you might appear less than capable. The growth path involves learning that 'done' often serves better than 'perfect,' and that vulnerability — showing up before you're ready — is where the most meaningful growth happens.",
      premiumHook: "Discover how your Mercury aspects reveal your perfectionism triggers and receive strategies for productive imperfection.",
    },
    {
      title: "Receiving as Graciously as You Give",
      teaser: "Your service orientation can make it genuinely difficult to accept help, compliments, or care from others.",
      fullExplanation: "You are a natural giver — offering practical help, detailed advice, and quiet acts of service is second nature. But receiving triggers discomfort: you may deflect compliments, insist you don't need help, or feel guilty when others serve you. This imbalance creates an unsustainable dynamic in relationships and robs others of the joy of giving to you. Learning to receive is not selfishness — it's the completion of the circle of care.",
      premiumHook: "Your Venus and 7th house placements reveal your receiving blocks and the conditions that allow you to accept care gracefully.",
    },
  ],

  relationships: `In relationships, Virgo brings devotion, thoughtfulness, and a love expressed through practical acts of care. You show love by noticing — remembering preferences, anticipating needs, and investing effort into making your partner's life smoother and more beautiful in concrete ways.

You need a partner who appreciates subtlety, who recognizes that your quiet acts of service are love letters written in action. Emotional drama exhausts you; you prefer steady, mature connections where both parties communicate clearly and work together to solve problems.

The Virgo partner at their best is deeply attentive, genuinely helpful, and capable of a love that shows up in the details — the perfectly prepared meal, the well-timed encouragement, the practical support that makes all the difference. At your growing edge, you're learning to express love through words and touch as fluently as you express it through service.`,

  compatibilityNotes: {
    Taurus: "Earth-earth harmony — shared values of quality, stability, and sensory appreciation create a quietly beautiful partnership.",
    Capricorn: "Fellow earth sign with complementary ambitions. Your attention to detail supports Capricorn's strategic vision — together you build with precision.",
    Pisces: "Your zodiac opposite — Pisces offers the imagination and surrender you sometimes lack; you provide the grounding and structure they need.",
    Cancer: "Water-earth nurturing — Cancer's emotional care complements your practical care, creating a partnership of comprehensive support.",
    Scorpio: "Shared analytical depth and a mutual appreciation for what lies beneath the surface. A partnership of insight and integrity.",
  },

  careerPaths: `Virgo excels in careers requiring analytical precision, attention to detail, and service orientation. You're naturally drawn to healthcare, data analysis, editing, research, accounting, nutrition, veterinary science, quality assurance, and process optimization.

You thrive in roles where your meticulousness is valued and where you can see the direct impact of your improvements. You're also gifted at consulting, technical writing, and any role where translating complex systems into clear, actionable processes is the core skill.

The careers that drain you are chaotic, unpredictable environments where quality is deprioritized in favor of speed, or roles where your analytical contributions are dismissed as overthinking.`,

  workStyle: `You work with methodical precision, creating systems and processes that maximize efficiency and quality. You're the colleague who creates the project tracker, catches the error in the report, and ensures deliverables meet standard. You prefer clear expectations, organized workflows, and the freedom to refine your approach. You communicate concisely and appreciate the same from others.`,

  spiritualTheme: `Your spiritual journey is one of sacred imperfection — learning that wholeness includes the cracks, and that the pursuit of perfection can be the enemy of the peace you seek. The Virgo soul lesson is that you are already enough. Your value doesn't come from what you produce or improve — it exists inherent and unconditional in your being. You're here to learn that the highest form of service is self-acceptance.`,

  lifeLessons: [
    "You are enough — not because of what you do, but because of who you are",
    "Done is better than perfect when perfect prevents progress",
    "The ability to receive is as important as the ability to give",
    "Your inner critic is not the voice of truth — it's the voice of fear",
    "Mastery is a journey, not a destination — enjoy the process",
  ],

  toolkit: [
    {
      title: "The Good Enough Practice",
      context: "When perfectionism is preventing you from sharing, submitting, or completing your work",
      action: "Complete the task to 80% of your standard. Then share it. Observe what happens. In most cases, your 80% exceeds others' 100%. This practice recalibrates your perfectionism and builds evidence that 'good enough' is often more than enough.",
    },
    {
      title: "The Compliment Absorb",
      context: "When someone offers praise and your instinct is to deflect, minimize, or redirect",
      action: "Stop. Make eye contact. Say 'Thank you — that means a lot to me.' Then sit with the discomfort for 10 seconds. This trains your nervous system to receive as naturally as it gives.",
    },
    {
      title: "The Self-Compassion Rewrite",
      context: "When your inner critic delivers a harsh assessment of your performance or worth",
      action: "Write down exactly what the critic said. Then rewrite it as if you were speaking to a dear friend who had done the same thing. Read the compassionate version aloud. Notice the difference in how your body responds to each version.",
    },
  ],

  descriptionInsight: "Virgo is the zodiac's master craftsperson — mutable earth that observes, analyzes, and refines reality with extraordinary care. Ruled by Mercury, you combine practical intelligence with genuine devotion to quality, serving the world through precision, healing, and the quiet pursuit of excellence.",
};
