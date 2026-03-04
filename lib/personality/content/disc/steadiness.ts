import type { DISCStyleContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const STEADINESS: DISCStyleContent = {
  styleId: "steadiness",
  styleLetter: "S",
  name: "Steadiness",
  shortName: "Supporter",
  tagline: "Holds the team together, keeps things running, and makes people feel safe",
  color: "#315E36",

  overview: `You're the person everyone relies on and almost nobody worries about. While your colleagues are chasing the next thing, you're making sure the current thing actually works. This isn't a lack of ambition — it's a different kind of intelligence. You understand something most people learn too late: consistency compounds. The team that ships reliably beats the team that ships brilliantly once and then falls apart.

Your presence in a group changes the room. Not loudly — you're not performing stability, you're providing it. People feel calmer when you're involved because you absorb chaos instead of amplifying it. When a project hits turbulence, you're the one who keeps showing up, keeps executing, and keeps the interpersonal dynamics from derailing the work. That kind of reliability is genuinely rare and chronically undervalued.

Your core pattern is service through stability. You create environments where people can do their best work because the foundation is solid, the processes are consistent, and someone — you — is paying attention to the human dynamics that most task-focused leaders ignore. The cost is that your preference for harmony can become avoidance, your patience can become passivity, and your loyalty to the status quo can resist changes the team genuinely needs.

The most effective S-styles learn to distinguish between healthy stability and comfortable stagnation. Your growth isn't about becoming louder or more assertive for its own sake. It's about learning to disrupt when disruption serves the people you care about — even when it means temporary discomfort for everyone, including yourself.`,

  descriptionInsight: "Your profile reveals a deep orientation toward reliability, team cohesion, and interpersonal harmony. This isn't people-pleasing — it's an operating system optimized for environments where trust, consistency, and collaborative execution matter most.",

  strengths: [
    {
      title: "Unshakable Reliability",
      description: "When you commit to something, it gets done — not with fanfare, but with quiet consistency that others learn to depend on. Your follow-through rate is among the highest of any style, and it creates a foundation of trust that makes everything else on the team work better.",
      deepDive: "Your reliability isn't a personality trait — it's a value system. You believe commitments are binding, deadlines are real, and people who say they'll do something should actually do it. This sounds obvious, but in most workplaces it's shockingly rare. Your consistency becomes the team's operating rhythm: people plan around your output because they know it will be there. The risk: you extend the same expectation to others and feel quietly betrayed when they don't reciprocate. You won't say it, but broken commitments erode your trust in ways that are hard to rebuild. Your growth edge is learning to voice that disappointment early rather than absorbing it until it calcifies into resentment.",
    },
    {
      title: "Team Cohesion Builder",
      description: "You notice when someone is struggling before anyone else does. You remember the personal details, check in after tough meetings, and create the connective tissue that turns a group of individuals into an actual team. This emotional labor is invisible in most performance reviews but essential to every high-performing team.",
      deepDive: "You function as the team's immune system: you detect relational threats — tension between colleagues, someone disengaging, a new hire who feels excluded — and you quietly intervene before they become crises. This happens so naturally that you may not even recognize it as a skill. But remove you from the team and watch what happens: communication breaks down, small conflicts escalate, and the social infrastructure that everyone relied on disappears. The shadow side: you can become so invested in team harmony that you suppress legitimate disagreements that would actually make the team stronger. Learning to facilitate healthy conflict rather than prevent all conflict is your highest-leverage skill.",
    },
    {
      title: "Patient Execution",
      description: "You don't need constant novelty to stay engaged. You can work a long-term project through the tedious middle phase that burns out most people. While others chase the exciting start or the satisfying finish, you're the one doing the unglamorous work that connects them.",
      deepDive: "Your patience is a genuine competitive advantage in a workplace culture that rewards speed and novelty. Most professionals lose interest after the initial excitement fades — they're great at launching but terrible at sustaining. You're the opposite. You find genuine satisfaction in incremental progress, systematic improvement, and the slow accumulation of quality. This makes you invaluable on projects that take months or years: product refinement, client relationship management, operational improvement, team development. The risk: your patience can shade into tolerance for situations that actually need to change. A difficult manager, a broken process, an unfair workload — your endurance can keep you in bad situations long after others would have pushed back or moved on.",
    },
    {
      title: "Emotional Steadiness",
      description: "Your emotional thermostat doesn't swing wildly. When the team is panicking, you're calm. When leadership is celebrating, you're measured. This evenness makes you a stabilizing force and the person people trust with sensitive information and difficult conversations.",
    },
    {
      title: "Active Listening",
      description: "You don't just wait for your turn to talk — you actually process what others are saying. People feel genuinely heard when they speak with you, which makes you the person colleagues seek out when they need to think through a problem, vent frustration, or surface an idea they're not ready to share publicly.",
    },
  ],

  growthEdges: [
    {
      title: "The Conflict Avoidance Tax",
      teaser: "Your commitment to harmony has a hidden cost: problems that could be solved with one uncomfortable conversation instead metastasize for months. You tell yourself you're keeping the peace. What you're actually doing is letting the pressure build until it can't be contained.",
      fullExplanation: "Here's your pattern: you notice a problem — a colleague not pulling their weight, a process that isn't working, a decision that feels wrong. Instead of raising it, you absorb it. You compensate. You work around it. You tell yourself it's not worth the disruption.\n\nWeeks later, the problem is bigger. You're resentful. The colleague still doesn't know there's an issue, because you've been covering for them. When it finally surfaces — and it always does — it's a crisis instead of a conversation.\n\nThe math is simple: one awkward 10-minute conversation now saves months of resentment and a potential blowup. Your intervention: practice what therapists call 'small bids for honesty.' Don't tackle the biggest conflict first. Start with low-stakes disagreements. 'I see that differently' in a meeting. 'I'd prefer to do it this way' on a project. Build the muscle with small weights before you need it for the heavy ones.",
    },
    {
      title: "Change Resistance",
      teaser: "Your love of stability makes you the team's anchor — but anchors can also hold things in place when the ship needs to move. You experience organizational change as a threat to the environment you've carefully built, and your resistance shows up not as overt opposition but as foot-dragging, quiet skepticism, and a gravitational pull toward 'the way we've always done it.'",
      fullExplanation: "You don't resist change because you're rigid. You resist it because you see what others miss: the cost. When leadership announces a restructure, you immediately calculate the human impact — the disrupted relationships, the lost institutional knowledge, the transition period where everything gets worse before it gets better. This cost-awareness is valuable. But it becomes a problem when it's the only input to your decision-making.\n\nSome changes are genuinely necessary, and your resistance — even passive resistance — slows the team's adaptation. Worse, because your resistance is quiet rather than vocal, it's hard for others to engage with it. You're not arguing against the change in meetings. You're just not fully implementing it, not championing it, and subtly signaling to the team that this too shall pass.\n\nThe growth move: separate your valid concern about human cost from your reflexive preference for the familiar. Ask yourself, 'If this change were already in place and someone proposed going back, would I resist that too?' If the answer is yes, your resistance is about comfort, not quality.",
    },
    {
      title: "The Silent Agreement Problem",
      teaser: "You nod in meetings. You say 'sounds good.' You agree to timelines, approaches, and decisions that you privately think are wrong. This isn't agreement — it's avoidance dressed as cooperation. And it costs your team the perspective they need most: the person who sees the risks nobody else is talking about.",
      fullExplanation: "Your agreeable exterior is a survival strategy that worked beautifully in most environments — right up until you're in a role where your honest assessment is the thing the team needs most. The irony: you often see problems that faster-moving colleagues miss. Your careful, observant nature catches risks, gaps, and human dynamics that D-styles and I-styles blow past. But you keep those observations to yourself because voicing them feels like creating conflict.\n\nThe result: the team makes decisions without your input, hits the problems you predicted, and never knows you could have helped them avoid it. You watch the crash from the sidelines feeling frustrated but vindicated — which is the worst possible emotional combination.\n\nThe fix isn't dramatic. You don't need to become confrontational. You need one sentence: 'I want to flag something I'm noticing.' That's it. Not 'I disagree.' Not 'you're wrong.' Just a gentle bid to add your perspective. Most teams will welcome it. And the ones that don't were never going to use your talent fully anyway.",
    },
  ],

  communicationStyle: "Warm, measured, and diplomatically honest. You listen more than you speak, and when you do contribute, it's considered and specific. You prefer one-on-one conversations to group debates and written communication that allows time for reflection. Your communication builds trust over time but can frustrate D-styles and I-styles who want faster, more assertive exchanges.",

  leadershipApproach: "You lead by creating stability, building trust, and developing people over time. Your leadership is most effective in established teams that need consistency, in environments where retention and morale matter, and in any context that requires patient coalition-building. You're less effective in crisis turnarounds or environments that demand rapid, unilateral decision-making. Your optimal configuration pairs you with a D or I-style partner who drives the pace while you maintain the foundation.",

  conflictStyle: "You avoid, then accommodate, then — if pushed far enough — withdraw. You'd rather absorb a problem than create a confrontation, and you'll make significant personal concessions to preserve harmony. In conflict, you go quiet, which others can misread as agreement when it's actually disengagement. Your conflict weakness: by the time you finally address an issue, you've accumulated so much frustration that the conversation carries more weight than the original problem warranted.",

  relationshipStyle: "The Steady Partner",
  relationshipPreview: "In relationships — professional and personal — you bring loyalty, consistency, and a rare gift for making people feel genuinely supported. People close to you get someone who remembers, follows through, and shows up especially when things are hard. Your reliability isn't glamorous, but it's the foundation that every meaningful relationship is actually built on.",
  relationshipDeepDive: "Your relationship pattern is rooted in service: you anticipate needs, remember preferences, and invest in the long game of trust-building that most people talk about but few actually practice. These are strengths that deepen over time — your closest relationships are often your oldest, because the people who know you best understand what your consistency is worth.\n\nThe challenge surfaces when the relationship needs something your natural mode doesn't provide — when your partner needs you to initiate rather than support, when a colleague needs you to challenge their idea rather than validate it, when the situation calls for disruption rather than stability. Your instinct to support can become enabling, and your conflict avoidance can allow problems to grow that an earlier, harder conversation would have resolved.\n\nThe specific risk to watch: your tendency to over-adapt. Under pressure to keep the peace, you can lose track of your own needs, preferences, and boundaries. Resentment builds invisibly — you don't express it, so your partner or colleague doesn't know it's there, and then it surfaces as withdrawal or passive resistance that feels sudden to them but has been accumulating for months. The practice is simple but uncomfortable: state one need per week that you'd normally suppress. Not aggressively. Just clearly. 'I need a night to myself.' 'I'd prefer to handle this differently.' Small assertions that keep the relationship honest.",

  careerHeadline: "You thrive in roles that reward consistency, team development, and long-term relationship management.",
  careerDirections: [
    "Project management and program operations",
    "Human resources, people operations, and team development",
    "Client success, account management, and relationship-driven sales",
    "Healthcare, counseling, and service-oriented professions",
    "Education, training, and organizational development",
  ],
  careerDeepDive: "Your career sweet spot is any role where success depends on sustained execution, interpersonal trust, and the ability to keep complex human systems running smoothly. You're at your best in environments with collaborative cultures, stable teams, and the time to build relationships that compound into results.\n\nThe S-style career trap is the opposite: high-churn environments with constant reorganization, competitive cultures that reward individual heroics over team contribution, and roles where your quiet competence gets overlooked because you don't self-promote. You can survive in these environments, but you'll be perpetually drained, and your natural strengths will be invisible to the people making promotion decisions.\n\nThe most successful S-styles eventually learn that their career ceiling isn't set by their competence — it's set by their visibility. You do excellent work that nobody notices because you don't draw attention to it. Your long-term career strategy should include deliberate investment in self-advocacy: documenting your contributions, sharing your perspective in meetings, and building a professional narrative that reflects what you actually deliver — not just what you're comfortable claiming.",

  emotionalPattern: "Your emotional life is deeper than it appears. Externally, you present as calm and even-tempered — the person who never seems rattled. Internally, you're processing a rich stream of emotional data: you feel the tension in a room, you register the slight someone else missed, you carry concern for colleagues that they may never know about. Your emotional depth is real; your emotional expression is filtered.\n\nThis filtering serves you well professionally — you're composed under pressure and people trust your steadiness. But it creates a specific cost: because you don't express distress, people assume you don't feel it. You get fewer check-ins, less support, and more responsibility dumped on your plate because you seem like you can handle it. Learning to signal when you're approaching your limit — before you hit it — is protective, not weak. The people who care about you want to know. You just have to let them.",

  stressTriggers: [
    "Sudden, poorly communicated change — reorganizations, shifting priorities, or new leadership that disrupts established relationships and processes",
    "Interpersonal conflict — being caught between colleagues, forced to take sides, or working in an environment where tension is constant and unresolved",
    "Being taken for granted — carrying invisible workload, receiving no acknowledgment, and watching less reliable colleagues get rewarded for visibility over substance",
  ],
  flowTriggers: [
    "Supporting a team through a long-term project where trust and consistency determine the outcome",
    "One-on-one mentoring or coaching where your patience and listening directly develop another person",
    "Building or refining systems that make a team's daily work smoother and more sustainable",
    "Collaborative problem-solving in a small, trusted group where everyone contributes and no one dominates",
  ],

  toolkit: [
    {
      title: "The First Sentence",
      context: "You have observations and concerns that you routinely suppress because voicing them feels like creating conflict. The team loses your perspective, and you lose influence.",
      action: "In your next meeting, commit to saying one thing you'd normally keep to yourself. Use the phrase 'I want to flag something I'm noticing' as your opening. You don't need to argue a position — just surface the observation. The first sentence is the hardest; everything after it is easier.",
    },
    {
      title: "The Boundary Practice",
      context: "Your instinct to accommodate means you absorb work, emotional labor, and compromises that erode your capacity over time. You don't burn out suddenly — you drain slowly.",
      action: "Once this week, say no to a request you would normally accept. Not rudely — just clearly. 'I don't have capacity for that this week.' Notice the discomfort. Notice that the relationship survives. Repeat until the discomfort shrinks.",
    },
    {
      title: "The Visibility Log",
      context: "You do work that matters but don't document or communicate it. This means your contributions are invisible in performance reviews, promotion discussions, and resource allocation.",
      action: "Every Friday, write three sentences about what you accomplished that week and share them with your manager — a brief email, a Slack message, whatever fits your culture. Not bragging. Just informing. Over months, this builds a record that matches your actual contribution.",
    },
    {
      title: "The Change Reframe",
      context: "When change is announced, your first reaction is to calculate what will be lost. This makes you resistant before you've evaluated what might be gained.",
      action: "Next time you feel resistance to a new initiative, write two lists: 'What this costs' and 'What this could enable.' You already do the first list instinctively. The second list is the intervention — it forces your brain to generate possibilities alongside the risks, which gives you a more complete picture before you form your opinion.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Over-Accommodation", description: "You absorb more — more work, more emotional labor, more compromise. You stop voicing concerns and focus entirely on keeping things running, even as your own capacity erodes." },
      { stage: 2, label: "Silent Withdrawal", description: "You disengage emotionally while still showing up physically. The warmth fades. Responses become shorter. You're present but unreachable, and colleagues sense the shift without understanding its cause." },
      { stage: 3, label: "Quiet Resentment", description: "The accumulated unspoken frustration surfaces as passive resistance — missed deadlines, reduced initiative, or a sudden departure that shocks everyone who thought you were fine." },
    ],
    stressRecovery: "Recovery requires genuine solitude (not just being quiet in a group), reconnection with one trusted person who asks how you're actually doing, and a concrete act of boundary-setting that restores your sense of agency.",
    flowTriggers: [
      "Long-term projects with a stable, collaborative team",
      "Mentoring or developing someone who genuinely wants to grow",
      "Building systems that make other people's work easier",
      "Trusted partnerships where contribution is mutual and acknowledged",
    ],
    flowDescription: "You enter flow when the environment matches your values — when the team is cohesive, the work is meaningful, the pace is sustainable, and your contribution is recognized as part of a larger whole rather than measured against individual heroics.",
  },

  careerAlignment: {
    naturalFits: [
      "Program management and operations where sustained execution matters more than flashy launches",
      "People-centric leadership roles — HR, L&D, team leads with retention accountability",
      "Client and account management where long-term relationships drive revenue",
      "Service professions — healthcare, education, counseling — where patient consistency is the job",
    ],
    likelyDrains: [
      "High-churn sales environments with aggressive individual targets and constant competitive pressure",
      "Startup cultures that celebrate disruption and treat stability as a lack of ambition",
      "Roles with high visibility requirements where self-promotion is the primary career advancement mechanism",
    ],
    careerWarning: "Your ceiling isn't set by your competence — it's set by your visibility. Learn to document and communicate your contributions, or you'll keep doing excellent work that nobody outside your immediate team ever sees.",
  },

  growthPathStructured: {
    intro: "Your growth as an S-style isn't about becoming louder or more aggressive. It's about expanding your range — adding the ability to disrupt, assert, and initiate when the situation calls for it, without losing the steadiness that makes you invaluable.",
    areas: [
      { title: "From Harmony to Honesty", description: "Not every uncomfortable truth is a threat to the relationship. Learning to voice disagreement early — as care, not conflict — prevents the slow erosion that silence creates." },
      { title: "From Stability to Adaptability", description: "Change isn't the enemy of the environment you've built. Sometimes it's the next version of it. Your growth is learning to evaluate change on its merits rather than reflexively protecting the status quo." },
      { title: "From Service to Self-Advocacy", description: "You cannot sustain the level of support you provide without investing in your own visibility, boundaries, and needs. Self-advocacy isn't selfish — it's the maintenance that keeps your engine running." },
    ],
  },

  heroImage: buildHeroImagePath("S"),
  sectionImages: buildSectionImages("S"),
};
