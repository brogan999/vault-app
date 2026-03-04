import type { VedicRashiContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "mithuna";

export const MITHUNA: VedicRashiContent = {
  rashi: "Mithuna",
  name: "The Sacred Messenger",
  shortName: "The Twins",
  tagline:
    "Where Budha's quicksilver intelligence meets the restless wind of Vayu, knowledge becomes living breath.",
  color: "#93A2B6",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  element: "Vayu",
  guna: "Rajas",
  graha: "Budha",
  grahaEnglish: "Mercury",
  symbol: "♊",

  chandraOverview: `Chandra in Mithuna bestows a mind that breathes like the wind itself — ceaselessly moving, gathering, and redistributing prana through the vehicle of thought. The lunar energy here is filtered through Budha's crystalline lens, producing an emotional nature that processes feeling through language, story, and intellectual framework. You do not simply feel — you narrate, analyze, and cross-reference your inner world with an almost scholarly devotion. This is Chandra channeled through Vayu tattva: emotions become currents of air, expressed as words, gestures, and the irrepressible need to connect.

The Nakshatras that cradle your Chandra tell a deeper story. If the Moon falls in Mrigashira (padas 3–4), there is a gentle, searching quality — the eternal seeker following a trail of fragrance through the forest of knowledge. In Ardra Nakshatra, ruled by Rudra the storm deity, the emotional body carries an undercurrent of fierce intellectual intensity; tears and breakthroughs arrive in sudden downpours that clear the sky. In Punarvasu (padas 1–3), the Moon finds its way home again and again, returning to wisdom after every wandering — the arrow of Aditi's grace that always finds its mark.

This Rajasic lunar placement gives you an emotional metabolism that runs hot and fast. You process grief by reading, heartbreak by writing, and confusion by talking it through. Stillness can feel threatening because Vayu demands movement — yet the deepest gift of Chandra in Mithuna is the realization that the breath between words holds more truth than the words themselves.`,

  suryaOverview: `Surya in Mithuna illuminates the dharmic path of the communicator, the scribe, and the bridge between worlds of knowledge. Here the soul's purpose (Atmakaraka impulse) expresses through Budha's domain — gathering, synthesizing, and transmitting information as a sacred act. The solar fire burns through the medium of Vayu, producing not a roaring blaze but a brilliant, dancing flame that leaps from wick to wick, lighting many lamps from a single source.

The Rajasic nature of both Mithuna and the solar ego creates a personality that is visibly animated, mentally restless, and magnetically articulate. Under Mrigashira's influence, Surya here can become the divine hunter of knowledge — relentless, curious, and gracefully persistent. Under Ardra, the Sun carries Rudra's transformative storm-force; these natives often experience pivotal identity shifts through intellectual or communicative crises that strip away superficial knowing and reveal raw understanding. Under Punarvasu, the solar identity keeps renewing itself — there is a buoyancy and philosophical optimism that survives every dark night.

The challenge for Surya in Mithuna is depth versus breadth. The Vayu element scatters solar focus across many interests, and the Rajasic drive amplifies this restlessness. Your dharma is not to know everything, but to become the messenger who carries the right knowledge to the right soul at the right moment — Budha's highest function in the cosmic order.`,

  lagnaOverview: `Mithuna Lagna gives the native a body and bearing shaped by Vayu — often lean, expressive in gesture, quick-eyed, and vibrating with an almost visible mental electricity. The ascendant is the mask the soul wears in the material world, and Mithuna rising wears the mask of Budha's emissary: alert, adaptable, and perpetually interested. The physical constitution tends toward Vata qualities — lightness, dryness, and mobility — and the native may need to consciously cultivate grounding practices to balance the airy Rajasic energy that dominates their prakriti.

As the first house lord, Budha's condition in the chart becomes paramount. A well-placed Budha grants eloquence, commercial acumen, and the ability to navigate complex social and intellectual terrain with ease. An afflicted Budha can manifest as nervous anxiety, scattered purpose, or a tongue that moves faster than wisdom permits. The Nakshatras rising on the Lagna degree refine this further: Mrigashira rising gives a gentle, deer-like quality of alert curiosity; Ardra rising channels Rudra's intensity into the personality, often producing sharp wit and emotional depth beneath a breezy exterior; Punarvasu rising carries Aditi's maternal wisdom and a gift for teaching.

Mithuna Lagna natives are the natural translators of the zodiac — not merely between languages, but between paradigms, disciplines, and levels of consciousness. Your karmic assignment is to bridge dualities: intellect and intuition, speech and silence, the mundane letter and the sacred mantra. The twin imagery of Mithuna is not about being two-faced, but about holding two truths simultaneously and finding the higher synthesis.`,

  coreEnergies: [
    {
      name: "Budha Shakti",
      score: 92,
      description:
        "The mercurial intelligence of Budha flows powerfully through Mithuna, its own rashi. This is Budha in full dignity — the capacity for rapid analysis, linguistic precision, and the alchemical transformation of raw data into communicable wisdom. Your mind is Budha's instrument, tuned to receive and transmit across multiple frequencies simultaneously.",
    },
    {
      name: "Vayu Prana",
      score: 88,
      description:
        "As a Vayu rashi, Mithuna channels the element of wind and breath at the mental level. Prana moves through your thoughts the way wind moves through trees — animating, shaping, and sometimes uprooting. This energy grants extraordinary mental mobility but demands conscious pranayama practice to avoid Vata derangement and nervous depletion.",
    },
    {
      name: "Intellectual Agility",
      score: 95,
      description:
        "The Rajasic quality of Mithuna combined with Budha's rulership produces perhaps the most mentally agile configuration in Jyotish. You can hold multiple conceptual frameworks in mind simultaneously, switch between analytical and creative modes without friction, and perceive connections that others miss entirely. This is the energy of Ardra Nakshatra at its finest — the storm that rearranges the landscape of understanding.",
    },
    {
      name: "Communication Force",
      score: 90,
      description:
        "Mithuna is the rashi of Vak Shakti — the sacred power of speech. Whether through writing, teaching, trading, or counseling, your words carry a particular charge. Under Budha's governance, language becomes both tool and offering. The Mrigashira influence adds poetic subtlety, Ardra contributes penetrating honesty, and Punarvasu brings the gift of words that heal and restore.",
    },
    {
      name: "Adaptive Mind",
      score: 85,
      description:
        "The dual nature of Mithuna — a dvandva rashi — grants remarkable psychological flexibility. You adapt to new environments, ideologies, and social contexts with a fluidity that can appear effortless. This is Rajas in its most refined expression: not mere restlessness, but the intelligent responsiveness of a mind that refuses to calcify into a single fixed position.",
    },
  ],

  strengths: [
    {
      title: "Mastery of Vak Shakti",
      description:
        "You wield the sacred power of speech with natural authority. Budha grants Mithuna natives an innate understanding of how words shape reality — from the casual conversation that shifts someone's perspective to the carefully crafted argument that changes institutional direction.",
      deepDive:
        "In the Vedic tradition, Vak (speech) is considered a divine power with four levels: Para (transcendent), Pashyanti (visionary), Madhyama (mental), and Vaikhari (spoken). Mithuna natives naturally operate across these levels, sensing the deeper intention behind words and choosing language that resonates on multiple planes. This is why Budha is called the 'prince among Grahas' — the one who serves as translator between divine intelligence and human understanding.",
    },
    {
      title: "Prana-Powered Learning",
      description:
        "The Vayu element makes you a breathing, living library. You absorb knowledge not through rote memorization but through a kind of intellectual respiration — inhaling new concepts, metabolizing them through cross-referencing and dialogue, and exhaling refined understanding.",
      deepDive:
        "The connection between Vayu tattva and learning is deeply rooted in Vedic science. Just as pranayama (breath control) directs life-force through the nadis, Mithuna's airy intelligence directs conceptual prana through the mental body. You learn best in environments with intellectual circulation — debates, seminars, brainstorming sessions — where ideas can move freely like wind through an open space.",
    },
    {
      title: "Bridge-Building Between Worlds",
      description:
        "The twin symbolism of Mithuna is fundamentally about connection between dualities. You naturally translate between disciplines, cultures, and levels of understanding — making the esoteric accessible and the mundane meaningful.",
      deepDive:
        "This capacity directly reflects Budha's mythological role as the messenger of the Devas. In Jyotish, Budha is the only Graha considered capable of true neutrality — taking on the qualities of whatever Graha it associates with. This chameleonic intelligence, when elevated, becomes the ability to understand and communicate across any divide. Punarvasu Nakshatra enhances this quality with its theme of return and renewal — the arrow that always comes back, bringing knowledge from distant territories.",
    },
    {
      title: "Rajasic Drive for Dharmic Action",
      description:
        "Your Rajasic guna provides relentless mental momentum. While Tamas resists change and Sattva observes it, Rajas creates it. You are the initiator of intellectual movements, the starter of conversations that needed to happen, the writer of the first draft.",
      deepDive:
        "Rajas often receives negative treatment in spiritual literature, but Bhagavad Gita acknowledges its essential role in Karma Yoga — the yoga of action. Mithuna's Rajasic nature, when aligned with dharmic purpose, becomes the engine of meaningful communication. The key is directing this active energy toward service rather than mere stimulation. Ardra Nakshatra's connection to Rudra teaches that even destructive intellectual force — the willingness to demolish outdated ideas — serves the higher purpose of renewal.",
    },
    {
      title: "Nervous System Sensitivity as Gift",
      description:
        "Your finely tuned Vata-influenced nervous system is not merely a vulnerability — it is a sophisticated antenna. You pick up on subtleties in tone, timing, and subtext that others miss completely, making you an exceptional counselor, negotiator, and reader of situations.",
    },
  ],

  growthEdges: [
    {
      title: "The Vayu Scatter",
      teaser:
        "Your greatest gift — mental mobility — becomes your deepest challenge when Vayu moves without anchor.",
      fullExplanation:
        "The Vayu element, when ungrounded, disperses attention across too many channels. Budha's quicksilver nature amplifies this: you may find yourself with seventeen open tabs in your mind, each genuinely interesting, none receiving the sustained focus needed for mastery. The Rajasic guna adds urgency to this scatter — a feeling that you must pursue every intellectual thread simultaneously or lose it forever. In Ayurvedic terms, this is Vata vitiation of the mind (Prajnaparadha) — the misuse of intelligence that comes from overstimulation. The remedy is not suppression of curiosity but the cultivation of Prithvi (earth) qualities: routine, patience, and the willingness to let some threads wait while you follow one to its source.",
      premiumHook:
        "Discover your personalized Budha-balancing protocol — specific practices, mantras, and daily rhythms designed to harness Vayu's brilliance without burning out your nervous system.",
    },
    {
      title: "Depth Versus Breadth Karma",
      teaser:
        "The soul lesson of knowing when to stop gathering and start integrating.",
      fullExplanation:
        "Mithuna's karmic pattern often involves lifetimes of accumulating knowledge without transforming it into wisdom. There is a crucial difference between Budha's function (information processing) and Guru's function (wisdom integration). When Mithuna natives rely solely on Budha's gifts, they can become brilliant encyclopedias of surface knowledge — knowing about everything while understanding nothing at the level that changes the soul. Ardra Nakshatra's Rudra energy periodically forces this issue through crises that strip away intellectual scaffolding and demand raw, unmediated knowing. These storms are not punishments but initiations — Rudra's fierce grace clearing the way for genuine depth.",
      premiumHook:
        "Explore the specific Nakshatra-level analysis of your Mithuna placements to understand exactly where your karma of depth versus breadth plays out — and what practices transform intellectual accumulation into embodied wisdom.",
    },
    {
      title: "The Restless Tongue",
      teaser:
        "When Rajas governs speech, words can outrun wisdom and cause unintended karmic ripples.",
      fullExplanation:
        "Budha's speed, combined with Rajasic momentum and Vayu's disregard for boundaries, can produce speech that is technically brilliant but karmically careless. You may say the right thing at the wrong time, share others' confidences in the heat of an engaging conversation, or use your verbal gifts to win arguments rather than seek truth. The Vedic concept of Satya (truthfulness) as practiced through right speech (Rig Veda's principle of Ritam) requires not just accuracy but timing, compassion, and awareness of consequence. Mrigashira Nakshatra's searching quality can help here — learning to track the impact of your words the way a hunter tracks an animal, with patience and attention to every subtle sign.",
      premiumHook:
        "Unlock your personalized Vak Shuddhi (speech purification) practice — including specific mantras for Budha and breath-awareness techniques that naturally slow the Rajasic impulse to speak before reflection is complete.",
    },
    {
      title: "Emotional Intellectualization",
      teaser:
        "The habit of routing every feeling through the mind before allowing it to be simply felt.",
      fullExplanation:
        "Vayu's nature is to lift things up and away from the ground. In the emotional realm, this manifests as a tendency to convert feelings into concepts before they have been fully experienced in the body. Grief becomes a fascinating case study. Anger becomes a rhetorical position. Love becomes a philosophical framework. While intellectual processing has genuine value, Mithuna natives often use it as an unconscious defense against the vulnerability that raw feeling demands. The water rashis (Karka, Vrischika, Meena) in your chart show where this pattern can be healed — where you are being asked to let emotion flow downward into the body rather than upward into the mind. Punarvasu's influence offers particular grace here: its deity Aditi is the mother of all gods, and her energy teaches that returning to simple, unanalyzed feeling is not regression but the deepest form of renewal.",
      premiumHook:
        "Access your elemental balance profile to understand exactly how Vayu interacts with Jala (water) in your specific chart — and receive tailored somatic practices for grounding intellectual energy into embodied emotional wisdom.",
    },
  ],

  relationships: `In the realm of relationships, Mithuna brings Budha's gift of articulate connection and Vayu's need for intellectual circulation. You love through language — through the perfectly timed message, the conversation that lasts until dawn, the inside joke that becomes a private mythology. Your Rajasic nature means you need relationships that stimulate, challenge, and evolve; stagnation is the death of romantic feeling for you.

The Nakshatra influences color your relational style profoundly. Mrigashira's gentle seeking creates a lover who is perpetually curious about their partner — always discovering new layers, never assuming they have the complete picture. Ardra's Rudra energy brings passionate intensity and a willingness to enter the storms of deep intimacy, though it can also trigger sharp words during conflict. Punarvasu's returning arrow brings remarkable loyalty beneath the surface restlessness — a commitment that renews itself through every trial.

Budha as your relationship ruler means that communication is not merely important to your partnerships — it is the partnership. When dialogue flows freely, love flourishes. When communication breaks down, the relationship suffocates regardless of how strong other bonds might be. Your karmic work in relationships is learning that some of the deepest connections happen in silence, in shared breath, in the Vayu element expressed not as words but as presence.`,

  compatibilityNotes: {
    Tula: "A natural Vayu-to-Vayu resonance. Tula's Shukra-ruled grace meets your Budha-driven wit, creating partnerships rich in aesthetic and intellectual pleasure. Both rashis understand the language of air — ideas, ideals, and the elegant exchange of perspectives. The challenge lies in grounding all that airy brilliance into practical commitment.",
    Kumbha:
      "Fellow Vayu rashi with Shani's discipline tempering your Budha-speed. Kumbha brings the long-term vision and structural thinking that Mithuna sometimes lacks, while you offer the verbal agility and social fluency that Kumbha admires. Together you can build movements, not just conversations.",
    Mesha:
      "Mangal's fire lights up your Vayu element — wind fans flame into brilliant intensity. Mesha's directness cuts through your tendency to over-analyze, while your communicative gifts help Mesha articulate what they instinctively know. A Rajasic pairing that thrives on shared momentum and mutual respect for each other's speed.",
    Dhanu:
      "The axis of Budha and Guru — information and wisdom — creates a dynamic of complementary growth. Dhanu's philosophical vision gives your data points a larger context, while your precision grounds Dhanu's expansive idealism. Tension arises when Guru's broadness feels vague to Budha's specificity, but this friction is productive.",
    Simha:
      "Surya's radiance draws out your finest communicative gifts — you become the eloquent voice for Simha's grand vision. There is a natural court dynamic here: the sovereign and the advisor, the performer and the storyteller. Mutual admiration fuels this pairing when ego remains in check on both sides.",
    Kanya:
      "Shared Budha rulership creates an instant intellectual rapport — you speak the same analytical language. Kanya brings the Prithvi grounding that your Vayu nature craves, while you offer the social fluidity and creative thinking that Kanya sometimes struggles to access. A pairing of complementary Budha expressions.",
  },

  careerDharma: `Mithuna's career dharma orbits Budha's domain: communication, commerce, education, and the movement of information. You are not meant for roles that demand unchanging routine or silent, solitary labor — your Vayu nature requires intellectual circulation and human contact. The Rajasic guna provides entrepreneurial drive and the ability to juggle multiple professional streams simultaneously.

The most dharma-aligned careers leverage your Nakshatra influences: Mrigashira's searching intelligence excels in research, investigation, and journalism — any field where following a trail of clues leads to revelation. Ardra's Rudra energy thrives in fields that require intellectual courage — challenging orthodoxies, pioneering new technologies, or communicating difficult truths that others cannot articulate. Punarvasu's renewing quality makes you a natural educator, counselor, or healer through dialogue — someone who helps others find their way back to themselves through the power of the right words at the right time.

Budha also governs commerce and trade (Vanijya), making Mithuna natives instinctive entrepreneurs, marketers, and dealmakers. Your ability to perceive value where others see noise, to articulate a proposition that resonates across different audiences, and to adapt your approach in real-time makes you formidable in any exchange-based profession. The spiritual dimension of this dharma is understanding that all commerce is ultimately an exchange of prana — and conducting your professional life with that awareness transforms mundane trade into sacred practice.`,

  workStyle: `Your work rhythm follows Vayu's pattern: gusts of intense, brilliant productivity followed by periods of apparent drift that are actually integration phases. Forcing yourself into rigid nine-to-five structures without intellectual variety is like asking the wind to flow in a straight line. You work best with multiple concurrent projects, frequent context-switching (which actually refreshes rather than depletes your Budha-powered attention), and environments where conversation and collaboration are woven into the work itself.

The Rajasic quality means you thrive under moderate pressure and deadlines — Rajas needs friction to generate its best output. However, sustained high pressure without recovery periods leads to Vata derangement: anxiety, insomnia, and the paralysis of an overstimulated nervous system. Your optimal cadence is sprint-rest-sprint, with the rest periods genuinely honoring stillness rather than filling them with more input.

Budha's influence makes you naturally systematic despite your airy reputation. You instinctively create communication systems, information architectures, and workflows that optimize the flow of knowledge. Your desk may appear chaotic, but your mind often holds a surprisingly precise map of where everything is and how it connects.`,

  spiritualPath: `The spiritual path of Mithuna is the path of Jnana Yoga refined through Bhakti — the yoga of knowledge that ultimately surrenders to devotion. Budha's analytical intelligence is the starting point but not the destination. The deepest Mithuna mystics discover that the mind, after exhausting its capacity for understanding, naturally opens into a silence that is more eloquent than any word. This is the transition from Budha's domain to Guru's — from Mithuna to its opposite sign Dhanu — that represents the spiritual maturation arc of every Mithuna native.

The Nakshatras offer specific sadhana guidance. Mrigashira's deity Soma (the Moon as divine nectar) points toward practices that cultivate inner stillness through focused attention — trataka, dharana, and the meditation on the space between thoughts. Ardra's Rudra connection opens the path of Shiva devotion — particularly practices that embrace the storm rather than avoiding it: dynamic meditation, cathartic pranayama, and the fierce compassion of Rudra's tearful eye that weeps for all beings. Punarvasu's deity Aditi represents the unbound, infinite space of pure consciousness — the ultimate destination where Vayu dissolves into Akasha (ether) and the restless mind discovers its nature as boundless awareness.

Mantra practice is particularly potent for Mithuna — Budha is the lord of mantra, and your attunement to the vibrational power of sound makes japa an efficient and natural sadhana. The Budha Beeja Mantra (Om Bum Budhaya Namaha) and the study of Saraswati, goddess of knowledge and speech, align your intellectual gifts with their highest spiritual purpose.`,

  lifeLessons: [
    "The space between your thoughts is not emptiness — it is the source from which all true knowledge arises. Learn to rest there.",
    "Not every truth needs to be spoken aloud. Budha's highest function is discernment: knowing what to say, when to say it, and when sacred silence serves better than the most brilliant articulation.",
    "Your restlessness is not a flaw — it is Vayu seeking its natural expansion. But wind without direction becomes a dust storm. Choose your dharmic direction and let Rajas fuel purpose rather than mere stimulation.",
    "Depth and breadth are not opponents. The deepest wells are fed by the widest underground rivers. Let your curiosity range freely, but always return to dig deeper in the places that call your soul.",
    "Your nervous system is a gift, not a burden. The same sensitivity that makes you anxious in chaotic environments makes you brilliant at reading people, situations, and the subtle currents of prana that others cannot perceive.",
    "Relationships are not puzzles to be solved by your intellect. The people you love need your presence more than your analysis, your breath more than your words.",
  ],

  toolkit: [
    {
      title: "Budha Pranayama",
      context:
        "When Vayu scatter intensifies and your mind fragments across too many streams of thought, losing focus and productive clarity.",
      action:
        "Practice Nadi Shodhana (alternate nostril breathing) for 10 minutes, specifically visualizing Budha's green light flowing through the Ida and Pingala nadis with each breath cycle. This harmonizes the twin energies of Mithuna and restores Budha's focused intelligence. Follow with 5 minutes of silence, observing the space between breaths.",
    },
    {
      title: "Vak Shuddhi Vrata",
      context:
        "When your speech has become careless, reactive, or disconnected from deeper wisdom — when Rajasic verbal momentum outpaces mindful intention.",
      action:
        "Observe a modified speech fast (Mauna) for one morning per week. During this period, communicate only in writing, which engages Budha's reflective capacity rather than his impulsive speed. Before breaking silence, recite the Saraswati mantra (Om Aim Saraswatyai Namaha) three times, setting the intention that your words for the day will serve truth and compassion equally.",
    },
    {
      title: "Prithvi Grounding Ritual",
      context:
        "When Vata derangement manifests as anxiety, sleeplessness, or the feeling of being unmoored from your body and practical reality.",
      action:
        "Stand barefoot on earth or grass for 10 minutes at dawn or dusk (Sandhya Kala — the junction times sacred in Vedic tradition). While standing, practice slow abdominal breathing and mentally repeat 'Om Bum Budhaya Namaha' 108 times. Visualize roots extending from your feet into Prithvi tattva. Follow with warm sesame oil self-massage (Abhyanga) on the feet and crown — two points where Vayu enters and exits the body.",
    },
    {
      title: "Ardra Storm Integration",
      context:
        "When you encounter an intellectual or emotional crisis that dismantles your existing frameworks — Rudra's storm clearing the ground for new growth.",
      action:
        "Rather than immediately rebuilding your mental models, sit with the destruction. Journal freely for 20 minutes without editing or structuring — let Rudra's raw energy pour through Budha's instrument without the usual filters. Then read what you wrote aloud once, slowly. Burn or delete the writing. The integration happens not in the content but in the act of allowing unfiltered expression followed by conscious release.",
    },
  ],

  descriptionInsight:
    "You are Budha's living breath — a mind that moves like wind through the forest of knowledge, touching every leaf, carrying seeds between distant groves, and whispering truths that only those who listen carefully can hear. Your dharma is not to possess knowledge but to circulate it, not to speak but to translate between the silence of the cosmos and the hunger of human understanding. When you honor this sacred function — messenger, interpreter, bridge between worlds — your restless Rajasic energy finds its natural channel, and the twin streams of Mithuna converge into a single, luminous current of awakened intelligence.",
};
