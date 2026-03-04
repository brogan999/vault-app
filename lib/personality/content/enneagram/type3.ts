import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_3: EnneagramTypeContent = {
  typeNumber: 3,
  name: "The Achiever",
  shortName: "Achiever",
  tagline: "Becomes whatever wins — then forgets who they were before",
  color: "#C7A356",
  center: "heart",

  coreFear: "Being worthless or without inherent value apart from your achievements — that underneath the résumé and the accolades, there's nothing there",
  coreDesire: "To feel valuable and worthwhile — not for what you do, but for who you are (though you keep trying to get there by doing more)",
  coreMotivation: "To be outstanding, to distinguish yourself from others, to be admired and affirmed, to impress others with your achievements, to stay constantly in motion so the question of who you really are never catches up",
  defensePattern: "Identification — merging your identity with your accomplishments, roles, and projected image. You don't just pursue success; you become it. The mask fits so well you forget it's a mask.",

  overview: `You learned early that love and attention flow toward performance. Not toward who you are — toward what you deliver. The kid who brought home the A, who scored the goal, who made the adults proud: that kid got seen. So you became extraordinarily good at reading what any room values and then becoming that thing. Not faking it — actually becoming it. This is the Three's particular genius and particular curse: you don't just wear masks, you metabolize them.

Your operating system is built around efficiency and image. You scan every environment for the success criteria — what does winning look like here? — and then you reorganize yourself to hit those targets with minimum friction. In a boardroom, you're polished and strategic. At a dinner party, you're charming and self-deprecating. With creative types, you're visionary and unconventional. None of these are lies, exactly. They're all real parts of you. The problem is that you've lost track of which parts exist because you chose them and which parts exist because they tested well.

The feeling you avoid most is the one that arrives in quiet moments: the suspicion that without your achievements, roles, and forward momentum, you might be nobody. That the self underneath all the performance is either empty or so unfamiliar that meeting it would be like meeting a stranger. This is why you rarely slow down. Busyness isn't just productive — it's protective. As long as you're achieving, you don't have to confront the terrifying possibility that your value might not depend on achievement at all.

The most integrated Threes discover something that initially feels like a paradox: they become more successful when they stop performing. When they let people see the real person — uncertain, feeling, sometimes inefficient — they access a kind of presence and charisma that no amount of polishing can manufacture. The gold was never in the trophy case. It was in the person they kept hidden behind it.`,

  descriptionInsight: "Your adaptability isn't a character flaw — it's a sophisticated social intelligence that reads environments with remarkable precision. The growth edge is learning to use that intelligence in service of authenticity rather than image, letting people see who you are instead of only what you can do.",

  strengths: [
    {
      title: "Adaptive Intelligence",
      description: "You read rooms the way athletes read defenses — instantly, intuitively, and with the ability to adjust in real time. You know what any given audience needs to hear, what any team needs to see, and how to position yourself for maximum impact. This isn't manipulation. It's a form of social genius that makes you extraordinarily effective in any context.",
      deepDive: "Your adaptability runs deeper than most people realize. It's not just code-switching or social polish — it's a full reorganization of your presentation, energy, and even your internal experience to match what the moment requires. In a crisis, you genuinely feel calm and capable. In a creative brainstorm, you genuinely feel inspired. The feeling is real in the moment; what's missing is the continuity between moments. You become so good at matching the environment that the question 'but what do I want when no one is watching?' can genuinely stump you. The growth move isn't to stop adapting — that would be like asking a fish to stop swimming. It's to develop an anchor point, a core self that persists across all your adaptations, so that flexibility becomes a choice rather than an automatic response.",
    },
    {
      title: "Goal Execution",
      description: "When you decide something will happen, it happens. You break abstract visions into concrete steps, identify the critical path, and execute with a focus that others find almost uncanny. You don't just set goals — you engineer outcomes. Obstacles that stop other people are just logistics problems to you.",
      deepDive: "Your execution ability comes from a unique relationship with obstacles: you genuinely don't experience them the way other types do. Where a Six sees risk, a Four sees emotional complexity, and a Nine sees overwhelming effort, you see a gap between current state and target state — and your brain immediately starts generating pathways to close it. This makes you the person everyone wants on their team when something actually needs to get done. The shadow side is that you can become so focused on the target that you bulldoze through people, skip important emotional processing, and reach the summit only to realize you climbed the wrong mountain. The goals you're executing may not be your own — they may be whatever your environment told you success looks like.",
    },
    {
      title: "Motivational Presence",
      description: "You energize the people around you. Your confidence isn't just felt internally — it radiates. When you walk into a room believing something is possible, other people start believing it too. You have a natural ability to cast vision, build enthusiasm, and make people feel like they're part of something that matters.",
      deepDive: "This quality is more than charisma — it's a kind of emotional leadership that operates through embodiment rather than argument. You don't convince people by explaining why they should be motivated. You motivate them by being motivated, and your energy is contagious. This is why Threes often end up in leadership positions even when they don't seek them: people gravitate toward their certainty and competence. The growth edge here is learning to motivate with vulnerability as well as confidence. The most powerful version of this gift isn't the Three who inspires by being impressive — it's the Three who inspires by being honest about their own struggles while continuing to move forward anyway.",
    },
    {
      title: "Pragmatic Efficiency",
      description: "You have an instinct for the shortest distance between two points. Where others deliberate, research endlessly, or get lost in process, you identify what actually matters and cut everything else. You're the person who turns a two-hour meeting into a twenty-minute decision.",
    },
    {
      title: "Recovery Speed",
      description: "You bounce back from failure faster than almost any other type. A setback that would sideline others for weeks is something you metabolize and learn from in days. It's not that you don't feel defeat — it's that your system is wired to convert pain into fuel rather than letting it become an identity.",
    },
  ],

  growthEdges: [
    {
      title: "The Deceit Pattern",
      teaser: "You present a carefully constructed image as your authentic self — and you've done it so long that you can't always tell the difference. The person the world sees may be a performance you forgot you were giving.",
      fullExplanation: "Deceit is the Three's core passion, and it's crucial to understand that this isn't the deceit of a con artist. It's subtler and more tragic. You deceive yourself before you deceive anyone else. The process works like this: you read what an environment values, you shape yourself to match, and then you genuinely believe that shape is who you are. You're not lying — you've actually become the thing. The lie is that you think this is your choice rather than your programming.\n\nThis pattern starts in childhood. You learned which version of yourself got love, attention, and approval, and you optimized for that version. The other parts — the uncertain parts, the inefficient parts, the parts that didn't perform well — got pushed underground. Not repressed violently, just... deprioritized. Starved of oxygen. Over time, you lost access to them.\n\nThe breakthrough comes through what Threes find most uncomfortable: stillness without purpose. Not meditation as a productivity hack. Not journaling for clarity. Just... sitting with yourself without an agenda, without optimizing anything, and noticing what's there when you stop performing. The first few times, there may be panic or emptiness. That's not evidence that there's nothing inside. It's evidence of how long it's been since you checked.",
    },
    {
      title: "Feelings as Data, Not Obstacles",
      teaser: "You've trained yourself to bypass emotions because they slow you down. But feelings aren't inefficiencies to be optimized away — they're the navigation system that tells you whether you're heading somewhere that actually matters to you.",
      fullExplanation: "Threes have a complicated relationship with feelings. You're a heart center type, which means emotion is theoretically your home base. But you've learned to treat feelings the way a race car driver treats drag — something to be minimized for maximum speed. Sad? Push through. Angry? Channel it. Scared? Reframe it as excitement. The feeling never gets to just be a feeling. It gets converted into fuel or dismissed as friction.\n\nThis works brilliantly for productivity and terribly for self-knowledge. Feelings carry information about what you actually want, what actually matters to you, what's actually working in your life versus what just looks like it's working. When you bypass them, you lose access to this information. You can achieve extraordinary things and feel hollow at the finish line because you were optimizing for someone else's definition of success the whole time.\n\nThe practice isn't to become emotional — that would feel performative and probably would be. It's to create small pockets of non-doing where feelings have permission to surface. Not to be analyzed. Not to be acted upon. Just to be felt. You'll find that the feelings aren't as disruptive as you feared. They're actually quite informative, once you stop treating them as the enemy of efficiency.",
    },
    {
      title: "The Comparison Treadmill",
      teaser: "You instinctively measure yourself against others — who's ahead, who's behind, where you rank. This competitive scanning keeps you performing but prevents you from ever feeling like enough.",
      fullExplanation: "Your internal ranking system operates constantly, mostly below conscious awareness. In any group, you're automatically assessing: Who's the most successful here? Where do I fall? What do I need to do to move up? This isn't vanity — it's your survival system. Your psyche equates status with safety, achievement with lovability, and falling behind with existential threat.\n\nThe problem is that the treadmill never stops. Every achievement just resets the baseline. You get the promotion, and within a week you're scanning for the next one. You hit the revenue target, and the satisfaction lasts exactly until you see someone who hit a bigger one. The hedonic adaptation is brutal: nothing you achieve ever registers as enough because the metric keeps moving.\n\nBreaking this pattern doesn't mean abandoning ambition. It means learning to distinguish between goals that come from your authentic desires and goals that come from your comparison engine. Ask yourself: 'Would I still want this if no one would ever know I achieved it?' The goals that survive that question are yours. The ones that don't were always about the image, not the thing itself.",
    },
  ],

  relationshipStyle: "The Star Partner",
  relationshipPreview: "You bring energy, ambition, and a desire to build something impressive together. Your partners often describe feeling swept up in your vision and motivated by your drive. You're attentive to how the relationship looks and functions, and you invest real effort in making it work — sometimes more effort in the appearance than the substance.",
  relationshipDeepDive: `Your relationship pattern has a characteristic shape: you attract people with your confidence and competence, then struggle to let them see what's underneath. Early connection is easy for you — you're charming, attentive, and you intuitively know how to make someone feel special. But as intimacy deepens and your partner wants access to the real you — the uncertain you, the scared you, the you who doesn't have it all figured out — you hit a wall. Vulnerability feels like failure. Showing weakness feels like losing the thing that made them want you in the first place.

This creates a painful paradox: the more someone loves you, the more pressure you feel to maintain the image that attracted them. You become a performer in your own relationship, delivering the experience of a great partner rather than actually being present. Your partner senses the gap — they feel close to your competence but distant from your heart — and their complaints about emotional unavailability baffle you because you're trying so hard.

The breakthrough happens when you risk showing your partner something unpolished — a fear, a failure, a moment of genuine not-knowing — and discover that their love doesn't decrease. It often increases, because they're finally connecting with a person instead of a presentation. The Threes who build lasting intimacy learn that the thing they were most afraid to show is exactly what their partner was most hungry to see.`,

  careerHeadline: "You thrive in roles with clear metrics, visible impact, and room to rise.",
  careerDirections: [
    "Leadership and management — building and driving high-performing teams",
    "Entrepreneurship — translating vision into viable businesses",
    "Sales and business development — environments that reward results directly",
    "Marketing and brand strategy — shaping perception and positioning",
    "Consulting and coaching — helping others achieve measurable outcomes",
  ],
  careerDeepDive: `Your career superpower is execution. You don't just have ideas — you ship them. This makes you invaluable in any results-oriented environment and dangerous in environments where activity gets confused with achievement. The key career question for a Three isn't "Can I succeed here?" — you can succeed almost anywhere. It's "Is this success meaningful to me, or am I just chasing whatever target is in front of me?"

The most common Three career trap is climbing a ladder that's leaning against the wrong wall. You're so good at achieving that you can reach the top of any system — and only there, when the champagne is flat and the corner office feels hollow, do you realize you were optimizing for the wrong variables. The promotion wasn't what you wanted. The company wasn't aligned with your values. The career was someone else's dream that you adopted because it looked like winning.

The Threes who build genuinely fulfilling careers learn to pause before the next sprint and ask: "Whose definition of success am I chasing?" They choose roles that reward substance over optics, where real impact matters more than visible achievement. They also learn to build rest and reflection into their rhythm — not as productivity hacks, but as genuine stops where they can check whether the direction still makes sense.`,

  emotionalPattern: `Your relationship with emotions is paradoxical: as a heart center type, feelings are your native language — but you've become so fluent in translating them into action that the original feeling often gets lost in translation. A Three doesn't sit with sadness; they go to the gym. They don't process anger; they channel it into a project. They don't feel fear; they reframe it as a challenge to overcome.

This emotional alchemy is genuinely impressive and genuinely costly. It means you can function at a high level through circumstances that would level other people. But it also means you're making major life decisions without access to the emotional data those decisions require. You marry the person who looks right on paper. You take the job with the best title. You move to the city with the most opportunity. And none of it is wrong, exactly — it just might not be yours.

The emotional pattern underneath everything is shame — the quiet conviction that your unadorned self isn't enough. Not dramatic shame, not the kind that announces itself. A low hum that drives you to keep earning your place, keep proving your value, keep producing evidence that you deserve to be here. Everything you achieve is an argument against this shame. The argument never quite lands, because shame doesn't respond to evidence.`,

  stressTriggers: [
    "Failure — especially public failure that damages your image or credibility",
    "Forced idleness or situations where your competence is irrelevant",
    "Environments that value process over results, or being over doing",
  ],
  flowTriggers: [
    "Clear goals with measurable progress and visible outcomes",
    "Competent teams that match your pace and don't need micromanaging",
    "Environments that reward initiative and give autonomy",
    "High-stakes situations where your ability to perform under pressure shines",
  ],

  toolkit: [
    {
      title: "The Identity Check-In",
      context: "When you notice you're shape-shifting — adjusting your personality, opinions, or energy to match the room — you're in the Three's autopilot pattern. The adaptation isn't the problem; the unconsciousness is.",
      action: "Before entering any important social or professional situation, pause for 30 seconds and ask: 'What do I actually think about this? What do I actually want from this interaction?' Write the answers down. After the interaction, check: did you represent those answers, or did you become whoever the room wanted you to be?",
    },
    {
      title: "The Doing Fast",
      context: "Your identity is fused with productivity. The idea of a day where you accomplish nothing triggers real anxiety. This tells you something important about where your self-worth lives.",
      action: "Schedule one half-day per month with no goals, no tasks, no agenda, and no way to measure the time's value. Not a spa day (that's still optimizing). Not a nature walk with a podcast (that's still consuming). Just unstructured time where nothing gets accomplished. Notice what emotions surface when you can't produce your way out of them.",
    },
    {
      title: "The Failure Resume",
      context: "Threes curate their narrative, highlighting wins and editing out losses. This creates an internal story that depends on perpetual success — which makes every setback feel existential.",
      action: "Write a private document listing your ten most significant failures, rejections, and mistakes. For each one, note what you learned and what it didn't cost you (you're still here, still capable, still valued). This builds evidence that your worth survives failure — which your shame structure desperately needs to see.",
    },
    {
      title: "Feel Before You Fix",
      context: "When something goes wrong — a conflict, a disappointment, a setback — your instinct is to immediately strategize your way out of it. The feeling gets skipped entirely.",
      action: "Next time something triggers an emotional reaction, set a timer for five minutes and do nothing about it. Don't solve it, don't reframe it, don't call anyone. Just sit with the feeling and name it as precisely as you can. 'I feel embarrassed' is more useful than 'I need to fix this.' Let the feeling exist before you convert it into action.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Overdrive", description: "You accelerate — working harder, sleeping less, adding more to your plate. The logic is that if you just do enough, the stress will resolve. It doesn't. It compounds." },
      { stage: 2, label: "Image Rigidity", description: "The mask locks into place. You become more concerned with appearing successful than with actually addressing the problem. Admitting struggle feels impossible because your identity depends on being the person who handles things." },
      { stage: 3, label: "Movement to Nine", description: "Under prolonged stress, you take on Type 9 patterns: numbing out, disengaging, losing your characteristic drive. The achiever who couldn't stop goes suddenly still — bingeing TV, avoiding decisions, unable to care about goals that once consumed you." },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 6 — slowing down enough to ask 'what could go wrong,' building genuine trust with others, and letting loyalty to people replace loyalty to image.",
    flowTriggers: [
      "Clear metrics and visible progress",
      "Competent collaborators who share your pace",
      "Autonomy with accountability",
      "High-stakes moments that demand peak performance",
    ],
    flowDescription: "You enter flow when execution and purpose align — when you're performing at your best in service of something that genuinely matters to you, not just something that looks impressive.",
  },

  careerAlignment: {
    naturalFits: [
      "Leadership roles with clear metrics and growth trajectory",
      "Entrepreneurship and business building",
      "Sales, consulting, and client-facing strategy",
      "Marketing, branding, and communications",
    ],
    likelyDrains: [
      "Bureaucratic roles with slow feedback loops and invisible impact",
      "Highly collaborative environments where individual contribution is obscured",
      "Roles requiring deep solitary research with no external recognition",
    ],
    careerWarning: "Watch for the ladder problem: you can climb anything, but make sure you chose the wall. Regular check-ins with your actual values prevent you from waking up successful and empty.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 6 — the Loyalist. This means trading self-reliance for genuine trust, image for substance, and the loneliness of performance for the vulnerability of real connection and commitment.",
    areas: [
      { title: "From Image to Substance", description: "Your natural mode is to present the most impressive version of yourself. Growth means letting people see the unpolished version — and discovering that authenticity creates deeper respect than any performance ever could." },
      { title: "From Speed to Steadiness", description: "You're wired to sprint toward the next goal. Growth means developing the Six's capacity for loyalty, patience, and showing up consistently even when there's no trophy at the finish line." },
      { title: "From Self-Promotion to Service", description: "The highest expression of the Three isn't individual achievement — it's using your extraordinary capacity for execution in service of something bigger than your own success story." },
    ],
  },

  heroImage: buildHeroImagePath(3),
  sectionImages: buildSectionImages(3),
};
