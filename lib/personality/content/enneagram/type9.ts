import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_9: EnneagramTypeContent = {
  typeNumber: 9,
  name: "The Peacemaker",
  shortName: "Peacemaker",
  tagline: "Holds the whole room together by forgetting to hold yourself",
  color: "#818D59",
  center: "body",

  coreFear: "Loss of connection, fragmentation, and separation — conflict that tears apart the bonds you've built and leaves you alone in the wreckage",
  coreDesire: "To have inner stability, peace of mind, and wholeness — to maintain the harmony that keeps you and the people you love intact",
  coreMotivation: "To create harmony in your environment, to avoid conflict and tension, to preserve the status quo, to resist being disturbed, to maintain your inner peace and the sense that everything is fundamentally okay",
  defensePattern: "Narcotization — numbing yourself to anything that would disrupt your equilibrium. You merge with others' agendas, lose yourself in routines and comfortable habits, and diffuse your own energy across so many small distractions that the big, uncomfortable questions — what do I want, what am I angry about, what needs to change — never quite come into focus.",

  overview: `You are the person everyone describes as easy to be around. Warm, accepting, able to see every side of an argument, genuinely comfortable with letting others take the lead. People relax in your presence because you carry a quality of unconditional acceptance that's extraordinarily rare. You don't judge. You don't push. You make space. And in a world full of people trying to impose their agenda, your willingness to simply be with someone, without needing them to be different, is a gift most people don't encounter more than once or twice in a lifetime.

What almost no one sees — including, often, you — is the cost of this gift. Your peace isn't free. It's maintained by a systematic forgetting of yourself: your preferences, your anger, your ambitions, your needs. You've become so skilled at merging with others' desires that you've lost reliable access to your own. Ask a Nine what they want for dinner and you'll get a shrug, a deflection, a 'whatever you want is fine.' But that's not flexibility. It's the absence of self at the moment the self is being asked to show up.

This self-forgetting isn't laziness — though it gets misread as that. It's a sophisticated defense against the most threatening experience in your emotional world: conflict that ruptures connection. At some point you learned that asserting yourself — stating a preference, expressing anger, taking up space — risked the relationships you depended on. So you developed an alternative strategy: become so agreeable, so accommodating, so merged with the people around you that conflict has no foothold. If you don't have a position, no one can oppose it. If you don't have needs, no one can refuse them.

The most awake Nines discover something that changes everything: you are not your peace. You are the person underneath it — someone with fierce opinions, surprising desires, real anger, and a clarity of vision that emerges only when you stop prioritizing everyone else's comfort over your own existence. The peace you've been maintaining for others at the expense of yourself was never the point. The point is finding out what happens when you show up — fully, unapologetically, as someone who matters as much as everyone else in the room.`,

  descriptionInsight: "Your ability to see all perspectives isn't just diplomacy — it's a perceptual gift that makes you a natural bridge between people. The challenge is learning to include your own perspective in the picture, because the view that keeps getting left out is yours.",

  strengths: [
    {
      title: "Universal Empathy",
      description: "You have a natural capacity to understand and validate any perspective. Not as a technique — you genuinely see the logic and emotion behind positions you don't share. This makes you the person warring factions trust to mediate, the friend both sides of a breakup confide in, the colleague who can translate between departments that have stopped listening to each other.",
      deepDive: "Your empathy operates through a process called merging — your sense of self becomes temporarily porous, allowing you to step inside another person's experience as if it were your own. This isn't intellectual perspective-taking. It's somatic. You feel the other person's position in your body. This is why you're so reluctant to judge anyone: you've literally been inside their experience, and from the inside, everyone's behavior makes sense.\n\nThe extraordinary gift here is genuine: in a world of increasing polarization, your capacity to hold multiple truths simultaneously is rare and needed. The shadow is that merging can become a way of avoiding having a perspective of your own. If you're always inside someone else's experience, you never have to confront the discomfort of your own views, your own needs, your own potential for conflict. Growth means using your empathy as a bridge to connection rather than a bridge away from yourself.",
    },
    {
      title: "Grounding Presence",
      description: "You carry a quality of steadiness that stabilizes the people and systems around you. In crisis, you don't escalate. In conflict, you don't inflame. You hold the center while others spin around you, providing an anchor point that allows the situation to eventually find its own resolution. This isn't passivity — it's the quiet strength of someone who trusts the process.",
      deepDive: "Your grounding presence is connected to the body center's relationship with physical reality. While other body types express their instinctual energy outward (Eights) or inward (Ones), you diffuse it — spreading your energy evenly across your environment like a thermostat regulating the temperature of a room. People feel this as a physical settling when they're around you. Their nervous systems actually calm.\n\nThis makes you extraordinarily effective in roles that require sustained presence — long-term care, conflict mediation, crisis counseling, any situation where the most important thing someone can do is simply stay. You don't leave. You don't panic. You hold the space. The risk is that this steadiness becomes stagnation: holding the center so reliably that you never move from it, even when movement is exactly what's needed.",
    },
    {
      title: "Natural Synthesis",
      description: "Where most people see either/or, you see both/and. You naturally integrate opposing ideas, find common ground between hostile positions, and create solutions that honor multiple perspectives. This synthesizing ability makes you a born mediator, facilitator, and peacebuilder — someone who can find the thread of connection running through apparent contradictions.",
      deepDive: "Your synthesizing mind works differently from analytical thinking. You don't take positions apart to understand them — you hold them together until a pattern emerges that includes everything. This is holistic intelligence, and it's profoundly undervalued in a culture that rewards decisive, either/or thinking. But it's the kind of intelligence that builds lasting agreements, creates inclusive organizations, and finds solutions that divisive approaches would never discover.\n\nThe challenge is that synthesis can become a way of avoiding the necessary conflict that some situations require. Not every disagreement has a both/and resolution. Sometimes one side is wrong. Sometimes you have to choose. The Nine's growth edge is learning to synthesize when synthesis serves, and to take a clear stand when the situation demands it — even when standing means losing the harmony you've worked so hard to maintain.",
    },
    {
      title: "Patient Endurance",
      description: "You can sustain effort, presence, and commitment over timescales that exhaust other types. Your energy isn't explosive — it's geological. You don't sprint; you outlast. The things you build may take longer to start, but they tend to endure because they were built with the kind of patience that doesn't cut corners or force timelines.",
    },
    {
      title: "Accepting Warmth",
      description: "You offer the rarest form of love: acceptance without conditions. People don't have to earn your regard or perform to keep it. You take them as they are, without needing them to change. This isn't naivety — you see people's flaws clearly. You simply don't make the flaws the point. This quality makes you a sanctuary for people who are exhausted by a world that constantly evaluates them.",
    },
  ],

  growthEdges: [
    {
      title: "The Self-Forgetting Pattern",
      teaser: "You've become so skilled at accommodating others that you've lost contact with what you actually want, think, and feel. This isn't selflessness — it's a systematic erasure of yourself that masquerades as flexibility and easygoingness.",
      fullExplanation: "Self-forgetting is your core pattern, and it's more radical than it sounds. Other types suppress parts of themselves — their anger, their fear, their desire. You suppress your entire self. Not dramatically, not all at once, but through a thousand daily micro-surrenders: going along with someone else's restaurant choice, absorbing your partner's mood as your own, dropping your project to help with theirs, saying 'I don't mind' so often it becomes your catchphrase.\n\nEach individual concession is small. The cumulative effect is enormous. Over years, you build a life that is exquisitely calibrated to everyone else's needs and almost entirely disconnected from your own. You may not even notice what's happened until a crisis forces the question: what do I actually want?\n\nThe mechanism is narcotization — you numb yourself to your own inner signals. Routines, comfort habits, endless small tasks, the soothing scroll of a phone — these are the anesthesia you use to keep the uncomfortable questions at bay. Not because you're lazy or avoidant, but because the alternative — waking up to what you want and acting on it — feels like it would cost you the very connections that hold your world together.\n\nThe breakthrough comes when you realize that the self you've been erasing is the only thing that can make your relationships real. People can't truly love you if you never show them who you are. Accommodation isn't connection. It's the absence of you in a place where you should be present.",
    },
    {
      title: "The Underground Anger",
      teaser: "You're the body center type who has the most conflicted relationship with anger. Other people see you as the person who never gets mad. The truth is more complicated: your anger didn't disappear. It went underground, where it emerges as stubbornness, passive resistance, procrastination, and an immovable inertia that no external force can shift.",
      fullExplanation: "As a body center type, anger is your primary instinctual energy. But unlike Eights, who externalize their anger, or Ones, who internalize and structure it, you simply anesthetize it. The anger doesn't go away — it goes to sleep. Or more accurately, it goes underground, where it expresses itself in ways that are invisible to you but utterly maddening to the people around you.\n\nThe classic Nine anger expression is stubbornness: you agree to something and then simply don't do it. Not through active refusal — that would be conflict. Through passive non-compliance that looks like forgetfulness, distraction, or 'I just didn't get to it.' Your partner asks you to handle something; weeks later it's untouched. Your boss assigns a priority; you complete everything else first. This isn't laziness. It's your anger finding the only channel your system allows.\n\nThe cost of underground anger is enormous. It damages relationships more than expressed anger would, because it can never be addressed directly. Your partner can't argue with 'I forgot.' Your colleagues can't push back against 'I'm working on it.' The passive expression of anger is un-confrontable, which is precisely why your system chose it — and precisely why it's so destructive.\n\nThe growth move is learning to feel and express anger directly. Not as rage — that's overcorrection. As clean, honest communication: 'I don't want to do that.' 'That bothered me.' 'No.' These three sentences contain more transformative power for a Nine than any meditation practice ever could.",
    },
    {
      title: "The Merging Instinct",
      teaser: "You instinctively absorb the priorities, opinions, and energy of the people around you. In close relationships, you can lose track of where you end and the other person begins. What feels like deep connection is often the disappearance of your own identity into someone else's.",
      fullExplanation: "Merging is your relational strategy, and it works beautifully as a tool for empathy and connection. Where it becomes problematic is when it replaces your own identity. In close relationships — romantic partners, family, even close friends — you begin to adopt their preferences, their worldview, their emotional states. You watch what they watch. You care about what they care about. You get angry when they're angry and relaxed when they're relaxed. Your emotional life becomes a mirror of theirs.\n\nThis creates a specific kind of relational distortion: the person you're with experiences deep harmony, but the harmony is built on your absence. You're not agreeing because you share their position. You're agreeing because you've temporarily lost access to your own. And when the relationship ends — or when someone asks you a direct question about your own beliefs — you feel a vertiginous blankness where your opinion should be.\n\nThe merging instinct is also what makes it so hard for you to initiate change. Leaving a relationship, changing careers, ending a friendship — these require a clear sense of what you want that is distinct from what the other person wants. When those boundaries are blurred, every potential change feels like an amputation.\n\nRecovery from merging begins with the smallest possible assertions of separateness: choosing your own meal without asking what others are having. Noticing your own emotional state before scanning the room. Completing a sentence that starts with 'I want' without checking to see if it's acceptable. These aren't small things for a Nine. They're acts of existential courage.",
    },
  ],

  relationshipStyle: "The Harmonizer",
  relationshipPreview: "You bring deep acceptance, patient warmth, and a steadying presence that makes your partners feel safe in a way they rarely experience elsewhere. You listen without judgment, accommodate without complaint, and create a space where the other person feels free to be exactly who they are. The people who love you describe a feeling of being home.",
  relationshipDeepDive: "Your relationship pattern has a distinctive shape. Early on, the merging feels wonderful — you absorb your partner's world, they feel deeply understood, and the lack of conflict feels like proof that the relationship is working. Over time, a subtle imbalance emerges: your partner has a clear sense of who you are together, but you're increasingly unsure of who you are alone. The accommodations you made initially out of genuine care become habits that erase your own preferences.\n\nThe signature conflict pattern in Nine relationships isn't dramatic — it's invisible. You don't fight. You withdraw. Not into another room, but into a kind of interior vacancy where you're physically present but emotionally checked out. Your partner feels the distance but can't point to a cause, because you haven't said anything is wrong. And in your experience, nothing is wrong — you've simply gone to the place where the discomfort can't reach you.\n\nThe transformation happens when you begin treating your own desires as equally valid to your partner's. This feels revolutionary and terrifying. Saying 'I'd rather not' or 'actually, I want something different' can feel like dropping a bomb in a relationship that was built on your compliance. But the relationships that survive this awakening become something far more real than the peaceful surface they replace. Your partner finally gets to meet you — not the accommodating version, but the person with opinions, needs, and a fire that's been burning quietly this entire time.",

  careerHeadline: "You thrive in roles that value collaboration, steady contribution, and the ability to bring people and ideas together.",
  careerDirections: [
    "Mediation and conflict resolution — translating between opposing sides",
    "Counseling and social work — holding space for others' process without rushing them",
    "Human resources, organizational development, and team facilitation",
    "Ecology, conservation, and environmental work — systems that value long-term harmony",
    "Library science, archiving, and curation — creating order that serves everyone",
  ],
  careerDeepDive: "Your career challenge is less about finding the right field and more about finding yourself within whatever field you choose. Nines often drift into careers through circumstance rather than choice — someone offered a job, a path opened, the current carried you somewhere. This isn't necessarily a problem. Your adaptability means you can do well in almost any environment. The question is whether you're doing well because the work genuinely suits you, or because you've merged with the role so completely that the distinction no longer registers.\n\nThe most fulfilled Nines find work that honors their natural gifts — empathy, patience, synthesis, the ability to hold complexity without forcing premature resolution — while also asking them to show up with their own contribution. Roles where you're the facilitator, the mediator, the person who creates the conditions for others to do their best work. The key is that these roles value what you do naturally rather than asking you to be someone you're not.\n\nThe trap is comfort. You can stay in a role for decades past its usefulness because leaving would require asserting a preference, tolerating the disruption of change, and risking the disapproval of people who depend on your presence. The career growth move for Nines is the same as the personal one: wake up to what you actually want, and treat that wanting as valid enough to act on — even when it disrupts the status quo.",

  emotionalPattern: "Your emotional life is characterized by a particular kind of quietness that others misread as simplicity. You're not simple. You're diffused. Your emotions spread out across your inner landscape like water across a flat surface — present everywhere, concentrated nowhere. This makes it genuinely difficult for you to identify what you're feeling at any given moment. Ask a Nine how they feel and you'll often get a pause, then a borrowed answer — 'fine,' 'good,' whatever seems appropriate for the situation.\n\nThe emotion you have the most complicated relationship with is anger. As a body center type, anger is your primary instinctual energy — it's the engine that drives assertion, boundary-setting, and self-advocacy. But your system treats anger as the most dangerous emotion available, because anger leads to conflict and conflict leads to the disconnection you fear most. So you narcotize it. The anger goes underground, where it becomes stubbornness, procrastination, passive resistance, and a bone-deep inertia that resists all external pressure.\n\nThe emotional growth path for Nines involves learning to feel your own feelings before they get diffused into the general atmosphere. This starts with the body: anger often shows up as tension in the jaw, heat in the chest, a clenched quality in the hands — physical signals that arrive before the emotional label does. If you can catch the body's signals before your numbing mechanism kicks in, you have a window to actually experience what you feel. And when you experience what you feel, you discover that you're not the placid, unruffled person the world has taken you for. You're someone with strong feelings, clear preferences, and a capacity for passion that's been buried under decades of accommodation.",

  stressTriggers: [
    "Being forced to take a definitive position or make a high-stakes choice with no option to defer",
    "Environments saturated with unresolved conflict, hostility, or emotional intensity you can't diffuse",
    "Feeling overlooked, dismissed, or treated as if your presence and contributions don't matter",
  ],
  flowTriggers: [
    "Collaborative work where your contribution is valued but you're not the center of attention",
    "Nature and physical environments that invite presence without demanding performance",
    "Deep listening conversations where someone truly wants your perspective, not just your agreement",
    "Completing a meaningful project you chose for yourself, on your own timeline",
  ],

  toolkit: [
    {
      title: "The Morning Priority",
      context: "Your days tend to fill with other people's agendas, small tasks, and comfortable routines that leave no room for what matters to you — partly because you haven't identified what matters to you.",
      action: "Before checking email, messages, or anyone else's needs, write down one thing that you want today. Not something you should do. Something you want. If nothing comes, sit with the blankness — that blankness is information about how disconnected you've become from your own desire. Stay with the question until something surfaces.",
    },
    {
      title: "The Anger Journal",
      context: "Your anger doesn't announce itself. It seeps out sideways — as stubbornness, procrastination, or a vague irritation you can't quite name. Giving it a place to exist on paper creates a channel that your system might actually allow.",
      action: "At the end of each day, write down one thing that bothered you. Not catastrophes — small frictions. Someone talking over you. A request you didn't want to fulfill. A moment where you went along when you didn't agree. Name the irritation without minimizing it. Over time, this builds a relationship with your anger that doesn't require conflict to express.",
    },
    {
      title: "The Clean No",
      context: "You default to yes — or to vague non-answers that let you avoid committing either way. Every automatic yes is a small erasure of your own priority, and every accumulated erasure makes it harder to remember you have priorities at all.",
      action: "Once a day, decline something. It doesn't have to be important. A social invitation you don't want. A request for help that you'd normally absorb. Say no without apologizing, explaining, or offering an alternative. Let the no exist on its own. Notice that the relationship survived.",
    },
    {
      title: "The Body Wake-Up",
      context: "Narcotization operates through the body — you go physically numb as a way of avoiding emotional activation. Reconnecting with physical sensation is the fastest way to interrupt the pattern and come back to yourself.",
      action: "Choose one physical activity that demands your full presence — cold water, vigorous exercise, dancing, anything that makes your body impossible to ignore. Do it for at least ten minutes. Notice how different you feel afterward: more definite, more present, more you. That's what it feels like to be awake. The goal is to spend more of your life in that state.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Numbing Out", description: "You increase the narcotization — more scrolling, more snacking, more routine, more distraction. The uncomfortable signal gets buried under layers of low-effort comfort that keep you from feeling anything too intensely." },
      { stage: 2, label: "Passive Resistance", description: "The anger you can't express directly emerges as stubborn immovability. You agree to things and don't follow through. You become unreachable — present in body, absent in engagement. People around you feel the wall but can't find the door." },
      { stage: 3, label: "Movement to Six", description: "Under prolonged stress, you take on Type 6 patterns: becoming anxious, suspicious, and reactive. The easygoing surface cracks and a worried, worst-case-thinking mind emerges — scanning for threats to the stability you've been trying to preserve." },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 3 — waking up to your own ambitions, setting concrete goals, taking visible action, and discovering that your effectiveness and drive were never absent, just dormant.",
    flowTriggers: [
      "Collaborative work that values your presence",
      "Nature and restorative physical environments",
      "Being genuinely asked for your perspective",
      "Completing self-chosen meaningful work",
    ],
    flowDescription: "You enter flow when the boundary between effort and ease dissolves — when the work feels natural, the contribution feels valued, and you can engage fully without performing or forcing. It's what happens when you finally stop accommodating and start participating.",
  },

  careerAlignment: {
    naturalFits: [
      "Mediation, facilitation, and conflict resolution",
      "Counseling, pastoral care, and therapeutic work",
      "Team leadership focused on collaboration and inclusion",
      "Environmental, conservation, and systems-level work",
    ],
    likelyDrains: [
      "Hyper-competitive environments where only top performers are valued",
      "Roles demanding constant self-promotion and personal branding",
      "High-conflict positions requiring frequent confrontation and assertive negotiation",
    ],
    careerWarning: "Watch for the comfort trap: staying in a role you've outgrown because leaving would require the confrontation and self-assertion your system avoids. A career that doesn't challenge you isn't peaceful — it's asleep.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 3 — the Achiever. This means waking up to your own ambitions, learning to assert your value, and discovering that showing up with your full energy doesn't destroy harmony — it creates a richer, more honest version of it.",
    areas: [
      { title: "From Merging to Presence", description: "Your natural mode is to dissolve into others' agendas and identities. Growth means learning to stay in your own body, your own perspective, your own desires — even when merging would be easier and more comfortable. You don't lose your empathy by finding yourself. You ground it." },
      { title: "From Accommodation to Assertion", description: "Saying what you want, setting boundaries, taking up space — these aren't acts of aggression. They're acts of existence. Your growth isn't about becoming combative. It's about becoming visible. The world needs your perspective, not just your agreement." },
      { title: "From Inertia to Action", description: "The sloth of the Nine isn't about effort — you can work incredibly hard on things that matter. It's about self-initiation: starting the thing that serves you, not waiting for external forces to move you. Your power was never missing. It was waiting for permission. Grant it." },
    ],
  },

  heroImage: buildHeroImagePath(9),
  sectionImages: buildSectionImages(9),
};
