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

interface TestResultsEmailProps {
  testName: string;
  resultSummary: string;
  resultsUrl: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://theanima.ai";

export function TestResultsEmail({
  testName,
  resultSummary,
  resultsUrl,
}: TestResultsEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Your {testName} results are ready — see what we discovered
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Your {testName} Results</Heading>

          <Text style={text}>
            Your assessment is complete. Here&apos;s a preview of what we found:
          </Text>

          <Section style={resultBox}>
            <Text style={resultText}>{resultSummary}</Text>
          </Section>

          <Section style={ctaSection}>
            <Link href={resultsUrl} style={ctaButton}>
              View Full Results
            </Link>
          </Section>

          <Text style={text}>
            Want to go deeper? Unlock your premium report for detailed
            facet-level breakdowns, personalized growth insights, and
            cross-framework connections.
          </Text>

          <Text style={text}>
            You can also chat with{" "}
            <Link href={`${BASE_URL}/chat`} style={link}>
              The Mirror
            </Link>{" "}
            about your results — it can help you explore what your scores mean in
            the context of your other profiles.
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

const resultBox = {
  backgroundColor: "#18181b",
  border: "1px solid #27272a",
  borderRadius: "12px",
  padding: "20px 24px",
  margin: "24px 0",
};

const resultText = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#d4d4d8",
  margin: "0",
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
