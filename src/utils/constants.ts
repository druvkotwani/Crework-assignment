interface Question {
  text: string;
  type: string[];
}

export const data: Question[] = [
  {
    text: "Tell me about a product you launched successfully.",
    type: ["Product Design", "Behavioral"],
  },
  {
    text: "What’s your favorite product and why?",
    type: ["Product Design", "Behavioral"],
  },
  {
    text: "Design a product for drivers driving in rush hours",
    type: ["Product Design", "Behavioral"],
  },
  {
    text: "Design a fire alarm for the deaf.",
    type: ["Product Design", "Analytics"],
  },
  {
    text: "Should Meta build a dating app?",
    type: ["Product Design", "System Design"],
  },
  {
    text: "Tell me about a time when you faced a difficult stakeholder and how did you manager it?",
    type: ["Product Design", "Technical"],
  },
  {
    text: "Tell me about a product you launched successfully.",
    type: ["Product Design", "Behavioral"],
  },
  {
    text: "Tell me about a product you launched successfully.",
    type: ["Product Design", "Behavioral"],
  },
  {
    text: "Tell me about a product you launched successfully.",
    type: ["Product Design", "Behavioral"],
  },
];

export const types: string[] = [
  "Product Design",
  "Behavioral",
  "Product Strategy",
  "System Design",
  "Analytics",
  "Technical",
  "Guesstimates",
];
