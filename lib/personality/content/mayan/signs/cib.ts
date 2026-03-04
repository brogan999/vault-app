import type { MayanSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "cib";

export const CIB: MayanSignContent = {
  sign: "Cib",
  name: "The Ancestral Sage",
  shortName: "The Sage",
  englishName: "Owl",
  tagline: "Keeper of ancient memory — you walk between worlds to bring wisdom forward",
  color: "#876E00",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  direction: "South",
  element: "Water",

  overview: `Cib is the sixteenth Kin of the Tzolkin, the sacred 260-day count that organizes all life within the Mayan cosmological framework. Represented by the Owl — the nocturnal sentinel who sees through darkness — Cib carries the energy of ancestral wisdom, karmic memory, and the courage required to forgive. In the Yucatec Maya tradition, this sign is associated with the vulture or condor as well, a creature that transmutes death into sustenance, turning what others discard into nourishment for the soul. Cib's position in the South aligns it with the Yellow directional current, the pathway of the ancestors and the ripening of experience into understanding.

Those born under Cib possess a gravity that others sense immediately. You are an old soul in the truest Mesoamerican sense — the Maya believed that certain Nawal spirits carried the accumulated wisdom of many cycles through the Haab and Tzolkin counts, returning to the Middleworld not to learn but to remember. Your connection to Xibalba, the underworld realm of trials and transformation, is not one of fear but of familiarity. You have an innate ability to sit with darkness, loss, and the shadow dimensions of human experience without flinching. This makes you a natural counselor, healer, and guide for those navigating their own descents.

Cib's relationship to the World Tree — Wakah-Chan — flows through the deepest roots, the parts that reach into the subterranean waters where memory is stored. Where other signs climb toward the canopy seeking light, you draw nourishment from below, pulling ancestral knowledge upward into present awareness. Hunab Ku, the supreme creative force, expresses through Cib as the principle that nothing is ever truly lost — every experience, every lifetime, every wound becomes compost for wisdom. Your sacred task is to honor the past without being imprisoned by it, transforming grief into grace and memory into medicine.`,

  toneInteractions: {
    1: "Tone 1 (Hun — Unity) creates 1 Cib, a day of magnetic ancestral calling. The singular focus of Unity channels your wisdom-seeking nature into one clear intention. This is a powerful day for initiating contact with lineage energies or beginning a practice of ancestor veneration. You become a beacon that draws others who are also seeking to reconnect with their roots.",
    2: "Tone 2 (Ka — Duality) creates 2 Cib, revealing the tension between remembering and releasing. The Lunar tone illuminates the polarity within your sage nature — the pull between honoring tradition and allowing evolution. Use this energy to examine where ancestral loyalty has become ancestral burden, and where healthy reverence has calcified into obligation.",
    3: "Tone 3 (Ox — Rhythm) creates 3 Cib, activating creative expression of ancient knowing. The Electric tone gives movement to what might otherwise remain hidden in contemplation. This combination sparks the impulse to share wisdom through art, story, or ceremony — to give ancestral memory a living voice rather than letting it remain a silent undercurrent.",
    4: "Tone 4 (Kan — Stability) creates 4 Cib, grounding wisdom into reliable structure. The Self-Existing tone provides the framework that Cib's deep knowing needs to become practically useful. This is an excellent energy for establishing rituals, building wisdom traditions, or creating systems that preserve important knowledge for future generations.",
    5: "Tone 5 (Ho — Empowerment) creates 5 Cib, radiating authoritative sagacity. The Overtone amplifies your natural gravitas, positioning you as a recognized elder or wisdom keeper regardless of your physical age. Others instinctively seek your counsel under this influence. The challenge is wielding this authority with humility rather than becoming rigid in your positions.",
    6: "Tone 6 (Uac — Flow) creates 6 Cib, harmonizing ancestral currents with present needs. The Rhythmic tone brings organic balance to your relationship with the past, helping you draw from memory without drowning in it. This is a day for finding the natural rhythm of grief and gratitude, allowing both to flow without suppression.",
    7: "Tone 7 (Uuc — Resonance) creates 7 Cib, the mystical midpoint where ancestral voices speak most clearly. The Resonant tone attunes your already-sensitive awareness to frequencies beyond ordinary perception. Dreams may carry messages, synchronicities cluster around ancestral themes, and you may feel the presence of those who have crossed into Xibalba with unusual clarity.",
    8: "Tone 8 (Uaxac — Harmony) creates 8 Cib, integrating wisdom into wholeness. The Galactic tone asks you to align your ancestral knowledge with universal truth — to distinguish between cultural conditioning and timeless wisdom. This energy supports the work of sorting inherited beliefs, keeping what serves and compassionately releasing what no longer fits.",
    9: "Tone 9 (Bolon — Completion) creates 9 Cib, a potent day for completing karmic cycles. The Solar tone brings your sage nature to its fullest expression, offering closure to patterns that have repeated across generations. This is one of the most powerful combinations for forgiveness work — releasing grievances that may have been carried not just in your lifetime but through your entire lineage.",
    10: "Tone 10 (Lahun — Manifestation) creates 10 Cib, grounding ancestral wisdom into tangible form. The Planetary tone demands that your knowledge produce real-world results. This is not a day for abstract contemplation but for applying what the ancestors have taught you — making decisions, sharing teachings, or creating something enduring from what you have learned.",
    11: "Tone 11 (Buluc — Liberation) creates 11 Cib, dissolving attachment to inherited patterns. The Spectral tone brings a necessary destruction to Cib's tendency to over-identify with the past. Under this influence, you can release ancestral burdens that were never yours to carry, freeing both yourself and your lineage from cycles of inherited suffering.",
    12: "Tone 12 (La Ka — Understanding) creates 12 Cib, crystallizing wisdom into communicable form. The Crystal tone brings cooperative clarity to your deep knowing, helping you articulate what you intuitively understand in ways that others can receive. This is an ideal energy for teaching, writing, or facilitating group ceremonies of remembrance and healing.",
    13: "Tone 13 (Ox Lahun — Transcendence) creates 13 Cib, the ultimate expression of the Ancestral Sage. The Cosmic tone elevates Cib beyond personal or even lineage wisdom into transpersonal, archetypal understanding. You touch the realm where individual memory dissolves into collective human experience — the place where all ancestors speak as one voice, and all wisdom traditions converge.",
  },

  coreEnergies: [
    { name: "Ancestral Memory", score: 93, description: "A profound connection to lineage wisdom — you instinctively access knowledge that feels older than your own lived experience" },
    { name: "Shadow Integration", score: 90, description: "The rare capacity to sit with darkness, grief, and the uncomfortable truths that others avoid, transforming them into understanding" },
    { name: "Karmic Forgiveness", score: 85, description: "A soul-level ability to release old grievances and transmute cycles of harm into cycles of healing" },
    { name: "Silent Authority", score: 88, description: "A gravitas that commands respect without loudness — people trust your judgment because it carries the weight of deep reflection" },
    { name: "Contemplative Depth", score: 91, description: "An inner stillness that allows you to perceive patterns and truths invisible to those who move too quickly through life" },
  ],

  strengths: [
    {
      title: "Keeper of Sacred Memory",
      description: "You carry an innate connection to ancestral and collective wisdom that transcends intellectual knowledge. Others sense that your understanding comes from somewhere deeper than study — it emerges from lived experience across multiple dimensions of time.",
      deepDive: "The Maya understood time as cyclical, not linear, and Cib embodies this understanding. Your wisdom does not accumulate in a straight line; it spirals, returning to the same themes with ever-deepening comprehension. This gives you an uncanny ability to recognize patterns — in relationships, in organizations, in cultural movements — because you perceive the underlying cycles that others, trapped in linear thinking, cannot see. The practical application of this gift is immense: you can anticipate consequences, identify root causes, and offer guidance that addresses the deep structure of problems rather than their surface symptoms.",
    },
    {
      title: "Transmuter of Darkness",
      description: "Where others flee from difficult emotions, painful truths, or uncomfortable silences, you hold steady. Your capacity to be present with suffering — your own and others' — makes you an extraordinary healer and counselor.",
      deepDive: "Cib's association with the owl and the vulture speaks to this alchemical gift. The owl sees in darkness; the vulture transforms death into life. You perform an emotional and spiritual version of this transmutation constantly, taking in what is wounded, decayed, or abandoned and finding within it the nutrients for growth. This is not positivity or silver-lining; it is a genuine metabolic process where pain becomes understanding and loss becomes the foundation for deeper connection.",
    },
    {
      title: "Bridge Between Worlds",
      description: "You naturally mediate between the seen and unseen, the past and present, the living and the departed. This liminal awareness makes you invaluable in any context that requires honoring what came before while building what comes next.",
      deepDive: "In Mayan cosmology, the Middleworld — where humans live — is constantly nourished by both the upper and lower realms. Cib individuals serve as conduits for this vertical exchange, ensuring that the wisdom of Xibalba and the vision of the celestial planes both inform present action. Practically, this manifests as an ability to honor tradition without being enslaved by it, to learn from history without repeating it, and to hold space for grief while simultaneously planting seeds of renewal.",
    },
    {
      title: "Gravity of Presence",
      description: "You don't need to speak loudly or perform confidence — your presence alone communicates depth and trustworthiness. People are drawn to confide in you, often sharing things they haven't told anyone else.",
      deepDive: "This quality is not something you cultivate; it is intrinsic to Cib energy. Your stillness creates a container that allows others to feel safe enough to access their own depths. In a world that rewards speed and surface, your willingness to go slow and go deep is a radical act — and one that people hunger for more than they consciously realize.",
    },
  ],

  growthEdges: [
    {
      title: "Melancholy as Identity",
      teaser: "Your affinity for the deep and somber can become a prison if you mistake sadness for profundity.",
      fullExplanation: "Cib's intimate relationship with grief, memory, and the shadow realms can create a gravitational pull toward melancholy that eventually feels like home. You may unconsciously resist joy, lightness, or celebration because they feel superficial compared to the depths you inhabit. The growth work here is recognizing that the ancestors you honor were not perpetually somber — Mayan ceremony was filled with color, music, dance, and laughter. Wisdom without joy is incomplete. The fullest expression of the Sage includes the ability to celebrate life with the same wholeness you bring to mourning.",
      premiumHook: "Discover which Tone pairings help you access joy without sacrificing depth — your personalized Cib joy map awaits.",
    },
    {
      title: "Carrying Others' Burdens",
      teaser: "Your capacity to hold darkness can lead you to absorb pain that isn't yours to process.",
      fullExplanation: "Because you are so skilled at sitting with suffering, people will deposit their grief, trauma, and unprocessed emotions at your feet — and your Cib nature may accept these offerings without question. Over time, you accumulate a weight that was never yours to carry. The ancestral wisdom traditions of the Maya included elaborate purification ceremonies precisely because those who work with the dead and the shadow realms need regular cleansing. Your growth lies in learning to be a witness to pain without becoming its vessel, to hold space without absorbing content.",
      premiumHook: "Unlock your personalized energetic boundary protocol — specific cleansing practices aligned with your Cib-Tone configuration.",
    },
    {
      title: "Paralysis of Perspective",
      teaser: "Seeing too many layers of meaning can freeze you when simple action is what's needed.",
      fullExplanation: "Your ability to perceive the deep patterns, karmic implications, and ancestral echoes in any situation is a gift — but it can also become a form of overwhelm. When every choice feels weighted with multigenerational significance, even small decisions can feel paralyzing. The owl sees everything in the dark, but it must still choose which prey to pursue. Your growth edge is learning when to trust your depth perception and when to trust the simplicity of the present moment, acting from instinct rather than analysis.",
      premiumHook: "Your premium report reveals your decision-making archetype and provides a framework for navigating complexity without freezing.",
    },
  ],

  relationships: `In relationships, Cib brings an extraordinary depth of devotion and emotional presence. You love with the weight of someone who understands impermanence — because you have felt the presence of those who have crossed over, you cherish the living with a tenderness that can be overwhelming in its intensity. You do not love lightly, and you do not leave easily. When you commit, it carries the gravity of a sacred vow.

Your ideal partner is someone who can match your emotional depth without drowning in it — a person unafraid of silence, comfortable with the full spectrum of human feeling, and willing to explore the shadow dimensions of intimacy that more surface-oriented signs avoid. You need a partner who respects your contemplative nature and doesn't interpret your quietness as distance or disengagement.

The Cib partner at their best is profoundly loyal, emotionally attuned, and capable of a love that transforms both people. At your growing edge, you are learning that relationships are not only a space for deep work but also for play, spontaneity, and the lightness that keeps two souls from becoming so enmeshed in each other's depths that they forget to come up for air.`,

  compatibilityNotes: {
    Imix: "Imix's nurturing, primordial energy provides the emotional warmth that balances your contemplative coolness — a pairing rooted in mutual caretaking and deep feeling.",
    Cimi: "A profound connection between two signs intimately familiar with death and transformation — you understand each other's relationship with darkness in ways that few others can.",
    Ix: "The Jaguar Shaman and the Ancestral Sage share a mystical bond — both dwell in liminal spaces and can explore the unseen realms together with rare trust and mutual respect.",
    Ahau: "Ahau's solar radiance illuminates your depths without dismissing them — this pairing balances shadow and light in a way that elevates both signs toward wholeness.",
    Eb: "Eb's pilgrimage energy resonates with your ancestral awareness — together you walk the long road of human experience with patience, compassion, and shared purpose.",
    Lamat: "Lamat's stellar brightness offers the joy and celebration that Cib sometimes struggles to access — a complementary pairing that encourages both depth and delight.",
  },

  careerPath: `Cib thrives in vocations that honor depth, legacy, and the transmission of wisdom across generations. You are drawn to roles where your contemplative nature and ancestral awareness serve a larger purpose — counseling, psychology, archaeology, history, genealogy, hospice care, museum curation, and any field that requires holding the tension between past and present with grace.

Your capacity to sit with difficult material without flinching makes you exceptional in therapeutic and healing contexts. You are the counselor people seek when surface-level advice has failed, the colleague trusted with the organization's most sensitive issues, the leader consulted when decisions carry long-term consequences that others fail to see.

Careers that drain Cib energy are those demanding constant extroversion, rapid superficial output, or environments that treat the past as irrelevant. You need work that allows for reflection, that values quality over speed, and that recognizes the importance of understanding context and history before charging into the future.`,

  workStyle: `You work best in environments that allow for deep focus and sustained contemplation. Open-plan offices with constant interruption are your kryptonite; you need periods of solitary immersion to access the depth that is your professional superpower. Your output tends to be deliberate and carefully considered rather than rapid and voluminous — but what you produce carries a weight and thoroughness that others recognize as exceptional.

You are the team member who asks the questions no one else thought to ask, who sees the historical patterns that inform present strategy, and who holds institutional memory with remarkable fidelity. Your leadership style is quiet but deeply effective — you lead through wisdom rather than charisma, earning authority through the consistent quality of your judgment.`,

  spiritualWisdom: `Cib's spiritual path is the Way of Sacred Memory — the understanding that consciousness does not begin at birth or end at death but flows through an unbroken chain of awareness connecting all who have lived, all who live now, and all who will come. In Mayan cosmology, the Owl Nawal guards the threshold between the Middleworld and Xibalba, ensuring that the wisdom of the underworld realm is not lost but carried upward through the roots of the World Tree into the living present.

Your spiritual practice naturally gravitates toward ancestor veneration, dreamwork, and practices that honor the continuity of consciousness. You may find yourself drawn to traditions that work with lineage healing — the recognition that trauma and wisdom alike travel through generations and that healing in the present can ripple backward and forward through time simultaneously. The Tzolkin teaches that each Kin contains the memory of every cycle that preceded it; as the sixteenth sign, Cib carries fifteen signs' worth of accumulated experience.

The deepest spiritual teaching of Cib is the paradox of forgiveness: that releasing the past is not betraying it but completing it. Hunab Ku, the One Giver of Movement and Measure, expresses through Cib the truth that every wound, when fully witnessed and honored, becomes a doorway. The Ancestral Sage does not forget — but learns to remember without suffering, transforming the weight of the past into the wings of wisdom.`,

  lifeLessons: [
    "The ancestors speak not only in words but in the patterns that repeat until you finally understand their message",
    "Grief fully honored becomes the compost from which new wisdom grows",
    "You can hold space for darkness without becoming it — the owl sees through the night but belongs to the sky",
    "Forgiveness is not a single act but a practice — each cycle of the Tzolkin offers another opportunity to release",
    "Your silence is not emptiness but fullness — learn to trust what you know before you can articulate it",
    "The past is a library, not a prison — visit often, but always return to the present",
  ],

  toolkit: [
    {
      title: "Ancestral Altar Practice",
      context: "When you feel disconnected from your roots or overwhelmed by present challenges that seem to have no clear origin",
      action: "Create a small altar with photographs, objects, or symbols representing your lineage. Spend ten minutes in quiet attention, not asking for anything but simply acknowledging the chain of lives that led to yours. Notice what emotions arise without judging them. This practice strengthens your innate Cib connection to ancestral guidance.",
    },
    {
      title: "The Owl's Perch Meditation",
      context: "When you need clarity on a situation that feels heavy with history or karmic weight",
      action: "Visualize yourself as the owl — perched high above the situation, seeing it from the vast perspective of the night sky. From this vantage point, what patterns emerge? What is the situation asking you to release, and what is it asking you to remember? Write down your observations within five minutes of emerging from the meditation.",
    },
    {
      title: "Burden Inventory",
      context: "When you notice yourself carrying an emotional heaviness that doesn't feel entirely your own",
      action: "List everything weighing on you. For each item, ask: 'Is this mine to carry, or am I holding this for someone else?' For anything that belongs to another person or generation, write it on a separate paper and ceremonially release it — burn it, bury it, or place it in running water. Keep only what is genuinely yours to work with.",
    },
    {
      title: "Joy as Medicine",
      context: "When your Cib nature has pulled you too deep into contemplation and the world feels heavy",
      action: "Deliberately seek one experience of uncomplicated joy — laughter with a friend, music that makes you move, time in sunlight. The ancestors celebrated as fiercely as they mourned; honor them by allowing lightness into your practice. Notice how joy doesn't diminish your depth but actually replenishes the energy you need to sustain it.",
    },
  ],

  descriptionInsight: `Cib is the Tzolkin's Ancestral Sage — the owl who sees through darkness and carries the accumulated wisdom of those who walked before. As the sixteenth Kin, you hold the energy of karmic memory, shadow integration, and the sacred courage required for true forgiveness. Your South-facing, Water-element nature connects you to the Yellow current of ripened experience, making you a natural counselor and keeper of the wisdom that flows between worlds.`,
};
