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
