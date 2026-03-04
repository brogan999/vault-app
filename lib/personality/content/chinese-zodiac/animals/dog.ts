import type { ChineseAnimalContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "dog";

export const DOG: ChineseAnimalContent = {
  animal: "Dog",
  name: "The Righteous Guardian",
  shortName: "The Guardian",
  tagline:
    "Where Earth Qi crystallizes into unwavering loyalty and incorruptible justice",
  color: "#626350",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  fixedElement: "Earth",
  polarity: "Yang",
  earthlyBranch: "戌 (Xū)",

  overview: `The Dog occupies the eleventh position among the twelve Di Zhi, carrying the earthly branch 戌 (Xū) and embodying the Yang expression of Earth Qi at its most vigilant and morally resolute. In the cosmological cycle, Xū governs the hours between 7:00 and 9:00 PM — the threshold of nightfall, when the last light drains from the sky and the world passes from visibility into shadow. This is the hour when the guardian takes its post. While others retreat indoors, the Dog remains at the gate, alert and faithful, standing between the known world and the uncertainties that gather in darkness. This positional symbolism is not decorative — it reveals the Dog's deepest cosmological function: to protect what is good from what would corrupt it, to hold the boundary between order and chaos with a loyalty that neither fatigue nor temptation can erode.

Within the Wu Xing framework, the Dog's fixed element of Earth (土, Tǔ) grants a Qi signature defined by stability, trustworthiness, and an almost gravitational pull toward moral center. Earth is the element of the spleen and stomach in traditional Chinese medicine — organs responsible for transformation and transportation, for receiving what enters the body and converting it into sustenance. In the Dog's temperament, this manifests as an extraordinary capacity for discernment: the ability to receive information, situations, and people and immediately sense what is genuine and what is false. The Dog's moral compass is not learned from books or imposed by external authority — it arises from the Earth element's innate capacity to distinguish nourishment from poison, truth from deception, the worthy from the counterfeit.

The Yang polarity of the Dog drives this discernment outward into action. Where the Yin Earth of the Ox (丑, Chǒu) and Goat (未, Wèi) holds and nurtures quietly, the Yang Earth of the Dog confronts. This is Earth expressed not as the patient field but as the mountain that refuses to move, the bedrock beneath the fortress, the ground that holds firm when everything above it shakes. Dog natives carry a moral authority that others recognize instinctively — not the authority of power or position but the authority of one whose integrity has been tested and found unbreakable. In Ba Zi analysis, a strong Dog pillar in the chart indicates a life shaped by themes of loyalty, justice, moral courage, and the karmic calling to stand guard over what matters most, even when — especially when — the world offers easier paths.`,

  elementInteractions: {
    Wood: "Wood controls Earth in the Wu Xing restraining cycle (木克土, Mù Kè Tǔ), meaning Wood energies challenge and reshape the Dog's foundational stability. When Wood is prominent in a Dog's Ba Zi chart, the native develops greater flexibility and vision, learning to grow beyond rigid moral positions into a more expansive understanding of justice. This interaction teaches the Dog that righteousness must include compassion for human complexity — like tree roots breaking through compacted soil, Wood Qi opens the Dog's Earth to new possibilities without destroying its essential solidity.",
    Fire: "Fire is the Dog's mother in the Wu Xing generative cycle (火生土, Huǒ Shēng Tǔ), nourishing and strengthening Earth Qi at its deepest foundation. When Fire energy enters the Dog's chart, warmth floods into the native's often austere moral constitution, transforming stern duty into passionate devotion and cold justice into heartfelt advocacy. The Dog with strong Fire influence radiates an infectious warmth that draws others close, their loyalty becoming not merely reliable but genuinely inspiring — the hearth fire around which an entire community gathers for safety and belonging.",
    Earth: "Additional Earth energy in the Dog's chart amplifies the native's already formidable qualities of steadfastness and moral conviction. The Dog becomes an immovable force of principle, a living embodiment of 信 (Xìn) — faithfulness and trustworthiness — that neither pressure nor reward can compromise. However, excessive Earth without counterbalancing elements risks rigidity: the mountain that cannot be moved is also the mountain that cannot adapt. The wisest Dog cultivates awareness of when their Earth Qi serves as a necessary anchor and when it has calcified into stubbornness that isolates them from the very people they seek to protect.",
    Metal: "Earth generates Metal in the Wu Xing productive cycle (土生金, Tǔ Shēng Jīn), meaning the Dog naturally feeds and strengthens Metal Qi through its own vital essence. This relationship grants Dog natives an instinct for precision and discernment that sharpens their moral judgments into something almost surgical — the ability to cut through confusion and identify the essential truth of a situation. When Metal is prominent in the Dog's chart, the native develops a keen analytical mind that serves their protective instincts, turning raw loyalty into strategic guardianship.",
    Water: "Water drains Earth in the Wu Xing exhaustive cycle, requiring the Dog to expend Qi to manage Water's fluid, unpredictable influence. Emotionally, Water challenges the Dog's preference for clear moral categories by introducing ambiguity, depth, and the recognition that truth sometimes lives in paradox rather than certainty. The Dog with Water influence in their chart develops greater emotional intelligence and intuitive perception, learning to sense what lies beneath surfaces rather than judging only what is visible. This interaction, though initially uncomfortable, ultimately deepens the Dog's capacity for wisdom beyond mere righteousness.",
  },

  coreEnergies: [
    {
      name: "Loyal Devotion",
      score: 95,
      description:
        "The defining Qi of the Dog — a faithfulness so deep it operates at the level of 氣 (Qì) itself, an unwavering force that binds the Dog to those they have chosen with a constancy that time, distance, and hardship cannot diminish. This is not sentimentality but Earth Qi in its most enduring expression: the bedrock loyalty that holds firm when everything else shifts, the devotion that requires no reward because its own fulfillment is the act of standing true.",
    },
    {
      name: "Righteous Spirit",
      score: 88,
      description:
        "Yang Earth Qi grants the Dog an innate moral compass calibrated not by social convention but by something older and deeper — the Earth element's instinctive capacity to distinguish what nourishes from what corrupts. Dog natives sense dishonesty the way a seismograph detects tremors: involuntarily, precisely, and long before the surface shows visible cracks. This righteous Qi compels them to speak truth and oppose injustice even when silence would be safer.",
    },
    {
      name: "Protective Instinct",
      score: 85,
      description:
        "The Dog's position at 戌 (Xū) — the guardian of nightfall — encodes a protective Qi that activates most powerfully when vulnerability is present. This is not the Tiger's dramatic charge into danger but a quieter, more persistent vigilance: the Qi of one who watches the perimeter while others sleep, who notices the threat before it materializes, and who positions themselves between harm and the innocent without announcement or expectation of gratitude.",
    },
    {
      name: "Honest Virtue",
      score: 80,
      description:
        "The Dog's Earth Qi produces an almost constitutional inability to sustain deception. Where other signs may shade the truth for diplomacy or advantage, the Dog experiences dishonesty as a physical dissonance — a disruption in their Qi flow that manifests as genuine discomfort. This radical honesty extends inward as well: Dog natives are among the zodiac's most rigorous self-examiners, holding themselves to the same standard of truthfulness they demand of the world.",
    },
    {
      name: "Earth Steadfastness",
      score: 72,
      description:
        "Rooted in the 土 (Tǔ) element's deep stabilizing force, the Dog possesses an endurance that outlasts crisis, disappointment, and the erosion of time. This is the Qi of mountains and plains — not flashy, not dramatic, but present in a way that reshapes the landscape through sheer persistence. Dog natives are the ones still standing when others have abandoned the cause, still faithful when the world has moved on, still holding the ground they committed to defend.",
    },
  ],

  strengths: [
    {
      title: "Incorruptible Integrity",
      description:
        "The Dog's moral foundation is not a performance or a strategy — it is the bedrock of their being, as inseparable from their nature as the Earth element itself. In a world of shifting loyalties and convenient principles, the Dog stands as a fixed point of ethical reference. Others learn to trust the Dog's judgment precisely because it cannot be purchased, intimidated, or seduced away from what is right. This quality makes Dog natives the conscience of any group they belong to.",
      deepDive:
        "In Ba Zi analysis, this integrity intensifies when the Dog's Heavenly Stem carries 戊 (Wù) — the Yang Earth stem representing the great mountain. A Wù-Xū pillar produces an individual whose moral authority feels geological in scale, immovable and ancient. The quality deepens during periods when Earth Qi is cosmologically ascendant, granting the Dog access to reserves of principled resolve that feel drawn from the land itself.",
    },
    {
      title: "Faithful Guardianship",
      description:
        "Once the Dog has accepted the role of protector — of a person, a family, an ideal, or a community — that guardianship becomes a sacred covenant. The Dog does not guard conditionally or until something more interesting appears. Their protective devotion is absolute and enduring, expressed through practical vigilance rather than grand gestures: the quiet check-in, the watchful presence at gatherings, the steady hand offered without being asked, the fierce intervention when genuine threat appears.",
      deepDive:
        "The Dog's guardianship gains cosmic resonance through its San He (三合) alliance with Tiger and Horse. This Three Harmonies triangle forms the zodiac's most formidable protective alliance — the Tiger's courage, the Horse's speed, and the Dog's unwavering loyalty create a combined force that shields whatever they collectively commit to defending.",
    },
    {
      title: "Penetrating Honesty",
      description:
        "The Dog possesses an almost oracular capacity for truth — not merely the truth of facts but the deeper truth of character, intention, and hidden motive. Their Earth Qi functions as a natural filter that separates the genuine from the fraudulent with effortless accuracy. Dog natives are the friend who tells you what you need to hear rather than what you want to hear, the colleague whose assessment you trust precisely because it is never softened for comfort.",
    },
    {
      title: "Humble Service",
      description:
        "Unlike signs that seek recognition for their contributions, the Dog's Yang Earth Qi inclines them toward service that is its own reward. They are not motivated by applause or advancement but by the deep satisfaction of knowing that their effort made something safer, more just, or more honest. This humility is not self-deprecation — it is the mountain's quiet certainty that it does not need to announce its own height to be consequential.",
      deepDive:
        "This quality of humble service connects the Dog to the Confucian virtue of 義 (Yì) — righteousness expressed through dutiful action. In Chinese cosmological thought, 義 is associated with Metal, which Earth naturally generates (土生金). The Dog's service thus carries a refining quality, improving everything it touches with quiet, persistent dedication that values substance over appearance.",
    },
    {
      title: "Emotional Steadiness Under Pressure",
      description:
        "When crisis strikes and others are swept into panic or paralysis, the Dog's Earth Qi provides a gravitational center that holds. Their emotional constitution is built for endurance, not for speed — they may not react first, but they react most reliably. In emergencies, in betrayals, in moments when the ground seems to dissolve beneath everyone's feet, the Dog remains solid, present, and functionally clearheaded, offering the stability others desperately need.",
    },
  ],

  growthEdges: [
    {
      title: "Releasing Moral Rigidity",
      teaser:
        "The Dog's powerful Earth Qi can solidify moral conviction into inflexible judgment, creating a righteousness that alienates rather than uplifts.",
      fullExplanation:
        "The Dog's fixed Earth element grants extraordinary moral clarity, but the shadow of this gift is a tendency toward absolutism — seeing the world in stark categories of right and wrong with insufficient space for the messy, contradictory reality of human experience. When Earth Qi becomes excessive without the tempering influence of Wood's flexibility or Water's depth, the Dog's principled stands can calcify into self-righteous condemnation. Relationships fracture not because the Dog is wrong in their assessment but because their delivery leaves no room for the other person's dignity. The growth work centers on cultivating what the Daoists call 容 (Róng) — the capacity to contain multitudes, to hold moral conviction alongside compassion for human frailty. In the Ba Zi cycle, periods dominated by Wood energy — particularly 寅 (Yín, Tiger) and 卯 (Mǎo, Rabbit) years — provide cosmological support for this essential softening of Earth's rigid edges.",
      premiumHook:
        "Discover which Wood and Water influences in your personal Ba Zi chart offer the greatest support for developing moral flexibility — and the specific years when this growth accelerates most powerfully.",
    },
    {
      title: "Trusting Beyond the Known",
      teaser:
        "The Dog's vigilant nature can deepen into chronic suspicion, transforming protective watchfulness into an anxious distrust that poisons new relationships before they can form.",
      fullExplanation:
        "The same Qi that makes the Dog an extraordinary guardian also makes them prone to hypervigilance — the inability to stand down from the watchtower even when no threat is present. Earth Qi's natural orientation toward stability means the Dog perceives change, unfamiliarity, and ambiguity as potential dangers rather than opportunities. New people must prove themselves through extended demonstration before the Dog grants trust, and even then, a single perceived betrayal can permanently close the gate. The growth edge lies in recognizing that excessive caution carries its own risk: the isolation of the fortress that has made itself impregnable but empty. The Liu He (六合) relationship with Rabbit offers a model — the Rabbit's gentle, diplomatic Yin Wood Qi demonstrates that openness to others need not mean vulnerability to harm, that trust extended wisely creates the very safety the Dog seeks through guardedness.",
      premiumHook:
        "Your Ba Zi chart reveals the specific elemental patterns that trigger your protective vigilance — and the relationships and periods when learning to trust creates deeper security than any fortress can provide.",
    },
    {
      title: "Embracing Lightness",
      teaser:
        "The weight of Earth Qi and the burden of moral responsibility can strip the Dog's life of joy, pleasure, and the simple delight of being alive without purpose.",
      fullExplanation:
        "The Dog's karmic assignment as guardian of the nightfall carries a hidden cost: the tendency to take on so much responsibility for others' wellbeing that their own capacity for joy atrophies. Earth Qi in excess becomes heavy — the mountain that buries rather than shelters. Dog natives often struggle to allow themselves pleasure without guilt, rest without anxiety, or celebration without the nagging sense that they should be watching for danger instead. The Wu Xing offers a remedy through Fire (火), which is Earth's mother in the generative cycle (火生土). Fire energy — warmth, spontaneity, creative exuberance — does not weaken the Dog's essential nature but renews it, the way sunlight warms stone without dissolving it. The spiritual practice for the Dog is learning that joy is not irresponsible; it is the very fuel that sustains the guardian's vigil across a lifetime.",
      premiumHook:
        "Unlock personalized practices for cultivating Fire Qi's warmth and spontaneity within your specific elemental balance — including the seasons and lunar phases when the work of embracing lightness yields the deepest transformation.",
    },
    {
      title: "Expressing Vulnerability",
      teaser:
        "The Dog's role as protector creates an expectation — internal and external — of unbreakable strength that makes honest emotional expression feel like a betrayal of duty.",
      fullExplanation:
        "Dog natives build their identity around being the one others depend on, the steady presence that never wavers. This creates a profound difficulty with emotional vulnerability: asking for help feels like abandoning their post, expressing pain feels like burdening those they are meant to shield, and admitting doubt feels like a crack in the fortress wall. Yet traditional Chinese medicine teaches that suppressed emotion stagnates Qi in the spleen and stomach — the Earth organs — creating the very instability the Dog fears most. The growth work requires the Dog to recognize that vulnerability shared with trusted others does not diminish their protective power but deepens it, creating bonds of mutual guardianship rather than one-directional sacrifice. The San He (三合) alliance with Tiger and Horse provides the safest context for this practice — these allies share the Dog's values deeply enough to receive their vulnerability without exploiting it.",
      premiumHook:
        "See how your San He and Liu He relationships activate in your personal chart — revealing the specific partnerships where expressing vulnerability amplifies rather than diminishes your protective power.",
    },
  ],

  relationships: `The Dog approaches relationships with a seriousness that reflects their Earth Qi's fundamental orientation toward permanence and truth. Love, for the Dog, is not a game or an adventure — it is a covenant, an act of choosing that, once made, becomes as binding as the earth beneath a foundation. Dog natives do not fall in love carelessly; they assess, observe, and test before committing. But when they commit, the depth and constancy of their devotion is unmatched in the zodiac. The Dog in love is fiercely protective, quietly attentive, and profoundly loyal — the partner who remembers what you said months ago, who notices when your mood shifts before you do, and who would rather endure personal suffering than betray the trust you have placed in them.

The San He (三合) alliance places the Dog in a triangle of natural harmony with the Tiger (寅, Yín) and the Horse (午, Wǔ). This Three Harmonies grouping shares the quality of forthright courage, moral conviction, and passionate loyalty — together they form the zodiac's most powerful protective triad. The Dog-Tiger connection is one of deep mutual respect: the Tiger leads with dramatic courage, and the Dog provides the unwavering support that ensures the Tiger's boldness does not become recklessness. The Dog-Horse bond crackles with shared Yang energy and a mutual love of honesty — both despise pretense, both value freedom within commitment, and both would charge into danger for each other without hesitation. In relationships between these three animals, trust is assumed rather than negotiated, because their shared values make betrayal nearly inconceivable.

The Liu He (六合) reveals the Dog's secret friend: the Rabbit (卯, Mǎo). This pairing is cosmologically significant because the Rabbit's Yin Wood Qi gently challenges and opens the Dog's Earth through the controlling cycle (木克土), but does so with such tenderness that the result is growth rather than destruction. The Rabbit softens the Dog's moral rigidity, introduces beauty and diplomacy where the Dog sees only right and wrong, and offers the gentle companionship that the Dog's vigilant heart secretly yearns for. In Ba Zi analysis, a Dog-Rabbit combination in the chart often indicates a life blessed with a relationship that teaches the Dog the revolutionary truth that they, too, deserve to be cared for.

The Chong (衝) — the direct clash — opposes the Dog with the Dragon (辰, Chén). The Xū-Chén clash is a collision of two Yang Earth forces occupying opposite poles of the zodiac, creating a fundamental tension between the Dog's humble, principled guardianship and the Dragon's magnificent, imperial ambition. The Dog sees the Dragon's grandiosity as arrogance; the Dragon sees the Dog's moral vigilance as small-minded criticism. Yet when both are mature, this opposition becomes the zodiac's most powerful dialogue between service and sovereignty, each teaching the other the dimension of Earth Qi they cannot access alone.`,

  compatibilityNotes: {
    Tiger:
      "A San He alliance of shared courage and protective devotion — the Tiger's Yang Wood Qi and the Dog's Yang Earth create a bond where bold vision meets steadfast support. The Dog provides the loyal foundation that allows the Tiger to take risks without fear of abandonment. Together they embody the complete guardian archetype: the Tiger charges forward while the Dog holds the ground.",
    Horse:
      "The third pillar of the Dog's San He triangle, the Horse shares the Dog's directness and passionate commitment to freedom. Where the Dog guards with quiet vigilance, the Horse guards through swift, decisive action. Their combined Yang energy creates partnerships of extraordinary honesty and mutual exhilaration — both despise pretense, both love deeply, and both would sacrifice comfort for the sake of what is right.",
    Rabbit:
      "The Dog's Liu He secret friend — a pairing of profound cosmological tenderness. The Rabbit's Yin Wood gently opens the Dog's Earth with a patient kindness that disarms rather than threatens, teaching the Dog that vulnerability is not weakness and that beauty is as necessary as justice. This relationship offers the Dog something rare: the experience of being softened without being diminished.",
    Dragon:
      "The Xū-Chén Chong (clash) creates the zodiac's most fundamental dialogue between humility and grandeur. Two Yang Earth forces collide across the zodiac axis, the Dog's principled watchfulness meeting the Dragon's imperial magnificence. Growth lies in recognizing that the Dragon's ambition and the Dog's service are both expressions of Earth Qi seeking to sustain the world — merely through vastly different expressions of the same elemental truth.",
    Rooster:
      "A neighboring branch relationship where the Rooster's Yin Metal, generated by the Dog's Earth (土生金), creates a natural generative bond. The Rooster's precision and analytical brilliance complement the Dog's moral instinct, creating partnerships where principled conviction is refined by exacting standards. Friction arises from the Rooster's critical nature meeting the Dog's sensitivity to perceived judgment, but mutual respect for honesty provides common ground.",
    Ox:
      "Two Earth-fixed animals sharing the deepest values of dependability, endurance, and commitment to what is real over what is glamorous. The Ox's Yin Earth complements the Dog's Yang Earth — together they form a partnership of extraordinary solidity, each reinforcing the other's steadfastness. The risk lies in mutual reinforcement of rigidity; the gift lies in a shared loyalty so deep it becomes the foundation upon which entire families and communities are built.",
  },

  careerPath: `The Dog's vocational Qi flows most powerfully through roles that demand integrity, protective service, and the willingness to hold moral ground when institutional pressures push toward compromise. In traditional Chinese society, the Dog was associated with the loyal minister who speaks truth to the emperor, the night watchman whose vigilance protects the sleeping village, and the magistrate whose judgments are trusted because they cannot be bought. The modern expression of this archetype extends to law, social work, advocacy, counseling, public service, veterinary medicine, security, education, and any domain where the capacity to remain honest and devoted under pressure is not merely valued but essential.

The Earth element's influence on the Dog's career adds a quality of reliability and practical service orientation that distinguishes the Dog professional from flashier but less consistent colleagues. Dog natives are not typically drawn to the spotlight — they are drawn to the substance behind the show, the infrastructure beneath the spectacle, the unglamorous work that actually keeps systems functioning and people safe. Their Yang polarity ensures they are not passive in this service; they actively build, organize, and defend the structures they believe in with a dedication that commands deep respect from those who work alongside them.

In the Wu Xing career framework, the Dog benefits from consciously integrating Fire (火) energy to prevent their dutiful nature from becoming joyless obligation. Fire, as Earth's mother in the generative cycle (火生土), brings warmth, creativity, and passionate engagement that transforms steady service into inspired vocation. The Dog also benefits from Metal's (金) refining influence, which sharpens their moral instincts into precise professional judgment. The most fulfilled Dog professionals are those who find work that aligns their innate sense of justice with practical daily action — roles where being honest, reliable, and protective is not merely tolerated but is the very definition of excellence.`,

  workStyle: `The Dog works with a steady, methodical devotion that prioritizes substance over speed and reliability over innovation. Their Yang Earth Qi creates a work pattern of sustained, unglamorous effort — the colleague who arrives prepared, follows through without reminders, and produces work whose quality reflects an internal standard far more exacting than any external requirement. The Dog does not cut corners, does not inflate accomplishments, and does not claim credit they have not earned. In a professional world that often rewards performance over substance, the Dog's quiet integrity is both their greatest strength and their most underappreciated virtue.

The ideal work environment for a Dog provides clear purpose, ethical leadership, and a sense of meaningful contribution to something larger than individual ambition. The Dog thrives in organizations whose stated values align with actual practice — hypocrisy in leadership is the surest way to lose a Dog's commitment, not through dramatic confrontation but through the slow withdrawal of a loyalty that was conditional only on honesty. Dog natives excel in roles that require sustained attention, principled decision-making, and the patience to build something solid over years rather than producing quick, fragile results.

The collaboration challenge for Dog natives lies in their difficulty trusting new colleagues and their tendency to carry disproportionate burdens rather than delegate to those whose commitment they have not yet verified. Their protective instinct extends to their work: they would rather overextend themselves than risk the quality of an outcome by placing it in untested hands. Learning to extend provisional trust — to let others prove themselves through action rather than requiring proof before action — is essential professional growth work. The Dog who masters this calibration discovers that their reliability inspires reciprocal dedication in others, building teams whose collective steadfastness far exceeds what any solitary guardian could sustain.`,

  spiritualWisdom: `The Dog's spiritual path is intimately connected to the Confucian understanding of 忠 (Zhōng) — loyalty — and 信 (Xìn) — trustworthiness — two virtues that the ancient sages considered foundational to human civilization itself. In the Analerta (論語, Lún Yǔ), Confucius taught that without 信, a person cannot stand; without 忠, a community cannot endure. The Dog embodies these virtues not as abstract ideals but as lived practice — their very existence is a continuous demonstration that steadfast devotion and incorruptible honesty are not naive relics of a purer age but eternal necessities that hold the human world together.

Within the Wu Xing spiritual framework, the Dog's Earth element connects to the virtue of 信 (Xìn) — faithfulness, the quality that makes promises sacred and commitments binding. This is the Dog's highest spiritual calling: to demonstrate through the unwavering consistency of their own life that trustworthiness is not weakness but the most enduring form of power. The spleen and stomach's association with Earth means that spiritual cultivation for the Dog often begins with the body — practices that strengthen the center, that stabilize digestion and the transformation of nourishment, that ground awareness in the belly's deep knowing rather than the mind's anxious circling.

The Dog's Ba Zi position at 戌 (Xū) — the hour of nightfall, the gate between the visible world and the realm of darkness — carries profound spiritual significance. The Dog is the guardian of the threshold between what is known and what is mysterious, between the day's clarity and the night's uncertainty. This guardian role reveals the Dog's deepest spiritual challenge: maintaining faith when evidence is absent, holding loyalty when reciprocity is not guaranteed, standing watch when no one acknowledges the vigil. The Buddhist concept of 布施 (Bù Shī) — selfless giving without attachment to outcome — offers the Dog a spiritual practice that transforms duty from burden into liberation. The Dog who gives without counting, who guards without requiring gratitude, who loves without demanding proof of being loved in return, discovers that their faithfulness was never a chain but the very path to freedom.`,

  lifeLessons: [
    "Your loyalty is the bedrock upon which others build their courage — honor it as the profound gift it is, but never allow it to become a chain that binds you to those who do not deserve your devotion.",
    "The guardian who never leaves the watchtower eventually forgets what they are guarding. Step down into the life you protect; let yourself be warmed by the fire you tend for others.",
    "Your Earth Qi teaches that 信 (Xìn, faithfulness) is the most enduring form of power — yet faithfulness to rigid judgments is not virtue but imprisonment. Let Wood's flexibility and Water's depth soften your certainties without dissolving your principles.",
    "The Dog-Dragon clash across the zodiac axis reveals your shadow: the ambition and self-magnificence you deny in yourself. Integrating the Dragon's sovereign confidence does not corrupt your humility — it completes it.",
    "Your San He allies — Tiger and Horse — exist to remind you that guardianship shared is guardianship multiplied. The lone sentinel is noble; the three who stand together are invincible.",
  ],

  toolkit: [
    {
      title: "Earth Center Meditation",
      context:
        "When anxiety, suspicion, or hypervigilance accumulates — particularly during periods of change or when trust has been shaken — and the Dog's protective Qi becomes a source of suffering rather than strength.",
      action:
        "Sit comfortably with both feet on the ground, hands resting on your lower abdomen over the dantian (丹田). Breathe deeply into the belly for four counts, hold for four counts, exhale for six counts. With each breath, visualize golden-brown Earth Qi gathering at your center — dense, warm, and immovable. After ten cycles, silently affirm: 'I am the ground beneath the ground. My stability does not depend on controlling what approaches — it arises from the depth of my own foundation.' This practice restores the Dog's Earth center and transforms anxious vigilance into calm, rooted awareness.",
    },
    {
      title: "Loyalty Discernment Practice",
      context:
        "Before deepening commitment to any person, cause, or obligation — when the Dog's instinct to devote themselves completely needs the refinement of conscious assessment.",
      action:
        "Write two columns on a page. In the left column, list what this person or cause has demonstrated through action (not words, not promises — verified actions only). In the right column, list what you have invested or are being asked to invest. Examine the balance with the same honesty you apply to others. The Dog's virtue of 信 (Xìn) requires reciprocity to remain healthy; loyalty given to the unworthy is not faithfulness but self-abandonment. Let your Earth Qi's discernment serve you as powerfully as it serves those you protect.",
    },
    {
      title: "Fire Qi Renewal",
      context:
        "When duty has become joyless, when the weight of responsibility has compressed the Dog's spirit into dull obligation, when you have forgotten the warmth that originally animated your devotion.",
      action:
        "Identify one activity that brings you genuine, uncomplicated pleasure — not productive pleasure, not virtuous pleasure, but simple delight. Commit to this activity for at least thirty minutes without justifying it as useful, without monitoring others' needs during it, and without guilt. Fire (火) is Earth's mother in the Wu Xing generative cycle: the warmth that creates the ground. By allowing Fire Qi to nourish your depleted Earth, you are not being irresponsible — you are replenishing the very foundation that makes your guardianship sustainable across a lifetime.",
    },
    {
      title: "San He Alliance Activation",
      context:
        "When facing a challenge that exceeds individual capacity, or when the temptation to bear all responsibility alone threatens to collapse the guardian under the weight of their own devotion.",
      action:
        "Identify your Tiger and Horse allies — the people in your life who share your values of courage, honesty, and protective commitment. Reach out with specific honesty: name the burden, describe what you need, and allow them to share the watch. The San He (三合) alliance of Tiger, Horse, and Dog is the zodiac's most powerful protective formation, but it activates only when all three contribute. Your willingness to receive help is not a failure of guardianship — it is the highest expression of the trust you have spent your life earning.",
    },
  ],

  descriptionInsight:
    "The Dog stands at the gate of nightfall in the Chinese zodiac — the eleventh Di Zhi, carrying the Yang Earth Qi of 戌 (Xū) into a world that needs its loyalty, its incorruptible honesty, and its tireless devotion to justice. Ruled by the Earth element and governed by the Yang principle, the Dog is here to guard what is precious, to speak truth when silence is easier, to remain faithful when faithfulness is unrewarded, and to demonstrate through the quiet constancy of their life that the most powerful force in the cosmos is not ambition or brilliance but the simple, unshakable commitment to stand where you said you would stand.",
};
