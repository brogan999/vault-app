import type { MBTITypeContent } from "./types";

export const INTP: MBTITypeContent = {
  typeCode: "INTP",
  typeName: "The Philosopher",
  tagline: "Builds internal models of reality and then checks them against the universe",
  color: "#328181",

  heroImage: "/characters/intp/intp-reveal.svg",
  sectionImages: {
    strengths: "/characters/intp/intp-strengths.svg",
    relationships: "/characters/intp/intp-relationships.svg",
    career: "/characters/intp/intp-career.svg",
    growth: "/characters/intp/intp-growth.svg",
  },

  overview: `You live inside a logic engine that never stops running. Your lead cognitive function builds internal frameworks — models of how things work, why they work, and where the models break down — with a precision and depth that most people can't follow. While others accept explanations at face value, you're three levels deep, testing assumptions, finding contradictions, and rebuilding the model until it's internally consistent. This isn't academic exercise. It's how your mind rests — by understanding.

Your secondary function adds an expansive, possibility-generating dimension that keeps your logic engine fed with raw material. It scans the external world for patterns, connections, and interesting problems, then feeds them into your internal processing for deep analysis. The combination produces a mind that's both rigorously precise and surprisingly creative — you don't just solve problems within existing frameworks, you build new frameworks that redefine what the problem actually is.

**How your mind is wired:** Your personality runs on four cognitive functions — mental tools you use in a specific order of preference. Your lead tool is **Introverted Thinking (Ti)**: an internal logic engine that builds precise, internally consistent frameworks for understanding how things work — it doesn't accept received wisdom, it rebuilds understanding from first principles. Your second tool is **Extraverted Intuition (Ne)**: a scanning engine that constantly generates connections and possibilities from the external world, feeding your logic engine with new problems to solve and new data to integrate. Third is **Introverted Sensing (Si)**: connection to past experience and detailed memory — still developing, which gives you a growing capacity for grounding your theories in practical reality. Last is **Extraverted Feeling (Fe)**: awareness of social dynamics and emotional communication — your blind spot, and the function that handles the interpersonal territory your logic engine can't map.

The tension you'll navigate is between your internal world — which is rich, precise, and endlessly fascinating — and the external world, which is messy, irrational, and requires social skills your logic engine considers beneath it. You can build a perfect model of how human communication should work and then fail to have a normal conversation about dinner plans. The gap between your internal sophistication and your external effectiveness is the central challenge your type faces.`,

  descriptionInsight:
    "Your trait pattern — strong Introversion, strong Intuition, very strong Thinking, strong Prospecting — creates a specific cognitive signature: a deep internal logic system that rebuilds understanding from first principles rather than accepting inherited frameworks. You're the person who asks 'but why does it work that way?' until you've reached bedrock — and then builds something new from there.",

  strengths: [
    {
      title: "First-Principles Thinking",
      description:
        "While most people work within existing frameworks, you rebuild them from scratch. Your logic engine doesn't accept 'because that's how it's done' — it dismantles every assumption until it reaches something that's actually true, then builds upward from there. This makes you slow to form opinions and devastating once you have them.",
      deepDive:
        "Your first-principles approach is your most distinctive cognitive capability. Where other types accept frameworks as given (the rules of a field, the conventions of a discipline, the assumptions of a culture), your logic engine treats them as hypotheses to be tested. Each one gets dismantled to its components, evaluated for internal consistency, and either validated or discarded. Only what survives this process becomes part of your working model. This makes you genuinely original in any field you enter deeply. While others are optimizing within existing paradigms, you're questioning whether the paradigm itself is correct. The breakthroughs that result — when they happen — tend to be fundamental rather than incremental, because you're not making the existing framework better, you're replacing it with one that resolves contradictions the old one couldn't. The development opportunity: first-principles thinking requires time that practical situations often don't provide. Learning to distinguish between situations that warrant deep analysis (the framework may actually be wrong) and situations that warrant working within existing frameworks (the framework is good enough and the deadline is real) is a critical professional skill.",
    },
    {
      title: "Pattern Architecture",
      description:
        "Your secondary function feeds problems to your logic engine from across every domain you've ever explored. The result: internal models that are both deeply logical and surprisingly creative. You see structural parallels that specialists miss because their expertise is narrow and your processing isn't.",
      deepDive:
        "Your pattern architecture ability comes from the interplay between your logic engine's depth and your idea scanner's breadth. Your logic engine builds precise internal models. Your idea scanner constantly feeds it new data from unrelated domains. The result: models that incorporate insights from fields that traditional specialists would never connect. A Philosopher who has deeply explored physics, music theory, and linguistics may build a model of organizational dynamics that's structurally informed by all three — not as loose metaphor, but as genuine structural isomorphism. This cross-domain precision is your competitive advantage and the source of your most original contributions. The growth edge: the models are only as valuable as their connection to practical reality. A beautiful internal framework that can't be communicated or applied is an intellectual achievement but not a practical one. Learning to translate your internal models into language that non-Philosophers can use is the bridge between insight and impact.",
    },
    {
      title: "Intellectual Honesty",
      description:
        "Your logic engine doesn't play favorites. When your own model is wrong, you'll dismantle it with the same rigor you'd apply to anyone else's. This capacity for genuine self-correction is rarer than it sounds — most people's relationship with their own ideas is governed by ego rather than logic.",
      deepDive:
        "Your intellectual honesty is structural rather than moral — it comes from how your logic engine processes information rather than from a commitment to honesty as a value (though you may have that too). Your logic engine evaluates frameworks for internal consistency regardless of who built them. When it's your own framework, the evaluation is no less rigorous. This means you genuinely change your mind when presented with better reasoning — not as a social performance, but because your logic engine has updated its model and the old one no longer compiles. This makes you one of the few types that can be genuinely persuaded by argument alone, which makes you an invaluable collaborator for anyone seeking truth rather than validation. The shadow: your willingness to dismantle your own models can look like intellectual instability to types who expect commitment to stated positions. And your insistence on applying the same logical scrutiny to others' cherished beliefs can earn you a reputation for coldness that's actually just consistency.",
    },
    {
      title: "Precision Under Complexity",
      description:
        "The more complex a problem gets, the more engaged you become. Where other types simplify to manage complexity, you embrace the full picture and build models that hold all the variables simultaneously. You don't just tolerate ambiguity — you map it with a precision that turns chaos into clarity.",
      deepDive:
        "Your comfort with complexity is a direct product of your logic engine's architecture. Most people's thinking has a complexity ceiling — beyond a certain number of variables, they need to simplify, delegate, or abstract away the details. Your logic engine doesn't have this ceiling in the same way. It builds internal models that can hold multiple interacting variables simultaneously, tracking their relationships and identifying how changes in one affect the others. This makes you invaluable in domains where oversimplification is the primary failure mode: systems design, theoretical research, debugging complex systems, philosophical analysis, and any field where the answer requires holding contradictions rather than resolving them prematurely. The growth edge: your comfort with complexity can become an excuse to avoid the simplification that communication requires. Explaining your insights to others inevitably involves lossy compression, and your logic engine may resist this because it feels like a distortion. Learning to simplify without dumbing down is an art that multiplies your impact enormously.",
    },
    {
      title: "Independent Judgment",
      description:
        "You form conclusions based on logical analysis, not consensus, authority, or social pressure. If the logic says the expert is wrong, you'll trust the logic. If the consensus position contains a contradiction, you'll point it out — regardless of how many people hold it.",
      deepDive:
        "Your independent judgment isn't contrarianism — it's the natural output of a logic engine that evaluates claims against internal consistency rather than external validation. When an authority figure makes a statement, your logic engine doesn't process it as 'this comes from an authority, so it's probably right.' It processes it as 'here's a claim — is it internally consistent? Does it follow from its premises? Where are the hidden assumptions?' This makes you genuinely resistant to groupthink, institutional bias, and argument from authority. It also makes you frustrating to work with in hierarchical environments where 'because I said so' is supposed to be sufficient. The development opportunity: recognizing that sometimes authority and consensus are proxies for accumulated experience that your logic engine can't fully model. The expert who can't explain their reasoning may still be right — their conclusion might be based on pattern recognition from thousands of cases that can't be reduced to logical propositions. Learning to extend provisional trust to experience-based knowledge, even when you can't verify the logic chain, is a maturity marker.",
    },
  ],

  growthEdges: [
    {
      title: "The Analysis Labyrinth",
      teaser:
        "You can analyze any problem into perfect clarity — except the problem of when to stop analyzing. Your logic engine will happily refine a model forever, approaching asymptotic perfection while the deadline passes, the opportunity closes, and the people waiting for your answer give up and decide without you.",
      fullExplanation:
        "The Analysis Labyrinth is your core developmental challenge, and it's insidious because it feels like productive work. Your logic engine doesn't have a natural stopping point. Every model can be made more precise. Every framework has an edge case that hasn't been addressed. Every conclusion has an assumption that could be further examined. The drive for completeness is infinite, and the practical need for 'good enough' is a concept your logic engine finds aesthetically offensive.\n\nThe pattern: you're asked to make a decision or deliver an analysis. Your logic engine begins processing. It builds a model. The model is good — maybe 85% complete. But there's an edge case. And that edge case connects to another variable. And that variable requires data you don't have but could research. So you research. And the research opens a new line of inquiry. Hours pass. Days pass. The model is now 92% complete and the deadline was yesterday.\n\nThis isn't procrastination. You've been working intensely the entire time. The problem is that your logic engine's definition of 'done' (internally consistent, all edge cases addressed, no unexamined assumptions) and the world's definition of 'done' (answers the question well enough to act on) are fundamentally different. Your logic engine is optimizing for truth. The world is optimizing for timely decision-making. These objectives conflict, and your logic engine will always choose truth unless something forces it to settle.\n\nThe intervention is structural: external deadlines that you can't renegotiate, accountability partners who ask 'is this actionable yet?' rather than 'is this complete?', and a deliberate practice of publishing 80% analyses with explicit 'here's what I don't know yet' caveats. The 80% analysis delivered on time creates more value than the 95% analysis delivered never. Your logic engine knows this is true and still resists it, which tells you the resistance is emotional (perfectionism disguised as rigor) rather than logical.",
      premiumHook:
        "Understand why your pursuit of logical completeness keeps you trapped in analysis — and get specific frameworks for delivering your insights before the window of usefulness closes.",
      relatedDimension: "JP",
    },
    {
      title: "The Social Blindfold",
      teaser:
        "Social dynamics operate on a system your logic engine can't fully model — emotional subtext, unspoken expectations, group norms that were never explicitly stated. You navigate this territory like a brilliant tourist in a country whose language you've studied from textbooks but never spoken. You understand the grammar. You miss the idioms.",
      fullExplanation:
        "The Social Blindfold is a direct consequence of your cognitive stack's priority ordering. Your lead function builds internal logical models. Your secondary function scans for intellectual patterns. Neither function is designed to process the emotional subtext, social signaling, and relationship dynamics that constitute most human interaction. Your social-emotional function sits in the last position — it's present but underdeveloped, giving you just enough awareness to know that social dynamics exist without enough fluency to navigate them smoothly.\n\nThe pattern: you enter a social situation. Your logic engine immediately begins modeling it — who's here, what's the structure, what are the explicit rules? But social situations run primarily on implicit rules: unspoken hierarchies, emotional undercurrents, conversational norms that nobody articulated because 'everyone knows.' You don't know, because your logic engine needs explicit data and these rules are transmitted socially rather than logically.\n\nThis creates specific, recognizable experiences. You say something that's logically correct and socially devastating — you didn't read the room because your logic engine was processing content while your social-emotional function was trying to process context and failing. You miss sarcasm because your logic engine takes statements at face value. You continue talking about a topic that everyone else has recognized as uncomfortable because your social radar didn't register the shift in energy.\n\nThe cost isn't just social awkwardness. It's isolation that compounds over time. When social interactions consistently feel confusing and draining, you withdraw further into your internal world — which makes your social skills atrophy further, creating a feedback loop where the territory you most need to practice in becomes the territory you most avoid.\n\nDevelopment doesn't mean becoming socially fluent overnight. It means building a minimal social toolkit through deliberate practice: reading emotional signals through body language (your idea scanner can learn to pattern-match these), developing a few social scripts for common situations (your logic engine can memorize and deploy these), and finding social contexts where your natural communication style is valued (intellectual communities, small groups, one-on-one conversations about ideas).",
      premiumHook:
        "Learn why social dynamics feel like a foreign language — and build the specific toolkit that lets you navigate them without abandoning your natural communication style.",
      relatedDimension: "TF",
    },
    {
      title: "The Implementation Desert",
      teaser:
        "Your internal world is lush — rich with models, frameworks, and insights that would genuinely improve whatever they touched. Your external world may be comparatively barren — ideas that never left your head, contributions that were never shared, innovations that never made it past the whiteboard. The gap between your internal wealth and your external impact is the defining challenge of your professional life.",
      fullExplanation:
        "The Implementation Desert describes the specific failure mode where your logic engine's output never reaches the world. The mechanism: your logic engine builds a model. Your idea scanner suggests applications. Your logic engine evaluates the model and finds it not yet complete enough to share (see: Analysis Labyrinth). But even when the model is complete, a second barrier exists: implementation requires engagement with the external world — communication, coordination, persuasion, project management — all of which run through functions at the bottom of your stack.\n\nSharing your work requires your social-emotional function (explaining complex ideas to non-technical audiences, managing stakeholder expectations, building support for your approach). Implementing your work requires your developing routine function (sustained daily effort, project management, handling logistics). Both functions are underdeveloped relative to your analytical functions, which means the bridge from 'I've figured this out' to 'this is working in the real world' is structurally weak.\n\nThe result: a pattern where your intellectual contribution is consistently undervalued relative to its actual quality. The colleague who has simpler ideas but better communication skills gets promoted while you're still refining your framework. The peer whose solution is less elegant but was actually deployed gets credit for innovation while yours remains theoretical. This is genuinely unfair — and it's also genuinely your problem to solve.\n\nThe practical interventions: partner with someone who complements your stack (a communicator, an executor, an organizer). Practice explaining your ideas in progressively simpler language until a non-specialist can follow the argument. Build a minimum viable version of your model and ship it before it's complete, then iterate based on real-world feedback rather than internal analysis alone.\n\nThe hardest part: accepting that an implemented 80% solution creates more value than a theoretical 100% solution. Your logic engine will resist this as intellectual compromise. It's not. It's the difference between having ideas and having impact.",
      premiumHook:
        "Discover why your best thinking never reaches the world — and build the specific bridge from internal insight to external impact.",
      relatedDimension: "EI",
    },
  ],

  relationshipStyle: "Deep, Selective, Intellectually Intimate",
  relationshipPreview:
    "You bring genuine depth, loyalty, and intellectual richness to relationships. The people you let in get access to a mind that sees the world in ways nobody else does — and that can be genuinely magical. The tension is that letting people in requires your least-developed function, which means the gateway to your richest qualities is guarded by your weakest skill. You're a treasure behind a difficult lock.",

  relationshipDeepDive:
    "Your relationship pattern is shaped by the contrast between your extraordinary internal richness and your underdeveloped external social skills.\n\n**The Selection Problem**\n\nYou're extremely selective about who you invest in — not from arrogance but from resource management. Social interaction costs you significant energy because it engages your least-developed function. You can't afford to spend that energy on connections that don't provide genuine intellectual or emotional return. This produces a small, carefully curated circle that outsiders may interpret as coldness or antisociality. It's neither. It's strategic allocation of a scarce resource.\n\n**The Attraction Phase**\n\nYou're attracted to minds first — people who can engage with your ideas at your level, who introduce frameworks you haven't encountered, who are willing to explore intellectual territory that most people find too abstract. Physical attraction develops secondary to intellectual connection. The early phase of a Philosopher relationship often looks like an extended conversation that happens to also involve a person.\n\nYour vulnerability in this phase: you may fail to signal romantic interest because your social-emotional function doesn't generate the conventional cues. You're having the best intellectual conversation of your year and the other person has no idea you're attracted to them.\n\n**The Intimacy Challenge**\n\nDeep intimacy requires vulnerability, emotional disclosure, and consistent emotional availability — all managed by your least-developed function. You want closeness (your logic engine has modeled the benefits of secure attachment) but the pathway to it requires skills your stack doesn't naturally provide. The result: you may intellectualize the relationship rather than experiencing it. You can explain your partner's attachment style but can't tell them you love them without feeling like you're executing a social script.\n\n**Conflict Style**\n\nConflict activates your logic engine, which approaches it as a problem to be solved through rigorous analysis. You'll identify the logical root cause with surgical precision — which may be accurate and is almost always experienced as cold. Your partner says 'I feel neglected.' Your logic engine responds: 'Let's define neglect. What specific behaviors constitute neglect in your framework? Are these expectations reasonable given our respective schedules?' The logic is sound. The effect is devastating.\n\nLearning to respond to the emotion before the logic — 'I hear that you're feeling neglected, and that matters to me' — before diving into analysis is the relationship skill that your type most needs to develop.\n\n**Physical Intimacy**\n\nPhysically, you may experience a disconnect between your intellectual engagement and your physical presence. Your mind can be deeply engaged while your body is barely participating — or your developing sensory function can surprise you with physical intensity that emerges when your logic engine finally steps back. The best physical connection for your type happens when you feel safe enough to let your analytical mind rest.\n\n**Friendship Architecture**\n\nYour friendships are built around intellectual compatibility. Your closest friends are thinking partners — people who can engage with your ideas at depth and who bring perspectives your logic engine hasn't considered. You maintain these relationships through shared intellectual exploration rather than regular social contact, which means you may go months without speaking and reconnect instantly around an interesting idea.\n\n**What Makes It Last**\n\nYour best relationships are with people who are intellectually engaging enough to keep your logic engine interested, patient enough to navigate your social awkwardness, and emotionally fluent enough to bridge the gap your stack creates. They need to understand that your internal world is richer than your external expression suggests — and they need to not take your occasional social clumsiness as a measure of how much you care.",

  careerHeadline: "Analytical, Theoretical & Precision-Focused",
  careerDirections: [
    "Research & Development",
    "Software Architecture",
    "Data Science / Analytics",
    "Philosophy / Academic Theory",
  ],
  careerDeepDive:
    "Your ideal work gives your logic engine complex problems to solve without requiring extensive social coordination. You need intellectual depth (surface-level work starves your logic engine), autonomy over your approach (imposed methodologies frustrate your first-principles orientation), and problems where precision matters more than speed (your logic engine produces excellent output on its own timeline, not someone else's).\n\n**Where You Thrive**\n\nThe career environments that bring out your best share specific features: genuine intellectual complexity (problems that require building new frameworks rather than applying existing ones), minimal social overhead (you can spend most of your time thinking rather than meeting), and respect for precision over speed (your best work comes from deep analysis, not rapid output). Research, software architecture, data science, theoretical physics, philosophy, systems design, and technical writing all offer these conditions.\n\n**The Career Trap**\n\nYour career trap has two faces. The visible one: you remain in pure theory and never translate your insights into practical impact. Your models are brilliant but never tested against reality. You become the person everyone respects intellectually but nobody turns to for practical solutions. The invisible one: you accept a role that values your technical skills but buries you in social coordination — meetings, presentations, stakeholder management — that drains the energy your logic engine needs.\n\nThe most successful Philosophers find or create roles where deep analytical work is the primary deliverable and social coordination is handled by others or minimized through asynchronous communication.\n\n**Leadership Style**\n\nTraditional leadership — directing teams, managing emotions, maintaining morale — engages your least-developed function and drains you rapidly. Your natural leadership style is intellectual: leading through the quality of your ideas rather than the force of your personality. In the right environment (research teams, technical organizations, academic departments), this works brilliantly. In environments that expect charismatic, people-focused leadership, it creates a mismatch that frustrates everyone.\n\n**Flow and Satisfaction**\n\nYour flow state is deep analytical immersion — losing yourself in a complex problem where your logic engine is operating at full capacity. Time disappears. External awareness vanishes. The model builds itself with a momentum that feels less like thinking and more like discovering something that was already there. This is the most satisfying state your type can access, and it requires uninterrupted time, genuine complexity, and freedom from social demands.\n\nWatch for these warning signs: the work no longer requires deep analysis — you're applying frameworks rather than building them. You spend more time in meetings than in thought. You've stopped learning — your logic engine hasn't encountered a genuinely new problem in months. The intellectual challenge that drew you to the role has been resolved, and what remains is maintenance.",

  cognitivePortraitDescriptions: [
    "You recharge in solitude — not just quiet but genuine cognitive isolation where your logic engine can process without external interruption. Social interaction costs energy because it engages your least-developed functions. Your best thinking happens alone, often in the middle of the night, when the world stops generating input.",
    "You perceive the world through abstraction and possibility. Where others see specific instances, you see the underlying principle. Where others accept explanations, you see the assumptions that need testing. This makes you a natural theorist — and occasionally frustrating to people who just want to discuss what happened without deconstructing why.",
    "You evaluate everything through internal logical consistency. 'Is this internally coherent?' is your first and most important question. You'd rather be logically precise than socially comfortable. Decisions route through your logic engine regardless of social or emotional pressure.",
    "You prefer to keep inquiries open and resist premature closure. Committing to a final answer feels like accepting a model that might be incomplete. You work in deep dives punctuated by long pauses, and your best insights often arrive when you've stopped deliberately thinking about the problem.",
  ],

  cognitiveStackDescriptions: [
    "Your lead function — Introverted Thinking — is an internal logic engine that builds precise, internally consistent frameworks from first principles. It doesn't accept received explanations — it disassembles them, evaluates each component, and rebuilds understanding from the ground up. Think of it as a compiler that checks every line of reasoning for logical errors before accepting it into your working model of reality.",
    "Your secondary function — Extraverted Intuition — scans the external world for patterns, connections, and interesting problems that feed your logic engine. It's why you can be deeply introverted and still need intellectual stimulation — your idea scanner requires input from the world to keep your logic engine supplied with material worth analyzing.",
    "Your developing function — Introverted Sensing — provides grounding in physical experience and detailed memory. It's developing throughout your life, giving you an increasing connection to practical reality, bodily awareness, and the value of accumulated experience. It's the function that helps you translate theoretical insight into practical application.",
    "Your least developed function — Extraverted Feeling — handles social dynamics, emotional expression, and interpersonal harmony. It's your genuine blind spot — the part of social interaction that operates on rules your logic engine can't fully map. Under stress, it can erupt as sudden people-pleasing or desperate attempts to maintain social harmony that feel completely unlike your normal independence.",
  ],

  cognitiveStackExplanation:
    "Your cognitive stack creates an architecture optimized for deep analytical precision. Understanding this architecture explains both your intellectual gifts and the specific ways your external life fails to reflect your internal capability.\n\n**Your Lead Function: Introverted Thinking (Ti) — The Logic Engine**\n\nThis is your primary cognitive tool — an internal framework-building machine that's always running. It takes in information and processes it not for 'does this match what I've been told?' but for 'is this internally consistent when examined from first principles?' This distinction is crucial. Most people evaluate new information against their existing beliefs. Your logic engine evaluates new information against logical structure itself.\n\nThe output: mental models of extraordinary precision and depth. Your understanding of any domain you've deeply explored isn't surface-level — it's architectural. You don't just know the conclusions; you know the axioms, the derivation paths, the edge cases, and the specific conditions under which the model breaks down. This gives you the ability to see problems that others can't, because you're operating at a deeper level of the system.\n\nHealthy Ti produces genuinely original insights by questioning assumptions others take for granted. Unhealthy Ti becomes an infinite regress machine — questioning the questions, analyzing the analysis, never reaching a conclusion because the pursuit of perfect logical completeness has no natural endpoint.\n\n**Your Secondary Function: Extraverted Intuition (Ne) — The Idea Scanner**\n\nThis function provides the raw material your logic engine needs. It scans the external world for patterns, connections, and interesting problems — importing data from conversations, reading, observations, and random encounters. Where your logic engine goes deep, your idea scanner goes broad, creating a complementary relationship that produces both depth and creativity.\n\nYour idea scanner is why you can be profoundly introverted and still need intellectual stimulation. Your internal world is rich, but it requires external input to remain productive. Without new problems to analyze, new patterns to map, and new domains to explore, your logic engine starts running on old data — and the models become increasingly self-referential.\n\n**Your Third Function: Introverted Sensing (Si) — The Developing Anchor**\n\nThis function grounds you in physical reality and practical experience. In its developing position, it provides a growing connection to your body, your environment, and the accumulated lessons of your past. As it develops, your theoretical insights gain practical grounding — you learn not just what's logically true but what actually works in practice.\n\nDeveloping this function is what transforms a brilliant theorist into an effective practitioner. It adds 'will this work in the real world?' to your logic engine's existing question of 'is this internally consistent?' The combination of logical precision and practical grounding is the hallmark of the mature Philosopher.\n\n**Your Fourth Function: Extraverted Feeling (Fe) — The Blind Spot**\n\nThis function handles social dynamics, emotional expression, and interpersonal harmony. It's your least developed function, and its absence creates the most visible gap between your internal capability and your external effectiveness. You may understand communication theory perfectly and still struggle with an everyday conversation about feelings.\n\nUnder extreme stress, this function can erupt in ways that surprise everyone, including you: sudden people-pleasing, dramatic emotional expressions, or desperate attempts to restore social harmony that feel completely out of character. These eruptions are your least-developed function misfiring under pressure — they're not who you are, and they pass when the stress resolves.\n\nDeveloping this function doesn't mean becoming socially fluent. It means building enough social capability to communicate your ideas, maintain the relationships that matter to you, and navigate the interpersonal dynamics that your career and personal life require. Think of it as building a minimum viable social toolkit — not social mastery, but social sufficiency.\n\n**The Integrated Stack**\n\nAt full integration, you're operating at your peak: your logic engine builds precise frameworks (Ti), fed by diverse external input (Ne), grounded in practical experience (Si), and communicated with enough social skill to actually reach the people who need your insights (Fe). This is the Philosopher who doesn't just think brilliantly — they contribute brilliantly.",

  emotionalLandscape:
    "Your emotional life exists in a peculiar tension: your logic engine has probably built a precise model of human emotions and can explain attachment theory, grief stages, and emotional regulation strategies with academic accuracy. Your actual emotional experience, however, is processed by functions that don't get nearly enough airtime.\n\n**The Internal Experience**\n\nContrary to the stereotype, you feel deeply. Your logic engine's dominance doesn't suppress emotions — it just processes them differently. An emotional event occurs. Your logic engine immediately categorizes and contextualizes it. Your idea scanner connects it to broader patterns. By the time your developing experiential function or social-emotional function could process the raw feeling, it's already been converted into an intellectual framework. The emotion was felt. It just wasn't experienced as a feeling — it was experienced as a thought about a feeling.\n\nThis creates a specific pattern: you may realize you're sad three days after the triggering event, when your logic engine finally runs out of analytical frameworks to apply and the raw emotion surfaces. You're not delayed — you're processing in a different order than most types. The analysis comes first. The feeling comes when the analysis can't fully contain it.\n\n**Frustration: Your Most Accessible Emotion**\n\nFrustration routes cleanly through your logic engine. When a system is broken, when someone's reasoning is flawed, when an institution operates irrationally — your logic engine processes the frustration as diagnostic data about what needs fixing. This makes frustration your most accessible and expressive emotion, and it can become the channel through which other emotions are expressed. Sadness, loneliness, and hurt may all surface as frustration because frustration has a logical structure your dominant function can work with.\n\n**Loneliness: The Quiet Cost**\n\nLoneliness is a significant emotional theme for your type, though you may not frame it that way. Your social-emotional blindspot makes connection difficult; your introversion makes social effort costly; your selectivity means few people meet your criteria for genuine engagement. The result can be a life that's intellectually rich and relationally sparse.\n\nThe loneliness may not register as an emotion — your logic engine may frame it as 'I prefer solitude' or 'most people aren't interesting enough.' These may be partially true, but they may also be rationalizations for a situation your social-emotional function can't fix. Check: do you feel energized or depleted after extended isolation? If depleted, your logic engine's narrative about preferring solitude may be a cover for social skills that need development.\n\n**Stress Response**\n\nUnder stress, your logic engine accelerates first — more analysis, deeper dives, increasingly abstract frameworks that are less connected to the original problem. If stress persists, your idea scanner becomes anxious — generating worst-case possibilities rather than creative ones. In extreme stress, your social-emotional function erupts: sudden desperate sociability, emotional outbursts, or frantic attempts to please people that feel completely unlike your normal composed independence.\n\n**Recovery**\n\nRecovery requires what your logic engine resists: letting go of the analysis. Sitting with the feeling without building a framework around it. Physical grounding — your developing sensory function needs activation through movement, nature, or tactile engagement. And one conversation with someone who provides genuine emotional presence without demanding social performance.",

  growthPath:
    "Philosopher development follows an arc from internal precision to external impact — not becoming less rigorous, but building the bridges that let your rigor reach the world.\n\n**Teens and Twenties: Building the Engine**\n\nYour logic engine and idea scanner develop their full partnership. You discover the pleasure of deep analysis — the satisfaction of understanding something at the structural level, of building a model that resolves contradictions others can't see. This is the period where your intellectual identity forms, and it's profoundly satisfying. You may feel alienated from peers who can't follow your thinking, but the quality of your analysis compensates.\n\nThe risk: building an identity so exclusively around intellectual capability that other dimensions of life atrophy. Relationships, physical health, social skills, and practical life management may all be neglected as your logic engine claims an ever-larger share of your processing capacity.\n\n**Late Twenties to Early Thirties: The Practical Awakening**\n\nYour developing experiential function starts demanding attention. You discover that understanding something theoretically and being able to do it practically are genuinely different capabilities. This shows up professionally (your analysis is brilliant but your ability to communicate and implement it lags behind) and personally (your model of relationships is sophisticated but your actual relationships are underdeveloped).\n\nThis period often involves a reckoning: the gap between your internal capability and your external life becomes impossible to ignore. You're capable of more than you're achieving, and the bottleneck isn't intelligence — it's the practical and social skills you've underinvested in.\n\n**Thirties and Beyond: The Social Development**\n\nThe deepest growth edge is developing your social-emotional function — building enough interpersonal capability to communicate your ideas, maintain relationships, and navigate the social world without being drained by it. This doesn't mean becoming an extrovert. It means building a minimal viable social toolkit: the ability to express appreciation, to read basic emotional signals, to communicate your needs, and to maintain the relationships that sustain you.\n\nFor many Philosophers, this development is catalyzed by a relationship — a partner or close friend who demands emotional presence that your logic engine alone can't provide. The discomfort of learning to speak in emotional language is the growing pain that opens the richest development available to your type.\n\n**The Integrated Philosopher**\n\nThe fully developed Philosopher is genuinely rare and extraordinarily valuable: analytical precision (Ti) fed by broad pattern recognition (Ne), grounded in practical experience (Si), and communicated with enough social skill to actually reach people (Fe). This is the person whose insights don't just sit in notebooks — they change how others think and what organizations build. The difference between a brilliant thinker and an influential one is the integration of the bottom two functions.",

  toolkit: [
    {
      title: "The 80% Rule",
      context:
        "When you've been analyzing a problem and realize more time has passed than the problem warrants — the Analysis Labyrinth in action",
      action:
        "Ask yourself: 'Is this model actionable yet?' If the answer is yes, ship it. Write down the specific uncertainties your logic engine is trying to resolve. Evaluate: would resolving them change the recommendation? If not, you're polishing, not analyzing. Set a hard deadline for delivery and include a 'known limitations' section — this satisfies your logic engine's need for intellectual honesty while allowing you to release before perfection.",
    },
    {
      title: "The Translation Exercise",
      context:
        "When you need to communicate a complex idea to someone who doesn't share your analytical depth — the Implementation Desert barrier",
      action:
        "Take your insight and explain it in three versions: one for an expert (full precision, all caveats), one for an intelligent non-specialist (core framework, key implications, no jargon), and one for a child (the central insight in one sentence using an analogy). If you can't do the third version, you haven't fully understood your own insight yet. Start presentations with version three and work backward. Most people don't need your full analysis — they need your conclusion and enough supporting structure to trust it.",
    },
    {
      title: "The Social Script",
      context:
        "In social situations that feel confusing or draining — the Social Blindfold creating unnecessary friction",
      action:
        "Build a small library of social scripts for common situations: 'How to end a conversation,' 'How to respond when someone shares bad news,' 'How to make small talk for five minutes.' Your logic engine can memorize and deploy these like subroutines. They won't feel natural at first — and that's fine. They're not meant to replace genuine social fluency. They're minimum viable responses that prevent your social blind spot from creating unnecessary friction. Over time, with enough practice, some of them will start to feel natural.",
    },
    {
      title: "The Embodiment Break",
      context:
        "When you've been in your head for hours and feel increasingly detached, restless, or physically uncomfortable",
      action:
        "Stand up. Do something physical that requires enough coordination to command your attention away from your logic engine: walk in an unfamiliar neighborhood, cook something complex, do a challenging workout. Your developing experiential function needs these inputs to develop, and your logic engine needs periodic offline time to consolidate its processing. Think of it as defragmenting your hard drive — the thinking resumes better after the break.",
    },
    {
      title: "The Emotional Label",
      context:
        "When someone asks how you're feeling and you genuinely don't know — building the emotional awareness your logic engine doesn't naturally develop",
      action:
        "Start with your body, not your mind. Check for physical sensations: tension, heaviness, restlessness, warmth, constriction. Then match the sensation to a basic emotion: tension might be anxiety, heaviness might be sadness, restlessness might be frustration. You're reverse-engineering emotional awareness through a channel (physical sensation) that's more accessible to you than the social-emotional channel most people use. Over time, this builds a bridge between your body's signals and your logic engine's models.",
    },
    {
      title: "The One-Person Practice",
      context:
        "When you realize your social skills are atrophying from disuse — the Social Blindfold feedback loop",
      action:
        "Identify one person whose company you genuinely enjoy. Commit to one meaningful interaction per week — a conversation, a shared activity, a meal. Not a social obligation but a genuine connection. Your social-emotional function develops through practice, and one deep relationship is worth more than a dozen surface-level interactions for your type. Focus on listening rather than analyzing their statements, and practice expressing appreciation even when your logic engine considers it socially unnecessary.",
    },
  ],

  compatibilityNotes: {
    INTJ:
      "Fellow deep thinker who matches your intellectual depth but organizes for execution rather than pure understanding. They take your frameworks and ask 'how do we implement this?' — a question your stack often neglects. Tension: they'll push for closure when your logic engine wants to keep refining, and their confidence in their conclusions can feel premature to your more cautious analytical process.",
    ENTP:
      "Two logic systems in conversation — yours builds deep frameworks, theirs stress-tests them through rapid-fire debate. Intellectually, one of the most stimulating pairings. They bring the external engagement your idea scanner craves; you bring the depth their broad scanning lacks. Tension: they process verbally while you process internally, creating pace mismatches that frustrate both sides.",
    ENTJ:
      "Their organizing drive can give your theoretical insights a path to implementation. They see your frameworks as strategic assets to be deployed; you see their execution plans as interesting systems to analyze. Complementary when aligned. Tension: their decisiveness can feel like intellectual impatience, and your deliberation can feel like obstruction.",
    INFJ:
      "Both deep internal processors — you build logical frameworks, they build emotional-intuitive ones. Conversations can reach extraordinary depth because both types think beneath the surface. Tension: their emotional processing and your logical processing can feel mutually incomprehensible when discussing the same situation from different angles.",
    ENFP:
      "Their idea generation and warmth draw you into external engagement that you might otherwise avoid. They appreciate your depth; you appreciate their breadth and genuine emotional expressiveness. Tension: their values-driven decisions may not survive your logical scrutiny, and your logical scrutiny may feel like an attack on their identity.",
    INFP:
      "Shared introversion and deep internal processing create a quiet, mutually respectful space. Their values-based framework and your logic-based framework address different but complementary dimensions of reality. Tension: their emotional sensitivity may be bruised by your directness, and their values-based reasoning may frustrate your logic engine.",
    ISFJ:
      "Their experiential grounding and emotional attunement address your two weakest areas. They provide practical stability and relational warmth that your internal world needs. Tension: their need for emotional reciprocity may exceed what your social-emotional function can provide, and your abstract communication may feel alienating to their concrete processing.",
    ESTJ:
      "Their execution-first organizing can implement your theoretical insights — if they respect the theory. Tension: they value proven methods; you question proven methods from first principles. They want efficient action; you want complete understanding. These orientations conflict unless both actively bridge them.",
    ISTP:
      "Shared lead-function logic creates deep mutual respect. They apply logic hands-on where you apply it theoretically. Being together can feel like operating on the same frequency without needing many words. Tension: they may find your theoretical orientation impractical; you may find their practical orientation intellectually limited.",
    ESFJ:
      "Maximum cognitive contrast. Their social-emotional warmth and experiential stability are your exact blind spots made visible. Being around them can be profoundly developmental — and profoundly uncomfortable. Tension: your analytical detachment can feel cold; their emotional expressiveness can feel overwhelming.",
  },

  compatibilitySnapshot: {
    naturalAllies: [
      {
        code: "INTJ",
        name: "The Mastermind",
        reason:
          "Shared intellectual depth with complementary processing — their execution orientation grounds your theoretical precision. Mutual respect for competence and independent thinking.",
      },
      {
        code: "ENTP",
        name: "The Visionary",
        reason:
          "Your deep logic and their broad idea generation create intellectually electric conversations. They bring the external engagement your processing needs; you bring the depth their scanning lacks.",
      },
      {
        code: "INFJ",
        name: "The Champion",
        reason:
          "Both deep internal processors who think beneath the surface. Their emotional-intuitive frameworks complement your logical ones, producing conversations of extraordinary depth.",
      },
    ],
    growthPartners: [
      {
        code: "ENFP",
        name: "The Inspirer",
        reason:
          "Their warmth and idea generation draw you into external engagement you'd otherwise avoid. They appreciate your depth; you benefit from their emotional expressiveness.",
      },
      {
        code: "ISFJ",
        name: "The Guardian",
        reason:
          "Their experiential grounding and emotional attunement address your two weakest areas directly. They provide the practical stability and relational warmth your internal world needs.",
      },
      {
        code: "ENTJ",
        name: "The Executive",
        reason:
          "Their organizing drive transforms your theoretical insights into implemented reality. They value the strategic depth you provide; you benefit from their execution capability.",
      },
    ],
    challengingPairs: [
      {
        code: "ESFJ",
        name: "The Anchor",
        reason:
          "Maximum cognitive contrast — their social-emotional warmth and tradition-orientation clashes with your analytical detachment and first-principles questioning.",
      },
      {
        code: "ESTJ",
        name: "The Governor",
        reason:
          "Their execution-first, precedent-respecting approach conflicts with your theory-first, question-everything orientation at a fundamental level.",
      },
      {
        code: "ESFP",
        name: "The Muse",
        reason:
          "Their spontaneous, sensory-focused, feeling-first approach operates on a completely different wavelength from your analytical, theoretical, logic-first orientation.",
      },
    ],
  },

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Analysis Overdrive",
        description:
          "Your logic engine accelerates into increasingly abstract territory. You analyze the analysis. You build frameworks about frameworks. The thinking becomes self-referential and disconnected from the original problem, but it feels productive because the models are getting more sophisticated.",
      },
      {
        stage: 2,
        label: "Negative Scanning",
        description:
          "Your idea scanner turns pessimistic. Instead of generating creative possibilities, it generates worst-case scenarios and flaws in everything — your work, your relationships, other people's reasoning. You become hypercritical and withdrawn.",
      },
      {
        stage: 3,
        label: "Social Eruption",
        description:
          "Your least developed function breaks through. Sudden desperate sociability, emotional outbursts, or frantic people-pleasing that feels completely unlike your normal composed independence. You may say things you'd normally never say, driven by a sudden overwhelming need for connection or approval.",
      },
    ],
    stressRecovery:
      "What actually helps: Physical movement that's engaging enough to quiet your logic engine. One genuine conversation with someone who provides emotional presence without demanding social performance. Reducing intellectual stimulation for 24-48 hours to let your processing systems reset. What doesn't help: More analysis, more isolation, more abstraction.",
    flowTriggers: [
      "A genuinely complex problem with no existing solution",
      "Uninterrupted time to think deeply",
      "Access to diverse information sources",
      "Freedom from social demands",
      "A problem where precision matters more than speed",
      "The feeling of a framework clicking into place",
    ],
    flowDescription:
      "Your flow state is deep analytical immersion — losing yourself in a problem where your logic engine and idea scanner are working in perfect concert. The model builds itself with a momentum that feels like discovery rather than construction. You're not thinking — you're seeing the structure of something that was always there. Time disappears. Physical awareness drops to zero. This is the most productive and satisfying state your type can access.",
  },

  careerAlignment: {
    naturalFits: [
      "Research (academic or applied)",
      "Software architecture / systems design",
      "Data science and analytics",
      "Philosophy / theoretical work",
      "Technical writing / documentation",
      "Forensic analysis / debugging",
      "Mathematics / formal logic",
      "Strategic analysis",
    ],
    likelyDrains: [
      "High-volume social coordination (sales, event management)",
      "Repetitive process work with no analytical component",
      "Environments that penalize questioning established methods",
      "Roles requiring constant emotional engagement with others",
      "Work where speed consistently trumps precision",
    ],
    careerWarning:
      "Philosophers are prone to two traps: staying in pure theory where their insights never reach the world, or accepting roles that value their analytical skills but bury them in social coordination they can't sustain. Find or create roles where deep analytical work is the primary deliverable and social overhead is minimized. Your best work happens in extended periods of uninterrupted thought — protect those periods aggressively.",
  },

  growthPathStructured: {
    intro:
      "Growth for The Philosopher isn't about thinking less rigorously — it's about building the bridges that let your rigorous thinking actually reach the people and systems that need it.",
    areas: [
      {
        title: "Ship Before Perfect",
        description:
          "Your logic engine has no natural stopping point — every model can be refined further. Practice: Set deadlines for delivery that you can't renegotiate. Include a 'known limitations' section that satisfies your intellectual honesty. An actionable 80% analysis creates more value than a theoretical 100% one.",
      },
      {
        title: "Build Social Fluency",
        description:
          "Your social-emotional function is your genuine blind spot. Practice: Commit to one meaningful social interaction per week with someone you genuinely enjoy. Focus on listening and expressing appreciation rather than analyzing or debating. Social skills develop through practice, and one deep connection is worth more than a dozen surface-level interactions.",
      },
      {
        title: "Ground in Your Body",
        description:
          "Your developing experiential function needs regular physical input to grow. Practice: Build one consistent physical activity into your routine — not for health goals but because your logic engine produces better output when your body is properly maintained. Treat your body as hardware that your cognitive stack runs on.",
      },
    ],
  },
};
