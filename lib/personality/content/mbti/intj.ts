import type { MBTITypeContent } from "./types";

export const INTJ: MBTITypeContent = {
  typeCode: "INTJ",
  typeName: "The Mastermind",
  tagline: "Builds mental models of the world and then bends it to match",
  color: "#93A2B6",

  heroImage: "/characters/intj/intj-reveal.svg",
  sectionImages: {
    strengths: "/characters/intj/intj-strengths.svg",
    relationships: "/characters/intj/intj-relationships.svg",
    career: "/characters/intj/intj-career.svg",
    growth: "/characters/intj/intj-growth.svg",
  },

  overview: `You process the world through pattern recognition. While others react to what's in front of them, you're running simulations — mapping trajectories, identifying leverage points, building mental models of how systems behave. This isn't something you choose to do; it's how your mind is wired. You were the kid who saw the answer before the teacher finished the question, and the adult who sees where a project is heading before the team has finished the kickoff meeting.

This gives you an unusual advantage: you can hold complexity without being overwhelmed by it. Where most people need to simplify before they can act, you can work with the full picture. Strategy, architecture, long-range planning, systems design — any domain that rewards seeing the whole map before making a move is a domain where your type thrives. You don't just plan; you model. And your models tend to be right more often than they should be.

**How your mind is wired:** Your personality runs on four cognitive functions — think of them as mental tools you use in a specific order of preference. Your lead tool is **Introverted Intuition (Ni)**: deep, background pattern recognition that synthesizes scattered information into insights about what's coming next. Your second tool is **Extraverted Thinking (Te)**: the part of you that builds plans, creates systems, and measures results in the external world. Third is **Introverted Feeling (Fi)**: your internal value compass — present but still developing, which means you have strong convictions you can't always articulate. Last is **Extraverted Sensing (Se)**: awareness of the physical, present-moment world — your blind spot, and the area where stress hits hardest.

The tension you'll navigate throughout your life is between your strategic mind and the parts of life that don't respond to strategy. Relationships, emotions, spontaneous experiences, physical presence — these operate on different rules than the ones your pattern-recognition-to-execution pipeline (what personality theory calls the Ni-Te axis) is calibrated for. The most developed Masterminds aren't less strategic. They've learned to be strategic about the things that strategy alone can't solve.`,

  descriptionInsight:
    "Your trait pattern — strong Introversion, strong Intuition, very strong Thinking, moderate Judging — creates a specific cognitive signature: you're a long-range strategist who works best alone, trusts abstract patterns over concrete details, and makes decisions through logic rather than consensus.",

  strengths: [
    {
      title: "Strategic Vision",
      description:
        "You naturally see long-term patterns and trajectories that others miss. Where most people see isolated events, you see interconnected systems with predictable behaviors. This isn't abstract talent — it shows up every time you call the outcome of a project, relationship, or decision months before anyone else does.",
      deepDive:
        "Your strategic vision operates on a different timescale than most people around you. While they're reacting to what happened last week, you're modeling what happens in six months if the current trajectory holds. This comes from your lead cognitive function — deep pattern recognition that runs constantly in the background, pulling together data from conversations, articles, observations, and even hunches into a coherent forecast. The gift is obvious: you see around corners. The hidden cost is that you can become so attached to your long-range model that you dismiss short-term signals that don't fit it. The most effective Masterminds learn to hold their strategic vision loosely enough to update it when reality sends new data — even when that data arrives through channels (emotions, body sensations, other people's reactions) they don't naturally trust.",
    },
    {
      title: "Independent Thinking",
      description:
        "You form judgments based on logic and evidence, not social pressure or consensus. This makes you resistant to groupthink and capable of making unpopular but correct calls. The cost is that people sometimes experience you as stubborn; the benefit is that your positions have been stress-tested internally before you ever voice them.",
      deepDive:
        "Your independence isn't a personality quirk — it's a structural feature of how your cognition works. Your internal pattern recognition generates conclusions that have already been tested against your mental models before they reach your conscious mind. By the time you voice an opinion, it's been through more quality checks than most people's final decisions. This is why external pressure to change your mind often feels not just annoying but irrational — they're asking you to discard a conclusion that's been rigorously vetted in favor of one that hasn't. The growth edge here is recognizing that your internal vetting process has a blind spot: it only tests against the data your pattern recognition collects, which systematically underweights emotional, social, and physical-world information. The people pressuring you aren't always wrong — sometimes they have data your system filtered out.",
    },
    {
      title: "Systematic Execution",
      description:
        "You don't just have ideas — you build frameworks to make them real. Plans, processes, and structures come naturally to you. Vision without execution is just daydreaming; you do both. Your secondary function — organizing and executing in the external world — translates insights into actionable steps with a speed that looks effortless to others.",
      deepDive:
        "What separates you from other deep thinkers is that your cognition has a built-in bridge between insight and action. Your pattern recognition generates the vision; your organizing function immediately asks 'how do we make this real?' This two-step process — see the destination, build the road — happens so naturally that you may not realize how rare it is. Many insightful people never execute. Many executors never see the full picture. You do both, which is why you're often the person who turns a vague organizational aspiration into a concrete plan with milestones and metrics. The risk is over-systematizing. Not everything benefits from a framework, and some of your best outcomes will come from situations where you had to improvise — where the system broke down and something more spontaneous took over.",
    },
    {
      title: "Decisive Under Pressure",
      description:
        "When others freeze or panic, you default to pattern recognition: assess the situation, identify the optimal path, execute. Crisis brings you clarity, not chaos. This is your pattern-recognition-to-execution pipeline doing what it was built for — the stakes just strip away the noise.",
      deepDive:
        "Your calm under pressure isn't emotional detachment — it's cognitive architecture. When a crisis hits, your pattern recognition accelerates rather than shutting down. It starts pulling relevant patterns from every similar situation you've encountered or studied, generating a rapid model of the situation. Your organizing function then converts that model into a decision tree and selects the optimal branch. This entire process happens in seconds and feels less like thinking than like seeing. The people around you experience a moment of chaos; you experience sudden clarity. This makes you invaluable in genuine emergencies and high-stakes decisions. The shadow side: you may seek out or create urgency because your cognitive system performs at its peak under pressure. Manufactured urgency — treating everything as a crisis, making decisions too fast when patience would serve better — is a pattern worth watching.",
    },
    {
      title: "Intellectual Honesty",
      description:
        "You'd rather be right than comfortable. When you discover your model is wrong, you update it — sometimes painfully, but you do it. This capacity for self-correction is rarer than people think, and it compounds over decades into genuinely exceptional judgment.",
      deepDive:
        "Your relationship with truth is more rigorous than most people's because your internal value system treats intellectual integrity as a core identity element. Being wrong about facts doesn't threaten you the way it threatens types whose self-worth is built on social standing or emotional consistency. It threatens you only when it suggests your thinking process itself is flawed — which is why you sometimes double down on positions not because you believe the conclusion, but because you're defending the reasoning process that produced it. The evolved version of this strength is learning to separate the process from the output: your reasoning methodology can be excellent and still produce an occasional wrong answer. That's not a system failure; it's how good systems work in an uncertain world.",
    },
  ],

  growthEdges: [
    {
      title: "The Internal Loop",
      teaser:
        "When stressed, you may generate increasingly elaborate internal models and rationalize them with selective evidence — filtering out emotional and sensory data that doesn't fit. This feels productive. It isn't. You're building an increasingly sophisticated case for a conclusion you arrived at emotionally but can't admit to.",
      fullExplanation:
        "This is your primary stress response and your most dangerous cognitive pattern. Here's what happens: your pattern recognition generates an internal model — a prediction, a fear, a vision of how something will play out. Your organizing function then selectively gathers evidence to support it. Your developing value system (the third function in your stack) sends up a signal that something feels wrong, but you can't articulate what, so you dismiss it. Your least-developed function — present-moment sensory awareness — would ground you in physical reality, but it's the tool you trust least.\n\nThe result is a closed loop: internal pattern generates conclusion → external logic confirms it → conviction strengthens → contradicting evidence gets filtered out. From the outside, you look increasingly rigid and certain. From the inside, you feel like you're just being rational. The telltale sign: if you're becoming more certain about something and you haven't encountered any new information, you're probably in a loop.\n\nThis pattern is especially dangerous in three contexts. First, relationship conflicts — where your pattern recognition generates a narrative about the other person's motives and your logical mind builds a case that feels airtight but is based entirely on interpretation, not evidence. Second, career decisions — where your internal model tells you to stay or leave based on a vision of the future that hasn't been checked against present reality. Third, health anxiety — where your pattern recognition generates worst-case scenarios and your logical mind finds just enough supporting data online to keep the spiral going.\n\nThe intervention isn't to stop trusting your pattern recognition — it's to build a circuit breaker. When you notice increasing certainty without new data, deliberately seek the perspective of someone whose cognitive strengths complement your blind spots — ideally someone who naturally reads social dynamics or stays grounded in physical reality. Not because they're smarter, but because they see the data you're structurally configured to miss. You can also break the loop physically: vigorous exercise, cold water, anything that forces your attention into your body and out of your internal projections.",
      premiumHook:
        "Understand the exact mechanism that makes your strongest cognitive pattern also your biggest liability — and get the specific circuit breaker that works for your type.",
      relatedDimension: "TF",
    },
    {
      title: "The Competence Trap",
      teaser:
        "Your identity may be overly tied to being the smartest person in the room. When you're not — or when someone challenges your expertise — the emotional reaction is disproportionate. This isn't arrogance, exactly. It's that competence is where your self-worth lives, and threats to it feel existential.",
      fullExplanation:
        "For your type, competence isn't a nice-to-have — it's an identity anchor. Your developing value system has likely built a self-concept around intellectual capability as the primary measure of your worth. This works beautifully when you're in environments where you are, in fact, the most capable person. It becomes a trap when you aren't.\n\nThe pattern: you enter a domain where you're not yet expert. Your pattern recognition immediately generates a model of how to get there. But the gap between 'having a model' and 'having demonstrated competence' is visible to others, and their perception matters more than you'd like to admit. You may respond by withdrawing (to study privately until you can re-enter as the expert), becoming overly critical of others' work (to re-establish relative positioning), or dismissing the domain entirely ('this isn't a real skill').\n\nWatch for these specific behaviors: avoiding situations where you'd be a visible beginner; feeling disproportionate anger when corrected; spending excessive time researching before attempting something new (disguised as preparation, actually anxiety about being seen as incompetent); judging others' intelligence as a reflexive way of managing your own position in the room.\n\nThe deeper issue is that your value system hasn't yet developed alternative sources of self-worth beyond intellectual capability — things like emotional connection, physical presence, creative expression, or the simple warmth of being a good friend. Building these doesn't weaken your intellectual identity. It means a challenge to your competence no longer feels like an attack on your entire self. You become someone who can say 'I don't know' without the floor dropping out from underneath you.",
      premiumHook:
        "Learn why intellectual threats feel personal and how to build a self-concept that doesn't collapse when someone in the room knows more than you do.",
      relatedDimension: "TF",
    },
    {
      title: "Relationship Maintenance Debt",
      teaser:
        "You're comfortable alone, which means you may not notice when isolation shifts from preference to problem. You have a relationship model in your head that says everything is fine — but you haven't checked the actual data in months. The people you care about need more than your internal commitment; they need evidence of it.",
      fullExplanation:
        "Masterminds have a specific relational blind spot that stems from the gap between how you model relationships internally and where relationships actually happen — in the external, social, emotional world. You maintain a detailed internal model of your important relationships — you know how you feel, you remember what matters, you've thought through what you'd do if they needed you. The problem is that none of this is visible to the other person.\n\nYour partner, friends, and family don't have access to your internal model. They only see your behavior. And your default behavior — especially when you're deep in work or projects — is absence. Not emotional absence (you're fully present internally), but literal, visible absence. You forget to text back. You cancel plans because a project absorbed you. You assume that because the relationship is fine in your head, it's fine in reality.\n\nThis creates what we call Relationship Maintenance Debt — small emotional transactions that you owe but haven't paid. Each one is trivial on its own. But they compound. And because you're not naturally checking the external social signals, you don't notice the debt accumulating until someone tells you the account is overdrawn.\n\nThe pattern is particularly destructive because of how you respond to the confrontation. When someone finally tells you they feel neglected, your first instinct is to present evidence from your internal model: 'But I was thinking about you,' 'I had a plan for your birthday,' 'I would drop everything if you needed me.' These are all true — and all irrelevant. The other person experienced months of absence. Your internal model, no matter how detailed, doesn't count as presence.\n\nThe fix isn't becoming someone you're not. It's building a system that externalizes the care your pattern recognition already tracks internally. Schedule relationship maintenance the way you schedule work. Set reminders. Create rituals. This isn't inauthentic — it's translating genuine internal commitment into visible external action. Your operating system needs a different output format for relationships than it uses for everything else.",
      premiumHook:
        "See the specific pattern behind why your relationships deteriorate despite your genuine commitment — and get a maintenance framework designed for how your type actually operates.",
      relatedDimension: "EI",
    },
  ],

  relationshipStyle: "Selective, Loyal, Intellectually Demanding",
  relationshipPreview:
    "You bring rare depth to relationships — genuine loyalty, intellectual stimulation, and a willingness to solve problems that most people just complain about. You don't collect people; the ones you let in have passed a filter most will never know about. The tension is between your deep capacity for commitment and your difficulty showing it in ways that register. You think loyalty is demonstrated by consistency and problem-solving. Your partners often need it demonstrated through warmth, presence, and words.",

  relationshipDeepDive:
    "Your relationship pattern has a specific architecture that's worth understanding. You select partners carefully — your pattern recognition has been unconsciously evaluating compatibility long before you consciously decide to invest. Once committed, you bring a fierce, quiet loyalty that most types can't match. You'll restructure your life around someone you've chosen. But you won't always tell them that.\n\nThe core tension is between your pattern-recognition-to-execution pipeline (which processes relationships through models, strategies, and problem-solving) and what relationships actually require (emotional presence, spontaneous affection, vulnerability that has no strategic purpose). You're not cold — your value system genuinely cares — but your expression of care routes through your organizing function: fixing things, optimizing shared systems, planning the future. Your partner may be asking for a hug and getting a spreadsheet.\n\n**Romantic Patterns**\n\nYou tend to fall for people who stimulate you intellectually before anything else. Physical attraction matters, but it's rarely the initial hook — a mind that surprises you is. Your ideal partner can hold a conversation at your depth, challenge your conclusions without triggering defensiveness, and understand that your need for alone time isn't rejection. You show love through acts of service and long-range planning: you may not say 'I love you' often, but you'll spend hours researching the best solution to a problem they mentioned once.\n\nThe early stages of a relationship are where you're most vulnerable to your own patterns. Your pattern recognition generates an idealized model of the relationship's trajectory before enough real data exists to support it. When reality diverges from the model — as it inevitably does — you may interpret normal relationship friction as evidence that the relationship is flawed, rather than evidence that your model was premature.\n\n**Friendship Dynamics**\n\nYou maintain a small, carefully curated circle. Acquaintances may number in the dozens, but people you'd call at 3am can be counted on one hand — possibly one finger. You're loyal and generous within this inner circle, but you struggle with the maintenance work of friendship. You can go months without contact and pick up exactly where you left off — but not everyone operates that way, and the friends who need more regular contact may drift away without you noticing.\n\n**Conflict Style**\n\nYou approach disagreements as problems to solve — identify the issue, propose a solution, implement it, move on. This is efficient and sometimes exactly right. But when the disagreement is emotional rather than logical — when your partner needs to feel heard rather than fixed — your logic-first conflict style can feel invalidating. The sentence 'Here's what I think we should do' is sometimes the worst possible response to 'I need you to understand how I feel.'\n\nYou also tend to withdraw during conflict rather than engage emotionally. This isn't avoidance in the traditional sense — you're processing internally, building a model of the situation, preparing a response. But to the other person, it looks like you've checked out. Learning to say 'I need time to think about this, but I'm not leaving' is one of the highest-leverage relationship skills you can develop.\n\n**Communication Preferences**\n\nYou value directness and efficiency in communication. Hints, passive aggression, and emotional subtext frustrate you because they force you to do work your cognitive system isn't designed for — decoding social signals. You'd rather someone tell you straight: 'I'm upset because you cancelled our plans.' That's data you can work with. 'I just think it's interesting how some people have their priorities...' is a puzzle you'll either solve wrong or refuse to attempt.\n\nSexually and intimately, you tend toward intensity rather than frequency. You're capable of remarkable focus on a partner when engaged, but you need to feel intellectually connected to be physically present. Small talk or routine kills your desire faster than anything else. You need a partner who can match you conversationally and isn't threatened by your need for alone time.\n\nYour best relationships share two qualities: intellectual parity (you need to respect their mind) and emotional patience (they need to not take your processing speed personally). You don't open up slowly because you don't trust — you open up slowly because your value system needs time to understand its own feelings before it can share them.",

  careerHeadline: "Strategic, Autonomous & Systems-Oriented",
  careerDirections: [
    "Strategy & Consulting",
    "Systems Architecture / Engineering",
    "Research & Analysis",
    "Product Strategy",
  ],
  careerDeepDive:
    "Your ideal work environment has three features: complexity worth wrestling with, autonomy over how you approach it, and visibility into the complete system rather than just your piece. Remove any of these and your engagement drops faster than your performance — which means you can spend years executing well in roles that are slowly hollowing you out.\n\nMasterminds gravitate toward domains that reward long-range thinking: strategy, architecture, research, investment, engineering, product development. You're not drawn to these because they sound prestigious — you're drawn because they let your pattern-recognition-to-execution pipeline do what it does best: build models of complex systems and then optimize them. The work itself feels like play when it's complex enough.\n\n**The Career Trap**\n\nThe career trap for your type is specific and insidious: you build such compelling internal narratives about the strategic value of your current position that you stay years past the point of diminishing returns. Your pattern recognition generates a story about how 'this is leading somewhere' and your organizing function finds evidence to support it. Meanwhile, your day-to-day reality is bureaucratic, repetitive, or politically constrained in ways that slowly degrade you. Check your model against your actual experience quarterly. If your narrative about why you're staying has become more sophisticated but your daily satisfaction hasn't improved, you're in a loop.\n\n**Leadership Style**\n\nLeadership comes naturally to you in theory — you see the vision, you can build the strategy, you can make the hard calls. In practice, your leadership style has a specific blind spot: you may underinvest in the people dimension. Communicating the 'why' behind decisions, giving recognition that isn't purely performance-based, and managing the emotional temperature of a team are all social-emotional functions that don't come naturally. The Masterminds who become great leaders aren't the ones who get better at strategy. They're the ones who learn to translate their strategy into human terms.\n\nYour team often doesn't know what you're thinking until you've made a decision. This feels efficient to you — why share half-formed thoughts? — but it creates an experience for your reports of being managed by a black box. They don't see your reasoning process, so your decisions can feel arbitrary even when they're deeply considered. Building the discipline to 'show your work' — explaining not just what you decided but how and why — is one of the highest-return investments you can make as a leader.\n\n**Ideal Environment Details**\n\nYou do your best work in environments that minimize social overhead and maximize intellectual challenge. Open offices are your nightmare — not because you're antisocial, but because your pattern recognition needs uninterrupted processing time to produce its best output. Constant interruptions force you into shallow processing mode, which is like asking a long-distance runner to sprint wind sprints all day.\n\nThe ideal setup: a private space (or at minimum, long blocks of uninterrupted time), clear expectations about deliverables rather than hours, a culture that values results over face time, and access to the full context of whatever system you're working within. You'd rather understand the entire business than just your department, because your pattern recognition works better with more data.\n\n**Flow Triggers and Career Satisfaction**\n\nYour flow state — that deep immersion where time disappears and your output multiplies — is triggered by problems that sit at the intersection of complexity and consequence. The problem needs to be hard enough to fully engage your pattern recognition, and the stakes need to be real enough that the solution matters. Theoretical puzzles engage you briefly; applied problems with real stakes can absorb you for days.\n\nWatch for the following warning signs that a role isn't right: you're spending more than 40% of your time on tasks that don't require pattern recognition or strategic thinking. You've stopped learning — your internal models haven't been updated in months. You've built elaborate justifications for staying that reference future possibilities rather than present reality. You feel restless but can't articulate why, because the external metrics (title, compensation, stability) all look fine.\n\nThe careers that keep your type engaged longest are those that scale in complexity as you grow — where there's always a bigger system to understand, a harder problem to solve, and genuine autonomy over how you approach it.",

  cognitivePortraitDescriptions: [
    "You process the world internally before engaging with it. Your best thinking happens alone, in quiet, with time to let ideas develop. Social interaction costs energy; solitude restores it. This doesn't mean you're shy — it means your cognitive engine runs on internal fuel.",
    "You instinctively look past surface details to the underlying structure. Where others see isolated facts, you see connections, trends, and implications. You trust your sense of 'what this means' over 'what this literally is.' This makes you a natural strategist — and occasionally blind to what's right in front of you.",
    "You evaluate decisions through a framework of consistency and effectiveness, not emotional resonance. 'Is this true?' and 'Does this work?' come before 'How does this feel?' This isn't just a tendency — it's a defining feature of how you operate.",
    "You prefer things decided, planned, and moving forward. Open-ended ambiguity drains you. You naturally create systems, timelines, and frameworks — not because you're rigid, but because structure is how you make progress.",
  ],

  cognitiveStackDescriptions: [
    "Your lead function — Introverted Intuition — synthesizes information into future-oriented patterns, running constantly in the background. It's why you 'just know' things before you can explain how you know them. It doesn't process data linearly — it converges on insights that feel certain even without step-by-step logic. Think of it as your mind's ability to see where things are heading, even when the evidence isn't fully visible yet.",
    "Your secondary function — Extraverted Thinking — translates those intuitive insights into structured plans and measurable outcomes. It's the bridge between vision and reality. When someone asks 'how do we actually do this?', this function activates. You don't just see the destination; you build the roadmap.",
    "Your third function — Introverted Feeling — is present but underdeveloped. It governs your personal values and sense of authenticity. It's in development — meaning you have strong values but may struggle to articulate them. You may know something 'feels wrong' without being able to explain why in logical terms. This function matures significantly in your 30s and 40s.",
    "Your fourth function — Extraverted Sensing — connects you to the present moment: physical sensations, immediate environment, real-time experience. This is your genuine blind spot. Under stress, it either shuts down entirely (you retreat into your head) or erupts impulsively (sudden sensory overindulgence like binge eating, impulse purchases, or obsessive physical activity).",
  ],

  cognitiveStackExplanation:
    "Your cognitive stack — the sequence of mental tools your mind prefers — gives you a specific architecture that explains not just your strengths but the exact shape of your blind spots. Understanding this isn't abstract personality theory; it's a practical map of how your mind actually works.\n\n**Your Lead Function: Introverted Intuition (Ni) — The Pattern Engine**\n\nThis is your primary lens — always running, always synthesizing. It takes in information from everywhere — conversations, reading, observation, even dreams — and distills it into patterns, models, and predictions. The output often arrives as a sudden knowing: you see where something is heading before you can articulate the chain of reasoning. This is why people sometimes accuse you of being arrogant about predictions. You're not — you just have data they don't, processed through a function they can't observe.\n\nIn daily life, this function is what makes you the person who 'called it' — who predicted the project failure, the relationship breakup, the market shift, months before it became obvious. It's also what makes you deeply uncomfortable in situations with no discernible pattern — truly random environments or chaotic social situations where your pattern engine keeps searching for structure that isn't there.\n\nThe catch with dominant Ni is that it can become self-referential. When it's healthy, it's taking in new information and updating its models. When it's stressed, it starts running on old data and generating increasingly elaborate models that confirm what it already believes. You'll recognize this state: increasing certainty with no new evidence. Everything 'just confirms' what you already thought. That's not insight — that's a closed loop.\n\n**Your Secondary Function: Extraverted Thinking (Te) — The Execution Engine**\n\nThis is how you translate internal insights into external reality. Where your pattern recognition sees the pattern, your organizing function asks: 'How do we make this happen? What are the steps? What can we measure?' This is why Masterminds are often more effective than other deep-intuitive types who share your pattern recognition but pair it with different secondary functions — your organizing capability gives you an execution ability that pattern recognition alone doesn't provide.\n\nThis function also shapes your communication style. You default to clarity and efficiency. You organize information hierarchically. You're impatient with tangents. In meetings, you want the conclusion first and the supporting evidence second. This is your organizing function imposing structure on external communication — efficient for you, sometimes abrasive for others.\n\nIn practice, this function is what makes you a builder, not just a thinker. You create plans, frameworks, processes, and systems. You measure outcomes. You optimize. When these two functions are in sync — pattern recognition generating insights, organizing function translating them into action — you're at your most productive and most satisfied.\n\n**Your Third Function: Introverted Feeling (Fi) — The Developing Compass**\n\nThis is your developing function — present but not yet fully trusted. It gives you a strong internal value system, but because it's third in your stack, you may not be able to articulate your values clearly. You know what matters to you with a quiet certainty, but when someone asks 'why do you care about this?', the answer doesn't translate easily into the logical, structured language your organizing function prefers.\n\nThis function is the key growth edge for Masterminds in their 30s and 40s. As you learn to trust and express your values, your decisions gain a richness that pure pattern-recognition-to-execution optimization can't provide. You stop optimizing only for effectiveness and start optimizing for meaning. You discover that 'this matters to me and I can't fully explain why' is a valid input to your decision-making process, not a bug to be resolved.\n\nIn relationships, this developing function is what gives you the capacity for deep, if sometimes unexpressed, love. You care fiercely about people — you just don't always know how to show it in ways they can feel.\n\n**Your Fourth Function: Extraverted Sensing (Se) — The Blind Spot**\n\nThis connects you to the physical, present-moment world — your body, your environment, sensory experience. It's the function you trust least and develop last. Under normal conditions, you simply underweight sensory data: you forget to eat, don't notice your environment is uncomfortable, miss social cues that are obvious to others.\n\nUnder extreme stress, this function erupts in uncharacteristic ways: binge eating, impulsive purchases, sudden obsession with physical appearance, or hypersensitivity to your environment. If you've ever found yourself on a 2am online shopping spree or eating an entire pizza after a stressful week, that's this function taking over when your usual tools have been overwhelmed.\n\nDeveloping this function doesn't mean becoming a thrill-seeker or a sensualist. It means building a relationship with the present moment — learning to notice what your body is telling you, to enjoy sensory experience without needing it to be 'productive,' and to ground yourself when your pattern recognition starts spinning into unsupported projections. Physical exercise, cooking, hands-on crafts, time in nature — these are all this-function development activities that many Masterminds discover, often to their surprise, they genuinely enjoy.\n\n**How the Stack Works Together**\n\nWhen all four functions are working in concert, you're operating at your peak: pattern recognition sees the landscape, your organizing function builds the plan, your value compass ensures it matters, and your sensory awareness keeps you grounded in present reality. This is the integrated Mastermind — strategic but human, visionary but present, effective but principled.\n\nThe most common dysfunction is a loop between your first two functions: pattern recognition generates a model, your organizing function builds a case for it, and they ping-pong back and forth without input from your value system or sensory awareness. This produces the Mastermind at their worst: brilliant, certain, and completely wrong about something that would be obvious if they'd checked their feelings or looked at what's right in front of them.",

  emotionalLandscape:
    "Your emotional life is deeper and more complex than most people — including you — give it credit for. The common misconception about Masterminds is that you don't feel strongly. The reality is that you feel through your internal value system, which processes emotions privately and on its own timeline. You often don't know how you feel about something until days after it happens.\n\nThis creates a specific pattern: an event occurs that has emotional content (a breakup, a betrayal, an unexpected kindness). Your pattern recognition immediately generates a framework for understanding it. Your organizing function identifies practical responses. You appear calm, maybe detached. You might genuinely believe you've processed it. Then, three days later at 2am, the emotional wave arrives — and it's far more intense than the original event seemed to warrant. You weren't suppressing emotion. You were on delay.\n\n**Grief and Loss**\n\nGrief is where this pattern is most visible. Masterminds often don't cry at funerals. They cry six weeks later while doing the dishes. The emotional processing simply moves on a different timeline than the event. If someone you care about has died or left your life, don't assume you've 'handled it' just because you functioned normally through the immediate aftermath. Your system processes major losses in waves that can continue surfacing for months. Give the waves permission to arrive when they do, even if the timing seems random or 'too late.'\n\n**Anger**\n\nAnger is your most accessible emotion, partly because it routes through your organizing function (which can express itself as controlled fury and devastating logical takedowns) rather than requiring the vulnerability of your less-developed emotional system. When you're angry, you become precise, cutting, and systematically destructive in argument. This can feel satisfying in the moment — your cognitive machinery is doing something it's very good at. But the relational damage can be severe, because people remember the content of your logical devastation long after the anger has passed.\n\nLearn to recognize the difference between productive anger (a boundary violation that needs addressing) and routed emotion (sadness, fear, or hurt that has been converted into anger because anger feels more controllable). The test: if your anger is proportionate to the actual offense and you can articulate what you need to change, it's probably productive. If the intensity seems excessive or you can't clearly state what would resolve it, the anger is probably carrying other emotions.\n\n**Joy and Excitement**\n\nJoy is harder for you to express than to feel. You experience genuine delight — usually when your pattern recognition locks onto an elegant solution, when a complex system suddenly makes sense, or when someone says something that genuinely surprises you intellectually. But your external expression of joy tends to be understated: a slight smile, a raised eyebrow, an intense 'yes, exactly' that doesn't convey to others the fireworks happening inside your head.\n\nPracticing the external expression of positive emotions — letting people see when you're excited, pleased, or grateful — is one of the easiest high-return emotional investments you can make. People can't respond to emotions they don't know you're having.\n\n**Stress Response Stages**\n\nYour stress response follows a predictable three-stage pattern:\n\n*Stage one — Withdrawal:* You retreat inward, cutting off external input and running increasingly isolated analysis. You may appear functional but are operating on cached data — no new information is getting in. People close to you can spot this: you become monosyllabic, your tolerance for small talk drops to zero, and you start cancelling social plans.\n\n*Stage two — The Internal Loop:* Your pattern recognition enters overdrive, generating worst-case scenarios while your organizing function builds contingency plans for contingency plans. This feels productive — you're making spreadsheets, you're planning, you're 'being strategic.' But the plans aren't connected to reality; they're anxiety wearing the mask of strategy. The tell: your plans become increasingly elaborate but you're not implementing any of them.\n\n*Stage three — Sensory Grip:* In extreme, prolonged stress, your least developed function erupts. Sudden impulsive behavior, sensory overindulgence, or acute hypersensitivity to your physical environment. Binge eating, impulsive purchases, picking fights, or obsessive cleaning can all be signs. It feels completely unlike you because it is — it's the part of your cognition you normally suppress taking over when everything else is overwhelmed.\n\n**Recovery**\n\nThe recovery path isn't more thinking. It's physical activity that requires focus (climbing, martial arts, building), one trusted conversation with someone who won't judge your spiraling, and externalization — writing, even just worst-case scenarios on paper — because externalizing breaks the internal loop by forcing your thoughts through a different output channel. What doesn't help: more analysis, more isolation, more planning.",

  growthPath:
    "Mastermind development follows a specific arc that maps to your cognitive function stack. Understanding this arc helps you recognize where you are in it and what comes next.\n\n**Teens and Twenties: Building the Engine**\n\nIn your teens and twenties, you're primarily developing your first two functions — pattern recognition and execution. This is where your competence gets established. You learn to trust your pattern recognition, to build systems, to translate vision into reality. This period often feels isolating, because your cognitive style is genuinely unusual and most of your peers can't keep up with your internal processing speed. You may feel like you're operating in a world that wasn't built for how you think — because, in many ways, it wasn't.\n\nDuring this phase, you're also likely over-indexing on intellectual identity. Being smart becomes who you are rather than something you do. This works for now, but it's setting up a challenge that will arrive later.\n\nThe risk in this phase: building your entire self-concept around intellectual capability, leaving no room for the emotional and physical development that comes later. Masterminds who spend their twenties exclusively developing their first two functions — optimizing grades, career, systems — without investing in relationships, physical health, and emotional literacy are setting up a mid-life reckoning.\n\n**Late Twenties to Mid-Thirties: The Values Awakening**\n\nThe critical transition happens here: your developing value system (the third function in your stack) starts demanding attention. This is when 'what's optimal' starts to be an insufficient question, and 'what matters' begins demanding an answer. You may find yourself dissatisfied with a successful career that doesn't align with something deeper. You may realize that your relationship is functional but not fulfilling. You may become aware, for the first time, that you've been optimizing the wrong variables.\n\nMasterminds who resist this transition become the stereotype — brilliant but cold, effective but empty, successful by external metrics while internally hollow. Masterminds who lean into it become something far more formidable: strategists with a moral compass, leaders who inspire rather than merely direct.\n\nThis-function development shows up as: caring about the 'why' behind your work, not just the 'how.' Choosing relationships based on values alignment rather than just intellectual compatibility. Making decisions that aren't optimal by your models but feel deeply right. Saying 'I don't know how to explain this yet, but it matters to me' — and meaning it.\n\nThis phase is often uncomfortable because your pattern recognition wants to model and explain your values in the same way it models everything else. But values don't work that way — they're felt before they're understood, and the process of articulating them is part of how they develop. Resist the urge to dismiss a value just because you can't yet build a logical argument for it.\n\n**Forties and Beyond: Grounding in the Present**\n\nThe later-life development edge is integrating your sensory awareness — the function you've neglected longest. This isn't about becoming spontaneous or physically oriented overnight. It's about developing trust in present-moment experience — learning that not everything needs to be filtered through your pattern recognition to be valuable.\n\nThis shows up as: increased physical awareness (you notice when you're hungry, tired, or tense before it becomes a crisis). Enjoyment of sensory experience for its own sake — food, nature, physical activity — without needing it to be 'productive.' A capacity to be fully present in a conversation or a moment without your mind projecting into the future. A softening of the need to always understand and predict — an ability to simply be in situations without modeling them.\n\nFor many Masterminds, this phase brings unexpected joy. After decades of living primarily in their heads, the discovery that the physical world has pleasures that don't need to be strategized or optimized can feel like opening a door you didn't know existed.\n\n**The Integrated Mastermind**\n\nThe most evolved version of your type doesn't lose its strategic edge. It adds dimensions to it. The integrated Mastermind can read a room (sensory awareness), honor their values (internal compass), build the plan (organizing function), and see where it's all going (pattern recognition). That's the full stack online — and it's genuinely rare. These are the people who run organizations that are both effective and humane, who build relationships that are both intellectually stimulating and emotionally deep, who make decisions that are both strategically optimal and ethically grounded.\n\nYou don't become this person by trying harder at what you're already good at. You become this person by developing the tools you've been ignoring.",

  toolkit: [
    {
      title: "The Loop Breaker",
      context:
        "When you notice yourself becoming more certain about a conclusion despite having no new evidence — the hallmark sign of an internal loop",
      action:
        "Write down your current conclusion in one sentence. Below it, list the three strongest pieces of evidence against it. If you can't generate three, that's the signal — you're in a loop. Call or text one person whose judgment you respect but who sees differently than you do. Don't present your conclusion; ask them what they see. The goal isn't consensus; it's input from cognitive tools you don't have. If you can't reach anyone, go for a vigorous walk or run — physical activity forces your attention out of the internal loop and into your body.",
    },
    {
      title: "The Maintenance Check",
      context:
        "Every Sunday evening, to prevent Relationship Maintenance Debt from accumulating past the point of easy repair",
      action:
        "Open your contacts. Identify three people who matter to you. For each one, rate on a 1-5 scale: when did you last have a real conversation with them? Send one message to whoever scores lowest. It doesn't have to be deep — 'thinking of you, how's [specific thing you remember them caring about]' is enough. You're not performing warmth; you're externalizing the care that already exists in your internal model. If it feels mechanical, that's fine. The other person doesn't experience your process — they experience the message.",
    },
    {
      title: "The Body Reset",
      context:
        "When you've been in your head for hours and feel increasingly disconnected, agitated, or physically uncomfortable without clear cause — early signs of sensory deprivation",
      action:
        "Stand up. Set a timer for 10 minutes. Do something physical that requires coordination — pushups, juggling, playing an instrument, cooking something that requires knife work. The specificity matters: your sensory awareness needs an activity that demands present-moment attention to your body, not just 'going for a walk' where your pattern recognition can continue running background processes. When the timer goes off, notice how your body feels. The difference between before and after is the size of your blind spot.",
    },
    {
      title: "The Values Audit",
      context:
        "When making a significant decision (career, relationship, major purchase) and your analysis has produced a clear 'optimal' answer but something feels off",
      action:
        "Write down the analytically optimal choice. Then close your laptop, sit somewhere quiet, and ask: 'If nobody ever knew what I chose, and there were no external consequences, which option would I choose?' If the answer differs from your analytical conclusion, don't dismiss it — investigate. The dissonance between your logical answer and your gut answer is your value system sending data your pattern recognition hasn't incorporated. This doesn't mean always follow the gut — it means always listen to it before deciding.",
    },
    {
      title: "The Stress Stage Check",
      context:
        "When you suspect you might be stressed but aren't sure (Masterminds are notoriously poor at identifying their own stress until stage 2 or 3)",
      action:
        "Run through these questions: Am I cancelling plans I'd normally enjoy? Am I eating meals at a desk or skipping them? Have I exercised in the last 48 hours? When did I last have a non-work conversation? Am I building plans I'm not implementing? If two or more answers concern you, you're at least in Stage 1. Don't wait for Stage 2 (anxiety-as-strategy) or Stage 3 (impulsive behavior). Take one physical action now: a 20-minute walk, a phone call to a friend, or simply cooking a proper meal. The intervention gets harder the longer you wait.",
    },
    {
      title: "The Beginner Practice",
      context:
        "When you notice yourself avoiding new domains because you can't enter them as an expert — the Competence Trap in action",
      action:
        "Pick one activity where you're a visible beginner: a dance class, a language lesson, a sport you've never tried, a creative medium you're unfamiliar with. Commit to eight sessions. Your pattern recognition will generate a model of competence within the first two sessions — ignore it. The goal isn't to become good. It's to practice the experience of being bad at something in front of other people and discovering that it doesn't destroy you. This is value-system development through direct experience rather than analysis.",
    },
  ],

  compatibilityNotes: {
    ENTJ:
      "You share the same strategic orientation but they lead with external organizing energy where you lead with internal pattern recognition. The dynamic: they push you to act on your visions faster than you'd choose, which is often exactly what you need. You ground their sometimes-impulsive execution with deeper strategic thinking. Tension arises when both of you want to be the strategist and neither wants to be the implementer — power struggles over whose vision wins.",
    ENTP:
      "Your deep pattern recognition meets their broad idea generation. They expand your thinking laterally — connecting your focused insights to possibilities you'd never consider — while you sharpen their scattered ideas into executable plans. Intellectually, this is one of the most stimulating pairings. Tension: they resist the closure and commitment your organizing function craves. They want to keep exploring; you want to decide and execute.",
    INFJ:
      "The rarest pairing of mutual understanding. They share your deep pattern recognition but lead with social-emotional awareness, meaning they see the human dimensions your organizing function filters out. Conversations feel like finally meeting someone who operates at the same depth. Tension: their conflict avoidance can collide with your directness, and their desire for social harmony may feel like unnecessary compromise to you.",
    ENFP:
      "Their broad idea generation paired with strong values pulls you out of your head and into possibilities and convictions you'd dismiss too quickly. They challenge your blind spots with warmth rather than confrontation, which is one of the few approaches that gets past your defenses. Tension: their need for variety and novelty can exhaust your need for depth and follow-through.",
    INTP:
      "Fellow deep thinker who matches your intellectual depth but approaches from internal logic-building rather than external organizing. Where you build systems to execute, they build systems to understand. They force you to question your own frameworks rather than just optimizing within them. This is the friend who makes you realize your model has an unexamined assumption. Tension: neither of you will initiate emotional conversations, and both of you will pretend this isn't a problem.",
    ISFP:
      "Their strong internal values paired with present-moment awareness grounds you in the two areas your cognitive stack underserves: authentic feeling and physical experience. Being around them is like having a mirror for your underdeveloped functions. Uncomfortable but deeply developmental. Tension: their pace and priorities will feel alien to you, and your strategic orientation may feel cold and controlling to them.",
    ISTJ:
      "You share a preference for structure and follow-through, but your futures-oriented thinking clashes with their past-oriented approach. They trust what has been proven; you trust what your models predict. At their best, they ground your sometimes-untested visions in practical reality. At worst, their insistence on precedent feels like it's holding you back from necessary innovation.",
    ENFJ:
      "Their natural social leadership complements your strategic thinking — they can sell the vision you build, manage the people you struggle with, and create the emotional buy-in your ideas need to succeed in group settings. Tension: their decisions may prioritize group harmony over strategic optimality, which can feel irrational to you. Their emotional expressiveness may overwhelm your processing capacity.",
    ISTP:
      "They share your independence and analytical bent but operate through hands-on problem solving rather than abstract modeling. They're the person who fixes the thing while you're still building the theoretical framework for why it's broken. Refreshingly practical. Tension: they'll lose patience with your long-range planning and you'll be frustrated by their reluctance to think more than two steps ahead.",
    INFP:
      "Deep, values-driven thinker with a rich inner world that parallels yours but runs on completely different fuel. Where you build internal models of systems, they build internal models of meaning. Conversations can be unexpectedly profound. Tension: their decision-making process — driven by values that may resist logical analysis — can be deeply frustrating to your organizing function. You want to optimize; they want to honor something you can't quantify.",
  },

  compatibilitySnapshot: {
    naturalAllies: [
      {
        code: "ENTJ",
        name: "The Executive",
        reason:
          "You share the strategic framework but they bring the external execution energy you sometimes lack. They push you to act on your visions.",
      },
      {
        code: "ENTP",
        name: "The Visionary",
        reason:
          "Your deep pattern recognition meets their broad idea generation. They expand your thinking laterally while you sharpen their ideas into executable plans.",
      },
      {
        code: "INFJ",
        name: "The Champion",
        reason:
          "The rarest pairing of mutual understanding. They share your depth of pattern recognition but lead with social-emotional awareness, seeing the human dimensions your logic filters out.",
      },
    ],
    growthPartners: [
      {
        code: "ENFP",
        name: "The Inspirer",
        reason:
          "Their idea generation paired with strong values pulls you out of your head and into possibilities and convictions you'd dismiss too quickly.",
      },
      {
        code: "ISFP",
        name: "The Trailblazer",
        reason:
          "Their strong values and present-moment awareness ground you in authentic feeling and physical experience — your two underdeveloped areas.",
      },
      {
        code: "INTP",
        name: "The Philosopher",
        reason:
          "Fellow deep thinker who approaches from internal logic rather than external organizing. They force you to question your own frameworks rather than just optimizing within them.",
      },
    ],
    challengingPairs: [
      {
        code: "ESFJ",
        name: "The Anchor",
        reason:
          "Their focus on social harmony and established tradition directly conflicts with your drive for independent strategic innovation.",
      },
      {
        code: "ESFP",
        name: "The Muse",
        reason:
          "Opposite cognitive architecture — their spontaneous, sensory, feeling-first approach clashes with your planned, abstract, logic-first orientation at every level.",
      },
      {
        code: "ESTJ",
        name: "The Governor",
        reason:
          "You both value structure and efficiency, but their insistence on precedent and authority frustrates your need to reinvent systems from scratch.",
      },
    ],
  },

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Withdrawal",
        description:
          "You retreat inward, cutting off external input and running increasingly isolated analysis loops. You may appear functional but are operating on cached data — no new information is getting in.",
      },
      {
        stage: 2,
        label: "The Internal Loop",
        description:
          "Your pattern recognition enters overdrive, generating worst-case scenarios and building contingency plans for contingency plans. This feels productive but is actually anxiety wearing the mask of strategy.",
      },
      {
        stage: 3,
        label: "Sensory Grip",
        description:
          "In extreme stress, your least developed function erupts. Sudden impulsive behavior, sensory overindulgence, or acute hypersensitivity to your physical environment. It feels completely unlike you because it is.",
      },
    ],
    stressRecovery:
      "What actually helps: Physical activity requiring focus (climbing, martial arts, building). One conversation with a trusted person who won't judge your spiraling. Writing — even worst-case scenarios — because externalizing breaks the loop. What doesn't help: More analysis, more isolation, more planning.",
    flowTriggers: [
      "A complex, meaningful problem with real stakes",
      "Full autonomy over approach and timeline",
      "Visibility into the complete system, not just your piece",
      "Minimal external interruptions",
      "Work requiring both vision and implementation",
      "Building something that didn't exist before",
    ],
    flowDescription:
      "Your flow state is characterized by deep focus, rapid model-iteration, and time distortion. You may forget to eat, drink, or speak. This is your pattern-recognition-to-execution pipeline at full capacity — one of the most productive states any personality type can access. The risk: you'll sacrifice everything else to stay in it.",
  },

  careerAlignment: {
    naturalFits: [
      "Strategy",
      "Systems architecture",
      "Research",
      "Investment analysis",
      "Engineering",
      "Long-range planning",
      "Independent consulting",
      "Product strategy",
    ],
    likelyDrains: [
      "Customer service",
      "Event coordination",
      "Repetitive administrative work",
      "High-volume social roles",
      "Environments requiring constant consensus-building",
    ],
    careerWarning:
      "Masterminds are prone to building elaborate internal justifications for staying in situations that no longer serve them. Your pattern recognition creates compelling narratives about why this job is 'the strategic play' even when your day-to-day experience says otherwise. Check your model against reality quarterly.",
  },

  growthPathStructured: {
    intro:
      "Growth for The Mastermind isn't about becoming someone else. It's about developing the cognitive tools you underuse so your strategic mind operates with a fuller data set.",
    areas: [
      {
        title: "Develop Your Internal Compass",
        description:
          "Your third function — your internal value system — is present but underdeveloped. This means you may struggle to articulate what you actually care about beyond 'winning' or 'being right.' Practice: When making decisions, pause to ask 'what matters to me about this?' before asking 'what's the optimal path?' The answer may feel vague at first. That's not a malfunction — it's a developing function coming online.",
      },
      {
        title: "Build Present-Moment Awareness",
        description:
          "Your fourth function represents your least developed connection to immediate, physical reality. Practice: Build small, consistent sensory experiences into your routine — physical exercise, cooking, hands-on building. Anything that anchors you in the present without requiring you to abandon your natural processing style.",
      },
      {
        title: "Break the Internal Loop",
        description:
          "Under stress, you generate increasingly elaborate internal models and rationalize them with selective evidence. When you notice yourself becoming more certain about something despite having no new evidence, treat it as a signal to seek outside input — especially from people who see the data you're filtering out.",
      },
    ],
  },
};
