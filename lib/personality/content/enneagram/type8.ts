import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_8: EnneagramTypeContent = {
  typeNumber: 8,
  name: "The Challenger",
  shortName: "Challenger",
  tagline: "Moves through the world with the force to protect what matters",
  color: "#A03B0F",
  center: "body",

  coreFear: "Being harmed, controlled, or violated by others — being at someone else's mercy, having your fate in hands you don't trust",
  coreDesire: "To protect yourself and determine your own course in life — to be strong enough that no one can take anything from you again",
  coreMotivation: "To be self-reliant, to prove your strength, to resist weakness, to be important in your world, to dominate your environment, to stay in control of your situation and the people in it",
  defensePattern: "Denial — denying vulnerability, weakness, and any emotional need that could be used against you. You don't just hide your soft spots from others. You hide them from yourself, pushing past pain, exhaustion, and tenderness as if they don't exist.",

  overview: `You walk into a room and the room rearranges itself. Not because you demand it — though you can — but because your energy is big enough to shift the atmosphere. You carry a kind of gravitational force that comes from absolute willingness to engage with reality as it actually is. No sugarcoating. No diplomatic evasions. No pretending the uncomfortable thing isn't happening. You see the power dynamics that everyone else is too polite or too afraid to name, and you name them. This makes you simultaneously the most trusted and most feared person in most rooms you enter.

This force comes from somewhere specific. At some point — usually early — you learned that the world is a place where the strong take from the weak. Not as a philosophy, but as a lived experience. You may have been the vulnerable one who got hurt. You may have watched someone you loved be helpless. Either way, you drew a conclusion that now operates like an operating system: I will never be at anyone's mercy again. Everything else — the intensity, the directness, the need for control, the impatience with weakness — follows from that single decision.

Your relationship with vulnerability is the key to your entire structure. You equate it with danger. Showing need, admitting fear, letting someone see you uncertain — these feel like handing someone a loaded weapon and trusting them not to pull the trigger. So you project strength at all times. You take up more space than you need. You test people — pushing them to see if they'll stand up or fold — because someone who folds under pressure can't be trusted when things get real.

The most developed Eights discover something that rewrites this equation: real strength includes the capacity to be vulnerable. The toughest thing you'll ever do isn't confronting an enemy or pushing through pain. It's letting someone see you without your armor — and staying in the room instead of converting that exposure into aggression. When you learn this, the protective force you carry becomes something far more powerful than dominance. It becomes the kind of strength that makes other people feel safe enough to be honest, to be themselves, to bring you the truth instead of the version they think you want to hear.`,

  descriptionInsight: "Your intensity isn't aggression — it's a life force that refuses to let the world be smaller, faker, or more unjust than it has to be. The challenge is learning that you can use that force to protect without needing to control, and to lead without needing to dominate.",

  strengths: [
    {
      title: "Commanding Presence",
      description: "You bring an energy to situations that cuts through paralysis, avoidance, and bureaucratic stalling. When everyone else is circling a problem, you walk straight into it. This isn't recklessness — it's a gut-level clarity about what needs to happen combined with the willingness to be the one who makes it happen. People follow you not because you demand it, but because your certainty is contagious.",
      deepDive: "Your presence operates on a somatic level — people feel it before they can articulate what they're feeling. You take up space in a way that isn't about physical size but about energetic commitment. You're fully in the room, fully engaged, fully willing to deal with whatever's actually happening. This is rare, and people respond to it viscerally. In crisis situations, you become the center of gravity. While others freeze or fragment, you accelerate — your nervous system is wired to move toward threat, not away from it. This makes you invaluable in emergencies and leadership roles, but it also means you can overwhelm quieter people who need more processing time. The growth move is learning to modulate your intensity without dampening it — turning the volume from ten to seven when the situation calls for it, without losing the signal.",
    },
    {
      title: "Radical Honesty",
      description: "You say the thing everyone is thinking but no one will say. Not to be provocative — though it can land that way — but because you genuinely don't understand the point of pretending. Dishonesty offends you at a cellular level. You'd rather have an ugly truth than a beautiful lie, and you extend that same directness to yourself: you can handle hearing hard things, and you assume others should be able to as well.",
      deepDive: "Your honesty isn't just a personality trait — it's a survival strategy that became a value. You learned early that hidden agendas are where danger lives. If someone isn't telling you the truth, they're probably planning something. So you developed a radar for inauthenticity that borders on supernatural. You can feel when someone is performing, hedging, or withholding, and it triggers your instinct to push until the real thing surfaces. This makes you the person people come to when they need someone who won't coddle them. It also means you can inadvertently bulldoze people who are being honest but need more time to articulate it. The distinction between someone who is hiding something and someone who is still finding the words can look identical to your pattern-recognition system. Learning to pause and ask before pushing is one of your most important growth edges.",
    },
    {
      title: "Protective Instinct",
      description: "You have an automatic, non-negotiable response to injustice and the exploitation of the weak. When you see someone being bullied, manipulated, or taken advantage of, something in you activates that has nothing to do with strategy or self-interest. You step in. You use your considerable force on behalf of people who can't fight for themselves. This makes you a natural champion and protector.",
      deepDive: "Your protective instinct reveals the secret at the center of the Eight structure: underneath all that armor is an enormous heart. You became strong because you know what it feels like to be powerless. You fight for others because someone should have fought for you. This is why the people closest to you — the ones who've seen past the tough exterior — describe you in terms that would surprise your adversaries: tender, generous, fiercely loyal, surprisingly gentle. The protective instinct is your greatest gift when it's directed outward at genuine injustice. It becomes problematic when it extends to controlling the people you love 'for their own good.' Protecting someone and controlling someone can look identical from the outside. The difference is whether the other person asked for your intervention — and whether you can stop when they ask you to.",
    },
    {
      title: "Decisive Action",
      description: "While others are still weighing options, you've already moved. Your gut gives you a verdict faster than most people's analytical minds can, and you trust that verdict enough to act on it. This decisiveness isn't impulsive — it's the product of a body-based intelligence that synthesizes massive amounts of information below conscious awareness and delivers a clear direction.",
    },
    {
      title: "Capacity for Intensity",
      description: "You can sustain levels of energy, confrontation, and engagement that would burn other types out in minutes. Extended negotiations, high-stakes conflicts, grueling physical challenges — these are your natural habitat. You don't just tolerate intensity; you come alive in it. Where others hit their limit and retreat, you find another gear.",
    },
  ],

  growthEdges: [
    {
      title: "The Vulnerability Equation",
      teaser: "You've built your entire identity around strength, and you've defined strength as the absence of vulnerability. This equation keeps you safe, but it also keeps you isolated in a fortress of your own making — surrounded by people who respect you but can never quite reach you.",
      fullExplanation: "Your relationship with vulnerability isn't a preference — it's an allergic reaction. When you feel tender, exposed, or needy, your system treats it as an emergency. The response is automatic: convert the vulnerability into anger, action, or control. Someone hurts your feelings? You get angry. You feel uncertain? You make a decision faster. You need someone? You push them away to prove you don't.\n\nThis mechanism was brilliant survival engineering. It got you through situations where real vulnerability would have been genuinely dangerous. The problem is that it's still running at full power in contexts where vulnerability would actually serve you — in intimate relationships, in close friendships, in the kind of deep trust that requires letting someone see you without the armor.\n\nThe people who love you most are the ones who've caught glimpses of what's under the intensity — the tenderness, the fear, the longing for a world that doesn't require constant vigilance. They're not trying to weaken you when they ask for your softness. They're asking to meet the real you. And the real you includes the parts that ache, doubt, and need. Letting those parts exist in the presence of another person isn't weakness. It's the strongest thing an Eight can do.",
    },
    {
      title: "Control as False Safety",
      teaser: "You manage your fear of being harmed by controlling your environment, your relationships, and your options. But the more you control, the more you need to control — because the world keeps generating situations that aren't under your command, and each one feels like a threat.",
      fullExplanation: "Your need for control operates on a logic that feels airtight: if I'm in charge, no one can hurt me. If I set the terms, I can't be blindsided. If I'm the strongest person in the room, I'm safe. This works — up to a point. The problem is that the point keeps moving. Today's level of control isn't enough for tomorrow's anxiety. So you expand your territory: more influence, more information, more leverage, more contingencies. You become the person who has to weigh in on every decision, who can't delegate without micromanaging, who treats other people's autonomy as a potential threat to your security.\n\nThe deeper issue is that control is a substitute for trust. You control because you don't trust — people, situations, the universe itself. And you don't trust because you were taught, through experience, that trust gets you hurt. But here's the paradox: without trust, you can never actually feel safe. Control can reduce risk, but it can't create the felt sense of security that comes from genuinely believing someone has your back.\n\nThe growth move is learning to distinguish between situations that genuinely require your control and situations where your control is anxiety management dressed up as leadership. When you can sit with uncertainty without immediately moving to dominate it, you've found something more powerful than control: peace.",
    },
    {
      title: "The Excess Pattern",
      teaser: "You do everything at full volume — work, conflict, pleasure, even rest. Moderation feels like mediocrity to you. But this lust for intensity burns through resources, relationships, and your own body faster than you realize.",
      fullExplanation: "In the Enneagram, the Eight's passion is lust — not in the purely sexual sense, but as a lust for life at maximum intensity. More food, more experience, more confrontation, more everything. You want to take a big bite out of the world and you want to feel the juice running down your chin. Subtlety feels like half-living. Moderation feels like something for people who are afraid to commit fully.\n\nThis creates a pattern of excess that's harder to see from the inside than the outside. You work sixteen-hour days and call it passion. You turn every disagreement into a full-scale confrontation and call it honesty. You push your body past its limits and call it strength. The people around you — the ones brave enough to tell you — see something different: someone running from the stillness where uncomfortable feelings live.\n\nBecause that's what the excess pattern is ultimately about. Intensity is your narcotization — it keeps you moving fast enough that the vulnerability, the grief, the tenderness never quite catch up. When you stop — truly stop — the feelings you've been outrunning arrive. And they're not the catastrophe your system predicted. They're just feelings. Human, manageable, even beautiful. The Eight who learns to be still discovers an inner world as rich as the outer one they've been conquering.",
    },
  ],

  relationshipStyle: "The Protector",
  relationshipPreview: "You bring fierce loyalty, total honesty, and an unshakeable protective instinct to your relationships. The people you love know they have someone who will go to war for them without hesitation. You don't do half-hearted bonds — when you're in, you're all the way in, and your capacity for devotion rivals your capacity for confrontation.",
  relationshipDeepDive: "Your relationship pattern reveals the central paradox of the Eight: you desperately want deep, truthful intimacy, but your defense system treats the vulnerability that intimacy requires as a mortal threat. So you test. You push. You provoke. Not consciously — it's your system's way of answering the question: can this person handle me at full intensity? Will they still be here when I'm difficult? If they fold, they weren't safe. If they push back, they might be worth trusting.\n\nThis testing can be brutal on partners who don't understand what's happening. The arguments that feel like dealbreakers to them feel like foreplay to you — a way of establishing that the connection can survive real honesty. You respect people who stand their ground. You lose respect for people who capitulate. This means your ideal partner is someone strong enough to meet your intensity without being intimidated, and secure enough not to retaliate with the kind of cruelty that would actually wound you.\n\nThe transformation in Eight relationships happens when you realize that the deepest intimacy doesn't come from testing someone's strength — it comes from showing your own weakness. When you let your partner see the fear behind the anger, the hurt behind the control, the child who decided never to be powerless again — that's when the relationship moves from two fortresses facing each other to two people actually in the same room. Your partner doesn't need to be your equal in combat. They need to be safe enough to receive the parts of you that don't fight.",

  careerHeadline: "You thrive in roles that give you autonomy, impact, and the authority to make things happen on your own terms.",
  careerDirections: [
    "Entrepreneurship and business ownership — building something that answers to your vision",
    "Executive leadership — organizations that need decisive direction and honest assessment",
    "Trial law, crisis management, or negotiation — high-stakes environments where intensity is an asset",
    "Advocacy and activism — fighting institutional injustice with systemic force",
    "First response, military leadership, or protective services — roles where physical courage meets real consequence",
  ],
  careerDeepDive: "Your career needs are non-negotiable in a way that other types can't quite understand. You need autonomy — real autonomy, not the performative kind where someone calls you empowered but still controls your decisions. You need impact — the ability to see the direct results of your effort, to move something in the world, to know that your work mattered. And you need honesty — a professional environment where people say what they mean and mean what they say.\n\nThis is why many Eights gravitate toward entrepreneurship or leadership positions. Not because of ego — though that's the easy misread — but because being in charge is the only way to guarantee that the rules make sense, that politics don't override merit, and that no one is quietly undermining you from above. You'd rather bear the full weight of a decision than share it with someone you don't trust.\n\nThe career trap for Eights is building an empire that depends entirely on your personal force. You're so capable of driving results through sheer will that you can miss the value of delegation, collaboration, and the kind of leadership that empowers others rather than directing them. The most successful Eights learn to channel their intensity into building systems and developing people — creating something that carries their values but doesn't require their presence in every room.",

  emotionalPattern: "Your emotional life is organized around a single axis: strong versus weak. Feelings that feel strong — anger, determination, protectiveness, desire — flow freely. Feelings that feel weak — sadness, fear, tenderness, need — get intercepted before they reach consciousness and converted into something your system recognizes as safe, usually anger or action.\n\nThis means your emotional range is wider than you realize but narrower than you experience. The anger you feel when someone disappoints you may actually be sadness. The irritation you feel when someone needs reassurance may actually be your own unmet need for reassurance, projected outward. The contempt you feel for weakness in others is almost certainly a reflection of how you treat weakness in yourself.\n\nThe Eights who do the deepest growth work discover an emotional world underneath the armor that is staggeringly rich. The tenderness is vast — bigger, in many ways, than the toughness. The fear is real and specific and much more manageable when it's faced directly rather than denied. The need for love, for rest, for someone to take care of you for once — these aren't weaknesses. They're the most human things about you. And they've been running the show from behind the curtain the entire time.",

  stressTriggers: [
    "Being manipulated, lied to, or having someone operate with a hidden agenda behind your back",
    "Feeling powerless, trapped, or subject to arbitrary authority you didn't choose",
    "Encountering weakness or indecision in people you depend on when the stakes are high",
  ],
  flowTriggers: [
    "Championing someone or something you believe in against real opposition",
    "Building or leading something from the ground up with full autonomy",
    "Physical intensity — exertion, competition, or anything that engages your full body",
    "Moments of genuine intimacy where someone meets your realness without flinching",
  ],

  toolkit: [
    {
      title: "The Two-Second Pause",
      context: "When someone triggers your anger or your instinct to take control, your body moves faster than your mind. The response — confrontation, escalation, dominance — is in motion before you've consciously decided anything.",
      action: "Before you speak or act, take one full breath. Not to calm down — you don't need to calm down. Just to create a gap between impulse and action. In that gap, ask: what am I actually feeling underneath the anger? Often it's hurt, fear, or disappointment — and addressing the real feeling is more effective than acting on the anger.",
    },
    {
      title: "Strength in Receiving",
      context: "You're wired to give, protect, and provide. Receiving help, comfort, or care feels uncomfortable at best and threatening at worst. But relationships where you only give and never receive aren't intimacy — they're guardianship.",
      action: "Once a day, let someone do something for you without redirecting, minimizing, or immediately reciprocating. Let the help land. Notice the discomfort. Stay with it. This builds the muscle of receptivity — the part of strength your system has been avoiding.",
    },
    {
      title: "The Body Check",
      context: "You override physical signals — pain, exhaustion, hunger, illness — the same way you override emotional vulnerability: by treating them as weaknesses to push through. This pattern creates a body that runs on willpower instead of information.",
      action: "Three times a day, stop and scan your body for ten seconds. Not to fix anything. Just to notice: what's tight, what hurts, what's tired. This reconnects you to the body's actual signals rather than the override system that's been running since childhood.",
    },
    {
      title: "The Justice Audit",
      context: "Your sense of justice is powerful and real, but it can be hijacked by your personal anger. The line between 'this is genuinely unfair' and 'this threatens my control' can blur under stress.",
      action: "When you feel the righteous anger rising, ask: would I feel this way if the same thing happened to someone else? If yes, it's likely genuine injustice and your response is appropriate. If no, it's personal — and the honest move is to own that rather than dressing personal anger in the clothes of justice.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Escalation", description: "You increase intensity — working harder, pushing more, confronting more aggressively. The response to feeling out of control is to exert more control, which amplifies the very dynamics causing the stress." },
      { stage: 2, label: "Isolation", description: "When escalation doesn't restore your sense of power, you begin to wall off. Trust contracts sharply. Everyone becomes a potential threat. The armor thickens and even allies get treated with suspicion." },
      { stage: 3, label: "Movement to Five", description: "Under prolonged stress, you take on Type 5 patterns: withdrawing into secrecy, hoarding resources and information, becoming cerebral and detached — replacing your natural gut-forward engagement with a defensive intellectualism that feels foreign to your body." },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 2 — softening your protective shell, allowing yourself to care for others from tenderness rather than duty, and discovering that vulnerability is the source of your deepest strength, not a threat to it.",
    flowTriggers: [
      "Championing a cause that genuinely matters",
      "Physical intensity with full engagement",
      "Building something with autonomy and impact",
      "Honest connection where both people show up fully",
    ],
    flowDescription: "You enter flow when your full force meets a worthy challenge — when the energy you carry has somewhere real to go and the stakes are high enough to justify the intensity you bring to everything.",
  },

  careerAlignment: {
    naturalFits: [
      "Entrepreneurship and business leadership with real autonomy",
      "Trial law, crisis management, and high-stakes negotiation",
      "Advocacy, activism, and organizational reform",
      "Protective services, military leadership, and emergency response",
    ],
    likelyDrains: [
      "Bureaucratic environments with layers of approval and no clear authority",
      "Roles requiring diplomatic restraint and constant emotional modulation",
      "Support positions where you execute someone else's vision with no input",
    ],
    careerWarning: "Watch for the one-person-empire trap: building something that runs entirely on your personal force. Sustainable power means developing leaders, not just followers.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 2 — the Helper. This means opening to tenderness, learning to receive as well as give, and discovering that real power includes the capacity to be gentle, to need, and to let others carry some of the weight.",
    areas: [
      { title: "From Control to Trust", description: "Your default is to manage every outcome. Growth means learning to release your grip — not because the world is safe, but because white-knuckling every situation costs more than the occasional loss of control. Trust is a muscle. It atrophies without use." },
      { title: "From Armor to Openness", description: "The wall you built to keep pain out also keeps love at arm's length. Growth means letting people see the tender parts — the fear, the need, the softness — without converting those feelings into anger or action." },
      { title: "From Intensity to Gentleness", description: "Your full-throttle approach to life is magnificent and exhausting. Growth means discovering that gentleness isn't weakness — it's strength that doesn't need to prove itself. The fiercest warriors are the ones who know when to put the sword down." },
    ],
  },

  heroImage: buildHeroImagePath(8),
  sectionImages: buildSectionImages(8),
};
