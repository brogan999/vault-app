import type { DISCStyleContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const CONSCIENTIOUSNESS: DISCStyleContent = {
  styleId: "conscientiousness",
  styleLetter: "C",
  name: "Conscientiousness",
  shortName: "Analyst",
  tagline: "Holds the standard, finds the flaw, and makes sure it's right before it ships",
  color: "#328181",

  overview: `You're the person who catches the error on page forty-seven. While your colleagues are celebrating the big-picture win, you're quietly verifying that the numbers actually add up, the contract language is precise, and the edge cases have been accounted for. This isn't pessimism — it's rigor. Your mind naturally runs a continuous quality audit on everything it encounters, which means you spend your time in the territory most teams skip: the details that determine whether something works reliably or just looks like it does.

This makes you the person people trust when accuracy matters. Not roughly. Exactly. You set standards that hold, build systems that don't break under pressure, and ask the questions nobody else thought to ask. In environments where a single mistake carries real consequences — regulatory, financial, technical, reputational — you're not just useful, you're the reason the organization sleeps at night.

Your core pattern is precision. Not for its own sake, but because you've learned that quality is the compounding asset most people undervalue. When you insist on getting the details right, you prevent the downstream failures that cost ten times more to fix than to prevent. The cost is that your thoroughness can slow momentum, your standards can feel suffocating to faster-moving colleagues, and your preference for analysis over action can hold good work hostage to perfect work.

The most effective C-styles learn to calibrate their precision to the stakes. Not every deliverable needs the same level of scrutiny — a client-facing audit requires your full analytical depth, but an internal brainstorm does not. Your growth isn't about lowering your standards. It's about deploying them strategically, so your rigor protects what matters most without grinding everything else to a halt.`,

  descriptionInsight: "Your profile shows a strong drive for accuracy, systematic thinking, and quality assurance. This isn't overthinking or rigidity — it's an operating system optimized for environments where precision, reliability, and getting it right the first time are what separate good organizations from great ones.",

  strengths: [
    {
      title: "Analytical Rigor",
      description: "You don't accept surface-level answers. When presented with data, a proposal, or a plan, your first instinct is to pressure-test it — checking assumptions, verifying sources, and mapping the logic chain from premise to conclusion. This means your analyses hold up under scrutiny when others' fall apart.",
      deepDive: "Your analytical rigor comes from a cognitive pattern that most professionals lack: you're genuinely uncomfortable with unverified claims. Where others read a dashboard and move on, you ask how the metric was calculated, whether the sample size is meaningful, and what the data looks like if you change the time window. This makes you invaluable in any role where decisions are data-dependent — finance, engineering, compliance, research, strategy.\n\nThe risk: analysis can become its own reward. When you're deep in a problem, the act of understanding feels productive even when the marginal insight no longer justifies the time invested. Your growth comes from setting an analysis budget before you start — deciding in advance how much time a question deserves, and forcing yourself to deliver a recommendation when that budget expires, even if it carries uncertainty. Perfect information doesn't exist; your job is to make the best call with the best available data, not to achieve omniscience.",
    },
    {
      title: "Quality Control",
      description: "You hold a standard that most people don't even see. Typos in client deliverables, inconsistencies in data models, gaps in process documentation — these aren't minor annoyances to you, they're signals of systemic sloppiness. Your quality filter catches the errors that would have compounded into expensive problems downstream.",
      deepDive: "Your quality instinct operates like an immune system for the organization — it detects threats that aren't visible yet. The misaligned number in a financial model that would have cascaded into a wrong decision. The ambiguous clause in a contract that would have created a legal exposure. The untested edge case that would have crashed in production on launch day.\n\nThe shadow side emerges when your quality filter can't distinguish between high-stakes and low-stakes contexts. Spending forty-five minutes perfecting the formatting of an internal memo applies the same energy to a document nobody will re-read. The most effective C-styles develop a triage instinct: this needs to be bulletproof, this needs to be good enough, this just needs to exist. That triage — not your standards themselves — is what makes your quality focus sustainable.",
    },
    {
      title: "Systematic Thinking",
      description: "You don't just solve problems — you build systems that prevent them from recurring. Where others apply a quick fix, you design the process, the checklist, the documentation that ensures the issue stays solved. Your systems outlast your involvement, which makes you a genuinely scalable contributor.",
      deepDive: "Your systematic thinking is a form of organizational leverage that's chronically undervalued. The runbook you wrote saves twenty hours every time someone follows it. The QA process you designed catches defects before they reach customers. The decision framework you documented lets teams make consistent calls without escalating every edge case to leadership.\n\nThe risk: systems can become rigid. When the environment changes — new market conditions, new technology, reorganization — the system that was perfectly calibrated to yesterday's reality becomes a constraint on tomorrow's. Your growth edge is building systems with explicit expiration dates or review triggers, so your processes evolve with the organization instead of calcifying into bureaucracy that nobody questions because 'that's how we've always done it.'",
    },
    {
      title: "Risk Assessment",
      description: "You see the failure modes that optimists miss. Before committing to a plan, you naturally map what could go wrong, how likely each scenario is, and what the mitigation looks like. This makes you the person who prevents expensive surprises — the organizational seatbelt nobody appreciates until the crash.",
    },
    {
      title: "Process Design",
      description: "You create order from chaos. When a team is operating on tribal knowledge, ad-hoc decisions, and 'we'll figure it out,' you're the one who builds the repeatable framework that makes quality consistent and onboarding possible. Your processes don't just organize work — they encode institutional knowledge.",
    },
  ],

  growthEdges: [
    {
      title: "Analysis Paralysis",
      teaser: "Your thoroughness becomes a liability when it prevents timely decisions. There's always one more variable to check, one more scenario to model, one more data point to gather. Meanwhile, the window for action narrows, competitors move, and your team waits for a green light that never comes because the light never feels green enough.",
      fullExplanation: "Here's what happens from the inside: you see a decision with incomplete information, you identify the gaps, you go gather more data. Responsible. Thorough. Correct. Here's what happens from the outside: the team stalls. The deadline passes. The opportunity closes. And the analysis, however rigorous, becomes irrelevant because it arrived after the moment when it could have changed the outcome.\n\nThe problem isn't your thoroughness. It's the asymmetry in how you weigh risks. You overweight the risk of being wrong and underweight the risk of being late. In most business contexts, a good decision made on time beats a perfect decision made too late. An 80%-confidence call on Monday is worth more than a 95%-confidence call on Friday — because the team had four extra days to execute, learn, and adjust.\n\nThe intervention: before starting any analysis, define your decision criteria and your deadline. Write them down. When the deadline arrives, make the call with whatever you have. You'll discover that most of the time, your 80% answer was the same as your 95% answer — you just would have spent the extra time confirming what you already knew.",
    },
    {
      title: "The Perfectionism Tax",
      teaser: "Your standards protect quality, but they also create an invisible tax on everything you touch. Projects take longer, feedback feels heavier, and colleagues learn that working with you means everything will be scrutinized to a degree that feels disproportionate to the stakes. The result: people route around you to move faster, and you lose influence over the work that needs your eye the most.",
      fullExplanation: "You probably don't experience your standards as perfectionism. They feel like basic professionalism — of course the deck should be consistent, of course the data should be validated, of course the edge cases should be covered. And you're often right. The issue is that you apply the same standard everywhere, regardless of context.\n\nThis creates a specific cost pattern: you spend equal energy on high-stakes deliverables (where your precision is invaluable) and low-stakes work (where it's a bottleneck). Your colleagues notice. They start avoiding your review because they know it'll add two days and a round of changes that feel like polishing a surface nobody will touch. Over time, the work that genuinely needs your scrutiny stops reaching you — not because people don't value your eye, but because the cost of accessing it is too high.\n\nThe fix isn't lowering your standards. It's creating explicit tiers: this is a 'must be perfect' deliverable, this is a 'good enough' deliverable, this is a 'just ship it' deliverable. Communicate the tier to your team upfront. When you apply your full analytical weight only where it matters, people seek your input instead of avoiding it.",
    },
    {
      title: "Emotional Distance",
      teaser: "Your comfort with data and logic creates an uncomfortable gap with colleagues who operate on intuition, emotion, and relational trust. You're not cold — but your preference for objective evidence over subjective experience can make you seem dismissive of the human dynamics that actually drive team performance.",
      fullExplanation: "You process the world through evidence, logic, and frameworks. When a colleague says 'this feels wrong,' your instinct is to ask 'what data supports that?' This response is intellectually sound and interpersonally tone-deaf. Feelings aren't data points to be validated — they're signals about team dynamics, morale, and engagement that your analytical framework doesn't capture.\n\nThis creates a specific blind spot: you can be technically right and relationally wrong at the same time. The feedback that's factually accurate but delivered without warmth. The process improvement that's logically optimal but ignores the team's emotional capacity for more change. The meeting where you correct someone's numbers in front of the group because accuracy matters — not realizing that you just undermined their confidence in a way that will cost more than the error ever would have.\n\nThe growth move is adding emotional data to your analysis. Before delivering critical feedback, ask: 'What's this person's current state? How much capacity do they have to absorb this?' Before redesigning a process, ask: 'What's the team's relationship with the current process? What would they lose emotionally if I changed it?' You don't have to lead with feelings. But treating them as legitimate inputs — not noise — makes your already-excellent analysis complete.",
    },
  ],

  communicationStyle: "Precise, structured, evidence-based. You organize your thoughts before speaking and present information in logical sequences with supporting data. Emails are thorough, meetings are prepared for, and claims are sourced. Your communication is highly effective with other C-styles and D-styles who value substance, but can feel overly detailed or impersonal to I and S styles who need relational warmth and bottom-line brevity before they engage with your supporting evidence.",

  leadershipApproach: "You lead by setting clear standards, building reliable systems, and ensuring quality at every stage. Your leadership is most effective in technical environments, compliance-heavy industries, and any context where getting it right matters more than getting it fast. You're less effective in environments that require rapid improvisation, high ambiguity tolerance, or leading through charisma rather than competence. Your optimal leadership configuration pairs you with a strong I or D-style second-in-command who drives momentum and stakeholder energy while you ensure the foundation is sound.",

  conflictStyle: "You engage conflict with facts and logic, not volume or emotion. In disagreements, you prepare your case, present evidence, and expect the same rigor from others. You respect people who can argue their position with data and lose patience with emotional appeals or anecdotal reasoning. Your conflict weakness: you can weaponize information — using your preparation advantage to win arguments rather than solve problems — and your emotional composure under fire can read as condescension to colleagues who experience conflict through feeling rather than analysis.",

  relationshipStyle: "The Thoughtful Partner",
  relationshipPreview: "In relationships — professional and personal — you bring reliability, depth, and a quiet attentiveness that flashier types can't match. People close to you know that your word is precise and your commitments are kept. Your partner or closest colleagues get someone who remembers the details, thinks before speaking, and shows care through preparation and follow-through rather than grand gestures.",
  relationshipDeepDive: `Your relationship pattern is built on dependability: you show up prepared, you follow through on promises, and you pay attention to the details that matter to the people you care about. These are genuine strengths — the kind that compound over years and create deep trust. The challenge emerges when the relationship needs something your analytical default doesn't provide — spontaneity, emotional vulnerability, or the willingness to be imperfect together.

The C-style's hidden vulnerability in relationships is the assumption that care equals correctness. You show love by getting things right — remembering preferences, optimizing plans, preventing problems before they occur. But for many people, the most valuable thing you can offer is your unguarded self — the version that doesn't have an answer, hasn't done the research, and is simply present with whatever messy emotion is happening. This doesn't come naturally to you, and it may feel uncomfortably exposed. But the relationships that matter most will eventually demand it.

The specific risk to watch: your critical eye doesn't turn off at home. Under stress, your quality filter starts scanning the people closest to you — noticing their flaws, inefficiencies, and logical inconsistencies with the same precision you'd apply to a spreadsheet. Building a conscious boundary — 'this person is not a deliverable to be optimized' — protects relationships from your stress-mode defaults.`,

  careerHeadline: "You thrive in roles that reward precision, depth of expertise, and getting it right the first time.",
  careerDirections: [
    "Engineering and architecture — software, systems, civil, financial",
    "Data science, analytics, and research",
    "Compliance, audit, and regulatory roles",
    "Quality assurance and process engineering",
    "Technical consulting and specialized advisory",
  ],
  careerDeepDive: `Your career sweet spot is any role where the organization needs someone to ensure accuracy, build reliable systems, and apply deep expertise to complex problems. You're at your best in environments with clear quality standards, intellectual complexity, and the autonomy to do thorough work without being rushed past your professional comfort level.

The C-style career trap is the opposite: roles with constantly shifting priorities, ambiguous quality thresholds, or organizational cultures that reward speed and volume over precision and depth. You can survive in these environments, but you'll be perpetually frustrated, and your natural strengths will read as bottlenecks rather than assets.

The most successful C-styles eventually learn that their career ceiling isn't set by their expertise or analytical depth — it's set by their ability to communicate value in terms non-experts understand. The brilliant analyst whose insights never influence decisions because they're buried in fifty-page reports isn't being thorough — they're being ineffective. Your long-term career strategy should include deliberate investment in executive communication: leading with the conclusion, translating complexity into simplicity, and learning that 'good enough to act on' is often the highest compliment your analysis can receive.`,

  emotionalPattern: `Your emotional life is richer than people assume — you just process it internally rather than externally. You experience deep satisfaction in mastery, quiet pride in precision, and genuine frustration when standards are compromised. The more visible emotions — excitement, anger, enthusiasm — register less clearly in your expression, not because you don't feel them but because your system filters them through analysis before they reach the surface.

This emotional processing style is an asset in professional contexts where composure and objectivity matter. But it creates a specific blind spot: others may read your calm as indifference, your precision as coldness, and your measured responses as lack of investment. You care deeply — you just show it through quality of work rather than warmth of expression. Learning to occasionally narrate your internal state — 'I'm really invested in getting this right' or 'this matters to me' — gives colleagues the emotional signal your behavior doesn't naturally broadcast.`,

  stressTriggers: [
    "Forced compromises on quality — being told to ship work you know isn't ready",
    "Ambiguity without structure — unclear expectations, shifting requirements, undefined success criteria",
    "Incompetence around you — watching preventable errors caused by lack of preparation or intellectual laziness",
  ],
  flowTriggers: [
    "Complex problem-solving that rewards deep analysis and systematic thinking",
    "Building elegant systems that turn chaos into repeatable, reliable processes",
    "Research and investigation where thoroughness directly determines the quality of the outcome",
    "Refining and optimizing existing work to a level of precision others can't match",
  ],

  toolkit: [
    {
      title: "The 80% Rule",
      context: "Your instinct is to refine until something is perfect, but most work reaches diminishing returns well before perfection. The last 20% of polish often takes 80% of the time — and nobody but you notices the difference.",
      action: "Before starting any deliverable, define what 'good enough' looks like — in writing. When you hit that threshold, ship it. Set a timer if you need to. You'll discover that your 80% is most people's 100%, and the time you recover can be redirected to work where your precision actually changes outcomes.",
    },
    {
      title: "The Emotional Check-In",
      context: "Your default communication is factual and task-oriented, which means colleagues rarely know where they stand with you relationally. People need periodic signals that you value them as humans, not just as contributors to quality.",
      action: "Once a day, give a colleague specific positive feedback that's about them, not their output. Not 'the report was accurate' but 'I appreciate how thoughtfully you approached that problem.' The distinction matters: one evaluates work, the other recognizes the person. The discomfort you feel is the gap between your relational intent and your relational expression narrowing.",
    },
    {
      title: "The Decision Deadline",
      context: "Open-ended analysis is your comfort zone, but decisions have a shelf life. The value of your analysis drops every hour the team waits for your recommendation.",
      action: "For every analytical task, set a hard deadline before you start — not when you'll be done analyzing, but when you'll deliver a recommendation regardless of remaining uncertainty. Write it on a sticky note. When the deadline hits, lead with your best answer and list your remaining uncertainties as caveats, not blockers. Teams can act on informed uncertainty; they can't act on silence.",
    },
    {
      title: "The Imperfection Practice",
      context: "Your perfectionism operates unconsciously — you don't decide to over-polish, you just can't stop until it feels right. Building tolerance for imperfection requires deliberate practice in low-stakes contexts.",
      action: "Once a week, deliberately send or publish something that's good but not great — an email with a slightly informal tone, a document without your usual formatting pass, a Slack message without re-reading it three times. Notice that nothing bad happens. This isn't about lowering your standards permanently. It's about proving to your nervous system that imperfection in low-stakes contexts is survivable, so you can reserve your full precision for where it counts.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Withdrawal", description: "You go quiet and retreat into data. Communication becomes clipped and transactional as you attempt to regain control by gathering more information, more evidence, more certainty before engaging." },
      { stage: 2, label: "Hypercriticism", description: "Your quality filter intensifies and turns outward. You notice every error, every shortcut, every gap in others' work — and your tolerance for imperfection drops to zero. Feedback becomes more frequent and more pointed." },
      { stage: 3, label: "Rigid Shutdown", description: "You lock into established procedures and refuse to adapt. Flexibility disappears as you cling to documented processes and proven methods, even when the situation demands improvisation. What feels like maintaining standards reads as obstruction from the outside." },
    ],
    stressRecovery: "Recovery requires solitary time with a structured task that you can complete to your own standards — organizing, analyzing, or solving a contained problem restores your sense of competence and brings your critical filter back to productive levels.",
    flowTriggers: [
      "Complex problems that reward depth over speed",
      "Full autonomy over methodology and quality standards",
      "Access to complete, reliable data sets",
      "Work that produces lasting, referenceable systems or documentation",
    ],
    flowDescription: "You enter flow when the complexity matches your analytical depth — when the problem is genuinely hard, the data is rich, and the path to an elegant solution requires exactly the kind of patient, systematic thinking you do best.",
  },

  careerAlignment: {
    naturalFits: [
      "Engineering and technical architecture where precision determines reliability",
      "Data science and analytics roles where depth of analysis drives strategy",
      "Compliance and audit functions where thoroughness is the primary job requirement",
      "Research and specialized advisory where expertise compounds over years",
    ],
    likelyDrains: [
      "High-velocity sales environments where volume matters more than accuracy",
      "Roles requiring constant improvisation with minimal preparation time",
      "Organizations that celebrate speed of shipping over quality of output",
    ],
    careerWarning: "Your ceiling isn't set by your expertise — it's set by your ability to communicate that expertise to non-experts. Invest in executive communication or your best insights will stay buried in documents that decision-makers never read.",
  },

  growthPathStructured: {
    intro: "Your growth as a C-style isn't about becoming less precise or less thorough. It's about expanding your range — adding gears that let you be effective in situations where analysis and perfection aren't the answer.",
    areas: [
      { title: "From Precision to Pragmatism", description: "Not every deliverable rewards the same level of rigor. Learning to match your precision to the stakes is the difference between a good C-style contributor and a great one." },
      { title: "From Data to Connection", description: "Adding emotional awareness to your analytical toolkit doesn't weaken your objectivity — it completes it. The best decisions account for human factors, not just logical ones." },
      { title: "From Expertise to Influence", description: "Knowing the right answer isn't enough if you can't bring others along. Translating complexity into clarity is the skill that converts your depth into organizational impact." },
    ],
  },

  heroImage: buildHeroImagePath("C"),
  sectionImages: buildSectionImages("C"),
};
