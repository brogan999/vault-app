import type { CareerDimensionContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "realistic";

export const REALISTIC: CareerDimensionContent = {
  id: "realistic",
  label: "Realistic",
  shortLabel: "Realistic",
  color: "#315E36",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  levels: {
    high: {
      overview: `You have a strong practical orientation — you're drawn to work you can see, touch, and measure. Abstract theory without application feels hollow to you; you want to build, fix, operate, or construct something tangible. This isn't just a preference for manual work — it's a deep orientation toward the concrete and the real.

People with high Realistic scores often have an instinctive understanding of how physical systems work. You likely notice mechanical relationships, spatial dimensions, and material properties that others overlook. This hands-on intelligence is a genuine cognitive strength, even though traditional education systems tend to undervalue it relative to verbal or abstract reasoning.

Your career satisfaction depends heavily on whether your daily work produces visible, measurable results. Roles that bury you in meetings, paperwork, or conceptual discussions without a clear connection to tangible outcomes will leave you restless and unfulfilled, regardless of how prestigious they appear on paper.`,

      strengths: [
        {
          title: `Tangible Problem-Solving`,
          description: `You diagnose and fix real-world problems efficiently, moving from observation to action without getting lost in theory.`,
          deepDive: `This strength reflects a cognitive style that processes information through direct interaction with the physical world. Research on embodied cognition shows that hands-on problem-solvers often reach solutions faster than purely analytical thinkers because they test hypotheses in real time rather than simulating them mentally. Your inclination to pick something up and try it isn't impulsive — it's an efficient problem-solving strategy.`,
        },
        {
          title: `Spatial and Mechanical Intuition`,
          description: `You naturally grasp how components fit together, whether you're reading a blueprint, assembling a system, or troubleshooting equipment.`,
        },
        {
          title: `Results-Driven Execution`,
          description: `You complete projects rather than endlessly planning them. Your bias toward action means you consistently produce deliverables while others are still discussing options.`,
        },
      ],

      growthEdges: [
        {
          title: `Communicating Your Process`,
          teaser: `Your tendency to jump straight into doing can leave colleagues unsure about your reasoning or approach.`,
          fullExplanation: `Highly Realistic individuals often struggle to articulate the reasoning behind their practical decisions. You may know exactly why you chose a particular approach, but because your reasoning is partly embodied — processed through physical interaction rather than verbal logic — translating it into words feels unnatural.

This becomes a professional limitation when you need buy-in from stakeholders, when you're training others, or when your expertise needs to be documented. The fix isn't becoming more verbal at the expense of your practical strengths — it's developing a bridge between your embodied knowledge and structured communication.

Start by narrating your process out loud while working, even if no one is listening. This builds the neural pathways between your hands-on reasoning and your verbal expression. Over time, you'll find it easier to explain not just what you're doing, but why.`,
          premiumHook: `Discover the specific communication frameworks that help practical thinkers translate hands-on expertise into language that resonates with analytical and conceptual colleagues.`,
        },
        {
          title: `Engaging with Abstract Strategy`,
          teaser: `You may dismiss strategic or conceptual discussions as a waste of time, missing opportunities to shape the direction of your work.`,
          fullExplanation: `Your preference for the concrete is a strength, but it can become a ceiling when career advancement requires engaging with organisational strategy, long-range planning, or systemic thinking. The risk isn't that you can't think abstractly — it's that you've trained yourself to disengage from conversations that don't immediately connect to tangible action.

This pattern can limit your influence. Decisions about budgets, priorities, and resource allocation happen in strategic conversations, and if you're absent from those conversations, your practical expertise doesn't shape those decisions.

The key is reframing strategic thinking as a practical skill — something you can get better at through deliberate practice, just like any technical skill. Start by identifying the tangible implications of abstract proposals: what would this strategy mean for the actual work on the ground?`,
          premiumHook: `Learn the specific techniques that help hands-on professionals build strategic influence without abandoning their practical identity.`,
        },
      ],

      careerPaths: `Your highest satisfaction will come from roles where the output of your work is directly observable. Engineering disciplines — mechanical, civil, electrical, industrial — are natural fits because they combine technical problem-solving with tangible results. Skilled trades like carpentry, welding, and electrical work offer the same satisfaction with more immediate feedback loops.

Technology roles that bridge hardware and software — systems engineering, robotics, IoT development, DevOps infrastructure — let you apply your practical orientation in high-growth industries. Architecture, industrial design, and construction management blend your hands-on intelligence with project-level coordination.

The outdoor and environmental sector also aligns well: forestry, agriculture, environmental remediation, and renewable energy installation all reward the combination of physical competence and problem-solving that defines high Realistic scorers.`,

      workEnvironment: `You thrive in environments where you can move, use tools, and interact with physical materials or systems. Open workshops, labs, construction sites, and field settings energise you in ways that cubicle-based work never will. Even in office-adjacent roles, you need physical variety — standing desks, whiteboard sessions, prototype spaces.

Autonomy matters enormously. You work best when given a clear objective and the freedom to figure out how to reach it. Micromanagement and rigid procedures that prevent you from using your practical judgment are deeply demotivating. You also need to see your work in context — understanding how your piece connects to the larger system.`,

      collaborationStyle: `You prefer working alongside people rather than sitting across from them in meetings. Shoulder-to-shoulder collaboration — building, troubleshooting, installing — is where you're most engaged and most generous with your knowledge. You learn by watching others work and teach the same way.

In team settings, you tend to be the person who cuts through prolonged discussion by suggesting the team try something. This action orientation is valuable but can frustrate colleagues who need to think through options before committing. Your most effective collaborative moments happen when you pair your bias toward action with a brief acknowledgment of others' need to process.`,

      energyDrains: [
        `Extended meetings with no clear action items or tangible outcomes`,
        `Purely theoretical work with no connection to real-world application`,
        `Sedentary desk work without physical variety or movement`,
        `Bureaucratic processes that prevent direct problem-solving`,
        `Roles that prioritise presentation and appearance over substance`,
      ],

      motivators: [
        `Seeing a finished product or measurable result from your work`,
        `Working with tools, equipment, machinery, or physical materials`,
        `Solving concrete problems with clear success criteria`,
        `Autonomy to choose your own methods and approach`,
        `Outdoor or physically varied work settings`,
      ],

      toolkit: [
        {
          title: `Build a Portfolio of Tangible Results`,
          context: `Your resume should show what you've built, fixed, or improved — not just where you've worked.`,
          action: `Document your top 5 most impactful projects with before/after metrics, photos, or specifications. Use these as evidence in career conversations and interviews.`,
        },
        {
          title: `Prototype Before Presenting`,
          context: `You communicate more effectively through demonstration than description.`,
          action: `When proposing ideas at work, create a rough prototype, model, or proof-of-concept first. Let the physical artifact carry your argument.`,
        },
        {
          title: `Seek Hybrid Roles`,
          context: `As you advance, you'll face pressure to move into purely managerial or strategic roles that remove you from hands-on work.`,
          action: `Identify roles that combine technical leadership with continued hands-on involvement — technical lead, principal engineer, or player-coach positions that preserve your connection to tangible work.`,
        },
      ],
    },

    moderate: {
      overview: `You have a balanced relationship with practical, hands-on work. You appreciate tangible results and can engage effectively with physical tasks, tools, and real-world problem-solving, but it's not the only mode that satisfies you. You can move between practical execution and more abstract or interpersonal work without significant friction.

This moderate Realistic orientation means you're unlikely to feel trapped in either extreme — you won't wilt in an office environment the way a highly Realistic person might, but you also won't feel lost on a construction site or in a workshop. You have enough practical intelligence to be competent and comfortable in hands-on situations without needing them to dominate your work life.

Your career sweet spot is likely a role that includes some tangible, results-oriented work alongside other activities. Roles that are entirely abstract or entirely physical may both feel incomplete to you.`,

      strengths: [
        {
          title: `Practical Versatility`,
          description: `You can engage with both hands-on tasks and conceptual work, making you effective in roles that require switching between the two.`,
          deepDive: `This flexibility is rarer than it appears. Many people are strongly skewed toward either practical or abstract work. Your ability to shift between modes makes you particularly valuable in roles that bridge planning and execution — project coordination, technical consulting, or applied research where someone needs to translate ideas into action.`,
        },
        {
          title: `Grounded Perspective`,
          description: `You naturally ask whether ideas will actually work in practice, bringing a reality-check mindset to discussions without dismissing theoretical contributions.`,
        },
        {
          title: `Adaptive Problem-Solving`,
          description: `You draw on both practical experience and analytical thinking when facing problems, giving you a wider toolkit than specialists in either area.`,
        },
      ],

      growthEdges: [
        {
          title: `Committing to Depth`,
          teaser: `Your versatility can become a limitation if it prevents you from developing deep expertise in any single practical domain.`,
          fullExplanation: `Moderate Realistic scorers sometimes struggle with the commitment required to build genuine mastery in a hands-on field. You're comfortable enough to dabble in many practical areas but may not push through the discomfort phase where real skill develops.

If your career goals include roles that require deep practical expertise — engineering, surgery, skilled trades — you'll need to deliberately choose depth over breadth for a sustained period. This doesn't mean abandoning your other interests; it means strategically sequencing when you develop different capabilities.

Consider a phased approach: commit to intensive skill-building in one practical domain for 6-12 months, then reassess. You may discover a deeper aptitude than you expected, or you may confirm that your strength lies in integration rather than specialisation.`,
          premiumHook: `Get a personalised depth-vs-breadth career strategy based on your full RIASEC profile.`,
        },
        {
          title: `Recognising Your Practical Intelligence`,
          teaser: `You may undervalue your hands-on capabilities because they don't come as effortlessly as they do for highly Realistic types.`,
          fullExplanation: `Moderate scorers often benchmark themselves against the most practically skilled people they know and conclude they're "not really handy" or "not a builder." This comparison is misleading — your practical competence is genuine, even if it's not your primary identity.

The risk is that you avoid practical challenges that would actually suit you well, defaulting to more comfortable abstract or social work. You might decline a hands-on project, skip a technical training opportunity, or undersell your practical experience in interviews.

Reframe your moderate Realistic orientation as an asset rather than a deficiency. In most workplaces, the people who can both do the work and discuss the work are the most valuable team members. Your ability to cross that boundary is a strength worth marketing deliberately.`,
          premiumHook: `Discover how to position your practical-plus-conceptual skill set for maximum career impact.`,
        },
      ],

      careerPaths: `You're well-suited to roles that combine practical elements with other skill domains. Project management, technical sales, operations management, and applied consulting all let you use your hands-on competence without being exclusively defined by it.

Healthcare roles like occupational therapy, physical therapy, or dental hygiene blend practical skill with interpersonal care. Education roles in technical subjects — shop class, engineering fundamentals, science labs — let you teach through demonstration. Quality assurance and inspection roles use your practical eye in a structured framework.

The key is finding roles where practical competence is valued alongside other skills rather than roles that are purely hands-on or purely conceptual. You'll feel most fulfilled when your practical grounding enhances your effectiveness in a broader role.`,

      workEnvironment: `You work best in environments that mix physical and intellectual activity. Offices with maker spaces, labs with adjacent meeting rooms, or field roles with planning components all suit your style. Pure desk work may bore you over time, but pure physical work may not engage your other interests fully.

You value workplaces that respect practical competence — organisations where the people who build and fix things have as much status as the people who plan and strategise. Environments that separate "thinkers" from "doers" will frustrate you because you identify with both.`,

      collaborationStyle: `You're comfortable working with both highly practical teams and more conceptual groups, often serving as a translator between them. You can explain a technical constraint in plain language or get your hands dirty when the team needs someone to prototype an idea.

Your collaboration challenge is ensuring you contribute your practical perspective rather than deferring to louder voices. In meetings dominated by abstract thinkers, your grounded observations are valuable — but you need to voice them. Practice leading with concrete examples: instead of critiquing an idea abstractly, describe what it would look like to implement.`,

      energyDrains: [
        `Environments that completely separate thinking from doing`,
        `Roles with no tangible deliverables or physical variety`,
        `Workplaces that undervalue practical competence`,
        `Projects where planning never transitions to execution`,
      ],

      motivators: [
        `Roles that blend hands-on work with planning or communication`,
        `Seeing how your practical contributions fit into a larger outcome`,
        `Workplaces that respect both conceptual and practical intelligence`,
        `Opportunities to learn new practical skills alongside your existing strengths`,
        `Variety in daily tasks — some desk work, some active work`,
      ],

      toolkit: [
        {
          title: `Map Your Practical Sweet Spot`,
          context: `Understanding which practical activities you enjoy most helps you target hybrid roles.`,
          action: `List the last 10 times you felt engaged doing something hands-on. Identify patterns: is it building, fixing, operating, or designing? Use this to filter job descriptions.`,
        },
        {
          title: `Bridge the Gap`,
          context: `Your value lies in connecting practical execution with higher-level thinking.`,
          action: `In your current role, volunteer for projects that require someone to translate between the planning team and the implementation team. This builds your reputation as a practical integrator.`,
        },
        {
          title: `Maintain Hands-On Skills`,
          context: `As you advance, practical skills can atrophy if you don't use them.`,
          action: `Dedicate at least 2-3 hours per week to hands-on activities — personal projects, volunteer builds, or maintaining a technical hobby — to keep your practical edge sharp.`,
        },
      ],
    },

    low: {
      overview: `You're not strongly drawn to hands-on, physical, or mechanical work. This doesn't mean you're incapable of it — just that it's not where your energy or enthusiasm naturally flows. You prefer working with ideas, people, data, or systems rather than physical materials and tools.

People with low Realistic scores tend to process information more effectively through reading, discussion, and abstract reasoning than through direct physical interaction. Your strengths lie elsewhere on the RIASEC spectrum, and understanding this helps you avoid careers that would drain you by demanding constant practical, hands-on engagement.

This is worth knowing because many career paths are marketed around practical skills — and societal messaging can make you feel like you "should" be handy or physically competent. Your low Realistic score is information, not a deficiency. It tells you where to invest your development energy for the highest return.`,

      strengths: [
        {
          title: `Conceptual Orientation`,
          description: `You think in ideas, frameworks, and relationships between concepts — a cognitive style that excels in knowledge work, strategy, and creative fields.`,
          deepDive: `Research on cognitive styles shows that people with lower Realistic orientations often have compensating strengths in verbal reasoning, abstract pattern recognition, or interpersonal intelligence. Your brain allocates processing power to the domains that interest you most, and those domains happen to be non-physical. This is an efficient allocation — you've developed depth where it matters most to you.`,
        },
        {
          title: `Comfort with Abstraction`,
          description: `You're at ease with ambiguity, theoretical discussions, and work that doesn't have immediately tangible outputs.`,
        },
        {
          title: `Delegation Intelligence`,
          description: `You naturally recognise when a task requires hands-on expertise you don't have, and you're comfortable bringing in specialists rather than struggling through it yourself.`,
        },
      ],

      growthEdges: [
        {
          title: `Basic Practical Literacy`,
          teaser: `Avoiding all hands-on engagement can create blind spots that limit your effectiveness, even in primarily conceptual roles.`,
          fullExplanation: `Even in roles that are primarily intellectual or interpersonal, some practical competence matters. Understanding how physical systems work — at a basic level — helps you communicate with technical teams, estimate project feasibility, and avoid proposing solutions that are theoretically elegant but practically impossible.

This doesn't mean you need to become a mechanic or a carpenter. It means developing enough hands-on literacy to understand what's involved when you ask someone else to build, install, or repair something. This knowledge makes you a better manager, a better client, and a better collaborator.

Start small: learn to use basic tools, take a short course in a practical skill that's adjacent to your work, or shadow a hands-on colleague for a day. The goal is functional literacy, not mastery.`,
          premiumHook: `Get a personalised list of practical skills worth developing based on your career path and full RIASEC profile.`,
        },
        {
          title: `Avoiding Practical Avoidance`,
          teaser: `Your low Realistic score can become a self-reinforcing pattern where you avoid hands-on situations, which prevents you from discovering practical capabilities you might actually enjoy.`,
          fullExplanation: `Low Realistic scorers sometimes develop a narrative that they're "not handy" or "not a physical person," then organise their lives to confirm that narrative. This avoidance pattern can be costly — not because you need to love hands-on work, but because occasional practical engagement keeps you grounded and connected to the physical world in ways that benefit your mental health and cognitive flexibility.

Research on cognitive cross-training suggests that engaging with non-preferred modes of thinking strengthens overall cognitive performance. Spending time in hands-on activity can actually improve your abstract thinking by giving your verbal and analytical circuits a rest.

The fix isn't forcing yourself into a practical career — it's building regular, low-stakes practical activities into your life. Cooking, gardening, simple home repairs, or a craft hobby all provide the grounding benefits without requiring you to change your career direction.`,
          premiumHook: `Discover the practical cross-training activities that provide the highest cognitive benefits for your specific thinking style.`,
        },
      ],

      careerPaths: `Your career strengths lie in domains that primarily engage ideas, people, or data rather than physical materials. Knowledge work — writing, research, consulting, analysis, strategy — plays to your natural orientation. Creative fields that are more conceptual than physical — copywriting, UX design, content strategy, brand development — also align well.

People-centred professions — counselling, teaching, human resources, community organising — let you work through interpersonal connection rather than physical tools. Management and administrative roles that focus on coordination, communication, and decision-making are also strong fits.

The key is being honest about what energises you rather than chasing prestige in practical domains that will drain you. A career that leverages your actual strengths will always outperform one that requires constant effort in areas you don't naturally enjoy.`,

      workEnvironment: `You're most comfortable in environments designed for thinking, conversation, and focused knowledge work. Offices, libraries, co-working spaces, and home offices all suit your style. You don't need physical variety in your environment — mental variety and intellectual stimulation matter more.

You do well in workplaces where expertise is valued over physical presence — where the quality of your ideas, writing, or analysis matters more than whether you can lift heavy objects or operate machinery. Remote and hybrid work often suits low Realistic scorers well because it eliminates the physical commute and lets you design your workspace for cognitive comfort.`,

      collaborationStyle: `You contribute to teams through ideas, analysis, communication, and coordination rather than hands-on execution. You're the person who clarifies the problem, drafts the plan, or facilitates the discussion — not the person who picks up the wrench. This is a valuable and necessary role in any team.

Your collaboration challenge is respecting and valuing practical contributions from highly Realistic colleagues. It's easy to unconsciously prioritise intellectual work over physical work, but the best outcomes come from teams where both are valued equally. Practice asking hands-on team members about their reasoning and process — you'll learn something, and they'll feel valued.`,

      energyDrains: [
        `Extended physical labour or manual work`,
        `Roles that are primarily about operating equipment or tools`,
        `Environments with no intellectual stimulation or abstract thinking`,
        `Being evaluated primarily on physical output or manual skill`,
      ],

      motivators: [
        `Intellectually stimulating problems and discussions`,
        `Work that values ideas, communication, and strategic thinking`,
        `Environments designed for focused cognitive work`,
        `Roles where your output is measured by quality of thought, not physical production`,
        `Freedom to work in settings that suit your thinking style`,
      ],

      toolkit: [
        {
          title: `Own Your Orientation`,
          context: `Stop apologising for not being handy. Your strengths are elsewhere, and that's strategically valuable.`,
          action: `Rewrite your professional narrative to lead with your actual strengths. Replace self-deprecating comments about practical skills with confident statements about your conceptual, interpersonal, or analytical capabilities.`,
        },
        {
          title: `Build Practical Bridges`,
          context: `Even in non-practical roles, understanding hands-on work helps you collaborate effectively.`,
          action: `Once per quarter, spend a half-day shadowing or assisting someone in a hands-on role related to your work. The goal is literacy and empathy, not skill-building.`,
        },
        {
          title: `Choose Grounding Activities`,
          context: `Some low-stakes physical activity benefits your overall cognitive performance.`,
          action: `Pick one practical hobby — cooking, gardening, woodworking, pottery — and commit to 30 minutes per week. Treat it as cognitive cross-training, not career development.`,
        },
      ],
    },
  },
};
