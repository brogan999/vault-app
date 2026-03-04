import type { ResilienceDimensionContent } from "../types";

export const EMOTIONAL_REGULATION: ResilienceDimensionContent = {
  id: "emotional-regulation",
  label: "Emotional Regulation",
  shortLabel: "Emotional Regulation",
  color: "#916368",

  levels: {
    high: {
      overview: `You have an unusually steady internal compass when life turns turbulent. Where most people get swept into the emotional current of a crisis — panic spiralling into more panic, anger feeding on itself — you can feel the intensity without being controlled by it. This isn't emotional suppression. You feel things deeply. You've just developed the internal architecture to experience difficult emotions without letting them dictate your next move.

This shows up practically as composure under fire. When a project collapses, a relationship fractures, or a plan falls apart, you experience the full weight of the disappointment or fear — but you also maintain access to the part of your brain that can assess the situation clearly. You don't bypass the emotion. You hold it alongside your capacity for clear thinking, which is an extraordinarily rare skill.

The people around you experience this as a kind of emotional gravity. In chaotic moments, others orient toward you because your steadiness creates a pocket of calm that makes problem-solving possible. This isn't about being the stoic who doesn't flinch — it's about being the person who flinches, acknowledges the flinch, and then gets to work.`,

      strengths: [
        {
          title: "Composure Under Pressure",
          description: "When adversity hits, you maintain the ability to think clearly while fully experiencing the emotional impact. This dual-channel processing — feeling and thinking simultaneously — is the hallmark of genuine emotional regulation.",
          deepDive: "Research in affective neuroscience shows that high emotional regulators don't have smaller amygdala responses to threats — they have stronger prefrontal cortex modulation of those responses. Your brain still fires the alarm. The difference is that your executive function stays online, allowing you to choose your response rather than defaulting to fight, flight, or freeze. This is why you can comfort a panicking colleague while your own heart is racing. The panic is there; it's just not running the show.",
        },
        {
          title: "Emotional Recovery Speed",
          description: "After a setback, you return to emotional baseline faster than most people. This isn't about denying what happened — it's about processing the impact efficiently so you can redirect energy toward what comes next.",
          deepDive: "Emotional recovery speed — what researchers call 'affective chronometry' — is one of the strongest predictors of long-term resilience. It's not about how hard you fall; it's about how quickly the emotional system recalibrates afterward. Your fast recovery doesn't mean the setback didn't hurt. It means your emotional processing system is efficient: it extracts the lesson, integrates the experience, and releases the residual charge rather than looping on it indefinitely.",
        },
        {
          title: "Proportionate Response",
          description: "You match the emotional weight of your response to the actual severity of the situation. Small setbacks get small reactions. Genuine crises get the full emotional and cognitive resources they deserve. This proportionality prevents burnout from overreacting and complacency from underreacting.",
        },
        {
          title: "Emotional Containment for Others",
          description: "Your regulated presence allows others to express their distress without it escalating. You absorb emotional intensity without reflecting it back amplified, which makes you a natural anchor in teams and relationships during difficult periods.",
        },
      ],

      growthEdges: [
        {
          title: "The Stoicism Trap",
          teaser: "Your capacity for emotional regulation can slide into emotional minimisation. When you're so good at managing difficult feelings, you might start unconsciously signalling that difficult feelings are a problem to be managed rather than an experience to be had.",
          fullExplanation: "There's a subtle line between regulating emotions and dismissing them — and people who are very good at the former can cross it without noticing. You might catch yourself thinking 'I shouldn't still be upset about this' or 'This isn't worth getting emotional about.' Those thoughts aren't regulation. They're invalidation wearing regulation's clothes.\n\nThe specific risk is that your composure becomes prescriptive — not just how you handle your emotions, but an implicit standard you hold others to. Your partner's 'overreaction' to a minor setback might genuinely be proportionate to their experience, even if it wouldn't be proportionate to yours. Your colleague's anxiety about a deadline might contain valid information that your calm dismisses.\n\nThe growth move is to actively make space for emotions that feel disproportionate — both yours and others'. Sometimes the 'overreaction' is the body processing accumulated stress that has nothing to do with the current trigger. Allowing that process, rather than regulating it into submission, is the next level of emotional mastery.",
          premiumHook: "Learn the specific practice for distinguishing genuine regulation from emotional minimisation — and why the difference matters for your closest relationships.",
        },
        {
          title: "Delayed Processing",
          teaser: "You're so effective at maintaining composure in the moment that emotions sometimes queue up and surface later in unexpected ways — insomnia, irritability, physical tension — disconnected from their original source.",
          fullExplanation: "Efficient emotional regulation can create a backlog. In the moment of adversity, you process just enough emotion to respond well and defer the rest. This is adaptive — it gets you through the crisis. The problem is that 'deferred' emotions don't disappear. They go into storage, and storage has a cost.\n\nYou might notice this as an inability to relax after a difficult week, a vague sense of heaviness that you can't trace to a specific event, or physical symptoms (headaches, jaw tension, disrupted sleep) that appear after periods of high demand. These are the queued emotions making themselves known through the body because they weren't fully processed through the mind.\n\nThe practice is scheduled emotional processing — deliberately setting aside time after high-demand periods to feel what you deferred. This isn't rumination. It's intentional completion of an emotional cycle that you wisely paused but now need to finish.",
          premiumHook: "Get the scheduled processing protocol that clears emotional backlog and prevents physical symptom accumulation.",
        },
      ],

      workplaceImplications: "Your emotional regulation is a professional superpower during turbulence — restructurings, failed launches, difficult client situations. You're the person who keeps the team functional when everything else is falling apart. The risk is being over-relied upon as the emotional shock absorber. If you're always the calm one, you may never get the support you need because everyone assumes you're fine. Proactively communicating when you're stretched — even if you're managing it well — prevents this dynamic from calcifying.",

      relationshipImplications: "In close relationships, your emotional steadiness creates safety. Your partner or friends know that your reactions will be measured, that conflict won't escalate into chaos, and that you can hold space for their distress without crumbling. The watchpoint is ensuring your regulation doesn't become distance. Relationships need emotional vulnerability as much as emotional stability. Letting someone see you genuinely shaken — not as a performance of vulnerability but as an authentic moment of struggle — deepens connection in ways that composure alone cannot.",

      emotionalPattern: "You experience the full range of human emotion but with a well-developed internal governor that modulates intensity and duration. Difficult feelings arise, register, deliver their information, and release — rather than spiralling, stacking, or converting into secondary emotions. This efficient emotional metabolism means you rarely feel emotionally overwhelmed, though you occasionally need to check whether efficiency has replaced depth.",

      stressTriggers: [
        "Sustained emotional demands without recovery time — being everyone's anchor eventually depletes even a deep reservoir",
        "Situations where your composure is misread as indifference or lack of caring",
        "Cumulative minor stressors that individually don't register but collectively create a pressure you can't locate or release",
      ],
      flowTriggers: [
        "High-stakes situations that require calm, clear thinking under pressure — crises that most people find paralysing",
        "Supporting someone through a difficult emotional experience where your steadiness genuinely helps",
        "Physical practices that discharge accumulated tension — exercise, breathwork, movement",
      ],

      toolkit: [
        {
          title: "The Deferred Emotion Audit",
          context: "Your regulation efficiency creates emotional backlog. Regular audits prevent accumulation.",
          action: "At the end of each week, spend 15 minutes with a journal and this prompt: 'What did I handle well this week that I haven't fully felt yet?' Write freely about the emotional residue from managed situations. Let yourself feel what you deferred. This prevents the physical symptom cascade that comes from chronic emotional deferral.",
        },
        {
          title: "The Vulnerability Window",
          context: "Your composure can become a wall. Deliberate vulnerability strengthens your closest relationships.",
          action: "Once a week, share an unmanaged emotional moment with someone you trust. Not a crisis — just an honest 'I'm actually struggling with this' before you've processed it into composure. The goal isn't to be rescued. It's to let someone see the full process rather than just the regulated result.",
        },
        {
          title: "The Proportionality Check",
          context: "High regulators sometimes under-react to situations that deserve a bigger emotional response.",
          action: "When you notice yourself feeling calm about something that would upset most people, pause and ask: 'Am I genuinely at peace with this, or am I regulating automatically?' If it's automatic, give yourself permission to feel the unregulated version for 5 minutes. The answer to 'What am I actually feeling?' is often bigger and more useful than the regulated version.",
        },
      ],
    },

    moderate: {
      overview: `You have a functional emotional regulation system that works well under normal stress but can get overwhelmed when adversity stacks up or hits unexpectedly. In everyday difficult moments — a frustrating meeting, a minor conflict, a plan that doesn't work out — you manage your emotional response well enough to stay effective. But when the stakes are genuinely high or multiple stressors converge, you may find your composure cracking in ways that surprise you.

This is a very common and very workable position. Your emotional regulation isn't broken; it just has a lower ceiling than you'd like. Think of it as a stress buffer that handles standard loads well but runs out of capacity under peak demand. The buffer itself is sound — it just needs to be expanded.

The encouraging reality is that emotional regulation is one of the most responsive resilience dimensions to deliberate practice. Small, consistent habits compound quickly because you already have the foundational wiring — you're strengthening an existing system rather than building one from scratch.`,

      strengths: [
        {
          title: "Baseline Composure",
          description: "Under normal conditions, you maintain your emotional footing well. Daily frustrations, minor disappointments, and routine stressors don't knock you off course. This baseline steadiness is the platform you'll build higher-capacity regulation on.",
          deepDive: "Having reliable baseline composure means your emotional regulation system is fundamentally healthy — it just hasn't been stress-tested and strengthened at the upper ranges. This is analogous to having good cardiovascular fitness for daily life but not for marathon conditions. The system works; it just hasn't been trained for peak demand. The training protocol is graduated exposure: deliberately placing yourself in moderately stressful situations and practising regulation, then incrementally increasing the challenge.",
        },
        {
          title: "Post-Event Processing",
          description: "Even when you lose composure in the moment, you can usually reflect afterward, understand what happened, and extract a lesson. This retrospective capacity means each difficult experience makes you slightly better at handling the next one.",
          deepDive: "Your ability to debrief your own emotional reactions is a powerful growth engine. Many people lose composure and then avoid thinking about it — shame blocks learning. Your willingness to look back and understand the breakdown means you're continuously updating your regulation strategies. Over time, this converts reactive patterns into proactive ones: you start recognising the pre-escalation signals and intervening earlier.",
        },
        {
          title: "Selective Regulation",
          description: "You know which situations require emotional management and which ones don't. You don't waste regulation energy on trivial frustrations, which preserves capacity for situations that genuinely need it.",
        },
      ],

      growthEdges: [
        {
          title: "The Escalation Curve",
          teaser: "Once your emotional intensity crosses a certain threshold, regulation becomes much harder — and you may not recognise you've crossed it until you're already in reactive mode.",
          fullExplanation: "Emotional regulation follows a non-linear curve. Up to a certain intensity level, you can modulate your response effectively. Beyond that threshold, the emotional brain overwhelms the regulatory system and you shift from responsive to reactive. For most people with moderate regulation, this threshold is lower than they realise — they feel in control until suddenly they're not.\n\nThe key intervention is learning to recognise your pre-threshold signals: the physical and cognitive early warnings that tell you intensity is climbing toward the point of no return. Common signals include narrowing of attention (you can only focus on the threat), physical acceleration (faster heartbeat, shallower breathing), and cognitive rigidity (you lose the ability to consider alternative perspectives).\n\nOnce you can identify these pre-threshold signals, you can intervene before the tipping point — taking a break, changing your physiology through breathing, or simply naming what's happening ('I'm approaching my threshold'). This doesn't suppress the emotion; it widens the window in which regulation remains possible.",
          premiumHook: "Get the threshold-mapping protocol that identifies your specific pre-escalation signals and builds early intervention habits.",
        },
        {
          title: "Emotional Contagion Vulnerability",
          teaser: "When people around you are in emotional distress, their intensity can overwhelm your regulation — you absorb their emotional state before you can protect your own equilibrium.",
          fullExplanation: "Emotional contagion is a real neurological phenomenon — mirror neurons fire when we observe others' emotions, creating an echo of their state in our own nervous system. With moderate regulation, you can manage your own emotions well enough but may struggle when others' emotions add to the load.\n\nThis shows up predictably: you walk into a meeting where someone is angry, and within minutes you're irritable. Your partner comes home anxious, and by bedtime you're both wound up. A colleague's panic about a deadline becomes your panic. None of these are your emotions — they're absorbed.\n\nThe practice of emotional differentiation — clearly identifying 'this feeling is mine' versus 'this feeling came from someone else' — is the foundation of managing contagion. It doesn't require withdrawing from others' emotions. It requires labelling the source before the emotion integrates into your own state.",
          premiumHook: "Learn the emotional differentiation practice that protects your regulation from others' intensity without disconnecting from them.",
        },
      ],

      workplaceImplications: "At work, your moderate emotional regulation handles routine pressure well but may show cracks during peak stress — end-of-quarter pushes, difficult feedback conversations, unexpected crises. The practical impact is that colleagues see you as generally steady but occasionally volatile, which can create uncertainty about how you'll respond when it matters most. Building visible regulation habits (pausing before responding, naming your state, taking strategic breaks) signals reliability to others and buys you time when you need it.",

      relationshipImplications: "In relationships, your regulation capacity means everyday interactions feel safe and predictable, but heated conflicts can escalate beyond what you intend. You might say things you regret, withdraw more abruptly than you mean to, or react with an intensity that surprises both you and your partner. These moments don't define your relationship — but they do create micro-injuries that accumulate. Learning to call a time-out before you cross your threshold ('I need 20 minutes to calm down, then I want to continue this conversation') protects both the relationship and your self-respect.",

      emotionalPattern: "Your emotional regulation has two modes: a well-functioning everyday mode where you process and manage feelings effectively, and a high-stress mode where the system gets overwhelmed and reactions become less controlled. The gap between these modes is your growth frontier. Bridging it doesn't require becoming a different person — it requires expanding the conditions under which your existing regulation skills remain online.",

      stressTriggers: [
        "Multiple stressors converging simultaneously — any one is manageable, but the combination overwhelms your buffer",
        "Being caught off-guard by adversity — you regulate better when you can see trouble coming",
        "Emotional intensity from others when you're already managing your own stress load",
      ],
      flowTriggers: [
        "Situations where you can prepare emotionally before engaging — you regulate better with a running start",
        "Environments where taking breaks during intense periods is normalised and supported",
        "Physical outlets that help discharge emotional energy between demanding situations",
      ],

      toolkit: [
        {
          title: "The Threshold Tracker",
          context: "You need to learn where your regulation breaks down so you can intervene before it happens.",
          action: "For the next two weeks, whenever you lose composure (even slightly), rate the situation's intensity on a 1–10 scale and note what you felt physically just before the break. After 14 days, you'll see your personal threshold — the intensity level where regulation fails. This number becomes your early warning system: when a situation approaches it, you intervene.",
        },
        {
          title: "The 90-Second Reset",
          context: "Neurochemically, the intense phase of an emotional reaction lasts approximately 90 seconds. If you can ride out that window, regulation becomes dramatically easier.",
          action: "When you feel emotional intensity rising toward your threshold, start a 90-second practice: breathe in for 4 counts, hold for 4, out for 6. Focus only on the breath and the physical sensations in your body. Don't try to think through the situation — just ride the neurochemical wave. After 90 seconds, reassess. The situation hasn't changed, but your nervous system's grip on it has loosened.",
        },
        {
          title: "The Contagion Filter",
          context: "Other people's emotional intensity is flooding your system because you're absorbing before filtering.",
          action: "Before entering any emotionally charged situation (a difficult meeting, a conversation with an upset friend), take 10 seconds to place your hand on your chest and say internally: 'I can be present without absorbing.' This simple anchoring practice activates your sense of self as separate from the emotional field you're about to enter. It sounds minimal, but the neurological priming effect is measurable.",
        },
      ],
    },

    low: {
      overview: `When adversity hits, your emotional response tends to run the show. Feelings escalate quickly, stay intense for extended periods, and drive behaviour that you often regret afterward. This isn't a character flaw or a sign of weakness — it's a regulation system that hasn't been trained for the loads it's carrying. Your emotions are powerful and legitimate. The issue is that they're arriving at full volume without a dimmer switch, which makes it hard to respond to difficult situations with the clarity and control you'd prefer.

You probably recognise the pattern: something goes wrong, the emotional reaction is immediate and intense, and by the time the feeling subsides, you've said or done things that made the situation worse. Or alternatively, you shut down completely — the intensity is so overwhelming that you withdraw, freeze, or go numb. Both extremes (explosive and shutdown) are signs of the same underlying challenge: a regulation system that doesn't have enough tools to manage the emotional load.

The genuinely good news is that emotional regulation is the most trainable resilience dimension. It responds faster to deliberate practice than any other psychological skill. The neural pathways that modulate emotional intensity are among the most plastic in the adult brain, which means consistent practice — even 5 minutes a day — produces measurable changes within weeks.`,

      strengths: [
        {
          title: "Emotional Authenticity",
          description: "Your feelings are never hidden or ambiguous. People always know where they stand with you emotionally, which creates a kind of raw honesty that more regulated people sometimes lose. This authenticity, when channelled effectively, builds trust.",
          deepDive: "There's a genuine advantage to emotional transparency that gets overlooked in conversations about regulation. People who can't hide their feelings create environments where others feel safe to express theirs. Your unfiltered emotional expression, once you develop the skills to channel it constructively, becomes a leadership quality: you model the emotional honesty that most teams desperately need but are too afraid to practise.",
        },
        {
          title: "Emotional Sensitivity as Data",
          description: "Your strong emotional reactions are actually a sensitive detection system. You feel the tension in a room, the shift in a relationship, the problem in a plan — often before anyone else does. The signal is accurate; it just needs volume control.",
        },
        {
          title: "Capacity for Deep Feeling",
          description: "You don't do emotions halfway. When you care about something, you care completely. When you're moved, you're moved to your core. This depth of feeling, once regulated, fuels the most meaningful work and the deepest relationships.",
        },
      ],

      growthEdges: [
        {
          title: "The Escalation Spiral",
          teaser: "Your emotional reactions feed on themselves — the initial feeling triggers secondary feelings (anger about being angry, shame about being upset), which amplify the original reaction into something much bigger than the situation warrants.",
          fullExplanation: "The most damaging pattern in low emotional regulation isn't the initial reaction — it's the chain reaction. Something frustrating happens. You feel anger (appropriate). Then you feel ashamed of the anger (secondary emotion). Then the shame makes you more angry (tertiary). Within seconds, a minor frustration has become a major emotional event, and the energy behind the reaction now vastly exceeds what the original trigger warranted.\n\nBreaking this spiral requires intervening at the secondary emotion — the moment you start feeling bad about feeling bad. This is the amplification point, and it's where the smallest intervention produces the biggest effect. The practice is radical self-permission: 'I'm allowed to feel angry. Anger is information, not a character flaw.' By accepting the initial emotion without judgment, you eliminate the secondary emotion that would have amplified it.\n\nThis doesn't mean acting on every feeling. It means separating the feeling from the behaviour. You can feel intense anger without expressing it destructively. But you can only make that separation after you've accepted that the anger itself is legitimate.",
          premiumHook: "Get the spiral-interruption protocol that breaks the secondary emotion chain and keeps reactions proportionate.",
        },
        {
          title: "Recovery Lag",
          teaser: "After an emotional storm, it takes you much longer than most people to return to baseline. This extended recovery period affects your work, relationships, and physical health.",
          fullExplanation: "Emotional recovery time is where the real cost of low regulation lives. The outburst or shutdown might last minutes, but the neurochemical aftermath — the cortisol, the adrenaline, the lingering activation of the stress response — can persist for hours or even days. During this recovery period, you're operating at reduced capacity: decisions are worse, patience is thinner, physical health is impacted, and the next stressor hits a system that hasn't finished recovering from the last one.\n\nThe most effective recovery accelerator is physiological, not psychological. Your thinking mind can't outrun your body's stress chemistry. But physical interventions — cold water on the face (triggers the dive reflex, which slows heart rate), vigorous exercise (metabolises stress hormones), slow extended exhales (activates the parasympathetic nervous system) — directly address the chemistry rather than trying to think your way out of it.\n\nBuilding a recovery toolkit of 3–4 physical interventions that work for you, and using them immediately after an emotional storm, can cut recovery time by half within weeks.",
          premiumHook: "Access the physiological recovery toolkit with specific protocols matched to different types of emotional storms.",
        },
      ],

      workplaceImplications: "At work, low emotional regulation creates a visibility problem: your emotional reactions are more memorable than your competence. Colleagues may walk on eggshells around you, avoid giving you honest feedback, or exclude you from high-stakes situations — not because you can't handle the work, but because they can't predict your emotional response. This is frustrating and often unfair, but it's the practical reality. The fastest way to change the perception is to build and demonstrate a pause habit: visibly taking a breath before responding to any trigger. Even a 3-second pause signals to others that you're choosing your response rather than being driven by it.",

      relationshipImplications: "In close relationships, unregulated emotional responses create a pattern of intensity followed by repair that becomes exhausting for both parties. Your partner or friends may feel like they're managing your emotions as much as their own, which breeds resentment over time. The specific growth move isn't suppressing your feelings — it's building a pause between the feeling and the expression. 'I'm feeling really angry right now and I need 10 minutes before I can talk about this' is a regulated expression of intense emotion. It honours the feeling, protects the relationship, and gives your nervous system time to come down from peak activation.",

      emotionalPattern: "Your emotional life is intense, immediate, and consuming. When feelings hit, they hit hard and take over your attention, thinking, and behaviour. The intensity isn't the problem — many of the most impactful and creative people have intense emotional lives. The challenge is that the intensity currently controls you rather than the reverse. Building regulation doesn't mean dampening the intensity. It means developing the infrastructure to channel it: feeling everything without being driven by everything.",

      stressTriggers: [
        "Unexpected bad news or sudden changes to plans — your system needs warning time to prepare a regulated response",
        "Feeling dismissed, invalidated, or not heard — these trigger disproportionate reactions because they hit core needs",
        "Accumulated stress without adequate recovery — each stressor hits a system that's still processing the last one",
      ],
      flowTriggers: [
        "Safe environments where emotional expression is welcomed rather than judged",
        "Physical activities that provide an outlet for emotional energy — exercise, dance, manual work",
        "Creative expression that channels intensity into something constructive — art, music, writing",
      ],

      toolkit: [
        {
          title: "The 5-4-3-2-1 Ground",
          context: "When emotions escalate beyond your control, you need a technique that works without requiring calm thinking — because calm thinking isn't available in those moments.",
          action: "When you feel emotional intensity rising: name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste. This sensory grounding technique pulls your attention out of the emotional spiral and into the present moment. It works because it activates different brain networks than the ones driving the emotional reaction. Practice it daily on minor irritations so it becomes automatic for major ones.",
        },
        {
          title: "The Permission Statement",
          context: "Your secondary emotions (shame about anger, frustration about crying) amplify the original reaction. Breaking this chain is the single highest-leverage intervention.",
          action: "When you notice an intense emotion arising, say internally: 'I'm allowed to feel this. This feeling is information, not a verdict.' Repeat it until the secondary shame or frustration loosens its grip. You're not giving yourself permission to act on the feeling — you're giving yourself permission to have it. This distinction is everything. Practice with minor emotions first, then graduate to more intense ones.",
        },
        {
          title: "The Recovery Protocol",
          context: "Your recovery time after emotional storms is where the most damage accumulates. Shortening recovery has an outsized impact on your daily functioning.",
          action: "Build a personal recovery kit with three interventions: one physical (cold water on face, vigorous walk, or 20 jumping jacks), one sensory (a specific scent, a textured object, a piece of music), and one cognitive (a phrase or image that grounds you). After any emotional storm, run all three in sequence. Time your recovery. Within 2 weeks, you'll see measurable reduction in how long it takes to return to baseline.",
        },
      ],
    },
  },
};
