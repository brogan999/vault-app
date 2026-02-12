-- Enable Row Level Security on all 16 flagged public tables.
--
-- HOW TO RUN: Paste this entire file into the Supabase SQL Editor and execute.
--
-- The service_role key bypasses RLS automatically, so all existing server-side
-- code using createAdminClient() is unaffected. No permissive policies are
-- added for the anon role, which means the anon key has zero direct access
-- to these tables via the PostgREST API.

ALTER TABLE public."psychProfile" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."Embedding" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."chatSessions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.item_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scale_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.type_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.validation_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.esoteric_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_message_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_reports ENABLE ROW LEVEL SECURITY;
