import type { MayanSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "caban";

export const CABAN: MayanSignContent = {
  sign: "Caban",
  name: "The Earth Navigator",
  shortName: "The Navigator",
  englishName: "Earth",
  tagline: "Rooted in the living planet — you read the signs the earth writes in quake and bloom",
  color: "#818D59",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  direction: "East",
  element: "Fire",

  overview: `Caban is the seventeenth Kin of the Tzolkin, the sacred 260-day count that maps the rhythmic pulse of creation. Represented by the Earth itself — the living, breathing body of the planet that the Maya understood not as inert matter but as a conscious, communicative being — Caban carries the energy of synchronicity, navigation, and attunement to the intelligence embedded in the natural world. Positioned in the East and aligned with the Red directional current, Caban holds the fire of new awareness ignited through direct contact with the terrestrial realm. In the Mayan worldview, the earth was not a backdrop to human life but an active participant, speaking through earthquakes, weather patterns, animal movements, and the flowering cycles of the ceiba — the World Tree, Wakah-Chan — whose roots and branches connected all levels of existence.

Those born under Caban possess a preternatural sensitivity to pattern, timing, and place. You think in systems, perceiving the interconnection between seemingly unrelated events with a clarity that can appear almost precognitive. The Maya were consummate observers of natural cycles — their calendrical systems, including the Haab solar count and the Tzolkin sacred count, emerged from millennia of meticulous attention to the rhythms of earth and sky. Caban individuals carry this observational genius in their bones. You notice what others overlook: the shift in atmosphere before an upheaval, the subtle signals that indicate a system is approaching a tipping point, the quiet indicators that a new season is about to begin.

Caban's connection to Hunab Ku — the One Giver of Movement and Measure — expresses through the principle that the universe is not random but patterned, and that those patterns are readable by a mind attuned to their frequency. Your sacred task is to serve as a navigator for your community, reading the signs that the living earth provides and translating them into guidance that helps others find their footing in times of upheaval and transition. Like the great Mayan astronomers who charted Venus cycles and eclipse patterns to guide agricultural and ceremonial timing, you align human action with natural rhythm.`,

  toneInteractions: {
    1: "Tone 1 (Hun — Unity) creates 1 Caban, a day of magnetic earth connection. The singular focus of Unity grounds your navigational awareness into one clear signal. This is a potent day for setting intentions related to place, home, or your relationship with the physical world. You become a focal point for others seeking grounding and orientation.",
    2: "Tone 2 (Ka — Duality) creates 2 Caban, illuminating the polarity between stability and upheaval. The Lunar tone reveals that the earth navigates through both calm and quake — and so must you. This energy invites you to examine how you relate to change: do you resist it, cling to familiar ground, or learn to ride the shifting terrain with adaptive grace?",
    3: "Tone 3 (Ox — Rhythm) creates 3 Caban, sparking creative movement from earthbound awareness. The Electric tone activates your observational gifts into dynamic expression — sharing your insights, initiating projects rooted in natural timing, or catalyzing others into aligned action. This is a day when your pattern recognition becomes contagious.",
    4: "Tone 4 (Kan — Stability) creates 4 Caban, doubling down on structural integrity. The Self-Existing tone reinforces your natural capacity for creating stable foundations. This combination excels at building systems, organizing spaces, and establishing practices that align human activity with ecological and seasonal rhythms.",
    5: "Tone 5 (Ho — Empowerment) creates 5 Caban, radiating grounded authority. The Overtone amplifies your navigational leadership, positioning you as someone others trust to guide them through uncertain terrain. Under this influence, your relationship with place and timing becomes a source of communal empowerment.",
    6: "Tone 6 (Uac — Flow) creates 6 Caban, harmonizing intellectual pattern recognition with somatic knowing. The Rhythmic tone brings organic balance to your earth awareness, helping you trust your body's signals as much as your mind's analysis. This is a day for walking, gardening, or any practice that connects thinking to the physical rhythm of the earth.",
    7: "Tone 7 (Uuc — Resonance) creates 7 Caban, the mystical midpoint where earth intelligence speaks through you most clearly. The Resonant tone attunes you to the subtle vibrations of place and timing — you may experience heightened synchronicity, powerful intuitions about location or direction, or a sense that the land itself is communicating with you.",
    8: "Tone 8 (Uaxac — Harmony) creates 8 Caban, integrating your earth awareness with ethical responsibility. The Galactic tone asks how your navigational gifts serve the greater whole. This energy supports environmental stewardship, sustainable planning, and any work that aligns human systems with ecological wellbeing.",
    9: "Tone 9 (Bolon — Completion) creates 9 Caban, bringing a cycle of earthly understanding to its fullest expression. The Solar tone illuminates patterns that have been developing beneath your awareness. This is a day of breakthrough insight — the puzzle pieces you've been collecting suddenly arrange themselves into a coherent map.",
    10: "Tone 10 (Lahun — Manifestation) creates 10 Caban, materializing your navigational vision into tangible results. The Planetary tone demands that your pattern reading produce concrete outcomes — actionable plans, physical structures, or decisions grounded in the intelligence of timing and place.",
    11: "Tone 11 (Buluc — Liberation) creates 11 Caban, shaking free from rigid frameworks. The Spectral tone brings creative destruction to Caban's tendency toward systematic thinking, reminding you that the earth itself is not static but dynamic, constantly remaking itself through volcanic eruption, erosion, and tectonic shift. Release the map; navigate by feel.",
    12: "Tone 12 (La Ka — Understanding) creates 12 Caban, crystallizing earth wisdom into shared knowledge. The Crystal tone brings cooperative clarity to your navigational insights, making this an ideal energy for teaching, collaborative planning, or leading others through a process of collective orientation and grounding.",
    13: "Tone 13 (Ox Lahun — Transcendence) creates 13 Caban, the cosmic expression of the Earth Navigator. The Cosmic tone elevates your awareness beyond the local and particular into the universal pulse of planetary consciousness. You perceive the earth not as a collection of places but as a single living intelligence — and your navigation becomes a form of communion with that intelligence.",
  },

  coreEnergies: [
    { name: "Pattern Intelligence", score: 94, description: "An extraordinary ability to perceive the underlying order in complex systems — you see the connections that others miss" },
    { name: "Synchronistic Awareness", score: 91, description: "A heightened sensitivity to meaningful coincidence and timing — you recognize when events are aligned and when they are not" },
    { name: "Somatic Knowing", score: 87, description: "Your body registers shifts in energy, atmosphere, and relational dynamics before your conscious mind catches up" },
    { name: "Adaptive Navigation", score: 89, description: "The capacity to find your way through uncertainty not by controlling the terrain but by reading it in real time" },
    { name: "Ecological Attunement", score: 85, description: "A felt sense of belonging to the natural world that informs your decisions, relationships, and sense of purpose" },
  ],

  strengths: [
    {
      title: "Systems Thinker",
      description: "You perceive the world in interconnected wholes rather than isolated fragments. Where others see random events, you see patterns, feedback loops, and the invisible threads connecting cause to distant effect. This makes you exceptional at navigating complexity.",
      deepDive: "The Mayan calendrical system — integrating the 260-day Tzolkin, the 365-day Haab, and the Long Count — is one of the most sophisticated pattern-tracking technologies ever devised. Caban individuals carry this systems intelligence innately. You can hold multiple timelines, variables, and stakeholder perspectives simultaneously, synthesizing them into coherent understanding. In professional contexts, this makes you the person who sees the unintended consequences of a policy change, the hidden opportunities in a market shift, or the systemic root of a recurring organizational problem.",
    },
    {
      title: "Master of Timing",
      description: "You have an intuitive sense of when to act, when to wait, and when to change direction. This isn't luck — it's a refined sensitivity to the rhythms of natural and social systems that others overlook.",
      deepDive: "Maya daykeepers — the Aj Q'ij — were masters of sacred timing, determining the optimal days for planting, harvesting, ceremony, and governance through careful reading of the Tzolkin's energy signatures. Caban channels this same intelligence. Your timing sense operates on multiple levels: you know when a conversation is ripe for a difficult truth, when a project has enough momentum to launch, and when a relationship has reached the point of necessary reckoning. Cultivating this gift means learning to trust it even when external pressure pushes for a different timeline.",
    },
    {
      title: "Grounding Presence",
      description: "In chaotic environments, you are the person others orient around. Your connection to earth energy gives you a stability that calms rooms, steadies teams, and provides a fixed point of reference when everything else is shifting.",
      deepDive: "This grounding quality is not rigidity but rootedness — like Wakah-Chan, the World Tree, which remains stable not because it is inflexible but because its roots run deep enough to hold fast through any storm. Your presence communicates: the ground beneath you is solid, even when the surface is turbulent. This makes you invaluable in crisis leadership, change management, and any context where others need someone to help them find their footing.",
    },
    {
      title: "Earth Storyteller",
      description: "You translate the abstract language of pattern and synchronicity into narratives that others can follow. Your gift is making the invisible visible — connecting dots in ways that give people a map they didn't know they needed.",
      deepDive: "The Maya recorded their calendrical and astronomical observations not as dry data but as living stories — myths that encoded scientific knowledge in narrative form. Caban carries this gift for translating complex systemic understanding into accessible, meaningful communication. You are the strategic thinker who can explain a complicated market dynamic in a single metaphor, or the friend who helps someone see the arc of their own life story when they are lost in the details.",
    },
    {
      title: "Evolutionary Resilience",
      description: "You respond to upheaval not with collapse but with adaptation. Like the earth itself — which rebuilds after every eruption, flood, and fire — you have a deep capacity to reorganize yourself around new realities.",
    },
  ],

  growthEdges: [
    {
      title: "Over-Intellectualizing the Body",
      teaser: "Your systems mind can override your body's simpler, more direct messages.",
      fullExplanation: "Caban's gift for pattern recognition can become so dominant that you start living in your analytical mind, constructing elaborate frameworks while ignoring the body's straightforward signals — fatigue, hunger, emotional saturation, the need for rest. The earth does not think about growing; it grows. Your growth edge is learning to honor the intelligence of your animal body alongside the intelligence of your pattern-seeking mind, recognizing that sometimes the most important information isn't a pattern but a sensation.",
      premiumHook: "Discover your personalized somatic practice — body-based exercises calibrated to your Caban-Tone combination that keep you grounded in felt experience.",
    },
    {
      title: "Earthquake Anxiety",
      teaser: "Because you sense shifts before they happen, you can live in a state of perpetual bracing.",
      fullExplanation: "Your sensitivity to systemic change means you often feel the tremors before others do — which can create a chronic low-grade anxiety, a sense that the ground is always about to shift. You may become hypervigilant, scanning for threats in every pattern, interpreting neutral data as warning signs. The Maya did not fear earthquakes — they understood them as the earth's way of releasing tension and creating new form. Your growth work is learning to trust the ground even when it shakes, knowing that disruption is often reorganization in disguise.",
      premiumHook: "Unlock your anxiety-to-awareness conversion toolkit — practices that transform hypervigilance into calm attentiveness.",
    },
    {
      title: "Losing the Forest for the Patterns",
      teaser: "Your love of systems can make you treat people as data points rather than feeling beings.",
      fullExplanation: "When pattern recognition becomes your primary lens, you risk reducing the richness of lived human experience to nodes in a network. Partners may feel analyzed rather than loved; colleagues may sense they are being strategically managed rather than genuinely connected with. Caban's deepest growth involves remembering that the earth is not a system — it is alive. And so are the people in your life. The map is not the territory, and the pattern is not the person.",
      premiumHook: "Your premium report identifies your specific relationship blind spots and provides Caban-specific practices for staying emotionally present.",
    },
    {
      title: "Difficulty with Uncharted Territory",
      teaser: "When there is no pattern to read, you may freeze rather than improvise.",
      fullExplanation: "Caban's navigational confidence depends on readable terrain — patterns, precedents, recognizable cycles. When you encounter something genuinely unprecedented — a life experience with no historical parallel, a creative challenge with no template — your usual tools fail, and you may feel groundless. The growth here is learning that navigation doesn't always require a map. Sometimes the path is made by walking, and the pattern will only become visible in retrospect.",
      premiumHook: "Discover your improvisational edge — how your specific Tone unlocks Caban's capacity for navigation beyond known patterns.",
    },
  ],

  relationships: `In relationships, Caban brings a rare combination of intellectual depth and physical presence. You love through attentiveness — noticing the patterns in your partner's moods, anticipating their needs before they articulate them, and creating a sense of stability that allows intimacy to deepen over time. You are the partner who remembers what was said three months ago, who connects today's conflict to the underlying dynamic that has been building, and who can navigate emotional terrain with the same skill you bring to any complex system.

Your ideal partner values substance over spectacle and can appreciate the gift of being truly seen. You need someone who is both grounded enough to stand on their own and adventurous enough to accompany you through the shifts and upheavals that your earth-sensitive nature attracts. Stagnation is death for Caban — you need a relationship that evolves, one that is willing to periodically shake its foundations and rebuild on higher ground.

The Caban partner at their best is deeply perceptive, unwavering in commitment, and capable of building a love that grows more resilient with every challenge. At your growing edge, you are learning that not everything in a relationship needs to be understood — that sometimes the most intimate act is sitting with mystery, allowing your partner to be unreadable, and trusting the bond even when you cannot see the pattern.`,

  compatibilityNotes: {
    Chicchan: "The Serpent's primal, kundalini energy activates Caban's earthbound awareness — together you create a relationship rooted in both physical vitality and intellectual depth.",
    Muluc: "Moon and Earth share a gravitational bond — Muluc's emotional tides and Caban's solid ground create a pairing of complementary forces, each stabilizing and energizing the other.",
    Cib: "The Ancestral Sage and the Earth Navigator both draw wisdom from the deep past — this pairing creates a relationship rich with historical awareness and mutual respect for what endures.",
    Ben: "Reed's vertical aspiration balances Caban's horizontal awareness — together you integrate the skyward pull of vision with the grounded reality of the terrain beneath your feet.",
    Kan: "Seed and Earth are natural partners — Kan plants the intention, Caban provides the fertile ground, and together you cultivate slow, steady, abundant growth.",
    Ahau: "The Sun illuminates Earth's terrain — Ahau's visionary clarity helps Caban see the larger purpose within the patterns, while Caban grounds Ahau's solar idealism in practical reality.",
  },

  careerPath: `Caban excels in vocations that require systems thinking, strategic foresight, and an ability to read complex, dynamic environments. You are naturally drawn to urban planning, environmental science, data analysis, cartography, logistics, emergency management, agriculture, and any field where understanding the interaction between multiple variables determines success.

Your unique gift is the ability to hold both the macro view and the ground-level detail simultaneously — to see the forest and the trees and the mycelial network connecting them underground. In organizational settings, you are the strategist who identifies the leverage points where small interventions create large systemic shifts. In creative contexts, you bring a structural intelligence that transforms chaotic inspiration into organized, buildable form.

Careers that drain Caban energy are those requiring sustained abstraction disconnected from tangible outcomes, or environments where natural rhythm is overridden by artificial urgency. You need work that respects timing, that allows your insights to mature at their own pace, and that recognizes the value of reading a situation thoroughly before acting on it.`,

  workStyle: `You work in rhythmic cycles that mirror natural patterns — periods of intense absorption followed by necessary fallow time where insights consolidate beneath the surface. Forcing yourself into artificial productivity schedules undermines the very intelligence that makes you valuable. Your best work emerges when you have the freedom to observe, synthesize, and then act in concentrated bursts of execution.

In teams, you serve as the navigator — the person who orients the group, identifies where you are in a process, and anticipates what is coming next. You prefer collaborative environments where diverse perspectives are valued, because your systems mind works best when it has multiple data streams to integrate. Your communication style is precise and image-rich, often drawing on metaphors from the natural world to make complex dynamics accessible.`,

  spiritualWisdom: `Caban's spiritual path is the Way of Sacred Attunement — the practice of aligning human consciousness with the intelligence of the living earth. The Maya understood the planet not as a resource to be exploited but as a conscious entity whose rhythms, when respected, guide humanity toward right relationship with all life. Caban individuals carry this understanding as an innate spiritual orientation rather than an intellectual belief.

Your spiritual practice naturally gravitates toward earth-based traditions — working with the land, observing seasonal transitions, honoring the cardinal directions, and recognizing that the earth's body and your own body are made of the same elements and subject to the same cycles. The Tzolkin itself is a technology of attunement, mapping the intersection of solar and galactic rhythms to help human beings synchronize their intentions with cosmic timing. As the seventeenth Kin, Caban is the sign most intimately connected to this synchronizing function.

The deepest teaching of Caban is that you are not on the earth — you are of the earth. The boundary between your body and the planet is a useful illusion, and dissolving it in meditation or ceremony reveals a mode of knowing that is older than language. Hunab Ku speaks through Caban as the intelligence of place — the understanding that where you are is never incidental, that the ground beneath you is always communicating, and that the patterns you perceive in the world are reflections of the patterns moving through you.`,

  lifeLessons: [
    "The earth is not a stage — it is a teacher. Every landscape holds information for those patient enough to read it",
    "Synchronicity is not coincidence but the visible surface of an underlying order your mind is beginning to perceive",
    "Stability is not the absence of movement but the capacity to remain rooted while everything changes around you",
    "Your body is your most honest instrument — when mind and body disagree, trust the body first",
    "Not every pattern requires a response — sometimes the wisest navigation is simply witnessing the terrain without trying to change it",
    "The ground will shake. Let it. What rebuilds after the quake is always stronger than what stood before",
  ],

  toolkit: [
    {
      title: "Earth Walk",
      context: "When you feel mentally overwhelmed by complexity or disconnected from your body's knowing",
      action: "Walk slowly and barefoot on natural ground for twenty minutes, deliberately paying attention to the sensation of the earth beneath your feet. With each step, release one analytical thought and replace it with a sensory observation. After the walk, journal whatever insight surfaces — it will often resolve the mental complexity you were struggling with.",
    },
    {
      title: "Pattern Map",
      context: "When facing a complex decision with many interconnected variables",
      action: "Draw the situation as a map rather than a list. Place the central question in the middle and connect all related factors, people, timelines, and forces around it. Notice which connections are strongest, which are weakest, and where energy is flowing or blocked. Caban's intelligence works best when it can see the whole terrain at once.",
    },
    {
      title: "Seasonal Check-In",
      context: "At the beginning of each new season or during major life transitions",
      action: "Sit quietly and ask: What is wanting to grow right now? What is wanting to rest? What needs to be harvested? What needs to be released? Align your priorities with the answers. This practice keeps your actions synchronized with natural timing rather than fighting against it.",
    },
    {
      title: "Stillness Before Storms",
      context: "When you sense an upheaval approaching — in work, relationships, or personal life",
      action: "Rather than bracing or trying to prevent it, create a deliberate period of stillness. Ground yourself in your body, in your home, in the present moment. Affirm: I am rooted enough to weather this. The earth navigates through quakes not by resistance but by absorption and reorganization. Trust your capacity to do the same.",
    },
  ],

  descriptionInsight: `Caban is the Tzolkin's Earth Navigator — the sign attuned to the living intelligence of the planet and the patterns embedded in the natural world. As the seventeenth Kin, you carry the fire of the East and the capacity to read the terrain of life with extraordinary clarity. Your gift is systems thinking wedded to somatic awareness, making you a natural guide for anyone navigating complexity, transition, or the challenge of aligning human action with ecological rhythm.`,
};
