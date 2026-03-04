import type { EQDimensionContent } from "../types";

export const EMPATHY: EQDimensionContent = {
  id: "empathy",
  label: "Empathy",
  shortLabel: "Empathy",
  color: "#CC8D90",

  levels: {
    high: {
      overview: `You have an unusually direct line into other people's emotional worlds. Where most people guess at what others are feeling — or don't think to guess at all — you sense it. You pick up on the micro-shifts in tone, the hesitation before a confident statement, the energy that doesn't match the words. This isn't mind-reading. It's emotional attunement: your nervous system is wired to resonate with the emotional states of people around you.

Your empathy operates on two tracks. Cognitive empathy — understanding what someone else is feeling and why — comes easily. You can take another person's perspective almost instantly, seeing the situation through their eyes and tracing their emotional logic. Affective empathy — actually feeling with them — is equally strong. When someone is distressed, you feel the weight of it. When they're excited, you catch the lift. This dual capacity makes you remarkably effective at connection, but it also means you absorb emotional weather that isn't yours.

The practical effect is that people feel seen by you. They don't have to explain themselves exhaustively — you get it. You're the person others turn to when they need someone who understands, because your track record of emotional accuracy makes that trust feel earned. The challenge isn't connection. It's boundaries: knowing where their feelings end and yours begin, and protecting your own emotional reserves when the people around you are struggling.`,

      strengths: [
        {
          title: "Emotional Resonance",
          description: "You don't just understand others' feelings intellectually — you feel them in your body. This embodied attunement means you respond to what people actually need, not just what they say they need. Your presence alone often feels like relief to people in distress.",
          deepDive: "Affective empathy — feeling with others — is neurologically distinct from cognitive empathy. Your mirror neuron system and emotional contagion pathways are highly active, which means you literally experience echoes of others' emotional states. This isn't weakness; it's a form of social intelligence that creates genuine connection. The research shows that people with high affective empathy are better at conflict resolution, caregiving, and leadership — as long as they develop the boundary skills to prevent emotional exhaustion. Your capacity to resonate is a gift; the work is learning when to dial it down.",
        },
        {
          title: "Perspective-Taking Fluency",
          description: "You can step into another person's worldview almost instantly — their assumptions, their fears, their hopes. This makes you exceptionally good at anticipating how others will react and tailoring your communication to land well.",
          deepDive: "Cognitive empathy — understanding others' mental and emotional states — is what allows you to predict behaviour, negotiate effectively, and avoid unintentional harm. You don't need people to spell out their position because you've already modelled it. This skill is particularly valuable in cross-cultural contexts, in negotiations, and in any situation where people have different stakes. The risk is over-identifying: sometimes you need to hold your own perspective alongside theirs rather than fully adopting theirs.",
        },
        {
          title: "Compassionate Response",
          description: "Understanding and feeling lead naturally to caring action. You don't just notice when someone is struggling — you're moved to help. Your empathy translates into practical support that people actually experience as supportive.",
          deepDive: "Empathy without compassion is just data. You have both: the capacity to sense what others feel and the motivation to respond in ways that ease their experience. This combination is what makes empathy a moral and relational force rather than a purely cognitive skill. Your instinct to help is genuine — the growth edge is ensuring you're helping in ways that serve them, not just ways that reduce your own discomfort with their distress.",
        },
        {
          title: "Emotional Cue Reading",
          description: "You catch what others miss — the flicker of doubt, the suppressed anger, the joy that's trying to hide. Your sensitivity to nonverbal and paraverbal cues gives you information that never makes it into words.",
        },
      ],

      growthEdges: [
        {
          title: "Emotional Absorption",
          teaser: "You feel what others feel so intensely that it becomes hard to distinguish their distress from yours. Their pain lands in your body and stays there, depleting you without resolving anything for them.",
          fullExplanation: "High affective empathy creates a specific vulnerability: you absorb emotional states that aren't yours to carry. A colleague's anxiety becomes your anxiety. A friend's grief sits in your chest. You're not choosing this — your nervous system is doing it automatically — but the result is that you end up exhausted by other people's feelings without having actually helped them process their own.\n\nThe fix isn't to shut down your empathy. It's to add a boundary layer: the practice of emotional differentiation. Before or after an intense interaction, ask yourself: 'Whose feeling is this? Is this mine, or did I pick it up from them?' The question itself creates a cognitive gap that interrupts absorption. Over time, you can learn to feel with someone without taking their feeling into your body as your own. It's the difference between resonance and fusion.",
          premiumHook: "Learn the emotional differentiation protocol that lets you feel with others without absorbing their distress.",
        },
        {
          title: "Empathy Override",
          teaser: "Your ability to feel what others feel can override your own needs and boundaries. You prioritise their comfort over your limits because saying no feels like abandoning them emotionally.",
          fullExplanation: "When you can feel someone's disappointment, their hurt, their need — it's harder to hold a boundary. You know exactly what it costs them when you say no. That knowledge can make you say yes when you should say no, stay when you should leave, absorb when you should deflect. Your empathy becomes a liability when it overrides your self-protection.\n\nThe growth move is to treat empathy as information, not as a mandate. Feeling someone's distress doesn't obligate you to fix it. You can acknowledge their experience — 'I can see this is really hard for you' — without taking responsibility for resolving it. The most compassionate thing you can do for chronically overwhelmed people is model healthy boundaries, not join them in the overwhelm.",
          premiumHook: "Get the boundary protocol that lets you stay empathic without being overridden by others' emotional needs.",
        },
      ],

      workplaceImplications: "Your empathy is a leadership asset. You read the room accurately, anticipate how decisions will land, and create psychological safety because people feel understood. You're excellent at managing difficult conversations, giving feedback that lands, and building teams where people feel seen. The career risk is burnout: highly empathic leaders often absorb organisational stress and take on emotional labour that isn't formally part of their role. Protect your reserves. Your empathy is most valuable when you're not depleted.",

      relationshipImplications: "In close relationships, your empathy creates a depth of connection that most people never experience. Your partner, friends, and family feel genuinely known by you — you get them in ways that require less explanation. This is one of your greatest gifts.\n\nThe watchpoint: your tendency to absorb others' feelings can make you the emotional caretaker in relationships. People may rely on you to process their emotions for them, or you may find yourself exhausted by the emotional weight of those closest to you. Healthy intimacy requires that both people can hold their own feelings — your job isn't to feel for them, but to feel with them and then step back.",

      emotionalPattern: "Your emotional life is deeply interwoven with the people around you. You experience your own feelings clearly, but they're often layered with echoes of what others are feeling. This creates richness and connection, but also vulnerability to emotional contagion. Your challenge is maintaining a clear sense of self amid the emotional weather of your relationships.",

      stressTriggers: [
        "Being surrounded by distressed people with no opportunity to decompress",
        "Situations where you can feel someone's pain but can't help — helplessness amplifies absorption",
        "Environments that punish emotional expression or require emotional suppression",
      ],
      flowTriggers: [
        "Deep one-on-one conversations where mutual understanding flows both ways",
        "Helping roles — coaching, counselling, caregiving — where your empathy is the core competency",
        "Creative collaboration where emotional attunement enhances the work",
      ],

      toolkit: [
        {
          title: "The Whose-Feeling Check",
          context: "You absorb others' emotions without realising it. Differentiating yours from theirs prevents depletion.",
          action: "After any intense emotional interaction, pause for 30 seconds and ask: 'Is this feeling mine, or did I pick it up from them?' If it's theirs, imagine handing it back — not coldly, but with the recognition that their feeling is their work to do. Do this three times a day for two weeks to train the differentiation reflex.",
        },
        {
          title: "The Empathy Boundary",
          context: "Your capacity to feel with others can override your need for rest and limits.",
          action: "Before saying yes to an emotionally demanding request, ask: 'If I didn't feel their distress so acutely, would I have the capacity for this?' If the answer is no, your yes is being driven by absorption, not genuine availability. Practice saying 'I care about you, and I don't have capacity for this right now' at least once this week.",
        },
        {
          title: "The Decompression Ritual",
          context: "Empathic people need explicit practices to shed absorbed emotional weight.",
          action: "Create a 5-minute end-of-day ritual: wash your hands with the intention of washing off the day's emotional residue, or take a short walk with the explicit purpose of 'leaving work at work.' The ritual signals to your nervous system that it's safe to release what isn't yours.",
        },
      ],
    },

    moderate: {
      overview: `You have a working capacity for empathy — you can usually sense when someone is upset, understand their perspective when you make the effort, and respond with appropriate care. It's not automatic, and it's not always accurate, but it's there. You're not emotionally tone-deaf, but you're also not picking up on every subtle cue or feeling what others feel in your body. This is a solid middle ground.

Your empathy tends to work best with people you know well and in situations where the emotional signals are clear. With strangers or in ambiguous social situations, you may miss things. You can take another person's perspective when you consciously choose to — it just doesn't happen as effortlessly as it does for highly empathic people. Under stress or when you're focused on a task, your empathy bandwidth narrows, which is exactly when misunderstandings are most likely.

The good news is that empathy is trainable. Both cognitive empathy (understanding) and affective empathy (feeling with) can be developed through deliberate practice. The people who become more empathic aren't necessarily more sensitive by nature — they've learned to pay attention differently and to interpret what they notice.`,

      strengths: [
        {
          title: "Selective Attunement",
          description: "With people you care about or situations that matter to you, you can tune in. You may not feel everyone's emotional weather, but you can read the people who count. This selective capacity is often enough for strong relationships and effective collaboration.",
          deepDive: "Moderate empathy often manifests as context-dependent attunement. You're more empathic with people you're invested in, in situations where connection matters, and when you have the bandwidth to pay attention. This isn't a flaw — it's a practical allocation of emotional resources. The growth opportunity is expanding the contexts where you can access this capacity: bringing the same attunement to difficult colleagues, to people you find irritating, and to situations where you'd rather not engage.",
        },
        {
          title: "Perspective-Taking on Demand",
          description: "When you make the effort to see things from someone else's point of view, you can usually do it. You may not do it automatically, but the skill is there when you choose to use it.",
          deepDive: "Cognitive empathy is more trainable than affective empathy. You can develop your ability to understand others' mental states through deliberate practice: asking 'What might they be feeling? What would I feel in their position? What don't I know about their context?' The fact that you can do this when you try means the neural machinery exists — it just needs to be activated more routinely. The goal is to make perspective-taking a default rather than an effortful choice.",
        },
        {
          title: "Appropriate Responsiveness",
          description: "When you do notice someone is struggling, you generally respond in kind. You may not feel their pain, but you can offer support that lands. People don't experience you as cold or indifferent.",
        },
      ],

      growthEdges: [
        {
          title: "The Attention Gap",
          teaser: "Your empathy depends on whether you're paying attention. When you're focused elsewhere — on a task, on your own concerns — you miss emotional cues that would be obvious if you were looking.",
          fullExplanation: "For highly empathic people, others' emotional states have a kind of salience — they notice them without trying. For you, empathy is more effort-dependent. When your attention is elsewhere, the emotional information doesn't register. This creates blind spots: you might miss that your colleague is struggling, that your partner needed more from that conversation, that your friend's 'I'm fine' was actually a cry for support.\n\nThe intervention is building an empathy check-in habit. At key transition points — before a meeting, when someone enters the room, at the end of a conversation — pause and ask: 'What might this person be feeling right now?' You don't need to be right. The act of asking trains your attention to include emotional data that you might otherwise filter out.",
          premiumHook: "Learn the attention-based empathy protocol that expands your emotional radar without requiring constant focus.",
        },
        {
          title: "Understanding Without Feeling",
          teaser: "You can understand what someone is going through without necessarily feeling it with them. The gap between cognitive and affective empathy can make your support feel accurate but not quite warm enough.",
          fullExplanation: "Cognitive empathy — 'I understand you're upset' — and affective empathy — 'I feel the weight of this with you' — create different experiences for the person receiving support. When you have strong cognitive but moderate affective empathy, your responses can feel correct but slightly distant. You say the right things, but the person may not feel fully met. They might describe you as 'supportive but not warm' or 'helpful but not quite there.'\n\nThe growth move isn't to fake feeling — that backfires. It's to slow down and let their emotional state have more time to land in you before you respond. Instead of moving quickly to problem-solving or reassurance, try 10 seconds of silent presence. Let yourself actually receive what they're expressing. The warmth often comes from the pause, not from manufactured feeling.",
          premiumHook: "Get the presence practice that bridges cognitive understanding and affective connection.",
        },
      ],

      workplaceImplications: "At work, your moderate empathy means you generally get along well with colleagues and can collaborate effectively. You may occasionally miss that someone is struggling or misread the emotional tone of a situation — especially when you're under pressure or focused on deliverables. Your growth comes from building empathy check-ins into your routine: a quick scan of the room before meetings, a moment to consider how your message might land before sending difficult feedback.",

      relationshipImplications: "In close relationships, your empathy is sufficient for connection but may have gaps. Your partner or friends might occasionally feel that you don't quite get them, or that your support is more practical than emotional. These moments aren't relationship-breakers — they're growth opportunities. The people who love you will feel more seen when you make empathy an explicit practice rather than something you assume is happening automatically.",

      emotionalPattern: "Your emotional connection to others is present but variable. It strengthens with familiarity, attention, and intention — and fades when you're distracted, stressed, or focused elsewhere. This isn't a fixed trait; it's a skill that responds to how you direct your attention. The more you practice tuning in, the more reliably it happens.",

      stressTriggers: [
        "Situations where emotional attunement is expected but you're distracted or overloaded",
        "Conflict with people whose emotional logic you can't easily access",
        "Being told you 'don't get it' when you thought you did",
      ],
      flowTriggers: [
        "One-on-one conversations with people you're invested in",
        "Collaborative work where understanding others' perspectives improves the outcome",
        "Helping or teaching roles where your attention is naturally directed toward the other person",
      ],

      toolkit: [
        {
          title: "The Empathy Check-In",
          context: "Your empathy works when you pay attention. Building routine check-ins expands your emotional radar.",
          action: "Before three key interactions each day — a meeting, a difficult conversation, a check-in with someone close — pause for 15 seconds and ask: 'What might this person be feeling or needing right now?' Don't worry about being right. The practice trains your brain to include emotional data. Do this for 3 weeks.",
        },
        {
          title: "The 10-Second Pause",
          context: "Your support can feel accurate but slightly distant. Presence before response creates warmth.",
          action: "When someone shares something emotional with you, wait 10 seconds before responding. Don't fill the silence with reassurance or problem-solving. Let their words land. Notice what you feel in your body. Then respond. Practice this in one significant conversation per week.",
        },
        {
          title: "The Perspective Swap",
          context: "You can take others' perspectives when you try. Making it routine strengthens the skill.",
          action: "Once a day, after an interaction that had any tension or ambiguity, write down: 'If I were them, what might I be feeling? What might I need?' Spend 2 minutes on this. Over time, perspective-taking becomes faster and more automatic.",
        },
      ],
    },

    low: {
      overview: `Empathy doesn't come naturally to you. You may struggle to sense what others are feeling, find it difficult to take perspectives that differ from your own, or experience other people's emotions as abstract information rather than something you feel. This isn't a character flaw — it's a wiring difference. Some people's nervous systems are built for high emotional attunement; yours isn't. The result is that you can miss social and emotional cues that others find obvious, and the people around you may experience you as distant, unresponsive, or hard to read.

Low empathy creates specific challenges. In relationships, people may feel that you don't understand them or that their feelings don't seem to matter to you — even when you care. At work, you might miss that a colleague is struggling, that your feedback landed badly, or that the team needs something from you that you didn't notice. These aren't failures of intention. They're gaps in perception. You're not choosing to miss things; you're simply not picking them up.

The practical path forward is skill-building. Empathy has cognitive and affective components, and both can be developed. You may never feel what others feel in your body — and that's okay — but you can learn to read cues, ask better questions, and respond in ways that land. Many people with naturally low empathy have built strong relational skills through deliberate practice.`,

      strengths: [
        {
          title: "Emotional Boundaries",
          description: "You don't absorb others' distress. When people around you are upset, it doesn't land in your body. This can be a genuine advantage in high-stress environments where emotional contagion would otherwise deplete you.",
          deepDive: "People with low affective empathy are often described as 'thick-skinned' or 'resilient' in emotionally charged situations. You can stay functional when others are falling apart. In crisis management, in conflict-heavy roles, or in caregiving contexts where emotional absorption would burn people out, your capacity to hold your own emotional ground is an asset. The goal isn't to become more absorbent — it's to add cognitive empathy so you can respond appropriately without needing to feel what they feel.",
        },
        {
          title: "Objective Decision-Making",
          description: "When emotions aren't flooding your perception, you can make decisions based on logic and evidence. You're less likely to be swayed by emotional manipulation or to over-identify with one person's distress at the expense of fairness.",
          deepDive: "Empathy can bias judgment. Highly empathic people sometimes struggle to make hard decisions — firing someone, ending a project, delivering bad news — because they feel the impact so acutely. Your lower empathy means you can hold the bigger picture when difficult choices are required. The growth edge is ensuring that your objectivity doesn't become coldness: you can make clear-headed decisions and still communicate them in ways that acknowledge the human impact.",
        },
        {
          title: "Task Focus",
          description: "You're not distracted by the emotional undertones of every interaction. In goal-oriented environments, this keeps you moving when others get sidetracked by interpersonal dynamics.",
        },
      ],

      growthEdges: [
        {
          title: "Social Blindspots",
          teaser: "You miss emotional cues that others find obvious — the hurt look, the withdrawn tone, the need that went unstated. These blindspots create friction you don't see coming.",
          fullExplanation: "When empathy doesn't come naturally, you rely on explicit communication. But most people don't spell out their feelings — they signal them through tone, body language, and what they don't say. You may not notice when you've offended someone, when your partner needed reassurance, or when a colleague was asking for help indirectly. The feedback often comes later, or never, leaving you confused about why a relationship cooled or why someone seems distant.\n\nThe intervention is to treat emotional information as data you need to actively collect rather than something that will naturally reach you. Build a habit of asking: 'How are you feeling about this?' 'What do you need from me right now?' 'Did that land the way I intended?' You won't pick it up automatically — so you have to ask. The questions themselves become your empathy.",
          premiumHook: "Get the explicit check-in protocol that compensates for low automatic empathy.",
        },
        {
          title: "Connection Difficulty",
          teaser: "People may experience you as hard to reach emotionally. They feel that you don't quite get them, or that their feelings don't seem to matter to you — even when you care.",
          fullExplanation: "Caring and empathising are different. You can care deeply about someone and still struggle to sense what they're feeling or to respond in ways that feel emotionally attuned. The person on the receiving end experiences a gap: they know you mean well, but they don't feel fully seen. Over time, this can create distance in close relationships — your partner, friends, or family may stop bringing their emotional lives to you because it doesn't feel like it lands.\n\nThe growth move is to make empathy a learned skill rather than waiting for it to become natural. Use a feelings vocabulary list. Practice reflective listening: 'It sounds like you're feeling X — is that right?' Ask what would feel supportive. You may not feel their feelings, but you can learn to acknowledge them accurately and respond in ways they experience as caring. That's often enough.",
          premiumHook: "Access the empathy skill-building protocol that creates connection without requiring you to feel what others feel.",
        },
      ],

      workplaceImplications: "At work, low empathy can create friction you don't anticipate. You might not realise that your direct feedback felt harsh, that your tone in meetings reads as dismissive, or that a struggling colleague needed you to notice. The feedback often comes indirectly — 'people find you intimidating' or 'the team doesn't feel you're approachable' — without clear examples. Building explicit empathy practices — asking how people are, checking in after difficult conversations, soliciting feedback on your communication — can bridge the gap significantly.",

      relationshipImplications: "In close relationships, low empathy creates a specific pattern: your partner or friends may feel that they have to explain their feelings exhaustively, and even then you might not fully get it. They may stop sharing because it feels like too much work. The bridge is making emotional check-ins a routine rather than relying on your ability to sense what they need. Ask. Listen. Reflect back what you heard. You may not feel it in your body, but you can learn to respond in ways that create the connection they're looking for.",

      emotionalPattern: "Your emotional life is more self-contained than interwoven with others. You experience your own feelings clearly enough, but other people's emotional states don't automatically register or resonate. This creates a kind of emotional independence — you're not easily swayed by others' moods — but it also means you have to work harder to read the relational landscape. Think of it as needing to learn a language that others seem to speak natively.",

      stressTriggers: [
        "Situations where emotional attunement is expected and you're being evaluated on it",
        "Conflict where the other person frames the issue in emotional terms you can't easily access",
        "Being told you're 'cold' or 'don't care' when you know you do",
      ],
      flowTriggers: [
        "Task-focused work where interpersonal dynamics are secondary",
        "Structured interactions with clear roles and expectations",
        "Environments where direct communication is valued over emotional nuance",
      ],

      toolkit: [
        {
          title: "The Explicit Check-In",
          context: "You won't pick up emotional cues automatically. Asking directly is your empathy workaround.",
          action: "In one significant interaction per day, ask: 'How are you feeling about this?' or 'What do you need from me right now?' Don't assume you know. Make the question routine. Track whether the answers surprise you — that's your blindspot map.",
        },
        {
          title: "The Reflective Listen",
          context: "You can acknowledge others' feelings accurately even if you don't feel them. Reflection creates connection.",
          action: "When someone shares something emotional, practice: 'It sounds like you're feeling [X]. Is that right?' Use a feelings list if you need vocabulary. The goal isn't to feel it — it's to name it accurately so they feel heard. Do this in three conversations this week.",
        },
        {
          title: "The Post-Interaction Review",
          context: "You may not catch emotional dynamics in real time, but you can learn from retrospect.",
          action: "After any interaction that had tension or ambiguity, write down: 'What might they have been feeling? What might I have missed?' Ask them directly if appropriate: 'Did that land okay?' Over time, you'll build a library of cues and patterns that compensate for low automatic empathy.",
        },
      ],
    },
  },
};
