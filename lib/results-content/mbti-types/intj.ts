import type {
  ResultSection,
  StressFlow,
  CareerAlignment,
  GrowthPath,
} from "../types";

/**
 * Static per-type content that feeds into `getContent()` at render time.
 *
 * Scores (dimension bars, cognitive portrait positions, cognitive stack scores,
 * environment preference scores) are computed from the user's actual test
 * responses and merged in at render time — they are NOT part of this object.
 */
export interface StaticTypeContent {
  typeName: string;
  typeCode: string;
  heroColor: string;
  heroImage?: string;
  description: string[];
  descriptionInsight: string;
  /** One description per cognitive portrait card (EI, SN, TF, JP order). */
  cognitivePortraitDescriptions: string[];
  /** One description per cognitive stack position (dom, aux, tert, inf order). */
  cognitiveStackDescriptions: string[];
  sections: ResultSection[];
  stressFlow: StressFlow;
  careerAlignment: Omit<CareerAlignment, "environmentPrefs">;
  growthPath: GrowthPath;
}

export const INTJ: StaticTypeContent = {
  typeName: "The Mastermind",
  typeCode: "INTJ",
  heroColor: "#1a3a4a",

  description: [
    "You process the world through pattern recognition. While others react to what\u2019s in front of them, you\u2019re running simulations \u2014 mapping trajectories, identifying leverage points, building mental models of how systems behave. This isn\u2019t something you choose to do; it\u2019s how your mind is wired. You were the kid who saw the answer before the teacher finished the question, and the adult who sees where a project is heading before the team has finished the kickoff meeting.",
    "This gives you an unusual advantage: you can hold complexity without being overwhelmed by it. Where most people need to simplify before they can act, you can work with the full picture. Strategy, architecture, long-range planning, systems design \u2014 any domain that rewards seeing the whole map before making a move is a domain where your type thrives. You don\u2019t just plan; you model. And your models tend to be right more often than they should be.",
    "The tension you\u2019ll navigate throughout your life is between your strategic mind and the parts of life that don\u2019t respond to strategy. Relationships, emotions, spontaneous experiences, physical presence \u2014 these operate on different rules than the ones your Ni-Te axis is calibrated for. The most developed Masterminds aren\u2019t less strategic. They\u2019ve learned to be strategic about the things that strategy alone can\u2019t solve.",
  ],

  descriptionInsight:
    "Your trait pattern \u2014 strong Introversion, strong Intuition, very strong Thinking, moderate Judging \u2014 creates a specific cognitive signature: you\u2019re a long-range strategist who works best alone, trusts abstract patterns over concrete details, and makes decisions through logic rather than consensus.",

  cognitivePortraitDescriptions: [
    "You process the world internally before engaging with it. Your best thinking happens alone, in quiet, with time to let ideas develop. Social interaction costs energy; solitude restores it. This doesn\u2019t mean you\u2019re shy \u2014 it means your cognitive engine runs on internal fuel.",
    "You instinctively look past surface details to the underlying structure. Where others see isolated facts, you see connections, trends, and implications. You trust your sense of \u2018what this means\u2019 over \u2018what this literally is.\u2019 This makes you a natural strategist \u2014 and occasionally blind to what\u2019s right in front of you.",
    "You evaluate decisions through a framework of consistency and effectiveness, not emotional resonance. \u2018Is this true?\u2019 and \u2018Does this work?\u2019 come before \u2018How does this feel?\u2019 Your 91% Thinking preference is one of the strongest in your profile \u2014 meaning this isn\u2019t just a tendency, it\u2019s a defining feature of how you operate.",
    "You prefer things decided, planned, and moving forward. Open-ended ambiguity drains you. You naturally create systems, timelines, and frameworks \u2014 not because you\u2019re rigid, but because structure is how you make progress. At 68%, this preference is moderate, meaning you can flex when needed but default to closure.",
  ],

  cognitiveStackDescriptions: [
    "This function synthesizes information into future-oriented patterns, running constantly in the background. It\u2019s why you \u201cjust know\u201d things before you can explain how you know them. Your Ni doesn\u2019t process data linearly \u2014 it converges on insights that feel certain even without step-by-step logic.",
    "Your secondary function translates Ni insights into structured plans and measurable outcomes. It\u2019s the bridge between vision and reality. When someone asks \u201chow do we actually do this?\u201d, your Te activates. You don\u2019t just see the destination; you build the roadmap.",
    "Present but underdeveloped, your Fi governs your personal values and sense of authenticity. At 51%, it\u2019s in development \u2014 meaning you have strong values but may struggle to articulate them. You may know something \u201cfeels wrong\u201d without being able to explain why in logical terms.",
    "Your least developed function connects you to the present moment \u2014 physical sensations, immediate environment, real-time experience. At 28%, this is your genuine blind spot. Under stress, it either shuts down entirely (you retreat into your head) or erupts impulsively (sudden sensory overindulgence).",
  ],

  sections: [
    // ---- Section 3: Strengths & Edges ----
    {
      id: "strengths-edges",
      number: 3,
      title: "Strengths & Edges",
      insight:
        "Your strengths and blind spots aren\u2019t separate lists \u2014 they\u2019re two sides of the same wiring. Every advantage your type has creates a corresponding vulnerability. The goal isn\u2019t to eliminate the edges; it\u2019s to know where they are.",
      description: [],
      strengths: [
        {
          title: "Strategic Vision",
          description:
            "You naturally see long-term patterns and trajectories that others miss. Where most people see isolated events, you see interconnected systems with predictable behaviors.",
        },
        {
          title: "Independent Thinking",
          description:
            "You form judgments based on logic and evidence, not social pressure or consensus. This makes you resistant to groupthink and capable of making unpopular but correct calls.",
        },
        {
          title: "Systematic Execution",
          description:
            "You don\u2019t just have ideas \u2014 you build frameworks to make them real. Plans, processes, and structures come naturally to you. Vision without execution is just daydreaming; you do both.",
        },
        {
          title: "Decisive Under Pressure",
          description:
            "When others freeze or panic, you default to pattern recognition: assess the situation, identify the optimal path, execute. Crisis brings you clarity, not chaos.",
        },
      ],
      weaknesses: [
        {
          title: "Dismissing Emotional Data",
          description:
            "Your strong Thinking preference can override emotional signals \u2014 yours and others\u2019. Feelings often contain information that logic alone can\u2019t capture. Ignoring them isn\u2019t rational; it\u2019s incomplete.",
        },
        {
          title: "Perfectionism as Paralysis",
          description:
            "Your high standards can prevent you from shipping, sharing, or starting. The gap between your internal vision and external reality can become a reason to never act rather than a motivator to improve.",
        },
        {
          title: "Impatience with Process",
          description:
            "When you\u2019ve already seen the answer, watching others work through the problem feels excruciating. This shows in your tone, your body language, and your willingness to listen \u2014 and it costs you influence.",
        },
        {
          title: "Overconfidence in Mental Models",
          description:
            "Your pattern-recognition is powerful but not infallible. When your model is wrong, you may be the last to see it \u2014 because the internal logic felt so coherent that contradicting evidence gets filtered out.",
        },
      ],
      influentialTraits: [
        { name: "Analytical Depth", color: "blue" },
        { name: "Strategic Patience", color: "green" },
        { name: "Emotional Detachment", color: "gold" },
        { name: "Perfectionist Drive", color: "purple" },
      ],
      lockedSubsections: [
        {
          title: "Your Growth Edge Map",
          unlockTeaser:
            "Each edge has a specific trigger, a predictable pattern, and a practical counter-strategy. See the full analysis.",
          items: [
            {
              title: "The Ni-Te Loop",
              description:
                "When stressed, you may generate increasingly elaborate internal models and rationalize them with selective evidence, ignoring emotional and sensory data. This feels productive. It isn\u2019t.",
            },
            {
              title: "The Competence Trap",
              description:
                "Your identity may be overly tied to being the smartest person in the room. When you\u2019re not, or when someone challenges your expertise, the emotional reaction is disproportionate.",
            },
            {
              title: "Relationship Maintenance Debt",
              description:
                "You\u2019re comfortable alone, which means you may not notice when isolation shifts from preference to problem. Relationships require maintenance you may forget to perform.",
            },
            {
              title: "The Planning Fallacy",
              description:
                "You\u2019re excellent at strategy but can overplan as a form of avoidance. Sometimes the next step isn\u2019t more analysis \u2014 it\u2019s action with incomplete information.",
            },
          ],
        },
      ],
    },

    // ---- Section 4: How You Connect ----
    {
      id: "relationships",
      number: 4,
      title: "How You Connect",
      insight:
        "You communicate to transfer information, not to bond. Your default mode is direct, efficient, and substantive \u2014 which works well in professional settings and frustrates people who need warmth or validation in conversation.",
      description: [],
      strengths: [
        {
          title: "Clarity and Precision",
          description:
            "You say what you mean without padding or ambiguity. In professional contexts, this is enormously valued. People know where they stand with you.",
        },
        {
          title: "Depth Over Breadth",
          description:
            "You prefer one substantial conversation over ten surface-level exchanges. Your close relationships tend to be few but unusually deep.",
        },
        {
          title: "Conflict Tolerance",
          description:
            "You\u2019re not afraid of disagreement. You can challenge ideas without taking it personally \u2014 and you expect others to do the same.",
        },
      ],
      weaknesses: [
        {
          title: "Missing Emotional Subtext",
          description:
            "You may take statements at face value when there\u2019s a feeling underneath. \u201cI\u2019m fine\u201d means something different when said with a certain tone \u2014 and you might miss it.",
        },
        {
          title: "Unintentional Bluntness",
          description:
            "Your directness, while efficient, can land as dismissive or cold. You\u2019re not trying to hurt anyone; you\u2019re just optimizing for accuracy over comfort.",
        },
        {
          title: "Context Asymmetry",
          description:
            "You often communicate conclusions without sharing the reasoning that got you there \u2014 because you\u2019ve been processing internally for days. Others feel blindsided by decisions you see as obvious.",
        },
      ],
      influentialTraits: [],
      lockedSubsections: [],
      compatibility: {
        naturalAllies: [
          {
            code: "ENTJ",
            name: "The Executive",
            reason:
              "You share the NT strategic framework but they bring the external execution energy you sometimes lack. They push you to act on your visions.",
          },
          {
            code: "ENTP",
            name: "The Visionary",
            reason:
              "Your Ni depth meets their Ne breadth. They expand your thinking laterally while you sharpen their ideas into executable plans. Intellectually electric.",
          },
          {
            code: "INFJ",
            name: "The Champion",
            reason:
              "The rarest pairing of mutual understanding. They share your Ni dominance but lead with Fe, meaning they see the human dimensions your Te filters out.",
          },
        ],
        growthPartners: [
          {
            code: "ENFP",
            name: "The Inspirer",
            reason:
              "Their Ne-Fi pulls you out of your head and into possibilities and values you\u2019d dismiss too quickly. They challenge your blind spots with warmth, not confrontation.",
          },
          {
            code: "ISFP",
            name: "The Trailblazer",
            reason:
              "Their Fi-Se grounds you in present-moment experience and authentic feeling \u2014 the two areas your stack underserves. Uncomfortable but deeply developmental.",
          },
          {
            code: "INTP",
            name: "The Philosopher",
            reason:
              "Fellow NT who matches your depth but approaches from Ti instead of Te. They force you to question your own frameworks rather than just optimizing within them.",
          },
        ],
        challengingPairs: [
          {
            code: "ESFJ",
            name: "The Anchor",
            reason:
              "Their Fe-Si focus on social harmony and established tradition directly conflicts with your Ni-Te drive for independent strategic innovation.",
          },
          {
            code: "ESFP",
            name: "The Muse",
            reason:
              "Opposite cognitive stack \u2014 their spontaneous, sensory, feeling-first approach clashes with your planned, abstract, logic-first orientation at every level.",
          },
          {
            code: "ESTJ",
            name: "The Governor",
            reason:
              "You both value structure and efficiency, but their Te-Si insistence on precedent and authority frustrates your Ni-driven need to reinvent systems from scratch.",
          },
        ],
      },
    },
  ],

  stressFlow: {
    stressStages: [
      {
        stage: 1,
        label: "Withdrawal",
        description:
          "You retreat inward, cutting off external input and running increasingly isolated analysis loops. You may appear functional but are operating on cached data \u2014 no new information is getting in.",
      },
      {
        stage: 2,
        label: "Ni-Te Loop",
        description:
          "Your pattern-recognition enters overdrive, generating worst-case scenarios and building contingency plans for contingency plans. This feels productive but is actually anxiety wearing the mask of strategy.",
      },
      {
        stage: 3,
        label: "Se Grip",
        description:
          "In extreme stress, your least developed function erupts. Sudden impulsive behavior, sensory overindulgence, or acute hypersensitivity to your physical environment. It feels completely unlike you because it is.",
      },
    ],
    stressRecovery:
      "What actually helps: Physical activity requiring focus (climbing, martial arts, building). One conversation with a trusted person who won\u2019t judge your Ni spirals. Writing \u2014 even worst-case scenarios \u2014 because externalizing breaks the loop. What doesn\u2019t help: More analysis, more isolation, more planning.",
    flowTriggers: [
      "A complex, meaningful problem with real stakes",
      "Full autonomy over approach and timeline",
      "Visibility into the complete system, not just your piece",
      "Minimal external interruptions",
      "Work requiring both vision (Ni) and implementation (Te)",
      "Building something that didn\u2019t exist before",
    ],
    flowDescription:
      "Your flow state is characterized by deep focus, rapid model-iteration, and time distortion. You may forget to eat, drink, or speak. This is your Ni-Te axis at full capacity \u2014 one of the most productive states any personality type can access. The risk: you\u2019ll sacrifice everything else to stay in it.",
  },

  careerAlignment: {
    naturalFits: [
      "Strategy",
      "Systems architecture",
      "Research",
      "Investment analysis",
      "Engineering",
      "Long-range planning",
      "Independent consulting",
      "Product strategy",
    ],
    likelyDrains: [
      "Customer service",
      "Event coordination",
      "Repetitive administrative work",
      "High-volume social roles",
      "Environments requiring constant consensus-building",
    ],
    careerWarning:
      "INTJs are prone to building elaborate internal justifications for staying in situations that no longer serve them. Your Ni creates compelling narratives about why this job/role/company is \u2018the strategic play\u2019 even when your day-to-day experience says otherwise. Check your model against reality quarterly.",
  },

  growthPath: {
    intro:
      "Growth for The Mastermind isn\u2019t about becoming someone else. It\u2019s about developing the functions you underuse so your strategic mind operates with a fuller data set.",
    areas: [
      {
        title: "Develop Your Internal Compass",
        description:
          "Your tertiary Introverted Feeling is present but underdeveloped. This means you may struggle to articulate what you actually care about beyond \u2018winning\u2019 or \u2018being right.\u2019 Practice: When making decisions, pause to ask \u2018what matters to me about this?\u2019 before asking \u2018what\u2019s the optimal path?\u2019",
      },
      {
        title: "Build Present-Moment Awareness",
        description:
          "Your inferior Se represents your least developed connection to immediate, physical reality. Practice: Build small, consistent sensory experiences into your routine \u2014 physical exercise, cooking, hands-on building. Anything that anchors you in the present without requiring you to abandon your natural processing.",
      },
      {
        title: "Break the Ni-Te Loop",
        description:
          "Under stress, you generate increasingly elaborate internal models and rationalize them with selective evidence. When you notice yourself becoming more certain about something despite having no new evidence, treat it as a signal to seek outside input \u2014 especially from people who see the data you\u2019re filtering out.",
      },
    ],
  },
};
