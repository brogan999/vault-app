import { createClient } from "./server";

export async function matchEmbeddings(
  queryEmbedding: number[],
  userId: string,
  matchThreshold: number = 0.7,
  matchCount: number = 10
) {
  const supabase = await createClient();
  
  const { data, error } = await supabase.rpc("match_embeddings", {
    query_embedding: queryEmbedding,
    match_threshold: matchThreshold,
    match_count: matchCount,
    user_id_param: userId,
  });

  if (error) {
    console.error("Error matching embeddings:", error);
    throw error;
  }

  return data;
}

export async function getDashboardStats(userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc("get_dashboard_stats", {
    user_id_param: userId,
  });

  if (error) {
    console.error("Error getting dashboard stats:", error);
    throw error;
  }

  return data ?? null;
}