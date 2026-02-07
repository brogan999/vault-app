# Add guest_id to testResults (required for guest test flow)

**Error you're seeing:** `Could not find the 'guest_id' column of 'testResults' in the schema cache`

**Fix:** Run the SQL below in your **Supabase project** (the one used by production).

1. Open [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. Go to **SQL Editor** → **New query**.
3. Paste and run the script below.

```sql
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
```

**If your table is named `test_results` (snake_case) instead of `testResults`**, use this instead:

```sql
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'test_results' AND column_name = 'guest_id'
  ) THEN
    ALTER TABLE test_results ADD COLUMN guest_id TEXT;
  END IF;
END $$;

ALTER TABLE test_results ALTER COLUMN user_id DROP NOT NULL;

CREATE INDEX IF NOT EXISTS idx_test_results_guest_id ON test_results(guest_id) WHERE guest_id IS NOT NULL;
```

Then update the app to use the table name that matches your schema (e.g. `test_results` and `user_id` in queries if that’s what you have).
