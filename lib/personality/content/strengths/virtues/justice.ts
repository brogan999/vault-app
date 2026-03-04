import type { StrengthId, StrengthContent, VirtueContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "justice";

const TEAMWORK: StrengthContent = {
  id: "teamwork",
  label: "Teamwork",
  virtue: "justice",
  description: "Working well as a member of a group",

  inAction: `People with signature teamwork don't simply tolerate collaboration — they thrive in it. You naturally attune to group dynamics, noticing when someone is holding back, when momentum is building, or when the collective needs to recalibrate. Your sense of identity isn't threatened by shared success; you're genuinely energised when the group wins, not just when you're the one who contributed most visibly. You carry your weight without needing to be seen carrying it, and you're quick to credit others' contributions.

This strength shows up in daily life beyond formal teams — in neighbourhood committees, family decision-making, and casual group projects. You're the person who remembers what everyone agreed to, who follows through on commitments, and who steps in when others drop the ball without making it about them. Your default is to ask "how can we?" rather than "how can I?"`,

  atWork: `In professional settings, your teamwork makes you the glue that holds projects together. You excel in cross-functional roles, matrixed organisations, and any context where success depends on coordination rather than individual heroics. Your colleagues trust you to show up, communicate clearly, and prioritise collective outcomes over personal visibility. You're often the one who ensures that quieter team members get heard and that credit flows where it's due.

The workplace risk is that your willingness to support others can be exploited. You may absorb more than your share of unglamorous work, accept blame for others' mistakes, or defer to louder voices when your perspective would actually be valuable. The growth edge is learning to advocate for your own contributions while maintaining your collaborative spirit — knowing that healthy teams need both harmony and honest dissent.`,

  inRelationships: `Your teamwork orientation shapes relationships as a deep commitment to partnership. You approach romantic relationships, friendships, and family bonds as joint endeavours — you're invested in shared goals, mutual success, and the health of the relationship as a system. You're the partner who suggests "we" solutions to problems, who shares responsibility without scorekeeping, and who feels genuinely satisfied when the other person thrives.

The relational shadow is that your tendency to prioritise the collective can sometimes override your own needs. You may suppress preferences, avoid conflict, or lose your sense of self within the relationship. Partners who value autonomy may also find your collaborative orientation smothering if they need more space to individuate. Learning to balance "we" with "I" — and to recognise when your needs deserve to be foregrounded — is the key to sustainable relational health.`,

  overuseRisk: `When teamwork is overextended, it becomes self-effacement or groupthink. You may lose your identity in the collective, deferring to others even when you have valuable insights. You might become the person who always says yes, who absorbs dysfunction rather than addressing it, and who enables poor behaviour by smoothing over conflict. In extreme form, you may struggle to make decisions alone or feel anxious when not operating within a group.`,

  underuse: `When teamwork goes undeveloped, you default to solo operation even when collaboration would serve everyone better. You may resist group projects, resent shared credit, or feel that working with others slows you down. You might struggle to trust others with important tasks, micromanage team members, or feel threatened when others succeed. Relationships can feel transactional rather than genuinely cooperative.`,

  growthStrategies: [
    "Practise naming your contributions in group settings. After a successful collaboration, write down what you specifically brought — not to boast, but to build accurate self-awareness about your value.",
    "Identify one context where you habitually defer to the group and experiment with offering a dissenting or alternative view. Notice the impact on outcomes and on your sense of agency.",
    "Seek feedback from trusted colleagues on whether you over-accommodate. Ask: 'Do I sometimes sacrifice my own needs or perspective for harmony?'",
    "Build solo projects alongside team work. Develop comfort with independent execution so that teamwork is a choice, not a dependency.",
  ],

  toolkit: [
    "Contribution Inventory: After any group project, list your specific contributions and one thing you could have done differently. Compare with a trusted colleague's perspective.",
    "Boundary Experiment: In your next team context, decline one request that you would normally accept. Notice the outcome and your emotional response.",
    "Solo Sprint: Commit to completing one meaningful project entirely on your own over the next month. Track what you learn about your independent capacity.",
    "Feedback Loop: Ask one team member per week for specific feedback on your collaboration style — what works and what could improve.",
  ],
};

const FAIRNESS: StrengthContent = {
  id: "fairness",
  label: "Fairness",
  virtue: "justice",
  description: "Treating all people equitably and justly",

  inAction: `Fairness as a signature strength means you have a built-in sensitivity to equity. You notice when someone is being overlooked, when rules are applied inconsistently, or when power is being used to advantage some at the expense of others. You're not rigid about rules for their own sake — you care about the underlying principle that people deserve to be treated according to consistent standards. You're willing to speak up when you witness unfairness, even when it doesn't directly affect you.

This manifests in daily life through small acts: splitting resources evenly, giving everyone a chance to speak, refusing to play favourites, and calling out double standards when you see them. You may feel visceral discomfort when someone is treated unjustly, and that discomfort often motivates you to act. Your sense of integrity is tied to whether you've been fair, not just whether you've followed the letter of the law.`,

  atWork: `In professional settings, your fairness makes you a natural advocate for equitable processes. You're the person who ensures hiring and promotion criteria are applied consistently, who flags when certain voices dominate meetings, and who pushes back when decisions seem to favour favourites. You're trusted to make impartial judgments and to hold yourself to the same standards you expect of others. Roles in HR, compliance, mediation, and leadership benefit from this strength.

The workplace risk is that fairness can be weaponised against you. You may be seen as naive ("that's not how the world works"), rigid ("you don't understand politics"), or self-righteous ("you think you're better than everyone"). Organisations with entrenched inequity may marginalise you for speaking up. The growth edge is learning to advocate for fairness strategically — choosing battles, building alliances, and recognising that perfect equity is a direction, not an achievable endpoint.`,

  inRelationships: `Your fairness creates trust in relationships. Partners and friends know you won't play favourites, gossip unfairly, or take sides without hearing everyone out. You're the person who remembers to include the friend who's often overlooked, who splits the bill fairly, and who holds yourself accountable when you've been unfair. People feel safe with you because they know you'll treat them according to who they are, not who has more power or popularity.

The relational challenge is that fairness can feel cold when someone needs preferential treatment. Not every situation calls for equal distribution — sometimes your partner needs you to take their side, or a friend needs you to prioritise them. Rigid fairness can also blind you to historical inequities; treating everyone "the same" can perpetuate disadvantage when some people need more support to reach parity. Learning when equity requires differential treatment is a key relational skill.`,

  overuseRisk: `When fairness is overextended, it becomes moral rigidity or self-righteousness. You may impose your standards on others, judge people harshly for perceived unfairness, or become so focused on process that you lose sight of outcomes. You might struggle in contexts where perfect fairness isn't possible — life often requires imperfect trade-offs. Others may experience you as inflexible, preachy, or unable to tolerate nuance.`,

  underuse: `Without developed fairness, you default to favouritism, inconsistency, or indifference to inequity. You may benefit from unfair systems without questioning them, apply different standards to different people based on convenience, or avoid conflict by staying silent when you witness injustice. Relationships suffer because people can't trust that you'll treat them fairly when it matters.`,

  growthStrategies: [
    "Distinguish between equality and equity. Practise asking: 'Does everyone need the same thing, or do some need more support to reach the same outcome?'",
    "Before judging someone's behaviour as unfair, gather context. Ask what you might not know about their situation, constraints, or intentions.",
    "Identify one area where you've benefited from unfair advantage. Acknowledge it without self-flagellation, and consider one concrete way to redress it.",
    "Develop tolerance for imperfect fairness. Some situations require good-enough solutions rather than ideal ones — practise acting without full certainty.",
  ],

  toolkit: [
    "Fairness Audit: Review one significant decision you made this week. List who was affected and whether you applied consistent criteria. Note any blind spots.",
    "Perspective Swap: When you witness what seems like unfairness, write a one-paragraph account from the perspective of the person you're judging. Notice what shifts.",
    "Advocacy Practice: Identify one small inequity in your environment and take one concrete action to address it within the next week.",
    "Nuance Journal: Write about a situation where fairness was ambiguous. Explore the competing claims without resolving them — sit with the complexity.",
  ],
};

const LEADERSHIP: StrengthContent = {
  id: "leadership",
  label: "Leadership",
  virtue: "justice",
  description: "Organising group activities and seeing them through",

  inAction: `Leadership as a signature strength isn't about charisma or formal authority — it's about the capacity to mobilise people toward shared goals and to persist until the work is done. You naturally step into the organising role: you notice what needs to happen, who can do what, and how to sequence the work. You're comfortable holding the vision while attending to the details that make it real. You don't need to be in charge to lead; you lead by taking responsibility for outcomes.

This shows up in daily life whenever a group needs direction. You're the one who suggests the plan for the trip, who follows up when commitments drift, and who ensures that decisions actually get implemented. You feel a sense of ownership for collective outcomes — if something fails, you ask what you could have done differently rather than deflecting. You're energised by the challenge of aligning diverse people around a common purpose.`,

  atWork: `In professional settings, your leadership makes you the person others look to when clarity is needed. You excel in project management, team coordination, and any role where success depends on orchestrating people and resources. You're trusted to deliver because you've built a track record of following through. You're also the person who develops others — you don't hoard responsibility; you delegate, coach, and create opportunities for others to grow.

The workplace risk is over-responsibility. You may take on too much, struggle to delegate, or burn out because you feel that if you don't do it, it won't get done. You might also be perceived as controlling if your organising impulse isn't tempered with genuine collaboration. The growth edge is learning to lead by enabling others rather than carrying the load yourself — building systems and people who can sustain the work without you.`,

  inRelationships: `Your leadership shapes relationships through a willingness to take initiative. You're the partner who plans the holiday, the friend who organises the reunion, and the family member who ensures that important conversations actually happen. You create structure that allows others to relax — they know that when you're involved, things will get sorted. Your reliability and follow-through build deep trust.

The relational shadow is that your need to organise can feel domineering. Partners who value spontaneity or shared decision-making may experience you as controlling. You might also struggle to receive — to let others lead, to be cared for, to follow rather than direct. The healthiest expression of leadership in relationships is knowing when to step back: when to let your partner plan, when to follow someone else's vision, and when the best leadership is simply being present without fixing anything.`,

  overuseRisk: `When leadership is overextended, it becomes control or martyrdom. You may micromanage others, resist delegating, or feel that no one else can be trusted with important work. You might take on so much responsibility that you resent others for not contributing — while never having clearly invited or enabled their contribution. In relationships, over-leadership can feel like parenting a partner rather than partnering with an equal.`,

  underuse: `When leadership goes undeveloped, you avoid responsibility for collective outcomes. You may wait for others to take initiative, defer decisions indefinitely, or disengage when groups need direction. You might feel relief when someone else steps up, but also a vague sense of missed opportunity. Relationships can suffer because neither partner takes the lead on important shared goals.`,

  growthStrategies: [
    "Practise 'leading from behind' — identify one project where you enable others to lead while you provide support. Notice what you learn about different forms of leadership.",
    "Audit your delegation: list tasks you're currently holding that could be done by others. Transfer at least one with clear expectations and follow-up.",
    "Seek feedback on whether your organising is experienced as helpful or controlling. Ask: 'When I take the lead, do you feel supported or overshadowed?'",
    "Build comfort with shared leadership. In your next group endeavour, explicitly invite others to own specific aspects rather than defaulting to taking charge.",
  ],

  toolkit: [
    "Delegation Experiment: Choose one responsibility you typically hold and transfer it to someone else this week. Document what you learned about your attachment to control.",
    "Follow-Through Audit: List three projects you've led. For each, note what got completed, what didn't, and what you could have done differently to ensure follow-through.",
    "Receiving Practice: For one week, notice when someone offers to take the lead. Say yes at least twice and observe your response — discomfort, relief, or both.",
    "Leadership Inventory: Write down your leadership strengths and one area where you over- or under-use them. Create one specific behaviour change to test.",
  ],
};

export const JUSTICE_STRENGTHS: Partial<Record<StrengthId, StrengthContent>> = {
  teamwork: TEAMWORK,
  fairness: FAIRNESS,
  leadership: LEADERSHIP,
};

export const JUSTICE_VIRTUE_CONTENT: VirtueContent = {
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
};
