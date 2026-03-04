import type { StrengthId, StrengthContent, VirtueContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "humanity";

const LOVE: StrengthContent = {
  id: "love",
  label: "Love",
  virtue: "humanity",
  description: "Valuing and nurturing close relationships.",

  inAction: `Love as a signature strength goes beyond romantic attachment — it's a fundamental orientation toward connection. You experience relationships as central to a meaningful life, not as pleasant add-ons. The people you care about occupy your thoughts naturally; you remember what matters to them, notice when something's off, and feel genuine pleasure in their wellbeing. This isn't sentimentality — it's a deep recognition that we are relational beings, and that investing in bonds is among the most consequential choices we make.

You likely prioritise presence over productivity in ways that others find surprising. You'll rearrange your schedule for a friend in crisis, make time for family rituals that have no "purpose" beyond connection, and experience genuine distress when relationships fray. Your emotional thermostat is calibrated to the quality of your bonds, and you're willing to do the vulnerable work of repair when things break.`,

  atWork: `In professional settings, your love strength manifests as genuine investment in colleagues as people, not just as role-fillers. You remember birthdays, ask about the sick parent, and create psychological safety by showing that you care beyond the task at hand. Teams you're part of tend to have lower turnover and higher trust because people feel seen. Client relationships deepen because you're not performing warmth — you're actually interested in who they are.

The professional risk is boundary confusion. You may over-invest emotionally in workplace relationships, taking on others' distress as your own or struggling to deliver difficult feedback to people you care about. Learning to hold care and accountability simultaneously — loving someone enough to tell them the hard truth — is a key growth edge.`,

  inRelationships: `Your love strength is the engine of your closest relationships. You're the partner who initiates difficult conversations because you'd rather face discomfort than let distance grow. You're the friend who shows up — not just for the celebration, but for the Tuesday evening when someone's struggling. You understand intuitively that love is a verb: it requires attention, repair, and the willingness to be changed by another person.

The shadow side is enmeshment. When love is your primary lens, you may lose yourself in others' needs, struggle with codependency, or feel responsible for partners' emotional states. Healthy love requires the capacity to hold connection and differentiation at once — to be deeply bonded without losing your own centre.`,

  overuseRisk: `When love is overextended, it becomes fusion. You may sacrifice your own needs, boundaries, and identity to maintain connection. You might tolerate mistreatment because leaving feels like a betrayal of the relationship itself. Your sense of worth becomes so tied to being loved that you lose the capacity to be alone with yourself. In extreme form, love overuse looks like people-pleasing, loss of self, and relationships that drain rather than sustain.`,

  underuse: `Without developed love, life becomes transactional. Relationships feel like obligations or networks to maintain rather than sources of meaning. You may have many acquaintances but few people who truly know you. Intimacy feels threatening rather than nourishing. The absence of love as a strength shows up as emotional isolation, difficulty trusting, and a sense that something essential is missing — even when external success is present.`,

  growthStrategies: [
    "Practice 'loving attention' — set a weekly ritual of 15 uninterrupted minutes with each key person in your life, with no agenda beyond presence. Notice what you learn when you're fully there.",
    "Distinguish between love and need. Reflect on whether your care for others flows from genuine regard or from fear of abandonment. The former sustains; the latter exhausts.",
    "Develop the capacity for solitude. Love that can't tolerate being alone becomes clinging. Build a relationship with yourself that doesn't depend on others' presence.",
    "Study repair. The deepest love shows up not in harmony but in the willingness to navigate conflict, apologise genuinely, and rebuild trust after rupture.",
  ],

  toolkit: [
    "Presence Practice: Before important conversations, spend 60 seconds grounding yourself. Put your phone away, make eye contact, and mentally set the intention to receive rather than perform.",
    "Relationship Audit: List your five closest relationships. For each, note when you last had a meaningful connection (not logistics or small talk). Identify one that needs attention.",
    "Vulnerability Stretch: Share something you've been holding back with someone you trust — not to unburden yourself onto them, but to deepen mutual understanding.",
    "Love Letter to Self: Write a letter to yourself from the perspective of someone who loves you unconditionally. Notice what they would say that you rarely tell yourself.",
  ],
};

const KINDNESS: StrengthContent = {
  id: "kindness",
  label: "Kindness",
  virtue: "humanity",
  description: "Doing favours and good deeds for others.",

  inAction: `Kindness as a signature strength is the impulse to act on care — not just to feel it, but to do something about it. When you see someone struggling, your first response isn't "that's too bad" but "what can I do?" You notice practical needs that others overlook: the colleague who missed lunch, the neighbour whose car won't start, the stranger who looks lost. Your default setting is generosity, and you experience genuine satisfaction when your actions ease someone else's burden.

This isn't performative niceness. People with signature kindness have a low threshold for acting on empathy — the gap between "I wish I could help" and "I'm going to help" is short. You're the person who brings the extra coffee, offers the ride, stays late to help someone finish. The doing itself feels meaningful, independent of recognition.`,

  atWork: `Your kindness creates a culture of mutual support in professional settings. You're the colleague who mentors without being asked, shares credit freely, and notices when someone's overwhelmed. You build goodwill that compounds — people remember who helped them when they were struggling. In client-facing roles, your genuine desire to be useful translates into service that feels personal rather than transactional.

The professional risk is overgiving. You may take on others' workloads, say yes when you should protect your capacity, or become the default helper to the point of burnout. Kindness without boundaries becomes self-sacrifice. The growth edge is learning to give from surplus rather than depletion — and to recognise that sometimes the kindest thing is to let others solve their own problems.`,

  inRelationships: `Your kindness shows up as practical love. You're the partner who notices what needs doing and does it — not as a transaction, but as an expression of care. You anticipate needs before they're voiced. You show up with food when someone's sick, take the early shift so your partner can sleep, remember the errand they mentioned in passing. Your relationships are characterised by a sense of being looked after.

The shadow side is that kindness can become your primary mode of connection, crowding out other ways of relating. Partners may feel that you're always in "helper" mode, never fully receiving. Some people experience excessive kindness as pressure — they may feel indebted or that they can't match your generosity. Learning to receive, and to connect without doing, balances this strength.`,

  overuseRisk: `When kindness is overextended, it becomes self-erasure. You may give until you have nothing left, prioritise others' needs to the exclusion of your own, and derive your sense of worth entirely from being useful. Resentment builds beneath the surface because you're giving from obligation rather than genuine desire. Others may take advantage, or you may attract people who need rescuing rather than partnership.`,

  underuse: `Without developed kindness, you remain in the realm of good intentions. You feel sympathy but don't translate it into action. You may tell yourself you're too busy, that others should help themselves, or that your contribution wouldn't matter. The result is a life that's more self-contained but also more isolated — you miss the deep satisfaction of being useful, and others experience you as distant or withholding.`,

  growthStrategies: [
    "Practice 'strategic kindness' — identify one person each week who could use support and take one concrete action. Track whether it's sustainable or depleting.",
    "Notice the difference between giving from surplus and giving from depletion. Learn to say no when you're at capacity so that your yes carries weight.",
    "Expand your kindness beyond your inner circle. Anonymous or low-recognition acts (tipping generously, leaving a positive review, helping a stranger) test whether you're giving for connection or for credit.",
    "Study receiving. The kindest people are often terrible at being helped. Practice accepting support graciously — it completes the cycle of generosity.",
  ],

  toolkit: [
    "Micro-Kindness Log: For one week, note every small act of kindness you perform. Notice patterns: who do you help? What triggers your impulse? Is it balanced or skewed?",
    "The Five-Minute Rule: When you notice someone could use help, ask yourself: is there something I could do in five minutes or less that would matter? If yes, do it immediately.",
    "Boundary Check: Before saying yes to a favour, pause. Ask: am I giving from surplus or depletion? If depletion, practice a gracious no.",
    "Receiving Practice: Identify one area where you typically refuse help. This week, accept support when offered. Notice what it requires of you.",
  ],
};

const SOCIAL_INTELLIGENCE: StrengthContent = {
  id: "social-intelligence",
  label: "Social Intelligence",
  virtue: "humanity",
  description: "Being aware of motives and feelings of others.",

  inAction: `Social intelligence as a signature strength means you read the room without trying. You notice the micro-expressions, the shift in tone, the person who's gone quiet. You understand that what people say is often a fraction of what they mean — and you're attuned to the rest. This isn't manipulation; it's perception. You pick up on group dynamics, unspoken tensions, and the emotional undertow of situations that others navigate blindly.

You likely have a natural sense for what different people need in different contexts. You adapt your communication style without losing authenticity. You know when to push and when to back off, when to offer advice and when to simply listen. Social situations feel legible to you in a way that makes others seem to move in slow motion — you've already processed the subtext before the conversation ends.`,

  atWork: `Your social intelligence makes you effective in any role that involves people. You excel in negotiation because you sense what the other party really wants. You're skilled at conflict resolution because you understand multiple perspectives before they're fully articulated. Leadership, sales, client relations, and team coordination are natural fits — you read the political landscape and navigate it with minimal friction.

The professional risk is over-adaptation. You may become so skilled at reading others that you lose touch with your own preferences. You might prioritise harmony over necessary confrontation, or shape-shift so completely that you're not sure who you are when alone. The growth edge is using your perception to serve your values, not just to avoid discomfort.`,

  inRelationships: `Your social intelligence creates emotional attunement in your closest relationships. You notice when your partner is off before they've said anything. You sense the friend who's struggling beneath the cheerful surface. You know when to give space and when to lean in. Partners often describe you as someone who "gets" them — not because you're a mind-reader, but because you pay attention to what's beneath the words.

The shadow side is that you may become the emotional caretaker by default. Your attunement can lead to absorbing others' moods, anticipating needs to the point of enabling, or losing yourself in reading others at the expense of expressing yourself. Healthy social intelligence includes the capacity to sometimes misread, to ask rather than assume, and to prioritise your own emotional experience.`,

  overuseRisk: `When social intelligence is overextended, it becomes hypervigilance. You may exhaust yourself monitoring everyone's emotional state. You might become so focused on reading others that you lose the capacity for spontaneity — every interaction feels like a calculation. In its darkest form, this strength can enable manipulation: using your perception to influence rather than to connect. The line between attunement and surveillance is thinner than it appears.`,

  underuse: `Without developed social intelligence, you move through social situations with partial information. You miss the cues that would tell you someone's upset, confused, or ready to open up. You may say the wrong thing at the wrong time not from malice but from blindness. Relationships feel harder than they need to be because you're working with only the surface layer of what others communicate.`,

  growthStrategies: [
    "Practice 'perception checks' — when you sense something unspoken, name it tentatively: 'I'm picking up that you might be frustrated — am I reading that right?' This validates your perception while inviting correction.",
    "Develop the capacity for productive misreading. Sometimes the kindest thing is to assume good intent rather than to parse every signal. Not every social situation requires full decoding.",
    "Balance reading others with expressing yourself. Your attunement is a gift; ensure you're also making your own inner experience visible to those who care about you.",
    "Study the limits of your perception. Notice when you've misread someone. Social intelligence improves when you're wrong enough times to develop humility about your interpretations.",
  ],

  toolkit: [
    "Room Read: Before leaving any social gathering, take 30 seconds to mentally note: who seemed engaged? Who withdrew? What was the overall emotional temperature? Compare your read to what you might have missed.",
    "Pause Before Respond: In your next three important conversations, add a two-second pause before responding. Use it to check: what might they need from me right now?",
    "Perception Journal: Note one instance per day where you read someone's emotional state accurately, and one where you might have misread. Track your blind spots.",
    "Express-Then-Read: In a close relationship, practice leading with your own experience before attuning to theirs. 'Here's what I'm feeling — what about you?' Balance receiving with transmitting.",
  ],
};

export const HUMANITY_STRENGTHS: Partial<Record<StrengthId, StrengthContent>> = {
  love: LOVE,
  kindness: KINDNESS,
  "social-intelligence": SOCIAL_INTELLIGENCE,
};

export const HUMANITY_VIRTUE_CONTENT: VirtueContent = {
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
};
