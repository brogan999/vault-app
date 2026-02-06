# Checklist: Vercel + Clerk Development instance (vercel.app URL)

Use this to confirm your live app at **https://vault-app-kappa.vercel.app** is set up correctly with Clerk’s **Development** instance (no custom domain or Production instance needed).

---

## Clerk (Development instance)

- [ ] **Allowed redirect URLs**  
  In [Clerk Dashboard](https://dashboard.clerk.com) → your app → **Configure** → **Paths** or **Redirect URLs**, add:
  - `https://vault-app-kappa.vercel.app`
  - `https://vault-app-kappa.vercel.app/**`

- [ ] **Allowed origins**  
  If Clerk shows “Allowed origins” or “CORS”, add:
  - `https://vault-app-kappa.vercel.app`

- [ ] **Paths** (optional; paths only is fine)  
  Sign-in: `/sign-in` · Sign-up: `/sign-up` · After sign-in/up: `/mirror`

- [ ] **Webhook (Development)**  
  - **Webhooks** → endpoint URL: `https://vault-app-kappa.vercel.app/api/webhooks/clerk`  
  - Events: `user.created`, `user.updated`, `user.deleted`  
  - Copy the **Signing secret** (you’ll use it in Vercel as `WEBHOOK_SECRET`).

---

## Vercel (Environment Variables)

In **Vercel** → your project → **Settings** → **Environment Variables**, for **Production** (and Preview if you use it):

- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` = `pk_test_...` (Development key)
- [ ] `CLERK_SECRET_KEY` = `sk_test_...` (Development key)
- [ ] `NEXT_PUBLIC_APP_URL` = `https://vault-app-kappa.vercel.app` (no trailing slash)
- [ ] `WEBHOOK_SECRET` = the **Development** webhook signing secret from Clerk (`whsec_...`)
- [ ] Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- [ ] `OPENAI_API_KEY` (for chat)

After changing any variable, **Redeploy** (Deployments → ⋮ → Redeploy).

---

## Quick test

- [ ] Open **https://vault-app-kappa.vercel.app**
- [ ] Click **Sign in** or **Sign up** and complete auth
- [ ] You should land on **/mirror** with no “Something went wrong”

If all boxes are checked and the test passes, you’re ready to go.
