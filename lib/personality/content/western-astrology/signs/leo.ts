import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "leo";

export const LEO: ZodiacSignContent = {
  sign: "Leo",
  name: "The Luminary",
  shortName: "The Lion",
  tagline: "Born to shine — your radiance gives others permission to glow",
  color: "#C97A30",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Fire",
  modality: "Fixed",
  rulingPlanet: "Sun",
  symbol: "♌",

  sunOverview: `Leo Sun is the zodiac's radiant center — fixed fire that burns steadily and illuminates everything in its orbit. You are not just visible; you are magnetic, carrying a quality of presence that draws attention and admiration not through seeking it but through simply being fully yourself.

The Sun itself is your ruling luminary, making this the sign where solar energy is most naturally expressed. You embody warmth, generosity, creative power, and the fundamental human need to be seen, appreciated, and celebrated for who you truly are.

Your fixed nature means your fire isn't the flickering flame of impulse but the sustained blaze of conviction. Once you commit to something — a vision, a person, a creative project — you pour your entire heart into it with a loyalty and dedication that borders on the sacred. You don't just participate in life; you perform it, turning the everyday into something extraordinary.`,

  moonOverview: `A Leo Moon needs to feel special — not from vanity but from a deep emotional need for recognition and appreciation. Your emotional wellbeing is directly tied to whether you feel seen, valued, and celebrated by those who matter to you.

This placement gives you emotional warmth and generosity — you love dramatically, express feelings with theatrical flair, and bring sunshine to others' difficult moments. The shadow is an emotional dependence on external validation: when applause fades, you may question your worth. Learning that your inner light doesn't require an audience is your Moon's deepest lesson.`,

  risingOverview: `Leo Rising commands a room before speaking a word. People sense your presence — you carry yourself with a natural dignity and warmth that makes others instinctively pay attention. Your physical appearance often includes striking features: expressive eyes, a warm smile, or a mane-like quality to your hair.

This ascendant approaches the world as a stage, not from insecurity but from a genuine desire to make every moment meaningful. You make eye contact, offer genuine compliments, and treat social interaction as an opportunity to uplift. First impressions include "charismatic," "confident," and "unmistakably warm."`,

  coreEnergies: [
    { name: "Radiant Presence",     score: 96, description: "Sun-ruled magnetism that draws attention and warms everyone in your orbit without conscious effort" },
    { name: "Creative Expression",   score: 93, description: "Fixed fire channeled into art, performance, leadership, and the transformation of the ordinary into the extraordinary" },
    { name: "Generous Heart",        score: 94, description: "A boundless capacity for giving — love, attention, resources, and encouragement — to those you care about" },
    { name: "Courageous Loyalty",    score: 92, description: "Fixed-sign devotion combined with fire-sign bravery — you stand by your people against all odds" },
    { name: "Natural Authority",     score: 90, description: "An innate quality of leadership that inspires confidence and willing followership in others" },
  ],

  strengths: [
    {
      title: "Magnetic Presence",
      description: "You possess a quality of being that makes people want to be near you, listen to you, and follow your lead — a natural charisma rooted in genuine warmth rather than calculation.",
      deepDive: "Your magnetism comes from the Sun's influence — you radiate. This isn't about seeking attention; it's about a fullness of self-expression that naturally attracts others. When you walk into a room fully embodied in your Leo nature, something shifts in the atmosphere. People stand a little taller, laugh a little louder, and feel permission to be more themselves. This is your real gift: not just shining, but giving others permission to shine too. The growth edge is learning to be equally comfortable when the spotlight moves elsewhere.",
    },
    {
      title: "Boundless Generosity",
      description: "You give extravagantly — your time, your attention, your resources, your heart. Leo's generosity isn't calculated; it flows from a genuine abundance of spirit.",
      deepDive: "Your generosity is your solar nature expressing itself through giving. You throw lavish parties, give gifts that show deep thoughtfulness, champion friends' successes as loudly as your own, and invest your creative energy into making others' lives more beautiful. This is not people-pleasing — it's the natural overflow of a heart that runs hot. The growth edge is ensuring your generosity isn't a covert bid for appreciation and learning to give without attachment to reciprocation.",
    },
    {
      title: "Creative Courage",
      description: "You approach creative expression with the bravery of a lion — willing to put your whole self into your art, your work, and your vision without hedging or holding back.",
      deepDive: "Fixed fire gives you the sustained creative power that mutable and cardinal signs often lack. You don't just have ideas — you execute them with full-hearted commitment. Your creative courage means you're willing to fail publicly rather than play it safe privately. This makes you a natural performer, artist, entrepreneur, and leader in any field that rewards authentic self-expression. The evolution is separating your creative identity from your personal worth — understanding that a failed project doesn't mean a failed self.",
    },
  ],

  growthEdges: [
    {
      title: "Releasing the Need for Applause",
      teaser: "Your emotional wellbeing can become dangerously dependent on external validation and recognition.",
      fullExplanation: "The Sun sign naturally seeks to be seen, and when this need is unexamined, it can create a cycle of performing for approval rather than expressing authentic self. You may avoid situations where you won't shine, suppress qualities that might not be celebrated, or experience disproportionate devastation when your contributions go unrecognized. The evolved Leo generates their own warmth — finding the inner sun that burns regardless of audience.",
      premiumHook: "Your premium report examines your Sun-Moon dynamic to reveal your specific validation patterns and pathways to self-sourced confidence.",
    },
    {
      title: "Embracing Vulnerability",
      teaser: "Your regal composure can prevent others from seeing the real you — wounds, doubts, and all.",
      fullExplanation: "Leo's natural dignity can become a mask that hides vulnerability. You may present confidence when you feel terrified, project success when you're struggling, or avoid asking for help because it feels like admitting weakness. The growth path involves learning that vulnerability is not the opposite of strength — it's its deepest expression. The lion who can show their soft underbelly invites a quality of connection that the roaring lion never can.",
      premiumHook: "Discover how your 12th house and Neptune placements shape your relationship with vulnerability and hidden depths.",
    },
    {
      title: "Sharing the Stage",
      teaser: "Your powerful presence can inadvertently overshadow others' contributions and need for recognition.",
      fullExplanation: "Your natural magnetism means you attract attention even when you're not trying — which can leave collaborators feeling invisible. You may unconsciously dominate conversations, redirect focus to your perspective, or struggle to genuinely celebrate others' achievements without comparing them to your own. The evolved Leo becomes the sun that other planets orbit around in harmony — elevating everyone's light rather than outshining them.",
      premiumHook: "Your chart reveals your collaboration style and specific strategies for amplifying others' light alongside your own.",
    },
  ],

  relationships: `In relationships, Leo brings passion, loyalty, and a theatrical quality of love that makes your partner feel like the most important person in the world. You love grandly — with gestures, devotion, and a warmth that makes even ordinary moments feel special.

You need a partner who sees you — truly sees you — and isn't afraid to express their admiration. Neglect is more painful to you than conflict, because conflict at least means you matter. You need someone who matches your capacity for loyalty, who celebrates your successes without jealousy, and who has enough of their own fire to keep you interested.

The Leo partner at their best is magnificently devoted, endlessly encouraging, and capable of turning a relationship into a love story worth telling. At your growing edge, you're learning that the deepest love isn't about being adored — it's about being truly known, shadows and all.`,

  compatibilityNotes: {
    Aries: "Fire-fire ignition — Aries matches your courage and gives you the adventurous partnership you crave. A relationship of mutual admiration and excitement.",
    Sagittarius: "Fellow fire sign who shares your enthusiasm and adds philosophical depth — a joyful, expansive, laughter-filled pairing.",
    Aquarius: "Your zodiac opposite — Aquarius challenges your ego with humanitarian perspective; you warm Aquarius' detached idealism with heart.",
    Libra: "Air feeds fire — Libra's grace and social intelligence complement your warmth and charisma. A glamorous, romantic partnership.",
    Taurus: "Fixed-sign loyalty meets fixed-sign stubbornness. When you align, this is deeply committed; when you clash, neither backs down.",
  },

  careerPaths: `Leo excels in careers that allow full creative self-expression, visibility, and the opportunity to inspire others. You're naturally drawn to performing arts, entertainment, leadership roles, entrepreneurship, fashion, luxury brands, event management, and education.

You thrive in roles where your personality is an asset — where being yourself is literally the job. You're also gifted at leadership positions in any field, because your natural authority and warmth create loyal teams who want to follow you.

The careers that drain you are anonymous, bureaucratic roles where your contributions are invisible and your individuality is suppressed.`,

  workStyle: `You work with full-hearted commitment, bringing creative energy and infectious enthusiasm to every project. You lead naturally and delegate effectively, but you need recognition for your efforts. Your ideal work environment values individuality, rewards excellence visibly, and gives you the autonomy to put your personal stamp on your work.`,

  spiritualTheme: `Your spiritual journey is one of sacred humility — learning that your light is not your possession but a force that moves through you. The Leo soul lesson is that true radiance comes not from performing your greatness but from surrendering to the creative force that expresses itself through you. You're here to learn that the highest form of self-expression is selfless expression — shining not for applause but because it's your nature.`,

  lifeLessons: [
    "Your worth exists independent of recognition — the sun doesn't need anyone to confirm it's shining",
    "Vulnerability is not the opposite of strength — it's the bravest expression of it",
    "True generosity gives without keeping score",
    "The most powerful leaders elevate others rather than standing above them",
    "Your light is not diminished by celebrating someone else's — it's amplified",
  ],

  toolkit: [
    {
      title: "The Validation Fast",
      context: "When you notice your mood is entirely dependent on external feedback and recognition",
      action: "Spend one full day without seeking or accepting compliments, likes, or praise. Create something — art, a meal, a letter — purely for yourself, with no intention of sharing it. Notice what arises when you create without an audience. This practice reveals where your inner sun truly lives.",
    },
    {
      title: "The Spotlight Share",
      context: "When you're in a leadership or collaborative role and want to ensure everyone feels valued",
      action: "Before each meeting or group interaction, identify one person whose contribution deserves recognition. Publicly highlight their work before discussing your own. Track how this practice changes the team dynamic over time.",
    },
    {
      title: "The Shadow Journal",
      context: "When you sense you're performing confidence rather than feeling it",
      action: "Write honestly about what you're actually feeling beneath the composed exterior. Include the doubts, fears, and insecurities you don't show anyone. This practice integrates your shadow and makes your authentic confidence — rather than performed confidence — the foundation of your presence.",
    },
  ],

  descriptionInsight: "Leo is the zodiac's radiant heart — fixed fire that sustains warmth, creativity, and generous leadership. Ruled by the Sun, you carry a magnetic presence and boundless creative spirit that elevates every environment you enter, inspiring others to embrace their own brilliance.",
};
