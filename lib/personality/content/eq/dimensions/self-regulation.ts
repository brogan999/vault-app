import type { EQDimensionContent } from "../types";

export const SELF_REGULATION: EQDimensionContent = {
  id: "self-regulation",
  label: "Self-Regulation",
  shortLabel: "Self-Regulation",
  color: "#315E36",

  levels: {
    high: {
      overview: `You have a rare ability to manage your emotional state rather than being managed by it. When most people feel anger, they become anger — the feeling floods the system and dictates the response. You feel anger, recognise it, and choose how much of it gets expressed and in what form. This isn't suppression. It's the difference between a driver who controls the car and a passenger who gets taken wherever the car goes.

Your self-regulation shows up as emotional composure under pressure, impulse control when tempted, and rapid recovery when something knocks you off balance. You can sit through a frustrating meeting without letting it leak into your tone. You can receive criticism without defensiveness. You can feel the urge to snap and choose not to. This creates a predictability that others experience as reliability — they know you won't blow up, shut down, or spiral in ways that derail the work or the relationship.

The practical effect is that you're someone people can count on when things get hard. Not because you don't feel things — you feel everything — but because you've built a gap between stimulus and response that gives you agency. That gap is the core of emotional maturity, and you've earned it through deliberate practice.`,

      strengths: [
        {
          title: "Emotional Composure Under Pressure",
          description: "You maintain clarity and poise when others lose theirs. Stress, criticism, and conflict don't hijack your behaviour — you can feel the heat and still choose your response. This makes you the person others look to when things get difficult.",
          deepDive: "Emotional composure isn't the absence of arousal — it's the presence of regulation. Your nervous system still fires when threatened; the difference is that your prefrontal cortex stays online long enough to modulate the response. Research on emotional regulation shows that people who can maintain this gap have stronger connections between the amygdala and the prefrontal cortex, and those connections are trainable. You've either had favourable wiring or done the work to build it. Either way, the result is that you can access your best thinking when others are operating from their limbic system.",
        },
        {
          title: "Impulse Control",
          description: "You can delay gratification, resist reactive urges, and choose long-term benefit over short-term relief. This applies to everything from not sending the angry email to not interrupting when you disagree to not reaching for the coping mechanism that would feel good right now.",
          deepDive: "Impulse control is one of the strongest predictors of life outcomes — academic success, relationship stability, health, wealth. The famous marshmallow test was really a test of self-regulation: could the child tolerate discomfort to get a bigger reward? You've internalised that trade-off. You know that the urge to react will pass, and that acting on it often creates more problems than it solves. This doesn't make you rigid — it makes you free to choose rather than compelled to act.",
        },
        {
          title: "Adaptability and Recovery",
          description: "When something disrupts your emotional equilibrium — bad news, a setback, a difficult conversation — you recover quickly. You don't stay stuck in the disruption. You process it, recalibrate, and return to baseline.",
          deepDive: "Emotional recovery speed is a distinct skill from emotional composure. Composure is about not getting knocked over in the first place; recovery is about getting back up when you do. You have both. Your ability to bounce back means that setbacks don't compound — a bad morning doesn't become a bad day, a difficult conversation doesn't poison the whole week. This resilience is partly temperamental but largely learned: you've developed practices that help you metabolise emotional disruption rather than letting it linger.",
        },
        {
          title: "Consistent Emotional Boundaries",
          description: "You know where your emotions end and others' begin. You don't absorb the mood of the room or take on someone else's anxiety. You can be present without being porous.",
        },
      ],

      growthEdges: [
        {
          title: "Over-Regulation and Emotional Constriction",
          teaser: "Your ability to manage emotions can become a habit of managing them away. Sometimes the healthiest response is to let the feeling move through you rather than through your regulation system.",
          fullExplanation: "There's a trap that highly self-regulated people fall into: you're so good at controlling your emotional expression that you start controlling your emotional experience. You notice the anger, you modulate it, you choose not to act on it — and somewhere in that process, you may have stopped yourself from fully feeling it. Emotions that don't get to complete their cycle don't disappear; they go underground.\n\nThe fix isn't to abandon regulation. It's to distinguish between regulating expression (healthy) and suppressing experience (risky). Create designated spaces — therapy, journaling, trusted relationships — where you allow emotions to run their full course without modulation. The goal is to have both: composure when it matters, and full emotional processing when it's safe.",
          premiumHook: "Learn the specific practice for allowing emotions to complete their cycle without losing your regulation capacity.",
        },
        {
          title: "Impatience With Others' Dysregulation",
          teaser: "Because regulation comes easily to you, you may underestimate how hard it is for others. Your composure can read as coldness to people who are struggling to hold it together.",
          fullExplanation: "When you've built strong self-regulation, it's easy to forget that not everyone has the same capacity. You see someone lose their temper and think 'why can't they just control themselves?' — but for them, that control may require effort you've never had to expend. Your calm in a crisis can feel like indifference to someone who needs to see that you're affected.\n\nThe growth move is to make your internal regulation visible. Let people see that you're working with something — 'I'm really frustrated by this too, I'm just trying to stay focused on solutions' — rather than appearing completely unruffled. Your regulation is a gift; sharing the effort behind it makes it relational rather than isolating.",
          premiumHook: "Get the framework for making your self-regulation visible and supportive rather than distant.",
        },
      ],

      workplaceImplications: "Your self-regulation is a leadership asset. You're the person who stays calm in meetings when everyone else is reactive, who can deliver difficult feedback without defensiveness, who doesn't make decisions in the heat of the moment. People trust you with sensitive information because they know you won't leak it emotionally. The career risk is being perceived as emotionally flat or unapproachable — make sure your composure doesn't read as disengagement. A brief 'I know this is frustrating' or 'I'm taking this seriously' can bridge the gap.",

      relationshipImplications: "In close relationships, your self-regulation creates stability. Partners and friends know you won't blow up unpredictably, won't punish them for having a bad day, won't spiral when things get hard. This is genuinely valuable — emotional safety is built on predictability. The watchpoint: your ability to stay composed can make it harder for others to read when something actually bothers you. If you never show distress, people may assume you're fine when you're not. Let your regulation include the skill of signalling 'this matters to me' even when you're not losing control.",

      emotionalPattern: "Your emotional life is well-governed. You feel the full range of human emotion, but you have a reliable gap between feeling and acting. This doesn't mean you're cold — it means you're in charge. Your emotions inform your responses without dictating them. You can be angry and kind, hurt and generous, anxious and effective. That integration is the hallmark of mature self-regulation.",

      stressTriggers: [
        "Environments where emotional expression is punished and you can't find safe outlets",
        "Situations that require you to suppress emotions for extended periods without recovery time",
        "People who interpret your composure as indifference or lack of care",
      ],
      flowTriggers: [
        "Crisis situations where your regulation becomes a visible asset",
        "Roles that reward emotional stability — leadership, mediation, high-stakes negotiation",
        "Relationships where your consistency is valued and reciprocated",
      ],

      toolkit: [
        {
          title: "The Regulation Audit",
          context: "Even strong regulators can over-regulate. Check whether you're modulating expression or suppressing experience.",
          action: "Once a week, review a moment when you felt a strong emotion and regulated it. Ask: did I feel it fully before choosing my response, or did I shut it down? If you notice a pattern of suppression, schedule 15 minutes of unstructured emotional processing — journaling, walking, talking to someone safe — where you allow whatever wants to surface to surface.",
        },
        {
          title: "The Composure Translation",
          context: "Your calm can be misread. Make your internal state visible when it matters.",
          action: "In one high-stakes conversation this week, add a brief translation of your internal state: 'I'm taking this seriously even though I'm staying calm' or 'This matters to me — I'm just trying to think clearly.' Notice whether it changes how the other person responds to you.",
        },
        {
          title: "The Recovery Ritual",
          context: "Even when you recover quickly, your body may hold residual stress. Build a deliberate reset.",
          action: "After any emotionally demanding situation, take 2 minutes for a physical reset: 4-7-8 breathing (inhale 4, hold 7, exhale 8) for 4 cycles, or a brief walk. This signals to your nervous system that the threat has passed. Do it even when you feel fine — it prevents accumulation.",
        },
      ],
    },

    moderate: {
      overview: `You have a working capacity for self-regulation — you can usually manage your emotions and impulses, but under stress or when triggered, that capacity can slip. You're not at the mercy of every feeling, but you're also not operating with the kind of consistent composure that makes you reliably predictable under pressure. This is a common and improvable position.

Your regulation tends to work best with familiar stressors and when you have time to prepare. You can stay calm in most meetings, resist most impulsive urges, and recover from most setbacks within a reasonable timeframe. Where it gets harder is with unexpected triggers, accumulated stress, or situations that hit your particular vulnerabilities. In those moments, you may say something you regret, react in ways that surprise you, or take longer to bounce back than you'd like.

The good news is that self-regulation is highly trainable. Unlike some personality traits, the neural pathways for emotional control can be strengthened through deliberate practice. The people with the strongest regulation aren't born that way — they've built it through repeated exposure to difficult situations and intentional recovery practices.`,

      strengths: [
        {
          title: "Situational Composure",
          description: "In most everyday situations, you can manage your emotional responses. You don't fly off the handle at minor irritations, and you can usually delay gratification when it matters. Your regulation works when conditions are favourable.",
          deepDive: "Having baseline situational composure puts you ahead of people who are reactive in ordinary circumstances. You can hold a difficult conversation, resist an impulsive purchase, or sit with discomfort without immediately acting to make it stop. The growth edge is extending this capacity to the situations where it currently fails — the high-stress moments, the unexpected triggers, the accumulated fatigue that narrows your window of tolerance.",
        },
        {
          title: "Awareness of Your Limits",
          description: "You generally know when you're at risk of losing regulation — you can feel the pressure building, recognise the signs of impending overload. This meta-awareness gives you a chance to intervene before you're fully hijacked.",
          deepDive: "Knowing your limits is half the battle. People who lack this awareness get blindsided by their own reactions; they only realise they've lost it after the fact. Your ability to notice 'I'm getting close to the edge' means you can deploy strategies — a break, a breath, a redirect — before the edge is crossed. The next step is building a larger window so you have more time between 'I notice' and 'I've lost it.'",
        },
        {
          title: "Recovery Capacity",
          description: "When you do lose regulation, you can usually recover. It may take hours or a day rather than minutes, but you don't stay stuck in the disrupted state indefinitely.",
        },
      ],

      growthEdges: [
        {
          title: "The Stress Narrowing Effect",
          teaser: "Your regulation capacity shrinks under stress — exactly when you need it most. What works in calm conditions fails when the pressure builds.",
          fullExplanation: "Under moderate stress, you can usually maintain your composure. Under high stress — deadlines, conflict, sleep deprivation, multiple demands — your regulatory capacity narrows significantly. You become more reactive, more impulsive, less able to choose your response. This isn't a character flaw; it's how the brain works. Stress hormones reduce prefrontal activity and amplify limbic reactivity.\n\nThe intervention is twofold: reduce unnecessary stress where possible, and build stress-hardy regulation practices. The latter means deliberately practicing regulation under moderate stress — not waiting for crisis to test yourself. Simulate pressure: have a difficult conversation when you're slightly tired, practice pausing before reacting when you're mildly irritated. You're building the neural pathways that will fire when real stress hits.",
          premiumHook: "Learn the stress-hardening protocol that extends your regulation capacity under pressure.",
        },
        {
          title: "Trigger Blind Spots",
          teaser: "Certain situations reliably undermine your regulation, but you may not have mapped them clearly. Without knowing your triggers, you can't prepare for them.",
          fullExplanation: "Everyone has regulatory blind spots — situations that reliably provoke dysregulation. For some it's feeling disrespected; for others it's perceived incompetence; for others it's being interrupted or having plans changed. You may have a vague sense that 'certain things set you off' without a clear map of what those things are.\n\nBuilding trigger awareness requires retroactive analysis. After any moment when you lost regulation, ask: what was the specific trigger? Not 'stress' — what kind of stress? Not 'they were annoying' — what did they do? Over time, patterns emerge. Once you know your triggers, you can prepare: anticipate them, build pre-emptive strategies, or avoid them when you're already at capacity.",
          premiumHook: "Get the trigger-mapping protocol that identifies your regulatory blind spots in 2 weeks.",
        },
      ],

      workplaceImplications: "At work, your moderate regulation means you generally hold it together but occasionally have moments you regret — a sharp email sent in frustration, a meeting where your tone betrayed your impatience, a decision made in the heat of the moment. These incidents aren't career-ending, but they create friction. Your growth comes from expanding your regulation capacity under the specific conditions where it fails: the high-stakes meetings, the difficult colleagues, the deadline pressure.",

      relationshipImplications: "In relationships, your regulation gives you enough stability to be a generally reliable partner, but the moments when you lose it can be damaging. A harsh word in an argument, a withdrawal when you're overwhelmed, an impulsive reaction that your partner didn't see coming — these create trust erosion. The repair work matters, but prevention matters more. Building regulation around your relationship-specific triggers — criticism, feeling unheard, conflict avoidance — will have outsized impact.",

      emotionalPattern: "Your emotional life has a variable governor. Sometimes it works well and you feel in control; sometimes it slips and you're surprised by your own reactions. The pattern isn't random — it correlates with stress level, sleep, familiarity with the situation, and how triggered you are. Mapping those correlations is the first step to expanding your reliable range.",

      stressTriggers: [
        "Unexpected criticism or feedback that feels personal",
        "Situations where you feel powerless or disrespected",
        "Accumulated fatigue that narrows your tolerance for frustration",
      ],
      flowTriggers: [
        "Environments with predictable structure and clear expectations",
        "Tasks where you have control over pace and process",
        "Relationships where conflict is rare or handled with care",
      ],

      toolkit: [
        {
          title: "The Pause Practice",
          context: "The gap between stimulus and response is where regulation lives. You need to widen that gap.",
          action: "For one week, before responding to any potentially triggering message, email, or comment, wait 60 seconds. Set a timer. Use the time to breathe and ask: what do I actually want to achieve with my response? After the timer, you can reply. This builds the pause reflex that prevents impulsive reactions.",
        },
        {
          title: "The Trigger Log",
          context: "You can't prepare for triggers you haven't identified. Retroactive analysis reveals patterns.",
          action: "For 2 weeks, every time you notice yourself losing regulation (or having a close call), write down: what happened, what you were feeling, what triggered it, and what your stress level was (1-10). After 2 weeks, look for patterns. The recurring triggers are your regulatory blind spots.",
        },
        {
          title: "The Pre-Stress Buffer",
          context: "Your regulation fails when you're already depleted. Build capacity before difficult situations.",
          action: "Before any situation you know will be challenging — a difficult conversation, a high-stakes meeting — do 5 minutes of physiological regulation: box breathing (4-4-4-4) or a brisk walk. You're not trying to eliminate stress; you're expanding your window of tolerance so you have more room before you hit the edge.",
        },
      ],
    },

    low: {
      overview: `Emotions and impulses have a strong grip on your behaviour. When you feel something strongly — anger, anxiety, desire, hurt — it tends to dictate your response before you've had a chance to choose. This isn't a moral failing. It's a capacity that hasn't yet been developed, and it can be built. Many people who now have strong self-regulation started exactly where you are.

Low self-regulation shows up as reactive behaviour: saying things you regret, making impulsive decisions, struggling to recover from emotional disruption. You may feel like your emotions control you rather than the other way around. A bad mood colours your whole day. A frustrating interaction leads to a reaction you wish you could take back. The urge to act — to send the message, buy the thing, eat the food, say the thing — often wins over the knowledge that waiting would be wiser.

The practical impact is that your relationships and work life may suffer from the fallout of unregulated reactions. People may find you unpredictable, volatile, or hard to read. You may find yourself in cycles of regret — acting, regretting, apologising, repeating. The good news is that self-regulation is one of the most trainable of all psychological capacities. The brain regions involved are highly plastic, and consistent practice produces measurable change within weeks.`,

      strengths: [
        {
          title: "Emotional Vitality",
          description: "You feel things intensely and express them fully. In contexts that value authenticity and passion over composure, this can be a strength. Your reactions are genuine and unfiltered.",
          deepDive: "There's a trade-off between regulation and expressiveness. People with high regulation can sometimes seem flat or guarded; your lack of regulation means your emotional life is vivid and visible. In creative contexts, in relationships where people want to feel your passion, in situations that benefit from immediate honest reaction — your intensity can be an asset. The goal isn't to become emotionally flat. It's to add a layer of choice so you can deploy that intensity when it serves you rather than when it hijacks you.",
        },
        {
          title: "Present-Moment Responsiveness",
          description: "You're not overthinking your reactions — you respond in the moment. In fast-moving situations, this can mean you act when others hesitate.",
          deepDive: "The same tendency that creates impulsive reactions also creates spontaneous responsiveness. You don't get stuck in analysis paralysis when emotions are involved; you move. In environments that reward quick emotional engagement — sales, creative collaboration, crisis response — your immediacy can be valuable. The growth edge is adding a brief pause without losing the responsiveness. A 10-second delay before the reaction preserves the spontaneity while preventing the most damaging impulses.",
        },
        {
          title: "Honest Emotional Signal",
          description: "People always know where they stand with you. You don't hide your feelings, which can create a kind of transparency that regulated people sometimes lack.",
        },
      ],

      growthEdges: [
        {
          title: "The Reaction-Regret Cycle",
          teaser: "You act on impulse, regret it, apologise or repair, and then do it again. The pattern repeats because the regulation capacity that would break the cycle hasn't been built.",
          fullExplanation: "The reaction-regret cycle is exhausting. You say the thing, send the email, make the purchase, or withdraw — and then you wish you hadn't. You apologise, you repair, you promise yourself you'll do better. And then the next trigger comes and the cycle repeats. The cycle persists because regret alone doesn't build regulation. It creates motivation to change, but the actual change requires building the pause between impulse and action.\n\nThe entry point is tiny: introduce a mandatory delay. Not 'I'll try to pause' — a concrete rule. Before sending any emotionally charged message, wait 24 hours. Before leaving a difficult conversation, count to 10. Before making an impulsive purchase, sleep on it. The delay doesn't require willpower in the moment; it's a structural intervention that creates space for regulation to develop.",
          premiumHook: "Get the structured delay protocol that breaks the reaction-regret cycle in 30 days.",
        },
        {
          title: "Emotional Contagion and Escalation",
          teaser: "You absorb the emotional tone of situations and amplify it. When others are stressed, you get more stressed. When conflict starts, you escalate. Your lack of regulation makes you a carrier rather than a stabiliser.",
          fullExplanation: "People with low self-regulation often serve as emotional amplifiers. Someone else's anxiety becomes your anxiety — and then you add to it. A disagreement becomes an argument because you react to their reaction, which triggers theirs, and the loop escalates. You're not the cause, but you're not the brake either.\n\nThe intervention is to build a 'circuit breaker' role for yourself. When you notice escalation — in a conversation, in a meeting, in your own body — your job is to interrupt it. Not to fix it, just to stop it. Say 'I need a minute' and leave the room. Take three breaths before responding. Ask 'can we pause?' The goal isn't to become the calm one; it's to stop being the amplifier. Even one person refusing to escalate changes the dynamic.",
          premiumHook: "Access the circuit-breaker protocol that turns you from amplifier to stabiliser in conflict situations.",
        },
      ],

      workplaceImplications: "At work, low self-regulation creates visible friction. You may have a reputation for being reactive, difficult in meetings, or unpredictable under pressure. Feedback might mention your tone, your emails, or your behaviour in conflict. The career impact is real — people avoid giving you difficult assignments, exclude you from sensitive conversations, or hesitate to promote you into roles that require composure. Building even basic regulation — a pause before responding, recovery practices after conflict — will change how you're perceived and what opportunities open up.",

      relationshipImplications: "In close relationships, low self-regulation creates a specific dynamic: your partner or family may feel like they're walking on eggshells, never sure what will trigger a reaction. They may have learned to avoid certain topics or to manage your emotions for you. This is exhausting for them and isolating for you. The bridge is building enough regulation that you can have difficult conversations without blowing up or shutting down. It starts small: one conversation where you pause before reacting, one moment where you say 'I need a break' instead of escalating. Consistency builds trust.",

      emotionalPattern: "Your emotional life is vivid and largely ungoverned. Feelings move quickly to action. There's little gap between 'I feel this' and 'I do this.' This creates intensity and authenticity — and also volatility and regret. The path forward isn't to feel less; it's to build a pause between feeling and doing. That pause is the birthplace of choice.",

      stressTriggers: [
        "Feeling criticised, disrespected, or dismissed",
        "Uncertainty or lack of control over outcomes",
        "Interpersonal conflict or perceived rejection",
      ],
      flowTriggers: [
        "Situations where strong emotional expression is welcomed or rewarded",
        "Physical activities that channel intensity — exercise, sports, manual work",
        "Environments with low interpersonal friction and clear structure",
      ],

      toolkit: [
        {
          title: "The 10-Second Rule",
          context: "You need a gap between impulse and action. Start with 10 seconds — it's short enough to be achievable, long enough to change outcomes.",
          action: "For 2 weeks, before any potentially reactive response — replying to a message, responding in a conversation, making an impulsive decision — count slowly to 10. Breathe during the count. Only after 10 seconds can you act. You're not trying to never react; you're building the habit of a pause. Most impulsive damage happens in the first 10 seconds.",
        },
        {
          title: "The Body Brake",
          context: "When your mind is hijacked, your body can be the circuit breaker. Physical interventions create space for regulation.",
          action: "When you feel the urge to react — anger, anxiety, impulse — do one physical reset before acting: splash cold water on your face, step outside for 60 seconds, do 10 jumping jacks. The physical intervention creates a break in the emotional momentum. Use it as your default when you feel yourself escalating.",
        },
        {
          title: "The 24-Hour Rule for Messages",
          context: "Emotionally charged messages sent in the moment often become regrets. A structural delay prevents the damage.",
          action: "Implement a non-negotiable rule: any message written in anger, frustration, or strong emotion gets saved as a draft and re-read after 24 hours. If you still want to send it, you can. Most of the time, you won't — or you'll edit it significantly. This single practice prevents a large percentage of relationship and career damage.",
        },
      ],
    },
  },
};
