import type { MBTITypeContent } from "./types";

export const ENFP: MBTITypeContent = {
  typeCode: "ENFP",
  typeName: "The Inspirer",
  tagline: "Sees possibility everywhere and pulls people toward it",
  color: "#C97A30",

  heroImage: "/characters/enfp/enfp-reveal.svg",
  sectionImages: {
    strengths: "/characters/enfp/enfp-strengths.svg",
    relationships: "/characters/enfp/enfp-relationships.svg",
    career: "/characters/enfp/enfp-career.svg",
    growth: "/characters/enfp/enfp-growth.svg",
  },

  overview: `You process the world through a rapid-fire idea engine that connects things most people would never put together. While others see what's in front of them, your mind is already three associations deep — a conversation about dinner reservations triggers a thought about urban design, which connects to a business idea, which reminds you of something a friend said two years ago. This isn't distraction. It's your primary cognitive tool doing exactly what it's built for.

Combined with a deep internal values system, you don't just generate possibilities — you instinctively know which ones matter. This makes you extraordinarily persuasive, not through logic or pressure, but because people can feel that you genuinely believe in what you're saying. Your enthusiasm isn't performance. It's the natural output of a mind that keeps discovering things worth being excited about.

**How your mind is wired:** Your personality runs on four cognitive functions — mental tools you use in a specific order of preference. Your lead tool is **Extraverted Intuition (Ne)**: a scanning engine that constantly generates connections, possibilities, and 'what if' scenarios by pulling together information from unrelated sources. Your second tool is **Introverted Feeling (Fi)**: a deep internal value system that filters those possibilities and tells you which ones actually matter — it's why you can generate a hundred ideas but only truly care about three. Third is **Extraverted Thinking (Te)**: the organizing and executing function that turns ideas into plans and outcomes — still developing, which is why follow-through is your growth edge. Last is **Introverted Sensing (Si)**: connection to past experience, routine, and physical grounding — your blind spot, and the function that erupts strangely under extreme stress.

The shadow side is that starting things is intoxicating and finishing them is not. You likely have a graveyard of 80%-complete projects, abandoned not because they failed but because the remaining 20% is execution work, and your idea engine has already locked onto the next thing. This isn't a character flaw. It's a structural feature of your cognitive architecture — and one you can work with once you see it clearly.

What makes you unusual among extraverts is the values filter underneath. Most people experience your idea generation — the energy, the enthusiasm, the creative leaps. Fewer people get to see the fierce internal compass that decides what you actually care about. You're not scatter-brained. You're a rapid-iteration engine with a values filter that most people never get close enough to see.`,

  descriptionInsight:
    "Your trait pattern — strong Extraversion, strong Intuition, moderate Feeling, strong Prospecting — creates a specific cognitive signature: outward enthusiasm guided by inward conviction. You generate possibilities at a pace that looks chaotic from outside but is actually filtered through a remarkably stable sense of what matters.",

  strengths: [
    {
      title: "Pattern Bridging",
      description:
        "You naturally connect ideas across completely different domains — a business model from one industry, a design principle from another, a human insight from a conversation last week. This isn't just creativity; it's a specific cognitive gift that makes you invaluable in any room where innovation matters.",
      deepDive:
        "Your ability to connect unrelated ideas is your most distinctive cognitive capability. While most people think within categories — business problems call for business solutions, design problems call for design solutions — your idea engine ignores these boundaries entirely. It treats all information as raw material for pattern-matching, regardless of where it came from. This is why the best ENFPs are often described as having ideas that seem to come from nowhere — they're actually coming from everywhere, synthesized through a function that other types don't have in the lead position. The practical implication: you're most valuable in environments that reward cross-pollination and least valuable in environments that reward staying in your lane. Seek roles where connecting dots across silos is the job, not a distraction from it.",
    },
    {
      title: "Emotional Radar",
      description:
        "Your internal value system gives you an almost instant read on whether something is authentic or performed. You pick up on emotional undercurrents that others miss entirely. This makes you a gifted communicator — you adjust your approach in real-time based on what you're sensing, often without consciously realizing you're doing it.",
      deepDive:
        "Your emotional intelligence operates differently from types who lead with social-emotional awareness. Those types read the room — they sense group dynamics and adjust to maintain harmony. You read the person — your internal value system scans for authenticity at the individual level. You can instantly detect the gap between what someone is saying and what they actually feel. This makes you an exceptional interviewer, therapist, coach, teacher, or salesperson — any role where understanding an individual's real motivations matters more than managing group dynamics. The growth edge: your radar is most accurate with people you've just met (fresh data) and least accurate with people you love (your idea engine generates an idealized model that can override what your value system is actually detecting).",
    },
    {
      title: "Activation Energy",
      description:
        "You have an unusual ability to get other people excited about ideas and moving toward action. It's not hype — it's that your enthusiasm is genuine and specific, which makes it contagious. Teams and projects that stall often unstall when you walk into the room.",
      deepDive:
        "The reason your enthusiasm moves people isn't volume — it's authenticity. Your excitement is filtered through your internal value system, which means you're not cheerleading indiscriminately. When you're genuinely excited about something, people can sense that it's passed an internal filter that most things don't survive. This gives your enthusiasm credibility that pure optimism lacks. The practical application: you're an extraordinary launcher of things — products, movements, teams, ideas. But activation energy and sustaining energy are different, and your cognitive architecture is built for the former. The most effective Inspirers learn to partner with types who provide the structural follow-through that keeps things moving after the initial spark fades.",
    },
    {
      title: "Adaptive Resilience",
      description:
        "Because you naturally see multiple possibilities, setbacks don't hit you the way they hit more linear thinkers. When one path closes, your idea engine is already generating alternatives. This isn't avoidance — it's genuine cognitive flexibility that serves you well in uncertain environments.",
      deepDive:
        "Your resilience isn't toughness — it's flexibility. When a plan fails, types with strong routine-and-precedent functions experience a structural disruption: the framework they built has collapsed and they need to rebuild. Your idea engine doesn't build that kind of rigid framework in the first place. It maintains multiple potential paths simultaneously, so when one closes, you pivot to another that was already forming in your peripheral processing. This makes you exceptionally well-suited for startup environments, creative fields, and any domain where the rules change faster than plans can be made. The shadow side: genuine losses — relationship endings, career failures, health crises — sometimes need to be grieved rather than reframed. Your idea engine will try to generate a silver lining before your value system has finished processing the pain. Sometimes the most resilient thing you can do is stay with the sadness until it's done.",
    },
    {
      title: "Values Clarity",
      description:
        "Beneath the external enthusiasm, you have a remarkably stable internal compass. Your value system knows what matters to you with a certainty that doesn't require external validation. When you do commit to something, it's because it aligns with something deep — and that commitment is fierce.",
      deepDive:
        "The paradox of the ENFP is that the type that looks most changeable from the outside is one of the most internally consistent. Your idea engine shifts constantly — new interests, new ideas, new connections every week. But the values underneath barely move across your entire lifetime. You may not be able to articulate your values in a philosophy lecture, but you can feel them with absolute certainty. When someone asks you to do something that violates your core values, you don't debate — you refuse, sometimes to your own surprise. This internal compass is what saves you from your own idea generation: without it, you'd pursue every interesting thing that crossed your path. With it, you pursue only the things that resonate at a level deeper than novelty. Learning to trust and articulate this compass is one of the most important developmental tasks of your life.",
    },
  ],

  growthEdges: [
    {
      title: "The Novelty Spiral",
      teaser:
        "Your greatest strength has a shadow: the same idea engine that makes you brilliant at generating possibilities makes it genuinely painful to commit to one path and stay on it. You likely have a trail of 80%-complete projects behind you — each abandoned not because they were wrong, but because the next idea was more exciting.",
      fullExplanation:
        "The Novelty Spiral is your core developmental challenge. Your idea engine generates new possibilities faster than your developing organizing function can execute on them. Each new idea triggers a genuine dopamine hit — it's not laziness or lack of discipline, it's neurological. The pattern typically looks like: intense enthusiasm → rapid progress → plateau (where the interesting problems are solved and execution remains) → new shiny idea appears → guilt about abandoning the last thing → new enthusiasm → repeat.\n\nThis pattern shows up everywhere. In careers: you've had five jobs in seven years, each one exciting at first and suffocating by month nine. In relationships: the intensity of new connection gradually gives way to routine, and your idea engine starts wondering about other possibilities. In creative projects: notebooks full of brilliant first chapters, business plans, and app designs — none of them finished. Even in hobbies: the guitar gathering dust, the language app abandoned, the fitness routine that lasted three weeks.\n\nThe key intervention isn't 'just focus' — it's building external structure that compensates for what your function stack doesn't naturally provide. Accountability partners, public commitments, and breaking projects into smaller completion milestones all help because they give your developing organizing function something concrete to grip. The external structure isn't a cage for your idea engine — it's a runway.\n\nThe deeper insight: you don't actually need to finish everything. The real skill is learning to distinguish between projects that deserve completion (they align with your values and have real-world impact) and projects that served their purpose as explorations (you learned what you needed, and moving on is correct). The guilt comes from treating all abandonments as failures, when many of them are just your idea engine doing what it does — surveying the landscape. The trick is being honest about which category each abandoned project actually falls into.",
      premiumHook:
        "Understand the exact cognitive mechanism behind this pattern and get specific strategies to break the cycle without fighting your nature.",
      relatedDimension: "JP",
    },
    {
      title: "The Conflict Dodge",
      teaser:
        "You're often described as 'nice' or 'easy to get along with' — and you are. But underneath that, there's a pattern of avoiding necessary confrontation by keeping things light, changing the subject, or simply withdrawing. The people closest to you may feel like they never quite know where they stand.",
      fullExplanation:
        "Your least-developed function is the one that manages direct interpersonal emotional exchange — particularly conflict. While your internal value system gives you absolute clarity about how you feel, expressing that directly to someone — especially when it might create discomfort — triggers deep anxiety from your underdeveloped social-emotional function. So you find workarounds: humor, topic changes, withdrawal, or the classic Inspirer move of being so generally warm that nobody notices you never actually addressed the specific issue.\n\nThe pattern has specific stages. First, something happens that bothers your value system. You feel a clear internal reaction — you know something is wrong. Second, instead of saying something, you tell yourself it's not a big deal, or that bringing it up would cause more harm than good, or that you just need to 'let it go.' Third, you let it go... except you don't. Your value system keeps the tally. You're still warm, still engaging, still apparently fine — but a small wall has gone up. The other person can't see it, but it's there.\n\nRepeat this cycle enough times and one of two things happens: explosion or disappearance. The explosion catches everyone off guard because you've been so pleasant for so long that the underlying resentment was invisible. Six months of swallowed frustrations come out at once, and the poor person on the receiving end is blindsided by the intensity. Or you disappear — which to the other person feels like whiplash, because they thought everything was fine.\n\nThe intervention is not becoming confrontational. It's learning that direct communication, even uncomfortable communication, is an act of respect. Your value system already knows the truth. The work is building a bridge from internal knowledge to external expression — which means tolerating the discomfort of saying something that might temporarily reduce the harmony in the room. Start small: practice stating mild preferences before attempting major confrontations.",
      premiumHook:
        "Learn how your cognitive architecture creates this pattern and get specific scripts for the conversations you've been avoiding.",
      relatedDimension: "TF",
    },
    {
      title: "The Depth Dilemma",
      teaser:
        "You're drawn to depth and meaning, but your natural operating mode is breadth. You may find yourself with many connections but few people who truly know you — not because you're fake, but because your idea engine moves so fast that even you sometimes lose track of what you actually think versus what you're exploring.",
      fullExplanation:
        "This is the central tension at the core of your type. Your idea engine wants to explore everything. Your value system wants to go deep into what matters. They pull in opposite directions. The result is that you often appear more superficial than you actually are — you share ideas freely but guard your actual feelings carefully.\n\nThe Depth Dilemma shows up most clearly in relationships where partners complain that you're 'hard to pin down' or 'always changing.' You're not changing — your values core is remarkably stable. But your external presentation shifts constantly as your idea engine explores new interests, new perspectives, new ways of expressing things, and most people can't tell the difference between your shifting surface and your stable core.\n\nAt parties, you're the person who has a genuinely interesting conversation with everyone in the room. But ask any of those people what you actually believe, what you're afraid of, what you'd fight for — and they'd struggle. Not because you were evasive, but because your idea engine is so engaging that people don't notice they never got past it to the values underneath.\n\nThis pattern costs you in two ways. First, loneliness: you can be surrounded by people who enjoy you and still feel unknown. Second, relationships that stall at the 'fascinating acquaintance' level because the other person never gets close enough to see the real depth. The people who do get close — the ones who see your value system rather than just your idea engine — tend to become lifelong connections.\n\nDevelopment means learning to slow down and let people see the values beneath the ideas — which requires vulnerability that your underdeveloped social-emotional function finds genuinely uncomfortable. The irony is that Inspirers, seen as the most open and expressive types, are actually some of the most private about what they truly feel. You'll share your ideas with anyone. Your actual feelings? Those go to a very short list.\n\nThe path forward isn't suppressing your idea engine to be more 'consistent.' It's learning to flag for others when you're exploring versus when you're speaking from your core. A simple 'I'm just thinking out loud' versus 'this actually matters to me' distinction gives people the context they need to know you — not just the version of you that your idea engine projects.",
      premiumHook:
        "Discover why people experience you as hard to read despite your openness, and how to build the deeper connections you actually crave.",
      relatedDimension: "EI",
    },
  ],

  relationshipStyle: "Passionate, Expansive, Freedom-Seeking",
  relationshipPreview:
    "You bring extraordinary energy and genuine delight to relationships. You're the partner who plans unexpected adventures, sees the best version of people, and creates moments that feel like the beginning of a movie. The tension is between your deep need for connection (your value system) and your equally deep need for freedom and novelty (your idea engine). You love intensely but can feel claustrophobic in routine. Your ideal relationship has both deep intimacy and plenty of room to breathe.",

  relationshipDeepDive:
    "Your relationship pattern has a specific rhythm that's worth making visible, because it tends to confuse both you and your partners.\n\n**The Opening Phase**\n\nThis is where you're at your most powerful. Your idea engine locks onto someone and starts generating a model of who they could be — not just who they are right now, but their full potential. This is intoxicating for both parties. You see them more clearly and more generously than anyone ever has. They feel understood in a way that borders on magical. The early period of a Inspirer relationship is some of the most intense human connection available.\n\nThe danger is that you're partly falling in love with your model, not the person. When the actual human diverges from the projection — and they will — you can experience a disorientation that feels like falling out of love but is actually your model updating. Recognizing this pattern is the single most important relationship insight for your type: the disillusionment phase isn't a sign to leave. It's a sign that you're about to meet the real person, and the relationship is about to get genuinely interesting — if you stay.\n\n**The Settling Phase**\n\nAfter the initial intensity, relationships enter a maintenance phase that directly challenges your cognitive preferences. Routine, predictability, day-to-day logistics — these are your idea engine's natural enemies. Your partner wants to establish traditions; you want spontaneity. They want to know what you're doing this weekend; you resist committing because something might come up.\n\nThe types that work best with Inspirers are the ones who are interesting enough to keep surprising your idea engine, and grounded enough not to be destabilized by your intensity. They need to understand that your need for novelty isn't a rejection of the relationship — it's a need for the relationship to keep growing.\n\n**Conflict Dynamics**\n\nConflict is where your stack shows its limits. You feel the issue clearly (your values are absolutely certain about what's wrong), but expressing it directly triggers anxiety from your underdeveloped social-emotional function. So you hint. You get quieter. You make jokes that are actually complaints. Your partner picks up that something is wrong but can't identify what, because you're still being warm and present on the surface.\n\nThis continues until the accumulated pressure forces either an eruption or a withdrawal — both of which blindside the other person. They say 'why didn't you tell me?' and the honest answer is: 'Because telling you felt harder than carrying it silently.' Learning to express discomfort early, when it's small and manageable, prevents the eruptions that damage trust.\n\n**Intimacy and Physical Connection**\n\nYour sexual and intimate expression tracks your overall pattern: intense, creative, responsive to novelty, and deeply connected to emotional authenticity. You need to feel something real to be physically engaged — performance or routine kills it. The best intimate moments for your type involve genuine spontaneity, emotional presence, and the feeling that this specific moment couldn't have been planned.\n\nPhysical affection is often how you express feelings that your value system feels but can't easily verbalize. A touch, an embrace, a spontaneous kiss — these are your value system communicating through action rather than words.\n\n**Friendship Dynamics**\n\nYou're the friend who makes people feel like the most interesting person in the room — because in that moment, to your idea engine, they are. You bring energy, creative suggestions, and genuine enthusiasm to other people's lives. The risk is that you maintain many warm connections but invest deeply in few, and the friends who need consistency may drift away during the periods when your idea engine has locked onto a new project, relationship, or interest.\n\nYour closest friendships are with people who can handle your disappearances — who don't take a two-month silence personally and can pick up right where you left off. These people are rare, and they're worth investing in even when your idea engine is pulled elsewhere.\n\n**Long-Term Architecture**\n\nLong-term, your relationships need a specific architecture to thrive: shared values (non-negotiable for your value system), independent interests (necessary for your idea engine), regular novelty (new experiences together, not just routine), and explicit agreements about how you'll handle conflict (because your default is avoidance). Relationships that have all four of these elements can last a lifetime and keep getting better. Relationships that lack any one of them will eventually feel like a cage — no matter how much love is present.",

  careerHeadline: "Entrepreneurial, Creative & Impact-Driven",
  careerDirections: [
    "Founder / Entrepreneur",
    "Creative Director",
    "Strategy Consultant",
    "Journalist / Storyteller",
  ],
  careerDeepDive:
    "Your ideal work has three qualities: it's meaningful (your value system needs to care), it's varied (your idea engine needs novelty), and it involves people (your extraverted orientation needs human interaction). Remove meaning and you'll burn out within months, no matter how lucrative. Remove variety and you'll start checking job listings within weeks. Remove the human element and you'll feel like you're operating at half capacity.\n\n**Why Inspirers Become Entrepreneurs**\n\nInspirers are overrepresented among entrepreneurs, not because they're natural business operators (they often aren't), but because entrepreneurship is the only structure that accommodates their need for autonomy, variety, and meaning simultaneously. The corporate world offers stability but constrains the three things you need most. If you are in a corporate role, your survival strategy is finding work that changes frequently — strategy, consulting, creative direction, product — rather than work that rewards consistency.\n\n**The Twin Career Traps**\n\nYour career trap is specific — and it actually comes in two opposite flavors.\n\nTrap one: changing too frequently, so you never build the depth of expertise that lets your idea engine really fly. Here's the thing most Inspirers don't realize: your pattern-bridging superpower is only as valuable as your understanding of the domains you're bridging. A Inspirer who has spent five years deeply learning two fields can generate insights that are genuinely revolutionary. A Inspirer who has spent five years skimming ten fields generates ideas that sound good in brainstorms but lack the substance to implement. Depth is the fuel your idea engine needs to produce its best work.\n\nTrap two: staying too long in roles that were exciting at first but have become routine, because your idea engine can always generate a narrative about why 'the next phase will be different.' It won't. If the core structure of the role is repetitive, the next phase will be a slightly different flavor of the same repetition. Trust your body on this one — if you feel physically restless, your value system is telling you something your narrative is drowning out.\n\n**Leadership Style**\n\nLeadership comes naturally when it's inspirational — you can rally a team around a vision like almost no other type. Your idea engine generates the vision; your enthusiasm sells it; your emotional radar tells you how to frame it for each individual. People follow you because they can feel that you mean it.\n\nWhere leadership breaks down is in the operational details: following up on commitments, enforcing accountability (yours and others'), and making decisions that disappoint people. Your growth as a leader depends on developing your organizing function enough to build systems that hold structure when your enthusiasm has moved on. The best Inspirer leaders hire strong operators and give them real authority — they don't try to become operators themselves.\n\n**Ideal Environment**\n\nYou do your best work in environments that reward initiative and creativity, tolerate some chaos, and measure outcomes rather than hours. Cultures obsessed with process and compliance will slowly suffocate you. You need permission to approach problems from unexpected angles, access to diverse inputs (people, ideas, industries), and enough autonomy that your idea engine can follow its threads without someone asking 'is this billable?'\n\nThe physical environment matters less to you than the social one. You can work from a café, a couch, or a conference room — but you can't work well surrounded by people who don't care about what they're doing. Apathy is your kryptonite. A team of engaged people in a terrible office will produce your best work; a team of indifferent people in a beautiful one will drain you in weeks.\n\n**Flow and Career Satisfaction**\n\nYour flow state is triggered by problems that sit at the intersection of creativity and meaning — where your idea engine has interesting constraints to work within and your value system cares about the outcome. The problem needs to be novel enough to engage your pattern-bridging but consequential enough that solving it matters.\n\nWatch for these warning signs that a role isn't right: you're spending most of your time on tasks that could be done by anyone. The work no longer teaches you anything. You've been telling yourself 'it'll get better after [upcoming event]' for more than six months. You feel energized by side projects and drained by your main work. Your enthusiasm has become performative rather than genuine — you're pretending to care because the role requires it.",

  cognitivePortraitDescriptions: [
    "You draw energy from interaction — ideas, people, new environments all charge you up. Solitude is necessary sometimes, but extended isolation feels like running with the parking brake on. Your cognitive engine is designed for engagement with the external world.",
    "You instinctively scan for patterns, connections, and possibilities rather than concrete details. Where others see a single event, you see five implications and twelve related ideas. This makes you a natural innovator — and occasionally exhausting to people who just want to discuss what actually happened.",
    "You make decisions through an internal values filter that's remarkably consistent beneath the external variability. 'Does this feel authentic?' and 'Does this align with what I care about?' come before 'Is this the most efficient approach?' Your decisions may look impulsive from outside, but they're filtered through conviction.",
    "You prefer keeping your options open. Premature closure feels physically uncomfortable — like being asked to choose a meal when you haven't seen the full menu. You work in bursts rather than steady rhythms, and your best output comes when there's room to pivot.",
  ],

  cognitiveStackDescriptions: [
    "Your lead function — Extraverted Intuition — scans the environment for connections, implications, and possibilities. It runs constantly — even in casual conversation, it's generating tangents, associations, and 'what if' threads. Think of it as a radar that sweeps everything in your environment and flags how things connect to other things. This is the engine behind your creativity and the source of your difficulty with sustained focus on a single track.",
    "Your secondary function — Introverted Feeling — provides the values filter that separates interesting possibilities from meaningful ones. It's why you can generate a hundred ideas but only genuinely care about three of them. It's also why you can be unexpectedly stubborn — when your idea engine and your value system align on something, your commitment is unshakeable because it's rooted in deep internal conviction, not external pressure.",
    "Your developing function — Extraverted Thinking — handles organization, systems, and external effectiveness. It's why you can build a business plan in a burst of energy, then struggle to follow it the next week. This is your growth edge — developing it means your visions actually manifest into completed projects instead of remaining exciting conversations and half-finished drafts.",
    "Your least developed function — Introverted Sensing — connects you to concrete past experience, routine, and physical grounding. Under stress, it erupts as obsessive attention to physical details, health anxiety, or compulsive organization — the opposite of your normal expansive orientation. It feels like being trapped in a small room because your normally wide-open cognitive landscape has suddenly collapsed to a tiny, detail-focused space.",
  ],

  cognitiveStackExplanation:
    "Your cognitive stack — the sequence of mental tools your mind prefers — creates an architecture that's simultaneously your superpower and your biggest source of internal tension. Understanding this isn't abstract theory; it's a practical map of why you do the things you do.\n\n**Your Lead Function: Extraverted Intuition (Ne) — The Idea Engine**\n\nThis is the function that never stops. It scans everything — conversations, articles, environments, random observations — and generates connections. Not linear, logical connections. Lateral, associative, sometimes bizarre ones. A conversation about dinner reservations triggers a thought about urban design, which connects to a business idea, which reminds you of something a friend said two years ago. This is your idea engine doing its work. It's why you're the person in the room who says the thing nobody else was thinking, and why your browser has 47 tabs open.\n\nIn daily life, this function is what makes you the best brainstormer in any room, the person who sees angles that everyone else missed, and the friend who always has an unexpected suggestion. It's also what makes it hard to sit through a meeting that's covering one topic linearly, to maintain a single train of thought through a long document, or to resist the pull of a new idea when you're supposed to be finishing the current one.\n\nHealthy Ne is generative and expansive — it creates genuine value by bridging ideas across domains. Unhealthy Ne is frantic and unable to land — generating ideas as a way of avoiding the emotional discomfort of committing to one. The distinction is whether your idea engine is being fed by real engagement with the world or running on anxiety and avoidance. When you're avoiding something your value system knows you should deal with, your idea engine will happily generate infinite distractions that feel productive but are actually escape routes.\n\n**Your Secondary Function: Introverted Feeling (Fi) — The Values Core**\n\nMost people never see this function because your idea engine is so loud and engaging. Your value system is quiet, internal, and absolutely certain about what matters. It doesn't need consensus or external validation — it just knows. This is why you can be passionately enthusiastic about something one day and completely indifferent the next. Your idea engine explored it; your value system decided it didn't matter. No drama, just a silent verdict.\n\nThis function is where your stubbornness lives. When something violates your values, no amount of logical argument will move you. You may not be able to articulate why in a way that satisfies an analytical thinker, but your value system has rendered its judgment and it's not negotiable. This can look irrational to types who lead with logic, but it's actually a different kind of intelligence — one that processes meaning and authenticity rather than consistency and efficiency.\n\nYour value system is also what makes you a surprisingly good judge of character. It reads people not through their words or behavior but through their alignment with their own values. You can sense when someone is being inauthentic — when their presentation doesn't match their core — even when you can't explain how you know.\n\n**Your Third Function: Extraverted Thinking (Te) — The Developing Executor**\n\nThis is your growth edge, and its development is the single biggest factor in whether your natural gifts compound into achievement or remain beautiful potential. Your organizing function handles structure, systems, execution, and measurable outcomes. In your twenties, it's mostly dormant — you have ideas and values but struggle with consistent follow-through. In your thirties, it starts developing, and this is when Inspirers become genuinely formidable: they can dream it, believe in it, and build it.\n\nDeveloping this function looks like: following through on commitments even when your idea engine has moved on. Building systems that work without your continuous enthusiasm — project management tools, accountability partners, routines that run on autopilot. Making decisions and sticking with them. Saying no to exciting possibilities that don't serve your current priorities. Each of these feels slightly unnatural because it requires your third-position function to override your first-position function — and the effort is real. But the payoff is enormous.\n\n**Your Fourth Function: Introverted Sensing (Si) — The Blind Spot**\n\nThis is the function you trust least and develop last. It handles concrete details, routine maintenance, past experience, and physical grounding. It's why you forget appointments, struggle with repetitive tasks, and sometimes feel disconnected from your own body. You can go an entire day without eating if your idea engine is engaged enough, and you may not realize you're physically exhausted until you literally can't continue.\n\nUnder extreme stress, this function erupts — you become obsessively focused on physical symptoms, past failures, or details that normally wouldn't register. Health anxiety, compulsive cleaning, or sudden fixation on some logistical detail are all signs of this function taking over. It feels like the opposite of who you are, because it is — it's the part of your cognition you normally suppress becoming the only thing you can think about.\n\nDeveloping this function doesn't mean becoming detail-oriented or routine-driven. It means building a minimal infrastructure of physical self-care and logistical reliability: eating regularly, sleeping enough, keeping appointments, paying bills on time. Not because these things are virtuous but because they provide the stable platform your idea engine needs to do its best work. A Inspirer running on three hours of sleep and an empty stomach isn't creative — they're chaotic.\n\n**How the Stack Works Together**\n\nWhen all four functions are working in concert, you're operating at your peak: your idea engine generates possibilities, your value system selects the meaningful ones, your organizing function turns them into reality, and your grounding function keeps you physically and logistically stable through the process. This is the integrated Inspirer — creative, principled, effective, and reliable.\n\nThe most common dysfunction is your idea engine running unchecked without enough input from the other three functions: generating possibilities that aren't filtered for values (exciting but meaningless), aren't translated into action (inspiring but unfinished), and aren't grounded in physical reality (brilliant but unsustainable).",

  emotionalLandscape:
    "Your emotional world is paradoxically both more visible and more private than most people realize. Your idea-engine-driven enthusiasm makes you appear emotionally transparent — people feel like they know how you're feeling because you're so expressive. But what they're seeing is your external reaction to the world, not your internal experience of it. The difference matters enormously.\n\n**The Processing Delay**\n\nYour value system processes emotions on a delay, similar to other deep-feeling introverted types but with less time to notice because your idea engine is already onto the next thing. You can have a conversation that triggers a deep emotional reaction and not recognize it until hours later, when the idea-engine noise quiets down and your value system gets airtime. This means you sometimes make commitments or agreements in the moment that you later realize conflict with how you actually feel. If you've ever said yes to something with genuine enthusiasm and woken up the next morning dreading it — that's the delay in action.\n\n**Joy: Your Natural State**\n\nJoy is your most natural emotion and the one you express most freely. Your idea engine generates genuine delight in novel connections, unexpected moments, and creative possibilities. This isn't performance — you really do experience more daily moments of pleasure and excitement than most types. Walking through a new city, encountering an unexpected idea, meeting someone with an unusual perspective — these aren't just pleasant experiences for you. They're peak experiences. Your capacity for everyday wonder is a genuine gift.\n\nThe risk is that joy becomes your default setting to the exclusion of harder feelings. If you're always bright, always enthusiastic, always finding the silver lining — check whether that's genuine resilience or your idea engine running interference to prevent your value system from sitting with something painful.\n\n**Sadness and Grief**\n\nSadness and disappointment get less expression. Your idea engine tends to route around painful emotions by generating alternatives, reframing, or finding silver linings. 'It wasn't meant to be.' 'Something better will come along.' 'At least I learned something.' These are all potentially true — and all potentially mechanisms for avoiding the actual grief.\n\nThe tell: if you keep coming back to the same sadness months or years later — a relationship that ended, a loss you 'moved on' from, a failure you 'learned from' — you probably never finished processing it the first time. Your idea engine generated a reframe before your value system was done grieving. The fix isn't complicated: give yourself quiet time (no inputs, no stimulation) and let the feeling arrive fully. It's uncomfortable. It's also how you actually heal rather than just narrative-repair.\n\n**Anger: The Hidden Emotion**\n\nAnger is complicated for you. Your value system can generate fierce anger when values are violated, but your underdeveloped social-emotional function makes direct expression feel dangerous — like it might destroy the relationship or create irreversible conflict. So anger often comes out sideways: sarcasm, withdrawal, passive-aggressive warmth (being pleasant to someone's face while distancing emotionally), or a sudden sharp comment that seems disproportionate because the other person doesn't know about the six months of swallowed frustrations behind it.\n\nLearning to say 'I'm angry about this, and here's why' is a specific developmental task for your type. It feels unnatural because it requires your least-developed function to take the lead. But the alternative — anger that leaks out sideways or accumulates until it explodes — damages relationships far more than direct, early expression ever would.\n\n**The Stress Cascade**\n\nUnder stress, your emotional pattern follows a specific cascade. First, you speed up: more ideas, more activity, more socializing, less depth. You look energized from the outside but you're running from something. Second, the enthusiasm becomes forced — you're still generating possibilities but none of them feel right, and you may withdraw from people who know you well enough to see through it. Third, you crash into a grip state: sudden exhaustion, obsessive worry about health or logistics, a feeling of being trapped by mundane details that normally don't register.\n\nThe recovery path is not more stimulation. It's slowing down, reducing inputs (fewer screens, fewer commitments, fewer people for 48 hours), reconnecting with your body through movement that isn't goal-oriented, and giving your value system quiet space to tell you what actually needs attention. One honest conversation with someone who has earned your deep trust often breaks the cycle faster than anything else.",

  growthPath:
    "Inspirer development has a specific arc, and understanding where you are on it clarifies a lot of the tension you might be feeling right now.\n\n**Teens and Twenties: The Exploration Phase**\n\nIn your teens and twenties, your idea engine is king. You're exploring everything — ideas, people, careers, identities, places, philosophies. This is appropriate and necessary. Your idea engine needs to survey the landscape before your value system can make informed choices about what to commit to. The mistake in this phase isn't exploring too much; it's feeling guilty about it.\n\nSociety rewards focus and consistency, and you don't naturally provide either yet. You may internalize the message that there's something wrong with you — that your restlessness is a flaw rather than a feature of a mind that hasn't yet found its focus. The people telling you to 'pick something and stick with it' mean well but don't understand that for your type, premature commitment is more dangerous than extended exploration. A Inspirer who commits too early commits to something that doesn't align with their values, and the eventual correction is far more disruptive than the exploration phase they tried to skip.\n\nDuring this phase, invest in breadth of experience with enough depth in each area to learn something real. Don't just dabble — spend enough time in each interest to understand it beyond the surface. The knowledge you accumulate now is the raw material your pattern-bridging function will draw on for the rest of your life.\n\n**Late Twenties to Early Thirties: The Execution Awakening**\n\nThe critical shift happens here: your organizing function (the third tool in your stack) starts developing. This is when the Inspirer either becomes formidable or stays permanently in possibility-mode.\n\nDeveloping your organizing function isn't about becoming organized or disciplined in the traditional sense. It's about building the capacity to execute on what your idea-engine-to-values pipeline has identified as genuinely important. This looks like: finishing projects that matter even when they stop being fun. Building systems that compensate for your idea engine's tendency to move on — project management tools, accountability relationships, routines. Developing the ability to say no to exciting possibilities that don't serve your current direction.\n\nInspirers who skip this development become the brilliant person who never quite achieves what they're capable of. Not because they lack talent — they're often the most talented person in any room — but because talent without execution structure doesn't compound. The 40-year-old Inspirer who has started twelve things and finished two is not less creative than the one who has started twelve things and finished seven. They just never built the infrastructure.\n\nThis phase is uncomfortable because it requires your third-position function to sometimes override your first-position function. Your idea engine says 'this new thing!' and your developing organizing function says 'we're finishing the current thing first.' The internal conflict is real, and it's the growing pain that separates the Inspirers who actualize their potential from those who remain beautiful potential indefinitely.\n\n**Mid-Life: The Grounding**\n\nMid-life brings the integration of your blind-spot function — developing a relationship with routine, physical experience, and the accumulated lessons of your past. This doesn't mean becoming boring or predictable. It means building a foundation stable enough to support the creative risks your idea engine still wants to take.\n\nPractically, this looks like: consistent health habits that you maintain even when they're not novel. Some financial structure — not because money is your goal but because financial chaos creates anxiety that drains your creative energy. A few relationships maintained with regularity rather than intensity — people you see weekly rather than in passionate bursts separated by months of silence.\n\nFor many Inspirers, this phase brings a surprising discovery: stability doesn't kill creativity. It feeds it. The most creative periods of your life may come after you've built a stable foundation, because your idea engine can take bigger swings when it's not also worrying about whether the rent is paid and when you last ate a vegetable.\n\n**The Integrated Inspirer**\n\nThe fully developed version of your type is one of the most compelling personalities: they see possibilities (idea engine), filter for meaning (value system), execute on the important ones (organizing function), and build on a stable foundation (grounding function). Each function supports the others, creating a person who is simultaneously creative and reliable, passionate and grounded, visionary and practical.\n\nGetting there requires not fighting your idea engine but building infrastructure around it — like training a river rather than damming it. The energy is your greatest asset. The channel is what you're building.",

  toolkit: [
    {
      title: "The 72-Hour Rule",
      context:
        "When a new idea hits and you want to drop everything to pursue it — the classic Novelty Spiral trigger",
      action:
        "Write the idea down in full detail — give your idea engine its moment. Capture everything: what excites you, what it could become, how it connects to other things. Then wait 72 hours before taking any action. If it still excites you after 72 hours AND you can articulate how it connects to your existing commitments, pursue it. If not, add it to your 'someday' list without guilt. This works because it doesn't suppress your idea engine (which backfires) but adds an organizing checkpoint that prevents impulse from overriding strategy.",
    },
    {
      title: "The Direct Ask Script",
      context:
        "When you've been avoiding a difficult conversation and your warmth is becoming a wall — the Conflict Dodge in action",
      action:
        "Use this structure: 'I need to tell you something that's hard for me to say directly. [State the issue in one sentence.] I'm bringing this up because I value this relationship and pretending it's fine isn't working.' The script works for your type specifically because it names the difficulty (which your value system needs), frames it as values-driven (which is true and gives you courage), and is brief enough that you can say it before your avoidance instinct kicks in. Practice it out loud before the conversation.",
    },
    {
      title: "The Completion Sprint",
      context:
        "When a project is 80% done and your motivation has evaporated — the last-mile problem that plagues your type",
      action:
        "Set a timer for 90 minutes. Tell someone specific what you're going to finish — text them right now. Work only on the remaining 20%. When the timer goes off, you're done whether it's perfect or not. This leverages your organizing function (external accountability, time-bounded structure) instead of relying on your idea engine's enthusiasm, which has already moved on. The imperfect finished thing is worth ten times the perfect unfinished thing.",
    },
    {
      title: "The Depth Flag",
      context:
        "When you're in a conversation and want the other person to understand the difference between you exploring and you being serious — the Depth Dilemma in action",
      action:
        "Build the habit of flagging your mode. When you're brainstorming or exploring, say: 'I'm just thinking out loud here.' When you're speaking from your core: 'This one actually matters to me.' The distinction seems small but it transforms how people experience you. Instead of trying to figure out which version of you they're talking to, they can trust your signal. Over time, this builds the deeper connections your value system craves but your idea engine's pace makes difficult.",
    },
    {
      title: "The Input Fast",
      context:
        "When you're feeling overwhelmed, scattered, or emotionally flat despite being busy — early signs of your stress cascade",
      action:
        "For 48 hours, cut your inputs in half. No new podcasts, no social media scrolling, no starting new books, no agreeing to new plans. Your idea engine is overstimulated and your value system can't get a word in. Use the freed-up time for: one long walk without earbuds, one conversation with someone who knows your real self, and at least one hour of genuine silence. The goal is to let your value system catch up with your idea engine. When it does, you'll know what actually needs attention — and it usually isn't any of the things your idea engine was busy generating.",
    },
    {
      title: "The Two-Deep Rule",
      context:
        "When building expertise and trying to avoid the trap of perpetual surface-level exploration",
      action:
        "Identify two fields or domains that genuinely align with your values — not just things your idea engine finds interesting, but things your value system says matter. Commit to going deep in these two areas for at least two years each. Deep means: reading the foundational texts, not just the summaries. Understanding the debates within the field, not just the conclusions. Building something real using what you've learned. Your pattern-bridging superpower becomes exponentially more valuable when it's connecting deep knowledge rather than surface impressions.",
    },
  ],

  compatibilityNotes: {
    INTJ:
      "High chemistry pairing. Your idea engine feeds their pattern recognition with raw material; their execution capability helps you finish things. They offer the strategic depth you respect; you offer the creative flexibility they need. Tension: they want depth and focus on one thing, you want breadth and possibility across many. Works when both respect the other's tempo rather than trying to change it.",
    INFJ:
      "Deep mutual understanding — both value authenticity and meaning above surface-level engagement. They match your depth through a different pathway: where your idea engine explores broadly, their pattern recognition goes deep. Risk: you can both avoid conflict through different mechanisms (your humor and warmth, their withdrawal and peacemaking) until resentment builds silently on both sides. Needs explicit communication agreements built early.",
    INTP:
      "Shared idea generation creates electric intellectual connection. They match your pace of idea exploration but through an internal-logic lens that sharpens your thinking and exposes gaps in your reasoning. You make their ideas warmer; they make yours more rigorous. Risk: neither of you is strong on follow-through or direct confrontation, so you can build a brilliant world together that never quite becomes real.",
    ENTJ:
      "They turn your visions into plans with a speed and decisiveness that feels like magic. You keep their plans flexible and human, preventing them from steamrolling people in pursuit of efficiency. Strong complementary dynamic when there's mutual respect. Risk: they may try to manage you, which triggers your value system's independence alarm immediately.",
    ENFJ:
      "Both warm, both idealistic, both people-oriented. The difference: their social-emotional awareness seeks group harmony while your internal value system seeks individual authenticity. This can create a 'who are we doing this for?' tension that's actually productive when acknowledged — they push you toward social responsibility, you push them toward personal truth.",
    ISFJ:
      "Opposite in many ways — their routine-and-precedent stability can ground your flights of possibility, and your enthusiasm can expand their world into new experiences. At their best, they provide the reliable foundation you need; at yours, you provide the spark they didn't know they were missing. Risk: you may feel constrained by their need for routine; they may feel exhausted and destabilized by your pace of change.",
    ENTP:
      "Two idea engines in one relationship — conversations are electric, never boring, and never quite land on a conclusion. You share the love of possibility but differ in motivation: your value system drives your choices, their internal logic drives theirs. This means you can debate endlessly and enjoy every minute. Risk: with two strong idea engines and no strong execution function between you, things get talked about far more than they get done.",
    ISTP:
      "They operate on a completely different frequency — practical, present-moment, and minimal. Where you see ten possibilities, they see one thing that needs fixing right now. This can be grounding when you need it and suffocating when you don't. They respect competence over enthusiasm, which means your natural approach (lead with excitement) may not land. Tension: your expansive energy may feel like noise to their quiet efficiency.",
    ISFP:
      "Shared internal value system creates an immediate sense of mutual understanding about what matters. They share your authenticity-first orientation but express it through present-moment experience rather than future possibility. You can learn from their ability to be fully present; they can learn from your ability to see where things could go. Gentle, warm pairing. Risk: both avoid direct conflict, which can create a relationship that's peaceful on the surface but carrying unresolved issues underneath.",
    ESTJ:
      "Their organizing-function-first, precedent-respecting authority orientation can feel controlling to your idea-engine, value-system independence drive. They want rules, procedures, and clear expectations; you want flexibility, autonomy, and room to improvise. Both strong-willed through completely different mechanisms. Can work if the ESTJ respects your need for freedom and you respect their need for structure — but this mutual respect is harder to build than it sounds.",
  },

  compatibilitySnapshot: {
    naturalAllies: [
      {
        code: "INTJ",
        name: "The Mastermind",
        reason:
          "Your idea engine feeds their deep pattern recognition with raw material while their execution capability helps you finish things. Intellectually electric.",
      },
      {
        code: "INFJ",
        name: "The Champion",
        reason:
          "Both value authenticity and meaning above all. Their depth of pattern recognition complements your breadth of idea generation. Rare mutual understanding.",
      },
      {
        code: "ENTJ",
        name: "The Executive",
        reason:
          "They turn your visions into reality while you keep their plans flexible and human. Strong action-oriented dynamic built on complementary strengths.",
      },
    ],
    growthPartners: [
      {
        code: "INTP",
        name: "The Philosopher",
        reason:
          "Shared idea generation creates intellectual fireworks. Their internal logic sharpens your ideas while your value system adds meaning to their frameworks.",
      },
      {
        code: "ISFJ",
        name: "The Guardian",
        reason:
          "Their stability and consistency ground your flights of possibility. They offer the reliable foundation you need but wouldn't build for yourself.",
      },
      {
        code: "ENFJ",
        name: "The Hero",
        reason:
          "Both warm and idealistic, but through different lenses — their group harmony versus your individual authenticity. Productive tension that expands both.",
      },
    ],
    challengingPairs: [
      {
        code: "ISTJ",
        name: "The Director",
        reason:
          "Your spontaneity directly clashes with their need for precedent and structure. They want proven methods; you want novel approaches. Mutual frustration unless there's deep respect.",
      },
      {
        code: "ESTJ",
        name: "The Governor",
        reason:
          "Their authority-and-precedent orientation can feel controlling to your independence drive. Both strong-willed through completely different mechanisms.",
      },
      {
        code: "ISTP",
        name: "The Master",
        reason:
          "They operate on a completely different frequency — practical, present, and minimal. Your expansive enthusiasm may register as noise to their quiet efficiency.",
      },
    ],
  },

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Hyperdrive",
        description:
          "Your idea engine speeds up. More ideas, more plans, more conversations, more browser tabs. You look energized from the outside but you're running from something your value system doesn't want to face yet.",
      },
      {
        stage: 2,
        label: "Scattered Withdrawal",
        description:
          "The enthusiasm becomes forced. You're still generating possibilities but none of them feel right. You may withdraw from people who know you well (they'd see through it) while staying active in surface-level social contexts.",
      },
      {
        stage: 3,
        label: "Grip State",
        description:
          "Your least developed function erupts. Sudden obsession with physical symptoms, past failures, or logistics. You become uncharacteristically rigid, detail-focused, and pessimistic. It feels like the walls are closing in — because your normally expansive idea engine has collapsed.",
      },
    ],
    stressRecovery:
      "What actually helps: One honest conversation with someone who has earned your deep trust. Physical movement that's not goal-oriented (a walk, not a workout). Reducing inputs — fewer screens, fewer commitments, fewer people for 48 hours. What doesn't help: More socializing, more new projects, pretending you're fine.",
    flowTriggers: [
      "A creative problem with no established solution",
      "Collaborating with people who challenge and inspire you",
      "Work that directly connects to something you care about",
      "Freedom to approach the problem in whatever way makes sense",
      "A deadline that's close enough to feel real but far enough to allow exploration",
      "The feeling that this could actually matter",
    ],
    flowDescription:
      "Your flow state is characterized by rapid ideation, effortless social energy, and a feeling of everything connecting. Time compresses. You make leaps that you can't fully explain but that prove correct. This is your idea engine and value system at full capacity — generating possibilities filtered through meaning. The risk: you'll commit to things in flow that your regular self can't sustain.",
  },

  careerAlignment: {
    naturalFits: [
      "Entrepreneurship",
      "Creative direction",
      "Consulting (strategy or innovation)",
      "Journalism / storytelling",
      "Teaching (university or workshop level)",
      "Product development",
      "Coaching / facilitation",
    ],
    likelyDrains: [
      "Repetitive data entry or process work",
      "Roles with rigid procedures and no room to improvise",
      "Solo work with no collaborative element",
      "Compliance-heavy environments",
      "Work with no visible human impact",
    ],
    careerWarning:
      "Inspirers have two career traps and they're opposites. Trap one: changing too often, so you never build the deep expertise that makes your pattern-bridging powerful. Trap two: staying too long because your idea engine keeps generating narratives about the 'next phase' that never materializes. Trust your value system — if the work no longer feels meaningful, no amount of reframing will fix it.",
  },

  growthPathStructured: {
    intro:
      "Growth for The Inspirer is about building the infrastructure that lets your natural gifts compound — not suppressing your idea engine, but giving it a runway to land on.",
    areas: [
      {
        title: "Build Your Execution Muscle",
        description:
          "Your developing organizing function is the key to turning possibilities into reality. Practice: Pick one project that matters to your value system. Build a simple structure (three milestones, one accountability partner, a weekly check-in). Follow it for 90 days, even when your idea engine generates something more exciting. The goal isn't discipline for its own sake — it's proving to yourself that your visions can become real.",
      },
      {
        title: "Practice Direct Communication",
        description:
          "Your underdeveloped social-emotional function makes conflict avoidance feel like kindness. It isn't. Practice: When you notice yourself hinting, joking, or withdrawing instead of stating what you need, pause and use a direct statement. 'I need X' or 'When Y happened, I felt Z.' Start with low-stakes situations and build tolerance for the discomfort.",
      },
      {
        title: "Befriend Your Body",
        description:
          "Your blind-spot function means you can live in your head for days without checking in with your physical self. Practice: Build one consistent sensory routine — same morning walk, same meal prep day, same bedtime. Not because routine is inherently valuable but because physical stability gives your idea engine a stable platform to launch from.",
      },
    ],
  },
};
