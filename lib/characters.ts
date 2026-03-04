// ============================================================================
// Centralized Character Metadata — Single Source of Truth
// ============================================================================
// Every personality type's name, color, prompts, and scene descriptions live
// here. Import from this file whenever you need character data anywhere in the
// app. All prompts target the SVG line-art style used across the icon system.
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
  /** Line-art character description prompt */
  characterPrompt: string;
  /** Scene-specific prompts for article illustrations */
  scenePrompts: Record<SceneType, string>;
}

// ---------------------------------------------------------------------------
// Style Directives — appended to prompts for visual consistency
// ---------------------------------------------------------------------------

export const STYLE_DIRECTIVES = {
  /** For scene-based illustrations (career, growth, relationships, strengths, reveal) */
  scene: "clean black linework on white background, single consistent stroke weight, editorial illustration style",
  /** For avatar/profile icons (small, circular, badge-like) */
  avatar: "contained within a circle, single stroke weight, black on white, minimalist line art",
} as const;

// ---------------------------------------------------------------------------
// Asset-type modifiers — appended after the character prompt
// ---------------------------------------------------------------------------

export const ASSET_MODIFIERS: Record<AssetType, { suffix: string; ar: string }> = {
  portrait: {
    suffix: "Single character full body portrait, centered, clean linework.",
    ar: "3:4",
  },
  reveal: {
    suffix: "Wide composition, character in their environment facing the viewer, bold framing.",
    ar: "16:9",
  },
  avatar: {
    suffix: "Minimalist portrait icon, head and shoulders, contained within a circle.",
    ar: "1:1",
  },
  "hero-banner": {
    suffix: "Wide panoramic composition with 2-3 supporting elements in the background.",
    ar: "32:9",
  },
  strengths: { suffix: "", ar: "16:10" },
  relationships: { suffix: "", ar: "16:10" },
  friendships: { suffix: "", ar: "16:10" },
  parenthood: { suffix: "", ar: "16:10" },
  career: { suffix: "", ar: "16:10" },
  workplace: { suffix: "", ar: "16:10" },
  growth: { suffix: "", ar: "16:10" },
  "social-card": { suffix: "", ar: "1200x630" },
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
    characterPrompt:
      "Line art illustration of a solitary figure standing before a wall of architectural blueprints and strategic diagrams, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, cerebral and commanding",
    scenePrompts: {
      strengths:
        "Line art illustration of hands arranging a complex architectural model with precise tools laid out methodically on a drafting table, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, masterful and strategic",
      relationships:
        "Line art illustration of two people in deep conversation across a table with a chess board between them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, thoughtful and selective",
      friendships:
        "Line art illustration of two figures studying a large star chart together in a quiet library alcove, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, intellectual and reserved",
      parenthood:
        "Line art illustration of a person guiding a child through a telescope pointed at the night sky with constellations mapped above, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, patient and visionary",
      career:
        "Line art illustration of a person reviewing complex diagrams on a large planning board with chess pieces on the desk beside them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, analytical and precise",
      workplace:
        "Line art illustration of a person presenting a structured flowchart to attentive colleagues in a minimal meeting room, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, authoritative and clear",
      growth:
        "Line art illustration of a person sitting in quiet contemplation in a minimal space with a single plant growing through geometric scaffolding, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, introspective and evolving",
    },
  },

  INTP: {
    code: "INTP",
    name: "The Philosopher",
    group: "Analysts",
    accentColor: "Deep Teal",
    accentHex: "#1A6B5C",
    essence: "Endlessly combining ideas to see what happens.",
    characterPrompt:
      "Line art illustration of a figure surrounded by open books and floating geometric shapes in an abstract study, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, curious and absorbed",
    scenePrompts: {
      strengths:
        "Line art illustration of a person standing before a chalkboard covered in elegant interconnected equations and diagrams, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, brilliant and unconventional",
      relationships:
        "Line art illustration of two people sitting on opposite ends of a long table sharing a single book of puzzles between them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, quiet and intellectually intimate",
      friendships:
        "Line art illustration of two figures debating over a table covered in scattered papers and a half-built mechanical model, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, playful and theoretical",
      parenthood:
        "Line art illustration of a parent and child building a complex geometric structure from simple shapes on the floor, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, patient and exploratory",
      career:
        "Line art illustration of a person at a workbench surrounded by instruments and a notebook of sketched hypotheses, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, focused and inventive",
      workplace:
        "Line art illustration of a person drawing a conceptual diagram on a whiteboard while a colleague watches with interest, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, insightful and understated",
      growth:
        "Line art illustration of a person stepping through a doorway from a cluttered room into a wide open landscape of rolling hills, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, expansive and searching",
    },
  },

  ENTJ: {
    code: "ENTJ",
    name: "The Executive",
    group: "Analysts",
    accentColor: "Rich Burgundy",
    accentHex: "#6B1D2A",
    essence: "Knows where the ship is going and exactly how to get there.",
    characterPrompt:
      "Line art illustration of a confident figure standing at the helm of a ship with navigation maps spread on the table beside them, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, decisive and powerful",
    scenePrompts: {
      strengths:
        "Line art illustration of a person standing at a podium before a large organizational chart radiating outward like a tree, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, commanding and visionary",
      relationships:
        "Line art illustration of two people standing shoulder to shoulder at a ship's bow looking toward the horizon together, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, ambitious and united",
      friendships:
        "Line art illustration of a figure raising a glass at the head of a long dinner table with two companions in lively discussion, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, warm and authoritative",
      parenthood:
        "Line art illustration of a person handing a compass to a child standing on a hilltop with paths branching out below, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, guiding and empowering",
      career:
        "Line art illustration of a person directing strategy on a large wall-mounted map with pins and connecting lines, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, bold and methodical",
      workplace:
        "Line art illustration of a person leading a meeting at a long table with colleagues leaning in attentively, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, decisive and structured",
      growth:
        "Line art illustration of a person standing at the edge of a cliff surveying a vast uncharted valley below at dawn, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, reflective and forward-looking",
    },
  },

  ENTP: {
    code: "ENTP",
    name: "The Visionary",
    group: "Analysts",
    accentColor: "Electric Amber",
    accentHex: "#D4880F",
    essence: "Builds things nobody asked for that everyone ends up needing.",
    characterPrompt:
      "Line art illustration of an animated figure in a workshop holding up a glowing lightbulb contraption surrounded by half-built inventions, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, playful and brilliant",
    scenePrompts: {
      strengths:
        "Line art illustration of a person unveiling a complex Rube Goldberg machine to an astonished small audience, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, inventive and charismatic",
      relationships:
        "Line art illustration of two people collaborating on a whiteboard covered in wild interconnected sketches and arrows, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, spontaneous and electric",
      friendships:
        "Line art illustration of a figure juggling three different objects while two friends watch and laugh in a cluttered studio, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, witty and energetic",
      parenthood:
        "Line art illustration of a parent and child launching a handmade paper airplane from a rooftop with the city skyline beyond, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, inventive and joyful",
      career:
        "Line art illustration of a person pitching an idea with animated gestures before a wall of sketched prototypes and diagrams, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, persuasive and visionary",
      workplace:
        "Line art illustration of a person rapidly sketching on a whiteboard while colleagues call out suggestions around a table, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, dynamic and collaborative",
      growth:
        "Line art illustration of a person standing at a crossroads of many diverging paths each marked with a different symbol, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, restless and curious",
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
    characterPrompt:
      "Line art illustration of a serene figure sitting beside a still reflecting pool in a walled garden with paper lanterns in the trees, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, deep and perceptive",
    scenePrompts: {
      strengths:
        "Line art illustration of a person gently holding a glowing lantern that illuminates a dark winding path for another figure walking ahead, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, wise and guiding",
      relationships:
        "Line art illustration of two people walking hand in hand through a moonlit garden archway covered in climbing vines, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, intimate and soulful",
      friendships:
        "Line art illustration of two figures sitting in a circle of paper lanterns sharing a quiet meaningful conversation, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, rare and deep",
      parenthood:
        "Line art illustration of a person kneeling beside a child at the edge of a pond watching ripples spread from a dropped stone, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, gentle and insightful",
      career:
        "Line art illustration of a person in a peaceful counseling room with two chairs facing each other and a single flowering branch in a vase, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, empathetic and purposeful",
      workplace:
        "Line art illustration of a person mediating between two colleagues with open hands at a round table, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, harmonizing and calm",
      growth:
        "Line art illustration of a person standing at an open garden gate looking out at a vast sunrise over distant mountains, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, awakening and expansive",
    },
  },

  INFP: {
    code: "INFP",
    name: "The Harmonizer",
    group: "Diplomats",
    accentColor: "Dusty Rose",
    accentHex: "#C48B8B",
    essence: "Lives in a rich inner world and wants reality to match it.",
    characterPrompt:
      "Line art illustration of a gentle figure curled up in an attic window seat with an open journal and a sleeping cat beside stacked books, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, tender and imaginative",
    scenePrompts: {
      strengths:
        "Line art illustration of a person reading poetry aloud from an open book with delicate flowers growing from the pages, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, authentic and moving",
      relationships:
        "Line art illustration of two people sitting side by side on a window seat sharing one open book between them while rain falls outside, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, quiet and devoted",
      friendships:
        "Line art illustration of two figures browsing together in a cozy bookshop with tall shelves and a ladder, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, gentle and loyal",
      parenthood:
        "Line art illustration of a person reading a storybook to a child under a blanket fort made of draped fabric and fairy lights, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, nurturing and whimsical",
      career:
        "Line art illustration of a person at a writing desk surrounded by pinned poems and watercolor sketches on the wall, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, creative and sincere",
      workplace:
        "Line art illustration of a person offering a handwritten note of encouragement to a colleague across a shared desk, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, thoughtful and compassionate",
      growth:
        "Line art illustration of a person stepping outside from a cozy room into a sunlit meadow with a sketchbook under their arm, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, brave and hopeful",
    },
  },

  ENFJ: {
    code: "ENFJ",
    name: "The Hero",
    group: "Diplomats",
    accentColor: "Warm Gold",
    accentHex: "#C9982E",
    essence: "Lights the way for others and makes everyone feel seen.",
    characterPrompt:
      "Line art illustration of a radiant figure standing at the center of a town square with open arms and string lights overhead, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, magnetic and generous",
    scenePrompts: {
      strengths:
        "Line art illustration of a person standing on a small stage with arms open while a seated audience leans in with inspired expressions, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, uplifting and charismatic",
      relationships:
        "Line art illustration of two people dancing together under a canopy of string lights in an empty courtyard, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, romantic and attentive",
      friendships:
        "Line art illustration of a person at the center of a small group gathered around a fountain sharing stories and laughter, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, warm and inclusive",
      parenthood:
        "Line art illustration of a person walking with a child through a garden pointing out blooming flowers along the path, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, caring and encouraging",
      career:
        "Line art illustration of a person leading a collaborative meeting with a vision board on the wall and colleagues contributing ideas, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, inspiring and organized",
      workplace:
        "Line art illustration of a person mentoring a younger colleague over shared plans at a desk with encouraging gestures, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, supportive and invested",
      growth:
        "Line art illustration of a person standing at the edge of a town square looking down a sunlit road that leads to new communities, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, purposeful and expansive",
    },
  },

  ENFP: {
    code: "ENFP",
    name: "The Inspirer",
    group: "Diplomats",
    accentColor: "Coral Orange",
    accentHex: "#D4693C",
    essence: "Ignites every room with curiosity and infectious energy.",
    characterPrompt:
      "Line art illustration of an energetic figure mid-stride through a bustling open-air market with kites and bunting overhead, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, alive and curious",
    scenePrompts: {
      strengths:
        "Line art illustration of a person surrounded by floating lightbulbs and sparks of energy radiating outward in all directions, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, magnetic and creative",
      relationships:
        "Line art illustration of two people exploring a winding market street together sharing bites of food and pointing at discoveries, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, adventurous and joyful",
      friendships:
        "Line art illustration of a figure at the center of a lively small group all talking and gesturing at once in an outdoor cafe, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, social and electric",
      parenthood:
        "Line art illustration of a person with a child on their shoulders both reaching up to catch a kite string in a breezy open field, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, playful and free",
      career:
        "Line art illustration of a person pitching an idea with animated gestures in front of a wall covered in colorful sticky notes and sketches, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, enthusiastic and inventive",
      workplace:
        "Line art illustration of a person leading a brainstorm with sticky notes flying onto every surface while colleagues contribute eagerly, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, dynamic and collaborative",
      growth:
        "Line art illustration of a person standing at the edge of a market looking at a forking path with symbols of different possibilities, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, restless and optimistic",
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
    characterPrompt:
      "Line art illustration of a composed figure standing inside a clocktower with large gears turning behind them and a logbook open on the desk, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, reliable and precise",
    scenePrompts: {
      strengths:
        "Line art illustration of a person inspecting a perfectly running clockwork mechanism with every gear aligned and turning smoothly, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, meticulous and proud",
      relationships:
        "Line art illustration of two people sitting quietly together at a sturdy wooden desk sharing tea and comfortable silence, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, steady and devoted",
      friendships:
        "Line art illustration of a person showing a detailed scale model to a friend with careful pride in a tidy workshop, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, dependable and genuine",
      parenthood:
        "Line art illustration of a person teaching a child to wind a clock mechanism with patient hands and focused attention, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, patient and disciplined",
      career:
        "Line art illustration of a person at a well-organized desk with neatly filed folders and a completed checklist, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, competent and thorough",
      workplace:
        "Line art illustration of a person reviewing a project timeline chart on a wall while colleagues take notes behind them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, trustworthy and methodical",
      growth:
        "Line art illustration of a person standing at the top of a clocktower looking through an open window at a sunrise over the rooftops, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, grounded and hopeful",
    },
  },

  ISFJ: {
    code: "ISFJ",
    name: "The Guardian",
    group: "Sentinels",
    accentColor: "Sage Green",
    accentHex: "#6B8F5E",
    essence: "Quietly holds everything and everyone together.",
    characterPrompt:
      "Line art illustration of a kind figure in a warm kitchen with bread rising on the counter and herbs hanging from the ceiling, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, nurturing and steady",
    scenePrompts: {
      strengths:
        "Line art illustration of hands carefully arranging a lovingly prepared meal on a table set for a family gathering, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, devoted and selfless",
      relationships:
        "Line art illustration of two people cooking together in a cozy kitchen with a handwritten recipe card propped on the counter, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, warm and partnered",
      friendships:
        "Line art illustration of a person pouring tea for a friend at a small kitchen table with homemade treats between them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, caring and sincere",
      parenthood:
        "Line art illustration of a person and child baking together at a flour-dusted counter with the child standing on a step stool, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, tender and protective",
      career:
        "Line art illustration of a person tending to a patient in a warm clinic room with organized shelves and gentle lighting, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, compassionate and reliable",
      workplace:
        "Line art illustration of a person quietly organizing a shared workspace with care while a colleague works nearby, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, supportive and consistent",
      growth:
        "Line art illustration of a person standing at a kitchen window looking at a garden in full bloom that they tended themselves, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, fulfilled and blossoming",
    },
  },

  ESTJ: {
    code: "ESTJ",
    name: "The Governor",
    group: "Sentinels",
    accentColor: "Forest Green",
    accentHex: "#2D5F3E",
    essence: "Keeps the world running and running well.",
    characterPrompt:
      "Line art illustration of an organized figure standing in a town hall office with a scheduling board on the wall and stacked papers on the desk, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, competent and structured",
    scenePrompts: {
      strengths:
        "Line art illustration of a person checking off the final item on a large wall-mounted task board with every row completed, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, accomplished and systematic",
      relationships:
        "Line art illustration of two people reviewing building plans together at a shared desk with mutual respect and focus, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, partnered and goal-oriented",
      friendships:
        "Line art illustration of a person hosting a well-set dinner table with two friends raising glasses in a toast, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, generous and organized",
      parenthood:
        "Line art illustration of a person helping a child organize a project on a desk with labeled folders and a clear plan, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, guiding and structured",
      career:
        "Line art illustration of a person overseeing a large operational map with interconnected systems and timelines on the wall, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, commanding and efficient",
      workplace:
        "Line art illustration of a person leading a team meeting at the head of a table with a clear agenda written on a board behind them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, direct and respected",
      growth:
        "Line art illustration of a person standing at the door of a town hall looking out at a thriving community they helped build, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, proud and evolving",
    },
  },

  ESFJ: {
    code: "ESFJ",
    name: "The Anchor",
    group: "Sentinels",
    accentColor: "Sunflower Yellow",
    accentHex: "#D4A832",
    essence: "Connects people and builds community thread by thread.",
    characterPrompt:
      "Line art illustration of a beaming figure setting a long outdoor feast table in a sun-dappled courtyard with flowers in mason jars, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, welcoming and abundant",
    scenePrompts: {
      strengths:
        "Line art illustration of a person placing the final centerpiece on a long table with every seat filled and guests arriving through a gate, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, hospitable and connected",
      relationships:
        "Line art illustration of two people setting a beautiful table together exchanging warm glances across the flowers and plates, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, loving and cooperative",
      friendships:
        "Line art illustration of a person at the center of a small group of friends sharing dishes around an outdoor table with bunting above, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, joyful and inclusive",
      parenthood:
        "Line art illustration of a person teaching a child to arrange flowers in a vase at a garden table with care and patience, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, gentle and community-minded",
      career:
        "Line art illustration of a person coordinating a community event from a desk covered in guest lists and seating charts, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, organized and people-focused",
      workplace:
        "Line art illustration of a person surprising colleagues with a celebration at the office with handmade decorations and treats, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, thoughtful and morale-building",
      growth:
        "Line art illustration of a person standing at a garden gate looking beyond the courtyard toward a wider world of new communities, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, open and expanding",
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
    characterPrompt:
      "Line art illustration of a quiet capable figure in a mountain cabin workshop with a disassembled motorcycle on the workbench and tools organized on the wall, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, independent and skilled",
    scenePrompts: {
      strengths:
        "Line art illustration of hands calmly reassembling a complex engine with every tool precisely positioned on the workbench, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, competent and focused",
      relationships:
        "Line art illustration of two people sitting on a cabin porch looking at distant mountains in comfortable silence with a dog nearby, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, quiet and loyal",
      friendships:
        "Line art illustration of two figures working side by side on separate mechanical projects in a shared workshop exchanging few words, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, independent and bonded",
      parenthood:
        "Line art illustration of a person handing a child a wrench at a workbench both focused on a small project together, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, practical and patient",
      career:
        "Line art illustration of a person troubleshooting a complex mechanical system with calm precision while others watch and learn, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, essential and self-reliant",
      workplace:
        "Line art illustration of a person diagnosing a technical problem at a panel while a colleague observes their methodical approach, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, resourceful and calm",
      growth:
        "Line art illustration of a person on a motorcycle parked at a mountain overlook looking at a road winding into unknown territory, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, free and searching",
    },
  },

  ISFP: {
    code: "ISFP",
    name: "The Trailblazer",
    group: "Explorers",
    accentColor: "Warm Ochre",
    accentHex: "#B8863A",
    essence: "Follows beauty wherever it leads.",
    characterPrompt:
      "Line art illustration of a free-spirited figure painting at an easel in a sunlit forest clearing with wildflowers at their feet, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, present and artistic",
    scenePrompts: {
      strengths:
        "Line art illustration of a person completing a bold painting on a large canvas in an outdoor clearing with nature responding around them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, expressive and authentic",
      relationships:
        "Line art illustration of a person sketching a portrait of someone sitting across from them in a quiet sunlit meadow, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, intimate and creative",
      friendships:
        "Line art illustration of two figures making art side by side in a forest clearing with a guitar leaning against a tree nearby, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, free and connected",
      parenthood:
        "Line art illustration of a person and child finger-painting together on the ground surrounded by wildflowers and scattered art supplies, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, joyful and present",
      career:
        "Line art illustration of a person standing before their artwork displayed on simple gallery walls with a viewer contemplating the work, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, proud and quietly fulfilled",
      workplace:
        "Line art illustration of a person designing something beautiful at a studio desk with fabric swatches and sketches pinned to a board, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, artistic and detail-oriented",
      growth:
        "Line art illustration of a person walking down a winding forest path with a canvas roll under their arm heading toward a distant clearing, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, adventurous and open",
    },
  },

  ESTP: {
    code: "ESTP",
    name: "The Dynamo",
    group: "Explorers",
    accentColor: "Burnt Sienna",
    accentHex: "#A0422A",
    essence: "Acts first, explains later, and somehow it always works out.",
    characterPrompt:
      "Line art illustration of a confident figure standing on a city rooftop at sunset leaning against a railing with the skyline sprawling below, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, bold and fearless",
    scenePrompts: {
      strengths:
        "Line art illustration of a person mid-leap between rooftop ledges with the city far below radiating confidence and precision, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, daring and quick",
      relationships:
        "Line art illustration of two people standing together on a rooftop watching a sunset with wind catching their hair, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, spontaneous and passionate",
      friendships:
        "Line art illustration of a figure high-fiving a friend on a rooftop with skateboards at their feet and the city skyline behind, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, thrilling and loyal",
      parenthood:
        "Line art illustration of a person steadying a child on a skateboard in a park with encouraging body language, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, fearless and fun",
      career:
        "Line art illustration of a person closing a handshake deal in a fast-paced environment with charts and momentum symbols around them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, decisive and charismatic",
      workplace:
        "Line art illustration of a person calmly directing a team through a crisis with confident gestures and a whiteboard of rapid solutions, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, cool and action-oriented",
      growth:
        "Line art illustration of a person standing on the tallest rooftop looking at a new city on the distant horizon with open arms, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, restless and ambitious",
    },
  },

  ESFP: {
    code: "ESFP",
    name: "The Muse",
    group: "Explorers",
    accentColor: "Night Bordeaux",
    accentHex: "#5F1919",
    essence: "Makes ordinary moments feel like celebrations.",
    characterPrompt:
      "Line art illustration of a vibrant figure mid-dance at a twilight street performance with fairy lights and paper lanterns overhead, " +
      "clean black linework on white background, single consistent stroke weight, editorial illustration style, electric and joyful",
    scenePrompts: {
      strengths:
        "Line art illustration of a person performing on a small stage with arms outstretched and a captivated audience swaying below, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, magnetic and alive",
      relationships:
        "Line art illustration of two people dancing together under string lights in an empty cobblestone street at night, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, romantic and spontaneous",
      friendships:
        "Line art illustration of a figure at the center of a small dancing group on a lantern-lit street with music notes drifting in the air, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, joyful and infectious",
      parenthood:
        "Line art illustration of a person spinning a laughing child in a dance on a lantern-lit path with petals floating around them, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, playful and loving",
      career:
        "Line art illustration of a person performing under a spotlight on a proper stage with the audience on their feet applauding, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, talented and radiant",
      workplace:
        "Line art illustration of a person energizing a meeting room with animated storytelling while colleagues smile and lean forward, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, warm and engaging",
      growth:
        "Line art illustration of a person standing at the end of a performance street looking down a new path lit by unfamiliar lanterns, " +
        "clean black linework on white background, single consistent stroke weight, editorial illustration style, curious and unstoppable",
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
 * Returns e.g. "/characters/intj/intj-portrait.svg"
 */
export function getCharacterAssetPath(code: TypeCode, asset: AssetType): string {
  const lower = code.toLowerCase();
  return `/characters/${lower}/${lower}-${asset}.svg`;
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
