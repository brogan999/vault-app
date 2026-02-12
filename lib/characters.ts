// ============================================================================
// Centralized Character Metadata — Single Source of Truth
// ============================================================================
// Every personality type's name, color, prompts, and scene descriptions live
// here. Import from this file whenever you need character data anywhere in the
// app. Matches the "Miniature Worlds" Brand & Style Guide.
// ============================================================================

export type TypeCode =
  | "INTJ" | "INTP" | "ENTJ" | "ENTP"
  | "INFJ" | "INFP" | "ENFJ" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type TypeGroup = "Analysts" | "Diplomats" | "Sentinels" | "Explorers";

export type AssetType =
  | "portrait"
  | "reveal"
  | "avatar"
  | "hero-banner"
  | "strengths"
  | "relationships"
  | "friendships"
  | "parenthood"
  | "career"
  | "workplace"
  | "growth"
  | "social-card";

export type SceneType =
  | "strengths"
  | "relationships"
  | "friendships"
  | "parenthood"
  | "career"
  | "workplace"
  | "growth";

export interface Character {
  /** Four-letter MBTI code */
  code: TypeCode;
  /** Canonical character name, e.g. "The Mastermind" */
  name: string;
  /** Which temperament group this type belongs to */
  group: TypeGroup;
  /** Human-readable accent color name */
  accentColor: string;
  /** Hex value of the accent color */
  accentHex: string;
  /** One-sentence essence / tagline */
  essence: string;
  /** Description of the character's miniature diorama world */
  dioramaDescription: string;
  /** Full Midjourney character prompt (appended after the master prompt) */
  characterPrompt: string;
  /** Scene-specific prompts for article illustrations */
  scenePrompts: Record<SceneType, string>;
}

// ---------------------------------------------------------------------------
// Master Style Prompt — prepended to EVERY Midjourney generation
// ---------------------------------------------------------------------------

export const MASTER_PROMPT =
  "Miniature diorama scene rendered in a warm claymation style. Soft, tactile textures " +
  "like sculpted clay and painted wood. Warm golden-hour lighting with soft shadows. " +
  "Slightly tilt-shifted perspective looking into a detailed miniature world. Character " +
  "has gently stylized proportions — slightly oversized head, soft rounded features, " +
  "warm expressive eyes, simple but charming clothing. Rich but slightly muted color " +
  "palette with pops of one signature accent color. Cozy, handcrafted feeling like a " +
  "Wes Anderson set crossed with a Laika stop-motion film. No text, no watermarks. " +
  "Shallow depth of field with the character in sharp focus.";

// ---------------------------------------------------------------------------
// Asset-type modifiers — appended after the character prompt
// ---------------------------------------------------------------------------

export const ASSET_MODIFIERS: Record<AssetType, { suffix: string; ar: string }> = {
  portrait: {
    suffix: "Single character standing full body portrait, centered, characteristic pose and outfit.",
    ar: "3:4",
  },
  reveal: {
    suffix:
      "Dramatic reveal composition, character in their world looking toward viewer, " +
      "warm dramatic lighting as if a curtain just opened, cinematic depth, slightly " +
      "more vivid colors than usual.",
    ar: "16:9",
  },
  avatar: {
    suffix: "Close-up portrait, head and shoulders, warm friendly expression, simple soft background.",
    ar: "1:1",
  },
  "hero-banner": {
    suffix:
      "Wide panoramic composition, 2-3 smaller supporting figures of similar style visible in the background.",
    ar: "32:9",
  },
  strengths: { suffix: "", ar: "16:10" },
  relationships: { suffix: "", ar: "16:10" },
  friendships: { suffix: "", ar: "16:10" },
  parenthood: { suffix: "", ar: "16:10" },
  career: { suffix: "", ar: "16:10" },
  workplace: { suffix: "", ar: "16:10" },
  growth: { suffix: "", ar: "16:10" },
  "social-card": { suffix: "", ar: "1200x630" }, // composited in Figma, not AI-generated
};

// ---------------------------------------------------------------------------
// The 16 Characters
// ---------------------------------------------------------------------------

export const CHARACTERS: Record<TypeCode, Character> = {
  // ========================== ANALYSTS (NT) ================================

  INTJ: {
    code: "INTJ",
    name: "The Mastermind",
    group: "Analysts",
    accentColor: "Midnight Blue",
    accentHex: "#1B2A4A",
    essence: "Sees the whole map before anyone else. Plans ten moves ahead.",
    dioramaDescription:
      "A candlelit study filled with star charts, blueprints, and a brass telescope pointed at something no one else has noticed yet.",
    characterPrompt:
      "A thoughtful figure in a navy coat stands in a candlelit study. Star charts and " +
      "hand-drawn maps cover every wall. A brass telescope points out a circular window " +
      "toward a night sky. Stacked leather journals, an inkwell, compass, and celestial " +
      "globe on the desk. Accent color: deep midnight blue. The mood is focused, quiet, " +
      "and vast — like the figure sees something far beyond the room.",
    scenePrompts: {
      strengths:
        "The figure in the navy coat stands before a massive strategic map, confidently pointing to a " +
        "route no one else has seen. Colleagues look on with respect. A moment of quiet mastery and " +
        "strategic brilliance.",
      relationships:
        "The figure in the navy coat sharing a quiet evening with a partner by a fireplace, both reading — " +
        "comfortable silence, deep connection without words. Star charts on the wall, two mugs of tea.",
      friendships:
        "The figure in the navy coat sitting across a chessboard from a close friend in a candlelit study, " +
        "deep in thought. A small gathering of 2-3 people, intellectual warmth rather than loud socializing.",
      parenthood:
        "The figure in the navy coat kneeling beside a child, both looking through the brass telescope at " +
        "the night sky. Teaching with quiet patience, sharing the wonder of discovery.",
      career:
        "The figure in the navy coat in a sleek strategy room, blueprints and data visualizations on the " +
        "walls, confidently directing a project with calm authority. A sense of long-term vision.",
      workplace:
        "The figure in the navy coat in a meeting room, calmly presenting a plan while colleagues lean in. " +
        "The whiteboard behind them shows a complex but elegant strategy. Quiet command.",
      growth:
        "The figure in the navy coat standing at the edge of their study, looking out a large window at a " +
        "vast landscape stretching to the horizon. Dawn light. Sense of vast possibility and next chapters.",
    },
  },

  INTP: {
    code: "INTP",
    name: "The Philosopher",
    group: "Analysts",
    accentColor: "Deep Teal",
    accentHex: "#1A6B5C",
    essence: "Endlessly combining ideas to see what happens.",
    dioramaDescription:
      "A cluttered workshop where half-finished experiments glow in jars, surrounded by scribbled notebooks and an overflowing chalkboard.",
    characterPrompt:
      "A curious figure in round spectacles and a rumpled linen shirt stands in a cluttered " +
      "workshop. Glass jars glow with strange liquids in amber, teal, and violet. An " +
      "overflowing chalkboard covered in equations and diagrams fills the back wall. Open " +
      "notebooks everywhere, a magnifying glass, crystals, and half-assembled brass " +
      "instruments scattered across the workbench. Accent color: deep teal. The mood is " +
      "absorbed, eccentric, brilliant.",
    scenePrompts: {
      strengths:
        "The figure in spectacles standing before a completed chalkboard full of elegant equations, " +
        "a moment of breakthrough. Colleagues gathered behind, impressed by the solution no one else could find.",
      relationships:
        "The figure in spectacles and a partner sitting together on a window seat, sharing a book of " +
        "puzzles, pointing at something curious. Quiet intellectual intimacy, warmth in shared discovery.",
      friendships:
        "The figure in spectacles in a cozy workshop, surrounded by 2-3 friends examining a strange " +
        "glowing contraption together. Laughter and curiosity, the joy of shared exploration.",
      parenthood:
        "The figure in spectacles helping a child build a small glowing experiment on the workbench, " +
        "both wide-eyed with wonder. Notebooks and jars around them, learning through play.",
      career:
        "The figure in spectacles in a research lab, surrounded by instruments and equations, deep in " +
        "focused work. A sense of pure intellectual flow and discovery.",
      workplace:
        "The figure in spectacles at a whiteboard covered in diagrams, explaining a concept to curious " +
        "colleagues. The room is attentive. Quiet authority through ideas.",
      growth:
        "The figure in spectacles stepping out of their cluttered workshop into bright sunlight, looking " +
        "at a vast open landscape with curiosity. New horizons beyond the familiar walls.",
    },
  },

  ENTJ: {
    code: "ENTJ",
    name: "The Executive",
    group: "Analysts",
    accentColor: "Rich Burgundy",
    accentHex: "#6B1D2A",
    essence: "Knows where the ship is going and exactly how to get there.",
    dioramaDescription:
      "The bridge of a vessel — maps spread across a table, crew waiting for orders, horizon visible through the window.",
    characterPrompt:
      "A commanding figure in a tailored coat stands at the helm of a ship's bridge. Large " +
      "windows reveal open ocean at sunrise. Navigation maps are spread across a wooden " +
      "table. A brass ship's wheel, barometer, and signal flags decorate the space. The " +
      "figure's posture is confident, one hand on the table, looking toward the horizon. " +
      "Accent color: rich burgundy. The mood is decisive, powerful, forward-looking.",
    scenePrompts: {
      strengths:
        "The figure in the tailored coat standing at the ship's helm during a storm, calm and decisive, " +
        "crew rallying behind them. A moment of leadership under pressure, commanding respect.",
      relationships:
        "The figure in the tailored coat and a partner standing together at the ship's bow at sunset, " +
        "looking forward together. Shared ambition and deep partnership, wind in their hair.",
      friendships:
        "The figure in the tailored coat hosting a dinner at the captain's table, 2-3 friends laughing " +
        "and toasting. Warm authority, genuine camaraderie, maps spread between wine glasses.",
      parenthood:
        "The figure in the tailored coat teaching a child to steer the ship's wheel, both looking at " +
        "the horizon with determination. Passing on confidence and vision.",
      career:
        "The figure in the tailored coat in a grand strategy room, directing a fleet on a massive map " +
        "table. Officers await orders. Total command and long-range vision.",
      workplace:
        "The figure in the tailored coat leading a meeting at a polished table, colleagues leaning in, " +
        "charts and plans on the wall. Decisive leadership, everyone aligned.",
      growth:
        "The figure in the tailored coat standing alone on deck at dawn, looking at new uncharted waters " +
        "on the horizon. The fleet behind them, a new chapter beginning.",
    },
  },

  ENTP: {
    code: "ENTP",
    name: "The Visionary",
    group: "Analysts",
    accentColor: "Electric Amber",
    accentHex: "#D4880F",
    essence: "Builds things nobody asked for that everyone ends up needing.",
    dioramaDescription:
      "A chaotic garage-workshop bursting with contraptions, half-assembled machines, and a grinning figure holding up their latest creation.",
    characterPrompt:
      "An animated figure in rolled-up sleeves and a leather apron stands in a chaotic " +
      "garage-workshop, proudly holding up a glowing contraption. Half-finished machines, " +
      "gears, springs, colored wires, and blueprints fill every surface. A small robot " +
      "assistant hands them a wrench. Sparks fly from a welding project in the corner. " +
      "Accent color: electric amber. The mood is playful, brilliant, slightly chaotic.",
    scenePrompts: {
      strengths:
        "The figure in rolled-up sleeves proudly unveiling a brilliant invention to an astonished crowd. " +
        "Sparks and lights, a moment of chaotic genius. Everyone amazed.",
      relationships:
        "The figure in rolled-up sleeves and a partner building something together in the workshop, " +
        "laughing, covered in grease. Playful partnership, shared creative spark.",
      friendships:
        "The figure in rolled-up sleeves in a garage with 2-3 friends, everyone working on different " +
        "wild projects, debating ideas loudly. Creative chaos, intellectual joy.",
      parenthood:
        "The figure in rolled-up sleeves and a child building a small robot together, the child's eyes " +
        "wide with excitement. Tools and parts everywhere, learning through creation.",
      career:
        "The figure in rolled-up sleeves in a startup lab, pitching a wild idea with blueprints and " +
        "prototypes covering every surface. Investors leaning in, captivated.",
      workplace:
        "The figure in rolled-up sleeves brainstorming on a whiteboard covered in wild diagrams, " +
        "colleagues energized and debating. The room buzzes with creative energy.",
      growth:
        "The figure in rolled-up sleeves standing at the workshop door, looking out at a vast landscape " +
        "of possibilities. One finished invention in hand, a hundred more ideas ahead.",
    },
  },

  // ========================== DIPLOMATS (NF) ===============================

  INFJ: {
    code: "INFJ",
    name: "The Champion",
    group: "Diplomats",
    accentColor: "Soft Amethyst",
    accentHex: "#7B5EA7",
    essence: "Understands people at a depth that can feel almost uncanny.",
    dioramaDescription:
      "A quiet garden with a reflecting pool, lanterns glowing softly, a figure sitting in thought among ancient trees.",
    characterPrompt:
      "A serene figure in flowing robes sits beside a still reflecting pool in an ancient " +
      "walled garden. Paper lanterns glow softly in twisted old trees. Moss covers stone " +
      "paths. A journal lies open beside them. Koi fish are visible in the clear water. " +
      "Moonlight filters through branches. Accent color: soft amethyst purple. The mood " +
      "is deep, peaceful, knowing — like the figure hears something others cannot.",
    scenePrompts: {
      strengths:
        "The serene figure in flowing robes counseling someone beside the reflecting pool, the other " +
        "person visibly moved. Deep understanding, quiet wisdom. Lanterns glow around them.",
      relationships:
        "The serene figure in flowing robes and a partner walking hand in hand through the moonlit " +
        "garden. Deep connection, gentle closeness, paper lanterns lighting the stone path.",
      friendships:
        "The serene figure in flowing robes in the garden with 2-3 close friends, sitting in a circle " +
        "sharing stories. Intimate, meaningful conversation. Lanterns and moonlight.",
      parenthood:
        "The serene figure in flowing robes sitting with a child beside the reflecting pool, teaching " +
        "them to observe the koi fish. Gentle wisdom, patient nurturing.",
      career:
        "The serene figure in flowing robes in a peaceful counseling room filled with plants and soft " +
        "light. Guiding someone through a difficult moment with deep empathy.",
      workplace:
        "The serene figure in flowing robes mediating between colleagues in a meeting, everyone calming " +
        "down. A quiet authority born from deep understanding of each person.",
      growth:
        "The serene figure in flowing robes standing at the garden gate, looking out at a vast sunrise " +
        "beyond the ancient walls. A sense of expanding purpose and new understanding.",
    },
  },

  INFP: {
    code: "INFP",
    name: "The Harmonizer",
    group: "Diplomats",
    accentColor: "Dusty Rose",
    accentHex: "#C48B8B",
    essence: "Lives in a rich inner world and wants reality to match it.",
    dioramaDescription:
      "A cozy attic room with rain on the window, walls covered in paintings and poetry, a cat curled on a stack of books.",
    characterPrompt:
      "A gentle figure in an oversized sweater sits in a cozy attic room. Rain streams " +
      "down a round window. The walls are covered in watercolor paintings and pinned poems. " +
      "A sleeping cat curls on a stack of well-loved books. A mug of tea steams on the " +
      "windowsill. Fairy lights are strung along the ceiling beams. A half-written letter " +
      "sits on the desk. Accent color: dusty rose. The mood is tender, imaginative, intimate.",
    scenePrompts: {
      strengths:
        "The gentle figure in the oversized sweater reading their poetry aloud to a small audience, " +
        "everyone deeply moved. A moment of authentic creative expression touching hearts.",
      relationships:
        "The gentle figure in the oversized sweater and a partner curled up together in the attic room, " +
        "reading side by side. Rain on the window, two mugs of tea, the cat between them.",
      friendships:
        "The gentle figure in the oversized sweater in a cozy bookshop with 2-3 friends, sharing " +
        "favorite books and quiet laughter. Warm, intimate, deeply connected.",
      parenthood:
        "The gentle figure in the oversized sweater reading a storybook to a child in the attic room, " +
        "fairy lights glowing, the cat nearby. Nurturing imagination and wonder.",
      career:
        "The gentle figure in the oversized sweater at a desk covered in manuscripts and watercolors, " +
        "lost in creative flow. A published book on the shelf. Quiet artistic fulfillment.",
      workplace:
        "The gentle figure in the oversized sweater offering thoughtful feedback to a colleague in a " +
        "cozy office. Bringing warmth and meaning to the work environment.",
      growth:
        "The gentle figure in the oversized sweater stepping outside the attic into a sunlit garden, " +
        "sketchbook in hand. The rain has stopped. A new chapter of creative courage.",
    },
  },

  ENFJ: {
    code: "ENFJ",
    name: "The Hero",
    group: "Diplomats",
    accentColor: "Warm Gold",
    accentHex: "#C9982E",
    essence: "Lights the way for others and makes everyone feel seen.",
    dioramaDescription:
      "A warm town square at dusk, lanterns strung between buildings, a figure at the center of a gathering crowd.",
    characterPrompt:
      "A warm, radiant figure stands at the center of a twilight town square. Paper lanterns " +
      "and string lights glow between charming buildings. A small crowd gathers around them, " +
      "faces lit up. The figure's arms are open in a welcoming gesture. Flower boxes on " +
      "windowsills, cobblestone ground, a fountain in the background. Accent color: warm " +
      "gold. The mood is magnetic, generous, luminous.",
    scenePrompts: {
      strengths:
        "The radiant figure in the town square inspiring a crowd with open arms, faces lit up with " +
        "hope. Lanterns glow brighter. A natural leader lifting everyone around them.",
      relationships:
        "The radiant figure and a partner dancing slowly in the lantern-lit town square, alone after " +
        "the crowd has gone. Warm gold light, deep romantic connection.",
      friendships:
        "The radiant figure hosting a lively gathering in the town square, 2-3 friends laughing and " +
        "sharing stories around a fountain. Warmth, connection, everyone feels welcome.",
      parenthood:
        "The radiant figure walking through the town square holding a child's hand, pointing out the " +
        "lanterns and flowers. Teaching through wonder and care.",
      career:
        "The radiant figure leading a community meeting in the town hall, everyone engaged and " +
        "energized. Charts and plans on the wall, collaborative leadership.",
      workplace:
        "The radiant figure mentoring a younger colleague in a warm office, both leaning over plans " +
        "together. Supportive guidance, genuine investment in others' growth.",
      growth:
        "The radiant figure standing at the edge of the town square, looking down a sunlit road " +
        "leading to new communities. Dawn light, a sense of expanding influence.",
    },
  },

  ENFP: {
    code: "ENFP",
    name: "The Inspirer",
    group: "Diplomats",
    accentColor: "Coral Orange",
    accentHex: "#D4693C",
    essence: "Ignites every room with curiosity and infectious energy.",
    dioramaDescription:
      "An open-air market bursting with color — the figure is mid-conversation, juggling three different ideas, a trail of inspired people behind them.",
    characterPrompt:
      "An energetic figure in colorful layered clothing moves through a bustling open-air " +
      "market. Vibrant market stalls with fabrics, fruits, and flowers surround them. They're " +
      "mid-conversation with a vendor, gesturing excitedly, a trail of curious onlookers " +
      "behind them. Bunting and kites flutter above. A small dog follows at their heels. " +
      "Accent color: bright coral-orange. The mood is alive, curious, magnetic, joyful.",
    scenePrompts: {
      strengths:
        "The energetic figure in colorful clothing leading a group through the market, everyone " +
        "captivated by their enthusiasm. Ideas sparking everywhere, pure creative magnetism.",
      relationships:
        "The energetic figure in colorful clothing and a partner exploring the market together, " +
        "sharing bites of food and laughing. Spontaneous joy, adventurous love.",
      friendships:
        "The energetic figure in colorful clothing in the middle of a lively group of 2-3 friends " +
        "at the market, everyone talking and laughing at once. Pure social electricity.",
      parenthood:
        "The energetic figure in colorful clothing with a child on their shoulders at the market, " +
        "both pointing at colorful kites and stalls. Infectious joy, adventurous parenting.",
      career:
        "The energetic figure in colorful clothing pitching an idea to a group in a creative studio, " +
        "mood boards and sketches everywhere. The room is buzzing with possibility.",
      workplace:
        "The energetic figure in colorful clothing leading a brainstorm, sticky notes covering every " +
        "surface, colleagues energized and contributing. Creative chaos that works.",
      growth:
        "The energetic figure in colorful clothing standing at the edge of the market, looking at a " +
        "new path leading into unexplored territory. The dog beside them, ready for the next adventure.",
    },
  },

  // ========================== SENTINELS (SJ) ===============================

  ISTJ: {
    code: "ISTJ",
    name: "The Director",
    group: "Sentinels",
    accentColor: "Warm Bronze",
    accentHex: "#8B6F3C",
    essence: "The one who makes sure nothing falls apart.",
    dioramaDescription:
      "A beautifully organized clocktower interior — every gear in place, a logbook open, tools hung precisely on the wall.",
    characterPrompt:
      "A steady, composed figure in a buttoned vest stands inside a beautifully maintained " +
      "clocktower. Massive brass gears turn smoothly behind them. A leather-bound logbook " +
      "lies open on a wooden desk. Tools hang in perfect rows on a pegboard. Every surface " +
      "is clean and purposeful. Light streams through the clock face window. Accent color: " +
      "warm bronze. The mood is reliable, precise, quietly proud.",
    scenePrompts: {
      strengths:
        "The composed figure in the vest checking the clocktower mechanisms, every gear turning " +
        "perfectly. A moment of quiet pride in flawless execution and meticulous care.",
      relationships:
        "The composed figure in the vest and a partner sitting together at the desk in the clocktower, " +
        "sharing tea and comfortable silence. Steady devotion, reliability as love.",
      friendships:
        "The composed figure in the vest showing 2-3 friends the clocktower mechanisms, explaining each " +
        "gear with pride. Small gathering, deep appreciation for craftsmanship.",
      parenthood:
        "The composed figure in the vest teaching a child to wind the clock, both focused and patient. " +
        "Passing on discipline and care through hands-on instruction.",
      career:
        "The composed figure in the vest in a well-organized office, filing systems perfect, a project " +
        "completed ahead of schedule on the desk. Quiet competence.",
      workplace:
        "The composed figure in the vest reviewing a project plan with colleagues, pointing out details " +
        "others missed. Everyone trusts their thoroughness. Calm authority.",
      growth:
        "The composed figure in the vest standing at the top of the clocktower, looking out over the " +
        "town at sunrise. Everything running smoothly below, new possibilities above.",
    },
  },

  ISFJ: {
    code: "ISFJ",
    name: "The Guardian",
    group: "Sentinels",
    accentColor: "Sage Green",
    accentHex: "#6B8F5E",
    essence: "Quietly holds everything and everyone together.",
    dioramaDescription:
      "A warm kitchen with bread rising on the counter, herbs drying from the ceiling, a handwritten recipe passed down through generations.",
    characterPrompt:
      "A kind figure in a flour-dusted apron stands in a warm farmhouse kitchen. Bread is " +
      "rising on the counter. Dried herbs and lavender hang from ceiling beams. A handwritten " +
      "recipe card is propped up by a ceramic bowl. Copper pots gleam on the stove. A window " +
      "looks out onto a vegetable garden. A child's drawing is pinned to the wall. Accent " +
      "color: sage green. The mood is nurturing, steady, deeply caring.",
    scenePrompts: {
      strengths:
        "The kind figure in the apron serving a beautifully prepared meal to a grateful family. " +
        "Everything perfect and warm. A moment of quiet service that holds everyone together.",
      relationships:
        "The kind figure in the apron and a partner cooking together in the farmhouse kitchen, " +
        "laughing over a shared recipe. Flour everywhere, warmth and comfort.",
      friendships:
        "The kind figure in the apron hosting 2-3 friends for tea in the kitchen, homemade treats " +
        "on the table. Warm conversation, genuine care for each person.",
      parenthood:
        "The kind figure in the apron baking with a child, both covered in flour, the child standing " +
        "on a stool to reach the counter. Joy in nurturing the next generation.",
      career:
        "The kind figure in the apron in a warm office or clinic, helping someone with patient care " +
        "and attention. Files organized, a comforting environment they've created.",
      workplace:
        "The kind figure in the apron bringing homemade treats to a team meeting, colleagues smiling. " +
        "Creating warmth and connection in the workplace through small acts.",
      growth:
        "The kind figure in the apron standing at the kitchen window, looking at a garden in full bloom " +
        "that they planted themselves. Morning light, a sense of legacy.",
    },
  },

  ESTJ: {
    code: "ESTJ",
    name: "The Governor",
    group: "Sentinels",
    accentColor: "Forest Green",
    accentHex: "#2D5F3E",
    essence: "Keeps the world running and running well.",
    dioramaDescription:
      "A bustling town hall — schedules on the wall, a figure directing tasks with calm authority, everything in its right place.",
    characterPrompt:
      "An organized figure in a smart waistcoat stands in a sunlit town hall office. A large " +
      "scheduling board covers one wall, color-coded and precise. Filing cabinets, a wooden " +
      "desk with neatly stacked papers, a brass desk lamp. The figure holds a clipboard and " +
      "pen, mid-check on a list. A window shows a thriving town outside. Accent color: " +
      "forest green. The mood is competent, structured, proud of the order they've created.",
    scenePrompts: {
      strengths:
        "The organized figure in the waistcoat reviewing a completed project board — every task done, " +
        "every deadline met. Colleagues applauding. Pride in systems that work.",
      relationships:
        "The organized figure in the waistcoat and a partner reviewing plans together at the desk, " +
        "building something as a team. Shared goals, mutual respect.",
      friendships:
        "The organized figure in the waistcoat at a well-planned dinner party, 2-3 friends toasting. " +
        "Everything runs smoothly, everyone comfortable. Hosting done right.",
      parenthood:
        "The organized figure in the waistcoat helping a child with a project at the desk, teaching " +
        "them to organize and plan. Structured guidance, steady encouragement.",
      career:
        "The organized figure in the waistcoat overseeing a thriving operation from the town hall, " +
        "maps and schedules covering the walls. Everything running on time.",
      workplace:
        "The organized figure in the waistcoat leading a team meeting, clipboard in hand, everyone " +
        "aligned on the plan. Clear direction, no wasted effort.",
      growth:
        "The organized figure in the waistcoat standing at the town hall door, looking at the thriving " +
        "town they helped build. Sunset light, a sense of lasting accomplishment.",
    },
  },

  ESFJ: {
    code: "ESFJ",
    name: "The Anchor",
    group: "Sentinels",
    accentColor: "Sunflower Yellow",
    accentHex: "#D4A832",
    essence: "Connects people and builds community thread by thread.",
    dioramaDescription:
      "A lively village gathering — a long table set for a feast, the figure welcoming guests, flowers and bunting everywhere.",
    characterPrompt:
      "A beaming figure sets the final plate at a long outdoor feast table. The table stretches " +
      "through a sun-dappled village courtyard. Flowers in mason jars, handmade bunting, " +
      "mismatched charming chairs. Neighbors are arriving through a garden gate. A pie cools " +
      "on the windowsill of a nearby cottage. The figure waves someone over warmly. Accent " +
      "color: sunflower yellow. The mood is welcoming, abundant, deeply connected.",
    scenePrompts: {
      strengths:
        "The beaming figure welcoming the entire village to the feast table, every seat filled, " +
        "everyone happy. A moment of community perfectly orchestrated through warmth.",
      relationships:
        "The beaming figure and a partner setting the feast table together, exchanging loving glances. " +
        "Teamwork in care, building a life of shared warmth.",
      friendships:
        "The beaming figure surrounded by 2-3 friends at the feast table, laughing and sharing dishes. " +
        "The heart of every gathering, genuine joy in connection.",
      parenthood:
        "The beaming figure helping a child arrange flowers on the feast table, teaching them about " +
        "welcoming others. Passing on the gift of community.",
      career:
        "The beaming figure organizing a community event from a cheerful office, plans and guest lists " +
        "on the desk. Natural talent for bringing people together.",
      workplace:
        "The beaming figure organizing a team celebration, colleagues surprised and delighted. " +
        "Building morale and connection through thoughtful gestures.",
      growth:
        "The beaming figure standing at the garden gate, looking at a wider world beyond the village. " +
        "The feast table full behind them, new communities to connect ahead.",
    },
  },

  // ========================== EXPLORERS (SP) ===============================

  ISTP: {
    code: "ISTP",
    name: "The Master",
    group: "Explorers",
    accentColor: "Slate Grey-Blue",
    accentHex: "#4A6274",
    essence: "Quiet, capable, and completely self-reliant.",
    dioramaDescription:
      "A mountain cabin workshop — a figure repairing something mechanical, tools laid out with precision, a motorcycle parked outside.",
    characterPrompt:
      "A quiet, capable figure in a worn leather jacket stands in a mountain cabin workshop. " +
      "A motorcycle is partially disassembled on a workbench, parts organized methodically. " +
      "Hand tools and a knife are arranged precisely. A window shows pine forest and snow-capped " +
      "peaks. A camping pack sits ready by the door. A dog rests nearby. Accent color: " +
      "slate grey-blue. The mood is independent, skilled, calm under any circumstance.",
    scenePrompts: {
      strengths:
        "The capable figure in the leather jacket calmly fixing a complex engine, every tool in the " +
        "right place. A moment of total competence and focused mastery.",
      relationships:
        "The capable figure in the leather jacket and a partner sitting on the cabin porch, looking " +
        "at the mountains. Comfortable silence, the dog between them. Quiet devotion.",
      friendships:
        "The capable figure in the leather jacket and 2-3 friends working on motorcycles in the cabin " +
        "workshop, sharing tools and few words. Companionship through shared skill.",
      parenthood:
        "The capable figure in the leather jacket teaching a child to use tools at the workbench, " +
        "both focused. Hands-on learning, quiet patience, practical wisdom.",
      career:
        "The capable figure in the leather jacket in a professional workshop, solving a mechanical " +
        "problem others couldn't. Independent, trusted, essential.",
      workplace:
        "The capable figure in the leather jacket troubleshooting a system while colleagues watch, " +
        "learning from their calm expertise. Quiet authority through skill.",
      growth:
        "The capable figure in the leather jacket on the motorcycle, parked at a mountain overlook, " +
        "looking at a road winding into new territory. The dog in the sidecar.",
    },
  },

  ISFP: {
    code: "ISFP",
    name: "The Trailblazer",
    group: "Explorers",
    accentColor: "Warm Ochre",
    accentHex: "#B8863A",
    essence: "Follows beauty wherever it leads.",
    dioramaDescription:
      "A sunlit forest clearing with an easel, wildflowers, and a half-finished painting that captures something the camera never could.",
    characterPrompt:
      "A free-spirited figure in paint-stained clothes stands before an easel in a sunlit " +
      "forest clearing. The half-finished canvas captures the light in a way the eye alone " +
      "cannot. Wildflowers bloom around their bare feet. A guitar leans against a tree trunk. " +
      "Butterflies drift through dappled light. A winding path disappears into the trees " +
      "behind them. Accent color: warm ochre. The mood is present, artistic, quietly alive.",
    scenePrompts: {
      strengths:
        "The free-spirited figure in paint-stained clothes completing a stunning painting in the " +
        "forest clearing. Colors alive, nature responding. Pure artistic expression.",
      relationships:
        "The free-spirited figure in paint-stained clothes painting a partner's portrait in the " +
        "clearing, both smiling softly. Intimate creative connection, beauty as love language.",
      friendships:
        "The free-spirited figure in paint-stained clothes and 2-3 friends making art together in " +
        "the clearing. Music, painting, wildflowers. Creative companionship in nature.",
      parenthood:
        "The free-spirited figure in paint-stained clothes and a child finger-painting together in " +
        "the clearing, wildflowers around them. Nurturing creativity, joy in the moment.",
      career:
        "The free-spirited figure in paint-stained clothes at a gallery showing, their paintings on " +
        "the walls, visitors moved by the work. Quiet pride in authentic expression.",
      workplace:
        "The free-spirited figure in paint-stained clothes designing something beautiful at a studio " +
        "desk, bringing warmth and artistry to a creative team.",
      growth:
        "The free-spirited figure in paint-stained clothes walking down the winding path beyond the " +
        "clearing, guitar on their back, canvas under their arm. New landscapes to paint.",
    },
  },

  ESTP: {
    code: "ESTP",
    name: "The Dynamo",
    group: "Explorers",
    accentColor: "Burnt Sienna",
    accentHex: "#A0422A",
    essence: "Acts first, explains later, and somehow it always works out.",
    dioramaDescription:
      "A rooftop scene at golden hour — the figure mid-leap between buildings, city sprawling below, grinning.",
    characterPrompt:
      "A confident, grinning figure in a leather jacket and boots stands on a city rooftop " +
      "at golden hour. The city sprawls below in warm light. They lean casually against a " +
      "railing, wind catching their hair. A skateboard or climbing rope is nearby. The figure " +
      "looks like they just landed from a jump — or are about to make one. A bird of prey " +
      "circles overhead. Accent color: burnt sienna-red. The mood is bold, alive, fearless.",
    scenePrompts: {
      strengths:
        "The grinning figure in the leather jacket mid-action on the rooftop, pulling off something " +
        "daring while others watch in amazement. Pure confidence and split-second brilliance.",
      relationships:
        "The grinning figure in the leather jacket and a partner on the rooftop at sunset, sharing an " +
        "adrenaline-filled moment. Spontaneous romance, living fully together.",
      friendships:
        "The grinning figure in the leather jacket with 2-3 friends on the rooftop, skateboarding or " +
        "climbing, high-fiving. Action-packed friendship, shared thrills.",
      parenthood:
        "The grinning figure in the leather jacket teaching a child to skateboard on the rooftop, " +
        "both laughing. Fearless encouragement, learning through doing.",
      career:
        "The grinning figure in the leather jacket closing a deal in a fast-paced environment, " +
        "thinking on their feet. Natural charisma and quick decisive action.",
      workplace:
        "The grinning figure in the leather jacket leading a team through a crisis with calm " +
        "confidence, everyone following their lead. Thriving under pressure.",
      growth:
        "The grinning figure in the leather jacket standing on the highest rooftop, looking at a " +
        "new city on the horizon. Ready for the next challenge, always moving forward.",
    },
  },

  ESFP: {
    code: "ESFP",
    name: "The Muse",
    group: "Explorers",
    accentColor: "Night Bordeaux",
    accentHex: "#5F1919",
    essence: "Makes ordinary moments feel like celebrations.",
    dioramaDescription:
      "A street performance scene — music, dancing, an audience clapping, fairy lights strung above, pure joy radiating from the center.",
    characterPrompt:
      "A vibrant, magnetic figure stands at the center of a twilight street performance. " +
      "Fairy lights and paper lanterns glow overhead. Musicians play around them. A small " +
      "crowd claps and dances. Confetti drifts through warm air. The figure is mid-dance, " +
      "arms outstretched, radiating pure joy. Flower petals scatter at their feet. Accent " +
      "color: magenta-pink. The mood is electric, joyful, irresistible, alive.",
    scenePrompts: {
      strengths:
        "The vibrant figure mid-dance at the street performance, the entire crowd swept up in their " +
        "energy. Confetti and lights, a moment of pure magnetic joy.",
      relationships:
        "The vibrant figure and a partner dancing together in the lantern-lit street, lost in each " +
        "other. Music swelling, flower petals falling. Romance as celebration.",
      friendships:
        "The vibrant figure at the center of a group of 2-3 friends, all dancing and laughing in " +
        "the street. Fairy lights, music, pure shared joy and spontaneity.",
      parenthood:
        "The vibrant figure dancing with a child in the lantern-lit street, both laughing and " +
        "spinning. Music playing, the crowd smiling. Joy as a way of parenting.",
      career:
        "The vibrant figure performing on a proper stage, spotlight on them, audience captivated. " +
        "Natural talent meeting opportunity. The crowd on their feet.",
      workplace:
        "The vibrant figure energizing a team meeting with enthusiasm, colleagues smiling and " +
        "re-engaged. Bringing life and warmth to every environment.",
      growth:
        "The vibrant figure standing at the edge of the performance space, looking down a new street " +
        "lit with unfamiliar lanterns. New stages, new audiences, new joy ahead.",
    },
  },
};

// ---------------------------------------------------------------------------
// Helper lookups
// ---------------------------------------------------------------------------

/** All 16 type codes */
export const TYPE_CODES: TypeCode[] = Object.keys(CHARACTERS) as TypeCode[];

/** Get a character by type code */
export function getCharacter(code: TypeCode): Character {
  return CHARACTERS[code];
}

/** Get all characters in a group */
export function getCharactersByGroup(group: TypeGroup): Character[] {
  return TYPE_CODES.map((c) => CHARACTERS[c]).filter((ch) => ch.group === group);
}

/** Get the canonical name for a type code, e.g. "The Mastermind" */
export function getCharacterName(code: TypeCode): string {
  return CHARACTERS[code].name;
}

/** Get the accent hex color for a type code */
export function getAccentHex(code: TypeCode): string {
  return CHARACTERS[code].accentHex;
}

/**
 * Resolve the public asset path for a character image.
 * Returns e.g. "/characters/intj/intj-portrait.png"
 */
export function getCharacterAssetPath(code: TypeCode, asset: AssetType): string {
  const lower = code.toLowerCase();
  return `/characters/${lower}/${lower}-${asset}.png`;
}

/**
 * Groups metadata for display purposes.
 */
export const TYPE_GROUPS: { group: TypeGroup; label: string; codes: TypeCode[] }[] = [
  { group: "Analysts", label: "The Analysts", codes: ["INTJ", "INTP", "ENTJ", "ENTP"] },
  { group: "Diplomats", label: "The Diplomats", codes: ["INFJ", "INFP", "ENFJ", "ENFP"] },
  { group: "Sentinels", label: "The Sentinels", codes: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"] },
  { group: "Explorers", label: "The Explorers", codes: ["ISTP", "ISFP", "ESTP", "ESFP"] },
];
