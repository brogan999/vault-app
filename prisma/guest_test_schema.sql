-- Guest test flow: allow taking tests without an account.
-- Run in Supabase SQL Editor. After this, testResults can have userId NULL and guest_id set.

-- Add guest_id column to testResults
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'testResults' AND column_name = 'guest_id'
  ) THEN
    ALTER TABLE "testResults" ADD COLUMN "guest_id" TEXT;
  END IF;
END $$;

-- Allow userId to be NULL for guest attempts
-- If this fails (e.g. "column is already nullable"), you can skip this statement.
ALTER TABLE "testResults" ALTER COLUMN "userId" DROP NOT NULL;

CREATE INDEX IF NOT EXISTS idx_test_results_guest_id ON "testResults"("guest_id") WHERE "guest_id" IS NOT NULL;
