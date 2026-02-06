"use server";

import { createClient } from "@/lib/supabase/server";
import { getSupabaseUser } from "@/lib/clerk/utils";
import { revalidatePath } from "next/cache";

export type DocumentCategory = "cognitive" | "esoteric" | "journal" | "psyche";

export interface VaultDocument {
  id: string;
  fileName: string;
  type: string;
  category: DocumentCategory;
  status: string;
  createdAt: string;
}

export async function getDocumentsForVault(): Promise<VaultDocument[]> {
  const user = await getSupabaseUser();
  if (!user) return [];

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("documents")
    .select("id, fileName, type, category, status, createdAt")
    .eq("userId", user.id)
    .order("createdAt", { ascending: false });

  if (error) {
    console.error("getDocumentsForVault:", error);
    return [];
  }

  return (data || []).map((d) => ({
    id: d.id,
    fileName: d.fileName,
    type: d.type,
    category: d.category as DocumentCategory,
    status: d.status,
    createdAt: d.createdAt,
  }));
}

export async function deleteDocumentFromVault(documentId: string): Promise<{ ok: boolean; error?: string }> {
  const user = await getSupabaseUser();
  if (!user) {
    return { ok: false, error: "Unauthorized" };
  }

  const supabase = await createClient();

  // Ensure the document belongs to the current user before deleting
  const { data: doc, error: fetchError } = await supabase
    .from("documents")
    .select("id, userId")
    .eq("id", documentId)
    .single();

  if (fetchError || !doc || doc.userId !== user.id) {
    return { ok: false, error: "Document not found or unauthorized" };
  }

  const { error: deleteError } = await supabase
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
