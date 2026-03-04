import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "rabbit";

export const RABBIT: ChineseAnimalContent = {
  animal: "Rabbit",
  name: "The Rabbit — 兔 (Tù)",
  shortName: "The Diplomat",
  tagline:
    "Where others force, the Rabbit yields — and in yielding, reshapes the world.",
  color: "#315E36",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Wood",
  polarity: "Yin",
  earthlyBranch: "卯 (Mǎo)",

  overview:
    "Fourth in the celestial procession, the Rabbit occupies the Di Zhi branch 卯 (Mǎo), the hour when dawn light turns soft and the world stirs gently awake. This is pure Yin Wood — not the towering timber of the Tiger's Yang forests, but the supple willow whose branches bend without breaking, the creeping vine that finds passage through stone. In the Wu Xing cycle, the Rabbit's Wood Qi expresses itself through diplomacy rather than dominance, through refinement rather than raw growth. Where the Tiger charges forward to clear the path, the Rabbit senses the currents of human feeling and navigates them with an almost supernatural grace. Within Ba Zi analysis, a Mǎo pillar signals one whose life force flows through aesthetic sensitivity, relational intelligence, and the quiet accumulation of influence. The Rabbit does not seize power — it attracts allegiance through elegance, empathy, and an instinct for harmony that others find irresistible. In classical Chinese thought, the Jade Rabbit (玉兔) resides on the Moon, grinding the elixir of immortality — a fitting image for a sign whose greatest alchemy is transforming conflict into peace and discord into beauty.",

  elementInteractions: {
    Wood:
      "Wood meeting Wood in the Rabbit is Yin upon Yin — a doubling of the generative, flexible principle. This creates extraordinary sensitivity to the emotional atmosphere of any space, an ability to sense tension before it surfaces. However, this concentration of Wood Qi can produce over-accommodation, where the Rabbit bends so often it forgets its own shape.",
    Fire:
      "When Fire Qi enters the Rabbit's chart, it draws the inner world outward through the Sheng cycle — Wood feeds Fire. The Rabbit gains warmth, expressiveness, and social magnetism that can light up entire rooms. Yet the Rabbit must tend this flame carefully; too much Fire exhausts the Wood root and burns away the contemplative stillness that is the Rabbit's deepest source of wisdom.",
    Earth:
      "Earth provides the Rabbit with grounding stability through the natural exhaustion cycle — Wood penetrates Earth but spends energy doing so. This interaction anchors the Rabbit's sometimes floating sensibilities to practical concerns, lending patience and methodical follow-through. A well-placed Earth element in the Ba Zi chart gives the Rabbit the capacity to manifest its refined visions into tangible, lasting form.",
    Metal:
      "Metal represents the Ke (controlling) cycle acting upon the Rabbit's Wood — the axe that shapes the tree. This interaction can feel constraining, as Metal Qi demands structure, boundaries, and decisive cuts the Rabbit would prefer to avoid. Yet skillfully integrated, Metal sharpens the Rabbit's discernment, transforming vague diplomatic instinct into precise strategic insight.",
    Water:
      "Water is the Rabbit's nourishing mother element in the Sheng cycle — Water feeds Wood. This interaction deepens intuition, strengthens emotional intelligence, and amplifies the Rabbit's already formidable capacity to read the subtleties of human interaction. With strong Water Qi, the Rabbit becomes almost clairvoyant in social settings, sensing the hidden needs and unspoken agreements that govern every relationship.",
  },

  coreEnergies: [
    {
      name: "Diplomatic Grace",
      score: 92,
      description:
        "The Rabbit's defining gift — an ability to navigate the most tangled interpersonal terrain with elegance. This is not mere politeness but a deep Yin skill of reading Qi patterns between people and finding the exact gesture, word, or silence that dissolves tension. The Rabbit mediates not by imposing solutions but by creating space where all parties feel genuinely heard.",
    },
    {
      name: "Intuitive Sensitivity",
      score: 88,
      description:
        "Rooted in the Mǎo branch's pure Yin Wood nature, this is the Rabbit's capacity to perceive emotional undercurrents invisible to others. Before a conflict erupts, the Rabbit has already felt the tremor. Before a friend speaks their grief, the Rabbit has already prepared the tea. This sensitivity is both gift and burden — the Rabbit absorbs the emotional weather of every room it enters.",
    },
    {
      name: "Aesthetic Refinement",
      score: 85,
      description:
        "The Rabbit possesses an innate attunement to beauty, proportion, and harmony in all forms. This extends beyond visual taste into an instinct for the elegant solution, the graceful phrase, the arrangement of elements — whether flowers, words, or people — that produces effortless coherence. In classical terms, the Rabbit understands Lǐ (理), the hidden pattern that makes all things orderly.",
    },
    {
      name: "Gentle Persistence",
      score: 68,
      description:
        "Often mistaken for passivity, this is the Rabbit's Yin method of achieving its aims. Like water wearing through stone or roots splitting rock over centuries, the Rabbit's persistence operates beneath notice. It does not fight obstacles head-on but works around them with quiet, unrelenting patience — revisiting, suggesting, softening resistance until the desired outcome emerges as though it were everyone's idea.",
    },
    {
      name: "Yin Wisdom",
      score: 55,
      description:
        "The deepest and most hidden of the Rabbit's energies — a contemplative intelligence drawn from stillness rather than action. This is the wisdom of the Moon rather than the Sun, of listening rather than speaking, of yielding rather than pressing. When fully developed, Yin Wisdom allows the Rabbit to perceive the Dao of a situation: the natural, effortless course of action that requires no force.",
    },
  ],

  strengths: [
    {
      title: "The Peacemaker's Art",
      description:
        "The Rabbit possesses a near-miraculous ability to defuse hostility and weave consensus from chaos. In group dynamics, the Rabbit instinctively positions itself as the bridge between opposing factions, sensing exactly where the common ground lies hidden beneath surface disagreements.",
      deepDive:
        "This capacity flows from the Mǎo branch's deep Yin Wood nature — the element of growth channeled through receptivity. Where Yang Wood (the Tiger) imposes order, Yin Wood discovers the organic harmony already latent in any situation. The Rabbit's peace-making is not compromise or appeasement — it is the revelation of a higher synthesis that genuinely satisfies all parties. In Chinese diplomatic tradition, this reflects the principle of 和 (hé): harmony achieved not through suppression of difference but through the artful integration of opposing forces.",
    },
    {
      title: "Refined Perception",
      description:
        "The Rabbit perceives subtleties — in art, conversation, emotional dynamics, and environmental atmosphere — that escape coarser sensibilities entirely. This is not mere taste but a deep structural awareness of how elements relate, where beauty hides, and what is about to shift.",
      deepDive:
        "Classically, this gift connects to the Rabbit's association with the Moon and the Jade Rabbit's grinding of the immortality elixir. The alchemical metaphor is precise: the Rabbit refines raw experience into its essential essence, extracting meaning and beauty from what others overlook. In Ba Zi practice, strong Mǎo energy in a chart signals someone who perceives the qualitative dimension of life — not just what is happening, but how it feels, what it means, and whether it is in harmony with the Dao.",
    },
    {
      title: "Sanctuary Building",
      description:
        "The Rabbit creates environments of extraordinary comfort and safety — physical spaces, social circles, and emotional atmospheres where others feel genuinely welcomed and at ease. This is an active, creative skill, not mere hospitality.",
      deepDive:
        "In Wu Xing theory, Yin Wood governs the intimate, enclosed garden rather than the wild forest. The Rabbit's sanctuary-building reflects an instinct for cultivating protected spaces where delicate things — trust, creativity, vulnerability, healing — can safely unfold. The Rabbit understands that transformation requires safety, and it builds that safety with meticulous attention to every sensory and emotional detail.",
    },
    {
      title: "Strategic Withdrawal",
      description:
        "The Rabbit possesses an acute survival intelligence — knowing precisely when to step back, go quiet, or remove itself from situations that have turned toxic or dangerous. This is not cowardice but the Yin martial art of conservation and timing.",
    },
  ],

  growthEdges: [
    {
      title: "Conflict Avoidance as Shadow",
      teaser:
        "The Rabbit's gift for peace can become a prison when it prevents necessary confrontation.",
      fullExplanation:
        "When the Rabbit's Yin Wood nature becomes imbalanced, its diplomatic skill calcifies into reflexive avoidance. Genuine disagreements go unvoiced, resentments accumulate beneath a serene surface, and the Rabbit sacrifices its own truth to preserve a harmony that has become hollow. The Wu Xing remedy lies in cultivating the Metal element's capacity for decisive clarity — learning that sometimes the most harmonious act is an honest, direct word that temporarily disrupts the peace in service of a deeper integrity. The Rabbit must learn that true 和 (hé) includes the full spectrum of human expression, not just its pleasant notes.",
      premiumHook:
        "Discover the specific Ba Zi configurations that indicate when your peace-making instinct serves you and when it silences your authentic voice.",
    },
    {
      title: "Over-Sensitivity and Energetic Porosity",
      teaser:
        "The Rabbit's exquisite sensitivity can overwhelm when it lacks adequate boundaries.",
      fullExplanation:
        "The same Yin receptivity that grants the Rabbit its remarkable perceptual gifts can become a liability when the Rabbit cannot distinguish its own emotional states from those it absorbs from others. In crowded or chaotic environments, the Rabbit's Qi field becomes saturated with input it cannot process, leading to withdrawal, anxiety, or physical exhaustion. The cultivation path involves developing what Chinese medicine calls Wèi Qì (protective Qi) — an energetic boundary that allows perception without absorption. This does not mean closing down sensitivity but rather learning to observe emotional currents without being swept away by them.",
      premiumHook:
        "Learn the Wèi Qì cultivation practices tailored to your specific elemental balance that protect sensitivity without numbing it.",
    },
    {
      title: "Indecisiveness Under Pressure",
      teaser:
        "Seeing all sides of every situation can paralyze the Rabbit when swift action is required.",
      fullExplanation:
        "The Rabbit's ability to hold multiple perspectives simultaneously — one of its greatest relational strengths — can become a trap when circumstances demand a clear, singular choice. Confronted with decisions where every option has costs, the Rabbit may defer, deliberate endlessly, or delegate the choice to someone else. In Wu Xing terms, this reflects insufficient Fire element — the decisive spark that commits to one path and burns the bridges to others. The Rabbit's growth lies in recognizing that not choosing is itself a choice, often with greater consequences than any imperfect decision would bring.",
      premiumHook:
        "Explore how Fire element activation in your chart can strengthen decisiveness while honoring your natural deliberative wisdom.",
    },
    {
      title: "Surface Harmony over Authentic Connection",
      teaser:
        "The Rabbit's social grace can create relationships that feel warm but lack true depth.",
      fullExplanation:
        "Skilled at making everyone comfortable, the Rabbit can inadvertently build a social world where interactions remain perpetually pleasant but emotionally shallow. The Rabbit's fear of disrupting harmony may prevent it from sharing its own vulnerabilities, needs, and darker truths — the very material that transforms pleasant acquaintances into profound bonds. The remedy is Water element cultivation: the courage to dive beneath the beautiful surface into the deeper, murkier waters where genuine intimacy lives. The Rabbit must learn that the relationships it most craves — those of true soul resonance — require the risk of being fully seen.",
      premiumHook:
        "Understand which Water element practices can help you move from social grace into authentic soul-level connection.",
    },
  ],

  relationships:
    "In the San He (三合) alliance, the Rabbit forms a Triangle of Harmony with the Goat and the Pig — three Yin signs united by emotional intelligence, aesthetic sensitivity, and a shared devotion to creating beauty and comfort. This trio generates a powerful Wood-frame Qi that nurtures creativity, compassion, and communal warmth. The Rabbit's Liu He (六合) secret friendship with the Dog represents one of the most tender bonds in the zodiac: the Rabbit offers the Dog gentleness and refinement, while the Dog provides unwavering loyalty and the protective strength the Rabbit sometimes lacks. Together they create a partnership of mutual shelter — the Rabbit softens the Dog's rigid morality, and the Dog grounds the Rabbit's floating idealism. The Rabbit's Chong (冲) clash falls with the Rooster, a Metal sign whose sharp directness and critical precision can feel like an assault on the Rabbit's sensitive Yin Wood nature. The Rooster demands accountability and blunt truth; the Rabbit seeks tact and face-saving indirection. This opposition, when navigated with awareness, becomes a profound teacher — the Rooster offers the Rabbit the Metal clarity it most needs, and the Rabbit teaches the Rooster the diplomacy that amplifies its message.",

  compatibilityNotes: {
    Goat: "A San He alliance of deep resonance. Goat and Rabbit share the Yin aesthetic wavelength — both are drawn to beauty, comfort, and emotional nuance. Together they create an atmosphere of almost telepathic mutual understanding where creativity flourishes without competition. Their shared sensitivity can be a vulnerability if neither is willing to address practical realities or initiate difficult conversations.",
    Pig: "The third member of the Rabbit's San He triangle, Pig brings warmth, generosity, and joyful abundance to the alliance. Pig's expansive Water Qi nourishes the Rabbit's Wood, creating a sense of ease and emotional safety. This pairing excels at building welcoming communities and nurturing environments, though it may struggle with discipline and setting boundaries against those who would exploit their shared gentleness.",
    Dog: "The Liu He secret friendship — a bond of quiet, enduring devotion. Dog's Earth-element loyalty provides the stable ground the Rabbit needs to feel secure, while the Rabbit's refinement and social grace help the Dog navigate a world it often finds morally bewildering. Together they share a commitment to fairness and kindness that can weather remarkable storms.",
    Rooster:
      "The Chong clash axis — a relationship of maximum tension and maximum growth potential. Rooster's Metal Qi cuts directly into the Rabbit's Wood nature, creating friction around communication style, standards, and approach to truth. The Rooster finds the Rabbit evasive; the Rabbit finds the Rooster cruel. Yet within this tension lies the Ke cycle's gift: the shaping force that transforms raw potential into refined form.",
    Rat: "A relationship of gentle complexity. Rat's Water Qi nourishes the Rabbit's Wood through the Sheng cycle, creating natural flow and mutual curiosity. However, Rat's Yang cleverness and strategic maneuvering can unsettle the Rabbit's preference for straightforward sincerity. When trust is established, Rat's resourcefulness and Rabbit's social grace form a formidable partnership in both personal and professional spheres.",
    Dragon:
      "An intriguing mismatch of energies. Dragon's Yang Earth presence can feel overwhelming to the Rabbit's delicate Yin Wood sensibility — the Rabbit wilts under Dragon's intensity and need for center stage. Yet the Dragon is drawn to the Rabbit's mysterious composure, and the Rabbit admires the Dragon's fearless self-expression. Success requires the Dragon to temper its volume and the Rabbit to voice its needs without waiting for them to be intuited.",
  },

  careerPath:
    "The Rabbit's professional destiny lies wherever human relationships, aesthetic sensibility, and quiet influence converge. In Chinese tradition, the Rabbit's Yin Wood Qi finds its highest expression in roles that require the cultivation of harmony within complex human systems — diplomacy, counseling, mediation, curation, and the healing arts. The Rabbit excels in positions that reward emotional intelligence over brute ambition: the advisor behind the throne rather than the figure upon it, the editor who shapes a manuscript into art rather than the author who writes in fevered isolation, the designer who creates spaces where people feel profoundly at ease. The Rabbit's acute sensitivity to beauty and proportion draws it naturally toward the arts — fashion, interior design, landscape architecture, music, and literary arts all resonate with the Mǎo branch's refined perceptual gifts. In organizational settings, the Rabbit is the indispensable connector who maintains the social fabric, resolves tensions before they escalate, and ensures that every voice feels valued in the decision-making process.",

  workStyle:
    "The Rabbit operates best in calm, aesthetically considered environments where it can work at its own unhurried rhythm. Open-plan chaos, aggressive deadline culture, and harsh interpersonal dynamics drain the Rabbit's Qi rapidly and produce diminishing returns. The ideal Rabbit work setting features beauty, quiet, and relational warmth — a space where excellence is pursued through refinement rather than pressure. The Rabbit collaborates masterfully, drawing out the best in teammates through attentive listening and tactful encouragement. It leads not through command but through creating conditions where others naturally want to contribute their finest work. Its weakness as a worker lies in avoiding confrontation with underperformance, deferring hard decisions, and sometimes prioritizing workplace harmony over necessary change. The Rabbit must cultivate the Metal principle of clear standards and the Fire principle of decisive action to complement its native Wood gifts.",

  spiritualWisdom:
    "The Rabbit's spiritual path is the Way of Yin — the cultivation of wisdom through receptivity, stillness, and attunement to the subtle currents that Yang-oriented awareness cannot perceive. In Daoist practice, this is the path of Wú Wéi (无为): effortless action that arises not from willful striving but from such deep alignment with the Dao that the right response emerges spontaneously. The Jade Rabbit grinding the elixir of immortality on the Moon encodes a profound teaching: true transformation requires patient, repetitive refinement of consciousness — not dramatic breakthroughs but the steady alchemical work of purifying perception until one sees reality as it actually is. The Rabbit's spiritual gift is its capacity for what Chan Buddhism calls 定 (dìng): a natural settling of the mind into stillness that many practitioners spend decades attempting to cultivate. The Rabbit's challenge is to recognize this gift as genuine spiritual attainment rather than dismissing it as mere passivity or timidity. The Moon does not generate light — it reflects the Sun's fire with a gentleness that allows the world to rest. This is the Rabbit's highest spiritual teaching: that receiving, reflecting, and softening the energies of the world is sacred work of the highest order.",

  lifeLessons: [
    "True harmony includes the full spectrum of human truth — peace built on suppression is merely quiet conflict waiting to erupt.",
    "Your sensitivity is not a weakness to be managed but a perceptual organ of extraordinary power — learn to wield it rather than merely endure it.",
    "The most profound act of diplomacy is sometimes a single honest word spoken at the right moment, even if it temporarily disturbs the peace.",
    "You need not absorb every emotion in the room to understand it — observation without absorption is the Rabbit's highest skill.",
    "Beauty is not decoration but a form of truth — your instinct for harmony reflects a genuine understanding of how the Dao arranges itself.",
    "Yielding is only wisdom when it is a choice; when it becomes compulsion, it is the shadow of your greatest strength.",
  ],

  toolkit: [
    {
      title: "Wèi Qì Boundary Meditation",
      context:
        "Before entering environments with heavy emotional atmospheres — family gatherings, tense meetings, crowded public spaces.",
      action:
        "Visualize a sphere of soft green light surrounding your body at arm's length — this is your Wèi Qì field, permeable to insight but impervious to emotional flooding. Breathe into this boundary for three minutes, affirming: 'I perceive without absorbing. I understand without carrying.' Return to this visualization whenever you notice your energy shifting to match the room's distress.",
    },
    {
      title: "The Honest Moon Practice",
      context:
        "When you recognize you are suppressing a genuine need or opinion to preserve surface harmony in an important relationship.",
      action:
        "Write the unsaid truth in its rawest form — no diplomatic softening. Read it aloud to yourself. Then craft a version that is both fully honest and genuinely kind. Speak this second version within 48 hours. Notice that the relationship deepens rather than fractures when you share your authentic experience with care.",
    },
    {
      title: "Metal Element Decisiveness Ritual",
      context:
        "When facing a decision where your ability to see all perspectives has become paralysis rather than wisdom.",
      action:
        "Set a physical timer for the decision — proportional to its actual stakes, not its emotional weight. Before the timer ends, choose and act. After acting, resist the Rabbit's instinct to revisit and second-guess. Record what you decided and why, then seal the record. This practice strengthens the Metal Qi that your Wood nature most needs for balanced growth.",
    },
    {
      title: "Jade Rabbit Refinement Journal",
      context:
        "During periods of self-doubt about your contributions, when the world seems to reward only bold, Yang-style action.",
      action:
        "Each evening, record three instances where your quiet Yin influence shaped an outcome — a tension you defused, a beauty you created, a person you helped feel seen. Over time this journal becomes evidence of the Rabbit's enormous but often invisible impact, counteracting the cultural bias that only loud, dramatic action constitutes real power.",
    },
  ],

  descriptionInsight:
    "You move through the world with a grace that others feel before they can name it — a softening of the atmosphere, a sense that someone is truly paying attention. Your Yin Wood nature reads the emotional undercurrents that louder energies miss entirely, and your instinct for harmony transforms the spaces you inhabit. The challenge of your path is learning that your quiet power is not lesser than the Tiger's roar or the Dragon's fire — it is the complementary force without which their Yang energy would burn the world rather than illuminate it. You are the Moon's emissary: reflecting, refining, and gently revealing what harsh daylight conceals.",
};
