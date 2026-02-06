# Next Steps After Security & Reliability Fixes

This checklist confirms what was fixed and what you should do so everything works in your environment.

---

## What was implemented

| Fix | Status |
|-----|--------|
| **Webhooks use admin client** | Stripe and Clerk webhooks use `createAdminClient()` so they work without request cookies. |
| **FileTree auth** | List and delete run in server actions with `getSupabaseUser()`; no client-side Supabase for documents. |
| **Prisma table names** | `@@map("users")`, `@@map("documents")`, etc. added so Prisma matches Supabase table names. |
| **processDocument** | Uses `createAdminClient()` and accepts `userId`; safe when run in background. All call sites updated (upload + journal). |
| **Upload validation** | 10MB max size; allowed extensions only (pdf, txt, md, audio, image). |

---

## What you should do next

### Step 1 — You: Check table names in Supabase

1. Open **Supabase Dashboard** → your project → **SQL Editor**.
2. Run:
   ```sql
   SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;
   ```
3. If you see **PascalCase** (`User`, `Document`, `ChatSession`, `Message`, `PsychProfile`), do **Step 2**. If you already see **users**, **documents**, **chatSessions**, **messages**, **psychProfile**, skip to **Step 3**.

### Step 2 — You: Rename tables (only if Step 1 showed PascalCase)

1. Open **`prisma/migrations/rename_tables_to_mapped_names.sql`** in this repo and copy its contents.
2. In Supabase **SQL Editor**, paste and run the script. It only renames tables that exist.
3. Then run the contents of **`prisma/supabase_functions.sql`** in the SQL Editor (updates `get_dashboard_stats` and `match_embeddings` for the new table names).

### Step 3 — You: Re-run Supabase functions (if you did Step 2, or to be sure)

1. In Supabase **SQL Editor**, run **`prisma/supabase_functions.sql`**.
2. If you use the embedding RPC, run **`prisma/insert_embedding_function.sql`** as well.

### Step 4 — Smoke-test the fixed behavior

- **Clerk webhook** — Sign up a new user; confirm they appear in the `users` table (or that "user not found" issues are gone).
- **Stripe webhook** — Use Stripe CLI: `stripe trigger checkout.session.completed` (with test metadata `userId` if your handler uses it); confirm `subscriptionTier` updates in the DB.
- **Vault** — Log in, open Vault, upload a file, confirm it appears in the file tree, then delete it. Confirm only your documents are listed and deletable.
- **Upload limits** — Try uploading a file > 10MB or a disallowed extension; you should get a clear error.

---

## Build verification

`npm run build` has been run and passes after these fixes (including the `processDocument` call in `journal.ts` and the `FileTree` type fix).
