import type { MayanSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "lamat";

export const LAMAT: MayanSignContent = {
  sign: "Lamat",
  name: "The Stellar Harmoniser",
  shortName: "The Harmoniser",
  englishName: "Star",
  tagline:
    "You carry the light of Venus in your soul—born to illuminate, beautify, and harmonise everything you touch.",
  color: "#C7A356",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  direction: "South",
  element: "Water",

  overview: `Lamat is the eighth day sign of the Tzolkin, carrying the radiant energy of the star—specifically Venus, the brightest celestial body in the Mayan night sky and the cornerstone of their astronomical and calendrical science. The ancient Maya tracked Venus with extraordinary precision across its 584-day synodic cycle, understanding its phases as a cosmic drama of death, descent, and brilliant re-emergence. To be born under Lamat is to carry this same pattern: a soul that periodically withdraws into darkness only to return with intensified luminosity. You are the embodiment of celestial harmony made personal.

Aligned with the South—the direction of Yellow, of abundance, ripening, and the warmth of Kan (the Yellow Road)—Lamat occupies the position on the cosmic cross associated with fruition and generous overflow. The South is where seeds come to harvest, where potential becomes manifest beauty. Lamat's element is Water, the fluid medium that carries starlight into the depths, connecting the celestial realm above with the emotional and intuitive realm below. This combination of stellar fire and oceanic depth gives Lamat natives a distinctive quality: they are simultaneously luminous and emotionally profound, radiant on the surface and complex in their inner world.

In the sacred count of twenty day signs, Lamat holds the eighth position—a number associated with Uaxac (eight in Yucatec Maya), the octave, the doubling of the four directions into the eight cardinal and intercardinal points. This numerological resonance amplifies Lamat's harmonising nature. Where Imix birthed, Ik breathed, Akbal dreamed, Kan planted, Chicchan awakened, Cimi transformed, and Manik healed, Lamat now beautifies and harmonises—bringing aesthetic order to what has been created. The ancient daykeepers recognised Lamat as one of the most fortunate signs, associated with abundance, artistic talent, and the capacity to multiply whatever it touches.`,

  toneInteractions: {
    1: "Magnetic Lamat (1 Lamat) initiates cycles of beauty and harmonisation. You are the one who draws others into alignment with a higher aesthetic and ethical order, magnetising grace and proportion in everything you undertake. Your purpose is to make harmony irresistible.",
    2: "Lunar Lamat (2 Lamat) holds the tension between Venus as Morning Star and Evening Star—the dual nature of beauty and its shadow. You understand that true harmony includes dissonance, and your art emerges from the honest integration of both light and darkness.",
    3: "Electric Lamat (3 Lamat) activates creative and harmonising energy in collective settings. You bring rhythm and beauty to group endeavours, naturally choreographing collaborative efforts into something greater than the sum of their parts. Communities light up in your presence.",
    4: "Self-Existing Lamat (4 Lamat) builds enduring structures of beauty and proportion. You create systems, spaces, and works that embody harmony in their very architecture. Your aesthetic sense is not decorative but structural—beauty as load-bearing principle.",
    5: "Overtone Lamat (5 Lamat) commands creative energy with the radiance of Venus at its brightest. You empower others to find and express their own beauty, serving as a beacon that reminds people of their inherent luminosity. Your presence elevates every room.",
    6: "Rhythmic Lamat (6 Lamat) finds the organic flow in creative and relational life, balancing giving and receiving with instinctive grace. You understand that harmony is not static but dynamic—a living rhythm that must be continually re-tuned.",
    7: "Resonant Lamat (7 Lamat) attunes to the deepest frequencies of beauty and cosmic order. You channel creative inspiration from sources beyond the personal, accessing the archetypal realm where mathematical proportion and aesthetic splendour are one and the same.",
    8: "Galactic Lamat (8 Lamat) harmonises personal creativity with universal ethical order. The octave tone paired with the star sign creates a powerful agent of cosmic alignment—someone whose beauty serves justice, whose art serves truth, and whose harmony serves Hunab Ku.",
    9: "Solar Lamat (9 Lamat) brings harmonising energy to its fullest, most radiant expression. This is the Venus of brilliant visibility—your creative gifts are meant to be seen, shared, and celebrated. You have the capacity to illuminate entire communities with your light.",
    10: "Planetary Lamat (10 Lamat) manifests beauty and harmony in tangible, material forms. Your aesthetic vision becomes real-world creation: beautiful objects, harmonious spaces, graceful systems. You prove that beauty is not abstract but buildable.",
    11: "Spectral Lamat (11 Lamat) dissolves conventional aesthetics and liberates beauty from inherited forms. You are the avant-garde artist, the revolutionary harmoniser who shows that true beauty often emerges from breaking the rules that once defined it.",
    12: "Crystal Lamat (12 Lamat) brings transparent understanding to the principles of harmony and beauty. You can articulate why things work aesthetically, making you an exceptional teacher, critic, or curator. Your clarity makes beauty comprehensible without diminishing its mystery.",
    13: "Cosmic Lamat (13 Lamat) transcends ordinary aesthetics entirely, accessing the level where beauty and cosmic truth are indistinguishable. This is the Kin of the visionary artist whose work touches something universal—the star that shines so brightly it becomes a guiding light for others.",
  },

  coreEnergies: [
    {
      name: "Radiant Creativity",
      score: 94,
      description:
        "An extraordinary capacity to generate beauty, whether through visual art, music, design, interpersonal grace, or the aesthetic ordering of complex systems. Creativity flows from you as naturally as light from a star.",
    },
    {
      name: "Harmonic Intelligence",
      score: 91,
      description:
        "An innate understanding of proportion, balance, and the relationships between parts that create a beautiful whole. You perceive disharmony instantly and know intuitively how to restore it.",
    },
    {
      name: "Abundant Generosity",
      score: 87,
      description:
        "A natural overflow of energy, resources, and creative output. The South direction governs harvest and abundance, and Lamat channels this energy through generous sharing of gifts, beauty, and warmth.",
    },
    {
      name: "Emotional Depth",
      score: 83,
      description:
        "Beneath the luminous surface lies a Water-element sensitivity that gives your creative work its emotional authenticity. You feel deeply, and this depth is the source of art that moves others.",
    },
    {
      name: "Venusian Magnetism",
      score: 88,
      description:
        "A natural charisma that draws others toward you like moths to starlight. This is not mere social charm but a genuine luminosity that comes from alignment with your creative purpose.",
    },
  ],

  strengths: [
    {
      title: "Aesthetic Visionary",
      description:
        "You perceive beauty and harmony where others see only chaos, and you have the creative skill to make your vision manifest.",
      deepDive:
        "The ancient Maya were extraordinary astronomers and architects whose temples encoded celestial proportions into stone. Lamat carries this same impulse: the drive to translate cosmic harmony into tangible, perceptible form. Whether you work in visual art, music, architecture, fashion, interior design, or software interfaces, you bring an unerring sense of what works—proportionally, chromatically, rhythmically. This is not superficial decoration but deep pattern recognition: you see the mathematical beauty underlying the visible world and feel compelled to make it accessible to others.",
    },
    {
      title: "Multiplying Abundance",
      description:
        "Whatever you touch tends to grow and multiply—resources, opportunities, relationships, and creative output proliferate in your wake.",
      deepDive:
        "Lamat was traditionally associated with the rabbit, a symbol of abundance and multiplication in Mesoamerican mythology. The South direction amplifies this quality, governing the season of harvest and the golden abundance of ripe crops. In practical terms, this means you have a natural gift for growing things—whether financial resources, social networks, creative portfolios, or organisational capacities. You attract opportunity and have an instinct for leverage: finding the small inputs that produce disproportionately large and beautiful outputs.",
    },
    {
      title: "Social Luminosity",
      description:
        "Your presence naturally brightens social spaces, making you an effective connector, host, and cultural creator.",
      deepDive:
        "Venus was the most culturally significant celestial body to the Maya after the Sun and Moon, and Lamat carries its social and cultural importance. You have a gift for bringing people together, for creating gatherings that feel special, and for fostering the kind of social harmony that makes communities thrive. This is not mere extroversion—it is a genuine capacity to raise the energy and beauty of any group you join, turning ordinary interactions into something that sparkles.",
    },
    {
      title: "Regenerative Brilliance",
      description:
        "Like Venus disappearing and re-emerging with greater intensity, you have the capacity to reinvent yourself through periods of withdrawal and return.",
      deepDive:
        "The Venus cycle that governs Lamat includes periods of invisibility—the planet's passage behind the Sun before it re-emerges as either Morning Star or Evening Star. Lamat natives often experience corresponding cycles in their creative and personal lives: periods of withdrawal, introspection, or apparent dormancy followed by spectacular re-emergence. Understanding this rhythm rather than fighting it is key. Your fallow periods are not failures but incubation phases during which the next expression of your brilliance is gestating.",
    },
  ],

  growthEdges: [
    {
      title: "Vanity and Surface Attachment",
      teaser:
        "Your attunement to beauty can tip into over-identification with appearances and external validation.",
      fullExplanation:
        "The shadow side of Lamat's luminosity is the potential to confuse beauty with worth, and external admiration with genuine self-esteem. You may find yourself investing excessive energy in how things (and you) look, mistaking the aesthetic surface for the substantive depth. The ancient Maya understood Venus as both the most beautiful and the most dangerous celestial body—its appearance as Morning Star was associated with warfare and destruction. Your growth edge is learning that your deepest beauty comes not from polished surfaces but from the authentic integration of your light and shadow.",
      premiumHook:
        "Explore the practices that help Lamat distinguish between authentic radiance and compensatory performance.",
    },
    {
      title: "Overextended Generosity",
      teaser:
        "Your abundant nature can lead to giving away more than you can sustain, depleting your creative reserves.",
      fullExplanation:
        "The South direction's association with harvest and abundance can create a pattern where you give endlessly without replenishing. You may scatter your creative energy across too many projects, say yes to too many social invitations, or pour your light into relationships that do not reciprocate. The harvest requires not only gathering but storing and replanting. Learning to be strategic with your generosity—directing your luminous energy where it will be honoured and multiplied rather than dissipated—is essential for Lamat's sustainability.",
      premiumHook:
        "Discover Lamat's strategic abundance practices for sustainable creative output.",
    },
    {
      title: "Avoidance of Darkness",
      teaser:
        "Your identification with light and beauty can make you reluctant to engage with shadow, grief, and ugliness.",
      fullExplanation:
        "Lamat's brilliance can become a defence against the darker aspects of human experience. You may unconsciously aestheticise suffering, avoid difficult conversations by making them beautiful, or retreat from situations that cannot be prettified. But Venus itself passes through darkness—through the underworld of Xibalba—as a necessary part of its cycle. Your wholeness requires the integration of what is not beautiful: grief, anger, failure, and the irreducible messiness of being human. Art that has passed through genuine darkness carries a luminosity that mere prettiness never achieves.",
      premiumHook:
        "Learn the shadow-integration practices that transform Lamat's brightness from performance into authentic radiance.",
    },
  ],

  relationships: `Lamat brings warmth, beauty, and generous affection to all relationships. You love expansively, with a luminosity that makes your partners feel bathed in starlight. Your natural instinct is to beautify the shared space—creating lovely environments, planning memorable experiences, and bringing an aesthetic consciousness to the dailiness of partnership that elevates the ordinary into something approaching art. To be loved by Lamat is to live in a more beautiful world.

Your South-direction alignment makes you naturally generous in relationships, but this generosity must find its balance. The Water element gives you emotional depth beneath the radiant surface—you feel more than you show, and your partners may need to learn that your brightness is not superficiality but a genuine form of emotional expression. Your vulnerability emerges not through displays of pain but through the courage to share your creative vision, your aesthetic convictions, and the deep sensitivity that fuels both.

The Venus cycle affects your relational patterns profoundly. You may experience periods of intense social magnetism followed by phases of withdrawal and introspection. Partners who understand this rhythm—who do not panic when you need to dim your light temporarily—will find that each re-emergence brings deeper intimacy and more authentic radiance. The Tzolkin teaches that Lamat's greatest relational gift is not their outward brilliance but the emotional depth that feeds it: the underground river of feeling that makes the star shine.`,

  compatibilityNotes: {
    Manik:
      "Manik (Deer) grounds Lamat's stellar energy in embodied, practical care. The healer's skilled hands and the star's radiant vision create partnerships where beauty and restoration work in concert—art that heals, care that beautifies.",
    Muluc:
      "Muluc (Moon) shares Lamat's Water element, creating deep emotional resonance between these two luminous signs. Venus and the Moon have danced together in the sky since before human memory—this pairing carries that ancient celestial harmony into personal relationship.",
    Ahau: "Ahau (Sun) matches Lamat's radiance with its own, creating a partnership of mutual illumination. Together you are almost too bright—the challenge is creating enough shadow for intimacy, enough privacy for the tender parts that need darkness to grow.",
    Chuen:
      "Chuen (Monkey) brings playful artistry to Lamat's aesthetic seriousness, lightening the harmoniser's creative process with mischief and experimentation. Together you create art that is both beautiful and alive with unexpected joy.",
    Kan: "Kan (Seed) shares the South direction and provides the raw potential that Lamat's creative energy can shape into beautiful form. The seed's latent abundance and the star's manifesting radiance create a partnership oriented toward flourishing.",
    Akbal:
      "Akbal (Night) offers Lamat the darkness necessary for stars to be visible. This complementary pairing teaches Lamat that their light is defined not against the dark but in relationship with it—deepening creative work immeasurably.",
  },

  careerPath: `Lamat's vocational calling centres on the creation and curation of beauty, harmony, and abundance. The ancient Maya would have recognised Lamat natives as master artisans, astronomers, calendar priests, and the architects responsible for the breathtaking proportions of their temple complexes. In the modern world, this translates to careers in design (graphic, interior, industrial, fashion, UX), visual and performing arts, architecture, music, film, photography, and any field that requires an unerring aesthetic sensibility paired with the ability to manifest vision in material form.

Your South-direction alignment adds a commercial and abundant dimension to your creative gifts. You are not the starving artist but the thriving creator—someone who understands that beauty and prosperity are not opposed but complementary. Careers in luxury goods, brand development, art direction, event design, and creative entrepreneurship tap into Lamat's capacity to generate abundance through beauty. You have an instinct for what the market desires before it knows it wants it, making you a natural trend-setter and taste-maker.

The Water element adds emotional intelligence and interpersonal skill to your creative toolkit. You excel in roles that require both aesthetic vision and the ability to work harmoniously with others: creative direction, artistic collaboration, client-facing design work, and cultural programming. Your capacity to make the creative process feel graceful and enjoyable—rather than agonising and combative—makes you an exceptional leader in creative industries. The best work environments for Lamat are those that value beauty as a serious pursuit, surround you with other talented people, and provide the resources to realise ambitious visions.`,

  workStyle: `Lamat works in bursts of brilliant productivity punctuated by periods of rest and absorption. Your creative process mirrors the Venus cycle: phases of intense visible output followed by necessary withdrawal during which the next creative vision incubates. Trying to maintain constant productivity flattens your creative energy into something competent but uninspired. Your best work emerges from honouring the rhythm: pushing hard when the inspiration is flowing, then genuinely resting when it recedes.

Your work environment matters enormously. Ugly, cluttered, or chaotic spaces actively interfere with your ability to think and create. You need beauty around you—not luxury necessarily, but proportion, light, colour, and order. When your physical environment is harmonious, your creative output intensifies dramatically. This is not mere preference but a genuine energetic reality: Lamat's creativity is fed by the same aesthetic harmony it seeks to produce.`,

  spiritualWisdom: `Lamat's spiritual path is the path of sacred beauty—the understanding that aesthetic harmony is not a pleasant addition to life but a direct expression of cosmic order. The ancient Maya encoded this understanding in their architecture, their calendars, and their art: the proportions of a temple, the intervals of a musical scale, and the ratios of the Venus cycle all expressed the same underlying mathematical harmony they called Hunab Ku—the One Giver of Movement and Measure. Lamat's spiritual work is to perceive this harmony and make it perceptible to others.

Venus held a uniquely complex spiritual significance for the Maya. As Morning Star (Noh Ek), it was associated with new beginnings and the warrior spirit. As Evening Star (Chac Ek), it represented wisdom and reflective beauty. In its period of invisibility—its passage through the underworld—it embodied the descent necessary for spiritual transformation. Lamat's spiritual path mirrors this cycle: you are called to shine, to withdraw, and to re-emerge transformed. Resisting any phase of this cycle creates spiritual stagnation; embracing all three creates a luminosity that deepens over a lifetime.

The Water element connects Lamat's stellar awareness to the emotional and intuitive realm. Your spiritual practice is enriched by anything that honours the connection between celestial order and emotional truth: music, dance, poetry, ceremonial art, and the contemplation of natural beauty. The Wakah-Chan, the great World Tree, connects the heavens (where the stars live) to the underworld (where the waters flow) through the Earth plane (where beauty is made manifest). Lamat's spiritual purpose is to embody this connection—to bring the harmony of the stars into the flowing depths of human emotional experience and express it in forms that others can perceive and be transformed by.`,

  lifeLessons: [
    "Your light is brightest not when you perform it but when you simply allow it—authentic radiance comes from alignment, not effort.",
    "The periods of creative dormancy are not failures but necessary passages through the underworld that prepare your next brilliant emergence.",
    "Beauty is a responsibility, not a vanity—you are here to make the world more harmonious, and that is serious, sacred work.",
    "Not everyone will appreciate what you create, and that is cosmically appropriate. Stars shine for all but illuminate each person differently.",
    "Your emotional depths are the source of your creative power. Do not aestheticise your pain away—let it feed the art.",
    "Abundance flows to you naturally when you align your creative gifts with genuine service. The universe rewards beauty that heals.",
  ],

  toolkit: [
    {
      title: "Venus Cycle Mapping",
      context:
        "When you need to understand your own creative rhythms and stop fighting the natural alternation between productivity and withdrawal.",
      action:
        "Track your creative energy levels over three months, noting periods of high output, inspiration, and social magnetism versus periods of withdrawal, introspection, and apparent dormancy. Map these against your calendar and look for recurring patterns. Once you identify your personal Venus cycle, you can plan projects, launches, and rest periods to align with your natural rhythm rather than against it.",
    },
    {
      title: "Beauty Offering",
      context:
        "When you feel disconnected from your creative purpose or when the world feels too ugly and chaotic to bear.",
      action:
        "Create something beautiful with no audience in mind—arrange flowers, cook an exquisite meal, write a poem, compose a melody, or simply arrange objects on a surface until they achieve a harmony that satisfies your inner sense of proportion. Offer this creation to the South, the direction of abundance and harvest. This practice reconnects you to your essential nature as a creator of beauty and reminds you that your gift is inherent, not contingent on external validation.",
    },
    {
      title: "Star Contemplation",
      context:
        "When you need to reconnect with the celestial dimension of your nature and gain perspective on earthly concerns.",
      action:
        "On a clear night, find Venus in the sky (or any bright star if Venus is not visible) and sit with it in silence for at least fifteen minutes. Let the star's light enter your eyes and body. Remember that you carry this same energy—that your luminosity is not metaphorical but a real expression of the cosmic harmony that created both you and the star. Let this remembrance recalibrate your sense of proportion: your problems are real, but you are made of starlight.",
    },
    {
      title: "Shadow Art Practice",
      context:
        "When you notice yourself avoiding difficult emotions or aestheticising pain rather than processing it honestly.",
      action:
        "Dedicate a creative session specifically to expressing what is ugly, painful, or unresolved in your current experience. Use whatever medium calls to you, but commit to not making it beautiful. Let it be raw, disproportionate, and uncomfortable. This practice integrates Lamat's shadow, ensuring that your public radiance is fed by authentic engagement with the full spectrum of human experience rather than a curated selection of pleasant emotions.",
    },
  ],

  descriptionInsight: `Lamat, the eighth sign of the Tzolkin, carries the medicine of celestial harmony. Aligned with the South and the element of Water, you are the stellar harmoniser whose creative gifts reflect the cosmic order perceived by the ancient Maya in the movement of Venus across the heavens. Your purpose is to perceive beauty where others see chaos, to create abundance where others see scarcity, and to illuminate the world with a radiance that is both genuinely luminous and emotionally deep. In Mayan cosmology, you embody the star's promise: that even after passing through darkness, light returns brighter than before.`,
};
