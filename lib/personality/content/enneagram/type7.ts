import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_7: EnneagramTypeContent = {
  typeNumber: 7,
  name: "The Enthusiast",
  shortName: "Enthusiast",
  tagline: "Turns every open door into an adventure worth taking",
  color: "#C97A30",
  center: "head",

  coreFear: "Being trapped in pain, deprivation, or boredom — being cut off from the stimulation and joy that make life worth living",
  coreDesire: "To be happy, satisfied, and to have your needs fulfilled — to experience everything the world has to offer before the window closes",
  coreMotivation: "To maintain freedom and happiness, to avoid missing out, to keep yourself stimulated and engaged, to plan and anticipate exciting possibilities, to stay ahead of pain by staying in motion",
  defensePattern: "Rationalization — reframing negative experiences as positive, converting pain into opportunity, avoiding discomfort through mental agility. You don't deny that the wound exists; you instantly explain why it's actually a gift.",

  overview: `Your mind moves at a speed that most people can't track. While they're still processing the current moment, you've already leapt three steps ahead — connecting possibilities, generating options, mapping out the next experience. This isn't hyperactivity or lack of focus. It's a cognitive architecture optimized for opportunity detection. Your perceptual system is wired to spot openings, connections, and potential joy the way a Six spots threats or a Four spots emotional depth. The world, to you, is a vast buffet of experience, and the greatest sin is leaving anything on the table.

This means you live in a more exciting world than most people around you. A random Tuesday contains at least four things that could become an adventure, a project, a conversation that changes everything. Your enthusiasm is genuine — you really do see the possibilities you're describing, and you really do feel the energy of anticipation that lights up your face. People are drawn to this quality. You make things fun. You make people feel like the world is bigger and more interesting than they realized.

The pattern running underneath all this exuberance is avoidance. Specifically, the avoidance of pain, limitation, boredom, and anything that might trap you in a negative inner state. Your mind is a reframing machine — it takes discomfort and instantly converts it into a plan, a lesson, a silver lining, a next step. This happens so fast and so automatically that you may not even register the original pain before it's been processed into something more palatable. You're not suppressing emotions. You're metabolizing them at a speed that prevents you from ever having to sit with the unpleasant ones.

The Enneagram tradition calls your passion gluttony — not for food, but for experience. It's the insatiable appetite of a mind that believes more is always better, next is always richer, and the current moment is always a stepping stone to something greater. This gluttony isn't greed. It's a survival strategy: as long as you stay in motion, the pain can't catch you. As long as the future holds promise, the present doesn't need to be enough.

The most developed Sevens don't lose their capacity for joy. They gain the capacity for depth. They discover that sitting with pain doesn't kill you — it completes you. That the richest experiences aren't the ones you chase but the ones you stay with long enough to fully absorb. That limitation isn't a prison. It's the container that gives shape to genuine mastery and meaning.`,

  descriptionInsight: "Your appetite for experience isn't escapism — it's a genuine capacity to see abundance and possibility where others see scarcity. The challenge is learning that depth requires the very thing your wiring resists: staying put long enough for joy to mature into something richer than excitement.",

  strengths: [
    {
      title: "Visionary Optimism",
      description: "You see possibility where others see walls. When a plan fails, you immediately see three alternatives. When a door closes, you've already spotted the window. This isn't naivety — it's a cognitive gift for reframing that makes you indispensable in brainstorming sessions, startup environments, and any situation where someone needs to believe that a way forward exists.",
      deepDive: "Your optimism operates as a genuine perceptual filter. Where a Six sees what could go wrong, you see what could go right — and both of you are working with real data. Your filter highlights opportunity, emergence, and adjacent possibility. This makes you the person who breaks logjams, who prevents teams from catastrophizing into paralysis, who finds the angle nobody else considered. The shadow side is that this same filter can prevent you from reckoning with genuine problems. When your optimism is mature, it incorporates difficulty rather than bypassing it. You don't say 'this isn't a problem.' You say 'this is a problem, and here's how we could move through it.' That second version is worth its weight in gold.",
    },
    {
      title: "Connective Intelligence",
      description: "Your mind links ideas across domains with startling speed. You read a book on architecture, hear a podcast about neuroscience, and see the connection between the two that creates a business idea nobody's tried. This cross-pollination isn't random. It's how your mind naturally processes information — synthesizing across categories rather than drilling within them.",
      deepDive: "Your connective intelligence is powered by the breadth of your interests. Because you refuse to be boxed into one domain, you carry an unusually diverse mental library. A concept from evolutionary biology informs your approach to team management. A technique from improvisational comedy improves your negotiation skills. This makes you a natural at innovation, strategy, and any work that requires seeing the big picture from multiple angles simultaneously. The risk is that connections happen so easily that you mistake the connection for the execution. Seeing that two ideas relate is step one. Building something from that insight requires the sustained focus that doesn't come naturally to your type.",
    },
    {
      title: "Energetic Generosity",
      description: "You bring energy to every room you enter. Not performative energy — genuine enthusiasm that lifts the mood and expands what feels possible. People leave conversations with you feeling more alive, more interested in their own lives, more willing to try something they'd been putting off. This is a form of generosity that doesn't get enough credit.",
      deepDive: "Your energy is contagious because it's real. You're not performing enthusiasm — you genuinely vibrate at a higher frequency when you're engaged. This has measurable effects on the people around you: they become more creative, more willing to take risks, more hopeful. In leadership, this quality is transformative. Teams with a healthy Seven at the helm take on ambitious projects, recover from setbacks faster, and maintain morale through difficulty. The shadow is that your energy can become a demand — an implicit expectation that everyone should match your pace and positivity. When you're unaware of this, you can inadvertently dismiss or steamroll people who are processing at a different speed or sitting with a feeling you've already rationalized away.",
    },
    {
      title: "Rapid Adaptation",
      description:
        "When plans fall apart, you don't freeze. Your mind immediately generates alternatives. This makes you exceptionally resilient in chaotic environments — travel disruptions, project pivots, life upheavals. While others are mourning the plan, you're already excited about plan B. Your resilience isn't stoic endurance; it's creative reinvention in real time.",
    },
    {
      title: "Experiential Wisdom",
      description:
        "You've done more, tried more, and been exposed to more than most people your age. This breadth of experience gives you a practical wisdom that's different from book knowledge — you understand how things work because you've worked them, tasted them, lived them firsthand. When you finally commit to depth, this breadth becomes a foundation that specialists can't replicate.",
    },
  ],

  growthEdges: [
    {
      title: "The Escape Velocity Problem",
      teaser: "You leave situations — jobs, relationships, projects, conversations — the moment discomfort appears. You frame each exit as moving toward something better, but the pattern reveals itself: you're not running toward. You're running from. And you're running from the same thing every time.",
      fullExplanation: "Your departure pattern has a consistent trigger: the moment an experience transitions from novel to demanding. New job? Thrilling for six months, then the routine parts emerge and you start browsing other opportunities. New relationship? Intoxicating until the difficult conversation you've been avoiding can no longer be postponed. New hobby? Captivating until the plateau where improvement requires repetitive practice rather than natural talent.\n\nThe mechanism is avoidance disguised as appetite. Your mind frames every exit as an upgrade — 'I'm not leaving, I'm growing.' And sometimes that's true. But when the pattern repeats across every domain of your life, the common denominator isn't the situations. It's the threshold of discomfort at which you eject.\n\nThe breakthrough comes when you stay. Not because the situation is perfect, not because you've convinced yourself it's fine, but because you recognize that the thing you're avoiding — the boredom, the difficulty, the limitation — is the exact material that depth is made of. Mastery lives on the other side of the plateau you keep abandoning. Intimacy lives on the other side of the difficult conversation you keep postponing. A meaningful life lives on the other side of the pain you keep outrunning.",
    },
    {
      title: "The Monkey Mind",
      teaser: "Your mind generates plans, ideas, and future scenarios at a rate that makes sustained focus nearly impossible. You're not thinking about one thing. You're thinking about seven things, and each one is connected to three more. The mental noise feels productive, but it's often a sophisticated form of avoidance.",
      fullExplanation: "The Seven's mind is a future-generation machine. It produces possibilities the way a fountain produces water — continuously, automatically, and without an off switch. In a single meeting, you might mentally plan a vacation, redesign a project workflow, compose a text to a friend, and imagine a career change. None of this is idle daydreaming. Each thought feels urgent, relevant, and exciting.\n\nThe function of this mental activity is to keep you in anticipation mode, because anticipation feels better than presence. When you're planning the trip, you feel the excitement without the delayed flights. When you're imagining the project, you get the thrill without the tedious execution. Your mind has learned that the preview is more reliably pleasurable than the feature — so it generates an endless stream of previews.\n\nThe growth move is recognizing that this mental abundance has a cost: you're rarely fully here. The meal you're eating is overshadowed by the restaurant you want to try next week. The person in front of you is competing with the idea you just had. Learning to be present — fully, uncomfortably present with one experience at a time — is the Seven's deepest spiritual practice. Not because presence is morally superior, but because the richness you're seeking through variety is actually available through depth, if you can tolerate staying long enough to find it.",
    },
    {
      title: "Pain Avoidance as Identity",
      teaser: "You've built a self around being the positive one, the fun one, the one who always sees the bright side. This identity serves you well socially, but it means you have nowhere to go with your grief, anger, fear, and disappointment. The positive mask becomes a prison of its own.",
      fullExplanation: "Your positivity isn't fake — you genuinely experience more positive emotion than most types. But your relationship with negative emotion is distorted. When sadness arises, your mind immediately converts it: 'But look at the lesson.' When anger surfaces, it's quickly repackaged: 'I'm not angry, I'm just ready to move on.' When grief appears, you schedule something fun to displace it.\n\nThis isn't emotional suppression in the classical sense. It's emotional alchemy — you transform negative feelings so quickly that you genuinely believe you've processed them. But conversion isn't processing. The original feeling — the grief, the anger, the fear — gets stored in your body and your unconscious, manifesting as restlessness, substance use, overscheduling, or a vague sense that something essential is missing despite all the adventure.\n\nThe growth move is radical for a Seven: let the pain be pain. Don't reframe it. Don't find the silver lining. Don't plan something to feel better. Just sit with it. This feels like dying because your entire defensive structure is organized around never being trapped in a negative state. But the Sevens who learn to grieve discover something unexpected: the grief doesn't kill them. And on the other side of it, their joy becomes deeper, realer, and less frantic — because it's no longer running from anything.",
    },
  ],

  relationshipStyle: "The Adventure Partner",
  relationshipPreview: "You bring infectious energy, creative romance, and a genuine talent for making your partner feel like life is an adventure worth sharing. You don't do boring relationships — you're the one who plans the spontaneous road trip, finds the hidden restaurant, turns a Tuesday into something worth remembering. The people who love you describe feeling more alive in your presence.",
  relationshipDeepDive: `Your relationship pattern has a distinctive rhythm: the intoxication of novelty followed by the restlessness of familiarity. Early relationships are your domain — you're charming, attentive, full of plans, and genuinely excited by the newness of another person. You idealize your partner's potential and imagine all the experiences you'll share. This phase feels like pure possibility, which is your natural habitat. Your partners in this stage often describe feeling like the most interesting person in the world.

The challenge arrives when the relationship matures. Mature love requires the very things your wiring resists: routine, repetitive vulnerability, sitting with your partner's pain without converting it into a plan, having the same difficult conversation more than once. When the relationship starts to demand depth over breadth, your attention naturally drifts toward the next stimulating thing — which may be another person, a project, a fantasy, or simply the mental catalog of experiences you're missing by being committed. You may not leave physically, but your mind starts shopping — and your partner can feel the difference between a Seven who's all-in and one who's keeping their options mentally open.

The breakthrough in relationships comes when you recognize that the restlessness isn't telling you the truth about your partner — it's telling you about your own discomfort with limitation. Your partner isn't boring. You're afraid of what happens when the novelty wears off and you're left with the raw, undecorated experience of another human being. That raw experience — the unglamorous, repeated, ordinary act of truly knowing someone — is where the deepest form of the joy you're seeking actually lives. It just doesn't announce itself the way a new adventure does.`,

  careerHeadline: "You thrive in roles that reward versatility, big-picture thinking, and the ability to generate possibility where others see constraint.",
  careerDirections: [
    "Entrepreneurship and innovation — where your ability to see opportunity and tolerate risk is the core skill",
    "Creative direction, content strategy, and brand storytelling — translating vision into experience",
    "Consulting and strategic advising — bringing cross-domain perspective to complex problems",
    "Travel, hospitality, and experience design — curating joy and novelty for others",
    "Teaching, public speaking, and media — making complex ideas exciting and accessible",
  ],
  careerDeepDive: `Your career challenge is commitment, not capability. You can do almost anything well enough to succeed — the question is whether you'll stay long enough to build something with your gifts. The Seven's career path often looks like a fascinating zigzag: three industries, two startups, a creative phase, a consulting stint. Each move made sense at the time. The pattern becomes visible only in retrospect, and it reveals something uncomfortable: you may have been running from depth rather than toward opportunity.

The Sevens who build the most remarkable careers find roles that are inherently varied — consulting, entrepreneurship, portfolio careers, creative direction — so that the need for novelty is satisfied within a single trajectory rather than through serial reinvention. The key insight is that you need stimulation, not new situations. A sufficiently complex and challenging role can provide decades of stimulation if you go deep enough. The difference between a Seven who builds something lasting and one who collects impressive-sounding resume lines often comes down to whether they found a container big enough for their energy.

The trap is the FOMO career: constantly scanning for the more exciting opportunity, the better fit, the role that will finally capture all of your interests. That role doesn't exist. Every career path involves mastering some things you find tedious. The Sevens who thrive learn to find the interesting angle in the boring parts — which is, after all, just applying your reframing gift to your own development rather than using it to justify another exit.`,

  emotionalPattern: `Your emotional life is characterized by a speed that other types find bewildering. Feelings arise, get processed — or rather, get reframed — and are replaced by the next feeling in a matter of minutes. You can be genuinely sad about a loss at 2pm and genuinely excited about a plan at 2:15pm. This isn't shallow. Your emotions are real. They're just fast, and they have a strong bias toward the positive end of the spectrum. People close to you sometimes wonder if you're avoiding your feelings. You genuinely believe you've dealt with them. Both of you are partially right.

The pattern underneath the speed is avoidance — specifically, the Enneagram's passion of gluttony, which isn't about food but about experience. Your mind treats negative emotions as problems to be solved rather than experiences to be lived. Grief becomes gratitude for what you had. Anger becomes motivation for change. Fear becomes excitement about the unknown. Each conversion is elegant, intellectually sound, and functionally incomplete — because the original feeling never gets its due. The rationalization happens so fast it's invisible to you, which is what makes it a defense mechanism rather than a choice.

The cost shows up in unexpected places: a chronic low-grade restlessness that no amount of activity can resolve, relationships that feel somehow unsatisfying despite being objectively wonderful, a sense that you're performing happiness rather than fully inhabiting it. These are signals that the unfelt feelings are accumulating beneath the bright surface. Your growth edge is learning to feel slowly — to let a sadness sit for an hour without reframing it, to stay angry long enough to understand what boundary was crossed, to be bored without immediately reaching for stimulation. This doesn't diminish your joy. It deepens it by giving it a full emotional landscape to emerge from rather than a carefully curated highlight reel.`,

  stressTriggers: [
    "Being trapped — in a commitment, a routine, a conversation, or a feeling — with no exit in sight",
    "Deprivation, restriction, or forced simplicity that cuts off your access to options and stimulation",
    "Confronting unavoidable pain — grief, failure, limitation — that your reframing can't convert fast enough",
  ],
  flowTriggers: [
    "Brainstorming and ideation sessions where possibilities are valued over constraints",
    "Novel environments and experiences that feed your perceptual appetite for the new",
    "Teaching or performing — transmitting your enthusiasm and making others feel alive",
    "Physical adventure that demands full presence — climbing, surfing, dancing, travel to unfamiliar places",
  ],

  toolkit: [
    {
      title: "The Satiation Practice",
      context: "When you're already mentally planning the next experience while still in the current one, you're in your core pattern: the perpetual preview. You're consuming the anticipation and discarding the actual moment like packaging.",
      action: "During your next enjoyable experience — a meal, a conversation, a walk — catch yourself when your mind jumps to what's next. Gently return to what's here. Use your senses as anchors: what do you actually taste, hear, feel right now? The goal isn't to stop your mind from planning. It's to complete the current experience before starting the next one.",
    },
    {
      title: "The Discomfort Stay",
      context: "Your instinct when pain arises is to move — make a plan, call a friend, start a project, open a browser tab. Each move is a tiny escape from the feeling. The feeling doesn't resolve; it just gets buried under activity.",
      action: "When you notice a negative emotion — sadness, anxiety, boredom, disappointment — set a timer for 15 minutes and don't do anything about it. Don't reframe it, don't plan around it, don't cheer yourself up. Just feel it. Notice where it lives in your body. Let it be as big as it is. Most Sevens discover that the pain they've been running from is far less devastating than the running itself.",
    },
    {
      title: "The Depth Commitment",
      context: "You start more things than you finish because the beginning — where everything is possible and nothing is tedious — is where you feel most alive. But the most meaningful experiences in life — mastery, intimacy, creative breakthrough — live past the point where your attention usually checks out.",
      action: "Choose one thing — a project, a skill, a relationship pattern — and commit to staying with it through the first plateau. The moment you feel the urge to pivot, write down what you're feeling rather than acting on it. Often the urge to leave is a signal that you're approaching the depth your soul actually wants.",
    },
    {
      title: "The Subtraction Experiment",
      context: "Your default response to dissatisfaction is to add: more experiences, more plans, more options. But your restlessness may be coming from having too much, not too little. The signal gets lost in the noise.",
      action: "For one week, subtract instead of adding. Cancel one commitment. Remove one option from your weekend. Eat the same lunch three days in a row. Notice what emerges in the space. Boredom often arrives first, followed by something quieter and more nourishing — a creative impulse, a feeling you'd been outrunning, a clarity about what you actually want underneath all the wanting.",
    },
  ],

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Acceleration",
        description: "You speed up — more plans, more activity, more stimulation. The calendar fills, the ideas multiply, and the underlying discomfort gets buried under a pile of exciting possibilities.",
      },
      {
        stage: 2,
        label: "Scattered Excess",
        description: "Commitments outstrip capacity. You've overbooked, overcommitted, and overpromised. The fun starts to feel frantic. Joy becomes compulsive rather than nourishing, and the experiences you're collecting stop feeding you.",
      },
      {
        stage: 3,
        label: "Movement to One",
        description: "Under prolonged stress, you take on unhealthy Type 1 patterns: becoming rigid, critical, perfectionistic, and punishing — turning the sharp mind that generates possibilities into one that catalogs everything wrong with yourself and others.",
      },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 5 — slowing down, going inward, studying something deeply rather than broadly, and discovering that subtraction creates more space for genuine satisfaction than addition ever could.",
    flowTriggers: [
      "Novel environments with genuine discovery potential",
      "Creative brainstorming and ideation",
      "Teaching or performing for an engaged audience",
      "Physical adventure requiring full presence",
    ],
    flowDescription: "You enter flow when anticipation and experience merge — when the moment you're in is so absorbing that your mind stops generating alternatives. This happens most often in creative work, high-stimulation environments, and experiences that demand your full, undivided attention.",
  },

  careerAlignment: {
    naturalFits: [
      "Entrepreneurship, innovation labs, and venture strategy",
      "Creative direction, content creation, and brand storytelling",
      "Consulting, strategic advising, and cross-functional leadership",
      "Experience design, travel curation, and hospitality innovation",
    ],
    likelyDrains: [
      "Highly repetitive roles with no variation, creative latitude, or novelty",
      "Rigid bureaucratic environments with excessive process, compliance, and constraint",
      "Isolated, solitary work with minimal social interaction, collaboration, or audience",
    ],
    careerWarning: "Watch for the FOMO trap: leaving good roles because a shinier one appeared. The grass isn't greener — your reframing engine just makes the other lawn look that way. Depth of tenure builds more career capital than breadth of experience.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 5 — the Investigator. This means learning to go deep instead of wide, to find richness through focused attention rather than accumulated experiences, and to sit with reality as it is rather than as you'd prefer it to be.",
    areas: [
      {
        title: "From Breadth to Depth",
        description: "Your natural mode is to sample everything and commit to nothing. Growth means choosing fewer things and going further with each — discovering that the hundredth hour of practice contains a different kind of joy than the first. Mastery, it turns out, is not boring. It's a different frequency of excitement that your surface-scanning mode can't detect.",
      },
      {
        title: "From Anticipation to Presence",
        description: "Shifting from living in the future — where everything is exciting in theory — to living in the present, where things are imperfect but real. You don't lose your capacity for excitement. You gain the capacity to be satisfied. The present moment, fully inhabited, contains more richness than a hundred anticipated ones.",
      },
      {
        title: "From Avoidance to Integration",
        description: "Allowing pain, boredom, and limitation to be part of your experience rather than problems to outrun. The full spectrum of human emotion — including the dark end — is what gives your natural joy its depth and credibility. A Seven who has grieved is more luminous than one who has only celebrated.",
      },
    ],
  },

  heroImage: buildHeroImagePath(7),
  sectionImages: buildSectionImages(7),
};
