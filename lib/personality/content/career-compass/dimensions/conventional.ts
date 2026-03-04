import type { CareerDimensionContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "conventional";

export const CONVENTIONAL: CareerDimensionContent = {
  id: "conventional",
  label: "Conventional",
  shortLabel: "Conventional",
  color: "#93A2B6",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  levels: {
    high: {
      overview: `You have a strong orientation toward order, structure, and systematic processes. You're the person who sees the chaos in a disorganised system and feels a genuine pull to fix it — not because someone asked you to, but because disorder bothers you on a fundamental level. This isn't rigidity; it's a cognitive strength rooted in pattern recognition and detail sensitivity.

People with high Conventional scores bring something essential to every organisation: the ability to create and maintain the systems that let everyone else do their work. Without people like you, creative ideas never get implemented, financial records become unreliable, and projects drift past deadlines. You are the infrastructure that makes ambition possible.

Your career satisfaction depends on working within clear frameworks where attention to detail is valued and rewarded. Roles that are entirely improvised, constantly ambiguous, or dismissive of process will drain you quickly — not because you can't adapt, but because they waste the capabilities you're best at deploying.`,

      strengths: [
        {
          title: `Systematic Thinking`,
          description: `You naturally organise information into structured frameworks, making complex processes manageable and repeatable.`,
          deepDive: `This strength reflects a cognitive architecture that excels at categorisation, sequencing, and rule-based reasoning. Research on cognitive styles shows that systematic thinkers process information more efficiently than average in structured environments — your brain is literally optimised for the kind of work that conventional roles demand. This isn't a personality quirk; it's a genuine information-processing advantage.`,
        },
        {
          title: `Error Detection`,
          description: `You notice discrepancies, inconsistencies, and deviations from established standards that others routinely overlook.`,
        },
        {
          title: `Process Optimisation`,
          description: `You don't just follow systems — you improve them. You identify redundancies, bottlenecks, and inefficiencies and design solutions that make workflows smoother.`,
        },
      ],

      growthEdges: [
        {
          title: `Tolerating Productive Ambiguity`,
          teaser: `Your need for structure can lead you to impose premature order on situations that benefit from remaining open and exploratory.`,
          fullExplanation: `Highly Conventional individuals sometimes close down options too early. When a project is in its conceptual phase, the ambiguity feels uncomfortable, and your instinct is to structure it immediately — to create a plan, a timeline, a checklist. But some problems need to stay messy for a while before the right structure becomes apparent.

This matters most in roles that involve innovation, strategy, or creative development. If you're leading or contributing to a project that requires genuine novelty, premature structure can kill the best ideas before they're fully formed. The solution isn't abandoning your structural orientation — it's developing a conscious practice of delaying organisation until the right moment.

Try this: when a new project begins, explicitly label the first phase as "exploration" and give yourself permission to collect information without organising it. Set a deadline for when structure kicks in. This satisfies your need for a framework while preserving space for the unexpected.`,
          premiumHook: `Discover the specific techniques that help structured thinkers embrace productive ambiguity without losing their systematic edge.`,
        },
        {
          title: `Leading Beyond Compliance`,
          teaser: `Your attention to rules and procedures may cause others to see you as focused on compliance rather than vision.`,
          fullExplanation: `High Conventional scorers sometimes develop a reputation as the "rules person" — valuable for quality control but not seen as strategic or visionary. This is partly an unfair perception, but it can limit career advancement if you don't actively counter it.

The issue isn't that you lack strategic capability — it's that your communication style tends to emphasise process, accuracy, and adherence to standards, which can overshadow your bigger-picture thinking. When you raise concerns about procedure in a meeting, others may hear "obstacle" rather than "quality assurance."

The fix is intentional communication framing. Lead with the strategic benefit, then connect it to the procedural detail. Instead of saying "we're not following the established process," try "here's how we can protect the project timeline" — same concern, different framing. Over time, this reframes your structural orientation as strategic thinking rather than bureaucratic caution.`,
          premiumHook: `Learn the communication reframing techniques that help detail-oriented professionals build strategic influence.`,
        },
      ],

      careerPaths: `Your highest career satisfaction will come from roles where precision, organisation, and systematic thinking are core to the job. Finance and accounting — from bookkeeping to financial analysis to auditing — directly reward your attention to detail and comfort with numerical data. Compliance and regulatory roles across industries (healthcare, finance, legal) value your rule-following orientation.

Data management, database administration, and information architecture let you create the systems that organisations depend on. Project management and operations management use your systematic thinking to coordinate complex workflows. Administrative leadership — office management, executive assistance, records management — puts you at the hub of organisational function.

Quality assurance, supply chain management, and logistics are strong fits where your detail orientation directly impacts business outcomes. As you advance, consider specialisations like Six Sigma, lean management, or business process reengineering, which formalise the kind of systematic improvement you naturally gravitate toward.`,

      workEnvironment: `You thrive in well-organised environments with clear procedures, defined roles, and established standards. This doesn't mean you need a rigid or bureaucratic workplace — it means you work best when there's a logical framework underlying daily operations. You appreciate clean workspaces, reliable technology, and well-maintained filing systems.

Predictability matters to you — not because you can't handle surprises, but because surprises disrupt the systems you've carefully built. Organisations that value process improvement, quality standards, and data integrity feel like home. You do well in both corporate and government settings where institutional knowledge and procedural expertise are respected and rewarded.`,

      collaborationStyle: `You contribute to teams by creating the structure that makes collaboration possible — agendas, timelines, shared documents, tracking systems. You're the person who turns a brainstorming session into an action plan, and your teammates rely on you for this even if they don't always acknowledge it explicitly.

Your collaboration challenge is flexibility. When team members deviate from the agreed plan — as they inevitably will — your instinct is to pull them back to the structure. This is valuable when the deviation is genuinely off-track, but it can stifle productive improvisation. Develop a filter: ask yourself whether the deviation threatens the outcome or just the process. If it's the latter, let it go.`,

      energyDrains: [
        `Chaotic environments with no clear processes or accountability`,
        `Roles that require constant improvisation with no planning time`,
        `Workplaces that dismiss attention to detail as unnecessary or "nitpicking"`,
        `Ambiguous roles with undefined responsibilities and shifting expectations`,
        `Teams that repeatedly ignore agreed-upon procedures`,
      ],

      motivators: [
        `Creating and optimising systems that others rely on`,
        `Work that rewards precision, accuracy, and attention to detail`,
        `Clear expectations, defined metrics, and structured feedback`,
        `Seeing the measurable impact of your organisational improvements`,
        `Roles with established professional standards and development paths`,
      ],

      toolkit: [
        {
          title: `Quantify Your Impact`,
          context: `Your contributions are often invisible because they prevent problems rather than solving dramatic ones.`,
          action: `Track the measurable outcomes of your systems and processes — errors prevented, time saved, accuracy improved. Present these metrics in performance reviews and career conversations.`,
        },
        {
          title: `Develop Strategic Framing`,
          context: `Your procedural expertise is more valuable than most people realise, but you need to frame it strategically.`,
          action: `Before raising a process concern in a meeting, translate it into business impact language: time, money, risk, or quality. Lead with the impact, then explain the process solution.`,
        },
        {
          title: `Build Flexibility Deliberately`,
          context: `Structured thinkers benefit from intentional practice in unstructured situations.`,
          action: `Once per month, take on a task with no defined process — a creative project, an open-ended research question, or a new hobby with no instructions. Notice your discomfort and work through it.`,
        },
      ],
    },

    moderate: {
      overview: `You have a balanced relationship with structure and organisation. You appreciate clear processes and well-organised systems, but you don't need them to function effectively. You can impose order when it's needed and relax structure when it's not — a flexibility that many workplaces value highly.

This moderate Conventional orientation means you're comfortable in both structured and less structured environments, though you'll generally prefer some baseline of organisation. You're unlikely to create elaborate filing systems for their own sake, but you'll set up efficient workflows when the situation calls for it.

Your career sweet spot involves roles where organisational skills are useful but not the primary requirement. You bring enough structure to be reliable and efficient without being so process-focused that you resist change or innovation.`,

      strengths: [
        {
          title: `Adaptive Organisation`,
          description: `You can create structure when it's needed and drop it when flexibility serves better — a rare and valuable capability.`,
          deepDive: `Most people are either strongly structured or strongly flexible. Your moderate Conventional score places you in the productive middle, where you can read the situation and respond appropriately. In organisational psychology terms, you have high "contextual adaptability" — the ability to match your organisational behaviour to the demands of the environment rather than imposing a fixed approach.`,
        },
        {
          title: `Practical Efficiency`,
          description: `You're naturally efficient without being rigid. You find workable shortcuts and sensible systems without over-engineering them.`,
        },
        {
          title: `Process-People Balance`,
          description: `You value both getting things right and keeping relationships healthy, which prevents the common tension between procedural accuracy and team morale.`,
        },
      ],

      growthEdges: [
        {
          title: `Choosing When to Systematise`,
          teaser: `Your adaptability can leave you without clear systems when you actually need them.`,
          fullExplanation: `Moderate Conventional scorers sometimes underestimate when a situation needs more structure. Because you can function in mild chaos, you may not build the systems that would make you significantly more effective. The result is that you spend time on organisational tasks that could be automated or systematised — managing things in your head that should be in a system.

The key is developing a trigger for when to invest in structure. A useful rule: if you've done the same organisational task manually more than three times, it's worth systematising. This captures the productivity gains of structure without over-engineering low-frequency tasks.

Audit your weekly workflow for recurring organisational friction — recurring scheduling, repeated file searching, manual tracking that could be templated. These are your highest-leverage systematisation opportunities.`,
          premiumHook: `Get a personalised workflow audit framework designed for moderate-structure professionals.`,
        },
        {
          title: `Positioning Your Organisational Skills`,
          teaser: `You may not think of yourself as "organised" compared to highly Conventional people, but your organisational skills are stronger than you recognise.`,
          fullExplanation: `Moderate scorers often benchmark against the most organised people they know and conclude they're average. In reality, your organisational capability is above average for the general population — you just don't make it your identity.

This underselling can cost you professionally. Roles that require project coordination, operations management, or process improvement may not occur to you as good fits, even though your moderate Conventional orientation combined with your other RIASEC strengths makes you well-suited to them.

Consider reframing your organisational skills as a secondary strength that amplifies your primary ones. If you're also high in Social, you're a team coordinator. If you're high in Enterprising, you're an operational leader. If you're high in Investigative, you're a systematic researcher. The Conventional component makes everything else more effective.`,
          premiumHook: `Discover how your Conventional score amplifies your other RIASEC dimensions for maximum career impact.`,
        },
      ],

      careerPaths: `Your moderate organisational orientation makes you well-suited to roles that require structure as a supporting skill rather than the central focus. Project coordination, programme management, and operations roles that blend people and process are strong fits. Roles in marketing, communications, or product management benefit from your ability to keep campaigns and sprints on track without being purely administrative.

Healthcare administration, educational coordination, and non-profit programme management all combine your organisational capability with a people-centred mission. Business analysis, management consulting, and change management value your ability to see both the system and the human elements.

The key is finding roles where your organisational skills serve a larger purpose you care about, rather than roles where organisation is the purpose.`,

      workEnvironment: `You work best in environments that have baseline structure — regular meetings, shared documentation, some predictable rhythms — without being overly rigid. Agile environments with sprints and retrospectives suit you well because they provide cyclical structure with built-in flexibility.

You adapt well to most workplace settings as long as there's some shared understanding of how things work. What frustrates you is either extreme: total chaos with no shared systems, or suffocating bureaucracy that prevents anything from getting done efficiently.`,

      collaborationStyle: `You're a reliable collaborator who keeps track of what was agreed and follows through on commitments. Teams appreciate your consistency without experiencing you as controlling or inflexible. You naturally take on coordination tasks when no one else does, which makes you the de facto organiser of many groups.

Be intentional about when you step into the organiser role. If you always default to it, you may not get opportunities to contribute in other ways. Practice letting someone else handle logistics occasionally so your other strengths can be visible.`,

      energyDrains: [
        `Environments with no shared systems or accountability`,
        `Roles that are purely administrative with no broader purpose`,
        `Excessive bureaucracy that serves no real function`,
        `Teams that repeatedly agree to processes, then ignore them`,
      ],

      motivators: [
        `Roles that blend organisation with other meaningful activities`,
        `Seeing your systems make other people's work easier`,
        `Workplaces with reasonable structure and shared expectations`,
        `Opportunities to improve processes without being boxed into an "admin" role`,
        `Working with teams that value reliability and follow-through`,
      ],

      toolkit: [
        {
          title: `Audit Your Organisational Friction`,
          context: `You may be tolerating inefficiencies that a simple system could fix.`,
          action: `Spend one week noting every time you repeat an organisational task manually. Pick the top 3 and create a lightweight system — a template, a recurring calendar block, or an automated reminder.`,
        },
        {
          title: `Market Your Coordination Skills`,
          context: `Your organisational capability is an asset, even if it's not your primary identity.`,
          action: `In your next performance review or interview, cite one specific example where your organisational skills improved a project outcome. Frame it in impact terms: time saved, errors prevented, or team productivity gained.`,
        },
        {
          title: `Set Boundaries on the Organiser Role`,
          context: `You naturally absorb coordination tasks, which can crowd out other contributions.`,
          action: `In your next team project, explicitly delegate the logistics to someone else and commit to contributing in a different capacity — strategy, content, or relationship building.`,
        },
      ],
    },

    low: {
      overview: `You're not naturally drawn to structured processes, detailed record-keeping, or systematic organisation. This doesn't mean you're disorganised by default — it means that creating and maintaining elaborate systems isn't where your energy or enthusiasm flows. You'd rather spend your time on ideas, people, creative projects, or strategic thinking than on filing, scheduling, and compliance.

People with low Conventional scores often experience organisational demands as friction — necessary but draining. When you're forced to spend significant time on paperwork, data entry, or procedural compliance, you feel your energy and motivation drain noticeably. This is useful information for career planning: it tells you to seek roles where someone else handles the operational infrastructure.

Your low Conventional score becomes problematic only when you avoid all structure entirely. Some baseline organisation is necessary in any career, and understanding your minimum viable structure — the least amount of organisation needed to function effectively — is a practical skill worth developing.`,

      strengths: [
        {
          title: `Comfort with Ambiguity`,
          description: `You operate effectively in situations where rules haven't been written yet and structure hasn't been imposed. This makes you valuable in startups, innovation roles, and rapidly changing environments.`,
          deepDive: `Research on entrepreneurial cognition shows that comfort with ambiguity is one of the strongest predictors of success in unstructured environments. While highly Conventional individuals may freeze when there's no established procedure, you naturally improvise, experiment, and iterate. This cognitive flexibility is particularly valuable in early-stage ventures, creative projects, and organisational transformations where the old rules no longer apply.`,
        },
        {
          title: `Big-Picture Focus`,
          description: `You naturally focus on outcomes and direction rather than getting absorbed in procedural details, which helps you maintain strategic perspective.`,
        },
        {
          title: `Change Readiness`,
          description: `You adapt to new situations, shifting priorities, and organisational changes with less resistance than structure-dependent colleagues.`,
        },
      ],

      growthEdges: [
        {
          title: `Building Minimum Viable Structure`,
          teaser: `Your aversion to systems can create chaos that undermines your other strengths.`,
          fullExplanation: `Low Conventional scorers sometimes confuse structure with restriction. They see filing systems, project management tools, and documented procedures as bureaucratic overhead rather than productivity infrastructure. This perspective works when you're the only person affected by your organisational style — but it breaks down in collaborative environments.

When your disorganisation impacts others — missed deadlines, lost files, forgotten commitments — it erodes the trust that your other strengths build. The most talented creative or strategic thinker loses credibility when they consistently can't find the document they need or remember the meeting they agreed to.

The solution is minimum viable structure: identify the 3-5 organisational systems that would eliminate your most frequent friction points and commit to maintaining only those. You don't need to become a systematic person — you need to prevent your lack of system from becoming a liability.`,
          premiumHook: `Get a personalised minimum-viable-structure framework designed specifically for low-structure professionals.`,
        },
        {
          title: `Respecting Detail-Oriented Colleagues`,
          teaser: `You may unconsciously dismiss or undervalue the contributions of highly organised team members.`,
          fullExplanation: `Low Conventional scorers sometimes develop a subtle bias against procedural work and the people who do it well. Comments like "just make it work" or "don't overthink the process" can alienate colleagues whose organisational skills are essential to project success. You may not realise how much their behind-the-scenes structure enables your more visible contributions.

This isn't about pretending to love spreadsheets. It's about recognising that organisational work is real work with genuine intellectual demands, and that the people who do it well are exercising a different form of intelligence rather than a lesser one.

Practice explicit appreciation: when a colleague's organisational work makes your job easier — and it does, more often than you realise — tell them. This builds stronger working relationships and gives you a more realistic view of what it takes to deliver results.`,
          premiumHook: `Discover how to build productive partnerships with detail-oriented colleagues that amplify both of your strengths.`,
        },
      ],

      careerPaths: `You'll be most fulfilled in roles where the structure is handled by someone else or by the system itself. Creative roles — writing, design, filmmaking, advertising — have built-in flexibility and reward innovation over compliance. Entrepreneurship and startup environments thrive on your comfort with ambiguity and your willingness to operate without established procedures.

Consulting, coaching, and facilitation roles value your ability to think on your feet without relying on rigid frameworks. Sales roles reward your improvisational style and outcome focus. Research and exploration roles — journalism, field research, travel writing — let you follow your curiosity without being tied to systematic procedures.

The key is pairing yourself with complementary team members or building minimal personal systems rather than trying to become more Conventional than you are. Your career strategy should be about maximising your other strengths, not fixing your "weakness" in organisation.`,

      workEnvironment: `You work best in flexible, dynamic environments where the culture values results over process. Flat organisations, creative agencies, startup cultures, and remote-work settings with high autonomy all suit your style. You need the freedom to organise your own work in whatever way makes sense to you, even if that way looks chaotic to others.

What you can't tolerate is heavy procedural oversight — detailed time tracking, elaborate approval chains, and standardised reporting that feels disconnected from actual outcomes. If an organisation's culture is primarily about compliance and protocol, you'll feel trapped regardless of how interesting the work itself is.`,

      collaborationStyle: `You bring energy, ideas, and adaptability to teams, but you may frustrate colleagues who depend on shared systems and predictable schedules. Your improvisational style works beautifully in brainstorming and crisis response but can create friction in execution phases where consistency matters.

Your most productive collaborations happen when you're paired with someone who provides the structural foundation — a project manager, an operations lead, or a detail-oriented partner. Rather than fighting this complementarity, lean into it. Be explicit about what you bring (creativity, strategy, adaptability) and what you need (someone to handle the logistics). This honesty prevents resentment and creates genuinely effective partnerships.`,

      energyDrains: [
        `Detailed record-keeping, filing, and data entry tasks`,
        `Rigid procedures with no room for improvisation`,
        `Roles that are primarily about maintaining existing systems`,
        `Environments that value compliance over creativity`,
        `Performance metrics focused on procedural adherence rather than outcomes`,
      ],

      motivators: [
        `Freedom to approach work in your own way`,
        `Dynamic environments where priorities shift and new opportunities emerge`,
        `Roles that reward results and innovation over process adherence`,
        `Working with teams that handle operational details so you can focus on strategy or creativity`,
        `Minimal bureaucracy between having an idea and executing it`,
      ],

      toolkit: [
        {
          title: `Identify Your 3 Essential Systems`,
          context: `You don't need to be organised in general — you need to be organised in the specific areas that impact your effectiveness.`,
          action: `Identify the 3 places where disorganisation costs you the most (missed deadlines? lost files? forgotten commitments?) and build a minimal system for each. Automate what you can — calendar reminders, auto-filing, task apps with notifications.`,
        },
        {
          title: `Partner with Structure`,
          context: `Your best work happens when someone else handles the operational infrastructure.`,
          action: `In your next project, explicitly identify who's handling the organisational backbone. If no one is, propose splitting roles: you handle the creative/strategic/people elements, and a Conventional-oriented colleague handles the process and tracking.`,
        },
        {
          title: `Acknowledge the Infrastructure`,
          context: `The organisational work others do enables your contributions, and recognising this builds stronger relationships.`,
          action: `This week, identify one person whose behind-the-scenes organisational work benefits you directly, and thank them specifically for what they do. Make this a monthly habit.`,
        },
      ],
    },
  },
};
