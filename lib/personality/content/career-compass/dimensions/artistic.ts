import type { CareerDimensionContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "artistic";

export const ARTISTIC: CareerDimensionContent = {
  id: "artistic",
  label: "Artistic",
  shortLabel: "Artistic",
  color: "#916368",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  levels: {
    high: {
      overview: `Your Artistic interest sits at the high end of the Holland spectrum — you're driven by creative expression, aesthetic sensitivity, and the need to bring original ideas into form. You don't just appreciate beauty and design; you feel a persistent pull to make something that didn't exist before, to shape materials, words, sounds, or concepts into something that carries meaning. This isn't a hobby or a side interest; it's a core way you process experience and find purpose. When you're not creating or engaging with creative work, something feels missing.

What distinguishes high Artistic interest is comfort with ambiguity and non-linear thinking. You thrive when problems don't have a single right answer, when the path forward emerges through exploration rather than following a template. You're drawn to work that values originality over conformity, where your aesthetic judgment and intuitive sense of what works matter. Rigid structures, repetitive tasks, and environments that prioritise efficiency over expression will drain you — you need space to experiment, iterate, and trust your creative instincts.

In career terms, this means you're most fulfilled in roles where self-expression is central, not peripheral. You may feel restless in purely analytical or administrative work, even when you're competent at it. The question isn't whether you can do structured tasks — it's whether you can sustain motivation when your creative drive has nowhere to go. Your best work emerges when you're given autonomy over form, style, and approach, and when the outcome is judged by its impact and originality rather than by adherence to a fixed process.`,

      strengths: [
        {
          title: "Originality and Novelty-Seeking",
          description: "You generate ideas that others don't see, and you're drawn to unconventional approaches. Your creative process often produces work that surprises and resonates because it comes from a genuine place rather than from following established patterns.",
          deepDive: "Originality in the Holland sense isn't about being weird for its own sake — it's about having a low threshold for boredom with the familiar and a high tolerance for the discomfort of the new. You're willing to sit with uncertainty, try things that might not work, and trust that something will emerge. This capacity is rare in organisations that default to best practices and proven methods. Your value is in the moments when the standard approach has failed or when the brief asks for something that hasn't been done before. The risk: you may undervalue the wisdom embedded in existing solutions, or dismiss structure as constraint when it could actually free you to focus your creativity where it matters most.",
        },
        {
          title: "Aesthetic Sensitivity",
          description: "You notice what others overlook — the way a space feels, the rhythm of a sentence, the emotional weight of a colour choice. Your aesthetic judgment is a genuine skill that improves outcomes in design, communication, and user experience.",
        },
        {
          title: "Expressive Communication",
          description: "You can convey complex ideas through metaphor, narrative, and visual language. When others struggle to articulate something intangible, you often find the right form — whether that's a story, an image, or a prototype that makes the abstract concrete.",
        },
      ],

      growthEdges: [
        {
          title: "Structure as Enabler",
          teaser: "Your creative drive can make you resist structure and process — but the most sustainable creative careers often combine originality with enough discipline to ship work consistently.",
          fullExplanation: "High Artistic interest often comes with an allergic reaction to bureaucracy, templates, and rigid timelines. You may experience structure as a cage that kills creativity. The tension is real — too much process does stifle — but the opposite extreme has its own costs. Creative professionals who burn out or never finish projects often lack the minimal structure that would let them protect their creative energy and deliver on their ideas.\n\nThe reframe: structure isn't the enemy of creativity; it's a container that prevents creative energy from dissipating. A simple system — blocks of focused creative time, a lightweight workflow for moving ideas from draft to done, clear boundaries between exploration and delivery — can actually increase your creative output by reducing decision fatigue and protecting you from the chaos of endless possibility.\n\nThe practice: identify one or two structural habits that would support rather than constrain your work. A weekly creative block. A simple checklist for finishing projects. A rule for when to stop iterating and ship. Test them for a month and notice whether your creative output increases.",
          premiumHook: "Get the Creative Structure Framework designed for high-Artistic professionals who want to ship more without losing their creative edge.",
        },
        {
          title: "Translating Creative Value",
          teaser: "You may assume the value of your work is self-evident, but stakeholders often need help connecting creative output to business outcomes. Learning to articulate that connection expands your influence.",
          fullExplanation: "Creative work is often judged by intuition — does it feel right? — but the people who fund, approve, or adopt your work often operate in a different language. They want to know: will this increase engagement? Will it differentiate us? Will it reduce risk? When you can't translate your creative choices into terms they understand, your best work may be rejected or underfunded.\n\nThis isn't about compromising your vision. It's about developing a second language — the ability to explain why this design will convert, why this narrative will resonate, why this approach will cut through the noise — in a way that builds confidence in decision-makers who don't share your aesthetic intuition.\n\nThe skill: for each significant creative decision, write one paragraph that explains the rationale in outcome-focused terms. What problem does this solve? What response are we aiming for? How does this choice support that? This practice builds the muscle of translation without diluting your creative judgment.",
          premiumHook: "Access the Creative Persuasion Protocol for articulating the business value of creative work to non-creative stakeholders.",
        },
      ],

      careerPaths: `You're best suited to careers where creative expression is central rather than incidental. Obvious fits include design (graphic, UX, product, interior), writing and content creation, visual and performing arts, architecture, advertising and branding, and roles in film, music, or media production. But the Artistic dimension also thrives in less obvious places: innovation and R&D teams that need people who can imagine futures that don't yet exist; strategy and consulting when the deliverable is a compelling narrative or vision; and any role where the primary output is a designed experience — whether that's a product, a service, or an event.

The key is to look for roles where your aesthetic judgment and originality are valued as core competencies, not nice-to-haves. You may find fulfilment in hybrid roles — a designer who also codes, a strategist who creates content, a researcher who visualises insights — where you can shape both the substance and the form of your work. Avoid positions that treat creativity as a peripheral skill or that require you to suppress your need for self-expression in favour of pure execution.`,

      workEnvironment: `You thrive in environments that offer visual and sensory stimulation, flexibility in how and when you work, and tolerance for non-linear processes. Open studios, collaborative creative spaces, or home offices with room to spread out and make a mess support your best work. You need permission to iterate — to try things that might not work, to explore before committing — without being micromanaged through each step. Environments that feel sterile, overly corporate, or relentlessly efficient will drain you; you need some texture, some room for serendipity, and some acceptance that creative work doesn't always follow a straight line.

The ideal setting also protects focused creative time. Open-plan offices with constant interruption, back-to-back meetings, and cultures that equate visibility with productivity are particularly difficult for high-Artistic types. You need blocks of uninterrupted time to get into flow, and you need leaders who understand that creative output can't be scheduled in 30-minute increments. Look for organisations that explicitly value design thinking, innovation, or creative process — their culture is more likely to accommodate your working style.`,

      collaborationStyle: `You work best with others when you have clear ownership over the creative direction of your piece, even within a larger project. You appreciate collaborators who bring complementary skills — research, implementation, project management — so you can focus on the creative core. You may find it frustrating to work with people who need every decision explained in linear, analytical terms before they can proceed; you prefer collaborators who can meet you in the realm of intuition and iterate from there.

You may also need to consciously develop the skill of receiving feedback on creative work without taking it personally. Your work is an extension of your identity, and criticism can feel like criticism of you. The growth edge is learning to separate the work from the self — to treat feedback as information about how the work lands, not as a verdict on your worth. The best creative collaborations involve trust: you trust others to handle the parts you find tedious; they trust you to deliver something that couldn't have been specified in advance.`,

      energyDrains: [
        "Highly repetitive or formulaic work with no room for variation or expression",
        "Environments that prioritise efficiency and speed over quality and originality",
        "Constant interruption and fragmentation of creative focus",
        "Stakeholders who require extensive justification for every creative choice before allowing you to proceed",
        "Cultures that treat creative work as a luxury rather than a core competency",
      ],

      motivators: [
        "Autonomy over the form, style, and approach of your work",
        "Projects that require genuine originality rather than execution of a template",
        "Recognition for the aesthetic and emotional impact of your output",
        "Space and time for exploration and iteration before commitment",
        "Collaboration with others who value and understand creative process",
      ],

      toolkit: [
        {
          title: "The Creative Block Ritual",
          context: "High-Artistic types need protected time for creative work, but it's easy to let meetings and admin expand to fill the day.",
          action: "Block 2–3 hours at least twice a week for uninterrupted creative work. Treat these blocks as non-negotiable — no meetings, no email, no context-switching. Use the first 10 minutes to settle into the work; use the last 10 to capture what you've done and what comes next. Over time, your brain will learn that this is when creation happens.",
        },
        {
          title: "The Value Translation Exercise",
          context: "Creative work is often undervalued because its impact isn't articulated in terms stakeholders understand.",
          action: "For your next significant creative deliverable, write a one-paragraph summary that answers: What problem does this solve? What will change for the user or audience? What would we lose if we didn't do this? Use this as your default framing when presenting creative work to non-creative stakeholders.",
        },
        {
          title: "The Finish Line Rule",
          context: "High-Artistic types can iterate indefinitely; the enemy of done is perfect.",
          action: "Before starting any creative project, define one non-negotiable criterion for 'done' — something concrete and achievable. When you hit it, ship. You can always refine later, but shipping builds the habit of completion and gives you feedback that further iteration rarely does.",
        },
      ],
    },

    moderate: {
      overview: `Your Artistic interest sits in the moderate range — you enjoy creativity and aesthetic engagement, but you don't need them to be the dominant force in your working life. You appreciate good design, original ideas, and opportunities to express yourself, but you also value structure, clarity, and the satisfaction of work that has clear parameters. This balance is a strength: you can operate effectively in both creative and more conventional environments, and you bring aesthetic sensitivity to roles that aren't primarily creative.

What this means in practice is that you're comfortable in hybrid contexts. You can contribute to creative projects without needing to lead them; you can follow a brief while still adding your own touch; you can work within constraints and find satisfaction in making something good within those limits. You're unlikely to feel the restlessness that high-Artistic types experience in purely analytical or administrative work — but you may also find that roles with no creative component at all leave you feeling slightly flat. The sweet spot is work that has some creative dimension without requiring you to live in the ambiguity of pure creative process.

Your career flexibility is an asset. You can move between creative and non-creative roles more easily than someone at either extreme. The key is to ensure that whatever you do has at least one channel for aesthetic or expressive engagement — whether that's the design of your presentations, the way you structure a report, or a side project that feeds your creative side. Ignoring that need entirely will gradually drain you; honouring it, even in small ways, will sustain your energy.`,

      strengths: [
        {
          title: "Creative Versatility",
          description: "You can shift between creative and structured modes of thinking. You're not locked into either pure creativity or pure analysis — you can contribute to both, which makes you valuable in cross-functional teams and hybrid roles.",
          deepDive: "Moderate Artistic interest often correlates with the ability to translate between creative and non-creative stakeholders. You understand enough of both languages to bridge them. When a designer explains their rationale, you get it; when a business lead explains the constraints, you get that too. This makes you an effective collaborator in contexts where creative and operational priorities need to be balanced. The risk is that you may not feel fully at home in either camp — neither the pure creatives nor the pure analysts may claim you as one of theirs. The opportunity is to own that in-between space as a distinct strength.",
        },
        {
          title: "Aesthetic Awareness",
          description: "You notice quality in design, communication, and presentation. You may not create from scratch, but you can recognise what works, give useful feedback, and elevate the aesthetic standard of work you touch.",
        },
        {
          title: "Constraint-Navigating Creativity",
          description: "You're good at finding creative solutions within boundaries. When the brief is clear and the parameters are set, you can still find room for originality — a more elegant approach, a better turn of phrase, a more effective visual.",
        },
      ],

      growthEdges: [
        {
          title: "Claiming Creative Space",
          teaser: "Because you can function without much creative input, you may underinvest in it — but moderate Artistic interest still benefits from regular creative engagement.",
          fullExplanation: "The trap for moderate Artistic types is assuming that because you can do without creativity, you should. You're capable in structured roles, so you may default to them and gradually let your creative side atrophy. The result isn't dramatic burnout — it's a slow leak of energy, a sense that something is missing without being able to name it.\n\nThe fix isn't to become a full-time creative. It's to build in regular, low-stakes creative engagement. A side project. A hobby that involves making something. Taking on the design of a presentation instead of using the template. Choosing the visual direction for a report. These small acts of creative agency add up and prevent the gradual drift toward work that has no expressive dimension.\n\nThe practice: identify one recurring opportunity to exercise creative judgment in your current role or life. Schedule it. Protect it. Notice whether your overall energy improves when you honour it.",
          premiumHook: "Get the Creative Maintenance Protocol for moderate-Artistic professionals who want to sustain creative energy without restructuring their careers.",
        },
        {
          title: "Depth in Ambiguity",
          teaser: "When creative projects require extended time in the unknown — no clear brief, no right answer — you may feel discomfort and want to resolve things quickly.",
          fullExplanation: "Moderate Artistic types often prefer creative work when the problem is somewhat defined. Open-ended exploration — 'we don't know what we're making yet' — can feel unsettling. You may want to nail down the scope, define the deliverables, and create structure before you've had time to explore. This can short-circuit the creative process in contexts where the best outcome emerges from sustained ambiguity.\n\nThe growth edge is developing tolerance for productive uncertainty. Not all ambiguity is wasteful; some of it is necessary for genuine innovation. The skill is learning to distinguish between ambiguity that's generative (we're discovering something) and ambiguity that's avoidant (we're avoiding a decision). When it's generative, the practice is to stay with it longer than feels comfortable — to resist the urge to close too early.\n\nThe practice: in your next open-ended project, set a minimum exploration period before you're allowed to define the solution. Use that time to generate options, sit with the uncertainty, and notice what emerges when you don't rush to resolve.",
          premiumHook: "Access the Ambiguity Tolerance Framework for professionals who want to stay longer in creative exploration without losing their preference for structure.",
        },
      ],

      careerPaths: `You have a wide range of career options. Roles that combine creative and analytical elements — product management, marketing, content strategy, instructional design, or consulting — often suit you well. You can thrive in creative industries in supporting or hybrid roles: project management in design agencies, operations in media companies, or client-facing roles in creative services. You're also well-suited to roles where the primary work isn't creative but where there's room to add creative value — improving presentations, shaping communications, or contributing to the design of processes and experiences.

The key is to avoid extremes. Purely creative roles with no structure may leave you feeling unmoored; purely administrative roles with no creative dimension may leave you feeling flat. Look for positions that offer a mix: enough structure to feel grounded, enough creativity to feel engaged. You may also find that your ideal balance shifts over time — more creative in some seasons, more structured in others — and that flexibility is part of your strength.`,

      workEnvironment: `You're adaptable to a range of environments, but you'll perform best when there's some balance between structure and creative freedom. You don't need a design studio, but you may appreciate spaces that have some aesthetic consideration — natural light, thoughtful layout, visual interest. You can work in open-plan offices if you have access to focus spaces when you need them; you can work remotely if you have some structure to your day.

The ideal environment gives you permission to add your creative touch where it matters — whether that's in how you organise your work, how you present ideas, or how you approach problems — without requiring you to live in constant creative mode. You may find highly corporate, purely utilitarian spaces draining over time; a little aesthetic care goes a long way. Similarly, environments that are so loose and unstructured that there's no anchor may leave you feeling adrift. The sweet spot is enough structure to feel secure, enough flexibility to express yourself.`,

      collaborationStyle: `You work well with both creative and non-creative collaborators. You can speak the language of both — you understand when a designer needs space to iterate, and you understand when a stakeholder needs a clear timeline. This makes you an effective bridge: you can translate between teams that otherwise talk past each other.

You may need to be intentional about claiming your creative contributions. Because you're comfortable in supporting roles, you might downplay your aesthetic or expressive input. The growth edge is naming and owning the creative value you add — whether that's the way you framed the problem, the visual you suggested, or the narrative you shaped. Your collaborators may not notice unless you point it out; that doesn't mean it doesn't matter.`,

      energyDrains: [
        "Roles with zero creative dimension — pure execution with no room for expression or aesthetic input",
        "Environments that are purely chaotic with no structure to anchor you",
        "Being pigeonholed as either 'the creative' or 'the non-creative' when you're both",
        "Projects that require extended time in open-ended ambiguity with no progress markers",
        "Cultures that dismiss aesthetic considerations as frivolous",
      ],

      motivators: [
        "Work that combines structure with opportunities for creative contribution",
        "Recognition for the aesthetic and expressive value you add",
        "Collaboration with both creative and analytical colleagues",
        "Clear parameters within which you can still exercise judgment and originality",
        "Environments that value both quality and efficiency",
      ],

      toolkit: [
        {
          title: "The Creative Audit",
          context: "Moderate Artistic types can lose track of how much creative engagement they're actually getting.",
          action: "For one week, log every moment you exercised creative judgment — chose a visual, shaped a narrative, suggested an alternative approach, made something. At the end of the week, assess: Is this enough? If not, identify one recurring opportunity to add more creative engagement and schedule it.",
        },
        {
          title: "The Bridge Role",
          context: "Your ability to translate between creative and non-creative stakeholders is a strength that may go unnoticed.",
          action: "In your next cross-functional project, explicitly offer to bridge: 'I can translate the design rationale for the business team' or 'I can help the creatives understand the constraints.' Document one instance where your translation prevented a misunderstanding or moved the project forward. Add it to your professional narrative.",
        },
        {
          title: "The Ambiguity Timer",
          context: "You may resolve creative ambiguity too quickly; the best ideas sometimes need more time to emerge.",
          action: "In your next open-ended project, set a 48-hour (or longer) exploration period before defining the solution. During that time, generate at least three distinct options. Notice what emerges when you resist the urge to close early. Reflect on whether the final outcome is stronger for the extended exploration.",
        },
      ],
    },

    low: {
      overview: `Your Artistic interest sits at the lower end of the Holland spectrum — you prefer clear structure, defined parameters, and work that has measurable outcomes over open-ended creative exploration. This isn't a deficit; it's a genuine orientation. You're likely to feel most comfortable when you know what success looks like, when the path forward is reasonably clear, and when your contribution is judged by concrete criteria rather than by aesthetic or expressive impact. Pure creative work — the kind that requires sitting with ambiguity, generating from nothing, and being evaluated by subjective standards — may feel uncomfortable or even draining.

What this means for your career is that you're well-suited to roles that prioritise analysis, execution, organisation, or technical skill over creative expression. You may find creative environments — design studios, advertising agencies, arts organisations — confusing or frustrating because the criteria for good work feel vague and the process feels inefficient. You're not lacking in imagination; you simply prefer to apply it within clear frameworks rather than in the service of open-ended creation.

The growth edge for low Artistic interest isn't to become more creative — it's to understand when creative input is valuable and how to work effectively with people who have high Artistic interest. You may need to develop tolerance for processes that feel messy, and you may need to learn to evaluate creative work by criteria that aren't purely logical. In return, you bring clarity, structure, and reliability to contexts that might otherwise drift. Your preference for the concrete and the defined is an asset in roles that require precision, consistency, and follow-through.`,

      strengths: [
        {
          title: "Clarity and Structure",
          description: "You excel at creating and maintaining order. You can define processes, establish criteria, and ensure that work meets clear standards. In contexts where ambiguity creates chaos, you're the person who brings clarity.",
          deepDive: "Low Artistic interest often correlates with strong preference for explicit over implicit. You want to know what 'done' looks like, what 'good' means, and what the steps are to get there. This is invaluable in project management, quality assurance, operations, and any role where consistency and reliability matter. The risk is that you may over-apply this preference in contexts where the best outcome emerges from exploration — you might close down creative processes before they've had time to yield. The skill is knowing when structure enables and when it constrains.",
        },
        {
          title: "Practical Execution",
          description: "You get things done. When the goal is clear, you can work through the steps efficiently without getting lost in possibilities. You're reliable at delivering defined outcomes.",
        },
        {
          title: "Objective Evaluation",
          description: "You can assess work by measurable criteria — does it meet the spec? Is it on time? Does it fulfil the requirements? This objectivity is valuable when creative work needs to be evaluated for fit and feasibility.",
        },
      ],

      growthEdges: [
        {
          title: "Working with Creative Colleagues",
          teaser: "When you collaborate with high-Artistic types, their process may feel inefficient or irrational. Learning to work effectively with them expands your impact.",
          fullExplanation: "Creative process often looks chaotic from the outside. Ideas emerge through iteration, not through linear planning. 'Good' is judged by feel as much as by spec. Timelines are fluid. For someone who prefers structure, this can feel like working with people who don't know how to work. The temptation is to impose order — to demand clearer briefs, earlier decisions, more defined deliverables. Sometimes that helps. Sometimes it kills the thing you're trying to support.\n\nThe skill is learning to distinguish between productive chaos (the mess that leads to breakthrough) and unproductive chaos (the mess that leads nowhere). When it's productive, your role may be to create just enough structure to contain the chaos — clear milestones, decision points, boundaries — without over-constraining the creative process. You provide the guardrails; they provide the exploration.\n\nThe practice: in your next collaboration with a creative colleague, ask: What do you need from me to do your best work? Listen for what structure would actually help versus what would feel like constraint. Offer that. Hold the rest.",
          premiumHook: "Get the Creative Collaboration Guide for structure-preferring professionals who work with high-Artistic colleagues.",
        },
        {
          title: "Recognising When Creativity Matters",
          teaser: "You may undervalue creative input because it doesn't fit your criteria for 'real work.' In some contexts, that oversight costs you.",
          fullExplanation: "When your default is to prioritise logic, efficiency, and measurable outcomes, creative work can seem like a luxury — nice to have, but not essential. The risk is that you miss moments when creative input would significantly improve the outcome. A better-designed process might reduce errors. A more compelling narrative might secure buy-in. A more original approach might differentiate you from competitors. These benefits are real but harder to quantify than the metrics you naturally track.\n\nThe growth edge is developing a working model of when creativity adds value. Not everywhere — you're right that some contexts don't need it. But in user experience, communication, problem-solving, and innovation, creative input often makes the difference between adequate and excellent. The skill is knowing when to seek it, how to evaluate it, and when to invest in it.\n\nThe practice: identify one area in your work where you've defaulted to the most logical or efficient solution. Ask: What would a creative approach add? If the answer is 'something meaningful,' consider bringing in creative input — even if it feels like a detour.",
          premiumHook: "Access the Creative Value Assessment for understanding when and how to invest in creative input when it's not your natural default.",
        },
      ],

      careerPaths: `You're well-suited to careers that prioritise structure, analysis, and execution. Obvious fits include operations, project management, finance, data analysis, quality assurance, compliance, and technical roles where the work is defined by clear specifications. You may also thrive in law, accounting, engineering, or healthcare — fields where precision, consistency, and adherence to established standards are central. Roles in administration, logistics, and supply chain management often align well with your preferences.

The key is to seek environments where your preference for clarity and structure is valued rather than pathologised. Avoid roles that require you to generate creative work from scratch or to thrive in constant ambiguity — you'll be fighting your natural orientation. That said, most careers have some creative dimension. The growth edge is finding the level of creative engagement you can tolerate or even enjoy — perhaps in improving processes, in clear communication, or in problem-solving within defined constraints — without expecting yourself to become someone who loves open-ended creation.`,

      workEnvironment: `You thrive in environments with clear structure, defined processes, and explicit expectations. You prefer to know what success looks like, what the timeline is, and what your role entails. Highly ambiguous or constantly shifting environments will drain you; you need some stability and predictability to do your best work.

You're likely to perform well in traditional office settings, with clear reporting lines, documented procedures, and measurable outcomes. You may find creative studios, startups in permanent pivot mode, or roles with constantly evolving briefs frustrating. The ideal environment gives you enough structure to feel secure while leaving room for you to execute effectively within those parameters. You don't need rigid control — you need clarity.`,

      collaborationStyle: `You work best with colleagues who share your preference for clarity and who communicate in concrete terms. You may find it challenging to collaborate with people who work intuitively, resist documentation, or prefer to 'figure it out as we go.' When you do work with creative or exploratory types, you'll be most effective if you can establish clear handoff points, decision criteria, and timelines — enough structure to contain the ambiguity without trying to control the entire process.

You may need to develop patience for processes that don't follow a straight line. Your instinct may be to push for resolution; sometimes the right move is to wait. The skill is distinguishing between productive waiting (giving space for something to emerge) and unproductive waiting (avoiding a decision that could be made now). When in doubt, ask: What would need to be true for us to decide? If the answer is 'more information' or 'more exploration,' your role may be to create the conditions for that rather than to force a premature conclusion.`,

      energyDrains: [
        "Roles that require constant creative generation with no clear brief or criteria",
        "Environments that prioritise aesthetic judgment over measurable outcomes",
        "Collaborators who resist structure, documentation, or explicit planning",
        "Work that is evaluated by subjective standards with no way to know what 'good' means",
        "Constant change and ambiguity with no stable reference points",
      ],

      motivators: [
        "Clear goals, criteria, and success metrics",
        "Work that can be evaluated by objective standards",
        "Environments with defined processes and predictable structure",
        "Colleagues who communicate in concrete, explicit terms",
        "The satisfaction of completing well-defined tasks to a high standard",
      ],

      toolkit: [
        {
          title: "The Structure Offer",
          context: "When working with creative colleagues, imposing structure can backfire. Offering it is different.",
          action: "In your next collaboration with someone who works more intuitively, ask: What would make this easier for you? What structure would help without constraining? Offer to create that — a simple checklist, a decision timeline, a clear handoff point — and check in after a week. Adjust based on their feedback.",
        },
        {
          title: "The Creative Value Check",
          context: "You may default to the most logical solution; sometimes a creative approach would add significant value.",
          action: "Before finalising your next significant deliverable, pause and ask: Would a more creative approach — better design, a stronger narrative, a more original angle — meaningfully improve this? If yes, identify one element where you could invest in creative input. If no, proceed with confidence that you've made the right call.",
        },
        {
          title: "The Ambiguity Map",
          context: "When you're in an ambiguous situation, the instinct is to resolve it quickly. Sometimes mapping it first helps.",
          action: "When you encounter ambiguity that feels overwhelming, spend 15 minutes writing: What do we know? What don't we know? What would need to be true for us to decide? What's the smallest next step? This creates enough structure to reduce anxiety without forcing premature resolution. Share the map with collaborators and see if it helps.",
        },
      ],
    },
  },
};
