# Post-deploy checklist

Use this after pushing so sign-in and the Mirror page work in production.

---

## 1. Redeploy

**Done.** Changes are committed and pushed; Vercel will redeploy from `main`.

- Check [Vercel Dashboard](https://vercel.com) → your project → **Deployments** to see the new build.
- When it’s **Ready**, try signing in with Google again; you should land on `/mirror` without the “Something went wrong” error.

---

## 2. Confirm Supabase env in Vercel

The Mirror page can create a Supabase user on first sign-in when the Clerk webhook hasn’t run yet. That path needs the **service role** key.

1. Open **Vercel** → your **vault-app** project → **Settings** → **Environment Variables**.
2. Find **`SUPABASE_SERVICE_ROLE_KEY`**.
3. If it’s missing or still a placeholder:
   - In **Supabase** → your project → **Settings** → **API**, copy the **service_role** key (under “Project API keys”).
   - In Vercel, add:
     - **Name:** `SUPABASE_SERVICE_ROLE_KEY`
     - **Value:** (paste the key)
     - **Environments:** Production (and Preview if you use it).
4. **Redeploy** once after changing env vars (Vercel → Deployments → ⋮ on latest → Redeploy).

You should already have:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` ← confirm this one is set and not a placeholder.

---

## 3. Optional: run SQL in production Supabase

For real dashboard stats (document counts, journal count, etc.) on the Mirror page, the database needs the functions from `prisma/supabase_functions.sql`.

1. Open **Supabase** → your **production** project → **SQL Editor**.
2. Open `prisma/supabase_functions.sql` in this repo and copy its **entire** contents.
3. Paste into the SQL Editor and click **Run** (or press Cmd/Ctrl+Enter).
4. You should see “Success. No rows returned” (creating/replacing functions doesn’t return rows).

If you skip this step, the Mirror page still loads; stats will show as zero until the functions exist.

---

## After that

- Sign in with Google again on the deployed app.
- You should land on **/mirror** with the page loaded (widgets may be empty until you have profile/data).
- If anything still errors, check Vercel **Functions** and **Logs** for the failing request.
