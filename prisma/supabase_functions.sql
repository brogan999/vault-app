-- Vector similarity search function
-- This function searches for similar embeddings using cosine similarity
CREATE OR REPLACE FUNCTION match_embeddings(
  query_embedding vector(1536),
  match_threshold float DEFAULT 0.7,
  match_count int DEFAULT 10,
  user_id_param text DEFAULT NULL
)
RETURNS TABLE (
  id text,
  "documentId" text,
  "userId" text,
  "contentChunk" text,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    e.id::text,
    e."documentId"::text,
    e."userId"::text,
    e."contentChunk",
    1 - (e.embedding <=> query_embedding) as similarity
  FROM "Embedding" e
  WHERE 
    (user_id_param IS NULL OR e."userId"::text = user_id_param)
    AND 1 - (e.embedding <=> query_embedding) > match_threshold
  ORDER BY e.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- Function to get dashboard stats
CREATE OR REPLACE FUNCTION get_dashboard_stats(user_id_param text)
RETURNS json
LANGUAGE plpgsql
AS $$
DECLARE
  result json;
BEGIN
  SELECT json_build_object(
    'totalDocuments', (SELECT COUNT(*) FROM documents WHERE "userId" = user_id_param::uuid),
    'totalJournalEntries', (SELECT COUNT(*) FROM documents WHERE "userId" = user_id_param::uuid AND category = 'journal'),
    'totalChatSessions', (SELECT COUNT(*) FROM "chatSessions" WHERE "userId" = user_id_param::uuid),
    'hasProfile', EXISTS(SELECT 1 FROM "psychProfile" WHERE "userId" = user_id_param::uuid)
  ) INTO result;
  
  RETURN result;
END;
$$;