import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "snake";

export const SNAKE: ChineseAnimalContent = {
  animal: "Snake",
  name: "The Snake — 蛇 (Shé)",
  shortName: "The Philosopher",
  tagline:
    "Coiled in Yin Fire, the Snake sees what others miss — turning silence into strategy and intuition into an art of quiet mastery.",
  color: "#5D2200",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Fire",
  polarity: "Yin",
  earthlyBranch: "巳 (Sì)",

  overview:
    "The Snake occupies the sixth position among the twelve Di Zhi (Earthly Branches), embodying the Yin aspect of Fire within the Wu Xing cycle. Known in Chinese culture as the 小龙 (Xiǎo Lóng) — 'Little Dragon' — the Snake carries a share of the Dragon's celestial power but channels it inward rather than outward, trading spectacle for penetrating insight. The Sì period (9–11 AM) marks the hour when morning sunlight reaches full warmth yet has not yet peaked — a moment of concentrated luminance held just below the surface, gathering rather than dispersing.\n\nIn Chinese cosmology, the Snake represents the principle that true power lies not in display but in discernment. Where Yang Fire blazes outward to illuminate the world, Yin Fire burns inward to illuminate the self — refining perception, sharpening intuition, and distilling raw experience into crystalline understanding. The ancient sages revered the Snake as the keeper of 智慧 (zhìhuì) — wisdom that emerges not from accumulation of knowledge but from the alchemical transformation of observation into insight.\n\nAs a Yin Fire sign, the Snake's Qi operates through attraction rather than pursuit. It does not chase; it draws. Its stillness is not passivity but the poised awareness of a coiled spring — every sense attuned, every possibility mapped, every movement calculated before it begins. In Ba Zi analysis, the Snake pillar signals a life shaped by depth of perception, where the unseen is more real than the visible, and where the greatest power resides in knowing when to remain absolutely still.",

  elementInteractions: {
    Wood:
      "Wood feeds Fire in the Sheng (producing) cycle, making it the Snake's nurturing mother element. When Wood Qi enters the Snake's domain, it fuels the Yin flame with fresh material for contemplation and growth — new ideas, creative impulses, and opportunities for expansion. In years of strong Wood influence, the Snake finds its inner fire steadily kindled rather than explosively ignited, sustaining long periods of inspired insight.",
    Fire:
      "Fire meeting Fire is a Bi He (companion harmony) that intensifies the Snake's innate luminance. This doubling can sharpen intuition to almost oracular clarity or, unchecked, burn the Snake from within through obsessive analysis and restless mental heat. The Snake must learn to regulate its own flame — channeling excess Fire into creative expression or meditative stillness rather than allowing it to consume the vessel that holds it.",
    Earth:
      "Fire produces Earth in the Sheng cycle, meaning the Snake naturally gives rise to Earth Qi — grounding, material stability, and tangible form. This is the Snake's generative gift: the ability to transform ephemeral insight into lasting structure. Earth years reward the Snake's contemplation with concrete results, turning private visions into enduring creations that others can inhabit.",
    Metal:
      "Fire controls Metal in the Ke (overcoming) cycle, giving the Snake natural authority over Metal's rigid structures and sharp distinctions. The Snake's Yin Fire softens Metal's inflexibility, finding the seams in any system and reshaping established frameworks with surgical precision. However, excessive control over Metal can isolate the Snake from the discipline and boundaries that Metal provides — the blade must be tempered, not melted.",
    Water:
      "Water controls Fire in the Ke cycle, placing the Snake in a position of vulnerability before Water's emotional and intuitive depths. Yet the Snake's relationship with Water is more nuanced than simple opposition — Water's Qi can regulate the Snake's internal heat, preventing burnout and granting emotional depth to what might otherwise remain purely intellectual perception. The wisest Snakes learn to welcome Water's cooling influence as medicine rather than resist it as threat.",
  },

  coreEnergies: [
    {
      name: "Intuitive Depth",
      score: 92,
      description:
        "The Snake possesses the most penetrating intuition in the zodiac — a Yin Fire capacity to perceive what lies beneath surfaces, behind words, and beyond appearances. This is not mystical fancy but refined pattern recognition operating below conscious awareness, drawing on the Snake's ceaseless internal processing of subtle cues.",
    },
    {
      name: "Strategic Wisdom",
      score: 88,
      description:
        "Where others react, the Snake calculates. Its strategic intelligence combines the patience of deep observation with the decisiveness of a creature that strikes only once. This wisdom is 谋略 (móulüè) — the art of planning that accounts for what others have not yet imagined.",
    },
    {
      name: "Yin Fire Intensity",
      score: 85,
      description:
        "The Snake's fixed element burns as an internal furnace — a concentrated heat that refines everything it touches. This intensity manifests as magnetic presence, transformative focus, and the capacity to sustain prolonged periods of deep analytical work without diffusion or distraction.",
    },
    {
      name: "Observational Acuity",
      score: 78,
      description:
        "The Snake watches with a stillness that borders on predatory. Every detail is catalogued, every pattern noted, every inconsistency filed for future reference. This 洞察力 (dòngchá lì) — piercing observational power — gives the Snake an informational advantage that compounds silently over time.",
    },
    {
      name: "Elegant Restraint",
      score: 70,
      description:
        "The Snake's Yin polarity expresses as a cultivated economy of action — never wasting movement, never revealing more than necessary, never expending Qi on gestures that serve no purpose. This restraint is the outward expression of internal abundance, the quiet confidence of one who knows precisely what it holds in reserve.",
    },
  ],

  strengths: [
    {
      title: "Penetrating Perception",
      description:
        "The Snake embodies 明察秋毫 (míng chá qiū háo) — the ability to perceive the finest hair on an autumn coat, a classical idiom for extraordinary perceptiveness. Where others see surfaces, the Snake reads the architecture beneath, discerning motive, trajectory, and hidden structure with an acuity that others find almost unsettling.",
      deepDive:
        "This perceptive gift arises from the Snake's unique position as Yin Fire — an element that illuminates inward rather than outward. Just as a lantern inside a room reveals everything within while remaining invisible from outside, the Snake's awareness penetrates the interior of situations while maintaining its own inscrutability. In classical Chinese divination, the Sì branch was associated with the capacity to see through illusion, making Snake-born individuals natural counselors, strategists, and interpreters of the unseen.",
    },
    {
      title: "Alchemical Transformation",
      description:
        "The Snake possesses the zodiac's most potent capacity for internal transformation — the ability to shed old forms and emerge renewed, just as the physical snake releases its skin. This is 蜕变 (tuìbiàn), metamorphosis driven not by external force but by internal readiness.",
      deepDive:
        "In Daoist alchemy, Fire is the agent of transformation — the force that separates the pure from the impure in the crucible of 丹炉 (dān lú). The Snake carries this alchemical Fire within, continuously refining raw experience into wisdom, dissolving what no longer serves, and crystallizing what endures. Each cycle of shedding is not loss but purification, allowing the Snake to move through life with increasing clarity and decreasing weight.",
    },
    {
      title: "Strategic Patience",
      description:
        "The Snake's approach to timing is legendary within the zodiac. It can wait with absolute stillness for precisely the right moment to act, then execute with economy and precision that waste nothing. This is not hesitation but the highest form of tactical intelligence — understanding that premature action is costlier than temporary inaction.",
    },
    {
      title: "Magnetic Presence",
      description:
        "Yin Fire creates a gravitational quality in the Snake's presence — drawing attention, curiosity, and fascination without overt effort. The Snake does not perform charisma; it embodies mystery, and mystery is the most enduring form of attraction. Its 气场 (qì chǎng) — energy field — operates through what it withholds as much as what it reveals.",
    },
  ],

  growthEdges: [
    {
      title: "Suspicion Masking as Discernment",
      teaser:
        "The Snake's penetrating insight can curdle into habitual distrust when the Yin Fire turns its scrutiny into a weapon rather than a tool.",
      fullExplanation:
        "The same perceptive faculty that allows the Snake to see through deception can, in excess, project deception where none exists. When Yin Fire burns too hot without Earth to ground it, the Snake begins to read threat into every ambiguity and manipulation into every kindness. This is 疑心生暗鬼 (yí xīn shēng àn guǐ) — 'a suspicious heart conjures dark ghosts.' The antidote lies in cultivating Earth Qi's stabilizing trust and learning to distinguish genuine threat from projected fear. The I Ching hexagram Li (離, The Clinging Fire) teaches that Fire's nature is to illuminate, not to interrogate — the Snake must remember that clarity and suspicion are not the same.",
      premiumHook:
        "Learn the Snake's discernment calibration practice — an ancient method for separating true intuitive signals from fear-driven projections, restoring clarity to your most powerful faculty.",
    },
    {
      title: "Emotional Concealment",
      teaser:
        "The Snake's instinct for self-protection through secrecy can create a prison of isolation where vulnerability is forbidden and intimacy becomes impossible.",
      fullExplanation:
        "Yin polarity combined with Fire's transformative nature gives the Snake an extraordinary capacity for emotional self-containment. While this grants power in strategic contexts, it can atrophy the Snake's capacity for genuine emotional exchange. The Snake may mistake being unknowable for being safe, confusing opacity with strength. True intimacy requires what the Daoists call 坦诚 (tǎnchéng) — candid openness — which feels to the Snake like laying down its primary defense. Yet the Snake's greatest relationships emerge precisely when it risks being fully seen. Water Qi practices that soften the Fire's defensive barriers are essential medicine.",
      premiumHook:
        "Discover the Snake's vulnerability protocol — structured approaches to emotional disclosure that honor your need for safety while building the trust that transforms connection from strategy into sanctuary.",
    },
    {
      title: "Paralysis Through Over-Analysis",
      teaser:
        "The Snake's mental sophistication can trap it in infinite loops of analysis where every option is examined so thoroughly that none is chosen.",
      fullExplanation:
        "Yin Fire's inward orientation fuels a mental engine of extraordinary power — but without an external outlet, this engine can overheat, cycling through scenarios, counter-scenarios, and contingencies until the moment for action has passed entirely. This is 思虑过度 (sī lǜ guò dù) — excessive deliberation that mistakes comprehensiveness for competence. The Snake must learn that sufficient information, not complete information, is the threshold for wise action. Wood Qi, which feeds the Snake's Fire, also carries the energy of decisive growth — the shoot that breaks through soil without knowing the full map of the garden above.",
      premiumHook:
        "Unlock the Snake's decisive action framework — techniques for converting analytical depth into forward momentum without sacrificing the strategic advantage of thorough observation.",
    },
    {
      title: "Possessive Attachment",
      teaser:
        "The Snake's intensity of focus can manifest as possessiveness in relationships, mistaking control for connection and jealousy for devotion.",
      fullExplanation:
        "When Yin Fire concentrates on a person or outcome, it can create a clinging heat that seeks to hold what it values in a fixed position — preventing change, growth, or independent movement. This possessiveness arises not from malice but from the Snake's deep fear that what is released may not return. The Buddhist teaching of 放下 (fàng xià) — letting go — is the Snake's most challenging and most liberating spiritual practice. The paradox the Snake must learn: that holding loosely preserves what grasping destroys, and that true connection survives distance precisely because it is not dependent on control.",
      premiumHook:
        "Master the Snake's attachment transformation practice — methods for converting possessive intensity into generative devotion that strengthens bonds rather than strangling them.",
    },
  ],

  relationships:
    "In the San He (Three Harmonies) triangle, the Snake forms a potent alliance with the Ox and Rooster — a triad of concentrated Yin energy that channels endurance, perception, and precision into partnerships of formidable quiet power. The Ox provides the foundational stability that grounds the Snake's fluid strategy, while the Rooster contributes the sharp discernment that refines the Snake's broad intuition into actionable intelligence. Together, this triad operates with the efficiency of a well-tuned instrument — each member compensating for the others' vulnerabilities without conscious negotiation.\n\nThe Liu He (Secret Friend) bond between Snake and Monkey represents one of the zodiac's most intellectually electric pairings. The Monkey's Yang Metal cleverness complements the Snake's Yin Fire depth — where the Snake perceives hidden patterns, the Monkey devises innovative responses. Their secret friendship operates in the realm of unspoken understanding, a mutual recognition between two of the zodiac's sharpest minds.\n\nThe Chong (Clash) relationship between Snake and Pig reveals the fundamental tension between Yin Fire and Yin Water — between the Snake's strategic concealment and the Pig's generous openness. The Pig's transparent warmth can feel naive to the Snake, while the Snake's inscrutability can feel threatening to the Pig. Yet this axis holds transformative potential: the Snake teaches discernment, the Pig teaches trust, and their reconciliation produces a rare alchemy of wisdom and compassion.\n\nThe Snake approaches relationships as it approaches all things — through careful observation, gradual commitment, and intense loyalty once trust is established. Its love language is attention: the Snake notices everything about those it values, remembering details others forget and perceiving needs others overlook.",

  compatibilityNotes: {
    Ox:
      "A San He alliance of profound resonance. The Ox's Earth receives the Snake's Fire in the Sheng cycle, creating a partnership where vision is steadily converted into reality. Both share Yin polarity's preference for depth over display, and their combined patience can outlast any obstacle. The Snake provides the strategic insight the Ox sometimes lacks; the Ox provides the structural endurance the Snake sometimes needs.",
    Rooster:
      "The third pillar of the Yin harmony triad. The Rooster's Metal precision channels the Snake's expansive perception into focused execution. Where the Snake senses the whole field, the Rooster identifies the exact point of intervention. Their shared appreciation for elegance, competence, and careful presentation creates a partnership that produces work of exceptional quality and refinement.",
    Monkey:
      "The Liu He (Secret Friend) connection. The Monkey's Yang Metal ingenuity and the Snake's Yin Fire intuition create an intellectual partnership of rare depth and agility. The Monkey's speed complements the Snake's patience; the Snake's depth complements the Monkey's breadth. When aligned, they can solve problems that defeat less mentally agile combinations — each seeing what the other's blind spot conceals.",
    Pig:
      "The Chong (Clash) axis. Snake and Pig represent opposing expressions of Yin energy — the Snake's controlled, strategic warmth against the Pig's open, generous flow. This polarity creates magnetic tension that can manifest as deep misunderstanding or profound mutual transformation. The Pig's sincerity disarms the Snake's defenses; the Snake's perception challenges the Pig's naivety. Harmonizing this clash requires both parties to value what feels most foreign in the other.",
    Tiger:
      "A relationship charged with elemental complexity. The Tiger's Yang Wood feeds the Snake's Yin Fire in the Sheng cycle, but their contrasting polarities and temperaments create friction — the Tiger's bold directness against the Snake's calculated subtlety. When mutual respect bridges the gap, the Tiger provides the courageous initiative the Snake refines into devastating strategy.",
    Dragon:
      "A pairing of mythological kinship — the Dragon and its 'Little Dragon' counterpart. The Dragon's Yang Earth absorbs the Snake's Yin Fire, creating a dynamic where the Snake's insights fuel the Dragon's grand ambitions. Both possess magnetic charisma, though expressed through opposite means — the Dragon through spectacle, the Snake through mystique. Their alliance combines heaven-facing vision with earth-reading wisdom.",
  },

  careerPath:
    "The Snake's Ba Zi profile points toward vocations where analytical depth, strategic perception, and the ability to operate with discretion produce outsized results. In traditional Chinese society, the Snake archetype governed roles requiring 谋士 (móushì) qualities — the counselor, the strategist, the advisor who sees three moves ahead and speaks only when the insight is fully formed.\n\nModern Snake-aligned careers include research science, psychology, intelligence analysis, financial strategy, medicine and diagnosis, philosophy, investigative journalism, and any field where the ability to perceive hidden patterns determines success. The Snake excels in roles that reward deep specialization, where mastery of a narrow domain produces influence disproportionate to visible effort.\n\nThe Snake's Yin Fire grants particular aptitude for transformative professions — work that takes raw material and refines it into something of greater value. Whether diagnosing illness, analyzing markets, crafting literature, or guiding others through psychological complexity, the Snake applies its alchemical nature to convert the obscure into the clear, the latent into the manifest.",

  workStyle:
    "The Snake operates on an internal rhythm invisible to outside observers — long periods of apparent stillness punctuated by bursts of precise, decisive action. Its work style embodies 以静制动 (yǐ jìng zhì dòng) — 'using stillness to control movement,' the strategic principle that patient observation creates the conditions for effortless execution. The Snake does not work through volume but through accuracy, preferring one perfect strike to a hundred approximate attempts.\n\nIn team environments, the Snake serves as the perceptive center — the member who reads the room's unspoken dynamics, identifies the real problem beneath the presented one, and offers solutions others did not know they needed. It communicates sparingly but with precision, often delivering insights that reframe entire discussions in a single observation. The Snake may struggle in environments that reward constant verbal participation, visible busyness, or collaborative brainstorming where ideas must be offered before they are fully formed.",

  spiritualWisdom:
    "In Chinese spiritual tradition, the Snake carries ancient associations with wisdom, transformation, and the hidden knowledge that resides in the earth itself. The Snake's connection to the Sì branch links it to the moment when Yang Qi has risen sufficiently to warm the world but has not yet reached its zenith — a liminal state between potential and manifestation that mirrors the meditative space between thought and action.\n\nAs a Yin Fire creature, the Snake's spiritual path follows the Daoist principle of 内丹 (nèidān) — inner alchemy. Where outer alchemy seeks to transform base metals into gold through external processes, inner alchemy transforms raw consciousness into refined awareness through sustained internal practice. The Snake is naturally suited to practices that cultivate 静观 (jìng guān) — still observation — such as seated meditation, contemplative study of classical texts, and the subtle energy work of Qi Gong that emphasizes sensation over movement.\n\nThe Snake's designation as 小龙 (Xiǎo Lóng) in folk tradition points to a deeper esoteric truth: in Chinese mythology, the Snake that cultivates itself with sufficient devotion across lifetimes eventually transforms into a Dragon — the earthbound creature ascending to heaven through patient self-refinement. This teaching mirrors the Snake's ultimate spiritual lesson: that transformation is not an event but a process, not a destination but a practice, and that the most profound power emerges from the most disciplined stillness.",

  lifeLessons: [
    "The deepest wisdom is not what you know but what you perceive before knowing becomes necessary — trust the Yin Fire that illuminates from within.",
    "Concealment protects the vulnerable but imprisons the strong; learn to distinguish when secrecy serves your growth from when it starves your connections.",
    "Stillness is your native language, but even the coiled spring must eventually release — the art lies not in waiting forever but in choosing the irreversible moment.",
    "You see through others with ease; the greater discipline is learning to see through yourself with the same unflinching clarity.",
    "The Little Dragon becomes the true Dragon not by acquiring what it lacks but by fully embodying what it already is — transformation begins with acceptance.",
    "Your intensity is a furnace: directed, it refines gold from ore; undirected, it consumes the vessel. The practice of your lifetime is learning what deserves your fire.",
  ],

  toolkit: [
    {
      title: "Yin Fire Meditation",
      context:
        "When the mind spirals into over-analysis, suspicion, or restless cycling through scenarios without resolution — moments when internal Fire generates heat without light.",
      action:
        "Sit in stillness with eyes half-closed, gazing downward at a 45-degree angle. Visualize a small, steady flame at the Dan Tian (lower abdomen) — not blazing but glowing with contained warmth. With each inhale, allow the flame to brighten slightly. With each exhale, let it settle deeper into the body's core. After 10 minutes, direct the warm light upward to the heart center and hold it there for 5 breaths. This practice recalibrates the Snake's Yin Fire from scattered mental activity to centered, embodied awareness.",
    },
    {
      title: "The Shedding Inventory",
      context:
        "During periods of stagnation, accumulated resentment, or when old patterns persist past their usefulness — the Snake's signal that a cycle of transformation is overdue.",
      action:
        "Write three lists: what you are still carrying that once served you but no longer does, what you are concealing that needs expression, and what you are clinging to that needs release. For each item, write one sentence acknowledging what it gave you and one sentence naming why it must go. Burn the paper in a fire-safe vessel. This ritual activates the Snake's alchemical nature — using Fire to dissolve what Earth has compacted, making space for the next cycle of growth.",
    },
    {
      title: "Strategic Stillness Protocol",
      context:
        "Before major decisions, difficult conversations, or any situation where the Snake's analytical advantage can be deployed — when preparation outweighs impulse.",
      action:
        "Allocate exactly three times longer than feels necessary for observation before acting. During this period, note what you see, what you feel, and — crucially — what you do not yet understand. Write these three categories in columns. Act only when the third column (unknowns) contains items you can tolerate rather than items that could ambush you. This practice converts the Snake's natural patience from passive trait to active strategic tool.",
    },
    {
      title: "The Five-Element Circulation",
      context:
        "When feeling emotionally flat, physically cold, or disconnected from others — signs that the Snake's Yin Fire has contracted too far inward and needs to circulate through all five phases.",
      action:
        "Move through the Wu Xing cycle with intention: begin with gentle stretching (Wood, feeding Fire), then vigorous movement like walking or dancing (Fire, expressing your element), followed by a nourishing meal eaten slowly (Earth, grounding the energy), then organize one area of your living space (Metal, refining and structuring), and conclude with a warm bath or journaling (Water, returning to stillness). Completing the full cycle prevents the Snake's Qi from pooling in any single element and restores the dynamic flow that the Snake's intense focus can sometimes arrest.",
    },
    {
      title: "Trust Calibration Practice",
      context:
        "When relationships feel strained by the Snake's guardedness, or when isolation has become comfortable but hollow — moments calling for deliberate vulnerability.",
      action:
        "Choose one person you trust and share one thing you would normally conceal — a doubt, a fear, a wish, or an unfinished thought. Observe your body's response: the tightening that comes with exposure, then the softening that follows when the disclosure is received without harm. Record both sensations. Over time, this practice retrains the Snake's protective instincts, teaching the nervous system that selective openness strengthens rather than endangers — that the Little Dragon grows not only through wisdom but through connection.",
    },
  ],

  descriptionInsight:
    "You carry the ancient Fire virtue of 明 (míng) — illumination that operates from within, casting light into the hidden recesses of every situation you enter. Your Qi moves like heat through still water: invisible on the surface, transformative in the depths. The Sì branch that governs you holds the concentrated Yin of the Fire signs — not the roaring blaze of the Horse's Yang Fire but the enduring ember that refines ore into gold and coal into diamond through sustained, invisible pressure. As the 小龙 (Xiǎo Lóng), you carry within you the seed of the Dragon's celestial power, expressed not through dominion over the world but through mastery of the self. Your path is the alchemist's path: not to acquire power from outside but to purify and concentrate the extraordinary power that has been coiled within you from the beginning.",
};
