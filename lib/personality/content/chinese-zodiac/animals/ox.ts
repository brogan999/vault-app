import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "ox";

export const OX: ChineseAnimalContent = {
  animal: "Ox",
  name: "The Ox — 牛 (Niú)",
  shortName: "The Perseverer",
  tagline:
    "Rooted in Earth, the Ox plows through life with unwavering Qi — turning patience into permanence.",
  color: "#626350",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Earth",
  polarity: "Yin",
  earthlyBranch: "丑 (Chǒu)",

  overview:
    "The Ox occupies the second position among the twelve Di Zhi (Earthly Branches), embodying the Yin aspect of Earth within the Wu Xing cycle. Where the Rat initiates movement at the midnight hour of Zi, the Ox arrives during the Chǒu period (1–3 AM) — the deep stillness before dawn when the land itself gathers strength for the day ahead. This is the hour when Qi consolidates rather than scatters, when intention crystallizes into form through sheer endurance.\n\nIn Chinese cosmology, the Ox represents the principle that lasting transformation comes not from sudden force but from sustained, patient effort applied across seasons and years. The ancient agricultural calendar revered the Ox as the embodiment of 勤勉 (qínmiǎn) — diligence so deeply rooted it becomes indistinguishable from character itself. The Ox does not merely work hard; the Ox becomes the work, channeling Earth Qi into tangible, enduring structures.\n\nAs a Yin Earth sign, the Ox draws power from receptivity rather than projection. Its strength is not the explosive Yang force of the Tiger but the tectonic patience of fertile soil that accepts the seed, nurtures it through darkness, and yields abundance only when the cycle is complete. In Ba Zi analysis, the Ox pillar signals a life built through accumulation — where reliability becomes reputation, and steadfastness becomes legacy.",

  elementInteractions: {
    Wood:
      "Wood penetrates Ox's Earth through the Ke (controlling) cycle, challenging the Ox to bend without breaking. When Wood Qi enters the Ox's domain, it stirs growth that disrupts comfortable routines — like tree roots splitting stone. This interaction teaches the Ox that yielding to natural growth is itself a form of strength.",
    Fire:
      "Fire generates Earth in the Sheng (producing) cycle, making it the Ox's nurturing element. Fire Qi warms the Ox's patient nature, lending passion and visibility to efforts that might otherwise go unnoticed. In years of strong Fire influence, the Ox finds its inner reserves ignited into outward accomplishment.",
    Earth:
      "Earth meeting Earth is a doubling of the Ox's innate nature — a deepening of stability that can become either an unshakeable foundation or an immovable weight. This Bi He (companion harmony) amplifies the Ox's endurance and grounding, but excess Earth Qi risks stagnation. The Ox must learn when solidity serves and when it suffocates.",
    Metal:
      "Earth produces Metal in the Sheng cycle, meaning the Ox naturally gives rise to Metal Qi — structure, discipline, and refinement. This is the Ox's generative gift: raw perseverance refined into precision and craftsmanship. Metal years reward the Ox's labor with tangible results, harvest, and recognition.",
    Water:
      "Water is controlled by Earth in the Ke cycle, placing the Ox in a position of natural authority over Water's fluid, unpredictable nature. The Ox dams and channels Water Qi, bringing emotional depth under the governance of patience. However, too rigid a containment can cause Water to erode Earth from within — the Ox must learn to guide emotions rather than suppress them.",
  },

  coreEnergies: [
    {
      name: "Endurance",
      score: 95,
      description:
        "The Ox possesses the highest sustained-effort capacity in the zodiac. This is not mere stamina but a fundamental alignment with Earth's cyclical rhythms — the ability to maintain purpose across seasons without faltering.",
    },
    {
      name: "Determination",
      score: 90,
      description:
        "Once the Ox sets its course, its resolve operates like geological pressure — slow, invisible, and ultimately irresistible. This determination is rooted in Yin patience rather than Yang aggression.",
    },
    {
      name: "Practical Wisdom",
      score: 80,
      description:
        "The Ox accumulates knowledge through direct experience rather than abstract study. Its wisdom is embodied — carried in the muscles and bones of lived effort, tested against reality rather than theory.",
    },
    {
      name: "Steadfast Loyalty",
      score: 85,
      description:
        "Loyalty in the Ox is an expression of Earth's binding quality — the same force that holds mountains together. Once trust is established, the Ox's commitment becomes structural, supporting others with the quiet reliability of bedrock.",
    },
    {
      name: "Earth Strength",
      score: 75,
      description:
        "Drawing directly from its fixed element, the Ox channels 土气 (tǔ qì) — Earth Qi — into physical resilience, material competence, and the ability to create lasting structures from raw circumstance.",
    },
  ],

  strengths: [
    {
      title: "Immovable Resolve",
      description:
        "The Ox embodies 坚定 (jiāndìng) — a firmness that operates below the threshold of drama. While others announce intentions, the Ox simply continues forward, converting obstacles into milestones through relentless application of effort.",
      deepDive:
        "In classical Chinese thought, the Ox's resolve mirrors the concept of 厚德载物 (hòu dé zài wù) — 'thick virtue carries all things.' Just as the earth supports mountains, rivers, and forests without complaint, the Ox sustains enormous burdens while maintaining inner equilibrium. This is not stubbornness but structural integrity of character.",
    },
    {
      title: "Harvest Through Patience",
      description:
        "The Ox understands what the ancient agricultural sages knew: that between planting and harvest lies an irreducible period of cultivation that cannot be rushed. This temporal intelligence — knowing when to act and when to wait — is the Ox's deepest competitive advantage.",
      deepDive:
        "The character 耐 (nài, endurance) contains the radical for 'beard' over 'inch' — suggesting the patience to grow something one tiny increment at a time. The Ox's relationship with time is not passive waiting but active tending, a continuous investment of Qi into processes whose fruition follows natural law rather than human impatience.",
    },
    {
      title: "Reliability as Power",
      description:
        "In the Ox's framework, reliability is not a passive trait but an active force. Consistent presence over time generates a form of gravitational authority — others learn to orbit the Ox's dependability, building entire systems around its predictable strength.",
    },
    {
      title: "Material Mastery",
      description:
        "Fixed Earth grants the Ox an intuitive relationship with the physical world. Whether managing resources, building structures, or cultivating land, the Ox works with matter the way a calligrapher works with ink — through practiced, embodied understanding rather than theoretical knowledge.",
    },
  ],

  growthEdges: [
    {
      title: "Rigidity Masking as Principle",
      teaser:
        "The Ox's greatest strength — steadfastness — can calcify into an inability to adapt when circumstances shift.",
      fullExplanation:
        "Earth in excess becomes 固执 (gùzhí) — stubbornness that mistakes inflexibility for integrity. When the Ox refuses to adjust course despite clear signals, it confuses the container with the contents. The path forward requires cultivating Wood Qi's capacity for flexible growth while maintaining Earth's structural foundation. The I Ching hexagram Kun (坤, The Receptive) teaches that true Earth strength lies in yielding receptivity, not rigid resistance.",
      premiumHook:
        "Learn the ancient practice of 'soft Earth' cultivation — how to maintain your core while allowing your methods to flow like river water reshaping the valley.",
    },
    {
      title: "Emotional Containment",
      teaser:
        "The Ox's tendency to dam emotions with Earth discipline can create internal pressure that eventually breaches the walls.",
      fullExplanation:
        "Because the Ox controls Water in the Ke cycle, there is a natural inclination to suppress emotional flow in favor of productive stability. But Water contained too rigidly becomes stagnant or builds to destructive pressure. The Ox benefits from learning Water's wisdom — that emotions, like rivers, need channels rather than dams. Practices that honor the Water-Earth relationship, such as reflective journaling or mindful movement, help the Ox process feelings without losing structural integrity.",
      premiumHook:
        "Discover the Ox-specific emotional regulation techniques drawn from Wu Xing balancing — release pressure without losing your foundational strength.",
    },
    {
      title: "Speed of Adaptation",
      teaser:
        "The Ox's methodical pace, while often an asset, can become a liability when rapid response is required.",
      fullExplanation:
        "In the cycle of the twelve animals, the Ox's deliberate rhythm stands opposite the Horse's swift spontaneity. When life demands quick pivots, the Ox can feel paralyzed by its own thoroughness — unable to act without first completing its internal due diligence. Cultivating a small reserve of Fire Qi — the element that feeds Earth — allows the Ox to accelerate decision-making without abandoning its characteristic depth. The key is not becoming fast but becoming fluid.",
      premiumHook:
        "Unlock the Ox's hidden agility protocol — a framework for rapid decision-making that honors your need for thoroughness while meeting life's urgent moments.",
    },
    {
      title: "Receiving Recognition",
      teaser:
        "The Ox often labors in silence, building resentment when effort goes unacknowledged rather than learning to make its contributions visible.",
      fullExplanation:
        "Yin polarity inclines the Ox toward internal processing and quiet contribution. While this generates deep work, it can create a pattern where the Ox expects others to notice its efforts without any outward signaling. The resulting resentment corrodes relationships and erodes the Ox's own satisfaction. Learning to communicate accomplishments — not as boasting but as honest reporting — honors both the Ox's work and others' need to understand and appreciate it.",
      premiumHook:
        "Master the Ox's visibility framework — dignified self-advocacy techniques rooted in Confucian principles of proper conduct and mutual respect.",
    },
  ],

  relationships:
    "In the San He (Three Harmonies) triangle, the Ox forms a powerful Earth triad with the Snake and Rooster. This alliance channels concentrated Yin energy — the Ox's endurance, the Snake's strategic depth, and the Rooster's precision — into partnerships of extraordinary productivity and mutual understanding. The Liu He (Secret Friend) bond between Ox and Rat represents a complementary Yin-Yang exchange: the Rat's Water cleverness nourishes the Ox's Earth stability, while the Ox provides the Rat with grounding structure.\n\nThe Ox's Chong (Clash) relationship with the Goat reveals a fundamental tension between Earth's two Yin expressions — the Ox's productive discipline versus the Goat's artistic fluidity. This opposition is not inherently destructive but demands conscious navigation. When unresolved, Ox-Goat dynamics produce friction between duty and desire, structure and spontaneity. When harmonized, they generate a rare balance between material competence and creative beauty.\n\nThe Ox approaches all relationships with the same patient investment it brings to work — slowly building trust, then maintaining it with absolute reliability. It may be slow to open, but once committed, the Ox's loyalty operates on geological timescales.",

  compatibilityNotes: {
    Snake:
      "A San He alliance of deep resonance. The Snake's Fire feeds the Ox's Earth in the Sheng cycle, while both share Yin polarity's preference for strategy over spectacle. Together they build empires in silence — the Snake providing vision and the Ox providing the indefatigable effort to realize it.",
    Rooster:
      "The third pillar of the Earth harmony triad. The Rooster's Metal precision refines the Ox's raw endurance into targeted excellence. Their shared appreciation for discipline, routine, and quality creates partnerships where nothing is wasted and every effort compounds.",
    Rat:
      "The Liu He (Secret Friend) bond. The Rat's Water Qi and Yang energy perfectly complement the Ox's Earth Qi and Yin nature. The Rat sparks initiative; the Ox sustains it. The Rat sees opportunities; the Ox builds infrastructure around them. This is one of the zodiac's most naturally balanced pairings.",
    Goat:
      "The Chong (Clash) axis. Ox and Goat share Earth as their fixed element but express it in opposing ways — the Ox through productive labor, the Goat through aesthetic contemplation. This creates magnetic tension that can manifest as deep frustration or transformative growth, depending on both parties' willingness to honor what the other represents.",
    Horse:
      "A relationship of contrasting rhythms. The Horse's Fire Yang energy moves in bursts of passionate speed, while the Ox maintains a steady Yin Earth cadence. Mutual respect requires the Horse to value consistency and the Ox to appreciate spontaneity — a challenging but potentially enriching dynamic when both sides stretch.",
    Dragon:
      "Two Earth signs meeting with opposite polarities — the Dragon's Yang ambition against the Ox's Yin persistence. The Dragon dreams in grand gestures while the Ox builds in careful increments. When aligned on shared goals, this pairing combines visionary aspiration with the grinding execution needed to manifest it.",
  },

  careerPath:
    "The Ox's Ba Zi profile points toward vocations where sustained effort over time produces compounding returns. In traditional Chinese society, the Ox archetype governed agriculture, construction, and any endeavor requiring the transformation of raw materials into lasting value through patient labor.\n\nModern Ox-aligned careers include engineering, architecture, financial management, agriculture and land stewardship, skilled trades, research science, and any field where mastery accumulates through repetition and refinement. The Ox excels in roles that reward depth over breadth, consistency over novelty, and where institutional knowledge becomes irreplaceable expertise.\n\nThe Ox's Earth element grants particular aptitude for resource management — understanding material flows, optimizing systems, and building wealth through disciplined accumulation rather than speculative risk. In leadership positions, the Ox commands through demonstrated competence and earned trust rather than charismatic persuasion.",

  workStyle:
    "The Ox operates on a rhythm aligned with natural cycles — methodical preparation, sustained effort, and patience for results to mature. Its work style embodies 功夫 (gōngfu) in the original sense: skill achieved through devoted practice over time. The Ox does not multitask; it single-tasks with total absorption, moving to the next objective only when the current one meets its exacting internal standard.\n\nIn team environments, the Ox serves as the anchor — the member whose reliability allows others to take risks, knowing the foundation will hold. It communicates through action rather than rhetoric, often expressing care and commitment through the quality of its output rather than words of affirmation. The Ox may struggle in environments that reward constant pivoting, rapid iteration, or performative enthusiasm over substantive contribution.",

  spiritualWisdom:
    "In Chinese spiritual tradition, the Ox carries profound metaphysical significance beyond its zodiac role. The famous 'Ten Ox-Herding Pictures' (十牛圖, Shí Niú Tú) of Chan Buddhism use the Ox as a symbol for the practitioner's own true nature — something powerful and present yet requiring patient effort to discover, tame, and ultimately transcend.\n\nThe Ox's connection to Earth places it at the center of the Wu Xing wheel — the stabilizing element that mediates between all others. This central position grants the Ox a natural affinity for grounding practices: meditation focused on physical sensation, Qi Gong movements that emphasize rootedness, and contemplative work that transforms raw experience into integrated wisdom.\n\nThe Ox's spiritual path is one of 修行 (xiūxíng) — cultivation through practice. Not sudden enlightenment but gradual awakening through daily dedication. The Ox finds the sacred in repetition, the profound in the ordinary, and the infinite in the particular. Its deepest teaching is that the extraordinary emerges naturally from wholehearted engagement with the seemingly mundane.",

  lifeLessons: [
    "True strength reveals itself not in dramatic moments but in the quiet continuity of showing up, day after day, when no one is watching.",
    "The earth does not rush the seasons; learn to trust the timing of your own unfolding rather than measuring progress against others' pace.",
    "Patience is not passive waiting — it is the active cultivation of conditions that allow right outcomes to emerge in their own time.",
    "Your reliability is not a burden you carry for others but a power you wield — the power to create certainty in an uncertain world.",
    "Stubbornness and steadfastness wear the same face; wisdom lies in knowing which one you are practicing in each moment.",
    "The harvest always comes for those who tend the field — but you must also remember to enjoy the fruit, not just the labor.",
  ],

  toolkit: [
    {
      title: "Earth Rooting Breath",
      context:
        "When feeling ungrounded, overwhelmed, or pulled in too many directions — moments when Qi scatters upward and outward.",
      action:
        "Stand with feet shoulder-width apart, knees slightly bent. Breathe in through the nose for 4 counts, imagining Qi drawing up from the earth through your feet. Hold for 4 counts at the Dan Tian (lower abdomen). Exhale for 8 counts, sending roots of intention deep into the ground. Repeat for 5 minutes. This practice consolidates scattered Earth Qi and restores the Ox's natural centeredness.",
    },
    {
      title: "The Plowing Inventory",
      context:
        "When facing a large, intimidating project or life transition that triggers paralysis through overwhelm.",
      action:
        "Write the full scope of the challenge on paper. Draw a horizontal line beneath it dividing the page into 'first furrow' (the single smallest action you can take today) and 'full field' (everything else). Commit only to the first furrow. Complete it. Tomorrow, draw the line again. This method honors the Ox's sequential nature while preventing the weight of the whole from crushing the will to begin.",
    },
    {
      title: "Yin Release Practice",
      context:
        "When accumulated stress, unexpressed emotions, or resentment builds to a point where the Ox's usual containment strategy starts to crack.",
      action:
        "Set a timer for 20 minutes. Write continuously without stopping, editing, or judging — let the Water element flow through the channel of the pen. When finished, read what you wrote once, then physically destroy the paper. This ritual honors both the Ox's need for structure (timed, written) and the Water element's need for release (uncensored, then dissolved).",
    },
    {
      title: "The Five-Element Audit",
      context:
        "During seasonal transitions or when life feels stagnant — times when the Ox's Earth energy may be accumulating without adequate circulation.",
      action:
        "Review your current life across Wu Xing categories: Wood (growth, creativity, new beginnings), Fire (passion, visibility, connection), Earth (stability, routine, nourishment), Metal (discipline, boundaries, refinement), Water (rest, reflection, emotional depth). Rate each 1–10. Where Earth exceeds all others by more than 3 points, intentionally introduce activities from the deficient elements. Balance is not the Ox's instinct, but it is the Ox's medicine.",
    },
    {
      title: "Harvest Acknowledgment Ritual",
      context:
        "When the Ox has been laboring without pause and has lost sight of how far it has come — a common pattern that erodes motivation.",
      action:
        "At each new moon, write three completions from the past cycle — things you finished, maintained, or endured. Place the paper somewhere visible for the full lunar month. The Ox needs external reminders of its own progress because its internal compass always points toward what remains undone. Let the moon's cycle teach you to honor both effort and rest.",
    },
  ],

  descriptionInsight:
    "You carry the ancient Earth virtue of 厚德 (hòu dé) — thick virtue, the kind that accumulates silently over a lifetime and supports everything built upon it. Your Qi moves like tectonic plates: invisible in any single moment, world-shaping across time. The Chǒu branch that governs you holds the deepest Yin of the Earth signs — not the passive Yin of absence, but the generative Yin of soil in winter, containing everything needed for spring yet requiring no recognition for its hidden labor. Your path is not to become something other than what you are, but to fully inhabit the extraordinary power of your patient, enduring nature.",
};
