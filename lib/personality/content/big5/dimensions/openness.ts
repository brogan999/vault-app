import type { Big5DimensionContent } from "../types";

export const OPENNESS: Big5DimensionContent = {
  id: "openness",
  label: "Openness to Experience",
  shortLabel: "Openness",
  color: "#328181",

  levels: {
    /* ============================================================== */
    /*  HIGH OPENNESS (>= 65)                                         */
    /* ============================================================== */
    high: {
      overview: `Your mind is a pattern-matching engine that runs on novelty. You don't just tolerate new ideas — you actively hunt for them. Abstract concepts, unconventional perspectives, aesthetic experiences that other people walk past without noticing — these are the raw material your brain prefers to work with. This isn't a lifestyle choice. It's how your cognition is wired.

The practical upside is significant: you connect dots across domains faster than most people, you generate ideas when others are stuck, and you adapt to change without the existential crisis that more conventional thinkers experience. You're the person in the meeting who sees the parallel between a supply chain problem and an evolutionary biology concept, and that connection turns out to be useful.

The less obvious cost is that the same hunger for novelty can make you restless in situations that require sustained, repetitive effort. Your brain treats familiarity as a signal to move on, which means you sometimes abandon perfectly good ideas, relationships, or projects — not because they failed, but because they stopped being interesting.`,

      strengths: [
        {
          title: "Conceptual Range",
          description:
            "You move fluidly between concrete and abstract thinking. A conversation about quarterly targets can trigger a useful analogy from philosophy or physics, and you make the leap without losing the room. This cross-domain mobility is genuinely rare and compounds over time.",
          deepDive:
            "Your conceptual range operates at a level most people don't realize exists. Where a typical thinker stays within the frame of the problem as presented, you instinctively zoom out to see which frame is being used — and whether a different one would be more productive. This meta-cognitive habit means you often solve problems not by working harder within the existing constraints, but by questioning whether the constraints are real. In creative and strategic work, this is an enormous advantage. The risk is that people sometimes experience your reframing as dismissiveness — 'they asked about X and you're talking about Y' — when what you're actually doing is showing that X is the wrong question. Learning to bridge from their frame to yours, rather than jumping straight to yours, makes this strength land better.",
        },
        {
          title: "Aesthetic Sensitivity",
          description:
            "You notice beauty, elegance, and craft in places others don't look. A well-structured argument, an unexpected chord change, the way light hits a wall at 4pm — these register for you as meaningful experiences, not background noise. This sensitivity feeds both your creativity and your standards.",
          deepDive:
            "Your aesthetic sensitivity isn't decorative. It's a signal-detection system. When something feels elegant to you — a design, a proof, a sentence — that feeling is tracking real structural quality: coherence, economy, resonance. When something feels ugly or clunky, you're detecting structural problems that may not be visible to less perceptive people. This makes you a natural editor, curator, and quality-control mechanism in any creative process. The shadow side is that your standards can become paralyzing. If everything has to be beautiful, nothing ships. The most effective high-Openness people learn to distinguish between contexts where aesthetic quality matters (client-facing work, art, design) and contexts where functional adequacy is enough (internal processes, first drafts, prototypes).",
        },
        {
          title: "Intellectual Courage",
          description:
            "You can hold an idea you disagree with in your mind and examine it without feeling threatened. This sounds simple; it's actually a rare capacity. It lets you learn from people and traditions that most folks in your circle dismiss reflexively.",
          deepDive:
            "Your willingness to engage with ideas on their merits rather than their tribal affiliations is one of your most valuable traits. While others filter information through 'does my group approve of this source?', you can evaluate an argument from an unlikely place and extract what's useful. This capacity for intellectual courage means you're often the first person in a group to notice a valid point being made by the 'wrong' side of a debate. It also means you sometimes make people uncomfortable — not because you're contrarian, but because your genuine curiosity doesn't respect the social boundaries around what's acceptable to think. The cost is occasional loneliness: genuinely open thinkers don't fit neatly into any ideological camp.",
        },
        {
          title: "Rapid Adaptation",
          description:
            "When circumstances change — new job, new city, new industry — you orient faster than most. Uncertainty that paralyzes conventional thinkers energizes you. You treat unfamiliar terrain as a puzzle rather than a threat, which gives you a real edge in volatile environments.",
        },
        {
          title: "Generative Thinking",
          description:
            "In brainstorms, problem-solving sessions, or any situation that needs fresh options, you reliably produce more and more varied ideas than most people. Not all of them are good — that's the point. Volume and variety create the conditions for breakthrough.",
        },
      ],

      growthEdges: [
        {
          title: "The Depth-Breadth Trade-Off",
          teaser:
            "You collect interests the way some people collect possessions — compulsively, with genuine enthusiasm, and with a trail of half-explored subjects behind you. The stack of unfinished books, abandoned hobbies, and 80%-learned skills is impressive and slightly depressing. You know a little about everything and mastery about very little.",
          fullExplanation:
            "This is the central tension of high Openness: your novelty-seeking cognition generates genuine excitement for new domains, but that same engine treats diminishing novelty as a signal to move on. The early stages of learning anything are packed with new information — every session teaches something you didn't know. Once you hit the intermediate plateau, where progress requires repetitive practice rather than concept acquisition, your brain quietly starts shopping for the next thing.\n\nThe pattern typically runs: fascination → rapid learning → plateau → restlessness → new fascination. Each cycle feels productive because you are learning. But the cumulative result is width without depth, and depth is where the real returns live — both professionally and personally.\n\nThe intervention isn't to kill your curiosity. It's to choose 2-3 domains where you commit to pushing through the intermediate plateau, and give yourself explicit permission to stay broad everywhere else. The key insight: mastery doesn't require you to stop being curious. It requires you to be curious about progressively deeper layers of the same subject, rather than progressively different subjects.",
          premiumHook:
            "Learn the specific cognitive mechanism behind your pattern of starting-but-not-finishing and get a practical framework for choosing which interests deserve depth.",
        },
        {
          title: "The Practicality Gap",
          teaser:
            "You're drawn to ideas that are interesting over ideas that are useful. This makes you a brilliant theorist and a sometimes unreliable executor. People close to you may have noticed that your plans are beautiful and your follow-through is inconsistent.",
          fullExplanation:
            "High Openness correlates negatively with the kind of concrete, step-by-step execution that turns ideas into outcomes. Your brain rewards you for generating possibilities, not for reducing them to a single actionable plan. The person who suggests five creative solutions but implements none of them is a specific liability that high-Openness people need to watch for.\n\nThis gap shows up most clearly in three domains. First, work — where your ideas are valued but your reliability is quietly questioned. Second, personal projects — where you have a graveyard of half-built things that each seemed brilliant when you started. Third, daily life — where bills, appointments, and maintenance tasks feel soul-crushing because they have zero novelty value.\n\nThe fix isn't self-discipline in the brute-force sense. It's designing external systems that handle the boring parts so your mind stays free for what it does best. Automation, delegation, checklists, accountability partners — these aren't crutches, they're infrastructure that compensates for a genuine cognitive trade-off.",
          premiumHook:
            "Discover why willpower alone won't solve this and get the specific system-design approach that works for high-Openness thinkers.",
        },
        {
          title: "The Overwhelm Spiral",
          teaser:
            "Your mind is always on. It processes more information from more channels than most people's, and it doesn't have a great off switch. When stress hits, instead of narrowing your focus like other people do, you generate more possibilities, more scenarios, more angles — which makes the problem feel bigger, not smaller.",
          fullExplanation:
            "Under stress, most people simplify — they narrow their attention to the immediate threat and reduce their options to a manageable few. Your high-Openness cognition does the opposite. When stressed, it generates more connections, more what-ifs, more implications. A single problem fans out into a web of related concerns, and each concern generates its own set of possibilities.\n\nThe result is a specific flavour of overwhelm: not 'I can't think of a solution' but 'I can think of seventeen solutions and three of them contradict each other and I don't have enough data to choose.' Analysis paralysis is the common name for it, but that undersells what's actually happening — your pattern-recognition system is running at full throttle without a decision-making framework to filter its output.\n\nThe most effective intervention is physical, not mental. When you notice the spiral starting, interrupt it with something that demands your sensory attention: vigorous exercise, cold water, cooking a complex meal, playing an instrument. Your analytical mind needs an off-ramp, and physical engagement provides one that doesn't feel like giving up.",
          premiumHook:
            "Understand why standard stress-management advice fails for high-Openness people and get the alternative approaches that actually work with your wiring.",
        },
      ],

      relationshipPattern:
        "You bring intellectual vitality and emotional range to relationships. Conversations with you rarely get stale — you pull in unexpected references, ask questions that make people think, and notice subtleties in their behavior that others miss. Your ideal partner is someone who can match your curiosity without needing to match your range. The tension comes when your need for novelty bumps against your partner's need for consistency. You may unconsciously treat a relationship the way you treat interests — fascinating at first, gradually less stimulating — unless you learn to find novelty in deepening rather than diversifying.",

      careerImplications:
        "You thrive in roles that reward idea generation, strategic thinking, and creative problem-solving: research, design, strategy, consulting, entrepreneurship, writing, architecture. You wilt in roles dominated by repetitive execution, rigid procedures, or narrow specialization. Your biggest career risk isn't choosing the wrong field — it's changing fields every 18 months because the current one stopped being interesting. The most successful high-Openness professionals find a domain with enough internal complexity to sustain decades of exploration (technology, medicine, law, academia, the arts) and go deep.",

      emotionalPattern:
        "You experience emotions with nuance and complexity. Where others feel 'happy' or 'sad', you feel specific variants — wistful, effervescent, melancholy, awed. This emotional granularity is a genuine asset for self-understanding and empathy, but it also means you process emotional events more thoroughly than most people, which takes time and energy. You're vulnerable to a specific kind of emotional exhaustion: the overload that comes from taking in too much, feeling too many things, in too many registers at once. You need intentional downtime — not just physical rest, but cognitive quiet.",

      stressTriggers: [
        "Environments that punish experimentation and reward conformity",
        "Extended periods of routine with no intellectual stimulation",
        "Being forced to commit to one option before you've explored the alternatives",
      ],
      flowTriggers: [
        "Open-ended problems with no obvious solution path",
        "Cross-domain collaboration with smart, curious people",
        "Creative work with high autonomy and minimal process constraints",
      ],

      toolkit: [
        {
          title: "The Two-List System",
          context: "When you're drowning in interests and can't decide where to focus",
          action:
            "Write two lists: 'Explore' (things you'll engage with casually — podcasts, articles, conversations) and 'Commit' (max 3 things where you'll push past the plateau). Review monthly. The key: everything starts on 'Explore'. Something only moves to 'Commit' after it survives 30 days of casual engagement and you can articulate why depth here matters to you specifically.",
        },
        {
          title: "The Boredom Bridge",
          context: "When you hit the intermediate plateau on something that matters to you and your brain is screaming for novelty",
          action:
            "Set a timer for 25 minutes. Work on the boring part of the skill — the scales, the drills, the tedious middle. When the timer goes off, spend 10 minutes on something completely different and novel. Then return for another 25 minutes. This interleaving gives your novelty-seeking brain enough variety to tolerate the depth work.",
        },
        {
          title: "The Possibility Audit",
          context: "When a decision is stalled because you keep generating more options instead of choosing",
          action:
            "Write down every option you're considering. Then cross out everything you added after the first 48 hours. Research on decision-making consistently shows that options generated after the initial burst rarely improve the outcome — they just increase decision fatigue. Choose from what's left.",
        },
      ],
    },

    /* ============================================================== */
    /*  MODERATE OPENNESS (35-64)                                      */
    /* ============================================================== */
    moderate: {
      overview: `You have genuine curiosity without the compulsion. New ideas interest you, but they don't hijack your attention the way they do for people at the extreme end. You can appreciate an abstract concept and also ask 'but what's the practical application?' without feeling like you're betraying the idea. This balance is more valuable than either extreme.

In practice, you navigate the tension between innovation and pragmatism naturally. You're neither the person who shoots down every new idea ('we've always done it this way') nor the one who chases every new idea ('let's pivot again'). You evaluate novelty on its merits, adopt what works, and let the rest go without regret.

Your moderate Openness means you adapt to change reasonably well without seeking it for its own sake. You can enjoy a philosophical conversation and also get satisfaction from a well-organized spreadsheet. This cognitive flexibility makes you effective across a wider range of environments than people at either extreme.`,

      strengths: [
        {
          title: "Pragmatic Creativity",
          description:
            "You generate ideas that are both novel and implementable. Where high-Openness thinkers produce beautiful concepts that never touch the ground, you naturally filter for feasibility. Teams value this because your suggestions are things people can actually do.",
        },
        {
          title: "Cognitive Flexibility",
          description:
            "You can switch between abstract and concrete thinking as the situation requires. Strategic planning meeting in the morning, detailed execution in the afternoon — you handle the transition without the friction that extreme scorers in either direction experience.",
        },
        {
          title: "Balanced Risk Assessment",
          description:
            "You can see the potential in a new approach without being blind to its risks. This makes you a natural evaluator and editor — the person who looks at an ambitious proposal and identifies both what's brilliant about it and what could go wrong.",
        },
        {
          title: "Grounded Curiosity",
          description:
            "Your curiosity has a tether to utility. You explore new domains when they serve a purpose, which means your knowledge tends to be relevant rather than encyclopedic. People come to you for informed opinions precisely because your interests aren't random.",
        },
      ],

      growthEdges: [
        {
          title: "The Safety of the Middle",
          teaser:
            "Your balance can become a comfort zone. Because you're competent at both creativity and execution, you may default to a safe midpoint that doesn't fully leverage either. You might be leaving the most interesting version of your work on the table by unconsciously editing for 'reasonable' instead of pushing into genuinely original territory.",
          fullExplanation:
            "Moderate Openness is an advantage in most contexts. But there's a specific risk: you can use your balance as a hiding place. Because you can always generate 'good enough' ideas and execute on them 'well enough', you may never discover what happens when you push all the way to the edge of either your creative or your practical capacity.\n\nThis shows up in career choices (picking the sensible option over the fascinating one every time), creative work (editing out your most interesting ideas because they feel 'too much'), and relationships (keeping conversations at a level that's interesting but never truly vulnerable or intellectually risky).\n\nThe intervention isn't to abandon your balance permanently. It's to periodically, deliberately, go to the extremes. Take on a project that's way more creative than your usual. Or commit to executing something with brutal efficiency and zero creative detours. You'll learn something about yourself at both edges that the middle can't teach you.",
          premiumHook:
            "Discover the specific ways your balanced approach might be holding you back — and how to use strategic extremes to unlock capacities you didn't know you had.",
        },
        {
          title: "The Opinion Gap",
          teaser:
            "You're good at seeing multiple sides of an issue. So good that you sometimes fail to form a strong opinion at all. You can argue either position convincingly, but when pressed for what you actually believe, there's a hesitation that suggests you haven't fully committed.",
          fullExplanation:
            "The ability to hold multiple perspectives simultaneously is a cognitive strength. But it has a shadow: when used defensively, it becomes a way to avoid the vulnerability of actually committing to a position. 'I can see both sides' sounds like wisdom but sometimes functions as avoidance.\n\nThis pattern erodes trust over time. People want to know where you stand — partners, colleagues, friends. If your moderate Openness makes you perpetually balanced, perpetually reasonable, perpetually above-the-fray, the people closest to you may start to feel that you're withholding rather than being thoughtful.\n\nThe fix: practice having a first reaction before you activate the balancing mechanism. When someone asks your opinion, notice what you feel before you start considering counter-arguments. That first impulse often contains real information about what you actually value, and sharing it — even tentatively — builds the trust that permanent equanimity erodes.",
          premiumHook:
            "Learn why 'seeing both sides' can become a liability and get practical tools for converting your balanced perspective into decisive clarity when it matters.",
        },
      ],

      relationshipPattern:
        "You're an easy partner in many ways — curious enough to keep conversations alive, grounded enough to provide stability. You don't exhaust partners with relentless intellectual intensity or bore them with rigid conventionality. The risk is that this very balance makes you hard to read. Partners may wonder what truly excites you, what you feel passionate about, because you present an even keel in most situations. Sharing your genuine enthusiasms — the things that make your eyes light up — helps partners connect with the version of you that isn't optimizing for balance.",

      careerImplications:
        "You're a generalist in the best sense. You can operate in creative roles (with enough structure), operational roles (with enough variety), and leadership roles (where your ability to bridge innovators and executors is particularly valuable). Your career risk isn't boredom or recklessness — it's undervaluing your unique strength as a translator between the idea people and the execution people. Roles that explicitly require bridging perspectives — project management, product management, consulting, editorial work — leverage this strength directly.",

      emotionalPattern:
        "Your emotional life is generally stable without being flat. You experience the full range of emotions but recover from negative states at a healthy pace. You don't typically get swept away by intense feelings, but you also don't suppress them. The subtler risk is emotional autopilot — you may process emotions efficiently enough that you occasionally skip past ones that deserved more attention. Checking in with yourself about feelings you might have processed 'too fast' can surface important signals.",

      stressTriggers: [
        "Being forced into extremes — either pure creativity with no structure, or pure execution with no room for thinking",
        "Chronic ambiguity without any framework for making decisions",
        "Environments where curiosity is treated as distraction",
      ],
      flowTriggers: [
        "Problems that require both creative and practical thinking",
        "Collaborative work with a mix of idea generators and executors",
        "Environments that respect both innovation and follow-through",
      ],

      toolkit: [
        {
          title: "The Strong Opinion Drill",
          context: "When you realize you've been hedging on something that matters and need to find your actual position",
          action:
            "Write a one-paragraph argument for the most extreme version of each side. Don't balance them. Make each one as persuasive as possible. Then notice which one you enjoyed writing more, which one felt more true, where your energy was higher. That's your signal.",
        },
        {
          title: "The Edge Experiment",
          context: "When your work feels competent but uninspired and you suspect you're playing it safe",
          action:
            "Pick one project and deliberately push it 30% further in one direction — more creative, more ambitious, more experimental — than feels comfortable. Set a time limit (one week). See what happens. The goal isn't to permanently operate at the edge, but to calibrate where the edge actually is for you. Most moderate-Openness people discover it's further out than they assumed.",
        },
      ],
    },

    /* ============================================================== */
    /*  LOW OPENNESS (< 35)                                            */
    /* ============================================================== */
    low: {
      overview: `You trust what works. While others chase novelty, you build on proven foundations. This isn't a lack of intelligence or imagination — it's a cognitive orientation toward reliability, consistency, and concrete results. In a world that over-indexes on disruption and innovation, your preference for the tested-and-true is a genuine competitive advantage that rarely gets the credit it deserves.

Your mind privileges direct experience over abstract theorizing. You'd rather see something demonstrated than hear someone's theory about why it should work. When you do adopt a new approach, it's because you've seen evidence, not because someone made an exciting pitch. This makes you resistant to fads, hype, and charismatic nonsense — which saves you from a lot of wasted effort.

The cost is that you can miss early signals of genuine change. Not every new idea is hype; some of them will reshape your industry, your relationships, or your understanding of the world. The challenge is developing enough openness to evaluate novel ideas on their merits without abandoning the practical grounding that makes you effective.`,

      strengths: [
        {
          title: "Execution Reliability",
          description:
            "You finish what you start. While idea-generators are already on to the next shiny thing, you're still working on the original plan — and delivering results. Organizations run on people who actually do the work, not just people who think about it.",
          deepDive:
            "Your execution reliability comes from a cognitive preference for closure and completion. Where high-Openness thinkers get a dopamine hit from generating a new idea, you get satisfaction from finishing something concrete. This isn't a lesser form of intelligence — it's a different optimization target, and in most professional contexts, it's the more valuable one. The person who consistently delivers 'B+' work on time is more valuable than the person who occasionally produces 'A+' work but misses half their deadlines. Your brain is optimized for the first pattern, and the compounding effect over a career is enormous.",
        },
        {
          title: "Practical Judgment",
          description:
            "You evaluate ideas based on whether they work, not whether they're interesting. This makes you an invaluable filter in environments drowning in possibilities. When others are excited about a concept, you're the one asking the questions that separate viable from fantasy.",
        },
        {
          title: "Steady Presence",
          description:
            "You provide predictability in a world of constant change. Teams, families, and organizations need anchors — people whose values, methods, and commitments don't shift with every trend. You're that anchor, and the people around you rely on it more than they say.",
        },
        {
          title: "Detail Mastery",
          description:
            "You have patience for the concrete specifics that abstract thinkers skip over. Contracts, processes, procedures, technical details — you don't just tolerate this material, you engage with it naturally. Errors that others miss because they're thinking about the big picture, you catch.",
        },
      ],

      growthEdges: [
        {
          title: "The Familiarity Fortress",
          teaser:
            "Your preference for the known can calcify into genuine rigidity. You may dismiss new ideas reflexively — not because you've evaluated them and found them lacking, but because they're unfamiliar. The people around you might have stopped suggesting new approaches because they know you'll resist, and that feedback loop gradually narrows your world.",
          fullExplanation:
            "There's a crucial difference between choosing the familiar because it's genuinely better and choosing it because it's familiar. Low Openness makes this distinction hard to see from the inside, because your cognitive system treats novelty itself as mildly aversive — the discomfort you feel when encountering a new idea isn't a judgment about the idea's quality, it's a response to its unfamiliarity.\n\nOver time, this creates a shrinking circle. You try fewer new things, so fewer new things have a chance to prove their worth, so your evidence base for 'what I know works best' becomes increasingly outdated. This is especially dangerous in professional contexts where the landscape is changing and the proven approaches of five years ago are becoming liabilities.\n\nThe intervention isn't to force yourself to love novelty. It's to build a small, structured exposure practice: one new experience per week, chosen deliberately, with a commitment to giving it a fair evaluation before deciding. You'll reject most of them, and that's fine. But the few that get through will keep your world from shrinking.",
          premiumHook:
            "Understand why your brain treats novelty as a threat and get a structured exposure approach that expands your range without violating your need for groundedness.",
        },
        {
          title: "The Unexamined Assumption",
          teaser:
            "You operate from strong beliefs about how things should work. Many of these beliefs are well-grounded in experience. But some of them are inherited defaults you've never actually tested — assumptions about work, relationships, or life that you adopted early and never revisited because they've never been challenged from within.",
          fullExplanation:
            "Low Openness correlates with stable, long-held beliefs — which is often a strength. But stability can mask stagnation. The beliefs that serve you at 25 may limit you at 45, and if your cognitive style doesn't naturally prompt you to revisit assumptions, outdated ones can persist indefinitely.\n\nThis shows up most consequentially in three areas. First, career — where assumptions about 'what a good career looks like' may be based on a world that no longer exists. Second, relationships — where expectations about how partners 'should' behave may be inherited from your family of origin rather than chosen deliberately. Third, identity — where your self-concept may be built on roles and values that you absorbed rather than selected.\n\nThe practice: once a quarter, write down three things you believe strongly about how life works. For each one, ask: 'When did I start believing this? What evidence supports it? What evidence contradicts it? Would I choose this belief today if I were starting fresh?' You don't have to change anything. Just examine.",
          premiumHook:
            "Get a structured self-examination framework designed specifically for low-Openness thinkers — no abstract philosophizing, just concrete questions that surface the assumptions worth updating.",
        },
      ],

      relationshipPattern:
        "You bring stability, loyalty, and predictability to relationships — qualities that matter more than romance culture admits. You show love through consistent action rather than grand gestures, and your partners learn to trust that what you say you'll do, you'll do. The tension arises when your partner needs novelty or spontaneity. Date nights at the same restaurant, conversations that follow familiar grooves, routines that never vary — these feel comforting to you and suffocating to a partner who scores higher on Openness. Building in small, structured novelty (a new restaurant once a month, a question game instead of the usual check-in) can maintain the stability you need while giving the relationship room to breathe.",

      careerImplications:
        "You excel in roles with clear expectations, established procedures, and concrete deliverables: operations, finance, engineering, healthcare, skilled trades, project execution, compliance, quality assurance. You struggle in roles that require constant improvisation, blue-sky ideation, or rapid pivots without clear rationale. Your career risk is staying too long in environments that are comfortable but shrinking — industries or companies where stability is real but the future is elsewhere. Periodically stress-testing your career assumptions against current market reality is important.",

      emotionalPattern:
        "Your emotional life tends toward stability and consistency. You don't experience dramatic mood swings, and you process emotional events pragmatically — identifying the problem, determining the fix, moving forward. This efficiency is a strength under pressure. The risk is that you occasionally bypass emotional processing entirely, handling situations rationally when what's actually needed is to sit with a feeling long enough to understand what it's telling you. Grief, disappointment, and loss in particular may get 'handled' before they've been fully felt.",

      stressTriggers: [
        "Unpredictable environments where the rules keep changing",
        "Pressure to adopt new methods without evidence they're better",
        "Abstract, open-ended tasks with no clear criteria for success",
      ],
      flowTriggers: [
        "Mastery-based work where you can build expertise incrementally",
        "Concrete problems with verifiable solutions",
        "Environments that value reliability and follow-through over novelty",
      ],

      toolkit: [
        {
          title: "The Micro-Experiment",
          context: "When something new is being proposed and your instinct is to reject it before evaluating it",
          action:
            "Before deciding, run a time-boxed trial: try the new approach for one week in a low-stakes context. Keep notes on what works and what doesn't. Commit to evaluating based on evidence from the trial, not on how the idea felt when you first heard it. This leverages your preference for concrete data while overriding the novelty-aversion that might filter out something genuinely useful.",
        },
        {
          title: "The Belief Inventory",
          context: "When you suspect some of your operating assumptions might be outdated but aren't sure which ones",
          action:
            "Write down 5 rules you live by — about work, relationships, money, health, or identity. For each, write when you adopted it and what evidence supports it right now. If the evidence is 'this is what I was taught' or 'this is what I've always done', flag it for re-evaluation. You don't have to change the belief — just make sure you're choosing it rather than defaulting to it.",
        },
      ],
    },
  },
};
