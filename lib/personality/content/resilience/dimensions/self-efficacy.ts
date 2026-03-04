import type { ResilienceDimensionContent } from "../types";

export const SELF_EFFICACY: ResilienceDimensionContent = {
  id: "self-efficacy",
  label: "Self-Efficacy",
  shortLabel: "Self-Efficacy",
  color: "#315E36",

  levels: {
    high: {
      overview: `You carry a deep, tested belief that you can handle what life throws at you. This isn't naive optimism or bravado — it's a quiet confidence forged from accumulated evidence that when things go wrong, you figure it out. You've faced enough adversity to know your own resourcefulness, and that knowledge fundamentally changes how you engage with difficulty. Where others see threats, you see problems that have solutions you haven't found yet.

This belief operates below conscious thought. You don't have to talk yourself into confidence when a crisis hits — it's already there, wired into your default response. When a project derails, a relationship ruptures, or a health scare arrives, your first internal response isn't "I can't handle this" but something closer to "What do I need to do?" This automatic orientation toward action rather than paralysis is the behavioural signature of high self-efficacy.

The practical impact is enormous. Because you believe you can cope, you actually cope better. You persist longer on difficult problems, recover faster from failures, and take on challenges that others avoid. Self-efficacy is one of the most powerful self-fulfilling prophecies in psychology — your belief in your capacity literally expands your capacity, because it determines how much effort you invest and how long you sustain it.`,

      strengths: [
        {
          title: "Challenge Orientation",
          description: "You interpret difficult situations as challenges to be mastered rather than threats to be avoided. This reframe isn't a cognitive trick you perform — it's your genuine first response to adversity, which means you engage with problems earlier and more fully than people who have to overcome an initial fear response.",
          deepDive: "Bandura's research demonstrated that self-efficacy doesn't just influence whether you succeed — it influences whether you try. High self-efficacy individuals select harder goals, commit to them more firmly, and sustain effort longer after setbacks. The mechanism is straightforward: if you believe effort will produce results, you invest effort. If you doubt your capacity, effort feels futile and you conserve energy instead. This creates a divergence that compounds over time — you accumulate more experiences of mastery, which further strengthens your belief in your capacity, while low self-efficacy individuals accumulate experiences of avoidance that confirm their doubts.",
        },
        {
          title: "Failure Recovery",
          description: "When you fail — and you do, because you attempt difficult things — you attribute the failure to insufficient strategy or effort rather than insufficient ability. This attribution pattern means failure informs your next attempt rather than undermining it.",
          deepDive: "Attribution theory explains why some people are devastated by failure while others are energised by it. The critical variable is whether you attribute failure to stable, internal factors ('I'm not capable enough') or to unstable, controllable factors ('I didn't prepare well enough' or 'I need a different approach'). Your high self-efficacy means you default to the second pattern. You treat failure as feedback about your strategy, not your worth. This doesn't mean you never feel disappointed — you do. But the disappointment fuels adjustment rather than withdrawal.",
        },
        {
          title: "Stress Inoculation",
          description: "Your history of handling adversity has built genuine stress tolerance. Each past difficulty you navigated successfully deposited evidence into your coping account, and that account now has enough balance to buffer against significant shocks without going into emotional overdraft.",
        },
        {
          title: "Contagious Confidence",
          description: "Your belief in your own coping capacity extends outward. You tend to believe in other people's capacity too, which makes you a natural source of encouragement during collective adversity. Teams and relationships benefit from your implicit message: 'We can handle this.'",
        },
      ],

      growthEdges: [
        {
          title: "The Overextension Trap",
          teaser: "Your confidence in your coping ability can lead you to take on more adversity than any one person should carry. You say yes to the hard thing because you know you can handle it — without asking whether you should.",
          fullExplanation: `Because you trust your ability to cope, you may systematically underestimate the cost of coping. Handling a crisis at work, supporting a struggling friend, managing a health issue, and navigating a family conflict — you can do all of these simultaneously. The question is what it costs you to do them all at once.

High self-efficacy individuals are prone to a specific blind spot: they measure capacity by whether they can survive the load, not by whether the load is optimal. You can white-knuckle through an enormous amount of adversity and come out the other side functional. But functional isn't thriving, and the gap between surviving and thriving is where burnout lives.

The growth move is adding a second question to your internal assessment. Instead of just asking "Can I handle this?" also ask "What will handling this cost me, and is that cost worth paying right now?" Sometimes the answer is yes — some situations demand everything you have. But making the cost explicit prevents the slow, invisible depletion that comes from always saying yes because you can.`,
          premiumHook: "Learn the capacity audit that distinguishes between what you can handle and what you should take on — and how to protect your reserves without feeling like you're giving up.",
        },
        {
          title: "Difficulty Accepting Help",
          teaser: "Your strong belief in your own coping ability can make it genuinely hard to accept support. If you can handle it yourself, asking for help feels unnecessary — even when help would make the situation significantly more manageable.",
          fullExplanation: `Self-efficacy and self-reliance are not the same thing, but high self-efficacy often produces excessive self-reliance as a side effect. When your default response to adversity is "I can deal with this," the corollary is often "I don't need help dealing with this." Over time, this pattern isolates you from the support systems that would make your coping more sustainable.

The cost isn't just practical — it's relational. When you consistently handle everything alone, the people who care about you feel shut out. Your partner wants to be your teammate in adversity, not a spectator. Your friends want to reciprocate the support you've given them. Your colleagues want to contribute to solutions, not just watch you solve everything solo.

The reframe that makes this growth edge workable: accepting help isn't a sign that you can't cope. It's a sign that you're coping intelligently. Using all available resources — including other people — is a higher-order coping strategy than muscling through alone. The most efficacious response to adversity is the one that produces the best outcome with the least total cost, and that often includes letting others carry part of the load.`,
          premiumHook: "Get the framework for identifying when self-reliance has crossed into isolation — and specific practices for accepting support without feeling diminished.",
        },
      ],

      workplaceImplications: "Your self-efficacy makes you the person everyone turns to when things go sideways. You get the impossible deadlines, the failing projects, the difficult clients — because people trust that you'll find a way through. This is a career accelerator and a burnout risk in equal measure. The professional skill to develop is selective deployment: choosing which battles deserve your full engagement and which ones need to be delegated or declined. Your capacity to handle hard things is a finite resource, and spending it strategically rather than reflexively is what separates sustainable high performance from eventual collapse.",

      relationshipImplications: "In close relationships, your self-efficacy creates stability and reassurance. Your partner knows that when life gets hard, you won't crumble — and that security is deeply valuable. The growth area is making room for mutual dependence. Relationships thrive on reciprocal vulnerability, and your tendency to handle adversity independently can deprive your partner of the chance to support you. Letting someone in during difficult moments — not because you need rescuing but because shared struggle deepens connection — is the relationship skill that high self-efficacy individuals most often need to develop.",

      emotionalPattern: "Your emotional response to adversity follows a distinctive arc: a brief spike of activation (stress, concern, sometimes excitement), followed by a rapid shift into problem-solving mode. The emotion doesn't disappear — it gets channelled into action. This is efficient but can mean you process the emotional content of a difficult experience only after the practical problem is solved. The feeling catches up with you later, sometimes in unexpected ways — fatigue, irritability, or a sudden emotional release that seems disproportionate to the current moment but is actually the deferred cost of your earlier composure.",

      stressTriggers: [
        "Situations where your competence genuinely cannot change the outcome — illness, loss, systemic injustice — because your coping strategy depends on agency",
        "Being forced into dependence or passivity when you know you could act but aren't allowed to",
        "Accumulated invisible costs from sustained high-demand coping that surface as sudden exhaustion or disillusionment",
      ],
      flowTriggers: [
        "Novel challenges that require resourcefulness and creative problem-solving under pressure",
        "Situations where your past experience and skills are directly applicable to the current problem",
        "Mentoring or coaching others through adversity — your confidence multiplies when shared",
      ],

      toolkit: [
        {
          title: "The Cost-Benefit Pause",
          context: "Your default 'I can handle this' response skips the evaluation of whether you should handle this right now.",
          action: "Before taking on any new challenge or demand, spend 60 seconds with two questions: 'What will this cost me in energy, time, and emotional bandwidth?' and 'What am I not doing if I take this on?' Write the answers down. If the cost exceeds the value, delegate, decline, or defer — and remind yourself that strategic restraint is a higher-order form of coping than brute-force endurance.",
        },
        {
          title: "The Help Request Practice",
          context: "Your self-reliance is so automatic that asking for help requires deliberate practice to feel natural.",
          action: "Once a week, make one genuine request for help with something you could handle alone. Not a trivial request — something that matters. Notice the discomfort, and notice what happens to the relationship when you let someone contribute to your coping. Track whether the outcomes are better, worse, or different when you involve others. Most high self-efficacy individuals discover that shared coping produces better results than solo coping — they just never tested the assumption.",
        },
        {
          title: "The Deferred Emotion Check-In",
          context: "Your rapid shift into problem-solving mode means emotional processing gets postponed. Unprocessed emotion accumulates.",
          action: "After any significant adversity — once the practical crisis is resolved — set a calendar reminder for 48 hours later. When it fires, sit with this question for 10 minutes: 'How did that actually affect me?' Don't problem-solve. Just feel. The goal is to complete the emotional processing that your efficacy-driven response wisely deferred but didn't eliminate.",
        },
      ],
    },

    moderate: {
      overview: `You have a working belief in your ability to handle adversity, but it's conditional. Under certain circumstances — familiar problems, manageable stakes, adequate preparation time — you trust yourself to cope. But when conditions shift outside that comfort zone — unfamiliar challenges, high stakes, no preparation — your confidence wavers, and with it, your actual coping capacity.

This conditionality is completely normal. Most people's self-efficacy is domain-specific and situation-dependent. You might trust yourself completely in a professional crisis but doubt yourself in a personal one, or feel entirely capable handling logistical problems but uncertain with emotional ones. The belief in your capacity is real — it's just not yet generalised across all the situations life throws at you.

The practical implication is that your performance under adversity is inconsistent. Sometimes you surprise yourself with how well you cope. Other times you're blindsided by your own doubt and hesitation. This inconsistency isn't random — it maps precisely onto where your self-efficacy is strong versus where it's underdeveloped. Understanding that map is the first step toward expanding your confidence into the territories where it's currently thin.`,

      strengths: [
        {
          title: "Realistic Self-Assessment",
          description: "You have an accurate read on your own capabilities — you know what you can handle and where you're likely to struggle. This realism prevents the overcommitment that trips up overly confident people and allows you to prepare strategically for challenges at the edge of your capacity.",
          deepDive: "Moderate self-efficacy produces something that pure high self-efficacy sometimes lacks: calibrated confidence. You don't just assume you'll figure it out — you assess whether you have the specific skills and resources needed. This means you prepare more thoroughly, seek information more actively, and build contingency plans more reliably. In novel or complex situations, this calibrated approach often produces better outcomes than blind confidence, because preparation compensates for what raw belief cannot.",
        },
        {
          title: "Domain-Specific Mastery",
          description: "In the areas where you've built confidence through experience, your self-efficacy is genuinely robust. You know your professional strengths, you've catalogued what works in familiar scenarios, and in those zones you operate with real authority and effectiveness.",
          deepDive: "Your domain-specific confidence isn't limited — it's a foundation. The psychological mechanism behind self-efficacy is mastery experience: each time you succeed at something difficult, your belief in your capacity for that type of challenge strengthens. You've already built this in certain domains. The growth strategy is to deliberately create mastery experiences in your weaker domains — starting with small, manageable challenges and progressively increasing difficulty. Each success in a new domain expands your general self-efficacy, not just the domain-specific variety.",
        },
        {
          title: "Openness to Support",
          description: "Because you don't assume you can handle everything alone, you're naturally better at seeking and accepting help. This collaborative coping style often produces better outcomes than pure self-reliance, especially in complex or novel adversity.",
        },
      ],

      growthEdges: [
        {
          title: "The Confidence Gap",
          teaser: "There's a recurring gap between what you can actually do and what you believe you can do. You consistently underestimate your coping capacity, which means you avoid challenges you could handle and hesitate when speed would serve you better.",
          fullExplanation: `The confidence gap is one of the most frustrating features of moderate self-efficacy. You look back at past challenges and recognise that you handled them well — but that recognition doesn't automatically transfer to the next challenge. Each new adversity feels uncertain, even when it resembles situations you've successfully navigated before.

The mechanism is a retrieval failure. Your brain stores evidence of past coping success, but moderate self-efficacy means that evidence isn't automatically activated when you face new challenges. Instead, the default response is uncertainty — "Can I handle this?" — which requires you to actively search your memory for relevant evidence before confidence kicks in. High self-efficacy individuals do this retrieval automatically; you have to do it deliberately.

The practice is building an evidence portfolio — a concrete, accessible record of past coping successes that you can consult when doubt arises. Not affirmations or positive thinking. Actual evidence: specific situations where you faced something difficult and coped effectively. When a new challenge triggers doubt, reviewing this evidence bridges the gap between your actual capacity and your belief in it.`,
          premiumHook: "Get the evidence portfolio framework that converts past coping successes into accessible confidence for future challenges.",
        },
        {
          title: "Avoidance as Protection",
          teaser: "When your confidence is low in a particular domain, you tend to avoid challenges in that area — which prevents you from building the exact mastery experiences that would strengthen your belief in yourself.",
          fullExplanation: `This is the self-efficacy trap, and it's elegant in its cruelty: you doubt your ability to handle a certain type of challenge, so you avoid it. Because you avoid it, you never accumulate evidence that you can handle it. Because you lack evidence, your doubt persists. The avoidance that protects you from failure also protects you from growth.

The trap is most visible in domains adjacent to your strengths. You might be highly efficacious at work but avoid difficult conversations in relationships. You might handle logistical crises brilliantly but sidestep situations that require emotional vulnerability. The avoidance isn't random — it targets the specific areas where your self-efficacy is weakest.

Breaking the trap requires graduated exposure — deliberately seeking out small challenges in your avoidance domains, succeeding at them, and letting that success register as evidence. The key word is 'small.' You don't overcome a confidence deficit by throwing yourself at the hardest possible challenge. You overcome it by stacking small wins until the evidence tips the balance from doubt to belief.`,
          premiumHook: "Learn the graduated exposure protocol that builds self-efficacy in your weakest domains without overwhelming your current capacity.",
        },
      ],

      workplaceImplications: "At work, your moderate self-efficacy shows up as inconsistency in how you respond to challenges. In your confident domains, you're decisive and proactive. Outside them, you may hesitate, over-prepare, or defer to others when taking the lead would serve you better. The perception this creates is that you're capable but cautious — which can limit your advancement because people associate leadership with consistent confidence across domains. The most impactful development strategy is identifying one professional domain where your self-efficacy is weak and deliberately building mastery there. One domain shift changes the overall perception significantly.",

      relationshipImplications: "In relationships, your conditional self-efficacy means you show up with full confidence in some situations and visible uncertainty in others. This inconsistency can confuse partners who see your capability in one context and can't understand your hesitation in another. The key communication is naming the gap: 'I know I handle work crises well, but personal conflict is where I doubt myself.' This transparency turns the inconsistency from something your partner has to decode into something you're actively working on — which builds trust even before the underlying confidence develops.",

      emotionalPattern: "Your emotional response to adversity splits along the self-efficacy line. In domains where you trust your coping ability, you experience challenge as energising — stress shows up as activation rather than anxiety. In domains where doubt is present, the same level of challenge produces genuine anxiety, procrastination, and a nagging inner voice questioning whether you're up to this. The gap between these two emotional responses is the clearest map of where your self-efficacy needs strengthening.",

      stressTriggers: [
        "Novel situations with no playbook — your confidence depends on precedent, and the absence of precedent activates doubt",
        "Public evaluation or high-visibility challenges where failure would be witnessed and remembered",
        "Multiple simultaneous demands across both your confident and uncertain domains, stretching you thin in the areas where doubt already lives",
      ],
      flowTriggers: [
        "Challenges that sit within or just beyond your established competence zone — hard enough to engage fully, familiar enough to trust yourself",
        "Clear feedback loops that let you see your coping in action — visible evidence of your own effectiveness",
        "Collaborative environments where you can contribute your strengths while others cover your weaker domains",
      ],

      toolkit: [
        {
          title: "The Evidence Portfolio",
          context: "Your past coping successes aren't automatically available when new challenges arise. You need to make them accessible.",
          action: "Create a document — physical or digital — and list 10 specific situations where you faced something difficult and coped effectively. Include the challenge, what you did, and the outcome. Be specific: 'Managed the client crisis in March by restructuring the timeline and communicating transparently — retained the account.' Review this list before any challenge that triggers doubt. You're not manufacturing confidence; you're accessing evidence your brain fails to retrieve automatically.",
        },
        {
          title: "The Small Win Strategy",
          context: "Your avoidance domains need mastery experiences, but jumping into the deep end will backfire. Graduated exposure builds durable confidence.",
          action: "Identify one domain where your self-efficacy is weak. Design the smallest possible challenge in that domain — something you're 80% confident you can handle. Complete it. Log the success in your evidence portfolio. Next week, increase the difficulty by 10%. Repeat. This isn't about dramatic breakthroughs. It's about accumulating evidence at a pace that your belief system can absorb without rejecting.",
        },
        {
          title: "The Pre-Challenge Reframe",
          context: "Your default question before a challenge — 'Can I handle this?' — triggers a search for doubt. A different question triggers a search for capability.",
          action: "Before any challenging situation, replace 'Can I handle this?' with 'What have I handled before that's similar to this?' The second question directs your brain toward evidence of capability rather than evidence of doubt. Write down the similarities between the current challenge and past successes. The neurological effect is measurable: you're priming the retrieval of mastery memories rather than threat memories, which shifts your entire approach from defensive to engaged.",
        },
      ],
    },

    low: {
      overview: `When adversity arrives, your first and loudest internal response is doubt. Not just uncertainty — a deep, reflexive conviction that you don't have what it takes to handle this. The challenge feels bigger than your resources, the gap between what's required and what you can deliver feels unbridgeable, and the most natural response is to freeze, avoid, or defer to someone who seems more capable.

This pattern didn't appear randomly. Low self-efficacy is typically built through a history of experiences — real or interpreted — where your efforts didn't produce the results you needed. Maybe you tried hard and still failed. Maybe success was attributed to luck rather than your skill. Maybe the people around you handled your struggles for you, which felt supportive in the moment but robbed you of the mastery experiences you needed to build confidence in your own coping. Whatever the origin, the result is a belief system that consistently underestimates your actual capacity.

Here's what's critical to understand: low self-efficacy is not low ability. You are almost certainly more capable than you believe. The research on this is unambiguous — people with low self-efficacy consistently perform below their actual skill level, not because the skills are missing but because the belief deficit prevents full deployment of existing skills. Your ceiling is higher than your confidence lets you reach. The work ahead isn't about building new capability. It's about uncovering the capability that doubt is currently suppressing.`,

      strengths: [
        {
          title: "Thorough Preparation",
          description: "Because you don't trust yourself to improvise under pressure, you prepare more carefully than most people. This thoroughness means that when you do engage with a challenge, you've often thought through more scenarios and contingencies than someone who walks in on confidence alone.",
          deepDive: "Research on self-efficacy and preparation shows a counterintuitive pattern: moderate-to-low self-efficacy individuals who do engage with challenges often outperform high self-efficacy individuals in complex, detail-dependent tasks. The reason is preparation depth. When you can't rely on the belief that you'll figure it out in the moment, you compensate by figuring it out in advance. This preparation advantage is real and valuable — the challenge is ensuring you actually engage rather than letting doubt derail you before the preparation can pay off.",
        },
        {
          title: "Empathy for Struggle",
          description: "Because you know what it feels like to doubt yourself in the face of difficulty, you have genuine empathy for others in the same position. You don't dismiss struggle as weakness. This makes you a naturally supportive presence for people navigating their own adversity.",
        },
        {
          title: "Accurate Risk Assessment",
          description: "Where high self-efficacy can produce risk blindness, your lower confidence makes you more attentive to genuine obstacles and potential failure points. This caution, when balanced with action, produces more realistic plans and fewer unpleasant surprises.",
        },
      ],

      growthEdges: [
        {
          title: "The Avoidance Spiral",
          teaser: "Your doubt leads you to avoid challenges, which prevents you from building the coping evidence you need, which deepens the doubt. This spiral is the core mechanism keeping your self-efficacy low.",
          fullExplanation: `The avoidance spiral is the engine of low self-efficacy, and understanding it is the first step toward dismantling it. It works like this: a challenge appears. Doubt says you can't handle it. You avoid the challenge or find someone else to handle it. The challenge passes — but you've added another data point to the "I can't cope" column and zero to the "I can cope" column. Next time a similar challenge appears, the doubt is marginally stronger and the avoidance is marginally more automatic.

The spiral is self-reinforcing because avoidance feels like coping. You avoided the thing that would have been overwhelming, and you feel relief. Your brain interprets this as a success — "I protected myself." But the success was surviving, not coping. And the cost is that your world of manageable challenges gradually shrinks.

Breaking the spiral requires one thing: doing one small thing you're not sure you can handle, and surviving it. Not thriving — surviving. The bar is intentionally low because the goal isn't impressive performance. It's depositing a single piece of evidence into the "I can cope" column. That one deposit is worth more than a hundred affirmations because it's experiential rather than conceptual. Your brain believes what it experiences far more than what it's told.`,
          premiumHook: "Access the spiral-breaking protocol with daily micro-challenges calibrated to your current self-efficacy level.",
        },
        {
          title: "Externalising Success, Internalising Failure",
          teaser: "When you succeed, you attribute it to luck, help, or easy circumstances. When you fail, you attribute it to your own inadequacy. This attribution asymmetry ensures that successes never build confidence while failures always erode it.",
          fullExplanation: `This is the attribution pattern that keeps low self-efficacy locked in place, and it operates so automatically that you probably don't notice it happening. You ace a presentation: "The audience was easy." You navigate a personal crisis: "I had a lot of help." You solve a complex problem: "I got lucky." Meanwhile, every failure, no matter how small, lands squarely on "I'm not good enough."

The asymmetry is devastating because it makes self-efficacy impervious to positive evidence. You could string together a dozen coping successes and your confidence wouldn't shift, because each success gets attributed to something external. The evidence that would build self-efficacy is being systematically discarded.

The intervention is attribution retraining — deliberately catching yourself in the act of externalising success and forcing an internal attribution. Not arrogance. Accuracy. "Yes, the audience was receptive — and I prepared well and delivered clearly." "Yes, people helped — and I had the judgment to ask the right people for the right help." These aren't spin. They're the complete picture, including the part your doubt habitually edits out.`,
          premiumHook: "Get the attribution retraining exercises that rebuild the connection between your efforts and your outcomes.",
        },
      ],

      workplaceImplications: "At work, low self-efficacy creates a visibility problem that's the inverse of what you'd expect: you're not seen as incapable — you're seen as invisible. You volunteer less, advocate for yourself less, and take on fewer stretch assignments. Over time, your actual capabilities become hidden behind a pattern of playing it safe. Colleagues may perceive you as unambitious or disengaged when you're actually overwhelmed by doubt. The highest-leverage workplace intervention is one visible act of capability — volunteering for one project that stretches you, speaking up in one meeting where you'd normally stay silent. A single visible success disrupts the narrative more effectively than months of quiet competence.",

      relationshipImplications: "In close relationships, low self-efficacy can create a dynamic where your partner becomes your coping proxy — handling the difficult conversations, making the hard decisions, managing the stressful logistics. This isn't because you're incapable; it's because doubt pushes you to defer to whoever seems more confident. Over time, this dynamic breeds resentment on both sides: your partner feels burdened, and you feel increasingly dependent and diminished. Reclaiming agency in small relationship decisions — handling a difficult call, initiating a tough conversation, managing a stressful event — rebuilds both your self-efficacy and the balance of the relationship.",

      emotionalPattern: "Your emotional landscape under adversity is dominated by anticipatory anxiety. Before the challenge even arrives, doubt floods the system with worst-case projections and inadequacy narratives. The actual challenge often feels less overwhelming than the anticipation of it — but by the time you discover that, the anxiety has already consumed most of your energy. This gap between anticipated difficulty and actual difficulty is the key insight: your prediction system is systematically biased toward overestimating threats and underestimating your resources. Tracking this gap — noting how bad you expected it to be versus how bad it actually was — is one of the fastest ways to recalibrate.",

      stressTriggers: [
        "Novel challenges with no precedent in your experience — the absence of a proven playbook triggers the strongest doubt",
        "Situations where you're the sole responsible party with no fallback or safety net — the weight of sole accountability amplifies inadequacy feelings",
        "Comparison contexts where others seem to handle similar challenges effortlessly, reinforcing the narrative that you're uniquely incapable",
      ],
      flowTriggers: [
        "Well-defined tasks with clear steps where you can build momentum through incremental progress",
        "Supportive environments where it's safe to struggle openly without judgment or consequence",
        "Working alongside someone who believes in your capability more than you do — borrowed confidence is real and usable",
      ],

      toolkit: [
        {
          title: "The Prediction Tracker",
          context: "Your brain overestimates how badly things will go. Tracking the gap between prediction and reality recalibrates your threat assessment system.",
          action: "Before any challenge that triggers doubt, write down your prediction: how difficult it will be (1–10), what will go wrong, and how you'll perform. After the challenge, write the reality: actual difficulty, what happened, how you actually performed. Do this for 30 days. The data will show a consistent pattern — your predictions are worse than reality. This isn't positive thinking. It's empirical correction of a biased prediction system.",
        },
        {
          title: "The Micro-Mastery Practice",
          context: "Your self-efficacy needs evidence, and the fastest way to accumulate evidence is to succeed at many small challenges rather than waiting for one big one.",
          action: "Every day, do one thing that's slightly outside your comfort zone. Emphasis on slightly — this should feel like a stretch, not a crisis. Send the email you've been avoiding. Have the conversation you've been deferring. Make the decision you've been delegating. Log each one. After two weeks, read the log. You'll see a person who handles things — and that person is you. The evidence is irrefutable because you collected it yourself.",
        },
        {
          title: "The Attribution Correction",
          context: "Your success-discounting habit prevents positive experiences from building confidence. This practice interrupts the automatic discounting.",
          action: "After any success — even a small one — write down three things you did that contributed to the outcome. Not luck. Not circumstances. Not other people. Your actions, your decisions, your effort. If you catch yourself writing 'It wasn't that hard' or 'Anyone could have done that,' stop and replace it with what you specifically did. This isn't about inflating your role. It's about including it in the story at all, because right now your narrative systematically edits you out of your own successes.",
        },
      ],
    },
  },
};
