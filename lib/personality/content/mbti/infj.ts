import type { MBTITypeContent } from "./types";

export const INFJ: MBTITypeContent = {
  typeCode: "INFJ",
  typeName: "The Champion",
  tagline:
    "Understands people at a depth that feels almost uncanny — and carries the weight of that seeing",
  color: "#916368",

  heroImage: "/characters/infj/infj-reveal.svg",
  sectionImages: {
    strengths: "/characters/infj/infj-strengths.svg",
    relationships: "/characters/infj/infj-relationships.svg",
    career: "/characters/infj/infj-career.svg",
    growth: "/characters/infj/infj-growth.svg",
  },

  overview: `You experience the world through two simultaneous channels that most people don't have running at once: deep pattern recognition and emotional radar. While others react to what people say, you're tracking what they mean, what they're not saying, and what's driving them underneath. You were the kid who knew your parents were about to fight before they raised their voices, and the adult who can walk into a room and feel the tension between two people who haven't spoken yet.

This gives you a rare and sometimes uncomfortable gift: you see through people. Not maliciously — you're not trying to catch anyone out. Your mind simply processes human behavior at a depth most people don't operate at. You pick up on the micro-expression that contradicts the cheerful words. You notice the pattern in someone's decisions that tells you what they actually value, regardless of what they claim. Friends have probably called you psychic. You're not. You're just processing more social data than they realize exists.

**How your mind is wired:** Your personality runs on four cognitive functions — think of them as mental tools you use in a specific order of preference. Your lead tool is **Introverted Intuition (Ni)**: deep, background pattern recognition that synthesizes scattered information into insights about what's coming next. Your second tool is **Extraverted Feeling (Fe)**: the part of you that reads emotional dynamics in a room, manages social harmony, and instinctively adjusts your behavior to meet others' emotional needs. Third is **Introverted Thinking (Ti)**: an internal logic system still developing — it gives you analytical precision but isn't yet your default mode. Last is **Extraverted Sensing (Se)**: awareness of the physical, present-moment world — your blind spot, and the area where stress hits hardest.

The combination of Ni and Fe is what makes you the rarest personality type and one of the most misunderstood. Your pattern recognition doesn't just track abstract systems — it tracks people. You build detailed internal models of the humans around you: their motivations, their wounds, their trajectories. Your feeling function then uses those models to navigate social dynamics with a sophistication that others experience as warmth, empathy, or sometimes an unsettling perceptiveness. People feel deeply understood by you, often before you've said much at all.

The tension you'll navigate throughout your life is between your gift for understanding others and the cost of that understanding. Absorbing emotional data all day is exhausting. Reading a room constantly is draining. Knowing what someone needs before they do creates a gravitational pull toward becoming everyone's counselor — and losing yourself in the process. The most developed Champions aren't less perceptive. They've learned to use their perception selectively, to protect their energy without shutting down their gift, and to turn that penetrating insight inward — seeing themselves as clearly as they see everyone else.`,

  descriptionInsight:
    "Your trait pattern — strong Introversion, strong Intuition, moderate Feeling, moderate Judging — creates a specific cognitive signature: you're a deep-pattern reader of human nature who works best with focused connection, trusts insight over surface data, and makes decisions through a blend of values and emerging analytical precision.",

  strengths: [
    {
      title: "Depth Perception",
      description:
        "You see through the surface to what's actually driving a person, a situation, or a decision. Where others take people at face value, you're tracking the underlying pattern — the real reason your coworker quit, the actual dynamic destroying that couple's marriage, the unspoken fear running your friend's life. This isn't guesswork. It's your pattern recognition applied to human behavior, and it's right far more often than chance would explain.",
      deepDive:
        "Your depth perception operates through a two-step process that happens so fast it feels like a single intuitive hit. First, your lead function — deep pattern recognition — collects behavioral data points: tone shifts, word choices, body language, the gap between what someone says and what they do. Second, your feeling function maps those data points onto emotional frameworks: what would a person feel if they were making these choices? What wound would produce this pattern of behavior? The result is insight that feels psychic but is actually a sophisticated emotional-analytical synthesis.\n\nThe gift is obvious: you understand people in ways that create genuine intimacy. The hidden cost is twofold. First, you can't turn it off. You see the dysfunction in your friend's relationship whether you want to or not. You read your boss's insecurity in every meeting. This constant perception is exhausting and sometimes isolating — you know things about people they haven't told you, which creates an asymmetry that can feel lonely. Second, your models of people can become so detailed that you stop updating them. You 'know' someone so well that you stop actually listening to them, responding to your model rather than the real person in front of you.",
    },
    {
      title: "Quiet Influence",
      description:
        "You change minds without raising your voice. You don't argue people into agreement — you understand what they actually need to hear, and you deliver it in a way that lands. Your influence operates through insight, not force. People shift their positions after talking to you and often can't explain exactly why. You read the room and speak to what's underneath, not what's on the surface.",
      deepDive:
        "Your influence style is fundamentally different from louder, more forceful types. Where an Executive (ENTJ) leads through authority and a Visionary (ENTP) leads through persuasive argumentation, you lead through understanding. When you need to move someone, your pattern recognition first builds a model of their internal landscape — their values, fears, and decision-making triggers. Your feeling function then crafts a message that speaks directly to those specific levers. This isn't manipulation — it's deep empathy translated into communication. The person feels heard, not handled.\n\nThis makes you extraordinarily effective in roles that require changing hearts, not just minds: counseling, teaching, writing, advocacy. It also means your influence is often invisible — people credit themselves for the insight you planted. The growth edge: learning to use this influence for your own needs, not just in service of others. Many Champions are skilled at helping everyone else get what they want while neglecting to advocate for themselves.",
    },
    {
      title: "Moral Clarity",
      description:
        "You have an internal compass that doesn't bend under social pressure. You know what's right — not in a rigid, rule-following way, but in a deep, values-tested way that accounts for context and complexity. When everyone else is rationalizing or looking the other way, you're the person who names the thing that needs naming. This takes courage, and you have it, even when your voice shakes.",
      deepDive:
        "Your moral clarity comes from an unusual source: the intersection of pattern recognition and emotional awareness. You don't arrive at your values through abstract philosophical reasoning (that's more of a Philosopher or Mastermind path). You arrive at them through seeing — really seeing — the impact of choices on real people. Your pattern recognition shows you the trajectory; your feeling function shows you the human cost. Combined, they produce a moral vision that is both principled and deeply humane.\n\nThis makes your ethical positions hard to dismiss, because they're grounded in observed reality rather than theory. When you say something is wrong, you can usually point to specific patterns of harm, specific people affected, specific consequences unfolding. The challenge: your moral clarity can become moral rigidity if you stop distinguishing between core values (non-negotiable) and preferences (flexible). Not every hill is worth dying on, and the Champion who treats every ethical nuance as a line in the sand burns out and pushes people away.",
    },
    {
      title: "Pattern Synthesis",
      description:
        "You connect dots that other people don't even see as related. A conversation from three months ago, a detail from a book, an observation about a stranger's behavior — your mind weaves these into insights that seem to arrive fully formed. This isn't magic; it's your pattern recognition running constantly in the background, synthesizing information across domains and timescales that most people process in isolation.",
      deepDive:
        "Your synthesis ability is what separates you from types that share individual components of your stack. Other strong intuitives see patterns. Other strong feelers read emotions. You do both simultaneously, which means you synthesize across dimensions that most people keep separate: the logical and the emotional, the systemic and the personal, the present and the future trajectory.\n\nIn practice, this shows up as the ability to walk into a meeting and within minutes understand not just the business problem being discussed, but the interpersonal dynamics shaping the discussion, the unspoken agendas, and the likely outcome if no one intervenes. It shows up as the ability to read a novel and understand not just the story but the author's unresolved psychology. This is your mind's natural operating mode — and it's genuinely rare. The risk: synthesis can become over-interpretation. Not everything is connected. Not every behavior has a deep meaning. Sometimes a cigar is just a cigar, and your friend cancelled lunch because they were tired, not because they're pulling away from the friendship.",
    },
    {
      title: "Written Expression",
      description:
        "You often express yourself more precisely in writing than in speech. The written word gives your pattern recognition time to find the exact phrase, the perfect metaphor, the sentence that captures what you've been circling around. Many Champions are natural writers — not because they studied craft, but because writing is the medium that matches how their mind actually works: layered, precise, and able to hold complexity without rushing to a punchline.",
      deepDive:
        "This strength has a specific cognitive origin. In conversation, your feeling function is busy reading the other person's reactions in real time, which splits your attention between what you want to say and how it's landing. Writing removes that real-time social feedback loop, freeing your full cognitive architecture to focus on expression. Your pattern recognition finds connections and metaphors. Your developing analytical function structures them. Your feeling function ensures the emotional tone lands.\n\nThis is why many Champions report that people understand them better through their writing than through their spoken words. In person, you edit in real time based on social signals, often softening or abandoning points before you've fully made them. On paper, you say what you actually mean. If you're not already using writing as a tool for self-understanding and communication, start. Journaling, letters, essays — any form that lets you think at the speed your mind actually moves, without the overhead of managing someone else's reactions in real time.",
    },
  ],

  growthEdges: [
    {
      title: "The Doorslam",
      teaser:
        "You give people more chances than they deserve, absorbing their behavior, making excuses, adapting around their dysfunction — until suddenly you don't. One day the switch flips, and you cut them out completely. No warning, no negotiation. The person is stunned. You feel nothing but relief. This isn't cruelty — it's the bill coming due for months of unspoken resentment.",
      fullExplanation:
        "The INFJ Doorslam is one of the most discussed patterns in personality theory, and for good reason — it's dramatic, confusing to everyone involved, and reveals a core vulnerability in how your type handles conflict.\n\nHere's the mechanism: Your feeling function is wired to maintain social harmony. When someone hurts or disappoints you, your first instinct isn't confrontation — it's accommodation. You adjust your behavior, lower your expectations, make internal excuses for the other person. Your pattern recognition, meanwhile, is keeping a precise ledger of every offense, broken promise, and one-sided exchange. You don't forget. You just don't mention it.\n\nThis creates an invisible countdown. Each un-addressed grievance adds weight. Your feeling function keeps smoothing things over on the surface while your pattern recognition quietly downgrades the relationship's internal rating. The other person has no idea any of this is happening because you've given them zero feedback. From their perspective, everything is fine.\n\nThen one day — often triggered by something objectively small — the accumulated weight crosses a threshold. Your pattern recognition delivers a verdict: this person will not change. Your feeling function, exhausted from carrying the relationship's emotional labor alone, agrees. And you're done. Not angry-done where there's still energy in the system. Peaceful-done. Empty-done. The door closes, and you feel lighter the moment it does.\n\nThe problem isn't the doorslam itself — sometimes cutting someone off is the healthy choice. The problem is the months of silence that preceded it. Every unexpressed frustration was a missed opportunity for the relationship to course-correct. The other person never got the chance to change because they never knew change was needed.\n\nThe intervention: practice expressing discomfort when it's small. 'That bothered me' is one of the hardest sentences for your type to say, and one of the most important. It won't feel natural — your feeling function will scream that you're disrupting harmony. You are. That's the point. Small disruptions prevent catastrophic ones.",
      premiumHook:
        "Understand the exact internal mechanism behind your sudden relationship cutoffs — and learn to build the early-warning system your type is missing.",
      relatedDimension: "TF",
    },
    {
      title: "Perfectionist Vision",
      teaser:
        "You carry a vision of how things should be — relationships, work, the world — that's so vivid it feels like a memory of something that already exists. When reality falls short of that vision (and it always does), the gap doesn't just disappoint you. It quietly devastates you. You're not a perfectionist about details. You're a perfectionist about meaning.",
      fullExplanation:
        "Your pattern recognition doesn't just see what is — it sees what could be. And because your feeling function cares deeply about people and their wellbeing, those visions aren't abstract. They're vivid, emotionally charged pictures of how a relationship could feel, how a community could function, how a workplace could treat people. The vision arrives fully formed, feeling not like a wish but like a destination you can almost reach.\n\nThe gap between that vision and present reality is where your suffering lives. You see the marriage as it could be and ache at the distance between that and the one you're in. You see the organization as it should be and feel the weight of every way it falls short. You see a friend's potential and grieve the choices pulling them away from it.\n\nThis isn't ordinary dissatisfaction. It's a specific cognitive pattern: your Ni generates an idealized future state, your Fe makes it emotionally vivid and urgent, and the gap between vision and reality becomes a constant low-grade pain. Others experience you as idealistic. From the inside, it feels more like being haunted by a better version of everything.\n\nThe pattern becomes destructive in three specific ways. In relationships, your vision of how your partner 'should' be can blind you to who they actually are — you fall in love with potential and resent the person for not living up to it. In work, your vision of the ideal outcome can paralyze you — if the output won't match the internal picture, you may not start at all. In self-assessment, your vision of who you should be creates a permanent sense of falling short — no actual achievement matches the internal image.\n\nThe growth move isn't abandoning your vision — it's one of your greatest gifts. It's learning to hold the vision as a direction rather than a destination. To let the gap between ideal and real be a source of creative energy rather than despair. To love the actual version of things while still working toward the better one. This requires developing your third function — analytical thinking — which gives you the framework to evaluate your visions critically: Which gaps are real problems worth solving? Which are the natural distance between aspiration and reality that every meaningful endeavor includes?",
      premiumHook:
        "Learn why your visions feel so real they hurt when reality doesn't match — and get the framework for turning idealism from a source of pain into your most powerful creative fuel.",
      relatedDimension: "SN",
    },
    {
      title: "Emotional Absorption",
      teaser:
        "You walk into a room and feel what everyone else is feeling. Not metaphorically — your system literally takes on the emotional texture of your environment. After a day of other people's anxiety, grief, and frustration, you can't tell which feelings are yours anymore. You think you're depressed. Actually, you're full.",
      fullExplanation:
        "This is your most invisible and most damaging pattern. Your feeling function is calibrated to read emotional environments — it's a feature, not a bug. But it doesn't come with a built-in filter. You absorb emotional data indiscriminately: the barista's bad morning, your colleague's anxiety about layoffs, your partner's simmering resentment about something that has nothing to do with you. Each emotional signal registers as data your system needs to process.\n\nHere's what makes this so dangerous: because your feeling function is externally oriented (it reads the room, not your internal state), you often can't distinguish between emotions that originated in you and emotions you absorbed from your environment. You finish a dinner party feeling anxious and assume you're anxious — when actually you picked up the host's anxiety about their marriage. You leave work feeling hopeless and assume you hate your job — when actually you absorbed the team's collective burnout.\n\nThe pattern compounds over time. Champions who don't learn to manage their emotional permeability develop a specific kind of exhaustion that looks like depression but doesn't respond to standard depression interventions. It responds to solitude, emotional boundaries, and learning to run a simple internal check: Is this feeling mine? When did it start? Was I feeling this before I walked into the room?\n\nThree specific contexts where absorption hits hardest: intimate relationships (your partner's moods become your moods, making it impossible to be a stable presence when they need one), helping professions (counselors, therapists, and teachers with this pattern burn out not from the work but from the emotional residue they carry home), and family systems (Champions often become the emotional sponge of their family, absorbing conflict that other members refuse to process).\n\nThe intervention isn't becoming less empathetic. It's building what we call a membrane — the ability to perceive emotion without merging with it. Concrete practices: after any emotionally dense interaction, take five minutes alone and ask 'what was I feeling before that conversation, and what am I feeling now?' The delta is what you absorbed. Name it, acknowledge it isn't yours, and physically discharge it — a walk, a stretch, shaking your hands. It sounds simplistic. For your type, it's transformative. You're not trying to stop feeling. You're learning to return to your own emotional baseline after each encounter.",
      premiumHook:
        "Discover why you feel emotionally drained in ways that don't match your actual life — and get the specific practice that helps Champions separate their emotions from everyone else's.",
      relatedDimension: "EI",
    },
  ],

  relationshipStyle: "Deep, Selective, All-or-Nothing",
  relationshipPreview:
    "You bring a rare combination to relationships: you understand people at a depth they've rarely experienced, and you're willing to invest fully once you've decided someone is worth it. But your relationships carry a specific tension — you need connection like you need air, yet the very depth of your empathy means that connection costs you more than it costs most people. You give too much, say too little about what you need, and then wonder why you feel emptied out.",

  relationshipDeepDive: `Your relationship pattern follows a specific arc that's worth understanding because it repeats until you consciously intervene. You observe someone carefully before engaging — your pattern recognition builds a detailed model of who they are before you've had more than a few conversations. Once the model reaches a threshold of trust and interest, you invest fully. Not cautiously. Fully. And the depth of your investment creates an intensity that the other person often doesn't know how to match.

The core tension is between your need for deep connection and the cost of providing it. Your feeling function makes you an extraordinary partner — attentive, empathetic, able to sense what someone needs before they ask. But that same function doesn't have an off switch. You're processing your partner's emotions constantly, adjusting your behavior to maintain harmony, carrying the relationship's emotional weight as if it were your own. Over time, this creates an imbalance. You know everything about what they need. They know almost nothing about what you need, because you haven't told them.

**Romantic Patterns**

You fall for people who have depth — not necessarily intellectual depth, but emotional or experiential depth. You're drawn to complexity, to people who have layers, to the person at the party who's interesting precisely because they're not trying to be. Your pattern recognition spots them quickly: while others are evaluating surface attraction, you're already reading their inner landscape.

Early romance is intoxicating for you because your Ni generates a vivid vision of what the relationship could become. This vision is detailed, emotionally rich, and feels almost inevitable. The danger is that you fall in love with the vision before the real person has had time to either match it or diverge from it. When they diverge — when they turn out to be human rather than the idealized version your pattern recognition constructed — you can experience it as betrayal rather than reality.

Your love language is understanding. You show love by knowing someone — remembering the offhand comment they made about their childhood, noticing the shift in their energy before they're aware of it themselves, anticipating needs they haven't articulated. This is extraordinary when it's received well. It can also feel invasive to partners who aren't comfortable being seen that clearly.

**Friendship Dynamics**

You maintain a very small inner circle — often two or three people at most who have full access to the real you. Everyone else gets a carefully calibrated version. This isn't dishonesty; it's energy management. Showing up as your full self requires a level of trust and reciprocity that most people haven't earned. The friends who are inside the walls experience a loyalty and depth of caring that's genuinely uncommon. You'll remember their mother's birthday. You'll know when they're lying about being fine. You'll show up at 3am if they need you.

The challenge: you may not tell those friends what you need. You're so attuned to their emotional states that your own needs feel secondary. Over time, your closest friendships can become unconsciously one-directional — they process their lives through you, and you process yours alone.

**Conflict Style**

You avoid conflict until you can't. Your feeling function experiences interpersonal friction as physically uncomfortable — it disrupts the harmony your system is designed to maintain. So you accommodate, reframe, and absorb. You tell yourself the issue isn't worth raising. You edit your own reactions to maintain peace. And all the while, your pattern recognition is logging every instance, building a case file you never intended to open.

When you do finally engage in conflict, it can be devastating — not because you're cruel, but because you've been quietly observing for so long that your understanding of the other person's patterns is surgically precise. You know exactly where they're vulnerable. Under extreme stress, that knowledge can come out in ways that surprise even you.

The healthier pattern: name friction early, when it's small and specific. "That comment bothered me" is infinitely easier to recover from than the nuclear confrontation that happens when six months of unspoken resentment reaches critical mass.

**The Doorslam in Relationships**

This deserves its own section because it's the pattern most likely to end your relationships without warning. When you've absorbed too much, adapted too many times, and your pattern recognition finally concludes that the other person will not change — the door closes. You don't leave in anger. You leave in exhaustion. The other person is blindsided because you never showed them the ledger. Learning to share the ledger in real time — to let people see the impact of their behavior before it's too late — is the single most important relationship skill for your type.

**Communication Preferences**

You prefer depth over frequency. A two-hour conversation about something real is worth more to you than a month of daily small talk. You communicate best in writing or in quiet one-on-one settings where your feeling function isn't overloaded by group dynamics. You tend to speak in metaphors and layers — not to be obscure, but because your thinking is genuinely layered and metaphor is the most efficient compression format for the kind of insight you're trying to convey.

Sexually and intimately, you need emotional connection as a prerequisite for physical connection. Without it, physical intimacy feels hollow — your body won't engage if your pattern recognition hasn't established trust. With it, you bring the same depth and attentiveness that characterizes all your connections: present, responsive, and tuned to your partner in a way that can be transformative for both of you.`,

  careerHeadline: "Meaningful, Creative & People-Centered Strategy",
  careerDirections: [
    "Counseling & Psychology",
    "Writing & Creative Arts",
    "Social Impact & Advocacy",
    "Strategic Human Development",
  ],
  careerDeepDive: `Your ideal work sits at the intersection of meaning and depth. Strip either element away and your engagement collapses — not gradually, but like a light switching off. You can tolerate difficult work, boring stretches, and difficult people if the work connects to something you believe matters. But no amount of compensation, status, or comfort can sustain you in work that feels meaningless. Your colleagues may not understand this. They're not wired to need meaning as a basic operating requirement. You are.

Champions gravitate toward domains where understanding people is the core skill: counseling, psychology, writing, teaching, social work, ministry, strategic HR, organizational development. You're drawn to these not because you want to "help people" in the generic sense — you're drawn because they let your Ni-Fe architecture do what it was built for: see deeply into human nature and use that sight to create change. When the work matches your wiring, it doesn't feel like work. It feels like purpose.

**The Career Trap**

Your specific career trap is martyrdom disguised as mission. Because you need meaning, you'll tolerate working conditions that would send other types running — toxic leadership, inadequate resources, emotional labor far beyond your job description. You tell yourself the mission justifies the sacrifice. Your pattern recognition generates a compelling narrative about how you're the only one who really understands what's needed, and your feeling function makes you feel guilty about leaving the people who depend on you.

Meanwhile, you're burning out. Not the dramatic, visible kind — the slow, quiet erosion where you stop writing, stop dreaming, stop feeling like yourself. By the time you notice, you've given the best of your energy to an organization that would replace you in two weeks. Check: if you're running on purpose but running on empty, the mission isn't being served by your depletion. It's being harmed by it.

**Leadership Style**

You lead through vision and empathy rather than authority. People follow you because they feel understood and because your vision resonates, not because you've pulled rank. Your leadership is most effective in small-to-medium settings where you can maintain genuine connection with the people you lead — large organizations with heavy bureaucracy and political maneuvering drain you faster than almost any other environment.

Your blind spot as a leader: you may avoid the hard conversations. Firing someone, delivering critical feedback, enforcing an unpopular decision — these require acting against your feeling function's drive toward harmony. Champions who become effective leaders learn to reframe hard conversations as acts of care rather than acts of harm. The difficult feedback you're withholding isn't protecting anyone — it's depriving them of information they need to grow.

**Ideal Environment Details**

You need a role with autonomy over your emotional labor. Environments that require constant surface-level interaction — open offices, high-volume client work, constant meetings — deplete you not because you're antisocial but because each interaction costs your feeling function processing power. The ideal setup gives you blocks of deep, focused work interspersed with meaningful one-on-one interactions. Quality over quantity, depth over breadth.

You also need to believe in what you're building. This isn't a preference — it's a prerequisite. Champions in roles that conflict with their values don't just underperform; they get physically sick. Headaches, insomnia, mysterious fatigue — your body processes the misalignment that your mind is trying to rationalize away.

**Flow Triggers and Career Satisfaction**

Your flow state is triggered by work that engages both your pattern recognition and your feeling function simultaneously: writing that synthesizes complex human experience, counseling sessions where you can feel the shift happening in the other person, strategic work that will genuinely improve people's lives. The flow is deep and the output is high — Champions in flow can produce work of startling insight and beauty.

Warning signs a role isn't right: you've stopped caring about the people your work serves. Your writing or creative output has dried up. You're spending more energy managing office politics than doing meaningful work. You fantasize about walking away but can't because your feeling function has bonded you to the people (not the mission — the people). Distinguish between loyalty to the work and codependency with the workplace.`,

  cognitivePortraitDescriptions: [
    "You process the world internally before engaging with it, but your internal processing is focused on people — their patterns, motivations, and trajectories. Solitude restores you because it's the only time your feeling function isn't actively reading the room.",
    "You instinctively look past what people say to what they mean, past what's happening to what's coming. You trust your deep read of a situation over its surface presentation. This makes you remarkably perceptive — and occasionally frustrating to people who wish you'd take things at face value.",
    "You evaluate decisions through their impact on people and alignment with your values. 'Is this right?' and 'Who does this affect?' come before 'Is this efficient?' This isn't soft-headedness — it's a different data set, and it catches things pure logic misses.",
    "You prefer things resolved, harmonized, and moving toward the vision you hold. Open-ended interpersonal tension drains you. You naturally work to create closure and alignment — not because you're controlling, but because unresolved dissonance registers in your body as physical discomfort.",
  ],

  cognitiveStackDescriptions: [
    "Your lead function — Introverted Intuition — runs constantly in the background, synthesizing patterns across everything you observe. It converges on insights about people, situations, and trajectories that arrive feeling certain before you can explain how you got there. It's why you 'just know' your friend is about to make a terrible decision weeks before anyone else sees it coming.",
    "Your secondary function — Extraverted Feeling — reads emotional environments with startling precision. It tracks group dynamics, senses unspoken tension, and instinctively adjusts your behavior to create harmony. This is the function that makes people feel deeply understood in your presence — and the one that exhausts you when you can't turn it off.",
    "Your third function — Introverted Thinking — is developing but not yet fully trusted. It gives you growing analytical precision — the ability to build logical frameworks, spot inconsistencies, and articulate your insights in structured ways. It matures significantly through your thirties and gives your intuitive hits the structural backbone they need to be communicated and defended.",
    "Your fourth function — Extraverted Sensing — connects you to the physical present: your body, your environment, sensory experience. This is your genuine blind spot. Under normal conditions, you live in your head and underweight physical signals. Under extreme stress, it erupts — sudden impulsive behavior, sensory overindulgence, or hyperfocus on your physical environment in ways that feel foreign.",
  ],

  cognitiveStackExplanation: `Your cognitive stack — the sequence of mental tools your mind prefers — gives you an architecture that explains not just your strengths but why your blind spots take the specific shape they do. This isn't abstract personality theory; it's a map of how your mind actually works.

**Your Lead Function: Introverted Intuition (Ni) — The Deep Knowing**

This is your primary lens, always running, always synthesizing. It takes in information from everywhere — conversations, body language, emotional undertones, patterns across time — and distills it into convergent insights about what's really going on and what's likely coming next. The output arrives as a sudden knowing: you see where a relationship is heading, where a person's choices are taking them, what a decision will produce, long before the evidence is visible to anyone else.

In daily life, this function is what makes you the person who predicted the breakup two months early, who sensed the new hire would be a problem before their first review, who knew the friendship was over before the other person did. People experience this as psychic ability. It's not — it's pattern recognition operating on a wider data set than most people collect, processed at a depth most people don't access.

The catch with dominant Ni: it can become self-referential. When it's healthy, it's constantly taking in new data and updating its models. When it's stressed or isolated, it runs on old data and generates increasingly elaborate interpretations that confirm what it already believes. You'll recognize this state: you become certain about someone's motives without checking, certain about a trajectory without new evidence. That's not insight — that's a closed loop wearing insight's clothing.

**Your Secondary Function: Extraverted Feeling (Fe) — The Emotional Radar**

This is how you interface with the social world. Where your pattern recognition sees the deep pattern, your feeling function reads the emotional surface in real time: who's anxious, who's pretending to be fine, where the tension sits, what the group needs to function. It does this automatically, the way your ears hear sound — not because you choose to listen but because the apparatus is always on.

This function also shapes your social behavior. You instinctively adjust your tone, energy, and approach to match what the other person or the group needs. With a grieving friend, you're soft and present. With an anxious colleague, you're calm and reassuring. In a tense meeting, you're the one who says the thing that releases the pressure. This isn't people-pleasing in the insecure sense — it's your social cognition doing what it was designed for: creating conditions where humans can connect and function.

The cost is that this function makes you responsible for emotional atmospheres you didn't create. You walk into a room and your Fe immediately starts managing the emotional temperature. Over time, this creates a pattern where you take on responsibility for other people's emotional states — not because you should, but because your cognitive system processes their emotions as problems to solve.

**Your Third Function: Introverted Thinking (Ti) — The Developing Framework**

This is your developing function — present but not yet fully trusted. It gives you an internal logic system that builds frameworks, spots inconsistencies, and seeks precision. In your twenties, it shows up as a nagging sense that your intuitive hits need more structure to be communicated effectively. By your thirties, it starts providing that structure — you become better at explaining why you know what you know, not just that you know it.

This function is the key growth edge for Champions in their thirties and forties. As it develops, your insights gain analytical backbone. You can articulate the pattern your Ni sees, defend it against criticism, and distinguish between genuine intuitive hits and emotional projections. Without Ti development, you risk becoming the person who 'just has a feeling' about everything but can never explain their reasoning. With it, you become genuinely formidable — someone whose insights are both deep and defensible.

In relationships, developing Ti helps you distinguish between emotions you've absorbed from others (Fe data) and emotions that are genuinely yours. It provides the analytical distance to ask 'is this my sadness or theirs?' — a question that sounds simple but is genuinely difficult for your type without developed Ti.

**Your Fourth Function: Extraverted Sensing (Se) — The Blind Spot**

This connects you to the physical, present-moment world — your body, your environment, sensory experience. It's the function you trust least and develop last. Under normal conditions, you simply underweight physical data: you forget to eat, don't notice you're exhausted until you collapse, and miss concrete details that are obvious to more sensorily-oriented types.

Under extreme stress, this function erupts in uncharacteristic ways: binge eating, impulsive spending, sudden fixation on your physical appearance, or overindulging in sensory experiences as a way to escape the relentless processing of your upper functions. If you've found yourself on a 1am shopping binge or eating until you're sick after an emotionally intense week, that's Se taking over when Ni and Fe have been overwhelmed.

Developing this function means building a relationship with the present moment and your physical body. Not becoming an adrenaline junkie — that's not your path. Rather, learning to notice physical sensations as data (hunger, fatigue, tension), to enjoy sensory experience without needing it to be meaningful, and to ground yourself in your body when your upper functions start spiraling. Physical exercise, time in nature, cooking, and any practice that anchors you in the here-and-now are Se development activities.

**How the Stack Works Together**

When all four functions are working in concert, you're at your peak: Ni sees the deep pattern, Fe reads the emotional landscape, Ti provides analytical structure, and Se keeps you grounded in present physical reality. This is the integrated Champion — insightful, empathetic, articulate, and present. It's the version of you that can sit with a person in pain and offer both understanding and clear-eyed guidance, without losing yourself in the process.

The most common dysfunction is a loop between Ni and Ti that bypasses Fe: you retreat into your head, building increasingly elaborate internal models of what other people think and feel without actually checking with them. The models feel precise and certain — but they're running on cached emotional data rather than live input. The other common dysfunction is a Ni-Fe loop that bypasses Ti: you absorb everyone's emotions, generate intuitive insights about them, and act on those insights without the analytical distance to question whether your read is accurate. Both loops break the same way — by engaging the function you're skipping.`,

  emotionalLandscape: `Your emotional life is simultaneously your greatest gift and your most persistent source of confusion. The confusion isn't that you don't feel — it's that you feel everything, and not all of it is yours.

Your feeling function operates externally: it reads the emotional state of your environment and processes that data as if it were your own experience. This means your baseline emotional state is heavily influenced by whoever you spent time with today. After an hour with an anxious friend, you're anxious. After a meeting with a frustrated team, you're frustrated. After a day of absorbing the ambient emotional radiation of a busy workplace, you're exhausted in ways that have nothing to do with your actual workload.

**Emotional Processing**

Your emotions process on a different timeline than the events that trigger them. Something happens — a loss, a betrayal, an unexpected kindness — and your pattern recognition immediately begins modeling it: what does this mean, what caused it, what comes next. Your feeling function reads the social implications: who else is affected, what do they need, how should you respond. You may appear to handle the situation with remarkable composure.

The actual emotional processing happens later. Hours later. Days later. You'll be doing something mundane — washing dishes, driving, trying to fall asleep — and the wave arrives. The intensity will be disproportionate to the moment because it was never about the moment. It's the emotion your system deferred while it was busy understanding and managing the situation in real time.

**The Empathy Tax**

There's a cost to seeing people as clearly as you do. You can't un-see the pain behind someone's smile. You can't un-know that your friend's cheerful social media presence masks a crumbling marriage. You carry other people's stories in your body — not as abstract knowledge but as felt experience. This is the empathy tax, and it's non-negotiable for your type.

What is negotiable is the interest rate. Champions who don't manage their empathy pay compound interest: the emotions accumulate, the boundaries blur, and eventually they can't locate their own emotional center underneath everyone else's feelings. Champions who learn to metabolize absorbed emotions — to process and release them rather than storing them — pay the base tax without the compounding.

**Anger**

Anger is your most complicated emotion because your feeling function codes it as socially dangerous. Expressing anger disrupts harmony, risks rejection, and forces confrontation — everything your Fe is wired to avoid. So anger goes underground. It becomes passive withdrawal, subtle resentment, self-directed frustration, or somatic symptoms (headaches, jaw tension, stomach problems).

When anger does finally surface, it tends to arrive all at once, carrying months of accumulated charge. The result can be disproportionate to the triggering event — which reinforces your belief that your anger is dangerous and needs to be controlled, which pushes it underground again. Breaking this cycle requires learning that expressed anger at appropriate scale is not dangerous — it's information. 'I'm angry about this' is a complete sentence. It doesn't require justification, and it doesn't require someone else to fix it.

**Joy and Connection**

Your deepest joy comes from moments of genuine understanding — being truly seen by another person, or seeing them so clearly that the connection feels almost sacred. These moments are rare and they sustain you. A single hour of real connection can fuel you for weeks. Conversely, extended periods without deep connection create a specific kind of hunger that no amount of social activity can satisfy. You can be surrounded by people and starving.

You also experience a particular kind of joy when your pattern recognition and feeling function align on creative expression — writing, art, music, or any medium that allows you to externalize the complex inner world you carry. The output often surprises you with its depth, because the creative process accesses layers of understanding that your conscious mind hadn't organized yet.

**Stress Response Stages**

Your stress response follows a predictable three-stage pattern:

*Stage one — Over-giving:* You respond to stress by increasing your emotional labor. You become more attentive, more accommodating, more focused on managing everyone else's experience. This looks like coping. It's actually accelerating the drain. People around you may not notice you're stressed because your stress response is to become a better caretaker.

*Stage two — Withdrawal:* When over-giving depletes your reserves, you retreat. Suddenly and completely. You cancel plans, stop responding to messages, and disappear into solitude. The people in your life experience whiplash — you went from deeply present to completely absent. This isn't cruelty. It's your system entering emergency conservation mode.

*Stage three — Sensory grip:* In prolonged stress, your least developed function takes over. Impulsive behavior, sensory overindulgence, physical recklessness. You might binge-watch for 14 hours, eat compulsively, or make impulsive purchases. It feels completely unlike you — and it is. It's the part of your cognition you normally suppress, emerging because everything above it has been exhausted.

**Recovery**

What helps: genuine solitude (not isolation — solitude chosen, not imposed). One deeply honest conversation with someone who can hold space without trying to fix. Creative expression — writing, especially, because it externalizes the emotional buildup your system is struggling to contain. Physical movement that's gentle rather than aggressive — walking, yoga, swimming — because your body is carrying stress your mind hasn't fully processed. What doesn't help: more people, more emotional labor, or anyone who responds to your vulnerability with advice.`,

  growthPath: `Champion development follows a specific arc that maps to your cognitive function stack. Understanding where you are in this arc — and what comes next — helps you stop pathologizing natural developmental transitions.

**Teens and Twenties: Learning to See**

In your teens and twenties, you're primarily developing your first two functions — pattern recognition and emotional awareness. This is where your perceptive gifts get established and where you first discover the disorienting experience of understanding people better than they understand themselves. You were probably the teenager who played therapist to your friend group, who absorbed family conflict like a sponge, who knew things about the people around you that you couldn't explain and didn't ask for.

This period is often deeply confusing because your perceptive gifts outpace your emotional infrastructure. You see too much but don't yet have the frameworks to process what you see or the boundaries to protect yourself from it. You may develop coping strategies that become problematic later: people-pleasing to manage others' emotional states, withdrawal to manage your own, perfectionism as an attempt to bridge the gap between your vision and reality.

During this phase, many Champions develop an identity around being the person who understands — the listener, the counselor, the one who holds space. This role feels natural because it is natural for your type. But it's setting up a pattern that will need to be challenged later: the habit of defining yourself through your usefulness to others.

**Late Twenties to Mid-Thirties: Learning to Think**

The critical transition: your developing analytical function (Ti) begins demanding attention. This is when 'I just feel it' starts to be insufficient, and 'I can explain exactly why' begins emerging. You may find yourself drawn to frameworks, theories, and structured ways of understanding what you've previously processed purely through intuition and empathy.

This phase often involves a painful but necessary disillusionment. Your pattern recognition has been generating insights about people for years, and your feeling function has been accepting those insights uncritically because they feel true. Now your developing analytical mind starts asking: are all those insights accurate? Were some of them emotional projections rather than genuine reads? Did you sometimes 'see' what you feared rather than what was real?

Champions who resist this transition stay trapped in the belief that their intuitive-emotional reads are infallible. Champions who lean into it develop something far more powerful: insight that has been stress-tested by their own analytical scrutiny. Your intuition becomes sharper, not because it changes but because your Ti learns to distinguish signal from noise, genuine insight from emotional projection.

This phase also brings the development of personal boundaries — a concept that may have felt selfish to your younger self. Your analytical function provides the framework to understand that unlimited empathy isn't generosity; it's unsustainable. That saying 'no' to someone else's emotional needs is sometimes the highest form of integrity. That you can understand someone's pain without carrying it.

**Forties and Beyond: Learning to Be Present**

The later development edge is integrating your sensory awareness — the function you've neglected longest. For Champions, this isn't about becoming physically adventurous. It's about developing a relationship with the present moment that doesn't require it to be meaningful.

Your upper functions are meaning-making machines. Everything gets interpreted, everything gets connected, everything signifies. The development of your sensory function introduces a radical possibility: some moments just are. The sunset doesn't have to symbolize anything. The meal doesn't have to be mindful. The walk doesn't have to produce insights. You can simply experience physical reality without processing it through your pattern recognition and emotional radar.

For many Champions, this is the most liberating developmental shift of their lives. After decades of relentless meaning-making and emotional processing, the discovery that they can simply exist in a moment — enjoying a taste, feeling warm sunlight, listening to music without analyzing it — feels like setting down a weight they didn't know they were carrying.

This phase also brings greater physical self-awareness. You learn to read your body's signals before they become crises — to notice fatigue before collapse, hunger before irritability, tension before migraines. This sounds basic, but for a type that has spent decades living primarily in their intuitive-emotional world, it's genuinely transformative.

**The Integrated Champion**

The most evolved version of your type doesn't lose its depth. It adds ground to it. The integrated Champion can see the deep pattern (Ni), read and manage emotional dynamics (Fe), analyze and articulate their insights with precision (Ti), and stay rooted in the physical present (Se). This is the therapist who transforms lives, the writer who captures truths others can't articulate, the leader whose vision is both inspiring and grounded.

These are the people who can sit with someone's deepest pain without absorbing it, who can see through pretense without weaponizing what they see, who can hold their vision of how things should be while fully accepting how things are. You don't become this person by amplifying what you're already good at. You become this person by developing the tools you've been neglecting.`,

  toolkit: [
    {
      title: "The Absorption Check",
      context:
        "After any emotionally dense interaction — a heavy conversation, a tense meeting, time with a struggling friend — when you notice your mood has shifted but can't point to a personal reason",
      action:
        "Pause for two minutes alone. Ask: 'What was I feeling before that interaction? What am I feeling now?' The gap is what you absorbed. Name it aloud: 'I picked up anxiety from that conversation. It's not mine.' Then physically discharge it — shake your hands, take a brisk walk around the block, splash cold water on your face. Your system needs a physical reset signal to release emotions that entered through your social-emotional radar rather than your own experience.",
    },
    {
      title: "The Small No",
      context:
        "When someone asks you for emotional labor and you notice your body contracting — the sinking feeling that you're about to say yes when you mean no, because their need feels more legitimate than your boundary",
      action:
        "Say: 'I care about this, and I can't give it the attention it deserves right now.' You don't need to explain further. Your feeling function will generate guilt — let it. Guilt is your Fe's alarm signal that social harmony has been disrupted. It doesn't mean you've done something wrong. It means you've done something unfamiliar. Practice this with low-stakes requests first. The muscle builds slowly, but it builds.",
    },
    {
      title: "The Ledger Share",
      context:
        "When you notice resentment building toward someone you care about — the early warning sign of a future Doorslam — and you've been cataloguing grievances internally without sharing them",
      action:
        "Pick the smallest, most recent item on the internal ledger. Not the oldest or the biggest — the smallest. Share it: 'When you did X, it bothered me.' That's all. Don't explain the full pattern you've identified. Don't present the accumulated evidence. Just name the one small thing. This breaks the silence-to-explosion cycle by introducing a new behavior: ongoing, low-dose honesty instead of accumulated-to-detonation honesty.",
    },
    {
      title: "The Vision Reality Check",
      context:
        "When you feel the gap between your vision of how something should be and how it actually is — in a relationship, a project, your own life — and the gap is generating despair rather than motivation",
      action:
        "Write down your vision in specific terms. Below it, write the current reality in equally specific terms. Then circle everything in the current reality that is genuinely good — not perfect, but good. Your pattern recognition naturally focuses on the gap. This exercise forces it to also register what's working. The goal isn't to lower your standards. It's to add a second data set — actual present goodness — to the one your Ni naturally supplies: the distance between here and ideal.",
    },
    {
      title: "The Body Check-In",
      context:
        "Three times daily — morning, midday, evening — to build the sensory awareness your fourth function underserves, especially during periods of high emotional processing",
      action:
        "Set three alarms. When each one sounds, stop for sixty seconds. Scan: Where is there tension? Am I hungry? Am I tired? When did I last move? Answer these before returning to whatever you were doing. This isn't mindfulness as a spiritual practice — it's reconnaissance. Your body is collecting data your mind is ignoring. These check-ins build the habit of treating physical signals as legitimate information, not noise to be overridden by more 'important' emotional or intuitive processing.",
    },
    {
      title: "The Solitude Prescription",
      context:
        "When your social battery is depleted and you're starting to resent the people you love — the point where further interaction will cost more than it gives",
      action:
        "Tell the people who need to know: 'I need a few hours alone. It's not about you — I'm full.' Then take the time without guilt and without productive intent. Not reading about psychology. Not journaling about relationships. Not processing. Just existing: a walk, a bath, music, staring at the ceiling. Your system needs time where it's not reading anyone, not managing anything, not synthesizing. Emptiness isn't laziness for your type. It's maintenance.",
    },
  ],

  compatibilityNotes: {
    INTJ:
      "You share dominant Ni — the same deep pattern recognition — but they pair it with external logic where you pair it with emotional awareness. Conversations feel like meeting someone who operates at your depth but from a completely different angle. They see the system; you see the people in it. Together, you cover the full map. Tension: their directness can land as coldness, and your need for emotional validation may frustrate their logic-first orientation.",
    INTP:
      "Their internal logic-building paired with your emotional radar creates surprisingly rich exchanges. They articulate structures for things you've only felt, and you illuminate the human dimensions of problems they've been solving abstractly. Tension: both of you are conflict-averse in different ways — they withdraw into logic, you withdraw into silence — which means issues can go unaddressed for far too long.",
    ENTJ:
      "Their commanding energy and strategic drive can feel both exciting and exhausting. They push visions into reality faster than you would on your own, and they respect your depth of perception. Tension: they may bulldoze through emotional nuance you consider essential, and your need for processing time can read as indecisiveness to their action-oriented style.",
    ENTP:
      "Their rapid-fire idea generation pulls you out of your internal world in ways that feel energizing rather than draining. They challenge your conclusions with irreverence that sidesteps your defenses. Intellectually stimulating. Tension: their emotional detachment and resistance to commitment can leave your Fe feeling unanchored. You want depth; they want breadth.",
    INFP:
      "A deep values resonance — you both care about meaning and authenticity at a level most people find exhausting. They understand your inner world intuitively. Tension: both of you may avoid hard conversations to preserve the felt sense of harmony, creating a beautiful but fragile connection that can't weather conflict because neither of you will initiate it.",
    ENFP:
      "Their warmth and creative energy draws you out of isolation. They see possibilities where you see patterns, and the combination generates insights neither of you would reach alone. They match your depth in unexpected ways. Tension: their need for variety can trigger your abandonment patterns, and your need for closure can feel constraining to their exploratory nature.",
    ENFJ:
      "You share Fe — the same emotional radar — which creates an instant sense of being understood. They're the extraverted version of your social cognition, and their natural leadership takes pressure off your need to manage group dynamics. Tension: two Fe-dominant stacks in one relationship can create a feedback loop of mutual accommodation where neither person's actual needs get voiced.",
    ISFJ:
      "Their steadfast loyalty and attention to concrete care grounds you in ways your abstract processing needs. They show love through reliable, tangible acts. Tension: your Ni leaps and abstract communication style can leave them feeling unmoored, and their preference for tradition and precedent can feel limiting to your future-oriented vision.",
    ISTP:
      "Opposites in many ways — their hands-on, present-moment logic contrasts sharply with your abstract, future-oriented empathy. But they bring a groundedness and practical competence that you find quietly attractive. Tension: emotional conversations may feel like pulling teeth. They process through doing; you process through feeling. Bridging these styles takes deliberate effort from both sides.",
    ESTP:
      "They live in the physical present you underweight — action-oriented, spontaneous, and refreshingly unburdened by the emotional complexity you carry. Being around them can feel like a vacation from your own mind. Tension: they may experience your depth as heaviness, and you may experience their surface-level processing as dismissiveness. The cognitive gap is real and requires mutual patience.",
  },

  compatibilitySnapshot: {
    naturalAllies: [
      {
        code: "INTJ",
        name: "The Mastermind",
        reason:
          "Shared Ni depth creates rare mutual understanding. They bring strategic logic that structures your insights; you bring emotional awareness that humanizes their systems. Conversations feel like thinking at the same altitude.",
      },
      {
        code: "ENFP",
        name: "The Inspirer",
        reason:
          "Their warmth and creative energy draws you out while matching your depth in unexpected ways. The classic INFJ-ENFP connection — they see possibilities, you see patterns, and together you cover dimensions neither reaches alone.",
      },
      {
        code: "ENFJ",
        name: "The Hero",
        reason:
          "Shared Fe creates an instant sense of being emotionally understood. Their natural extraverted leadership complements your quieter behind-the-scenes influence. You both speak the same emotional language.",
      },
    ],
    growthPartners: [
      {
        code: "INTP",
        name: "The Philosopher",
        reason:
          "Their internal logic system gives structure to your intuitive insights, helping you articulate what you've always felt but couldn't explain. They force you to develop Ti — your growth function.",
      },
      {
        code: "ISTP",
        name: "The Master",
        reason:
          "Their present-moment, hands-on orientation grounds you in the physical reality your stack underweights. Uncomfortable but deeply developmental — they model the Se integration you need.",
      },
      {
        code: "INFP",
        name: "The Harmonizer",
        reason:
          "Deep values resonance creates a safe space for mutual vulnerability. They model healthy Fi (internal feeling) — staying true to personal values even when it disrupts harmony — which challenges your Fe tendency to accommodate.",
      },
    ],
    challengingPairs: [
      {
        code: "ESTP",
        name: "The Dynamo",
        reason:
          "Opposite cognitive architecture — their action-first, sense-now, think-later approach clashes with your reflect-first, intuit-deeply, feel-everything orientation at nearly every level.",
      },
      {
        code: "ESTJ",
        name: "The Governor",
        reason:
          "Their emphasis on rules, precedent, and hierarchical authority conflicts with your emphasis on meaning, possibility, and emotional truth. You find their rigidity stifling; they find your abstraction impractical.",
      },
      {
        code: "ESFP",
        name: "The Muse",
        reason:
          "They lead with the function you've buried deepest — present-moment sensory experience — and underweight the functions you lead with. The gap can feel unbridgeable without significant mutual effort and patience.",
      },
    ],
  },

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Over-Giving",
        description:
          "You respond to stress by increasing your emotional labor — becoming more attentive, more accommodating, more focused on managing everyone else's experience. This looks like coping to others. It's actually accelerating the drain.",
      },
      {
        stage: 2,
        label: "Withdrawal",
        description:
          "When over-giving depletes your reserves, you retreat suddenly and completely. You cancel plans, stop responding, and disappear into solitude. The people around you experience whiplash — you went from deeply present to completely absent.",
      },
      {
        stage: 3,
        label: "Sensory Grip",
        description:
          "In prolonged stress, your least developed function takes over. Impulsive behavior, sensory overindulgence, or physical recklessness — binge-watching, compulsive eating, reckless spending. It feels completely unlike you because it's the part of your cognition you normally suppress.",
      },
    ],
    stressRecovery:
      "What actually helps: genuine chosen solitude (not isolation imposed by guilt). One deeply honest conversation with someone who can hold space without trying to fix. Creative expression — especially writing — to externalize what your system is struggling to contain. Gentle physical movement. What doesn't help: more people, more emotional labor, advice-giving, or anyone who responds to your pain with 'have you tried thinking positive?'",
    flowTriggers: [
      "Deep one-on-one conversation with someone who matches your depth",
      "Writing or creative work that externalizes internal complexity",
      "Meaningful work where you can see your impact on real people",
      "Quiet environment with minimal social interruption",
      "A problem that engages both your pattern recognition and empathy",
      "The moment when someone you've been helping has their breakthrough",
    ],
    flowDescription:
      "Your flow state is characterized by deep immersion where your pattern recognition and emotional awareness merge into a single stream. Time dissolves. You may write for hours, hold a transformative conversation, or produce creative work of startling insight. This is Ni and Fe in full alignment — seeing and feeling simultaneously. The output is often your best and most authentic work. The risk: you'll give everything in flow and have nothing left for yourself.",
  },

  careerAlignment: {
    naturalFits: [
      "Counseling and psychotherapy",
      "Writing and editing",
      "Psychology and research",
      "Social work and advocacy",
      "Organizational development",
      "Strategic HR and people operations",
      "Ministry and spiritual direction",
      "Creative arts with social impact",
    ],
    likelyDrains: [
      "High-volume sales or customer service",
      "Competitive corporate politics",
      "Purely technical roles with no human element",
      "Fast-paced environments requiring constant surface interaction",
      "Bureaucratic roles with no connection to mission",
    ],
    careerWarning:
      "Champions are prone to martyrdom disguised as mission. Your need for meaning makes you tolerate toxic working conditions that would send other types running. Check: if you're running on purpose but running on empty, the mission isn't being served by your depletion. It's being harmed by it.",
  },

  growthPathStructured: {
    intro:
      "Growth for The Champion isn't about becoming less perceptive or less empathetic. It's about building the infrastructure — analytical and physical — that lets your gifts operate without destroying you.",
    areas: [
      {
        title: "Build Your Analytical Backbone",
        description:
          "Your third function — internal logic — gives your intuitive hits structural support. Practice: when you have a strong read on a person or situation, pause and ask 'what specific evidence supports this?' If you can't point to concrete data, hold the insight loosely. This isn't doubting your intuition — it's giving it the quality control it deserves. Insights that survive analytical scrutiny become sharper, not weaker.",
      },
      {
        title: "Develop Emotional Boundaries",
        description:
          "Your feeling function reads the room automatically — but it doesn't have to carry the room. Practice: after emotionally intense interactions, name what you absorbed and release it. 'That anxiety isn't mine.' Build the membrane between perceiving an emotion and merging with it. You can understand someone's pain without metabolizing it as your own.",
      },
      {
        title: "Ground in Your Body",
        description:
          "Your fourth function — sensory awareness — is your least developed tool and your most powerful grounding mechanism. Practice: build small, consistent physical routines that anchor you in the present — exercise, cooking, time in nature. Not as spiritual practice or meaning-making. Just as being. Your system needs regular intervals where it isn't reading, interpreting, or processing anyone.",
      },
    ],
  },
};
