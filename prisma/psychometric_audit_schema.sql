-- Psychometric audit schema: birth data, assessment flow, validation, esoteric profiles
-- Run in Supabase SQL Editor after existing tables (users, testResults, etc.) exist.

-- 1. Add birth data columns to users (table may be "users" or "User" depending on renames)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'birth_date') THEN
    ALTER TABLE users ADD COLUMN birth_date DATE;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'birth_time') THEN
    ALTER TABLE users ADD COLUMN birth_time TEXT;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'birth_location_lat') THEN
    ALTER TABLE users ADD COLUMN birth_location_lat DOUBLE PRECISION;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'birth_location_lng') THEN
    ALTER TABLE users ADD COLUMN birth_location_lng DOUBLE PRECISION;
  END IF;
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'users' AND column_name = 'birth_location_name') THEN
    ALTER TABLE users ADD COLUMN birth_location_name TEXT;
  END IF;
END $$;

-- 2. Extend testResults with is_valid and startedAt (table name from app: testResults)
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'testResults') THEN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'testResults' AND column_name = 'is_valid') THEN
      ALTER TABLE "testResults" ADD COLUMN "is_valid" BOOLEAN DEFAULT true;
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'testResults' AND column_name = 'startedAt') THEN
      ALTER TABLE "testResults" ADD COLUMN "startedAt" TIMESTAMPTZ;
    END IF;
  END IF;
END $$;

-- 3. Assessment sessions (one per attempt; links to testResults for backward compat)
CREATE TABLE IF NOT EXISTS assessment_sessions (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL,
  assessment_type TEXT NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ,
  is_valid BOOLEAN NOT NULL DEFAULT true,
  test_result_id TEXT UNIQUE
);
CREATE INDEX IF NOT EXISTS idx_assessment_sessions_user ON assessment_sessions("userId");
CREATE INDEX IF NOT EXISTS idx_assessment_sessions_type ON assessment_sessions(assessment_type);

-- 4. Item-level responses (session_id = testResults.id for simplicity)
CREATE TABLE IF NOT EXISTS item_responses (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  session_id TEXT NOT NULL,
  item_id TEXT NOT NULL,
  response_value INT NOT NULL,
  response_time_ms INT,
  presented_order INT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_item_responses_session ON item_responses(session_id);

-- 5. Scale scores (raw mean 1-7, percentile, t_score)
CREATE TABLE IF NOT EXISTS scale_scores (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  session_id TEXT NOT NULL,
  scale_name TEXT NOT NULL,
  raw_score DOUBLE PRECISION NOT NULL,
  percentile DOUBLE PRECISION,
  t_score DOUBLE PRECISION
);
CREATE INDEX IF NOT EXISTS idx_scale_scores_session ON scale_scores(session_id);

-- 6. Type assignments (primary/secondary type, clarity index)
CREATE TABLE IF NOT EXISTS type_assignments (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  session_id TEXT NOT NULL,
  primary_type TEXT NOT NULL,
  secondary_type TEXT,
  type_clarity_index DOUBLE PRECISION,
  full_profile_json JSONB
);
CREATE INDEX IF NOT EXISTS idx_type_assignments_session ON type_assignments(session_id);

-- 7. Validation metrics (Cronbach's alpha, CFA, test-retest, etc.)
CREATE TABLE IF NOT EXISTS validation_metrics (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  assessment_type TEXT NOT NULL,
  metric_name TEXT NOT NULL,
  scale_name TEXT,
  value DOUBLE PRECISION NOT NULL,
  sample_size INT,
  computed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_validation_metrics_type ON validation_metrics(assessment_type);

-- 8. Esoteric profiles (one row per user per framework)
CREATE TABLE IF NOT EXISTS esoteric_profiles (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  "userId" TEXT NOT NULL,
  framework TEXT NOT NULL,
  profile_json JSONB NOT NULL,
  computed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_esoteric_profiles_user ON esoteric_profiles("userId");
CREATE INDEX IF NOT EXISTS idx_esoteric_profiles_framework ON esoteric_profiles(framework);
