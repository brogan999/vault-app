import type { CareerDimensionContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "social";

export const SOCIAL: CareerDimensionContent = {
  id: "social",
  label: "Social",
  shortLabel: "Social",
  color: "#CC8D90",
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
  levels: {
    high: {
      overview: `You are deeply people-oriented. Connection isn't just something you enjoy—it's how you make sense of the world and where you draw energy. Helping, teaching, counselling, and supporting others feel less like work and more like purpose. You're naturally attuned to what others need and often find yourself drawn into roles where you facilitate growth, resolve conflict, or create belonging.

Careers that keep you at arm's length from people—solo analysis, isolated technical work, or purely transactional roles—will leave you underused and restless. You thrive when your day involves meaningful interaction, whether that's one-on-one coaching, group facilitation, or building communities. Your gift is making others feel seen and supported, and you're at your best when that gift is central to your role.

The helping professions—counselling, teaching, nursing, social work, coaching—often call to you because they align with your values and energise you. But even within other fields, you'll seek out the human element: mentoring colleagues, improving team dynamics, or advocating for those who need a voice.`,

      strengths: [
        {
          title: "Empathic attunement",
          description: `You naturally read emotional cues and adjust your approach to meet others where they are. This makes you effective in conflict resolution, coaching, and any role requiring genuine connection.`,
          deepDive: `Research on empathic accuracy suggests that people who score high on social orientation tend to be more accurate at inferring others' thoughts and feelings. Your attunement isn't just intuition—it's a developed capacity to attend to verbal and nonverbal signals. In professional settings, this translates to knowing when to push, when to pause, and when to offer support. The key is balancing this strength with healthy boundaries so you don't absorb others' distress to your own detriment.`,
        },
        {
          title: "Facilitating growth in others",
          description: `You derive satisfaction from seeing people develop. Whether through teaching, mentoring, or counselling, you create conditions where others can learn and grow.`,
        },
        {
          title: "Building trust and rapport",
          description: `People tend to open up to you. You create psychological safety quickly, which makes you valuable in team settings, client relationships, and any context where collaboration depends on trust.`,
        },
      ],

      growthEdges: [
        {
          title: "Boundary-setting without guilt",
          teaser: `Your tendency to prioritise others' needs can lead to burnout if you don't protect your own energy. Learning to say no and to distinguish between supporting and rescuing is essential.`,
          fullExplanation: `High-social individuals often struggle with boundaries because saying no feels like abandoning someone. The psychological pattern here is "other-focused" attention: you're so attuned to what others need that your own limits become invisible until you're depleted. The shift isn't about caring less—it's about recognising that sustainable helping requires sustainable energy.

Practical steps include: naming your limits before you're exhausted, distinguishing between "I can't" (capacity) and "I won't" (choice), and scheduling recovery time as non-negotiable. Many high-social people find that a "compassionate no"—acknowledging the request while holding the boundary—reduces guilt. Over time, you learn that healthy boundaries actually deepen connection because you show up more fully when you're not running on empty.`,
          premiumHook: `Explore our premium module on sustainable helping: boundary frameworks, scripts for difficult conversations, and a self-assessment for early burnout signals.`,
        },
        {
          title: "Receiving support as well as giving it",
          teaser: `You're comfortable being the helper but may feel uneasy when roles reverse. Allowing others to support you strengthens relationships and models healthy interdependence.`,
          fullExplanation: `For many high-social people, being the one who gives feels natural; being the one who receives can trigger discomfort, vulnerability, or a sense of obligation. Yet reciprocal relationships are more resilient and satisfying. When you only give, you inadvertently create asymmetry—others may feel indebted or unable to contribute meaningfully to you.

The growth edge is learning to receive graciously: accepting help without minimising it, asking for support when you need it, and recognising that your willingness to be vulnerable invites others to do the same. This isn't about becoming less giving—it's about creating mutuality. In professional contexts, this might mean delegating more, asking for feedback, or letting a colleague take the lead on something you'd normally handle.`,
          premiumHook: `Our premium content includes exercises for identifying your "receiving blocks," scripts for asking for help, and a guided reflection on interdependence vs. independence.`,
        },
      ],

      careerPaths: `Ideal career paths for you centre on helping, teaching, counselling, or connecting people. The helping professions—clinical psychology, counselling, social work, nursing, occupational therapy, pastoral care—offer direct alignment with your strengths. Education is another natural fit: teaching, instructional design, or academic advising lets you facilitate growth at scale.

Roles that blend interpersonal skill with other domains also work well: HR and people operations, organisational development, community organising, patient advocacy, or non-profit programme management. Even in corporate settings, you'll gravitate toward roles that involve mentoring, team development, or client relationship management. The common thread is that your primary "product" is human impact—whether that's healing, learning, or connection.

Avoid careers that minimise human contact: pure data analysis, isolated research, or highly transactional sales. You'll feel most fulfilled when your day includes meaningful one-on-one or small-group interaction and when you can see the direct effect of your work on people's lives.`,

      workEnvironment: `You thrive in settings where interaction is built into the structure of the day. Open or semi-open layouts, team-based work, and roles that involve meetings, consultations, or group facilitation suit you. Environments that feel cold, hierarchical, or purely transactional will drain you.

Ideal conditions include: access to private spaces for sensitive conversations, a culture that values collaboration over competition, and colleagues who appreciate interpersonal nuance. You also benefit from variety—mixing one-on-one work with group facilitation, or alternating between intense connection and lighter touchpoints. Pure isolation or back-to-back superficial interactions are both draining; you need a rhythm that allows for depth.`,

      collaborationStyle: `You collaborate by building rapport first and focusing on the relationship as much as the task. You're skilled at reading group dynamics, mediating conflict, and ensuring quieter voices are heard. You tend to prioritise consensus and psychological safety, sometimes at the cost of speed or decisiveness.

In teams, you often take on the role of connector or facilitator—keeping people aligned, checking in on wellbeing, and translating between different styles. You may need to consciously advocate for your own ideas, since you're naturally inclined to elevate others. The best collaborations for you are those where the human dimension is valued and where you can contribute both task expertise and relational intelligence.`,

      energyDrains: [
        `Back-to-back transactional interactions with no depth or follow-through`,
        `Environments where empathy and relationship-building are dismissed as "soft"`,
        `Roles that require emotional distance or detachment from people's outcomes`,
        `Isolation or long stretches without meaningful human contact`,
        `Conflict or hostility that you're expected to absorb without resolution`,
      ],

      motivators: [
        `Seeing tangible positive change in someone's life or understanding`,
        `Deep, authentic connection with colleagues, clients, or students`,
        `Being trusted with others' vulnerabilities and growth`,
        `Creating conditions where people feel safe to learn and take risks`,
        `Knowing your work directly improves someone's wellbeing or capacity`,
      ],

      toolkit: [
        {
          title: "Energy audit",
          context: `You're prone to overgiving. Track your interactions for a week: note which ones energise you vs. drain you.`,
          action: `Identify patterns (e.g. one-on-one vs. large groups, giving vs. receiving). Schedule recovery time after high-drain activities and protect at least one "recharge" block per day.`,
        },
        {
          title: "Boundary script",
          context: `You need a go-to phrase for when you're at capacity but someone is asking for more.`,
          action: `Practice: "I care about this, and I'm not able to take it on right now. Here's what I can do instead..." Use it in low-stakes situations first to build the muscle.`,
        },
        {
          title: "Receiving practice",
          context: `You're skilled at giving; receiving may feel uncomfortable.`,
          action: `Once a week, ask one person for help or support with something specific. Notice your internal response. Thank them without minimising ("Thanks, that really helped" rather than "Oh, it was nothing").`,
        },
      ],
    },

    moderate: {
      overview: `You value relationships and connection, but you also need time to work independently. You're not someone who wants to be "on" with people all day—nor are you someone who thrives in isolation. You're interpersonally aware and capable of helping, teaching, or counselling when the situation calls for it, but you also need space to focus, reflect, or work with ideas and systems.

This balance makes you versatile. You can step into people-facing roles when needed—mentoring a colleague, facilitating a meeting, or supporting a client—and you can step back into more independent work without feeling deprived. The key is finding environments that honour both sides: enough interaction to feel connected, enough autonomy to recharge and produce.

Careers that are purely people-intensive may exhaust you over time; careers that are purely solitary may leave you understimulated. The sweet spot is roles that mix collaboration with independent work, or that allow you to choose when and how you engage with others.`,

      strengths: [
        {
          title: "Adaptive social energy",
          description: `You can shift between people-focused and independent modes without losing effectiveness. This flexibility is valuable in hybrid roles and changing team structures.`,
        },
        {
          title: "Balanced perspective",
          description: `You understand both relational and task-oriented concerns. You can advocate for people without neglecting outcomes, and you can focus on deliverables without ignoring team dynamics.`,
          deepDive: `Moderate-social individuals often occupy a "bridge" position in teams: they translate between highly people-oriented and highly task-oriented colleagues. Your ability to hold both perspectives reduces polarisation and helps teams find workable compromises. The risk is that you may feel pulled in two directions or undervalued if your role isn't explicitly recognised. Naming your contribution—"I'm holding both the relationship and the deadline in mind"—can help others see your value.`,
        },
        {
          title: "Selective depth",
          description: `You form meaningful connections when it matters, without needing constant interaction. You're capable of depth without dependency on it for energy.`,
        },
      ],

      growthEdges: [
        {
          title: "Honouring your need for solitude",
          teaser: `In cultures that prize constant collaboration, you may feel pressured to be more social than you need. Protecting your independent time is essential for sustained performance.`,
          fullExplanation: `Moderate-social people often receive subtle (or not-so-subtle) messages that "more connection" is always better. Open-plan offices, back-to-back meetings, and team-building norms can leave you depleted if you don't push back. The growth edge is recognising that your need for solitude isn't a deficit—it's a legitimate part of how you function.

Practical strategies include: blocking focus time on your calendar and treating it as non-negotiable, choosing roles with built-in autonomy, and communicating your preferences without apology ("I do my best thinking in quiet blocks"). You may also need to distinguish between healthy solitude and avoidance: sometimes the urge to withdraw is about overwhelm, not genuine need. Learning to read your own signals helps you optimise the balance.`,
          premiumHook: `Our premium module helps you design a work rhythm that honours both connection and solitude, with templates for communicating your needs to managers and teams.`,
        },
        {
          title: "Stepping into people leadership when ready",
          teaser: `You have the capacity for people-focused roles but may hesitate to claim them. Recognising when you're ready—and when you're not—helps you make intentional career choices.`,
          fullExplanation: `Moderate-social individuals sometimes undersell their interpersonal skills because they're not "as" people-oriented as high-social colleagues. Or they overcommit to people-heavy roles and then burn out. The growth edge is making conscious choices: when does a people-facing opportunity align with your energy, and when does it cross into territory that will deplete you?

This requires self-awareness about your current capacity (stress, life phase, other demands) and clarity about what "enough" connection looks like for you. You might thrive in a people-leadership role with clear boundaries, or you might prefer individual contributor work with selective mentoring. There's no single right answer—only what fits you at this stage.`,
          premiumHook: `Explore our career fit assessment and decision framework for evaluating people-focused vs. independent roles based on your current context.`,
        },
      ],

      careerPaths: `Your ideal career paths offer a mix of people interaction and independent work. Roles in project management, product management, or operations often provide this balance: you coordinate with stakeholders and teams, but you also have solo analysis, planning, or execution time. Consulting can work well—especially if you specialise in an area that allows you to control client contact intensity.

Education-adjacent roles (instructional design, curriculum development, training) let you impact learners without being in front of a class every day. HR, organisational development, or internal communications can offer similar variety. You might also thrive in technical or specialist roles that include a mentoring or knowledge-sharing component—enough connection to feel purposeful, enough focus work to feel grounded.

Avoid extremes: purely frontline helping roles (e.g. high-volume counselling) may exhaust you, while purely isolated technical work may leave you craving more connection. The goal is to find roles where you can dial interaction up or down based on your energy.`,

      workEnvironment: `You work best in environments that offer choice: spaces for collaboration when you want it, and spaces for focused work when you need it. Flexible arrangements—hybrid work, adjustable schedules—tend to suit you because you can optimise for your current energy.

Ideal conditions include: a culture that doesn't equate visibility with productivity, colleagues who respect "do not disturb" signals, and a mix of meeting types (some deep, some light-touch). You may find open-plan offices challenging unless there are clear quiet zones or policies that protect focus time. The key is having agency over when and how you engage.`,

      collaborationStyle: `You collaborate effectively when the format and intensity fit the task. You're comfortable in meetings when they're purposeful, and you're comfortable working alone when that's more efficient. You tend to be pragmatic about collaboration—you don't need it for its own sake, but you value it when it adds clarity or relationship capital.

In teams, you may be the one who suggests "let's sync briefly" or "I'll take this piece and we'll reconvene." You're less likely to dominate discussion or to disappear entirely—you find a middle ground. The best collaborations for you are those where the expectations around communication are clear and where you're not penalised for preferring asynchronous or low-touch coordination when appropriate.`,

      energyDrains: [
        `Mandatory constant collaboration with no protected focus time`,
        `Cultures that equate being visible and chatty with being committed`,
        `Roles that require either 100% people contact or 100% isolation`,
        `Unclear expectations about when and how to engage with others`,
        `Meetings that could have been emails, or vice versa`,
      ],

      motivators: [
        `A balance of meaningful connection and productive solitude`,
        `Autonomy to choose when and how you engage with others`,
        `Tasks that require both interpersonal skill and independent thinking`,
        `Colleagues who respect different working styles`,
        `Seeing the impact of your work on people without being consumed by it`,
      ],

      toolkit: [
        {
          title: "Energy rhythm map",
          context: `Your ideal balance of connection vs. solitude may shift with context.`,
          action: `For two weeks, log your energy levels and note how much people interaction you had. Identify your optimal ratio. Use this to negotiate schedule or role structure.`,
        },
        {
          title: "Boundary communication",
          context: `Others may not know you need focus time unless you signal it.`,
          action: `Use status indicators (e.g. "deep work until 2pm"), block calendar time, and have a one-liner ready: "I'm most productive when I have uninterrupted blocks—here's how we can coordinate."`,
        },
        {
          title: "Selective depth check-in",
          context: `You can go long periods without deep connection if you're absorbed in work.`,
          action: `Set a monthly reminder to assess: Am I getting enough meaningful connection? If not, schedule one coffee, mentoring session, or team activity that provides it.`,
        },
      ],
    },

    low: {
      overview: `You prefer working with ideas, systems, or things over constant people interaction. That doesn't mean you're incapable of connection—you can be warm, collegial, and effective in teams when needed. But sustained interpersonal demand—helping, teaching, counselling, or managing others' emotions—tends to drain you. You're more energised by focus, analysis, creation, or problem-solving that doesn't centre on people's inner lives.

This orientation is a strength in many contexts. Organisations need people who can concentrate deeply, work independently, and maintain objectivity. Careers in research, engineering, data, design, or technical roles often suit you because they prioritise expertise and output over relationship management. The key is finding environments where your preference is respected rather than pathologised.

You may have been told you "should" be more people-oriented. The growth edge isn't to become someone you're not—it's to develop the minimum viable social skills for your chosen path and to choose roles that don't require you to be someone you're not.`,

      strengths: [
        {
          title: "Sustained focus and depth",
          description: `You can work for extended periods without the need for social stimulation. This makes you effective in roles requiring deep concentration, research, or technical mastery.`,
        },
        {
          title: "Objectivity and detachment",
          description: `You're less likely to be swayed by emotional dynamics when making decisions. This can be valuable in analysis, evaluation, and roles that require clear-eyed assessment.`,
          deepDive: `Low-social individuals often excel in contexts where emotional entanglement would cloud judgment—forensic analysis, technical troubleshooting, or strategic planning. Your capacity for detachment isn't coldness; it's a different allocation of attention. The trade-off is that you may miss relational nuances that affect outcomes. The skill is knowing when objectivity serves and when a dose of interpersonal awareness would help. In collaborative settings, pairing with someone who reads people well can complement your strengths.`,
        },
        {
          title: "Efficiency in task-focused work",
          description: `You get things done without the overhead of constant check-ins or relationship maintenance. You're well-suited to roles where output matters more than visibility.`,
        },
      ],

      growthEdges: [
        {
          title: "Developing essential people skills without overcorrecting",
          teaser: `Most careers require some interpersonal competence. The goal isn't to become highly social—it's to build the minimum skills needed for your path without exhausting yourself.`,
          fullExplanation: `Low-social people sometimes swing between two extremes: avoiding people work entirely (and limiting their options) or forcing themselves into people-heavy roles (and burning out). The growth edge is targeted skill-building. What do you actually need? Perhaps: clear communication in meetings, basic rapport with key stakeholders, or the ability to give and receive feedback. These are learnable without transforming your personality.

Focus on high-leverage interactions: the few relationships or moments that matter most for your goals. Invest there. For the rest, develop simple scripts and routines that reduce cognitive load. You might also reframe: "people work" isn't always emotional labour—sometimes it's coordination, clarity, or shared context. Finding the least-draining version of necessary interaction helps you sustain it.`,
          premiumHook: `Our premium module offers a "minimum viable social skills" framework: what to prioritise, scripts for common situations, and strategies for conserving energy in people-heavy contexts.`,
        },
        {
          title: "Avoiding isolation that limits growth",
          teaser: `While you prefer independence, too much isolation can limit feedback, visibility, and opportunity. Strategic connection—even if it's not your default—supports your long-term success.`,
          fullExplanation: `The risk for low-social individuals isn't that they're unhappy alone—it's that career advancement often depends on visibility, sponsorship, and relationship capital. If you retreat too far, you may miss opportunities that require someone to advocate for you or to think of you when projects arise. The growth edge is intentional, low-frequency connection: a few key relationships maintained with minimal effort, periodic check-ins with mentors or sponsors, and selective participation in high-impact events.

You don't need to become a networker. You need a small, strategic network and a system for maintaining it without it feeling like a chore. That might mean quarterly coffees with three people, or showing up to one team social per month. The goal is enough connection to stay in the loop, not enough to drain you.`,
          premiumHook: `Explore our "strategic minimal networking" guide: how to build and maintain a small network with minimal social energy expenditure.`,
        },
      ],

      careerPaths: `Ideal career paths for you minimise sustained people contact while allowing you to leverage your strengths in focus, analysis, or technical work. Research—academic, industry, or applied—often fits well. So do roles in software engineering, data science, architecture, or technical design. These fields reward depth and expertise and typically don't require you to be the primary emotional support for others.

Back-office functions—finance, operations, legal, compliance—can work if they're sufficiently independent. Creative or artistic roles that involve solitary creation (writing, coding, design) may suit you. You might also thrive in specialist or individual contributor roles where your output speaks more than your presence.

Avoid careers that centre on helping, teaching, or counselling—unless you're in a highly structured, low-volume format (e.g. technical training with clear scripts). Frontline service roles, people management, or sales that depend on relationship-building will likely drain you. The goal is to find work where your primary contribution is expertise, output, or systems—not interpersonal service.`,

      workEnvironment: `You thrive in environments that protect focus and minimise unnecessary interaction. Private or semi-private workspaces, flexible hours, and cultures that value output over face time suit you. Remote or hybrid arrangements often work well because you can control when and how you engage.

Ideal conditions include: clear communication norms (e.g. async by default), minimal mandatory social events, and colleagues who don't take your preference for solitude personally. You may struggle in highly collaborative, open-plan settings where interruption is constant. The key is having control over your environment and the ability to opt in to interaction when it's purposeful.`,

      collaborationStyle: `You collaborate best when it's structured and task-focused. You prefer clear agendas, defined outcomes, and efficient communication. You're less likely to initiate social chitchat or to linger after meetings, and that's fine—you contribute through preparation, follow-through, and quality of work.

In teams, you may be the one who documents decisions, maintains systems, or does the deep analysis that others build on. You're not necessarily the relationship glue, and that's a valid role. The best collaborations for you are those where your contribution is recognised without requiring you to perform sociability, and where communication channels (e.g. Slack, email) allow you to participate without constant real-time presence.`,

      energyDrains: [
        `Constant people contact with no recovery time`,
        `Roles that require emotional labour—counselling, mediating, or managing others' feelings`,
        `Cultures that equate sociability with competence or commitment`,
        `Unstructured social expectations (e.g. mandatory networking, open-ended meetings)`,
        `Being the primary source of support or connection for others`,
      ],

      motivators: [
        `Deep focus on challenging problems or creative work`,
        `Autonomy and control over your time and environment`,
        `Recognition for output and expertise rather than visibility`,
        `Efficient, purposeful communication over constant connection`,
        `Work that engages your mind without requiring emotional attunement to others`,
      ],

      toolkit: [
        {
          title: "Essential-people-skills audit",
          context: `You don't need to be highly social, but you need enough skill for your path.`,
          action: `List the people interactions your role actually requires. For each, rate: essential or optional? For essentials, identify the minimum competence needed. Focus development there.`,
        },
        {
          title: "Strategic connection calendar",
          context: `Too much isolation can limit opportunity. Too much connection drains you.`,
          action: `Identify 3–5 people who matter for your growth. Schedule quarterly touchpoints. Use a template (e.g. "Catch-up, share update, ask one question"). Keep it brief and purposeful.`,
        },
        {
          title: "Energy recovery protocol",
          context: `When people-heavy periods are unavoidable (e.g. conferences, intensive projects), you need a plan.`,
          action: `Before the period: block recovery time after. During: build in short solo breaks (walk, quiet room). After: allow 1–2 days of minimal interaction to recharge.`,
        },
      ],
    },
  },
};
