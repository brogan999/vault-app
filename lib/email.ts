import { Resend } from "resend";

/**
 * Singleton Resend client.
 *
 * Set `RESEND_API_KEY` in your environment variables.
 * On the free tier this gives you 3,000 emails/month (100/day).
 */
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS =
  process.env.RESEND_FROM_ADDRESS ?? "Anima <noreply@theanima.ai>";

/* ------------------------------------------------------------------ */
/*  Generic send helper                                                */
/* ------------------------------------------------------------------ */

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  /** React Email component rendered to JSX */
  react?: React.ReactElement;
  /** Plain HTML string fallback */
  html?: string;
  /** Optional reply-to address */
  replyTo?: string;
}

export async function sendEmail({
  to,
  subject,
  react,
  html,
  replyTo,
}: SendEmailOptions) {
  const recipients = Array.isArray(to) ? to : [to];

  // Build the send payload based on whether we have react or html content
  const payload = {
    from: FROM_ADDRESS,
    to: recipients,
    subject,
    ...(replyTo ? { replyTo } : {}),
  };

  let result;
  if (react) {
    result = await resend.emails.send({ ...payload, react });
  } else if (html) {
    result = await resend.emails.send({ ...payload, html });
  } else {
    result = await resend.emails.send({ ...payload, text: "" });
  }

  if (result.error) {
    console.error("[email] Failed to send:", result.error);
    throw new Error(`Email send failed: ${result.error.message}`);
  }

  return result.data;
}

/* ------------------------------------------------------------------ */
/*  Convenience wrappers                                               */
/* ------------------------------------------------------------------ */

export async function sendWelcomeEmail(email: string, firstName?: string) {
  const { WelcomeEmail } = await import("@/emails/welcome");
  return sendEmail({
    to: email,
    subject: "Welcome to Anima",
    react: WelcomeEmail({ firstName }),
  });
}

export async function sendTestResultsEmail(
  email: string,
  testName: string,
  resultSummary: string,
  resultsUrl: string
) {
  const { TestResultsEmail } = await import("@/emails/test-results");
  return sendEmail({
    to: email,
    subject: `Your ${testName} Results Are Ready`,
    react: TestResultsEmail({ testName, resultSummary, resultsUrl }),
  });
}
