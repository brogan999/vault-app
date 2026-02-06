import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, topNDimensions } from "./scoring";

/* 24 character strengths grouped into 6 virtues (VIA-inspired, original items) */
const dimensions = [
  { id: "creativity", label: "Creativity", description: "Thinking of novel ways to approach situations" },
  { id: "curiosity", label: "Curiosity", description: "Exploring, discovering, and finding things fascinating" },
  { id: "judgment", label: "Judgment", description: "Thinking things through and examining from all angles" },
  { id: "love-of-learning", label: "Love of Learning", description: "Mastering new skills and topics systematically" },
  { id: "perspective", label: "Perspective", description: "Providing wise counsel and seeing the big picture" },
  { id: "bravery", label: "Bravery", description: "Acting on convictions despite fear or difficulty" },
  { id: "perseverance", label: "Perseverance", description: "Finishing what you start despite obstacles" },
  { id: "honesty", label: "Honesty", description: "Living authentically and taking responsibility" },
  { id: "zest", label: "Zest", description: "Approaching life with energy and excitement" },
  { id: "love", label: "Love", description: "Valuing and nurturing close relationships" },
  { id: "kindness", label: "Kindness", description: "Doing favours and good deeds for others" },
  { id: "social-intelligence", label: "Social Intelligence", description: "Being aware of motives and feelings of others" },
  { id: "teamwork", label: "Teamwork", description: "Working well as a member of a group" },
  { id: "fairness", label: "Fairness", description: "Treating all people equitably and justly" },
  { id: "leadership", label: "Leadership", description: "Organising group activities and seeing them through" },
  { id: "forgiveness", label: "Forgiveness", description: "Letting go of wrongs and giving second chances" },
  { id: "humility", label: "Humility", description: "Letting accomplishments speak for themselves" },
  { id: "prudence", label: "Prudence", description: "Being careful and not taking undue risks" },
  { id: "self-regulation-s", label: "Self-Regulation", description: "Regulating feelings and actions with discipline" },
  { id: "appreciation", label: "Appreciation of Beauty", description: "Noticing and appreciating beauty and excellence" },
  { id: "gratitude", label: "Gratitude", description: "Being thankful for the good things in life" },
  { id: "hope", label: "Hope", description: "Expecting the best and working to achieve it" },
  { id: "humor", label: "Humor", description: "Liking to laugh and bringing smiles to others" },
  { id: "spirituality", label: "Spirituality", description: "Having beliefs about meaning and purpose" },
];

const L5 = [
  { value: 1, label: "Not Like Me" },
  { value: 2, label: "A Little Like Me" },
  { value: 3, label: "Somewhat Like Me" },
  { value: 4, label: "Like Me" },
  { value: 5, label: "Very Much Like Me" },
];

export const strengthsTest: TestDefinition = {
  id: "strengths",
  title: "Strengths Finder",
  subtitle: "Identify your top 5 signature strengths from 24 character strengths",
  dimensions: [...dimensions],
  scoringMethod: "likert",

  questions: [
    // One question per strength + 6 extras for top strengths = 30 total
    { id: "st1", text: "I regularly come up with original ideas or creative solutions to problems.", dimension: "creativity", type: "likert-5", options: L5 },
    { id: "st2", text: "I am genuinely interested in learning about people, places, or topics that are new to me.", dimension: "curiosity", type: "likert-5", options: L5 },
    { id: "st3", text: "I consider all sides of an issue before making a decision.", dimension: "judgment", type: "likert-5", options: L5 },
    { id: "st4", text: "I actively seek out opportunities to learn new skills or deepen my knowledge.", dimension: "love-of-learning", type: "likert-5", options: L5 },
    { id: "st5", text: "People often come to me for advice on important life decisions.", dimension: "perspective", type: "likert-5", options: L5 },
    { id: "st6", text: "I stand up for what I believe in, even when it is unpopular.", dimension: "bravery", type: "likert-5", options: L5 },
    { id: "st7", text: "Once I commit to something, I see it through to the end.", dimension: "perseverance", type: "likert-5", options: L5 },
    { id: "st8", text: "I present myself authentically, without pretending to be something I am not.", dimension: "honesty", type: "likert-5", options: L5 },
    { id: "st9", text: "I approach each day with energy and enthusiasm.", dimension: "zest", type: "likert-5", options: L5 },
    { id: "st10", text: "I invest deeply in my closest relationships and make them a priority.", dimension: "love", type: "likert-5", options: L5 },
    { id: "st11", text: "I go out of my way to do kind things for others, even strangers.", dimension: "kindness", type: "likert-5", options: L5 },
    { id: "st12", text: "I can accurately read the room and understand the dynamics between people.", dimension: "social-intelligence", type: "likert-5", options: L5 },
    { id: "st13", text: "I thrive when contributing to a team effort.", dimension: "teamwork", type: "likert-5", options: L5 },
    { id: "st14", text: "I treat everyone equally regardless of their status or background.", dimension: "fairness", type: "likert-5", options: L5 },
    { id: "st15", text: "I naturally step into leadership roles when a group needs direction.", dimension: "leadership", type: "likert-5", options: L5 },
    { id: "st16", text: "I let go of grudges and give people the benefit of the doubt.", dimension: "forgiveness", type: "likert-5", options: L5 },
    { id: "st17", text: "I do not seek recognition and prefer to let my work speak for itself.", dimension: "humility", type: "likert-5", options: L5 },
    { id: "st18", text: "I carefully weigh potential consequences before taking action.", dimension: "prudence", type: "likert-5", options: L5 },
    { id: "st19", text: "I am good at controlling my impulses and staying disciplined.", dimension: "self-regulation-s", type: "likert-5", options: L5 },
    { id: "st20", text: "I frequently pause to appreciate beauty in nature, art, or everyday life.", dimension: "appreciation", type: "likert-5", options: L5 },
    { id: "st21", text: "I regularly feel grateful for the good things and people in my life.", dimension: "gratitude", type: "likert-5", options: L5 },
    { id: "st22", text: "Even in tough times, I believe things will work out for the best.", dimension: "hope", type: "likert-5", options: L5 },
    { id: "st23", text: "I use humor to connect with people and lighten difficult situations.", dimension: "humor", type: "likert-5", options: L5 },
    { id: "st24", text: "I feel a sense of purpose or calling that guides my decisions.", dimension: "spirituality", type: "likert-5", options: L5 },
    // 6 additional differentiating questions
    { id: "st25", text: "I enjoy brainstorming unconventional approaches more than following established procedures.", dimension: "creativity", type: "likert-5", options: L5 },
    { id: "st26", text: "I push through obstacles that would cause most people to give up.", dimension: "perseverance", type: "likert-5", options: L5 },
    { id: "st27", text: "I find deep satisfaction in helping others grow or succeed.", dimension: "kindness", type: "likert-5", options: L5 },
    { id: "st28", text: "I am often the person who motivates and inspires a group.", dimension: "leadership", type: "likert-5", options: L5 },
    { id: "st29", text: "I look at setbacks as temporary and find reasons to stay optimistic.", dimension: "hope", type: "likert-5", options: L5 },
    { id: "st30", text: "I experience a sense of wonder and awe when encountering something remarkable.", dimension: "appreciation", type: "likert-5", options: L5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions]);
    const top5 = topNDimensions(dimScores, 5);
    return {
      dimensions: dimScores,
      overall: top5[0]?.score ?? 0,
      typeCode: top5.map((d) => d.dimensionId).join(", "),
      typeLabel: `Top: ${top5[0]?.label ?? "Unknown"}`,
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const top5 = topNDimensions(scores.dimensions, 5);
    const bottom3 = [...scores.dimensions].sort((a, b) => a.score - b.score).slice(0, 3);

    const summary = `Your top 5 signature strengths are: ${top5.map((d, i) => `${i + 1}. ${d.label} (${d.score}%)`).join(", ")}. These strengths represent the core of who you are and how you contribute to the world.`;

    const dimensionDetails = top5.map((d, i) => ({
      dimensionId: d.dimensionId,
      text: `#${i + 1} — ${d.label} (${d.score}%): ${d.description}. This is ${i < 2 ? "one of your defining" : "a significant"} character strengths.`,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `Top: ${top5[0]?.label ?? "Unknown"}`,
      tips: [
        `Lean into your top strength (${top5[0]?.label}) — find new ways to use it daily for greater fulfilment.`,
        `Pair your strengths: combining ${top5[0]?.label} with ${top5[1]?.label} can be a powerful combination.`,
        `Consider developing ${bottom3[0]?.label} — growth in lesser strengths can round out your character.`,
      ],
    };
  },
};
