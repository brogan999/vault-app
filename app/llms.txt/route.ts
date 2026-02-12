const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

const LLMS_TXT = `# Anima by Personality Co

> Anima is a privacy-focused AI companion that uses psychological data with RAG (Retrieval-Augmented Generation) to deliver personalized personality insights, assessments, and AI-powered conversations. Users upload psychological data and receive AI-generated personality insights across ten different frameworks.

- Combines four psychometric assessments (Big Five / OCEAN, Personality Types / MBTI, Enneagram, Work Style Profile / DISC) with six esoteric frameworks (Western Astrology, Vedic Astrology, Numerology / Life Path, Human Design, Chinese Zodiac, Mayan Astrology)
- Features an AI chat companion called "The Mirror" that synthesizes insights across all completed frameworks using RAG
- Includes voice journaling, privacy controls, exportable reports, and a document vault for psychological data
- Free tier includes all 10 assessments with basic results, 10 Mirror messages/day, mood journaling, and 50MB vault storage
- Pro subscription ($14.99/mo or $119.99/yr) unlocks premium reports, 300 Mirror messages/month, voice journaling with AI analysis, and 10GB vault storage

## Pages

- [Home](${BASE_URL}/): Overview of Anima platform and its multi-framework approach to personality
- [Our Framework](${BASE_URL}/our-framework): The psychological frameworks and methodology behind Anima — why multiple lenses give a richer portrait than any single test
- [Pricing](${BASE_URL}/pricing): Free and Pro subscription plans with detailed feature comparison
- [FAQ](${BASE_URL}/faq): Frequently asked questions about assessments, The Mirror AI, esoteric frameworks, data privacy, and pricing
- [Knowledge Base](${BASE_URL}/knowledge-base): Deep dives into every framework — personality types, Big Five, Enneagram, astrology, numerology, Human Design, and more

## Legal

- [Privacy Policy](${BASE_URL}/privacy): How we collect, use, and protect user data including birth data and assessment responses
- [Terms of Service](${BASE_URL}/terms): Terms and conditions for using the Anima platform
- [Cookie Policy](${BASE_URL}/cookies): How we use cookies and how to manage your preferences
- [Contact](${BASE_URL}/contact): Get in touch with our support team

## Optional

- [Full content version](${BASE_URL}/llms-full.txt): Complete text content of all public pages for comprehensive context
`;

export function GET() {
  return new Response(LLMS_TXT.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
