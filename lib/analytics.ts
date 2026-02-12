import posthog from "posthog-js";

/**
 * Typed analytics event helpers for funnel tracking.
 *
 * Each function wraps `posthog.capture()` with a typed event name
 * and properties. This ensures consistent naming across the codebase
 * and makes it easy to build funnels in the PostHog dashboard.
 *
 * Free tier: 1,000,000 events/month.
 */

/* ------------------------------------------------------------------ */
/*  Helper — safe capture (no-op if PostHog isn't loaded)              */
/* ------------------------------------------------------------------ */

function capture(event: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined" && posthog.__loaded) {
    posthog.capture(event, properties);
  }
}

/* ------------------------------------------------------------------ */
/*  Identity                                                           */
/* ------------------------------------------------------------------ */

/** Call after Clerk auth to link PostHog person to user. */
export function identifyUser(
  userId: string,
  traits?: { email?: string; name?: string; plan?: string }
) {
  if (typeof window !== "undefined" && posthog.__loaded) {
    posthog.identify(userId, traits);
  }
}

/** Call on sign-out. */
export function resetUser() {
  if (typeof window !== "undefined" && posthog.__loaded) {
    posthog.reset();
  }
}

/* ------------------------------------------------------------------ */
/*  Signup funnel                                                      */
/* ------------------------------------------------------------------ */

export function trackSignupStarted(method: "email" | "google" | "apple" = "email") {
  capture("signup_started", { method });
}

export function trackSignupCompleted(method: "email" | "google" | "apple" = "email") {
  capture("signup_completed", { method });
}

/* ------------------------------------------------------------------ */
/*  Assessment funnel                                                  */
/* ------------------------------------------------------------------ */

export function trackAssessmentStarted(testId: string, testName: string) {
  capture("assessment_started", { test_id: testId, test_name: testName });
}

export function trackAssessmentCompleted(
  testId: string,
  testName: string,
  durationSeconds?: number
) {
  capture("assessment_completed", {
    test_id: testId,
    test_name: testName,
    ...(durationSeconds != null && { duration_seconds: durationSeconds }),
  });
}

export function trackAssessmentQuestionAnswered(
  testId: string,
  questionIndex: number,
  totalQuestions: number
) {
  capture("assessment_question_answered", {
    test_id: testId,
    question_index: questionIndex,
    total_questions: totalQuestions,
    progress_pct: Math.round((questionIndex / totalQuestions) * 100),
  });
}

/* ------------------------------------------------------------------ */
/*  Chat / Mirror funnel                                               */
/* ------------------------------------------------------------------ */

export function trackChatSessionStarted(sessionId?: string) {
  capture("chat_session_started", { ...(sessionId && { session_id: sessionId }) });
}

export function trackMessageSent(sessionId?: string, messageLength?: number) {
  capture("message_sent", {
    ...(sessionId && { session_id: sessionId }),
    ...(messageLength != null && { message_length: messageLength }),
  });
}

/* ------------------------------------------------------------------ */
/*  Vault / Document funnel                                            */
/* ------------------------------------------------------------------ */

export function trackDocumentUploaded(
  fileType: string,
  fileSizeBytes?: number
) {
  capture("document_uploaded", {
    file_type: fileType,
    ...(fileSizeBytes != null && { file_size_bytes: fileSizeBytes }),
  });
}

/* ------------------------------------------------------------------ */
/*  Voice journal                                                      */
/* ------------------------------------------------------------------ */

export function trackJournalEntryCreated(type: "text" | "voice" = "text") {
  capture("journal_entry_created", { type });
}

/* ------------------------------------------------------------------ */
/*  Pricing / Checkout funnel                                          */
/* ------------------------------------------------------------------ */

export function trackPricingPageViewed() {
  capture("pricing_page_viewed");
}

export function trackCheckoutStarted(
  plan: string,
  interval?: "monthly" | "annual"
) {
  capture("checkout_started", { plan, ...(interval && { interval }) });
}

export function trackPurchaseCompleted(
  plan: string,
  amountCents: number,
  interval?: "monthly" | "annual"
) {
  capture("purchase_completed", {
    plan,
    amount_cents: amountCents,
    ...(interval && { interval }),
  });
}

/* ------------------------------------------------------------------ */
/*  Premium report funnel                                              */
/* ------------------------------------------------------------------ */

export function trackReportViewed(reportType: string, testId: string) {
  capture("report_viewed", { report_type: reportType, test_id: testId });
}

export function trackReportPurchased(reportType: string, testId: string) {
  capture("report_purchased", { report_type: reportType, test_id: testId });
}

/* ------------------------------------------------------------------ */
/*  Feature usage (generic)                                            */
/* ------------------------------------------------------------------ */

export function trackFeatureUsed(
  feature: "mirror" | "vault" | "chat" | "journal" | "privacy_shield" | "export" | "share",
  metadata?: Record<string, unknown>
) {
  capture("feature_used", { feature, ...metadata });
}
