import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "cancer";

export const CANCER: ZodiacSignContent = {
  sign: "Cancer",
  name: "The Nurturer",
  shortName: "The Crab",
  tagline: "Guardian of the heart — you build sanctuaries where souls feel safe",
  color: "#CC8D90",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Water",
  modality: "Cardinal",
  rulingPlanet: "Moon",
  symbol: "♋",

  sunOverview: `Cancer Sun carries the cardinal water energy — the force that initiates through feeling, creating emotional currents strong enough to move mountains. You are the zodiac's guardian, driven by a profound need to protect, nurture, and create safety for those you love.

The Moon, your ruling luminary, gives you an emotional depth and intuitive sensitivity that operates below conscious awareness. You feel the room before you read it, sense what someone needs before they ask, and carry an emotional memory that archives every meaningful experience you've ever had.

Your cardinal nature means you don't just feel — you act on your feelings. You create homes, build families (chosen or biological), and cultivate the emotional infrastructure that allows others to thrive. Your shell isn't weakness; it's the strategic protection of a soul that knows its sensitivity is its greatest power.`,

  moonOverview: `Cancer Moon is the Moon in its home — this is the most emotionally fluent lunar placement. Your feeling nature is rich, oceanic, and deeply connected to cycles, memory, and the tides of your inner world. You feel everything, and you feel it fully.

This placement gives you extraordinary emotional intelligence and caregiving instincts. You intuitively know how to comfort, how to create emotional safety, and how to hold space for others' vulnerability. The shadow is emotional absorption — difficulty distinguishing your feelings from those of the people around you, and a tendency to retreat into your shell when overwhelmed.`,

  risingOverview: `Cancer Rising presents as warm, approachable, and gently protective. People sense your caring nature immediately — you radiate a quality of emotional attentiveness that makes others feel seen and safe. Your face is often described as open and expressive.

This ascendant moves through the world with emotional antennae always active, reading the atmosphere of every space you enter. You approach new situations by assessing emotional safety first — 'Are the people here trustworthy? Is this environment welcoming?' First impressions include "caring," "sensitive," and "genuinely kind."`,

  coreEnergies: [
    { name: "Emotional Depth",      score: 96, description: "Lunar-ruled sensitivity that perceives emotional undercurrents invisible to others" },
    { name: "Nurturing Instinct",   score: 95, description: "A cardinal water drive to protect, care for, and create safety for those in your orbit" },
    { name: "Intuitive Perception",  score: 93, description: "Gut-level knowing that bypasses logic — your body often knows things before your mind catches up" },
    { name: "Memory & Continuity",   score: 90, description: "A deep connection to the past that preserves emotional wisdom, family stories, and personal history" },
    { name: "Protective Resilience", score: 88, description: "The crab's shell — a capacity to endure emotional storms and emerge with your core intact" },
  ],

  strengths: [
    {
      title: "Emotional Intelligence",
      description: "You possess a rare fluency in the language of feelings — the ability to sense, name, hold, and respond to emotional states in yourself and others with remarkable precision.",
      deepDive: "Your emotional intelligence isn't just empathy — it's a complete emotional operating system that processes information through feeling rather than logic. This gives you access to a form of knowledge that analytical minds simply cannot reach. You know when someone is lying because their energy doesn't match their words. You sense tension in a room before anyone speaks. This is a professional-grade skill that makes you invaluable in therapy, counseling, healthcare, team management, and any role where understanding people matters more than understanding data.",
    },
    {
      title: "Sanctuary Builder",
      description: "You create spaces — physical, emotional, relational — where people feel genuinely safe and cared for. This is not a domestic cliché but a profound creative act.",
      deepDive: "Your ability to build sanctuaries extends far beyond homemaking. You create emotional safety in conversations, in teams, in organizations. When you're in a leadership role, your team feels held. When you're in a friendship, the other person feels seen. This cardinal water capacity to initiate emotional environments is one of the most underrated and powerful skills in human interaction. Your growth edge is ensuring you also create this safety for yourself — not just everyone else.",
    },
    {
      title: "Tenacious Protector",
      description: "When someone or something you love is threatened, you access a fierce, cardinal strength that surprises those who see only your gentle surface.",
      deepDive: "Cancer's cardinal modality is often overlooked in favor of the sign's softer qualities, but make no mistake — you are an initiator. When activated by the need to protect, you become one of the most formidable forces in the zodiac. This is the mother bear energy, the unyielding wall between your loved ones and harm. The evolution is learning when protection serves and when it smothers — understanding that sometimes the most loving thing you can do is let someone face their own challenges.",
    },
  ],

  growthEdges: [
    {
      title: "Releasing the Past",
      teaser: "Your extraordinary memory can become a prison when it keeps you anchored to old wounds.",
      fullExplanation: "Cancer's connection to the past is a genuine gift — you preserve wisdom, maintain traditions, and carry emotional history that informs the present. But this same capacity can trap you in cycles of resentment, nostalgia, or grief that have long since served their purpose. Your growth journey involves learning to honor the past without being held hostage by it — extracting the lesson and releasing the pain.",
      premiumHook: "Your premium report examines your Moon aspects to reveal your specific emotional holding patterns and release strategies.",
    },
    {
      title: "Setting Emotional Boundaries",
      teaser: "Your porous emotional boundaries can lead to chronic caretaking at the expense of your own wellbeing.",
      fullExplanation: "Your sensitivity is your superpower, but without healthy boundaries, it becomes your drain. You may absorb others' emotions as your own, sacrifice your needs for the sake of peace, or struggle to say no when your nurturing instincts are activated. The evolved Cancer learns that boundaries are not walls — they're the membrane that allows healthy exchange while preventing depletion. Taking care of yourself first isn't selfish; it's the prerequisite for sustainable caregiving.",
      premiumHook: "Discover how your Mars and Saturn placements shape your boundary-setting capacity and receive personalized strategies.",
    },
    {
      title: "Trusting Beyond the Shell",
      teaser: "Your protective instincts can isolate you from the very connections you crave.",
      fullExplanation: "The crab's shell is a survival mechanism, but it can also become a habit that persists long after the threat has passed. You may preemptively withdraw from potential connections, test loyalty through indirect means, or present a tough exterior that contradicts your inner tenderness. The growth path involves learning to be selectively vulnerable — extending trust before it's fully proven and allowing intimacy without requiring guarantees.",
      premiumHook: "Your chart reveals your trust patterns and the specific conditions under which you can safely lower your defenses.",
    },
  ],

  relationships: `In relationships, Cancer brings devotion, emotional depth, and an unmatched capacity for intimate care. You love with your whole being — attentively, protectively, and with a memory that catalogues every meaningful moment shared between you and your partner.

Your love language is nurturing — you show care through feeding, tending, anticipating needs, and creating a shared space that feels like a refuge from the world. You need emotional reciprocity: a partner who meets your depth, who can sit with you in feeling without fleeing, and who makes you feel safe enough to emerge from your shell completely.

The Cancer partner at their best is profoundly loving, fiercely loyal, and capable of creating a relationship that feels like coming home. At your growing edge, you're learning that love doesn't require you to lose yourself — and that the right partner will cherish your independence as much as your devotion.`,

  compatibilityNotes: {
    Scorpio: "Water-water soul bond — Scorpio meets your emotional depth and adds transformative intensity. A profoundly intimate pairing.",
    Pisces: "Fellow water sign who understands your emotional language fluently — a gentle, romantic, mutually nurturing connection.",
    Capricorn: "Your zodiac opposite — Capricorn provides the structure and stability your emotions crave; you provide the warmth and care they secretly need.",
    Taurus: "Earth-water harmony — Taurus offers the physical security and consistency that settles your emotional tides.",
    Aries: "Cardinal-cardinal tension — both of you initiate but through different elements. Aries challenges your comfort zone; you teach Aries emotional depth.",
  },

  careerPaths: `Cancer excels in careers that leverage emotional intelligence, caregiving instincts, and the ability to create safety. You're naturally drawn to healthcare, therapy, counseling, social work, education, hospitality, real estate, interior design, and food-related fields.

You thrive in environments where personal relationships matter and where your emotional labor is recognized and valued. You're also gifted in roles involving history, archives, family services, and community building.

The careers that drain you are emotionally sterile, hyper-competitive environments that penalize sensitivity or demand you suppress your feeling nature.`,

  workStyle: `You work best in environments that feel emotionally safe — supportive teams, compassionate leadership, and physical spaces that feel comfortable rather than sterile. Your productivity follows your emotional state; when you feel secure and valued, your output is remarkable. You're the colleague who remembers everyone's birthday, senses when someone is struggling, and quietly ensures the team's emotional infrastructure is intact.`,

  spiritualTheme: `Your spiritual journey is one of sacred vulnerability — learning that your sensitivity is not a wound to be healed but a gift to be wielded. The Cancer soul lesson is that true protection comes not from the shell but from the courage to remain open. You're here to learn that feeling everything is not a flaw — it's the pathway to the deepest wisdom available to the human heart.`,

  lifeLessons: [
    "Boundaries are not barriers to love — they are the architecture of sustainable intimacy",
    "The past is a teacher, not a prison — extract the wisdom and release the weight",
    "Your sensitivity is a superpower, not a liability",
    "You cannot pour from an empty cup — self-care is not selfish",
    "Home is not a place — it's a state of emotional safety you carry within",
  ],

  toolkit: [
    {
      title: "The Emotional Inventory",
      context: "When you feel overwhelmed, moody, or emotionally reactive without a clear cause",
      action: "Write down every feeling you're currently carrying. Next to each, note: 'Is this mine?' Often you'll discover you're carrying emotions absorbed from others. Consciously set down what isn't yours.",
    },
    {
      title: "The Shell Schedule",
      context: "When social or caregiving obligations are depleting your emotional reserves",
      action: "Schedule deliberate retreat time — daily if possible. Even 30 minutes of solitude in a comfortable space, with no obligation to anyone, allows your emotional body to reset. This is not indulgence; it's essential maintenance.",
    },
    {
      title: "The Future Letter",
      context: "When you're stuck in past pain or nostalgic loops that prevent forward movement",
      action: "Write a letter from your future self — the version of you who has healed this wound — to your present self. Describe what life looks like on the other side. Read it when the past pulls you backward.",
    },
  ],

  descriptionInsight: "Cancer is the zodiac's guardian — cardinal water that initiates through feeling, creating emotional sanctuaries where souls can heal and grow. Ruled by the Moon, you carry an intuitive depth and nurturing power that transforms every environment you touch into a place of safety and belonging.",
};
