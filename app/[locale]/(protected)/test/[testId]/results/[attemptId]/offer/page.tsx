import { redirect } from "next/navigation";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { createAdminClient } from "@/lib/supabase/server";
import { hasCareerSuite } from "@/lib/access";
import { getProductById } from "@/lib/products";
import { getTestResult } from "@/app/actions/tests";
import { OTOClient } from "./OTOClient";

interface OfferPageProps {
  params: Promise<{ testId: string; attemptId: string }>;
}

/**
 * Interstitial OTO (One-Time Offer) page — Career Advantage Suite.
 * Shown immediately after buying the basic premium report, before the user
 * can see their results. If the user already owns the career_suite we
 * skip straight to thank-you.
 */
export default async function OfferPage({ params }: OfferPageProps) {
  const { testId, attemptId } = await params;
  const user = await getSupabaseUser();

  // Must be signed in to reach this page
  if (!user) redirect(`/test/${testId}/results/${attemptId}`);

  // If user already owns career suite, skip to thank-you
  const supabase = createAdminClient();
  const alreadyOwns = await hasCareerSuite(supabase, user.id);
  if (alreadyOwns) redirect(`/test/${testId}/results/${attemptId}/thank-you`);

  // Fetch test product for contextual copy
  const product = getProductById(testId);
  const testTitle = product?.title ?? "Personality Assessment";

  // Verify the attempt exists (basic validation)
  let result: Awaited<ReturnType<typeof getTestResult>> = null;
  try {
    result = await getTestResult(attemptId);
  } catch {
    // If the result isn't found, send them to the results page
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
