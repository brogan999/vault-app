# Step-by-step: Vercel production deploy + Clerk production mode

Follow each part in order. Replace `your-project` with your actual Vercel project name so your live URL is `https://your-project.vercel.app`.

---

## Part A — Clerk: get production keys and set URLs

### A1. Open Clerk and your app

1. In your browser, go to **https://dashboard.clerk.com** and sign in if needed.
2. On the main dashboard you’ll see a list of applications. Click the application you use for this project (e.g. the one whose test keys are in your `.env.local`).
3. You’re now inside that application’s dashboard.

### A2. Make sure you have a Production environment

1. In the **left sidebar**, look for one of:
   - **Configure** → **Environments**, or  
   - **Environments**, or  
   - **Instances**.
2. Click it. You should see at least one environment (often “Development”).
3. If you see **Production** (or “Live”) as well:
   - Click **Production** (or the Production tab) and continue to step A3.
4. If you **only** see Development:
   - Look for a button like **“Create production instance”** or **“Add environment”** and click it.
   - Follow the prompts (Clerk may ask to copy settings from Development). When done, you’ll have a separate **Production** environment with its own keys.
   - Then click into **Production** and continue to A3.

### A3. Copy your Production API keys

1. With **Production** selected, find the **API Keys** section (sometimes on the main screen or under **Configure** → **API Keys**).
2. You’ll see two keys:
   - **Publishable key** — starts with `pk_live_...`
   - **Secret key** — starts with `sk_live_...`
3. Click **Copy** (or the copy icon) next to the **Publishable key**. Paste it into a temporary note (e.g. Notes or a text file). Label it “Clerk production publishable”.
4. Click **Copy** next to the **Secret key**. Paste it into the same note. Label it “Clerk production secret”.
5. Keep this note open; you’ll paste these into Vercel in Part B.

### A4. Add your production domain and URLs in Clerk

Clerk needs to know your live site URL so sign-in and redirects work.

1. In the Clerk left sidebar, go to **Configure** → **Domains** (or **Paths** or **Settings**).
2. Find the section for **domains** or **allowed origins**:
   - If you see **“Add domain”** or **“Allowed origins”**:
     - Add: `https://your-project.vercel.app`  
     - Replace `your-project` with your real Vercel project name (e.g. `personality-vault`).
   - Save if there’s a Save button.
3. Find **Paths** or **URLs** (sometimes under **Configure** → **Paths**):
   - **Sign-in URL**: enter `/sign-in` (path only is fine) or the full URL `https://your-project.vercel.app/sign-in`.
   - **Sign-up URL**: enter `/sign-up` or `https://your-project.vercel.app/sign-up`.
   - **After sign-in URL** / **Home URL**: enter `/mirror` or `https://your-project.vercel.app/mirror`.
   - **After sign-up URL**: enter `/mirror` or `https://your-project.vercel.app/mirror`.
   - Save if needed.
4. Find **Allowed redirect URLs** (or **Redirect allowlist**):
   - Add these two lines (one per line if it’s a list):
     - `https://your-project.vercel.app`
     - `https://your-project.vercel.app/**`
   - Save.
5. Find **Allowed origins** or **CORS** (if it’s a separate field):
   - Add: `https://your-project.vercel.app`
   - Save.

You’re done with Clerk until Part C (webhook). Next: set environment variables in Vercel.

---

## Part B — Vercel: set environment variables

### B1. Open your project on Vercel

1. Go to **https://vercel.com** and sign in.
2. On the dashboard, click your **vault-app** project (or whatever you named it). If you don’t see it, use the search or “All projects”.
3. You’re on the project’s main page (e.g. Deployments or Overview).

### B2. Open Environment Variables

1. At the top of the project page, click the **Settings** tab.
2. In the left sidebar under “Settings”, click **Environment Variables**.
3. You’ll see a list of existing variables (if any) and a form to add new ones.

### B3. Add or update each variable for Production

For each row below, check if the variable already exists. If it does, click **Edit** and set the new value. If not, use **Add New** (or **Key** / **Value**).  
Set **Environment** to **Production** (and **Preview** if you use branch deploys). Then click **Save** after each one (or after a batch, depending on the UI).

Do these in order:

1. **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**  
   - **Key:** `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`  
   - **Value:** the `pk_live_...` key you copied in step A3.  
   - **Environment:** Production (and Preview if you want).

2. **CLERK_SECRET_KEY**  
   - **Key:** `CLERK_SECRET_KEY`  
   - **Value:** the `sk_live_...` key you copied in step A3.  
   - **Environment:** Production (and Preview if you want).

3. **NEXT_PUBLIC_CLERK_SIGN_IN_URL**  
   - **Key:** `NEXT_PUBLIC_CLERK_SIGN_IN_URL`  
   - **Value:** `/sign-in`

4. **NEXT_PUBLIC_CLERK_SIGN_UP_URL**  
   - **Key:** `NEXT_PUBLIC_CLERK_SIGN_UP_URL`  
   - **Value:** `/sign-up`

5. **NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL**  
   - **Key:** `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`  
   - **Value:** `/mirror`

6. **NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL**  
   - **Key:** `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`  
   - **Value:** `/mirror`

7. **NEXT_PUBLIC_APP_URL**  
   - **Key:** `NEXT_PUBLIC_APP_URL`  
   - **Value:** `https://your-project.vercel.app`  
   - Replace `your-project` with your real Vercel project name. No trailing slash.

8. **WEBHOOK_SECRET**  
   - Leave this for **Part C**. You’ll get the value after creating the production webhook in Clerk, then come back and add it here.

9. **Supabase (same as you use locally, unless you have a separate prod project)**  
   - **NEXT_PUBLIC_SUPABASE_URL** — your Supabase project URL.  
   - **NEXT_PUBLIC_SUPABASE_ANON_KEY** — anon/public key from Supabase → Settings → API.  
   - **SUPABASE_SERVICE_ROLE_KEY** — service_role key from the same page (keep this secret).

10. **OPENAI_API_KEY**  
    - **Key:** `OPENAI_API_KEY`  
    - **Value:** your OpenAI API key (starts with `sk-...`). Needed for chat and RAG.

11. **Stripe (only if you use payments)**  
    - Use your **live** Stripe keys (not test) for production:  
      `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, and any price IDs you use.

**Do not** add `NEXT_PUBLIC_CLERK_KEYLESS_DISABLED` in production unless you have a specific reason.

When you’re done, you should have at least: the six Clerk vars, `NEXT_PUBLIC_APP_URL`, Supabase (3), and `OPENAI_API_KEY`. You’ll add `WEBHOOK_SECRET` in Part C.

---

## Part C — Clerk: create production webhook and add secret to Vercel

This lets Clerk notify your app when users sign up or change so you can sync them to Supabase.

### C1. Create the webhook in Clerk (Production)

1. Go back to **https://dashboard.clerk.com** and open the **same application**.
2. Make sure you’re in the **Production** environment (switch at the top or in the sidebar if needed).
3. In the left sidebar, click **Webhooks** (may be under **Configure**).
4. Click **Add endpoint** (or **Create webhook**).
5. **Endpoint URL:** type exactly:  
   `https://your-project.vercel.app/api/webhooks/clerk`  
   (replace `your-project` with your real Vercel project name).
6. Under **Subscribe to events** (or **Events**), enable:
   - `user.created`
   - `user.updated`
   - `user.deleted`
7. Click **Create** (or **Add endpoint**). Clerk will show the new webhook and a **Signing secret** (starts with `whsec_...`).

### C2. Copy the signing secret

1. Next to **Signing secret**, click **Copy** (or **Reveal** then copy).
2. Paste it into your temporary note and label it “Clerk production webhook secret”.

### C3. Add WEBHOOK_SECRET in Vercel

1. Go back to **Vercel** → your project → **Settings** → **Environment Variables**.
2. Click **Add New** (or the equivalent).
3. **Key:** `WEBHOOK_SECRET`  
4. **Value:** paste the `whsec_...` signing secret you just copied.  
5. **Environment:** Production (and Preview if you use it).  
6. Save.

Production webhook and env are done. Next: redeploy so Vercel uses the new variables.

---

## Part D — Redeploy on Vercel

Environment variables only apply to **new** builds, so you must trigger a new deployment.

### Option 1: Redeploy from the Vercel dashboard

1. In Vercel, stay in your project.
2. Click the **Deployments** tab at the top.
3. You’ll see a list of deployments. The latest is usually at the top.
4. On the **latest** deployment, click the **three dots (⋮)** on the right.
5. Click **Redeploy**.
6. In the dialog, you can leave **“Use existing Build Cache”** checked if you only changed env vars (faster). Then click **Redeploy**.
7. Wait until the status is **Ready** (green). This can take 1–3 minutes.

### Option 2: Deploy by pushing to Git

1. In your project folder, commit any changes (if you have any).
2. Push to the branch Vercel uses for production (usually `main`):  
   `git push origin main`
3. Vercel will start a new deployment automatically. In the project’s **Deployments** tab, wait until the new deployment shows **Ready**.

Your live site is now using the production Clerk keys and the new env vars.

---

## Part E — Verify everything works

### E1. Open the live site

1. In Vercel, open the **Deployments** tab and click the **latest** deployment that is **Ready**.
2. Click the **Visit** link (or the domain shown). It will open `https://your-project.vercel.app` (or your custom domain).
3. The app should load (landing or home page). If you see a blank page or 5xx, check **Vercel** → **Logs** or **Functions** for errors.

### E2. Test sign-up / sign-in

1. On the live site, go to **Sign in** or **Sign up** (e.g. click the button that takes you to `/sign-in` or `/sign-up`).
2. Sign up with a new email (or sign in with an existing one). Complete any email verification if Clerk asks.
3. After success, you should be **redirected to `/mirror`** (the Mirror dashboard). If you get “Something went wrong” or stay on the sign-in page, something is misconfigured (see Troubleshooting below).

### E3. Quick check that the app works

1. Click around: **Vault**, **Chat**, **Store**, **Settings**. Pages should load.
2. In the browser, open **Developer Tools** (F12 or right‑click → Inspect) → **Console**. There should be no red Clerk or auth errors.

### E4. (Optional) Check webhook and Supabase

1. If you just signed up a **new** user in E2, open **Supabase** → your project → **Table Editor** → **users** (or the table you use for users).
2. You should see a new row for that user (created by the Clerk webhook). If not, in **Vercel** → **Functions** → **Logs**, filter by `/api/webhooks/clerk` and see if the webhook is being called and if there are errors.

---

## Troubleshooting

- **“Something went wrong” or infinite redirect after sign-in**  
  - Confirm in Vercel that **Production** env has `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` as **production** keys (`pk_live_`, `sk_live_`), not test.  
  - Confirm Clerk **Allowed redirect URLs** and **Allowed origins** include `https://your-project.vercel.app` and `https://your-project.vercel.app/**`.  
  - Redeploy after any env change.

- **Sign-in works but users don’t appear in Supabase**  
  - In Clerk, confirm the **Production** webhook URL is exactly `https://your-project.vercel.app/api/webhooks/clerk` and that `user.created` (and optionally `user.updated`, `user.deleted`) are selected.  
  - In Vercel, confirm `WEBHOOK_SECRET` is the **production** webhook signing secret (`whsec_...`) from Clerk.  
  - Check Vercel **Functions** → **Logs** for `/api/webhooks/clerk` for errors.

- **Old behavior or wrong keys**  
  - After changing **any** env var in Vercel, you must **Redeploy** (Part D). Cached builds still use the old values.

---

## Summary checklist

- [ ] **A** — Clerk Production environment; copied `pk_live_` and `sk_live_`; added production domain, paths, redirect URLs, and allowed origins.
- [ ] **B** — Vercel: set Clerk keys, `/sign-in`, `/sign-up`, `/mirror`, `NEXT_PUBLIC_APP_URL`, Supabase vars, `OPENAI_API_KEY`; Stripe live keys if needed.
- [ ] **C** — Clerk Production webhook to `https://your-project.vercel.app/api/webhooks/clerk`; copied signing secret; set `WEBHOOK_SECRET` in Vercel.
- [ ] **D** — Redeployed on Vercel (Redeploy button or push to `main`).
- [ ] **E** — Opened live URL; signed in/signed up; landed on `/mirror`; no console errors.

Your live link: **https://your-project.vercel.app** (replace with your real project name).
