-- Optional post-test collection: email, gender, marketing opt-in.
-- Run in Supabase SQL Editor. Used by the "collect" step before showing results.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'testResults' AND column_name = 'result_email'
  ) THEN
    ALTER TABLE "testResults" ADD COLUMN "result_email" TEXT;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'testResults' AND column_name = 'gender'
  ) THEN
    ALTER TABLE "testResults" ADD COLUMN "gender" TEXT;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'testResults' AND column_name = 'marketing_opt_in'
  ) THEN
    ALTER TABLE "testResults" ADD COLUMN "marketing_opt_in" BOOLEAN DEFAULT FALSE;
  END IF;
END $$;
