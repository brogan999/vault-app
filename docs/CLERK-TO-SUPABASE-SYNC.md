# Why your Clerk user might not be in Supabase

There are **two ways** a user gets into the `users` table:

1. **Clerk webhook** — When someone signs up, Clerk sends `user.created` to your app at `/api/webhooks/clerk`, and the handler inserts the user.  
   - **Locally:** Clerk cannot call `localhost`, so this **does not run** in dev.  
   - **Production:** Only works if you added the webhook in Clerk (URL = `https://your-vercel-domain/api/webhooks/clerk`) and set `WEBHOOK_SECRET` in Vercel.

2. **Fallback sync** — When you load any protected page (e.g. `/mirror` or `/vault`) while signed in, the app calls `getSupabaseUser()`. If the user is in Clerk but not in Supabase, it **inserts them** using the Supabase **service role** key.  
   - This is what you rely on for **local development**.

---

## What you need for the fallback to work

1. **`SUPABASE_SERVICE_ROLE_KEY`** must be set where the app runs:
   - **Local:** in `vault-app/.env.local`
   - **Production:** in Vercel → Project → Settings → Environment Variables

2. **Visit a protected page while signed in** (e.g. open `http://localhost:3000/vault` or `/mirror`). That request triggers the sync.

3. **Check the terminal** (local) or **Vercel → Logs** (production):
   - If you see `[Clerk→Supabase] User synced: <uuid>`, the insert worked; refresh the Supabase Table Editor and you should see the row.
   - If you see `[Clerk→Supabase] Sync failed:` or `createAdminClient or insert failed`, read the error (e.g. missing key, or a column/constraint issue in the `users` table).

---

## Quick checklist

- [ ] `SUPABASE_SERVICE_ROLE_KEY` is in `.env.local` (copy from Supabase → Settings → API → `service_role`).
- [ ] Restart the dev server after changing `.env.local` (`npm run dev`).
- [ ] Sign in with Clerk, then open **http://localhost:3000/vault** (or **/mirror**).
- [ ] Look at the terminal for `[Clerk→Supabase] User synced:` or an error.
- [ ] Refresh Supabase → Table Editor → `users` and confirm the row.

If the insert still fails, the logged error will say why (e.g. "Missing SUPABASE_SERVICE_ROLE_KEY" or a Postgres constraint).
