import type { IQDimensionContent } from "../types";

export const VERBAL: IQDimensionContent = {
  id: "verbal",
  label: "Verbal Reasoning",
  shortLabel: "Verbal",
  color: "#315E36",

  levels: {
    strong: {
      overview: `Your verbal reasoning sits in the top tier of cognitive performance. You process language not just for surface meaning but for structural relationships — analogies, implications, logical inferences, and the architecture of arguments. When someone says something ambiguous, you don't just understand the most likely interpretation; you hold multiple readings simultaneously and select the one that fits the broader context. This is the cognitive machinery behind precise communication, persuasive argumentation, and rapid comprehension of complex material.

What makes this result distinctive isn't vocabulary size, though yours is likely above average. It's the speed and accuracy with which you manipulate verbal concepts — seeing that BOOK relates to READING the way FORK relates to EATING, or recognising that 'ephemeral' maps to 'fleeting' rather than its superficial look-alikes. These operations involve both crystallised intelligence (accumulated verbal knowledge) and fluid reasoning (the ability to apply that knowledge to novel problems in real time).

In practical terms, you absorb written material quickly, construct arguments efficiently, and detect logical flaws in other people's reasoning almost automatically. You're the person who spots the gap in a contract, catches the assumption in a business proposal, or notices when someone's conclusion doesn't follow from their premises. This capacity is genuinely rare and becomes more valuable with experience as your knowledge base deepens.`,

      strengths: [
        {
          title: "Rapid Comprehension",
          description: "You process written and spoken language significantly faster than average, extracting meaning, nuance, and implication in a single pass. This means you spend less cognitive effort on understanding and more on evaluating, synthesising, and responding.",
          deepDive: "Rapid verbal comprehension isn't just about reading speed — it's about the depth of processing that occurs automatically during reading. When you encounter a complex sentence, your brain is simultaneously parsing syntax, retrieving word meanings, building a situation model, and checking for coherence with what you already know. In people with strong verbal reasoning, these processes run in parallel with minimal conscious effort, which frees working memory for higher-order thinking. This is why you can read a dense legal document and immediately identify the three clauses that matter, or listen to a 30-minute presentation and distil it into a single actionable summary.",
        },
        {
          title: "Analogical Reasoning",
          description: "You see structural relationships between concepts that share no surface features. This ability to reason by analogy is one of the strongest predictors of creative problem-solving and cross-domain insight.",
          deepDive: "Analogical reasoning — understanding that A is to B as C is to D — is considered one of the hallmarks of human intelligence. It requires abstracting the relationship between two concepts and mapping that relationship onto an entirely different domain. Your facility with verbal analogies extends far beyond test questions. It shows up when you explain a complex idea using a metaphor that makes it immediately clear, when you transfer a solution from one field to solve a problem in another, or when you see patterns in arguments that others miss because they're focused on surface content rather than deep structure.",
        },
        {
          title: "Logical Inference",
          description: "You can follow chains of verbal reasoning — 'if all A are B, and some B are C' — with accuracy and speed, catching invalid conclusions that slip past most people.",
        },
        {
          title: "Vocabulary Depth",
          description: "Your word knowledge goes beyond definitions to include connotation, register, and precision. You choose words that mean exactly what you intend, and you understand when others are using words loosely.",
        },
      ],

      growthEdges: [
        {
          title: "Verbal Dominance",
          teaser: "Your verbal facility can make you over-reliant on language-based reasoning, potentially undervaluing information that comes in visual, numerical, or kinesthetic form.",
          fullExplanation: "When you're good with words, everything starts looking like a verbal problem. You explain spatial relationships in language rather than drawing them. You describe numerical patterns rather than graphing them. You process emotions by talking about them rather than feeling them in your body. This verbal dominance is a natural consequence of the brain relying on its strongest pathway — but it can create blind spots.\n\nThe specific risk in professional settings: you may over-weight articulate arguments (including your own) and under-weight evidence presented in non-verbal form. A colleague who can't explain their intuition as fluently as you can explain your analysis isn't necessarily wrong — they may be accessing pattern recognition that hasn't been translated into language yet.\n\nThe practice: deliberately engage with non-verbal reasoning tasks. Draw diagrams instead of writing explanations. Work with data visualisations before reading the accompanying text. Notice when you're converting a non-verbal input into words and ask whether the conversion is losing information.",
          premiumHook: "Get the specific exercises for strengthening non-verbal reasoning pathways alongside your verbal strengths.",
        },
        {
          title: "The Articulation Trap",
          teaser: "Being able to articulate something clearly can create the illusion that you understand it deeply. Fluent expression isn't the same as rigorous thinking.",
          fullExplanation: "This is a subtle cognitive trap specific to people with strong verbal skills: because you can explain almost anything clearly, you may confuse the ability to describe an idea with the ability to evaluate it. You construct a coherent narrative around a decision and it feels solid because the words flow well — but narrative coherence and logical validity are different things.\n\nIn high-stakes contexts — investment decisions, strategic pivots, relationship choices — this can mean you talk yourself into positions that sound right rather than are right. The verbal reasoning that makes you persuasive to others can also make you persuasive to yourself.\n\nThe fix: develop the discipline of stress-testing your own arguments the way you'd stress-test someone else's. After you've articulated your position fluently, ask: 'What would I say if I were arguing the opposite?' If you can argue the other side equally fluently, you've identified a genuine judgment call. If you can't, you may have found a gap in your reasoning that your verbal fluency was papering over.",
          premiumHook: "Learn the counter-argument protocol that prevents verbal fluency from substituting for rigorous analysis.",
        },
      ],

      workplaceImplications: "Strong verbal reasoning makes you exceptionally effective in any role that involves reading, writing, argumentation, negotiation, or conceptual synthesis. Law, consulting, journalism, strategy, policy, and executive communication all leverage this cognitive strength directly. You're the person who can read 50 pages of briefing material in the time it takes others to read 15, draft communications that are clear on first reading, and identify the weak link in a chain of reasoning during a meeting. Your professional risk isn't capability — it's patience. You process language so much faster than average that meetings feel slow, explanations feel redundant, and you may develop the habit of finishing people's sentences or jumping to conclusions before others have finished speaking.",

      learningStyle: "You learn most efficiently through reading and discussion — absorbing large volumes of text, debating ideas, and articulating concepts in your own words. Lectures work well for you when the speaker is precise. You retain information better when you can restate it, which means writing summaries and teaching concepts to others are your highest-leverage study techniques. Your verbal system acts as a natural compression algorithm: you extract the essential structure from complex material and encode it in compact verbal form. The growth edge in your learning: deliberately incorporate non-verbal learning channels — diagrams, spatial models, hands-on manipulation — to avoid building an excessively word-dependent mental model of complex systems.",

      emotionalPattern: "Your verbal reasoning gives you an unusually articulate relationship with your emotional life. You can name feelings precisely, explain their origins clearly, and talk through emotional complexity in a way that helps both you and the people around you. The shadow side: you may intellectualise emotions — converting them into verbal descriptions so efficiently that the feeling itself gets bypassed. Understanding why you're angry is not the same as feeling the anger and letting it do its regulatory work. Your strongest emotional skill is communication; your growth edge is embodiment.",

      enhancementTriggers: [
        "Reading challenging material across multiple domains — fiction, philosophy, science, law — that stretches your vocabulary and exposes you to novel patterns of argumentation",
        "Engaging in structured debates or discussions where you must defend positions, including positions you disagree with",
        "Writing regularly — journaling, professional writing, creative writing — which forces active rather than passive language processing",
      ],
      depletionTriggers: [
        "Extended periods without reading or intellectually stimulating conversation — verbal reasoning atrophies without exercise like any cognitive skill",
        "Sleep deprivation, which disproportionately impairs the fluid reasoning component of verbal ability while leaving crystallised knowledge intact",
        "High-stress environments that trigger fight-or-flight responses, which shift cognitive resources away from the prefrontal language centres toward reactive processing",
      ],

      toolkit: [
        {
          title: "The Counter-Argument Drill",
          context: "Your verbal fluency can make you persuasive to yourself. This practice builds the discipline of testing your own reasoning.",
          action: "After forming an opinion on any significant decision, spend 10 minutes writing the strongest possible argument for the opposite position. Not a straw man — a genuinely compelling case. If you can't construct one, you've identified a reasoning gap. If you can, you've upgraded your understanding of the issue. Do this weekly on one professional or personal decision.",
        },
        {
          title: "The Non-Verbal Channel",
          context: "Verbal dominance can make you over-reliant on language-based processing. Strengthening other channels creates a more robust cognitive profile.",
          action: "Once a week, tackle a problem using a non-verbal method first: draw a diagram, build a physical model, sketch a flowchart, or use spatial reasoning to map relationships. Only after you've worked the problem non-verbally should you translate your solution into words. Notice what information was present in the visual that got lost in translation.",
        },
        {
          title: "The Precision Audit",
          context: "Strong verbal skills can slide into verbosity. The highest form of verbal intelligence is saying exactly what you mean in the fewest words possible.",
          action: "Take a piece of your own writing — an email, a report, a message — and cut it by 30% without losing meaning. This forces you to distinguish between words that carry information and words that carry only rhythm or habit. Do this with one piece of writing per week. Over time, your first drafts will become as lean as your edits.",
        },
      ],
    },

    moderate: {
      overview: `Your verbal reasoning is solidly functional — you handle everyday language tasks without difficulty and can follow moderately complex arguments. Analogies, vocabulary, and logical inferences are accessible to you, though you may need more processing time on the trickier examples or benefit from a second reading of dense material. This is not a deficit. The majority of adults operate at this level, and it supports successful performance in most professional and academic contexts.

What this score reflects is the relationship between speed and accuracy in verbal tasks. You get most verbal reasoning problems right given sufficient time, but the most complex ones — multi-step logical inferences, subtle analogies between distant domains, vocabulary items that require distinguishing between near-synonyms — are where the system works harder. This is the zone with the highest return on investment for deliberate practice: small improvements in verbal processing speed and accuracy translate directly into better reading comprehension, clearer communication, and sharper analytical thinking.

The good news is that verbal reasoning is one of the most trainable cognitive domains. Unlike some aspects of fluid intelligence that peak in early adulthood, verbal ability — because it draws heavily on crystallised knowledge — can improve throughout your entire life. Every book you read, every well-constructed argument you engage with, and every new concept you master adds to the neural infrastructure that supports verbal reasoning.`,

      strengths: [
        {
          title: "Functional Comprehension",
          description: "You accurately understand written and spoken language in most professional and social contexts. Reports, articles, presentations, and conversations are processed reliably — you get the gist and most of the detail.",
          deepDive: "Functional comprehension is the workhorse of cognitive life. You don't need exceptional verbal reasoning to succeed in most roles — you need reliable comprehension that doesn't break down under pressure or complexity. Your moderate score means your verbal processing is trustworthy in the vast majority of situations you'll encounter. Where it may require more effort is in domains with specialised vocabulary (legal, medical, technical) or arguments with multiple layers of conditional reasoning.",
        },
        {
          title: "Clear Communication",
          description: "You express ideas in ways that others can follow. Your language is functional and direct, which is often more effective in professional settings than elaborate verbal complexity.",
        },
        {
          title: "Basic Analogical Thinking",
          description: "You can see straightforward relationships between concepts and use comparisons to explain ideas. This foundational skill supports learning across all domains.",
        },
      ],

      growthEdges: [
        {
          title: "Complex Argument Tracking",
          teaser: "Multi-step arguments with conditional logic — 'if A, then B, unless C' — are where your verbal reasoning works hardest. This limits your ability to catch flaws in sophisticated reasoning.",
          fullExplanation: "The gap between moderate and strong verbal reasoning shows up most clearly in the handling of complex logical structures. When someone presents an argument with multiple premises, hidden assumptions, and conditional conclusions, you may follow the surface flow without catching the structural flaw. This isn't about intelligence — it's about the specific cognitive skill of holding multiple verbal propositions in working memory simultaneously and testing their relationships.\n\nIn practical terms: you may miss the clause in a contract that undermines the main agreement, accept a business proposal that sounds coherent but contains a circular argument, or struggle to follow a debate where both sides are making multi-step cases.\n\nThe growth strategy: practice with progressively complex logical arguments. Read editorial pages and identify the premises, conclusions, and hidden assumptions. Work through logic puzzles that require you to hold 3-4 verbal conditions in mind simultaneously. This specific training strengthens the working memory pathways that support complex verbal reasoning.",
          premiumHook: "Get the progressive training programme for strengthening complex argument tracking and logical inference.",
        },
        {
          title: "Vocabulary Precision",
          teaser: "You may use words that are approximately right rather than exactly right, which can create ambiguity in professional communication and limit the precision of your thinking.",
          fullExplanation: "Vocabulary isn't just about knowing more words. It's about having fine-grained distinctions available when you need them. The difference between 'concerned' and 'apprehensive,' between 'imply' and 'infer,' between 'comprise' and 'compose' isn't pedantic — it's cognitive precision. Each distinction you can make in language is a distinction you can make in thought.\n\nThe practical impact: when you lack the precise word for a concept, you either use an approximation (which muddles your meaning) or a longer explanation (which costs time and clarity). Over a career, the compound effect of word-level precision on communication effectiveness is enormous.\n\nThe fix is simple but requires consistency: read widely across domains, look up unfamiliar words in context rather than skipping them, and practice using new vocabulary in your own writing and speech. Aim for one new precise term per week — not obscure words, but specific words that replace vague ones in your existing vocabulary.",
          premiumHook: "Access the vocabulary building protocol designed for professionals who want precision without pretension.",
        },
      ],

      workplaceImplications: "Your verbal reasoning supports solid performance in most professional contexts. You can handle standard business communication, follow meeting discussions, and produce functional written output. Where you may notice the limits: roles that require rapid analysis of complex written material (legal review, policy analysis, academic research), situations that demand persuasive argumentation on the fly (high-stakes negotiations, board presentations), and tasks that involve synthesising large volumes of text into actionable insights. These aren't barriers — they're areas where deliberate practice will yield the highest professional return.",

      learningStyle: "You learn effectively through reading and discussion, but benefit from re-reading complex material and taking notes to reinforce retention. Summarising key points in your own words helps you move from passive recognition to active understanding. You may find that combining verbal study with visual aids — diagrams, timelines, concept maps — creates more durable learning than text alone. Audiobooks and podcasts are effective when the speaking pace matches your processing speed; you may prefer to listen at normal speed rather than accelerated.",

      emotionalPattern: "You can talk about your emotions in general terms and have a reasonable vocabulary for feelings. Where the verbal-emotional connection may be thinner: distinguishing between closely related emotions (frustration vs. disappointment vs. resentment) and articulating the nuances of complex emotional states. Building a more precise emotional vocabulary — literally learning more words for feelings — can directly improve your emotional regulation by giving you finer-grained tools for understanding your inner life.",

      enhancementTriggers: [
        "Reading for 30 minutes daily in material slightly above your current comfort level — the cognitive stretch zone where new vocabulary and argument structures are encountered",
        "Engaging in conversations with people who are more verbally precise than you — the modelling effect is one of the strongest drivers of verbal development",
        "Word games, crossword puzzles, and vocabulary apps that make verbal processing practice enjoyable and consistent",
      ],
      depletionTriggers: [
        "Extended periods of only consuming simple media — social media, short-form content — without engaging with longer-form, more complex material",
        "Avoiding reading because it feels effortful — the effort is the signal that your verbal system is training, not a sign that you should stop",
        "Chronic stress and anxiety, which consume working memory resources that your verbal reasoning needs for complex processing",
      ],

      toolkit: [
        {
          title: "The Active Reading Protocol",
          context: "Reading passively — letting words wash over you — is the default mode for moderate verbal processors. Active reading forces deeper engagement.",
          action: "When reading anything that matters (reports, articles, books), stop at the end of each section and write a one-sentence summary. Then ask: 'What is the author's main claim? What evidence supports it? What's missing?' This forces your verbal system into analytical mode rather than absorption mode. Start with one article per day.",
        },
        {
          title: "The Vocabulary Journal",
          context: "Expanding your precise vocabulary is the single highest-return investment for verbal reasoning improvement.",
          action: "Keep a running note on your phone. When you encounter a word you sort of know but couldn't define precisely, add it with the sentence you found it in. Look up the exact definition and write a sentence of your own using it. Review the list weekly. Aim for 3-5 new precise words per week — not obscure words, but specific ones that replace vague language in your existing vocabulary.",
        },
        {
          title: "The Argument Map",
          context: "Complex arguments are easier to evaluate when you can see their structure rather than just hearing their flow.",
          action: "Once a week, take an opinion piece or business proposal and map its argument: write down the conclusion, then each premise that supports it, then the evidence for each premise. Identify which connections are strong and which are assumed. This externalises the logical structure that your working memory is trying to hold internally, making flaws visible.",
        },
      ],
    },

    developing: {
      overview: `Your verbal reasoning score suggests that language-based problem-solving is an area where you have significant room for growth. This doesn't mean you can't communicate or think clearly — it means that the specific cognitive operations measured by verbal reasoning tasks (analogies, logical inferences, vocabulary precision, and abstract language manipulation) are not currently your strongest cognitive channel. Many highly successful people route their intelligence through other channels — spatial, numerical, kinesthetic, interpersonal — and use verbal skills as a supporting function rather than a primary one.

What this score reflects is the current state of your verbal processing infrastructure, not a fixed capacity. Verbal reasoning is one of the most responsive cognitive domains to deliberate practice because it draws heavily on crystallised intelligence — knowledge that accumulates throughout life. Every year of additional reading, every new domain you explore, and every complex conversation you engage in strengthens the neural pathways that support verbal reasoning. The trajectory matters more than the snapshot.

The practical implication is that you may find some professional contexts more effortful than people with stronger verbal processing: dense written material takes longer, multi-step arguments require more careful tracking, and expressing complex ideas may require more preparation. These aren't limitations to accept — they're specific skills to develop. The people who improve most in verbal reasoning are the ones who combine consistent reading with active engagement: not just consuming words but playing with them, questioning them, and using them deliberately.`,

      strengths: [
        {
          title: "Non-Verbal Intelligence Channels",
          description: "People who score lower on verbal reasoning often have stronger compensating abilities in spatial, numerical, or social intelligence. Your brain routes cognitive work through different pathways, which gives you access to insights that verbal-dominant thinkers may miss.",
          deepDive: "The human brain has multiple intelligence channels that can substitute for each other. When verbal processing isn't the primary pathway, other systems often compensate: you might think in images rather than words, feel the rightness of a solution before you can articulate it, or understand mechanical and spatial relationships intuitively. These non-verbal intelligence channels are genuinely valuable — many breakthroughs in engineering, design, and practical problem-solving come from people who think spatially or kinesthetically rather than verbally. Your growth isn't about replacing these strengths with verbal ability — it's about adding verbal skills as a complementary tool.",
        },
        {
          title: "Directness",
          description: "People with less verbal complexity often communicate more directly. While others are constructing elaborate sentences, you tend to get to the point. In many professional contexts, clarity and brevity are more valued than verbal sophistication.",
        },
        {
          title: "Learning Resilience",
          description: "When verbal material requires more effort, you develop persistence and alternative strategies — re-reading, asking questions, seeking examples — that build robust understanding rather than shallow comprehension.",
        },
      ],

      growthEdges: [
        {
          title: "Reading Avoidance",
          teaser: "Because reading requires more effort, you may avoid it — but avoidance prevents the practice that would make it easier. Breaking this cycle is the single most important thing you can do for your verbal development.",
          fullExplanation: "Verbal reasoning improves with exposure. Every page you read is training data for your language processing system. But when reading feels effortful — when you lose track of complex sentences, miss the point of analogies, or have to re-read paragraphs — the natural response is to avoid it. This creates a negative spiral: less reading leads to slower verbal development, which makes reading feel harder, which increases avoidance.\n\nThe fix isn't to force yourself through dense academic texts. It's to find the reading level where you're challenged but not overwhelmed — material that introduces a few new words per page and arguments that require attention but not decoding. Start with narrative non-fiction, quality journalism, or well-written popular science. Read for 15 minutes daily, no more, and build gradually. The compound effect of daily reading on verbal reasoning is one of the most consistently demonstrated findings in cognitive science.\n\nThe specific mechanism: reading builds vocabulary through context exposure (far more effective than flashcards), strengthens syntax processing through pattern recognition, and develops argument-tracking through extended engagement with complex ideas. All of these gains are cumulative and permanent.",
          premiumHook: "Get the personalised reading programme that builds verbal reasoning progressively from your current level.",
        },
        {
          title: "Expression Under Pressure",
          teaser: "When you need to explain something complex or argue a position on the spot, the verbal processing bottleneck may cause you to simplify, hesitate, or default to less precise language.",
          fullExplanation: "Verbal reasoning under time pressure requires fast retrieval of vocabulary, rapid sentence construction, and real-time logical sequencing. When these processes aren't well-automated, they compete for working memory resources, which creates the experience of 'going blank' or knowing what you mean but not being able to say it fluently.\n\nThis shows up most painfully in high-stakes situations: job interviews, presentations, difficult conversations, and debates. The pressure increases cognitive load, which further reduces the resources available for verbal processing. The result is that your spoken performance significantly understates your actual knowledge and intelligence.\n\nTwo strategies help: first, prepare verbal frameworks in advance for situations you can anticipate (meetings, presentations, interviews). Having a pre-built structure frees working memory for content. Second, practice articulating ideas aloud — literally talk through your thinking in the car, in the shower, during walks. This builds the verbal fluency pathways that convert thoughts into words without conscious effort.",
          premiumHook: "Access the verbal fluency training programme designed for people who know more than they can currently express.",
        },
      ],

      workplaceImplications: "In the workplace, your verbal reasoning means you may need more time with written material, benefit from visual presentations over written reports, and perform better when you can prepare your communications in advance rather than improvising them. This is not a career limitation — it's a workflow preference. Many high-performing professionals compensate by leaning on other strengths: spatial thinkers excel in design, engineering, and architecture; numerical thinkers thrive in finance and data science; interpersonal thinkers succeed in sales, management, and client relations. The key is to structure your work to leverage your primary cognitive strengths while building your verbal skills as a supporting capacity.",

      learningStyle: "You learn best through hands-on experience, visual demonstrations, and guided practice rather than independent reading. Multimedia content — videos with visual aids, interactive exercises, worked examples — is more efficient for you than text-heavy material. When you do need to learn from text, pair it with another modality: read a section, then draw what you understood, then explain it aloud to someone (or to yourself). This multi-channel approach compensates for the verbal processing bottleneck by distributing the learning load across multiple cognitive systems.",

      emotionalPattern: "You may find it difficult to articulate complex emotional states, which can create frustration when you know what you feel but can't express it in a way that others understand. This verbal gap doesn't mean your emotional experience is less rich — it means the bridge between feeling and language is narrower. Building emotional vocabulary through therapy, journaling, or structured reflection exercises can directly improve your ability to communicate your inner life and get your needs met in relationships.",

      enhancementTriggers: [
        "Daily reading at an accessible level — start with material you enjoy, even if it's not 'intellectually demanding,' and gradually increase complexity",
        "Audiobooks and podcasts that expose you to articulate speech patterns and complex ideas in a format that bypasses the reading bottleneck",
        "Conversations with patient, articulate people who expand your vocabulary through natural modelling rather than correction",
      ],
      depletionTriggers: [
        "Environments that judge intelligence by verbal fluency, which creates performance anxiety that further impairs verbal processing",
        "Exclusively consuming short-form, simple media that provides no stretch for the verbal system",
        "Social comparison with verbally dominant people, which can create discouragement and avoidance of the practice that would close the gap",
      ],

      toolkit: [
        {
          title: "The 15-Minute Reading Habit",
          context: "Verbal reasoning improves through consistent exposure to written language. The key is daily consistency, not marathon sessions.",
          action: "Set a timer for 15 minutes and read something — anything — that interests you and is slightly above your comfort level. A well-written article, a popular science book, a narrative non-fiction work. When you encounter a word you don't know, note it and look it up after the timer ends. Do not skip days. The compound effect of daily reading on verbal processing is dramatic over 3-6 months.",
        },
        {
          title: "The Talk-Through Practice",
          context: "Verbal fluency improves when you practice converting thoughts into spoken words. Many people with developing verbal skills know more than they can express.",
          action: "Once a day, pick a topic you know well and explain it aloud for 2 minutes — to yourself, in the car, during a walk. Don't prepare. Just talk. You'll notice pauses and repetitions at first. Over time, the gap between your knowledge and your verbal expression will close. This is the same mechanism that makes teaching the most effective learning strategy.",
        },
        {
          title: "The Visual Bridge",
          context: "When verbal processing is effortful, visual tools can carry part of the cognitive load and make complex ideas more accessible.",
          action: "When you need to understand something complex — a business process, an argument, a plan — draw it before you write about it. Boxes, arrows, circles, and connections. The visual structure makes the verbal expression easier because you can see the relationships rather than trying to hold them in verbal working memory. Use this as your default starting point for any complex task.",
        },
      ],
    },
  },
};
