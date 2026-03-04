import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_6: EnneagramTypeContent = {
  typeNumber: 6,
  name: "The Loyalist",
  shortName: "Loyalist",
  tagline: "Scans for danger and turns vigilance into devotion",
  color: "#93A2B6",
  center: "head",

  coreFear: "Being without support, guidance, or security — being unable to survive on your own in a world that feels fundamentally unreliable",
  coreDesire: "To have security, support, and certainty — to find a solid ground that won't shift under your feet",
  coreMotivation: "To have security and support, to test the loyalty of others, to fight against anxiety and insecurity, to build systems and alliances that protect against worst-case scenarios, to find something trustworthy to believe in",
  defensePattern: "Projection — attributing your own anxiety to external threats and other people's intentions. You don't just worry; you assign your inner turbulence to the outside world, then react to the threat you created.",

  overview: `Your mind is a threat-detection system running 24/7. Where others walk into a room and see furniture, you see exit routes. Where others hear a compliment, you hear the thing it might be covering. Where others take stability for granted, you know — in your bones — that stability is an illusion maintained by effort, vigilance, and the willingness to see what nobody else wants to look at. This isn't paranoia. It's a perceptual system calibrated to register danger, inconsistency, and hidden motives.

This means you see things other people miss. You're the one who spots the flaw in the plan everyone else signed off on. You're the one who asks the uncomfortable question in the meeting. You're the one who reads the fine print, checks the references, and thinks about what happens when the optimistic scenario doesn't materialize. Your mind runs simulations — constantly — playing out possible futures so you'll be ready when things go sideways.

The paradox at your core is this: you are the most courageous type in the Enneagram, precisely because you feel fear most acutely. Courage isn't the absence of fear. It's action in the presence of fear. And nobody acts in the presence of fear more consistently than you. You show up for people. You keep your commitments. You run toward the burning building because someone you care about is inside — and you do it while your entire nervous system is screaming at you to run the other way.

This fear expresses itself in two directions, and most Sixes know both. The phobic response moves toward safety: compliance, alliance-seeking, deference to authority, avoidance of conflict. The counterphobic response moves toward the fear: confrontation, risk-taking, preemptive aggression, challenging the very authority you wish you could trust. You might be phobic at work and counterphobic in relationships, or vice versa. The spectrum shifts by context, but the engine is the same — your relationship with fear is the organizing principle of your life, whether you run from it or straight at it.

The most developed Sixes learn to distinguish between real threats and projected ones — to trust their own judgment rather than outsourcing it to authority figures or contrarian rebellion. They discover that the security they've been seeking externally has been available internally all along. The ground doesn't stop shifting. But they learn to stand on it anyway.`,

  descriptionInsight: "Your vigilance isn't a disorder to medicate — it's an intelligence system that reads environments, detects inconsistency, and protects the people you love. The work isn't silencing the alarm. It's learning to trust your own authority instead of endlessly scanning for someone or something more reliable than yourself.",

  strengths: [
    {
      title: "Threat Intelligence",
      description: "You see problems before they materialize. While others are celebrating the launch, you're already thinking about the three ways it could fail and what to do about each one. This isn't pessimism — it's operational foresight. Teams, organizations, and relationships that include a Six are dramatically more prepared for reality.",
      deepDive: "Your threat-detection system operates at a level most people can't access. You process environmental cues — tone shifts, inconsistencies between words and behavior, the thing that's slightly off about a situation — and synthesize them into intuitions that often prove correct. The problem isn't that your radar is wrong. It's that it never turns off. You scan at dinner, in bed, on vacation. Every environment gets the same treatment: catalogued, assessed, war-gamed. This is extraordinarily useful in high-stakes contexts — crisis management, security, strategic planning, parenting. It's exhausting in low-stakes ones. Learning to calibrate your vigilance to the actual threat level of a situation is the skill that transforms your strength from a burden into a superpower.",
    },
    {
      title: "Fierce Loyalty",
      description: "When you commit to someone, you're in. Not fair-weather in, not until-something-better-comes-along in. You are the person who shows up at 3am, who remembers the thing you mentioned once six months ago, who will fight for the people in your circle long after everyone else has moved on.",
      deepDive: "Your loyalty has a depth that most people don't understand because most people experience loyalty as a preference. For you, it's structural. Once someone is inside your trust circle, defending them becomes as automatic as breathing. You'll advocate for friends in their absence, remember commitments others have forgotten, and tolerate enormous inconvenience to honor your word. The flip side is that this loyalty demands reciprocity. You're always monitoring: do they show up the way I show up? Would they do this for me? This testing behavior can strain the very relationships you're trying to protect. The growth move is recognizing that testing loyalty often undermines it — that trust is built through gradual experience, not through trials.",
    },
    {
      title: "Systematic Thinking",
      description: "You build frameworks, contingency plans, and decision trees instinctively. Where others fly by the seat of their pants, you've already thought through scenarios A through F and have a binder for each. Organizations run on people like you — the ones who actually think about what happens next.",
      deepDive: "Your systematic thinking emerges from your need for certainty in an uncertain world. Since the world won't provide guarantees, you build them yourself — through protocols, backup plans, and anticipatory logic. This makes you exceptional at operational work, risk assessment, project management, and any domain where foreseeing problems is more valuable than generating excitement. Your systems thinking also extends to social dynamics: you naturally map power structures, alliances, and potential conflicts in any group you enter. You know who to trust, who has hidden agendas, and where the fault lines are — often before the group itself has figured it out.",
    },
    {
      title: "Relational Courage",
      description:
        "You feel fear more intensely than any other type, yet you act despite it — for the people and causes you believe in. The Six who runs toward danger to protect someone they love is performing the purest act of courage in the Enneagram: action taken in full awareness of the cost. This is not bravado. It is devotion expressed through the body.",
    },
    {
      title: "Institutional Memory",
      description:
        "You remember everything — the promises people made, the context behind the decision, the lesson from the last time this was tried. While others chase novelty, you carry forward the accumulated wisdom of experience. This makes you an irreplaceable anchor in teams, families, and communities that would otherwise repeat their mistakes indefinitely.",
    },
  ],

  growthEdges: [
    {
      title: "The Anxiety Engine",
      teaser: "Your mind generates worst-case scenarios faster than you can resolve them. Each resolved worry spawns three new ones. The scanning never stops because the goal — absolute certainty — is unachievable. You're running on a treadmill that accelerates the faster you go.",
      fullExplanation: "Your anxiety isn't about specific threats. It's about the underlying condition of existence: things are uncertain and always will be. Your mind tries to solve this by anticipating every possible danger, but each scenario you address reveals ten more you hadn't considered. The search for certainty is a game you can't win, because certainty doesn't exist.\n\nThe mechanism works like this: your threat-detection system flags a potential problem. You worry about it. You develop a contingency. Your mind briefly relaxes — then immediately asks 'but what about...?' and the cycle restarts. The anxiety isn't a response to the threats. The threats are a vehicle for the anxiety. If you eliminated every external danger, your mind would invent new ones, because the anxiety is the engine, not the exhaust.\n\nThe breakthrough comes when you stop trying to think your way to security and start building a felt sense of inner ground. Not 'I've prepared for everything' — that's the trap. But 'I trust my capacity to handle what comes, even things I haven't anticipated.' This shifts the locus of security from external preparation to internal resilience, which is the only form of security that actually holds.",
    },
    {
      title: "Authority Ambivalence",
      teaser: "You oscillate between seeking strong authority figures to follow and rebelling against the very authorities you chose. Neither position resolves the underlying question: can you trust your own judgment? Both following and fighting are ways of avoiding the answer.",
      fullExplanation: "The Six's relationship with authority is the most complex in the Enneagram. Phobic Sixes seek authority — they want someone competent, trustworthy, and strong to tell them the ground is safe. Counterphobic Sixes challenge authority — they push back, test, provoke. Most Sixes oscillate between both poles depending on context. But both responses share the same root: the belief that your own inner authority isn't sufficient.\n\nThis plays out everywhere. At work, you either over-defer to your boss or become the perpetual devil's advocate. In relationships, you either seek a partner who feels like a safe harbor or choose someone you can test and push against. With institutions — religion, government, organizations — you're either a devoted member or a vocal skeptic, sometimes flipping between the two with the same institution.\n\nThe growth move is recognizing that both positions — compliance and rebellion — are reactions to external authority rather than expressions of internal authority. The question isn't 'who should I follow?' or 'who should I fight?' It's 'what do I actually believe, and am I willing to stand on that?' This is terrifying for a Six, because trusting yourself means losing the safety net of blaming the authority when things go wrong.",
    },
    {
      title: "Loyalty Testing",
      teaser: "You test the people closest to you — sometimes consciously, sometimes not. You create small crises to see who stays. You push to see who pushes back. The test is designed to prove loyalty, but it often erodes the very trust you're trying to verify.",
      fullExplanation: "Testing is the Six's way of managing the unbearable uncertainty of trust. You can't know for sure that someone will be there when it matters, so you create rehearsals — withdrawing to see if they pursue you, picking a fight to see if they stay, making an unreasonable request to see if they accommodate. Each successful test provides temporary relief. Then the doubt returns: maybe they only passed because the stakes were low.\n\nThe testing pattern is self-defeating because it changes the data you're collecting. A partner who's subjected to constant loyalty tests doesn't respond the same way as a partner who feels trusted. Your testing creates the very instability you're scanning for. The relationship you're evaluating has already been altered by the evaluation itself.\n\nThe path forward isn't to stop needing reassurance — that's asking a Six to stop being a Six. It's to learn to ask directly for what you need rather than creating covert tests. 'I'm feeling anxious and I need to hear that we're okay' is vulnerable and terrifying, but it builds the trust that testing destroys. It also gives your partner the chance to show up for you in a real way, rather than unknowingly auditioning for a role in your anxiety's screenplay.",
    },
  ],

  relationshipStyle: "The Devoted Guardian",
  relationshipPreview: "You bring unwavering commitment, fierce protectiveness, and deep reliability to your relationships. You don't do disposable connections — when you let someone in, you build a fortress around them. The people who love you know they have someone who will never quietly disappear, who will fight for the relationship when things get hard.",
  relationshipDeepDive: `Your relationship pattern has a distinctive engine: the oscillation between trust and doubt. Early on, you're cautiously hopeful — you want to believe this person is safe, but you're watching carefully for red flags. You notice everything: the text that took too long, the story that doesn't quite add up, the moment they seemed distracted when you were being vulnerable. This isn't suspicion in the ordinary sense. It's your threat-detection system doing what it does — scanning for inconsistency to protect you from betrayal.

As the relationship deepens, a paradox emerges: the more you care, the more you have to lose, and the more your anxiety activates. This is when the testing behaviors intensify. You might withdraw to see if they notice. You might pick a fight about something that isn't the real issue. You might ask the same question in three different ways to see if the answer stays consistent. None of this is manipulation — it's the Six's version of trying to find solid ground in the terrifying freefall of love. The phobic Six becomes clingy and reassurance-seeking; the counterphobic Six becomes provocative, pushing the partner away to see if they'll fight to come back.

The breakthrough in relationships comes when you learn to name the anxiety rather than act it out. Instead of testing your partner, you tell them you're scared. Instead of scanning for evidence of future betrayal, you stay present with the evidence of current devotion. Your partners don't need to be perfect to be trustworthy. They need to be consistent — and you need to let consistency count as evidence, rather than dismissing it because it doesn't provide the absolute guarantee your anxiety demands.`,

  careerHeadline: "You thrive in roles that reward vigilance, systematic thinking, and the courage to name what everyone else is ignoring.",
  careerDirections: [
    "Risk assessment, compliance, and security — turning worst-case thinking into institutional protection",
    "Crisis management and emergency response — staying calm and systematic when everyone else panics",
    "Legal work and investigation — where healthy skepticism and attention to inconsistency are core skills",
    "Community organizing and advocacy — channeling loyalty and protective instincts into collective action",
    "Operations and project management — building the systems that keep organizations from falling apart",
  ],
  careerDeepDive: `Your career sweet spot is anywhere your vigilance is an asset rather than a liability. In most social settings, people wish you'd relax and stop worrying. In risk management, emergency medicine, legal compliance, and security work, your worry is literally the job description. Finding a context where your natural wiring is valued — not merely tolerated — is transformative for both your performance and your self-concept.

The Sixes who struggle most professionally are the ones in environments where blind optimism is the culture. Startups that punish "negativity," teams that treat dissent as disloyalty, organizations that reward enthusiasm over accuracy — these environments gaslight your core gift. You start to doubt your own perceptions, which triggers more anxiety, which makes you seem even more "difficult." The irony is painful: the organizations that most need your critical thinking are often the ones least willing to hear it.

The trap for Sixes is staying in jobs they've outgrown because leaving feels too risky. You build loyalty to institutions the way you build loyalty to people — and leaving feels like betrayal, even when the institution no longer serves you. The growth move is recognizing that loyalty to yourself is not disloyalty to others, and that the security you seek from a role title or a steady paycheck is less reliable than the security of knowing you can handle whatever comes next.`,

  emotionalPattern: `Your emotional life is dominated by a feeling most people don't have a name for: the anticipation of threat. It's not quite fear — fear has an object. It's the readiness for fear, the pre-fear that keeps your system on alert even when nothing is wrong. This baseline vigilance colors everything: your sleep, your relationships, your capacity to enjoy good things while they're happening. You can be at a beautiful dinner with people you love and still have a thread of your consciousness running background checks on whether everything is actually okay.

The signature emotional pattern of the Six is doubt. Not intellectual doubt — you can reason your way through most problems. But existential doubt: am I safe? Can I trust this? Is this going to hold? This doubt attaches to whatever matters most. Secure in your job? Now doubt your relationship. Relationship solid? Now doubt your health. It's a floating state that seeks objects, not a response to objects that creates the state. This is why resolving one worry never brings lasting peace — the doubt simply relocates to the next available target.

Your emotional growth isn't about becoming less anxious. It's about developing a different relationship with anxiety. The Six who fights anxiety — trying to suppress it, outthink it, or resolve it through more preparation — strengthens it. The Six who can say "I notice I'm anxious right now, and that's okay" begins to loosen its grip. The anxiety doesn't go away. But it stops running the show. You learn to carry it like weather rather than treat it as breaking news.`,

  stressTriggers: [
    "Ambiguity, mixed signals, and situations where you can't determine who or what to trust",
    "Authority figures who are inconsistent, incompetent, or demand blind obedience",
    "Being isolated from your support system or feeling like your alliances are shifting",
  ],
  flowTriggers: [
    "A tight-knit group where mutual loyalty is demonstrated, not just declared",
    "Problem-solving under pressure where your vigilance is an obvious asset",
    "A trusted authority or framework that provides genuine structure without demanding blind faith",
    "Physical activity that channels anxious energy into the body — movement, sports, building things",
  ],

  toolkit: [
    {
      title: "The Probability Check",
      context: "When your mind is spinning worst-case scenarios, it's treating low-probability events as certainties. The anxiety makes the unlikely feel inevitable. You need a circuit-breaker that introduces actual odds into the equation.",
      action: "Write down the specific scenario you're worried about. Now estimate the actual probability: not how it feels, but what a neutral observer would say. If it's below 30%, write down what you'd do if it happened anyway. Often, realizing you have a response plan is more calming than trying to prevent the scenario entirely.",
    },
    {
      title: "The Authority Audit",
      context: "You may be outsourcing your confidence to someone else's judgment — a boss, a partner, an expert, a system. When you notice yourself unable to decide without checking with someone first, or reflexively opposing someone just because they're in charge, the same pattern is running.",
      action: "Before seeking external input on a decision, write down what you actually think first. Not what you think they'll say. Not the safe answer. What does your own gut tell you? Make a practice of deciding first, then consulting — so the consultation adds to your judgment rather than replacing it.",
    },
    {
      title: "The Body Ground",
      context: "Your anxiety lives in your head — an endless loop of what-ifs. When you're spiraling, more thinking makes it worse. You need to move the processing out of your mind and into your body, where it can discharge.",
      action: "When the anxiety loop starts, do something intensely physical for 10 minutes: a fast walk, push-ups, cold water on your face, anything that demands bodily attention. The goal isn't distraction — it's giving your nervous system a discharge pathway. Anxious energy that stays in the head amplifies. In the body, it metabolizes.",
    },
    {
      title: "The Trust Ledger",
      context: "You tend to discount evidence of safety and amplify evidence of threat. This creates a distorted data set where your relationships and circumstances look less reliable than they actually are.",
      action: "Keep a running note — digital or paper — of moments when someone showed up for you, kept their word, or demonstrated loyalty unprompted. When doubt about a person surfaces, check the ledger before running the anxiety simulation. Build your conclusions about trustworthiness from accumulated evidence rather than from your current emotional state.",
    },
  ],

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Hypervigilance",
        description: "Your scanning intensifies. You see threats everywhere, question everyone's motives, and can't stop running contingency plans. Sleep suffers because your mind won't stand down.",
      },
      {
        stage: 2,
        label: "Reactive Suspicion",
        description: "Doubt hardens into accusation. You start interpreting neutral behavior as evidence of betrayal or incompetence. Relationships strain as your testing behaviors escalate and your inner circle feels interrogated rather than loved.",
      },
      {
        stage: 3,
        label: "Movement to Three",
        description: "Under prolonged stress, you take on unhealthy Type 3 patterns: becoming image-conscious, competitive, and focused on proving your value through achievement to create the security you can't feel internally.",
      },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 9 — releasing the need to control outcomes, trusting that things can work out without your constant vigilance, and finding peace in the present moment rather than living in anticipated futures.",
    flowTriggers: [
      "A reliable group with mutual commitment",
      "Problem-solving where vigilance is valued",
      "Physical activity that discharges anxious energy",
      "Trusted structure without authoritarian rigidity",
    ],
    flowDescription: "You enter flow when your vigilance has a clear purpose and your loyalty has a worthy object — when the scanning stops being anxious and becomes sharp, focused, protective attention directed at something that matters.",
  },

  careerAlignment: {
    naturalFits: [
      "Risk management, compliance, and institutional security",
      "Crisis response, emergency coordination, and disaster planning",
      "Legal work, investigation, and forensic due diligence",
      "Operations leadership, logistics, and systems administration",
    ],
    likelyDrains: [
      "High-ambiguity environments with no clear authority, process, or chain of command",
      "Cultures that punish dissent, label caution as negativity, or demand performative optimism",
      "Solo entrepreneurship with no team, mentor network, or organizational support structure",
    ],
    careerWarning: "Watch for the loyalty trap: staying in roles or organizations you've outgrown because leaving feels like betrayal. Security from a job title is less durable than security from your own adaptability.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 9 — the Peacemaker. This means learning to trust that the world can hold you without your constant vigilance, to find inner peace that doesn't depend on having every contingency covered.",
    areas: [
      {
        title: "From Vigilance to Trust",
        description: "Your default is to scan for what could go wrong. Growth means building the capacity to rest in what's going right — not by ignoring risk, but by recognizing that you can handle uncertainty without pre-solving every scenario. Trust isn't the absence of doubt. It's the willingness to act before doubt has been fully resolved.",
      },
      {
        title: "From Doubt to Inner Authority",
        description: "Shifting from 'who can I trust to tell me I'm safe?' to 'I trust my own capacity to navigate whatever comes.' This doesn't mean trusting blindly. It means trusting yourself — the one person your doubt has kept you from relying on. The Six who finds their own inner authority doesn't stop asking questions. They stop needing someone else to validate the answers.",
      },
      {
        title: "From Worst Case to Present Tense",
        description: "Your mind lives in the future — specifically, the worst version of the future. Growth means returning to the present, where most of the time, right now, things are actually okay. Not permanently okay. But okay right now. And right now is all there ever is.",
      },
    ],
  },

  heroImage: buildHeroImagePath(6),
  sectionImages: buildSectionImages(6),
};
