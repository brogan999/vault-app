import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "rat";

export const RAT: ChineseAnimalContent = {
  animal: "Rat",
  name: "The Celestial Strategist",
  shortName: "The Strategist",
  tagline:
    "First to arrive, first to perceive — the Rat opens the zodiac cycle with cunning, charm, and ceaseless ingenuity.",
  color: "#328181",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Water",
  polarity: "Yang",
  earthlyBranch: "子 (Zǐ)",

  overview: `The Rat holds the paramount position of 子 (Zǐ) — the first Earthly Branch — marking the hour of midnight (11 PM – 1 AM) when the celestial cycle renews itself. In Chinese cosmology, this is the liminal moment where Yin reaches its zenith and Yang first stirs, making the Rat the living embodiment of initiative and new beginnings. Its fixed element is Water (水), granting it the fluidity of rivers that find passage through any obstacle and the depth of wells that reach hidden reserves others cannot fathom.

As the creature that, according to legend, outwitted the Ox to claim first place in the Jade Emperor's great race, the Rat embodies strategic intelligence over brute force. This is not mere cleverness — it is the Qi of discernment, the capacity to read the subtle currents of a situation and position oneself at exactly the right confluence of timing and opportunity. The Rat's Yang polarity infuses this Water nature with an outward-moving, generative quality: where still water might stagnate, the Rat's Qi flows like a mountain stream — restless, searching, always finding the most efficient path downhill.

In the Ba Zi (Eight Characters) framework, those born under the Rat carry the Tian Gan (Heavenly Stem) and Di Zhi (Earthly Branch) combination that speaks to hidden abundance. The character 子 originally depicted a swaddled infant — a symbol of latent potential and the first spark of creation. Rat natives channel this primordial creative energy into everything they touch, whether building networks, accumulating resources, or engineering solutions that others overlook entirely.`,

  elementInteractions: {
    Wood: `The Wood Rat (甲子, Jiǎ Zǐ) merges the expansive, growth-oriented Qi of Wood with Water's innate adaptability, creating a personality of remarkable generosity and visionary ambition. Wood feeds from Water in the Wu Xing generative cycle (水生木), meaning this Rat's natural resourcefulness directly nourishes its capacity for long-term planning and community building. These individuals are the most outwardly warm of all Rat types, channeling their strategic mind toward collective benefit rather than personal accumulation alone.`,
    Fire: `The Fire Rat (丙子, Bǐng Zǐ) presents an inherent tension within the Wu Xing, as Water and Fire exist in a controlling relationship (水克火). This dynamic creates a personality of extraordinary passion tempered by strategic caution — a leader who inspires others with infectious enthusiasm yet never loses sight of practical realities. The Fire Rat's Qi burns with charismatic intensity, drawing people into their orbit, while their Water foundation ensures they rarely let emotion override their shrewd assessment of circumstances.`,
    Earth: `The Earth Rat (戊子, Wù Zǐ) grounds the Rat's restless Water nature with stability and patience, producing the most dependable and materially focused expression of this sign. In the Wu Xing cycle, Earth controls Water (土克水), which paradoxically gives this Rat a disciplined focus that other Rat types often lack. The Earth Rat builds slowly, methodically accumulating wealth and status through careful stewardship rather than speculative risk, embodying the principle that a well-banked riverbed channels water more powerfully than an open flood plain.`,
    Metal: `The Metal Rat (庚子, Gēng Zǐ) benefits from the Wu Xing generative relationship where Metal produces Water (金生水), amplifying the Rat's already formidable mental acuity into razor-sharp decisiveness. These individuals possess an almost surgical clarity of thought — they cut through ambiguity and confusion with an intensity that can feel relentless to others. The Metal Rat is the most self-reliant of the five elemental variations, possessing an unyielding determination that, when balanced, manifests as the kind of principled resolve that reshapes entire systems.`,
    Water: `The Water Rat (壬子, Rén Zǐ) represents the purest expression of the Rat archetype, with its fixed Water element doubled by its birth-year element. This creates a personality of profound intuitive depth and unmatched adaptability — someone who can navigate social, professional, and emotional currents with an almost preternatural ease. However, this doubled Water can also produce excessive fluidity: an inclination to drift between options, absorb others' emotional states, or avoid the friction of firm commitment, making self-cultivation of Earth-like grounding practices especially important.`,
  },

  coreEnergies: [
    {
      name: "Strategic Mind",
      score: 92,
      description:
        "The Rat's Water Qi grants extraordinary capacity for pattern recognition, long-range planning, and reading the invisible dynamics within any situation. This is the intelligence of the midnight hour — perceiving clearly when others are still in darkness.",
    },
    {
      name: "Resourcefulness",
      score: 90,
      description:
        "Like water finding passage through the smallest fissure in stone, the Rat possesses an almost inexhaustible capacity to locate opportunities, gather resources, and engineer solutions from seemingly insufficient materials.",
    },
    {
      name: "Social Intelligence",
      score: 85,
      description:
        "The Rat's Yang polarity projects its Water nature outward into masterful social navigation. These individuals build extensive networks not through surface charm alone but through genuine attentiveness to what others need and value.",
    },
    {
      name: "Adaptability",
      score: 88,
      description:
        "Water assumes the shape of any vessel — and the Rat navigates change, uncertainty, and shifting circumstances with fluid grace. When plans collapse, the Rat has already sensed the shift and begun flowing toward the next viable channel.",
    },
    {
      name: "Ambition",
      score: 82,
      description:
        "As the first sign of the zodiac, the Rat carries the primordial spark of 子 — the energy of inception and drive. This is not reckless striving but a steady, calculating ambition that understands the value of timing and preparation before decisive action.",
    },
  ],

  strengths: [
    {
      title: "Celestial Perception",
      description:
        "The Rat's midnight Qi bestows a rare gift: the ability to perceive opportunities and dangers long before they become visible to others. Like water that senses the lowest point in a landscape before it begins to flow, the Rat intuits where advantage lies.",
      deepDive:
        "In classical Chinese thought, 子 hour is when the first thread of Yang emerges from maximum Yin — the moment of cosmic inception. Rat natives embody this transition, instinctively understanding when cycles are about to shift. In practical terms, this manifests as an uncanny sense of timing in business, relationships, and creative ventures. Where others rely on evidence already manifest, the Rat reads the energetic precursors — the subtle Qi shifts that precede visible change.",
    },
    {
      title: "Network Weaving",
      description:
        "The Rat builds and maintains intricate social networks that function as living systems of mutual exchange. Each connection is purposeful yet genuine, creating webs of reciprocity that provide security and multiply opportunity.",
      deepDive:
        "Water connects all things — it flows between every crevice, reaching places no other element can. The Rat's social genius mirrors this quality. Unlike the Tiger who commands loyalty through force of presence, or the Dragon who attracts followers through sheer magnetism, the Rat cultivates relationships through attentive reciprocity. They remember what matters to people, track the invisible currents of obligation and gratitude, and position themselves as indispensable nodes within their communities.",
    },
    {
      title: "Alchemical Resourcefulness",
      description:
        "The Rat transforms scarcity into abundance with the patience and precision of a Wu Xing alchemist. Nothing is wasted, no opportunity too small to cultivate, no resource too humble to employ in service of a larger design.",
      deepDive:
        "In the Daoist tradition, the sage finds treasure where others see only refuse. The Rat embodies this principle in daily life — stretching budgets, repurposing overlooked assets, and finding value in what others have discarded. This is not born from deprivation but from a deep understanding of how small, well-placed actions compound over time, much like water that carves grand canyons through patient persistence.",
    },
    {
      title: "Adaptive Resilience",
      description:
        "Like water that flows around boulders rather than shattering against them, the Rat recovers from setbacks with remarkable speed and grace. Obstacles become information; failures become refined strategy.",
      deepDive:
        "The Lao Zi observed that nothing in the world is softer than water, yet nothing is better at overcoming the hard and rigid. Rat natives internalize this paradox. Their resilience is not the unyielding hardness of Metal or the explosive recovery of Fire — it is the quiet, persistent adaptability that reshapes the landscape itself over time. When one path closes, the Rat has already identified three alternatives and begun testing the most promising.",
    },
    {
      title: "Initiator's Spark",
      description:
        "As bearer of the first Earthly Branch, the Rat carries a natural gift for beginning new ventures, launching projects, and catalyzing action in others. They thrive at the inception point where vision must crystallize into first steps.",
    },
  ],

  growthEdges: [
    {
      title: "Hoarding Instinct",
      teaser:
        "Water's tendency to pool and accumulate can manifest as an anxiety-driven need to stockpile resources, information, or control beyond what circumstances require.",
      fullExplanation:
        "The Rat's extraordinary resourcefulness has a shadow: a deep-seated fear of insufficiency that can drive compulsive accumulation. This applies not only to material wealth but to information, social capital, and emotional security. When this Qi becomes imbalanced, the Rat may struggle to delegate, share credit, or release control — behaviors that ultimately constrict the very flow of abundance they seek. The cultivation practice here is developing trust in sufficiency: learning that the river does not need to carry all its water at once to reach the sea.",
      premiumHook:
        "Explore personalized Wu Xing balancing practices for transforming hoarding Qi into generative flow.",
    },
    {
      title: "Overthinking Currents",
      teaser:
        "The Rat's powerful analytical mind can become a whirlpool — circling endlessly through possibilities without arriving at decisive action.",
      fullExplanation:
        "Water in excess creates stagnation, and the Rat's mental Qi is no exception. The same strategic brilliance that maps complex scenarios can, when unchecked, spiral into chronic indecision, anxious contingency planning, or a paralyzing awareness of everything that could go wrong. The 子 energy that should spark bold initiation gets trapped in recursive analysis. Cultivating the complementary energy of Earth — grounding practices, embodied routines, and the courage to act on imperfect information — provides the riverbanks that channel this mental water into purposeful flow.",
      premiumHook:
        "Discover element-specific meditation techniques to quiet the Rat's overactive Water mind.",
    },
    {
      title: "Opportunistic Drift",
      teaser:
        "The Rat's talent for spotting opportunity can fragment into scattered pursuits, diluting focus across too many channels at once.",
      fullExplanation:
        "Water flows wherever gravity permits, and the highly perceptive Rat constantly senses new openings worth exploring. Without deliberate cultivation of focus, this gift becomes a liability — too many projects launched, too many networks maintained superficially, too many irons in fires that never reach forging temperature. The Rat's growth path involves learning the art of strategic refusal: recognizing that choosing one deep channel often yields more than ten shallow streams. This mirrors the Wu Xing principle that concentrated Water carves stone, while dispersed Water merely dampens the surface.",
      premiumHook:
        "Unlock your Ba Zi-informed priority framework to channel Rat ambition into focused achievement.",
    },
    {
      title: "Emotional Guardedness",
      teaser:
        "Behind the Rat's sociable exterior often lies a carefully guarded inner world that resists true vulnerability.",
      fullExplanation:
        "The Rat excels at reading others but can struggle to let others read them. Their Water nature runs deep, and the strategic mind that serves so well in professional and social contexts can become a barrier in intimate relationships. The Rat may maintain an impenetrable layer of charm and helpfulness that keeps others at a comfortable distance, avoiding the exposure that genuine closeness requires. Growth comes through learning that vulnerability is not a strategic weakness but the essential channel through which authentic connection — the Rat's deepest longing — actually flows.",
      premiumHook:
        "Access guided practices for Rat natives to cultivate emotional openness without sacrificing strategic awareness.",
    },
  ],

  relationships: `In the realm of relationships, the Rat operates through the lens of its Water nature — seeking depth, testing currents, and building connections that function as an interconnected ecosystem rather than isolated bonds. The Rat is not content with superficial acquaintance; it seeks to understand what drives the people around it, what they need, and how mutual exchange can create something greater than either party could achieve alone. This makes the Rat an exceptionally attentive partner, friend, and ally — one who remembers the small details that others forget and anticipates needs before they are expressed.

The San He (三合) triangle links the Rat with the Dragon and the Monkey, forming one of the most dynamic and intellectually stimulating triads in the Chinese zodiac. These three signs share a Yang, action-oriented Qi that generates tremendous creative and strategic momentum when combined. The Rat provides the planning, the Dragon brings audacious vision, and the Monkey contributes ingenious improvisation — together they are nearly unstoppable in collaborative ventures.

The Rat's Liu He (六合) — its Secret Friend pairing — is the Ox. This bond runs quieter and deeper than the San He alliance: the Rat's quicksilver intelligence finds grounding in the Ox's steady reliability, while the Ox benefits from the Rat's perceptiveness and social agility. In Ba Zi analysis, this pairing often indicates a relationship of profound mutual support that operates below the surface, each compensating for what the other lacks without the friction of visible opposition.`,

  compatibilityNotes: {
    Dragon:
      "A San He (Three Harmonies) bond of exceptional creative and strategic synergy. The Dragon's bold vision and the Rat's meticulous planning create a formidable partnership. Both share Yang energy and an appetite for ambitious undertakings — when aligned, they amplify each other's strengths exponentially.",
    Monkey:
      "The third pillar of the Rat's San He triangle. The Monkey's inventive improvisation complements the Rat's long-range strategy, and both share a quick-witted, adaptable nature. This pairing thrives on intellectual stimulation and mutual respect for each other's cunning.",
    Ox: "The Rat's Liu He (Secret Friend) — a deep, stabilizing bond. The Ox's steadfast Earth energy grounds the Rat's restless Water nature, creating a complementary partnership of unusual resilience. Trust develops slowly but runs extraordinarily deep, with each partner filling gaps the other cannot address alone.",
    Horse:
      "A Chong (六冲) clash pairing that represents the Rat's most challenging relational axis. Horse occupies the directly opposing Earthly Branch 午 (Wǔ), creating a magnetic but volatile tension. The Horse's Fire nature evaporates the Rat's careful Water strategies, while the Rat's calculating approach frustrates the Horse's need for spontaneous freedom. Growth is possible but requires conscious effort from both sides.",
    Rabbit:
      "A relationship of subtle friction rooted in differing expressions of intelligence. The Rabbit's Wood Qi draws upon the Rat's Water, which can feel energetically draining over time. The Rabbit's diplomatic indirectness may clash with the Rat's preference for strategic directness. Mutual respect requires patience and clear communication.",
    Rooster:
      "An intriguing pairing where the Rooster's Metal Qi actually nourishes the Rat's Water through the Wu Xing generative cycle (金生水). The Rooster's precision and critical eye can sharpen the Rat's already keen perceptions, though both must guard against competitive dynamics that erode mutual trust.",
  },

  careerPath: `The Rat's career trajectory is shaped by its position as 子 — the initiator of cycles. Rat natives thrive in roles that reward strategic thinking, rapid adaptation, and the ability to spot emerging opportunities before they become obvious. They are natural entrepreneurs, financial strategists, intelligence analysts, and negotiators — anyone who must navigate complex, information-rich environments and extract advantage from ambiguity. The Rat's Water Qi gives it a particular affinity for industries involving flow: finance, trade, communications, logistics, and any field where connecting disparate nodes creates value.

In organizational settings, the Rat excels as the person behind the person in power — the advisor, the strategist, the intelligence-gatherer who ensures decisions are made with full awareness of the landscape. While the Dragon may occupy the visible throne and the Tiger may command the vanguard, it is often the Rat who mapped the territory, identified the optimal route, and ensured the supply lines were secure. Rat natives who resist the temptation to operate purely from the shadows often discover they make remarkably effective leaders themselves, combining strategic depth with an earned understanding of every level of the operation.

The Rat's Wu Xing balance in career matters benefits enormously from cultivating Wood energy — the element that Water naturally generates. In practical terms, this means channeling the Rat's resourcefulness and strategic mind into sustained growth, mentoring others, and building systems that outlast any single transaction. The Rat who learns to plant forests rather than simply divert streams achieves a level of professional impact that matches their considerable ambition.`,

  workStyle: `The Rat's daily work rhythm mirrors the Qi of its governing hour: most potent during periods of transition and inception, most restless during periods of stagnation. Rat natives work best when they have multiple streams of activity to manage simultaneously, can exercise autonomy over their methods, and receive recognition for their strategic contributions rather than just their output. They are meticulous with information, often maintaining elaborate personal systems for tracking contacts, opportunities, and resources that others would never think to catalog.

In team dynamics, the Rat functions as the intelligence center — gathering information, synthesizing perspectives, and offering strategic counsel. They prefer environments where competence is valued over hierarchy and where quick thinking is rewarded over rigid adherence to process. The Rat may struggle in highly bureaucratic settings where their natural efficiency and inclination to find creative shortcuts are penalized rather than praised.`,

  spiritualWisdom: `The Rat's spiritual path is intimately connected to the mystery of 子 — the moment of cosmic renewal when the first thread of Yang pierces the deepest Yin. In Daoist cultivation, this midnight hour represents the point of maximum potential, the instant before manifestation when all possibilities coexist. The Rat native who turns inward discovers that their restless strategic mind is, at its deepest level, an expression of this primordial awareness: the capacity to perceive the seeds of what is becoming before it has fully emerged.

The Water element that governs the Rat corresponds to the kidneys in Chinese medical philosophy — the storehouse of Jing (essence) and the root of both fear and wisdom. The Rat's spiritual work often involves transmuting its natural anxiety about insufficiency into trust in the deeper flow of Qi. Just as water does not need to plan its path to the ocean — it arrives by following its nature — the Rat's highest expression comes through aligning personal will with the Dao rather than opposing circumstances through force of strategy alone.

In the Wu Xing framework, the Rat's spiritual cultivation benefits from practices that honor all five elements: the groundedness of Earth meditation, the clarity of Metal breathwork, the expansive vision of Wood visualization, the transformative intensity of Fire ceremony, and the deep stillness of Water contemplation. The Rat who learns to embody the full elemental cycle — rather than defaulting exclusively to Water's familiar currents — discovers a wholeness that transcends the strategic mind and touches the very source from which the zodiac cycle eternally begins.`,

  lifeLessons: [
    "The river that trusts its course does not need to carry all its water at once — learn the art of releasing what you have hoarded beyond necessity.",
    "Your midnight perception is a gift, but wisdom means knowing which insights to act upon and which to simply witness passing through.",
    "The strongest networks are built on genuine reciprocity, not strategic calculation — let some connections exist purely for the joy of them.",
    "Stillness is not stagnation. The Rat who learns to rest in the deep pool between actions discovers reserves of creativity that constant motion can never access.",
    "You were first in the zodiac not because you were strongest, but because you were wisest about timing — apply this same patience to your own unfolding.",
    "Vulnerability is not a leak in your defenses; it is the channel through which the deepest connections reach you.",
  ],

  toolkit: [
    {
      title: "Midnight Renewal Practice",
      context:
        "When the Rat's Water mind becomes a whirlpool of overthinking and anxious planning, especially during periods of uncertainty or transition.",
      action:
        "At any quiet moment (ideally near 子 hour, 11 PM – 1 AM), sit in stillness and visualize your mental activity as a turbulent pool gradually becoming still. With each exhale, allow one stream of thought to flow away. When the surface is calm, ask a single question and listen for the first intuitive response before the strategic mind engages. Record this insight — it carries the Qi of 子, the initiating wisdom that precedes calculation.",
    },
    {
      title: "Five-Element Resource Audit",
      context:
        "When the Rat's hoarding instinct has created stagnation — too many commitments, possessions, or information streams clogging natural flow.",
      action:
        "Categorize your current resources and commitments into the Wu Xing: Wood (growth projects), Fire (passionate pursuits), Earth (stability structures), Metal (systems and standards), Water (adaptive ventures). Identify where accumulation has become excessive and deliberately release, delegate, or conclude one item from the most bloated category. Notice how this creates space for new Qi to circulate — the Rat thrives on flow, not on storage.",
    },
    {
      title: "San He Activation",
      context:
        "When facing a challenge that exceeds the Rat's individual strategic capacity, or when feeling isolated in decision-making.",
      action:
        "Identify the Dragon and Monkey energies in your life — people or activities that embody bold vision (Dragon) and inventive adaptability (Monkey). Consciously engage these allies or qualities when approaching a complex problem. Structure your approach in three phases: Rat perception (what do I see that others don't?), Dragon ambition (what is the boldest possible outcome?), Monkey ingenuity (what unconventional method could get us there?). This activates the San He triangle's full creative potential.",
    },
    {
      title: "Secret Friend Grounding",
      context:
        "When the Rat's Water nature has become too fluid — scattered focus, indecisive wavering, or emotional absorption from others.",
      action:
        "Invoke the Ox's Liu He stabilizing energy through deliberate Earth-element practices: work with your hands on a single physical task (gardening, cooking, building), slow your pace to half your natural speed, and commit to completing one thing fully before beginning another. The Ox energy does not compete with the Rat's nature — it provides the riverbanks that transform aimless flooding into purposeful current.",
    },
  ],

  descriptionInsight: `The Rat stands at the threshold of the zodiac as the Celestial Strategist — bearer of 子 (Zǐ), the Earthly Branch of midnight and new beginnings. Governed by Water and animated by Yang polarity, the Rat perceives the hidden currents of opportunity that flow beneath the surface of every situation. Their gift is not brute force but the fluid intelligence of rivers that find passage through any landscape, the quiet cunning that claimed first place not through strength but through timing and wit. At their highest expression, Rat natives channel this primordial initiating Qi into building networks of genuine abundance, navigating complexity with strategic grace, and sparking the cycles of renewal that the entire zodiac depends upon to begin again.`,
};
