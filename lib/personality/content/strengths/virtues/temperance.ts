import type { StrengthId, StrengthContent, VirtueContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "temperance";

const FORGIVENESS: StrengthContent = {
  id: "forgiveness",
  label: "Forgiveness",
  virtue: "temperance",
  description: "Letting go of wrongs and giving second chances.",

  inAction: `Forgiveness as a signature strength is not about excusing harm or pretending it didn't happen — it's the capacity to release the grip of resentment so that you can move forward without carrying the weight of past wrongs. You have a natural tendency to distinguish between the act and the actor, to see that people are more than their worst moments. This doesn't mean you're naive or a pushover; it means you've learned that holding onto anger costs you more than it costs the person who wronged you.

You likely notice that grudges feel exhausting to you in a way they don't to others. Where some people seem to draw energy from righteous indignation, you find it depleting. You may have a history of relationships that recovered from rupture because you were willing to give someone another chance when they showed genuine change. Your default is toward repair rather than rupture, though you're not incapable of drawing hard boundaries when someone demonstrates they won't change.`,

  atWork: `In professional settings, forgiveness makes you the person who can work effectively with colleagues who've made mistakes, who doesn't hold past conflicts against people, and who creates psychological safety by modelling that errors are recoverable. You're valuable in roles requiring collaboration, conflict resolution, and team dynamics — anywhere that benefits from someone who can separate the professional from the personal.

The professional risk is tolerating patterns of harm that warrant consequences. Forgiveness doesn't mean enabling. If someone repeatedly betrays trust, your tendency to give second chances can become a liability. The skill is distinguishing between one-time failures that warrant grace and systemic behaviour that warrants boundaries or escalation.`,

  inRelationships: `Your forgiveness creates space for relationships to heal and deepen. Partners and friends know that a single conflict won't define the relationship — that you're willing to work through hurt rather than weaponise it. This fosters intimacy because people feel safe to make mistakes and repair.

The relational challenge is that forgiveness can sometimes precede the other person's accountability. Premature forgiveness — letting someone off the hook before they've acknowledged harm or changed behaviour — can enable patterns rather than heal them. Your growth edge is learning to forgive on your own timeline while still requiring genuine repair from the other person.`,

  overuseRisk: `When forgiveness is overextended, it becomes enabling or self-abandonment. You may repeatedly excuse behaviour that warrants consequences, confusing grace with the absence of boundaries. The shadow side is forgiving so quickly that the other person never faces the weight of their actions — or forgiving at the cost of your own dignity. You might also attract people who take advantage of your willingness to let things go.`,

  underuse: `Without developed forgiveness, you carry resentment that compounds over time. Small slights become permanent grievances. Relationships that could have been repaired end in rupture. You may find yourself replaying past wrongs in your mind, unable to let go even when the other person has changed or the situation has passed. Life feels heavier than it needs to be.`,

  growthStrategies: [
    "Separate forgiveness from reconciliation. You can release resentment without resuming a relationship. Forgiveness is for you; reconciliation depends on the other person's behaviour.",
    "Practice distinguishing between one-time harm and patterns. Extend grace freely for the former; require evidence of change for the latter before offering another chance.",
    "Notice when you're rehearsing grievances. When you catch yourself replaying a wrong, redirect to what you control: your response, your boundaries, your peace.",
    "Consider the cost of holding on. Write down what resentment is costing you — sleep, peace, relationships, energy. Let that inform your choice to release it.",
  ],

  toolkit: [
    "Empathy Reframe: Write a letter (unsent) from the perspective of the person who wronged you, imagining what might have driven their behaviour. Notice if this softens your grip.",
    "Release Ritual: Choose a symbolic act — writing and burning a letter, a meditation, a conversation with a trusted person — to mark your decision to let go of a specific resentment.",
    `Boundary Check: For any relationship where you've forgiven, list what behaviour would warrant a boundary. Ensure forgiveness doesn't mean "anything goes."`,
    "Gratitude for Growth: Reflect on a past hurt that, in retrospect, taught you something valuable. Practice seeing difficulty as a teacher without minimising the harm.",
  ],
};

const HUMILITY: StrengthContent = {
  id: "humility",
  label: "Humility",
  virtue: "temperance",
  description: "Letting accomplishments speak for themselves.",

  inAction: `Humility as a signature strength is not self-deprecation or false modesty — it's an accurate view of yourself in relation to others and to the larger world. You don't need to broadcast your achievements because your sense of worth isn't contingent on external validation. You're comfortable with the fact that you have strengths and limitations, that you've contributed to good outcomes and that luck and others played a role too. This creates a quiet confidence that doesn't require constant reinforcement.

You likely find self-promotion uncomfortable, not because you lack accomplishments, but because drawing attention to them feels unnecessary. You're more interested in the work itself than in being seen doing it. People who know you well recognise your competence; you don't need to perform it for strangers. You're also genuinely curious about others — you ask questions, listen, and learn from people regardless of their status.`,

  atWork: `In professional settings, humility makes you the colleague who shares credit, admits mistakes, and seeks input from others. You're valued in collaborative environments because you don't compete for visibility or dominate conversations. Leadership roles that require serving the team rather than the spotlight suit you well.

The professional risk is invisibility. In cultures that reward self-promotion, your tendency to let your work speak for itself can mean you're overlooked for opportunities. The skill is learning to advocate for yourself when it matters — for promotions, raises, or recognition — without abandoning your authentic preference for understatement.`,

  inRelationships: `Your humility creates ease in relationships. People feel they can be themselves around you because you're not performing superiority or seeking admiration. You're the partner or friend who remembers details about others, who celebrates their wins without making it about you, and who admits when you're wrong.

The relational challenge is that humility can sometimes mask a fear of being seen. If you deflect compliments or downplay your contributions, partners may feel they can't fully celebrate you. Learning to receive recognition graciously — without needing it, but without rejecting it either — is a growth edge.`,

  overuseRisk: `When humility is overextended, it becomes self-erasure or chronic underestimation. You may downplay your contributions so consistently that others (and you) forget what you've achieved. The shadow side is false humility: deflecting praise in a way that actually draws more attention, or using self-deprecation as a form of fishing for reassurance. You might also avoid opportunities because you don't feel "ready" — humility tipping into imposter syndrome.`,

  underuse: `Without developed humility, you need constant validation and struggle to share credit. Achievements feel hollow unless others acknowledge them. You may dominate conversations, interrupt, or steer topics back to yourself. Relationships suffer because people feel unseen, and you miss the growth that comes from genuinely learning from others.`,

  growthStrategies: [
    `Practice receiving compliments with a simple thank you. No deflecting, no "it was nothing." Gracious acceptance honours both you and the person offering recognition.`,
    "Audit your contributions. List what you've actually achieved in the past year. Humility requires accuracy — neither inflating nor minimising your role.",
    "Seek feedback from people who will be honest. Humility flourishes when you have a realistic picture of your strengths and blind spots.",
    "Notice when you're comparing. Humble people don't need to be better than others; they're secure in their own lane. Redirect comparison toward curiosity about others.",
  ],

  toolkit: [
    "Contribution Inventory: List five significant accomplishments from the past year. For each, note your role, others' roles, and external factors. Practice accurate attribution.",
    `Compliment Practice: For one week, accept every compliment with "Thank you" and nothing more. Notice any discomfort and what it reveals.`,
    "Others-First Conversation: In your next three meaningful conversations, ask two questions before sharing anything about yourself. Track what you learn.",
    "Mistake Acknowledgment: Identify one recent error or limitation. Share it with someone relevant and note their response. Humility includes owning what you don't know.",
  ],
};

const PRUDENCE: StrengthContent = {
  id: "prudence",
  label: "Prudence",
  virtue: "temperance",
  description: "Being careful and not taking undue risks.",

  inAction: `Prudence as a signature strength is the capacity to think ahead, weigh consequences, and choose actions that serve your long-term wellbeing rather than short-term impulses. You have a natural tendency to pause before acting, to consider what could go wrong, and to avoid unnecessary risk. This isn't fear or paralysis — it's strategic thinking that protects you and those around you from avoidable harm.

You likely make fewer impulsive decisions than most people. You read the fine print, consider the downsides, and prefer to have a plan before committing. When others are swept up in excitement about a new opportunity, you're the one asking the questions that reveal hidden risks. Your caution has probably saved you (and others) from consequences that seemed obvious to you but invisible to everyone else.`,

  atWork: `In professional settings, prudence makes you the person who spots risks before they materialise, who plans for contingencies, and who avoids costly mistakes. You're invaluable in roles requiring due diligence, compliance, risk management, and strategic planning. You're the colleague others consult before big decisions.

The professional risk is analysis paralysis or being perceived as a blocker. In fast-moving environments, your tendency to slow down and consider can feel like resistance to progress. The skill is knowing when thoroughness serves the outcome and when it's unnecessary delay — and learning to communicate your concerns in a way that adds value rather than frustrates.`,

  inRelationships: `Your prudence shows up in relationships as thoughtfulness and reliability. You consider how your actions affect others, you don't make promises you can't keep, and you're the partner or friend who remembers the practical details that make life run smoothly. People trust that you've thought things through.

The relational challenge is that prudence can feel like lack of spontaneity. Partners who crave adventure may experience your caution as dampening their enthusiasm. Learning to distinguish between risks worth taking (trying something new together) and risks worth avoiding (financial recklessness, harmful behaviour) helps you show up fully without abandoning your wisdom.`,

  overuseRisk: `When prudence is overextended, it becomes chronic risk-aversion or anxiety. You may avoid opportunities, relationships, or experiences because you can always imagine something going wrong. The shadow side is using caution as a justification for staying small — never committing, never leaping, never fully living. You might also frustrate others who experience your prudence as controlling or pessimistic.`,

  underuse: `Without developed prudence, you act impulsively and are repeatedly surprised by consequences you could have foreseen. You make commitments you can't keep, take risks without weighing them, and leave a trail of avoidable mistakes. Life feels chaotic, and others may not trust you to follow through.`,

  growthStrategies: [
    "Create a risk spectrum. Not all risks are equal. Practice distinguishing between low-stakes decisions (where speed matters) and high-stakes ones (where thoroughness matters).",
    "Set decision deadlines. Prudence can expand to fill available time. Give yourself a limit for analysis, then commit to a choice.",
    "Identify one area where you're under-cautious. Even prudent people have blind spots. Where do you take risks you shouldn't?",
    "Balance prudence with possibility. For every risk you identify, ask: what's the upside if it works? Ensure you're not only seeing downsides.",
  ],

  toolkit: [
    "Pre-Mortem: Before any significant decision, imagine it has failed. List three reasons why. Use these to inform your plan or your choice.",
    "Risk Matrix: For a current decision, plot options on a 2x2 of likelihood (high/low) and impact (high/low). Prioritise managing high-impact, high-likelihood risks.",
    "Speed vs Thoroughness Audit: Review five recent decisions. For each, note whether you moved too fast or too slow. Identify your pattern.",
    "Contingency Plan: For one important commitment, write down a Plan B if things don't work out. Notice how this affects your peace of mind.",
  ],
};

const SELF_REGULATION: StrengthContent = {
  id: "self-regulation-s",
  label: "Self-Regulation",
  virtue: "temperance",
  description: "Regulating feelings and actions with discipline.",

  inAction: `Self-regulation as a signature strength is the capacity to align your behaviour with your values and goals despite competing impulses. You have a natural ability to delay gratification, manage emotional reactions, and maintain consistency in habits that matter. This isn't about being rigid or joyless — it's about having the executive function to choose your response rather than being hijacked by momentary urges.

You likely have routines and systems that support your wellbeing: exercise, sleep, nutrition, or work habits that you maintain even when you don't feel like it. You can resist temptation when it conflicts with your priorities. When emotions run high, you have a pause between stimulus and response that allows you to act intentionally rather than reactively. This creates a sense of agency — you feel that you're in charge of your life rather than at the mercy of your impulses.`,

  atWork: `In professional settings, self-regulation makes you the person who meets deadlines, manages stress without burning out, and maintains composure under pressure. You're reliable because you follow through on commitments and don't let mood dictate performance. Roles requiring consistency, discipline, or emotional labour suit you well.

The professional risk is rigidity or burnout from over-control. If you never allow flexibility or rest, you may become brittle. The skill is knowing when to lean into discipline and when to ease up — self-regulation should serve your wellbeing, not replace it.`,

  inRelationships: `Your self-regulation creates stability in relationships. Partners and friends know you won't lash out in anger, make impulsive decisions that affect them, or disappear when things get hard. You're the person who shows up consistently, manages conflict without escalation, and keeps commitments.

The relational challenge is that self-regulation can sometimes feel like emotional distance. If you're so skilled at managing your reactions that you rarely show raw emotion, partners may wonder if you feel deeply. Learning to be regulated without being closed — to have a pause without losing access to your feelings — is a growth edge.`,

  overuseRisk: `When self-regulation is overextended, it becomes overcontrol or emotional suppression. You may bottle up feelings until they leak out in unproductive ways, or maintain such tight discipline that you lose spontaneity and joy. The shadow side is using self-regulation to avoid vulnerability — staying in control so you never have to feel the discomfort of uncertainty or emotional exposure.`,

  underuse: `Without developed self-regulation, you're at the mercy of impulses. You struggle to follow through on goals, react emotionally in ways you later regret, and find it difficult to maintain healthy habits. Life feels reactive rather than intentional, and relationships suffer from inconsistency and volatility.`,

  growthStrategies: [
    `Build implementation intentions. For habits you want to maintain, create specific "if-then" plans: "If I feel tempted to X, I will Y." Specificity increases follow-through.`,
    "Practice the pause. When you feel an impulsive urge, wait 10 minutes before acting. Often the urge passes or weakens enough for you to choose.",
    "Identify your regulation gaps. Everyone has areas where self-control fails. Know yours — whether it's food, screens, spending, or emotional reactions — and plan accordingly.",
    `Balance control with flexibility. Schedule intentional "off" moments where you allow spontaneity. Self-regulation works best when it's not totalitarian.`,
  ],

  toolkit: [
    "Temptation Bundling: Pair something you want to do (e.g. watch a show) with something you need to do (e.g. exercise). Use the former as reward for the latter.",
    "Emotion Log: For one week, when you feel a strong impulse, write what you felt, what you wanted to do, and what you actually did. Notice patterns.",
    `Habit Stack: Add one desired behaviour to an existing routine. "After I brush my teeth, I will meditate for 2 minutes." Leverage existing triggers.`,
    "Cool-Down Protocol: Design a 5-minute ritual for when you're emotionally activated — deep breathing, a walk, cold water. Practice it so it's automatic when needed.",
  ],
};

export const TEMPERANCE_STRENGTHS: Partial<Record<StrengthId, StrengthContent>> = {
  forgiveness: FORGIVENESS,
  humility: HUMILITY,
  prudence: PRUDENCE,
  "self-regulation-s": SELF_REGULATION,
};

export const TEMPERANCE_VIRTUE_CONTENT: VirtueContent = {
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
};
