import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "rooster";

export const ROOSTER: ChineseAnimalContent = {
  animal: "Rooster",
  name: "The Rooster — 鸡 (Jī)",
  shortName: "The Observer",
  tagline:
    "Forged in Yin Metal, the Rooster sees every flaw and every facet — turning ruthless honesty into an instrument of precision that cuts through pretense and crowns the truth.",
  color: "#C7A356",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Metal",
  polarity: "Yin",
  earthlyBranch: "酉 (Yǒu)",

  overview:
    "The Rooster occupies the tenth position among the twelve Di Zhi (Earthly Branches), embodying the Yin aspect of Metal within the Wu Xing cycle. In Chinese cosmology, the Yǒu hour (5–7 PM) marks the threshold of dusk — the moment when the sun descends toward the horizon and the day's accounts must be settled. This is the hour of reckoning and harvest, when what was promised in the morning is measured against what was delivered by evening. The Rooster's cry at this liminal hour is not merely an announcement but a summoning: a call to precision, to accountability, to the unflinching assessment of what is real versus what is merely wished for.\n\nAs a Yin Metal sign, the Rooster's Qi operates with the qualities of finely wrought gold — lustrous, sharp, and capable of reflecting reality with uncanny fidelity. Where Yang Metal (the Monkey) innovates and reshapes, Yin Metal refines, polishes, and perfects. The Rooster does not create new forms so much as it reveals the flawless form already latent within raw material, removing impurity with the discerning eye of a master jeweler. In classical Chinese thought, Metal carries the virtue of 义 (yì) — righteousness, moral clarity, and the courage to name what others prefer to leave unnamed.\n\nIn Ba Zi analysis, the Rooster pillar signals a life governed by exacting standards, keen observation, and the paradox of a creature both flamboyant and fastidious. The Rooster adorns itself not from vanity but from the deep Metal conviction that external presentation is a form of truth-telling — that how one appears in the world should faithfully reflect the precision of one's inner order. The ancient sages recognized in the Rooster five virtues: 文 (wén, refinement), 武 (wǔ, martial courage), 勇 (yǒng, bravery), 仁 (rén, benevolence), and 信 (xìn, faithfulness) — making it the only zodiac creature explicitly honored with a complete moral inventory.",

  elementInteractions: {
    Wood:
      "Metal controls Wood in the Ke (overcoming) cycle, giving the Rooster authority to shape, prune, and discipline Wood's expansive growth. The Rooster's Yin Metal acts as the pruning blade that cuts away excess to reveal essential form — directing creative energy into structured channels rather than allowing it to proliferate without purpose. In years of strong Wood influence, the Rooster may feel compelled to impose order on chaos, which can yield masterful results when tempered with patience or create unnecessary conflict when applied too rigidly.",
    Fire:
      "Fire controls Metal in the Ke cycle, placing the Rooster in a position of vulnerability before Fire's transformative heat. Yet this overcoming relationship carries a hidden gift: Fire is the only force capable of smelting raw Metal into its most refined state. Fire years challenge the Rooster's rigid certainties, softening inflexible positions and forging greater resilience through trials that burn away brittleness. The wisest Roosters learn to welcome Fire's intensity as the crucible that tempers them from sharp but fragile into strong and enduring.",
    Earth:
      "Earth produces Metal in the Sheng (generating) cycle, making it the Rooster's nurturing mother element. When Earth Qi is abundant, the Rooster feels supported, grounded, and resourced — its natural precision fed by a stable foundation of material and emotional security. Earth years are periods of quiet accumulation for the Rooster, when the ore of experience is slowly compressed into the refined Metal of mature judgment. The Rooster thrives when it remembers to draw sustenance from Earth's patient generosity rather than relying solely on its own cutting edge.",
    Metal:
      "Metal meeting Metal is a Bi He (companion harmony) that intensifies the Rooster's innate qualities to their zenith. This doubling sharpens perception to surgical precision and amplifies the drive for perfection — but unchecked, it can harden into brittleness, turning the Rooster's exacting standards into a blade that cuts indiscriminately, wounding allies and self alike. The Rooster must learn that the finest blade is the one that knows when not to cut, and that Yin Metal's highest expression is the mirror that reflects truth without shattering what it shows.",
    Water:
      "Metal produces Water in the Sheng cycle, meaning the Rooster naturally gives rise to Water Qi — emotional depth, intuitive flow, and the capacity for wisdom that transcends mere analysis. This is the Rooster's generative gift: the ability to transform sharp observation into fluid understanding, converting the precision of what is seen into the compassion of what is felt. Water years invite the Rooster to release its findings downstream, sharing accumulated insight rather than hoarding it behind walls of critical reserve.",
  },

  coreEnergies: [
    {
      name: "Observational Precision",
      score: 93,
      description:
        "The Rooster possesses the zodiac's most acute eye for detail — a Yin Metal faculty that registers every misalignment, every inconsistency, every departure from the standard with photographic fidelity. This is 明察 (míng chá), the clear-seeing that the Yǒu hour demands when the day's harvest must be counted grain by grain and nothing can be approximated.",
    },
    {
      name: "Honest Expression",
      score: 88,
      description:
        "The Rooster speaks as Metal cuts — clean, direct, and without the padding of social convenience. This is not cruelty but 义 (yì), the Confucian virtue of righteousness that compels truth-telling even when silence would be easier. The Rooster's honesty is a moral commitment, an expression of the deep Metal belief that pretense corrodes everything it touches.",
    },
    {
      name: "Metal Discipline",
      score: 85,
      description:
        "Yin Metal manifests in the Rooster as an internal architecture of extraordinary order — routines held with ritual precision, standards maintained without negotiation, and a capacity for sustained methodical effort that wears down obstacles through sheer consistency. This 自律 (zìlǜ) — self-discipline — is the Rooster's foundational power, the ore from which all its other virtues are refined.",
    },
    {
      name: "Confident Presence",
      score: 72,
      description:
        "The Rooster's flamboyance is not decoration but declaration — an outward manifestation of Yin Metal's conviction that appearance and essence should be unified. Its 气质 (qìzhì) — bearing and presence — commands attention not through volume but through the unmistakable assurance of a creature that has examined itself as thoroughly as it examines everything else and found its own presentation worthy.",
    },
    {
      name: "Detail Mastery",
      score: 65,
      description:
        "Where others see the forest, the Rooster maps each tree, cataloguing leaf patterns and counting growth rings. This 精细 (jīngxì) — fine-grained mastery — extends to every domain the Rooster inhabits: schedules calibrated to the minute, environments organized to exacting specifications, and work products polished until they reflect the standard the Rooster holds as non-negotiable.",
    },
  ],

  strengths: [
    {
      title: "Unwavering Punctuality of Spirit",
      description:
        "The Rooster embodies 守时 (shǒu shí) — the keeping of time — not merely as a habit but as a moral principle. Just as the Rooster's crow marks the precise turning of cosmic hours, the Rooster native treats every commitment as a covenant with time itself. Deadlines are sacred, promises are structural, and reliability is the currency through which the Rooster earns the trust that Metal demands.",
      deepDive:
        "This temporal precision arises from the Rooster's position at the Yǒu branch — the hour when day meets night and all accounts come due. In Chinese agricultural society, the Rooster's evening cry signaled the close of work and the beginning of reckoning: what was sown and what was reaped, what was promised and what was fulfilled. The Rooster native carries this cosmic accounting function as an innate rhythm, producing a reliability that others experience as bedrock — the one presence that can be counted upon when all other commitments dissolve.",
    },
    {
      title: "The Blade of Candor",
      description:
        "The Rooster wields honesty as a Yin Metal instrument — sharp enough to cut through layers of social pretense, precise enough to identify the exact point where truth has been bent. This is 直言不讳 (zhí yán bù huì), speaking straight without evasion, the Confucian ideal of the loyal minister who tells the emperor what the court dares not whisper.",
      deepDive:
        "In classical Chinese governance, the 谏官 (jiàn guān) — the remonstrance official — held the sacred duty of speaking uncomfortable truths to power. The Rooster carries this archetype in its elemental DNA. Yin Metal does not blunt itself to spare feelings; it refines its edge to cut more cleanly, understanding that a precise incision heals faster than a ragged wound. The Rooster's candor is ultimately an act of respect — it refuses to insult others with comfortable lies, trusting them with the dignity of truth even when that truth stings.",
    },
    {
      title: "Flamboyant Integrity",
      description:
        "The Rooster's celebrated display is not peacocking but proof of concept — visible evidence that its internal standards have been met and externalized without compromise. Every detail of the Rooster's presentation carries information: competence made visible, order made beautiful, and discipline made radiant. This is 表里如一 (biǎo lǐ rú yī) — outer and inner as one.",
    },
    {
      title: "Systematic Excellence",
      description:
        "The Rooster approaches complexity with the methodical patience of a Yin Metal artisan — cataloguing variables, establishing procedures, and constructing systems that function with clockwork reliability. Where others improvise, the Rooster engineers. Where others approximate, the Rooster measures. This 精益求精 (jīng yì qiú jīng) — striving for ever-greater refinement — produces work that endures long after inspiration-driven efforts have crumbled.",
    },
  ],

  growthEdges: [
    {
      title: "Criticism Without Mercy",
      teaser:
        "The Rooster's devotion to truth can sharpen into habitual fault-finding when Yin Metal's discerning eye forgets that not everything imperfect requires correction.",
      fullExplanation:
        "The same perceptive faculty that makes the Rooster invaluable as an analyst or advisor can, in excess, become an instrument of relentless criticism that alienates allies and erodes trust. When Yin Metal cuts without being tempered by Water's compassion or Earth's patience, the Rooster begins to conflate noticing flaws with being obligated to announce them — every interaction becoming an audit, every relationship a performance review. This is 吹毛求疵 (chuī máo qiú cī) — 'blowing apart hairs to find fault,' the classical warning against perfectionism weaponized. The antidote lies in cultivating Water Qi's empathic depth, learning that the highest expression of Metal's truth-telling is knowing when silence serves accuracy better than speech. The I Ching hexagram Dui (兑, The Joyous Lake) teaches that Metal's sharpest form is joy — the Rooster must remember that celebration of what is right nourishes more than cataloguing what is wrong.",
      premiumHook:
        "Learn the Rooster's discernment calibration method — an ancient practice for distinguishing between observations that serve growth and criticisms that serve only the Rooster's need for control, restoring warmth to your most powerful perceptive gift.",
    },
    {
      title: "Rigidity Masquerading as Standards",
      teaser:
        "The Rooster's commitment to excellence can calcify into inflexibility when discipline becomes dogma and the method eclipses the purpose it was designed to serve.",
      fullExplanation:
        "Yin Metal's natural tendency toward precision and order can, without the softening influence of other elements, harden into a brittleness that shatters under the pressure of change. The Rooster may cling to systems, routines, and standards long after circumstances have evolved beyond their usefulness — mistaking consistency for wisdom and rigidity for strength. This is 固执 (gùzhí), the stubbornness that arises when Metal forgets that even the finest blade must be periodically re-forged. Fire Qi — the very element that challenges Metal — is the necessary medicine: the transformative heat that melts rigid forms so they can be recast to meet new conditions. The Rooster's growth lies in learning that true excellence adapts, that the master craftsman changes tools when the material demands it, and that 变通 (biàn tōng) — flexible adaptation — is not a betrayal of standards but their highest expression.",
      premiumHook:
        "Discover the Rooster's adaptive excellence framework — structured approaches to maintaining your exacting standards while developing the flexibility that prevents precision from becoming a prison.",
    },
    {
      title: "Vanity of Presentation",
      teaser:
        "The Rooster's instinct to externalize inner order through appearance can tip into preoccupation with surface when the mirror reflects image rather than substance.",
      fullExplanation:
        "The Yin Metal gift of making the invisible visible through careful presentation carries a shadow: the risk of confusing the reflection with the reality it represents. When the Rooster invests excessive Qi in managing how it is perceived, the presentation becomes a performance detached from the precision it was meant to embody. This is 华而不实 (huá ér bù shí) — 'ornate but not substantial' — the classical warning against beauty without structural integrity. The remedy lies in deepening the Rooster's relationship with its mother element, Earth, reconnecting outward display to inward substance and remembering that the most radiant gold is valued not for its shine but for its incorruptibility. When the Rooster's flamboyance flows from genuine inner order rather than anxiety about perception, it achieves the effortless authority the Daoists call 德 (dé) — virtue that radiates without performance.",
      premiumHook:
        "Unlock the Rooster's authentic presence practice — techniques for ensuring your natural radiance flows from inner substance rather than outer management, transforming self-consciousness into genuine confidence.",
    },
    {
      title: "Isolation Through Impossible Standards",
      teaser:
        "The Rooster's exacting expectations can create a solitude where no one measures up and the only company that meets the standard is the Rooster's own reflection.",
      fullExplanation:
        "When Yin Metal's perfectionism extends unchecked into relationships, the Rooster unconsciously constructs a fortress of standards so high that no human being can scale the walls. Partners are measured, friends are evaluated, and colleagues are graded on rubrics they never agreed to — each falling short in ways the Rooster catalogues with devastating clarity. This is 曲高和寡 (qǔ gāo hé guǎ) — 'the melody too refined finds few who can harmonize,' the ancient observation that excessive refinement produces isolation. The Rooster's growth edge demands cultivating 包容 (bāoróng) — the expansive tolerance that Earth Qi provides — learning that human connection requires accepting imperfection not as failure but as the texture of intimacy. The finest jade, after all, is prized not for flawlessness but for the character within its inclusions.",
      premiumHook:
        "Master the Rooster's connection repair practice — methods for softening impossible standards into generous expectations that draw people closer rather than filtering them out, building the warm alliances your Metal nature deeply craves.",
    },
  ],

  relationships:
    "In the San He (Three Harmonies) triangle, the Rooster forms a formidable triad with the Ox and Snake — an alliance of concentrated Yin energy that channels endurance, intuition, and precision into partnerships of quiet, devastating effectiveness. The Ox provides the immovable Earth foundation that stabilizes the Rooster's exacting nature, while the Snake contributes the intuitive depth that softens the Rooster's analytical edge with perceptive warmth. Together, this Yin Metal–Earth–Fire triangle operates with the efficiency of a master forge — each element performing its essential function without excess or waste.\n\nThe Liu He (Secret Friend) bond between Rooster and Dragon represents one of the zodiac's most complementary pairings. The Dragon's Yang Earth grandeur and the Rooster's Yin Metal precision create a partnership where vision meets execution — the Dragon dreams the empire, the Rooster builds the systems that sustain it. Their secret friendship operates in the realm of mutual enhancement: the Dragon's expansive ambition gives the Rooster's precision a worthy canvas, while the Rooster's meticulous attention to detail gives the Dragon's grand designs structural integrity.\n\nThe Chong (Clash) relationship between Rooster and Rabbit reveals the fundamental tension between Yin Metal and Yin Wood — between the Rooster's insistence on observable, measurable truth and the Rabbit's cultivation of diplomatic harmony and aesthetic grace. The Rooster's candor can feel brutal to the Rabbit's refined sensibilities, while the Rabbit's indirect communication strikes the Rooster as evasive and dishonest. Yet this axis holds profound transformative potential: the Rooster teaches the Rabbit that grace without honesty is merely avoidance, while the Rabbit teaches the Rooster that truth without gentleness is merely aggression.\n\nThe Rooster approaches relationships with the same exacting attention it brings to all things — cataloguing qualities, measuring reliability, and investing its considerable loyalty only where its standards are met. Once committed, the Rooster's devotion is fierce and operational: it shows love not through sentiment but through service, maintaining the systems and structures that allow shared life to function with the precision the Rooster considers a form of devotion.",

  compatibilityNotes: {
    Ox:
      "A San He alliance of deep structural resonance. The Ox's Earth nurtures the Rooster's Metal in the Sheng cycle, creating a partnership where the Rooster's exacting standards are met by the Ox's inexhaustible patience and steady provision. Both share a preference for substance over spectacle and reliability over improvisation. The Ox grounds the Rooster's occasional nervous energy, while the Rooster sharpens the Ox's broad determination into focused efficiency — a partnership that builds empires through quiet, compounding effort.",
    Snake:
      "The third pillar of the Yin harmony triad. The Snake's Yin Fire provides the transformative warmth that prevents the Rooster's Metal from becoming brittle — tempering precision with intuition and enriching analysis with perceptive depth. Where the Rooster catalogues surface detail, the Snake reads the pattern beneath, and their combined intelligence covers both the visible and the hidden. Their shared appreciation for elegance, competence, and strategic restraint creates a partnership of exceptional refinement.",
    Dragon:
      "The Liu He (Secret Friend) bond. The Dragon's Yang Earth magnificence and the Rooster's Yin Metal precision form one of the zodiac's most productive complementary pairings. The Dragon provides the expansive vision and charismatic force that give the Rooster's detailed work meaning beyond mere correctness, while the Rooster provides the structural discipline and quality assurance that transform the Dragon's grand ambitions from fantasy into achievement. Together, they embody the principle that greatness requires both the dream and the meticulous execution.",
    Rabbit:
      "The Chong (Clash) axis. Rooster and Rabbit represent opposing expressions of Yin energy — the Rooster's hard, reflective Metal against the Rabbit's soft, yielding Wood. The Rooster's blunt honesty wounds the Rabbit's diplomatic nature; the Rabbit's indirect evasions frustrate the Rooster's demand for clarity. Yet this polarity contains the medicine each sign most needs: the Rooster learns from the Rabbit that truth can be delivered with grace, and the Rabbit learns from the Rooster that harmony built on unspoken resentment is no harmony at all.",
    Dog:
      "A pairing charged with mutual respect and philosophical tension. Both carry deep moral conviction — the Rooster through Metal's 义 (yì, righteousness) and the Dog through Earth's 忠 (zhōng, loyalty). Their shared commitment to principle creates a foundation of trust, but the Rooster's focus on precision can clash with the Dog's focus on justice, producing debates where both parties are right about different aspects of the same situation. When they learn to view each other as complementary moral compasses rather than competing authorities, their alliance becomes unassailable.",
    Rat:
      "An intriguing cross-elemental pairing where the Rooster's Yin Metal sharpness meets the Rat's Yang Water resourcefulness. The Rooster's Metal produces Water in the Sheng cycle, creating a natural generative flow toward the Rat — the Rooster's precision feeds the Rat's strategic adaptability. The Rat appreciates the Rooster's reliability while offering the social fluidity and opportunistic intelligence that the Rooster's more rigid approach sometimes lacks. Tension arises when the Rat's expedient shortcuts offend the Rooster's exacting standards, but mutual respect for each other's competence sustains the bond.",
  },

  careerPath:
    "The Rooster's Ba Zi profile points toward vocations where meticulous observation, systematic execution, and the courage to deliver unvarnished assessments produce measurable excellence. In traditional Chinese society, the Rooster archetype governed roles requiring 御史 (yùshǐ) qualities — the imperial censor whose sacred duty was to inspect, evaluate, and hold every level of government to exacting standards of conduct and performance.\n\nModern Rooster-aligned careers include auditing and forensic accounting, quality assurance and systems engineering, surgical medicine and diagnostic specialties, military and organizational logistics, editorial and critical work, precision manufacturing and horology, and any field where the cost of undetected error is catastrophic. The Rooster excels where attention to detail is not a preference but a prerequisite — where the difference between approximate and precise determines whether bridges stand or fall.\n\nThe Rooster's Yin Metal grants particular aptitude for evaluative professions — work that requires holding complex systems against rigorous standards and identifying where reality departs from specification. Whether inspecting infrastructure, reviewing code, editing manuscripts, or diagnosing illness, the Rooster applies its discerning eye with a thoroughness that others find exhausting to witness but invaluable to receive. The 酉 (Yǒu) hour's association with harvest ensures that the Rooster's work consistently produces tangible, verifiable results — accounts balanced, errors caught, standards upheld.",

  workStyle:
    "The Rooster operates on a rhythm of structured precision — days organized into calibrated segments, tasks approached in methodical sequence, and environments maintained at a level of order that reflects the internal architecture of Yin Metal's exacting mind. Its work style embodies 一丝不苟 (yī sī bù gǒu) — 'not a single thread out of place,' the principle that excellence resides in the sum of meticulously executed details rather than in sporadic bursts of brilliance.\n\nIn team environments, the Rooster serves as the quality conscience — the member who catches errors others have normalized, enforces standards others have quietly abandoned, and holds deliverables to specifications that reflect what was promised rather than what is convenient. The Rooster communicates directly, often with a candor that less forthright colleagues find bracing but ultimately appreciate for its reliability. It may struggle in environments that prize consensus over accuracy, ambiguity over clarity, or creative chaos over structured process — not because the Rooster cannot adapt, but because its Metal nature experiences disorder as a form of dishonesty.",

  spiritualWisdom:
    "In Chinese spiritual tradition, the Rooster carries ancient associations with vigilance, cosmic timekeeping, and the moral courage to announce what is true regardless of whether the world wishes to hear it. The Rooster's connection to the Yǒu branch links it to the hour when Yang Qi begins its descent and Yin Qi ascends — the threshold moment when the day's active energy must be distilled into the evening's reflective wisdom, mirroring the alchemical process of Metal extracting pure essence from raw experience.\n\nAs a Yin Metal creature, the Rooster's spiritual path follows the Confucian principle of 修身 (xiū shēn) — self-cultivation through disciplined practice. Where the Daoist seeks liberation through spontaneity and flow, the Rooster's path demands liberation through mastery — the paradox that freedom emerges not from abandoning structure but from perfecting it until it becomes effortless. The Rooster is naturally suited to practices that cultivate 正念 (zhèng niàn) — right mindfulness — such as precise ritual observance, calligraphic meditation where each stroke must be executed with both accuracy and spirit, and the martial arts disciplines where repetition refines movement into the state the masters call 无为而无不为 (wú wéi ér wú bù wéi) — acting without contrivance while leaving nothing undone.\n\nThe Rooster's five classical virtues — 文, 武, 勇, 仁, 信 — form a complete spiritual curriculum. Refinement (文) cultivates aesthetic sensitivity. Martial courage (武) develops the willingness to face difficulty. Bravery (勇) builds the resolve to act on conviction. Benevolence (仁) softens Metal's edge with compassion. Faithfulness (信) ensures that word and deed remain unified. The Rooster who develops all five virtues in balance achieves what Chinese tradition calls 君子 (jūnzǐ) — the noble person whose presence elevates every community it enters.",

  lifeLessons: [
    "Your eye misses nothing, but wisdom lies in choosing what deserves your voice — the master censor knows that the most powerful observation is sometimes the one withheld until the moment it can heal rather than wound.",
    "Precision is your native language, yet the deepest truths resist measurement — learn to honor what your Metal cannot weigh: the formless bonds of trust, the incalculable worth of being imperfectly loved.",
    "You adorn yourself as an act of integrity, but remember that the Yǒu hour's reckoning asks what you harvested, not how you appeared at harvest — let your radiance flow from substance, and substance will never fail to radiate.",
    "Your standards protect you from mediocrity but can exile you from intimacy — the finest blade serves best when it learns that some things are meant to be embraced, not cut.",
    "The five virtues inscribed in your nature are not achievements to display but disciplines to practice — each day the Rooster crows is an invitation to begin the cultivation again, not a declaration that it is complete.",
    "You see the flaw in every diamond, but the jeweler who refuses to set an imperfect stone will work with empty settings forever — mastery is knowing which imperfections are character and which are corruption.",
  ],

  toolkit: [
    {
      title: "Yin Metal Refinement Meditation",
      context:
        "When the mind spirals into hypercritical assessment of self or others, when every flaw demands immediate correction and the body tightens with the tension of uncorrected imperfections — moments when internal Metal generates pressure without release.",
      action:
        "Sit in a clean, ordered space with spine straight. Visualize a disc of polished silver at the heart center — cool, smooth, perfectly reflective. With each inhale, allow the disc to absorb one judgment you are holding: a criticism, an unmet standard, a catalogued failure. With each exhale, see the disc transmute that judgment into clear light that radiates outward without content. After 10 minutes, place both palms over the heart and speak aloud: '明 (míng) — I see clearly, and what I see is enough.' This practice recalibrates the Rooster's Yin Metal from compulsive evaluation to luminous acceptance.",
    },
    {
      title: "The Harvest Reckoning",
      context:
        "At natural transition points — end of week, season, project, or year — when the Rooster's cosmic accounting function can be directed constructively rather than obsessively.",
      action:
        "Draw three columns: '播种 (bō zhǒng) — What I Sowed,' '收获 (shōu huò) — What I Harvested,' and '余粮 (yú liáng) — What Remains in Reserve.' Fill each honestly, applying the Rooster's precise eye with the Yǒu hour's spirit of fair reckoning. For every shortfall noted in the Harvest column, write one sentence acknowledging the effort behind it rather than only the deficit. Close by circling three harvests you are genuinely proud of. This ritual channels the Rooster's evaluative power toward balanced accounting rather than deficit fixation.",
    },
    {
      title: "Candor Calibration Protocol",
      context:
        "Before delivering feedback, initiating a difficult conversation, or any situation where the Rooster's honest nature will encounter others' sensitivities — when truth needs a vehicle worthy of its importance.",
      action:
        "Before speaking, answer three questions in writing: What specific observation am I sharing? (fact) What is my purpose in sharing it? (intent) How can I deliver it so the listener can receive it? (craft). If the purpose is anything other than genuine helpfulness, withhold the observation. If the purpose is sound, invest as much Metal precision in the delivery as you invested in the observation itself. The Rooster's highest art is not seeing truth but speaking it in a way that builds rather than demolishes — the difference between the blade that wounds and the blade that frees.",
    },
    {
      title: "The Wu Xing Softening Cycle",
      context:
        "When feeling brittle, isolated, or trapped in perfectionist paralysis — signs that the Rooster's Yin Metal has hardened beyond productive firmness and needs elemental rebalancing.",
      action:
        "Move through the cycle with deliberate softening intent: begin with a warm bath or time near water (Water, the element Metal produces — releasing accumulated sharpness), then write or speak freely without editing (Wood, the element Metal controls — practicing release of control), followed by gentle movement in sunlight or candlelight (Fire, the element that tempers Metal — allowing transformation), then prepare or share a meal with others (Earth, the element that produces Metal — receiving nourishment). Complete the cycle by organizing one small area with calm attention (Metal, returning to your element in its balanced state). This practice prevents Yin Metal from collapsing into rigidity and restores the dynamic circulation that keeps the Rooster's precision vital rather than brittle.",
    },
    {
      title: "Five Virtues Daily Practice",
      context:
        "As a morning or evening ritual to align the Rooster's day with its highest archetypal potential — activating the five classical virtues attributed to the Rooster in Chinese tradition.",
      action:
        "Each day, choose one of the five Rooster virtues to embody with particular attention: 文 (wén) — bring refinement and beauty to one task; 武 (wǔ) — face one difficult situation with martial directness; 勇 (yǒng) — take one action that requires courage; 仁 (rén) — extend one gesture of unrequired kindness; 信 (xìn) — ensure one promise is fulfilled with absolute precision. Rotate through the cycle every five days. Over time, this practice integrates the Rooster's complete moral architecture, preventing any single virtue from overdeveloping at the expense of the others — ensuring the Rooster becomes not merely precise but noble.",
    },
  ],

  descriptionInsight:
    "You carry the ancient Metal virtue of 义 (yì) — righteousness that operates as an unerring inner compass, orienting you toward truth with the reliability of a blade finding its edge. Your Qi moves like light striking a polished mirror: instant, undistorted, revealing everything it touches with a clarity that others find both illuminating and unsparing. The Yǒu branch that governs you holds the concentrated Yin of the Metal signs — not the innovative force of the Monkey's Yang Metal but the refining precision that separates gold from dross through patient, unflinching assessment. As the only zodiac creature honored with all five classical virtues — 文, 武, 勇, 仁, 信 — you carry within you a complete moral architecture that, when cultivated in balance, produces not merely competence but nobility. Your path is the censor's path and the jeweler's path alike: not to create perfection from nothing but to perceive the perfection already latent in everything and to remove, with surgical grace, only what obscures it.",
};
