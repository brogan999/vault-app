# Stripe env vars: .env.local and Vercel

## .env.local (already set — test mode for local dev)

Your `.env.local` is configured for **test mode** so you can use card `4242 4242 4242 4242` locally:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = pk_test_51PMIno...
- `STRIPE_SECRET_KEY` = sk_test_51PMIno...
- `STRIPE_WEBHOOK_SECRET` = (your existing test webhook secret)
- All price IDs = test-mode price IDs (Pro Monthly/Annual, report, bundle, 50/100/250 credits)

No further changes needed for local development.

---

## Vercel — Production environment

Add these in **Vercel → Project → Settings → Environment Variables**.  
Set each for **Production** only (or Production + Preview if you want production keys on preview too).

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your live publishable key (starts with `pk_live_...`) from Stripe Dashboard |
| `STRIPE_SECRET_KEY` | Your live secret key (starts with `sk_live_...`) from Stripe Dashboard |
| `STRIPE_WEBHOOK_SECRET` | Your production webhook signing secret (starts with `whsec_...`) from Stripe |
| `STRIPE_PRO_MONTHLY_PRICE_ID` | `price_1Sy5GXHxBeiu9Xxak6cW1R2a` |
| `STRIPE_PRO_ANNUAL_PRICE_ID` | `price_1Sy5H0HxBeiu9XxadxWB1KjF` |
| `STRIPE_PREMIUM_REPORT_PRICE_ID` | `price_1Sy5HoHxBeiu9Xxab3SJ7f1m` |
| `NEXT_PUBLIC_STRIPE_BUNDLE_COMPLETE_PRICE_ID` | `price_1Sy5IHHxBeiu9Xxak6KHaIOB` |
| `STRIPE_CREDIT_PACK_50_PRICE_ID` | `price_1Sy5IhHxBeiu9XxaafRfiFtJ` |
| `STRIPE_CREDIT_PACK_100_PRICE_ID` | `price_1Sy5IuHxBeiu9XxaYVfznvkQ` |
| `STRIPE_CREDIT_PACK_250_PRICE_ID` | `price_1Sy5J9HxBeiu9XxanOLZHbvJ` |

(Production uses your **live** price IDs from when you first set up products.)

---

## Vercel — Preview environment (test mode)

Add these for **Preview** only so PR/preview deployments use test mode and the test card.

| Name | Value |
|------|--------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your test publishable key (starts with `pk_test_...`) from Stripe Dashboard |
| `STRIPE_SECRET_KEY` | Your test secret key (starts with `sk_test_...`) from Stripe Dashboard |
| `STRIPE_WEBHOOK_SECRET` | **(see “Remaining” below)** — test-mode webhook signing secret |
| `STRIPE_PRO_MONTHLY_PRICE_ID` | `price_1Sy5hmHxBeiu9Xxad5wfCT8t` |
| `STRIPE_PRO_ANNUAL_PRICE_ID` | `price_1Sy5hXHxBeiu9XxaZHXRDEnK` |
| `STRIPE_PREMIUM_REPORT_PRICE_ID` | `price_1Sy5hGHxBeiu9XxaITIn1Zqk` |
| `NEXT_PUBLIC_STRIPE_BUNDLE_COMPLETE_PRICE_ID` | `price_1Sy5h0HxBeiu9Xxa1CWGMohn` |
| `STRIPE_CREDIT_PACK_50_PRICE_ID` | `price_1Sy5goHxBeiu9XxaI1KU4mFA` |
| `STRIPE_CREDIT_PACK_100_PRICE_ID` | `price_1Sy5gbHxBeiu9XxalDleAiq4` |
| `STRIPE_CREDIT_PACK_250_PRICE_ID` | `price_1Sy5gOHxBeiu9XxaH58u1zWo` |

---

## Remaining: add to Vercel

1. **Production**
   - If you haven’t already, add every **Production** variable from the table above (especially `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` from your Stripe Dashboard).
   - Confirm all 10 Stripe variables exist for **Production**.

2. **Preview (test mode)**
   - Add all **Preview** variables from the table above.
   - **STRIPE_WEBHOOK_SECRET for Preview:** You need a **second** webhook in Stripe:
     - In Stripe Dashboard, switch to **Test mode** (toggle top-right).
     - Developers → Webhooks (or Destinations) → Add endpoint.
     - URL: `https://vault-app-kappa.vercel.app/api/webhooks/stripe` (same as production).
     - Events: `checkout.session.completed`, `invoice.paid`, `customer.subscription.updated`, `customer.subscription.deleted`.
     - After saving, open the endpoint and **Reveal** the **Signing secret** (starts with `whsec_`).
     - In Vercel, add (or edit) `STRIPE_WEBHOOK_SECRET` for **Preview** only and set it to this test-mode signing secret.

3. **Redeploy**
   - After adding or changing any variable, trigger a new deployment (e.g. redeploy Production and/or Preview) so the new env is applied.

Summary: **.env.local** is set for test. In **Vercel**, add the Production list (and Preview list if you use previews); the only thing you still need to get is the **test-mode webhook signing secret** for Preview’s `STRIPE_WEBHOOK_SECRET`.
