export type PersonaPreference = "balanced" | "coach" | "therapist";

export type MirrorAssessmentContext = {
  big5?: Record<string, number>;
  personalityType?: { typeCode: string; typeLabel?: string; dimensions?: { dimensionId: string; score: number }[] };
  enneagram?: { typeCode: string; typeLabel?: string; fullProfile?: unknown };
  workStyle?: { typeCode: string; typeLabel?: string; dimensions?: unknown };
  lifePath?: number;
  humanDesign?: { type?: string; strategy?: string; authority?: string };
  chineseZodiac?: string;
  mayanTzolkin?: string;
  westernChart?: Record<string, unknown>;
  vedicChart?: Record<string, unknown>;
};

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
  assessmentContext?: MirrorAssessmentContext;
  privacyShieldEnabled?: boolean;
  personaPreference?: string | null;
}): string {
  const persona: PersonaPreference =
    userContext?.personaPreference === "coach" ||
    userContext?.personaPreference === "therapist"
      ? userContext.personaPreference
      : "balanced";

  const basePrompt = `You are a privacy-centric AI companion called "The Mirror" (The Vault). Your purpose is to help users understand themselves better by integrating their psychological data, personality tests, astrology charts, IQ results, and journal entries.

Key principles:
- Always respect user privacy
- Provide insights grounded in their actual data — use their results as context for conversation and insight, do NOT simply recite or list their results back to them
- Reference specific data points when relevant
- Help users track their growth over time

FRAMEWORK DIFFERENTIATION:
- Psychometric findings (Big Five, personality type, Enneagram, work style) have an evidence base; you may reference this when relevant
- Esoteric frameworks (astrology, numerology, Human Design, Chinese Zodiac, Mayan Tzolkin) are symbolic or reflective lenses — frame them as "according to …" or "in the … tradition", never as factual claims about the world

GUARDRAILS:
- Do not claim diagnostic or clinical authority
- Frame all insights as perspectives to consider, not as labels or prescriptions
- This is not a substitute for professional assessment or therapy; say so if the user asks about diagnosis or treatment

IMPORTANT: You have FULL access to the user's Vault data. This includes:
- Voice journal transcriptions (audio is automatically transcribed)
- Uploaded documents (PDFs, text files, images)
- Personality test results and assessment summaries (provided below)
- All of this is provided to you as context below the user's message.

When the user asks about their journal entries, voice journals, or any uploaded data, use the context provided. Quote or reference their actual words when possible. NEVER say you cannot access their data — if context is provided below, that IS their data.

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
    assessmentContext?: MirrorAssessmentContext;
  }
): string {
  let prompt = `User message: ${message}\n\n`;

  if (context) {
    prompt += `=== DATA FROM THE USER'S VAULT ===\nThe following is real data from the user's uploaded documents, voice journal transcriptions, and other Vault entries. Use this to answer their question:\n\n${context}\n\n=== END VAULT DATA ===\n\n`;
  }

  prompt += `=== USER'S COMPLETED ASSESSMENTS (use as context for insight, do not simply recite) ===\n`;

  if (userContext?.assessmentContext) {
    const a = userContext.assessmentContext;
    if (a.big5) prompt += `Big Five: ${JSON.stringify(a.big5)}\n`;
    if (a.personalityType) prompt += `Personality type: ${a.personalityType.typeCode} — ${a.personalityType.typeLabel ?? ""}\n`;
    if (a.enneagram) prompt += `Enneagram: ${a.enneagram.typeCode} — ${a.enneagram.typeLabel ?? ""}\n`;
    if (a.workStyle) prompt += `Work style: ${a.workStyle.typeCode} — ${a.workStyle.typeLabel ?? ""}\n`;
    if (a.lifePath != null) prompt += `Life Path number: ${a.lifePath}\n`;
    if (a.humanDesign?.type) prompt += `Human Design: ${a.humanDesign.type}; Strategy: ${a.humanDesign.strategy ?? "—"}; Authority: ${a.humanDesign.authority ?? "—"}\n`;
    if (a.chineseZodiac) prompt += `Chinese Zodiac: ${a.chineseZodiac}\n`;
    if (a.mayanTzolkin) prompt += `Mayan Tzolkin: ${a.mayanTzolkin}\n`;
    if (a.westernChart && Object.keys(a.westernChart).length) prompt += `Western astrology: ${JSON.stringify(a.westernChart)}\n`;
    if (a.vedicChart && Object.keys(a.vedicChart).length) prompt += `Vedic astrology: ${JSON.stringify(a.vedicChart)}\n`;
  }

  if (userContext?.big5Scores) {
    prompt += `Big Five (legacy): ${JSON.stringify(userContext.big5Scores)}\n`;
  }
  if (userContext?.astrologyMeta) {
    prompt += `Astrology (legacy): ${JSON.stringify(userContext.astrologyMeta)}\n`;
  }

  prompt += `=== END ASSESSMENTS ===\n\nPlease provide a helpful, personalized response based on the user's message and their Vault data above. Use their results as context for conversation and insight; do not simply read the results back.`;

  return prompt;
}