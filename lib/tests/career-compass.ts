import type { TestDefinition, Answer, TestScores, TestInterpretation } from "./types";
import { scoreForcedChoice, topNDimensions } from "./scoring";

/* Holland RIASEC model — 6 interest types */
const dimensions = [
  { id: "realistic", label: "Realistic", description: "Hands-on, practical, physical tasks and building things" },
  { id: "investigative", label: "Investigative", description: "Analytical thinking, research, and problem-solving" },
  { id: "artistic", label: "Artistic", description: "Creative expression, design, and unconventional ideas" },
  { id: "social", label: "Social", description: "Helping, teaching, counselling, and connecting with others" },
  { id: "enterprising", label: "Enterprising", description: "Leading, persuading, managing, and entrepreneurship" },
  { id: "conventional", label: "Conventional", description: "Organisation, data management, and systematic processes" },
];

export const careerCompassTest: TestDefinition = {
  id: "career-compass",
  title: "Career Compass",
  subtitle: "Discover career paths aligned with your interests and values",
  dimensions: [...dimensions],
  scoringMethod: "forced-choice",

  questions: [
    // 30 forced-choice pairs (each answer votes for one RIASEC type)
    { id: "cc1", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Building or repairing something with your hands" },
      { value: "investigative", label: "Analysing data to solve a complex puzzle" },
    ]},
    { id: "cc2", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "artistic", label: "Designing a visual concept from scratch" },
      { value: "social", label: "Mentoring someone through a personal challenge" },
    ]},
    { id: "cc3", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "enterprising", label: "Pitching an idea to investors" },
      { value: "conventional", label: "Organising a filing system for maximum efficiency" },
    ]},
    { id: "cc4", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Working outdoors on a hands-on project" },
      { value: "artistic", label: "Writing a creative story or composing music" },
    ]},
    { id: "cc5", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Reading research papers to understand a new topic" },
      { value: "enterprising", label: "Negotiating a business deal" },
    ]},
    { id: "cc6", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "social", label: "Facilitating a support group session" },
      { value: "conventional", label: "Creating a detailed spreadsheet to track progress" },
    ]},
    { id: "cc7", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Operating machinery or technical equipment" },
      { value: "social", label: "Teaching a class on a subject you love" },
    ]},
    { id: "cc8", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Conducting an experiment to test a hypothesis" },
      { value: "conventional", label: "Auditing a process to ensure compliance" },
    ]},
    { id: "cc9", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "artistic", label: "Redesigning a space to be more inspiring" },
      { value: "enterprising", label: "Launching a new product line" },
    ]},
    { id: "cc10", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Assembling a complex piece of furniture" },
      { value: "conventional", label: "Setting up a budget and tracking expenses" },
    ]},
    { id: "cc11", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Debugging a computer program" },
      { value: "social", label: "Coaching a teammate to improve their performance" },
    ]},
    { id: "cc12", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "artistic", label: "Photographing scenes that tell a story" },
      { value: "conventional", label: "Creating a detailed project timeline" },
    ]},
    { id: "cc13", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "enterprising", label: "Leading a team through a challenging project" },
      { value: "realistic", label: "Fixing something that is broken around the house" },
    ]},
    { id: "cc14", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "social", label: "Volunteering for a community cause" },
      { value: "investigative", label: "Researching the root cause of a societal issue" },
    ]},
    { id: "cc15", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "conventional", label: "Implementing a quality control checklist" },
      { value: "artistic", label: "Brainstorming creative marketing campaigns" },
    ]},
    { id: "cc16", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "enterprising", label: "Persuading others to adopt a new initiative" },
      { value: "social", label: "Listening to a friend who needs emotional support" },
    ]},
    { id: "cc17", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Working with tools or physical materials" },
      { value: "investigative", label: "Solving a mathematical or logic problem" },
    ]},
    { id: "cc18", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "artistic", label: "Expressing your feelings through art or writing" },
      { value: "enterprising", label: "Setting ambitious goals and chasing them" },
    ]},
    { id: "cc19", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "social", label: "Organising a charity event" },
      { value: "realistic", label: "Gardening or landscaping a yard" },
    ]},
    { id: "cc20", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Exploring how a natural phenomenon works" },
      { value: "artistic", label: "Creating a unique piece of jewelry or craft" },
    ]},
    { id: "cc21", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "conventional", label: "Filing documents in a well-organised system" },
      { value: "enterprising", label: "Cold-calling potential clients for your business" },
    ]},
    { id: "cc22", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Calibrating instruments for precise measurements" },
      { value: "social", label: "Mediating a conflict between two people" },
    ]},
    { id: "cc23", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Studying patterns in data to find insights" },
      { value: "enterprising", label: "Presenting your vision to a large audience" },
    ]},
    { id: "cc24", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "artistic", label: "Improvising a performance or presentation" },
      { value: "conventional", label: "Proofreading a document for accuracy" },
    ]},
    { id: "cc25", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "social", label: "Running a workshop on personal development" },
      { value: "conventional", label: "Managing inventory and supply orders" },
    ]},
    { id: "cc26", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Testing and troubleshooting electronic devices" },
      { value: "artistic", label: "Sketching designs for a new product" },
    ]},
    { id: "cc27", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Writing a report based on your research findings" },
      { value: "social", label: "Leading a group discussion on an important topic" },
    ]},
    { id: "cc28", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "enterprising", label: "Starting your own side business" },
      { value: "conventional", label: "Balancing accounts at the end of the month" },
    ]},
    { id: "cc29", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "realistic", label: "Installing and configuring hardware" },
      { value: "enterprising", label: "Recruiting talent for your team" },
    ]},
    { id: "cc30", text: "Which appeals to you more?", type: "forced-choice", options: [
      { value: "investigative", label: "Mapping out cause-and-effect relationships" },
      { value: "conventional", label: "Scheduling meetings and managing calendars" },
    ]},
  ],

  score(answers: Answer[]): TestScores {
    const dimScores = scoreForcedChoice(answers, [...dimensions], 5);
    const top3 = topNDimensions(dimScores, 3);
    const code = top3.map((d) => d.dimensionId[0].toUpperCase()).join("");

    return {
      dimensions: dimScores,
      overall: top3[0]?.score ?? 0,
      typeCode: code,
      typeLabel: top3.map((d) => d.label).join(" / "),
    };
  },

  interpret(scores: TestScores): TestInterpretation {
    const top3 = topNDimensions(scores.dimensions, 3);
    const code = scores.typeCode ?? "???";

    const summary = `Your Holland Code is ${code} (${top3.map((d) => d.label).join(", ")}). This combination suggests you thrive in environments that involve ${top3.map((d) => d.description.toLowerCase()).join("; ")}.`;

    const careerSuggestions = getCareerSuggestions(top3.map((d) => d.dimensionId));

    const dimensionDetails = scores.dimensions.map((d) => ({
      dimensionId: d.dimensionId,
      text: `${d.label}: ${d.score}% — ${d.description}`,
    }));

    return {
      summary,
      dimensionDetails,
      typeLabel: `Holland Code: ${code}`,
      tips: [
        `Top career paths for ${code}: ${careerSuggestions.join(", ")}.`,
        "Consider informational interviews in your top career matches to explore them further.",
        "Your Holland Code can shift over time as your interests evolve — revisit in 6-12 months.",
      ],
    };
  },
};

function getCareerSuggestions(topIds: string[]): string[] {
  const careers: Record<string, string[]> = {
    realistic: ["Engineer", "Architect", "Mechanic", "Pilot", "Surveyor"],
    investigative: ["Scientist", "Data Analyst", "Researcher", "Pharmacist", "Software Developer"],
    artistic: ["Graphic Designer", "Writer", "Musician", "Filmmaker", "Interior Designer"],
    social: ["Counsellor", "Teacher", "Social Worker", "Nurse", "HR Specialist"],
    enterprising: ["Entrepreneur", "Sales Manager", "Lawyer", "Marketing Director", "Real Estate Agent"],
    conventional: ["Accountant", "Project Manager", "Financial Analyst", "Office Manager", "Logistics Coordinator"],
  };

  const suggestions: string[] = [];
  for (const id of topIds) {
    const c = careers[id];
    if (c) suggestions.push(...c.slice(0, 2));
  }
  return suggestions.slice(0, 6);
}
