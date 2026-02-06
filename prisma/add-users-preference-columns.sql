-- ============================================================
-- Add missing preference columns to users table
-- Run in Supabase → SQL Editor → New query
-- ============================================================
-- Fixes: "Could not find the 'personaPreference' column of 'users'"
-- ============================================================

-- Add personaPreference (AI Persona: balanced, coach, therapist)
ALTER TABLE users ADD COLUMN IF NOT EXISTS "personaPreference" TEXT DEFAULT 'balanced';

-- Add themePreference if missing (e.g. "light-emerald", "dark-neutral")
ALTER TABLE users ADD COLUMN IF NOT EXISTS "themePreference" TEXT DEFAULT 'neutral';

-- Add privacyShieldEnabled if missing
ALTER TABLE users ADD COLUMN IF NOT EXISTS "privacyShieldEnabled" BOOLEAN NOT NULL DEFAULT false;
