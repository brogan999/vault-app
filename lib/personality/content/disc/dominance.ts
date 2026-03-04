import type { DISCStyleContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const DOMINANCE: DISCStyleContent = {
  styleId: "dominance",
  styleLetter: "D",
  name: "Dominance",
  shortName: "Driver",
  tagline: "Cuts through noise, drives results, and makes things happen",
  color: "#A03B0F",

  overview: `You operate at a pace that most of your colleagues can't sustain. While they're still discussing options, you've already picked the best one and started executing. This isn't impatience — it's efficiency. Your mind naturally compresses the gap between seeing a problem and taking action, which means you spend less time in the territory where most teams get stuck: analysis paralysis, consensus-seeking, and the slow erosion of momentum that happens when nobody is willing to make a call.

This makes you the person people turn to when something needs to get done. Not eventually. Now. You set the bar high, communicate directly, and hold people accountable without apology. In environments where results matter more than feelings, you're not just effective — you're the engine that keeps everything moving.

Your core pattern is control. Not for its own sake, but because you've learned that outcomes improve when someone is willing to own them. When you take charge, ambiguity collapses, direction clarifies, and people know exactly where they stand. The cost is that your directness can feel blunt, your speed can leave people behind, and your preference for action over deliberation can miss risks that a slower approach would have caught.

The most effective D-styles learn to calibrate. Not every situation requires a general — sometimes it needs a diplomat, a listener, or a patient observer. Your growth isn't about becoming less direct. It's about choosing when directness serves the goal and when a different gear gets you further, faster.`,

  descriptionInsight: "Your profile shows a strong drive for results, autonomy, and direct action. This isn't a personality flaw to manage — it's an operating system optimized for environments where clarity, speed, and accountability matter most.",

  strengths: [
    {
      title: "Decisive Under Pressure",
      description: "When stakes are high and information is incomplete, you don't freeze — you act. Your ability to make tough calls quickly is a genuine competitive advantage. Most professionals defer, delay, or seek consensus in high-pressure moments. You assess, decide, and move.",
      deepDive: "Your decisiveness comes from a cognitive pattern that's genuinely rare: you can tolerate the discomfort of making a wrong call better than the discomfort of making no call at all. This means your decision-making engine stays online when most people's shuts down under stress. In crisis situations — layoffs, pivots, market shifts, team failures — you're the person everyone looks to because you'll actually commit to a direction. The risk: speed of decision doesn't always equal quality of decision. Your growth comes from building in a two-minute pause before high-stakes calls — not to second-guess yourself, but to check whether you've considered the inputs your pace naturally filters out.",
    },
    {
      title: "Results Orientation",
      description: "You measure everything by outcomes. Meetings without action items feel pointless. Processes without measurable results feel like busywork. This output focus makes you exceptionally productive and keeps teams honest about what's actually getting accomplished versus what's being discussed.",
      deepDive: "Your results orientation is more than a preference — it's a lens through which you evaluate everything: people, projects, opportunities, and your own performance. This makes you highly efficient at separating signal from noise. While others get pulled into process for its own sake, you're constantly asking 'but what did we actually produce?' The shadow side emerges when you apply this lens to domains where output isn't the right metric — relationships, creative work, personal development, team morale. In these areas, the process is the product. Learning to value the intangible is your edge case.",
    },
    {
      title: "Direct Communication",
      description: "People always know where they stand with you. You say what you mean, skip the preamble, and get to the point. In a professional world drowning in hedging and indirectness, your clarity is a genuine gift — even when it's uncomfortable to hear.",
      deepDive: "Your communication style operates on the principle that clarity is kindness and ambiguity is cruelty. When you tell a direct report their work isn't good enough, you're giving them something most managers won't: an honest signal they can actually act on. The challenge is that directness without calibration hits different people differently. The same feedback that energizes another D-style can devastate an S-style or alienate a C-style who needed the reasoning, not just the verdict. Your communication mastery isn't about becoming less direct — it's about matching your delivery to what each person needs to hear the message.",
    },
    {
      title: "Accountability Culture",
      description: "You don't let people off the hook — including yourself. Commitments are commitments, and you track them. This creates a high-trust environment where people know that words will be followed by action, because you model that standard relentlessly.",
    },
    {
      title: "Competitive Drive",
      description: "You want to win, and that energy is contagious. Your competitive instinct pushes teams to perform at levels they didn't think they could reach. You see benchmarks as challenges, not ceilings, and that mindset elevates everyone around you.",
    },
  ],

  growthEdges: [
    {
      title: "The Steamroller Effect",
      teaser: "Your pace and decisiveness can feel like a freight train to colleagues who process differently. They don't experience your efficiency — they experience being overridden. The result: compliance without buy-in, and talented people who stop contributing ideas because they've learned they won't be heard.",
      fullExplanation: "Here's what happens from the inside: you see the right answer, you state it clearly, you move to execute. Efficient. Correct. Done. Here's what happens from the outside: the room goes quiet. People who had ideas swallow them. The meeting ends with a plan that only one person — you — actually committed to.\n\nThe problem isn't your directness. It's the ratio. When you contribute 70% of the airtime and make 90% of the decisions, you've created a team that depends on you for everything — which is the opposite of leverage. You're not building capacity; you're being a bottleneck disguised as a leader.\n\nThe intervention: in every meeting, speak last on at least one agenda item. Not because others' ideas are better — they may not be. Because the act of listening before deciding builds the team muscle you can't build any other way. And occasionally, someone will surface an insight your pace would have blown past.",
    },
    {
      title: "Empathy Deficit",
      teaser: "Your focus on results can make you blind to the human cost of your pace. People aren't machines — they have emotional responses to change, pressure, and criticism that you may dismiss as 'soft' or irrelevant. This blind spot costs you loyalty, retention, and the discretionary effort that only comes from people who feel valued.",
      fullExplanation: "You probably don't think of yourself as lacking empathy. And technically, you may be right — you can read a room when you choose to. The issue is that your default mode doesn't prioritize emotional data. You register it, but you filter it as noise rather than signal.\n\nThis creates a specific cost pattern: you get exceptional short-term compliance (people do what you say because you're clear and accountable) but mediocre long-term engagement (people leave, disengage, or stop volunteering for your projects). The talent you retain tends to be other D-styles and tough-minded C-styles. The creative, collaborative, and people-oriented talent — the I and S styles who bring capabilities you genuinely need — move to leaders who make them feel valued.\n\nThe fix isn't to become emotional. It's to treat empathy as a strategic input. Before making a decision that affects people, ask one question: 'What's this going to feel like for the person on the receiving end?' Not to change your decision — but to change how you deliver it.",
    },
    {
      title: "Control Addiction",
      teaser: "Your need for control doesn't feel like a need — it feels like common sense. Of course you should drive the process. Of course you should make the call. But the more you control, the less others develop, and the more dependent the system becomes on you being right every time.",
      fullExplanation: "Control is your security mechanism. When you control the outcome, you control the risk. When you delegate, you're exposed to someone else's judgment, pace, and standards — and that exposure feels genuinely dangerous to your nervous system.\n\nThe paradox: the more control you exert, the less resilient your team becomes. You've built a system where you're the single point of failure. If you're sick, on vacation, or simply wrong, the whole thing wobbles. That's not strength. That's fragility disguised as leadership.\n\nThe growth move is delegation with teeth: hand over meaningful decisions (not just tasks), set clear success criteria, and let people fail in contained ways. Your instinct will scream that they're doing it wrong. Let them. The temporary dip in quality buys long-term capability that no amount of your personal output can match.",
    },
  ],

  communicationStyle: "Direct, concise, bottom-line-first. You lead with the conclusion and provide supporting detail only when asked. Meetings should have agendas, emails should have action items, and conversations should have a point. You communicate to move things forward, not to build rapport — which means your communication is highly efficient with other D-styles and often feels abrupt to S and I styles who need more relational warmth before they can receive your message.",

  leadershipApproach: "You lead by setting a clear direction, establishing high standards, and holding people accountable. Your leadership is most effective in turnaround situations, competitive environments, and any context where decisive action matters more than consensus. You're less effective in environments that require patient coalition-building, emotional support, or extended periods of ambiguity where no clear action is possible. Your optimal leadership configuration pairs you with a strong S or I-style second-in-command who manages the relational dynamics you naturally deprioritize.",

  conflictStyle: "You confront directly and early. You'd rather have an uncomfortable conversation now than let a problem fester. In conflict, you state your position clearly and expect others to do the same — you respect people who push back and lose patience with those who agree publicly and undermine privately. Your conflict weakness: you can escalate when de-escalation is called for, and your intensity in disagreement can shut down people who experience conflict as threatening rather than clarifying.",

  relationshipStyle: "The Direct Partner",
  relationshipPreview: "In relationships — professional and personal — you bring clarity, reliability, and an unwavering commitment to making things work. People know exactly where they stand with you, which creates a kind of security that more diplomatic communicators can't offer. Your partner or closest colleagues get someone who will always tell them the truth, fight for them, and take charge when things get hard.",
  relationshipDeepDive: "Your relationship pattern is straightforward: you take charge, you provide, you protect. These are genuine strengths, and the people close to you rely on them. The challenge emerges when the relationship needs something other than direction and decisiveness — when your partner needs you to listen without fixing, when your colleague needs emotional support rather than a solution, when the situation calls for presence rather than action.\n\nThe D-style's hidden vulnerability in relationships is the assumption that value equals output. You show love by solving problems, providing resources, and removing obstacles. But for many people, the most valuable thing you can offer is your undivided attention — no agenda, no fix, just being there. This doesn't come naturally to you, and it may never feel as satisfying as taking action. But the relationships that matter most will eventually demand it.\n\nThe specific risk to watch: your directness can become dismissive when you're stressed. Under pressure, your communication shortens further, your tolerance for emotional processing drops, and the people closest to you bear the brunt. Building a circuit breaker — a phrase like 'I'm in work mode right now and I need to shift gears before we talk about this' — protects relationships from your stress-mode defaults.",

  careerHeadline: "You thrive in roles that reward decisive action, clear authority, and measurable results.",
  careerDirections: [
    "Executive leadership — CEO, COO, Managing Director",
    "Entrepreneurship and startup founding",
    "Sales leadership and business development",
    "Operations and turnaround management",
    "Litigation and negotiation-heavy roles",
  ],
  careerDeepDive: "Your career sweet spot is any role where the organization needs someone to set direction, make tough calls, and drive execution. You're at your best in environments with clear metrics, competitive dynamics, and the autonomy to execute your vision without committee approval for every decision.\n\nThe D-style career trap is the opposite: roles with heavy consensus requirements, ambiguous success metrics, or organizational cultures that prioritize process over outcomes. You can survive in these environments, but you'll be perpetually frustrated, and your natural strengths will read as liabilities.\n\nThe most successful D-styles eventually learn that their career ceiling isn't set by their drive or decisiveness — it's set by their ability to build and retain talent. The CEO who can't keep a leadership team burns through people and eventually runs out of runway. Your long-term career strategy should include deliberate investment in the relational skills that turn your individual horsepower into organizational leverage.",

  emotionalPattern: "Your emotional life is simpler than most types — or at least, that's how it appears. You experience a relatively narrow band of emotions with high intensity: determination, frustration, impatience, satisfaction. The quieter emotions — vulnerability, sadness, uncertainty — register less clearly, not because you don't feel them but because your system processes them differently. Action is your emotional language: when you feel bad, you fix something.\n\nThis emotional efficiency is an asset in professional contexts where emotional composure matters. But it creates a specific blind spot: you may not realize how much emotion is influencing your decisions until after the fact. The snap judgment that felt like pure logic was partly anger. The aggressive timeline that felt ambitious was partly anxiety. Learning to read your own emotional inputs — even imperfectly — makes your already-strong decision-making even better.",

  stressTriggers: [
    "Loss of control — being dependent on others' pace, decisions, or competence",
    "Inefficiency — watching preventable waste of time, resources, or talent",
    "Lack of progress — stalled projects, indecisive leadership, bureaucratic obstacles",
  ],
  flowTriggers: [
    "High-stakes problem-solving with real consequences and tight timelines",
    "Leading a team through a challenge that requires quick pivots and decisive action",
    "Competitive situations where your performance directly determines the outcome",
    "Building something from scratch with full authority over execution",
  ],

  toolkit: [
    {
      title: "The Two-Minute Pause",
      context: "Before making any decision that affects other people, you have a window where slowing down costs nothing and catches errors your pace would miss.",
      action: "Before announcing a decision in a meeting or sending a directive email, pause for two minutes. Ask: who will this affect, and what's their likely reaction? Not to change the decision, but to change how you deliver it. Two minutes of empathy saves hours of cleanup.",
    },
    {
      title: "The Listening Lap",
      context: "Your instinct in meetings is to drive toward a conclusion. But you miss valuable input when people learn that contributing is pointless because you've already decided.",
      action: "In your next team meeting, go around the table and have each person share their perspective before you share yours. Don't comment, qualify, or redirect — just take notes. You'll be surprised how often someone surfaces an angle you hadn't considered.",
    },
    {
      title: "Delegation With Teeth",
      context: "You delegate tasks but retain decisions, which means your team executes but doesn't develop. Real delegation means handing over judgment, not just labor.",
      action: "Choose one meaningful decision this week and delegate it fully. Set the success criteria, provide context, and then step back. Let the person own the outcome — even if they do it differently than you would. Debrief after, not during.",
    },
    {
      title: "The Relationship Deposit",
      context: "Your transactional communication style gets things done but depletes relational capital over time. People do more for leaders they feel connected to, not just accountable to.",
      action: "Once a day, have a 5-minute conversation with a colleague that has no agenda — no problem to solve, no status to check, no deliverable to discuss. Ask about their weekend, their current challenge, their perspective on something unrelated to work. The discomfort you feel is the muscle growing.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Intensification", description: "You double down on control: shorter communication, faster decisions, less tolerance for dissent. The pace becomes unsustainable for everyone around you." },
      { stage: 2, label: "Isolation", description: "You stop delegating and start doing everything yourself. Trust erodes as you take over tasks you'd previously assigned, signaling that you don't believe others can handle pressure." },
      { stage: 3, label: "Eruption", description: "The accumulated frustration surfaces as sharp criticism, public impatience, or blunt assessments that damage relationships. What feels like honesty in the moment reads as aggression from the outside." },
    ],
    stressRecovery: "Recovery requires physical release (exercise, movement) and a concrete win — solving a tangible problem restores your sense of control and brings your intensity back to productive levels.",
    flowTriggers: [
      "High-stakes challenges with clear success criteria",
      "Full authority over execution",
      "Competitive dynamics with worthy opponents",
      "Building something new under time pressure",
    ],
    flowDescription: "You enter flow when the challenge matches your intensity — when the problem is real, the stakes are high, and the path to victory requires exactly the kind of decisive, fast-moving leadership you do best.",
  },

  careerAlignment: {
    naturalFits: [
      "Executive and operational leadership with P&L accountability",
      "Entrepreneurship and startup environments with rapid decision cycles",
      "Sales leadership where competitive drive converts to revenue",
      "Turnaround management where decisiveness is the primary job requirement",
    ],
    likelyDrains: [
      "Highly bureaucratic organizations with slow decision-making processes",
      "Roles requiring extended consensus-building before action",
      "Support functions with ambiguous success metrics and no direct authority",
    ],
    careerWarning: "Your ceiling isn't set by your drive — it's set by your ability to retain talent. Invest in relational skills or you'll keep building teams that perform brilliantly for 18 months and then collapse.",
  },

  growthPathStructured: {
    intro: "Your growth as a D-style isn't about becoming less decisive or less direct. It's about expanding your range — adding gears that let you be effective in situations where force and speed aren't the answer.",
    areas: [
      { title: "From Speed to Timing", description: "Not every situation rewards the fastest decision. Learning to read when speed serves and when patience serves is the difference between a good D-style leader and a great one." },
      { title: "From Control to Trust", description: "Delegating decisions — not just tasks — builds organizational resilience and frees your bandwidth for the challenges only you can handle." },
      { title: "From Output to Presence", description: "The relationships that sustain your career over decades aren't built on results. They're built on the moments where you showed up as a person, not just a performer." },
    ],
  },

  heroImage: buildHeroImagePath("D"),
  sectionImages: buildSectionImages("D"),
};
