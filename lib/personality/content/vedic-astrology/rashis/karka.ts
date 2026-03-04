import type { VedicRashiContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "karka";

export const KARKA: VedicRashiContent = {
  rashi: "Karka",
  name: "The Lunar Nurturer",
  shortName: "The Crab",
  tagline: "Where Chandra reigns supreme, the soul finds its deepest home.",
  color: "#328181",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  element: "Jala",
  guna: "Sattva",
  graha: "Chandra",
  grahaEnglish: "Moon",
  symbol: "♋",

  chandraOverview: `Chandra in Karka is the luminous Graha seated upon its own throne — there is no placement in all of Jyotish where the Moon radiates with greater fullness. This is Chandra in Svakshetra, its own Rashi, where every ripple of feeling, every wave of intuition, and every tide of memory flows without obstruction. The mind here is not merely sensitive; it is oceanic, absorbing the emotional currents of every being it encounters and reflecting them back with an almost supernatural clarity. The Nakshatras that thread through Karka — the fourth pada of Punarvasu, the entirety of Pushya, and the coiled depths of Ashlesha — each lend a distinct texture to this lunar sovereignty.

Pushya Nakshatra, ruled by Shani yet nestled in Chandra's domain, creates one of the most spiritually auspicious combinations in the zodiac. Here nourishment becomes Dharma itself — the native feeds others not from obligation but from a Sattvic overflow that seems to draw directly from the cosmic waters. Punarvasu's final pada carries Guru's blessings of renewal and restoration into Karka's emotional body, granting the ability to regenerate after even the deepest emotional storms. Ashlesha, governed by Budha and animated by Naga Devata (the serpent deity), introduces a vein of penetrating intelligence — the kind that perceives what others conceal and reads the unspoken language beneath every interaction.

When Chandra occupies its own sign, the emotional intelligence of the native becomes their greatest instrument of Karma. They process life not through logic or ambition first, but through feeling-states that carry ancient Samskara-level information. Dreams are vivid and often prophetic. Relationships become the primary field of spiritual evolution. The challenge is not a lack of power — Chandra here has abundant Shakti — but learning that not every emotional current requires a response, and that stillness within the waters is itself a form of mastery.`,

  suryaOverview: `Surya in Karka places the radiant self-principle in a Rashi that answers to Chandra, creating a fascinating interplay between solar will and lunar receptivity. The native's sense of identity is deeply entangled with family lineage, ancestral memory, and the emotional atmosphere of their early home. Where Surya typically declares "I am," in Karka it whispers "I belong" — the ego finds its fuel not in personal conquest but in the security and wellbeing of those held closest. This is not weakness; it is the strength of a king who leads through care rather than command, whose authority emerges from the depth of connection rather than the height of position.

The Nakshatras modulate this placement significantly. Surya in Punarvasu (pada 4) brings a quality of generous restoration — the native shines brightest when helping others recover and begin anew, channeling Guru's expansive grace through the emotional body. In Pushya, the Sun becomes a beacon of selfless nourishment, and there is often a strong pull toward teaching, counseling, or spiritual ministry. Surya in Ashlesha, however, introduces complexity: the serpent energy gives penetrating psychological insight but can also create a tendency to wield emotional knowledge as a subtle instrument of influence. The native must learn the difference between protective instinct and controlling attachment.

The Dharmic lesson of Surya in Karka is to discover that true luminosity can be soft. In a world that celebrates the blazing solar fires of ambition and external achievement, this placement asks the soul to find its dignity in tenderness — to recognize that the one who creates sanctuary, who holds space for the vulnerable, who remembers the forgotten, performs a Karma no less noble than the warrior or the sage. The journey often involves healing the relationship with the mother or mother-figure, and through that healing, understanding one's own relationship with nurturing power.`,

  lagnaOverview: `Karka Lagna bestows upon the native a constitution woven from the very substance of Chandra — the body, personality, and approach to life are all filtered through the Moon's ever-shifting lens. These individuals move through the world with a permeability that is both gift and test: they absorb atmospheres, read rooms before a word is spoken, and carry the emotional residue of their environment in their physical body. The Lagna lord being Chandra means that the entire chart's expression shifts with the Moon's transits through the Nakshatras, the Tithis, and the waxing-waning cycle — there is a tangible rhythm to their vitality and mood that the wise Karka native learns to honor rather than resist.

The physical constitution tends toward the Kapha-dominant end of the Ayurvedic spectrum, with soft features, expressive eyes, and a body that responds powerfully to emotional states — stress manifests in the stomach and chest, while contentment literally makes them glow. The first house ruled by Chandra gives an instinctive protectiveness: these natives create shells of safety wherever they go, whether through physical spaces (they are natural homemakers and space-holders) or through emotional containment (they become the person everyone confides in). The Nakshatras rising at the Lagna degree add crucial nuance — a Pushya Lagna native embodies pure Sattvic nourishment, while an Ashlesha Lagna native carries the serpentine magnetism that draws others in through an almost hypnotic emotional presence.

The life path of Karka Lagna is one of learning to distinguish between caring and carrying. Because the entire chart pivots on Chandra's condition — its Nakshatra placement, aspects from other Grahas, and its phase at birth — these natives must develop a conscious relationship with their own emotional tides. When they learn to anchor themselves not in the fluctuating waters of feeling but in the unchanging awareness that witnesses those waters, they become channels of extraordinary healing power. The great Rishis taught that Karka represents the cosmic womb — Hiranyagarbha — and those with this Lagna are here to learn what it means to hold life itself with both tenderness and non-attachment.`,

  coreEnergies: [
    {
      name: "Chandra Shakti",
      score: 95,
      description:
        "The raw lunar power of receptivity and emotional resonance — Karka is the one Rashi where Chandra's Shakti flows without diminishment, making empathy and intuition not learned skills but innate faculties of perception.",
    },
    {
      name: "Jala Prana",
      score: 88,
      description:
        "The vital force expressed through the water element — an ability to flow around obstacles, dissolve rigidity in others, and nourish whatever is parched. This energy connects Karka natives to the healing power of tears, ritual bathing, and sacred waters.",
    },
    {
      name: "Emotional Depth",
      score: 92,
      description:
        "A capacity to feel the full spectrum of human experience without fragmenting. Karka does not skim the surface of emotion — it plunges to the ocean floor where memories, ancestral patterns, and collective feeling-states reside, bringing back pearls of insight.",
    },
    {
      name: "Nurturing Force",
      score: 90,
      description:
        "The Pushya-infused impulse to sustain, protect, and cultivate growth in every living thing. This is not merely caretaking but a Dharmic expression — the understanding that nourishment is itself a sacred act, a form of Yajna offered to the divine in all beings.",
    },
    {
      name: "Intuitive Wisdom",
      score: 85,
      description:
        "Ashlesha's serpentine intelligence woven through Chandra's reflective mind — a knowing that arrives before evidence, a reading of situations that bypasses the rational and touches directly on truth. This energy strengthens with age and spiritual practice.",
    },
  ],

  strengths: [
    {
      title: "Oceanic Empathy",
      description:
        "Karka natives possess an empathic capacity that operates at the level of Prana itself. They do not merely understand what others feel — they feel it in their own body, their own breath. This makes them natural healers, counselors, and holders of sacred space.",
      deepDive:
        "This empathy is rooted in Chandra's role as Mano-Karaka — significator of the mind in Jyotish. When the mind's ruler sits in its own domain, perception becomes extraordinarily refined. The Karka native can walk into a room and immediately sense who is grieving, who is hiding, who needs tenderness. The key to wielding this gift without burnout lies in the Sattvic nature of the Rashi — maintaining purity of diet, environment, and association so the empathic channels remain clear rather than clogged with absorbed suffering.",
    },
    {
      title: "Ancestral Memory & Lineage Wisdom",
      description:
        "Karka carries the Karmic imprint of the entire family lineage. These natives often serve as the keepers of family history, tradition, and emotional healing — processing generational patterns that others in the family cannot face.",
      deepDive:
        "In Jyotish, the fourth house (Karka's natural domain) governs Matru Bhava — the house of the mother, homeland, and deep roots. Natives with strong Karka influence often discover that their personal emotional work is inseparable from ancestral Karma. Dreams featuring deceased relatives, spontaneous recall of family stories never told to them, and an instinctive pull toward genealogy or ancestral healing practices are common. The Pitr Dosha (ancestral affliction) often finds its resolution through the Karka native who is willing to feel what the lineage has suppressed.",
    },
    {
      title: "Sanctuary Creation",
      description:
        "Whether in a physical home, a therapeutic container, or simply the quality of their presence, Karka natives instinctively create environments where vulnerability is safe. They are the architects of emotional sanctuary.",
      deepDive:
        "This capacity extends far beyond interior decorating. The Karka native understands, often without formal training, that space holds memory — that a room can be charged with intention, that food prepared with love carries Prana, that the atmosphere of a home shapes the consciousness of everyone within it. Many Karka-influenced souls are drawn to Vastu Shastra, temple architecture, or the creation of healing retreat spaces. Their gift is understanding that the outer environment must mirror the inner state one wishes to cultivate.",
    },
    {
      title: "Regenerative Resilience",
      description:
        "Like the tides governed by Chandra, Karka natives possess a remarkable ability to withdraw, restore, and return. Emotional wounds that would permanently harden others are metabolized through the Jala element's dissolving power.",
      deepDive:
        "Punarvasu Nakshatra — whose final pada falls in Karka — literally means 'return of the light.' This regenerative quality is woven into the Rashi's very fabric. The Karka native may retreat deeply after loss or betrayal, but the retreat is not collapse — it is the tide pulling back before it returns with renewed force. The key is honoring the natural rhythm: forcing premature return to normalcy disrupts the healing process, while trusting the cycle allows each emotional death to become a genuine rebirth.",
    },
    {
      title: "Devotional Heart",
      description:
        "Sattva Guna combined with Jala Tattva creates a natural orientation toward Bhakti — devotional love. Karka natives often find their deepest spiritual expression not through intellectual study or ascetic discipline but through heartfelt surrender and loving service.",
    },
  ],

  growthEdges: [
    {
      title: "Emotional Absorption & Boundary Dissolution",
      teaser:
        "The same permeability that grants deep empathy can leave Karka drowning in emotions that are not their own.",
      fullExplanation:
        "Chandra's fullness in its own Rashi means the emotional body is wide open by default. Without conscious practice, the Karka native absorbs the grief of a friend, the anxiety of a colleague, the unspoken rage in a family system — and may not even recognize these feelings as imported rather than native. Over time, this creates a confusing inner landscape where the native cannot distinguish their own emotional truth from the collective soup they've absorbed. The Ashlesha influence can compound this by adding a layer of psychological entanglement — relationships become sticky, boundaries feel like betrayal, and saying 'no' triggers deep guilt rooted in the belief that their worth depends on their capacity to hold others. Practices rooted in Jala Tattva purification — ritual bathing, Chandra mantras, and conscious time near flowing water — help reset the emotional body. Learning the difference between compassion (feeling with) and absorption (feeling as) is the central growth task.",
      premiumHook:
        "Discover Chandra-specific Nakshatra remedies and a lunar cycle practice designed to restore your emotional sovereignty without closing your heart.",
    },
    {
      title: "Attachment Masquerading as Love",
      teaser:
        "The nurturing instinct, unchecked, can become a golden cage — caring that quietly controls.",
      fullExplanation:
        "Karka's tremendous investment in the wellbeing of loved ones can cross a subtle threshold where care becomes control. The native may unconsciously create dependency in those they nurture, finding their sense of purpose in being needed rather than in genuine mutual growth. This pattern often traces to the mother-child dynamic — either a mother who modeled love-as-control or an absent mother whose void the native is perpetually trying to fill for others. Ashlesha's serpentine grip adds intensity: the native may hold on to relationships, roles, or emotional identities long past their natural expiration, unable to release because letting go feels like a kind of death. The Jyotish remedy lies in understanding that Karka's highest expression is not clinging but cradling — holding with open hands, offering nourishment without requiring the other to remain in need of it.",
      premiumHook:
        "Explore the Ashlesha-to-Pushya spectrum in your chart to understand where your nurturing empowers versus where it entangles — with personalized Graha remedies.",
    },
    {
      title: "Mood Tides & Emotional Overwhelm",
      teaser:
        "Chandra's waxing and waning literally moves through the Karka native's body and mind — stability can feel elusive.",
      fullExplanation:
        "Because Chandra is the Lagna lord or key planet for Karka-dominant charts, the native's entire energetic system is yoked to the Moon's cycle in a way that other Rashis do not experience as intensely. The Shukla Paksha (waxing phase) brings expansion, optimism, and creative fertility; the Krishna Paksha (waning phase) can bring contraction, melancholy, and a pull toward isolation. Eclipses, Amavasya (new moon), and difficult Chandra transits through the 6th, 8th, or 12th houses from natal Moon can trigger disproportionate emotional responses. The native may feel broken by this volatility, but the Vedic perspective reframes it: these tides are not dysfunction — they are the direct experience of cosmic rhythm moving through the individual soul. The practice is not to flatten the tides but to become the witness of them — to develop the Sakshi Bhava (witness consciousness) that can ride the waves without being submerged.",
      premiumHook:
        "Get your personalized Chandra cycle map — a month-by-month guide to when your emotional energy peaks, dips, and how to work with each lunar phase for maximum clarity.",
    },
    {
      title: "Resistance to Necessary Confrontation",
      teaser:
        "The desire for emotional harmony can lead to swallowing truths that need to be spoken.",
      fullExplanation:
        "Karka's Sattvic nature and its deep investment in relational safety can create an aversion to conflict that ultimately harms both the native and their relationships. Difficult truths get buried in the depths of the Jala element, where they ferment rather than dissolve. The native may endure mistreatment for years, rationalizing it as patience or compassion, when in reality the avoidance of confrontation is driven by a fear that honest expression will rupture the bonds they depend on for emotional survival. Ironically, this pattern often produces the very abandonment the native fears — relationships erode from accumulated resentment never voiced. The growth here involves invoking the Mangal (Mars) energy that Karka naturally finds uncomfortable — learning that truthful speech delivered with care is a higher form of nurturing than protective silence.",
      premiumHook:
        "Unlock the Mangal-Chandra dynamic in your chart to find your unique pathway to compassionate assertiveness — with timing guidance for the best days to initiate difficult conversations.",
    },
  ],

  relationships: `Karka approaches relationships as the central arena of incarnation — where Karma is generated, where Dharma is tested, and where the soul's capacity for love is refined through the fire of vulnerability. Governed by Chandra, the Karka native bonds through emotional resonance rather than intellectual compatibility or physical attraction alone. They seek to feel felt — to be with someone whose inner landscape they can sense and who can, in turn, perceive the vast emotional world beneath their protective shell.

In partnership, the Karka native is profoundly loyal, offering a quality of presence and care that can feel like being held by the Moon itself — soft, encompassing, and rhythmically attuned. They remember every emotional milestone, track the subtle shifts in their partner's mood, and express love through acts of nourishment: a meal prepared with intention, a home made beautiful, a steady presence during crisis. The Pushya influence makes them the partners who show up at three in the morning without being asked, who sense distress before it is articulated, who make safety their love language.

The shadow side emerges when the Karka native's self-worth becomes fused with their role as nurturer. If they feel unneeded or if a partner demonstrates radical independence, a deep insecurity can surface — the crab retreats into its shell, or worse, attempts to create need where none exists. The Ashlesha dimension can introduce emotional complexity: testing loyalty through withdrawal, reading hidden motives where none exist, or using emotional knowledge as leverage. The evolved Karka partner learns that love's highest expression is not fusion but a dance — close enough to nourish, spacious enough to honor the other's sovereign path.`,

  compatibilityNotes: {
    Vrischika:
      "A meeting of two Jala Rashis creates instant emotional depth — Vrischika understands Karka's hidden currents without explanation. Mangal's intensity meets Chandra's tenderness in a bond that can be profoundly transformative, though both must guard against possessive undercurrents and emotional power struggles.",
    Meena:
      "Guru-ruled Meena and Chandra-ruled Karka share the Jala element and a devotional heart. This pairing often feels fated — a soul-recognition that transcends ordinary attraction. Meena offers Karka a spiritual framework for their emotional intensity, while Karka gives Meena the grounded care that prevents dissolution into escapism.",
    Vrishabha:
      "Shukra-ruled Vrishabha provides the material stability and sensual grounding that soothes Karka's emotional tides. Both value home, comfort, and loyalty, creating a partnership that builds lasting sanctuary. The tension lies in Vrishabha's Tamas (inertia) meeting Karka's mood cycles — patience is the binding agent.",
    Makara:
      "The axis of opposition — Shani-ruled Makara represents everything Karka is not: structure over feeling, duty over emotion, public over private. Yet this polarity is magnetic. Makara provides the scaffolding Karka needs to channel emotional energy into worldly achievement, while Karka melts Makara's rigidity with warmth. The danger is mutual incomprehension: Makara may dismiss Karka's feelings as weakness, while Karka may experience Makara's boundaries as coldness.",
    Kanya:
      "Budha-ruled Kanya brings analytical precision to Karka's emotional world — helping organize feeling into understanding, chaos into clarity. This pairing works well in the domains of health and service, as both Rashis carry a strong impulse to nurture and heal. The friction arises when Kanya's critical faculty encounters Karka's sensitivity — words intended as helpful feedback land as emotional injury.",
    Dhanu:
      "Guru-ruled Dhanu brings philosophical expansion and adventurous spirit that can lift Karka out of emotional inwardness. Dhanu's fire and Karka's water create steam — passionate, generative, but requiring constant calibration. Dhanu's need for freedom and truth can clash with Karka's need for closeness and emotional safety, but when balanced, this pairing combines wisdom with compassion in powerful Dharmic partnership.",
  },

  careerDharma: `The Karka native's professional Dharma is inseparable from their capacity to nurture, protect, and create emotional safety. In the Vedic framework, career is not merely livelihood but the expression of one's Svadharma — the unique duty the soul has incarnated to fulfill. For Karka, that duty revolves around the preservation and nourishment of life in all its forms.

Professions that align with Karka's deepest nature include healing arts (Ayurveda, counseling, psychotherapy, nursing, midwifery), education (particularly of young children, where emotional attunement matters more than content delivery), culinary arts (food as medicine, as ritual, as love made tangible), real estate and interior design (creating Vastu-aligned spaces that support human flourishing), and social work or community organizing (building the collective shell that protects the vulnerable). The Pushya Nakshatra influence draws many Karka-dominant natives toward roles in spiritual communities — ashram management, retreat facilitation, or temple service — where nourishment is both physical and Sattvic.

Ashlesha's influence can also manifest as talent in psychology, research into hidden patterns, or work involving confidential information — the serpent sees what is concealed. Financial management and wealth preservation (the crab hoards and protects resources) also falls under Karka's domain, and many successful fund managers and family wealth advisors carry strong Karka energy. The key career principle: Karka thrives not in competitive, ego-driven environments but in contexts where emotional intelligence is valued as a professional competency and where their work directly sustains the wellbeing of others.`,

  workStyle: `The Karka work style is cyclical rather than linear, mirroring Chandra's phases. There are periods of extraordinary productivity and creative fertility — typically aligned with the Shukla Paksha and when the transiting Moon occupies friendly Nakshatras — followed by intervals of necessary withdrawal and restoration. Employers and colleagues who understand this rhythm gain access to one of the most dedicated, detail-attentive, and emotionally intelligent workers in the zodiac. Those who demand constant, unchanging output will find themselves frustrated by what appears as inconsistency but is actually a natural energetic cycle.

Karka natives work best in environments that feel emotionally safe — teams where trust has been established, offices that feel like home rather than sterile factories, and cultures that value collaboration over competition. They are the colleagues who remember birthdays, sense when someone is struggling, and quietly ensure the team's emotional infrastructure remains sound. Their management style is protective and mentoring: they develop talent by creating safe containers for growth, and their teams often display fierce loyalty in return. The shadow side of Karka's work style is difficulty with delegation (the nurturing instinct extends to hoarding responsibility), sensitivity to workplace criticism, and a tendency to take professional setbacks personally.`,

  spiritualPath: `Karka's spiritual path is the way of Bhakti — devotional surrender to the Divine through the heart's intelligence. Where other Rashis may approach Moksha through Jnana (knowledge), Karma (action), or Raja Yoga (meditative discipline), the Karka soul finds its gateway through love itself. This is not sentimental devotion but the fierce, oceanic love that the Bhakti saints described — the love that dissolves the ego not through negation but through such overwhelming fullness that the small self simply cannot contain it and opens into the infinite.

The Nakshatras in Karka map a complete spiritual journey. Punarvasu (pada 4) represents the soul's return to its source — the prodigal return after wandering through creation. Pushya, the most Sattvic of all 27 Nakshatras, embodies nourishment as spiritual practice — Seva (selfless service), Daan (generous giving), and the understanding that the Divine is fed when any being is fed. Ashlesha introduces the Kundalini dimension — the serpent energy coiled at the base of consciousness, which in the awakened Karka native rises through devotion rather than forceful practice, purifying each Chakra with the cooling waters of Bhakti.

Daily practices that support Karka's spiritual evolution include Chandra Namaskar (Moon salutations), meditation during Brahma Muhurta (the pre-dawn hours when the mind is most Sattvic), mantra Japa of "Om Chandraya Namaha" or the Pushya Nakshatra deity invocation, and ritual connection with water — offering prayers at rivers, maintaining a small water altar, or simply sitting in silence beside a natural body of water. Fasting or light eating on Purnima (full moon) and Amavasya (new moon) helps the Karka native calibrate their emotional body to cosmic rhythm. The ultimate realization on this path is that the tender, caring, nurturing impulse is not merely a personality trait but a direct expression of the Divine Mother — Shakti in her most accessible, intimate form.`,

  lifeLessons: [
    "Not every feeling that flows through you belongs to you — learn to distinguish your own emotional truth from what you have absorbed from others.",
    "The shell that protects can also imprison — practice opening even when every instinct says to withdraw.",
    "Nourishing others from an empty vessel is not Seva, it is self-abandonment. Fill your own cup through Sadhana before offering to others.",
    "Attachment and love wear similar faces but serve different masters — one serves fear, the other serves freedom.",
    "Your mood tides are not dysfunction but Chandra's rhythm moving through you. Track them, honor them, and they become your greatest navigational instrument.",
    "The past is a teacher, not a dwelling place. Ancestral memory is meant to inform your present Dharma, not bind you to repeated patterns.",
    "True emotional strength is not stoicism but the willingness to feel fully and remain present — the warrior who cries is braver than the one who cannot.",
  ],

  toolkit: [
    {
      title: "Chandra Cycle Attunement",
      context:
        "When emotional overwhelm strikes without apparent cause, or when energy and motivation fluctuate unpredictably throughout the month.",
      action:
        "Begin tracking the Moon's transit through the Nakshatras alongside your emotional and physical states for one full lunar cycle. Note which Tithis (lunar days) bring clarity versus confusion, energy versus depletion. Within two to three cycles, patterns will emerge that allow you to schedule demanding work during your peak phases and build in restoration during low tides — transforming what felt like instability into strategic self-knowledge.",
    },
    {
      title: "Jala Tattva Reset",
      context:
        "When you feel emotionally congested — carrying feelings that seem too heavy, too tangled, or not entirely your own.",
      action:
        "Immerse yourself in natural water — a river, ocean, lake, or even a bath prepared with sea salt and a few drops of sandalwood oil. As you enter the water, consciously set the intention to release what does not belong to you. Visualize absorbed emotions dissolving from your energy body into the water, which has infinite capacity to receive and transmute. Follow with five minutes of slow, deep breathing, silently repeating 'Om Chandraya Namaha' to seal the cleansed emotional field.",
    },
    {
      title: "Pushya Nourishment Practice",
      context:
        "When your nurturing energy feels depleted, resentful, or compulsive — when caring for others has become a joyless obligation rather than a natural overflow.",
      action:
        "On the next Pushya Nakshatra day (occurs monthly — consult a Panchanga), prepare a simple, Sattvic meal with full presence and offer it first to the Divine or to someone in genuine need before eating yourself. This practice reconnects you to the original source of your nurturing impulse — the understanding that all nourishment flows from the cosmic to the individual, not the reverse. You are a channel, not the source, and channels must remain open in both directions.",
    },
    {
      title: "Shell & Reveal Dialogue",
      context:
        "When you notice yourself retreating into emotional withdrawal — especially in relationships where honest communication is needed but fear of rupture keeps you silent.",
      action:
        "Write two letters you will not send. The first is from your 'shell self' — the one who wants to hide, protect, avoid conflict. Let it speak its fears fully without censorship. The second is from your 'ocean self' — the vast, compassionate awareness that holds all your feelings without being threatened by any of them. Let it respond to the shell with tenderness and truth. Read both aloud to yourself, then distill the ocean self's message into one honest sentence you can actually speak to the person involved.",
    },
  ],

  descriptionInsight:
    "You carry the full luminosity of Chandra within you — a depth of feeling, a capacity for care, and an intuitive wisdom that most souls spend lifetimes trying to cultivate. Your Dharma is not to harden against the world's pain but to become such a clear vessel of compassion that your very presence becomes sanctuary. Remember: the Moon does not struggle to shine — it simply reflects the light it receives. When you stop trying to control the tides and trust your own rhythm, you discover that your sensitivity was never your weakness. It was always your most sacred power.",
};
