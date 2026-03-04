import type { IQDimensionContent } from "../types";

export const PATTERN: IQDimensionContent = {
  id: "pattern",
  label: "Pattern Recognition",
  shortLabel: "Pattern",
  color: "#328181",

  levels: {
    strong: {
      overview: `Your pattern recognition sits in the top tier of cognitive performance. You identify logical rules, sequences, and abstract relationships almost automatically — spotting the underlying structure in data, systems, and problems that others see as noise. When you encounter new information, you're not just processing it; you're extracting the organising principles that make it coherent. This is the cognitive machinery behind systems thinking, debugging, strategic planning, scientific reasoning, and the ability to predict outcomes from incomplete data.

What makes this result distinctive isn't raw speed — it's the depth and accuracy of your rule extraction. You generalise from examples to new cases with high fidelity, recognising when a pattern holds and when it breaks. You see the invariant structure beneath surface variation: the same logical form in a mathematical sequence, a market trend, and a social dynamic. This capacity is often considered the purest measure of fluid intelligence — the ability to reason about novel problems without relying on prior knowledge.

The shadow side of exceptional pattern recognition is pattern over-fitting: the tendency to see structure where none exists. Your brain is so good at finding patterns that it may impose them on randomness, detect causal relationships in coincidence, or extrapolate rules beyond their valid domain. The highest form of pattern intelligence is knowing when to stop — when the data doesn't support the structure you're tempted to impose.`,

      strengths: [
        {
          title: "Rapid Rule Extraction",
          description: "You identify the logical rules governing sequences, systems, and data structures significantly faster than average. What others discover through trial and error, you often see in a single pass.",
          deepDive: "Rule extraction is the core operation of pattern recognition: given a set of examples, infer the underlying principle that generates them. Your brain performs this operation with unusual efficiency — you notice that the sequence 2, 4, 8, 16 follows a doubling rule, that the code error recurs every third iteration, that the market pattern resembles a previous cycle. This isn't magic; it's the result of highly tuned neural circuits that compare incoming data against stored templates and rapidly converge on the best-fitting rule. The practical consequence: you debug faster, learn new systems quicker, and anticipate outcomes more accurately than most people.",
        },
        {
          title: "Abstract Relationship Mapping",
          description: "You see structural similarities across domains that share no surface features. A problem in logistics maps onto a problem in software; a pattern in biology illuminates a pattern in economics.",
          deepDive: "The ability to recognise that A relates to B in the same way that C relates to D — across entirely different domains — is one of the hallmarks of fluid intelligence. You don't need to learn each domain from scratch; you transfer the abstract structure. This is how breakthrough insights happen: someone notices that the spread of ideas follows the same mathematical form as the spread of disease, or that organisational dysfunction mirrors thermodynamic entropy. Your pattern recognition gives you this cross-domain transfer capacity, making you unusually effective at applying solutions from one field to problems in another.",
        },
        {
          title: "Systems Thinking",
          description: "You naturally perceive how components interact within larger structures. Cause and effect, feedback loops, and emergent properties are visible to you where others see isolated events.",
        },
        {
          title: "Prediction from Incomplete Data",
          description: "You can extrapolate likely outcomes from partial information. This supports strategic planning, risk assessment, and the ability to make reasonable decisions under uncertainty.",
        },
      ],

      growthEdges: [
        {
          title: "Pattern Over-Fitting",
          teaser: "Your exceptional pattern-finding ability can lead you to see structure in randomness — imposing rules on noise, detecting causation in coincidence, or extrapolating beyond valid domains.",
          fullExplanation: "The human brain is a pattern-seeking machine, and yours is exceptionally good at it. But the same machinery that finds genuine structure can also manufacture it. When you're presented with random data, you may perceive sequences. When two events co-occur, you may infer causation. When a rule holds in 10 cases, you may assume it holds in the 11th — even when the domain has shifted.\n\nThis shows up in professional contexts as overconfidence in models, premature conclusions from limited data, and the tendency to fit new information into existing frameworks rather than questioning the framework itself. The antidote isn't to stop pattern-seeking — it's to add a verification step. Ask: 'What would disprove this pattern? What alternative structures could explain the same data?' The strongest pattern recognisers are those who can also recognise when the data doesn't support the structure they're tempted to impose.\n\nThe practice: when you've identified a pattern, explicitly list one counter-example or boundary condition before acting on it. This simple discipline prevents the most costly form of pattern over-fitting.",
          premiumHook: "Get the pattern-validation protocol that prevents over-fitting while preserving your exceptional rule-extraction ability.",
        },
        {
          title: "The Certainty Trap",
          teaser: "When patterns come easily, you may experience them as obvious truths rather than hypotheses. This can make you impatient with people who don't see what you see.",
          fullExplanation: "Pattern recognition at your level feels effortless. The rule emerges, the structure clarifies, the prediction follows — and it all happens so quickly that it feels like perception rather than inference. The risk: you may treat your pattern-based conclusions as self-evident and become frustrated when others require explanation, evidence, or time to reach the same view.\n\nIn collaborative contexts, this creates communication friction. Your colleagues aren't slow — they're processing. Your clients aren't resistant — they need to see the steps. The pattern that took you 30 seconds to extract may take others 30 minutes to verify and internalise.\n\nThe fix: build the habit of making your pattern-extraction process explicit. When you've identified a rule or structure, articulate the evidence that supports it and the steps that led you there. This serves two purposes: it helps others catch up, and it forces you to verify that your pattern is robust rather than merely compelling.",
          premiumHook: "Learn the pattern-articulation framework that bridges the gap between your rapid insight and others' need for visible reasoning.",
        },
      ],

      workplaceImplications: "Strong pattern recognition makes you exceptionally effective in roles that involve systems analysis, strategy, data science, debugging, research, and any domain where identifying underlying structure drives performance. You're the person who spots the flaw in the logic, anticipates the market shift, or designs the system that scales. Your professional risk is impatience: you process structural information so quickly that meetings feel redundant and explanations feel unnecessary. The highest-leverage use of your pattern intelligence is teaching others to see what you see — not by showing them the answer, but by making your reasoning process visible so they can develop their own pattern recognition.",

      learningStyle: "You learn most efficiently when you can extract the underlying structure first — the rules, the framework, the organising principles — and then fill in the details. Abstract before concrete. You may find traditional step-by-step instruction frustrating when the pattern is obvious to you from the first few examples. Your ideal learning environment exposes you to varied instances of the same structure so you can induce the rule yourself. The growth edge: deliberately slow down to articulate your pattern-extraction process, which both deepens your understanding and makes your knowledge transferable to others.",

      emotionalPattern: "Your pattern recognition extends to emotional and social domains. You may notice recurring dynamics in relationships, predict how people will respond based on past patterns, or identify the underlying structure of your own emotional reactions. The shadow side: you may over-apply pattern-based reasoning to human behaviour, treating people as predictable systems when they're actually capable of genuine novelty. Your emotional growth edge is holding space for the unexpected — for patterns that break, for people who don't fit the model.",

      enhancementTriggers: [
        "Exposure to novel domains with hidden structure — puzzles, new fields, cross-disciplinary problems — that stretch your rule-extraction capacity",
        "Working with incomplete or noisy data where you must distinguish signal from noise and resist the urge to over-fit",
        "Teaching or explaining your pattern-extraction process to others, which forces explicit articulation and deepens your own understanding",
      ],
      depletionTriggers: [
        "Repetitive tasks with no structural novelty — your pattern system thrives on new structure to extract, not routine execution",
        "Information overload without time for integration — pattern recognition requires space to process, not just consume",
        "High stress and sleep deprivation, which impair the working memory and cognitive control needed for accurate rule extraction",
      ],

      toolkit: [
        {
          title: "The Disconfirmation Drill",
          context: "Pattern over-fitting is the main risk at your level. This practice builds the habit of testing patterns before acting on them.",
          action: "Whenever you identify a pattern that matters — in data, behaviour, or systems — write down one specific observation that would disprove it. Then actively look for that observation. If you find it, revise the pattern. If you don't, your confidence is now better justified. Do this for one significant pattern per week.",
        },
        {
          title: "The Articulation Protocol",
          context: "Your pattern extraction happens so fast it can feel like perception. Making it explicit improves both verification and communication.",
          action: "When you've identified a rule or structure that you'll use to make a decision, write out the evidence in three bullet points: what data supports this pattern, what the inferred rule is, and what boundary conditions might limit it. Share this with one colleague before acting. The act of articulation will catch over-fitting and help others follow your reasoning.",
        },
        {
          title: "The Novel Domain Stretch",
          context: "Pattern recognition stays sharp when exposed to new structural domains. Familiar domains can become automatic and stop providing growth.",
          action: "Once a month, engage with a domain that has hidden structure but is outside your expertise: a new type of puzzle, a different field's methodology, or a complex system you've never studied. Spend 2-3 hours extracting the rules. The goal isn't mastery — it's keeping your pattern-extraction machinery tuned on novel structure.",
        },
      ],
    },

    moderate: {
      overview: `Your pattern recognition is solidly functional — you identify logical rules, sequences, and abstract relationships in familiar domains with reliability. You can spot structure in data, generalise from examples to new cases, and reason about underlying principles when the context is clear. What distinguishes moderate from strong performance is the speed and scope: you may need more examples to extract a rule, work more comfortably in domains you know, and find novel or highly abstract patterns more effortful.

This is not a deficit. The majority of adults operate at this level, and it supports successful performance in most professional contexts. You can debug code when the error pattern is recognisable, analyse data when the structure is familiar, and plan strategically when the variables are known. The growth opportunity lies in the transition from familiar to novel domains — in building the capacity to extract rules from fewer examples and to transfer structural insights across fields.

The good news is that pattern recognition is trainable. Unlike some aspects of fluid intelligence that peak early, the ability to identify logical structure improves with deliberate exposure to varied examples. Every new domain you learn, every puzzle you solve, and every system you analyse adds to the neural infrastructure that supports pattern extraction.`,

      strengths: [
        {
          title: "Reliable Pattern Detection in Familiar Domains",
          description: "In areas you know well — your field, your tools, your data — you accurately identify rules, sequences, and underlying structure. Your pattern recognition is trustworthy when the domain is familiar.",
          deepDive: "Pattern recognition isn't a single skill; it's the interaction between general rule-extraction capacity and domain-specific knowledge. Your moderate score reflects strong performance when these align. In your professional domain, you've built a library of structural templates that you can match against new data. You know what a typical bug pattern looks like, what a normal market cycle resembles, what the structure of a good argument is. This domain-specific pattern library is genuinely valuable — it's how expertise develops. The growth edge is expanding the domains where you can extract structure with similar reliability.",
        },
        {
          title: "Systematic Problem-Solving",
          description: "You approach complex problems by breaking them into components and looking for recurring elements. This methodical pattern-seeking supports consistent results.",
        },
        {
          title: "Generalisation from Examples",
          description: "Given sufficient examples, you can identify the rule and apply it to new cases. You may need more instances than strong pattern recognisers, but your extraction is accurate when you have enough data.",
        },
      ],

      growthEdges: [
        {
          title: "Novel Domain Transfer",
          teaser: "When you encounter structure in unfamiliar domains — a new field, a different type of data, an abstract problem — your pattern extraction works harder and may require more examples to converge on the rule.",
          fullExplanation: "The gap between moderate and strong pattern recognition shows up most clearly when the structure is novel. In familiar domains, your accumulated templates guide you. In new domains, you're building the template from scratch — and that requires more examples, more processing time, and more tolerance for uncertainty.\n\nIn practical terms: you may struggle to see the pattern in a type of data you've never worked with, take longer to debug unfamiliar systems, or find it harder to transfer insights from one field to another. This isn't a fixed limitation — it's a specific skill that improves with deliberate practice.\n\nThe growth strategy: systematically expose yourself to novel structural domains. Work through puzzles from fields you don't know. Analyse data types outside your expertise. When you encounter a pattern in your domain, ask: 'What's the abstract structure here, and where else might it appear?' This cross-domain practice strengthens the general rule-extraction capacity that supports pattern recognition in novel contexts.",
          premiumHook: "Get the progressive training programme for strengthening pattern transfer across novel domains.",
        },
        {
          title: "Rule Extraction Speed",
          teaser: "You may need more examples or more time to identify the underlying rule than strong pattern recognisers. In fast-moving contexts, this can create a timing disadvantage.",
          fullExplanation: "Pattern recognition has a speed dimension: how many examples do you need before the rule emerges? How long does it take to extract the structure? At the moderate level, you get there — but you may need five examples where others need two, or 20 minutes where others need five.\n\nIn professional contexts with time pressure — rapid debugging, live trading, real-time strategy — this speed gap can matter. The solution isn't to rush (rushing leads to wrong patterns) but to build efficiency through practice. The same structural domains you've already mastered can be processed faster with repetition. And for novel domains, the strategy is different: buy time by asking for more examples, breaking the problem into smaller chunks, or collaborating with someone who can help you see the structure.\n\nThe key insight: accuracy matters more than speed. A correct pattern identified in 20 minutes beats a wrong pattern identified in 2. Your growth is about gradually reducing the examples and time needed while maintaining accuracy.",
          premiumHook: "Access the rule-extraction efficiency protocol designed for professionals who want to close the speed gap without sacrificing accuracy.",
        },
      ],

      workplaceImplications: "Your pattern recognition supports solid performance in most professional contexts. You can analyse data, debug systems, and plan strategically when the domain is familiar and the structure is recognisable. Where you may notice the limits: highly novel problems, cross-domain transfer, and situations requiring rapid rule extraction from minimal data. These aren't barriers — they're areas where deliberate practice yields the highest return. Structure your work to leverage your reliable pattern detection in familiar domains while gradually expanding into novel contexts.",

      learningStyle: "You learn effectively when you have sufficient examples to extract the rule — multiple instances of the same structure that allow you to induce the underlying principle. You may find that the first few examples feel confusing and then something clicks once you've seen enough. Visual aids, worked examples, and step-by-step breakdowns help you build the structural templates that support pattern recognition. Your ideal learning pace allows time for pattern extraction rather than rushing through material.",

      emotionalPattern: "You can recognise recurring emotional patterns in yourself and others when you've seen them before. New or complex emotional dynamics may take longer to decode. Building a vocabulary of emotional patterns — through reflection, therapy, or structured observation — can improve both self-awareness and interpersonal effectiveness. Your pattern recognition in emotional domains benefits from the same principle as in cognitive domains: more examples lead to better rule extraction.",

      enhancementTriggers: [
        "Deliberate exposure to novel structural domains — puzzles, new fields, different data types — that stretch your rule-extraction capacity beyond familiar templates",
        "Working with varied examples of the same underlying structure to build faster, more efficient pattern extraction",
        "Collaborating with people who see patterns quickly in domains you're learning — the modelling effect accelerates your own extraction",
      ],
      depletionTriggers: [
        "Rushing through problems before you have enough examples to extract the rule — pattern recognition needs processing time",
        "Staying exclusively in familiar domains — your pattern system needs novelty to grow",
        "Information overload without time for integration — structure emerges from reflection, not just consumption",
      ],

      toolkit: [
        {
          title: "The Example Collection Protocol",
          context: "Pattern extraction improves with more examples. This practice ensures you gather enough before drawing conclusions.",
          action: "When facing a novel problem or unfamiliar structure, explicitly collect 5-7 examples before attempting to identify the rule. Write down what's consistent across them and what varies. Only then formulate your hypothesis about the underlying structure. This discipline prevents premature conclusions and builds your efficiency at rule extraction over time.",
        },
        {
          title: "The Cross-Domain Transfer Drill",
          context: "Pattern transfer to novel domains is your highest-leverage growth area.",
          action: "Once a week, take a pattern you've identified in your professional domain and ask: 'What is the abstract structure here? Where else might this structure appear?' Find one example in an unrelated field — nature, art, another industry. Document the mapping. This practice strengthens the general rule-extraction capacity that supports pattern recognition in novel contexts.",
        },
        {
          title: "The Structure Journal",
          context: "Building a library of structural templates accelerates future pattern recognition.",
          action: "When you successfully identify a rule or pattern — in data, systems, or behaviour — write a brief entry: the pattern, the evidence, and one sentence capturing the abstract structure. Review the journal monthly. Over time, you'll build a personal library of structural templates that makes future pattern extraction faster and more reliable.",
        },
      ],
    },

    developing: {
      overview: `Your pattern recognition score suggests that identifying logical rules, sequences, and abstract relationships is an area where you have significant room for growth. This doesn't mean you can't think logically or solve problems — it means that the specific cognitive operations measured by pattern recognition tasks (rule extraction, structure identification, generalisation from examples) are not currently your strongest cognitive channel. Many highly successful people route their intelligence through other channels — verbal, interpersonal, kinesthetic, experiential — and use pattern recognition as a supporting function rather than a primary one.

What this score reflects is the current state of your pattern-extraction infrastructure, not a fixed capacity. Pattern recognition is trainable through systematic exposure: the brain learns to identify structure by encountering varied examples and extracting the rules that govern them. Every puzzle you solve, every system you analyse, and every domain where you deliberately look for structure strengthens the neural pathways that support pattern recognition. The trajectory matters more than the snapshot.

It's important to acknowledge that pattern recognition is often considered the purest measure of fluid intelligence — but that framing can feel like a verdict. The reality is more nuanced. You may have strong concrete intelligence: the ability to learn from direct experience, to navigate practical situations, to read people and contexts. You may think in stories rather than structures, in relationships rather than rules. These are genuine forms of intelligence. The development opportunity is adding pattern-based reasoning as a complementary tool, not replacing what already works for you.`,

      strengths: [
        {
          title: "Concrete and Experiential Intelligence",
          description: "People who score lower on pattern recognition often have stronger compensating abilities in learning from direct experience, reading practical situations, and navigating real-world contexts. Your intelligence may route through concrete rather than abstract channels.",
          deepDive: "Intelligence isn't a single dimension. The ability to extract abstract rules from examples is one pathway; the ability to learn from direct experience, to read situations intuitively, and to apply knowledge in context is another. Many people with developing pattern recognition excel at the latter. You may learn best by doing rather than by analysing structure. You may have strong interpersonal intuition, practical problem-solving, or the ability to thrive in ambiguous real-world contexts. These capacities are valuable and often underweighted in formal assessments. Your growth isn't about replacing concrete intelligence with abstract pattern recognition — it's about adding pattern-based tools to your existing strengths.",
        },
        {
          title: "Persistence with Unfamiliar Structure",
          description: "When pattern extraction requires more effort, you develop the persistence to work through confusion. This builds robust understanding when you eventually grasp the rule.",
        },
        {
          title: "Alternative Problem-Solving Strategies",
          description: "You may compensate for slower pattern extraction with trial-and-error, asking for examples, or breaking problems into smaller, more manageable pieces. These strategies are valid and often lead to the same destination.",
        },
      ],

      growthEdges: [
        {
          title: "Systematic Exposure to Structure",
          teaser: "Pattern recognition improves through deliberate exposure to varied examples. The key is finding accessible entry points — structure that's challenging but not overwhelming.",
          fullExplanation: "The brain learns pattern recognition the same way it learns anything: through repeated exposure with feedback. When you encounter multiple examples of the same underlying structure, your neural circuits gradually extract the rule. The challenge for people with developing pattern recognition is that the standard entry points — abstract puzzles, mathematical sequences, formal logic — may feel inaccessible or demotivating.\n\nThe solution is to find structure in domains that interest you. If you're drawn to music, look for patterns in rhythm and harmony. If you're drawn to sports, analyse the structure of plays and strategies. If you're drawn to people, look for recurring dynamics in relationships and groups. The same rule-extraction machinery works across domains — you're building the capacity, not the content.\n\nStart with structure that has clear, concrete examples. Work through puzzles with solutions so you can check your pattern extraction. Use visual aids and worked examples. The compound effect of regular exposure to structure — even 15-20 minutes daily — is one of the most consistently demonstrated findings in cognitive training research.",
          premiumHook: "Get the personalised pattern-training programme with accessible entry points matched to your interests.",
        },
        {
          title: "The Abstraction Gap",
          teaser: "Moving from concrete examples to abstract rules can feel like a leap. Building a bridge between specific instances and general principles is a learnable skill.",
          fullExplanation: "Pattern recognition requires abstraction: seeing that these five specific examples share an underlying structure that can be stated as a general rule. For people who think concretely, this abstraction step can feel unnatural. You understand each example on its own terms but struggle to articulate what they have in common.\n\nThe bridge-building strategy: work backwards from the rule to the examples. When you're given a rule (e.g., 'each number is double the previous one'), generate your own examples. Then do the reverse — given examples, try to state the rule in one sentence. This bidirectional practice strengthens the connection between concrete and abstract.\n\nAnother approach: use analogies. 'This pattern is like...' forces you to find the structural similarity. The analogy doesn't have to be perfect — the act of looking for it trains the abstraction machinery. Over time, the gap between examples and rules narrows.",
          premiumHook: "Access the abstraction-bridge exercises designed for concrete thinkers who want to strengthen pattern extraction.",
        },
      ],

      workplaceImplications: "In the workplace, your pattern recognition means you may need more examples to grasp new systems, benefit from explicit explanation of underlying structure, and perform better when you can learn through hands-on experience rather than abstract analysis. This is not a career limitation — it's a learning preference. Many high-performing professionals excel through concrete intelligence: they learn by doing, read situations intuitively, and build expertise through experience rather than pattern extraction. The key is to structure your work to leverage your strengths while gradually building pattern recognition through systematic exposure to structure in domains that matter to you.",

      learningStyle: "You learn best through concrete examples, hands-on practice, and explicit explanation of underlying structure. Abstract-first instruction — rules before examples — is often less effective for you. Your ideal learning sequence: see multiple specific instances, then have the general principle pointed out, then practice applying it to new cases. Visual aids, worked examples, and learning by doing all support your pattern extraction. When you encounter structure, don't rush — give yourself permission to need more examples. The goal is accurate rule extraction, not speed.",

      emotionalPattern: "You may find it easier to understand emotional dynamics through specific situations and stories rather than abstract patterns. 'This is like when...' may work better than 'the underlying structure is...' Building emotional awareness through concrete reflection — specific moments, particular relationships — can gradually develop your capacity to recognise recurring emotional patterns. The bridge between concrete experience and abstract pattern is the same in emotional and cognitive domains: more examples, explicit connection-making, and patience with the learning process.",

      enhancementTriggers: [
        "Daily exposure to structure in accessible domains — puzzles, patterns in music or nature, simple sequences — that provide practice without overwhelming",
        "Learning with explicit rule explanation alongside examples — having the structure pointed out helps build the abstraction bridge",
        "Domains you care about — pattern recognition develops fastest when the structure matters to you",
      ],
      depletionTriggers: [
        "Environments that judge intelligence by abstract pattern speed, which creates performance anxiety that further impairs extraction",
        "Instruction that presents rules without sufficient concrete examples — you need the examples to build understanding",
        "Avoiding structure because it feels effortful — the effort is the signal that your pattern system is training",
      ],

      toolkit: [
        {
          title: "The Example-First Protocol",
          context: "Pattern extraction works best when you have enough concrete examples before the abstract rule. This practice structures your learning accordingly.",
          action: "When learning something new — a system, a process, a type of problem — insist on seeing at least 5 concrete examples before anyone explains the rule. Study the examples. Notice what's similar and what changes. Try to guess the rule. Only then read or hear the formal explanation. This sequence builds your pattern-extraction capacity by giving your brain raw material to work with.",
        },
        {
          title: "The Structure Hunt",
          context: "Pattern recognition improves through deliberate practice. The key is finding structure in domains you enjoy.",
          action: "Once a day, spend 10 minutes looking for structure in something you care about. Music: what's the pattern in the rhythm? Sports: what's the structure of the play? Nature: what rule governs the arrangement? Work: what's consistent across these three similar situations? Write down one pattern you notice. The domain doesn't matter — the act of looking for structure trains the machinery.",
        },
        {
          title: "The Rule-and-Example Swap",
          context: "Building the bridge between concrete and abstract strengthens pattern recognition in both directions.",
          action: "When you encounter a rule or pattern (from a colleague, a book, a course), generate 3 of your own examples that fit it. Then take 3 concrete situations from your life and try to state the underlying rule in one sentence. This bidirectional practice — rule to examples, examples to rule — develops the abstraction capacity that supports pattern recognition.",
        },
      ],
    },
  },
};
