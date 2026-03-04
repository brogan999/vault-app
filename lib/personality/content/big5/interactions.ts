import type { TraitInteraction } from "./types";

/**
 * Notable 2-trait combinations that produce distinctive patterns.
 * The generator matches the user's profile against these and surfaces
 * any that fit as cross-dimension insights.
 */
export const TRAIT_INTERACTIONS: TraitInteraction[] = [
  /* ---- Openness × Conscientiousness ---- */
  {
    traits: ["openness", "conscientiousness"],
    levels: ["high", "low"],
    title: "The Brilliant Starter",
    insight:
      "You generate ideas at a rate that outpaces your execution capacity. Creativity flows, but the infrastructure to catch it — plans, habits, follow-through systems — isn't naturally there. The graveyard of abandoned projects behind you contains some genuinely good ones.",
    premiumDeepDive:
      "This combination creates a specific frustration loop: you can see the finished version of something clearly (high Openness generates vivid visions), but the methodical effort required to build it brick by brick feels physically painful (low Conscientiousness provides no intrinsic reward for incremental progress). The key isn't more discipline — it's pairing yourself with systems and people who handle the execution infrastructure while you focus on ideation and direction. Think creative director, not lone artist. Alternatively, build external scaffolding — accountability partners, project management tools, public commitments — that replaces the internal structure your trait profile doesn't naturally provide. The 'just be more disciplined' advice misses the neurological reality: your brain rewards novelty, not completion. Work with that instead of against it.",
  },
  {
    traits: ["openness", "conscientiousness"],
    levels: ["low", "high"],
    title: "The Efficient Specialist",
    insight:
      "You execute flawlessly within known frameworks and resist untested approaches. Your reliability is exceptional, but your playbook may not evolve as fast as your environment demands. The risk is becoming the best practitioner of an approach that's becoming obsolete.",
    premiumDeepDive:
      "This pairing produces someone who is exceptionally productive within established domains. Your low Openness keeps you focused on proven methods; your high Conscientiousness ensures those methods are applied with thoroughness and precision. In stable environments, this makes you the most valuable person in the room. The vulnerability appears when the environment shifts. Because you derive satisfaction from executing well (Conscientiousness reward) and feel discomfort with unfamiliar approaches (low Openness aversion), you can become invested in preserving methods that are no longer optimal. The most effective intervention is to schedule periodic 'assumption audits' — designated times when you deliberately evaluate whether your current approach is still the best one, using the same rigorous standards you apply to execution.",
  },
  {
    traits: ["openness", "conscientiousness"],
    levels: ["high", "high"],
    title: "The Visionary Builder",
    insight:
      "You can both imagine possibilities others miss and methodically build them into reality. This is a rare and powerful combination — creative vision with the discipline to execute. Your constraint isn't ability; it's time. You take on too much because you can see too many things worth building.",
    premiumDeepDive:
      "High Openness × High Conscientiousness is one of the strongest predictors of professional achievement across domains. You generate novel ideas (Openness) and then actually do the work to make them real (Conscientiousness). Where others have one or the other, you have both engines running simultaneously. The shadow of this combination isn't failure — it's overcommitment. Because you can see what's possible and you have the drive to build it, you tend to take on more projects, more responsibilities, more creative ambitions than any single person can sustain. The result isn't poor quality — it's burnout. You deliver everything at a high standard, but the cost to your energy, relationships, and health accumulates silently. The intervention is ruthless prioritization. Not 'what can I do?' (everything) but 'what should I do?' (very few things, done at the level that satisfies both your vision and your standards).",
  },

  /* ---- Conscientiousness × Neuroticism ---- */
  {
    traits: ["conscientiousness", "neuroticism"],
    levels: ["high", "high"],
    title: "The Anxious Perfectionist",
    insight:
      "Your high standards and your high anxiety feed each other. You set ambitious goals (Conscientiousness), then worry intensely about failing to meet them (Neuroticism). The quality of your work is excellent. The quality of your experience producing it is often miserable.",
    premiumDeepDive:
      "This is one of the most psychologically taxing trait combinations. Your Conscientiousness drives you to set high standards and work diligently toward them. Your Neuroticism ensures that every potential shortfall registers as a threat. The result: you deliver reliably excellent work while experiencing chronic anxiety about whether it's good enough.\n\nThe specific pattern: you set a goal → you work toward it with intensity → as the deadline approaches, anxiety ramps up → you check and re-check your work → you submit it, but instead of relief, you immediately start worrying about the next thing. There's no resting state of satisfaction, because Neuroticism converts every accomplishment into evidence of what could go wrong next.\n\nThe most effective interventions target the Neuroticism component, not the Conscientiousness. You don't need to lower your standards — you need to reduce the anxiety that accompanies pursuing them. Specific practices: time-boxing review cycles (two passes, then done, regardless of how you feel), tracking your prediction accuracy (you'll discover that the disasters you worry about almost never materialize), and building deliberate recovery periods between high-effort projects.",
  },
  {
    traits: ["conscientiousness", "neuroticism"],
    levels: ["low", "high"],
    title: "The Worried Drifter",
    insight:
      "You feel the weight of everything that could go wrong but struggle to mobilize the organized effort to prevent it. Anxiety without structure creates a specific kind of paralysis: you worry about falling behind while simultaneously finding it hard to create the systems that would prevent it.",
    premiumDeepDive:
      "This combination is particularly difficult because each trait amplifies the other's downside. Low Conscientiousness means you lack the natural organizational habits that would contain your anxiety — no systems, no routines, no structured approach to the things you're worried about. High Neuroticism means the worry is intense and persistent, but without the executive-function scaffolding to channel it into action.\n\nThe result is often procrastination driven by anxiety: you know the deadline is approaching, the awareness makes you anxious, the anxiety makes starting feel overwhelming, so you avoid it, which makes the anxiety worse. This cycle isn't laziness — it's a structural mismatch between your emotional sensitivity and your organizational capacity.\n\nThe intervention: start with the smallest possible organizational structure. Not a productivity system — a single habit. One timer, one list, one routine. Build outward only after that first habit is stable. The goal is to give your anxiety somewhere productive to go, one small channel at a time.",
  },

  /* ---- Extraversion × Agreeableness ---- */
  {
    traits: ["extraversion", "agreeableness"],
    levels: ["high", "high"],
    title: "The Social Glue",
    insight:
      "You bring people together and make them feel welcome. Your energy draws people in; your warmth keeps them there. Groups you're part of feel better simply because you're in them. The risk is that you absorb everyone else's emotional needs and neglect your own.",
    premiumDeepDive:
      "High Extraversion × High Agreeableness produces natural community builders. You're energized by people (E) and motivated to make those people feel good (A). This combination makes you genuinely liked — not strategically popular, but authentically valued, because your warmth isn't performed.\n\nThe shadow: you may not have a clear sense of your own needs separate from others'. Your social energy and your accommodating instinct work together to keep you focused outward — attending to group dynamics, reading the room, adjusting your behavior to maintain harmony. The person who gets the least attention from you is you.\n\nThis shows up most acutely in close relationships, where your partner may realize they know what you do for others better than they know what you actually want for yourself. The practice: before entering any social situation, check in with one question: 'What do I need from this, separate from what I can give?' The answer may not change your behavior, but over time it builds an internal compass that isn't purely other-oriented.",
  },
  {
    traits: ["extraversion", "agreeableness"],
    levels: ["high", "low"],
    title: "The Dominant Personality",
    insight:
      "You're socially bold and unafraid of conflict. You seek the spotlight and don't apologize for it. People notice you immediately when you enter a room — some with admiration, some with wariness. Your directness gets things done, but it can leave wreckage in its wake.",
    premiumDeepDive:
      "High Extraversion combined with low Agreeableness creates a personality that is both highly visible and highly assertive. You don't just participate in groups — you shape them. Conversations naturally orient around you, decisions tend to go your way, and people who disagree often choose not to voice it.\n\nThis combination is effective for leadership in competitive environments: sales, politics, entrepreneurship, anything where assertive action and social boldness create advantage. It's less effective in environments that require consensus, collaboration, or sustained trust-building.\n\nThe growth edge: your impact on others is larger than you realize. When you're energized and assertive, the people around you — particularly those higher in Agreeableness or Neuroticism — feel pushed rather than led. They may comply without buy-in, agree without conviction, or simply avoid you. The difference between a dominant personality and an effective leader is whether people follow because they choose to or because resistance feels too costly.",
  },

  /* ---- Extraversion × Neuroticism ---- */
  {
    traits: ["extraversion", "neuroticism"],
    levels: ["low", "high"],
    title: "The Quiet Worrier",
    insight:
      "You process anxiety internally with limited social outlets for releasing it. Other people don't see your stress because you don't broadcast it, which means you rarely get the support you need. The worry builds up in private, without the pressure-release valve that social engagement provides.",
    premiumDeepDive:
      "This combination creates a specific isolation pattern. High Neuroticism generates intense emotional responses — worry, self-doubt, anticipatory anxiety. Low Extraversion means you process these emotions internally rather than sharing them with others. The result: people around you have no idea how much you're carrying.\n\nThis matters because social support is one of the most effective buffers against the negative effects of high Neuroticism, and your low Extraversion systematically limits your access to it. You don't reach out when you're struggling because reaching out feels effortful and exposing — two things your trait profile is designed to avoid.\n\nThe intervention isn't 'be more social' — that's fighting your wiring. It's identifying one or two trusted people and building a specific, structured practice of sharing what's going on internally. A weekly check-in, a shared journal, a standing coffee meeting with explicit permission to talk about the hard stuff. The structure matters because it removes the activation energy of reaching out, which is the barrier your combination creates.",
  },

  /* ---- Openness × Extraversion ---- */
  {
    traits: ["openness", "extraversion"],
    levels: ["high", "low"],
    title: "The Quiet Intellectual",
    insight:
      "You have a rich, complex inner world that few people get to see. Your ideas are sophisticated and your aesthetic sense is refined, but you share these things selectively. People who know you casually have no idea how interesting your mind is. People who know you deeply find it inexhaustible.",
    premiumDeepDive:
      "High Openness × Low Extraversion is the classic profile of the deep thinker who doesn't self-promote. You process ideas thoroughly before sharing them, which means when you do speak, it tends to be substantive. But it also means you're chronically underestimated by people who equate verbal fluency with intellectual capacity.\n\nIn professional settings, this combination requires deliberate effort to ensure your ideas get heard. Not because they're not good — they're often the best in the room — but because you won't naturally broadcast them. The extraverts will fill the space while you're still refining your thinking.\n\nThe intervention isn't to become louder. It's to find channels that suit your style: written communication, small-group discussions, one-on-one conversations with decision-makers, or asynchronous platforms where thoughtfulness is rewarded over speed. Play to the medium that matches your processing style rather than competing in a format designed for extraverts.",
  },

  /* ---- Agreeableness × Neuroticism ---- */
  {
    traits: ["agreeableness", "neuroticism"],
    levels: ["high", "high"],
    title: "The Emotional Sponge",
    insight:
      "You absorb other people's emotions and then struggle to discharge them. Your empathy is genuine and deep, but it comes with a cost: other people's pain becomes your pain, their stress becomes your stress, and you have a hard time distinguishing between feelings that originate in you and feelings you've absorbed from others.",
    premiumDeepDive:
      "High Agreeableness makes you attuned to others' emotional states and motivated to help. High Neuroticism means those emotional states hit you hard and linger. Together, they create a person who is deeply empathetic but poorly boundaried — you feel everything in the room and take it home with you.\n\nThis combination is common in helping professions (therapy, nursing, social work, teaching) and it's the primary driver of compassion fatigue. You're drawn to work that involves caring for others, and that work slowly depletes you because your emotional system doesn't naturally filter or discharge what it absorbs.\n\nThe intervention isn't less caring — it's better emotional hygiene. Specific practices: a daily 'emotional inventory' where you identify which feelings are yours and which you've absorbed, a physical transition ritual between caregiving and personal time (change clothes, take a walk, take a shower), and regular contact with people who fill your tank rather than drain it.",
  },

  /* ---- Agreeableness × Conscientiousness ---- */
  {
    traits: ["agreeableness", "conscientiousness"],
    levels: ["low", "high"],
    title: "The Ruthless Executor",
    insight:
      "You get things done and you don't particularly care who's uncomfortable about it. Your standards are high, your tolerance for excuses is low, and your focus on results can make you seem cold to people who value warmth over competence. You're the person organizations call when something needs to work, not when something needs to feel good.",
    premiumDeepDive:
      "Low Agreeableness × High Conscientiousness is the profile of someone who optimizes for outcomes rather than relationships. You set goals, work systematically toward them, and have limited patience for the social dynamics that slow other people down — consensus-building, emotional processing, accommodation of weaker contributors.\n\nIn environments that reward pure performance — competitive industries, turnaround situations, high-stakes technical work — this combination is extremely effective. You see the standard, you work toward it, you hold others to it, and you don't waste energy on whether everyone feels included in the process.\n\nThe limitation appears in contexts that require sustained collaboration. Over time, your directness and your standards create a wake of people who respect your competence but don't enjoy working with you. This limits your access to the informal networks, discretionary effort, and voluntary collaboration that determine success at senior levels. The growth edge isn't softening your standards — it's investing the minimum effective dose of relational maintenance to keep your professional network functional.",
  },

  /* ---- Openness × Neuroticism ---- */
  {
    traits: ["openness", "neuroticism"],
    levels: ["high", "high"],
    title: "The Tormented Creative",
    insight:
      "You see and feel more than most people, and the combination is both your gift and your burden. Your imagination is vivid; your anxiety ensures it runs worst-case scenarios as fluently as best-case ones. Creative breakthroughs and emotional breakdowns can happen in the same afternoon.",
    premiumDeepDive:
      "High Openness × High Neuroticism is the quintessential artistic temperament — not because art requires suffering, but because this combination produces a mind that is simultaneously wide-open to experience and intensely reactive to it. You don't just observe the world; you absorb it. And your nervous system doesn't have a dimmer switch.\n\nThe creative output this produces can be extraordinary: your sensitivity to nuance, beauty, and meaning generates raw material that more emotionally stable people simply don't have access to. But the personal cost is high. Anxiety and Openness together create a mind that generates possibilities — and then worries about each one. Imagination becomes rumination. Pattern-recognition becomes catastrophizing.\n\nThe most effective management strategy acknowledges both traits rather than trying to suppress either. Channel the Openness into structured creative practice (scheduled writing time, a studio practice, a project with deadlines). Address the Neuroticism with grounding practices that work specifically for sensitive, imaginative people: nature exposure, physical movement, sensory engagement. Meditation helps some people with this profile but makes others worse (too much time alone with an active mind) — test before committing.",
  },

  /* ---- Extraversion × Conscientiousness ---- */
  {
    traits: ["extraversion", "conscientiousness"],
    levels: ["high", "high"],
    title: "The High-Output Leader",
    insight:
      "You combine social energy with disciplined execution — you rally people and deliver results. This makes you a natural leader in organizations that value both charisma and competence. Your risk isn't failure; it's over-functioning until you burn out while everyone around you coasts on your effort.",
    premiumDeepDive:
      "High Extraversion × High Conscientiousness is the classic high-performer profile. You're energized by social engagement, skilled at mobilizing others, and disciplined enough to follow through on what you promise. In professional settings, you tend to rise quickly because you combine two things that organizations desperately need: the ability to connect with people and the ability to execute reliably.\n\nThe shadow is that your high output becomes the system's baseline expectation. Because you can do more, you're asked to do more. Because you deliver, more gets piled on. Your Conscientiousness won't let you drop balls, and your Extraversion keeps you visible and accessible, which means people keep coming. The burnout pattern for this combination is distinctive: not a sudden collapse but a gradual erosion of energy, enthusiasm, and eventually health, masked by consistently high performance right up until the breaking point.\n\nThe intervention: practice strategic under-performance. Not everywhere — but in designated areas, deliberately deliver 'good enough' instead of 'excellent.' Use the recovered energy for the things that actually matter most. The hardest part isn't doing less; it's tolerating the feeling of doing less.",
  },

  /* ---- Agreeableness × Openness ---- */
  {
    traits: ["agreeableness", "openness"],
    levels: ["low", "low"],
    title: "The Pragmatic Skeptic",
    insight:
      "You're neither easily charmed by new ideas nor easily swayed by social pressure. You evaluate propositions on their concrete merits and people on their track records, not their charisma. In a world full of hype and groupthink, your bullshit detector is exceptionally well calibrated.",
    premiumDeepDive:
      "Low Agreeableness × Low Openness creates someone who is resistant to both social and intellectual manipulation. You don't agree to go along to get along (low A), and you don't get swept up in exciting new narratives (low O). This makes you the person in the room who asks the uncomfortable questions that everyone else was thinking but wouldn't voice.\n\nIn organizational contexts, this combination is invaluable for risk assessment, due diligence, quality control, and any role where healthy skepticism prevents expensive mistakes. You see through charismatic leaders, trendy strategies, and popular-but-unproven approaches with a clarity that more agreeable or more open people lack.\n\nThe limitation: your skepticism can become reflexive rather than selective. Not every new idea is hype. Not every enthusiastic person is a con artist. The growth edge is learning to distinguish between your signal (genuine assessment of low quality) and your noise (automatic aversion to novelty and social pressure). When you reject something, pause and ask: 'Am I rejecting this because it's bad, or because it's new and someone is excited about it?'",
  },
];
