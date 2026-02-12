/**
 * Access control: premium report access (Pro or one-time/bundle purchase).
 */

import type { SupabaseClient } from "@supabase/supabase-js";
import { testIdToFramework, type ReportFramework } from "./reports";

/** Whether the user can access the full premium report for the given framework. */
export async function canAccessPremiumReport(
  supabase: SupabaseClient,
  userId: string,
  frameworkOrTestId: string,
  subscriptionTier: string
): Promise<boolean> {
  if (subscriptionTier === "pro") return true;

  const framework =
    testIdToFramework(frameworkOrTestId) ?? (frameworkOrTestId as ReportFramework);
  const { data } = await supabase
    .from("user_reports")
    .select("id")
    .eq("user_id", userId)
    .eq("framework", framework)
    .limit(1)
    .maybeSingle();
  return !!data;
}

/** Resolve testId (e.g. big5, mbti) to report framework for access check. */
export function getReportFramework(testId: string): ReportFramework | null {
  return testIdToFramework(testId);
}

/** Whether the user owns the Career Advantage Suite (OTO 1). */
export async function hasCareerSuite(
  supabase: SupabaseClient,
  userId: string,
): Promise<boolean> {
  const { data } = await supabase
    .from("user_reports")
    .select("id")
    .eq("user_id", userId)
    .eq("framework", "career_suite")
    .limit(1)
    .maybeSingle();
  return !!data;
}

/** Whether the user owns the Pro Bundle (OTO 2 / complete_10). */
export async function hasProBundle(
  supabase: SupabaseClient,
  userId: string,
): Promise<boolean> {
  const { data } = await supabase
    .from("user_reports")
    .select("id")
    .eq("user_id", userId)
    .eq("framework", "pro_bundle")
    .limit(1)
    .maybeSingle();
  return !!data;
}

/** Fetch all product ownership flags for the funnel in one shot. */
export async function getFunnelOwnership(
  supabase: SupabaseClient,
  userId: string,
  testId: string,
  subscriptionTier: string,
): Promise<{
  hasBasicReport: boolean;
  hasCareerSuite: boolean;
  hasProBundle: boolean;
}> {
  const [basicReport, careerSuite, proBundle] = await Promise.all([
    canAccessPremiumReport(supabase, userId, testId, subscriptionTier),
    hasCareerSuite(supabase, userId),
    hasProBundle(supabase, userId),
  ]);
  return {
    hasBasicReport: basicReport,
    hasCareerSuite: careerSuite,
    hasProBundle: proBundle,
  };
}
