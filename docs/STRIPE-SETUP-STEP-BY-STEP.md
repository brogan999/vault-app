# Stripe setup – step-by-step

Follow these in order. You need a [Stripe](https://dashboard.stripe.com) account.

---

## Part 1: Create products and prices in Stripe

Go to **Stripe Dashboard** → **Product catalog** (or **Products** → **Add product**).

### 1.1 Pro subscription (recurring, with 7-day trial)

1. Click **Add product**.
2. **Name:** `Pro Monthly`
3. **Description:** (optional) e.g. `Pro monthly subscription – 300 Mirror messages/month, all reports, voice journal, 10GB vault.`
4. Under **Pricing**, add a price:
   - **Pricing model:** Standard pricing
   - **Price:** `14.99` USD, **Recurring** → **Monthly**
   - **Free trial:** `7` days
5. Click **Save product**.
6. **Copy the Price ID** (starts with `price_...`) — you’ll use it for `STRIPE_PRO_MONTHLY_PRICE_ID`.

Repeat for annual:

1. **Add product** again.
2. **Name:** `Pro Annual`
3. **Description:** (optional) e.g. `Pro annual subscription – same benefits, billed yearly with 7-day trial.`
4. Under **Pricing**:
   - **Price:** `119.99` USD, **Recurring** → **Yearly**
   - **Free trial:** `7` days
5. **Save product**, then **copy the Price ID** for `STRIPE_PRO_ANNUAL_PRICE_ID`.

---

### 1.2 Individual reports (one-time payment)

Create **one product per report** (or one product “Premium Report” and one price if you want a single report price for all). The app supports either:

- **Option A:** One price for all reports → set only `STRIPE_REPORT_PRICE_ID` (or `STRIPE_PREMIUM_REPORT_PRICE_ID`) and use the same price ID for every report in the app.
- **Option B:** Different prices per report → create the products below and set the env vars in Part 2.

**Option B – per-report products (match your app’s display prices):**

| Product name (suggestion) | Price (USD) | Env var |
|---------------------------|-------------|---------|
| Big Five Report           | 9.99        | STRIPE_REPORT_BIG5_PRICE_ID |
| MBTI / Personality Type  | 14.99       | STRIPE_REPORT_MBTI_PRICE_ID |
| Enneagram Report         | 14.99       | STRIPE_REPORT_ENNEAGRAM_PRICE_ID |
| DISC / Work Style        | 9.99        | STRIPE_REPORT_DISC_PRICE_ID |
| Western Astrology (Birth Chart) | 19.99 | STRIPE_REPORT_WESTERN_ASTRO_PRICE_ID |
| Vedic Astrology          | 19.99       | STRIPE_REPORT_VEDIC_PRICE_ID |
| Human Design             | 19.99       | STRIPE_REPORT_HUMAN_DESIGN_PRICE_ID |
| Numerology (Life Path)   | 9.99        | STRIPE_REPORT_NUMEROLOGY_PRICE_ID |
| Chinese Zodiac           | 9.99        | STRIPE_REPORT_CHINESE_ZODIAC_PRICE_ID |
| Mayan Astrology          | 9.99        | STRIPE_REPORT_MAYAN_PRICE_ID |

For each:

1. **Add product** → Name (e.g. `Big Five Report`), **One time** payment, amount as in table.
2. **Save** and copy the **Price ID** (`price_...`).

---

### 1.3 Bundle – Complete Portrait (one-time)

1. **Add product**.
2. **Name:** `Complete Portrait` (or “All 10 Reports Bundle”).
3. **Pricing:** One time, `99.99` USD.
4. **Save** and copy the **Price ID** for `NEXT_PUBLIC_STRIPE_BUNDLE_COMPLETE_PRICE_ID` (or `NEXT_PUBLIC_STRIPE_BUNDLE_PRICE_ID`).

---

### 1.4 Credit packs (one-time)

Create three products:

| Product name   | Price (USD) | Env var |
|----------------|-------------|---------|
| 50 Mirror messages | 2.99  | STRIPE_CREDIT_PACK_50_PRICE_ID |
| 100 Mirror messages | 4.99 | STRIPE_CREDIT_PACK_100_PRICE_ID |
| 250 Mirror messages | 9.99 | STRIPE_CREDIT_PACK_250_PRICE_ID |

For each: **Add product** → Name as above, **One time**, amount as in table → **Save** → copy **Price ID**.

---

## Part 2: Set environment variables

Put these in **`.env.local`** (local) and in **Vercel** (or your host) for production.

### Required for Pro subscription

```bash
STRIPE_PRO_MONTHLY_PRICE_ID=price_xxxxx   # from Pro Monthly price
STRIPE_PRO_ANNUAL_PRICE_ID=price_xxxxx    # from Pro Annual price
```

### Required for Stripe API and webhooks

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...   # or pk_live_...
STRIPE_SECRET_KEY=sk_test_...                     # or sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...                   # from Part 3 (webhook signing secret)
```

### Reports – choose one approach

**Single price for all reports:**

```bash
STRIPE_REPORT_PRICE_ID=price_xxxxx
# or
STRIPE_PREMIUM_REPORT_PRICE_ID=price_xxxxx
```

**Or per-report (optional):**

```bash
STRIPE_REPORT_BIG5_PRICE_ID=price_xxxxx
STRIPE_REPORT_MBTI_PRICE_ID=price_xxxxx
STRIPE_REPORT_ENNEAGRAM_PRICE_ID=price_xxxxx
STRIPE_REPORT_DISC_PRICE_ID=price_xxxxx
STRIPE_REPORT_WESTERN_ASTRO_PRICE_ID=price_xxxxx
STRIPE_REPORT_VEDIC_PRICE_ID=price_xxxxx
STRIPE_REPORT_HUMAN_DESIGN_PRICE_ID=price_xxxxx
STRIPE_REPORT_NUMEROLOGY_PRICE_ID=price_xxxxx
STRIPE_REPORT_CHINESE_ZODIAC_PRICE_ID=price_xxxxx
STRIPE_REPORT_MAYAN_PRICE_ID=price_xxxxx
```

### Bundle

```bash
NEXT_PUBLIC_STRIPE_BUNDLE_COMPLETE_PRICE_ID=price_xxxxx
# or
NEXT_PUBLIC_STRIPE_BUNDLE_PRICE_ID=price_xxxxx
```

### Credit packs

```bash
STRIPE_CREDIT_PACK_50_PRICE_ID=price_xxxxx
STRIPE_CREDIT_PACK_100_PRICE_ID=price_xxxxx
STRIPE_CREDIT_PACK_250_PRICE_ID=price_xxxxx
```

Replace each `price_xxxxx` with the actual **Price ID** from the Stripe Dashboard (Product → price → copy ID).

---

## Part 3: Subscribe the Stripe webhook

1. In Stripe Dashboard go to **Developers** → **Webhooks**.
2. Click **Add endpoint**.
3. **Endpoint URL:**
   - Local (with Stripe CLI): use the URL the CLI shows when you run `stripe listen --forward-to localhost:3000/api/webhooks/stripe` (the CLI gives you a temporary `whsec_...` to put in `STRIPE_WEBHOOK_SECRET`).
   - Production: `https://<your-vercel-domain>/api/webhooks/stripe`  
     Example: `https://vault.yourcompany.com/api/webhooks/stripe`
4. Under **Select events to listen to**, click **Select events** and choose exactly:
   - `checkout.session.completed`
   - `invoice.paid`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add endpoint**.
6. Open the new endpoint and click **Reveal** under **Signing secret**.
7. Copy the value (starts with `whsec_...`).
8. Set in your env:
   - **Local:** `.env.local` → `STRIPE_WEBHOOK_SECRET=whsec_...`
   - **Production:** Vercel (or your host) → `STRIPE_WEBHOOK_SECRET` = that same value (use the **production** webhook’s signing secret for the production endpoint).
9. Restart your dev server after changing `.env.local`. For production, redeploy after setting the env var.

---

## Quick checklist

- [ ] Pro Monthly product: $14.99/month, 7-day trial → `STRIPE_PRO_MONTHLY_PRICE_ID`
- [ ] Pro Annual product: $119.99/year, 7-day trial → `STRIPE_PRO_ANNUAL_PRICE_ID`
- [ ] 10 report products/prices (or one shared price) → report env vars
- [ ] Complete Portrait bundle: $99.99 → `NEXT_PUBLIC_STRIPE_BUNDLE_COMPLETE_PRICE_ID` or `NEXT_PUBLIC_STRIPE_BUNDLE_PRICE_ID`
- [ ] 3 credit pack products: $2.99 / $4.99 / $9.99 → `STRIPE_CREDIT_PACK_50_PRICE_ID`, `_100`, `_250`
- [ ] `.env.local` and production env: publishable key, secret key, all price IDs, webhook secret
- [ ] Webhook endpoint added; events: `checkout.session.completed`, `invoice.paid`, `customer.subscription.updated`, `customer.subscription.deleted`; signing secret set as `STRIPE_WEBHOOK_SECRET`
