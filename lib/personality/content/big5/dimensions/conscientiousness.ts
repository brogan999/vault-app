import type { Big5DimensionContent } from "../types";

export const CONSCIENTIOUSNESS: Big5DimensionContent = {
  id: "conscientiousness",
  label: "Conscientiousness",
  shortLabel: "Conscientiousness",
  color: "#315E36",

  levels: {
    high: {
      overview: `You are wired for completion. While other people treat plans as rough intentions, you treat them as commitments — to yourself, to others, to the version of reality you decided should exist. This isn't obsessive; it's architectural. You see the gap between where things are and where they should be, and you build the bridge with methodical precision.

This manifests as reliability so consistent that people stop noticing it. You hit deadlines. You remember the follow-up. You track the details that everyone else assumes someone else is tracking. Organizations run on people like you — not because your work is always the most creative, but because it's always done, always competent, and always on time.

The cost: you hold yourself to standards that don't leave much room for rest, imperfection, or spontaneity. Your internal taskmaster rarely takes a day off. When the external world doesn't match your internal sense of how things should be organized, the discomfort isn't mild — it's visceral. Dirty dishes aren't just untidy; they're a violation of order that you feel in your body.`,

      strengths: [
        {
          title: "Relentless Follow-Through",
          description: "You finish what you start. This sounds simple; it's one of the strongest predictors of professional success, academic achievement, and health outcomes across the entire personality research literature. Your capacity to sustain effort through the boring middle of a project — after the excitement fades and before the end is in sight — is a genuine superpower.",
          deepDive: "Follow-through isn't willpower. For you, it's closer to a compulsion — the incomplete task creates a psychological tension that only completing it resolves. This is the Zeigarnik effect operating at an amplified level: unfinished business occupies mental bandwidth until it's resolved. The advantage is obvious. The hidden cost is that you may struggle to abandon projects that should be abandoned. Your completion instinct doesn't distinguish between 'this needs to be finished because it matters' and 'this needs to be finished because it's started.' Learning to quit strategically — to recognize sunk costs and walk away from diminishing returns — is a specific growth edge for high-Conscientiousness people.",
        },
        {
          title: "Systems Thinking",
          description: "You naturally create processes, routines, and structures that make complex tasks manageable. Where others see overwhelming chaos, you see a systems design problem with a solution. Your instinct to organize isn't just a preference — it's a cognitive tool that lets you handle more complexity than most people can manage.",
        },
        {
          title: "Earned Trust",
          description: "People rely on you because you've given them evidence — repeatedly, over years — that you do what you say. This earned trust is different from charisma or likability. It's slower to build and harder to break. It's also the foundation of every meaningful professional and personal relationship you have.",
        },
        {
          title: "Long-Game Capacity",
          description: "You can delay gratification for extended periods to pursue objectives that matter. Retirement planning, career development, skill building, health investments — anything that requires sustained effort over years plays to your strength. The marshmallow test was designed for you.",
        },
      ],

      growthEdges: [
        {
          title: "The Rigidity Trap",
          teaser: "Your systems work beautifully — until they don't. When circumstances change and your established approach no longer fits, you may cling to the plan rather than adapt. This isn't stubbornness in the usual sense; it's that abandoning a system feels like losing control, and control is where your psychological safety lives.",
          fullExplanation: "High Conscientiousness creates a specific vulnerability to rigidity: your investment in structure means that disrupting structure feels costly, even when the structure has become counterproductive. You built the system, you maintain the system, and when someone suggests the system needs to change, the threat you feel isn't to the system — it's to your sense of competence and order.\n\nThis shows up in three common patterns. First, over-planning: spending more time refining the plan than would be lost by starting imperfectly. Second, scope resistance: rejecting changes to a project's direction because they invalidate work you've already done. Third, environment friction: disproportionate frustration when shared spaces, schedules, or processes don't meet your standards.\n\nThe intervention: build 'planned flexibility' into your systems. Literally schedule unstructured time. Include 'review and adapt' checkpoints in your project plans. Create a rule that any system unchanged for 6 months gets audited for relevance. This gives your structured mind permission to be flexible — within a structure.",
          premiumHook: "Learn why your structured approach can become a liability and get the specific 'structured flexibility' framework designed for high-Conscientiousness thinkers.",
        },
        {
          title: "The Delegation Deficit",
          teaser: "You'd rather do it yourself than trust someone else to do it to your standard. This works when you're an individual contributor. It becomes a bottleneck the moment you're responsible for anything larger than what one person can handle. Your standards are your ceiling and your prison.",
          fullExplanation: "Delegation failure in high-Conscientiousness people isn't about ego or control-seeking. It's about standards anxiety: you know exactly how good the output should be, you can see that others don't share that standard, and the gap causes genuine distress. Letting someone produce work at 80% of your standard feels irresponsible, not efficient.\n\nThe math, however, is unforgiving. One person producing 100% quality work can only scale linearly. A team producing 80% quality work scales multiplicatively. At some point in your career — and in your personal life — the bottleneck of your own capacity becomes the constraint. Everything flows through you because you won't trust anyone else, and the system collapses under the weight of your involvement.\n\nThe practice: designate specific tasks where 80% is explicitly acceptable. Start with low-stakes items. Practice tolerating the discomfort of imperfect-but-done. Track whether the 80% output actually causes the problems you anticipated (it almost never does). Over time, your standards recalibrate not because they lowered, but because your evidence base expanded.",
          premiumHook: "Discover why delegation feels wrong to you on a neurological level and get the specific graduated-trust approach that lets you scale without sacrificing quality where it actually matters.",
        },
      ],

      relationshipPattern: "You show love through reliability. While others promise the moon, you quietly handle the logistics, remember the appointment, and make the reservation. Partners who value consistency find you deeply reassuring. Partners who value spontaneity may find you rigid. The tension: you may mistake doing things for connecting emotionally. Completing the to-do list isn't intimacy, even though it feels productive. The people closest to you sometimes need you to put the list down and just be present — messy, unproductive, with no agenda.",

      careerImplications: "You excel in any role that rewards thoroughness, reliability, and sustained execution: project management, operations, finance, healthcare, engineering, law, research. You struggle in environments that are chaotic without purpose, that change direction frequently, or that reward improvisation over planning. Your career risk is burnout from over-functioning — doing everyone's work because no one else does it to your standard. Learning to delegate is your highest-leverage career skill.",

      emotionalPattern: "Your emotional life is disciplined, like everything else. You don't indulge in unproductive emotional states for long — when you feel bad, you analyze why, make a plan to fix it, and execute. This efficiency is a genuine asset under pressure. The risk is that some emotions aren't problems to be solved. Grief, loss, existential confusion — these need to be felt, not managed. Your instinct to turn feelings into tasks can short-circuit the processing that actually resolves them.",

      stressTriggers: [
        "Environments where accountability is low and standards are nonexistent",
        "Being forced to work without a plan or clear goals",
        "Other people's unreliability disrupting your carefully organized systems",
      ],
      flowTriggers: [
        "Complex projects with clear milestones and defined success criteria",
        "Work that visibly improves through sustained, methodical effort",
        "Environments that reward quality, thoroughness, and follow-through",
      ],

      toolkit: [
        {
          title: "The 80% Rule",
          context: "When perfectionism is preventing you from finishing or delegating",
          action: "Before starting any task, decide: is this a 100% task (genuinely high-stakes, your reputation on the line) or an 80% task (functional is enough)? For 80% tasks, set a time limit and ship when the timer goes off, regardless of how it feels. Track outcomes for a month. You'll discover that 80% almost never produces the catastrophe your standards predict.",
        },
        {
          title: "The Unstructured Hour",
          context: "When your entire life is optimized and you've forgotten what spontaneity feels like",
          action: "Block one hour per week with no plan, no task, no objective. Literally nothing scheduled. See what happens. The discomfort you feel in that hour is diagnostic — it reveals how much of your sense of self depends on productivity. The goal isn't to fill the hour. It's to tolerate the emptiness and notice what emerges naturally.",
        },
      ],
    },

    moderate: {
      overview: `You get things done without being enslaved by the doing. You can plan when planning is useful and improvise when the plan doesn't survive contact with reality. This adaptive capacity means you're rarely the bottleneck (you can organize when needed) and rarely the rigid one (you can flex when needed).

Your relationship with structure is healthy rather than compulsive. You keep a clean-enough house, meet deadlines with a reasonable margin, and follow through on commitments without needing everything catalogued in a system. You're organized enough to be reliable and flexible enough to be human.

The risk of the middle is that you might not push yourself to either extreme when the situation demands it. Sometimes a project needs obsessive attention to detail. Sometimes a life moment needs you to throw the plan out entirely. Your comfortable baseline may keep you from accessing either gear.`,

      strengths: [
        {
          title: "Adaptive Reliability",
          description: "You're dependable without being rigid. People trust you to deliver, and they also trust you to adjust course when circumstances change. This combination is rarer than either extreme and makes you effective in unpredictable environments.",
        },
        {
          title: "Proportional Effort",
          description: "You intuitively calibrate how much effort a task deserves. You don't over-invest in low-stakes work or under-invest in high-stakes work. This efficiency means your energy is usually well-allocated.",
        },
        {
          title: "Sustainable Pace",
          description: "You work hard enough to produce quality results and not so hard that you burn out. This sustainable pace compounds over years into impressive cumulative output — without the dramatic crashes that plague people who operate at intensity extremes.",
        },
      ],

      growthEdges: [
        {
          title: "The Good-Enough Plateau",
          teaser: "Your balance between structure and flexibility can become a ceiling. Because you're competent at both, you may never push to the level of excellence that requires obsessive focus, or to the level of creativity that requires abandoning the plan entirely. You're reliably good — and that reliability might be keeping you from being occasionally great.",
          fullExplanation: "Moderate Conscientiousness is an asset in daily life. But the things that produce extraordinary outcomes — breakthrough creative work, transformative leadership, deep mastery of a craft — often require temporary imbalance. They require a period of obsessive focus that your balanced approach instinctively avoids.\n\nThis doesn't mean your trait level is wrong. It means you may need to deliberately override it when the stakes are high enough. When a project truly matters, give yourself permission to go into high-Conscientiousness mode: create the plan, track the details, push for polish. When a relationship or creative endeavor needs space, go the other direction: release the structure, tolerate the mess, let things unfold without managing them.\n\nThe growth edge for moderate scorers is recognizing that your default setting is a choice, not a law. You have access to both extremes — you just don't visit them often enough.",
          premiumHook: "Learn when your balanced approach serves you and when it limits you — with specific signals for knowing which mode to shift into.",
        },
      ],

      relationshipPattern: "You're a low-maintenance partner in the best sense. You don't need the house to be perfect, the plans to be rigid, or every commitment to be sacred. But you also don't let things slide indefinitely. Partners appreciate that you handle your share of the logistical load without turning it into a power struggle. The subtle risk: you may expect others to share your natural balance, and feel frustrated when partners are either much more or much less organized than you are.",

      careerImplications: "Your moderate Conscientiousness makes you versatile. You can thrive in structured corporate environments and in looser startup cultures. You're reliable enough for client-facing work and flexible enough for creative work. Your career risk isn't a bad fit — it's under-specialization. Because you're adequate at both structure and improvisation, you may not develop the extreme capability in either that unlocks the highest-leverage roles.",

      emotionalPattern: "Your emotional processing is healthy and balanced. You feel things, you deal with them, and you move on at a reasonable pace. You don't suppress emotions or over-analyze them. The risk is low-grade emotional autopilot — processing feelings efficiently enough that you occasionally miss the ones that deserve deeper attention.",

      stressTriggers: [
        "Sustained chaos with no clear end in sight",
        "Being held to standards that feel arbitrary or disproportionate",
        "Having to perform at extremes for extended periods — either obsessive detail or total spontaneity",
      ],
      flowTriggers: [
        "Balanced workloads that mix planning with execution",
        "Projects with clear goals but flexible methods",
        "Environments that value reliability without punishing adaptation",
      ],

      toolkit: [
        {
          title: "The Intensity Sprint",
          context: "When a high-stakes project needs more focus and thoroughness than your default mode provides",
          action: "Set a 2-week sprint period where you deliberately operate at high Conscientiousness: detailed plans, daily tracking, zero shortcuts. After the sprint, return to your natural pace. This builds your capacity to access the extreme when it matters without making it your permanent mode.",
        },
        {
          title: "The Drop-Everything Drill",
          context: "When rigidity is creeping in and you sense yourself becoming over-attached to a plan or routine",
          action: "Cancel something you planned. Not something trivial — something real. Go do something unplanned instead. Notice the anxiety that rises when the structure breaks. That anxiety is information about how much of your sense of control has calcified into a dependency on order.",
        },
      ],
    },

    low: {
      overview: `You operate on impulse, instinct, and real-time assessment rather than pre-built plans. Schedules bore you, to-do lists feel oppressive, and the idea of organizing your closet by color makes you want to leave the country. This isn't laziness — it's a genuine cognitive orientation toward flexibility and spontaneity that has real advantages in the right contexts.

You respond to what's happening now rather than what you planned to happen. This makes you adaptable, creative under pressure, and surprisingly effective in environments that punish rigidity. Startups, crises, creative projects with no clear path, social situations that need someone to improvise — you're at your best when the script runs out.

The cost is real and specific: the things in life that reward consistency — fitness, finances, career advancement, long-term relationships — require sustained effort that your wiring actively resists. You know what you should be doing. You have a hard time making yourself do it when there's something more interesting available, which is always.`,

      strengths: [
        {
          title: "Creative Spontaneity",
          description: "You generate solutions in real-time that over-planners would never find. When the plan fails (and plans always eventually fail), you're the person who improvises something that works. This capacity is undervalued in organizational life but essential in any environment where adaptability matters more than predictability.",
        },
        {
          title: "Low Bureaucratic Resistance",
          description: "You don't get attached to processes for their own sake. If something isn't working, you drop it without the sunk-cost anxiety that makes structured people cling to failing systems. This willingness to start over, try something different, or abandon a bad approach saves enormous amounts of wasted effort.",
        },
        {
          title: "Present-Moment Engagement",
          description: "You are genuinely present in whatever you're doing right now. You're not mentally reviewing your to-do list during a conversation or worrying about tomorrow's meeting during tonight's dinner. This quality of attention makes you a better listener, a more responsive partner, and a more creative thinker.",
        },
        {
          title: "Stress Resilience Through Flexibility",
          description: "Because you don't build elaborate plans, you don't experience the distress of watching plans collapse. Change that devastates organized people merely requires you to recalibrate. Your default state is already adaptable, so disruption costs you less.",
        },
      ],

      growthEdges: [
        {
          title: "The Accumulation Problem",
          teaser: "Small neglects compound. The bill you didn't pay, the email you didn't answer, the appointment you forgot, the project you abandoned at 60% — individually, each one is minor. Collectively, they create a background hum of dysfunction that slowly erodes your professional reputation, your financial stability, and your relationships.",
          fullExplanation: "Low Conscientiousness doesn't produce dramatic failures. It produces an erosion: a slow accumulation of small things undone that eventually reaches a tipping point. The car registration you forgot to renew becomes a ticket. The relationship maintenance you skipped becomes a crisis. The career skill you never developed becomes a ceiling.\n\nThe pattern is insidious because each individual item seems trivial. Your brain evaluates each task independently: 'This one thing won't matter.' It's right — individually. But the aggregate matters enormously, and your cognitive system doesn't naturally compute aggregates.\n\nThe intervention isn't a complete personality overhaul. It's a minimum viable structure: one weekly review (30 minutes, non-negotiable), one simple system for tracking commitments (a single list, not a productivity empire), and one accountability relationship (someone who checks whether you did the thing you said you'd do). These three elements catch the accumulation before it reaches crisis.",
          premiumHook: "Understand why 'just be more organized' advice always fails for you and get the minimum viable structure that works with your wiring instead of against it.",
        },
        {
          title: "The Commitment Flinch",
          teaser: "You keep your options open — always. Committing to a plan, a person, a career path, a city, a lease feels like closing doors, and closing doors feels like dying a little. So you stay flexible, keep things casual, maintain exit routes. But a life optimized for optionality is a life that never goes deep.",
          fullExplanation: "Low Conscientiousness correlates with difficulty making and sustaining commitments. Not because you lack values or caring, but because commitment activates a specific anxiety: the fear of being trapped in something that turns out to be wrong. Your cognitive system is optimized for generating alternatives, and commitment — by definition — requires you to stop generating alternatives and invest in what you've chosen.\n\nThis shows up across domains. Career: you may have an impressive diversity of experience but no clear trajectory, because each role started to feel constraining after 12-18 months. Relationships: partners may describe a pattern of enthusiasm followed by gradual withdrawal as the relationship becomes routine. Personal projects: the pattern of passionate beginning, engaged middle, and quiet abandonment before completion.\n\nThe growth edge isn't learning to commit to everything. It's choosing a small number of things — 2 or 3, no more — that are genuinely worth the discomfort of staying. Then building the commitment muscle specifically in those areas while staying flexible everywhere else.",
          premiumHook: "Learn the specific mechanism behind your commitment resistance and get a framework for choosing what deserves your full engagement — without losing the flexibility that makes you effective.",
        },
      ],

      relationshipPattern: "You bring spontaneity, fun, and an absence of rigidity that many partners find refreshing. You're the person who suggests the unplanned road trip, who doesn't stress about the messy kitchen, who is genuinely present in the moment rather than mentally managing a schedule. The friction comes from the things you drop: the anniversary you forgot, the promise you didn't keep, the chores that never quite get done. Partners need to know that your unreliability isn't a reflection of how much you care — it's a cognitive pattern, not a character flaw. But they also need you to build enough structure to prevent the neglect that erodes trust over time.",

      careerImplications: "You thrive in roles that reward adaptability, improvisation, and real-time problem-solving: emergency response, creative work, sales, entrepreneurship, event management, any fast-moving environment where the plan changes hourly. You struggle in roles that require sustained methodical effort, long-term project management, or meticulous record-keeping. Your career risk is the accumulation problem applied to professional development: enough job changes, enough dropped balls, enough missed follow-ups that your talent is discounted by your track record.",

      emotionalPattern: "Your emotional life is immediate and responsive. You feel what you feel when you feel it, without excessive filtering or planning your emotional responses. This spontaneity gives your emotional expression an authenticity that more controlled people lack. The risk is emotional impulsivity: reacting to feelings before you've understood them, making decisions in emotional states that you wouldn't endorse later, and failing to do the slower emotional processing that builds self-awareness over time.",

      stressTriggers: [
        "Rigid environments with excessive rules and zero flexibility",
        "Long-term projects with distant deadlines and no immediate feedback",
        "Being held accountable for tracking systems you never built",
      ],
      flowTriggers: [
        "Dynamic environments where conditions change rapidly",
        "Creative work with immediate feedback loops",
        "Tasks with clear immediate impact rather than deferred payoff",
      ],

      toolkit: [
        {
          title: "The Weekly Sweep",
          context: "When the accumulation of small neglects is reaching a critical mass",
          action: "Set a recurring 30-minute block every Sunday. No planning, no organizing — just sweep. Go through your email, your messages, your wallet, your calendar. Anything that takes less than 2 minutes, do it now. Anything bigger, write it on a single list. That's it. The goal is containment, not transformation. Prevent the small stuff from compounding into a crisis.",
        },
        {
          title: "The Commitment Contract",
          context: "When something matters enough to warrant real follow-through but your default pattern is to drift away",
          action: "Tell someone specific what you're committing to and by when. Not a vague intention — a concrete deliverable with a deadline. Check in with them weekly. External accountability replaces the internal drive your wiring doesn't naturally provide. This isn't a character flaw to be ashamed of; it's a design constraint to be engineered around.",
        },
      ],
    },
  },
};
