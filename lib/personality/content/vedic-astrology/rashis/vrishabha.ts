import type { VedicRashiContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "vrishabha";

export const VRISHABHA: VedicRashiContent = {
  rashi: "Vrishabha",
  name: "The Earthen Guardian",
  shortName: "The Bull",
  tagline:
    "Rooted in Prithvi, refined by Shukra — the soul that builds heaven on earth.",
  color: "#315E36",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  element: "Prithvi",
  guna: "Tamas",
  graha: "Shukra",
  grahaEnglish: "Venus",
  symbol: "♉",

  chandraOverview: `Chandra in Vrishabha occupies one of its most favored positions in all of Jyotish — this is the sign of the Moon's exaltation. Here, the emotional body finds its deepest nourishment through sensory richness, material stability, and the quiet rhythms of nature. Shukra's rulership ensures that the feeling world is filtered through an aesthetic lens: beauty is not luxury but necessity, and the heart opens most fully in environments of harmony, comfort, and genuine abundance. The Nakshatras threading through Vrishabha — Krittika (padas 2–4), Rohini, and Mrigashira (padas 1–2) — each color Chandra's expression differently, from Krittika's purifying fire to Rohini's lush creativity to Mrigashira's restless curiosity.

Those born with Chandra in Vrishabha carry an emotional steadiness that others instinctively trust. Feelings run deep but are expressed with measured grace rather than dramatic eruption. There is a Tamasic groundedness here that anchors the psyche — not as inertia, but as the unshakable calm of fertile earth waiting to bring forth life. Shukra blesses this Moon with a refined palate for music, fragrance, texture, and taste; the native often finds emotional regulation through immersion in Prithvi-element activities like gardening, cooking, or crafting with natural materials.

Rohini Nakshatra, ruled by Brahma and presided over by Chandra itself, gives many Vrishabha Moon natives an almost magnetic capacity for nurturing. Relationships are tended like sacred gardens — with patience, devotion, and an expectation of slow, beautiful growth. The shadow arises when emotional security becomes possessiveness, or when the soul mistakes comfort for contentment. The Karmic invitation for Chandra in Vrishabha is to enjoy the material plane as divine gift while remembering that true Ananda lies beyond any object.`,

  suryaOverview: `Surya in Vrishabha expresses the soul's identity through themes of sustenance, value, and material stewardship. Where Mesha Surya blazes forward as the warrior, Vrishabha Surya builds — slowly, deliberately, and with exquisite attention to quality. The Atma-karaka here finds purpose not in conquest but in cultivation. Shukra's influence over this placement means the native's core identity is bound up with questions of worth: what do I value, what am I worth, and how do I translate inner beauty into tangible form? The Nakshatras at play — Krittika's transformative flame, Rohini's abundant creativity, and Mrigashira's seeking intelligence — provide distinct flavors of this solar expression.

The Prithvi element grounds Surya's radiance into practical manifestation. These natives are often recognized for their reliability, their capacity to turn vision into substance, and their unwavering loyalty to whatever they consider truly valuable. There is a dignity to Vrishabha Surya that does not need external validation — the Bull knows its own strength. Shukra's refinement ensures that this strength never becomes crude; even in assertiveness, there is grace. Krittika padas within Vrishabha lend a sharpness and purifying quality, while Rohini brings an almost divine artistry to how identity is expressed in the world.

The Tamasic guna operating through Surya creates a soul that learns through sustained engagement with the material realm. This is not spiritual bypassing — it is Dharma enacted through building, preserving, and beautifying. The growth edge lies in recognizing that identity cannot be fully secured through possessions or status, and that the deepest Shukra wisdom is Vairagya — the capacity to love beauty without clinging to it.`,

  lagnaOverview: `Vrishabha Lagna bestows a life path oriented around the accumulation and stewardship of resources — not merely financial, but resources of beauty, knowledge, skill, and human connection. The Ascendant in this Rashi creates a native whose physical constitution tends toward solidity and endurance, often with a naturally pleasant appearance blessed by Shukra's grace. The body itself becomes a vehicle for experiencing and expressing Prithvi-element Dharma: the hands that build, the voice that soothes, the presence that stabilizes any room it enters.

With Shukra as the Lagna lord, the entire life trajectory is shaped by Venusian themes — art, relationship, sensuality, value systems, and the pursuit of Lakshmi in both her material and spiritual forms. The Nakshatras rising on the Lagna degree further specify the path: Krittika rising (padas 2–4) brings a sharper, more discerning quality with Surya's sub-influence; Rohini rising gifts extraordinary charm, fertility of mind, and creative magnetism under Chandra's gentle eye; Mrigashira rising (padas 1–2) introduces a restless seeking quality tempered by Mangal's drive.

The Karmic architecture of Vrishabha Lagna places Vrischika — the sign of transformation, hidden depths, and Kundalini Shakti — in the seventh house of partnership. This axis teaches the native that lasting security (Vrishabha) can only be built when one is willing to face the depths of vulnerability and transformation (Vrischika). Simha in the fourth house brings a regal quality to the home and emotional foundation, while Kumbha in the tenth ensures that the native's public Dharma involves service to the collective. The life lesson is clear: root deeply, build beautifully, and share generously.`,

  coreEnergies: [
    {
      name: "Shukra Shakti",
      score: 92,
      description:
        "The refined creative force of Venus flows powerfully through Vrishabha, granting mastery over aesthetics, sensory experience, and the art of making the material world sacred. This is the energy of Lakshmi herself — abundance as spiritual practice.",
    },
    {
      name: "Material Wisdom",
      score: 88,
      description:
        "Prithvi element combined with Tamasic stability produces a soul with innate understanding of how the physical world works — from economics to ecology. Vrishabha builds wealth not through greed but through deep respect for the laws of material Dharma.",
    },
    {
      name: "Sensory Depth",
      score: 85,
      description:
        "Under Shukra's lordship, each sense becomes a gateway to deeper knowing. Music, fragrance, taste, texture, and visual beauty are not mere pleasures but tools of consciousness — the native perceives subtle truths through embodied experience that the mind alone would miss.",
    },
    {
      name: "Steadfast Will",
      score: 90,
      description:
        "The Tamasic guna in its highest expression grants Vrishabha an unwavering determination that outlasts every obstacle. Like the great Banyan tree, this energy grows slowly but becomes immovable — commitments are honored across decades, not merely seasons.",
    },
    {
      name: "Nurturing Force",
      score: 80,
      description:
        "Rohini Nakshatra's influence infuses Vrishabha with the capacity to nourish and sustain life in all its forms. Whether raising children, cultivating a garden, or building an organization, the native instinctively creates conditions where living things flourish.",
    },
  ],

  strengths: [
    {
      title: "Unshakable Patience",
      description:
        "Vrishabha possesses a Tamasic endurance that the other Rashis can only admire. Where Mesha charges and burns out, the Bull proceeds with measured, relentless consistency. Projects that require years of dedicated effort — mastering a craft, building a legacy, nurturing a relationship — are where Vrishabha truly excels.",
      deepDive:
        "This patience is rooted in Prithvi-element consciousness: an intuitive understanding that all great things grow slowly. The Nakshatras in Vrishabha reinforce this — Rohini, the star of growth and ascent, teaches that the most beautiful creations emerge from sustained attention. Shukra's influence ensures this patience never becomes mere stubbornness; there is artistry in the waiting, grace in the persistence.",
    },
    {
      title: "Sensory Intelligence",
      description:
        "Shukra blesses Vrishabha with extraordinary perceptual refinement. The native can discern quality by touch, detect emotional nuance through tone of voice, and assess the worth of things — material or relational — with uncanny accuracy. This is not superficial taste but a genuine form of Prajna operating through the senses.",
      deepDive:
        "In Jyotish, Shukra governs Bhrigu's lineage of wisdom — the seers who understood that the material and spiritual are not separate realms but different octaves of the same truth. Vrishabha's sensory intelligence is an echo of this lineage: the ability to perceive Brahman in beauty, to find the sacred in the tangible. Krittika's influence adds a discerning fire that separates the genuine from the counterfeit.",
    },
    {
      title: "Devotional Loyalty",
      description:
        "Once Vrishabha commits — to a person, a principle, or a path — the commitment is nearly absolute. This loyalty is not blind obedience but a Dharmic choice to honor bonds. Shukra governs relationships, and in the fixed earth of Vrishabha, relational bonds become as enduring as stone temples.",
      deepDive:
        "The Rohini influence within Vrishabha is key to understanding this loyalty. Rohini's deity is Brahma, the creator, and its Shakti is the power of growth. Vrishabha's loyalty is creative — it actively builds and nurtures whatever it is devoted to. The native doesn't just stay; they invest, cultivate, and pour beauty into what they love. This is Bhakti expressed through Prithvi.",
    },
    {
      title: "Resource Mastery",
      description:
        "Vrishabha intuitively understands the flow of resources — money, energy, time, material goods. The native has a natural gift for creating abundance, not through risky speculation but through steady accumulation, wise investment, and deep respect for what has been earned.",
      deepDive:
        "In the Vedic framework, Vrishabha corresponds to the second house of the natural zodiac — the house of Dhana (wealth), Kutumba (family), and Vak (speech). Shukra's lordship ensures that wealth-building is approached as a sacred art. The native understands that Lakshmi favors those who honor her gifts with gratitude and stewardship rather than hoarding. Mrigashira's influence in the later degrees adds strategic intelligence to this natural abundance.",
    },
    {
      title: "Grounding Presence",
      description:
        "Vrishabha radiates a stabilizing energy that others instinctively seek in times of chaos. The native's calm, embodied presence — rooted in Prithvi and steadied by Tamas — becomes a refuge for friends, family, and community. This is the energy of the sacred grove: sheltering, nourishing, enduring.",
    },
  ],

  growthEdges: [
    {
      title: "Releasing Attachment to Security",
      teaser:
        "The very stability that makes Vrishabha magnificent can become a golden cage when the soul refuses to release what has served its purpose.",
      fullExplanation:
        "Shukra's deep love of beauty and comfort, combined with Tamas guna's natural resistance to change, can create powerful attachment patterns. Vrishabha may hold onto relationships, possessions, habits, or identities long past their Karmic expiry date — not from love, but from fear of the void that change creates. The Vrischika seventh house axis demands transformation, yet the Bull's instinct is to dig hooves deeper into familiar ground. Growth comes through cultivating Vairagya — the Vedic practice of engaged detachment. One can enjoy Shukra's gifts fully while holding them lightly, understanding that all material forms are temporary vessels for eternal Shakti.",
      premiumHook:
        "Discover the specific Nakshatra-level patterns driving your attachment style — and the precise Vedic practices that liberate Shukra's energy from the grip of fear into the flow of trust.",
    },
    {
      title: "Embracing Necessary Disruption",
      teaser:
        "Vrishabha's devotion to rhythm and routine can become resistance to the very changes that Dharma demands.",
      fullExplanation:
        "The Tamasic guna in its shadow expression manifests as inertia — a refusal to move even when the universe is clearly signaling that movement is required. Vrishabha can become so invested in maintaining the status quo that genuine opportunities for growth, healing, or Dharmic evolution are missed. This is especially potent during transits of Shani or Rahu through Vrishabha, when the cosmos forces confrontation with everything the native has been avoiding. The Krittika Nakshatra portion of Vrishabha holds the key: Agni's purifying fire can burn away what no longer serves, but only if the native surrenders to the flame rather than building higher walls against it.",
      premiumHook:
        "Your birth chart reveals exactly where sacred disruption is trying to enter your life — and how to work with it as an ally rather than an enemy of your deepest stability.",
    },
    {
      title: "Moving Beyond Material Identity",
      teaser:
        "When self-worth becomes entangled with net worth, Shukra's highest teaching is obscured by its lowest temptation.",
      fullExplanation:
        "Vrishabha's natural affinity for the material plane is a genuine Dharmic gift — but it carries the shadow of reducing identity to what one owns, earns, or produces. The native may unconsciously measure their value (and others') by material metrics, missing the deeper Shukra wisdom that true beauty transcends all form. This pattern is reinforced by the second-house association of Vrishabha in the natural zodiac: Dhana (wealth) can become the sole definition of Artha (purpose). The spiritual invitation is to recognize that Shukra's highest expression is Prema — unconditional love that sees the divine in every being regardless of their material standing. Rohini Nakshatra, as the most fertile and creative star in Vrishabha, points the way: create not to accumulate, but to express the soul's inherent abundance.",
      premiumHook:
        "Unlock your personalized Artha analysis — where your chart reveals the difference between material purpose and material trap, and how to align your wealth-building with genuine soul evolution.",
    },
    {
      title: "Cultivating Emotional Fluidity",
      teaser:
        "The Bull's emotional steadiness is a gift — until it becomes an inability to access and express the full spectrum of feeling.",
      fullExplanation:
        "Prithvi element and Tamas guna together create an emotional landscape that prizes stability above all. While this makes Vrishabha a rock for others, it can lead to emotional suppression — feelings are buried rather than processed, and vulnerability is mistaken for weakness. The Jala (water) Rashis on key house cusps in a Vrishabha chart — Karka in the third, Vrischika in the seventh, Meena in the eleventh — constantly invite the native to let emotional waters flow through the earthen container rather than being dammed behind it. The Mrigashira Nakshatra portion of Vrishabha, with its searching, restless quality under Mangal's co-influence, provides the impetus to explore emotional terrain that the more settled Rohini and Krittika portions might avoid.",
      premiumHook:
        "Your Chandra Nakshatra placement reveals your unique emotional blueprint — discover the specific practices that help your Vrishabha energy hold space for both stability and deep feeling.",
    },
  ],

  relationships: `In matters of the heart, Vrishabha approaches relationships as one would approach the cultivation of a sacred garden — with patience, devotion, and an expectation that love, like all living things, requires consistent nourishment to flourish. Shukra's lordship makes Vrishabha one of the most relationship-oriented Rashis in the Vedic zodiac, but this is not the airy romance of Tula or the passionate intensity of Vrischika. Vrishabha love is earthy, sensual, and deeply loyal. The native expresses affection through tangible acts — preparing a meal, creating a beautiful home, offering steady presence through life's storms. Touch, shared pleasure, and the building of material security together form the love language of the Bull.

The Vrischika seventh house axis is perhaps the most significant relational signature for Vrishabha. Partnerships inevitably become arenas for deep transformation — the native is drawn to partners who challenge their comfort zones, who demand emotional depth beyond the surface stability that Vrishabha naturally offers. Rohini Nakshatra's influence brings extraordinary romantic magnetism and a capacity for devotion that can border on the mythic, but Krittika's sharper energy adds selectivity and discernment in choosing partners. The native must learn to distinguish between the security of genuine love and the security of mere familiarity.

Shukra's role as the Graha of Kama (desire) means that Vrishabha's relational journey is inseparable from questions of desire, pleasure, and the right use of sensory experience. The highest Dharma of Vrishabha in relationship is to create partnerships that honor both Kama and Dharma — unions where pleasure serves growth, where beauty nourishes the soul, and where the material foundations of life are built with mutual respect and shared vision. The shadow to watch is possessiveness: when the Bull's loyalty curdles into control, love's garden becomes a fortress.`,

  compatibilityNotes: {
    Kanya: `A deeply harmonious Prithvi-Prithvi connection. Kanya's precision complements Vrishabha's steadiness, and both share Shukra-Budha affinities that create rich intellectual and sensory rapport. Kanya helps Vrishabha refine its instincts into systems, while Vrishabha gives Kanya permission to relax into embodied pleasure. Together they build with extraordinary care and lasting quality.`,
    Makara: `The third Prithvi Rashi forms a natural Trikona with Vrishabha, creating a bond rooted in mutual respect for discipline, legacy, and material mastery. Shani-ruled Makara provides the structural framework that Shukra-ruled Vrishabha fills with beauty. This pairing excels at building enduring institutions — families, businesses, creative legacies — that stand the test of time.`,
    Karka: `Chandra-ruled Karka speaks directly to Vrishabha's exalted Moon nature. There is an instinctive emotional understanding here — both Rashis prioritize security, nurturing, and the creation of sacred domestic space. Karka's emotional fluidity teaches Vrishabha to feel more freely, while Vrishabha's steadiness gives Karka the stability its tidal emotions crave.`,
    Vrischika: `The axis partner — magnetically drawn together yet fundamentally different in approach. Vrischika demands emotional transformation where Vrishabha seeks emotional stability. This is the most Karmically charged connection for the Bull: intensely transformative when both partners commit to growth, yet potentially destructive when either retreats into shadow patterns of control or avoidance.`,
    Meena: `Guru-ruled Meena brings spiritual expansiveness to Vrishabha's material wisdom, creating a beautiful Bhakti-meets-Artha dynamic. Meena dissolves Vrishabha's rigidity with compassion and imagination, while Vrishabha grounds Meena's oceanic consciousness into practical form. Together they can manifest dreams into reality with both faith and craftsmanship.`,
    Simha: `A fixed-sign square that creates dynamic creative tension. Surya-ruled Simha's need for recognition can clash with Shukra-ruled Vrishabha's quieter confidence, but when aligned, they produce extraordinary artistic and leadership synergy. Both are deeply loyal and generous — the challenge lies in navigating stubbornness when two immovable forces meet.`,
  },

  careerDharma: `Vrishabha's Dharmic purpose in the realm of work centers on the stewardship, creation, and multiplication of value — value in all its forms: material, aesthetic, relational, and cultural. Shukra's lordship draws the native toward vocations where beauty, quality, and sensory refinement are paramount. This is the Rashi of the master artisan, the devoted farmer, the architect who builds for centuries, the musician whose voice carries the resonance of Saraswati and the grace of Lakshmi. In the Vedic framework, Vrishabha's work is Artha — the righteous pursuit of prosperity that sustains Dharma, enables Kama, and ultimately supports the quest for Moksha.

The Nakshatras within Vrishabha further define the career path. Krittika natives (padas 2–4) bring a purifying, knife-sharp focus to their craft — they excel in fields requiring precision, whether surgery, gem-cutting, culinary arts, or critical analysis. Rohini natives embody the creative principle itself: they are drawn to agriculture, fashion, fine arts, music, luxury goods, and any field where growth and beauty intersect. Mrigashira natives (padas 1–2) bring an investigative, seeking quality — they thrive in research, exploration, marketing, and fields that combine intellectual curiosity with aesthetic sensibility.

Kumbha in the tenth house (for Vrishabha Lagna) ensures that the native's public Dharma ultimately serves the collective. However successful Vrishabha becomes individually, the Karmic mandate is to use accumulated resources and skills for the benefit of the wider community. The native's greatest professional fulfillment comes not merely from personal wealth but from building institutions, systems, and beauty that outlive them — this is the legacy impulse of Prithvi element operating through Shukra's vision of a more beautiful world.`,

  workStyle: `In daily work, Vrishabha operates with the steady rhythm of the seasons — unhurried but unfailing. The native prefers structured environments where quality is valued over speed and where there is tangible evidence of progress. Open-plan chaos and constant pivoting drain the Bull; a well-organized workspace with aesthetic elements — natural light, pleasing materials, perhaps music or plants — activates peak performance. Shukra's influence means the native often has a distinctive personal style even in professional settings, and may unconsciously gravitate toward beautifying shared workspaces.

Collaboration comes naturally when Vrishabha respects their colleagues' competence, but the native can become territorial about resources, processes, or domains they've painstakingly built. The Tamasic guna grants extraordinary powers of concentration and follow-through — once a Vrishabha commits to a project, it will be completed with thoroughness that borders on devotion. Deadlines are met not through last-minute intensity but through consistent daily effort, and the finished product invariably reflects a level of care and polish that others find remarkable.`,

  spiritualPath: `The spiritual journey of Vrishabha is the path of sacred materialism — the realization that the physical world is not an obstacle to enlightenment but a direct expression of Brahman available for contemplation through every sense. Shukra, as the guru of the Asuras in Vedic mythology (Shukracharya), carries a specific spiritual teaching: mastery of the material realm is itself a form of Tapas, and the capacity to create beauty is a reflection of the divine creative principle. Vrishabha's Sadhana is inherently embodied — meditation through movement, prayer through craftsmanship, devotion through the patient tending of life.

The three Nakshatras of Vrishabha outline a complete spiritual curriculum. Krittika's fire offers purification — the burning away of attachments that have calcified into identity. Rohini's fertility offers creation — the channeling of Shakti into forms that nourish others and reflect divine beauty. Mrigashira's seeking offers expansion — the restless curiosity that prevents spiritual stagnation and drives the soul toward ever-deeper understanding. Together, they map a path from purification through creation to seeking — the eternal dance of Shiva and Shakti as experienced through Prithvi element.

The ultimate spiritual teaching for Vrishabha is the paradox of Lakshmi: abundance flows most freely to those who hold it most lightly. The native must learn to be a channel for Shukra's blessings rather than a reservoir — to let beauty, wealth, and pleasure flow through them to bless the world rather than accumulating these gifts as private treasures. When Vrishabha achieves this realization, the Tamasic guna transforms from inertia into the profound stillness of Samadhi — the unshakable awareness that needs nothing because it is rooted in everything.`,

  lifeLessons: [
    "True security is not found in what you accumulate but in the depth of your connection to Prithvi — the living earth that sustains all beings without condition.",
    "Shukra's greatest gift is not pleasure but discernment — the ability to perceive what is genuinely beautiful and valuable amid the world's endless counterfeits.",
    "Patience is your superpower, but it must be paired with the wisdom to recognize when the season has changed and new growth requires releasing the old harvest.",
    "Your body is a temple of Shukra — honor it not through indulgence but through the sacred practice of nourishing it with what truly sustains vitality and grace.",
    "The Vrischika axis teaches that your deepest stability will be tested through intimate relationships — and that every test is an invitation to root even deeper into love rather than retreating into control.",
    "Wealth held in open hands multiplies; wealth clutched in closed fists suffocates. Let Lakshmi flow through you, and she will never leave you wanting.",
  ],

  toolkit: [
    {
      title: "Shukra Vandana Practice",
      context:
        "When you feel disconnected from beauty, pleasure, or creative inspiration — when life feels dry and purely functional.",
      action:
        "On Shukra-vara (Friday), rise before dawn and offer white flowers, sandalwood, or natural fragrance to the eastern direction. Chant 'Om Shukraya Namaha' 16 times while holding awareness of something genuinely beautiful — a memory, a natural scene, a piece of music. Then spend 20 minutes creating something with your hands: cooking, arranging flowers, sketching, writing. The practice re-opens Shukra's channel when Tamasic heaviness has closed it.",
    },
    {
      title: "Prithvi Grounding Ritual",
      context:
        "When anxiety, restlessness, or groundlessness arises — especially during Vayu or Jala-dominant transits that destabilize your natural earth element.",
      action:
        "Remove your shoes and stand on natural earth — soil, grass, or stone — for at least 10 minutes. Bring awareness to the soles of your feet, feeling the exchange of Prana between your body and the Prithvi element. Silently affirm: 'I am held. I am nourished. I am rooted in what endures.' Follow this with slow, mindful consumption of a simple meal prepared with your own hands. This practice re-anchors Vrishabha's elemental nature.",
    },
    {
      title: "Rohini Abundance Meditation",
      context:
        "When scarcity thinking or possessiveness contracts your natural generosity — when you catch yourself hoarding resources, energy, or love out of fear rather than wisdom.",
      action:
        "Sit in stillness and visualize a great Banyan tree — Vrishabha's spiritual symbol. See its roots drinking deeply from the earth, its canopy sheltering countless beings, its aerial roots creating new trunks that expand the grove endlessly. Breathe with the image: inhale drawing nourishment from Prithvi, exhale extending shade and shelter to all beings. Hold this vision for 15 minutes, allowing Rohini's Shakti — the power of growth — to dissolve the contraction of scarcity into the spaciousness of natural abundance.",
    },
    {
      title: "Vairagya Offering",
      context:
        "When attachment to a specific outcome, possession, or relationship has become a source of suffering rather than joy — when Shukra's gifts have become Shukra's chains.",
      action:
        "Choose one object you are attached to — not your most precious possession, but something meaningful enough that releasing it requires genuine effort. Gift it mindfully to someone who would benefit from it, or offer it to a temple, charity, or natural space. As you release it, speak aloud: 'I honor what this has given me. I release my grip so that Shukra's abundance may flow more freely through my life.' Practice this monthly to keep the channels of Lakshmi open and prevent Tamasic accumulation from hardening into spiritual obstruction.",
    },
  ],

  descriptionInsight:
    "Vrishabha is the Rashi where Shukra's creative intelligence meets Prithvi's enduring strength — producing a soul whose Dharma is to demonstrate that the material world, when approached with reverence, patience, and aesthetic mastery, becomes a direct pathway to the Divine. You are not here to transcend the earth but to sanctify it.",
};
