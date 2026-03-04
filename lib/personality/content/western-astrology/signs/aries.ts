import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "aries";

export const ARIES: ZodiacSignContent = {
  sign: "Aries",
  name: "The Pioneer",
  shortName: "The Ram",
  tagline: "Born to ignite — you move first and the world follows",
  color: "#A03B0F",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Fire",
  modality: "Cardinal",
  rulingPlanet: "Mars",
  symbol: "♈",

  sunOverview: `Aries Sun enters the zodiac at the vernal equinox — the first spark of a new astrological year. Yours is the energy of beginnings: bold, instinctive, and unapologetically direct. You don't wait for permission; you create momentum where none existed.

Mars, your planetary ruler, grants you a warrior's courage and a pioneer's restlessness. You're at your best when there's a frontier to conquer, a challenge to overcome, or a stagnant situation that needs someone brave enough to move first. Hesitation feels like a foreign language to you.

At your core, you carry the cardinal fire archetype — the initiator whose very presence catalyzes action in others. You inspire not through persuasion but through example, charging forward with a confidence that draws people into your orbit whether you intend it or not.`,

  moonOverview: `An Aries Moon processes emotions through action. Where others might sit with their feelings, you instinctively need to do something — move, create, confront, or build. Emotional stagnation is intolerable; you process by pushing forward.

This placement gives you a fierce emotional honesty. You rarely hide what you feel, and you recover from setbacks faster than most because your emotional body craves fresh starts. Anger flares brightly but burns out quickly — you'd rather clear the air than hold a grudge.`,

  risingOverview: `With Aries Rising, the world sees you as dynamic, direct, and slightly intimidating — even when you don't intend it. Your first impression is one of energy and confidence, a person who walks into a room like they belong there.

This ascendant gives you an athletic or sharp-featured appearance and a pace that others struggle to match. You approach new situations headfirst, preferring to figure things out through experience rather than overthinking. People sense your independence immediately.`,

  coreEnergies: [
    { name: "Drive & Initiative",  score: 95, description: "Cardinal fire at its peak — you set things in motion before others even recognize the opportunity" },
    { name: "Courage & Boldness",  score: 92, description: "Mars-ruled fearlessness that compels you toward challenges rather than away from them" },
    { name: "Independence",        score: 90, description: "A deep need to forge your own path, resistant to being controlled or defined by others" },
    { name: "Emotional Directness", score: 85, description: "You express what you feel without filter — honesty that can be both refreshing and startling" },
    { name: "Competitive Spirit",  score: 88, description: "An innate desire to test yourself against challenges and emerge victorious" },
  ],

  strengths: [
    {
      title: "Fearless Initiator",
      description: "You possess the rare ability to start things — projects, movements, conversations — where others hesitate. This cardinal fire energy means you're the person who breaks the ice, takes the first step, and creates the opening for everything that follows.",
      deepDive: "Your capacity for initiation isn't recklessness — it's a deep trust in your own instincts. Where others need data and consensus, you have an internal compass that points toward action. This makes you invaluable in any environment that has become paralyzed by analysis or fear. The key is learning to distinguish between impulse and intuition, channeling your pioneering energy toward goals that truly matter rather than scattering it across every new shiny opportunity.",
    },
    {
      title: "Natural Leader",
      description: "Leadership isn't something you pursue — it finds you. Your directness, courage, and willingness to take responsibility naturally position you at the front of any group endeavor.",
      deepDive: "Aries leadership is fundamentally different from the strategic, political leadership of other signs. You lead by doing, by being the first to take the risk, by embodying the courage you want to see in others. Your challenge is evolving from 'I'll do it myself' to 'Follow me' — learning that true leadership means empowering others to act, not just blazing the trail alone. The most effective Aries leaders are those who learn to match their speed with patience for those following behind.",
    },
    {
      title: "Resilient Recoverer",
      description: "You bounce back from setbacks with remarkable speed. While others nurse wounds, you're already planning your next attempt. This emotional resilience is one of your most underrated gifts.",
      deepDive: "Your recovery speed comes from Aries' relationship with the present moment. You don't dwell in the past because your energy is always oriented toward what's next. This isn't denial — it's a genuine capacity to metabolize difficulty and transform it into fuel. Each failure becomes data for the next attempt. The growth edge here is learning to distinguish between healthy resilience and avoidance — sometimes sitting with discomfort teaches lessons that pushing forward cannot.",
    },
  ],

  growthEdges: [
    {
      title: "Patience & Follow-Through",
      teaser: "Your greatest challenge is sustaining momentum after the initial excitement fades.",
      fullExplanation: "As the sign of beginnings, you excel at launches but can struggle with the long middle — the tedious, unglamorous work of seeing something through to completion. You may accumulate half-finished projects, abandoned enthusiasms, and relationships that lost their spark after the conquest phase. True mastery for Aries lies not in the charge but in the stay — learning that some of life's richest rewards require the patience you instinctively resist.",
      premiumHook: "Unlock your personalized follow-through framework with practical strategies tailored to your Mars placement.",
    },
    {
      title: "Listening Before Acting",
      teaser: "Your instinct to act can override your ability to hear what others are actually saying.",
      fullExplanation: "Speed is your superpower, but it can also be your blind spot. In your rush to solve, fix, or move forward, you may inadvertently steamroll perspectives that would have enriched your approach. The Aries growth path includes learning that sometimes the most powerful action is deliberate stillness — creating space for others' input before you decide on a direction.",
      premiumHook: "Discover how your Moon and Mercury placements shape your listening style and receive custom communication strategies.",
    },
    {
      title: "Tempering Intensity",
      teaser: "Your fire can warm or burn — learning the difference is your lifetime work.",
      fullExplanation: "Mars grants you passion and conviction, but unchecked, these become aggression and impatience. You may find that your directness, which you value as honesty, lands as harshness for more sensitive souls. The evolved Aries learns to modulate their intensity without dimming it — expressing anger cleanly, advocating fiercely without becoming combative, and channeling competitive energy into self-improvement rather than dominance.",
      premiumHook: "Your premium report maps your Mars aspects to reveal your specific intensity triggers and regulation strategies.",
    },
  ],

  relationships: `In relationships, Aries brings passion, loyalty, and an electric sense of aliveness. You love intensely and expect the same in return — lukewarm connections don't hold your attention. You need a partner who can match your energy, challenge you intellectually, and maintain their own independence without being threatened by yours.

Your love language is action — you show care through doing, protecting, and championing the people you love. Conflict doesn't scare you; in fact, you often find that honest disagreement deepens connection. What you struggle with is the subtler emotional work: the quiet maintenance of intimacy, the patience required for someone processing at a different speed than you.

The Aries partner at their best is fiercely devoted, endlessly exciting, and capable of creating a relationship that feels like an adventure. At your growing edge, you're learning that vulnerability — true emotional openness — is the bravest thing you'll ever do.`,

  compatibilityNotes: {
    Leo: "A fire-on-fire pairing that generates tremendous warmth, mutual admiration, and creative energy — though power struggles need mindful navigation.",
    Sagittarius: "Fellow fire sign who matches your enthusiasm and gives you the freedom you need — an adventurous, expansive partnership.",
    Libra: "Your zodiac opposite — magnetic attraction with built-in tension. Libra teaches you compromise; you teach Libra decisiveness.",
    Capricorn: "Both cardinal leaders with very different styles. When you align on goals, this pairing is unstoppable; without alignment, you clash on pace and method.",
    Cancer: "A challenging square aspect — Cancer's emotional depth can feel suffocating to your independence, but this pairing teaches profound lessons about nurturing and vulnerability.",
  },

  careerPaths: `Aries thrives in careers that reward initiative, courage, and independent thinking. You're naturally drawn to roles where you can lead, innovate, or compete — environments where bold action is valued over cautious conformity.

You excel as entrepreneurs, startup founders, emergency responders, athletes, surgeons, military leaders, and any role that requires quick decision-making under pressure. You're also surprisingly effective in advocacy and activism, where your willingness to confront injustice becomes a force for change.

The careers that drain you are those requiring endless patience, repetitive routine, or deference to slow-moving hierarchies. You need autonomy, clear challenges, and the freedom to act on your instincts.`,

  workStyle: `You work in bursts of intense, focused energy rather than steady, methodical output. You're the colleague who drives a project from zero to sixty in record time, but you may need support for the final refinement phase. You prefer clear objectives, minimal bureaucracy, and the authority to execute your vision without excessive oversight.`,

  spiritualTheme: `Your spiritual journey is one of conscious courage — learning to wield your fire as a force for creation rather than destruction. The Aries soul lesson is that true strength isn't about domination but about the vulnerability required to lead with an open heart. You're here to learn that the bravest act isn't charging into battle — it's staying present in the moments that ask for patience, tenderness, and surrender.`,

  lifeLessons: [
    "The most powerful action is sometimes deliberate stillness",
    "Vulnerability is a greater expression of courage than invulnerability",
    "Starting is your gift — finishing is your evolution",
    "Anger is information, not instruction",
    "Independence and interdependence are not opposites — they are partners",
  ],

  toolkit: [
    {
      title: "The 24-Hour Rule",
      context: "When your Mars impulse urges an immediate reaction — to a conflict, an opportunity, or a major decision",
      action: "Wait 24 hours before acting. Write down your initial impulse, then revisit it. You'll often find that your instinct was right but your timing or delivery needed refinement.",
    },
    {
      title: "Channel the Fire",
      context: "When frustration, restlessness, or anger builds without a clear target",
      action: "Move your body intensely — sprint, box, climb, dance. Aries processes through physical exertion. After 20 minutes of vigorous movement, revisit the situation. Your clarity will have sharpened dramatically.",
    },
    {
      title: "The Completion Log",
      context: "When you notice a pattern of starting projects but not finishing them",
      action: "Keep a visible list of your active commitments limited to 3 items. Nothing new gets added until something is completed. This creates the constraint that channels your initiating energy into follow-through.",
    },
  ],

  descriptionInsight: "Aries is the zodiac's ignition — cardinal fire that transforms potential into action. As the first sign, you carry the energy of new beginnings: bold, instinctive, and unapologetically direct. Your Mars-ruled nature drives you to lead, initiate, and pioneer, bringing courage and vitality to everything you touch.",
};
