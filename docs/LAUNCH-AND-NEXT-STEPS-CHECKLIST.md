# Launch and next steps — single checklist

Use this as the one place to work through post–security-fix and launch steps. Tick off as you go.

---

## Phase 1: Smoke tests (do first)

Run these before relying on production.

- [ ] **Clerk webhook** — Sign up a new user (or sign in with an existing one). Confirm they exist in Supabase `users` and you don’t see “user not found” after sign-in.
- [ ] **Stripe webhook** — With Stripe CLI: `stripe trigger checkout.session.completed` (add test `userId` in metadata if your handler uses it). Confirm `subscriptionTier` updates in the DB.
- [ ] **Vault** — Log in → Vault → upload a file (e.g. PDF) → confirm it appears in the file tree → delete it. Confirm only your documents are listed.
- [ ] **Upload limits** — Try uploading a file > 10MB or a disallowed extension; you should get a clear error.

If any fail, fix before moving to Phase 2.

---

## Phase 2: Production readiness (Vercel)

Do this when you deploy or before relying on production.

- [ ] **Redeploy** — Push latest commits; in Vercel → Deployments, confirm the new build is **Ready**.
- [ ] **Vercel env** — In Vercel → Settings → Environment Variables, confirm for Production (and Preview if used):
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (required for Clerk fallback sync and background processing)
  - Clerk: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
  - `NEXT_PUBLIC_APP_URL` = your production URL
  - When you enable features: `OPENAI_API_KEY`, Stripe vars (see INTEGRATIONS.md)
- [ ] **Clerk webhook** — In Clerk Dashboard → Webhooks: endpoint `https://<your-vercel-domain>/api/webhooks/clerk`; events `user.created`, `user.updated`, `user.deleted`. Copy signing secret → Vercel env as `WEBHOOK_SECRET`. Redeploy.
- [ ] **Stripe webhook** (when using payments) — In Stripe Dashboard → Webhooks: add `https://<your-vercel-domain>/api/webhooks/stripe`; subscribe to `checkout.session.completed`. Copy signing secret → Vercel as `STRIPE_WEBHOOK_SECRET`. Redeploy.
- [ ] **Production Supabase** — If production uses the same Supabase project where you ran the rename + functions, no extra SQL. Otherwise run `prisma/run-in-supabase-sql-editor.sql` (and rename script if needed) in that project’s SQL Editor.

---

## Phase 3: Optional — PRD gaps and polish

Only after Phase 1 and 2 are solid.

- [ ] **Live Context API** — Google Drive, Notes, Calendar (IntegrationsPanel toggles; needs OAuth + sync).
- [ ] **Proactive check-ins** — AI initiates conversation on a user-defined cadence (scheduled jobs + preferences).
- [ ] **Longitudinal tracking** — Baseline “Self” and change-over-time views (e.g. on Mirror).
- [ ] **Theme palettes** — Confirm Pastel, Neon, Jewel, Muddy are all exposed in settings if you want full PRD parity.
- [ ] **Store one-off products** — Deep Dive / one-off purchases (Stripe products + Store UI).

---

## Reference

- Security fixes summary: [NEXT-STEPS-AFTER-SECURITY-FIXES.md](NEXT-STEPS-AFTER-SECURITY-FIXES.md)
- Post-deploy detail: [POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md)
- Integrations and env: [INTEGRATIONS.md](../INTEGRATIONS.md)
