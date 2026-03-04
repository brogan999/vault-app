import type { DISCStyleContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const INFLUENCE: DISCStyleContent = {
  styleId: "influence",
  styleLetter: "i",
  name: "Influence",
  shortName: "Inspirer",
  tagline: "Energizes rooms, connects people, and turns ideas into momentum",
  color: "#C7A356",

  overview: `You walk into a room and the energy shifts. Not because you demand attention — because you radiate it. Your natural enthusiasm is contagious, your optimism is genuine, and your ability to connect with people across every level of an organization is a skill most professionals spend entire careers trying to develop. You already have it. It's your operating system.

This makes you the person people want on their team, in their meeting, at their brainstorm. You generate ideas faster than most people can evaluate them, build rapport before the agenda even starts, and create an atmosphere where collaboration feels effortless. In environments where innovation, morale, and cross-functional alignment matter, you're not just valuable — you're the catalyst that makes everything move.

Your core pattern is influence through connection. You persuade by making people feel seen, heard, and excited about a shared vision. Where a D-style drives through authority and a C-style convinces through data, you convince through energy and relationship. People say yes to you because they trust you, like you, and want to be part of whatever you're building. The cost is that your enthusiasm can outpace your follow-through, your desire to be liked can prevent hard conversations, and your verbal processing style can dominate airtime without producing decisions.

The most effective i-styles learn to pair their energy with structure. Not every brilliant idea needs to be spoken aloud the moment it arrives. Not every relationship needs to stay comfortable. Your growth isn't about becoming less enthusiastic — it's about channeling that enthusiasm into outcomes that match the excitement you generated.`,

  descriptionInsight: "Your profile reveals a natural orientation toward enthusiasm, connection, and collaborative energy. This isn't a personality quirk to manage — it's an operating system built for environments where inspiration, teamwork, and creative momentum drive the work forward.",

  strengths: [
    {
      title: "Motivational Energy",
      description: "You don't just participate — you elevate. Your enthusiasm is a force multiplier that lifts team morale, energizes flat meetings, and makes people believe that hard things are possible. This isn't performance; it's your natural frequency, and people respond to it because it's authentic.",
      deepDive: "Your motivational energy operates on a mechanism most professionals can't replicate: genuine belief. When you get excited about an idea, project, or goal, that excitement is real — and people can tell. This is why your influence works where scripted pep talks fail. You're not performing optimism; you're experiencing it, and that authenticity creates permission for others to feel it too.\n\nThe practical impact is significant. Teams with an energizing i-style consistently report higher engagement, more creative output, and greater willingness to take risks. You lower the social cost of contributing ideas because your energy signals that this is a safe space to think out loud.\n\nThe risk: your energy can create a dependency where the team's morale is coupled to your presence. When you're off, the room goes flat. Building sustainable motivation — through systems, rituals, and shared ownership of energy — ensures your teams stay engaged even when you're not in the room.",
    },
    {
      title: "Relationship Architecture",
      description: "You build professional networks that most people can only envy. Your ability to remember personal details, find common ground, and make people feel valued creates a web of genuine connections that opens doors, surfaces opportunities, and provides safety nets when things go sideways.",
      deepDive: "Where others collect business cards, you collect relationships. Your networking isn't transactional — you're genuinely interested in people, and that interest creates bonds that compound over time. The colleague you grabbed coffee with three years ago becomes the hiring manager who calls you first. The vendor you treated like a human being becomes the partner who gives you priority during a supply crunch.\n\nThis relational capital is your most undervalued professional asset. In a world where technical skills are increasingly commoditized, your ability to build trust quickly and maintain it across organizational boundaries is a genuine competitive moat.\n\nThe growth edge: depth versus breadth. Your natural tendency is to collect wide networks with warm but shallow connections. The highest-performing i-styles learn to go deep with a smaller circle — investing in the dozen relationships that will define their career rather than maintaining hundreds that stay at surface level.",
    },
    {
      title: "Creative Ideation",
      description: "Your mind generates possibilities the way other people generate objections. In brainstorming sessions, you're the one producing the ideas that break the group out of conventional thinking. Your willingness to say the unpolished thought out loud is what creates the opening for genuine innovation.",
      deepDive: "Your creative strength isn't just about having ideas — it's about voicing them before the inner critic arrives. Most professionals self-edit aggressively, killing novel concepts before they reach the room. You skip that filter, which means your hit rate on any individual idea might be lower, but your total creative output is dramatically higher.\n\nThis is the engine behind breakthrough thinking. The idea that transforms a product, campaign, or strategy almost never arrives fully formed. It arrives as a rough, imperfect thought that someone was brave enough to say out loud — and in most rooms, that someone is you.\n\nThe discipline to develop: capture and curate. Your idea velocity is high, but your idea retention is low. Building a simple system — a voice memo habit, a running document, a five-minute end-of-day brain dump — ensures the best ideas survive past the meeting where they were born.",
    },
    {
      title: "Adaptive Communication",
      description: "You read emotional temperature instinctively and adjust your approach to match. Whether you're presenting to executives, rallying a team, or defusing a tense one-on-one, you calibrate your tone, energy, and messaging in real time. This flexibility makes you effective across audiences that would trip up more rigid communicators.",
    },
    {
      title: "Collaborative Instinct",
      description: "You default to 'we' rather than 'I.' Your natural instinct is to pull people in, share credit generously, and build coalitions around ideas. This collaborative wiring creates psychological safety on your teams — people contribute more freely because they know their input will be welcomed and acknowledged.",
    },
  ],

  growthEdges: [
    {
      title: "The Follow-Through Gap",
      teaser: "Your enthusiasm generates commitments faster than your bandwidth can honor them. You say yes to the new initiative, volunteer for the cross-functional project, and pitch the creative concept — all before finishing last week's deliverables. The pattern is visible to everyone except you: exciting starts, quiet fades, and a trail of 80%-done work.",
      fullExplanation: "Here's what happens from your perspective: a new opportunity appears, your energy spikes, you commit with total sincerity, and you mean every word. Here's what happens from your team's perspective: you promised this would be done by Friday, it's now Wednesday of the following week, and when they ask about it, you're excited about something else entirely.\n\nThe problem isn't laziness or dishonesty. It's that your dopamine system is wired for novelty, and finishing is the opposite of novel. The last 20% of any project — the documentation, the edge cases, the tedious details — feels like walking through wet concrete while your brain is already sprinting toward the next shiny thing.\n\nThe intervention isn't willpower. It's architecture. Before committing to anything new, check your current obligation list. If it has more than three active commitments, the answer to the next opportunity is 'I'd love to — let me finish what's on my plate first.' This sentence will feel physically uncomfortable. Say it anyway. Your reputation for reliability will thank you.",
    },
    {
      title: "The Depth Problem",
      teaser: "Your conversational agility can mask a reluctance to go deep. You're brilliant at reading a room and making people feel good, but when the conversation requires sustained analytical focus, uncomfortable honesty, or sitting with ambiguity, your instinct is to pivot to something lighter. Colleagues notice — and the perceptive ones stop bringing you their real problems.",
      fullExplanation: "You've developed a sophisticated social skill: the ability to keep conversations warm, positive, and moving. This skill serves you well in most professional interactions. But it becomes a liability when the situation demands depth — when a direct report needs genuine feedback rather than encouragement, when a strategy requires brutal honesty about what isn't working, or when a colleague needs you to sit with their frustration instead of reframing it as an opportunity.\n\nThe pattern looks like this: someone brings you a real problem, you listen for about 90 seconds, and then your brain starts generating silver linings, alternative perspectives, and optimistic reframes. You're trying to help. What they experience is dismissal — the message that their problem isn't serious enough to sit with.\n\nThe growth move: practice staying in the discomfort for twice as long as your instinct tells you. When someone shares a difficulty, resist the urge to fix, reframe, or brighten. Instead, say 'That sounds really hard' and wait. The silence that follows will feel unbearable. It's where trust is actually built.",
    },
    {
      title: "Conflict Avoidance",
      teaser: "Your desire to maintain positive relationships makes you allergic to confrontation. You'll hint, soften, delay, and reframe rather than deliver a direct message that might damage a connection. The irony: avoiding the small conflicts now creates the large conflicts later, and your relationships suffer more from the accumulated dishonesty than they would from one uncomfortable conversation.",
      fullExplanation: "Conflict threatens the thing you value most: connection. When you confront someone, you risk their disapproval, their withdrawal, their dislike — and your nervous system registers that risk as genuinely dangerous. So you avoid. You give feedback sandwiched between so much praise that the message gets lost. You address performance issues six months too late. You tolerate behavior that crosses your boundaries because addressing it would create tension.\n\nThe cost is specific and measurable: the people who report to you don't improve as fast as they could, because they're not getting clear signals about what needs to change. The peers who take advantage of your agreeableness continue taking advantage. And you accumulate resentment that eventually leaks out as passive-aggressive comments or sudden emotional withdrawals that blindside people who thought everything was fine.\n\nThe reframe that helps: direct feedback is a form of respect. When you tell someone the truth about their performance, you're saying 'I believe you're capable of better.' When you avoid that conversation, you're saying 'I don't trust you to handle reality.' Start small. Pick one piece of feedback you've been sitting on and deliver it this week — cleanly, kindly, and without a compliment chaser.",
    },
  ],

  communicationStyle: "Expressive, warm, and story-driven. You communicate to connect first and inform second — building rapport before delivering content. Your verbal energy is high, you think out loud, and your natural communication rhythm involves enthusiasm, tangents, and a gravitational pull toward the positive. This makes you magnetic in presentations and team settings, and occasionally frustrating to D and C-styles who want you to get to the point.",

  leadershipApproach: "You lead by inspiration rather than authority. Your leadership creates environments where people feel energized, valued, and willing to go beyond the minimum — not because they have to, but because your enthusiasm makes them want to. You're most effective leading creative teams, managing through change, and building culture from scratch. Your leadership gap is accountability: you're better at launching initiatives than ensuring they land, and your discomfort with tough conversations can let underperformance persist too long.",

  conflictStyle: "You avoid, accommodate, and then occasionally erupt. Your default in conflict is to smooth things over, find common ground, and redirect energy toward something positive. When avoidance reaches its limit, the backlog of unaddressed frustrations can surface in an emotional outburst that surprises everyone — including you. Your conflict growth edge is learning to address tension early and directly, when the stakes are low and the emotional charge is manageable.",

  relationshipStyle: "The Energizer",
  relationshipPreview: "In relationships — professional and personal — you bring warmth, spontaneity, and an infectious sense of possibility. People close to you feel genuinely seen and celebrated. You remember the details that matter, you show up with energy, and you make the people around you feel like the most interesting person in the room.",
  relationshipDeepDive: "Your relationship pattern is generous: you give attention, affirmation, and enthusiasm freely. The people in your life feel valued because you make an active practice of noticing and celebrating them. This creates deep loyalty — people want to be in your orbit because your orbit feels good.\n\nThe challenge surfaces when relationships require something other than warmth. When your partner needs you to sit with their sadness rather than cheer them up. When your colleague needs honest feedback rather than encouragement. When the relationship requires you to be present in discomfort rather than redirecting toward positivity. These moments ask for a skill your natural wiring doesn't prioritize: stillness.\n\nThe specific risk to watch: your social energy can create a perception of intimacy that outruns the actual depth of the relationship. You may have dozens of people who consider you a close friend, while you consider them pleasant acquaintances. This gap creates hurt when people discover the warmth they received isn't matched by the investment they expected. Being intentional about which relationships get your deepest attention — and honest with yourself about which ones are friendly but surface-level — protects both you and the people who care about you.",

  careerHeadline: "You thrive in roles that reward enthusiasm, connection, and the ability to move people toward a shared vision.",
  careerDirections: [
    "Sales, partnerships, and client relationship management",
    "Marketing, brand strategy, and creative leadership",
    "Training, coaching, and organizational development",
    "Public relations, communications, and media roles",
    "Team leadership in innovation-driven or people-heavy environments",
  ],
  careerDeepDive: "Your career sweet spot is any role where success depends on your ability to inspire, persuade, and build relationships. You're at your best in environments with collaborative cultures, creative freedom, and regular human interaction — the kind of work where your energy directly translates into results.\n\nThe i-style career trap is isolation. Roles that park you behind a spreadsheet, require extended solo focus, or measure success purely through individual output will drain you faster than any workload could. You need an audience, a team, or at least a steady stream of human interaction to sustain your energy.\n\nThe most successful i-styles build their careers on two pillars: their natural relational talent and a deliberately developed accountability practice. The charisma gets you in the door and earns you opportunities. The follow-through determines whether those opportunities compound into a career trajectory or evaporate into a reputation for big ideas and inconsistent execution. Pair yourself with a detail-oriented partner — a C-style operations person, a project manager, or even a structured personal system — and you convert your creative energy into outcomes that stick.",

  emotionalPattern: "Your emotional life is vivid, expressive, and immediately visible. You feel things quickly and outwardly — joy, excitement, frustration, hurt — and your face broadcasts what you're experiencing before you've decided whether to share it. This emotional transparency is part of what makes you magnetic: people trust you because your reactions are genuine and readable.\n\nThe shadow side of this emotional openness is reactivity. You can be swept into enthusiasm before vetting the idea, or plunged into discouragement by a single critical comment. Your emotional weather changes quickly, which means your teams sometimes experience whiplash — Monday's passionate rally can feel disconnected from Wednesday's flat energy. Building an emotional buffer — a practice of pausing between feeling and acting — doesn't dampen your natural expressiveness. It gives you the half-second you need to choose your response rather than being chosen by it.",

  stressTriggers: [
    "Social rejection or exclusion — being left out of decisions, meetings, or the inner circle",
    "Rigid structure without autonomy — micromanagement, inflexible processes, and environments that penalize spontaneity",
    "Isolation — extended solo work without collaboration, recognition, or human feedback",
  ],
  flowTriggers: [
    "Collaborative brainstorming with engaged, creative peers",
    "Presenting or performing for a responsive audience",
    "Building new relationships and expanding professional networks",
    "Launching initiatives where enthusiasm and persuasion drive the outcome",
  ],

  toolkit: [
    {
      title: "The Commitment Audit",
      context: "Your enthusiasm creates obligations faster than your calendar can absorb them. Every yes is a withdrawal from your finite execution budget, and you're overdrawn.",
      action: "Every Sunday, list every active commitment you've made — professional and personal. If the list exceeds five items, identify the two you'll defer or decline this week. Send those messages before Monday morning. The temporary discomfort of saying 'not now' is nothing compared to the reputational cost of another quiet fade.",
    },
    {
      title: "The Depth Hold",
      context: "Your instinct in difficult conversations is to lighten, reframe, or redirect. This protects your comfort but robs the other person of being truly heard.",
      action: "In your next one-on-one where someone shares a problem, set a mental timer for two minutes. During those two minutes, do not offer a solution, silver lining, or reframe. Only reflect back what you hear: 'It sounds like you're frustrated because...' The urge to fix will be intense. Resist it. Depth is built in the silence you're afraid of.",
    },
    {
      title: "The Finish Line Ritual",
      context: "Starting is your superpower. Finishing is your kryptonite. The last 20% of any project is where your attention wanders, and it's where your credibility is actually built.",
      action: "Pick one project that's currently at 80% completion. Block 90 minutes on your calendar with no meetings on either side. Close Slack, silence your phone, and finish it. Ship it. Then — and only then — allow yourself to start something new. Repeat weekly until finishing feels as natural as starting.",
    },
    {
      title: "The Direct Conversation",
      context: "You have feedback sitting in your mental queue that you've been softening, delaying, or avoiding entirely. The longer it sits, the harder it gets and the more damage the silence does.",
      action: "Identify one piece of honest feedback you've been withholding from a colleague or direct report. Write it down in two sentences — no sandwich, no softener. Then deliver it face-to-face this week using the frame: 'I want to share something because I respect you and I think it'll help.' Let the discomfort exist. It passes faster than you think.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Overextension", description: "You say yes to everything, increase your social output, and fill every gap with more energy. The pace feels sustainable because the adrenaline of connection masks the depletion underneath." },
      { stage: 2, label: "Scattered Withdrawal", description: "Your focus fragments across too many commitments. Follow-through collapses, quality dips, and you start avoiding the people you've over-promised to — which is the opposite of your natural state." },
      { stage: 3, label: "Emotional Flooding", description: "The accumulated stress surfaces as uncharacteristic negativity, emotional outbursts, or sudden withdrawal from social contact. People who rely on your energy are blindsided by the shift." },
    ],
    stressRecovery: "Recovery requires social recharge in a low-stakes setting — a casual dinner with people who know you well, a phone call with a trusted friend, or any interaction where you can be yourself without performing. Combine this with a ruthless reduction of your active commitments to restore bandwidth.",
    flowTriggers: [
      "Collaborative ideation with engaged, high-energy peers",
      "Live presentation or facilitation with real-time audience feedback",
      "Relationship-building in new environments with fresh connections",
      "Creative problem-solving where persuasion and energy drive the outcome",
    ],
    flowDescription: "You enter flow when connection and creativity converge — when you're riffing with people you respect, the ideas are flying, and your enthusiasm is directly translating into momentum that moves the room forward.",
  },

  careerAlignment: {
    naturalFits: [
      "Client-facing leadership where relationships drive revenue and retention",
      "Creative and marketing roles where enthusiasm translates into compelling output",
      "Training, coaching, and facilitation where your energy develops others",
      "Startup and innovation environments where selling the vision is the primary job",
    ],
    likelyDrains: [
      "Isolated analytical roles with minimal human interaction and no audience",
      "Heavily process-driven environments with rigid compliance requirements",
      "Roles measured purely by individual output with no collaborative component",
    ],
    careerWarning: "Your ceiling isn't set by your charisma — it's set by your follow-through. Invest in finishing systems and accountability structures or you'll keep generating brilliant opportunities and watching them evaporate.",
  },

  growthPathStructured: {
    intro: "Your growth as an i-style isn't about becoming less enthusiastic or less social. It's about building the infrastructure beneath your energy — adding the systems, discipline, and directness that turn your natural magnetism into sustained, measurable impact.",
    areas: [
      { title: "From Enthusiasm to Execution", description: "Your ideas spark movements. Your follow-through determines whether those movements become results or stories about what almost happened. Building a finishing practice is the single highest-leverage investment you can make." },
      { title: "From Warmth to Honesty", description: "Being liked is your default setting. Being respected requires the willingness to say hard things to people you care about — and trusting that the relationship can hold the weight of truth." },
      { title: "From Breadth to Depth", description: "You know everyone. The question is whether anyone truly knows you. Shifting investment from a wide network to a deep inner circle creates the kind of relationships that sustain a career and a life." },
    ],
  },

  heroImage: buildHeroImagePath("i"),
  sectionImages: buildSectionImages("i"),
};
