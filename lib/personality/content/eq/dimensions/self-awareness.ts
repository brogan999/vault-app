import type { EQDimensionContent } from "../types";

export const SELF_AWARENESS: EQDimensionContent = {
  id: "self-awareness",
  label: "Self-Awareness",
  shortLabel: "Self-Awareness",
  color: "#328181",

  levels: {
    high: {
      overview: `You have an unusually clear window into your own emotional life. Where most people experience feelings as undifferentiated weather — good day, bad day — you can name the specific emotion, trace it to its source, and understand how it's shaping your behaviour in real time. This isn't navel-gazing. It's an operational advantage that makes you better at everything from decision-making to conflict resolution.

Your self-awareness manifests as a running internal commentary that most people simply don't have. You notice when anxiety is masquerading as irritability. You catch yourself before a bad mood colours a judgment call. You recognise when you're avoiding something because it's genuinely unimportant versus when you're avoiding it because it's uncomfortable. This level of emotional granularity means you rarely get blindsided by your own reactions — and when you do, you recover quickly because you can diagnose what happened.

The practical effect is that people trust you. Not because you're always calm — you're not — but because you own your emotional states rather than projecting them onto others. When you say "I'm frustrated with the situation, not with you," people believe you, because your track record of emotional accuracy makes that distinction credible.`,

      strengths: [
        {
          title: "Emotional Granularity",
          description: "You distinguish between closely related emotions — irritation vs. frustration vs. resentment — which means you respond to the actual feeling rather than a vague sense of 'bad.' This precision makes your emotional responses proportionate and your communication about feelings remarkably clear.",
          deepDive: "Emotional granularity is one of the strongest predictors of psychological wellbeing in the research literature. People who can differentiate their emotions with precision use more targeted regulation strategies — they don't use a sledgehammer when a scalpel is needed. Your ability to name what you feel with specificity means you rarely overreact, and when you do, you can diagnose the mismatch quickly. This skill also makes you an excellent sounding board for others, because you can help them name what they're feeling when they can't do it themselves.",
        },
        {
          title: "Decision Integrity",
          description: "You can separate how you feel from what you think, which means your decisions reflect your values rather than your mood. This doesn't make you emotionless — it makes you trustworthy, because people know your judgment isn't hostage to your last frustrating email.",
          deepDive: "The gap between feeling and deciding is where most leadership failures live. Someone feels threatened and makes a defensive decision. Someone feels excited and overcommits. Someone feels anxious and delays. Your awareness of how emotions push your thinking means you can account for the push. You still feel everything — you just don't let it drive without your permission. This is the core of what Daniel Goleman originally meant by emotional intelligence: not suppressing emotions, but using them as data rather than directives.",
        },
        {
          title: "Authentic Self-Presentation",
          description: "You know who you are — strengths, limitations, triggers, and all. This means you don't need to perform a version of yourself that doesn't exist, which makes your relationships and professional interactions genuinely real rather than strategically managed.",
          deepDive: "Authenticity in the emotional intelligence sense isn't about saying whatever you think. It's about having enough self-knowledge that you can present yourself accurately. You know your strengths well enough to deploy them confidently and your weaknesses well enough to compensate or delegate. This creates a consistency that others experience as integrity — what they see is what they get, and what they get is someone who has done the internal work to understand their own operating system.",
        },
        {
          title: "Trigger Recognition",
          description: "You can identify your emotional triggers before they fire, giving you a choice about how to respond rather than being at the mercy of automatic reactions.",
        },
      ],

      growthEdges: [
        {
          title: "Analysis Paralysis",
          teaser: "Your emotional awareness can become a hall of mirrors — you're so busy examining your feelings that you forget to actually feel them. Sometimes emotions need to be experienced, not understood.",
          fullExplanation: "There's a specific trap that highly self-aware people fall into: you mistake understanding an emotion for processing it. You notice the anger, you trace it to its source, you understand the trigger pattern, you name the underlying need — and you've done all of this so efficiently that the anger itself never actually got to do its job. Sometimes emotions need to move through your body before they move through your mind.\n\nThe fix isn't to stop analysing. It's to add a step before analysis: let the feeling land. Give it 60 seconds of pure experience — feel the heat of the anger, the weight of the sadness, the buzzing of the anxiety — before your analytical mind starts its work. The insight that follows will be richer because it's grounded in embodied experience, not just cognitive mapping.",
          premiumHook: "Learn the specific practice for letting emotions land before your analytical mind intercepts them.",
        },
        {
          title: "Empathy Assumption",
          teaser: "Because you understand your own emotions so well, you may overestimate your ability to read others. Your internal model is well-calibrated; your model of other people may not be.",
          fullExplanation: "High self-awareness creates a cognitive bias: because you're good at reading yourself, you assume you're equally good at reading others. But emotional self-awareness and empathy are different skills that develop independently. You might correctly identify that your colleague seems tense — but your assumption about why they're tense could be a projection of what would make you tense in their position.\n\nThe growth move is to treat your read on others as a hypothesis rather than a fact. Instead of 'You seem frustrated with the project timeline,' try 'I'm noticing some tension — is that about the timeline, or something else?' The shift from statement to question preserves your perceptive advantage while correcting for the projection risk.",
          premiumHook: "Get the specific framework for turning emotional reads into accurate empathy rather than sophisticated projection.",
        },
      ],

      workplaceImplications: "Your self-awareness is a leadership multiplier. You make better decisions under pressure because you can filter out emotional noise. You give more accurate feedback because you know when your assessment is data-driven versus mood-driven. You handle difficult conversations well because you can name what you're feeling without dumping it on the other person. The career risk isn't competence — it's being perceived as 'too introspective' in action-oriented cultures. Balance your inner work with visible external output.",

      relationshipImplications: "In close relationships, your self-awareness creates a kind of emotional safety that most people crave but rarely find. You can say 'I'm irritable right now and it's not about you' — and mean it. You can identify when your reaction to something your partner said is really about an old wound rather than the current situation. This ability to own your emotional process without outsourcing it to your partner is genuinely one of the most valuable things you bring to any relationship.\n\nThe watchpoint: your comfort with your own emotions can make you impatient with people who can't name theirs. Not everyone has your internal vocabulary, and waiting for someone to articulate what they feel when they genuinely can't is a form of emotional gatekeeping.",

      emotionalPattern: "Your emotional life is rich and well-mapped. You experience the full spectrum of human emotion, but with a running subtitle track that provides context and meaning. This doesn't reduce the intensity — you still feel everything — but it gives you more choice about how to respond. Your emotions inform without overwhelming, which is the core promise of emotional intelligence.",

      stressTriggers: [
        "Environments that punish emotional expression or reward emotional suppression",
        "Being unable to understand why you're feeling something — the gap between feeling and meaning",
        "People who consistently refuse to engage with their own emotional landscape",
      ],
      flowTriggers: [
        "Deep one-on-one conversations where both people are being genuinely honest",
        "Reflective practices — journaling, therapy, meditation — that deepen self-knowledge",
        "Roles that reward emotional intelligence as a core competency",
      ],

      toolkit: [
        {
          title: "The Body Scan Before Analysis",
          context: "Your mind processes emotions faster than your body. Slowing down to feel before you think creates richer emotional data.",
          action: "When you notice an emotion arising, close your eyes for 30 seconds and scan your body. Where is the feeling living? What's its texture, temperature, weight? Only after you've located the physical sensation should you start the cognitive work of naming and understanding. Do this twice a day for two weeks to retrain your default sequence.",
        },
        {
          title: "The Projection Check",
          context: "High self-awareness creates a subtle bias: assuming your read on others is as accurate as your read on yourself.",
          action: "Three times this week, when you think you know what someone else is feeling, replace your statement with a question. Instead of 'You seem frustrated,' try 'What's going on for you right now?' Track how often their answer matches your assumption. The gap is your projection calibration error.",
        },
        {
          title: "The Emotional Weather Report",
          context: "Your granular self-awareness is a gift — but only if you share it. People around you benefit from your emotional transparency.",
          action: "At the start of one meeting or conversation per day, offer a brief emotional weather report: 'I'm coming in a bit anxious about the deadline, so if I seem terse, that's why — it's not about this conversation.' This normalises emotional transparency and gives others permission to do the same.",
        },
      ],
    },

    moderate: {
      overview: `You have a working relationship with your emotions — you can usually identify what you're feeling and why, though the picture sometimes gets fuzzy under stress or when multiple emotions are competing for your attention. This is a solid foundation. You're not emotionally blind, but you're also not operating with the kind of granular precision that turns emotions into a reliable decision-making tool.

Your self-awareness tends to work best in calm conditions and with familiar emotions. You know what anger feels like, what sadness looks like, what excitement does to your body. Where it gets hazier is with subtler emotional states — the difference between disappointment and resentment, or between excitement and anxiety (which share almost identical physical signatures). Under pressure, your emotional clarity can degrade, which is exactly when you need it most.

The good news is that self-awareness is the most trainable of the five EQ dimensions. Unlike empathy or social skills, which depend partly on relational context, self-awareness is entirely within your control. Every moment of emotional noticing — even retroactive noticing — builds the neural pathways that make future awareness easier.`,

      strengths: [
        {
          title: "Functional Emotional Literacy",
          description: "You can identify the major emotional categories in yourself — anger, sadness, joy, fear, surprise — and generally trace them to their sources. This baseline literacy means you don't get completely hijacked by your feelings, even if you occasionally get surprised.",
          deepDive: "Having working emotional literacy puts you ahead of roughly half the population, who experience emotions as undifferentiated weather rather than identifiable states. Your ability to say 'I'm anxious about this presentation' rather than just 'I feel bad' means you can address the actual problem rather than flailing at vague discomfort. The growth opportunity is developing this from literacy into fluency — moving from naming the emotion after the fact to recognising it in real time.",
        },
        {
          title: "Retrospective Insight",
          description: "Even when you don't catch emotions in the moment, you're usually able to look back and understand what happened. This means you learn from emotional experiences, even if the learning is delayed.",
          deepDive: "Retrospective emotional processing is genuinely valuable — it's how most people develop self-awareness in the first place. You notice after a meeting that you were defensive, or realise the next day that what felt like anger was actually hurt. This backward-looking clarity means you're continuously updating your emotional model. The goal is to shorten the delay: from next-day to same-day to real-time recognition.",
        },
        {
          title: "Appropriate Self-Disclosure",
          description: "You share your feelings when it serves the relationship without oversharing or being opaque. People generally know where they stand with you.",
        },
      ],

      growthEdges: [
        {
          title: "The Stress Blindspot",
          teaser: "Your self-awareness degrades under pressure — exactly when you need it most. Stress narrows your emotional bandwidth, leaving you reactive when you need to be responsive.",
          fullExplanation: "Under moderate stress, you can usually maintain your emotional footing. Under high stress — deadlines, conflict, personal crises — your self-awareness narrows significantly. You default to fight-or-flight emotional patterns without the running internal commentary that usually keeps you in check.\n\nThis isn't a character flaw. It's a neurological reality: stress hormones literally reduce activity in the prefrontal cortex, which is where self-reflective processing happens. But the people who maintain emotional clarity under pressure aren't genetically different — they've trained the skill through deliberate practice.\n\nThe specific intervention: build a stress-triggered self-check. When you notice physical stress signals (tight jaw, shallow breathing, racing heart), use them as a cue to do a 10-second emotional inventory. The physical symptoms are more reliable triggers than cognitive ones because they fire even when your thinking is compromised.",
          premiumHook: "Learn the stress-triggered self-check protocol that maintains emotional clarity even under pressure.",
        },
        {
          title: "Emotional Blending",
          teaser: "You can identify single emotions clearly, but when multiple feelings overlap — angry and hurt, excited and anxious — the signal gets noisy and you default to the loudest feeling.",
          fullExplanation: "Most emotional experiences in adult life aren't single-note. They're chords: disappointment blended with relief, anger layered over fear, excitement mixed with guilt. When you experience these blends, you tend to register only the dominant emotion and miss the undertones. This means your response addresses part of what you're feeling while the rest operates below awareness.\n\nBuilding blend recognition starts with a simple practice: whenever you identify an emotion, ask 'And what else?' Force yourself to name at least two feelings in every significant emotional moment. Over time, this trains your system to process the full chord rather than just the loudest note.",
          premiumHook: "Get the full emotional blending protocol that develops multi-emotion recognition over 30 days.",
        },
      ],

      workplaceImplications: "At work, your moderate self-awareness means you generally handle yourself well but occasionally get caught off-guard by your own reactions — a surprising flash of anger in a meeting, an unexpected wave of anxiety before a presentation. These moments aren't damaging unless they become patterns. Your growth at work comes from building real-time emotional monitoring: catching the feeling before it becomes a visible reaction.",

      relationshipImplications: "In relationships, your self-awareness gives you enough insight to be a generally good partner, friend, and family member. You can usually identify when you're the problem versus when the other person is. Where you have room to grow is in the nuanced space: recognising when a reaction to your partner is really about an old wound, or when your 'fine' masks a genuine need that you haven't yet identified. Developing these subtler distinctions deepens intimacy significantly.",

      emotionalPattern: "Your emotional life has good days and foggy days. When things are calm and you have the bandwidth for reflection, your emotional insight is strong. When things speed up or get complicated, the picture blurs. This is entirely normal — and entirely improvable. Self-awareness is less like a fixed trait and more like a muscle: the more you use it, the more reliable it becomes even under load.",

      stressTriggers: [
        "Ambiguous interpersonal situations where you can't read the room or yourself clearly",
        "Being asked to explain why you reacted a certain way before you've had time to process",
        "Accumulated minor stressors that blur into a general sense of being overwhelmed",
      ],
      flowTriggers: [
        "Structured reflection time — journaling, debriefing, or quiet walks after intense experiences",
        "Conversations with people who ask good questions about your inner life",
        "Tasks that require emotional attunement — coaching, counselling, creative work",
      ],

      toolkit: [
        {
          title: "The 3-2-1 Check-In",
          context: "Building self-awareness requires regular practice, not just crisis-mode reflection.",
          action: "Three times a day (morning, midday, end of day), pause for 60 seconds and name: 3 emotions you've felt since the last check-in, 2 triggers that caused them, and 1 thing you'd handle differently with more awareness. Set phone alarms as reminders. After 3 weeks, this becomes habitual.",
        },
        {
          title: "The Stress Signature Map",
          context: "Your self-awareness degrades under pressure because you haven't mapped your stress signals.",
          action: "Over the next week, every time you feel stressed, note the physical sensation (tight shoulders, shallow breathing, stomach knot) AND the emotion underneath. After 7 days, you'll have a map of your personal stress signatures — physical cues that reliably predict specific emotional states. Use these physical cues as early warning systems.",
        },
        {
          title: "The Emotional Chord Exercise",
          context: "You tend to register only the loudest emotion in a blend. Training multi-emotion recognition deepens your awareness.",
          action: "Once a day, when you notice a strong feeling, ask 'What else am I feeling right now?' Force yourself to name at least 2 additional emotions. Write them down. Over time, this trains your system to hear the full chord rather than just the melody.",
        },
      ],
    },

    low: {
      overview: `Emotions operate in your life more as background noise than as a clear signal you can read and use. This doesn't mean you don't feel things — you absolutely do. It means there's a gap between having an emotion and recognising it, which creates a delay that affects how you respond to situations, people, and decisions. You may find yourself reacting to things and only understanding why hours or days later, or you may struggle to explain your emotional responses when asked.

Low self-awareness isn't a fixed state — it's a starting point. Many of the most emotionally intelligent people started exactly where you are and built their awareness deliberately. The brain regions responsible for emotional self-monitoring are among the most plastic in the adult brain, which means consistent practice produces measurable changes in weeks, not years.

The immediate practical impact is that your emotions influence your decisions and relationships in ways you can't always see. You might notice patterns — 'I always get into arguments with colleagues on Monday mornings' — without connecting them to the underlying emotional dynamic (perhaps weekend disconnection from work creates re-entry anxiety that manifests as irritability). Making these connections visible is the first and most transformative step in building emotional intelligence.`,

      strengths: [
        {
          title: "Action Orientation",
          description: "Without the filter of extensive emotional processing, you move quickly from experience to action. In environments that reward speed over reflection, this can be a genuine advantage.",
          deepDive: "Your tendency to act without getting caught in emotional analysis means you don't suffer from the overthinking trap that more self-aware people sometimes fall into. In crisis situations, fast execution environments, or roles that require rapid decisions under ambiguity, your lower emotional processing overhead can be an asset. The goal isn't to lose this speed — it's to add a thin layer of emotional awareness that catches the biggest errors without slowing you down.",
        },
        {
          title: "Emotional Resilience Through Non-Engagement",
          description: "Because you don't dwell on emotional states, you may recover from setbacks faster than people who process every feeling thoroughly. What looks like toughness is actually a shorter emotional engagement cycle.",
        },
        {
          title: "Pragmatic Focus",
          description: "You focus on what needs to happen rather than how everyone feels about it. In task-heavy environments, this keeps things moving.",
        },
      ],

      growthEdges: [
        {
          title: "The Blind Reaction Loop",
          teaser: "Without awareness of your emotional triggers, you repeat the same reactive patterns — the same arguments, the same avoidances, the same decisions — without understanding why.",
          fullExplanation: "When you can't see the emotion driving a behaviour, you can't change the behaviour. You only see the result: the argument happened again, the opportunity was avoided again, the relationship hit the same wall again. This creates a frustrating loop where you know something isn't working but can't identify the mechanism.\n\nThe most effective entry point isn't deep emotional archaeology — it's simple pattern recognition. Start noticing repetitions: situations that always make you uncomfortable, people who always irritate you, decisions you always avoid. These patterns are the breadcrumbs that lead back to the underlying emotions. You don't need to understand the emotion perfectly at first — you just need to start noticing that it exists.",
          premiumHook: "Get the guided pattern-recognition protocol that surfaces your blind emotional triggers in 2 weeks.",
        },
        {
          title: "Relationship Distance",
          teaser: "People around you may feel that they can't reach you emotionally — not because you don't care, but because you can't articulate what you're feeling in a way that creates connection.",
          fullExplanation: "Emotional intimacy requires emotional vocabulary. When someone asks 'How are you feeling?' and your honest answer is 'I don't know' or 'Fine,' the conversation dead-ends. Over time, this creates a distance that both parties feel but neither can solve — your partner or close friends experience you as emotionally unavailable, and you experience their frustration without understanding its source.\n\nThe intervention is simple but requires consistency: build an emotional vocabulary. Start with a feelings wheel (a visual tool that maps emotions from basic categories to specific labels). When asked how you feel, use the wheel to find a word that's at least approximately right. 'Approximately right' is enough to start — precision comes with practice.",
          premiumHook: "Access the EQ vocabulary builder that takes you from 'fine' to fluent in 30 days.",
        },
      ],

      workplaceImplications: "At work, limited self-awareness can create friction you don't see coming. You might not realise that your tone shifts when you're stressed, that your emails get shorter and sharper when you're overwhelmed, or that your body language in meetings broadcasts frustration you haven't consciously acknowledged. The feedback often comes indirectly — 'people find you intimidating' or 'the team doesn't feel psychologically safe' — without connecting to specific emotional states you could address. Building even basic emotional monitoring changes this dynamic significantly.",

      relationshipImplications: "In close relationships, limited self-awareness creates a specific pattern: your partner or friends can read your emotions better than you can. They see the frustration, the sadness, the withdrawal — but when they point it out, you genuinely don't recognise it. This creates a trust gap: they feel like you're hiding something, and you feel like they're making things up. Neither perception is accurate. The bridge is building enough emotional vocabulary that you can confirm or correct their reads, which requires recognising the emotions in the first place.",

      emotionalPattern: "Your emotional life is active but undermonitored. Emotions drive your behaviour, colour your decisions, and shape your relationships — they just do so without your explicit awareness. This isn't an intelligence or sensitivity issue. It's a monitoring issue, and monitoring can be trained. Think of it as installing an emotional dashboard in a car that's been running fine without one — the car isn't broken, but you've been driving without key instrumentation.",

      stressTriggers: [
        "Being pressured to explain or discuss your emotional state before you can identify it",
        "Interpersonal conflicts that others frame in emotional terms you can't access",
        "Situations where emotional awareness is explicitly required — therapy, deep conversations, feedback sessions",
      ],
      flowTriggers: [
        "Concrete, action-oriented tasks with clear success criteria",
        "Environments where the focus is on doing rather than feeling",
        "Physical activities that bypass cognitive processing — sports, exercise, building",
      ],

      toolkit: [
        {
          title: "The Feelings Check-In",
          context: "You can't build awareness of something you never look at. This practice creates regular touchpoints with your emotional life.",
          action: "Set three daily alarms. At each one, stop what you're doing and answer: 'What am I feeling right now?' Use a feelings wheel app if you need vocabulary support. Write the answer down. Don't analyse it — just name it. After 2 weeks of this, you'll notice emotions arising naturally between check-ins.",
        },
        {
          title: "The Body-First Approach",
          context: "When you can't identify emotions cognitively, your body is a more reliable source of information.",
          action: "When something happens that provokes any reaction — positive or negative — notice your body before your thoughts. Tight chest? That's likely anxiety or anger. Heavy limbs? Possibly sadness or fatigue. Buzzing energy? Excitement or nervousness. Use physical sensations as your emotional translator until your cognitive recognition catches up.",
        },
        {
          title: "The Pattern Journal",
          context: "You may not catch emotions in real time, but you can absolutely spot them in retrospect.",
          action: "Each evening, write down one moment from the day where you had a strong reaction. Describe what happened, what you did, and — even if it's a guess — what you might have been feeling. After 3 weeks, review for patterns. The recurring emotions are your emotional signature, and knowing them changes everything.",
        },
      ],
    },
  },
};
