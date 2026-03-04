import type { EnneagramTypeContent } from "./types";
import { buildHeroImagePath, buildSectionImages } from "./shared";

export const TYPE_4: EnneagramTypeContent = {
  typeNumber: 4,
  name: "The Individualist",
  shortName: "Individualist",
  tagline: "Sees what's missing and turns longing into art",
  color: "#916368",
  center: "heart",

  coreFear: "Having no identity or personal significance — being fundamentally flawed in a way that makes you unworthy of connection",
  coreDesire: "To find yourself and your significance — to create a unique identity that reflects your inner truth",
  coreMotivation: "To express your individuality, to surround yourself with beauty, to maintain certain moods and feelings, to withdraw to protect your self-image, to attend to your emotional needs before anything else",
  defensePattern: "Introjection — absorbing the qualities of what's missing or lost, turning external absence into internal identity. You don't just notice what's gone; you become the keeper of it.",

  overview: `You experience life at a frequency most people can't tune into. Where others see a Tuesday morning, you see the light doing something specific to the wall that won't happen again for months. Where others hear a conversation, you hear the thing that wasn't said — the longing underneath the small talk, the grief hiding behind the joke. This isn't a skill you developed. It's how you're wired. Your perceptual system is calibrated to register depth, absence, beauty, and emotional undercurrent.

This means you live in a richer world than most people around you. Colors are more saturated. Losses hit harder. Joy, when it comes, has a quality of almost unbearable fullness. The price of this depth is that you can't do shallow. Superficial conversation drains you. Performative happiness feels like a lie. You'd rather sit with genuine sadness than fake contentment, and you can't understand why most people choose the opposite.

Your core pattern is longing. Not for anything specific — though it attaches to specific things. Longing for wholeness, for the missing piece, for the version of yourself or your life that would finally feel complete. This longing is both your greatest gift and your deepest trap. It fuels extraordinary creativity, emotional intelligence, and aesthetic sensitivity. It also makes you perpetually dissatisfied with what you actually have, because having something means it's no longer the object of longing — and longing is where you feel most like yourself.

The most developed Fours don't eliminate this longing. They learn to hold it without being consumed by it — to create from it without needing it to resolve, to feel deeply without drowning in feeling. They discover that the missing piece they've been searching for was never outside them. The depth they crave is the depth they already carry.`,

  descriptionInsight: "Your emotional intensity isn't a flaw to manage — it's a perceptual system that registers depth, beauty, and meaning at a frequency most people never access. The challenge is learning to use this sensitivity as a lens rather than letting it become a prison.",

  strengths: [
    {
      title: "Emotional Depth",
      description: "You access layers of feeling that most people never reach. Where others might experience sadness, you experience the specific texture of loss at 3am when you realize something is irrevocably gone. This isn't melodrama — it's perceptual acuity. Your emotional range gives you access to experiences of beauty, meaning, and connection that reward a lifetime of feeling more than others.",
      deepDive: "Your emotional depth operates as a kind of sonar — you send out feeling into a situation and the echoes tell you things that surface-level observation never could. In conversations, you hear the real message under the words. In art, you see what the artist was actually trying to say. In relationships, you register shifts in emotional temperature that others don't notice until they've become crises. This makes you an extraordinary reader of people and situations. It also means you're processing more emotional information per minute than most people process in a day, which is why you need solitude to recover from even enjoyable social situations.",
    },
    {
      title: "Authentic Self-Expression",
      description: "You refuse to perform a version of yourself that isn't real. While others adapt their personality to fit the room, you'd rather be misunderstood for who you are than accepted for who you're not. This commitment to authenticity is rare and magnetic — people sense it, even when they can't name it, and they trust you for it.",
      deepDive: "Your authenticity isn't a philosophical choice — it's a physical response. Performing a false self feels wrong in your body, like wearing someone else's skin. This creates real professional and social costs: you can't schmooze, you can't fake enthusiasm, you can't pretend to care about things you don't. But it also creates something most people can't buy: genuine presence. When you show up, you show up. When you say something matters to you, people believe it, because they've never seen you say it about something that didn't. Over a lifetime, this builds a kind of trust that social performers can never achieve.",
    },
    {
      title: "Creative Vision",
      description: "You see aesthetic and emotional possibilities that others miss entirely. Your inner world is rich enough to source an entire artistic career — images, feelings, narratives, textures that arrive fully formed and need only to be translated into a medium. Even if you don't identify as an artist, you bring creative perception to everything you touch.",
      deepDive: "Your creative process is fundamentally different from other types. Most people create by combining existing elements in new ways — that's innovation. You create by making the invisible visible — pulling something out of the emotional and aesthetic ether that didn't have form until you gave it one. This is why your best work often surprises even you. It didn't come from planning; it came from a part of your psyche that processes meaning in images, sounds, and feelings rather than words and logic. The challenge is that this process can't be forced or scheduled. It operates on its own timeline, which creates tension with deadlines, productivity culture, and your own expectations.",
    },
    {
      title: "Empathic Attunement",
      description: "You feel what others feel — not as a thought experiment, but as a lived experience. When someone you care about is suffering, you don't sympathize from a distance. You enter their emotional reality and sit there with them. This capacity for empathic attunement makes you a natural healer, counselor, and confidant.",
    },
    {
      title: "Symbolic Intelligence",
      description: "You naturally think in symbols, metaphors, and images. Where others see literal events, you see meaning. A conversation isn't just words — it's a story with subtext. A season isn't just weather — it's an emotional landscape. This symbolic intelligence gives you a unique capacity for depth in creative work, therapy, writing, and any field that requires reading between the lines.",
    },
  ],

  growthEdges: [
    {
      title: "The Envy Spiral",
      teaser: "You habitually compare your inner experience to others' outer presentation, concluding that they have something essential that you lack. This comparison always lands the same way: they have it, you don't. The game is rigged before it starts.",
      fullExplanation: "Envy is your core emotional pattern and it operates differently from jealousy. Jealousy says 'I want what you have.' Envy says 'You have what I am fundamentally incapable of having — and your having it proves my deficiency.' This is why envy feels so existential for you. It's not about the specific thing — the relationship, the ease, the belonging, the uncomplicated happiness. It's about what that thing represents: evidence that you're missing something at the structural level.\n\nThe mechanism works like this: your perceptual system is calibrated to notice what's absent. When you look at others, you see what they have that you don't. When you look at yourself, you see what you lack. The data set is systematically biased — you're comparing their highlight reel to your outtakes, their surface to your depths. But it feels like objective observation.\n\nThe breakthrough comes when you realize that the 'missing piece' you see in others is a projection of your own unlived qualities. The ease you envy in others is a capacity you have but haven't developed. The belonging you crave is available, but you unconsciously sabotage it because belonging would mean you're ordinary — and being ordinary feels like death to your identity structure.",
    },
    {
      title: "The Identity Fortress",
      teaser: "You've built an elaborate sense of self around being different, deep, and misunderstood. This identity gives you meaning, but it also keeps you isolated. If you were truly understood, if you truly belonged, you'd lose the narrative that organizes your inner life.",
      fullExplanation: "Your identity is constructed around uniqueness and depth — you're the one who feels more, sees more, suffers more beautifully. This isn't vanity; it's survival architecture. When you felt fundamentally different as a child, you turned that difference into a virtue. 'I'm not weird; I'm deep.' 'I'm not excluded; I'm above the shallowness.'\n\nThis reframe saved you. But it also trapped you. Now, being special isn't just something you are — it's something you need to be. Which means you unconsciously avoid situations that would make you feel ordinary: conventional jobs, mainstream tastes, uncomplicated happiness. You seek out experiences that confirm your uniqueness, even when those experiences hurt.\n\nThe growth move isn't to become ordinary. It's to discover that your depth and sensitivity are real and valuable without needing a narrative of suffering to validate them. You can be deep and happy. You can be unique and belong. These feel like contradictions only because your identity structure was built on the assumption that they're mutually exclusive.",
    },
    {
      title: "Emotional Indulgence",
      teaser: "You can mistake intensity for authenticity, treating every emotional wave as a truth that deserves full expression. Some feelings need to be felt. Some need to be observed and released. Learning the difference is your life's work.",
      fullExplanation: "Your emotional system has no dimmer switch — it's either fully on or disconnected. When a feeling arrives, it fills the entire room of your consciousness. This makes it hard to evaluate feelings with any perspective. They all feel equally real, equally important, equally demanding of expression.\n\nThe pattern looks like this: a mood arrives (melancholy, inspiration, rage, longing). You identify with it completely. You assume the mood is telling you something true about your situation. You make decisions based on the mood. The mood passes. The decisions remain.\n\nThis isn't a call to suppress your feelings — that would be the worst possible advice for a Four. It's a call to develop an observing self that can witness the emotional weather without being blown around by it. 'I notice I'm feeling melancholy' is a very different statement from 'Everything is hopeless.' Both involve the same feeling. Only one involves the capacity to feel it without being consumed by it.",
    },
  ],

  relationshipStyle: "The Depth Seeker",
  relationshipPreview: "You bring extraordinary emotional presence, authenticity, and capacity for deep connection to your relationships. You don't do surface-level bonds — you want to know the real person, and you're willing to show the real you in return. The people who love you describe feeling truly seen and understood in a way they've never experienced with anyone else.",
  relationshipDeepDive: "Your relationship pattern has a distinctive arc. The early phase is intoxicating — you idealize your partner, you see their depths and potential, and the connection feels fated. Then reality sets in: they're human, they have flaws, they can't always match your emotional intensity. This is where the Four's core challenge emerges. You start to notice what's missing rather than what's present. The longing returns, but now it's directed at the gap between who your partner is and who they could be.\n\nThe push-pull dynamic is characteristic: you crave closeness but fear it will make the relationship ordinary. You withdraw to restore the longing (because longing feels more real than having), then feel abandoned when your partner gives you the space you asked for. This isn't manipulation — it's the envy pattern playing out in intimate territory.\n\nThe breakthrough in relationships comes when you learn to stay present with what's actually there rather than mourning what isn't. Your partner's imperfections aren't evidence of the relationship's inadequacy. They're the raw material of real intimacy — which is messier, less poetic, and ultimately more nourishing than the idealized version you carry in your imagination.",

  careerHeadline: "You thrive in roles that honor emotional truth, aesthetic sensitivity, and authentic self-expression.",
  careerDirections: [
    "Creative arts — writing, visual art, music, filmmaking, design",
    "Therapy and counseling — depth psychology, grief work, art therapy",
    "Brand and identity work — capturing authentic essence in visual language",
    "Teaching and mentoring — subjects that require emotional intelligence",
    "Curation and cultural criticism — bringing hidden beauty to light",
  ],
  careerDeepDive: "Your career challenge is finding work that honors your need for meaning and authenticity without requiring you to perform a false self. Conventional corporate environments often feel soul-crushing — not because you can't do the work, but because the emotional performance required (enthusiasm you don't feel, interest in metrics that bore you, participation in office culture that feels superficial) depletes you at a cellular level.\n\nThe most fulfilled Fours find roles where their emotional depth and aesthetic sensitivity are assets, not liabilities. This often means creative fields, but it can also mean any role where understanding human experience at a deep level is the actual job: therapy, hospice work, user research, brand strategy, teaching literature or philosophy.\n\nThe trap is waiting for the perfect role — the one that will finally feel like a complete expression of who you are. That role doesn't exist. Every job has mundane elements. The Fours who build sustainable careers learn to find meaning in imperfect work rather than holding out for work that matches their internal vision of what their life should look like.",

  emotionalPattern: "Your emotional life is the center of your universe — not because you're self-absorbed, but because feelings are your primary way of knowing. Where thinkers reason their way to conclusions and doers act their way to understanding, you feel your way to truth. A room's emotional temperature tells you more than any briefing. A person's tone tells you more than their words.\n\nThe challenge is that your emotional system has more bandwidth than most people's, which means you process more emotional data per hour. This creates a constant risk of overwhelm, especially in environments that don't honor the need for processing time. You may appear moody to others, but what's actually happening is that you're cycling through emotional material at a rate that would be invisible if it happened in someone else's head.\n\nYour core emotional pattern — longing — shapes everything. It turns ordinary dissatisfaction into existential yearning. It turns loss into identity. It turns beauty into something that hurts. This pattern can't be eliminated, but it can be befriended. The goal isn't to stop longing. It's to long without concluding that the longing means something is wrong.",

  stressTriggers: [
    "Feeling ordinary, invisible, or interchangeable with anyone else",
    "Environments that demand emotional performance or superficial positivity",
    "Being told your feelings are too much, too intense, or inappropriate",
  ],
  flowTriggers: [
    "Creative work where you can express your inner world without filters",
    "Deep one-on-one conversations where both people are fully authentic",
    "Beauty that stops you in your tracks — nature, art, music, human vulnerability",
    "Solitude with the right mood, the right light, and no external demands",
  ],

  toolkit: [
    {
      title: "The Gratitude Interruption",
      context: "When you notice the envy spiral — comparing your inner experience to someone else's outer life — you're in the pattern that causes Fours the most unnecessary suffering.",
      action: "Pause and name three things you currently have that you once longed for. Not things you should be grateful for. Things you genuinely wanted and now possess. This interrupts the 'always missing' narrative with evidence that you do, in fact, receive what you desire — you just stop noticing it once it's no longer the object of longing.",
    },
    {
      title: "Mood Tracking Without Merging",
      context: "Your moods are powerful and they feel like truth. But moods are weather, not climate. Learning to observe them without being consumed by them is the single most transformative skill a Four can develop.",
      action: "Three times a day, note your current mood with a single word. Don't analyze it, don't express it, don't try to change it. Just label it. Over time, this builds the observing self — the part of you that can watch the emotional weather without being blown around by it.",
    },
    {
      title: "The Ordinary Practice",
      context: "Your identity structure resists ordinariness. But some of the deepest human experiences — washing dishes, walking to the store, sitting quietly with someone you love — are profoundly ordinary. Avoiding the ordinary means missing the ground where real life actually happens.",
      action: "Choose one mundane daily activity and do it with full presence. No music, no multitasking, no inner narrative. Just the activity. Notice what happens when you stop needing the moment to be special and let it be what it is.",
    },
    {
      title: "Create Before You're Ready",
      context: "Fours often wait for the right mood, the right inspiration, the right emotional state before creating. This means most of your creative life happens in your imagination rather than in the world.",
      action: "Set a timer for 20 minutes and create something — write, draw, play, compose — regardless of your current mood or inspiration level. The quality doesn't matter. The point is to break the link between emotional state and creative output, so your art stops being hostage to your moods.",
    },
  ],

  stressFlow: {
    stressStages: [
      { stage: 1, label: "Withdrawal", description: "You pull away from people and responsibilities, retreating into your inner world where feelings can be processed without external demands." },
      { stage: 2, label: "Emotional Flooding", description: "Feelings intensify and begin to blur together. Melancholy deepens, envy sharpens, and the conviction that something essential is missing becomes overwhelming." },
      { stage: 3, label: "Movement to Two", description: "Under prolonged stress, you take on Type 2 patterns: becoming clingy, people-pleasing, and desperate for external validation to fill the void you feel inside." },
    ],
    stressRecovery: "Recovery happens through the growth line to Type 1 — grounding your emotional intensity in disciplined action, structured routines, and commitment to something larger than your feelings.",
    flowTriggers: [
      "Creative work with no external judgment",
      "Deep authentic conversation",
      "Immersion in beauty — nature, art, music",
      "Solitude with the right conditions",
    ],
    flowDescription: "You enter flow when your inner world and outer activity merge — when the creative act becomes a direct channel for emotional truth without the filter of self-consciousness.",
  },

  careerAlignment: {
    naturalFits: [
      "Creative and artistic roles where emotional authenticity is valued",
      "Counseling and depth psychology",
      "Brand identity and aesthetic direction",
      "Writing, teaching, and cultural commentary",
    ],
    likelyDrains: [
      "Highly structured corporate environments with rigid hierarchies",
      "Roles requiring constant upbeat performance (sales, event hosting)",
      "Data-heavy analytical work with no human or creative element",
    ],
    careerWarning: "Watch for the perfectionism trap: waiting for the work to match your internal vision before sharing it. Done and imperfect always beats imagined and pristine.",
  },

  growthPathStructured: {
    intro: "Your growth path moves toward Type 1 — the Reformer. This means grounding your emotional depth in disciplined action, principled commitment, and the ability to act on your values even when you don't feel like it.",
    areas: [
      { title: "From Feeling to Doing", description: "Your natural mode is to feel deeply and then express those feelings. Growth means learning to act on principle even when your emotional state says 'not today.' The discipline of the One grounds the depth of the Four." },
      { title: "From Longing to Gratitude", description: "Shifting your perceptual default from 'what's missing' to 'what's here' doesn't eliminate your depth — it gives it a foundation. You can still see absence. But you stop living there." },
      { title: "From Special to Real", description: "Releasing the need to be unique doesn't make you ordinary. It makes you available — for real connection, real work, real life that doesn't need to be extraordinary to be meaningful." },
    ],
  },

  heroImage: buildHeroImagePath(4),
  sectionImages: buildSectionImages(4),
};
