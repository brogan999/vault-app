# Smoke test report (executed)

**Date:** 2025-02-07  
**Target:** http://localhost:3000 (dev server)  
**Scope:** Full smoke test + conversion funnel checks per [VERIFICATION_PROMPTS.md](VERIFICATION_PROMPTS.md).

---

## 1. HTTP verification (curl, unauthenticated)

Each route was requested with `curl`; status codes below.

### Public routes — expect 200

| Route | HTTP | Result |
|-------|------|--------|
| `/` | 200 | OK |
| `/pricing` | 200 | OK |
| `/sign-in` | 200 | OK |
| `/sign-up` | 200 | OK |
| `/privacy` | 200 | OK |
| `/terms` | 200 | OK |
| `/contact` | 200 | OK |
| `/faq` | 200 | OK |
| `/our-framework` | 200 | OK |
| `/knowledge-base` | 200 | OK |
| `/test/mbti` | 200 | OK (test intro; no auth required) |

### Protected routes — expect 307 → sign-in when not logged in

| Route | HTTP | Result |
|-------|------|--------|
| `/mirror` | 307 | Redirects to `/sign-in?redirect_url=.../mirror` (Clerk) |
| `/store` | 307 | Redirects to `/sign-in?redirect_url=.../store` |
| `/vault` | 307 | Redirects to sign-in |
| `/chat` | 307 | Redirects to sign-in |
| `/settings` | 307 | Redirects to sign-in |

Auth behavior is correct: unauthenticated requests to protected routes are sent to sign-in with `redirect_url` preserved.

---

## 2. Browser verification (navigations)

All of the following were opened in the browser at http://localhost:3000:

- **Public:** `/`, `/pricing`, `/sign-in`, `/sign-up`, `/privacy`, `/terms`, `/contact`, `/faq`, `/our-framework`, `/knowledge-base` — each loaded with the expected page title (e.g. "The Vault — Know Yourself Deeper" or "Knowledge Base — The Vault").
- **Protected:** `/mirror`, `/vault`, `/chat`, `/store`, `/settings` — when the browser had no session, behavior matched the curl results (redirect to sign-in or in-session content).
- **Test intro:** `/test/mbti` — loads the MBTI test intro/questions UI.

No 404s or visible "Something went wrong" errors were seen during these navigations.

---

## 3. Conversion funnel (VERIFICATION_PROMPTS §3)

- **Test entry:** `/test/mbti` loads and shows the MBTI test (intro + first page of questions). **OK.**
- **Results page:** The results page and its CTAs ("Talk to the Mirror", "Go to Mirror", "Back to Store") live at `/test/[testId]/results/[attemptId]`. Reaching that URL requires completing a test to get an `attemptId`. This was **not** exercised in this run (no test completion).
- **Conclusion:** Entry into the funnel (landing → test intro) works. To verify the full funnel (Results → Talk to the Mirror → Go to Mirror → Back to Store), either:
  - Complete the MBTI test in the browser and then click each CTA, or
  - Sign in and use an existing attempt ID to open the results page directly.

---

## 4. Key actions not tested (require sign-in)

- **Chat – send a message:** Requires authenticated user.
- **Store – see products / checkout:** Requires authenticated user (or redirect to sign-in).
- **Mirror – dashboard widgets:** Requires authenticated user.
- **Vault – upload:** Requires authenticated user.

---

## 5. Dependencies

- **Stripe CLI:** Not required for the routes checked; only needed for webhook handling (e.g. checkout completion).
- **Env:** No missing-env errors observed. For production, confirm `SUPABASE_SERVICE_ROLE_KEY`, Clerk, and Stripe in Vercel (see [POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md)).

---

## Summary

| Area | Status |
|------|--------|
| Public pages (10 routes) | All return 200 and load in browser |
| Protected routes (5) | Correctly 307 to sign-in when unauthenticated |
| Test intro (`/test/mbti`) | Loads (200); funnel entry OK |
| Results-page CTAs | Not run (need completed test or attemptId) |
| Post–sign-in actions (Chat, Store, Mirror, Vault) | Not run (need credentials) |

**Next steps for full coverage:** (1) Sign in and repeat: open Mirror, Vault, Chat, Store, Settings and confirm content + one key action each. (2) Complete the MBTI test once and verify "Talk to the Mirror", "Go to Mirror", "Back to Store". (3) For production, use the "Post-deploy / production check" prompt from VERIFICATION_PROMPTS.md with your production URL.
