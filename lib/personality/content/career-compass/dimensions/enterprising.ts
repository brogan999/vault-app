import type { CareerDimensionContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "enterprising";

export const ENTERPRISING: CareerDimensionContent = {
  id: "enterprising",
  label: "Enterprising",
  shortLabel: "Enterprising",
  color: "#C97A30",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  levels: {
    high: {
      overview: `You're a natural leader. Leading, persuading, managing, and influencing others energise you rather than drain you. You're ambitious, comfortable with competition, and drawn to roles where you can shape outcomes, build something new, or drive results through people and strategy. Entrepreneurship, sales, executive leadership, and high-stakes negotiation feel like home territory.

You're not content to simply execute—you want to own the direction. Risk-taking, when calculated, excites you. You're willing to put yourself forward, make the pitch, and take responsibility for outcomes. Your energy comes from winning, from seeing your vision materialise, and from the dynamic interplay of influence and impact.

Careers that keep you in a purely supporting or reactive role will frustrate you. You need scope to lead, to persuade, and to see your ambition reflected in tangible results. The key is channelling this drive in ways that are sustainable and that align with your values—leadership without burnout, influence without manipulation.`,

      strengths: [
        {
          title: "Natural influence and persuasion",
          description: `You read situations quickly and know how to position ideas, negotiate outcomes, and move people toward action. You're comfortable in the spotlight and can hold a room.`,
          deepDive: `High-enterprising individuals often excel at "strategic social influence"—the ability to shape others' perceptions and decisions in service of a goal. This isn't manipulation when it's transparent and value-aligned; it's the skill of making a compelling case. Research on persuasion suggests that credibility, clarity, and emotional resonance matter. Your natural confidence and comfort with assertiveness give you a head start. The growth edge is ensuring your influence serves collective goals, not just personal advancement, and that you're attuned to when others need space rather than persuasion.`,
        },
        {
          title: "Drive and initiative",
          description: `You don't wait for permission. You identify opportunities, take ownership, and push projects forward. Your ambition translates into action.`,
        },
        {
          title: "Comfort with risk and uncertainty",
          description: `You can operate in ambiguous situations, make decisions with incomplete information, and tolerate the discomfort of high-stakes outcomes. This makes you effective in leadership and entrepreneurship.`,
        },
      ],

      growthEdges: [
        {
          title: "Leading without dominating",
          teaser: `Your natural assertiveness can sometimes overshadow others' contributions. Learning to create space for collaboration while still driving results is a key growth edge.`,
          fullExplanation: `High-enterprising individuals often default to taking charge—which is valuable when leadership is needed, but can shut down input from others who process differently or need more time to contribute. The growth edge is "leading from behind" at times: asking questions before stating positions, explicitly inviting dissent, and recognising when your voice should step back so others can step forward.

This isn't about becoming less decisive. It's about expanding your repertoire: sometimes the most influential move is to pause, listen, and let someone else own the moment. Teams led by high-enterprising people often need explicit structures—round-robins, anonymous input, designated "devil's advocate" roles—to ensure diverse voices are heard. Your job is to create those structures and then honour them.`,
          premiumHook: `Our premium module on inclusive leadership covers facilitation techniques, power-sharing practices, and a self-assessment for dominance vs. influence balance.`,
        },
        {
          title: "Sustainable ambition",
          teaser: `Your drive can push you toward burnout if unchecked. Learning to pace yourself and to define success beyond external markers is essential for long-term effectiveness.`,
          fullExplanation: `High-enterprising people often tie their sense of worth to achievement—closing the deal, winning the promotion, hitting the target. When those markers are always moving, rest feels like falling behind. The growth edge is decoupling your identity from outcomes and building in recovery as a non-negotiable part of your strategy.

Practical steps include: defining "enough" for yourself rather than letting the market define it, scheduling rest as seriously as you schedule work, and developing sources of meaning beyond professional success. You may also need to examine the underlying drivers—is your ambition coming from genuine interest and impact, or from a need to prove yourself? The former sustains; the latter can exhaust.`,
          premiumHook: `Explore our premium content on sustainable ambition: values clarification, burnout prevention for high achievers, and reframing success.`,
        },
      ],

      careerPaths: `Ideal career paths for you centre on leadership, influence, and impact. Executive leadership, general management, and C-suite roles offer the scope you crave. Entrepreneurship—founding, scaling, or leading ventures—is a natural fit. Sales, business development, and partnership roles let you leverage persuasion and relationship-building for measurable outcomes.

Consulting, especially at senior levels, combines strategic thinking with client influence. Politics, advocacy, and public affairs offer platforms for large-scale impact. Even within technical or creative fields, you'll gravitate toward roles that include people leadership, business development, or external representation.

Avoid careers that keep you in a purely supporting or execution-only role with no path to leadership. You'll feel underused in positions where you can't influence direction, negotiate outcomes, or take calculated risks. The goal is to find work where your ambition and drive are assets, not liabilities.`,

      workEnvironment: `You thrive in environments that reward initiative, offer visibility, and provide scope for impact. Fast-paced, results-oriented cultures suit you. You want access to decision-makers, opportunities to present and persuade, and metrics that reflect your contribution.

Ideal conditions include: clear paths to advancement, a culture that tolerates (or celebrates) calculated risk, and colleagues who match your energy or at least don't resist it. You may struggle in highly bureaucratic or consensus-heavy environments where speed and assertiveness are penalised. You also need enough autonomy to act—micromanagement will frustrate you. The key is finding organisations where your drive is channelled productively rather than constrained.`,

      collaborationStyle: `You collaborate by taking the lead when direction is needed and by driving toward outcomes. You're comfortable owning decisions, representing the team externally, and pushing for closure. You tend to be direct and action-oriented—sometimes at the expense of process or inclusion.

In teams, you often emerge as the de facto leader or the one who "makes things happen." You may need to consciously create space for others to contribute and to slow down when the team needs more deliberation. The best collaborations for you are those where your drive is harnessed—where you're empowered to lead while also held accountable for how you lead.`,

      energyDrains: [
        `Roles with no scope for influence or advancement`,
        `Environments that punish risk-taking or initiative`,
        `Excessive bureaucracy or consensus requirements that slow action`,
        `Being sidelined or overlooked for leadership opportunities`,
        `Cultures that prioritise process over results`,
      ],

      motivators: [
        `Winning—closing the deal, landing the client, hitting the target`,
        `Visibility and recognition for your impact`,
        `Autonomy to make decisions and drive direction`,
        `Competition and the chance to outperform`,
        `Building something new or scaling something meaningful`,
      ],

      toolkit: [
        {
          title: "Influence audit",
          context: `Your natural assertiveness may not always land as intended.`,
          action: `Ask 2–3 trusted colleagues: "When I'm trying to persuade or lead, what works? What doesn't?" Look for patterns. Adjust your approach based on feedback.`,
        },
        {
          title: "Space-creation habit",
          context: `You tend to fill silence and take charge. Others may hold back.`,
          action: `In your next 3 meetings, practice: after stating your view, explicitly ask "What do others think?" and wait 10 seconds before speaking again. Note what you learn.`,
        },
        {
          title: "Recovery non-negotiables",
          context: `Your drive can override your need for rest.`,
          action: `Block one recovery block per week (no meetings, no deliverables). Treat it as sacred. If you skip it, ask: What am I avoiding? What would replenish me?`,
        },
      ],
    },

    moderate: {
      overview: `You can lead when the situation calls for it, but you're selective about when to assert yourself. You're comfortable with influence and persuasion in the right context—perhaps with clients, in specific projects, or when you have clear ownership—but you don't need to be in charge all the time. You can support others' leadership, contribute to team goals, and step back when someone else is better positioned to lead.

This flexibility is a strength. You're not driven by the need to dominate every room, nor are you uncomfortable with responsibility. You read the situation and adapt: sometimes you lead, sometimes you follow, sometimes you collaborate as an equal. The key is finding environments that allow this fluidity rather than forcing you into either a constant leadership role or a purely supporting one.

Careers that require you to be "on" as a leader every day may drain you. Careers that never let you lead may underuse you. The sweet spot is roles where you can choose your level of assertiveness based on context and energy.`,

      strengths: [
        {
          title: "Situational leadership",
          description: `You can step up when leadership is needed and step back when it's not. You don't need the spotlight to feel valued, but you're capable of holding it.`,
        },
        {
          title: "Balanced assertiveness",
          description: `You can advocate for your ideas and interests without overwhelming others. You know when to push and when to yield.`,
          deepDive: `Moderate-enterprising individuals often have strong "political skill"—the ability to read social dynamics and adjust their behaviour accordingly. You're less likely to overreach or underreach because you're attuned to context. The risk is that you may be perceived as inconsistent or hard to read if you don't signal your intentions. Being explicit about when you're taking the lead vs. supporting can help others collaborate with you more effectively.`,
        },
        {
          title: "Collaborative influence",
          description: `You can achieve outcomes through persuasion and relationship-building without needing to dominate. You influence through partnership as much as through authority.`,
        },
      ],

      growthEdges: [
        {
          title: "Claiming leadership when you're ready",
          teaser: `You have the capacity to lead but may hesitate to put yourself forward. Recognising when you're holding back—and when that's costing you—helps you make intentional choices.`,
          fullExplanation: `Moderate-enterprising people sometimes undersell their leadership potential because they're not as visibly ambitious as high-enterprising colleagues. Or they defer to others by default, even when they have valuable contributions. The growth edge is knowing when to step forward: when the situation needs your skills, when you're ready for more responsibility, or when holding back is a habit rather than a choice.

This requires self-awareness about your readiness (skills, confidence, life phase) and clarity about what you want. You might be perfectly content in a supporting role—and that's valid. Or you might be ready for more but waiting for permission that won't come. The key is making the choice consciously rather than defaulting to the path of least resistance.`,
          premiumHook: `Our premium module helps you assess your leadership readiness and provides frameworks for deciding when to step up vs. when to stay in a supporting role.`,
        },
        {
          title: "Managing others' expectations of you",
          teaser: `Because you can lead when needed, others may assume you always want to. Setting boundaries around when you'll take charge prevents overcommitment and resentment.`,
          fullExplanation: `Moderate-enterprising individuals often get pulled into leadership roles because they're capable—not because they've chosen them. Colleagues and managers may see your competence and assume you want more. The growth edge is communicating your preferences: "I'm happy to lead this project, but I'd prefer to support on the next one" or "I can do the pitch, but I'd like someone else to own the follow-up."

Without clear communication, you may accumulate responsibilities that drain you or that don't align with your goals. The skill is distinguishing between "I could do this" and "I want to do this," and being willing to say no when the answer is the former but not the latter.`,
          premiumHook: `Explore our content on boundary-setting for capable people: scripts for declining leadership, and a framework for choosing which opportunities to take.`,
        },
      ],

      careerPaths: `Your ideal career paths offer a mix of leadership and supporting roles. Project or programme management often provides this: you lead initiatives when they're yours, and you support when others own them. Consulting can work well—you influence clients and outcomes without needing to be the permanent leader of a large team.

Roles that blend individual contribution with periodic leadership—e.g. senior specialist who occasionally leads projects, or team lead who also does hands-on work—suit you. Sales, business development, or partnership roles can work if they allow you to control your level of client-facing intensity. You might also thrive in "player-coach" positions where you both do and lead.

Avoid extremes: purely hierarchical leadership roles with no hands-on work may feel empty, while purely individual contributor roles with no path to influence may feel limiting. The goal is flexibility—enough leadership to feel engaged, enough support work to feel grounded.`,

      workEnvironment: `You work best in environments that allow role fluidity—where you can lead sometimes and support other times without being pigeonholed. Cultures that value both leadership and collaboration suit you. You want opportunities to step up when you're ready, without pressure to be "on" as a leader every day.

Ideal conditions include: clear project ownership so you know when you're leading vs. supporting, colleagues who don't assume you always want the spotlight, and advancement paths that don't require constant visibility. You may struggle in highly political environments where you must constantly assert yourself to be seen, or in flat structures where there's no clear way to take on more responsibility when you want it.`,

      collaborationStyle: `You collaborate by adapting to the needs of the situation. When the team needs direction, you can provide it. When someone else is leading, you can support effectively. You tend to be pragmatic about roles—you care more about outcomes than about who gets credit.

In teams, you may be the "utility player" who can fill different functions depending on the project. You're less likely to compete for dominance or to disappear entirely—you find a productive middle ground. The best collaborations for you are those where the expectations are clear and where you're not forced into a leadership or supporting role that doesn't fit the moment.`,

      energyDrains: [
        `Constant pressure to be the visible leader or the one in charge`,
        `Environments where supporting roles are undervalued or invisible`,
        `Unclear ownership—not knowing when you're leading vs. supporting`,
        `Political cultures that require constant self-promotion`,
        `Roles that offer no path to leadership when you want it`,
      ],

      motivators: [
        `Opportunities to lead when the situation fits your skills and energy`,
        `Recognition for both leading and supporting contributions`,
        `Flexibility to choose your level of assertiveness`,
        `Meaningful projects where you can influence outcomes`,
        `Colleagues who value collaboration over competition`,
      ],

      toolkit: [
        {
          title: "Leadership readiness check",
          context: `You may be ready for more leadership than you've claimed—or you may be content where you are.`,
          action: `Reflect: In the past year, when did you want to lead but held back? When did you lead and wish you hadn't? Use this to clarify your current preferences.`,
        },
        {
          title: "Preference communication",
          context: `Others may assume you always want to lead because you can.`,
          action: `In your next project kickoff, state your preference: "I'd like to lead this one" or "I'm happy to support—who's taking the lead?" Make it explicit.`,
        },
        {
          title: "Opportunity filter",
          context: `You'll be offered leadership opportunities. Not all will fit.`,
          action: `Create a simple filter: Does this align with my goals? Do I have energy for it? Would I learn something valuable? Say yes only when 2+ are true.`,
        },
      ],
    },

    low: {
      overview: `You prefer supporting roles over leading. Persuasion, competition, and the constant push for influence feel draining rather than energising. You're more comfortable contributing through expertise, collaboration, or execution than through asserting yourself, managing others, or driving sales. You'd rather work behind the scenes than in the spotlight.

This orientation is a strength in many contexts. Organisations need people who can do the work, support the team, and contribute without needing to own every outcome. Careers in research, technical roles, operations, or specialist functions often suit you because they reward competence over charisma. The key is finding environments where your preference is valued rather than seen as a limitation.

You may have been told you "should" be more assertive or ambitious. The growth edge isn't to become someone you're not—it's to develop the minimum influence skills needed for your chosen path and to choose roles that don't require you to perform as a natural leader.`,

      strengths: [
        {
          title: "Reliable execution and follow-through",
          description: `You get things done without needing recognition or visibility. You're dependable, thorough, and focused on quality.`,
        },
        {
          title: "Collaborative without competition",
          description: `You work well with others without needing to dominate or outperform. You contribute to shared goals without making it about you.`,
          deepDive: `Low-enterprising individuals often create psychological safety in teams because they're not competing for status. Their presence can reduce zero-sum dynamics and make space for others to contribute. The trade-off is that you may be overlooked for advancement if visibility and self-promotion are required. The skill is finding ways to signal your contributions—through documentation, peer feedback, or selective visibility—without adopting a persona that exhausts you.`,
        },
        {
          title: "Contentment with supporting roles",
          description: `You don't need to be in charge to feel fulfilled. You can derive satisfaction from enabling others' success and from doing work well.`,
        },
      ],

      growthEdges: [
        {
          title: "Advocating for yourself when it matters",
          teaser: `Career advancement often requires some self-advocacy. Learning to speak up for your contributions—without adopting a persona that exhausts you—is a key growth edge.`,
          fullExplanation: `Low-enterprising people sometimes miss opportunities because they don't put themselves forward. They assume good work will be noticed, or they feel uncomfortable "selling" themselves. In many organisations, visibility and self-advocacy are part of the game. The growth edge isn't to become highly enterprising—it's to develop targeted self-advocacy for high-stakes moments: performance reviews, promotion discussions, or project assignments.

Practical strategies: prepare in advance (write down your contributions, practice stating them), choose low-pressure formats (written updates, one-on-ones) over high-pressure ones (public pitches), and reframe self-advocacy as "ensuring others have accurate information" rather than "bragging." You can advocate without performing.`,
          premiumHook: `Our premium module offers a "minimal self-advocacy" framework: when it matters, what to say, and how to do it in ways that feel authentic to you.`,
        },
        {
          title: "Navigating competitive environments",
          teaser: `Some careers and organisations are inherently competitive. Learning to operate in them without absorbing the competition mindset can help you thrive on your own terms.`,
          fullExplanation: `Low-enterprising individuals in competitive environments often feel like they don't belong or that they're at a disadvantage. The growth edge is finding your niche: roles, teams, or organisations where collaboration is valued, or where your strengths (reliability, expertise, support) are explicitly rewarded. If you must operate in a competitive context, develop a "survival" level of political awareness—enough to protect yourself and your work—without adopting the full competitive mindset.

You might also seek out "competition-light" paths: specialist roles, research, operations, or organisations with flatter, more collaborative cultures. The goal isn't to change who you are—it's to find contexts that fit.`,
          premiumHook: `Explore our guide to thriving as a low-enterprising person in competitive environments: niche-finding, minimal political skill, and when to consider a different context.`,
        },
      ],

      careerPaths: `Ideal career paths for you minimise the need for constant persuasion, leadership, or competition. Research, technical roles, and specialist functions often fit well: software development, data analysis, engineering, scientific research, or technical writing. These fields reward expertise and output over influence and visibility.

Back-office and support functions—operations, finance, compliance, administration—can work if they offer clear contribution without requiring you to lead or sell. Creative or artistic roles that focus on the work rather than the pitch may suit you. You might also thrive in collaborative or cooperative structures—co-ops, non-profits, or teams with flat hierarchies—where supporting roles are valued.

Avoid careers that centre on sales, leadership, or persuasion—unless you're in a highly structured, low-pressure format. Executive roles, business development, or political work will likely drain you. The goal is to find work where your primary contribution is expertise, execution, or support—not influence or competition.`,

      workEnvironment: `You thrive in environments that value contribution over visibility and collaboration over competition. Cultures that reward expertise, reliability, and teamwork suit you. You want clear expectations, minimal political maneuvering, and the ability to focus on your work without constant self-promotion.

Ideal conditions include: merit-based advancement (or at least advancement that doesn't require aggressive self-advocacy), colleagues who don't equate assertiveness with competence, and roles where output speaks for itself. You may struggle in highly competitive, "up or out" environments or in cultures that require constant networking and visibility. The key is finding organisations where your style is respected.`,

      collaborationStyle: `You collaborate by contributing your part reliably and supporting others' efforts. You're not the one who drives the agenda or holds the room—you're the one who does the work, follows through, and helps the team succeed. You tend to prefer equal partnership over hierarchy.

In teams, you may be the steady contributor who others rely on for execution and consistency. You're less likely to compete for credit or to push your ideas aggressively—you share them when asked and support others' ideas when they're better. The best collaborations for you are those where your contribution is recognised without requiring you to perform assertiveness, and where the culture values substance over style.`,

      energyDrains: [
        `Constant pressure to sell, persuade, or compete`,
        `Environments where visibility and self-promotion are required for advancement`,
        `Roles that require you to lead or manage others as a primary function`,
        `Political or competitive cultures that reward assertiveness over contribution`,
        `Being evaluated on influence and charisma rather than output and expertise`,
      ],

      motivators: [
        `Mastery and expertise in your domain`,
        `Recognition for reliable, high-quality work`,
        `Collaborative environments where supporting roles are valued`,
        `Autonomy to focus on tasks without constant interpersonal demand`,
        `Work that has meaning without requiring you to be the face of it`,
      ],

      toolkit: [
        {
          title: "Strategic self-advocacy",
          context: `You may need to advocate for yourself in high-stakes moments, even if it's not your default.`,
          action: `Identify 2–3 key moments per year (e.g. performance review, project assignment). Prepare in advance: list your contributions, practice stating them. Use written formats if that feels easier.`,
        },
        {
          title: "Contribution visibility",
          context: `Good work doesn't always speak for itself. You need low-effort ways to signal it.`,
          action: `Establish a simple habit: monthly update to your manager with 3 concrete contributions. Keep it factual and brief. This creates a record without requiring constant self-promotion.`,
        },
        {
          title: "Context fit check",
          context: `Some environments will never fit your style. Knowing when to stay vs. when to look elsewhere matters.`,
          action: `Assess your current context: Is advancement possible without high enterprising behaviour? Are your contributions valued? If not, consider whether a different team or organisation might fit better.`,
        },
      ],
    },
  },
};
