import type { Big5DimensionContent } from "../types";

export const NEUROTICISM: Big5DimensionContent = {
  id: "neuroticism",
  label: "Neuroticism",
  shortLabel: "Neuroticism",
  color: "#916368",

  levels: {
    high: {
      overview: `Your nervous system runs hot. Stimuli that other people process as neutral — an ambiguous email, a change in plans, an offhand comment — your brain codes as potentially threatening and mobilizes a response. This isn't weakness or dysfunction. It's a threat-detection system with high sensitivity settings, and in genuinely dangerous environments, it's a survival advantage. In modern daily life, it mostly means you feel things more intensely than the people around you.

The upside: you catch problems early. You notice when something is off — in a project, a relationship, a social dynamic — before less sensitive people have any idea. Your worry, when channeled productively, is actually a high-fidelity early warning system. The artists, writers, therapists, and quality-control specialists who score high on Neuroticism aren't high-performing despite their sensitivity — they're high-performing because of it.

The downside: the system doesn't have a great off switch. The same sensitivity that catches genuine problems also generates false alarms. Your brain treats the possibility of failure, rejection, or embarrassment with the same neurochemical urgency it uses for actual threats. The gap between the intensity of your emotional reaction and the objective severity of the trigger is where most of your suffering lives.`,

      strengths: [
        {
          title: "Threat Detection",
          description: "You see problems coming before they arrive. The project risk that blindsides the optimists, the relationship tension that others don't notice until it explodes, the health symptom that warrants attention — your heightened vigilance catches these signals early. In roles that require risk awareness, this sensitivity is a genuine asset.",
          deepDive: "Your threat-detection system processes more data points at higher resolution than most people's. Where a low-Neuroticism person scans for overt danger and finds none, your system scans for subtle signals of potential danger — and usually finds several. This isn't paranoia (though it can look like it from the outside). It's a genuine perceptual sensitivity that detects patterns at lower signal strength.\n\nThe evidence: high-Neuroticism individuals outperform low-Neuroticism individuals at tasks requiring vigilance, error detection, and risk assessment. Quality control, security analysis, medical diagnosis, proofreading — any domain where catching the subtle error matters more than tolerating ambiguity plays to your strength.\n\nThe management challenge is distinguishing signal from noise. Your system generates both accurate warnings and false alarms, and it can't tell you which is which in real time. Building a practice of writing down your concerns and checking them against outcomes teaches your meta-awareness to calibrate: over time, you learn which patterns of worry are reliably predictive and which are your system's standard-issue noise.",
        },
        {
          title: "Emotional Depth",
          description: "You experience the full dynamic range of human emotion. Not just the intensity — the granularity. You don't just feel 'bad'; you feel the specific texture of disappointment, the weight of dread, the ache of nostalgia, the sharp edge of shame. This emotional vocabulary fuels creativity, empathy, and self-awareness.",
        },
        {
          title: "Empathetic Accuracy",
          description: "Because you feel intensely yourself, you recognize intensity in others. You know what anxiety looks like from the inside, so you catch it in other people's faces and voices. This empathetic accuracy makes you an unusually perceptive friend, partner, and colleague.",
        },
        {
          title: "Motivational Fuel",
          description: "Your anxiety about failure is a genuine motivational force. You prepare more thoroughly, anticipate more problems, and invest more effort in prevention than people who aren't worried. When channeled through structure, this anxious energy produces excellent work.",
        },
      ],

      growthEdges: [
        {
          title: "The Rumination Loop",
          teaser: "Your mind replays painful events on repeat — not to learn from them, but because the emotional processing never reaches completion. The conversation you had three days ago is still running in a background thread. The mistake you made last month surfaces every evening. Each replay feels like it's getting you closer to resolution. It isn't.",
          fullExplanation: "Rumination is high Neuroticism's signature dysfunction. Unlike productive reflection (which analyzes, learns, and resolves), rumination cycles through the same emotional content without reaching a conclusion. It's your brain re-experiencing the threat without updating its assessment.\n\nThe mechanism: a negative event triggers an emotional response. Your brain flags the event for processing. Processing begins — but instead of reaching a conclusion and filing the event away, the processing loop encounters the emotional intensity, re-triggers the response, and restarts. The result is a closed circuit: feel bad → think about why you feel bad → feel worse → think about why you feel worse.\n\nThe loop is maintained by a specific cognitive error: confusing emotional processing with problem-solving. It feels like you're working on the problem, so stopping feels irresponsible. But rumination doesn't solve problems — it rehearses pain.\n\nThree evidence-based interruptions: (1) Physical pattern interrupts — vigorous exercise, cold exposure, or any activity that demands sensory attention and breaks the cognitive loop. (2) Externalization — write the thoughts down. Once they exist on paper, your brain treats them as 'stored' and reduces the re-processing urgency. (3) Scheduled worry — set a 15-minute daily 'worry window' where you deliberately think about your concerns, then close the window. Your brain learns that the worries will get their time, so they don't need to intrude constantly.",
          premiumHook: "Understand why your brain gets stuck in replay mode and get three specific, evidence-based interventions calibrated for high-Neuroticism thinkers.",
        },
        {
          title: "The Catastrophe Forecast",
          teaser: "Your imagination for disaster is world-class. You can construct a vivid, detailed scenario in which a minor setback cascades into total ruin — and the scenario feels not just possible but probable. The gap between what you fear and what actually happens is enormous, but that gap never seems to update your forecasting model.",
          fullExplanation: "Catastrophizing is your threat-detection system operating without a reality check. The process: a genuine concern (the project might be late) gets fed into your pattern-recognition engine, which generates a cascade of connected worst cases (if the project is late → the client will be angry → they'll cancel the contract → I'll be blamed → I'll lose my job → I won't find another one → financial ruin). Each step in the cascade feels logical. The probability of the entire sequence is vanishingly small, but your emotional system responds to the final catastrophe as though it's already happening.\n\nThe critical insight: your forecasting model doesn't learn from disconfirmed predictions. The catastrophe you feared last month that didn't happen should update your confidence in catastrophic forecasts downward. It doesn't, because by the time the non-event resolves, your attention has moved to the next potential catastrophe.\n\nThe intervention: keep a prediction log. Write down your catastrophic forecasts with specific, verifiable predictions ('I will lose my job within 3 months'). Check them against reality at the stated deadline. Over months, the accumulating evidence of disconfirmed predictions provides the data your forecasting model needs to recalibrate. You'll still generate worst-case scenarios — that's your wiring. But you'll learn to weight them appropriately.",
          premiumHook: "Get the prediction-tracking system that teaches your catastrophizing brain to distinguish between genuine warnings and false alarms — using your own data.",
        },
      ],

      relationshipPattern: "You love with intensity that can be both deeply connective and deeply exhausting — for you and for your partner. Your emotional sensitivity means you notice every shift in your partner's mood, every subtle change in the relationship's temperature. When things are good, this attunement creates extraordinary intimacy. When things are uncertain, it generates a stream of worried interpretations that can suffocate the relationship. Learning to flag your anxious thoughts as hypotheses rather than facts — 'I'm having the thought that you're pulling away' versus 'you're pulling away' — gives your partner room to respond rather than defend.",

      careerImplications: "Your sensitivity becomes an asset in roles that reward vigilance, empathy, or emotional depth: quality assurance, risk analysis, therapy, writing, healthcare, research. You struggle in roles that require sustained emotional neutrality under pressure: emergency medicine, air traffic control, high-frequency trading. Your career risk is avoidance — choosing safe roles to manage anxiety instead of challenging roles that would leverage your sensitivity as a strength.",

      emotionalPattern: "You feel everything at higher volume. Joy is joyful, but anxiety is anxious and sadness is devastating. Your emotional range is genuinely wider than most people's, which means your best moments are more vivid and your worst moments are more painful. The critical skill isn't dampening your emotional range — it's building tolerance for the intensity so that difficult emotions are experienced and processed rather than avoided or suppressed.",

      stressTriggers: [
        "Ambiguity about outcomes or other people's perceptions of you",
        "Environments where mistakes are publicly punished",
        "Periods of waiting for results with no ability to take action",
      ],
      flowTriggers: [
        "Creative work where emotional intensity is an asset rather than a liability",
        "Structured environments where your vigilance serves a clear purpose",
        "Helping others who are struggling — your empathetic accuracy becomes care",
      ],

      toolkit: [
        {
          title: "The Worry Window",
          context: "When anxious thoughts intrude throughout the day and you can't turn them off",
          action: "Set a daily 15-minute window (same time each day) designated for worrying. When anxious thoughts arise outside this window, write them on a list and tell yourself: 'I'll address that at 6pm.' When the window arrives, work through the list. Most items will have lost their urgency. The ones that haven't deserve your attention. This trains your brain that the worries will get their time, so they don't need to demand attention constantly.",
        },
        {
          title: "The Prediction Tracker",
          context: "When you notice yourself catastrophizing and want to calibrate your threat-detection system with reality",
          action: "Write down your specific fear as a prediction: 'If I send this email, the client will fire us within 2 weeks.' Set a calendar reminder for the deadline. When it arrives, check the prediction against what actually happened. After 3 months of tracking, you'll have concrete data on your prediction accuracy — which is almost certainly far lower than your emotional system assumes.",
        },
        {
          title: "The Physical Reset",
          context: "When you're caught in a rumination loop and thinking your way out isn't working",
          action: "Stop trying to solve the thought. Move your body instead: a 20-minute run, a cold shower, 50 pushups, a walk around the block at a pace that makes you breathe hard. Physical intensity forces your brain to redirect resources from the rumination circuit to the movement circuit. The thought may return, but the loop's intensity will be reduced.",
        },
      ],
    },

    moderate: {
      overview: `Your emotional system responds proportionally. Stress makes you uncomfortable but doesn't overwhelm you. Setbacks sting but don't spiral. Uncertainty is unpleasant but manageable. You have access to the full range of human emotions without being hijacked by any of them.

This emotional balance means you can handle most situations without needing special coping strategies. You feel the weight of a bad day and shake it off by the next morning. You worry about important things and stop worrying when the situation resolves. Your emotional recovery is reliable.

The risk of moderate Neuroticism is taking your stability for granted. Because your emotional system handles most things well, you may not develop the coping tools that would serve you during the rare periods of genuine crisis — job loss, grief, health scares — when your normally adequate emotional processing suddenly isn't enough.`,

      strengths: [
        {
          title: "Emotional Proportionality",
          description: "Your emotional responses match the situation. Small setbacks feel small. Big challenges feel big. This proportionality means your emotions are a reliable signal — when you feel worried, there's usually something worth worrying about, and when you don't, there usually isn't.",
        },
        {
          title: "Recovery Speed",
          description: "You bounce back from negative events at a healthy pace. Not so fast that you bypass processing (that's suppression), and not so slow that you get stuck (that's rumination). Your emotional metabolism processes difficult experiences and moves on.",
        },
        {
          title: "Stress Tolerance",
          description: "You can operate under moderate-to-high stress without significant performance degradation. Your emotional system handles pressure well enough that you don't need to avoid challenging situations or over-prepare for them.",
        },
      ],

      growthEdges: [
        {
          title: "The Crisis Gap",
          teaser: "Your emotional equilibrium has never been truly tested — or it has, and you discovered you had fewer tools than you thought. Because your baseline emotional processing works well, you may not have invested in developing the advanced coping strategies that genuine adversity requires.",
          fullExplanation: "Moderate Neuroticism is an asset in daily life. But genuine crises — grief, trauma, major loss, health emergencies — generate emotional demands that exceed your normal processing capacity. People with high Neuroticism, paradoxically, are often better prepared for these moments because they've spent years building emotional management tools. People with moderate Neuroticism may discover during a crisis that their normal coping mechanisms (wait it out, talk to a friend, sleep on it) are insufficient.\n\nThe intervention isn't to artificially create emotional intensity. It's to build a toolkit before you need it: a therapist relationship established before crisis hits (so you're not finding one in the middle of falling apart), a physical practice that you know can interrupt emotional overwhelm, a journaling habit that can scale up when processing needs exceed your internal capacity.\n\nThink of it as emotional insurance: you may never need it, but if you do, having it already in place is the difference between coping and collapse.",
          premiumHook: "Learn why your emotional stability might leave you underprepared for genuine adversity and get the proactive toolkit that ensures you have the resources when you need them.",
        },
      ],

      relationshipPattern: "You're an emotionally stable partner who provides a reassuring consistency. You don't overwhelm partners with emotional needs, and you handle relationship stress with reasonable composure. The subtler risk: because you process emotions efficiently, you may move past relational injuries before they're fully resolved — carrying small unaddressed issues that accumulate over years. Checking in with yourself about whether you've actually processed something versus simply moved past it prevents this slow accumulation.",

      careerImplications: "Your emotional stability is an asset across most professional environments. You handle feedback, deadlines, and interpersonal friction without significant disruption. You can operate in both high-pressure and low-pressure environments. Your career risk isn't emotional — it's that your lack of strong emotional signal might make it harder to identify what you genuinely care about. The person who feels everything intensely at least knows what moves them.",

      emotionalPattern: "Your emotional life is generally smooth with occasional peaks and valleys — a healthy pattern that doesn't require constant management. You feel things, process them, and move on. The nuance: 'moving on' isn't always the same as 'processing.' Moderate-Neuroticism people can efficiently bypass emotions that deserved more attention. Periodically pausing to check whether you've actually resolved an emotional event or just filed it away prevents deferred emotional debt.",

      stressTriggers: [
        "Genuine crises that exceed your normal processing capacity",
        "Sustained uncertainty over extended periods with no resolution in sight",
        "Accumulation of small stressors that individually seem manageable but collectively overwhelm",
      ],
      flowTriggers: [
        "Challenging but achievable work that engages without overwhelming",
        "Environments with clear expectations and predictable consequences",
        "Balanced schedules that allow recovery between demanding periods",
      ],

      toolkit: [
        {
          title: "The Emotional Check-In",
          context: "When you've had a stressful week and aren't sure whether you've processed it or just powered through it",
          action: "Set a weekly 10-minute block. Close your eyes. Scan through the week's events. For each one that had emotional weight, ask: 'Have I actually felt this, or did I just handle it?' If something generates a physical sensation — tightness, heaviness, restlessness — it hasn't been processed. Write about it for 5 minutes. The writing moves it from background hum to conscious awareness, where it can actually resolve.",
        },
      ],
    },

    low: {
      overview: `Your emotional system runs cool. Stressors that derail other people — bad news, interpersonal conflict, uncertainty, rejection — register as data points rather than threats. Your brain processes negative information without the alarm-bell response that makes most people reactive. This isn't numbness or suppression. It's a genuinely lower baseline of emotional reactivity, and it's one of the strongest predictors of resilience, leadership capacity, and long-term wellbeing in the personality research literature.

You're the person who stays calm when everyone else is panicking. Not performing calmness — actually calm. Your nervous system doesn't mobilize the same fight-or-flight response that floods other people with cortisol and adrenaline when the plan changes or the boss is upset. This makes you the de facto leader in any crisis, because the people around you instinctively look for the person who isn't freaking out.

The cost: you may underestimate the emotional impact of events — both on yourself and on others. The setback that you shrug off might genuinely wound someone else, and your calm response can read as indifference rather than resilience. You may also delay processing emotions that deserve attention, storing them in the background until they emerge in unexpected ways.`,

      strengths: [
        {
          title: "Crisis Composure",
          description: "When everything goes wrong, you get clearer. Stress triggers focus in you where it triggers chaos in others. This composure isn't an act — it's your nervous system's genuine response to pressure. Teams, families, and organizations rely on this stability more than they realize.",
          deepDive: "Your low emotional reactivity means that the cognitive resources other people spend managing their stress response remain available to you for problem-solving. In a crisis, while high-Neuroticism people are processing their emotional response to the situation, you're already analyzing the situation itself. This gives you a practical speed advantage in high-stakes decision-making.\n\nResearch consistently shows that low-Neuroticism individuals are overrepresented in high-pressure professions: emergency medicine, military leadership, air traffic control, executive management. Not because these roles require emotional suppression, but because they require the ability to think clearly when the environment is screaming.\n\nThe management edge: your composure sets the emotional tone for any group you're part of. When the leader is calm, the team calms down. This regulatory effect is more powerful than any verbal reassurance you could offer.",
        },
        {
          title: "Emotional Efficiency",
          description: "You process negative emotions quickly and cleanly. A bad meeting, a rejected proposal, a personal disappointment — you feel it, assess it, extract the lesson, and move on. Where others spend days processing a setback, you spend hours. This efficiency compounds into a massive productivity advantage over a career.",
        },
        {
          title: "Objective Evaluation",
          description: "You evaluate situations without the emotional coloring that distorts most people's judgment. The proposal is good or bad based on its merits, not on how it made you feel. This objectivity is invaluable in any context that requires accurate assessment: investing, hiring, strategic planning, medical diagnosis.",
        },
        {
          title: "Stable Relationships",
          description: "You bring emotional consistency to your relationships. Partners, friends, and colleagues can predict your reactions, which creates a deep sense of safety. You don't generate the emotional volatility that exhausts the people around more reactive individuals.",
        },
      ],

      growthEdges: [
        {
          title: "The Empathy Deficit",
          teaser: "Because emotional distress registers as a low-intensity signal for you, you may chronically underestimate its impact on others. The comment you made without a second thought replays in someone else's mind for days. The crisis you handled efficiently left emotional wreckage that you didn't notice because you weren't feeling the same intensity.",
          fullExplanation: "Low Neuroticism creates a specific empathy gap: you have limited access to the subjective experience of intense emotional distress. It's not that you can't understand it intellectually — you can. But you can't feel what it's like from the inside, and this gap shows up as advice that's technically correct but emotionally tone-deaf.\n\n'Just don't worry about it' is your genuine response to anxiety — and it's useless to someone in the grip of it. 'Move on' is how you actually handle disappointment — and it's experienced as dismissiveness by someone still processing theirs. Your calm, which serves you so well in crises, can register as coldness in intimate moments where what's needed is emotional presence, not problem-solving.\n\nThe practice isn't to simulate emotions you don't feel. It's to build a cognitive map of emotional experiences you don't naturally access. When someone is anxious, remind yourself: 'Their brain is generating the same alarm response mine generates in actual danger, and they can't turn it off.' This reframe converts their experience from irrational (from your vantage) to understandable (from theirs). Validation first, solutions second.",
          premiumHook: "Learn why your emotional composure creates a specific blind spot for other people's distress — and get the cognitive framework that builds empathy without requiring you to feel what they feel.",
        },
        {
          title: "The Deferred Processing Problem",
          teaser: "You handle emotions so efficiently that you sometimes handle them before they're fully processed. The grief you 'dealt with' in a week. The breakup you 'moved on from' in a month. The career disappointment you 'let go of' the next day. Each of these was resolved faster than your emotional system could actually process it. The unprocessed residue accumulates in the background.",
          fullExplanation: "Your efficient emotional processing has a blind spot: it sometimes mistakes speed for completion. Emotions — particularly complex ones like grief, loss, and major life transitions — have processing requirements that don't compress well. They need to be felt across multiple dimensions (anger, sadness, acceptance, meaning-making) and each dimension needs its own time.\n\nYour system's tendency to quickly assess, extract the lesson, and move on can short-circuit this multi-dimensional processing. The emotion gets filed as 'handled' when only the cognitive component has been addressed — you understand what happened, but the emotional weight hasn't been discharged.\n\nOver years, deferred processing accumulates as a subtle but pervasive flatness. Not depression exactly, but a reduced emotional range — as if your volume dial has been turned down a notch at a time. The person who seemed unflappable at 30 may feel curiously numb at 50, with a backlog of unfelt feelings stretching back decades.\n\nThe practice: when something genuinely significant happens — positive or negative — give it more time than your system thinks it needs. Sit with it. Write about it. Talk about it. If your instinct is 'I'm over this,' check whether you actually processed it or just filed it.",
          premiumHook: "Understand why your emotional efficiency creates a processing debt and get the specific practices that prevent the long-term accumulation of deferred emotions.",
        },
      ],

      relationshipPattern: "You're the rock. Partners rely on your stability, your consistency, and your ability to stay grounded when everything else is turbulent. The challenge: partners who need emotional engagement — who want to see you affected, want to feel that you're moved by things, want the vulnerability of watching you struggle — may experience your composure as distance. It's not that you don't feel; it's that your feelings don't reach the surface with the same intensity. Learning to share your emotional experience verbally — narrating what you feel even when it doesn't show on your face — gives partners access to the interior life that your even exterior hides.",

      careerImplications: "You thrive in high-pressure environments: executive leadership, emergency services, crisis management, surgery, financial markets, military operations. You also excel in any role that requires long-term emotional endurance: therapy (as a practitioner), leadership through organizational change, sustained negotiation. Your career risk is underestimating the emotional dimension of leadership — your team needs to see you acknowledge difficulty, not just handle it.",

      emotionalPattern: "Your emotional life is characterized by stability and low amplitude. Positive and negative events generate responses that are genuine but moderate in intensity. You don't experience the dramatic highs and lows that more reactive people do, which means your subjective experience of life may feel somewhat flatter than others describe theirs. This isn't anhedonia — you do experience pleasure and satisfaction. But the emotional coloring of your experience is muted compared to the vivid palette that high-Neuroticism people describe.",

      stressTriggers: [
        "Environments saturated with emotional intensity that you can't escape",
        "Situations requiring you to display emotional vulnerability when you don't feel it",
        "Extended exposure to others' unmanaged emotional distress without the tools to help",
      ],
      flowTriggers: [
        "High-stakes situations where composure translates directly to performance",
        "Problems that require sustained, unemotional analysis",
        "Leadership moments where your stability sets the tone for the group",
      ],

      toolkit: [
        {
          title: "The Slow Process",
          context: "When something significant has happened and your instinct is to handle it and move on",
          action: "Before moving on, write about the event for 15 minutes. Not analysis — feelings. Use feeling words (sad, angry, relieved, proud, confused, hurt). If this is hard, that's the point. Your system processes the cognitive dimension quickly; the emotional dimension needs more time than you're giving it. The writing provides the time your efficiency typically skips.",
        },
        {
          title: "The Empathy Bridge",
          context: "When someone you care about is in emotional distress and your instinct is to problem-solve",
          action: "Before offering any solution, say: 'That sounds really [hard/frustrating/painful].' Then wait. Let them respond. Ask: 'What do you need from me right now — to listen or to help solve it?' In most cases, they need listening first. Your solutions are good — but they're only useful after the person feels heard. Validation before problem-solving, always.",
        },
      ],
    },
  },
};
