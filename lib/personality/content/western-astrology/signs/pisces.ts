import type { ZodiacSignContent } from "../types";
import { buildHeroImagePath, buildSectionImages } from "../shared";

const assetKey = "pisces";

export const PISCES: ZodiacSignContent = {
  sign: "Pisces",
  name: "The Mystic",
  shortName: "The Fish",
  tagline: "Born to dissolve — you swim between worlds and feel what connects all things",
  color: "#7B6B8A",

  heroImage: buildHeroImagePath(assetKey),
  sectionImages: buildSectionImages(assetKey),

  element: "Water",
  modality: "Mutable",
  rulingPlanet: "Neptune / Jupiter",
  symbol: "♓",

  sunOverview: `Pisces Sun enters the zodiac at winter's end — the season when the ice begins to thaw and the boundary between solid and liquid blurs. Yours is the energy of the mystic: intuitive, compassionate, and perpetually attuned to what lies beneath the surface of things. You don't simply observe life; you merge with it — feeling the currents that connect all beings, dissolving the illusion of separation, and swimming in the depths where others fear to go.

Neptune, your modern ruler, grants you access to the transcendent — dreams, art, spirituality, and the subtle realms that defy logic. Jupiter, your traditional ruler, expands that sensitivity into wisdom and generosity. You're at your best when you're creating, healing, or holding space for the ineffable. Harsh boundaries feel like violence to you; you need fluidity, meaning, and the permission to feel everything.

At your core, you carry the mutable water archetype — the fish who swims in two directions at once, belonging to both the material and the mystical. You inspire not through force but through presence, empathy, and the quiet knowing that we are all connected.`,

  moonOverview: `A Pisces Moon processes emotions through absorption and dissolution. Where others might contain their feelings, you instinctively merge — with others' moods, with the atmosphere of a room, with the collective unconscious. Emotional boundaries are porous; you feel what others feel, often before they name it. You process by creating, retreating, or surrendering to the flow.

This placement gives you profound empathy and a tendency to take on more than your share of the world's pain. You recover from overwhelm by seeking solitude, art, nature, or spiritual practice — anything that restores the sense of connection to something larger. Your challenge is learning to distinguish your feelings from others' — to build membranes that allow compassion without drowning.`,

  risingOverview: `With Pisces Rising, the world sees you as soft, dreamy, and subtly mysterious — someone who seems to move through life with a quality of otherworldliness. Your first impression is one of gentleness and receptivity, a person who makes others feel seen without demanding attention.

This ascendant gives you a fluid, often ethereal presence — soft eyes, a quality of dissolving into the background or suddenly filling the space with quiet intensity. You approach new situations through feeling — what's the vibe, who needs care, where is the unseen? People sense your compassion immediately; they often confide in you without knowing why.`,

  coreEnergies: [
    { name: "Intuition & Psychic Sensitivity", score: 96, description: "Mutable water at its peak — you perceive what others miss and feel the currents beneath the surface" },
    { name: "Compassion & Empathy", score: 95, description: "Neptune-ruled capacity to merge with others' experience and feel their pain as your own" },
    { name: "Spiritual & Transcendent Awareness", score: 93, description: "A natural attunement to the unseen — dreams, symbols, and the divine in the ordinary" },
    { name: "Creative & Imaginative Expression", score: 91, description: "The ability to channel the ineffable into form — art, music, healing, ritual" },
    { name: "Boundary-Dissolving Connection", score: 88, description: "An instinctive sense that separation is illusion — you feel the unity between all things" },
  ],

  strengths: [
    {
      title: "Empathic Healer",
      description: "You possess the rare ability to feel what others feel — to meet them in their pain, their joy, their confusion — without judgment. You don't fix; you witness. Your presence alone can be healing because you offer the gift of being truly seen.",
      deepDive: "Your healing gift isn't codependence — it's a genuine capacity to hold space for the full spectrum of human experience. Neptune dissolves boundaries; you naturally access the collective unconscious. The key is learning to protect your own energy — the most evolved Pisces know when to merge and when to retreat. Your challenge is avoiding the savior complex — you're not here to absorb others' pain but to witness it with compassion and help them find their own way through.",
    },
    {
      title: "Channel of the Invisible",
      description: "You perceive what logic cannot reach — dreams, symbols, synchronicities, and the subtle currents that move through life. You're a natural translator between the material and the mystical, turning the ineffable into something others can sense.",
      deepDive: "Pisces's connection to the transcendent comes from Neptune's domain — the realm of dissolution, illusion, and the divine. You understand that reality is not only what we can measure. Your growth edge is grounding — ensuring that your spiritual sensitivity serves life rather than escaping it. The most evolved Pisces bring heaven down to earth — they make the mystical practical, the sacred everyday.",
    },
    {
      title: "Creative Visionary",
      description: "You don't just make art — you channel it. Music, dance, visual expression, ritual, and healing all flow through you because you're not afraid to dissolve into the creative process. You trust the muse, the dream, the impulse that comes from nowhere.",
      deepDive: "Your creativity is rooted in your capacity to merge — with emotion, with the collective unconscious, with the divine. You're at your best when you're not trying to control the outcome but allowing something to move through you. The challenge is completion — learning to bring the vision into form when Neptune would prefer to keep it floating. The evolved Pisces artist knows when to surrender and when to structure.",
    },
  ],

  growthEdges: [
    {
      title: "Boundaries & Self-Protection",
      teaser: "Your greatest challenge is knowing where you end and others begin.",
      fullExplanation: "As the sign of dissolution, you excel at merging — but you can lose yourself in the process. You may absorb others' emotions, neglect your own needs, or become codependent in relationships. You might escape into substances, fantasy, or spiritual bypassing when reality feels too harsh. True mastery for Pisces lies not in building walls but in developing healthy membranes — permeable enough to connect, strong enough to protect. Your sensitivity is a gift; it requires boundaries to sustain.",
      premiumHook: "Unlock your personalized boundary framework with strategies tailored to your Neptune and Moon placements.",
    },
    {
      title: "Grounding Vision in the Physical",
      teaser: "Your tendency to float can leave you unanchored when life demands concrete action.",
      fullExplanation: "Neptune lives in the realm of the infinite; the material world can feel oppressive or mundane. You may struggle with practical matters — money, deadlines, day-to-day structure — or avoid the hard work of manifesting your visions. The Pisces growth path includes learning that the mystical and the mundane are not opposites — that grounding is not betrayal of your nature but its completion. The fish who swim in two directions must sometimes choose to land.",
      premiumHook: "Discover how your Saturn and earth placements shape your grounding needs and receive custom manifesting strategies.",
    },
    {
      title: "Sobriety & Discernment",
      teaser: "Your openness to the transcendent can make you vulnerable to illusion and escapism.",
      fullExplanation: "Pisces dissolves boundaries — including the one between truth and fantasy. You may idealize partners, believe in illusions, or escape into substances or spiritual bypassing when reality feels too painful. The evolved Pisces learns discernment — not cynicism, but the ability to see clearly while still allowing for mystery. Your gift is faith; your evolution is faith tempered by wisdom. The mystic who can discern is the one who can truly serve.",
      premiumHook: "Your premium report maps your Neptune aspects to reveal your relationship with illusion and escapism.",
    },
  ],

  relationships: `In relationships, Pisces brings depth, devotion, and a capacity for love that transcends the ordinary. You love with your whole soul — you merge with your partner, feel their needs before they speak, and are willing to sacrifice for the bond. You need a partner who appreciates your sensitivity, who can hold space for your dreams, and who won't mistake your softness for weakness.

Your love language is presence — you show care through attunement, through creating beauty, through the quality of attention you give. You struggle with the harsh, the critical, or partners who demand rigid boundaries. What you're learning is that the deepest love includes both merging and individuation — that you can be fully connected and still protect your own soul.

The Pisces partner at their best is devoted, intuitive, and capable of a bond that feels like coming home. At your growing edge, you're discovering that the most sacred love is one where both people can be fully themselves — including the parts that need boundaries, that say no, and that refuse to dissolve for the sake of harmony.`,

  compatibilityNotes: {
    Cancer: "Water meets water — emotional depth, mutual understanding, and a shared language of feeling. Both value home, safety, and the unspoken. The challenge is avoiding mutual codependence.",
    Scorpio: "Fellow water sign with shared intensity. Scorpio brings transformation; Pisces brings transcendence. Together you can access depths few others reach.",
    Virgo: "Your zodiac opposite — magnetic attraction with built-in tension. Virgo teaches you discernment and grounding; you teach Virgo surrender and magic. Complementary when balanced.",
    Taurus: "Earth and water create fertile ground. Taurus brings stability and sensuality; Pisces brings imagination and compassion. You can help each other balance dream and form.",
    Capricorn: "Earth and water — Capricorn brings structure; Pisces brings vision. You can help each other manifest and ground. The challenge is Capricorn's need for order meeting your need for fluidity.",
  },

  careerPaths: `Pisces thrives in careers that reward intuition, compassion, and the ability to work with the intangible. You're naturally drawn to roles where you can heal, create, or serve — the arts, therapy, counseling, spiritual work, healing arts, music, film, and any field that honors the unseen.

You excel as artists, healers, counselors, musicians, actors, spiritual directors, and any role that requires empathy and creative vision. You're also effective in healthcare, social work, and nonprofit — anywhere your sensitivity serves the collective.

The careers that drain you are those requiring ruthless competition, emotional detachment, or indifference to the human. You need meaning, connection, and the sense that your work touches something beyond the material — that it heals, inspires, or awakens.`,

  workStyle: `You work best in environments that value intuition, allow creative flow, and honor the human. You're the colleague who senses the unspoken, who brings compassion to conflict, and who can channel inspiration when others are stuck. You may need support for structure, deadlines, and the practical details that Neptune tends to dissolve. You prefer flexible schedules, meaningful work, and spaces that allow for retreat and reflection.`,

  spiritualTheme: `Your spiritual journey is one of conscious dissolution — learning to merge with the divine without losing yourself, to feel the unity of all things while honoring your own embodiment, and to channel the transcendent into service. The Pisces soul lesson is that separation is illusion — and that the greatest wisdom is knowing when to merge and when to return. You're here to learn that boundaries are not the opposite of love; they are what make love sustainable. The mystic who can ground is the one who can truly serve.`,

  lifeLessons: [
    "Boundaries are not walls — they are the membranes that make connection possible",
    "Grounding is not betrayal of the mystical — it is its completion",
    "Discernment and faith can coexist",
    "Your sensitivity is a gift that requires protection",
    "The greatest service is sometimes to receive",
  ],

  toolkit: [
    {
      title: "The Boundary Check",
      context: "When you feel overwhelmed, depleted, or unsure whose feelings you're carrying",
      action: "Pause. Place your hand on your heart. Ask: 'Is this mine?' If not, imagine returning the energy to its source — with love, not judgment. You can care without absorbing. Pisces's evolution includes permeable membranes.",
    },
    {
      title: "The Grounding Ritual",
      context: "When you've been floating in dreams, emotions, or escape",
      action: "Do something physical and concrete: wash dishes, walk outside, organize one drawer. Name five things you can see, touch, hear. The fish sometimes needs to remember it has a body.",
    },
    {
      title: "The Discernment Pause",
      context: "When you're idealizing someone, or when reality feels too harsh to face",
      action: "Write down three things you know to be true — factually, not ideally. Then write one thing you're uncertain about. Pisces's gift is faith; the evolved mystic adds discernment.",
    },
  ],

  descriptionInsight: "Pisces is the zodiac's mystic — mutable water that swims between worlds and feels what connects all things. As the Fish, you carry the energy of winter's thaw: intuitive, compassionate, and perpetually attuned to the unseen. Your Neptune-ruled nature drives you to dissolve boundaries, channel the transcendent, and hold space for the full spectrum of human experience — with the wisdom to know when to merge and when to return.",
};
