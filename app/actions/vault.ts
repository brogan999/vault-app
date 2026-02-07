"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";
import { AVAILABLE_TEST_COUNT, getProductById, getProductDisplayColors } from "@/lib/products";
import { getUserTestResults } from "@/app/actions/tests";
import { TEST_ID_TO_FRAMEWORK, type ReportFramework } from "@/lib/reports";

export type DocumentCategory = "personality" | "intelligence" | "strengths" | "wellness" | "astrology" | "career" | "journal";

export interface VaultDocument {
  id: string;
  fileName: string;
  type: string;
  category: DocumentCategory;
  status: string;
  fileUrl: string | null;
  createdAt: string;
}

export async function getDocumentsForVault(): Promise<VaultDocument[]> {
  try {
    const user = await getSupabaseUser();
    if (!user) return [];

    const admin = createAdminClient();
    const { data, error } = await admin
    .from("documents")
    .select("id, fileName, type, category, status, fileUrl, createdAt")
    .eq("userId", user.id)
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("getDocumentsForVault:", error);
    return [];
  }

  return (data || []).map((d) => ({
    id: d.id as string,
    fileName: d.fileName as string,
    type: d.type as string,
    category: d.category as DocumentCategory,
    status: d.status as string,
    fileUrl: (d.fileUrl as string) || null,
    createdAt: typeof d.createdAt === "string" ? d.createdAt : String(d.createdAt ?? ""),
  }));
  } catch {
    return [];
  }
}

export interface VaultDocumentDetail {
  id: string;
  fileName: string;
  type: string;
  category: DocumentCategory;
  status: string;
  contentText: string | null;
  fileUrl: string | null;
  createdAt: string;
}

export async function getDocumentDetail(documentId: string): Promise<VaultDocumentDetail | null> {
  const user = await getSupabaseUser();
  if (!user) return null;

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("documents")
    .select("id, fileName, type, category, status, contentText, fileUrl, createdAt")
    .eq("id", documentId)
    .eq("userId", user.id)
    .single();

  if (error || !data) return null;

  return {
    id: data.id,
    fileName: data.fileName,
    type: data.type,
    category: data.category as DocumentCategory,
    status: data.status,
    contentText: (data.contentText as string) || null,
    fileUrl: (data.fileUrl as string) || null,
    createdAt: data.createdAt,
  };
}

export async function deleteDocumentFromVault(documentId: string): Promise<{ ok: boolean; error?: string }> {
  const user = await getSupabaseUser();
  if (!user) {
    return { ok: false, error: "Unauthorized" };
  }

  const admin = createAdminClient();

  // Ensure the document belongs to the current user before deleting
  const { data: doc, error: fetchError } = await admin
    .from("documents")
    .select("id, userId")
    .eq("id", documentId)
    .single();

  if (fetchError || !doc || doc.userId !== user.id) {
    return { ok: false, error: "Document not found or unauthorized" };
  }

  const { error: deleteError } = await admin
    .from("documents")
    .delete()
    .eq("id", documentId)
    .eq("userId", user.id);

  if (deleteError) {
    console.error("deleteDocumentFromVault:", deleteError);
    return { ok: false, error: deleteError.message };
  }

  revalidatePath("/vault");
  return { ok: true };
}

/** Format a past date as "Xd ago" or "Xw ago" for vault stats */
function formatRelative(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);
  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffWeeks < 4) return `${diffWeeks}w ago`;
  return `${Math.floor(diffDays / 30)}mo ago`;
}

export interface VaultStatsData {
  testsCompleted: number;
  testsAvailable: number;
  savedProfilesCount: number;
  lastTakenLabel: string | null;
}

export async function getVaultStats(): Promise<VaultStatsData> {
  try {
    const user = await getSupabaseUser();
    if (!user) {
      return {
        testsCompleted: 0,
        testsAvailable: AVAILABLE_TEST_COUNT,
        savedProfilesCount: 0,
        lastTakenLabel: null,
      };
    }

    const admin = createAdminClient();
    const { data: results, error } = await admin
      .from("testResults")
      .select("completedAt")
      .eq("userId", user.id)
      .order("completedAt", { ascending: false })
      .limit(1);

    // Count unique tests completed (not total attempts)
    const { data: uniqueTests } = await admin
      .from("testResults")
      .select("testId")
      .eq("userId", user.id);

    const uniqueTestIds = new Set((uniqueTests ?? []).map((r) => r.testId));
    const testsCompleted = uniqueTestIds.size;
    const latest = !error && results?.[0] ? results[0].completedAt : null;

    return {
      testsCompleted,
      testsAvailable: AVAILABLE_TEST_COUNT,
      savedProfilesCount: 0,
      lastTakenLabel: latest ? formatRelative(String(latest)) : null,
    };
  } catch (e) {
    console.error("getVaultStats error:", e);
    return {
      testsCompleted: 0,
      testsAvailable: AVAILABLE_TEST_COUNT,
      savedProfilesCount: 0,
      lastTakenLabel: null,
    };
  }
}

/* ------------------------------------------------------------------ */
/*  Premium Reports                                                    */
/* ------------------------------------------------------------------ */

/** Reverse lookup: framework → testId (first match). */
const FRAMEWORK_TO_TEST_ID: Record<string, string> = Object.fromEntries(
  Object.entries(TEST_ID_TO_FRAMEWORK).map(([tid, fw]) => [fw, tid]),
);

export interface PremiumReportItem {
  id: string;
  framework: ReportFramework;
  displayName: string;
  unlockedAt: string;
  unlockedVia: string;
  /** The test attempt ID we can use to generate the PDF. */
  attemptId: string | null;
  /** Test ID (product ID) for linking to results page. */
  testId: string | null;
  /** Icon color from product catalog. */
  color: string;
  bgColor: string;
  cardBg: string;
  /** Type label or overall score from test result, if available. */
  resultLabel: string | null;
}

/** Display labels for report frameworks. */
const FRAMEWORK_DISPLAY_NAMES: Record<string, string> = {
  big_five: "Big Five Personality",
  personality_type: "Personality Type",
  enneagram: "Enneagram",
  work_style: "Work Style (DISC)",
  western_astrology: "Western Astrology",
  vedic_astrology: "Vedic Astrology",
  human_design: "Human Design",
  numerology: "Numerology",
  chinese_zodiac: "Chinese Zodiac",
  mayan_astrology: "Mayan Astrology",
  career_compass: "Career Compass",
  relationship_blueprint: "Relationship Blueprint",
  annual_portrait: "Annual Portrait",
};

export async function getUserPremiumReports(): Promise<PremiumReportItem[]> {
  try {
    const user = await getSupabaseUser();
    if (!user) return [];

    const admin = createAdminClient();

    // 1. Get all unlocked reports for this user
    const { data: reports, error } = await admin
      .from("user_reports")
      .select("id, framework, unlocked_via, unlocked_at")
      .eq("user_id", user.id)
      .order("unlocked_at", { ascending: false });

    if (error || !reports || reports.length === 0) {
      // Fallback: check testResults with isPremium flag
      const { data: premiumResults } = await admin
        .from("testResults")
        .select("id, testId, completedAt, scores, isPremium")
        .eq("userId", user.id)
        .eq("isPremium", true)
        .order("completedAt", { ascending: false });

      if (!premiumResults || premiumResults.length === 0) return [];

      return premiumResults.map((r) => {
        const product = getProductById(r.testId);
        const displayColors = product
          ? getProductDisplayColors(product)
          : { color: "var(--category-personality)", bgColor: "var(--category-personality-bg)", cardBg: "var(--category-personality-card)" };
        const fw = TEST_ID_TO_FRAMEWORK[r.testId] ?? r.testId;
        const scores = r.scores as Record<string, unknown> | null;
        return {
          id: r.id,
          framework: fw as ReportFramework,
          displayName: product?.title ?? FRAMEWORK_DISPLAY_NAMES[fw] ?? fw,
          unlockedAt: r.completedAt ?? "",
          unlockedVia: "purchase",
          attemptId: r.id,
          testId: r.testId,
          color: displayColors.color,
          bgColor: displayColors.bgColor,
          cardBg: displayColors.cardBg,
          resultLabel: (scores?.typeLabel as string) ?? (scores?.overall != null ? `${scores.overall}%` : null),
        };
      });
    }

    // 2. For each report, find the latest premium test result (for PDF download link)
    const items: PremiumReportItem[] = [];
    for (const report of reports) {
      const fw = report.framework as ReportFramework;
      const testId = FRAMEWORK_TO_TEST_ID[fw] ?? null;
      const product = testId ? getProductById(testId) : null;

      let displayColors = {
        color: "var(--category-personality)",
        bgColor: "var(--category-personality-bg)",
        cardBg: "var(--category-personality-card)",
      };
      if (product) {
        displayColors = getProductDisplayColors(product);
      }

      // Find the best attempt for this framework
      let attemptId: string | null = null;
      let resultLabel: string | null = null;
      if (testId) {
        const { data: attempt } = await admin
          .from("testResults")
          .select("id, scores")
          .eq("userId", user.id)
          .eq("testId", testId)
          .order("completedAt", { ascending: false })
          .limit(1)
          .maybeSingle();
        if (attempt) {
          attemptId = attempt.id;
          const scores = attempt.scores as Record<string, unknown> | null;
          resultLabel = (scores?.typeLabel as string) ?? (scores?.overall != null ? `${scores.overall}%` : null);
        }
      }

      items.push({
        id: report.id,
        framework: fw,
        displayName: product?.title ?? FRAMEWORK_DISPLAY_NAMES[fw] ?? fw,
        unlockedAt: report.unlocked_at ?? "",
        unlockedVia: report.unlocked_via ?? "purchase",
        attemptId,
        testId,
        color: displayColors.color,
        bgColor: displayColors.bgColor,
        cardBg: displayColors.cardBg,
        resultLabel,
      });
    }

    return items;
  } catch (e) {
    console.error("getUserPremiumReports error:", e);
    return [];
  }
}

/* ------------------------------------------------------------------ */
/*  Recent Activity                                                    */
/* ------------------------------------------------------------------ */

export interface VaultActivityItem {
  action: string;
  item: string;
  completedAt: string;
  dotColor: string;
}

export async function getVaultRecentActivity(): Promise<VaultActivityItem[]> {
  try {
    const rows = await getUserTestResults();
    return rows.slice(0, 10).map((row) => {
      const product = getProductById(row.testId);
      return {
        action: "Completed",
        item: product?.title ?? row.testId,
        completedAt: row.completedAt ?? "",
        dotColor: product?.color ?? "#059669",
      };
    });
  } catch (e) {
    console.error("getVaultRecentActivity error:", e);
    return [];
  }
}
