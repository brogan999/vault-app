import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Knowledge Base — The Vault",
    description:
      "Deep dives into every framework on the platform — personality types, Big Five, Enneagram, astrology, numerology, Human Design, and more.",
  };
}

/* ------------------------------------------------------------------ */
/*  Content data — full copy provided by the user                     */
/* ------------------------------------------------------------------ */

interface KBArticle {
  title: string;
  bold?: string; // optional bold prefix
}

interface KBSubsection {
  heading: string;
  articles: KBArticle[];
}

interface KBSection {
  title: string;
  subtitle: string;
  subsections: KBSubsection[];
}

const SECTIONS: KBSection[] = [
  /* ------ Personality Types ------ */
  {
    title: "Personality Types",
    subtitle:
      "Sixteen ways of moving through the world \u2014 each brought to life as a miniature world with its own character and story.",
    subsections: [
      {
        heading: "The Analysts",
        articles: [
          { title: "Portrait of a Strategic Mind", bold: "The Cartographer (INTJ)" },
          { title: "Strengths & Blind Spots", bold: "The Cartographer (INTJ)" },
          { title: "In Relationships", bold: "The Cartographer (INTJ)" },
          { title: "At Work", bold: "The Cartographer (INTJ)" },
          { title: "Growth Path", bold: "The Cartographer (INTJ)" },
          { title: "Portrait of a Restless Thinker", bold: "The Alchemist (INTP)" },
          { title: "Strengths & Blind Spots", bold: "The Alchemist (INTP)" },
          { title: "In Relationships", bold: "The Alchemist (INTP)" },
          { title: "At Work", bold: "The Alchemist (INTP)" },
          { title: "Growth Path", bold: "The Alchemist (INTP)" },
          { title: "Portrait of a Natural Commander", bold: "The Captain (ENTJ)" },
          { title: "Strengths & Blind Spots", bold: "The Captain (ENTJ)" },
          { title: "In Relationships", bold: "The Captain (ENTJ)" },
          { title: "At Work", bold: "The Captain (ENTJ)" },
          { title: "Growth Path", bold: "The Captain (ENTJ)" },
          { title: "Portrait of an Idea Machine", bold: "The Inventor (ENTP)" },
          { title: "Strengths & Blind Spots", bold: "The Inventor (ENTP)" },
          { title: "In Relationships", bold: "The Inventor (ENTP)" },
          { title: "At Work", bold: "The Inventor (ENTP)" },
          { title: "Growth Path", bold: "The Inventor (ENTP)" },
        ],
      },
      {
        heading: "The Diplomats",
        articles: [
          { title: "Portrait of a Quiet Visionary", bold: "The Oracle (INFJ)" },
          { title: "Strengths & Blind Spots", bold: "The Oracle (INFJ)" },
          { title: "In Relationships", bold: "The Oracle (INFJ)" },
          { title: "At Work", bold: "The Oracle (INFJ)" },
          { title: "Growth Path", bold: "The Oracle (INFJ)" },
          { title: "Portrait of an Inner World", bold: "The Dreamer (INFP)" },
          { title: "Strengths & Blind Spots", bold: "The Dreamer (INFP)" },
          { title: "In Relationships", bold: "The Dreamer (INFP)" },
          { title: "At Work", bold: "The Dreamer (INFP)" },
          { title: "Growth Path", bold: "The Dreamer (INFP)" },
          { title: "Portrait of a Born Catalyst", bold: "The Beacon (ENFJ)" },
          { title: "Strengths & Blind Spots", bold: "The Beacon (ENFJ)" },
          { title: "In Relationships", bold: "The Beacon (ENFJ)" },
          { title: "At Work", bold: "The Beacon (ENFJ)" },
          { title: "Growth Path", bold: "The Beacon (ENFJ)" },
          { title: "Portrait of a Creative Force", bold: "The Spark (ENFP)" },
          { title: "Strengths & Blind Spots", bold: "The Spark (ENFP)" },
          { title: "In Relationships", bold: "The Spark (ENFP)" },
          { title: "At Work", bold: "The Spark (ENFP)" },
          { title: "Growth Path", bold: "The Spark (ENFP)" },
        ],
      },
      {
        heading: "The Sentinels",
        articles: [
          { title: "Portrait of a Steady Foundation", bold: "The Sentinel (ISTJ)" },
          { title: "Strengths & Blind Spots", bold: "The Sentinel (ISTJ)" },
          { title: "In Relationships", bold: "The Sentinel (ISTJ)" },
          { title: "At Work", bold: "The Sentinel (ISTJ)" },
          { title: "Growth Path", bold: "The Sentinel (ISTJ)" },
          { title: "Portrait of a Quiet Protector", bold: "The Guardian (ISFJ)" },
          { title: "Strengths & Blind Spots", bold: "The Guardian (ISFJ)" },
          { title: "In Relationships", bold: "The Guardian (ISFJ)" },
          { title: "At Work", bold: "The Guardian (ISFJ)" },
          { title: "Growth Path", bold: "The Guardian (ISFJ)" },
          { title: "Portrait of an Organizer", bold: "The Steward (ESTJ)" },
          { title: "Strengths & Blind Spots", bold: "The Steward (ESTJ)" },
          { title: "In Relationships", bold: "The Steward (ESTJ)" },
          { title: "At Work", bold: "The Steward (ESTJ)" },
          { title: "Growth Path", bold: "The Steward (ESTJ)" },
          { title: "Portrait of a Community Builder", bold: "The Weaver (ESFJ)" },
          { title: "Strengths & Blind Spots", bold: "The Weaver (ESFJ)" },
          { title: "In Relationships", bold: "The Weaver (ESFJ)" },
          { title: "At Work", bold: "The Weaver (ESFJ)" },
          { title: "Growth Path", bold: "The Weaver (ESFJ)" },
        ],
      },
      {
        heading: "The Explorers",
        articles: [
          { title: "Portrait of a Hands-On Problem Solver", bold: "The Ranger (ISTP)" },
          { title: "Strengths & Blind Spots", bold: "The Ranger (ISTP)" },
          { title: "In Relationships", bold: "The Ranger (ISTP)" },
          { title: "At Work", bold: "The Ranger (ISTP)" },
          { title: "Growth Path", bold: "The Ranger (ISTP)" },
          { title: "Portrait of a Quiet Artist", bold: "The Wanderer (ISFP)" },
          { title: "Strengths & Blind Spots", bold: "The Wanderer (ISFP)" },
          { title: "In Relationships", bold: "The Wanderer (ISFP)" },
          { title: "At Work", bold: "The Wanderer (ISFP)" },
          { title: "Growth Path", bold: "The Wanderer (ISFP)" },
          { title: "Portrait of an Action-First Thinker", bold: "The Maverick (ESTP)" },
          { title: "Strengths & Blind Spots", bold: "The Maverick (ESTP)" },
          { title: "In Relationships", bold: "The Maverick (ESTP)" },
          { title: "At Work", bold: "The Maverick (ESTP)" },
          { title: "Growth Path", bold: "The Maverick (ESTP)" },
          { title: "Portrait of a Living Spark", bold: "The Muse (ESFP)" },
          { title: "Strengths & Blind Spots", bold: "The Muse (ESFP)" },
          { title: "In Relationships", bold: "The Muse (ESFP)" },
          { title: "At Work", bold: "The Muse (ESFP)" },
          { title: "Growth Path", bold: "The Muse (ESFP)" },
        ],
      },
    ],
  },

  /* ------ Big Five ------ */
  {
    title: "Big Five (OCEAN)",
    subtitle:
      "The gold standard of personality science \u2014 five dimensions, infinite combinations.",
    subsections: [
      {
        heading: "The Five Dimensions",
        articles: [
          { title: "What It Means to Be Curious (and What It Means Not to Be)", bold: "Openness" },
          { title: "The Spectrum From Free Spirit to Architect", bold: "Conscientiousness" },
          { title: 'Beyond "Outgoing" \u2014 What This Dimension Really Measures', bold: "Extraversion" },
          { title: "Warmth, Trust, and the Cost of Always Being Nice", bold: "Agreeableness" },
          { title: "The Dimension Nobody Wants (and Why It Matters)", bold: "Neuroticism" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "Understanding Your Facets \u2014 The Six Sub-Traits Within Each Dimension" },
          { title: "What Your Big Five Profile Actually Tells You (And What It Doesn\u2019t)" },
          { title: "Big Five Combinations \u2014 When High Openness Meets Low Conscientiousness" },
          { title: "The Science Behind the Scores \u2014 How We Validate Our Assessment" },
          { title: "Big Five vs. Personality Types \u2014 Two Maps of the Same Territory" },
          { title: "How Your Big Five Profile Changes Over Your Lifetime" },
        ],
      },
    ],
  },

  /* ------ Enneagram ------ */
  {
    title: "Enneagram",
    subtitle:
      "Nine core motivations \u2014 the desires and fears that shape everything.",
    subsections: [
      {
        heading: "The Nine Types",
        articles: [
          { title: "The Drive to Be Good", bold: "Type 1: The Reformer" },
          { title: "The Drive to Be Needed", bold: "Type 2: The Helper" },
          { title: "The Drive to Succeed", bold: "Type 3: The Achiever" },
          { title: "The Drive to Be Unique", bold: "Type 4: The Individualist" },
          { title: "The Drive to Understand", bold: "Type 5: The Investigator" },
          { title: "The Drive to Be Secure", bold: "Type 6: The Loyalist" },
          { title: "The Drive to Be Free", bold: "Type 7: The Enthusiast" },
          { title: "The Drive to Be Strong", bold: "Type 8: The Challenger" },
          { title: "The Drive to Be at Peace", bold: "Type 9: The Peacemaker" },
        ],
      },
      {
        heading: "Enneagram Deep Dives",
        articles: [
          { title: "Wings \u2014 The Types on Either Side of You" },
          { title: "Growth and Stress Arrows \u2014 Where You Go Under Pressure (and In Health)" },
          { title: "Enneagram and Instinctual Variants \u2014 Self-Preservation, Social, and One-to-One" },
          { title: "The Enneagram\u2019s Complicated Relationship With Science" },
          { title: "Enneagram vs. Big Five \u2014 Motivation vs. Behavior" },
          { title: "How to Use Your Enneagram Type Without Boxing Yourself In" },
        ],
      },
    ],
  },

  /* ------ Work Style Profile ------ */
  {
    title: "Work Style Profile",
    subtitle:
      "How you collaborate, communicate, and lead \u2014 the practical side of personality.",
    subsections: [
      {
        heading: "The Four Styles",
        articles: [
          { title: "The Drive to Shape Results", bold: "Dominance" },
          { title: "The Drive to Inspire and Connect", bold: "Influence" },
          { title: "The Drive to Create Stability", bold: "Steadiness" },
          { title: "The Drive to Get It Right", bold: "Conscientiousness" },
        ],
      },
      {
        heading: "Work Style Deep Dives",
        articles: [
          { title: "Your Work Style Blend \u2014 Why Nobody Is Just One Style" },
          { title: "Working With Someone Whose Style Clashes With Yours" },
          { title: "Work Styles and Team Dynamics \u2014 Building a Balanced Team" },
          { title: "How to Give Feedback to Each Work Style" },
          { title: "Leadership Through Each Style \u2014 Four Ways to Lead" },
          { title: "When Your Work Style Meets Your Personality Type" },
        ],
      },
    ],
  },

  /* ------ Western Astrology ------ */
  {
    title: "Western astrology",
    subtitle:
      "The sky at the moment you were born \u2014 a symbolic map of your inner landscape.",
    subsections: [
      {
        heading: "The Basics",
        articles: [
          { title: "Your Sun Sign \u2014 The Core of Who You Are" },
          { title: "Your Moon Sign \u2014 The Inner World Nobody Sees" },
          { title: "Your Rising Sign \u2014 The First Impression You Make" },
          { title: "Beyond the Big Three \u2014 Planets, Houses, and Aspects" },
          { title: "Why Your Full Birth Chart Matters More Than Your Sun Sign" },
        ],
      },
      {
        heading: "The Twelve Signs",
        articles: [
          { title: "Aries \u2014 The Initiator" },
          { title: "Taurus \u2014 The Builder" },
          { title: "Gemini \u2014 The Messenger" },
          { title: "Cancer \u2014 The Nurturer" },
          { title: "Leo \u2014 The Creator" },
          { title: "Virgo \u2014 The Analyst" },
          { title: "Libra \u2014 The Harmonizer" },
          { title: "Scorpio \u2014 The Transformer" },
          { title: "Sagittarius \u2014 The Explorer" },
          { title: "Capricorn \u2014 The Strategist" },
          { title: "Aquarius \u2014 The Visionary" },
          { title: "Pisces \u2014 The Dreamer" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "The Twelve Houses \u2014 The Stages of Life" },
          { title: "Planetary Aspects \u2014 How Your Planets Talk to Each Other" },
          { title: "Transits \u2014 When the Current Sky Meets Your Birth Chart" },
          { title: "Retrograde Planets \u2014 What They Actually Mean in Your Chart" },
        ],
      },
    ],
  },

  /* ------ Vedic Astrology ------ */
  {
    title: "Vedic astrology (Jyotish)",
    subtitle:
      "India\u2019s ancient star science \u2014 a different angle on the same sky.",
    subsections: [
      {
        heading: "The Basics",
        articles: [
          { title: "Tropical vs. Sidereal \u2014 Why Your Vedic Sign Is Different" },
          { title: "Your Moon Sign in Vedic Astrology \u2014 The Emotional Foundation" },
          { title: "Nakshatras \u2014 The 27 Lunar Mansions" },
          { title: "Dashas \u2014 The Planetary Periods That Unfold Through Your Life" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "Understanding Your Vedic Birth Chart (Rashi Chart)" },
          { title: "The Nine Planets (Navagraha) in Vedic Astrology" },
          { title: "Ascendant and Houses in the Vedic System" },
          { title: "When Western and Vedic Astrology Agree \u2014 and When They Don\u2019t" },
        ],
      },
    ],
  },

  /* ------ Numerology ------ */
  {
    title: "Numerology",
    subtitle:
      "Your birth date, reduced to its essence \u2014 a single number that echoes through your life.",
    subsections: [
      {
        heading: "Life Path Numbers",
        articles: [
          { title: "The Pioneer", bold: "Life Path 1" },
          { title: "The Diplomat", bold: "Life Path 2" },
          { title: "The Communicator", bold: "Life Path 3" },
          { title: "The Builder", bold: "Life Path 4" },
          { title: "The Freedom Seeker", bold: "Life Path 5" },
          { title: "The Caretaker", bold: "Life Path 6" },
          { title: "The Seeker", bold: "Life Path 7" },
          { title: "The Powerhouse", bold: "Life Path 8" },
          { title: "The Humanitarian", bold: "Life Path 9" },
          { title: "The Intuitive", bold: "Master Number 11" },
          { title: "The Master Builder", bold: "Master Number 22" },
          { title: "The Master Teacher", bold: "Master Number 33" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "How Life Path Numbers Are Calculated (and Why the Method Matters)" },
          { title: "Expression, Soul Urge, and Birthday Numbers \u2014 The Other Core Numbers" },
          { title: "Numerology Across Cultures \u2014 Greek, Hebrew, Chinese, and Indian Traditions" },
          { title: "When Your Life Path Number Meets Your Personality Type" },
        ],
      },
    ],
  },

  /* ------ Human Design ------ */
  {
    title: "Human Design",
    subtitle:
      "A modern synthesis \u2014 your energetic blueprint for decision-making and life strategy.",
    subsections: [
      {
        heading: "The Five Types",
        articles: [
          { title: "Designed to Initiate", bold: "Manifestors" },
          { title: "Designed to Respond", bold: "Generators" },
          { title: "Designed to Respond and Then Initiate", bold: "Manifesting Generators" },
          { title: "Designed to Guide", bold: "Projectors" },
          { title: "Designed to Mirror", bold: "Reflectors" },
        ],
      },
      {
        heading: "The Fundamentals",
        articles: [
          { title: "Strategy and Authority \u2014 Your Built-In GPS" },
          { title: "The Nine Centers \u2014 The Energy Hubs in Your Design" },
          { title: "Your Profile \u2014 The Costume You Wear in This Life" },
          { title: "Defined vs. Undefined Centers \u2014 Where You\u2019re Consistent and Where You\u2019re Influenced" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "The 64 Gates and 36 Channels \u2014 The Details of Your Design" },
          { title: "How Human Design Calculates Your Chart (and Why Birth Time Matters)" },
          { title: "Human Design\u2019s Controversial Origins \u2014 A Framework That Divides Opinion" },
          { title: "Living Your Design in Practice \u2014 Experiments Worth Trying" },
        ],
      },
    ],
  },

  /* ------ Chinese Zodiac ------ */
  {
    title: "Chinese Zodiac",
    subtitle:
      "Twelve animals, five elements, and a 60-year cycle of personality patterns.",
    subsections: [
      {
        heading: "The Twelve Animals",
        articles: [
          { title: "Clever, Resourceful, Adaptable", bold: "Rat" },
          { title: "Dependable, Patient, Determined", bold: "Ox" },
          { title: "Brave, Passionate, Unpredictable", bold: "Tiger" },
          { title: "Gentle, Elegant, Cautious", bold: "Rabbit" },
          { title: "Confident, Ambitious, Charismatic", bold: "Dragon" },
          { title: "Intuitive, Wise, Private", bold: "Snake" },
          { title: "Energetic, Free-Spirited, Warm", bold: "Horse" },
          { title: "Creative, Gentle, Sympathetic", bold: "Goat" },
          { title: "Clever, Playful, Quick-Witted", bold: "Monkey" },
          { title: "Observant, Hardworking, Honest", bold: "Rooster" },
          { title: "Loyal, Trustworthy, Sincere", bold: "Dog" },
          { title: "Generous, Compassionate, Diligent", bold: "Pig" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "The Five Elements \u2014 How Metal, Water, Wood, Fire, and Earth Modify Your Sign" },
          { title: "Yin and Yang Polarity \u2014 The Subtle Modulator" },
          { title: "Your Inner and Secret Animals \u2014 The Layers Beneath Your Year Sign" },
          { title: "Chinese Zodiac Compatibility \u2014 Traditional Harmonies and Clashes" },
          { title: "Born in January or February? Why Your Animal Might Not Be What You Think" },
        ],
      },
    ],
  },

  /* ------ Mayan Astrology ------ */
  {
    title: "Mayan Astrology (Tzolkin)",
    subtitle:
      "The sacred 260-day calendar \u2014 a system of self-understanding from a radically different tradition.",
    subsections: [
      {
        heading: "The Twenty Day Signs",
        articles: [
          { title: "Imix (Red Dragon) \u2014 Nurturing, Birth, Trust" },
          { title: "Ik (White Wind) \u2014 Communication, Spirit, Breath" },
          { title: "Akbal (Blue Night) \u2014 Dreaming, Abundance, Intuition" },
          { title: "Kan (Yellow Seed) \u2014 Flowering, Awareness, Potential" },
          { title: "Chicchan (Red Serpent) \u2014 Life Force, Instinct, Passion" },
          { title: "Cimi (White World-Bridger) \u2014 Surrender, Release, Opportunity" },
          { title: "Manik (Blue Hand) \u2014 Healing, Accomplishment, Knowledge" },
          { title: "Lamat (Yellow Star) \u2014 Elegance, Harmony, Beauty" },
          { title: "Muluc (Red Moon) \u2014 Flow, Universal Water, Purification" },
          { title: "Oc (White Dog) \u2014 Love, Loyalty, Heart" },
          { title: "Chuen (Blue Monkey) \u2014 Play, Magic, Illusion" },
          { title: "Eb (Yellow Human) \u2014 Free Will, Wisdom, Influence" },
          { title: "Ben (Red Skywalker) \u2014 Exploration, Space, Wakefulness" },
          { title: "Ix (White Wizard) \u2014 Timelessness, Enchantment, Receptivity" },
          { title: "Men (Blue Eagle) \u2014 Vision, Creativity, Mind" },
          { title: "Cib (Yellow Warrior) \u2014 Intelligence, Fearlessness, Grace" },
          { title: "Caban (Red Earth) \u2014 Navigation, Synchronicity, Evolution" },
          { title: "Etznab (White Mirror) \u2014 Reflection, Truth, Order" },
          { title: "Cauac (Blue Storm) \u2014 Transformation, Energy, Catalysis" },
          { title: "Ahau (Yellow Sun) \u2014 Enlightenment, Wholeness, Ascension" },
        ],
      },
      {
        heading: "Going Deeper",
        articles: [
          { title: "The Thirteen Tones \u2014 The Rhythm of Creation" },
          { title: "Your Galactic Signature \u2014 What Your Day Sign and Tone Mean Together" },
          { title: "The Tzolkin Calendar \u2014 How 260 Days Map the Human Experience" },
          { title: "Encountering an Unfamiliar Tradition \u2014 What the Mayan System Can Teach You" },
        ],
      },
    ],
  },

  /* ------ The Mirror ------ */
  {
    title: "The Mirror (AI Companion)",
    subtitle:
      "How to have the most revealing conversation with yourself.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "Getting Started With The Mirror \u2014 Your First Conversation" },
          { title: "Questions Worth Asking \u2014 Prompts That Lead Somewhere Interesting" },
          { title: "How The Mirror Uses Your Multi-Framework Profile" },
          { title: "When The Mirror Surprises You \u2014 What to Do With Unexpected Insights" },
          { title: "The Mirror Is Not a Therapist \u2014 Understanding What AI Can and Can\u2019t Do" },
          { title: "Getting Deeper \u2014 Advanced Questions for Experienced Users" },
        ],
      },
    ],
  },

  /* ------ Cross-Framework Insights ------ */
  {
    title: "Cross-Framework Insights",
    subtitle:
      "Where the real magic happens \u2014 what different frameworks reveal when you hold them together.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "When Your Big Five and Enneagram Tell the Same Story" },
          { title: "Your Personality Type Through the Lens of Your Birth Chart" },
          { title: "High Neuroticism Meets Enneagram 6 \u2014 A Case Study in Convergence" },
          { title: "When Frameworks Contradict Each Other \u2014 What Disagreement Reveals" },
          { title: "The Introvert Whose Chart Says Extrovert \u2014 Navigating Mixed Signals" },
          { title: "Your Work Style vs. Your Personality Type \u2014 Professional Self vs. Core Self" },
          { title: "Human Design Strategy Meets Enneagram Motivation \u2014 Two Decision-Making Systems Compared" },
        ],
      },
    ],
  },

  /* ------ Relationships ------ */
  {
    title: "Relationships",
    subtitle:
      "What happens when two personality maps overlap.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "Personality Type Compatibility \u2014 Beyond the Simple Matchups" },
          { title: "How Your Enneagram Types Shape Your Relationship Dynamic" },
          { title: "Attachment Styles and the Big Five \u2014 The Science of How You Love" },
          { title: "Working With a Partner Whose Frameworks Contradict Yours" },
          { title: "Friendship Through the Lens of Personality \u2014 Why You Click With Some People Instantly" },
          { title: "Family Dynamics \u2014 When Different Types Share a Household" },
          { title: "The Relationship Article You Actually Need \u2014 It\u2019s Not About Compatibility" },
        ],
      },
    ],
  },

  /* ------ Career & Work ------ */
  {
    title: "Career & Work",
    subtitle:
      "Using your multi-framework profile to work in ways that feel more like you.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "What Your Big Five Says About Your Ideal Work Environment" },
          { title: "Personality Types and Career Satisfaction \u2014 The Research" },
          { title: "Enneagram at Work \u2014 How Your Core Motivation Shapes Your Professional Life" },
          { title: "When Your Work Style Profile Surprises You" },
          { title: "Career Transitions \u2014 What Your Full Profile Suggests About Your Next Move" },
          { title: "The Overachiever\u2019s Guide to Sustainable Ambition" },
          { title: 'Why "Follow Your Passion" Is Incomplete Advice \u2014 A Multi-Framework Perspective' },
        ],
      },
    ],
  },

  /* ------ Personal Growth ------ */
  {
    title: "Personal Growth",
    subtitle:
      "Growing into yourself, not away from yourself.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "Growth Paths for Every Personality Type" },
          { title: "Using Your Enneagram Stress Arrow as a Growth Tool" },
          { title: "The Big Five Dimension You Most Need to Develop" },
          { title: "Shadow Work Through the Lens of Multiple Frameworks" },
          { title: "Building Habits That Align With Your Design" },
          { title: "The Growth Edge Your Chart Predicted" },
          { title: "Why Self-Discovery Isn\u2019t Self-Improvement \u2014 And Why That Matters" },
        ],
      },
    ],
  },

  /* ------ Using Your Results ------ */
  {
    title: "Using Your Results in Practice",
    subtitle:
      "Taking what you\u2019ve learned off the screen and into your life.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "Using Your Results With a Coach or Therapist" },
          { title: "Sharing Your Profile With Your Partner \u2014 A Guide to Doing It Well" },
          { title: "Introducing Personality Frameworks to Your Team" },
          { title: "Using Multiple Lenses for Big Life Decisions" },
          { title: "When to Take Your Results Seriously and When to Hold Them Lightly" },
        ],
      },
    ],
  },

  /* ------ Privacy & Your Data ------ */
  {
    title: "Privacy & Your Data",
    subtitle:
      "How we handle the most personal information you\u2019ll ever share with a website.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "What We Collect and Why" },
          { title: "How Your Birth Data Is Protected" },
          { title: "Your Data Rights \u2014 Export, Download, and Deletion" },
          { title: "How The Mirror Uses Your Data (And How It Doesn\u2019t)" },
          { title: "Our Approach to Third-Party Data Sharing (Short Version: We Don\u2019t)" },
        ],
      },
    ],
  },

  /* ------ Theory & Methodology ------ */
  {
    title: "Theory & Methodology",
    subtitle:
      "For the curious \u2014 how all of this works under the hood.",
    subsections: [
      {
        heading: "",
        articles: [
          { title: "Our Psychometric Methodology \u2014 How We Build and Validate Assessments" },
          { title: "The History of Personality Testing \u2014 From Hippocrates to Today" },
          { title: "Why We Include Both Science and Symbolism" },
          { title: "Item Response Theory and How We Design Better Questions" },
          { title: "The Problem With Binary Types (And How We Handle It)" },
          { title: "Cultural Considerations in Personality Assessment" },
          { title: "Our Evidence Philosophy \u2014 A Thermometer and a Poem" },
          { title: "Frequently Cited Research \u2014 The Papers Behind Our Platform" },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function KnowledgeBasePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 lg:px-8 lg:py-16">
        <h1 className="text-3xl font-extrabold font-serif text-foreground tracking-tight lg:text-4xl">
          Knowledge Base
        </h1>
        <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
          Explore Everything We Know About You
        </p>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
          Personality is a territory, not a destination. These articles are our
          field guides &mdash; deep dives into every framework on the platform,
          how they connect, and what they reveal when you hold them side by side.
        </p>
        <p className="mt-1 text-muted-foreground leading-relaxed">
          Browse by category, or start with whatever&rsquo;s calling you.
        </p>

        {/* Section navigation */}
        <nav className="mt-8 flex flex-wrap gap-x-4 gap-y-1.5 text-sm" aria-label="KB sections">
          {SECTIONS.map((s) => (
            <a
              key={s.title}
              href={`#${slugify(s.title)}`}
              className="text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors hover:text-foreground hover:decoration-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>

        {/* Sections */}
        <div className="mt-14 space-y-16">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              id={slugify(section.title)}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl font-bold font-serif text-foreground sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-1 italic text-muted-foreground">
                {section.subtitle}
              </p>

              <div className="mt-6 space-y-8">
                {section.subsections.map((sub, si) => (
                  <div key={si}>
                    {sub.heading && (
                      <h3 className="mb-3 text-lg font-semibold text-foreground">
                        {sub.heading}
                      </h3>
                    )}
                    <ul className="space-y-1.5 pl-1">
                      {sub.articles.map((article, ai) => (
                        <li key={ai} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                          <span className="text-muted-foreground leading-relaxed">
                            {article.bold && (
                              <strong className="font-semibold text-foreground">
                                {article.bold}
                              </strong>
                            )}
                            {article.bold ? ` \u2014 ${article.title}` : article.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-14 text-sm text-muted-foreground">
          Have a question that isn&rsquo;t covered here? Check our{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-primary hover:underline">
            get in touch
          </Link>
          .
        </p>
    </main>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
