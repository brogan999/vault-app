# Secret leak response (Supabase Service Role)

If GitGuardian (or similar) reports an exposed **Supabase Service Role** key:

## 1. Rotate the key immediately (Supabase)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → your project.
2. **Project Settings** → **API**.
3. Find **Project API keys** → **service_role** (secret).
4. **Generate new secret** / **Rotate**. This invalidates the old key everywhere.

## 2. Update environments

- **Local:** Replace `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` with the new key.
- **Vercel:** Project → Settings → Environment Variables → edit `SUPABASE_SERVICE_ROLE_KEY` to the new value for Production/Preview/Development as needed.

## 3. (Optional) Clean Git history

If the secret was ever committed, it remains in history. Options:

- **BFG Repo-Cleaner:** Replace the secret with `***REMOVED***` in history.
- **git filter-repo:** Remove or redact the offending file(s) from history.
- For a young/small repo, consider creating a fresh repo and re-pushing (without any env files).

## 4. Prevent recurrence

- Never commit `.env` or `.env.local` (they are in `.gitignore`).
- Use only `.env.local.example` with placeholders like `your_supabase_service_role_key`.
- Ensure CI and pre-push hooks do not add env files.
