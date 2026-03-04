import type { CareerDimensionContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "investigative";

export const INVESTIGATIVE: CareerDimensionContent = {
  id: "investigative",
  label: "Investigative",
  shortLabel: "Investigative",
  color: "#328181",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  levels: {
    high: {
      overview: `Your strong Investigative orientation means you are fundamentally driven by intellectual curiosity and the satisfaction of solving complex problems. You thrive when you can dig deep into questions that have no obvious answers, follow evidence where it leads, and build rigorous understanding from first principles. Careers that reward analytical thinking, research, and systematic inquiry tend to feel like a natural fit rather than a compromise.

At this level, you likely find yourself drawn to roles where ambiguity is the norm and where your ability to tolerate uncertainty—while methodically reducing it—becomes a genuine asset. You may feel most energised when working on problems that require sustained focus, technical depth, or scientific reasoning. The "aha" moment of discovery, whether in data, theory, or systems, is often what keeps you engaged over the long term.

It's worth noting that high Investigative interest can sometimes pull you toward solitary or highly specialised work. Understanding how your analytical strengths interact with your other Holland dimensions (e.g., Social, Enterprising) can help you find roles that offer both intellectual challenge and the interpersonal or strategic elements you may also value.`,

      strengths: [
        {
          title: `Analytical Rigour`,
          description: `You naturally apply systematic, evidence-based thinking to complex problems. You're skilled at breaking down ambiguity into testable hypotheses and following logic to defensible conclusions.`,
          deepDive: `Research in cognitive psychology suggests that people with strong analytical orientations tend to engage in "deliberate" rather than "intuitive" processing when stakes are high—meaning you're more likely to slow down, weigh evidence, and avoid jumping to conclusions. This can be a significant advantage in roles where premature closure leads to costly errors. The trade-off is that you may sometimes over-analyse when speed matters; learning when to trust your gut (and when not to) can help you optimise your impact.`,
        },
        {
          title: `Intellectual Curiosity`,
          description: `You're motivated by the desire to understand how things work, not just to get results. This drives you to ask deeper questions, explore edge cases, and stay current with developments in your field.`,
        },
        {
          title: `Research and Synthesis`,
          description: `You excel at gathering disparate information, evaluating sources critically, and synthesising findings into coherent insights. You're comfortable with the iterative, often messy process of discovery.`,
        },
      ],

      growthEdges: [
        {
          title: `Balancing Depth with Speed`,
          teaser: `Your drive for thoroughness can sometimes slow you down when others need quick answers or when the cost of delay outweighs the benefit of precision.`,
          fullExplanation: `High Investigative types often struggle with the tension between doing work that feels "complete" and meeting the pace of decision-making in fast-moving environments. Organisations increasingly value people who can deliver "good enough" analysis quickly and iterate, rather than perfect analysis late. Learning to calibrate your depth of analysis to context—knowing when 80% certainty is sufficient versus when you need 99%—can dramatically expand the roles and teams where you thrive. Building explicit checkpoints ("I'll share a draft by Friday and refine based on feedback") can help you ship work without feeling you've compromised your standards.`,
          premiumHook: `Discover a practical framework for deciding when to go deep versus when to move fast—and how to communicate your reasoning to stakeholders who may not share your analytical patience.`,
        },
        {
          title: `Translating Analysis into Influence`,
          teaser: `Your insights may not land if they're not framed in ways that resonate with people who think differently. Analytical rigour alone rarely drives change.`,
          fullExplanation: `The most valuable analysts are those who can translate complex findings into narratives that motivate action. Many high-Investigative individuals default to presenting data, methodology, and caveats—which can overwhelm or bore decision-makers who want clear implications and recommendations. Developing the skill to lead with "so what?" and "what should we do?"—while keeping your analytical integrity—can multiply your impact. This often means investing in storytelling, visualisation, and understanding your audience's mental models.`,
          premiumHook: `Learn how to structure your recommendations so they land with executives, clients, and cross-functional partners—without feeling like you're "dumbing down" your work.`,
        },
      ],

      careerPaths: `Roles that explicitly reward analytical thinking and research are an obvious fit: data science, research science, engineering, medicine, economics, and academia. Within these fields, you'll find niches that vary in how much they emphasise pure inquiry versus applied problem-solving. If you lean toward the former, consider research roles in universities, think tanks, or R&D labs. If you prefer seeing your work translate into products or policy, applied research, consulting, or technical leadership may suit you better.

Industries undergoing rapid change—technology, healthcare, finance, and climate—often have strong demand for people who can make sense of complexity and uncertainty. Your ability to synthesise information and propose evidence-based solutions can position you well in strategy, product, or innovation roles, especially when combined with other interests (e.g., Enterprising for commercial impact, Social for user-centred design). Don't assume "Investigative" means only lab coats and PhDs; many high-impact analytical roles exist in business, government, and non-profits.`,

      workEnvironment: `You tend to perform best in settings that offer autonomy over how you approach problems, access to quality data or resources, and time for sustained focus. Open-plan offices with constant interruption can be draining; you may need to negotiate for quiet blocks, remote work, or dedicated "deep work" time. Environments that value intellectual honesty and evidence over politics or hierarchy tend to feel more aligned with your values.

Physical and psychological space for concentration matters. You may also thrive in cultures that tolerate—or even celebrate—productive failure, since research and analysis often involve dead ends and course corrections. Organisations that expect immediate, linear progress may feel frustrating. Look for teams that understand that good analysis takes time and that the best insights often emerge from iteration.`,

      collaborationStyle: `You likely prefer to work with people who share your commitment to rigour and evidence, or at least respect it. Collaborative settings where ideas are challenged on their merits—rather than on seniority or charisma—tend to bring out your best. You may find yourself taking on the "skeptic" or "devil's advocate" role in meetings, which can be valuable but may sometimes be perceived as negativity if not framed constructively.

When partnering with people who are more intuitive or action-oriented, you may need to consciously bridge the gap: offering clear summaries and recommendations rather than only sharing process, and inviting their input on framing and priorities. Your analytical contributions often shine when you're the person who asks the hard questions, spots the flawed assumption, or synthesises what others have missed—but doing this in a way that builds trust rather than defensiveness is a skill worth developing.`,

      energyDrains: [
        `Being asked to make decisions or recommendations without adequate data or time to analyse`,
        `Working in environments where politics, seniority, or popularity override evidence`,
        `Constant context-switching that prevents sustained focus on complex problems`,
        `Roles that require you to "sell" or advocate for ideas before you've fully tested them`,
        `Teams that dismiss nuance, caveats, or methodological rigor as "overthinking"`,
      ],

      motivators: [
        `Tackling problems that have no obvious answer and require genuine inquiry`,
        `Access to high-quality data, tools, or expertise that enable rigorous analysis`,
        `Recognition for the quality of your thinking, not just your output volume`,
        `Opportunities to learn and stay at the cutting edge of your field`,
        `Colleagues who challenge your assumptions and engage with your reasoning`,
      ],

      toolkit: [
        {
          title: `Calibrate Your Depth`,
          context: `You're facing a problem that could be analysed extensively, but time or resources are limited.`,
          action: `Before diving in, ask: "What's the smallest amount of analysis that would change the decision?" Focus there first. If the answer is "we need more," document what's missing and propose a follow-up.`,
        },
        {
          title: `Lead with the So-What`,
          context: `You're presenting findings to people who may not care about your methodology.`,
          action: `Structure your communication as: (1) key finding or recommendation, (2) why it matters for them, (3) supporting evidence. Put the "so what" in the first 30 seconds.`,
        },
        {
          title: `Protect Deep Work Time`,
          context: `Your calendar is filling with meetings and you're losing time for sustained analysis.`,
          action: `Block 2–4 hours of "focus time" per week as non-negotiable. Communicate this to your team. Use it for your most complex, high-leverage analytical work.`,
        },
      ],
    },

    moderate: {
      overview: `Your moderate Investigative orientation suggests you enjoy analytical work when it's purposeful and aligned with your interests, but you're not defined by it. You can engage with research, data, and problem-solving when the topic motivates you or when the outcome matters—but you're equally capable of moving forward with intuition, collaboration, or action when that feels more appropriate. This flexibility can be a real strength in roles that require both head and heart.

You likely find yourself in a sweet spot: you can hold your own in technical or analytical discussions and contribute meaningfully to evidence-based decisions, without feeling the need to go as deep as a specialist might. You may prefer roles where analysis is one tool among many, rather than the primary activity. Understanding when to lean into your analytical side versus when to rely on other strengths (from your other Holland dimensions) can help you design a career that feels balanced rather than pulled in one direction.`,

      strengths: [
        {
          title: `Selective Depth`,
          description: `You know when to go deep and when to move on. You can produce solid analysis when it matters, without getting stuck in endless refinement when the marginal return is low.`,
        },
        {
          title: `Bridging Analytical and Intuitive Thinking`,
          description: `You can translate between data-driven and gut-driven perspectives, making you valuable in teams that include both strong analysts and strong intuitives.`,
          deepDive: `Moderate Investigative types often occupy a "translator" role—they understand enough of the analytical language to ask good questions and evaluate quality, while also speaking the language of impact, relationships, or creativity. This can make you particularly effective in product management, consulting, or leadership roles where you need to synthesise multiple ways of knowing. The key is recognising this as a distinct strength rather than feeling you're "not analytical enough" or "not intuitive enough."`,
        },
        {
          title: `Pragmatic Problem-Solving`,
          description: `You're motivated by solving real problems, not abstract ones. Your analysis tends to be applied and outcome-focused, which can make your contributions highly actionable.`,
        },
      ],

      growthEdges: [
        {
          title: `Knowing When to Go Deeper`,
          teaser: `There may be times when your tendency to move on quickly means you miss important nuance or make decisions on insufficient evidence.`,
          fullExplanation: `Moderate Investigative types sometimes under-invest in analysis when the stakes are high or when the problem is genuinely complex. The challenge is developing a sense for when "good enough" is actually good enough versus when it's a shortcut that will cost you later. Building a habit of asking "what would we need to know to be more confident?" before major decisions can help. You don't need to do all the analysis yourself—sometimes the right move is to flag the gap and involve someone with stronger analytical appetite—but recognising when you're skating on thin ice is a skill worth honing.`,
          premiumHook: `Learn a simple decision framework for when to invest in deeper analysis versus when to trust your judgment and move forward.`,
        },
        {
          title: `Sustaining Interest in Technical Depth`,
          teaser: `You may find your attention drifting when topics become highly specialised or when the connection to real-world impact feels distant.`,
          fullExplanation: `If you're in a role that requires periodic deep dives into technical or research-heavy material, you may struggle to maintain engagement when the subject matter doesn't naturally excite you. Strategies that can help: (1) always connect the work to a concrete outcome or person who benefits, (2) use time-boxing so you know there's an end in sight, (3) pair with someone who loves the depth and can do the heavy lifting while you focus on synthesis and application. There's no shame in preferring applied over pure work—the key is designing your role and projects to match.`,
          premiumHook: `Discover how to structure technical or research tasks so they stay engaging even when the topic isn't your natural passion.`,
        },
      ],

      careerPaths: `You're well-suited to roles that blend analytical work with other dimensions: product management (analysis + strategy + people), consulting (analysis + client relationships + implementation), policy or programme management (analysis + systems change), or specialised roles in marketing, operations, or HR that require both data literacy and interpersonal skill. The common thread is that analysis is a means to an end, not the end itself.

Industries that value "T-shaped" professionals—broad capability with depth in selected areas—often fit moderate Investigative types well. You may thrive in generalist or hybrid roles where you're expected to understand data, contribute to research, and also lead projects, influence stakeholders, or drive execution. Avoid roles that are purely analytical with little variety, or purely non-analytical with no room for evidence-based thinking. The sweet spot is where you can toggle between modes.`,

      workEnvironment: `You tend to do best in environments that offer a mix of focused analytical work and more interactive, varied tasks. Pure open-plan or pure isolation may both feel off; you likely want the option to concentrate when needed and to collaborate when that adds value. Flexibility in how and where you work can help you match your environment to the type of thinking required.

Cultures that value both rigor and pragmatism tend to feel aligned. You may feel frustrated in places that are either too "touchy-feely" (dismissing data) or too "ivory tower" (analysis for its own sake). Look for teams that ask "what does the data say?" and "what should we do about it?" in equal measure.`,

      collaborationStyle: `You're often the person who can bridge analytical and non-analytical team members. You may find yourself translating technical findings for stakeholders, or bringing a dose of evidence to discussions that might otherwise run on opinion alone. Your moderate Investigative orientation means you're rarely the most technical person in the room, nor the most purely intuitive—and that in-between position can be powerful for facilitation and synthesis.

You may need to be intentional about when to advocate for more analysis versus when to support moving forward. If you default to "let's just do it," you might under-serve teams that need your analytical voice. If you default to "we need more data," you might slow things down unnecessarily. Reading the room and the stakes can help you calibrate.`,

      energyDrains: [
        `Roles that are either purely analytical with no variety, or purely operational with no room for evidence-based thinking`,
        `Being expected to produce research or analysis on topics that feel irrelevant or disconnected from impact`,
        `Teams that dismiss data entirely or that fetishise it to the exclusion of judgment`,
        `Lack of access to tools, data, or expertise when you do want to go deeper`,
        `Constant pressure to move fast without any opportunity to pause and analyse`,
      ],

      motivators: [
        `Problems that connect analysis to tangible outcomes or people you care about`,
        `Variety between analytical work and other types of contribution`,
        `Colleagues who value both rigor and pragmatism`,
        `Opportunities to learn and apply new analytical skills when the topic interests you`,
        `Recognition for your ability to bridge different ways of thinking`,
      ],

      toolkit: [
        {
          title: `Flag the Gap`,
          context: `A decision is being made and you sense the analysis might be insufficient, but you're not sure.`,
          action: `Ask aloud: "What would we need to know to feel more confident about this?" You don't have to do the analysis yourself—often naming the gap is enough to prompt the right person to dig in or to surface that the gap is acceptable.`,
        },
        {
          title: `Connect Analysis to Impact`,
          context: `You're facing analytical work that feels abstract or tedious.`,
          action: `Before starting, write one sentence: "This matters because [concrete outcome or person]." Refer back to it when your attention flags. If you can't write it, consider whether the work is truly necessary or could be delegated.`,
        },
        {
          title: `Time-Box Deep Dives`,
          context: `You need to go deeper on something but worry about losing momentum.`,
          action: `Set a fixed time limit (e.g., 2 hours or 1 day). Work within it, then step back. Ask: "Did I learn enough to change the decision? If not, what's the smallest next step?" This prevents both under-investment and over-investment.`,
        },
      ],
    },

    low: {
      overview: `Your low Investigative orientation suggests that pure analytical work, research for its own sake, or highly technical problem-solving is not where you naturally get energy. You may prefer to rely on intuition, experience, or collaboration when making decisions, and you might find extended periods of solitary analysis draining rather than fulfilling. This doesn't mean you're incapable of analytical thinking—many low-Investigative individuals are sharp and logical—but it's not your default mode or primary source of satisfaction.

Careers that require constant deep analysis, extensive research, or highly technical specialisation may feel like a poor fit. You're likely to thrive in roles that emphasise relationships, action, creativity, or practical execution—where analysis is a supporting tool rather than the main event. Understanding this can help you avoid roles that would leave you chronically under-energised, and instead lean into environments where your strengths are centred.`,

      strengths: [
        {
          title: `Action-Oriented Decision-Making`,
          description: `You're comfortable moving forward when the path isn't perfectly clear. You prefer to learn by doing rather than by analysing every possible outcome, which can be valuable in fast-moving contexts.`,
        },
        {
          title: `Intuitive and Practical Judgment`,
          description: `You often sense the right direction without needing to formalise every step. Your judgment may be informed by experience, pattern recognition, or gut feel—and when it's well-calibrated, it can be highly effective.`,
          deepDive: `Research on decision-making suggests that experts in many domains rely heavily on intuition—often without being able to articulate their reasoning. Low-Investigative types may have strong "recognition-primed" decision-making: they've seen enough similar situations to know what feels right. The risk is overconfidence when the situation is novel or when the stakes are high. The key is knowing when to slow down and seek analytical input—and when to trust your instincts. Building a small network of people you can call for a "sanity check" can help.`,
        },
        {
          title: `Focus on People and Outcomes`,
          description: `You're motivated by the human impact of work—who benefits, how it feels, what changes. This can make you effective in roles where understanding people matters more than crunching numbers.`,
        },
      ],

      growthEdges: [
        {
          title: `When Analysis Is Non-Negotiable`,
          teaser: `Some decisions genuinely require evidence, data, or structured reasoning. Avoiding analysis in those moments can lead to costly errors or lost credibility.`,
          fullExplanation: `Low-Investigative types sometimes dismiss or shortcut analytical work even when it's essential—whether because of regulatory requirements, stakeholder expectations, or the inherent complexity of the problem. The challenge is developing a sense for when "we need to look at the data" is the right call. Building a habit of asking "what would a skeptical outsider want to see before believing this?" can help. You don't have to do the analysis yourself—delegating to a colleague, hiring a consultant, or using simple frameworks can suffice—but recognising when evidence is required, and ensuring it's gathered, protects both you and your organisation.`,
          premiumHook: `Learn to recognise the situations where skipping analysis is risky—and simple ways to get the rigor you need without doing it all yourself.`,
        },
        {
          title: `Engaging with Data When It Matters`,
          teaser: `You may tune out when conversations get technical or data-heavy, which can leave you out of the loop on important decisions.`,
          fullExplanation: `In many modern roles, some level of data literacy is expected. Low-Investigative types don't need to become data scientists, but they often benefit from being able to read a chart, ask a good question about methodology, or know when to call in an expert. The key is finding the minimum viable engagement—enough to participate meaningfully in data-informed discussions without having to love the process. Framing data as "stories about people" or "evidence for what we suspect" can make it more accessible. So can having a trusted analyst who can translate for you.`,
          premiumHook: `Discover practical ways to stay engaged with data and evidence without it feeling like a chore—and how to contribute to data-driven decisions even when you're not the analyst.`,
        },
      ],

      careerPaths: `Roles that centre relationships, creativity, execution, or influence are likely to feel more aligned than those that centre research or technical analysis. Consider careers in people-focused functions (HR, sales, customer success, community building), creative fields (design, content, marketing), hands-on or practical work (trades, operations, logistics), or leadership and entrepreneurship where vision and relationships matter as much as or more than analysis.

This doesn't mean avoiding data entirely—most roles now expect basic literacy with metrics and evidence. But the ideal fit is one where analysis supports your work rather than defines it. You may excel in generalist or "connector" roles where your ability to read people, move quickly, and drive action is the primary value. Avoid highly technical or research-intensive tracks unless other dimensions of your profile pull you strongly in that direction.`,

      workEnvironment: `You tend to thrive in settings that are dynamic, interactive, and varied rather than quiet and solitary. Environments where you can move between tasks, work with people, and see immediate impact often feel more energising than those that require long stretches of focused analysis. Open-plan or collaborative spaces may work better for you than isolated workstations.

Cultures that value intuition, experience, and "learning by doing" tend to feel more aligned than those that privilege only evidence and formal analysis. You may feel out of place in highly academic or technical environments where the norm is to question everything and defer to data. Look for teams that balance rigor with pragmatism and that recognise multiple valid ways of knowing.`,

      collaborationStyle: `You likely prefer to work with people who share your bias toward action and who don't get stuck in analysis paralysis. You may find yourself playing the "let's just try it" or "we've talked enough" role in meetings—which can be valuable for moving things forward, as long as it's not dismissive of legitimate concerns.

When working with strong analysts, you may need to consciously create space for their process while also advocating for timely decisions. Your contribution often lies in keeping the team focused on outcomes, stakeholders, and execution—the "so what" and "now what" that sometimes get lost in analytical depth. Building trust with analytical colleagues by occasionally engaging with their work (even at a high level) can help you influence when it matters.`,

      energyDrains: [
        `Roles that require extensive solitary research, data analysis, or technical specialisation`,
        `Environments where every decision requires extensive documentation or evidence-gathering`,
        `Teams that dismiss intuition or experience in favour of data-only thinking`,
        `Tasks that involve deep focus on abstract or highly technical material with no human connection`,
        `Cultures that equate "rigorous" with "slow" and don't value timely action`,
      ],

      motivators: [
        `Work that connects directly to people, outcomes, or tangible impact`,
        `Variety, interaction, and the ability to move between tasks and people`,
        `Environments that value intuition and experience alongside evidence`,
        `Opportunities to learn by doing rather than by analysing first`,
        `Colleagues who appreciate your bias toward action and your focus on the human side of work`,
      ],

      toolkit: [
        {
          title: `Ask the Skeptic Question`,
          context: `A decision is being made and you're inclined to move forward, but something nags at you.`,
          action: `Pause and ask: "What would someone who disagrees with us want to see before they'd be convinced?" If the answer is "nothing" or "we don't know," consider whether you need a quick sanity check before proceeding.`,
        },
        {
          title: `Delegate the Deep Dive`,
          context: `You're in a situation where analysis is needed but you're not the right person to do it.`,
          action: `Identify who has the skills and appetite—a colleague, a consultant, or a tool. Clearly define the question you need answered and the deadline. Your job is to frame the problem and use the output; you don't have to do the analysis yourself.`,
        },
        {
          title: `Find Your Data Translator`,
          context: `You need to engage with data or research but find it draining.`,
          action: `Build a relationship with one person (analyst, researcher, or data-savvy colleague) who can summarise findings for you in plain language. Your job is to ask good questions and apply the insights—theirs is to do the heavy lifting.`,
        },
      ],
    },
  },
};
