import type { Big5DimensionContent } from "../types";

export const AGREEABLENESS: Big5DimensionContent = {
  id: "agreeableness",
  label: "Agreeableness",
  shortLabel: "Agreeableness",
  color: "#818D59",

  levels: {
    high: {
      overview: `Your default orientation is toward other people's wellbeing. You walk into a room and your first unconscious scan isn't 'what's happening here?' or 'what do I think about this?' — it's 'is everyone okay?' This isn't a performance of kindness. It's how your perceptual system is wired: the emotional states of people around you register as primary data.

This makes you genuinely warm, cooperative, and easy to be around. People trust you quickly because they sense — correctly — that you actually care about their experience. You're the friend who remembers to ask about the job interview. The colleague who notices someone's having a bad day. The partner who adjusts their plans when they sense the other person needs something different.

The cost is specific and serious: you may not know how to want things for yourself with the same clarity and force that you want things for others. Your needs get systematically deprioritized — not suppressed exactly, but perpetually postponed. 'After everyone else is taken care of' is a condition that never actually arrives.`,

      strengths: [
        {
          title: "Emotional Attunement",
          description: "You read emotional states with accuracy that borders on clairvoyance. The colleague who says 'I'm fine' but isn't — you catch it. The friend whose smile doesn't reach their eyes — you notice. This perceptual skill makes you invaluable in any context that requires understanding people.",
          deepDive: "Your emotional attunement isn't empathy in the common sense — it's a perceptual system calibrated to detect emotional signals that most people filter out. You process micro-expressions, vocal tone, body language, and contextual cues in parallel, producing a rapid emotional read that feels like intuition but is actually high-speed pattern recognition.\n\nThis system has two modes. In healthy mode, it provides you with accurate information about other people's emotional states, which you can use (or not) as the situation requires. In unhealthy mode, it hijacks your own emotional state — you don't just detect someone's pain, you absorb it. The distinction between 'I notice they're sad' and 'I feel sad because they're sad' is the line between useful empathy and emotional codependence.\n\nDeveloping this strength means learning to maintain the detection system while building a boundary between detection and absorption. You can notice without carrying. You can care without taking responsibility.",
        },
        {
          title: "Trust Generation",
          description: "People trust you faster and more deeply than they trust most people. Not because you've earned it through demonstrated reliability (though you may have), but because your warmth signals safety at a primal level. This trust-generating capacity is a genuine asset in leadership, sales, counseling, and close relationships.",
        },
        {
          title: "Conflict De-escalation",
          description: "You naturally lower the temperature in heated situations. Not by avoiding the issue, but by creating conditions where the issue can be discussed without the emotional intensity that prevents resolution. This skill is rare and extremely valuable in organizations, families, and any group navigating disagreement.",
        },
        {
          title: "Cooperative Intelligence",
          description: "You see win-win solutions that competitive thinkers miss. Where others frame situations as zero-sum, you instinctively look for the angle where everyone gains. This isn't naivety — it's a genuine cognitive talent for finding cooperative optima that exist but aren't obvious.",
        },
      ],

      growthEdges: [
        {
          title: "The Disappearing Self",
          teaser: "You're so attuned to what other people need that you may have lost track of what you need. Ask yourself right now: what do you want? Not what should you want, not what would make someone else happy, not what's the right thing to want — what do you actually want? If there's a hesitation before the answer, that's diagnostic.",
          fullExplanation: "High Agreeableness creates a specific self-knowledge deficit: because your attention is perpetually oriented toward others, your own preferences, desires, and boundaries remain underdeveloped. You may not even realize you have strong preferences because you've spent decades automatically adjusting to others' preferences.\n\nThis shows up in three domains. First, relationships: you accommodate until resentment builds, then either explode or leave — because you never communicated what you needed (because you weren't sure what that was). Second, career: you accept roles, projects, and working conditions that don't serve you because saying no feels like letting someone down. Third, identity: your sense of self may be built around your role as a caring person rather than around your actual values, interests, and ambitions.\n\nThe practice: every morning, write down three things you want today. Not obligations. Not things others need from you. Things you want. If this exercise feels surprisingly difficult, that's not a sign you're content — it's a sign your wanting muscle has atrophied from disuse.",
          premiumHook: "Understand why your caring orientation systematically undermines your self-knowledge and get the specific practice that rebuilds the 'wanting' capacity without losing your empathetic strength.",
        },
        {
          title: "The Resentment Cycle",
          teaser: "You give freely, and then one day you realize you've been keeping score all along. The generosity that felt genuine has been quietly accumulating a debt that nobody else knows about. When the resentment finally surfaces, the people around you are blindsided because you never once indicated you wanted something in return.",
          fullExplanation: "The resentment cycle in high-Agreeableness people follows a predictable pattern: give → give more → notice the imbalance → suppress the frustration (because expressing it feels selfish) → give more to compensate for the 'selfish' feeling → frustration builds → eventually snap or withdraw.\n\nThe trigger is almost never a single event. It's an accumulation — months or years of small accommodations that individually seem trivial but collectively feel like you've been taken for granted. The cruel irony is that the people around you often had no idea you were accommodating at all, because you did it so naturally and so silently.\n\nThe fix isn't to stop giving. It's to make your giving visible and bounded. Say what you're doing: 'I'm happy to take this on — and I'll need your help with X in return.' Set limits in advance: 'I can do this for the next month, but after that I need to focus on my own project.' Express preferences before they become resentments: 'I'd actually rather do it this way — would that work for you?' Each of these is a small act of self-advocacy that prevents the silent accumulation cycle.",
          premiumHook: "Learn the exact mechanism that turns your generosity into resentment and get the communication framework that keeps giving sustainable.",
        },
      ],

      relationshipPattern: "You create emotionally safe spaces that most people crave. Partners feel heard, valued, and cared for in your presence. You adjust to their needs with a fluidity that feels effortless from the outside. The shadow: you may attract partners who take more than they give, because your accommodation sends a signal that imbalance is acceptable. Building the capacity to ask for what you need — not just accommodate what they need — is the difference between relationships that sustain you and relationships that deplete you.",

      careerImplications: "You excel in any role that requires understanding people: counseling, HR, teaching, nursing, customer success, mediation, social work, user research. You struggle in roles that require sustained competitive aggression: litigation, high-frequency trading, political campaigns. Your career risk is agreeing to roles and responsibilities that serve others' needs rather than your own development — becoming indispensable in a position that doesn't grow you.",

      emotionalPattern: "You feel other people's emotions almost as strongly as your own. This empathetic resonance is the source of your warmth and also the source of your depletion. Bad news hits you harder. Conflict drains you faster. Other people's stress becomes your stress through a contagion mechanism you may not even be aware of. Building emotional boundaries — the capacity to care without carrying — is your most important emotional skill to develop.",

      stressTriggers: [
        "Interpersonal conflict where you can't find a resolution that satisfies everyone",
        "Environments where people are treated as means rather than ends",
        "Being asked to assert your own needs at the expense of someone else's",
      ],
      flowTriggers: [
        "Collaborative work where your contribution visibly helps others",
        "One-on-one interactions where you can make a meaningful difference",
        "Creative or professional work that serves a purpose beyond yourself",
      ],

      toolkit: [
        {
          title: "The Morning Want List",
          context: "When you realize your days are entirely organized around other people's needs and you've lost track of your own",
          action: "Every morning before checking messages, write 3 things you want today. Not obligations. Not should-dos. Wants. If you can't think of 3, that's important data. Start with 1 and build. The practice isn't about getting what you want every day — it's about knowing what you want, which is the prerequisite for ever communicating it.",
        },
        {
          title: "The Preemptive Boundary",
          context: "When you feel the early signs of over-accommodation and resentment building",
          action: "Before the next favor, request, or accommodation, say: 'I can do X, but I need Y in return' or 'I can do this through [date], but after that I need to focus on my own priorities.' State the boundary before the resentment arrives, not after. The discomfort of stating the boundary is far smaller than the explosion when the cycle completes.",
        },
      ],
    },

    moderate: {
      overview: `You can be both warm and firm without experiencing either as a violation of your nature. You care about people genuinely, but you're not compelled to sacrifice your own interests to demonstrate it. This balance lets you cooperate when cooperation is productive and compete when competition is necessary — and to switch between modes without an identity crisis.

Your relationships are characterized by fairness rather than unconditional accommodation. You help people willingly, but you also track reciprocity. You forgive, but not reflexively. You cooperate, but you notice when cooperation becomes exploitation. This pragmatic empathy makes you effective in both collaborative and competitive environments.

The risk of moderate Agreeableness is that you may undervalue the strength of both poles. You're capable of the deep empathy that builds trust but may not deploy it fully. You're capable of the assertiveness that drives change but may soften it unnecessarily.`,

      strengths: [
        {
          title: "Calibrated Empathy",
          description: "You care about people without losing yourself in their problems. You can listen, understand, and help — and also draw a line when helping becomes counterproductive. This calibration makes your empathy sustainable where unconditional empathy burns out.",
        },
        {
          title: "Diplomatic Assertiveness",
          description: "You say hard things in ways that people can hear. You don't avoid conflict, but you don't seek it either. When you push back, it's with enough warmth that the other person engages rather than defends.",
        },
        {
          title: "Social Perceptiveness",
          description: "You're good at reading both the cooperative and competitive dynamics in a room. You see who's genuinely collaborating and who's performing collaboration. This dual-channel perception gives you a more accurate map of social reality than people who see through only one lens.",
        },
      ],

      growthEdges: [
        {
          title: "The Fence-Sitting Habit",
          teaser: "You can see both sides of interpersonal conflicts so clearly that you sometimes fail to take one. Your balance becomes a way of avoiding the vulnerability of choosing — and in situations that require you to stand with someone, your neutrality can feel like abandonment.",
          fullExplanation: "Moderate Agreeableness gives you genuine perspective on both cooperative and competitive dynamics. But there's a shadow: when forced to choose between empathy and assertion, you may default to a cautious middle that serves neither purpose fully.\n\nIn personal relationships, this shows up as a reluctance to fully commit to someone's side during a conflict — even when they need you to. In professional settings, it appears as hedged feedback that's too kind to be actionable or too critical to be received well.\n\nThe practice: when you notice yourself balancing between warmth and firmness, ask which one the situation actually needs. Sometimes people need your unconditional support. Sometimes they need your honest assessment. The moderate response isn't always the right one — it's just the most comfortable one.",
          premiumHook: "Learn when your balanced approach serves the relationship and when it serves your comfort — and how to tell the difference in real time.",
        },
      ],

      relationshipPattern: "You're a fair partner. You give generously but track reciprocity intuitively. You accommodate but notice when accommodation becomes one-directional. This creates stable, balanced relationships — but ones that may lack the fierce loyalty of high-Agreeableness partnerships or the electric tension of low-Agreeableness ones. The growth edge is allowing yourself to be imbalanced when the moment calls for it: fully generous without tracking, or fully assertive without softening.",

      careerImplications: "Your balanced approach works across most environments. You can collaborate and compete, lead and support, advocate and compromise. Your career advantage is versatility; your career risk is that you may not develop the reputation for either warmth or toughness that drives advancement in roles that require one clearly.",

      emotionalPattern: "You experience empathy without being overwhelmed by it. You can sit with someone's pain and also maintain your own emotional center. Your emotional boundaries are generally healthy — you care without carrying. The subtle risk is emotional efficiency: processing others' emotions quickly enough that you occasionally miss signals that deserved more attention.",

      stressTriggers: [
        "Sustained environments that require extreme accommodation or extreme assertion",
        "Interpersonal situations where there's no fair resolution available",
        "Being forced to choose between your interests and someone else's with no middle ground",
      ],
      flowTriggers: [
        "Collaborative work with fair, competent people",
        "Negotiations where creative solutions can satisfy both parties",
        "Mentoring relationships where you can be both supportive and direct",
      ],

      toolkit: [
        {
          title: "The Full-Commitment Exercise",
          context: "When someone close to you needs your full support and your instinct is to stay balanced",
          action: "For the next conversation, drop the balance. Be entirely on their side. Don't qualify, don't play devil's advocate, don't present the other perspective. Just be fully present as their ally. Notice how this feels and how they respond. Sometimes the most useful thing you can offer isn't your balanced perspective — it's your undivided support.",
        },
      ],
    },

    low: {
      overview: `You call things as you see them. Where others soften, qualify, and accommodate, you state the thing directly. This isn't cruelty — it's a cognitive orientation toward truth over comfort, results over feelings, and clarity over harmony. In a world that constantly cushions reality, your directness is both your greatest asset and your most frequent source of friction.

You evaluate situations based on merit, not on how the evaluation will make people feel. The project that isn't working is called out as not working. The person who isn't performing is told they aren't performing. The idea that's popular but wrong is challenged regardless of who proposed it. This sounds obvious, but the social cost of doing it consistently is higher than most people are willing to pay — and you pay it without much apparent distress.

The advantage is that you're genuinely useful. Organizations, relationships, and projects need people who tell the truth even when it's uncomfortable. The disadvantage is that your truth-telling style can damage the relationships that make the truth-telling possible. If people stop talking to you because your feedback is too abrasive, you lose access to the information you need to be accurate.`,

      strengths: [
        {
          title: "Unfiltered Assessment",
          description: "You see situations clearly because your perceptual system doesn't add a social-comfort filter. The same information reaches everyone; you're just the one willing to say what it means. In environments where polite fictions are expensive — medicine, engineering, finance, crisis management — this clarity saves lives, money, and time.",
          deepDive: "Your unfiltered assessment is a genuine cognitive asset, not a social deficiency. Research in organizational psychology consistently shows that teams with at least one low-Agreeableness member make better decisions — because someone is willing to voice the dissenting view, challenge the groupthink, and ask the question everyone else is avoiding.\n\nThe mechanism: your brain processes social-approval signals with lower weight than other people's brains. Where a high-Agreeableness person's evaluation of an idea is partially colored by 'who will be upset if I criticize this?', your evaluation stays closer to 'is this actually good?'. This doesn't make you more intelligent — it makes you less biased in a specific, socially useful way.\n\nThe growth edge is recognizing that your unfiltered style has a delivery problem. The content of your assessment is usually accurate. The impact of your delivery is often counterproductive. Learning to deliver the same honest content in a package that people can actually receive multiplies your effectiveness without compromising your integrity.",
        },
        {
          title: "Decisive Action",
          description: "You make hard calls without the agonizing that afflicts more accommodating people. Fire the underperformer, kill the failing project, end the unproductive meeting — you don't enjoy these decisions, but you don't avoid them either. This decisiveness is indispensable in leadership.",
        },
        {
          title: "Negotiation Power",
          description: "You're a formidable negotiator because you're comfortable with tension and you don't need the other party to like you. This lets you hold positions that more agreeable people would abandon to restore harmony.",
        },
        {
          title: "Personal Autonomy",
          description: "You don't need external validation to feel confident in your positions. This independence from others' approval gives you a stability that social-approval-seeking people lack. You know where you stand because you decided where to stand, not because someone told you.",
        },
      ],

      growthEdges: [
        {
          title: "The Feedback Blindspot",
          teaser: "People have stopped giving you honest feedback. Not because you're intimidating (though you might be), but because your directness has established a dynamic where vulnerability feels unsafe. The person who tells everyone else the truth has created an environment where no one tells them the truth.",
          fullExplanation: "Low Agreeableness creates a paradox: your commitment to honest communication inadvertently suppresses honest communication from others. Here's the mechanism: when you deliver direct feedback, people learn that you don't soften things. This is useful — they know where they stand. But it also teaches them that the emotional cost of engaging with you is high. Over time, they share less, challenge you less, and give you less of the critical feedback you'd actually benefit from.\n\nThe result: your self-model becomes increasingly outdated. You know what you think about other people, but you have decreasing information about what other people think about you. Your blind spots persist because nobody feels safe pointing them out.\n\nThe intervention: create specific, structured opportunities for people to give you honest feedback with explicit safety. Not 'my door is always open' (it isn't, emotionally). Something like: quarterly anonymous feedback surveys, a trusted advisor who commits to telling you hard truths, or a direct report you've explicitly authorized to push back. And when the feedback arrives: listen without arguing, thank them, and act on it visibly. You have to demonstrate that honesty is safe before people will risk it.",
          premiumHook: "Learn why your commitment to truth ironically creates a truth deficit in your relationships — and get the specific structures that restore the flow of honest feedback in your direction.",
        },
        {
          title: "The Relational Cost",
          teaser: "You may have a trail of relationships — professional and personal — that ended not because of a dramatic conflict but because the other person quietly concluded that being around you was too effortful. You didn't notice because you weren't tracking the relational temperature. By the time you did notice, they were already gone.",
          fullExplanation: "Low Agreeableness people tend to underestimate the relational maintenance that connections require. You evaluate relationships based on substance (mutual respect, shared goals, useful exchange), and the 'soft' aspects (checking in, remembering details, expressing appreciation, managing the other person's emotional experience of the relationship) register as either unnecessary or exhausting.\n\nOver time, this creates a pattern: relationships that start strong — people are drawn to your competence, directness, and reliability — but gradually erode as the other person accumulates small relational injuries that you never noticed or addressed. A forgotten birthday. A blunt comment that landed harder than you intended. A request for emotional support that you met with problem-solving instead of empathy.\n\nThe practice isn't to become someone you're not. It's to identify the 5-10 relationships that matter most to you and invest the minimum effective dose of relational maintenance in each: one check-in message per week, one expression of appreciation per month, one instance of choosing their comfort over your directness per interaction. This isn't performance — it's strategy. You're investing in the relational infrastructure that keeps the relationships functional.",
          premiumHook: "Understand why your relationships erode silently and get the minimum-viable maintenance protocol that keeps critical connections healthy without requiring you to become someone you're not.",
        },
      ],

      relationshipPattern: "You bring honesty, independence, and zero games to relationships. Partners know exactly where they stand. You don't manipulate, you don't passive-aggressive, and you don't play hard to get. The friction: partners who need warmth, reassurance, or accommodation may experience you as cold or uncaring — not because you don't care, but because your care is expressed through honesty and competence rather than emotional nurturing. Learning to occasionally lead with warmth instead of truth — even when it feels inefficient — is a relationship investment that pays compound interest.",

      careerImplications: "You excel in roles that reward assertiveness, objective evaluation, and decisive action: law, strategy, surgery, executive leadership, venture capital, crisis management. You struggle in roles that require sustained warmth, patient accommodation, or relationship-first approaches: counseling, primary teaching, community management. Your career risk is the ceiling that poor relational skills create at senior levels, where influence depends as much on trust as on competence.",

      emotionalPattern: "You process emotions quickly and pragmatically. You don't dwell, you don't spiral, and you don't need extensive social processing to metabolize difficult feelings. This efficiency serves you well under pressure. The risk is that you skip past emotions that contain important signals — particularly emotions about relationships, belonging, and vulnerability. Your emotional processing system may be optimized for speed at the cost of depth.",

      stressTriggers: [
        "Being forced to prioritize others' feelings over getting things done",
        "Environments that punish directness and reward political maneuvering",
        "Sustained interpersonal conflict where the other person won't engage rationally",
      ],
      flowTriggers: [
        "Competitive environments where performance is clearly measured",
        "Work that requires honest evaluation and decisive action",
        "Negotiations and strategic interactions with capable opponents",
      ],

      toolkit: [
        {
          title: "The Warmth Before Truth Practice",
          context: "When you need to give someone difficult feedback and want it to actually land instead of triggering defensiveness",
          action: "Before delivering your honest assessment, say one genuine thing you value about the person or their work. Not flattery — something real. Then deliver the feedback. Then end with what you think they're capable of. The honesty doesn't change. The frame around it does. And that frame is the difference between feedback that changes behavior and feedback that's dismissed as 'they're just being harsh.'",
        },
        {
          title: "The Relationship Audit",
          context: "When you suspect important relationships have degraded and you're not sure which ones or why",
          action: "List the 10 people most important to your professional and personal life. For each, write: when was the last time you checked in without needing something? When was the last time you expressed appreciation? If the answers are 'can't remember' for more than half, you have a maintenance deficit. Pick the 3 most critical and send a genuine message this week — not transactional, just connecting.",
        },
      ],
    },
  },
};
