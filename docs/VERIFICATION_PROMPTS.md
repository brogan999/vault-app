# Prompts to verify the web app is working

Use any of the prompts below depending on what you want verified. The AI can use the codebase, docs (e.g. [STEP-BY-STEP.md](../STEP-BY-STEP.md), [POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md)), and the browser to walk through flows and report what works or fails.

---

## 1. Full smoke test (everything critical)

**Prompt you can use:**

> Run a full smoke test of the vault-app: assume the dev server is at http://localhost:3000 (or give a URL). Check that (1) public pages load (home, pricing, sign-in, sign-up), (2) after sign-in I can reach Mirror, Vault, Chat, Store, and Settings without errors, (3) key actions work (e.g. open Chat and send a message, open Store and see products). Use the browser to click through and report any broken routes, missing env, or console/network errors. If something needs to be running (e.g. Stripe CLI for webhooks), say what and whether it blocked the check.

**What this triggers:** Systematic click-through of public and protected routes, basic "does it load and respond" checks, and a short report of failures or "all good."

---

## 2. Post-deploy / production check

**Prompt you can use:**

> Verify the production deployment using POST-DEPLOY-CHECKLIST.md. I'll give you the production URL. Check that sign-in works, I land on /mirror, and the main nav (Mirror, Vault, Chat, Store, Settings) works. Report any errors or missing env (e.g. SUPABASE_SERVICE_ROLE_KEY) that could cause "Something went wrong."

**What this triggers:** Focus on production-only behavior and the checklist items (env, Supabase, Clerk webhook side effects like user creation).

---

## 3. Conversion funnel / test flow

**Prompt you can use:**

> Walk through the conversion funnel in the vault-app: take a free test as a guest (or signed-in user), reach the test results page, then click "Talk to the Mirror," "Go to Mirror," and "Back to Store." Confirm each step loads and links stay in-app and locale-aware. Use the browser and report any broken links or redirects.

**What this triggers:** Verification of the flow described in [CONVERSION_FUNNEL.md](CONVERSION_FUNNEL.md)—results → Chat → Mirror → Store—and that CTAs behave as documented.

---

## 4. Single feature or area

**Prompt you can use (customize the bracketed part):**

> Check that [Mirror / Vault / Chat / Store / Settings / sign-in / pricing] works: page loads, no console or network errors, and [describe one key action, e.g. "upload a file in Vault" or "send a message in Chat"]. Use the browser at http://localhost:3000 (or [URL]) and report what works and what doesn't.

**What this triggers:** Focused verification of one area plus one main action, with a short pass/fail style report.

---

## 5. "Is everything working?" (open-ended)

**Prompt you can use:**

> Using STEP-BY-STEP.md, the PRD, and the app structure, list the main user-facing flows and integration points (auth, Mirror, Vault, Chat, Store, Stripe, webhooks). Then either (a) run a smoke test with the browser and report what's working and what's not, or (b) give me a short checklist I can run myself to confirm everything is working.

**What this triggers:** Either an executed smoke test with a report, or a handoff checklist tailored to your app.

---

## Tips for best results

- **Say where the app is running:** e.g. "Dev server at http://localhost:3000" or "Production at https://myapp.vercel.app." If you don't, the AI may assume localhost or ask.
- **Mention constraints:** e.g. "Don't actually pay; just check that the checkout page loads" or "Stripe webhook isn't running locally."
- **After a deploy:** Use prompt (2) and give the production URL so the AI can verify against the real environment.
