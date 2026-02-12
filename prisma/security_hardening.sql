-- Security hardening: fix function search_path, move vector extension,
-- replace overly permissive RLS policies, and add service_role policies.
--
-- HOW TO RUN: Paste this entire file into the Supabase SQL Editor and execute.
-- Run AFTER enable_rls.sql.


-- ============================================================
-- 1. Move the vector extension out of the public schema
-- ============================================================
-- The extension_in_public linter warns that extensions in the public schema
-- can be exploited. Moving it to a dedicated schema is the recommended fix.

CREATE SCHEMA IF NOT EXISTS extensions;
ALTER EXTENSION vector SET SCHEMA extensions;


-- ============================================================
-- 2. Recreate functions with a pinned search_path
-- ============================================================
-- A mutable search_path allows search-path injection attacks. Pinning it
-- to specific schemas (public + extensions) makes the functions secure.
-- We need extensions in the path so the vector type and <=> operator resolve.

-- Set session search_path so parameter types like vector(1536) resolve correctly
-- during CREATE OR REPLACE.
SET search_path TO public, extensions;

CREATE OR REPLACE FUNCTION public.match_embeddings(
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
SET search_path TO public, extensions
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

CREATE OR REPLACE FUNCTION public.get_dashboard_stats(user_id_param text)
RETURNS json
LANGUAGE plpgsql
SET search_path TO public, extensions
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

CREATE OR REPLACE FUNCTION public.insert_embedding(
  p_document_id text,
  p_user_id text,
  p_content_chunk text,
  p_embedding float[]
)
RETURNS void
LANGUAGE plpgsql
SET search_path TO public, extensions
AS $$
BEGIN
  INSERT INTO "Embedding" (
    "documentId",
    "userId",
    "contentChunk",
    embedding
  ) VALUES (
    p_document_id::uuid,
    p_user_id::uuid,
    p_content_chunk,
    p_embedding::vector(1536)
  );
END;
$$;

-- Reset session search_path to default
RESET search_path;


-- ============================================================
-- 3. Drop overly permissive RLS policies
-- ============================================================
-- These policies use USING (true) / WITH CHECK (true) for ALL roles,
-- effectively bypassing RLS for everyone including the anon key.
-- Since service_role automatically bypasses RLS, these are unnecessary.

DROP POLICY IF EXISTS "Service role full access on checkinPreferences" ON public."checkinPreferences";
DROP POLICY IF EXISTS "Service role full access on integrations" ON public.integrations;
DROP POLICY IF EXISTS "Service role full access on messageFeedback" ON public."messageFeedback";
DROP POLICY IF EXISTS "Service role full access on notifications" ON public.notifications;
DROP POLICY IF EXISTS "Service role full access on psychProfileSnapshots" ON public."psychProfileSnapshots";
DROP POLICY IF EXISTS "Service role full access on purchases" ON public.purchases;
DROP POLICY IF EXISTS "Service role full access on sharedMessages" ON public."sharedMessages";


-- ============================================================
-- 4. Add properly scoped service_role policies
-- ============================================================
-- service_role bypasses RLS automatically, so these policies are functionally
-- cosmetic. They exist to satisfy the rls_enabled_no_policy linter check,
-- which flags tables that have RLS enabled but zero policies defined.

-- Tables from enable_rls.sql (16 tables)
CREATE POLICY "Service role access" ON public."psychProfile"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.documents
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public."Embedding"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.messages
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public."chatSessions"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.users
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.assessment_sessions
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.item_responses
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.scale_scores
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.type_assignments
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.validation_metrics
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.esoteric_profiles
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.user_purchases
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.user_subscriptions
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.user_message_credits
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.user_reports
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Tables that had the dropped "always true" policies (7 tables)
CREATE POLICY "Service role access" ON public."checkinPreferences"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.integrations
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public."messageFeedback"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.notifications
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public."psychProfileSnapshots"
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public.purchases
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY "Service role access" ON public."sharedMessages"
  FOR ALL TO service_role USING (true) WITH CHECK (true);
