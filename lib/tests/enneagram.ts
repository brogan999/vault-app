import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreLikertDimensions, topNDimensions } from "./scoring";

const dimensions = [
  { id: "type1", label: "Type 1 — The Reformer", description: "Principled, purposeful, self-controlled, perfectionistic" },
  { id: "type2", label: "Type 2 — The Helper", description: "Generous, people-pleasing, possessive, demonstrative" },
  { id: "type3", label: "Type 3 — The Achiever", description: "Adaptable, driven, image-conscious, excelling" },
  { id: "type4", label: "Type 4 — The Individualist", description: "Expressive, dramatic, self-absorbed, temperamental" },
  { id: "type5", label: "Type 5 — The Investigator", description: "Perceptive, innovative, secretive, isolated" },
  { id: "type6", label: "Type 6 — The Loyalist", description: "Engaging, responsible, anxious, suspicious" },
  { id: "type7", label: "Type 7 — The Enthusiast", description: "Spontaneous, versatile, acquisitive, scattered" },
  { id: "type8", label: "Type 8 — The Challenger", description: "Self-confident, decisive, willful, confrontational" },
  { id: "type9", label: "Type 9 — The Peacemaker", description: "Receptive, reassuring, complacent, agreeable" },
];

const L7 = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Slightly Disagree" },
  { value: 4, label: "Neutral" },
  { value: 5, label: "Slightly Agree" },
  { value: 6, label: "Agree" },
  { value: 7, label: "Strongly Agree" },
];

export const enneagramTest: TestDefinition = {
  id: "enneagram",
  title: "Enneagram Deep Dive",
  subtitle: "Discover your core type, wing, and growth path",
  dimensions: [...dimensions],
  scoringMethod: "likert",
  questionsPerPage: 6,

  // 60 questions total (same length as 16personalities), ~6–7 per type. All item text is original.
  questions: [
    // Type 1 — The Reformer (7 items)
    { id: "en1a", text: "I hold myself to very high standards and feel frustrated when I fall short.", dimension: "type1", type: "likert-7", options: L7 },
    { id: "en1b", text: "I notice errors or inefficiencies that others seem to overlook.", dimension: "type1", type: "likert-7", options: L7 },
    { id: "en1c", text: "I feel a strong internal drive to do the right thing, even when it is difficult.", dimension: "type1", type: "likert-7", options: L7 },
    { id: "en1d", text: "I often critique my own behaviour and look for ways to improve.", dimension: "type1", type: "likert-7", options: L7 },
    { id: "en1e", text: "Rules and fairness matter a lot to me; I get bothered when people cut corners.", dimension: "type1", type: "likert-7", options: L7 },
    { id: "en1f", text: "I would rather take longer and do something correctly than rush and make mistakes.", dimension: "type1", type: "likert-7", options: L7 },
    { id: "en1g", text: "I feel responsible for fixing things that seem wrong or unjust around me.", dimension: "type1", type: "likert-7", options: L7 },

    // Type 2 — The Helper (7 items)
    { id: "en2a", text: "I feel most fulfilled when I am helping someone with their problems.", dimension: "type2", type: "likert-7", options: L7 },
    { id: "en2b", text: "I sometimes put other people's needs ahead of my own without being asked.", dimension: "type2", type: "likert-7", options: L7 },
    { id: "en2c", text: "I have a natural ability to sense what others are feeling.", dimension: "type2", type: "likert-7", options: L7 },
    { id: "en2d", text: "I feel hurt when my efforts to help are not appreciated.", dimension: "type2", type: "likert-7", options: L7 },
    { id: "en2e", text: "Being needed by others gives me a sense of purpose and value.", dimension: "type2", type: "likert-7", options: L7 },
    { id: "en2f", text: "I often remember small details about people's lives and use them to show I care.", dimension: "type2", type: "likert-7", options: L7 },
    { id: "en2g", text: "I find it easier to give support than to ask for it when I need it.", dimension: "type2", type: "likert-7", options: L7 },

    // Type 3 — The Achiever (7 items)
    { id: "en3a", text: "I am driven to achieve goals and measure my success against others.", dimension: "type3", type: "likert-7", options: L7 },
    { id: "en3b", text: "I adapt my behaviour depending on the social context to make a good impression.", dimension: "type3", type: "likert-7", options: L7 },
    { id: "en3c", text: "I feel uncomfortable when I am not productive or accomplishing something.", dimension: "type3", type: "likert-7", options: L7 },
    { id: "en3d", text: "Recognition and admiration from others are important to me.", dimension: "type3", type: "likert-7", options: L7 },
    { id: "en3e", text: "I like to present a capable, put-together image to the world.", dimension: "type3", type: "likert-7", options: L7 },
    { id: "en3f", text: "I set clear targets and work efficiently to reach them.", dimension: "type3", type: "likert-7", options: L7 },
    { id: "en3g", text: "Slowing down or doing nothing for a while makes me restless.", dimension: "type3", type: "likert-7", options: L7 },

    // Type 4 — The Individualist (7 items)
    { id: "en4a", text: "I often feel that something essential is missing from my life.", dimension: "type4", type: "likert-7", options: L7 },
    { id: "en4b", text: "I experience emotions more intensely than most people around me.", dimension: "type4", type: "likert-7", options: L7 },
    { id: "en4c", text: "I value authenticity and being true to myself above fitting in.", dimension: "type4", type: "likert-7", options: L7 },
    { id: "en4d", text: "I am drawn to beauty, symbolism, and deep emotional expression.", dimension: "type4", type: "likert-7", options: L7 },
    { id: "en4e", text: "I can feel different or misunderstood by others, even in a crowd.", dimension: "type4", type: "likert-7", options: L7 },
    { id: "en4f", text: "Creative or artistic expression is an important way I process my inner world.", dimension: "type4", type: "likert-7", options: L7 },
    { id: "en4g", text: "I tend to focus on what is missing or imperfect rather than what is going well.", dimension: "type4", type: "likert-7", options: L7 },

    // Type 5 — The Investigator (7 items)
    { id: "en5a", text: "I need time alone to recharge and process my thoughts.", dimension: "type5", type: "likert-7", options: L7 },
    { id: "en5b", text: "I prefer to observe and understand a situation before jumping in.", dimension: "type5", type: "likert-7", options: L7 },
    { id: "en5c", text: "I am fascinated by complex systems and enjoy deep research on topics that interest me.", dimension: "type5", type: "likert-7", options: L7 },
    { id: "en5d", text: "I feel drained when people make too many demands on my time or energy.", dimension: "type5", type: "likert-7", options: L7 },
    { id: "en5e", text: "I would rather have depth in a few areas than spread myself across many.", dimension: "type5", type: "likert-7", options: L7 },
    { id: "en5f", text: "Knowing how things work gives me a sense of security and competence.", dimension: "type5", type: "likert-7", options: L7 },
    { id: "en5g", text: "I guard my private space and energy; I do not share everything with everyone.", dimension: "type5", type: "likert-7", options: L7 },

    // Type 6 — The Loyalist (7 items)
    { id: "en6a", text: "I tend to anticipate potential problems and prepare for worst-case scenarios.", dimension: "type6", type: "likert-7", options: L7 },
    { id: "en6b", text: "Loyalty and trust are the most important qualities I look for in relationships.", dimension: "type6", type: "likert-7", options: L7 },
    { id: "en6c", text: "I question authority and like to verify information before accepting it.", dimension: "type6", type: "likert-7", options: L7 },
    { id: "en6d", text: "I feel anxious when I do not have a clear plan or backup option.", dimension: "type6", type: "likert-7", options: L7 },
    { id: "en6e", text: "I am most at ease when I know where I stand with people and what is expected.", dimension: "type6", type: "likert-7", options: L7 },
    { id: "en6f", text: "I look for reliable allies and systems I can depend on in uncertain times.", dimension: "type6", type: "likert-7", options: L7 },
    { id: "en6g", text: "I often run through possible risks in my mind before making a decision.", dimension: "type6", type: "likert-7", options: L7 },

    // Type 7 — The Enthusiast (6 items)
    { id: "en7a", text: "I dislike being confined to one option and prefer to keep my choices open.", dimension: "type7", type: "likert-7", options: L7 },
    { id: "en7b", text: "I quickly become bored with routine and seek out new stimulation.", dimension: "type7", type: "likert-7", options: L7 },
    { id: "en7c", text: "I tend to focus on the positive side of things, even in difficult situations.", dimension: "type7", type: "likert-7", options: L7 },
    { id: "en7d", text: "I have many interests and often start new projects before finishing old ones.", dimension: "type7", type: "likert-7", options: L7 },
    { id: "en7e", text: "I prefer to keep the mood light and avoid dwelling on sad or heavy topics.", dimension: "type7", type: "likert-7", options: L7 },
    { id: "en7f", text: "New ideas and possibilities excite me more than following a fixed plan.", dimension: "type7", type: "likert-7", options: L7 },

    // Type 8 — The Challenger (6 items)
    { id: "en8a", text: "I feel a strong need to be in control of my own life and circumstances.", dimension: "type8", type: "likert-7", options: L7 },
    { id: "en8b", text: "I speak my mind directly, even if it makes others uncomfortable.", dimension: "type8", type: "likert-7", options: L7 },
    { id: "en8c", text: "I instinctively protect people I care about, especially the vulnerable.", dimension: "type8", type: "likert-7", options: L7 },
    { id: "en8d", text: "I find it difficult to show vulnerability or ask for help.", dimension: "type8", type: "likert-7", options: L7 },
    { id: "en8e", text: "I respect people who stand their ground and say what they think.", dimension: "type8", type: "likert-7", options: L7 },
    { id: "en8f", text: "I would rather take charge than wait for someone else to lead.", dimension: "type8", type: "likert-7", options: L7 },

    // Type 9 — The Peacemaker (6 items)
    { id: "en9a", text: "I tend to go along with what the group wants to avoid conflict.", dimension: "type9", type: "likert-7", options: L7 },
    { id: "en9b", text: "I find it easy to see all sides of an argument.", dimension: "type9", type: "likert-7", options: L7 },
    { id: "en9c", text: "I sometimes lose track of my own priorities because I accommodate others.", dimension: "type9", type: "likert-7", options: L7 },
    { id: "en9d", text: "Inner peace and harmony are more important to me than achievement or status.", dimension: "type9", type: "likert-7", options: L7 },
    { id: "en9e", text: "I feel uncomfortable when there is tension or conflict between people I know.", dimension: "type9", type: "likert-7", options: L7 },
    { id: "en9f", text: "I like routines and a steady pace; big changes can feel overwhelming.", dimension: "type9", type: "likert-7", options: L7 },

    // --- Attention checks (2) ---
    { id: "en_ac1", text: "Please select Agree for this item to show you are reading.", type: "likert-7", options: L7, isAttentionCheck: true, attentionCheckExpectedValue: 6 },
    { id: "en_ac2", text: "This is an attention check. Please choose Slightly Agree.", type: "likert-7", options: L7, isAttentionCheck: true, attentionCheckExpectedValue: 5 },
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreLikertDimensions(answers, this.questions, [...dimensions], 7);
    const top = topNDimensions(dimScores, 2);
    const coreType = top[0];
    const wing = top[1];

    const typeNum = coreType?.dimensionId.replace("type", "") ?? "?";
    const wingNum = wing?.dimensionId.replace("type", "") ?? "?";

    return {
      dimensions: dimScores,
      overall: coreType?.score ?? 0,
      typeCode: `${typeNum}w${wingNum}`,
      typeLabel: coreType?.label ?? "Unknown",
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const sorted = [...scores.dimensions].sort((a, b) => b.score - a.score);
    const primary = sorted[0];
    const wing = sorted[1];

    const summary = `Your core Enneagram type is ${primary.label} with a ${wing.label.split(" — ")[1] || wing.label} wing (${scores.typeCode}). This means you primarily experience the world through the lens of ${primary.description.toLowerCase()}, with secondary tendencies toward ${wing.description.toLowerCase()}.`;

    const dimensionDetails = sorted.slice(0, 5).map((d) => ({
      dimensionId: d.dimensionId,
      text: `${d.label}: ${d.score}% alignment — ${d.description}`,
    }));

    const growthPaths: Record<string, string> = {
      type1: "Practice self-compassion. Your inner critic can be transformed into wisdom when balanced with self-acceptance.",
      type2: "Learn to identify and express your own needs. True generosity flows from a full cup.",
      type3: "Slow down and connect with your authentic feelings rather than performing for validation.",
      type4: "Ground yourself in the present moment. Your depth is a gift when balanced with gratitude for what is.",
      type5: "Practice sharing your knowledge and opening up emotionally to trusted people.",
      type6: "Build trust in your own inner guidance. You have more courage than you give yourself credit for.",
      type7: "Embrace stillness and depth. The richest experiences come from fully committing to the present.",
      type8: "Allow vulnerability to be a strength. Softening your defences invites deeper connection.",
      type9: "Assert your own desires and opinions. Your perspective matters and deserves to be heard.",
    };

    return {
      summary,
      dimensionDetails,
      typeLabel: primary.label,
      tips: [
        growthPaths[primary.dimensionId] ?? "Continue exploring your type for deeper self-understanding.",
        "Explore your wing influence to understand the nuances of your personality.",
        "Retake this assessment in 6 months to see how your growth path evolves.",
      ],
    };
  },
};
