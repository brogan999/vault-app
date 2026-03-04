import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "scorpio";

export const SCORPIO: ZodiacSignContent = {
  sign: "Scorpio",
  name: "The Alchemist",
  shortName: "The Scorpion",
  tagline: "Born to transform — you turn shadow into gold through depth and intensity",
  color: "#916368",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Water",
  modality: "Fixed",
  rulingPlanet: "Pluto / Mars",
  symbol: "♏",

  sunOverview: `Scorpio Sun enters the zodiac as the year turns toward darkness — the season when the veil between worlds grows thin. Yours is the energy of transformation: intense, penetrating, and unafraid of what lies beneath the surface. You don't skim life; you dive to its depths, seeking the truth that others fear to face.

Pluto and Mars, your planetary rulers, grant you the power to destroy and rebuild — to burn away what no longer serves and emerge renewed. You're at your best when you're uncovering secrets, healing wounds, or guiding others through their own underworld journeys. Superficiality feels like a betrayal to you; you crave connection that goes to the bone.

At your core, you carry the fixed water archetype — the alchemist whose presence catalyzes change in everyone they touch. You inspire not through cheerfulness but through depth, loyalty, and the unspoken understanding that you've seen the darkness and returned with wisdom.`,

  moonOverview: `A Scorpio Moon processes emotions through intensity and transformation. Where others might skim the surface of feeling, you plunge into the depths — jealousy, devotion, grief, and ecstasy are all experienced at full volume. Emotional evasion is intolerable; you process by going through, not around.

This placement gives you profound emotional intelligence and a radar for what's hidden. You sense others' unspoken motives and your own shadow with equal clarity. Trust is earned slowly but, once given, is absolute. You recover from betrayal not by forgetting but by transmuting the wound into power.`,

  risingOverview: `With Scorpio Rising, the world sees you as magnetic, intense, and slightly mysterious — someone who holds their cards close and radiates an aura of depth. Your first impression is one of power and presence, a person who seems to see more than they reveal.

This ascendant gives you penetrating eyes, a commanding presence, and a quality that draws others toward you even when you're not seeking attention. You approach new situations with caution, preferring to observe before engaging. People sense that you're not easily fooled — and that your loyalty, once earned, is fierce.`,

  coreEnergies: [
    { name: "Depth & Intensity", score: 96, description: "Fixed water at its peak — you go where others won't, uncovering truths that transform everything" },
    { name: "Transformative Power", score: 94, description: "Pluto-ruled capacity to destroy and rebuild — alchemy as a way of life" },
    { name: "Psychological Insight", score: 93, description: "An uncanny ability to perceive motives, shadows, and the unspoken dynamics beneath the surface" },
    { name: "Loyalty & Devotion", score: 90, description: "Once trust is earned, your commitment runs to the marrow — you protect what you love" },
    { name: "Mystery & Magnetism", score: 88, description: "A presence that draws others in while revealing yourself only to the worthy" },
  ],

  strengths: [
    {
      title: "Master of the Underworld",
      description: "You possess the rare ability to navigate darkness — your own and others' — without flinching. Where most avoid the shadow, you descend into it, extract its wisdom, and return transformed. This makes you an extraordinary healer, investigator, and guide.",
      deepDive: "Your capacity for depth isn't morbidity — it's a spiritual practice. You understand that what we repress doesn't disappear; it grows in the dark. By facing the shadow consciously, you transmute it into power. This makes you invaluable in therapy, crisis work, and any situation requiring someone who won't look away. The key is learning to distinguish between productive descent and compulsive dwelling — knowing when you've gathered what you need and when it's time to rise.",
    },
    {
      title: "Unshakeable Loyalty",
      description: "When you commit to someone, you commit completely. Your love is not casual; it's a bond that runs to the core. Those in your inner circle know they have an ally who will stand with them through anything.",
      deepDive: "Scorpio loyalty is born from the understanding that trust is sacred — and hard-won. You don't give it lightly because you know its weight. Once given, you protect it fiercely. Your challenge is ensuring that your devotion doesn't become possession — that the people you love feel supported rather than surveilled. The most evolved Scorpios learn that true loyalty includes the freedom for others to grow, even when that growth takes them beyond your control.",
    },
    {
      title: "Psychological Alchemist",
      description: "You see what others hide — from themselves and from the world. Your intuition cuts through façades, and you have a gift for helping people confront what they've been avoiding. In your presence, transformation becomes possible.",
      deepDive: "Your psychological depth comes from Pluto's domain — the underworld where nothing is wasted and everything can be recycled into wisdom. You understand that pain, when processed, becomes medicine. Your growth edge is learning when to use this gift and when to hold back — not everyone is ready for the mirror you offer, and forcing insight can create resistance. The most effective Scorpio healers know that transformation cannot be imposed; it must be invited.",
    },
  ],

  growthEdges: [
    {
      title: "Trust & Vulnerability",
      teaser: "Your greatest challenge is opening fully when your instincts have taught you to protect.",
      fullExplanation: "As the sign of depth and secrecy, you've learned that vulnerability can be weaponized. You may hold back in intimacy, test others' loyalty, or maintain emotional armor even with those who've earned your trust. True mastery for Scorpio lies not in invulnerability but in the courage to be seen — learning that the deepest connection requires the risk you've spent a lifetime avoiding. The people who love you want all of you, not just the parts you've deemed safe to show.",
      premiumHook: "Unlock your personalized trust framework with strategies tailored to your Pluto and Moon placements.",
    },
    {
      title: "Releasing Control",
      teaser: "Your need for depth can become a need to control the narrative — and the people in it.",
      fullExplanation: "Intensity is your superpower, but it can morph into possessiveness when you fear loss. You may struggle to let others have their own process, their own secrets, or their own pace of revelation. The Scorpio growth path includes learning that love deepens through freedom — that the people who stay by choice are more precious than those held by force. Releasing control doesn't mean caring less; it means trusting that what is meant for you will remain.",
      premiumHook: "Discover how your Mars and Venus placements shape your attachment style and receive custom relationship strategies.",
    },
    {
      title: "Transmuting Obsession",
      teaser: "Your capacity for focus can become fixation when directed toward the wrong targets.",
      fullExplanation: "Scorpio's fixed water gives you tremendous concentration — but when that intensity fixates on a grudge, a lost love, or a wound that won't heal, it can consume you. The evolved Scorpio learns to redirect their obsessive energy toward creation: art, healing work, spiritual practice, or the alchemy of their own transformation. What you focus on grows — the question is whether you're cultivating poison or medicine.",
      premiumHook: "Your premium report maps your Pluto aspects to reveal your fixation patterns and redirection strategies.",
    },
  ],

  relationships: `In relationships, Scorpio brings intensity, devotion, and a hunger for connection that goes beyond the surface. You love with your whole being — when you're in, you're all in. You need a partner who can meet your depth, honor your need for loyalty, and withstand the occasional storm of your emotional intensity.

Your love language is transformation — you show care through fierce protection, profound intimacy, and the willingness to go into the dark places together. You struggle with trust; you may test your partner or withhold full vulnerability until you're certain they won't betray you. What you're learning is that certainty is an illusion — the bravest love is the one that risks anyway.

The Scorpio partner at their best is devoted, passionate, and capable of a bond that feels like destiny. At your growing edge, you're discovering that the deepest intimacy comes not from possession but from mutual freedom within commitment.`,

  compatibilityNotes: {
    Cancer: "Water meets water — profound emotional understanding, shared need for depth and security. Both value loyalty and home; the challenge is avoiding mutual moodiness.",
    Pisces: "A mystical union of the two most intense water signs. Pisces brings transcendence; Scorpio brings grounding. Together you can access realms of feeling others never touch.",
    Taurus: "Your zodiac opposite — magnetic attraction with built-in tension. Taurus teaches you stability; you teach Taurus transformation. Sensual and stubborn when aligned.",
    Virgo: "Earth and water create fertile ground. Virgo's discernment meets your depth; both value loyalty and service. Virgo can help you organize your intensity; you can help Virgo feel.",
    Capricorn: "A powerful alliance of ambition and depth. Capricorn brings structure; Scorpio brings transformation. Both understand the long game and are willing to work for what matters.",
  },

  careerPaths: `Scorpio thrives in careers that reward depth, transformation, and psychological insight. You're naturally drawn to roles where you can uncover truth, heal wounds, or wield power responsibly — environments where surface-level work feels like a waste of your gifts.

You excel as therapists, investigators, surgeons, researchers, crisis counselors, occultists, financial strategists, and any role that requires penetrating beneath appearances. You're also effective in positions of power — leadership, politics, espionage — where your ability to read people and situations becomes an asset.

The careers that drain you are those requiring constant superficiality, forced cheerfulness, or the pretense that darkness doesn't exist. You need work that matters, that goes deep, and that allows you to transform something — whether that's a person, a system, or a mystery.`,

  workStyle: `You work with intense focus and a preference for meaningful projects over busywork. You're the colleague who uncovers what others miss, who commits fully to initiatives that matter, and who may struggle with casual workplace politics. You prefer autonomy, confidentiality when appropriate, and the sense that your work has real impact. You may need support for delegation and for releasing projects once your part is done.`,

  spiritualTheme: `Your spiritual journey is one of conscious transformation — learning to use your power to alchemize rather than destroy. The Scorpio soul lesson is that the greatest strength lies in the willingness to die to the old self and be reborn. You're here to learn that mystery is not something to be solved but to be honored — and that the deepest power comes from vulnerability, not from the armor you've built to survive.`,

  lifeLessons: [
    "Trust is a risk worth taking",
    "Release is not loss — it is the precondition for rebirth",
    "Your intensity is a gift when directed toward creation",
    "The shadow, when faced, becomes a source of power",
    "The deepest love holds loosely",
  ],

  toolkit: [
    {
      title: "The Phoenix Ritual",
      context: "When you're stuck in a grudge, a fixation, or a wound that won't heal",
      action: "Write the full story of what happened — every detail, every feeling. Then burn it (safely) or destroy it. Speak aloud: 'I release this. I choose what comes next.' Create one small act that represents the new chapter. Scorpio transforms through ritual.",
    },
    {
      title: "The Trust Experiment",
      context: "When you're withholding vulnerability from someone who has shown you care",
      action: "Choose one thing you've been holding back — a fear, a desire, a piece of your past. Share it. Notice what happens. Often the act of risking creates the safety you've been waiting for.",
    },
    {
      title: "Depth Direction Check",
      context: "When your intensity feels scattered or misdirected",
      action: "Ask: 'Is this focus serving my evolution or my fixation?' If it's the latter, redirect. Channel the same energy into something that transforms you or others — creative work, healing, study. Scorpio power is neutral; you choose its use.",
    },
  ],

  descriptionInsight: "Scorpio is the zodiac's alchemist — fixed water that turns shadow into gold through depth, intensity, and the courage to transform. As the sign of the Scorpion, you carry the energy of the underworld: penetrating, mysterious, and unafraid of what lies beneath. Your Pluto-ruled nature drives you to uncover truth, heal wounds, and forge bonds that run to the marrow.",
};
