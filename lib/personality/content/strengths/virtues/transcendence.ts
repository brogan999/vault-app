import type { StrengthId, StrengthContent, VirtueContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "transcendence";

const APPRECIATION: StrengthContent = {
  id: "appreciation",
  label: "Appreciation of Beauty",
  virtue: "transcendence",
  description: "Noticing and appreciating beauty and excellence.",

  inAction: `Appreciation of beauty as a signature strength goes beyond aesthetic preference — it's a heightened sensitivity to excellence in nature, art, performance, and human creation. You notice what others overlook: the quality of light at a certain hour, the precision of a well-crafted sentence, the grace of a skilled athlete. These moments aren't trivial to you; they feel like contact with something larger than the mundane. You may experience what psychologists call "elevation" — a lifting of the spirit when you encounter genuine excellence.

You likely have a history of being moved by experiences that others find ordinary. A piece of music, a landscape, or a moment of human kindness can stop you in your tracks. This isn't escapism; it's a form of attention that enriches your experience of life. You may find that you need regular doses of beauty — in nature, art, or craft — to feel fully yourself. Without it, life can feel flat.`,

  atWork: `In professional settings, appreciation of beauty makes you attuned to quality, design, and craft. You notice when something is done well and when it falls short. You're valuable in roles involving design, quality assurance, curation, or any work where discerning excellence matters. You may also be the person who improves the physical environment — the office plants, the lighting, the way a presentation looks.

The professional risk is that your standards can feel impractical to others. Not every project warrants the level of polish you'd prefer. Learning to calibrate — when excellence matters and when "good enough" serves the goal — prevents frustration and burnout.`,

  inRelationships: `Your appreciation enriches relationships. You notice and celebrate what's beautiful in your partner — not just physically, but in their character, their efforts, their growth. You create moments of shared elevation: the concert you both loved, the view you paused to take in together, the meal you savoured. These become the texture of intimacy.

The relational challenge is that your sensitivity to beauty can make you more affected by ugliness — conflict, neglect, or environments that feel soul-deadening. You may need to protect your capacity for appreciation by setting boundaries around what you expose yourself to.`,

  overuseRisk: `When appreciation is overextended, it becomes aesthetic escapism or perfectionism. You may retreat into beauty to avoid dealing with difficult realities. The shadow side is using appreciation as a way to feel superior — dismissing what others find meaningful because it doesn't meet your standards. You might also become so focused on the ideal that you miss the goodness in the imperfect and ordinary.`,

  underuse: `Without developed appreciation, life can feel functional but flat. You move through the world without pausing to notice what's remarkable. Beauty and excellence exist around you, but you're not tuned to receive them. Over time, you may notice a vague sense that something meaningful is missing — a connection to wonder, excellence, or transcendence.`,

  growthStrategies: [
    "Schedule beauty. Don't leave appreciation to chance. Block time for nature, art, or music. Treat it as essential maintenance, not luxury.",
    `Practice specific noticing. Instead of "that was nice," name what moved you: the colour, the texture, the moment of skill. Specificity deepens appreciation.`,
    "Share your appreciation. Point out what you notice to others. It deepens your own experience and invites them into it.",
    "Expand your domains. If you appreciate one form of beauty (e.g. music), deliberately explore another (e.g. craft, architecture, natural systems).",
  ],

  toolkit: [
    "Beauty Walk: Spend 20 minutes walking with the sole intention of noticing three things of beauty or excellence. Write them down afterward.",
    "Elevation Journal: For one week, note any moment that lifted your spirit — art, nature, human kindness. Reflect on what these have in common.",
    "Quality Audit: In your environment, identify one thing that could be more beautiful or well-crafted. Make one small improvement.",
    "Shared Appreciation: Invite someone to experience something you find beautiful — a place, a piece of art, a performance. Notice how sharing changes the experience.",
  ],
};

const GRATITUDE: StrengthContent = {
  id: "gratitude",
  label: "Gratitude",
  virtue: "transcendence",
  description: "Being thankful for the good things in life.",

  inAction: `Gratitude as a signature strength is more than saying thank you — it's a sustained awareness that much of what you have is not solely of your own making. You recognise the role of others, circumstance, and luck in your life. This isn't passive or Pollyanna-ish; it's an active orientation toward noticing and acknowledging goodness. Research suggests gratitude shifts attention from what's lacking to what's present, and from entitlement to appreciation.

You likely have a natural tendency to reflect on what's going well. When something good happens, you think about who made it possible. You may keep mental or written lists of what you're thankful for. This doesn't mean you ignore difficulty — it means you don't let difficulty eclipse the good. You understand that gratitude and grief can coexist; appreciating what you have doesn't require denying what you've lost.`,

  atWork: `In professional settings, gratitude makes you the colleague who acknowledges others' contributions, who doesn't take support for granted, and who creates a culture of recognition. You're valuable in team environments because people feel seen and appreciated when you're around. You may also be more resilient to setbacks because you can contextualise them within a larger picture of what's working.

The professional risk is that gratitude can be weaponised to suppress legitimate discontent. "You should be grateful you have a job" can silence valid concerns. The skill is distinguishing between gratitude that uplifts and gratitude that gaslights — yours should be the former.`,

  inRelationships: `Your gratitude strengthens relationships. Partners and friends feel that you notice and value what they do. You express appreciation for the small things — the meal they made, the errand they ran, the way they showed up when you needed them. This creates a positive feedback loop where people want to give more because they feel their giving is seen.

The relational challenge is ensuring gratitude doesn't become performative. Empty "thank yous" can feel like obligation. The most meaningful gratitude is specific and genuine — naming what someone did and why it mattered to you.`,

  overuseRisk: `When gratitude is overextended, it can become toxic positivity or spiritual bypassing. You may use gratitude to avoid facing legitimate pain, injustice, or need for change. The shadow side is gratitude that minimises — "others have it worse" — rather than gratitude that enlarges. You might also feel guilty for wanting more when you "should" be grateful, suppressing healthy ambition or desire.`,

  underuse: `Without developed gratitude, you take good things for granted. You focus on what's missing, what's wrong, what others owe you. Life feels like a ledger of deficits. Relationships suffer because people don't feel appreciated, and you miss the wellbeing benefits that come from regularly acknowledging goodness.`,

  growthStrategies: [
    `Practice specific gratitude. "I'm grateful for my health" is vague. "I'm grateful that I could run three miles this morning without pain" is specific and more impactful.`,
    "Include the source. When you're grateful, name who or what made it possible. Gratitude that acknowledges others deepens connection.",
    "Balance gratitude with agency. Thankfulness doesn't mean passivity. You can be grateful for what you have and still work to improve your circumstances.",
    "Grieve and appreciate. When life is hard, allow both — gratitude for what remains and grief for what's lost. They're not mutually exclusive.",
  ],

  toolkit: [
    "Three Good Things: Each evening, write down three specific good things that happened and why they occurred. Continue for two weeks and notice the shift.",
    "Gratitude Letter: Write a letter to someone who has positively influenced your life. Deliver it in person if possible, or read it aloud to them.",
    "Savoring Practice: Choose one pleasant experience per day and deliberately extend it — pause, notice details, let it linger. Gratitude lives in the pause.",
    "Gratitude Audit: List five things you're grateful for. For each, identify who or what made it possible. Notice how this changes your relationship to the list.",
  ],
};

const HOPE: StrengthContent = {
  id: "hope",
  label: "Hope",
  virtue: "transcendence",
  description: "Expecting the best and working to achieve it.",

  inAction: `Hope as a signature strength is not naive optimism — it's the capacity to maintain belief in positive outcomes while actively working toward them. Psychologists distinguish hope from mere wishing: hope involves agency (you can do something) and pathways (you can see how). You have a natural tendency to expect that things can improve and that your efforts matter. When setbacks occur, you're more likely to recalibrate than to collapse.

You likely have a history of persevering through difficulty because you believed a better outcome was possible. You can hold both the reality of current hardship and the possibility of future improvement. This doesn't mean you're unrealistic — you can acknowledge obstacles while still orienting toward solutions. You may find that you're the person others turn to when they've lost hope, because your outlook is contagious.`,

  atWork: `In professional settings, hope makes you the person who keeps teams moving forward during difficult phases. You see possibilities when others see only obstacles. You're valuable in roles requiring resilience, change management, or long-term vision — anywhere that benefits from someone who believes the effort is worth it.

The professional risk is that hope can blind you to situations that warrant exit rather than persistence. Not every sinking ship is worth saving. The skill is distinguishing between hope that sustains meaningful effort and hope that keeps you stuck in a situation that will not improve.`,

  inRelationships: `Your hope supports relationships through difficult seasons. When your partner or friends are discouraged, you help them see a path forward. You don't dismiss their pain, but you offer a perspective that includes possibility. People feel less alone in their struggles when you're present.

The relational challenge is ensuring hope doesn't become pressure. "It'll work out" can feel dismissive when someone needs to sit with difficulty. Learning to offer hope without rushing someone through their pain is a growth edge.`,

  overuseRisk: `When hope is overextended, it becomes denial or toxic positivity. You may refuse to face reality when it's bleak, or pressure others to "stay positive" when they need to grieve. The shadow side is hope that prevents necessary endings — staying in jobs, relationships, or situations that won't improve because you can't bear to give up.`,

  underuse: `Without developed hope, you expect the worst and struggle to invest in future outcomes. Setbacks confirm your pessimism. You may avoid effort because you don't believe it will matter. Life feels like a series of disappointments waiting to happen, and you miss the energy and resilience that hope provides.`,

  growthStrategies: [
    "Distinguish hope from optimism. Hope includes pathways — concrete steps. When you hope for something, identify one small action you can take toward it.",
    "Build a hope portfolio. Recall past situations that seemed hopeless but improved. Use these as evidence when current circumstances feel bleak.",
    "Balance hope with acceptance. You can hope for the best while preparing for other outcomes. Hope doesn't require denying reality.",
    "Share hope without imposing it. Offer your perspective when others are discouraged, but don't insist they feel hopeful. Sometimes presence matters more than perspective.",
  ],

  toolkit: [
    "Pathway Mapping: For one goal you care about, list three different ways you could make progress. Hope increases when you see multiple routes.",
    "Past Hope Review: Write about a time when things seemed bleak but improved. What did you do? What external factors helped? Use this as a resource.",
    "Micro-Hope Practice: Each day, identify one small thing you can do that might improve your situation. Do it. Hope is reinforced by agency.",
    "Hope Conversation: When someone shares a difficulty, practice offering one realistic reason things could improve — without dismissing their pain.",
  ],
};

const HUMOR: StrengthContent = {
  id: "humor",
  label: "Humor",
  virtue: "transcendence",
  description: "Liking to laugh and bringing smiles to others.",

  inAction: `Humor as a signature strength is the capacity to find and create lightness, to see the absurdity in situations without dismissing their seriousness, and to use playfulness as a way of connecting and coping. You have a natural tendency to notice what's funny — the incongruities, the ironies, the unexpected twists — and to share that perspective with others. Laughter isn't trivial to you; it's a form of perspective-taking that can defuse tension, build connection, and make difficulty more bearable.

You likely use humor to put others at ease, to navigate awkward moments, and to process your own challenges. You may find that you're the person who lightens a room, who helps people laugh at themselves in a kind way, and who can find the thread of absurdity even in difficult situations. Your humor is probably inclusive rather than cutting — you laugh with people, not at them.`,

  atWork: `In professional settings, humor makes you the person who improves morale, eases tension in meetings, and helps teams bond. You're valuable in any role where relationships and culture matter. You may also use humor to give difficult feedback — softening the message without diluting it. Leaders who can laugh at themselves create psychological safety.

The professional risk is that humor can be misread as not taking things seriously. In high-stakes moments, others may need gravitas before levity. The skill is reading the room — knowing when humor serves and when it deflects from what needs to be addressed.`,

  inRelationships: `Your humor creates joy and connection in relationships. Shared laughter is one of the strongest predictors of relationship satisfaction. You're the partner or friend who can turn a bad day around, who finds the funny angle on a frustrating situation, and who doesn't take yourself too seriously. This creates ease and intimacy.

The relational challenge is ensuring humor doesn't become a way to avoid depth. If you deflect every serious moment with a joke, partners may feel you're not fully present for difficulty. Learning to hold both — the capacity for lightness and the capacity for gravity — is a growth edge.`,

  overuseRisk: `When humor is overextended, it becomes deflection or avoidance. You may use jokes to sidestep difficult emotions, uncomfortable conversations, or genuine vulnerability. The shadow side is humor that harms — sarcasm that cuts, teasing that lands wrong, or comedy that comes at others' expense. You might also be the person who can't turn it off, performing levity when what's needed is quiet presence.`,

  underuse: `Without developed humor, life can feel heavy. You may struggle to find lightness in difficulty, to connect through play, or to laugh at yourself. Relationships may lack the shared joy that laughter provides. You might also take yourself or situations more seriously than necessary, missing the perspective that humor offers.`,

  growthStrategies: [
    "Notice what makes you laugh. Pay attention to the types of humor that land for you — absurdity, wordplay, observational comedy. Understanding your own humor helps you share it.",
    `Practice inclusive humor. Jokes that build people up or invite them in are more connecting than jokes that exclude or mock. Aim for "laughing with."`,
    "Allow seriousness when it's needed. Humor is a strength, but not every moment calls for it. Practice sitting with gravity without rushing to lighten it.",
    "Use humor to process, not to avoid. When something is hard, ask: can I find a gentle angle that helps me cope? Not to minimise, but to make it bearable.",
  ],

  toolkit: [
    "Laughter Log: For one week, note what made you laugh each day. Notice patterns — what types of humor land for you and in what contexts.",
    "Playful Experiment: Do one intentionally silly thing per day — a ridiculous voice, a spontaneous dance, a harmless prank. Notice how it affects your mood and connections.",
    "Serious Pause: In your next difficult conversation, resist the urge to lighten the moment. Practice holding gravity. Notice what that requires.",
    "Shared Humor: Intentionally share something you find funny with someone you care about. Notice how co-experiencing humor affects the connection.",
  ],
};

const SPIRITUALITY: StrengthContent = {
  id: "spirituality",
  label: "Spirituality",
  virtue: "transcendence",
  description: "Having beliefs about meaning and purpose.",

  inAction: `Spirituality as a signature strength is the capacity to connect your life to something larger than yourself — whether through formal religion, nature, community, art, or a personal sense of meaning. You have a natural tendency to ask big questions: Why am I here? What matters? What happens when we die? You're not satisfied with purely material or transactional explanations of existence. You seek coherence, purpose, and a sense that your life is part of something meaningful.

You likely have practices or beliefs that ground you — meditation, prayer, ritual, time in nature, or reflection on what you value most. These aren't abstract to you; they inform how you live. You may find that you're drawn to people and experiences that touch on the transcendent — moments of awe, collective purpose, or deep connection. Your spirituality may be traditional or highly personal; the common thread is that you orient toward meaning.`,

  atWork: `In professional settings, spirituality can inform your sense of vocation — the belief that your work serves something beyond a paycheck. You may seek roles that align with your values or that contribute to causes you care about. You're often the person who helps others connect their daily tasks to larger purpose, which can improve motivation and meaning at work.

The professional risk is that spirituality can feel irrelevant or inappropriate in secular workplaces. The skill is translating your values into language that resonates broadly — purpose, contribution, legacy — without requiring others to share your framework.`,

  inRelationships: `Your spirituality can deepen relationships when you share similar orientations or when you respect different paths. You may seek partners and friends who are also asking big questions. Shared rituals, values, or practices can become the foundation of intimacy. You're often the person who helps others find meaning in difficulty.

The relational challenge is ensuring spirituality doesn't become proselytising or judgment. If your framework feels like the only valid one, partners may feel unseen. Spiritual humility — holding your beliefs while honouring others' — supports connection.`,

  overuseRisk: `When spirituality is overextended, it can become spiritual bypassing — using beliefs to avoid facing difficult emotions, conflicts, or realities. "It's all part of a plan" can dismiss legitimate grief or injustice. The shadow side is dogma: rigidity that leaves no room for doubt, difference, or growth. You might also use spirituality to feel superior to those who don't share your orientation.`,

  underuse: `Without developed spirituality, life can feel purely functional. You may have success, relationships, and comfort, but lack a sense of connection to something larger. The big questions may feel irrelevant or unanswerable. Over time, you might notice a persistent sense that something is missing — a dimension of meaning or purpose.`,

  growthStrategies: [
    "Articulate your beliefs. Even if they're evolving, write down what you believe about meaning, purpose, and connection. Clarity supports living with intention.",
    "Find practices that ground you. Spirituality lives in action — ritual, reflection, community. Identify what helps you feel connected and protect time for it.",
    "Honour doubt. Spiritual maturity includes room for uncertainty. You don't have to have all the answers to have a meaningful orientation.",
    "Connect without converting. Share what matters to you when relevant, but don't require others to adopt your framework. Curiosity about their perspective deepens both.",
  ],

  toolkit: [
    "Meaning Map: Write down what gives your life meaning — people, values, causes, practices. Notice what's present and what you'd like to cultivate.",
    "Awe Practice: Once a week, seek an experience that evokes awe — nature, art, music, or collective experience. Notice how it affects your sense of connection.",
    "Values Alignment Check: Review your recent decisions. How well do they align with what you say matters? Identify one adjustment.",
    "Spiritual Conversation: Have one conversation with someone you trust about what gives life meaning. Listen as much as you share.",
  ],
};

export const TRANSCENDENCE_STRENGTHS: Partial<Record<StrengthId, StrengthContent>> = {
  appreciation: APPRECIATION,
  gratitude: GRATITUDE,
  hope: HOPE,
  humor: HUMOR,
  spirituality: SPIRITUALITY,
};

export const TRANSCENDENCE_VIRTUE_CONTENT: VirtueContent = {
  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),
};
