"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";
import { AVAILABLE_TEST_COUNT, getProductById } from "@/lib/products";
import { getUserTestResults } from "@/app/actions/tests";

export type DocumentCategory = "cognitive" | "esoteric" | "journal" | "psyche";

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
