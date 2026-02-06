# When to do integrations

**Going through setup with the AI?** Use **[STEP-BY-STEP.md](STEP-BY-STEP.md)** instead. The AI will tell you **“You do this now”** at each step where you need to act—don’t skip ahead; do the step, then say when you’re done so we can continue.

This page is a reference for *when* each integration is needed. Do them in this order unless you prefer "features first" (OpenAI/Stripe locally before deploy).

**You can ship without Chat or Payments.** Leave `OPENAI_API_KEY` and Stripe vars as placeholders in Vercel; the app will run. When someone tries Chat they'll see a "not configured" message; when they try checkout they'll get a clear error. Add real keys when you're ready to turn those features on.

---

## Before first run (local)

| When | Integration | What you do |
|------|-------------|-------------|
| **Before `npm run dev`** | **Supabase** | Create project, run `db:push`, run `prisma/supabase_functions.sql`, create "documents" bucket. Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` to `.env.local`. |
| **Before `npm run dev`** | **Clerk** | Create app at [dashboard.clerk.com](https://dashboard.clerk.com). Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` to `.env.local`. Optionally set `NEXT_PUBLIC_CLERK_KEYLESS_DISABLED=true` if you use only env keys. |

---

## After first deploy (production)

| When | Integration | What you do |
|------|-------------|-------------|
| **Right after your first Vercel deploy** | **Vercel env** | In Vercel → Project → Settings → Environment Variables, add the same Clerk + Supabase vars you have in `.env.local`. Add `NEXT_PUBLIC_APP_URL` = your production URL (e.g. `https://your-app.vercel.app`). Redeploy. |
| **Right after first deploy** | **Clerk webhook** | In [Clerk Dashboard](https://dashboard.clerk.com) → your app → Webhooks → Add endpoint. URL: `https://<your-vercel-domain>/api/webhooks/clerk`. Subscribe to `user.created`, `user.updated`, `user.deleted`. Copy the **signing secret** → Vercel env as `WEBHOOK_SECRET`. Redeploy. |

---

## When you want Chat / RAG

| When | Integration | What you do |
|------|-------------|-------------|
| **When you first use Chat or upload docs for RAG** | **OpenAI** | Get key from [platform.openai.com](https://platform.openai.com). Add `OPENAI_API_KEY` to `.env.local` (and to Vercel if Chat is used in production). Restart dev server. |

---

## When you want payments

| When | Integration | What you do |
|------|-------------|-------------|
| **When you first use Pricing or Store checkout** | **Stripe** | Create account at [stripe.com](https://stripe.com). Create Products and Prices (Pro, Free, and any one-off products). Add to `.env.local`: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_PRO_PRICE_ID`, `STRIPE_FREE_PRICE_ID`. Optionally `NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID`, `NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID`. |
| **For local Stripe testing** | **Stripe CLI** | Run `stripe listen --forward-to localhost:3000/api/webhooks/stripe`. Add the CLI’s webhook secret to `.env.local` as `STRIPE_WEBHOOK_SECRET`. |
| **For production payments** | **Stripe webhook** | In Stripe Dashboard → Developers → Webhooks, add `https://<your-vercel-domain>/api/webhooks/stripe`. Subscribe to `checkout.session.completed`. Copy signing secret → Vercel env as `STRIPE_WEBHOOK_SECRET`. Redeploy. |

---

## Quick reference

- **Supabase / Clerk** → before first run (see Getting Started in README).
- **Vercel + Clerk webhook** → right after first deploy.
- **OpenAI** → when you use Chat or document processing.
- **Stripe** → when you use Pricing or Store; webhook in Stripe Dashboard after deploy.

See [README.md](README.md) for full env list and deployment steps.
