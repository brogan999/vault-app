import { redirect } from "next/navigation";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { hasCareerSuite } from "@/lib/access";
import { getProductById } from "@/lib/products";
import { getTestResult } from "@/app/actions/tests";
import { fulfillStripeSession } from "@/app/actions/payments";
import { OTOClient } from "./OTOClient";

interface OfferPageProps {
  params: Promise<{ testId: string; attemptId: string }>;
  searchParams: Promise<{ session_id?: string }>;
}

/**
 * Interstitial OTO (One-Time Offer) page — Career Advantage Suite.
 * Shown immediately after buying the basic premium report, before the user
 * can see their results. If the user already owns the career_suite we
 * skip straight to thank-you.
 *
 * When Stripe redirects here it includes ?session_id=cs_xxx — we verify
 * and fulfil the purchase immediately so the unlock doesn't depend on the
 * webhook arriving first.
 */
export default async function OfferPage({ params, searchParams }: OfferPageProps) {
  const [{ testId, attemptId }, sp] = await Promise.all([params, searchParams]);
  const user = await getSupabaseUser();

  if (!user) redirect(`/test/${testId}/results/${attemptId}`);

  // Fulfil the Stripe session before anything else so the purchase is
  // recorded in the DB regardless of webhook timing.
  if (sp.session_id) {
    await fulfillStripeSession(sp.session_id);
  }

  const supabase = createAdminClient();
  const alreadyOwns = await hasCareerSuite(supabase, user.id);
  if (alreadyOwns) redirect(`/test/${testId}/results/${attemptId}/thank-you`);

  const product = getProductById(testId);
  const testTitle = product?.title ?? "Personality Assessment";

  let result: Awaited<ReturnType<typeof getTestResult>> = null;
  try {
    result = await getTestResult(attemptId);
  } catch {
    redirect(`/test/${testId}/results/${attemptId}`);
  }
  if (!result) redirect(`/test/${testId}/results/${attemptId}`);

  return (
    <OTOClient
      testId={testId}
      attemptId={attemptId}
      testTitle={testTitle}
    />
  );
}
