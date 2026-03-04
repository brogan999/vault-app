import type { VedicRashiContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "mesha";

export const MESHA: VedicRashiContent = {
  rashi: "Mesha",
  name: "The Cosmic Warrior",
  shortName: "The Ram",
  tagline: "Where Agni ignites the soul's first breath of purpose",
  color: "#A03B0F",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  element: "Agni",
  guna: "Rajas",
  graha: "Mangal",
  grahaEnglish: "Mars",
  symbol: "♈",

  chandraOverview: `Chandra in Mesha bestows an emotional nature forged in Agni — raw, immediate, and instinctively courageous. The inner world of the Mesha Moon is one of rapid feeling: emotions surge like flames, burning bright and then clearing just as quickly. There is very little brooding here. When hurt, the instinct is to act — to confront, to move, to resolve. Emotional stagnation feels unbearable to this placement. The Nakshatras of Mesha — Ashwini, Bharani, and the first pada of Krittika — each color Chandra's expression differently. Ashwini Chandra carries the healing swiftness of the Ashwini Kumaras, finding emotional balance through rapid restoration. Bharani Chandra holds a deeper, more Shakti-driven emotional intensity, one that understands the cycles of creation and dissolution. Krittika pada one channels the purifying knife of Agni, cutting through emotional confusion with startling clarity.

The Rajasic guna of Mesha means Chandra here is perpetually oriented toward action and engagement. This is not a Moon that meditates on feelings — it metabolizes them through movement, competition, and courageous expression. There is an almost childlike quality to Mesha Chandra: a directness of feeling, an inability to mask emotions, and a fierce protectiveness of those in their care. Mangal's rulership ensures that even vulnerability is expressed as strength. These natives find emotional nourishment in physical activity, in being first, and in the thrill of new beginnings. Their instinctive reaction to any emotional challenge is to pioneer a way through it.

At its highest expression, Chandra in Mesha produces a soul whose emotional body is a vehicle for fearless compassion. They are the ones who rush toward danger to help others, whose hearts beat faster not from anxiety but from the Agni of righteous engagement. The karmic lesson here is learning that vulnerability is not weakness — that the warrior's greatest strength sometimes lies in stillness, in receiving, in allowing Chandra's cooling waters to temper Mangal's fire without extinguishing it.`,

  suryaOverview: `Surya is exalted in Mesha, and this is no coincidence — the Sun's essential nature of dharmic authority, self-sovereignty, and radiant purpose finds its fullest expression in the first rashi of the zodiac. Surya in Mesha produces a soul whose core identity is inseparable from the act of initiation. These are beings who incarnate to begin things: movements, enterprises, new paradigms of thought. The Atmakaraka energy here is one of pure creative will — the soul knows what it wants and moves toward it with the certainty of sunrise. Under Ashwini's influence, this Surya carries the divine physician's urgency. Under Bharani, the identity is forged through the intensity of Yama's transformative fire. Under Krittika's first pada, Surya meets its own Agni and becomes an unshakeable beacon of purpose.

The dharmic expression of Surya in Mesha is leadership through example rather than decree. Mangal as the dispositor of Surya means the ego's vitality is channeled through martial energy — courage, directness, and an unwillingness to compromise on matters of principle. There is a natural Kshatriya dharma here: the warrior-king who leads from the front. These natives possess an almost solar certainty that can inspire entire communities to action. Their presence is felt before they speak. The exaltation of Surya grants a dignity of purpose that, when aligned with higher consciousness, becomes a vehicle for tremendous dharmic contribution to the collective.

The shadow of this placement manifests when Rajasic drive overwhelms Sattvic discernment — when the urgency to act eclipses the wisdom to wait. The karmic work for Surya in Mesha is developing the patience to let dharma unfold in its own time, rather than forcing outcomes through sheer willpower. When this balance is achieved, Surya in Mesha becomes what the rishis intended for this exaltation: a soul so aligned with its purpose that its very existence becomes a lighthouse for others navigating their own dharmic path.`,

  lagnaOverview: `Mesha Lagna creates a physical and psychological constitution dominated by Mangal's fiery, pioneering energy. The body tends toward a lean, muscular build with sharp features, a strong jaw, and eyes that carry an unmistakable intensity. Pitta dosha predominates in the Ayurvedic constitution, giving these natives strong digestive fire, a tendency toward heat-related conditions, and a metabolic engine that runs fast and hot. The head is particularly significant — both as a vulnerable physical area and as the seat of their characteristic headstrong nature. Mesha rises first in the natural zodiac, and Mesha Lagna natives carry this "firstness" as a defining life theme: they are often firstborn, first to act, first to arrive, first to take risk.

The life trajectory of Mesha Lagna unfolds through a series of initiatory experiences. Each major period brings a new frontier to conquer, a new territory of self to claim. With Mangal as Lagna lord, the native's entire life path is colored by themes of courage, conflict, and conquest — not necessarily in the martial sense, but in the soul's determination to carve its own path through existence. The Nakshatras play a crucial role: an Ashwini Lagna native will move through life with astonishing speed and healing capacity, Bharani Lagna will encounter life's deepest transformations early and often, and Krittika pada one Lagna will possess a purifying directness that others find either deeply clarifying or uncomfortably sharp.

The karmic architecture of Mesha Lagna places Tula in the seventh house, creating a lifelong dialogue between the self's Rajasic independence and the soul's need for Venusian harmony in partnership. Karka occupies the fourth house, suggesting that emotional security is found not through stillness but through creating a home base from which to launch expeditions. Makara in the tenth house brings Shani's disciplining influence to the career, tempering Mangal's impulsiveness with the structured ambition needed for lasting dharmic achievement. Understanding these house dynamics is essential for Mesha Lagna natives — the warrior who knows their own chart becomes the strategist who wins not just battles, but the war of self-realization.`,

  coreEnergies: [
    {
      name: "Agni Shakti",
      score: 92,
      description:
        "The primal fire that initiates all creation — Mesha carries the first spark of cosmic Agni, the transformative flame that turns intention into manifestation.",
    },
    {
      name: "Warrior Spirit",
      score: 88,
      description:
        "Mangal bestows the Kshatriya's courage to face adversity without flinching. This is the energy of Arjuna before the battle — the resolve that overcomes doubt through dharmic action.",
    },
    {
      name: "Pitta Drive",
      score: 85,
      description:
        "An intense metabolic and psychological fire that fuels ambition, sharpens intellect, and demands constant forward motion. This Pitta energy transforms obstacles into fuel.",
    },
    {
      name: "Initiative Force",
      score: 90,
      description:
        "The cardinal impulse of Mesha — the compulsion to begin, to pioneer, to be the first footprint on untouched ground. This is Brahma's creative urge expressed through individual will.",
    },
    {
      name: "Independence",
      score: 82,
      description:
        "A fierce sovereignty of self rooted in Mangal's ownership of Mesha. This energy resists subjugation in all forms and seeks authentic self-expression as a non-negotiable condition of existence.",
    },
  ],

  strengths: [
    {
      title: "Fearless Initiative",
      description:
        "Where others deliberate, Mesha acts. This is not recklessness but the natural expression of Agni tattva — the element that must move forward or consume itself. Mesha natives are the ones who break deadlocks, who take the first step into the unknown, who say yes when everyone else is still calculating risk.",
      deepDive:
        "Ashwini Nakshatra amplifies this quality with the Ashwini Kumaras' divine swiftness. When Mangal is well-placed, the initiative carries not just speed but precision — the warrior who strikes at exactly the right moment. This strength becomes most potent during Mangal dasha or when transiting Mangal activates key points in the birth chart.",
    },
    {
      title: "Natural Leadership",
      description:
        "Mesha is the Lagna of the natural zodiac — the ascendant of the cosmic chart itself. This grants an instinctive understanding of how to lead, how to inspire through action rather than words. Mangal's influence creates leaders who lead by doing, not by delegating.",
      deepDive:
        "This leadership capacity deepens significantly when Surya is strong in the chart, as the combination of solar authority and Martian courage produces the archetypal Dharma Raja — the righteous king who rules through embodied virtue rather than inherited power.",
    },
    {
      title: "Resilient Vitality",
      description:
        "The Agni element combined with Rajasic guna creates exceptional physical and psychological resilience. Mesha natives recover quickly from setbacks — illness, heartbreak, financial loss — because their internal fire continuously regenerates their life force. They embody the Vedic principle that Agni purifies all it touches.",
    },
    {
      title: "Honest Directness",
      description:
        "Mangal despises pretense. Mesha natives carry an almost uncomfortable degree of honesty that, while sometimes abrasive, creates a foundation of trust that more diplomatic rashis struggle to establish. In a world of social performance, the Mesha native's inability to dissemble becomes a rare and valued quality.",
      deepDive:
        "Bharani Nakshatra refines this directness with Yama's association — the lord of Dharma who weighs truth on absolute scales. A Bharani-influenced Mesha native does not merely speak truth; they embody it with a gravity that commands respect even from adversaries.",
    },
    {
      title: "Protective Courage",
      description:
        "The Kshatriya dharma of Mesha extends beyond personal ambition to a fierce protectiveness of the vulnerable. This is Mangal's highest expression — the warrior who fights not for glory but for those who cannot fight for themselves. Mesha natives instinctively position themselves between danger and the people they love.",
    },
  ],

  growthEdges: [
    {
      title: "Patience & Timing",
      teaser:
        "Agni wants to blaze continuously, but even fire needs fuel — learning when to advance and when to wait is Mesha's deepest karmic curriculum.",
      fullExplanation:
        "The Rajasic guna of Mesha creates an almost allergic reaction to stillness. Yet Jyotish teaches that proper timing — muhurta — is as essential as the action itself. Mesha natives often launch endeavors during inauspicious periods simply because they cannot tolerate waiting. The growth lies in cultivating Sattvic patience without losing Rajasic drive. This is the difference between a forest fire and a yajna — both are Agni, but one serves dharma through disciplined containment. Working with Shani's lessons, particularly during Sade Sati or Shani transits over key houses, teaches Mesha the paradoxical truth that strategic patience is itself a form of warrior discipline.",
      premiumHook:
        "Discover how your specific Nakshatra placement transforms this growth edge — and the precise Graha periods when mastering patience yields the greatest karmic rewards.",
    },
    {
      title: "Emotional Depth",
      teaser:
        "The speed of Mesha's emotional metabolism can prevent the deep processing that transforms experience into wisdom.",
      fullExplanation:
        "Mangal processes emotions through action, which means Mesha natives often 'solve' feelings rather than sit with them. Grief becomes a project. Heartbreak becomes a fitness regimen. While this coping mechanism is effective in crisis, it can prevent the alchemical transformation that occurs when emotions are fully honored. The Jala tattva houses in a Mesha native's chart — particularly the fourth house of Karka and the eighth house of Vrischika — hold the keys to this integration. Learning to let Chandra's cooling waters permeate Mangal's fire does not weaken the warrior; it creates the rare being who can fight with both power and compassion. The Nakshatras of Bharani especially carry this teaching, as Yama's domain includes the processing of life's deepest emotional transitions.",
      premiumHook:
        "Your Chandra placement reveals exactly how to develop emotional depth without sacrificing your essential fire — unlock the specific sadhana practices aligned with your birth chart.",
    },
    {
      title: "Collaborative Surrender",
      teaser:
        "The soul that must always lead eventually discovers that the highest form of strength is learning to follow.",
      fullExplanation:
        "Tula in the seventh house creates a fundamental tension in Mesha's relational life — the desire for partnership alongside the instinct for independence. Growth comes through recognizing that collaboration is not capitulation. The Vedic teaching here is found in the relationship between Mangal and Shukra: apparent opposites that, when integrated, create Lakshmi-Narayana — the divine partnership of power and grace. Mesha natives often attract Tula or Shukra-dominant partners precisely because the soul is seeking this balance. The growth edge is allowing these relationships to soften Mangal's edges without feeling that something essential is being lost. Guru's aspect on the seventh house, when present, dramatically accelerates this learning.",
      premiumHook:
        "See which Grahas influence your seventh house and how your partnership karma unfolds across different dasha periods — including when your ideal collaborative partnerships are most likely to form.",
    },
    {
      title: "Sustained Focus",
      teaser:
        "The initiator's challenge: Mesha excels at beginnings but must cultivate the Tamas-like steadiness to see endeavors through to completion.",
      fullExplanation:
        "As a Chara (cardinal) rashi, Mesha's genius lies in initiation — but the completion of great works requires an endurance that does not come naturally. The natural zodiac reveals the remedy: Vrishabha follows Mesha, teaching that the fire of creation must be grounded in Prithvi's patient persistence. Mesha natives benefit enormously from consciously cultivating Vrishabha qualities in their second house — building stable resources, honoring routines, and developing the sensory awareness that keeps them anchored in present-moment execution rather than racing toward the next new beginning. The Graha Shani, though uncomfortable for Mangal-ruled rashis, becomes an unexpected ally in this growth area, providing the structural discipline that channels Mesha's fire into lasting achievement.",
      premiumHook:
        "Unlock your personalized strategy for sustained focus based on your second house configuration and the specific dasha periods that support building lasting foundations.",
    },
  ],

  relationships: `Mesha approaches relationships with the same Agni-driven intensity that characterizes every dimension of their being. In love, they are passionate, direct, and fiercely loyal — but on their own terms. Mangal's influence means courtship often resembles a campaign: the Mesha native identifies what they want and pursues it with single-minded determination. There is an exhilarating quality to being loved by a Mesha — the feeling of being chosen decisively, without ambiguity or game-playing. Early relationships tend to be fast-burning and intense, teaching the native crucial lessons about the difference between desire and devotion.

The seventh house of Tula creates a lifelong pull toward partners who embody Shukra's qualities: grace, diplomacy, aesthetic sensitivity, and the art of compromise. This polarity is not accidental — it is the soul's mechanism for achieving wholeness. The most fulfilling partnerships for Mesha natives are those that honor both Mangal's need for autonomy and Shukra's invitation toward harmony. When Mesha learns that true partnership amplifies rather than diminishes individual power, their relationships become extraordinary vehicles for mutual growth. The Nakshatra of the seventh house cusp provides essential information about the specific type of partner the soul is seeking across lifetimes.

In friendship, Mesha is the ally you want in any crisis — the one who shows up first, asks questions later, and brings a fierce protectiveness to the people they consider family. Their social circle tends to be curated rather than expansive; Mesha prefers a small group of trusted companions to a wide network of acquaintances. Loyalty is absolute but not unconditional — betrayal is the one offense that Mangal's children find nearly impossible to forgive. The deepest friendships often form through shared adversity, competition, or dharmic purpose. Mesha understands bonds forged in fire, and these are the connections that endure across lifetimes.`,

  compatibilityNotes: {
    Simha:
      "A powerful Agni-Agni connection where Mangal's initiative meets Surya's authority. Both rashis understand each other's need for respect and leadership, creating a dynamic of mutual admiration that fuels shared dharmic purpose.",
    Dhanu:
      "The third Agni rashi completes the trine with shared idealism and expansive vision. Guru's wisdom tempers Mangal's impulsiveness, while Mesha's courage gives Dhanu the fire to act on its philosophical convictions.",
    Tula:
      "The classic seventh-house polarity — magnetic attraction paired with fundamental tension. Shukra's grace and Mangal's force create a dynamic that, when conscious, produces extraordinary growth for both souls.",
    Karka:
      "A complex square aspect bringing Chandra's emotional depth into dialogue with Mangal's action orientation. Challenging but deeply karmic — this pairing forces both rashis to integrate their shadow elements.",
    Makara:
      "The square from Shani-ruled Makara tests Mesha's patience but offers the structural discipline that Mangal-dominant souls desperately need. A partnership of mutual respect built through earned trust rather than instant chemistry.",
    Mithuna:
      "A stimulating sextile connection where Budha's intellectual agility meets Mangal's decisive force. Conversations crackle with energy, and both rashis share an appetite for novelty and new experiences.",
  },

  careerDharma: `The Dharmic purpose of Mesha is to initiate — to be the spark that sets transformative processes in motion. This is the rashi of founders, not inheritors; of pioneers, not administrators. Mangal's rulership draws Mesha natives toward vocations that require courage, decisive action, and the willingness to stand alone against opposition. The traditional Jyotish association with the Kshatriya varna points toward roles in defense, law enforcement, surgery, emergency medicine, and competitive athletics — but the modern expression of this dharma extends to entrepreneurship, crisis management, activist leadership, and any field where the ability to act swiftly under pressure determines outcomes.

The tenth house of Makara for Mesha Lagna reveals a critical nuance: while the impulse is Martian, lasting career achievement requires Shani's disciplined approach. The most successful Mesha professionals learn to pair their natural initiative with systematic execution. Shani in the tenth demands that career accomplishments be built on genuine merit and sustained effort, not merely on the brilliance of the initial vision. The dashas of Shani, while often experienced as frustrating restrictions, are typically the periods when Mesha natives build the professional structures that sustain their life's work. Guru's aspect on or placement in career houses amplifies dharmic alignment, transforming mere professional success into a vocation that serves the collective.

The Nakshatras within Mesha further refine career dharma. Ashwini natives excel in healing professions, transportation, and any field requiring rapid response. Bharani natives are drawn to work involving transformation — psychology, hospice care, creative destruction in business, or roles that require holding space at the threshold between states of being. Krittika pada one natives become the sharp instruments of their professional domains — surgeons, editors, critics, or any role where precision cutting serves a greater creative purpose. Regardless of Nakshatra, the common thread is purpose-driven work. Mesha cannot sustain motivation in roles that lack dharmic significance — the fire simply goes out without meaningful fuel.`,

  workStyle: `Mesha works in bursts of extraordinary intensity followed by necessary periods of recovery — the rhythm of Agni, which cannot burn continuously without consuming its vessel. The ideal work environment gives Mesha autonomy, clear objectives, and the freedom to execute in their own way. Micromanagement is experienced as a direct assault on Mangal's sovereignty and will provoke either open rebellion or rapid departure. These natives perform best as point leaders of small, high-performing teams where their decisiveness and courage set the pace for others.

The challenge in collaborative environments is learning that not everyone operates at Mangal's tempo. Mesha's natural impatience with slower colleagues must be tempered with the recognition that sustained projects require diverse energies — the Prithvi steadiness of Vrishabha, the Vayu adaptability of Mithuna, the Jala intuition of Karka. The most effective Mesha professionals surround themselves with complementary energies rather than building teams of fellow warriors, creating an ecosystem where their fire provides ignition while others supply the fuel and containment that ensure the flame endures.`,

  spiritualPath: `The spiritual journey of Mesha is the path of the Karma Yogi — the seeker who finds the Divine not through withdrawal but through engaged, dharmic action in the world. The Bhagavad Gita, spoken on the battlefield of Kurukshetra, is Mesha's essential scripture: the teaching that action performed without attachment to outcome, in service of dharma, becomes the highest form of sadhana. Mangal's energy is not an obstacle to spiritual development — it is the very fuel of tapas, the fierce inner fire that burns away the ego's attachments and reveals the Atman's true nature beneath.

The Nakshatras of Mesha each carry distinct spiritual teachings. Ashwini, ruled by Ketu, connects to the path of instantaneous healing and the transcendence of physical limitation — the recognition that the body is a vehicle of the soul, not its prison. Bharani, ruled by Shukra, holds the mysteries of Shakti — the creative and destructive power that underlies all manifestation. Spiritual practice for Bharani-influenced Mesha often involves Tantra in its authentic Vedic sense: the transformation of primal energies into vehicles of liberation. Krittika pada one, ruled by Surya, illuminates the path of self-purification through Agni — the Vedic fire ceremony as both external ritual and internal practice, burning away samskaras with the precision of a sacred blade.

The ultimate spiritual realization for Mesha is that the warrior and the sage are not opposites but complements. The Kshatriya who masters their own nature — who turns Mangal's outward aggression into inward tapas — discovers what the rishis called Vira Bhava: the heroic spiritual mood that charges toward moksha with the same fearless intensity that the uninitiated Mesha brings to worldly conquest. Practices that serve this path include Surya Namaskar as moving meditation, Agni-focused pranayama such as Kapalabhati and Bhastrika, mantra japa of Mangal's beej mantra "Om Kraam Kreem Kraum Sah Bhaumaya Namah," and any form of seva that channels the warrior's protective instinct into compassionate action for the vulnerable.`,

  lifeLessons: [
    "True strength reveals itself in restraint — the warrior who can sheathe the sword demonstrates greater mastery than the one who cannot stop fighting.",
    "Patience is not passivity but a strategic expression of Agni; the disciplined flame that waits for the right moment creates far more than the wildfire that consumes everything in its path.",
    "Vulnerability shared with those you trust does not diminish your power — it builds the alliances that amplify it beyond what any individual warrior can achieve alone.",
    "The first impulse, while often correct in direction, rarely captures the full wisdom available. Learning to pause between inspiration and execution transforms good instincts into great outcomes.",
    "Your fire is a gift meant to ignite others, not to consume them. The highest expression of Mangal's energy is lighting the way for those still finding their courage.",
  ],

  toolkit: [
    {
      title: "Mangal Meditation",
      context:
        "When Rajasic energy creates restlessness or impulsive decision-making, and you need to channel Mangal's force without being driven by it.",
      action:
        "Practice 10 minutes of Tratak (candle-gazing) meditation, fixing your gaze on a flame while silently repeating Mangal's beej mantra. This aligns Agni tattva with focused awareness, transforming scattered fire into a concentrated laser of purposeful intent.",
    },
    {
      title: "Pre-Action Pause Ritual",
      context:
        "Before making any significant decision — career moves, relationship commitments, financial investments — when the impulse to act immediately is strongest.",
      action:
        "Institute a conscious three-breath pause: inhale for the count of four, hold for four, exhale for four. During each breath, ask: Is this action aligned with my dharma? Is the timing auspicious? Am I acting from wisdom or from restlessness? Then proceed with whatever clarity emerges.",
    },
    {
      title: "Physical Tapas Practice",
      context:
        "When emotional intensity builds with no clear outlet, or when you feel stuck in a mental loop that action-oriented thinking cannot resolve.",
      action:
        "Engage in 20-30 minutes of vigorous physical practice — martial arts, running, or a dynamic Surya Namaskar sequence. Approach it as sadhana, not exercise: set a sankalpa (intention) before beginning, maintain breath awareness throughout, and close with 5 minutes of Shavasana to integrate the shifted energy.",
    },
    {
      title: "Kshatriya Journaling",
      context:
        "At the end of each day, or after any significant conflict or challenge, to extract dharmic wisdom from lived experience.",
      action:
        "Write three entries: one battle won today (an accomplishment), one battle lost (a mistake or missed opportunity), and one act of restraint (a moment you chose not to fight). Over time, this practice reveals patterns in your Mangal expression and cultivates the self-awareness that transforms an impulsive warrior into a conscious Dharma Yogi.",
    },
  ],

  descriptionInsight:
    "Mesha is the primordial spark of the zodiac — the point where cosmic Agni first individuates into a soul with purpose, direction, and the courage to exist. Ruled by Mangal and carrying the Rajasic imperative to act, Mesha natives are here to initiate what others will sustain, to pioneer paths that others will widen, and to demonstrate through lived example that the fearless pursuit of one's dharma is itself the highest offering to the Divine.",
};
