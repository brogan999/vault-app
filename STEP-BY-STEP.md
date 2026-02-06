# Step-by-step setup (you’re told when to act)

When you go through this with the AI, **the AI will tell you “You do this now” at each step below**—don’t skip ahead. Do the step, then say when you’re done so we can continue.

---

## 1. Supabase

**→ You do this now:** Create a Supabase project. In the Supabase dashboard: enable pgvector, run the SQL in `prisma/supabase_functions.sql` and `prisma/insert_embedding_function.sql`, create a storage bucket named `documents`. Run `npm run db:push` from the `vault-app` folder.

**→ You do this now:** In `.env.local`, add: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DATABASE_URL` (from Supabase project settings).

Tell me when this is done.

---

## 2. Clerk (local)

**→ You do this now:** Create a Clerk app at [dashboard.clerk.com](https://dashboard.clerk.com). In API Keys, copy the Publishable key and Secret key.

**→ You do this now:** In `.env.local`, add: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`. Set the sign-in/sign-up URLs as in `.env.local.example` (e.g. `/sign-in`, `/sign-up`, after sign in/up → `/mirror`). If you use only env keys (no keyless), add `NEXT_PUBLIC_CLERK_KEYLESS_DISABLED=true`.

Tell me when this is done.

---

## 3. First run

**→ You do this now:** From the `vault-app` folder run `npm run dev`. Open http://localhost:3000 and sign up / sign in. Confirm the app loads.

Tell me when this works.

---

## 4. Deploy to Vercel

**→ You do this now:** Push the repo to GitHub. In [vercel.com](https://vercel.com) → Add New Project → Import the repo. Set **Root Directory** to `vault-app`.

**→ You do this now:** In Vercel → Project → **Settings → Environment Variables**, add the same Clerk and Supabase variables you have in `.env.local` (no Stripe or OpenAI yet is fine). Deploy. Note your production URL (e.g. `https://your-app.vercel.app`).

Tell me when the deploy is live and what the URL is.

---

## 5. Production URL and Clerk webhook

**→ You do this now:** In Vercel → Environment Variables, add `NEXT_PUBLIC_APP_URL` = your production URL. Redeploy.

**→ You do this now:** In [Clerk Dashboard](https://dashboard.clerk.com) → your app → **Webhooks** → **Add endpoint**.  
- Endpoint URL: `https://<your-vercel-domain>/api/webhooks/clerk`  
- Subscribe to: `user.created`, `user.updated`, `user.deleted`  
- Save, then copy the **Signing secret** (starts with `whsec_`).

**→ You do this now:** In Vercel → Environment Variables, add `WEBHOOK_SECRET` = that signing secret. Redeploy.

Tell me when this is done.

---

## 6. Smoke test production

**→ You do this now:** Open your production URL, sign up or sign in. Check in Supabase that the user row was created (Clerk webhook worked). Click through Mirror, Vault, Settings.

Tell me if anything errors or if it’s all good.

---

## 7. Chat (when you want it)

**→ You do this now:** Get an OpenAI API key from [platform.openai.com](https://platform.openai.com). In `.env.local` add `OPENAI_API_KEY` = your key. Restart `npm run dev`. In the app, open Chat, send a message.

If you want Chat in production too: add `OPENAI_API_KEY` in Vercel and redeploy.

Tell me when Chat works.

---

## 8. Stripe (when you want payments)

**→ You do this now:** Create a Stripe account at [stripe.com](https://stripe.com). Create Products and Prices (e.g. Pro subscription, Free, and any one-off products). In Dashboard → API keys, copy Publishable and Secret key. In Products → your Pro/Free prices, copy the Price IDs.

**→ You do this now:** In `.env.local` add: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_PRO_PRICE_ID`, `STRIPE_FREE_PRICE_ID`. Optionally `NEXT_PUBLIC_STRIPE_DEEP_VEDIC_PRICE_ID`, `NEXT_PUBLIC_STRIPE_SCHEMA_PRICE_ID`. For local webhook: run `stripe listen --forward-to localhost:3000/api/webhooks/stripe` and set `STRIPE_WEBHOOK_SECRET` in `.env.local` to the CLI secret.

**→ You do this now (for production):** In Stripe Dashboard → Developers → Webhooks, add `https://<your-vercel-domain>/api/webhooks/stripe`, subscribe to `checkout.session.completed`, copy the signing secret. In Vercel add `STRIPE_WEBHOOK_SECRET` and redeploy.

Tell me when checkout works locally and/or in production.

---

When we go through this together, I’ll say “You do this now” at each of these steps and wait for you to say when you’re done before continuing.
