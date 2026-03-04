import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "tiger";

export const TIGER: ChineseAnimalContent = {
  animal: "Tiger",
  name: "The Fearless Sovereign",
  shortName: "The Protector",
  tagline: "Where Wood Qi surges into courageous action and sovereign will",
  color: "#C97A30",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Wood",
  polarity: "Yang",
  earthlyBranch: "寅 (Yín)",

  overview: `The Tiger occupies the third position among the twelve Di Zhi, carrying the earthly branch 寅 (Yín) and embodying the full ascending force of Yang Wood Qi. In the cosmological cycle, Yín marks the hour between 3:00 and 5:00 AM — the threshold moment when darkness yields to the first stirring of dawn, when the world's Qi shifts from Yin stillness into the explosive forward momentum of a new day. This liminal timing is no accident. The Tiger is the guardian of thresholds, the force that breaks through stagnation, the roar that announces transformation before the rest of the world has opened its eyes.

Within the Wu Xing framework, the Tiger's fixed element of Wood (木, Mù) grants a Qi signature defined by rapid upward growth, expansive vision, and the irrepressible vitality of a forest in spring. Wood is the element of the liver and gallbladder in traditional Chinese medicine — organs associated with decisive judgment, the smooth flow of emotions, and the courage to act on conviction. When Wood Qi flows freely through the Tiger's constitution, the result is a being of extraordinary dynamism: generous in spirit, fierce in protection, and incapable of tolerating injustice. When this Qi stagnates — through suppression, rigid environments, or prolonged inaction — the Tiger becomes irritable, restless, and prone to eruptions of frustrated energy that can feel volcanic to those around them.

The Yang polarity of the Tiger intensifies every quality. This is not the quiet, inward-growing Wood of the Rabbit (卯, Mǎo) that follows — it is Wood expressed as a great tree thrusting upward through rock, as bamboo splitting stone, as the first green shoot that cracks frozen earth in early spring. Tiger natives carry an almost gravitational presence: they enter a room and the energy shifts. People instinctively look to them in crisis, sense their authority before a word is spoken, and feel simultaneously drawn to their warmth and cautious of their power. In Ba Zi analysis, a strong Tiger pillar in the chart indicates a life shaped by themes of courage, leadership, dramatic transformation, and the karmic mandate to protect those who cannot protect themselves.`,

  elementInteractions: {
    Wood:
      "Wood is the Tiger's innate element, the source of its expansive Qi and courageous spirit. When additional Wood energy enters the Tiger's Ba Zi chart through Heavenly Stems or Earthly Branches, the native's natural assertiveness amplifies into a nearly unstoppable force of growth — visionary, bold, and magnetically inspiring. Excess Wood without tempering from other elements can manifest as recklessness or an inability to yield, like a tree that grows so tall it becomes vulnerable to wind.",
    Fire:
      "Fire is the natural child of Wood in the Wu Xing generative cycle (相生, Xiāng Shēng), meaning the Tiger feeds Fire through its own vital energy. This Mu Shēng Huǒ relationship gives Tiger natives an extraordinary capacity to inspire and energize others, often at cost to their own reserves. When Fire is prominent in a Tiger's chart, charisma becomes incandescent and the native possesses a contagious enthusiasm that can mobilize entire communities toward shared purpose.",
    Earth:
      "Earth receives Wood's controlling energy in the Wu Xing cycle (木克土, Mù Kè Tǔ), placing the Tiger in a position of natural dominance over Earth-associated qualities like stability, caution, and methodical planning. This means Tiger natives can reshape established structures and break through bureaucratic inertia with ease. The challenge lies in learning to value Earth's grounding wisdom rather than simply overriding it — the Tiger who honors Earth's patience builds foundations that outlast their initial burst of creative force.",
    Metal:
      "Metal controls Wood in the Wu Xing restraining cycle (金克木, Jīn Kè Mù), making Metal energies the Tiger's primary source of friction and growth. Metal represents discipline, precision, and the capacity to prune excess — qualities that feel restrictive to the Tiger's expansive nature but are essential for refining raw courage into strategic leadership. Tiger natives with strong Metal in their charts develop a rare combination of boldness and discernment, learning that the sharpest blade is forged through constraint.",
    Water:
      "Water is Wood's mother in the Wu Xing generative cycle (水生木, Shuǐ Shēng Mù), nourishing and sustaining the Tiger's vital force from its deepest roots. Water energy in a Tiger's chart deepens intuition, enhances emotional intelligence, and grants the wisdom to know when to advance and when to flow around obstacles rather than through them. The Tiger who cultivates Water's influence discovers that true power lies not only in the roar but in the patient current that carves canyons through stone.",
  },

  coreEnergies: [
    {
      name: "Courageous Spirit",
      score: 93,
      description:
        "The defining Qi of the Tiger — a fearlessness rooted not in ignorance of danger but in the Wood element's irrepressible drive to grow beyond every obstacle. This courage operates at the level of 氣 (Qì) itself, an instinctive force that propels the Tiger toward confrontation with injustice, stagnation, and fear in all its forms.",
    },
    {
      name: "Leadership Force",
      score: 88,
      description:
        "Yang Wood Qi naturally ascends and commands space, granting the Tiger an innate authority that others recognize without being told. This is not the bureaucratic leadership of position but the organic sovereignty of one whose Qi radiates decisiveness, protection, and the willingness to bear responsibility when others shrink from it.",
    },
    {
      name: "Wood Vitality",
      score: 85,
      description:
        "The 木 (Mù) element endows the Tiger with extraordinary regenerative life force — the same Qi that drives a forest to regrow after fire. Tiger natives recover from setbacks with remarkable speed, their physical and emotional constitutions carrying the deep resilience of Wood: flexible under pressure, difficult to break, and always reaching toward the light.",
    },
    {
      name: "Magnetic Presence",
      score: 78,
      description:
        "The Tiger's Yang polarity combined with the Yín branch creates a Qi field that is simultaneously powerful and unpredictable, drawing others into its orbit through sheer force of being. This magnetism operates beneath conscious awareness — people feel the Tiger before they see them, sense their mood before words are exchanged, and remember their presence long after they have left.",
    },
    {
      name: "Protective Instinct",
      score: 82,
      description:
        "Deep within the Tiger's Ba Zi signature lies the archetype of the guardian — the one whose courage exists not for personal glory but for the shielding of the vulnerable. This protective Qi activates most powerfully when the Tiger perceives threat directed at family, community, or those who cannot defend themselves, transforming ordinary individuals into forces of fierce and selfless intervention.",
    },
  ],

  strengths: [
    {
      title: "Decisive Courage",
      description:
        "Where others hesitate at the threshold of risk, the Tiger has already crossed it. This is Wood Qi in its most dynamic Yang expression — the force that does not deliberate endlessly but reads the situation, commits fully, and moves with the totality of its being. Tiger natives are the ones who break deadlocks in groups, who step forward when volunteers are needed, and who make the difficult calls that paralyze more cautious temperaments.",
      deepDive:
        "In Ba Zi analysis, this courage intensifies when the Tiger's Heavenly Stem carries 甲 (Jiǎ) — the Yang Wood stem that represents the great tree. A Jiǎ-Yín pillar produces an individual of almost mythic bravery, one whose life becomes a series of threshold-crossings that inspire legends. The quality deepens further during years when Wood Qi is cosmologically ascendant, granting the Tiger access to reserves of courage that feel ancestral in their depth.",
    },
    {
      title: "Natural Authority",
      description:
        "The Tiger does not need to claim authority — it emanates from their Qi field like heat from a forge. In traditional Chinese cosmology, 寅 (Yín) is associated with the general who commands not through rank but through the loyalty earned by leading from the front. Tiger natives possess an instinctive understanding of when to command, when to protect, and when to stand aside, making them natural leaders in any context from family to enterprise to community.",
      deepDive:
        "This authority gains a strategic dimension when Metal elements temper the chart, adding the precision of 金 (Jīn) to Wood's expansive force. The Tiger with balanced Metal influence becomes not just a courageous leader but a shrewd one — capable of reading the terrain of power with the same acuity they bring to reading physical danger.",
    },
    {
      title: "Generous Vitality",
      description:
        "Wood is the element of giving — trees produce oxygen, shade, fruit, and shelter without demanding payment. The Tiger embodies this generative quality as an almost compulsive generosity of spirit, energy, and resources. They are the friend who arrives with more than what was asked for, the colleague who pours their full Qi into collaborative efforts, and the family member whose presence makes everyone feel more alive and more capable.",
    },
    {
      title: "Unpredictable Brilliance",
      description:
        "The Tiger's Yang Wood Qi does not follow linear paths. Like a great tree that grows around obstacles, sending roots through rock and branches toward unexpected patches of light, the Tiger's mind produces solutions and insights that surprise even those who know them well. This unpredictability is not chaos — it is the natural intelligence of Wood Qi finding the path of least resistance to maximum growth.",
      deepDive:
        "Classically, the Tiger's unpredictability is linked to the 寅 (Yín) branch's position as the birthplace of Yang energy in the daily cycle. The hour of the Tiger (3-5 AM) is when the world's Qi makes its most dramatic shift, and natives born under this sign carry that threshold energy as a permanent quality of consciousness — the ability to perceive and enact change at moments when others see only stillness.",
    },
    {
      title: "Fierce Loyalty",
      description:
        "Once a Tiger has accepted someone into the inner circle of trust — a process that is neither quick nor easy — the bond becomes unbreakable. This loyalty is an expression of Wood Qi's deep root structure: invisible beneath the surface but extending further and holding more firmly than the visible canopy suggests. Tiger natives will sacrifice personal comfort, endure significant hardship, and take on powerful adversaries to protect those they have claimed as their own.",
    },
  ],

  growthEdges: [
    {
      title: "Patience with Process",
      teaser:
        "Yang Wood Qi surges upward with such force that the Tiger often bypasses the slow, essential work of building deep roots before reaching for the sky.",
      fullExplanation:
        "The Tiger's fixed Wood element carries an inherent tension: Wood's nature is growth, and Yang Wood's nature is rapid, visible, dramatic growth. Yet the Wu Xing teaches that sustainable growth requires the patient nourishment of Water (水生木) before the tree can support its own canopy. Tiger natives frequently launch ambitious endeavors, relationships, and transformations before the foundational work is complete — like planting a great oak in shallow soil. The growth edge lies in cultivating the Water element's influence: learning to sit with uncertainty, to allow ideas to germinate in darkness before forcing them into light, and to trust that preparation is itself a form of courageous action. In the Ba Zi cycle, periods dominated by Water energy — particularly 亥 (Hài, Pig) and 子 (Zǐ, Rat) years — provide the cosmological support for this deep patience work.",
      premiumHook:
        "Discover which Water influences in your personal Ba Zi chart offer the greatest support for developing strategic patience — and the specific years when this growth accelerates most powerfully.",
    },
    {
      title: "Yielding Without Losing",
      teaser:
        "The Tiger's instinct to confront every obstacle directly can blind them to the power of strategic retreat and flexible response.",
      fullExplanation:
        "In the Wu Xing restraining cycle, Metal controls Wood (金克木) — the axe shapes the tree. The Tiger's natural reaction to Metal's constraining influence is resistance: pushing harder, roaring louder, refusing to bend. Yet Chinese cosmological wisdom teaches that the bamboo survives the typhoon precisely because it yields, while the rigid oak shatters. The Tiger's growth edge is learning the difference between capitulation and strategic flexibility. This does not mean abandoning their fierce nature but developing the capacity to flow around obstacles when direct confrontation would waste precious Qi. The 柔 (Róu, yielding) principle from Daoist philosophy offers the Tiger a counterbalance to their dominant 剛 (Gāng, firm) energy — the recognition that true power contains both the roar and the silence, both the charge and the patient circling.",
      premiumHook:
        "Your Ba Zi chart reveals exactly which Metal influences shape your personal growth pattern — and how to transform moments of constraint into opportunities for refined, strategic power.",
    },
    {
      title: "Emotional Regulation",
      teaser:
        "The Tiger's Wood Qi governs the liver system in Chinese medicine, and when this Qi stagnates or erupts unchecked, emotional volatility can damage the very relationships the Tiger most values.",
      fullExplanation:
        "Traditional Chinese medicine associates Wood with the liver (肝, Gān) — the organ responsible for the smooth flow of Qi and emotions throughout the body. When the Tiger is in balance, emotions flow freely and appropriately: anger arises to protect boundaries, joy emerges in connection, and grief moves through cleanly. But the Tiger's Yang intensity means emotions often arrive at full volume, with little gradation between calm and storm. Frustration becomes fury. Disappointment becomes despair. Affection becomes overwhelming devotion. The growth work centers on developing the liver's capacity for smooth Qi flow — through practices like Qigong, conscious breathing during emotional activation, and the cultivation of the Earth element's stabilizing influence. The Tiger who masters emotional regulation does not become less passionate; they become a force whose passion is channeled rather than scattered, whose roar carries meaning rather than mere volume.",
      premiumHook:
        "Unlock personalized Qi cultivation practices based on your specific elemental balance — including the precise seasons and lunar phases when emotional regulation work yields the deepest transformation.",
    },
    {
      title: "Trusting Others' Competence",
      teaser:
        "The Tiger's protective instinct and natural authority can calcify into a belief that no one else can handle what needs to be done.",
      fullExplanation:
        "Yang Wood Qi naturally rises to the top of the canopy, seeking to be the tallest, the most visible, the one that catches the light. This vertical orientation serves the Tiger well in crisis but becomes a limitation in sustained collaborative work. The Tiger's growth edge is recognizing that a forest is not one towering tree but an ecosystem of interdependent growth. Learning to delegate, to trust others' competence, and to allow collaborators to lead in their areas of strength requires the Tiger to confront a deep fear: that if they are not personally ensuring an outcome, it will fail. The San He (三合) alliance with Horse and Dog offers a model — in this three-way harmony, each animal contributes irreplaceable strengths. The Tiger who internalizes this lesson transforms from a solitary protector into the catalyst of a powerful collective.",
      premiumHook:
        "See how your San He and Liu He relationships activate in your personal chart — revealing the specific partnerships where learning to trust amplifies your power beyond what individual effort can achieve.",
    },
  ],

  relationships: `The Tiger approaches relationships with the same intensity that characterizes their engagement with all of life — fully, fiercely, and with a directness that can be either intoxicating or overwhelming depending on the recipient's capacity to meet that energy. In love, the Tiger is passionate and demonstrative, capable of extraordinary devotion but demanding an equal intensity of commitment in return. There is nothing tepid about a Tiger's heart: when they love, they love with the full force of their Yang Wood Qi, creating a bond that feels like both shelter and wildfire.

The San He (三合) alliance places the Tiger in a triangle of natural harmony with the Horse (午, Wǔ) and the Dog (戌, Xū). This Three Harmonies grouping shares the quality of forthright courage and mutual loyalty — together, they form one of the most powerful protective alliances in the Chinese zodiac. In relationships between these three animals, there is an instinctive understanding that requires little explanation: shared values of honor, directness, and the willingness to fight for what matters. The Tiger-Horse connection crackles with shared Fire and Wood energy, creating partnerships of extraordinary dynamism and mutual inspiration. The Tiger-Dog bond runs deeper and quieter — a loyalty so fundamental it operates like gravity, invisible but inescapable.

The Liu He (六合) reveals the Tiger's secret friend: the Pig (亥, Hài). This pairing is cosmologically significant because the Pig's Water element (水) nourishes the Tiger's Wood (水生木) in the Wu Xing generative cycle. The Pig offers what the Tiger rarely allows themselves to receive — unconditional nurturing, emotional depth, and the gentle insistence that strength and softness are not opposites. In Ba Zi analysis, a Tiger-Pig combination in the chart often indicates a life blessed with deep, sustaining relationships that provide the emotional foundation the Tiger needs but seldom requests.

The Chong (衝) — the direct clash — opposes the Tiger with the Monkey (申, Shēn). The Yín-Shēn clash is one of the zodiac's most volatile pairings: Metal Monkey strikes against Wood Tiger in the destructive cycle, creating friction that is simultaneously magnetic and destabilizing. Relationships between Tiger and Monkey natives oscillate between brilliant chemistry and explosive conflict, each animal representing the shadow qualities the other must integrate. The Tiger sees the Monkey's cleverness as superficial; the Monkey sees the Tiger's directness as reckless. Yet when both are mature, this clash becomes a crucible for extraordinary mutual growth.`,

  compatibilityNotes: {
    Horse:
      "A San He alliance of natural fire and dynamism — the Horse's Fire Qi and the Tiger's Wood create a Xiāng Shēng (generative) bond of mutual inspiration. Both share a love of freedom, courage, and forward momentum. Together they are an unstoppable force of passionate action, each amplifying the other's boldest qualities.",
    Dog:
      "The third member of the Tiger's San He triangle, the Dog shares the Tiger's deep loyalty and sense of justice. Where the Tiger leads with dramatic courage, the Dog provides steadfast, unwavering support. This is one of the zodiac's most trustworthy alliances — a bond built on shared values of honor, protection, and incorruptible integrity.",
    Pig:
      "The Tiger's Liu He secret friend — a pairing of profound cosmological significance. The Pig's Yin Water nourishes the Tiger's Yang Wood at the deepest level of the Wu Xing cycle, creating a relationship of quiet, sustaining power. The Pig softens the Tiger's edges without diminishing their strength, offering the emotional depth and gentle wisdom the Tiger secretly craves.",
    Monkey:
      "The Yín-Shēn Chong (clash) creates the zodiac's most electrically charged opposition. Metal Monkey and Wood Tiger collide in the Wu Xing destructive cycle, producing relationships of intense attraction and equally intense friction. Growth lies in recognizing that the Monkey's strategic flexibility is the complement — not the enemy — of the Tiger's direct force.",
    Snake:
      "A complex pairing where the Tiger's overt Yang power meets the Snake's covert Yin depth. The Snake's Fire element receives the Tiger's Wood energy in the generative cycle, but their approaches to power could not be more different — the Tiger charges forward while the Snake moves through stillness. Mutual respect requires each to honor what they cannot naturally understand in the other.",
    Dragon:
      "Two Yang powerhouses whose combined energy can either build empires or level them. The Dragon's Earth element receives the Tiger's Wood in the controlling cycle (木克土), creating a dynamic where both must negotiate carefully around questions of authority and territory. When mutual respect is established, this pairing commands extraordinary collective power.",
  },

  careerPath: `The Tiger's vocational Qi flows most powerfully through roles that demand courage, decisive action, and the willingness to stand visibly at the front of consequential endeavors. In traditional Chinese society, the Tiger was associated with the military general, the magistrate who enforced justice, and the merchant whose boldness opened new trade routes through dangerous territory. The modern expression of this archetype extends to entrepreneurship, crisis leadership, law, advocacy, emergency medicine, competitive athletics, and any domain where the capacity to act decisively under pressure separates the exceptional from the adequate.

The Wood element's influence on the Tiger's career path adds a distinctive quality of growth-orientation and vision. Tiger natives are not merely executors — they are builders of new things. Their Yang Wood Qi drives them toward ventures that expand into previously unoccupied territory, whether that means founding organizations, entering emerging markets, championing untested ideas, or creating roles that did not previously exist. The Tiger professional is happiest when the path ahead is uncharted and the outcome uncertain, because it is precisely in those conditions that their unique combination of courage and instinct operates at peak effectiveness.

In the Wu Xing career framework, the Tiger benefits from consciously integrating elements that do not come naturally. Water (水) brings the strategic depth and patient intelligence that transforms bold action into sustained achievement. Earth (土) provides the organizational stability that ensures the Tiger's visionary projects survive beyond the initial burst of creative energy. The Tiger who relies solely on Wood and Fire energy — initiative and charisma — achieves dramatic short-term results but risks burning through ventures as quickly as they ignite them. The most enduringly successful Tiger professionals are those who build teams and systems that supply the elemental balance their own Qi lacks, surrounding themselves with Water's wisdom and Earth's steadiness while providing the irreplaceable spark of courageous leadership that only Wood Yang energy can offer.`,

  workStyle: `The Tiger works with an intensity that can be startling to colleagues accustomed to more measured rhythms. When engaged with a project that aligns with their sense of purpose, the Tiger's Yang Wood Qi creates a work pattern of total immersion — long hours driven not by obligation but by the sheer momentum of creative force flowing through them. This is the Wood element's growth energy expressed through professional action: irrepressible, upward-reaching, and remarkably productive when the direction is clear.

The ideal work environment for a Tiger grants substantial autonomy, presents genuine challenges, and connects daily effort to a larger purpose. Bureaucratic environments with rigid hierarchies and process-heavy cultures are antithetical to the Tiger's Qi — like planting a forest tree in a ceramic pot, the restriction produces not compliance but root-bound frustration that eventually cracks the container. Tiger natives thrive as founders, as leaders of small high-trust teams, as the point person on high-stakes initiatives, and in any role where their willingness to take personal responsibility for consequential outcomes is not just permitted but required.

The collaboration challenge for Tiger natives lies in pace and volume. Their Yang energy naturally dominates group dynamics — not through aggression but through the sheer force of their conviction and the speed of their decision-making. Learning to modulate this energy, to create space for Yin-oriented colleagues to contribute at their own rhythm, is essential professional growth work. The Tiger who masters this calibration does not become less powerful; they become the kind of leader whose strength makes everyone around them braver and more capable.`,

  spiritualWisdom: `The Tiger's spiritual path is intimately connected to the Daoist understanding of 勇 (Yǒng) — true courage, which the ancient masters distinguished sharply from mere recklessness or aggression. In the Dao De Jing, Laozi teaches that the Dao's courage manifests not only as the force that advances but also as the wisdom that knows when stillness serves better than motion. The Tiger's spiritual journey is the progressive discovery that their fierce Yang Wood Qi is not the totality of their nature but one pole of a deeper wholeness that includes the yielding, receptive, and mysterious dimensions of existence.

Within the Wu Xing spiritual framework, the Tiger's Wood element connects to the virtue of 仁 (Rén) — benevolence, humaneness, the quality of heart that extends care beyond the self to all living beings. This is the Tiger's highest spiritual calling: the transformation of personal courage into compassionate action, the evolution from the warrior who fights for victory into the protector who fights for justice. The liver system's association with Wood means that spiritual cultivation for the Tiger often begins with the body — Qigong practices that smooth liver Qi flow, martial arts forms that channel aggressive energy into disciplined movement, and breathing techniques that balance the ascending force of Yang with the grounding descent of Yin.

The Tiger's Ba Zi position at 寅 (Yín) — the hour of dawn, the threshold between darkness and light — carries profound spiritual significance. The Tiger is the guardian of transformation, the one who stands at the gate between what was and what is becoming. This threshold-guardian role suggests that the Tiger's deepest spiritual work involves embracing impermanence, learning to release attachment to outcomes while maintaining full commitment to righteous action. The Chan (Zen) Buddhist concept of 無住 (Wú Zhù) — abiding nowhere, clinging to nothing — offers the Tiger a spiritual practice perfectly calibrated to their nature: act with total courage, then release completely, over and over, allowing each moment to arise and pass without the grasping that transforms strength into suffering.`,

  lifeLessons: [
    "The roar that protects must be governed by the silence that discerns — 勇 (Yǒng, true courage) is knowing when the most powerful action is restraint.",
    "Your Yang Wood Qi is nourished by Water's patience, not diminished by it. The deepest roots produce the tallest canopy; invest in what is invisible before demanding what is visible.",
    "The Tiger who insists on walking alone commands respect but builds nothing lasting. Your San He allies — Horse and Dog — exist to show you that shared strength multiplies rather than divides your power.",
    "Unpredictability is a gift when chosen consciously and a liability when driven by unprocessed emotion. Cultivate the liver Qi's smooth flow so your actions surprise by their brilliance, not their volatility.",
    "You are the guardian of thresholds — the one who stands between what is ending and what is being born. Honor this role by embracing change in your own life with the same courage you demand of the world.",
  ],

  toolkit: [
    {
      title: "Five Element Breathing",
      context:
        "When Yang Wood Qi accumulates as restlessness, frustration, or the urge to force outcomes before conditions are ripe — particularly during Metal-dominant periods that feel restrictive.",
      action:
        "Practice the Wu Xing breathing sequence: inhale through the nose for four counts visualizing green Wood Qi rising through the liver, hold for two counts as it transforms to red Fire Qi in the heart, exhale for six counts releasing golden Metal Qi through the lungs. Repeat five cycles. This circulates stagnant Wood energy through the full elemental cycle, transforming frustration into clarity and restoring the smooth Qi flow the Tiger's constitution requires.",
    },
    {
      title: "Tiger Stance Meditation",
      context:
        "Before any high-stakes decision, confrontation, or moment requiring the full integration of courage and discernment — when you need the Tiger's power without its volatility.",
      action:
        "Stand with feet shoulder-width apart, knees slightly bent, hands at your sides with fingers spread like claws. Root your weight downward into the earth while extending your crown upward toward the sky. Hold for three minutes while breathing naturally, feeling the vertical axis of Wood Qi — roots descending, branches ascending — centering your awareness in the dantian (丹田). From this rooted stance, the Tiger's decisiveness operates from depth rather than reactivity.",
    },
    {
      title: "Yin-Yang Journaling",
      context:
        "At the close of each day, or after any significant encounter that activated strong emotional responses — to cultivate the self-awareness that transforms instinct into wisdom.",
      action:
        "Draw a vertical line on the page. On the left (Yang) side, record moments when your Tiger energy served well: decisive actions, protective instincts, courageous stands. On the right (Yin) side, record moments that called for patience, listening, or yielding. Over time, this practice reveals your personal Yin-Yang balance and illuminates the specific situations where integrating more Yin response would amplify rather than diminish your effectiveness.",
    },
    {
      title: "San He Activation",
      context:
        "When facing a challenge too large for individual effort, or when the temptation to handle everything alone threatens to isolate you from necessary support.",
      action:
        "Identify your Horse and Dog allies — the people in your life who share your values of courage, loyalty, and directness. Reach out to one of them with specific honesty about what you are facing and what support you need. The act of asking for help is itself a Tiger's spiritual practice: it requires the courage to be vulnerable, which is the highest expression of 勇 (Yǒng) and the key to unlocking the full power of your Three Harmonies alliance.",
    },
  ],

  descriptionInsight:
    "The Tiger stands at the threshold of dawn in the Chinese zodiac — the third Di Zhi, carrying the explosive Yang Wood Qi of 寅 (Yín) into a world that needs its courage, its protective fury, and its irrepressible drive to grow beyond every limitation. Ruled by the Wood element and governed by the Yang principle, the Tiger is here to lead from the front, to guard what is precious, to break through what is stagnant, and to demonstrate through lived example that true power is inseparable from true compassion.",
};
