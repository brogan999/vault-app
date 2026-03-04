import type { MBTITypeContent } from "./types";

export const ENTP: MBTITypeContent = {
  typeCode: "ENTP",
  typeName: "The Visionary",
  tagline: "Builds things nobody asked for that everyone ends up needing",
  color: "#876E00",

  heroImage: "/characters/entp/entp-reveal.svg",
  sectionImages: {
    strengths: "/characters/entp/entp-strengths.svg",
    relationships: "/characters/entp/entp-relationships.svg",
    career: "/characters/entp/entp-career.svg",
    growth: "/characters/entp/entp-growth.svg",
  },

  overview: `You think by talking. Your lead cognitive function scans every conversation, every environment, every idle observation for connections that nobody else has made — and it verbalizes them in real time. While others are processing what was just said, your mind has already connected it to three unrelated domains, identified a contradiction nobody noticed, and proposed an entirely new framework for thinking about the problem. This isn't showing off. It's how your cognitive engine works — it generates ideas through external engagement, not internal contemplation.

Combined with a powerful internal logic engine, you don't just generate ideas — you stress-test them. Every possibility gets run through an analytical framework that asks: 'Is this internally consistent? Does the logic hold? Where are the flaws?' This combination of rapid idea generation and rigorous logical analysis makes you an extraordinary thinker — the person who can see around corners and then explain exactly why what's around the corner matters.

**How your mind is wired:** Your personality runs on four cognitive functions — mental tools you use in a specific order of preference. Your lead tool is **Extraverted Intuition (Ne)**: a scanning engine that constantly generates connections, possibilities, and novel frameworks by pulling together information from wildly different sources. Your second tool is **Introverted Thinking (Ti)**: an internal logic engine that evaluates those possibilities for internal consistency, precision, and truth — it's why your ideas are more than brainstorms, they're structurally sound. Third is **Extraverted Feeling (Fe)**: social awareness that gives you charm, humor, and the ability to read group dynamics — still developing, which is why you're better at entertaining a crowd than navigating an individual's emotional needs. Last is **Introverted Sensing (Si)**: connection to past experience, routine, and physical self-care — your blind spot, and the function that, under stress, locks you into obsessive worry about physical details you normally ignore.

The tension you navigate is between your exceptional ability to see what could be and your structural difficulty with what is. You're the person with the whiteboard full of brilliant diagrams and the desk buried under three months of unopened mail. Your idea engine and logic engine can design a better world in an afternoon. Following through on the paperwork, the routine, the unglamorous execution — that requires functions your stack has placed at the bottom of the priority list.`,

  descriptionInsight:
    "Your trait pattern — strong Extraversion, strong Intuition, moderate Thinking, strong Prospecting — creates a specific cognitive signature: a rapid-fire idea generator whose output is stress-tested by rigorous internal logic. You don't just brainstorm — you brainstorm and then immediately identify which ideas are structurally viable, making you both the most creative and the most analytically precise person in most rooms.",

  strengths: [
    {
      title: "Conceptual Architecture",
      description:
        "You build frameworks the way other people build furniture — taking raw conceptual material and constructing something that holds weight. Your ideas aren't loose impressions; they're structurally sound because your internal logic engine tests them before they leave your mouth. Most of the time.",
      deepDive:
        "Your conceptual architecture skill comes from the interplay between your two strongest functions. Your idea engine generates raw material at extraordinary speed — connections across domains, novel analogies, structural parallels between seemingly unrelated systems. Your logic engine then evaluates each one for internal consistency: does the analogy actually hold? Is the framework self-contradictory? Where does the model break down? This two-step process happens in real time, which is why your ideas tend to be both creative and surprisingly rigorous. Other high-creativity types generate possibilities without testing them. High-logic types test possibilities without generating enough of them. Your stack does both, simultaneously, which makes you genuinely dangerous in intellectual environments. The growth edge: your conceptual architecture can become a trap when you build frameworks that are logically perfect but practically irrelevant — elegant maps of territories nobody needs to navigate. The best Visionaries learn to ask 'who needs this?' before asking 'is this internally consistent?'",
    },
    {
      title: "Debate as Discovery",
      description:
        "You don't argue to win — you argue to find out what's true. Taking the opposite position in any discussion isn't contrarianism; it's your idea engine testing the load-bearing capacity of someone's argument. If their position survives your assault, you'll adopt it. If it doesn't, you've done them a favor.",
      deepDive:
        "Your debating style is fundamentally misunderstood by most types. They experience it as confrontational or dismissive. For you, it's collaborative thinking in real time. When you challenge someone's position, you're not attacking them — you're stress-testing their framework the same way your logic engine stress-tests your own ideas. You argue the opposite side not because you believe it but because you need to see if the original position holds under pressure. If it does, you've strengthened it. If it doesn't, you've identified a flaw that needed finding. This is genuinely valuable intellectual work, and the people who understand it become your most important thinking partners. The development opportunity: learning to signal your intent before launching into debate. The sentence 'I want to push back on this — not because I disagree, but because I want to test it' transforms the experience from attack to collaboration. Without that signal, you're asking people to trust that your aggressive questioning is benign, and most people's defensive systems won't allow it.",
    },
    {
      title: "System Hacking",
      description:
        "You see the rules of any system — social, technical, organizational — and immediately identify the gaps, loopholes, and leverage points that everyone else takes for granted. This makes you exceptional at finding innovative solutions and occasionally annoying to people who designed the system you've just deconstructed.",
      deepDive:
        "Your system-hacking ability comes from your idea engine's natural tendency to examine structures rather than accept them. Where other types see 'how things work,' you see 'how things are constructed' — and constructions have seams, assumptions, and vulnerabilities. Your logic engine then evaluates which of these vulnerabilities represent genuine opportunities for improvement versus mere quirks. In practice, this makes you the person who redesigns the workflow that everyone else accepted as permanent, who finds the tax strategy that the accountant missed, who proposes the organizational structure that eliminates three layers of bureaucracy. It also makes you the person who argues with the waiter about menu limitations and challenges institutional rules that exist for reasons you haven't bothered to learn. The mature version of this strength includes a wisdom filter: some systems have good reasons for being the way they are, and your eagerness to deconstruct them should include genuine curiosity about why they were built that way before you propose demolition.",
    },
    {
      title: "Intellectual Courage",
      description:
        "You'll say the thing nobody else will say — not for shock value, but because your logic engine has identified a truth that social convention has rendered unspeakable. The emperor has no clothes, and you're the person who points it out while everyone else is admiring the invisible fabric.",
      deepDive:
        "Your intellectual courage comes from the priority ordering of your cognitive stack. Your logic engine, which evaluates truth and internal consistency, sits above your social awareness, which manages group harmony and interpersonal dynamics. For most types, social considerations filter what they're willing to say. For you, logical truth overrides social comfort. If something is true, it should be said — full stop. This produces genuinely valuable contributions in environments where groupthink, political correctness, or institutional inertia have suppressed important truths. You're the person who asks the question everyone was thinking but nobody would voice. The growth edge: intellectual courage without social wisdom is just tactlessness. Learning when truth-telling serves the group and when it merely satisfies your own intellectual ego is a critical distinction. The question 'does this need to be said, by me, right now?' is a useful filter that doesn't compromise your commitment to truth but adds social intelligence to its delivery.",
    },
    {
      title: "Adaptive Intelligence",
      description:
        "You learn new domains faster than almost any other type because your idea engine immediately connects new information to existing frameworks across multiple fields. You're rarely the deepest expert, but you're consistently the fastest learner — and in environments where conditions change rapidly, speed of learning beats depth of knowledge.",
      deepDive:
        "Your adaptive intelligence isn't just raw processing speed — it's the structural advantage of your idea engine's cross-domain connectivity. When you encounter a new field, your idea engine doesn't start from zero. It immediately begins mapping the new domain onto existing frameworks you've built from previous learning. Patterns in economics illuminate patterns in ecology. Structures in music theory parallel structures in software architecture. This cross-referencing gives you a head start that domain specialists don't have, because you're importing conceptual tools from everywhere rather than building from scratch within one discipline. The practical implication: you thrive in environments that reward breadth and rapid adaptation — consulting, entrepreneurship, crisis management, interdisciplinary research. You struggle in environments that reward deep, narrow expertise accumulated over decades, because your idea engine's cross-domain scanning habit makes sustained focus on a single field genuinely difficult.",
    },
  ],

  growthEdges: [
    {
      title: "The Follow-Through Gap",
      teaser:
        "You have seventeen brilliant ideas and zero completed projects. The whiteboard is covered in frameworks that will never become products, strategies that will never become actions, and business plans that will never become businesses. Your idea engine and your logic engine can design anything. Your execution infrastructure can't build it.",
      fullExplanation:
        "The Follow-Through Gap is your core developmental challenge, and it's structural rather than motivational. Your idea engine generates new possibilities at a rate that makes sustained execution on any single one genuinely difficult. Each new idea triggers the same cognitive reward — the excitement of novel connection, the satisfaction of logical elegance — that the current project triggered three weeks ago. Your logic engine doesn't help, because it can evaluate the new idea as genuinely superior to the current one (often accurately), providing intellectual justification for the switch.\n\nThe result is a career and a life characterized by brilliant beginnings and abandoned middles. You have the first draft of three novels, the prototype of two apps, the business plan for four companies, and the competence to finish any of them — but none of them are finished because finishing requires the two functions at the bottom of your stack: sustained routine (your blind spot) and social accountability (your developing function).\n\nThis pattern differs from simple procrastination. You're not avoiding work — you're doing an enormous amount of intellectual work. The ideas are real, the frameworks are sound, the logic is rigorous. What's missing is the unglamorous bridge between brilliant design and completed execution: the daily grind, the mundane iteration, the willingness to work on something that's no longer intellectually novel.\n\nThe intervention isn't discipline in the traditional sense — it's structural compensation for what your stack doesn't naturally provide. External accountability (a co-founder, a deadline, a public commitment), environmental design (removing the stimulation that feeds your idea engine when you need to execute), and selective commitment (choosing fewer projects but committing to finishing them) all work because they provide scaffolding your cognitive architecture needs but can't generate internally.\n\nThe deeper insight: you don't need to finish everything. Your idea engine's purpose is to generate — and many of its outputs are valuable as explorations rather than products. The skill is learning to distinguish between ideas that deserve full execution (they solve a real problem, they align with your long-term direction, they require your specific combination of skills) and ideas that served their purpose as intellectual exercises. Not everything your idea engine produces needs to become a thing.",
      premiumHook:
        "Understand why your brilliant ideas keep dying in the execution phase — and get specific structural strategies designed for how your type actually works.",
      relatedDimension: "JP",
    },
    {
      title: "The Debate Trap",
      teaser:
        "Your idea engine and logic engine make you devastating in arguments. You can dismantle almost anyone's position in real time. The problem: relationships aren't arguments, and the skills that make you intellectually formidable can make you emotionally exhausting. The people you care about may have stopped sharing their real thoughts because every conversation risks becoming a debate.",
      fullExplanation:
        "The Debate Trap occurs when your intellectual engagement mode — which you experience as collaborative truth-seeking — becomes your default interaction pattern in all contexts. Your idea engine and logic engine work together so seamlessly in debate that it becomes your comfort zone for all forms of engagement. You debate at dinner. You debate on dates. You debate with your partner about where they want to eat and then wonder why they seem exhausted.\n\nThe mechanism: your idea engine scans everything for logical inconsistencies and interesting contradictions. When it finds one — in a friend's career decision, in a partner's interpretation of an event, in a family member's political opinion — it flags it. Your logic engine evaluates the flaw and generates a counter-argument. Your mouth delivers it, often with a smile and genuine enthusiasm, because for you this is fun. This is how your mind plays.\n\nFor the other person, the experience is different. They shared something personal — a belief, a decision, an interpretation — and received an intellectual challenge in return. Even when your tone is warm and your intent is genuine, the message received is: 'Your thinking has been evaluated and found wanting.' Repeated enough times, people learn to share only surface-level thoughts with you. The intimate, vulnerable, logically imperfect sharing that deep relationships require goes elsewhere.\n\nThe Debate Trap is particularly destructive in romantic relationships where your partner needs emotional validation. 'I had a terrible day at work' is not an invitation for you to analyze whether their employer's management structure is the root cause. It's a bid for emotional connection — a request to be heard and comforted, not corrected.\n\nThe fix isn't stopping debate — it's building a switch. Debate mode is appropriate in intellectual contexts with willing participants. Listening mode — where your idea engine and logic engine take a back seat to your developing social awareness — is appropriate in emotional contexts. The sentence 'Do you want me to help think through this, or do you just need me to listen?' gives your partner the power to select the mode, and gives your developing social function practice at the one it's weakest in.",
      premiumHook:
        "Learn why your intellectual engagement style is driving people away from genuine sharing — and build the mode-switching skill that saves your closest relationships.",
      relatedDimension: "TF",
    },
    {
      title: "The Depth Avoidance",
      teaser:
        "You know a lot about many things and relatively little about yourself. Your idea engine is externally focused — constantly scanning the world for patterns — which means your internal emotional landscape gets significantly less processing time than your intellectual one. You can explain quantum mechanics and can't explain why you're sad.",
      fullExplanation:
        "Depth Avoidance is the consequence of a cognitive architecture optimized for external pattern recognition. Your idea engine is designed to scan the external world — ideas, systems, people, possibilities. Your logic engine evaluates what it finds for consistency and truth. Together, they produce extraordinary intellectual output. But neither function naturally turns inward to examine your own emotional state, your own values, your own needs.\n\nThis creates a specific pattern: intellectual omnicompetence paired with emotional underdevelopment. You can analyze someone else's relationship dynamics with devastating accuracy but can't articulate what you need from your own partner. You can build a logical framework for ethics but can't tell someone why a particular betrayal hurt so much. Your idea engine can explain grief neurologically but can't sit with it emotionally.\n\nThe avoidance isn't conscious. Your cognitive stack simply allocates more processing power to external pattern recognition than to internal emotional processing. When an emotion arises, your idea engine's first response is to analyze it ('interesting — this is probably related to attachment theory') rather than feel it. Your logic engine's first response is to evaluate it ('this emotional reaction isn't proportionate to the situation'). By the time either function is done, the raw emotional experience has been converted into an intellectual object — interesting to think about, but no longer felt.\n\nThis pattern costs you in three ways. First, your relationships lack the emotional depth that partners eventually need. They can have brilliant conversations with you but can't reach your heart. Second, your self-knowledge is incomplete — you understand your intellectual architecture but not your emotional one, which means you're blind to the motivations driving some of your most important decisions. Third, unprocessed emotions don't disappear — they accumulate and eventually erupt through your blind-spot function as physical symptoms, obsessive worry about health or logistics, or sudden uncharacteristic emotional breakdowns.\n\nDeveloping emotional depth doesn't mean becoming emotional. It means building a practice of turning your attention inward and asking: 'What am I actually feeling right now?' — then resisting the urge to analyze the answer. The feeling itself is the data. Not the analysis of the feeling. Not the framework for understanding the feeling. The feeling.",
      premiumHook:
        "Discover why your intellectual brilliance hasn't translated into emotional self-knowledge — and learn to access the internal data your decisions actually need.",
      relatedDimension: "EI",
    },
  ],

  relationshipStyle: "Stimulating, Independent, Intellectually Demanding",
  relationshipPreview:
    "You bring intellectual electricity, humor, and genuine novelty to relationships. Conversations with you are never boring — your idea engine ensures there's always a new angle, a provocative question, a surprising connection. The tension is between the intellectual intimacy you offer abundantly and the emotional intimacy you're still learning to provide. You can be the most fascinating person someone has ever dated and simultaneously the hardest to feel close to.",

  relationshipDeepDive:
    "Your relationship pattern has a specific architecture that's worth making visible because it creates confusion for both you and your partners.\n\n**The Attraction Phase**\n\nYou attract through intellectual magnetism. Your idea engine locks onto someone who can keep up — who matches your speed, challenges your frameworks, and introduces ideas you haven't encountered. Intellectual chemistry is your gateway drug. Physical attraction matters but it's rarely the primary hook. You fall for minds first and bodies second.\n\nThe early phase is exhilarating. Conversations that run until 3am. Ideas that build on each other until you've redesigned the world together. The feeling that you've finally found someone who speaks your language. This intensity is genuine — your idea engine is doing what it does best with a new and fascinating input source.\n\n**The Plateau Challenge**\n\nThe challenge arrives when the intellectual novelty diminishes — not because the person is less interesting, but because your idea engine has mapped their framework and is no longer surprised by it. This is the point where many Visionary relationships stall or end, not because the connection isn't real but because the specific type of stimulation your idea engine craves has shifted from this partner to other sources.\n\nVisionaries who understand this pattern build intellectual novelty into their relationships rather than seeking it outside them: shared learning projects, travel to unfamiliar places, introducing each other to new domains. The relationship needs to keep generating new material for your idea engine, or your attention will wander — not maliciously, but structurally.\n\n**Conflict Dynamics**\n\nConflict is where your stack creates the most damage. Your idea engine and logic engine convert emotional disagreements into intellectual debates automatically. Your partner says 'I felt hurt when you cancelled our plans.' Your logic engine evaluates: 'But the reason I cancelled was logically sound.' Your idea engine generates: 'This is actually about a deeper issue — let me explain what's really going on.' Neither response addresses the actual emotion, and both responses make your partner feel analyzed rather than heard.\n\nLearning to separate intellectual engagement from emotional engagement in conflict is your highest-leverage relationship skill. Not every disagreement needs to be won. Some need to be felt.\n\n**Intimacy and Physical Connection**\n\nPhysically, you bring curiosity and experimentation. Routine bores you in every domain, including this one. You're most engaged when there's novelty, playfulness, or the feeling of discovering something new together. The connection between intellectual stimulation and physical desire is strong for your type — you're most physically drawn to someone after a conversation that challenged you.\n\n**Friendship Architecture**\n\nYour friendships are built around ideas. Your closest friends are thinking partners — people who can volley ideas with you, challenge your logic, and introduce you to frameworks you haven't encountered. You maintain friendships through intellectual engagement rather than emotional maintenance, which means you can go months without contact and reconnect instantly around an interesting topic. Friends who need regular emotional check-ins may drift away without you noticing.\n\n**What Makes It Last**\n\nYour best relationships are with people who are intellectually stimulating enough to keep your idea engine engaged, emotionally grounded enough to not be destabilized by your debate style, and patient enough to help you develop the emotional fluency your stack doesn't naturally provide. You need a partner who sees your intellectual intensity as a feature, not a bug — and who can teach you that sometimes the most interesting thing in the room is a feeling, not an idea.",

  careerHeadline: "Innovative, Strategic & Intellectually Restless",
  careerDirections: [
    "Entrepreneurship / Startup Founder",
    "Strategy Consulting",
    "Product Architecture",
    "Venture Capital / Innovation",
  ],
  careerDeepDive:
    "Your ideal work lives at the intersection of intellectual challenge and novel problem-solving. You need work where the problems change, where the rules are being written rather than followed, and where your cross-domain pattern recognition gives you a genuine competitive advantage. Give you those conditions and you'll produce work that people describe as visionary. Remove them and you'll produce elaborate justifications for why you're not doing anything.\n\n**Where You Thrive**\n\nThe career environments that bring out your best combine three features: intellectual novelty (problems you haven't solved before), systemic complexity (situations where cross-domain thinking provides a genuine edge), and enough autonomy that your idea engine can follow its threads without someone asking 'is this in the brief?' Consulting, entrepreneurship, venture capital, product strategy, academic research, and journalism all offer these conditions.\n\n**The Career Trap**\n\nYour career trap is the Follow-Through Gap applied to professional life. You start strong in any role — your idea engine generates innovations that impress everyone. But as the role shifts from 'figure out the right answer' to 'implement the answer and maintain it,' your engagement plummets. You may job-hop not because you're flighty but because you've genuinely extracted the intellectual value from each role and need new material.\n\nThe more insidious trap: using your idea engine's ability to generate compelling narratives to rationalize career decisions that are actually stimulation-seeking. 'This new opportunity aligns better with my long-term vision' may actually be 'the current role stopped being intellectually novel three months ago.'\n\n**Leadership Style**\n\nYou lead through intellectual authority rather than positional power. People follow you because your ideas are compelling, your frameworks are rigorous, and your vision is genuinely innovative. Your leadership blind spot: you may assume that a great idea sells itself and underinvest in the human work of building consensus, managing emotions, and maintaining team morale. The best Visionary leaders pair themselves with operational partners who translate their intellectual vision into implementable plans.\n\n**Flow and Satisfaction**\n\nYour flow state is a debate or design session where ideas build on each other at increasing speed and complexity. Time disappears. Your idea engine and logic engine are working in perfect sync — generating and evaluating possibilities so fast that the output feels channeled rather than constructed. This is the state where your best work happens, and it's worth structuring your career to access it regularly.\n\nWatch for these warning signs: the work has become repetitive. You can predict the outcome of every meeting before it starts. You're spending more energy arguing against bad ideas than generating good ones. Your idea engine has shifted its attention to side projects, hobbies, or intellectual rabbit holes because the main work no longer feeds it.",

  cognitivePortraitDescriptions: [
    "You draw energy from engagement — conversations, debates, brainstorming sessions, new environments. Extended isolation doesn't recharge you; it deprives your idea engine of the external input it needs to generate. You think by talking, and your best ideas emerge in dialogue rather than contemplation.",
    "You instinctively scan for patterns, implications, and connections rather than concrete details. Where others see one event, you see a structural parallel to three other domains. This makes you a natural innovator — and occasionally maddening to people who just want to discuss what's actually in front of them.",
    "You evaluate ideas through a framework of logical consistency and internal coherence. 'Does this make sense?' and 'Where does this logic break down?' are your natural first questions. You respect truth over comfort and precision over consensus.",
    "You prefer to keep options open and resist premature closure. Committing to a single path feels like intellectual amputation — cutting off possibilities that might contain the better answer. You work in bursts of intense focus followed by exploratory tangents, and your best work emerges from the interplay between them.",
  ],

  cognitiveStackDescriptions: [
    "Your lead function — Extraverted Intuition — is a pattern-matching engine that scans everything in your environment for connections, implications, and novel possibilities. It runs constantly and verbally — you think out loud, generating ideas through external engagement rather than internal reflection. It's the source of your creativity, your quick wit, and your inability to stay on a single topic for more than three minutes.",
    "Your secondary function — Introverted Thinking — is an internal logic engine that evaluates your idea engine's output for consistency, precision, and structural soundness. It's why your ideas are more than brainstorms — they're architecturally sound frameworks that survive scrutiny. It's also why you love debate: it's your logic engine doing quality control in real time.",
    "Your developing function — Extraverted Feeling — handles social dynamics, emotional rapport, and group harmony. It gives you charm, humor, and social awareness. Because it's third in your stack, it can be more performative than genuine — skilled at entertaining but still learning to be emotionally present. Developing this function is what deepens your relationships beyond intellectual connection.",
    "Your least developed function — Introverted Sensing — handles routine, physical self-care, and connection to past experience. It's your genuine blind spot — you forget to eat, lose track of appointments, and struggle with any task that requires sustained routine. Under stress, it erupts as obsessive focus on physical symptoms or past failures that you normally wouldn't give a second thought.",
  ],

  cognitiveStackExplanation:
    "Your cognitive stack creates an architecture optimized for intellectual innovation and real-time conceptual problem-solving. Understanding this architecture explains both your intellectual brilliance and the specific ways your life sometimes falls apart.\n\n**Your Lead Function: Extraverted Intuition (Ne) — The Idea Engine**\n\nThis function never stops scanning. Every conversation, article, observation, and random thought is raw material for your pattern-matching engine, which connects things across domains with a speed and creativity that other types can't replicate. You see structural parallels between economics and ecology, between music theory and organizational design, between a friend's relationship problem and a geopolitical conflict. These connections aren't random — they reveal genuine structural similarities that others miss.\n\nYour idea engine processes through external engagement. Unlike introverted-intuition types who converge on a single insight through internal synthesis, you diverge — generating multiple possibilities in rapid succession, testing them through conversation, building on other people's reactions. This is why you think out loud, why brainstorming sessions energize you, and why you can seem scattered to types who process sequentially.\n\nHealthy Ne is generative and genuinely innovative — producing insights that create real value by connecting previously siloed domains. Unhealthy Ne is a dopamine machine — generating ideas for the pleasure of generation rather than for any practical purpose, using intellectual novelty as a drug to avoid emotional or logistical reality.\n\n**Your Secondary Function: Introverted Thinking (Ti) — The Logic Engine**\n\nWhere your idea engine generates possibilities, your logic engine evaluates them. It builds internal frameworks of logical consistency and tests every input against them. 'Is this internally coherent?' 'Where does the reasoning break down?' 'What are the hidden assumptions?' These questions run automatically on everything your idea engine produces, which is why your ideas tend to be both creative and structurally sound.\n\nYour logic engine is also the source of your debating prowess. When someone presents an argument, your logic engine immediately identifies the weak points — unstated assumptions, logical gaps, internal contradictions — and your idea engine generates counter-arguments that expose them. This process is so fast and so enjoyable that it can become your default mode of engagement with the world.\n\nThe shadow of strong Ti is intellectual arrogance: the belief that if something can't be logically justified, it isn't valid. Emotional truths, values-based convictions, and experiential wisdom that resist logical formalization may be dismissed as 'irrational' — not because they lack validity, but because they don't fit your logic engine's evaluation framework.\n\n**Your Third Function: Extraverted Feeling (Fe) — The Developing Connector**\n\nThis function handles social dynamics, group harmony, and emotional rapport. In its developing position, it gives you genuine charm and social skill — you can read a room, adjust your tone, and make people laugh with natural ease. What it doesn't yet provide is deep emotional attunement to individuals. You can manage the social temperature of a group while being genuinely oblivious to the fact that your partner is struggling.\n\nDeveloping this function is the key to transforming your relationships from intellectually stimulating to emotionally deep. It means learning to read individuals (not just groups), to respond to emotions (not just ideas), and to prioritize connection (not just truth). This development typically accelerates in your thirties when the limitations of purely intellectual relationships become apparent.\n\n**Your Fourth Function: Introverted Sensing (Si) — The Blind Spot**\n\nThis function handles routine, physical self-care, and detailed memory of past experience. It's the function you trust least and develop last. You forget appointments, lose things, ignore your body's signals, and struggle with any task that requires sustained, repetitive attention. Your desk looks like a crime scene. Your diet is whatever requires the least thought.\n\nUnder extreme stress, this function erupts: sudden obsessive attention to physical symptoms (\"Is this headache a tumor?\"), past mistakes (\"Remember that thing you said in 2017?\"), or logistical details (\"Did I lock the front door? I should go check\"). These obsessions feel alien because they are — they're the output of a function that normally gets almost no processing time.\n\nDeveloping this function doesn't mean becoming organized. It means building a minimal infrastructure of physical and logistical reliability: eating regularly, sleeping enough, showing up on time, maintaining the basic systems that allow your idea engine to operate without crashing. Think of it as the maintenance that keeps the engine running — not glamorous, but essential.\n\n**How the Stack Works Together**\n\nAt peak integration, you're a force: generating innovative ideas (Ne), validating them logically (Ti), communicating them with social intelligence (Fe), and maintaining the physical infrastructure to sustain the output (Si). This is the Visionary at full capacity — intellectually brilliant, socially effective, and reliably productive. The most common dysfunction is the top two functions running without input from the bottom two: brilliant ideas that are never implemented and social situations that are intellectually dazzling but emotionally shallow.",

  emotionalLandscape:
    "Your emotional processing routes primarily through your idea engine and logic engine, which means emotions are treated as interesting phenomena to be analyzed rather than experiences to be felt. This produces extraordinary insight about emotions in general and surprisingly poor awareness of your own emotions in particular.\n\n**Intellectualized Emotion**\n\nYour default emotional processing: something happens that triggers a feeling. Your idea engine immediately contextualizes it ('this is probably related to attachment patterns from childhood'). Your logic engine evaluates it ('this emotional response isn't proportionate to the actual event'). By the time both functions have processed it, the raw emotional experience has been converted into an intellectual object — fascinating to discuss, but no longer alive as a feeling.\n\nThis isn't suppression. You genuinely believe you've processed the emotion because you've analyzed it thoroughly. But analysis and processing are different operations. Analysis examines an emotion from outside. Processing moves through it from inside. You're excellent at the former and underdeveloped at the latter.\n\n**Humor as Emotional Currency**\n\nHumor is your primary emotional expression tool, and it's genuinely brilliant — your idea engine generates witty connections at a speed that makes you one of the funniest types. But humor is also your most effective emotional deflection tool. When a conversation gets too close to genuine vulnerability, you'll crack a joke. When someone tries to connect with you emotionally, you'll make it funny. The jokes are real — you're actually that quick. What they're also doing is maintaining intellectual distance from emotional depth.\n\n**Anger and Frustration**\n\nAnger is the emotion you handle most cleanly because it routes through your logic engine: identify the problem, argue the case, propose the solution. You're devastating when angry — precise, logical, and relentless. The risk: anger can become your default emotional channel because it's the only one that works with your cognitive architecture. Sadness, vulnerability, and confusion don't have clear logical structures, so they may get converted into anger because anger has one.\n\n**The Stress Cascade**\n\nUnder stress, your idea engine accelerates first — more ideas, more connections, more theoretical frameworks, faster. You look intellectually productive but you're spinning. If the stress persists, your logic engine becomes hypercritical — finding flaws in everything, including yourself. In the grip, your blind-spot function erupts: obsessive physical worry, fixation on past mistakes, compulsive attention to logistical details you normally ignore entirely.\n\n**Recovery**\n\nRecovery requires what your stack resists: slowing down, reducing intellectual input, and allowing emotions to surface without analyzing them. One honest conversation with someone who won't let you deflect into humor or analysis. Physical movement that's engaging enough to quiet your idea engine. And the radical act of sitting with a feeling for five minutes without trying to explain it.",

  growthPath:
    "Visionary development follows an arc from intellectual brilliance to integrated effectiveness — not becoming less innovative, but building the infrastructure that turns innovation into impact.\n\n**Teens and Twenties: The Intellectual Explosion**\n\nYour idea engine and logic engine hit their stride. You discover the intoxicating pleasure of intellectual exploration — reading widely, debating passionately, building frameworks that explain everything. This is the period where your intellectual identity solidifies, and it's exhilarating. You're genuinely smarter than most people you encounter, and the domains where that matters reward you richly.\n\nThe risk: over-identifying with intellectual capability and under-investing in everything else. Relationships become entertainment (find someone interesting, extract the intellectual value, move on). Health becomes an afterthought. Follow-through becomes optional because there's always a more interesting problem to solve.\n\n**Late Twenties to Early Thirties: The Social Awakening**\n\nYour developing social-emotional function starts demanding attention. You discover that intellectual connection, while necessary, isn't sufficient for the relationships you actually want. You may experience a relationship crisis that your logic engine can't solve — because the problem isn't logical, it's emotional. Your partner isn't asking you to be right. They're asking you to be present.\n\nThis development is uncomfortable because it requires your third-position function to operate in territory your top two functions have been handling (badly). Learning to respond to emotions without analyzing them, to be present without being interesting, to listen without debating — these are all third-function development tasks that feel like learning a new language.\n\n**Thirties and Beyond: The Grounding**\n\nThe later development edge is integrating your blind-spot function — building a relationship with routine, physical reality, and the accumulated lessons of your past. This means developing the mundane infrastructure your idea engine dismisses: consistent health habits, reliable scheduling, financial organization, and the capacity to maintain what you've built rather than always building new.\n\nFor many Visionaries, this phase brings a surprising discovery: the creative output they value most comes from periods of stability, not chaos. When the basic systems are running — sleep, food, exercise, schedule — your idea engine operates at a higher level than when it's competing with logistical anxiety for processing power.\n\n**The Integrated Visionary**\n\nThe fully developed version of your type is genuinely formidable: generating innovative ideas (Ne), testing them rigorously (Ti), communicating them with social effectiveness (Fe), and building them on a stable operational foundation (Si). This is the person who doesn't just have ideas — they have ideas that become things. And the things work. And they last.",

  toolkit: [
    {
      title: "The One-Thing Rule",
      context:
        "When you have multiple projects competing for your attention and your idea engine keeps generating reasons why the new one is more important — the Follow-Through Gap in action",
      action:
        "Choose one project that meets all three criteria: it's intellectually challenging, it matters to you, and it has real-world impact if completed. Write it on a card and place it where you'll see it daily. For the next 90 days, when your idea engine generates a new project that 'needs' your attention, write it in a notebook and return to the one thing. You're not killing ideas — you're parking them. The notebook is the parking lot. The card is the destination.",
    },
    {
      title: "The Mode Switch",
      context:
        "When someone shares something emotional and your logic engine immediately starts constructing a reframe or counter-argument — the Debate Trap in action",
      action:
        "Before responding, ask: 'Do you want me to help think through this, or do you need me to just listen?' Then honor the answer, especially when it's 'just listen.' Your idea engine will want to generate insights. Your logic engine will want to evaluate their reasoning. Let both run silently while you say: 'That makes sense. Tell me more.' The discomfort you feel is your developing social-emotional function doing new work. That's growth.",
    },
    {
      title: "The Body Audit",
      context:
        "Daily, ideally in the evening — to build awareness of your physical state, which your externally-focused scanning engine systematically ignores",
      action:
        "Set an alarm for the same time each day. When it goes off, answer four questions: Have I eaten a real meal? Have I moved my body? How many hours did I sleep? Is there physical tension anywhere? These questions feel trivial because they are — but they track the infrastructure your idea engine depends on. A Visionary running on caffeine and four hours of sleep isn't creative — they're manic. Treat your body as the hardware your cognitive stack runs on.",
    },
    {
      title: "The Depth Practice",
      context:
        "When you realize you can explain attachment theory but can't tell someone why your last relationship ended — the Depth Avoidance pattern",
      action:
        "Once a week, sit with a blank page and write continuously for 10 minutes, answering one question: 'What am I actually feeling right now?' Your idea engine will try to analyze. Your logic engine will try to categorize. Keep writing past both of them. Somewhere around minute 6 or 7, something honest usually surfaces that neither function would have allowed into the conversation. This practice builds the emotional self-awareness that your externally-focused stack doesn't naturally develop.",
    },
    {
      title: "The Implementation Partner",
      context:
        "When starting a project that requires sustained execution beyond the exciting design phase",
      action:
        "Before you begin, identify one person who will serve as your implementation anchor. This should be someone who values follow-through and isn't persuaded by your idea engine's rationalizations for switching. Share your project plan and agree to weekly check-ins where you report progress on the specific plan — not an evolved version of the plan, not a new plan, the original plan. Your idea engine will try to recruit them into the excitement of a pivot. A good implementation partner resists this.",
    },
    {
      title: "The Debate Budget",
      context:
        "When you notice your relationships are becoming more combative than connecting — the Debate Trap expanding beyond individual conversations",
      action:
        "For one week, limit yourself to one debate per day. Before each debate, ask: 'Is this debate about discovering truth, or about intellectual sport?' If it's sport, enjoy it with a willing partner. If it's 'truth-seeking' about something personal to the other person, redirect your energy. Tell yourself: 'Their experience is data my logic engine can't fully evaluate.' Over time, this builds the distinction between intellectual engagement (where your debate skills shine) and emotional engagement (where they interfere).",
    },
  ],

  compatibilityNotes: {
    INTJ:
      "Your idea engine feeds their deep pattern recognition with raw material they'd never generate alone. Their execution capability gives your ideas a bridge to reality. Intellectually, this is one of the most stimulating pairings available. Tension: they want convergence and closure; you want to keep exploring. They commit to one framework; you want to test five.",
    ENTJ:
      "Their organizing drive provides the execution structure your ideas need to become real. They turn your innovations into operating plans. Strong mutual respect for intellectual capability. Tension: they want to decide and move; you want to keep the question open. Power dynamics can emerge around whose vision gets executed.",
    INTP:
      "Two logic engines in perfect sync — conversations that feel like thinking at double speed. They share your love of logical precision and theoretical exploration. Tension: neither of you naturally initiates emotional conversations or handles logistics, so the relationship can become an intellectual bubble disconnected from practical reality.",
    ENFP:
      "Shared idea engine creates electric conversation — you generate at the same speed but process differently (your logic engine vs their values filter). They bring warmth and authentic enthusiasm that grounds your intellectual intensity. Tension: their decisions are values-driven where yours are logic-driven, which can create mutual incomprehension when you disagree.",
    INFJ:
      "Their deep pattern recognition provides a focusing lens for your broad idea generation. They see where the ideas converge; you see all the places they could diverge. Deep, meaningful conversations come naturally. Tension: they seek closure and meaning; you seek open exploration. Their emotional intensity can feel overwhelming; your intellectual detachment can feel cold.",
    ENFJ:
      "Their social leadership and emotional warmth complement your intellectual brilliance. They can sell your ideas to people in a way you can't. They bring the human dimension your stack underweights. Tension: they may try to manage your behavior for social harmony, which triggers your independence reflex. Their emotional expressiveness can feel like noise to your logic engine.",
    ISFJ:
      "Maximum cognitive contrast — their experiential grounding and emotional care are your exact blind spots. They provide the stability and practical reliability your life probably needs. Tension: your debate style can feel like attack; their indirect communication can feel like evasion. The learning potential is enormous if both tolerate the discomfort.",
    ESTJ:
      "Their execution-first organizing meets your ideas-first generating. They build what you design. When aligned on direction, a powerful combination. Tension: they follow established rules; you challenge established rules. They value precedent; you value novelty. Fundamental operational disagreement.",
    ISTP:
      "Shared logic engine creates mutual respect for competence and precision. They're the hands-on builder to your theoretical architect. Both value truth over social comfort. Tension: your verbal idea generation can exhaust their quiet processing style, and their practical focus can feel limiting to your theoretical range.",
    INFP:
      "Their deep values provide an anchor your logic engine sometimes needs — they ask 'should we?' when you're focused on 'could we?' Their internal richness is genuinely fascinating to your idea engine. Tension: their values-based decisions frustrate your logic engine; your logical challenges feel like attacks on their core identity.",
  },

  compatibilitySnapshot: {
    naturalAllies: [
      {
        code: "INTJ",
        name: "The Mastermind",
        reason:
          "Your broad idea generation meets their deep strategic focus. They give your ideas direction; you expand their thinking laterally. Intellectually electric.",
      },
      {
        code: "ENTJ",
        name: "The Executive",
        reason:
          "Their organizing drive turns your innovations into executable plans. Mutual respect for intellectual capability creates a powerful partnership.",
      },
      {
        code: "ENFP",
        name: "The Inspirer",
        reason:
          "Shared idea-generation speed with complementary processing — their values filter plus your logic engine produces ideas that are both sound and meaningful.",
      },
    ],
    growthPartners: [
      {
        code: "INFJ",
        name: "The Champion",
        reason:
          "Their deep convergent pattern recognition focuses your broad divergent scanning. They see meaning where you see patterns. Mutually enriching.",
      },
      {
        code: "ISFJ",
        name: "The Guardian",
        reason:
          "Their experiential grounding and emotional care address your exact blind spots. They provide the stability your innovative mind needs but won't build for itself.",
      },
      {
        code: "ENFJ",
        name: "The Hero",
        reason:
          "Their emotional leadership brings the human dimension your intellectual approach underweights. They make your ideas land with people, not just in theory.",
      },
    ],
    challengingPairs: [
      {
        code: "ESTJ",
        name: "The Governor",
        reason:
          "Their precedent-and-procedure orientation directly conflicts with your rule-questioning innovation. They want order; you want disruption.",
      },
      {
        code: "ISFP",
        name: "The Trailblazer",
        reason:
          "Their quiet, values-driven, present-moment orientation clashes with your loud, logic-driven, possibility-focused one at every level.",
      },
      {
        code: "ISTJ",
        name: "The Director",
        reason:
          "Their reliance on proven methods and past experience frustrates your drive to reinvent from first principles. They trust tradition; you trust logic.",
      },
    ],
  },

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Idea Overdrive",
        description:
          "Your idea engine accelerates — more connections, more frameworks, more tangential explorations. You look intellectually productive but you're generating without implementing. The ideas become increasingly abstract and disconnected from practical reality.",
      },
      {
        stage: 2,
        label: "Hypercritical Mode",
        description:
          "Your logic engine turns inward. Everything has flaws — your work, your relationships, other people's arguments. You become cutting, dismissive, and intellectually aggressive. The wit that normally charms starts to wound.",
      },
      {
        stage: 3,
        label: "Sensory Grip",
        description:
          "Your least developed function erupts. Sudden obsessive attention to physical symptoms, past failures, or logistical details. You fixate on whether you locked the door, whether that headache means something, whether a mistake from years ago has consequences you never noticed. It feels like the opposite of your normal expansive thinking because it is.",
      },
    ],
    stressRecovery:
      "What actually helps: One conversation with someone who won't let you deflect into humor or analysis — someone who asks 'how are you actually doing?' and holds space for a real answer. Physical activity engaging enough to quiet your idea engine. Reducing intellectual input for 24-48 hours. What doesn't help: More ideas, more debate, more analysis, more caffeine.",
    flowTriggers: [
      "A novel problem that nobody has solved before",
      "An intellectual sparring partner who matches your speed",
      "Cross-domain challenges that reward your pattern-bridging",
      "Freedom to approach the problem from any angle",
      "Stakes high enough that the solution matters",
      "An audience that appreciates the elegance of your framework",
    ],
    flowDescription:
      "Your flow state is rapid-fire ideation refined by real-time logical analysis — ideas generating and being tested at a speed that makes the output feel channeled rather than constructed. Conversations where this happens feel like thinking at twice your normal speed. Solo, it manifests as a design session where frameworks emerge fully formed. Either way, time disappears and the work feels effortless.",
  },

  careerAlignment: {
    naturalFits: [
      "Entrepreneurship / startup founding",
      "Strategy consulting",
      "Product and systems architecture",
      "Venture capital / angel investing",
      "Journalism / commentary / analysis",
      "Academic research (interdisciplinary)",
      "Patent law / intellectual property",
      "Technology innovation",
    ],
    likelyDrains: [
      "Repetitive process execution",
      "Highly regulated compliance work",
      "Roles requiring sustained routine without novel problems",
      "Environments that penalize questioning the rules",
      "Work with no intellectual challenge",
    ],
    careerWarning:
      "Visionaries are prone to using their idea engine to rationalize career decisions that are actually stimulation-seeking. 'This new role is more aligned with my long-term vision' often means 'the current role stopped being intellectually novel.' Build a follow-through filter: before switching, ask whether the current project has been completed or merely abandoned because something more interesting appeared.",
  },

  growthPathStructured: {
    intro:
      "Growth for The Visionary isn't about generating fewer ideas — it's about building the execution infrastructure that turns your best ideas into things that actually exist in the world.",
    areas: [
      {
        title: "Build Your Execution System",
        description:
          "Your blind-spot function makes sustained follow-through genuinely difficult. Practice: Choose one project that matters, build external accountability around it (a partner, a deadline, a public commitment), and complete it before starting the next. The habit isn't discipline — it's infrastructure that compensates for what your stack doesn't naturally provide.",
      },
      {
        title: "Develop Emotional Presence",
        description:
          "Your developing social-emotional function is learning to engage with feelings rather than just ideas. Practice: In one conversation per week, resist the urge to analyze, reframe, or debate. Instead, respond with reflection: 'That makes sense' or 'Tell me more.' You're building the capacity for emotional connection your intellectual brilliance can't substitute for.",
      },
      {
        title: "Maintain Your Hardware",
        description:
          "Your blind-spot function means you neglect physical basics that your cognitive system depends on. Practice: Set non-negotiable daily minimums — real meals, adequate sleep, physical movement. Treat these not as health advice but as performance optimization for your idea engine. A well-maintained Visionary produces better ideas than a brilliant one running on fumes.",
      },
    ],
  },
};
