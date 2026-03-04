/* ------------------------------------------------------------------ */
/*  Wing content — how each wing modifies the core type                */
/* ------------------------------------------------------------------ */

export interface WingContent {
  coreType: number;
  wing: number;
  label: string;
  insight: string;
  relationshipModifier: string;
  careerModifier: string;
}

export const WING_CONTENT: Record<string, WingContent> = {
  "1w9": {
    coreType: 1, wing: 9, label: "The Idealist",
    insight: "The Nine wing softens your inner critic with a layer of patient acceptance. You pursue perfection with less rigidity and more grace — still principled, but less likely to combust over imperfection. You have a contemplative quality that other Ones lack, and your reforms tend to be gentler, more diplomatic, more concerned with long-term harmony than immediate correction.",
    relationshipModifier: "You bring a calming steadiness to relationships. Your partner gets the reliability of a One with less of the sharp-edged criticism. You may struggle to express dissatisfaction directly, instead letting resentment build quietly.",
    careerModifier: "You gravitate toward roles that combine improvement with patience — teaching, policy work, quality assurance, editorial. You're less drawn to confrontational leadership and more to quiet, principled influence.",
  },
  "1w2": {
    coreType: 1, wing: 2, label: "The Advocate",
    insight: "The Two wing channels your perfectionism toward people. You don't just want things to be right — you want them to be right for others. This makes you a passionate advocate, a tireless reformer, and occasionally a crusader who takes on other people's causes with more intensity than they would themselves.",
    relationshipModifier: "You're warm and actively involved in your partner's wellbeing, but your help comes with standards. You may correct and improve your partner while genuinely believing you're being loving — because for you, love and improvement are the same thing.",
    careerModifier: "You're drawn to helping professions with a reform element — social work, education, healthcare administration, nonprofit leadership. You want to fix systems and help people simultaneously.",
  },
  "2w1": {
    coreType: 2, wing: 1, label: "The Servant",
    insight: "The One wing gives your helpfulness a principled backbone. You don't just give — you give correctly. You have standards for how care should be delivered and you hold yourself to a moral framework that makes your generosity feel more like duty than impulse. You're less emotionally dramatic than other Twos, more controlled and purposeful in your giving.",
    relationshipModifier: "You offer steady, dependable care with clear expectations. Your love language is acts of service performed to high standards. The challenge: you may feel resentful when your sacrificial giving isn't reciprocated with equal conscientiousness.",
    careerModifier: "Teaching, nursing, ministry, counseling with a structured approach. You want to help within systems that have clear standards and measurable outcomes.",
  },
  "2w3": {
    coreType: 2, wing: 3, label: "The Host",
    insight: "The Three wing adds ambition and social polish to your giving. You don't just help — you help visibly, effectively, and in ways that earn recognition. You're charming, energetic, and skilled at reading what people need, which makes you a natural networker and community builder. The danger is losing track of whether you're giving from genuine care or from the need to be seen as generous.",
    relationshipModifier: "You bring energy, charm, and proactive care to relationships. You may over-function — doing too much, managing too much — and then feel martyred when your partner doesn't match your output.",
    careerModifier: "Event management, PR, community leadership, hospitality, sales roles that feel like service. You thrive where helping others and personal visibility overlap.",
  },
  "3w2": {
    coreType: 3, wing: 2, label: "The Charmer",
    insight: "The Two wing makes your achievement drive more personal and relational. You don't just want to succeed — you want to be loved for succeeding. You're warm, engaging, and skilled at making people feel important, which makes you a natural leader in people-facing roles. The risk is that your charm becomes a performance tool rather than genuine connection.",
    relationshipModifier: "You're attentive, generous, and energetic with partners. The shadow: you may use the relationship as another arena for achievement, measuring its success by external markers rather than emotional depth.",
    careerModifier: "Sales, leadership, politics, entertainment, coaching. Any role where personal magnetism and achievement overlap.",
  },
  "3w4": {
    coreType: 3, wing: 4, label: "The Professional",
    insight: "The Four wing pulls your achievement drive inward. You're not just chasing success — you're chasing meaningful success that reflects something true about who you are. You have a creative, introspective quality that other Threes lack, and your work often has an aesthetic dimension. The tension: you want to be admired and authentic simultaneously.",
    relationshipModifier: "You bring depth and ambition to relationships. You may struggle with the gap between the image you present and the person you are underneath, making vulnerability feel risky even in intimate contexts.",
    careerModifier: "Creative direction, architecture, artisanal entrepreneurship, branding. Roles where excellence and personal expression intersect.",
  },
  "4w3": {
    coreType: 4, wing: 3, label: "The Aristocrat",
    insight: "The Three wing adds drive and polish to your emotional depth. You don't just feel things deeply — you want to express them in ways that reach an audience. You're more competitive and image-conscious than other Fours, and you have a performative flair that helps you translate inner experience into public work. The tension: your authentic self and your performed self may not always align.",
    relationshipModifier: "You're expressive, passionate, and attentive to how the relationship looks from the outside. You may oscillate between raw vulnerability and polished presentation, leaving partners uncertain about which version is the 'real' you.",
    careerModifier: "Performing arts, creative direction, luxury branding, personal styling. Roles where emotional depth meets professional presentation.",
  },
  "4w5": {
    coreType: 4, wing: 5, label: "The Bohemian",
    insight: "The Five wing pulls your emotional intensity inward and intellectual. You're the most private of the Fours — your inner world is vast, complex, and largely hidden from view. You combine emotional depth with analytical rigor, which gives you an unusual capacity for self-understanding. The risk is total withdrawal into an inner world so rich it makes external life feel pale by comparison.",
    relationshipModifier: "You need significant alone time and intellectual respect alongside emotional intimacy. You may intellectualize feelings to maintain control, making partners feel held at a distance even during vulnerable conversations.",
    careerModifier: "Writing, research, depth psychology, documentary work, academic arts. Roles where solitary depth meets meaningful expression.",
  },
  "5w4": {
    coreType: 5, wing: 4, label: "The Iconoclast",
    insight: "The Four wing adds emotional intensity and creative vision to your analytical mind. You're not content to merely understand systems — you want to see the beauty and meaning in them. You're more artistic, more emotionally available, and more concerned with personal significance than other Fives. The tension: your need for detachment competes with your longing for depth of feeling.",
    relationshipModifier: "You bring both intellectual fascination and emotional attunement to relationships, though accessing the emotional channel often requires deliberate effort and a partner who doesn't push.",
    careerModifier: "Visionary technology, academic research with creative dimensions, writing, music composition. Roles where intellectual mastery meets creative expression.",
  },
  "5w6": {
    coreType: 5, wing: 6, label: "The Problem Solver",
    insight: "The Six wing adds loyalty, practical concern, and a focus on security to your intellectual drive. You're more grounded and socially engaged than other Fives, with a sharper awareness of potential threats and a stronger drive to build reliable systems. You test ideas against real-world risks and prefer knowledge that has defensive utility.",
    relationshipModifier: "You're more loyal and consistent than other Fives, though still needing significant autonomy. Your partner benefits from your steadfastness but may find your worst-case scenario thinking exhausting.",
    careerModifier: "Cybersecurity, engineering, systems analysis, academic research, technical consulting. Roles where deep knowledge serves practical problem-solving.",
  },
  "6w5": {
    coreType: 6, wing: 5, label: "The Defender",
    insight: "The Five wing makes you more independent, analytical, and internally resourced than other Sixes. You manage anxiety through knowledge — the more you understand a threat, the less it can surprise you. You're the systematic contingency planner, building detailed mental models of what could go wrong and how to handle it.",
    relationshipModifier: "You're a loyal, thoughtful partner who may express care through protective analysis rather than emotional warmth. Partners may need to decode your concern as love rather than pessimism.",
    careerModifier: "Information security, legal analysis, investigative journalism, risk management. Roles where thoroughness and skepticism are professional assets.",
  },
  "6w7": {
    coreType: 6, wing: 7, label: "The Buddy",
    insight: "The Seven wing adds warmth, humor, and social energy to your loyalty. You manage anxiety by building community — surrounding yourself with trusted people and using laughter to defuse tension. You're more outwardly engaging and optimistic than other Sixes, though the anxiety still runs underneath the sociable exterior.",
    relationshipModifier: "You're warm, fun, and deeply committed. You may use humor to deflect from anxiety, making it hard for partners to know when something is genuinely wrong versus being laughed off.",
    careerModifier: "Team leadership, community building, teaching, customer-facing roles. Environments where loyalty and social engagement overlap.",
  },
  "7w6": {
    coreType: 7, wing: 6, label: "The Entertainer",
    insight: "The Six wing grounds your enthusiasm with awareness of consequences and concern for others. You're more responsible, loyal, and anxiety-aware than other Sevens. You still chase experiences, but with a running background check on what could go wrong. This makes you more reliable but also more internally conflicted — part of you wants to fly, part of you needs a safety net.",
    relationshipModifier: "You bring fun, loyalty, and genuine concern for your partner's security. The tension: your need for novelty may conflict with your wing's need for stability, creating inconsistent signals.",
    careerModifier: "Entertainment, travel, event planning, marketing, education. Roles that combine variety with team connection.",
  },
  "7w8": {
    coreType: 7, wing: 8, label: "The Realist",
    insight: "The Eight wing adds assertiveness, directness, and material ambition to your enthusiasm. You don't just want experiences — you want to dominate them. You're the most forceful and entrepreneurial of the Sevens, with a big-personality energy that commands attention. Less anxious than other Sevens, more willing to confront obstacles head-on.",
    relationshipModifier: "You bring intensity, adventure, and directness to relationships. Partners may find your combined force of enthusiasm and assertiveness exhilarating but occasionally steamrolling.",
    careerModifier: "Entrepreneurship, venture capital, adventure tourism, executive leadership, media. Roles requiring both vision and force of will.",
  },
  "8w7": {
    coreType: 8, wing: 7, label: "The Maverick",
    insight: "The Seven wing adds energy, charisma, and restlessness to your intensity. You're the most outwardly dynamic of the Eights — bigger energy, louder presence, more appetite for life. You want control and stimulation simultaneously, which makes you a natural empire-builder, but also prone to overextension.",
    relationshipModifier: "You bring massive energy, protection, and adventure to relationships. The risk is dominating the relationship's emotional landscape — your big personality may leave little room for your partner's quieter needs.",
    careerModifier: "CEO, founder, political leader, entertainment executive. Roles where power, charisma, and vision converge.",
  },
  "8w9": {
    coreType: 8, wing: 9, label: "The Bear",
    insight: "The Nine wing gives your power a quiet, steady quality. You're less confrontational and more strategic than other Eights — you use your strength sparingly and precisely. You have an earthy groundedness that makes people feel safe around you, despite your capacity for intensity. The Bear doesn't roar unless necessary, but when it does, the room remembers.",
    relationshipModifier: "You're protective, steady, and surprisingly gentle in intimate contexts. Partners get the security of an Eight without the constant intensity — unless someone threatens the people you love.",
    careerModifier: "Operations leadership, executive coaching, conflict mediation, real estate, agriculture. Roles where steady power matters more than explosive energy.",
  },
  "9w8": {
    coreType: 9, wing: 8, label: "The Referee",
    insight: "The Eight wing gives you a backbone of assertion that other Nines lack. You still seek peace, but you're willing to fight for it — especially on behalf of others. You have a stubborn strength that surprises people who mistake your easygoing surface for passivity. When pushed too far, the Eight wing activates and the peacemaker becomes formidable.",
    relationshipModifier: "You're a stable, grounding presence with a hidden intensity. Partners appreciate your easygoing nature but may be startled by the force that emerges when boundaries are crossed.",
    careerModifier: "Mediation, union leadership, physical therapy, coaching, social work. Roles where strength serves peace and protection.",
  },
  "9w1": {
    coreType: 9, wing: 1, label: "The Dreamer",
    insight: "The One wing adds principled idealism to your peace-seeking nature. You have a quiet vision of how the world should be — orderly, fair, beautiful — and you work toward it in a gentle, non-confrontational way. You're more organized and morally motivated than other Nines, but your desire for harmony can make it hard to address the imperfections you clearly see.",
    relationshipModifier: "You're a gentle, principled partner who creates a harmonious home environment. The challenge: you may suppress your own frustrations to maintain peace, then express them as passive-aggressive criticism or quiet withdrawal.",
    careerModifier: "Teaching, environmental work, librarianship, counseling, administrative roles. Environments that combine order with a sense of purpose.",
  },
};
