import type { IQDimensionContent } from "../types";

export const NUMERICAL: IQDimensionContent = {
  id: "numerical",
  label: "Numerical Reasoning",
  shortLabel: "Numerical",
  color: "#C7A356",

  levels: {
    strong: {
      overview: `Your numerical reasoning sits in the top tier of cognitive performance. You process quantitative information not just for surface values but for the relationships beneath them — proportions, sequences, rates of change, and the structural logic of numbers. When you encounter data, you don't just read the figures; you sense whether they cohere, spot anomalies almost automatically, and hold multiple numerical relationships in working memory simultaneously. This is the cognitive machinery behind resource allocation, risk assessment, financial literacy, and scientific thinking.

What makes this result distinctive isn't arithmetic speed, though yours is likely above average. It's the fluency with which you manipulate quantitative concepts — seeing that a 15% increase followed by a 15% decrease doesn't return you to the starting point, recognising that a graph's slope matters more than its absolute values, or detecting that a statistical claim rests on a flawed comparison. These operations involve both procedural fluency (the mechanics of calculation) and conceptual understanding (what the numbers actually mean in context).

In practical terms, you absorb numerical material quickly, estimate with accuracy, and detect quantitative errors in other people's reasoning almost automatically. You're the person who spots the budget inconsistency, catches the misleading percentage in a proposal, or notices when a trend line doesn't support the conclusion drawn from it. This capacity is genuinely rare and becomes more valuable with experience as your domain knowledge deepens.`,

      strengths: [
        {
          title: "Quantitative Intuition",
          description: "You have a reliable sense for whether numbers make sense — estimates land close to actual values, proportions feel right or wrong, and you detect numerical patterns without conscious calculation. This intuition accelerates decision-making and catches errors before they propagate.",
          deepDive: "Quantitative intuition isn't the same as being a human calculator. It's the ability to hold a mental model of numerical relationships that lets you sanity-check results, spot outliers, and sense when something is off. When you see a report claiming a 300% increase in a metric, your brain immediately flags whether that's plausible given the context. When someone presents a budget breakdown, you notice if the parts don't sum to the whole. This intuition develops through repeated exposure to quantitative problems — your brain has built a library of patterns that it matches against new inputs. The result is that you can often arrive at correct conclusions faster than someone who relies on explicit calculation.",
        },
        {
          title: "Proportional and Statistical Thinking",
          description: "You understand that relationships between numbers matter more than absolute values. You grasp rates, ratios, percentages, and the logic of statistical inference — what it means for a result to be significant, what sampling error implies, and when correlation does or doesn't suggest causation.",
          deepDive: "Proportional reasoning is one of the most powerful and underdeveloped cognitive skills. Most people struggle with questions like: if a 10% solution is diluted by adding an equal volume of water, what's the new concentration? You navigate these naturally. Similarly, statistical thinking — understanding that a sample of 30 tells you something different from a sample of 3,000, or that p-values measure something specific about probability — separates informed decision-making from data theatre. Your facility here means you can evaluate claims that others accept or reject on gut feeling alone.",
        },
        {
          title: "Mental Arithmetic and Estimation",
          description: "You can perform calculations in your head with sufficient accuracy for most real-world decisions. When exact precision isn't required, you estimate quickly and reliably, which keeps you from getting stuck in analysis paralysis.",
        },
        {
          title: "Pattern Detection in Sequences and Data",
          description: "You spot numerical patterns — in sequences, time series, and structured data — that others miss. This supports forecasting, anomaly detection, and the ability to anticipate what comes next in a quantitative context.",
        },
      ],

      growthEdges: [
        {
          title: "Over-Quantifying the Qualitative",
          teaser: "Your numerical fluency can make you over-rely on metrics, potentially undervaluing information that resists quantification — nuance, context, human judgment, and the things that matter but don't measure well.",
          fullExplanation: "When you're good with numbers, everything starts looking quantifiable. You want to score the candidate, rank the options, and optimise the process. This is often valuable — but some of the most important decisions in life and work resist clean quantification. Trust, culture fit, creative potential, and long-term relationship quality don't reduce neatly to numbers.\n\nThe specific risk in professional settings: you may over-weight measurable outcomes and under-weight qualitative signals. A team member whose metrics are mediocre but whose judgment you've learned to trust may be more valuable than the numbers suggest. A strategy that looks suboptimal on a spreadsheet may be right for reasons the spreadsheet can't capture.\n\nThe practice: develop the discipline of asking 'What am I not measuring?' before making quantitative decisions. Create space for qualitative input — conversations, intuition, narrative — and give it weight even when it can't be graphed.",
          premiumHook: "Get the framework for balancing quantitative rigor with qualitative wisdom in high-stakes decisions.",
        },
        {
          title: "The Certainty Illusion",
          teaser: "Numbers can create a false sense of precision. Your facility with calculation may lead you to present estimates as facts, or to trust quantitative models more than their underlying assumptions warrant.",
          fullExplanation: "Numerical reasoning at a high level can create the illusion that your conclusions are more certain than they are. A forecast with two decimal places implies precision that the underlying data rarely supports. A cost-benefit analysis that produces a clear recommendation may be sensitive to assumptions that are essentially guesses.\n\nIn high-stakes contexts — investment decisions, strategic pivots, resource allocation — this can mean you present quantitative conclusions with more confidence than the uncertainty warrants. The numbers feel solid because you calculated them carefully — but garbage in, garbage out applies regardless of computational fluency.\n\nThe fix: develop the habit of explicitly stating assumptions and confidence intervals. When you present a numerical conclusion, add: 'This assumes X, Y, and Z. If any of those change by more than 10%, the recommendation shifts.' This doesn't weaken your analysis — it strengthens it by making its limits visible.",
          premiumHook: "Learn the uncertainty calibration protocol that prevents numerical fluency from masking genuine uncertainty.",
        },
      ],

      workplaceImplications: "Strong numerical reasoning makes you exceptionally effective in any role that involves data, finance, resource allocation, or quantitative decision-making. Analytics, finance, operations, strategy, and scientific roles all leverage this cognitive strength directly. You're the person who can spot the error in a spreadsheet in seconds, build a mental model of a business's unit economics from a few data points, and evaluate statistical claims in real time during meetings. Your professional risk isn't capability — it's patience. You process numbers so much faster than average that detailed explanations feel redundant, and you may assume others have the same quantitative intuition when they don't.",

      learningStyle: "You learn most efficiently through quantitative examples, worked problems, and data-driven exploration. Abstract concepts click when you see the numbers. You retain information better when you can verify it numerically — running the calculation yourself, checking the math, or building a simple model. Your numerical system acts as a natural verification engine: you test claims against quantitative reality. The growth edge in your learning: deliberately engage with material that resists quantification — philosophy, narrative, qualitative research — to avoid building an excessively number-dependent mental model of complex systems.",

      emotionalPattern: "Your numerical reasoning gives you an unusually structured relationship with uncertainty. You can quantify risk, estimate probabilities, and separate signal from noise in a way that reduces anxiety for many people. The shadow side: you may over-rationalise emotional decisions — converting feelings into cost-benefit analyses so efficiently that the emotional truth gets bypassed. Not every decision should be optimised. Your strongest emotional skill is calibration; your growth edge is allowing qualitative wisdom its full weight.",

      enhancementTriggers: [
        "Working with real data sets — building models, running analyses, and making predictions that you can later verify against outcomes",
        "Engaging with quantitative puzzles and problems that stretch your estimation and pattern-detection skills",
        "Reading and evaluating statistical claims in research, journalism, and business — practicing the skill of spotting flawed reasoning in others' numbers",
      ],
      depletionTriggers: [
        "Extended periods without quantitative engagement — numerical reasoning atrophies without exercise like any cognitive skill",
        "Sleep deprivation and fatigue, which disproportionately impair working memory and the mental manipulation of numerical relationships",
        "High-stress environments that trigger reactive thinking, which shifts cognitive resources away from the deliberate processing that numerical reasoning requires",
      ],

      toolkit: [
        {
          title: "The Assumption Audit",
          context: "Numerical fluency can create false certainty. This practice makes the limits of your quantitative reasoning visible.",
          action: "When you present any numerical conclusion — a forecast, a recommendation, a budget — write down the three assumptions that would most change the result if they were wrong. For each, estimate: how likely is it that this assumption is off by more than 20%? If any are reasonably likely, state that explicitly when you share your conclusion. Do this for one significant quantitative decision per week.",
        },
        {
          title: "The Qualitative Counterweight",
          context: "Strong numerical reasoning can crowd out qualitative judgment. This practice creates space for what doesn't quantify.",
          action: "Before any major decision that you've analysed numerically, spend 10 minutes answering: What would someone who doesn't have these numbers say? What does my gut say that the numbers don't capture? What would I regret if the numbers were right but something else was wrong? Write the answers. Give them weight in your final decision.",
        },
        {
          title: "The Sanity-Check Habit",
          context: "Quantitative intuition is most valuable when it catches errors. The habit of explicit verification prevents overconfidence.",
          action: "Whenever you receive a numerical claim that matters — a report, a proposal, a forecast — spend 2 minutes doing a quick sanity check before accepting it. Does the sum add up? Do the percentages make sense? Is the trend plausible? You'll catch more errors than you expect, and you'll calibrate your intuition against reality.",
        },
      ],
    },

    moderate: {
      overview: `Your numerical reasoning is solidly functional — you handle everyday quantitative tasks without difficulty and can follow moderately complex numerical arguments. Proportions, percentages, and basic statistical concepts are accessible to you, though you may need more processing time on the trickier examples or benefit from writing things down rather than calculating mentally. This is not a deficit. The majority of adults operate at this level, and it supports successful performance in most professional and academic contexts.

What this score reflects is the relationship between fluency and accuracy in numerical tasks. You get most quantitative reasoning problems right given sufficient time and tools, but the most complex ones — multi-step proportional reasoning, statistical inference, mental estimation under pressure — are where the system works harder. This is the zone with the highest return on investment for deliberate practice: small improvements in numerical processing translate directly into better financial literacy, sharper data interpretation, and more confident decision-making in quantitative contexts.

The good news is that numerical reasoning is one of the most trainable cognitive domains. Unlike some aspects of fluid intelligence that peak in early adulthood, numerical ability responds strongly to deliberate practice throughout life. Every budget you review, every data set you analyse, and every quantitative problem you work through strengthens the neural infrastructure that supports numerical reasoning.`,

      strengths: [
        {
          title: "Functional Numeracy",
          description: "You accurately handle the quantitative tasks that arise in most professional and personal contexts. Budgets, percentages, basic statistics, and everyday calculations are within your comfort zone — you get the numbers right when you have time to work through them.",
          deepDive: "Functional numeracy is the workhorse of quantitative life. You don't need exceptional numerical reasoning to succeed in most roles — you need reliable numeracy that doesn't break down under pressure or complexity. Your moderate score means your quantitative processing is trustworthy in the vast majority of situations you'll encounter. Where it may require more effort is in domains with rapid mental estimation, complex proportional reasoning, or statistical concepts that go beyond basic averages and percentages.",
        },
        {
          title: "Solid Foundation",
          description: "You have the conceptual building blocks — understanding of fractions, percentages, and basic relationships — that support further development. This foundation means targeted practice yields high returns.",
        },
        {
          title: "Tool-Assisted Accuracy",
          description: "When you use calculators, spreadsheets, or other tools, you get reliable results. You know when to double-check and you can spot obvious errors. This pragmatic approach is often more effective than relying on mental calculation alone.",
        },
      ],

      growthEdges: [
        {
          title: "Mental Estimation Under Pressure",
          teaser: "When you need to estimate quickly or calculate in your head during a conversation or meeting, your numerical reasoning may not keep pace. This can create hesitation or reliance on others for real-time quantitative input.",
          fullExplanation: "The gap between moderate and strong numerical reasoning shows up most clearly in speed-dependent contexts. When someone asks 'What's 15% of 280?' or 'If we grow 8% annually for five years, where do we end up?' — and they're waiting for an answer — you may need to reach for a calculator or ask for a moment. This isn't about intelligence — it's about the specific cognitive skill of holding and manipulating numerical relationships in working memory without external support.\n\nIn practical terms: you may defer to others in meetings when quick numerical questions arise, feel less confident in negotiations when numbers are discussed on the fly, or avoid situations that require rapid quantitative response.\n\nThe growth strategy: practice estimation daily. Pick numbers you encounter — prices, percentages, quantities — and estimate before calculating. Use the 'round and approximate' method: 15% of 280 is roughly 10% of 300, so about 30. This specific training strengthens the mental pathways that support fluid numerical reasoning.",
          premiumHook: "Get the progressive estimation training programme designed for professionals who want numerical fluency under pressure.",
        },
        {
          title: "Statistical Literacy",
          teaser: "You may accept or reject statistical claims based on intuition rather than understanding. Concepts like sampling error, confidence intervals, and correlation vs. causation can feel opaque, which limits your ability to evaluate data-driven arguments.",
          fullExplanation: "Statistical literacy isn't about doing complex calculations — it's about understanding what numbers can and can't tell you. When someone says 'studies show' or 'the data indicates,' do you know what would make that claim stronger or weaker? Can you spot when a correlation is being presented as causation, or when a sample size is too small to support the conclusion?\n\nThe practical impact: in a world saturated with data-driven arguments, statistical illiteracy leaves you vulnerable to persuasion by numbers — including misleading ones. It also limits your ability to make confident decisions when the evidence is probabilistic rather than certain.\n\nThe fix is accessible: start with one concept at a time. Learn what a confidence interval means. Learn the difference between correlation and causation. Learn why sample size matters. Read one article per week that explains a statistical concept in plain language. The compound effect on your quantitative decision-making is substantial.",
          premiumHook: "Access the statistical literacy programme designed for professionals who want to evaluate data claims with confidence.",
        },
      ],

      workplaceImplications: "Your numerical reasoning supports solid performance in most professional contexts. You can handle budgets, interpret basic reports, and participate in data-informed discussions. Where you may notice the limits: roles that require rapid analysis of complex numerical material (financial modelling, data science, quantitative strategy), situations that demand estimation and calculation on the fly (negotiations, real-time decision-making), and tasks that involve evaluating statistical claims. These aren't barriers — they're areas where deliberate practice will yield the highest professional return.",

      learningStyle: "You learn effectively through worked examples and step-by-step solutions, but benefit from writing calculations down and verifying your work. Building numerical concepts from concrete examples — actual numbers, real scenarios — creates more durable understanding than abstract formulas alone. You may find that combining numerical study with visual aids — graphs, diagrams, number lines — creates stronger retention than numbers in isolation. Practice with estimation and mental math, even when you have a calculator, strengthens the fluency that supports faster processing.",

      emotionalPattern: "You can work with numbers when you have time and tools, but may feel a flicker of anxiety when put on the spot. This isn't a reflection of your capability — it's the gap between your comfortable processing speed and the pace expected in some contexts. Building estimation fluency and statistical literacy reduces this anxiety by giving you more tools to draw on. Your emotional relationship with numbers improves when you see progress, which is why consistent practice matters as much as the practice itself.",

      enhancementTriggers: [
        "Daily estimation practice — pick numbers you encounter and estimate before calculating; start with simple percentages and proportions",
        "Working through quantitative problems with full solutions — understanding the steps builds the mental models that support faster processing",
        "Reading data-rich articles and reports, then practicing articulating what the numbers do and don't show",
      ],
      depletionTriggers: [
        "Avoiding quantitative tasks because they feel effortful — the effort is the signal that your numerical system is training, not a sign that you should delegate",
        "Relying exclusively on tools without ever practicing mental manipulation — calculators strengthen accuracy but not fluency",
        "Environments that create performance anxiety around numbers, which consumes working memory and further impairs processing",
      ],

      toolkit: [
        {
          title: "The Daily Estimation Drill",
          context: "Numerical fluency improves through consistent practice with mental manipulation. Estimation is the highest-leverage skill to develop.",
          action: "Once a day, pick a number you encounter — a price, a percentage, a quantity — and estimate something about it before reaching for a calculator. What's 18% of that? If it increased by 12%, what would it be? Round to friendly numbers and approximate. Verify after. The goal isn't perfection — it's building the neural pathways that support fluid numerical thinking.",
        },
        {
          title: "The One-Concept Protocol",
          context: "Statistical literacy develops one concept at a time. Overwhelming yourself with everything at once leads to avoidance.",
          action: "Each week, learn one statistical concept in plain language. Start with: correlation vs. causation, sample size and representativeness, or what a confidence interval means. Read one article, watch one short video, or have one conversation with someone who can explain it. Write a one-paragraph summary in your own words. In six months, you'll have a working vocabulary for evaluating most data-driven claims.",
        },
        {
          title: "The Verification Habit",
          context: "When numerical tasks feel effortful, the tendency is to do them once and move on. Verification builds accuracy and confidence.",
          action: "For any quantitative task that matters — a budget, a report, a calculation — do it once, then verify. Add the numbers a different way. Check that percentages sum correctly. Spot-check a few figures. This habit catches errors and, over time, builds the internal sense of what 'right' feels like.",
        },
      ],
    },

    developing: {
      overview: `Your numerical reasoning score suggests that quantitative problem-solving is an area where you have significant room for growth. This doesn't mean you can't work with numbers or make sensible decisions — it means that the specific cognitive operations measured by numerical reasoning tasks (proportional reasoning, mental arithmetic, statistical thinking, and pattern detection in quantitative data) are not currently your strongest cognitive channel. Many highly successful people route their intelligence through other channels — verbal, spatial, interpersonal, creative — and use numerical skills as a supporting function rather than a primary one.

What this score reflects is the current state of your numerical processing infrastructure, not a fixed capacity. Numerical reasoning is one of the most responsive cognitive domains to deliberate practice. The brain's number sense can be strengthened at any age through consistent, accessible engagement. Every budget you review, every percentage you calculate, and every data point you interpret adds to the neural pathways that support numerical reasoning. The trajectory matters more than the snapshot.

The practical implication is that you may find some professional contexts more effortful than people with stronger numerical processing: financial discussions take longer to follow, data-heavy reports require more careful parsing, and expressing quantitative ideas may require more preparation. These aren't limitations to accept — they're specific skills to develop. The people who improve most in numerical reasoning are the ones who combine consistent practice with self-compassion: not avoiding numbers out of anxiety, but engaging with them at an accessible level and building from there.`,

      strengths: [
        {
          title: "Non-Numerical Intelligence Channels",
          description: "People who score lower on numerical reasoning often have stronger compensating abilities in verbal, spatial, or interpersonal intelligence. Your brain routes cognitive work through different pathways, which gives you access to insights that number-dominant thinkers may miss.",
          deepDive: "The human brain has multiple intelligence channels that can substitute for each other. When numerical processing isn't the primary pathway, other systems often compensate: you might think in stories rather than statistics, feel the rightness of a decision through relationship dynamics rather than cost-benefit analysis, or understand spatial and visual relationships intuitively. These non-numerical intelligence channels are genuinely valuable — many breakthroughs in leadership, creativity, and human-centred design come from people who think in narrative and relationship rather than numbers. Your growth isn't about replacing these strengths with numerical ability — it's about adding numerical skills as a complementary tool.",
        },
        {
          title: "Qualitative Judgment",
          description: "You may have a strong sense for what feels right in situations where numbers don't tell the full story. Human factors, context, and narrative often matter more than the raw data — and you may be more attuned to these.",
        },
        {
          title: "Learning Resilience",
          description: "When numerical material requires more effort, you develop persistence and alternative strategies — using tools, asking for clarification, breaking problems into smaller steps — that build robust understanding rather than superficial compliance.",
        },
      ],

      growthEdges: [
        {
          title: "Numerical Avoidance",
          teaser: "Because working with numbers requires more effort, you may avoid it — but avoidance prevents the practice that would make it easier. Breaking this cycle is the single most important thing you can do for your numerical development.",
          fullExplanation: "Numerical reasoning improves with exposure. Every time you engage with quantitative information — a budget, a percentage, a simple calculation — you're training your number sense. But when numerical tasks feel effortful — when percentages confuse you, when you lose track of the numbers, or when you're not sure you've got it right — the natural response is to avoid them. This creates a negative spiral: less engagement leads to slower numerical development, which makes numerical tasks feel harder, which increases avoidance.\n\nThe fix isn't to force yourself through advanced mathematics. It's to find the numerical level where you're challenged but not overwhelmed — simple percentages, basic proportions, everyday calculations. Start with your own finances: what percentage of your income goes to rent? If something is 20% off, what do you pay? Build from concrete, personally relevant numbers. The compound effect of daily numerical engagement is substantial.\n\nThe specific mechanism: consistent practice builds the mental models that support proportional reasoning, strengthens working memory for numerical manipulation, and reduces the anxiety that further impairs processing. All of these gains are cumulative and accessible.",
          premiumHook: "Get the personalised numerical development programme that builds from your current level with concrete, relevant practice.",
        },
        {
          title: "Confidence Under Scrutiny",
          teaser: "When others are discussing numbers quickly or questioning your calculations, the combination of processing effort and social pressure may cause you to defer, doubt yourself, or disengage.",
          fullExplanation: "Numerical reasoning under social pressure requires fast retrieval, rapid calculation, and confidence in your process. When these aren't well-automated, they compete for working memory resources, which creates the experience of 'going blank' or knowing you could figure it out but not being able to do it in the moment.\n\nThis shows up most painfully in meetings, negotiations, and financial discussions. Someone asks a numerical question, others respond quickly, and you either stay silent or offer an answer you're not sure about. The pressure increases cognitive load, which further reduces the resources available for numerical processing. The result is that your quantitative contributions may understate your actual capability.\n\nTwo strategies help: first, prepare numerical frameworks in advance for situations you can anticipate. Have key figures, percentages, and calculations written down. Second, practice with numbers in low-stakes contexts — your own budget, everyday calculations, simple estimation games. Building fluency in private creates confidence for public moments.",
          premiumHook: "Access the numerical confidence programme designed for people who want to contribute to quantitative discussions without anxiety.",
        },
      ],

      workplaceImplications: "In the workplace, your numerical reasoning means you may need more time with quantitative material, benefit from visual presentations of data over raw numbers, and perform better when you can prepare your numerical contributions in advance rather than calculating on the fly. This is not a career limitation — it's a workflow preference. Many high-performing professionals compensate by leaning on other strengths: verbal thinkers excel in communication and strategy; interpersonal thinkers thrive in leadership and client relations; creative thinkers succeed in design and innovation. The key is to structure your work to leverage your primary cognitive strengths while building your numerical skills as a supporting capacity.",

      learningStyle: "You learn best through concrete examples, visual representations of numerical relationships, and step-by-step guidance rather than abstract formulas. Number lines, bar charts, and real-world scenarios make quantitative concepts more accessible than symbols alone. When you do need to work with numbers, pair the task with another modality: see the visual, hear the explanation, then try the calculation yourself. This multi-channel approach compensates for the numerical processing bottleneck by distributing the learning load. Start with personally relevant numbers — your own finances, quantities you encounter daily — to build motivation and relevance.",

      emotionalPattern: "You may feel anxiety, frustration, or shame when numerical tasks arise — a legacy of experiences where numbers felt like a test you couldn't pass. This emotional response doesn't reflect your potential; it reflects the gap between your current fluency and the expectations you've internalised. Building numerical skills in a low-pressure, self-paced context can directly improve your emotional relationship with quantitative tasks. Progress, not perfection, is the goal.",

      enhancementTriggers: [
        "Daily engagement with numbers at an accessible level — your own budget, simple percentages, everyday quantities — in a context free from judgment",
        "Visual and concrete representations of numerical concepts — graphs, diagrams, real objects — that make abstract relationships tangible",
        "Patient guidance from people who can explain numerical concepts without condescension, and who celebrate small wins",
      ],
      depletionTriggers: [
        "Environments that judge intelligence by numerical fluency, which creates performance anxiety that further impairs numerical processing",
        "Avoiding all quantitative tasks because some feel difficult — the practice that would help is the practice that gets skipped",
        "Social comparison with numerically dominant people, which can create discouragement and reinforce avoidance",
      ],

      toolkit: [
        {
          title: "The Daily Number Touch",
          context: "Numerical reasoning improves through consistent exposure. The key is daily engagement at an accessible level, not marathon sessions.",
          action: "Each day, engage with one number in a way that stretches you slightly. Calculate a percentage — what's 15% of your coffee order? Compare two quantities — which is the better value? Estimate something — how many steps to the end of the block? No calculator for 60 seconds; then verify. The goal is building the habit of numerical engagement, not achieving perfection.",
        },
        {
          title: "The Visual Bridge",
          context: "When numerical processing is effortful, visual tools can carry part of the cognitive load and make relationships clearer.",
          action: "When you encounter a numerical concept that feels abstract — a percentage, a proportion, a comparison — draw it. A bar divided into 100 parts for a percentage. Two bars side by side for a comparison. A number line for relative size. The visual makes the numerical relationship concrete. Use this as your default starting point for any quantitative task that feels confusing.",
        },
        {
          title: "The Preparation Buffer",
          context: "Numerical confidence in meetings and discussions improves when you've done the work in advance.",
          action: "Before any meeting or conversation that might involve numbers, identify the 2-3 figures most likely to come up. Calculate them beforehand. Write them down. Have them in front of you. This doesn't mean you're weak — it means you're strategic. You're using preparation to compensate for processing speed, which is exactly what effective professionals do.",
        },
      ],
    },
  },
};
