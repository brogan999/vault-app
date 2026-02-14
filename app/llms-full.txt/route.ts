const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

const LLMS_FULL_TXT = `# Anima by Bald Labs, Inc

> Anima is a privacy-focused AI companion that uses psychological data with RAG (Retrieval-Augmented Generation) to deliver personalized personality insights, assessments, and AI-powered conversations. Users upload psychological data and receive AI-generated personality insights across ten different frameworks.

- Combines four psychometric assessments (Big Five / OCEAN, Personality Types / MBTI, Enneagram, Work Style Profile / DISC) with six esoteric frameworks (Western Astrology, Vedic Astrology, Numerology / Life Path, Human Design, Chinese Zodiac, Mayan Astrology)
- Features an AI chat companion called "The Mirror" that synthesizes insights across all completed frameworks using RAG
- Includes voice journaling, privacy controls, exportable reports, and a document vault for psychological data
- Free tier includes all 10 assessments with basic results, 10 Mirror messages/day, mood journaling, and 50MB vault storage
- Pro subscription ($14.99/mo or $119.99/yr) unlocks premium reports, 300 Mirror messages/month, voice journaling with AI analysis, and 10GB vault storage

## Our Framework

Source: ${BASE_URL}/our-framework

### Introduction

For over a century, psychologists, philosophers, and ancient wisdom traditions have been drawing maps of the human personality. Some of those maps are backed by decades of peer-reviewed research. Others are rooted in thousands of years of symbolic tradition. Each one captures something true — and each one misses something, too.

We decided to stop pretending that any one map is the territory.

### The problem with one lens

Imagine trying to understand a city by only looking at its road map. You'd know how to get around, but you'd miss the architecture, the culture, the history, the feeling of walking through it at dusk. Now imagine you also had a topographic map, a transit map, an aerial photograph, and a hand-drawn guide from someone who'd lived there for forty years. The city wouldn't change — but your understanding of it would transform.

That's what happens when you look at personality through multiple frameworks. A single test gives you a label. Multiple lenses give you a living, breathing portrait.

### What we offer

Our platform brings together ten distinct frameworks — four grounded in modern psychometric science, and six drawn from the world's oldest symbolic traditions — plus an AI companion that can hold all of them in mind at once.

### The psychometric assessments

These are our empirically grounded frameworks. Each uses validated question sets, 7-point Likert scales, reverse-coded items, and attention checks. We monitor internal consistency (Cronbach's alpha), run factor analyses, and track test-retest reliability.

- Big Five (OCEAN): The most scientifically validated personality model. Measures Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism with facet-level detail.
- Personality Types: Based on Jungian psychological types. Measures four dimensions (E/I, S/N, T/F, J/P) to arrive at one of 16 personality types.
- Enneagram: Describes nine fundamental motivational patterns — the core desires and fears driving behavior. Identifies core type, wing, and lines of growth/stress.
- Work Style Profile (DISC): Measures Dominance, Influence, Steadiness, and Conscientiousness to reveal collaboration, communication, and leadership styles.

### The esoteric frameworks

These are symbolic frameworks. We clearly label them as such and never claim scientific validity. We calculate every chart with the highest possible precision using the Swiss Ephemeris for astronomical calculations.

- Western Astrology: Tropical zodiac based on Sun, Moon, Rising, and full planetary placements.
- Vedic Astrology: Sidereal zodiac with Nakshatra and Dasha period analysis.
- Numerology / Life Path: Core numbers derived from birth date and name.
- Human Design: Synthesis of astrology, I Ching, Kabbalah, and Chakra system producing a BodyGraph with Type, Strategy, and Authority.
- Chinese Zodiac: Animal sign, element, and Yin/Yang based on the lunar calendar.
- Mayan Astrology: Tzolkin 260-day sacred calendar producing a Galactic Signature (day sign + tone).

### The Mirror: AI-powered self-conversation

The Mirror is an AI companion that has access to your complete profile across all frameworks. You can have a conversation about your patterns, relationships, career, and growth edges — it draws on every score, every sign, and every type to offer perspectives you might not have considered. It's a mirror that talks back, not a therapist or oracle.

### Our philosophy on evidence

We maintain a clear separation: psychometric results are labeled as empirically validated; esoteric results are labeled as symbolic frameworks. We never blur the line. We respect users enough to let them decide what resonates.

## Frequently Asked Questions

Source: ${BASE_URL}/faq

### About the Platform

Q: What is this platform, exactly?
A: We're a self-discovery platform that brings together ten different personality and self-understanding frameworks — four based on modern psychometric science and six drawn from ancient symbolic traditions — plus an AI companion called The Mirror that weaves your results together into a conversation about you.

Q: Why combine scientific tests with things like astrology?
A: Because they do different things. Our psychometric assessments measure real psychological constructs with validated question sets. Our esoteric frameworks offer symbolic languages for self-reflection. We never blur the line between them — every result is clearly labeled.

Q: Is this a replacement for therapy?
A: No. This is a tool for self-discovery and personal growth — for curiosity, not diagnosis. If you're experiencing mental health challenges, please work with a qualified professional.

### The Psychometric Assessments

Q: How accurate are your personality tests?
A: We use established methodologies: validated question items, 7-point Likert scales, balanced keying, attention checks, and reverse scoring. We monitor Cronbach's alpha, run factor analyses, and track test-retest reliability.

Q: What's the Big Five (OCEAN) assessment?
A: The most scientifically validated personality model. Measures five broad dimensions — Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism — using IPIP items with optional facet-level detail.

Q: Can I retake the assessments?
A: Yes. We recommend waiting at least a few weeks between attempts. Your most recent results will be used.

### The Mirror (AI Chat)

Q: What is The Mirror?
A: An AI companion with access to your complete profile across all frameworks. You can ask questions about patterns, relationships, career, and growth edges — and it draws on every score to offer new perspectives.

Q: Does The Mirror remember our conversations?
A: Yes, within your session. Conversation history is tied to your account.

### Pricing and Plans

Q: What's included for free?
A: All 10 assessments with limited result summaries, 10 Mirror messages per day, mood journaling (5 entries/week), 50MB of Vault storage, and basic shareable result cards.

Q: What does Pro include?
A: Everything in Free plus all premium reports (current and future), 300 Mirror messages per month, voice journaling with AI analysis, custom AI persona settings, unlimited journal entries, growth trend reports, 10GB Vault storage, proactive AI check-ins, cross-framework synthesis dashboard, and full data export. Pro is $14.99/month or $119.99/year (save 33%).

Q: What are premium reports?
A: Deep-dive reports with full facet breakdowns, wings, full charts, etc. Individual reports range from $9.99 to $19.99. Bundles available: All 4 Psychometric $39.99, All 6 Esoteric $69.99, The Complete Portrait (all 10) $99.99.

### Your Account and Data

Q: What data do you collect?
A: Information you provide (birth data, assessment responses) and standard usage data. We don't sell personal data to third parties.

Q: Can I export my profile data?
A: Yes. Download a complete summary of results across all frameworks from account settings.

Q: Can I delete my account and data?
A: Yes, at any time from account settings. We remove personal data per our Privacy Policy and applicable laws.

## Knowledge Base

Source: ${BASE_URL}/knowledge-base

The Knowledge Base contains deep dives into every framework on the platform:

### Personality Types (16 Types)
Four temperament groups — Analysts (INTJ, INTP, ENTJ, ENTP), Diplomats (INFJ, INFP, ENFJ, ENFP), Sentinels (ISTJ, ISFJ, ESTJ, ESFJ), and Explorers (ISTP, ISFP, ESTP, ESFP). Each type has a unique character, strengths, growth edges, relationship dynamics, and career insights.

### Big Five (OCEAN)
In-depth articles on each dimension: Openness to Experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Includes facet-level breakdowns and what your scores mean in practice.

### Enneagram
Coverage of all nine types (The Reformer, The Helper, The Achiever, The Individualist, The Investigator, The Loyalist, The Enthusiast, The Challenger, The Peacemaker) plus wings, growth/stress lines, and instinctual subtypes.

### Work Style Profile (DISC)
Articles on Dominance, Influence, Steadiness, and Conscientiousness dimensions. How your work style affects collaboration, communication, and leadership.

### Western Astrology
Sun signs, Moon signs, Rising signs, planetary aspects, houses, and how they interact with your psychometric profile.

### Vedic Astrology
Sidereal zodiac signs, Nakshatras, planetary periods (Dashas), and how Vedic astrology complements Western astrology.

### Other Frameworks
Life Path Numerology, Human Design (Types, Strategy, Authority, Profiles), Chinese Zodiac (animals, elements), and Mayan Astrology (Tzolkin day signs and tones).

## Contact

Source: ${BASE_URL}/contact

For support, email support@theanima.ai or use the live chat widget on our website.
`;

export function GET() {
  return new Response(LLMS_FULL_TXT.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
