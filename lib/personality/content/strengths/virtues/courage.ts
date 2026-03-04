import type { StrengthId, StrengthContent, VirtueContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "courage";

const BRAVERY: StrengthContent = {
  id: "bravery",
  label: "Bravery",
  virtue: "courage",
  description: "Acting on convictions despite fear or difficulty.",

  inAction: `Bravery as a signature strength isn't the absence of fear — it's the capacity to act in alignment with your values even when fear is present. You notice the discomfort, the risk of rejection or failure, and you move forward anyway. This shows up in speaking up when silence would be easier, taking on challenges that stretch you beyond your comfort zone, and defending what you believe when others disagree.

You likely have a history of moments where you chose the harder path: the difficult conversation, the unpopular stance, the leap into the unknown. These aren't reckless acts — they're calculated risks where you weighed the cost of inaction against the cost of action and chose integrity over comfort.`,

  atWork: `In professional settings, bravery makes you the person who raises uncomfortable truths in meetings, advocates for underdogs, and volunteers for high-stakes assignments that others avoid. You're valuable in roles requiring negotiation, change management, and ethical leadership — anywhere that demands someone willing to bear the discomfort of conflict or uncertainty.

The professional risk is that bravery without strategic timing can backfire. Speaking truth to power is essential, but so is choosing the right moment and building the relationships that make your voice heard. Raw courage can read as recklessness if it isn't paired with emotional intelligence about when and how to act.`,

  inRelationships: `Your bravery creates safety for others to be vulnerable. When you model speaking honestly about difficult topics — your needs, your fears, your boundaries — you give partners and friends permission to do the same. People trust that you won't collapse under the weight of hard conversations.

The relational challenge is that bravery can feel like aggression to people who are conflict-averse. Your willingness to "go there" may be experienced as intensity or confrontation. Learning to calibrate your directness to the other person's capacity — without abandoning your own need for honesty — is a key growth edge.`,

  overuseRisk: `When bravery is overextended, it becomes recklessness or performative risk-taking. You may seek out conflict for its own sake, confuse discomfort with growth, or dismiss legitimate caution as weakness. The shadow side is bravado: acting boldly to prove something rather than to serve a genuine value. You might also burn out from constantly operating at the edge of your comfort zone without adequate recovery.`,

  underuse: `Without developed bravery, you default to safety at the cost of authenticity. You avoid difficult conversations, swallow your opinions when they matter, and let opportunities pass because the risk felt too high. Over time, you may notice a growing gap between who you are and how you show up — a sense that you're living a smaller life than you're capable of.`,

  growthStrategies: [
    "Distinguish between fear that signals genuine danger and fear that signals growth. Practice acting despite the latter while honouring the former.",
    "Build a hierarchy of brave acts — from small (saying no to a low-stakes request) to large (having the conversation you've been avoiding). Start at the bottom and work up.",
    "Identify your values explicitly. Bravery without a moral compass is just adrenaline. Knowing what you stand for makes it easier to act when the stakes are high.",
    "Find accountability partners who will call you out when you're choosing comfort over conviction. Bravery flourishes in community.",
  ],

  toolkit: [
    "Fear Inventory: List three situations where you've avoided acting on your values in the past month. For each, name the fear and one small step you could take.",
    "Values Clarification: Write down your top three values. For each, describe one recent situation where you honoured it and one where you didn't.",
    "Micro-Bravery Practice: Each day for a week, do one thing that scares you but doesn't endanger you — a difficult question, an honest feedback, a boundary you've been avoiding.",
    "Post-Action Review: After any brave act, write what you did, what you feared, and what actually happened. Build evidence that your fears are often worse than reality.",
  ],
};

const PERSEVERANCE: StrengthContent = {
  id: "perseverance",
  label: "Perseverance",
  virtue: "courage",
  description: "Finishing what you start despite obstacles.",

  inAction: `Perseverance as a signature strength is the capacity to sustain effort toward a goal when the initial excitement has faded and obstacles have appeared. You don't quit when things get hard — you recalibrate, adjust, and keep moving. This isn't stubbornness; it's the ability to hold a long-term vision while tolerating short-term discomfort.

You likely have a track record of projects, skills, or commitments that you've seen through to completion when others would have walked away. The satisfaction you derive from finishing matters to you. You understand that meaningful achievement rarely comes from the first attempt, and you're willing to endure the middle — the boring, frustrating, uncertain phase between start and finish.`,

  atWork: `In professional settings, perseverance makes you the person who delivers on long-term projects, survives difficult seasons, and builds expertise through sustained practice. You're invaluable in roles requiring consistency — research, product development, relationship-building, and any work where results compound over time rather than appearing instantly.

The professional risk is persevering in the wrong direction. Your capacity to endure can become a liability if you're committed to a failing strategy, a toxic environment, or a role that no longer serves you. The skill isn't just persistence — it's knowing when to persist and when to pivot.`,

  inRelationships: `Your perseverance shows up in relationships as loyalty and reliability. You don't bail when things get difficult. Partners and friends know that you'll work through conflict, show up during hard times, and invest in the long game rather than chasing novelty. This creates deep trust.

The relational challenge is that perseverance can become rigidity. You may stay in relationships past their expiration date, or push for resolution when the other person needs space. Learning to distinguish between healthy commitment and stubborn attachment is essential — perseverance should serve connection, not replace discernment.`,

  overuseRisk: `When perseverance is overextended, it becomes stubbornness or martyrdom. You may continue investing in goals or relationships that have clearly run their course, confusing endurance with virtue. The shadow side is the inability to quit — you keep going not because it serves you, but because stopping would feel like failure. This can lead to burnout, resentment, and missed opportunities to redirect your energy.`,

  underuse: `Without developed perseverance, you abandon projects, relationships, and goals when the going gets tough. You may have a pattern of enthusiastic starts followed by disillusioned exits. Life feels fragmented — a series of half-finished efforts rather than completed arcs. You miss the satisfaction and competence that come from seeing things through.`,

  growthStrategies: [
    "Break long-term goals into milestones with clear completion criteria. Perseverance works best when you can see progress, not just the distant finish line.",
    "Distinguish between quitting and pivoting. Sometimes the bravest move is to stop — but do it consciously, not impulsively. Create a decision framework for when to persist versus redirect.",
    "Build recovery rituals. Perseverance depletes energy; you need practices that restore it. Identify what genuinely recharges you and protect that time.",
    "Find meaning in the process, not just the outcome. When the goal feels far away, connect to why the daily effort matters. Purpose sustains perseverance.",
  ],

  toolkit: [
    "Completion Audit: List five projects or commitments you've abandoned in the past year. For each, identify whether you quit too early or persisted too long. Notice the pattern.",
    "Milestone Mapping: Take one current long-term goal and break it into 4–6 milestones. Celebrate each completion before moving to the next.",
    "Pivot vs Persist Framework: Write down criteria for when you'll continue versus when you'll redirect. Review this before making any significant quit decision.",
    "Process Journal: For one week, track your daily progress on a challenging goal. Note what helped you persist and what tempted you to quit.",
  ],
};

const HONESTY: StrengthContent = {
  id: "honesty",
  label: "Honesty",
  virtue: "courage",
  description: "Living authentically and taking responsibility.",

  inAction: `Honesty as a signature strength goes beyond not lying — it's the commitment to living in alignment with reality, including the uncomfortable parts. You take responsibility for your actions, own your mistakes, and present yourself as you are rather than as you wish to be perceived. This creates a distinctive quality of reliability: people know that what you say matches what you believe and what you do.

You likely find it psychologically costly to maintain facades. The energy required to manage a false impression drains you. You're at your best when you can be direct about your limitations, transparent about your intentions, and accountable when you fall short. This isn't about brutal bluntness — it's about integrity between your inner experience and your outer expression.`,

  atWork: `In professional settings, honesty makes you a trusted colleague and leader. People know they'll get straight feedback from you, that you'll admit when you don't know something, and that you won't blame others for your mistakes. This is invaluable in roles requiring accountability — management, consulting, partnerships, and any context where trust is the currency.

The professional risk is that raw honesty can damage relationships if not delivered with care. Truth-telling without consideration for timing, tone, or the other person's readiness can feel like aggression. The skill is honesty that serves connection — saying what needs to be said in a way that can be heard.`,

  inRelationships: `Your honesty creates the foundation for genuine intimacy. Partners and friends know where they stand with you. There's no guessing, no decoding mixed messages, no discovering later that you'd been hiding something. This allows relationships to deepen because they're built on reality rather than performance.

The relational challenge is that honesty can feel harsh when someone needs gentleness. Your commitment to truth may override your partner's need for reassurance or your friend's need for support before critique. Learning to lead with care — to ask "does this person need truth or comfort right now?" — is a key growth area.`,

  overuseRisk: `When honesty is overextended, it becomes brutal frankness or self-righteous truth-telling. You may prioritise being right over being kind, confuse candour with virtue, and hurt people under the banner of "just being honest." The shadow side is using honesty as a weapon — unloading your unfiltered thoughts without considering their impact. You might also become so focused on external honesty that you neglect honesty with yourself about your own blind spots.`,

  underuse: `Without developed honesty, you live behind a curated version of yourself. You withhold difficult truths, minimise your mistakes, and present an image that doesn't match your reality. Relationships feel shallow because they're built on performance. You may notice a growing sense of inauthenticity — the exhausting work of maintaining a facade that doesn't quite fit.`,

  growthStrategies: [
    "Practice honest self-assessment before focusing on honesty with others. The foundation is seeing yourself clearly, including your rationalisations and evasions.",
    "Separate honesty from immediacy. You can be fully honest while choosing the right moment, context, and framing. Truth and timing are both your responsibility.",
    "Notice when you're tempted to soften or exaggerate. Track the situations where honesty feels costly — those are often your growth edges.",
    "Build a reputation for honesty that includes admitting when you're wrong. The most credible honest person is one who owns their mistakes publicly.",
  ],

  toolkit: [
    "Integrity Check: Each evening, reflect on one moment where you were fully honest and one where you weren't. Notice what triggered the difference.",
    "Responsibility Audit: List three recent situations where something went wrong. For each, write your role without deflecting. Practice owning your part.",
    "Truth-Telling Hierarchy: Identify the people and topics where honesty feels hardest. Create a plan for one incremental step toward greater authenticity in each.",
    "Feedback Request: Ask one trusted person for honest feedback about how you show up. Receive it without defensiveness as practice for both giving and getting truth.",
  ],
};

const ZEST: StrengthContent = {
  id: "zest",
  label: "Zest",
  virtue: "courage",
  description: "Approaching life with energy and excitement.",

  inAction: `Zest as a signature strength is the capacity to approach life with vitality rather than resignation. You don't just get through the day — you engage with it. Experiences feel vivid to you; you're present in a way that others notice. This isn't manufactured enthusiasm — it's a genuine aliveness that makes ordinary moments feel meaningful and challenging moments feel worth facing.

You likely bring energy into rooms. People describe you as someone who makes things more fun, who finds the interesting angle, who seems to actually want to be there. Your zest isn't dependent on circumstances being perfect; you can find excitement in mundane tasks, curiosity in routine interactions, and possibility in constraints. Life feels like something to be lived, not endured.`,

  atWork: `In professional settings, zest makes you a natural energiser. You're the colleague who rallies the team, finds the silver lining in setbacks, and approaches projects with genuine interest rather than obligation. Roles that reward engagement — sales, teaching, team leadership, creative work — are natural fits. Your energy is contagious.

The professional risk is that zest can be misread as superficiality or naivety. People who are more reserved may find your enthusiasm exhausting or suspect that it isn't genuine. The key is to match your energy to the context — bringing zest without overwhelming those who operate at a different tempo.`,

  inRelationships: `Your zest makes you fun to be around. Partners and friends experience you as someone who brings playfulness, spontaneity, and presence to shared time. You're the person who suggests the adventure, finds the humour in a dull moment, and makes ordinary life feel more alive. This creates joy and connection.

The relational challenge is that zest can feel like pressure to people who need downtime. Your desire for engagement may conflict with a partner's need for quiet. Learning to honour both — to bring energy without demanding it from others — allows zest to enhance rather than dominate your relationships.`,

  overuseRisk: `When zest is overextended, it becomes manic energy or avoidance through activity. You may fill every moment with stimulation to avoid stillness, use enthusiasm to deflect from difficult emotions, or exhaust yourself and others with constant high intensity. The shadow side is the inability to be with quiet, boredom, or sadness — zest becomes a defence against the full range of human experience.`,

  underuse: `Without developed zest, life feels flat. You go through the motions without engagement. Experiences blur together because you're not fully present. You may notice a persistent low energy, a sense that something is missing, or envy toward people who seem to enjoy life more. The world feels grey when it could be vivid.`,

  growthStrategies: [
    "Identify what genuinely energises you versus what drains you. Zest isn't about being constantly on — it's about aligning your life with sources of vitality.",
    "Practice presence in ordinary moments. Zest often fades when we're mentally elsewhere. Bring full attention to one routine activity daily and notice what shifts.",
    "Protect your energy sources. Sleep, movement, connection, and meaning all fuel zest. Neglect them and enthusiasm becomes unsustainable performance.",
    "Allow for the full emotional range. Zest doesn't require constant positivity. Vitality includes the capacity to feel sadness, anger, and boredom fully — and to return to aliveness afterward.",
  ],

  toolkit: [
    "Energy Audit: Track your energy levels for one week. Note what activities, people, and contexts increase or decrease your vitality. Use this to design your life.",
    "Presence Practice: Choose one daily activity (a meal, a walk, a conversation) and commit to being fully present for it. Notice the difference from autopilot mode.",
    "Vitality Inventory: List five experiences that reliably bring you alive. Schedule at least one into your next week.",
    "Quiet Tolerance: Spend 15 minutes daily in intentional stillness — no screens, no tasks. Build capacity to be with quiet without needing to fill it.",
  ],
};

export const COURAGE_STRENGTHS: Partial<Record<StrengthId, StrengthContent>> = {
  bravery: BRAVERY,
  perseverance: PERSEVERANCE,
  honesty: HONESTY,
  zest: ZEST,
};

export const COURAGE_VIRTUE_CONTENT: VirtueContent = {
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
};
