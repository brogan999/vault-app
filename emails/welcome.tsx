import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface WelcomeEmailProps {
  firstName?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

export function WelcomeEmail({ firstName }: WelcomeEmailProps) {
  const greeting = firstName ? `Hi ${firstName},` : "Welcome,";

  return (
    <Html>
      <Head />
      <Preview>Welcome to Anima — your self-discovery journey starts now</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Welcome to Anima</Heading>

          <Text style={text}>{greeting}</Text>

          <Text style={text}>
            You&apos;ve just joined a platform that brings together ten different
            personality and self-understanding frameworks — four based on modern
            psychometric science and six drawn from ancient symbolic traditions —
            plus an AI companion called The Mirror that weaves your results
            together into a conversation about you.
          </Text>

          <Section style={ctaSection}>
            <Link href={`${BASE_URL}/test/mbti`} style={ctaButton}>
              Take Your First Assessment
            </Link>
          </Section>

          <Text style={text}>Here&apos;s what you can do next:</Text>

          <Text style={listItem}>
            <strong>1. Take an assessment</strong> — Start with Personality Types
            (MBTI) or the Big Five to get your first profile.
          </Text>
          <Text style={listItem}>
            <strong>2. Explore The Mirror</strong> — Once you have at least one
            result, chat with your AI companion for personalized insights.
          </Text>
          <Text style={listItem}>
            <strong>3. Build your portrait</strong> — Add more frameworks over
            time. The more lenses, the richer the picture.
          </Text>

          <Text style={text}>
            If you have any questions, reply to this email or visit our{" "}
            <Link href={`${BASE_URL}/faq`} style={link}>
              FAQ
            </Link>
            .
          </Text>

          <Text style={footer}>
            — Anima Team
            <br />
            <Link href={BASE_URL} style={link}>
              theanima.ai
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const container = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 24px",
};

const heading = {
  fontSize: "28px",
  fontWeight: "700" as const,
  color: "#ffffff",
  marginBottom: "24px",
};

const text = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#a1a1aa",
  marginBottom: "16px",
};

const listItem = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#a1a1aa",
  marginBottom: "12px",
  paddingLeft: "8px",
};

const ctaSection = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const ctaButton = {
  backgroundColor: "#ffffff",
  color: "#0a0a0a",
  fontSize: "15px",
  fontWeight: "600" as const,
  textDecoration: "none",
  padding: "12px 32px",
  borderRadius: "8px",
  display: "inline-block",
};

const link = {
  color: "#ffffff",
  textDecoration: "underline",
};

const footer = {
  fontSize: "13px",
  lineHeight: "1.6",
  color: "#71717a",
  marginTop: "32px",
  borderTop: "1px solid #27272a",
  paddingTop: "24px",
};
