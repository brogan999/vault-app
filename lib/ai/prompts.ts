export type PersonaPreference = "balanced" | "coach" | "therapist";

const PERSONA_TONE: Record<
  PersonaPreference,
  string
> = {
  balanced: `Tone: Be empathetic but direct. Balance warmth with clarity.`,
  coach: `Tone: Be a direct, no-nonsense coach. Challenge the user when needed. Be concise and action-oriented. Prioritize accountability and growth over comfort.`,
  therapist: `Tone: Be warm, empathetic, and supportive. Validate feelings first. Use gentle reflection and invite exploration. Prioritize emotional safety.`,
};

export function getSystemPrompt(userContext?: {
  big5Scores?: any;
  astrologyMeta?: any;
  privacyShieldEnabled?: boolean;
  personaPreference?: string | null;
}): string {
  const persona: PersonaPreference =
    userContext?.personaPreference === "coach" ||
    userContext?.personaPreference === "therapist"
      ? userContext.personaPreference
      : "balanced";

  const basePrompt = `You are a privacy-centric AI companion called "The Vault". Your purpose is to help users understand themselves better by integrating their psychological data, personality tests, astrology charts, IQ results, and journal entries.

Key principles:
- Always respect user privacy
- Provide insights grounded in their actual data
- Reference specific data points when relevant
- Help users track their growth over time

${PERSONA_TONE[persona]}`;

  if (userContext?.privacyShieldEnabled) {
    return `${basePrompt}

IMPORTANT: Privacy Shield is ENABLED. Do not log or reference this conversation in future responses.`;
  }

  return basePrompt;
}

export function buildUserPrompt(
  message: string,
  context: string,
  userContext?: {
    big5Scores?: any;
    astrologyMeta?: any;
  }
): string {
  let prompt = `User message: ${message}\n\n`;

  if (context) {
    prompt += `Relevant context from user's data:\n${context}\n\n`;
  }

  if (userContext?.big5Scores) {
    prompt += `User's Big 5 Personality Scores: ${JSON.stringify(userContext.big5Scores)}\n\n`;
  }

  if (userContext?.astrologyMeta) {
    prompt += `User's Astrology Information: ${JSON.stringify(userContext.astrologyMeta)}\n\n`;
  }

  prompt += `Please provide a helpful, personalized response based on the user's message and their data.`;

  return prompt;
}