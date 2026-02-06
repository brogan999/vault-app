# Stripe webhook test — simple steps

Do these in order. Use **two terminals** (both from the `vault-app` folder).

---

## Part A: Confirm the webhook endpoint works

### Terminal 1 — Dev server
1. `cd vault-app`
2. `npm run dev`
3. Leave it running. You should see "Local: http://localhost:3000".

### Terminal 2 — Stripe listener
1. `cd vault-app` (or `cd "/Users/alexbrogan/Personality Co/vault-app"`)
2. `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
3. Leave it running. You’ll see something like:  
   `Your webhook signing secret is whsec_...`  
   (That secret should already be in your `.env.local` as `STRIPE_WEBHOOK_SECRET`. If you just added it, restart Terminal 1.)

### Terminal 2 again — Trigger a test event
4. In a **new** terminal (or stop the listener with Ctrl+C and run this once):
   - `cd vault-app`
   - `stripe trigger checkout.session.completed`
5. You should see "Trigger succeeded!"
6. In the terminal where **stripe listen** is running you should see a line like:  
   `2025-02-05 ... POST /api/webhooks/stripe [200]`  
   That means your app received the event and returned 200. **Part A is done.**

---

## Part B: See subscriptionTier change in the database (optional)

The trigger in Part A doesn’t send a user id, so no row in `users` is updated. To see `subscriptionTier` change:

1. Keep the dev server and (if you want) the Stripe listener running.
2. In the app: sign in, then go to **Pricing** or **Store**.
3. Click the button to subscribe (e.g. Pro). Use Stripe test card: `4242 4242 4242 4242`.
4. Complete checkout. Your app sends your Supabase user id in the session, so the webhook will update that user to `pro`.
5. In **Supabase** → **Table Editor** → **users**, find your row and check **subscriptionTier** — it should be `pro`.

(You need Stripe Price IDs set in `.env.local` — e.g. `STRIPE_PRO_PRICE_ID` — and a Pro product in your Stripe Dashboard for this to work.)

---

## Quick checklist

- [ ] Terminal 1: `npm run dev` in vault-app (port 3000).
- [ ] Terminal 2: `stripe listen --forward-to localhost:3000/api/webhooks/stripe` (leave running).
- [ ] `.env.local` has `STRIPE_WEBHOOK_SECRET=whsec_...` (from the listen output). Restart dev server after adding it.
- [ ] Run `stripe trigger checkout.session.completed`; in the listen terminal you see a 200 for `/api/webhooks/stripe`.
- [ ] (Optional) Do a test checkout from the app; check `users.subscriptionTier` in Supabase.
