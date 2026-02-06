import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreCorrectAnswers } from "./scoring";

const dimensions = [
  { id: "verbal", label: "Verbal Reasoning", description: "Ability to understand and reason with language and concepts" },
  { id: "numerical", label: "Numerical Reasoning", description: "Ability to work with numbers, patterns, and quantitative relationships" },
  { id: "pattern", label: "Pattern Recognition", description: "Ability to identify logical patterns, rules, and sequences" },
  { id: "spatial", label: "Spatial Reasoning", description: "Ability to visualise and manipulate objects mentally" },
];

export const iqProTest: TestDefinition = {
  id: "iq-pro",
  title: "IQ Pro Assessment",
  subtitle: "Measure your cognitive abilities across four domains",
  dimensions: [...dimensions],
  scoringMethod: "correct-answer",

  questions: [
    // --- Verbal Reasoning (6 items) ---
    { id: "v1", text: "BOOK is to READING as FORK is to:", dimension: "verbal", type: "multiple-choice", correctAnswer: "eating",
      options: [{ value: "eating", label: "Eating" }, { value: "drawing", label: "Drawing" }, { value: "sleeping", label: "Sleeping" }, { value: "cooking", label: "Cooking" }] },
    { id: "v2", text: "Which word does NOT belong: Swift, Quick, Rapid, Sturdy?", dimension: "verbal", type: "multiple-choice", correctAnswer: "sturdy",
      options: [{ value: "swift", label: "Swift" }, { value: "quick", label: "Quick" }, { value: "rapid", label: "Rapid" }, { value: "sturdy", label: "Sturdy" }] },
    { id: "v3", text: "OCEAN is to WATER as DESERT is to:", dimension: "verbal", type: "multiple-choice", correctAnswer: "sand",
      options: [{ value: "heat", label: "Heat" }, { value: "sand", label: "Sand" }, { value: "cactus", label: "Cactus" }, { value: "dry", label: "Dry" }] },
    { id: "v4", text: "If all BLOOMS are PLANTS, and some PLANTS are THORNY, which statement MUST be true?", dimension: "verbal", type: "multiple-choice", correctAnswer: "some_plants_blooms",
      options: [{ value: "all_blooms_thorny", label: "All blooms are thorny" }, { value: "some_plants_blooms", label: "Some plants are blooms" }, { value: "no_blooms_thorny", label: "No blooms are thorny" }, { value: "all_thorny_blooms", label: "All thorny plants are blooms" }] },
    { id: "v5", text: "PAINTER is to CANVAS as SCULPTOR is to:", dimension: "verbal", type: "multiple-choice", correctAnswer: "clay",
      options: [{ value: "brush", label: "Brush" }, { value: "gallery", label: "Gallery" }, { value: "clay", label: "Clay" }, { value: "color", label: "Color" }] },
    { id: "v6", text: "Which word is most similar in meaning to EPHEMERAL?", dimension: "verbal", type: "multiple-choice", correctAnswer: "fleeting",
      options: [{ value: "eternal", label: "Eternal" }, { value: "fleeting", label: "Fleeting" }, { value: "massive", label: "Massive" }, { value: "obscure", label: "Obscure" }] },

    // --- Numerical Reasoning (7 items) ---
    { id: "n1", text: "What comes next in the sequence: 2, 6, 18, 54, ?", dimension: "numerical", type: "multiple-choice", correctAnswer: "162",
      options: [{ value: "108", label: "108" }, { value: "162", label: "162" }, { value: "148", label: "148" }, { value: "216", label: "216" }] },
    { id: "n2", text: "If a shirt costs $40 after a 20% discount, what was the original price?", dimension: "numerical", type: "multiple-choice", correctAnswer: "50",
      options: [{ value: "48", label: "$48" }, { value: "50", label: "$50" }, { value: "52", label: "$52" }, { value: "60", label: "$60" }] },
    { id: "n3", text: "What comes next: 1, 1, 2, 3, 5, 8, ?", dimension: "numerical", type: "multiple-choice", correctAnswer: "13",
      options: [{ value: "11", label: "11" }, { value: "12", label: "12" }, { value: "13", label: "13" }, { value: "15", label: "15" }] },
    { id: "n4", text: "A train travels 120 km in 1.5 hours. What is its average speed in km/h?", dimension: "numerical", type: "multiple-choice", correctAnswer: "80",
      options: [{ value: "60", label: "60 km/h" }, { value: "75", label: "75 km/h" }, { value: "80", label: "80 km/h" }, { value: "90", label: "90 km/h" }] },
    { id: "n5", text: "What comes next: 3, 7, 15, 31, ?", dimension: "numerical", type: "multiple-choice", correctAnswer: "63",
      options: [{ value: "47", label: "47" }, { value: "55", label: "55" }, { value: "62", label: "62" }, { value: "63", label: "63" }] },
    { id: "n6", text: "If 5 machines make 5 widgets in 5 minutes, how long do 100 machines take to make 100 widgets?", dimension: "numerical", type: "multiple-choice", correctAnswer: "5",
      options: [{ value: "5", label: "5 minutes" }, { value: "20", label: "20 minutes" }, { value: "100", label: "100 minutes" }, { value: "50", label: "50 minutes" }] },
    { id: "n7", text: "What is 15% of 240?", dimension: "numerical", type: "multiple-choice", correctAnswer: "36",
      options: [{ value: "32", label: "32" }, { value: "34", label: "34" }, { value: "36", label: "36" }, { value: "38", label: "38" }] },

    // --- Pattern Recognition (6 items) ---
    { id: "p1", text: "Complete the sequence: A, C, F, J, ?", dimension: "pattern", type: "multiple-choice", correctAnswer: "o",
      options: [{ value: "m", label: "M" }, { value: "n", label: "N" }, { value: "o", label: "O" }, { value: "p", label: "P" }] },
    { id: "p2", text: "What number replaces the question mark: 4, 9, 16, 25, ?", dimension: "pattern", type: "multiple-choice", correctAnswer: "36",
      options: [{ value: "30", label: "30" }, { value: "35", label: "35" }, { value: "36", label: "36" }, { value: "49", label: "49" }] },
    { id: "p3", text: "In the series XYZ, WXY, VWX, what comes next?", dimension: "pattern", type: "multiple-choice", correctAnswer: "uvw",
      options: [{ value: "tuv", label: "TUV" }, { value: "uvw", label: "UVW" }, { value: "vwx", label: "VWX" }, { value: "wxy", label: "WXY" }] },
    { id: "p4", text: "If ★ = 3 and ● = 5, then ★ + ● × ★ = ?", dimension: "pattern", type: "multiple-choice", correctAnswer: "18",
      options: [{ value: "18", label: "18" }, { value: "24", label: "24" }, { value: "15", label: "15" }, { value: "40", label: "40" }] },
    { id: "p5", text: "What comes next: 100, 98, 94, 88, 80, ?", dimension: "pattern", type: "multiple-choice", correctAnswer: "70",
      options: [{ value: "68", label: "68" }, { value: "70", label: "70" }, { value: "72", label: "72" }, { value: "74", label: "74" }] },
    { id: "p6", text: "If APPLE = 50 and BANANA = 42, what does CHERRY = ? (A=1, B=2, ... Z=26)", dimension: "pattern", type: "multiple-choice", correctAnswer: "65",
      options: [{ value: "55", label: "55" }, { value: "60", label: "60" }, { value: "65", label: "65" }, { value: "72", label: "72" }] },

    // --- Spatial Reasoning (6 items) ---
    { id: "s1", text: "If you fold a square piece of paper in half diagonally, what shape do you get?", dimension: "spatial", type: "multiple-choice", correctAnswer: "triangle",
      options: [{ value: "triangle", label: "Triangle" }, { value: "rectangle", label: "Rectangle" }, { value: "pentagon", label: "Pentagon" }, { value: "trapezoid", label: "Trapezoid" }] },
    { id: "s2", text: "A cube has 6 faces, 12 edges, and how many vertices?", dimension: "spatial", type: "multiple-choice", correctAnswer: "8",
      options: [{ value: "4", label: "4" }, { value: "6", label: "6" }, { value: "8", label: "8" }, { value: "10", label: "10" }] },
    { id: "s3", text: "If you rotate the letter 'N' 90 degrees clockwise, what letter does it most resemble?", dimension: "spatial", type: "multiple-choice", correctAnswer: "z",
      options: [{ value: "m", label: "M" }, { value: "z", label: "Z" }, { value: "u", label: "U" }, { value: "w", label: "W" }] },
    { id: "s4", text: "How many faces does a triangular prism have?", dimension: "spatial", type: "multiple-choice", correctAnswer: "5",
      options: [{ value: "4", label: "4" }, { value: "5", label: "5" }, { value: "6", label: "6" }, { value: "3", label: "3" }] },
    { id: "s5", text: "If a mirror is placed to the right of the word 'BED', what would the reflection look like?", dimension: "spatial", type: "multiple-choice", correctAnswer: "deb_reversed",
      options: [{ value: "bed_same", label: "BED" }, { value: "deb_reversed", label: "DƎꓭ (reversed)" }, { value: "bed_flipped", label: "BED (upside down)" }, { value: "deb_normal", label: "DEB" }] },
    { id: "s6", text: "A standard die has opposite faces summing to 7. If the top face shows 3, what is on the bottom?", dimension: "spatial", type: "multiple-choice", correctAnswer: "4",
      options: [{ value: "2", label: "2" }, { value: "3", label: "3" }, { value: "4", label: "4" }, { value: "5", label: "5" }] },
  ],

  score(answers: Answer[]): TestScores {
    // Score per domain
    const domainScores = dimensions.map((dim) => {
      const domainQs = this.questions.filter((q) => q.dimension === dim.id);
      const { correct, total } = scoreCorrectAnswers(answers, domainQs);
      const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
      return { dimensionId: dim.id, label: dim.label, score: pct, rawScore: correct, description: dim.description };
    });

    // Overall IQ score
    const { correct, total, iqScore } = scoreCorrectAnswers(answers, this.questions);
    return {
      dimensions: domainScores,
      overall: iqScore,
      typeCode: `${correct}/${total}`,
      typeLabel: getIQLabel(iqScore),
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const iq = scores.overall ?? 100;
    const sorted = [...scores.dimensions].sort((a, b) => b.score - a.score);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    const summary = `Your estimated IQ score is ${iq} (${getIQLabel(iq)} range). You answered ${scores.typeCode} questions correctly. Your strongest cognitive domain is ${strongest.label} (${strongest.score}%), while ${weakest.label} (${weakest.score}%) has the most room for growth.`;

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: `${d.label}: ${d.rawScore} correct — ${d.score}% accuracy. ${getIQDimensionBlurb(d.dimensionId, d.score)}`,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `IQ: ${iq}`,
      tips: [
        "Cognitive abilities can be strengthened with practice. Consider brain-training exercises for weaker domains.",
        strongest.score >= 80
          ? `Your ${strongest.label} skills are exceptional — consider career paths that leverage this strength.`
          : "Regular practice with logic puzzles and reading can improve scores across all domains.",
        "This is a snapshot of current performance. Factors like sleep, stress, and focus all affect results.",
      ],
    };
  },
};

function getIQLabel(iq: number): string {
  if (iq >= 130) return "Very Superior";
  if (iq >= 120) return "Superior";
  if (iq >= 110) return "High Average";
  if (iq >= 90) return "Average";
  if (iq >= 80) return "Low Average";
  return "Below Average";
}

function getIQDimensionBlurb(dimId: string, score: number): string {
  const level = score >= 80 ? "strong" : score >= 50 ? "moderate" : "developing";
  const blurbs: Record<string, Record<string, string>> = {
    verbal: {
      strong: "Excellent language comprehension and reasoning. You can quickly identify relationships between concepts.",
      moderate: "Solid verbal skills with room for growth in abstract language reasoning.",
      developing: "Building verbal skills. Regular reading and vocabulary exercises can help strengthen this area.",
    },
    numerical: {
      strong: "Outstanding numerical aptitude. You efficiently process quantitative relationships.",
      moderate: "Good numerical foundation. Practice with mental math and logic puzzles can sharpen this skill.",
      developing: "Numerical reasoning is an area for growth. Working through math problems regularly can help.",
    },
    pattern: {
      strong: "Exceptional pattern recognition. You quickly identify underlying rules and sequences.",
      moderate: "Good pattern detection abilities. Puzzles and sequence exercises can refine this skill.",
      developing: "Pattern recognition is developing. Practice with logic games and puzzles is recommended.",
    },
    spatial: {
      strong: "Excellent spatial reasoning. You can mentally manipulate objects with ease.",
      moderate: "Decent spatial skills. Activities like puzzles and 3D modeling can improve this further.",
      developing: "Spatial reasoning can be strengthened with practice in visualization exercises and geometry.",
    },
  };
  return blurbs[dimId]?.[level] ?? "";
}
