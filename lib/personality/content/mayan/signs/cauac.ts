import type { MayanSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "cauac";

export const CAUAC: MayanSignContent = {
  sign: "Cauac",
  name: "The Thunder Catalyst",
  shortName: "The Catalyst",
  englishName: "Storm",
  tagline: "Born from lightning — you shatter stagnation and awaken the world through transformation",
  color: "#2D2D5E",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  direction: "West",
  element: "Earth",

  overview: `Cauac is the nineteenth Kin of the Tzolkin, the sacred 260-day count through which the Maya mapped the interplay of cosmic forces upon human destiny. Represented by the Storm — the thunderhead that builds in towering columns before releasing its charge in lightning, rain, and purifying wind — Cauac carries the energy of catalytic transformation, emotional intensity, and the regenerative power that follows every destruction. Positioned in the West and aligned with the Black directional current, Cauac embodies the liminal space of dusk, the threshold between the visible and invisible worlds, and the earth element at its most dynamic — not stable ground but tectonic upheaval, volcanic eruption, the creative violence through which new landscapes are born.

Those born under Cauac are agents of necessary change. You carry an emotional voltage that others feel immediately — a crackling intensity that can electrify a room or set it on edge, depending on how consciously you wield it. The Maya associated the West with Xibalba, the underworld realm of trials and transformation, and Cauac's Black current connects you directly to this realm of initiatory power. You do not fear the dark; you understand that darkness is not the absence of creation but its incubation chamber. Like the thunderstorm that builds from invisible atmospheric pressure until it can no longer be contained, your transformative energy accumulates beneath the surface until the moment of necessary release — and when it breaks, it changes everything it touches.

Cauac's relationship to Wakah-Chan — the World Tree — runs through the heartwood, the living center where sap moves with explosive upward force. This is the energy of growth that cannot be denied, the life force that cracks stone to make room for roots. Hunab Ku, the One Giver of Movement and Measure, expresses through Cauac as the principle that stagnation is the only true death — that the universe maintains its vitality through cycles of destruction and renewal, and that those who serve as catalysts for these cycles are performing sacred work. Your task is not to prevent storms but to become one when the world needs cleansing, and to learn how to bring the rain without losing yourself in the thunder.`,

  toneInteractions: {
    1: "Tone 1 (Hun — Unity) creates 1 Cauac, a day of magnetic catalytic force. The singular focus of Unity concentrates your storm energy into one powerful intention. This is a day for initiating transformation — beginning a process of change that you know will be disruptive but necessary. You become a lightning rod, drawing the energy of change toward a single point of impact.",
    2: "Tone 2 (Ka — Duality) creates 2 Cauac, illuminating the polarity between destruction and creation. The Lunar tone reveals that every storm is simultaneously an ending and a beginning — the same bolt that splits the tree also fires the seed. This energy invites you to honor both faces of your catalytic nature rather than identifying exclusively with the dramatic rupture.",
    3: "Tone 3 (Ox — Rhythm) creates 3 Cauac, giving dynamic expression to transformative energy. The Electric tone activates your storm force into creative movement — this is a day for artistic expression, passionate communication, or any endeavor that channels intensity into form. Your catalytic energy becomes contagious, sparking transformation in others.",
    4: "Tone 4 (Kan — Stability) creates 4 Cauac, grounding storm energy into structural change. The Self-Existing tone provides the container that prevents your intensity from becoming chaotic. This combination excels at building new systems from the ruins of old ones — the architecture of renewal that follows every necessary destruction.",
    5: "Tone 5 (Ho — Empowerment) creates 5 Cauac, amplifying your catalytic authority. The Overtone magnifies your storm presence, making your transformative influence undeniable. Others instinctively recognize you as someone who will change the dynamic of any situation you enter. The challenge is directing this amplified power with intentionality rather than letting it scatter.",
    6: "Tone 6 (Uac — Flow) creates 6 Cauac, harmonizing emotional intensity with rhythmic release. The Rhythmic tone brings organic balance to your storm nature, teaching you that transformation does not always require the dramatic thunderclap — sometimes it arrives as steady rain, gradual and sustaining. This is a day for gentle, persistent change.",
    7: "Tone 7 (Uuc — Resonance) creates 7 Cauac, the mystical midpoint where storm energy becomes pure resonance. The Resonant tone attunes your catalytic force to the frequencies of collective need — you sense where the atmospheric pressure has built beyond tolerance and instinctively move toward the point where release is most needed.",
    8: "Tone 8 (Uaxac — Harmony) creates 8 Cauac, integrating transformative power with ethical responsibility. The Galactic tone asks you to align your storm energy with the greater good — to ensure that the change you catalyze serves healing and evolution rather than mere disruption for its own sake. This energy supports the highest expression of sacred upheaval.",
    9: "Tone 9 (Bolon — Completion) creates 9 Cauac, bringing a cycle of transformation to its culmination. The Solar tone illuminates the full arc of change — from the initial pressure that necessitated the storm, through the rupture itself, to the renewal that follows. This is a day of completion, where the purpose of a difficult transformation finally becomes clear.",
    10: "Tone 10 (Lahun — Manifestation) creates 10 Cauac, materializing transformative vision into tangible reality. The Planetary tone demands that your catalytic energy produce measurable results — not just emotional catharsis but concrete change in structures, relationships, or circumstances. This is a day for implementing the new order that your storms have made possible.",
    11: "Tone 11 (Buluc — Liberation) creates 11 Cauac, unleashing storm energy at its most uncontained. The Spectral tone amplifies the dissolving, boundary-breaking aspect of your nature. Under this influence, you may experience or facilitate sudden, dramatic releases — breakthroughs, breakdowns, revelations that shatter existing frames. Channel this energy rather than suppressing it.",
    12: "Tone 12 (La Ka — Understanding) creates 12 Cauac, crystallizing the wisdom born from transformation. The Crystal tone brings cooperative clarity to your storm-forged insights, helping you share the lessons of upheaval with others in a way they can integrate. This energy supports group processing of shared transformative experiences.",
    13: "Tone 13 (Ox Lahun — Transcendence) creates 13 Cauac, the cosmic storm that reshapes reality itself. The Cosmic tone elevates your catalytic force beyond the personal and interpersonal into archetypal, transpersonal transformation. You touch the force that drives evolution — the creative destruction that is the engine of all becoming. This is Cauac at its most magnificent and most humbling.",
  },

  coreEnergies: [
    { name: "Catalytic Intensity", score: 95, description: "A volcanic inner force that builds beneath the surface and releases in transformative bursts — you change every environment you enter" },
    { name: "Emotional Depth", score: 92, description: "An oceanic capacity for feeling that gives your transformative work its power and authenticity — you do not catalyze from detachment but from the depths" },
    { name: "Regenerative Power", score: 90, description: "The ability to not just survive upheaval but to emerge from it renewed — like the landscape after the storm, you grow more fertile through disruption" },
    { name: "Purifying Force", score: 87, description: "An innate drive to clear away what is stagnant, false, or decayed — your presence accelerates the decomposition of whatever has outlived its purpose" },
    { name: "Sacred Rage", score: 85, description: "A righteous intensity that responds to injustice, stagnation, and dishonesty with the full force of the thunderhead — anger as a creative and cleansing power" },
  ],

  strengths: [
    {
      title: "Agent of Necessary Change",
      description: "You possess the rare courage to initiate transformation that others recognize as necessary but are too afraid to begin. Where stagnation has calcified a system, a relationship, or a pattern of living, you are the lightning bolt that cracks it open.",
      deepDive: "The Maya understood that the universe maintains its vitality through Katun cycles of creation and dissolution. Cauac individuals embody this principle at the human scale. You are not destructive for destruction's sake — you are responsive to the atmospheric pressure of stagnation, sensing when a situation has accumulated enough tension that only a catalytic release can restore flow. In organizational contexts, you are the leader who initiates the restructuring everyone knew was needed. In personal relationships, you are the one who names the elephant in the room. Your gift is the willingness to endure the temporary chaos of transformation because you can already feel the renewal on the other side.",
    },
    {
      title: "Emotional Alchemist",
      description: "You process emotions at an intensity that would overwhelm most people and transform them into creative power, insight, and healing. Your emotional range is not a liability but your primary instrument of change.",
      deepDive: "Where other signs might experience intense emotion as destabilizing, Cauac metabolizes feeling the way a thunderstorm metabolizes atmospheric heat — using the energy of intense experience to power transformation. Grief becomes compassion. Anger becomes advocacy. Fear becomes the fuel for courageous action. This alchemical capacity makes you extraordinarily effective in contexts that require emotional engagement — therapy, crisis intervention, creative work, activism, and any situation where the ability to feel deeply and act powerfully from that feeling determines the outcome.",
    },
    {
      title: "Regenerative Resilience",
      description: "You don't just survive upheaval — you become stronger, clearer, and more alive through it. Each storm you weather strips away another layer of the inessential, revealing more of your authentic core.",
      deepDive: "The landscape after a wildfire is the most fertile ground on earth. Cauac individuals understand this not as a metaphor but as a lived reality. Your biography likely includes significant disruptions — upheavals that appeared catastrophic in the moment but that you can now recognize as the precise conditions needed for your next phase of growth. This pattern is not coincidence; it is the fundamental operating principle of your Nawal energy. Your growth lies in learning to trust this regenerative capacity in advance — to enter the storm knowing you will emerge renewed rather than waiting for retrospective proof.",
    },
    {
      title: "Purifier of Stagnation",
      description: "Your presence naturally accelerates the breakdown of whatever has outlived its usefulness. Like the storm that clears heavy air, you bring a freshness to environments that have become stale, dishonest, or complacent.",
      deepDive: "This purifying function is not always comfortable — the air before a thunderstorm is heavy with charge, and people around you may feel a rising tension before the release comes. But the aftermath is undeniable: clarity, freshness, and the revitalized sense that comes from having cleared what was clogging the system. In professional settings, your purifying force is the quality that makes you the person called in when a project, team, or organization needs a reset.",
    },
    {
      title: "Keeper of Sacred Intensity",
      description: "In a culture that pathologizes intensity, you model the truth that depth of feeling is not dysfunction but a form of spiritual and creative power that the world desperately needs.",
    },
  ],

  growthEdges: [
    {
      title: "Addiction to Intensity",
      teaser: "When calm arrives, you may unconsciously create drama to feed your need for transformative charge.",
      fullExplanation: "Cauac's storm nature thrives on intensity — emotional, creative, relational. But when intensity becomes your baseline requirement for feeling alive, you may sabotage periods of peace, manufacture conflict to recreate the electric charge you know so well, or become restless and dissatisfied during the calm intervals between storms. The Maya understood that the Wayeb — the five quiet days at the end of the Haab solar year — were not emptiness but gestation. Your growth work is learning to inhabit the quiet with the same fullness you bring to the storm, recognizing that regeneration requires fallow time and that not every moment needs to crackle.",
      premiumHook: "Discover your specific intensity-calm rhythm — your personalized Cauac cycle map reveals when to storm and when to rest.",
    },
    {
      title: "Collateral Damage",
      teaser: "Your transformative force can unintentionally harm those who are not ready for the change you catalyze.",
      fullExplanation: "Storms do not discriminate — they clear what is stagnant and what is healthy alike. When your catalytic energy activates without sufficient awareness of its impact, the people closest to you may experience your transformation as a tornado tearing through their stability. Partners may feel whiplashed by your emotional intensity, colleagues may feel destabilized by changes you initiate, and your own nervous system may sustain damage from the constant internal weather. The growth edge is developing the meteorological awareness to direct your storms — to catalyze change where it is needed while sheltering what deserves to be preserved.",
      premiumHook: "Unlock your relational impact assessment — personalized practices for channeling Cauac energy without burning the people you love.",
    },
    {
      title: "Resistance to Gentleness",
      teaser: "You may equate softness with weakness, missing the transformative power of tenderness.",
      fullExplanation: "Cauac's Black directional current and its association with Xibalba's initiatory power can create a bias toward the dramatic, the intense, and the forceful. You may unconsciously dismiss gentleness as superficiality, mistake peace for complacency, or undervalue the slow, quiet forms of change — a conversation that shifts gradually over weeks, a practice that accumulates power through repetition, a love that deepens through steady attention rather than passionate upheaval. The fullest expression of Cauac includes the gentle rain alongside the thunderstorm — the understanding that water transforms rock not through a single explosive impact but through the patient persistence of flow.",
      premiumHook: "Your premium report reveals your gentleness archetype — the specific forms of softness that complement rather than compromise your Cauac intensity.",
    },
  ],

  relationships: `In relationships, Cauac brings an unforgettable emotional depth and a passion that can feel like being caught in a force of nature. You love with the full intensity of the thunderstorm — when you are present, you are completely present, and the electric charge you carry makes intimacy with you an experience that is visceral, transformative, and impossible to ignore. You do not do lukewarm. Your partners know they are loved because they can feel it in their bones.

Your ideal partner is someone with the emotional resilience to weather your intensity and the personal strength to remain rooted when your storms pass through. You need a partner who does not confuse your emotional range with instability, who understands that your tears and your fire are expressions of the same passionate engagement with life. Equally important, you need someone willing to hold you accountable — to tell you when your catalytic energy is creating unnecessary destruction rather than necessary transformation.

The Cauac partner at their best is devastatingly honest, fiercely protective, and capable of a love that transforms both people in ways they could never have anticipated. At your growing edge, you are learning that sustainable intimacy requires calm as much as intensity — that the most powerful bonds are forged not only in the heat of the storm but in the quiet mornings after, when two people choose each other again in the gentle, undramatic light of an ordinary day.`,

  compatibilityNotes: {
    Muluc: "Moon and Storm share the power of water — Muluc's tidal rhythms complement Cauac's torrential intensity, creating a pairing that moves between depth and release with extraordinary emotional fluency.",
    Etznab: "Flint and Storm share a transformative purpose — Etznab's clarity cuts through Cauac's emotional turbulence to reveal the signal within the noise, creating a partnership of catharsis and precision.",
    Manik: "The Deer Healer's gentle strength provides the grounding that Cauac's intensity needs — Manik holds steady while the storm passes, and helps rebuild what was broken with patient, healing hands.",
    Imix: "The primordial Crocodile and the elemental Storm share a raw, creative power — this pairing is deeply generative, capable of birthing entirely new realities from the meeting of their combined forces.",
    Kan: "Seed and Storm create the conditions for explosive growth — Kan plants the intention, Cauac provides the lightning and rain that break the seed open and drive it upward into manifestation.",
    Ahau: "Sun and Storm together produce the rainbow — Ahau's solar consciousness illuminates the purpose within Cauac's upheaval, while Cauac's transformative intensity keeps Ahau from becoming complacent in its radiance.",
  },

  careerPath: `Cauac thrives in vocations that harness intensity, navigate crisis, and facilitate transformation. You are naturally drawn to emergency medicine, psychotherapy, social activism, crisis management, performing arts, investigative work, and any field where the ability to remain functional under extreme pressure is the defining professional skill.

Your catalytic nature makes you exceptional at turnaround work — entering failing organizations, stagnant projects, or stuck creative endeavors and providing the energetic charge needed to break through inertia. You are the surgeon brought in for the complex operation, the consultant hired when incremental change has failed, the artist whose work confronts audiences with truths they need to feel rather than merely understand.

Careers that drain Cauac energy are those requiring sustained calm, meticulous routine, or environments where emotional expression is suppressed. You need work that allows for the full range of your intensity, that values passion as a professional asset, and that recognizes that the most important transformations are rarely comfortable.`,

  workStyle: `You work in powerful cycles — periods of intense, consuming creative or productive energy followed by necessary recovery. Attempting to maintain a steady, moderate output flattens your natural rhythm and produces work that lacks the vitality of your full expression. Your best results come from environments that accommodate your cyclical nature: intense sprints followed by genuine rest.

In teams, you serve as the catalytic agent — the person who shakes the group out of its comfort zone, challenges assumptions, and injects the emotional energy needed to move a project past its stuck points. You are most effective when your intensity is welcomed rather than managed, and when your colleagues understand that your passionate engagement — even when it creates temporary discomfort — is in service of the best possible outcome. Your leadership style is transformational: you inspire not through comfort but through the vision of what lies on the other side of the necessary upheaval.`,

  spiritualWisdom: `Cauac's spiritual path is the Way of Sacred Upheaval — the understanding that the universe evolves not through smooth, incremental progress but through cycles of creative destruction and renewal that the Maya encoded in their cosmological narratives of world ages and cosmic reset. The Lords of Xibalba — the underworld beings who tested the Hero Twins in the Popol Vuh — represent the initiatory forces that Cauac naturally channels: the trials that appear to be obstacles but are actually the mechanism through which consciousness refines itself.

Your spiritual practice naturally gravitates toward transformative modalities — sweat lodges, breathwork, ecstatic dance, vision quests, and any practice that uses intensity as a vehicle for breakthrough. The Tzolkin positions Cauac as the penultimate sign for good reason: it is the final purification before Ahau's solar culmination, the last great storm that clears the atmosphere so that the light of full consciousness can shine through. Your spiritual work is not to become calm but to become skilled — to wield your intensity with the precision of a Mayan lightning priest who calls the storm not from chaos but from ceremony.

The deepest teaching of Cauac is that transformation is not something that happens to you — it is something you are. You are the storm itself, not a person enduring one. Hunab Ku expresses through Cauac as the dynamic principle of change — the truth that the universe is not a thing but a process, not a noun but a verb, and that those who align with this fundamental dynamism become instruments through which creation continuously reinvents itself. Your suffering comes from resisting your own nature; your liberation comes from surrendering to it.`,

  lifeLessons: [
    "The calm after the storm is not emptiness — it is the most fertile moment of the entire cycle",
    "Your intensity is not a flaw to be managed but a force to be mastered — learn to storm with precision",
    "Not every stagnation requires a thunderbolt — sometimes the gentlest rain dissolves what lightning cannot crack",
    "The people who love you need shelter as much as they need your fire — learn to be both the storm and the harbor",
    "Transformation without integration is just destruction — always stay for the rebuilding, not just the breaking",
    "You were born to change the weather — but even you need seasons of rest between the storms",
  ],

  toolkit: [
    {
      title: "The Storm Journal",
      context: "When emotional intensity is building and you feel the pressure of an approaching internal storm",
      action: "Before the storm breaks outward, give it a private channel. Write without stopping for fifteen minutes — uncensored, unstructured, raw. Pour the full force of your feeling onto the page. This practice allows you to discharge enough pressure to choose your response rather than react from the eye of the storm.",
    },
    {
      title: "Calm Immersion",
      context: "During the quiet periods between your natural intensity cycles, when restlessness tempts you to manufacture drama",
      action: "Deliberately immerse yourself in calm — a slow walk in nature, an evening without screens, a conversation that goes nowhere in particular. Notice the discomfort that arises when nothing intense is happening. Sit with it. Your Wayeb practice — your sacred fallow time — is where the next storm gathers its purpose.",
    },
    {
      title: "Impact Radius Check",
      context: "Before initiating a significant change in a relationship, project, or life situation",
      action: "Map everyone who will be affected by the transformation you are about to catalyze. For each person, ask: Are they prepared for this? Have I given them enough warning? Is there a way to shelter them from unnecessary damage while still achieving the necessary change? This practice channels your storm through ethical awareness rather than blind force.",
    },
    {
      title: "Lightning Rod Ritual",
      context: "When you feel overwhelmed by emotional intensity and need a physical channel for the energy",
      action: "Move your body with maximum intensity for exactly seven minutes — sprint, drum, dance, shake, scream into a pillow. Then stop completely. Lie flat on the ground and breathe slowly for seven minutes. This oscillation between full expression and complete stillness trains your nervous system to move through intensity without getting stuck in it.",
    },
  ],

  descriptionInsight: `Cauac is the Tzolkin's Thunder Catalyst — the storm force that shatters stagnation and creates the conditions for profound renewal. As the nineteenth Kin, you carry the Black current of the West and the dynamic Earth element, connecting you to Xibalba's transformative power and the creative violence through which new realities are born. Your gift is catalytic intensity — the courage to bring the storm when the world needs cleansing, and the regenerative power to rebuild beauty from the ruins.`,
};
