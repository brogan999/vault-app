import type { IQDimensionContent } from "../types";

export const SPATIAL: IQDimensionContent = {
  id: "spatial",
  label: "Spatial Reasoning",
  shortLabel: "Spatial",
  color: "#916368",

  levels: {
    strong: {
      overview: `Your spatial reasoning sits in the top tier of cognitive performance. You manipulate objects in your mind's eye with ease — rotating them, folding them, imagining how they would look from another angle, or how they would fit together. This is the cognitive machinery behind mental rotation, 3D visualisation, understanding geometric relationships, spatial memory, and the ability to navigate both physical and conceptual spaces. When someone describes a layout, you don't just understand the words; you build a working model in your head and can run experiments on it.

What makes this result distinctive isn't just the ability to picture things — it's the fluency with which you perform spatial operations. You can mentally unfold a box to see its net, rotate a complex assembly to inspect a hidden joint, or visualise how traffic will flow through a redesigned intersection. These operations involve both working memory (holding the mental image stable) and fluid manipulation (transforming it in real time). You're running simulations in your head before committing to physical action.

In practical terms, you "see" solutions before you build them. Architecture, engineering, surgery, industrial design, and data visualisation all depend on this capacity. You're the person who spots the collision before the prototype is built, who understands a mechanical system by looking at a diagram, or who can navigate a new city after glancing at a map once. This capacity is genuinely rare and becomes more valuable as problems grow in physical and conceptual complexity.`,

      strengths: [
        {
          title: "Mental Simulation",
          description: "You can run experiments in your head — testing how parts fit together, how a mechanism will behave, or how a space will feel — without physical prototypes. This dramatically accelerates design and problem-solving.",
          deepDive: "Mental simulation is one of the most powerful capabilities of strong spatial reasoning. When you encounter a design problem, your brain doesn't need to build a physical model; it constructs an internal representation and manipulates it. You can rotate a 3D object to inspect it from all angles, fold a flat pattern into a volume, or trace the path of a ball through a series of obstacles. This internal simulation runs faster than physical prototyping and allows you to explore many more possibilities before committing resources. The same capacity that lets an architect walk through a building in their mind before it exists lets you anticipate how a system will behave under stress, how a layout will affect workflow, or how a data structure will scale.",
        },
        {
          title: "Pre-Visualisation",
          description: "You see the end state before you begin. Whether it's a finished product, a completed assembly, or a navigated route, you hold the target image in mind and work backward to the steps required to get there.",
          deepDive: `Pre-visualisation is the spatial equivalent of working backward from a goal. Strong spatial reasoners don't just build step by step — they hold a clear image of the finished form and use it to guide each decision. A surgeon visualises the completed procedure before making the first incision. An engineer sees the assembled machine and works backward to the order of operations. This ability to hold the target state in mind creates efficiency: you avoid dead ends because you can "see" when a path won't lead where you want to go. It also enables creative leaps — you can imagine novel configurations that don't exist yet and then figure out how to realise them.`,
        },
        {
          title: "Geometric Intuition",
          description: "You grasp spatial relationships — proportions, angles, symmetry, scale — almost automatically. You sense when something is off without measuring it.",
        },
        {
          title: "Spatial Memory",
          description: "You retain mental maps of places, layouts, and configurations with high fidelity. Once you've seen or navigated a space, you can recall it and use it for planning or wayfinding.",
        },
      ],

      growthEdges: [
        {
          title: "Spatial Dominance",
          teaser: "Your spatial facility can make you over-reliant on visual and physical reasoning, potentially undervaluing information that comes in verbal, logical, or sequential form.",
          fullExplanation: "When you're good at spatial reasoning, everything starts looking like a visual problem. You sketch solutions instead of writing them out. You build prototypes instead of specifying requirements. You navigate by feel rather than by following instructions. This spatial dominance is a natural consequence of the brain relying on its strongest pathway — but it can create blind spots.\n\nThe specific risk in professional settings: you may over-weight what you can see and under-weight what must be articulated. A colleague who can't draw their idea as fluently as you can may still have a valid insight that requires verbal unpacking. Documentation, specifications, and logical argumentation may feel tedious compared to the immediacy of a sketch or model — but they're often what enables collaboration and scale.\n\nThe practice: deliberately engage with verbal and logical reasoning tasks. Write out your design rationale before showing the sketch. Document your spatial decisions in words. Notice when you're converting a verbal or logical input into a mental image and ask whether the conversion is losing nuance.",
          premiumHook: "Get the specific exercises for strengthening verbal and logical reasoning pathways alongside your spatial strengths.",
        },
        {
          title: "The Intuition Trap",
          teaser: "Being able to see solutions clearly can create the illusion that others see them too. Your spatial fluency isn't universally shared — and assuming it is can create communication gaps.",
          fullExplanation: `This is a subtle trap specific to people with strong spatial skills: because you can visualise complex arrangements effortlessly, you may assume that your mental model is obvious. You point at a diagram and say "it goes here" — but the other person doesn't have your internal 3D model. They're seeing a 2D projection and may be missing the spatial relationships you take for granted.\n\nIn collaborative contexts — design reviews, engineering handoffs, client presentations — this can mean you under-explain. Your spatial reasoning makes the solution clear to you, but verbal and step-by-step explanation is what makes it clear to others. The fix: develop the habit of narrating your spatial reasoning. Describe what you're visualising, why this arrangement works, and what the key relationships are. Treat your mental model as something to be communicated, not assumed.`,
          premiumHook: "Learn the spatial-to-verbal translation protocol that prevents intuition from substituting for shared understanding.",
        },
      ],

      workplaceImplications: "Strong spatial reasoning makes you exceptionally effective in any role that involves design, engineering, architecture, surgery, manufacturing, data visualisation, or physical problem-solving. You're the person who can spot the design flaw before the prototype is built, who understands complex systems from diagrams alone, and who can navigate uncertainty by running mental simulations. Your professional risk isn't capability — it's communication. You process spatial information so much faster than average that you may skip steps when explaining, assume others can see what you see, or find verbal documentation tedious. The highest-leverage investment: developing the discipline of translating your spatial insights into forms that non-spatial thinkers can follow.",

      learningStyle: "You learn most efficiently through visualisation, diagrams, and hands-on manipulation. You absorb spatial information quickly — a single diagram can convey what others need paragraphs to explain. You retain concepts better when you can build mental models, which means sketching, prototyping, and physical exploration are your highest-leverage learning techniques. Your spatial system acts as a natural compression algorithm: you extract the essential structure from complex material and encode it in compact visual form. The growth edge in your learning: deliberately incorporate verbal and logical documentation of your spatial understanding to build bridges with people who think differently.",

      emotionalPattern: `Your spatial reasoning gives you an unusually embodied relationship with problem-solving. You may feel solutions physically — a sense of "rightness" when a configuration clicks, or unease when something is off. The shadow side: you may undervalue the emotional and relational dimensions of decisions that have a spatial component. A layout that works geometrically may not work socially. A design that satisfies your mental simulation may not satisfy the people who will use it. Your strongest skill is seeing physical and structural truth; your growth edge is integrating the human and interpersonal dimensions that don't reduce to spatial form.`,

      enhancementTriggers: [
        "Working with 3D modelling, CAD, or physical prototyping — activities that stretch your mental rotation and pre-visualisation capacities",
        "Navigation and wayfinding in unfamiliar environments — building and updating mental maps under real-world conditions",
        "Puzzles and games that require spatial manipulation — from jigsaw puzzles to 3D Tetris to mechanical assembly challenges",
      ],
      depletionTriggers: [
        "Extended periods in abstract, non-spatial work — spreadsheets, pure text, meetings without visual aids — which underuse your strongest cognitive channel",
        "Fatigue and sleep deprivation, which disproportionately impair the working memory component of spatial manipulation",
        "High-stress environments that trigger reactive processing, which shifts resources away from the deliberate visualisation required for complex spatial reasoning",
      ],

      toolkit: [
        {
          title: "The Spatial Narration Protocol",
          context: "Your spatial fluency can leave others behind. This practice builds the discipline of translating mental models into shared understanding.",
          action: "After solving any spatial problem — a layout, a design, a route — spend 5 minutes writing or speaking a step-by-step explanation of your reasoning. What did you visualise first? What relationships did you check? What alternatives did you reject and why? Do this weekly on one professional spatial decision. The goal isn't to replace your intuition — it's to make it communicable.",
        },
        {
          title: "The Verbal Channel",
          context: "Spatial dominance can make you over-reliant on visual processing. Strengthening verbal and logical channels creates a more robust cognitive profile.",
          action: "Once a week, tackle a problem using a non-spatial method first: write out the requirements, list the constraints, or reason through the logic. Only after you've worked the problem verbally should you translate your solution into a sketch or model. Notice what information was present in the verbal analysis that your spatial intuition might have skipped.",
        },
        {
          title: "The Specification Audit",
          context: "Strong spatial skills can slide into assuming shared understanding. The highest form of spatial intelligence is making your vision explicit enough for others to build it.",
          action: "Take a spatial solution you've created — a design, a layout, an assembly — and write a specification that would allow someone who hasn't seen it to reproduce it. Include dimensions, relationships, and the rationale for key decisions. Do this with one deliverable per week. Over time, your spatial communication will become as precise as your spatial thinking.",
        },
      ],
    },

    moderate: {
      overview: `Your spatial reasoning is solidly functional — you handle everyday spatial tasks without difficulty and can follow diagrams, interpret maps, and manipulate objects in your mind when given sufficient time. Mental rotation, 3D visualisation, and understanding geometric relationships are accessible to you, though the most complex operations may require more processing time or benefit from physical aids. This is not a deficit. The majority of adults operate at this level, and it supports successful performance in most professional and hands-on contexts.

What this score reflects is the relationship between fluency and accuracy in spatial tasks. You get most spatial reasoning problems right given sufficient time, but the trickiest ones — rapid mental rotation of complex objects, folding 3D patterns, or holding multiple spatial relationships in working memory simultaneously — are where the system works harder. This is the zone with the highest return on investment for deliberate practice: spatial reasoning is one of the most trainable cognitive domains, and small improvements in visualisation fluency translate directly into better design thinking, mechanical intuition, and navigation.

The good news is that spatial ability responds strongly to targeted practice. Unlike some aspects of fluid intelligence that peak in early adulthood, spatial reasoning can improve through deliberate engagement with visualisation exercises, 3D modelling, and hands-on construction. Every diagram you study, every assembly you complete, and every route you navigate adds to the neural infrastructure that supports spatial reasoning.`,

      strengths: [
        {
          title: "Functional Spatial Processing",
          description: "You accurately understand spatial relationships in most professional and daily contexts. Maps, diagrams, layouts, and physical assemblies are processed reliably — you get the structure and can work with it.",
          deepDive: "Functional spatial processing is the workhorse of hands-on work. You don't need exceptional spatial reasoning to succeed in most roles — you need reliable comprehension of layouts, proportions, and mechanical relationships. Your moderate score means your spatial processing is trustworthy in the vast majority of situations you'll encounter. Where it may require more effort is in domains with complex 3D manipulation (advanced CAD, surgical planning) or rapid mental rotation under time pressure.",
        },
        {
          title: "Practical Visualisation",
          description: "You can form mental images of objects and spaces when you need to. Your visualisation may be slower or less detailed than strong spatial reasoners, but it supports planning and problem-solving effectively.",
        },
        {
          title: "Hands-On Competence",
          description: "You work well with physical objects — assembling, arranging, and manipulating. Your spatial understanding is sufficient for most practical tasks, from furniture assembly to workspace organisation.",
        },
      ],

      growthEdges: [
        {
          title: "Complex Mental Rotation",
          teaser: "Rapid mental rotation of complex 3D objects — imagining how something looks from a different angle without physically turning it — is where your spatial reasoning works hardest.",
          fullExplanation: "The gap between moderate and strong spatial reasoning shows up most clearly in the speed and complexity of mental rotation. When you need to imagine how a 3D object would look from another viewpoint, or how two parts would fit together when rotated, you may need to work through it step by step rather than seeing it instantly. This isn't about intelligence — it's about the specific cognitive skill of manipulating mental images in working memory.\n\nIn practical terms: you may need more time with technical drawings, benefit from physical models when designing assemblies, or find that complex 3D software has a steeper learning curve. These aren't barriers — they're areas where deliberate practice yields strong returns.\n\nThe growth strategy: practice with progressively complex spatial tasks. Use mental rotation apps and puzzles. Work with 3D modelling software. Build physical models and then try to visualise modifications before making them. This specific training strengthens the working memory and visualisation pathways that support spatial reasoning.",
          premiumHook: "Get the progressive training programme for strengthening mental rotation and 3D visualisation.",
        },
        {
          title: "Spatial Working Memory",
          teaser: "Holding multiple spatial relationships in mind simultaneously — the layout of a room, the positions of objects, the structure of a mechanism — can consume more of your cognitive resources.",
          fullExplanation: "Spatial reasoning often requires holding several elements in mind at once: how part A connects to part B, how the whole assembly fits in the available space, and how it will look from the user's perspective. When these elements multiply, working memory becomes the bottleneck. You may lose track of one relationship while focusing on another, or need to refer back to the diagram more frequently.\n\nThe practical impact: complex design and assembly tasks may require more external aids — notes, sketches, physical prototypes — to offload working memory. This isn't a weakness; it's a valid strategy. The growth opportunity is gradually increasing the complexity of what you can hold in mind through deliberate practice with progressively challenging spatial tasks.\n\nThe fix: start with simpler spatial problems and gradually add complexity. Practice visualising one relationship, then two, then three. Use the same progression in your professional work — break complex spatial problems into smaller chunks, master each, then integrate.",
          premiumHook: "Access the spatial working memory training protocol designed for professionals who want to expand their visualisation capacity.",
        },
      ],

      workplaceImplications: "Your spatial reasoning supports solid performance in most professional contexts. You can interpret technical drawings, follow assembly instructions, organise physical spaces, and use design software effectively. Where you may notice the limits: roles that require rapid mental simulation of complex 3D systems (advanced engineering, surgical planning), situations that demand pre-visualisation of novel configurations, and tasks that involve holding many spatial relationships in mind simultaneously. These aren't barriers — they're areas where deliberate practice with visualisation will yield the highest professional return.",

      learningStyle: "You learn effectively through diagrams and hands-on work, but benefit from taking time to study spatial relationships and using physical aids to reinforce mental models. Sketching what you're trying to understand helps you move from passive recognition to active visualisation. You may find that combining spatial study with verbal explanation — describing what you see and why it works — creates more durable learning than visual input alone. 3D models and prototypes are effective when you can manipulate them; you may prefer to build and test rather than relying purely on mental simulation.",

      emotionalPattern: "You have a reasonable sense of when spatial arrangements feel right or wrong, and you can use that intuition to guide decisions. Where the spatial-emotional connection may be thinner: distinguishing between aesthetic preference and functional adequacy, or trusting your spatial intuition when it conflicts with verbal analysis. Building more deliberate spatial vocabulary — the ability to articulate why a layout works or fails — can directly improve your design confidence by giving you finer-grained tools for evaluating and communicating spatial decisions.",

      enhancementTriggers: [
        "Daily engagement with spatial tasks — puzzles, 3D games, sketching, or hands-on construction — that stretch your visualisation capacity",
        "Working with people who have strong spatial reasoning — the modelling effect of watching others manipulate mental images is one of the strongest drivers of spatial development",
        "Navigation and wayfinding in unfamiliar areas — building mental maps under real-world conditions strengthens spatial memory and orientation",
      ],
      depletionTriggers: [
        "Extended periods of only abstract, non-spatial work — pure text, spreadsheets, meetings without visual content — without engaging with physical or visual material",
        "Avoiding spatial tasks because they feel effortful — the effort is the signal that your spatial system is training, not a sign that you should stop",
        "Chronic stress and multitasking, which consume working memory resources that your spatial reasoning needs for complex visualisation",
      ],

      toolkit: [
        {
          title: "The Active Visualisation Protocol",
          context: "Looking at diagrams passively — absorbing without manipulating — is the default mode for moderate spatial processors. Active visualisation forces deeper engagement.",
          action: "When studying any spatial material — a diagram, a map, a technical drawing — close it and try to reproduce it from memory. Then rotate it mentally: what would it look like from the other side? What would change if you flipped it? This forces your spatial system into manipulation mode rather than recognition mode. Start with one diagram per day.",
        },
        {
          title: "The Sketch-Before-Build Practice",
          context: "Building your pre-visualisation capacity is the single highest-return investment for spatial reasoning improvement.",
          action: "Before assembling anything — furniture, a meal, a presentation layout — spend 2 minutes sketching or describing the end result. What goes where? What's the order of operations? Then execute and compare. Notice where your mental model was accurate and where it was off. This builds the habit of running spatial simulations before physical action.",
        },
        {
          title: "The 3D Modelling Habit",
          context: "Spatial reasoning improves when you practice manipulating 3D representations. Digital tools provide low-friction practice.",
          action: "Once a week, use a simple 3D modelling app or physical materials to build something — a basic shape, a small assembly, a room layout. The goal isn't to produce professional work; it's to exercise your mental rotation and spatial working memory. Over time, the same operations that require conscious effort will become more fluent.",
        },
      ],
    },

    developing: {
      overview: `Your spatial reasoning score suggests that visual and physical problem-solving is an area where you have significant room for growth. This doesn't mean you can't navigate or work with objects — it means that the specific cognitive operations measured by spatial reasoning tasks (mental rotation, 3D visualisation, understanding geometric relationships, spatial memory, and manipulating objects in the mind's eye) are not currently your strongest cognitive channel. Many highly successful people route their intelligence through other channels — verbal, numerical, logical, interpersonal — and use spatial skills as a supporting function rather than a primary one.

What this score reflects is the current state of your spatial processing infrastructure, not a fixed capacity. Spatial reasoning is one of the most responsive cognitive domains to deliberate practice — research consistently shows that targeted training produces measurable gains. Every diagram you study, every 3D puzzle you attempt, and every hands-on construction you complete strengthens the neural pathways that support spatial reasoning. The trajectory matters more than the snapshot.

The practical implication is that you may find some professional contexts more effortful than people with stronger spatial processing: complex diagrams take longer to decode, assembly tasks may require more trial and error, and navigating unfamiliar spaces may rely more on explicit directions than mental maps. These aren't limitations to accept — they're specific skills to develop. The people who improve most in spatial reasoning are the ones who combine consistent practice with accessible entry points: start with physical manipulation, use visual aids liberally, and build from concrete examples toward abstract visualisation.`,

      strengths: [
        {
          title: "Verbal and Abstract Intelligence Channels",
          description: "People who score lower on spatial reasoning often have stronger compensating abilities in verbal, logical, or analytical intelligence. Your brain routes cognitive work through different pathways, which gives you access to insights that spatial-dominant thinkers may miss.",
          deepDive: "The human brain has multiple intelligence channels that can substitute for each other. When spatial processing isn't the primary pathway, other systems often compensate: you might reason through problems verbally, break them down logically, or rely on analytical frameworks rather than visual intuition. These non-spatial intelligence channels are genuinely valuable — many breakthroughs in law, strategy, analysis, and communication come from people who think verbally or logically rather than spatially. Your growth isn't about replacing these strengths with spatial ability — it's about adding spatial skills as a complementary tool for the many domains where visual and physical reasoning adds value.",
        },
        {
          title: "Sequential and Procedural Strength",
          description: "You may excel at following step-by-step processes, written instructions, and logical sequences. When spatial intuition doesn't come easily, you develop reliable methods that get you to the same destination.",
        },
        {
          title: "Learning Adaptability",
          description: "When spatial material requires more effort, you develop alternative strategies — physical models, verbal descriptions, repeated practice — that build robust understanding through multiple channels.",
        },
      ],

      growthEdges: [
        {
          title: "Spatial Avoidance",
          teaser: "Because spatial tasks require more effort, you may avoid them — but avoidance prevents the practice that would make them easier. Breaking this cycle is the single most important thing you can do for your spatial development.",
          fullExplanation: "Spatial reasoning improves with exposure. Every diagram you study, every 3D puzzle you attempt, and every hands-on task you complete is training data for your spatial processing system. But when spatial tasks feel effortful — when you lose track of relationships, struggle with mental rotation, or need many attempts to get an assembly right — the natural response is to avoid them. This creates a negative spiral: less practice leads to slower spatial development, which makes spatial tasks feel harder, which increases avoidance.\n\nThe fix isn't to force yourself through advanced 3D modelling. It's to find the spatial level where you're challenged but not overwhelmed — simple puzzles, basic diagrams, hands-on tasks with clear instructions. Start with jigsaw puzzles, simple assembly projects, or navigation apps that show your position. Practice for 15 minutes daily, no more, and build gradually. The compound effect of daily spatial engagement on reasoning ability is one of the most consistently demonstrated findings in cognitive science.\n\nThe specific mechanism: spatial practice builds mental rotation fluency through repeated manipulation, strengthens spatial working memory through holding relationships in mind, and develops visualisation through exposure to 2D representations of 3D space. All of these gains are cumulative and responsive to training.",
          premiumHook: "Get the personalised spatial training programme that builds reasoning progressively from your current level.",
        },
        {
          title: "Diagram Decoding Under Pressure",
          teaser: "When you need to interpret a complex diagram or visualise a configuration on the spot, the spatial processing bottleneck may cause you to miss relationships, misinterpret angles, or need multiple passes.",
          fullExplanation: "Spatial reasoning under time pressure requires fast mental rotation, rapid relationship tracking, and real-time visualisation. When these processes aren't well-automated, they compete for working memory resources, which creates the experience of 'not seeing it' or needing to study a diagram much longer than others seem to need.\n\nThis shows up most in situations with technical drawings, assembly instructions, maps, or data visualisations. The pressure to understand quickly increases cognitive load, which further reduces the resources available for spatial processing. The result is that your spatial performance may understate your actual potential.\n\nTwo strategies help: first, give yourself permission to take more time with spatial material — there's no virtue in rushing when the result is misunderstanding. Second, use physical aids liberally: build models, trace diagrams with your finger, use 3D software to rotate objects. These external supports offload working memory and build the spatial fluency that will eventually become internal.",
          premiumHook: "Access the spatial fluency training programme designed for people who want to strengthen visualisation without abandoning their verbal and logical strengths.",
        },
      ],

      workplaceImplications: "In the workplace, your spatial reasoning means you may need more time with diagrams and technical drawings, benefit from physical models and step-by-step visual guides, and perform better when you can prepare for spatial tasks rather than improvising them. This is not a career limitation — it's a workflow preference. Many high-performing professionals excel in roles that leverage verbal, analytical, or interpersonal intelligence: strategy, law, consulting, analysis, and leadership all depend on cognitive channels that may be your strengths. The key is to structure your work to leverage your primary cognitive strengths while building spatial skills as a supporting capacity for the many contexts where visual and physical reasoning adds value.",

      learningStyle: "You learn best through verbal explanation, logical structure, and concrete examples rather than purely visual or spatial presentation. When you do need to learn spatial material, pair it with other modalities: study a diagram, then describe it in words, then build a physical model if possible. This multi-channel approach compensates for the spatial processing bottleneck by distributing the learning load across verbal and logical systems. Videos with narration, written explanations alongside diagrams, and hands-on manipulation with clear instructions are more efficient for you than visual-only material.",

      emotionalPattern: "You may find spatial tasks frustrating when they feel opaque — knowing that others 'see' something you're struggling to visualise can create self-doubt. This spatial gap doesn't mean your intelligence is lacking — it means the visualisation pathway is less developed, and it's one of the most trainable. Building spatial fluency through accessible practice can directly improve your confidence in design, technical, and hands-on contexts. Your verbal and logical intelligence are assets; the goal is to add spatial tools to your toolkit, not to replace what already works.",

      enhancementTriggers: [
        "Daily engagement with accessible spatial tasks — simple puzzles, basic assembly, navigation with maps — that provide stretch without overwhelm",
        "Physical manipulation of objects — building, arranging, folding — which grounds spatial concepts in concrete experience before requiring mental visualisation",
        "Learning from people who explain spatial relationships verbally — bridging the gap between your strong channels and the spatial domain",
      ],
      depletionTriggers: [
        "Environments that judge intelligence by spatial fluency, which creates performance anxiety that further impairs spatial processing",
        "Exclusively engaging with abstract, non-spatial work without any visual or physical components to exercise the spatial system",
        "Social comparison with spatially dominant people, which can create discouragement and avoidance of the practice that would close the gap",
      ],

      toolkit: [
        {
          title: "The 15-Minute Spatial Habit",
          context: "Spatial reasoning improves through consistent engagement with visual and physical material. The key is daily consistency, not marathon sessions.",
          action: "Set a timer for 15 minutes and do something spatial — a jigsaw puzzle, a simple assembly, a navigation exercise, or a basic 3D puzzle app. Choose tasks that are slightly above your comfort level but not overwhelming. When you get stuck, use physical aids: rotate the object in your hands, trace the diagram, build a model. Do not skip days. The compound effect of daily spatial practice is dramatic over 3-6 months.",
        },
        {
          title: "The Verbal Bridge",
          context: "When spatial processing is effortful, verbal and logical tools can carry part of the cognitive load and make spatial concepts more accessible.",
          action: "When you need to understand something spatial — a diagram, a layout, an assembly — describe it in words first. What are the main parts? How do they connect? What's the sequence? Writing or speaking the structure forces your verbal system to engage with the spatial content, which creates a bridge. Then return to the visual with your verbal framework in mind. Use this as your default starting point for any spatial task.",
        },
        {
          title: "The Physical First Protocol",
          context: "Mental visualisation builds on physical experience. Start with hands-on manipulation before expecting fluency in mental rotation.",
          action: "When learning any spatial concept, use physical objects first. Need to understand how parts fit? Build it. Need to understand a layout? Arrange it with real items. Need to understand rotation? Turn the object in your hands. Only after you've done it physically should you try to visualise it mentally. This grounds abstract spatial operations in concrete experience.",
        },
      ],
    },
  },
};
