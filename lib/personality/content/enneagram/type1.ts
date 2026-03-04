import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_1: EnneagramTypeContent = {
  typeNumber: 1,
  name: "The Reformer",
  shortName: "Reformer",
  tagline: "Holds the world to the standard it refuses to hold itself",
  color: "#315E36",
  center: "body",

  coreFear: "Being corrupt, evil, or defective — fundamentally flawed in a way that makes you morally unacceptable",
  coreDesire: "To be good, to have integrity, to be balanced — to know that you are doing what is right and that your existence improves the world around you",
  coreMotivation: "To be right, to strive higher and improve everything, to be consistent with your ideals, to justify yourself, to be beyond criticism so that you will not be condemned by anyone",
  defensePattern: "Reaction formation — converting unacceptable impulses into their opposite. The anger you won't admit becomes righteous correction. The desire you can't accept becomes rigid self-denial. You don't just suppress what's 'wrong' inside you; you perform the opposite as proof it isn't there.",

  overview: `You walk through the world with a blueprint in your head for how things should be. Not a vague preference — a precise internal standard for everything from how a conversation should go to how a government should run. Most people don't have this. They see a crooked picture and walk past it. You see a crooked picture and your hand is already reaching to straighten it before you've made a conscious decision. This isn't a choice you make. It's a perceptual system that registers deviation from the ideal as a kind of physical pressure.

This means you notice what's wrong everywhere. The error in the email. The inconsistency in the argument. The gap between what someone says and what they do. Your inner critic runs a constant audit — not just of the world, but of yourself. In fact, the harshest version of this voice is directed inward. Other people get your measured correction. You get the full unfiltered tribunal: you should have done better, you should have known, you should be further along than this.

The engine under all of this is anger — specifically, the anger that the world doesn't match the way it should be. But Ones rarely experience this as anger. You experience it as frustration, irritation, righteous indignation, tension in your jaw, tightness in your shoulders. The anger is there, but it's been reclassified. Calling it anger would mean admitting you're not as controlled as you need to be, and that admission threatens the entire structure.

The most developed Ones learn to hold their standards without being held hostage by them. They discover that integrity doesn't require perfection — that being good enough is not a moral failure but an act of wisdom. They learn to direct the reforming impulse outward in service of genuine improvement while releasing the inner critic's impossible demands. The result is a person of extraordinary principle, fairness, and moral clarity who has made peace with being human.`,

  descriptionInsight: "Your relentless inner critic isn't a character flaw — it's a misapplied integrity engine. The same system that makes you notice every error also gives you the capacity for extraordinary moral clarity, fairness, and principled action. The work is learning to aim it wisely rather than letting it aim at everything.",

  strengths: [
    {
      title: "Principled Integrity",
      description: "You don't adjust your values to fit the situation. Where others bend under social pressure, you hold the line — not because you're stubborn, but because your sense of right and wrong is structural, not performative. People trust you with the hard decisions because they know you'll make the fair call even when it costs you.",
      deepDive: "Your integrity operates as a kind of internal constitution. You've developed, over a lifetime of moral reasoning, a detailed framework for what's right, what's fair, what's acceptable. This framework isn't theoretical — it's felt. A violation of fairness doesn't just register as an intellectual objection; it registers as a physical wrongness, like a dissonant chord. This is why you can't let things slide that others brush off. It's not that you're rigid. It's that your nervous system processes ethical violations as a form of disorder that demands correction. The gift of this is real moral authority. When you take a stand, people listen — not because you're loud, but because they know you've already held yourself to the same standard you're applying to them.",
    },
    {
      title: "Disciplined Follow-Through",
      description: "You finish what you start. Not because it's easy, but because leaving something incomplete feels like a broken promise. Your capacity for sustained, organized effort makes you the person teams rely on when the work needs to actually get done — thoroughly, correctly, and on time.",
      deepDive: "Your discipline isn't willpower in the way most people understand it — white-knuckling through tasks you'd rather avoid. It's more like a structural commitment. Once you've decided something matters, your entire system organizes around completing it. Procrastination feels physically uncomfortable. Half-measures feel morally compromising. This creates an extraordinary capacity for sustained, high-quality output. But it also means you can't easily abandon a project even when circumstances have changed, because quitting activates the inner critic. The growth edge here is learning to distinguish between disciplined persistence and stubborn attachment — knowing when holding the line is integrity and when it's rigidity.",
    },
    {
      title: "Quality Standards",
      description: "You see the difference between good enough and genuinely good. In a world that increasingly optimizes for speed over quality, you're the person who catches the error everyone else missed, who insists on the revision that transforms adequate work into excellent work. Your standards elevate everything you touch.",
      deepDive: "Your quality perception is granular in a way that most people can't replicate. Where others see a finished product, you see seventeen things that could be better. This isn't negativity — it's resolution. You're looking at the same image as everyone else, but at a higher pixel count. The mistake most people make with Ones is assuming this critical eye is about control. It's not. It's about care. You notice the details because you believe things deserve to be done well. The memo deserves clear prose. The plan deserves rigorous logic. The meal deserves proper seasoning. This isn't obsession. It's a form of respect for the work itself.",
    },
    {
      title: "Fairness and Objectivity",
      description: "You have a rare ability to step outside personal preference and evaluate situations on principle. When conflicts arise, you're the person who can articulate what's actually fair — not what benefits you, not what's politically convenient, but what's right. This makes you a natural arbiter and a trusted voice in any group.",
    },
    {
      title: "Responsible Improvement",
      description: "You don't just see what's wrong — you work to make it better. Where others complain, you organize. Where others accept dysfunction, you build systems. Your reforming impulse, when directed constructively, is one of the most powerful forces for genuine positive change in any organization, community, or relationship.",
    },
  ],

  growthEdges: [
    {
      title: "The Inner Critic",
      teaser: "You carry a voice inside that evaluates everything you do against an impossible standard. It masquerades as conscience, but it operates more like a hanging judge — one who never acquits, only defers sentencing.",
      fullExplanation: "The inner critic is the defining feature of Type One psychology, and it's crucial to understand what it actually is. It's not your conscience. Your conscience tells you the difference between right and wrong. The inner critic tells you the difference between perfect and everything else — and finds everything else guilty.\n\nThe mechanism works like this: you internalized, very early, the message that you must be good to be acceptable. Not good enough — good. This created an internal monitoring system that runs constantly, scanning your thoughts, impulses, and actions for anything that doesn't meet the standard. The standard, of course, is impossible. No human being can sustain the level of moral perfection the inner critic demands. Which means the critic always has material.\n\nThe breakthrough isn't silencing the critic — it's recognizing that the critic isn't you. It's a part of your psychological architecture, not your identity. When you can observe the critic rather than obeying it, something shifts. You can hear 'you should have handled that better' without spiraling into self-punishment. You can notice the impulse to correct someone without assuming the impulse is righteous. The voice is still there. But it's been demoted from judge to advisor — one whose opinion you can consider and sometimes overrule.",
    },
    {
      title: "Resentment and Suppressed Anger",
      teaser: "You hold yourself to standards that most people don't even notice, then feel a slow-building resentment when others don't hold themselves to those same standards. The anger is real, but you've renamed it — and what you won't name, you can't release.",
      fullExplanation: "Anger is the core emotion of the body center, and for Ones it's the most heavily managed. You've learned that anger is dangerous — it's irrational, it's destructive, it's wrong. So you control it. You convert it into measured criticism, tightened jaw muscles, clipped sentences, and a general aura of tension that everyone around you can feel but you yourself might deny.\n\nThe resentment pattern works like this: you do the right thing, consistently, at personal cost. You show up on time. You do thorough work. You follow through on commitments. You hold yourself to a standard. Then you look around and see that others don't. They cut corners. They show up late. They do the minimum. And something inside you curdles — not into rage, but into a slow, righteous burn. 'I do all this, and they can't even bother to...'\n\nThis resentment is actually mislabeled anger at the fundamental unfairness of holding yourself to a standard that the world doesn't share. The growth move is twofold: first, to name the anger as anger rather than dressing it up as disappointment or frustration. Second, to recognize that your standards are your choice, not a universal contract. Other people didn't agree to your terms. Releasing resentment doesn't mean lowering your standards. It means stopping the expectation that others will match them.",
    },
    {
      title: "The Perfection Trap",
      teaser: "You believe, at a structural level, that if you could just get everything right — yourself, your work, your environment — some fundamental tension would release. It won't. Perfection is a horizon. You can walk toward it forever and never arrive.",
      fullExplanation: "Perfectionism in a One isn't about wanting things to be nice. It's about a deep, body-level conviction that the gap between how things are and how they should be is a moral problem that you are personally responsible for closing. Every imperfection is a small failure. Every error is evidence that you didn't try hard enough. Every shortcut feels like a compromise of character.\n\nThis creates a particular form of suffering: you can't enjoy your accomplishments because you're already cataloging what could have been better. You finished the project, but it could have been more thorough. You had a good conversation, but you said that one thing you shouldn't have. The inner audit never closes its books.\n\nThe growth move is radical for a One: learning that imperfection is not a moral failure. That 'good enough' is not a compromise but a mature recognition of human limits. That the energy you spend perfecting the last 5% of everything could be redirected toward things that actually matter. This doesn't mean lowering your standards. It means deploying them strategically rather than uniformly — knowing when excellence serves the goal and when it's just the critic demanding its due.",
    },
  ],

  relationshipStyle: "The Principled Partner",
  relationshipPreview: "You bring reliability, integrity, and a deep commitment to fairness to your relationships. The people who love you know exactly where they stand — you're consistent, you follow through, and you hold the relationship to a standard that ensures it keeps growing rather than coasting.",
  relationshipDeepDive: `Your relationship pattern centers on improvement — both mutual and individual. You love by helping people become their best selves, which can feel profoundly supportive or deeply critical depending on how it's delivered. The line between "I see your potential" and "you're not good enough" is thin, and your partner's experience of which one they're hearing doesn't always match your intention.

The core tension in your relationships is between your need for things to be right and your partner's need to be accepted as they are. You notice every flaw — the unwashed dish, the broken promise, the sloppy argument — and each one activates your correction impulse. What feels like caring to you can feel like constant evaluation to them. The unspoken message they receive isn't always "I love you enough to help you improve." Sometimes it's "you're never quite enough."

The breakthrough comes when you learn to separate your standards from your love. Your partner's imperfections are not problems to solve. They're the texture of a real human being. The most transformative thing you can do in a relationship is offer acceptance that doesn't come with a revision request attached — to look at the person you love, see exactly who they are right now, and let that be enough.`,

  careerHeadline: "You thrive in roles that reward precision, integrity, and systematic improvement.",
  careerDirections: [
    "Quality assurance and systems improvement — auditing, compliance, process optimization",
    "Law and policy — especially roles that serve justice and institutional fairness",
    "Education and training — building curriculum and developing others methodically",
    "Scientific and technical research — fields that reward rigor and accuracy",
    "Nonprofit leadership and advocacy — channeling the reform impulse toward structural change",
  ],
  careerDeepDive: `Your career strength is the ability to see what needs to be fixed and then actually fix it — methodically, thoroughly, and with a level of quality that others can't match. You're the person organizations call when something needs to be done right, when the standard matters, when cutting corners isn't an option. This makes you invaluable in any role that rewards precision and follow-through.

Your career challenge is the same thing that makes you valuable: the inability to let things be imperfect. You can spend hours polishing a document that was already good. You can get stuck in revision cycles that burn time and energy without proportional returns. You can also struggle with delegation — not because you distrust others' intentions, but because you distrust their standards.

The Ones who build the most fulfilling careers learn to aim their perfectionism strategically. Not everything deserves your finest work. Some emails can be sent without a third proofread. Some projects can ship at 90%. The wisdom isn't in lowering your standards — it's in knowing which battles deserve your full reforming energy and which ones deserve a shrug.`,

  emotionalPattern: `Your emotional life is dominated by a tension you may not even recognize as emotional: the gap between how things are and how they should be. This gap generates a constant low-grade activation — frustration, irritation, tension — that lives in your body more than your mind. You might not call it feeling. You might call it being aware of what needs to be done. But it's feeling, and it's there all the time.

The emotion you're least comfortable with is anger — which is ironic, because anger is your center's core emotion. You've developed elaborate systems for managing it: converting it into measured critique, channeling it into productive reform, or simply denying it exists. "I'm not angry, I'm frustrated." "I'm not angry, I'm disappointed." The relabeling is so automatic you may genuinely not know you're angry until someone points out that your jaw has been clenched for an hour.

Your emotional growth path runs through permission — permission to feel what you actually feel without immediately evaluating whether the feeling is justified. Anger doesn't need to be righteous to be valid. Desire doesn't need to be productive to be real. Joy doesn't need to be earned to be allowed. The inner critic applies moral judgment to your emotional life the same way it applies it to everything else. Learning to feel without judging the feeling is the most subversive thing a One can do.`,

  stressTriggers: [
    "Environments where standards are ignored and mediocrity is tolerated or rewarded",
    "Being criticized as too rigid, controlling, or judgmental — especially when you're trying to help",
    "Situations where you can't fix what's clearly broken, where your hands are tied while things deteriorate",
  ],
  flowTriggers: [
    "Systematic work where your attention to detail produces measurably excellent results",
    "Collaborative environments where people share your commitment to doing things well",
    "Teaching or mentoring where you can channel your standards into someone's genuine development",
    "Physical activity that releases the body tension your emotional suppression creates",
  ],

  toolkit: [
    {
      title: "The Good Enough Practice",
      context: "When you catch yourself in a revision spiral — editing the email for the fifth time, reorganizing the already-organized shelf, redoing work that was already solid — you're in the perfection trap. The inner critic is demanding proof that you tried hard enough.",
      action: "Set a specific 'done' threshold before you start any task. Write it down. When you reach it, stop — even if the critic says it could be better. The discomfort you feel is not evidence of inadequacy. It's the feeling of a muscle learning to relax.",
    },
    {
      title: "The Anger Inventory",
      context: "You've built a lifetime of systems for not feeling angry. But the anger is still there — it just shows up as tension, resentment, and the quiet conviction that you're surrounded by people who don't care enough. Naming it is the first step to releasing it.",
      action: "Once a day, complete this sentence: 'I'm angry about ___.' Not frustrated. Not disappointed. Angry. Don't justify it. Don't fix it. Just name it. Over time, this simple practice reconnects you with the emotion your system has spent years relabeling.",
    },
    {
      title: "The Permission Slip",
      context: "Your inner critic has a list of things you're not allowed to want, feel, or do because they don't meet the standard. Fun that isn't productive. Rest that isn't earned. Pleasure that isn't justified. This list is longer than you think.",
      action: "Once a week, do something purely for enjoyment that has no productive purpose. Not exercise that 'counts' as self-improvement. Not reading that 'counts' as education. Something useless and delightful. Notice the critic's objections without obeying them.",
    },
    {
      title: "The Acceptance Pause",
      context: "Your correction impulse fires before your conscious mind gets involved. You see the error, you fix the error, and you're three sentences into feedback before you've asked yourself whether this moment actually needs correction.",
      action: "Before correcting anyone or anything, pause for five seconds and ask: 'Is this a real problem, or is it just not how I would do it?' If it's the latter, let it go. Not everything that's different from your way is wrong. This pause is the space where tolerance grows.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Intensified Criticism", description: "Your inner critic sharpens and broadens its scope. Standards tighten. You become more rigid, more corrective, more certain that the problem is everyone else's lack of effort or care." },
      { stage: 2, label: "Resentment Buildup", description: "The gap between your effort and others' effort feels increasingly intolerable. You oscillate between martyred silence and sharp, cutting correction. Body tension escalates — headaches, jaw pain, insomnia." },
      { stage: 3, label: "Movement to Four", description: "Under prolonged stress, you take on Type 4 patterns: becoming moody, emotionally volatile, and fixated on what's wrong with you rather than what's wrong with the world. The critic turns entirely inward, and melancholy replaces righteousness." },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 7 — releasing the grip of perfectionism and allowing spontaneity, pleasure, and lightheartedness back into your life without requiring them to be productive or earned.",
    flowTriggers: [
      "Systematic work that produces excellent results",
      "Environments with shared high standards",
      "Physical activity that discharges body tension",
      "Teaching or mentoring with genuine impact",
    ],
    flowDescription: "You enter flow when the task fully absorbs your attention and your high standards serve the work rather than punish it — when precision becomes a form of play rather than a form of penance.",
  },

  careerAlignment: {
    naturalFits: [
      "Quality-driven roles where high standards are the actual job description",
      "Law, policy, and compliance — institutional fairness and structure",
      "Education, training, and curriculum development",
      "Research and analysis requiring rigor and accuracy",
    ],
    likelyDrains: [
      "Chaotic environments with no standards, accountability, or follow-through",
      "Roles requiring constant improvisation with no chance to prepare properly",
      "Positions where ethics are regularly compromised for convenience or profit",
    ],
    careerWarning: "Watch for the bottleneck trap: your refusal to delegate or ship imperfect work can make you the constraint that slows everything down. Your standards are an asset — until they become a blockade.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 7 — the Enthusiast. This means learning to release the relentless grip of self-improvement and allowing joy, spontaneity, and imperfection into your life without treating them as moral failures.",
    areas: [
      { title: "From Rigidity to Flexibility", description: "Your natural mode is to tighten: tighter standards, tighter control, tighter self-monitoring. Growth means learning to loosen — to recognize that flexibility is not the same as compromise, and that adapting doesn't mean abandoning your principles." },
      { title: "From Criticism to Acceptance", description: "Shifting your default from 'what's wrong here' to 'what's working here' doesn't lower your standards — it gives them a foundation of appreciation. You can still improve things. But you stop treating the current state as a personal failing." },
      { title: "From Earning to Receiving", description: "Releasing the belief that good things must be earned frees you to experience joy, rest, and pleasure as basic human rights rather than rewards for meeting the standard. You are allowed to enjoy your life. No conditions attached." },
    ],
  },

  heroImage: buildHeroImagePath(1),
  sectionImages: buildSectionImages(1),
};
