import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_5: EnneagramTypeContent = {
  typeNumber: 5,
  name: "The Investigator",
  shortName: "Investigator",
  tagline: "Watches the world from a safe distance until understanding replaces the need to participate",
  color: "#328181",
  center: "head",

  coreFear: "Being helpless, incapable, or overwhelmed by the world's demands — that you don't have enough inner resources to handle what life requires",
  coreDesire: "To be capable and competent — to possess enough knowledge, skill, and self-sufficiency that the world can never catch you unprepared",
  coreMotivation: "To understand the environment, to have everything figured out as a way of defending the self from threat, to conserve energy and resources, to keep the world from making demands you can't meet, to maintain the inner sanctum where your mind can work undisturbed",
  defensePattern: "Isolation — withdrawing from engagement to build internal resources and avoid depletion. You don't just need alone time; you need a fortress of competence between you and the world's demands.",

  overview: `You operate on a fundamentally different energy economy than most people. Where others seem to have a renewable supply of social energy, emotional bandwidth, and tolerance for interruption, yours is a finite battery that drains with every interaction, every demand, every moment of being perceived. This isn't introversion — plenty of Fives can be socially skilled and even engaging. It's a deep structural conviction that your inner resources are limited and the world's demands are infinite, and therefore every expenditure must be carefully rationed.

This creates a life organized around conservation. You minimize needs. You stockpile knowledge. You build systems of understanding that let you predict and control your environment from a distance. You observe before you participate, analyze before you commit, and retreat before you're depleted. The ideal state is having figured everything out from the safety of your mind — understanding the game so thoroughly that you never have to play it unprepared.

Your mind is your sanctuary and your primary tool. You think in systems, frameworks, and models. Where others might respond to a problem with emotion or action, you respond with analysis: What are the variables? What are the patterns? What's the underlying structure? This capacity for detached, rigorous thinking makes you extraordinarily good at understanding complex systems — and extraordinarily prone to substituting understanding for living. You can become so absorbed in mapping the territory that you forget to actually walk through it.

The most integrated Fives discover that the scarcity they feel is largely constructed. Their energy isn't as finite as they believed. The world isn't as depleting as they feared. And the competence they've been building in isolation becomes genuinely powerful only when they bring it into contact with people and situations — when knowing becomes doing, and the observer finally steps into the arena.`,

  descriptionInsight: "Your need to withdraw and understand isn't a social deficit — it's a mind that processes reality at a depth most people never reach. The growth edge is learning that engagement doesn't drain you as much as you expect, and that your knowledge becomes real power only when you bring it out of the vault and into the world.",

  strengths: [
    {
      title: "Analytical Depth",
      description: "You don't just think about things — you think through them, layer by layer, until you reach a level of understanding that others rarely access. Where most people stop at the surface explanation, you keep going: Why does this work this way? What's the hidden variable? What's the framework behind the framework? This depth of analysis makes you the person people come to when the problem is genuinely hard.",
      deepDive: "Your analytical process has a distinctive quality: it's not just rigorous, it's patient. You can sit with a problem for days, weeks, even months — holding its complexity in your mind, turning it over, refusing to simplify it prematurely. This patience is rare and extraordinarily valuable. Most people are uncomfortable with not-knowing and will grab the first plausible explanation to relieve the tension. You can tolerate the ambiguity long enough to find the real answer. The shadow side is analysis paralysis — the conviction that you need to understand one more layer before you can act. At some point, further analysis yields diminishing returns and the remaining uncertainty can only be resolved through experience. Knowing when to stop thinking and start testing is the skill that separates effective Fives from stuck ones.",
    },
    {
      title: "Intellectual Independence",
      description: "You think for yourself in a way that's genuinely rare. Groupthink, social pressure, popular opinion — these have almost no pull on your conclusions. You arrive at your positions through your own investigation and you'll hold them even when the entire room disagrees. This isn't stubbornness; it's epistemic integrity.",
      deepDive: "Your independence of mind comes from a place most people can't access: you've actually done the work. When you hold a position, it's because you've read the sources, examined the counterarguments, and stress-tested the logic. This means you're almost impossible to sway with rhetoric, emotional appeals, or authority. You respond to evidence and reasoning, period. This makes you invaluable in any environment where the truth matters more than consensus — research, strategy, technical architecture, investigative work. It also makes you frustrating to people who operate on social proof and are unsettled by someone who simply won't go along. The growth edge is learning to distinguish between genuine independence and reflexive contrarianism — disagreeing because you've thought it through versus disagreeing because agreement feels like a loss of autonomy.",
    },
    {
      title: "Observational Precision",
      description: "You notice things others miss — not because you're looking harder, but because you're looking from a different position. The observer's perch, slightly removed from the action, gives you a perspective that participants can't have. You see patterns, dynamics, and structural features that are invisible from inside the system.",
      deepDive: "Your observational capacity is tied to your emotional detachment, and this is both its power and its limitation. Because you're not emotionally invested in a particular outcome, you can see a situation with unusual clarity. In meetings, you notice the power dynamics others are too busy performing to register. In systems, you see the failure modes that optimistic builders overlook. In people, you see the patterns they can't see in themselves. This makes you an extraordinary diagnostician — of systems, organizations, and sometimes people. The cost is that this detachment can become a permanent condition rather than a chosen perspective. You watch the movie of life in high definition while forgetting that you have a ticket to be in it.",
    },
    {
      title: "Self-Sufficiency",
      description: "You need remarkably little from the external world. Where others require constant social input, validation, and stimulation, you can sustain yourself on a good book, an interesting problem, and solitude. This isn't deprivation — it's a genuine capacity for independence that makes you resilient in circumstances that would break more externally dependent types.",
    },
    {
      title: "Knowledge Synthesis",
      description: "You don't just accumulate information — you integrate it. You build mental models that connect disparate fields, seeing how a principle from physics applies to organizational design, or how a historical pattern predicts a market shift. This cross-domain synthesis is the engine behind most breakthrough thinking, and it's your natural mode of operation.",
    },
  ],

  growthEdges: [
    {
      title: "The Scarcity Illusion",
      teaser: "You live as though your energy, time, and emotional resources are critically limited — rationing involvement as if one more commitment might bankrupt you. But the scarcity is more constructed than real, and the hoarding keeps you poorer than the spending ever would.",
      fullExplanation: "The Five's core pattern is avarice — not for money (though it can manifest there), but for energy, time, knowledge, and personal resources. You hoard these the way a survivalist hoards canned goods: with the deep conviction that supplies are limited and winter is always coming. Every social engagement costs energy. Every emotional demand costs bandwidth. Every interruption costs focus. And none of these expenditures feel replenishable.\n\nThis economy shapes your entire life. You minimize needs so you have less to provide. You reduce social obligations so you have less to spend. You build vast internal reserves of knowledge and capability as insurance against a world that might demand more than you have. The fortress is stocked. The drawbridge is up. You're prepared for anything — except actually living.\n\nThe breakthrough comes when you test the scarcity assumption empirically. Start small: say yes to one social invitation you'd normally decline. Stay at the party thirty minutes longer than comfortable. Share an insight you've been hoarding. You'll discover something your survival system doesn't want you to know: engagement is often energizing rather than depleting. Connection replenishes rather than drains. The energy economy you've been managing so carefully has more income than you thought — you just never let yourself find out because you were too busy conserving.",
    },
    {
      title: "The Knowing-Living Gap",
      teaser: "You can explain a sunset in terms of atmospheric optics and still never actually watch one. The gap between understanding something and experiencing it is where your life goes unlived.",
      fullExplanation: "Fives substitute knowing for doing with a consistency that would be impressive if it weren't so costly. You research restaurants instead of trying them. You read about relationships instead of having them. You master the theory of a skill and then skip the messy, inefficient process of actually developing it. The map becomes more interesting than the territory — and more importantly, safer. Maps don't bite back.\n\nThis pattern is your defense mechanism operating at full capacity. Understanding something gives you a sense of mastery and control. Doing something exposes you to incompetence, surprise, and the demands of other people. Your psyche has calculated that the risks of engagement outweigh the costs of withdrawal, and it's been running that equation since childhood.\n\nThe growth move isn't to stop thinking — that would be absurd and counterproductive. It's to recognize the moment when further preparation becomes avoidance. You'll never feel ready enough, because 'ready enough' is a moving target your fear keeps adjusting. The question isn't 'Do I know enough to do this?' — you almost always do. The question is 'Am I willing to be awkward, inefficient, and visible while I learn the parts that can only be learned by doing?'",
    },
    {
      title: "Emotional Minimization",
      teaser: "You treat emotions like unreliable data — interesting to observe from a distance, but not to be trusted with important decisions. This keeps you safe and spectacularly disconnected from yourself and others.",
      fullExplanation: "Your relationship with feelings isn't suppression — it's more like deferral. You register that an emotion has occurred, file it for later processing, and return to whatever you were thinking about. The processing rarely happens, because there's always something more interesting to think about. Over time, this creates a backlog of unfelt experience that manifests as a vague sense of detachment from your own life.\n\nThe mechanism is understandable. Emotions are messy, unpredictable, and they demand response. They pull you out of your head and into your body — which, for a Five, feels like being pulled out of your home and into the street. They also connect you to other people in ways that feel involuntary and therefore threatening. If you feel love, you need someone. If you feel grief, you've lost something that mattered. If you feel anger, you have to engage with the thing that provoked it. Each feeling is an invitation to participate more fully in life, and participation is exactly what your defense system is designed to minimize.\n\nThe practice isn't to become emotional — it's to stop treating feelings as less valid than thoughts. When you notice an emotion, stay with it for thirty seconds before analyzing it. Let it register in your body before your mind converts it into a concept. You'll find that feelings carry a different kind of information than thoughts — information about what matters to you, what you need, and who you are in ways that no amount of thinking can access.",
    },
  ],

  relationshipStyle: "The Quiet Anchor",
  relationshipPreview: "You bring depth, loyalty, and a quality of presence that's remarkably rare. Your partner won't get constant verbal affirmation, but they'll get something harder to find: someone who actually sees them, thinks deeply about the relationship, and shows up with quiet consistency. The people who love you describe a bond that's understated and profoundly real.",
  relationshipDeepDive: `Your relationship pattern has a characteristic tension: you want connection but you need space, and these two needs feel fundamentally opposed. In the early phase, you're intrigued — another person is a fascinating system to understand, and the novelty of mutual discovery is energizing. You share more than usual, stay engaged longer than usual, and your partner gets a version of you that's unusually open and present.

Then the relationship deepens, and with depth comes demand. Your partner wants more time, more access, more emotional sharing. These requests aren't unreasonable, but they land on your nervous system like invoices — each one a withdrawal from an account you're already anxious about. You begin to ration: withdrawing into your head during conversations, needing longer stretches of solitude to recover, compartmentalizing the relationship into designated time slots so it doesn't bleed into your inner sanctum.

The breakthrough comes when you discover that intimacy isn't a drain on your resources — it's a different kind of resource entirely. The Fives who build lasting partnerships learn to stay present even when their withdrawal instinct fires, to share a feeling before it's fully analyzed, and to let their partner past the drawbridge not as a concession but as an experiment in trust. Most find that the vulnerability they feared actually generates energy rather than consuming it — that being known, really known, fills a need they didn't know they had because they'd been too busy fortifying against it.`,

  careerHeadline: "You thrive in roles that reward deep expertise, independent thinking, and mastery of complex systems.",
  careerDirections: [
    "Research and academia — environments that value depth over breadth",
    "Technology and engineering — building, analyzing, and optimizing complex systems",
    "Strategy and analysis — roles where thinking is the primary deliverable",
    "Writing and specialized journalism — translating complex subjects for others",
    "Technical consulting — bringing deep expertise to specific problems",
  ],
  careerDeepDive: `Your career superpower is depth. In a world that rewards generalists and fast talkers, you're the person who actually understands how things work. This makes you invaluable in any field where expertise matters — and increasingly irrelevant in fields where perception matters more than substance. The key career question for a Five isn't "Do I know enough?" — you almost always do. It's "Am I willing to be visible enough for my knowledge to have impact?"

The most common Five career trap is becoming the brilliant person nobody knows about. You build extraordinary competence in a niche that fascinates you, but you never learn to communicate that competence in ways that create opportunity. You wait to be discovered rather than promoting yourself, because self-promotion feels distasteful and draining. Meanwhile, less knowledgeable but more visible colleagues advance past you, and your resentment grows quietly.

The Fives who build genuinely fulfilling careers learn two uncomfortable skills: sharing work before it feels complete, and making their expertise visible without waiting for permission. This doesn't mean becoming a self-promoter. It means recognizing that knowledge locked in your head helps no one, and that the world needs what you know — but it won't come looking for it behind your fortress walls. The best Five careers combine deep mastery with enough engagement to create real impact.`,

  emotionalPattern: `Your emotional life exists — more richly than most people realize, including you. The common misconception is that Fives don't feel. The truth is that you feel deeply but at a delay and at a distance. An event that triggers immediate emotion in others may take you hours or days to process. You'll be analyzing the situation in real time, and the feeling about it will arrive later — sometimes much later — when you're alone and the experience has been fully digested by your mind.

This delayed emotional processing creates a peculiar experience: you often feel out of sync with the people around you. At a funeral, you're calm and observant while others weep. Three days later, alone in your kitchen, the grief hits you like a wall. In a conflict, you're measured and logical while others are flooded. That night, the anger you didn't feel in the moment arrives fully formed. This isn't dysfunction. It's your system processing at its own pace. But it looks like detachment to others and sometimes feels like detachment to you.

Your core emotional pattern — avarice — manifests as a deep reluctance to give of yourself. Not material things necessarily, but your time, your energy, your attention, your inner life. Each of these feels precious and limited. Sharing them feels like a cost. This creates a life that's protected but thin — rich in inner activity and poor in lived experience. The growth direction isn't to stop conserving. It's to discover that some expenditures return more than they cost.`,

  stressTriggers: [
    "Unexpected demands on your time, energy, or emotional resources — especially from people who assume availability",
    "Situations requiring immediate action without adequate preparation or understanding",
    "Environments with no privacy, constant social stimulation, or inescapable small talk",
  ],
  flowTriggers: [
    "A complex problem that yields to sustained, uninterrupted analysis",
    "Mastering a new domain — the moment when scattered information clicks into a coherent framework",
    "Deep conversation with someone who matches your intellectual depth and doesn't require emotional performance",
    "Solitude with a rich project and no time pressure",
  ],

  toolkit: [
    {
      title: "The Engagement Experiment",
      context: "When your withdrawal instinct fires — the urge to retreat, to conserve, to avoid the social obligation — you're in the Five's default pattern. This pattern keeps you safe and keeps you isolated.",
      action: "Once a week, say yes to one thing you'd normally decline — a dinner, a phone call, a collaboration. Treat it as a data-gathering exercise: track your energy before and after. You'll find that many engagements you avoid actually return more energy than they cost. Your scarcity model is running on assumptions, not evidence.",
    },
    {
      title: "The Body Check",
      context: "Fives live almost entirely in their heads. Your body is transport for your brain. But your body carries emotional information your mind can't access — and ignoring it keeps you disconnected from yourself.",
      action: "Three times a day, close your eyes and scan your body for 60 seconds. Where is there tension? Warmth? Hollowness? Don't analyze or fix — just notice. Over time, this builds a channel between your physical and intellectual experience, giving your emotions a way to reach your awareness before they've been fully abstracted into concepts.",
    },
    {
      title: "Share Before It's Perfect",
      context: "Your instinct is to refine, polish, and complete your thinking before sharing it. By the time it's ready by your standards, the moment has often passed — or you've decided it wasn't worth sharing after all.",
      action: "Once a day, share an idea, observation, or feeling before it's fully formed. Send the half-written message. Voice the incomplete thought. Offer the rough draft. Notice that imperfect sharing often creates more connection and collaboration than the polished version you'd have delivered three days later — or not at all.",
    },
    {
      title: "The Participation Minimum",
      context: "You default to observation — watching, analyzing, understanding from the sidelines. This protects you from the vulnerability of engagement but keeps your understanding theoretical.",
      action: "In your next meeting, conversation, or social gathering, set a minimum participation threshold: contribute at least three times. Not brilliant insights — just participation. A question. An agreement. A reaction. Lower the bar from 'worth saying' to 'present and involved.' The goal is to weaken the link between participation and performance anxiety.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Withdrawal Deepens", description: "You retreat further into your mind, cutting off social engagement and minimizing all but essential interactions. The fortress walls go up. You need more solitude, more control over your environment, fewer surprises." },
      { stage: 2, label: "Detachment Intensifies", description: "You become increasingly disconnected from your own needs and feelings. The world feels overwhelming and you reduce your life to the bare minimum — fewer people, fewer commitments, fewer things that can demand something from you." },
      { stage: 3, label: "Movement to Seven", description: "Under prolonged stress, you take on Type 7 patterns: scattered, restless mental activity — jumping between topics, consuming information compulsively, seeking stimulation to escape the claustrophobia of your own withdrawal. The focused thinker becomes a frantic browser." },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 8 — moving from thinking into action, from observing into engaging, from hoarding resources to spending them with decisive confidence.",
    flowTriggers: [
      "Uninterrupted deep work on a complex problem",
      "A new domain opening up for exploration",
      "Intellectually matched conversation",
      "Quiet solitude with a rich, self-directed project",
    ],
    flowDescription: "You enter flow when your mind is fully absorbed in understanding something complex — when the boundary between you and the problem dissolves and your analytical capacity operates at full power without the usual overhead of self-monitoring.",
  },

  careerAlignment: {
    naturalFits: [
      "Research, academia, and specialized technical roles",
      "Software architecture and systems engineering",
      "Strategic analysis and complex problem-solving",
      "Writing, journalism, and knowledge translation",
    ],
    likelyDrains: [
      "High-touch client management with constant relational demands",
      "Open-plan offices with no private space and perpetual interruption",
      "Roles requiring extensive self-promotion, networking, or emotional labor",
    ],
    careerWarning: "Watch for the expertise trap: becoming so specialized that your knowledge has no outlet. Mastery that never reaches the world is a very sophisticated form of hiding.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 8 — the Challenger. This means converting knowledge into action, observation into engagement, and self-protection into the willingness to take up space, make demands, and be a force in the world rather than a witness to it.",
    areas: [
      { title: "From Thinking to Doing", description: "Your natural mode is to understand completely before acting. Growth means learning to act on sufficient knowledge rather than complete knowledge — trusting that the remaining questions can only be answered through engagement, not more analysis." },
      { title: "From Conservation to Expenditure", description: "You hoard energy, time, and self as though they're non-renewable. Growth means discovering that spending your resources — sharing knowledge, investing in relationships, committing to action — actually generates more capacity than it consumes." },
      { title: "From Observation to Presence", description: "Releasing the observer position doesn't make you less perceptive. It makes your perception consequential — something that changes the world rather than merely cataloging it." },
    ],
  },

  heroImage: buildHeroImagePath(5),
  sectionImages: buildSectionImages(5),
};
