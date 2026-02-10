# Secret leak response (Supabase Service Role)

If GitGuardian (or similar) reports an exposed **Supabase Service Role** key:

## 1. Rotate the key immediately (Supabase)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. **Project Settings** → **API**.
3. Find **Project API keys** → **service_role** (secret).
4. **Generate new secret** / **Rotate**. This invalidates the old key everywhere.

## 2. Update environments (use new API keys, not Legacy)

After revoking the JWT signing key, **Legacy** anon/service_role keys stop working. Use the **Publishable and Secret** keys instead:

1. Supabase Dashboard → **Project Settings** → **API**.
2. Open the tab **"Publishable and secret API keys"** (not "Legacy anon, service_role").
3. Copy the **Publishable** key (`sb_publishable_...`) and the **Secret** key (`sb_secret_...`).
4. **Local:** In `.env.local` set:
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = the **Publishable** key
   - `SUPABASE_SERVICE_ROLE_KEY` = the **Secret** key
5. **Vercel:** Project → Settings → Environment Variables → set the same two variables for Production/Preview/Development.
6. Restart dev server and redeploy.

## 3. (Optional) Clean Git history

If the secret was ever committed, it remains in history. Options:

- **BFG Repo-Cleaner:** Install with `brew install bfg`. Create a file `replacements.txt` with one line: `the_exact_secret_value===>***REMOVED***` (no spaces around `===>`). Run `bfg --replace-text replacements.txt .` in the repo, then `git reflog expire --expire=now --all && git gc --prune=now --aggressive`. Delete `replacements.txt` and never commit it.
- **git filter-repo:** Install with `brew install git-filter-repo`. Use it to remove or redact the file(s) that contained the secret from all commits.
- For a young/small repo, consider creating a fresh repo and re-pushing (without any env files).

## 4. Mark GitGuardian as resolved

In GitGuardian (dashboard or email), open the finding for the Supabase Service Role JWT. Mark it **Resolved** or **Rotated** and add a note: "Key rotated in Supabase; JWT signing key revoked. New env and .gitignore in place."

## 5. Prevent recurrence

- Never commit `.env` or `.env.local` (they are in `.gitignore`).
- Use only `.env.local.example` with placeholders like `your_supabase_service_role_key`.
- Ensure CI and pre-push hooks do not add env files.
