# Verification Checklist

Manual testing steps for all fixes applied during the site audit. Work through each section in order. Check off items as you go.

**Prerequisites:**
- Local dev server running (`npm run dev`)
- Stripe CLI installed and forwarding webhooks (`stripe listen --forward-to localhost:3000/api/webhooks/stripe`)
- Browser DevTools open (Network + Console tabs)

---

## Phase 1: Smoke Test — Critical Fixes

### SEC-001: Webhook endpoints unblocked

- [ ] Run: `curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:3000/api/webhooks/stripe -H 'Content-Type: text/plain' -d 'test'`
  - **Pass:** Status code is `400` or `500` (application-level error, NOT `307`)
- [ ] Run: `curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:3000/api/webhooks/clerk -H 'Content-Type: text/plain' -d 'test'`
  - **Pass:** Status code is `400` or `500` (NOT `307`)
- [ ] Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/api/cron/checkins`
  - **Pass:** Status code is NOT `307`

### SEC-002: Content-Security-Policy header

- [ ] Run: `curl -sI http://localhost:3000/ | grep -i content-security-policy`
  - **Pass:** Header is present and includes `default-src 'self'`, `script-src`, `connect-src`
- [ ] Run: `curl -sI http://localhost:3000/ | grep -i x-powered-by`
  - **Pass:** No output (header removed)

### SEC-003: API rate limiting

- [ ] If Upstash env vars are configured: send 31+ rapid requests to `/api/chat/test` and verify a `429` response is returned
- [ ] If Upstash env vars are NOT configured: verify the app starts without errors and API routes work normally (rate limiting gracefully skipped)

### SEC-004: Dynamic `html lang` and RTL

- [ ] Navigate to `http://localhost:3000/en/mirror` — inspect `<html>` element
  - **Pass:** `lang="en"`, `dir="ltr"`
- [ ] Navigate to `http://localhost:3000/ar/mirror` — inspect `<html>` element
  - **Pass:** `lang="ar"`, `dir="rtl"`
- [ ] Navigate to `http://localhost:3000/es/mirror` — inspect `<html>` element
  - **Pass:** `lang="es"`, `dir="ltr"`
- [ ] On the Arabic page, verify text flows right-to-left and navigation is mirrored

---

## Phase 2: i18n & Localization

### FUNC-001/002/003: Translation backfill

- [ ] Navigate to `/es/mirror` — scan the entire page
  - **Pass:** No raw keys visible (no dots in button text like `mirror.upgradeCta`)
- [ ] Navigate to `/ar/mirror` — scan the entire page
  - **Pass:** No raw keys visible; footer shows translated "Cookie Policy" (not `landing.footer.cookiePolicy`)
- [ ] Navigate to `/ja/mirror` — scan the entire page
  - **Pass:** No raw keys visible
- [ ] Navigate to `/de/store` — scan the entire page
  - **Pass:** No raw keys visible

### FUNC-004: Font subsets

- [ ] Navigate to `/ru/mirror` (Cyrillic locale)
  - **Pass:** Headings use Playfair Display (serif), not system fallback font
- [ ] Navigate to `/el/mirror` (Greek locale)
  - **Pass:** Mono code font renders correctly for any code/data displays

### SEC-005: Cookie banner i18n

- [ ] Navigate to `/es` (Spanish) as a new user (clear cookies first)
  - **Pass:** Cookie banner text is in Spanish, not English
  - **Pass:** "Essential only" and "Accept all" buttons are translated
- [ ] Navigate to `/ar` (Arabic) as a new user
  - **Pass:** Cookie banner text is in Arabic (RTL layout)

### UX-004: Category filter labels

- [ ] Navigate to `/es/store`
  - **Pass:** Category filter buttons (All, Personality, Intelligence, etc.) are translated to Spanish
- [ ] Navigate to `/es/mirror` — find the test snapshot section
  - **Pass:** Category filter labels are translated

---

## Phase 3: UI/UX Fixes

### UX-001: Cookie banner positioning (mobile)

- [ ] Open DevTools, set viewport to 375px width (iPhone SE)
- [ ] Navigate to any protected page as a new user (clear `cookie-consent` from localStorage)
  - **Pass:** Cookie banner sits ABOVE the bottom navigation bar, not overlapping
  - **Pass:** Both "Essential only" and "Accept all" buttons are fully visible and tappable
- [ ] On desktop (1440px width)
  - **Pass:** Cookie banner sits at the bottom of the viewport

### UX-002: Vault document retry

- [ ] Navigate to `/vault`
- [ ] If you have a document with "error" status, click the three-dot menu (⋮)
  - **Pass:** "Retry" option appears in the dropdown
  - **Pass:** Clicking "Retry" shows a success toast and resets document status to "pending"
- [ ] For a document with "ready" status, click the three-dot menu
  - **Pass:** "Retry" option does NOT appear (only "Delete")

### UX-003: Skip-to-content link

- [ ] Navigate to any page, press Tab once from a fresh page load
  - **Pass:** A "Skip to content" link appears at the top-left corner
  - **Pass:** Pressing Enter on it jumps focus to the `<main>` content area
  - **Pass:** The link is invisible until focused (uses `sr-only` / `focus:not-sr-only`)

### UX-008: Dark mode safeguard

- [ ] Inspect `globals.css` — verify `@custom-variant dark (&:is(.dark *))` is present
- [ ] Enable system dark mode in macOS (System Preferences > Appearance > Dark)
  - **Pass:** The app remains light-themed (no sudden color inversions or broken styles)
  - **Pass:** `dark:` Tailwind classes do NOT activate from OS-level dark mode alone

### UX-009: Settings checkboxes

- [ ] Navigate to `/settings`
- [ ] Find the "I don't know my birth time" checkbox and the "I confirm I want to delete" checkbox
  - **Pass:** Checkboxes are visually styled (accent color matches primary, consistent sizing)
  - **Pass:** Both checkboxes are interactive (clickable, not readonly)

---

## Phase 4: SEO & Metadata

### FUNC-006: OpenGraph image

- [ ] Run: `curl -sI http://localhost:3000/api/og`
  - **Pass:** Returns `200` with `content-type: image/png`
- [ ] Run: `curl -s http://localhost:3000/ | grep 'og:image'`
  - **Pass:** Meta tag includes `/api/og` URL
- [ ] Open https://www.opengraph.xyz/ and enter your production URL
  - **Pass:** Preview image shows "Anima" with "Know yourself deeper" subtitle

### SEC-006: Secure cookie flag

- [ ] Navigate to any page, check response headers in DevTools Network tab
- [ ] Find the `Set-Cookie: NEXT_LOCALE=...` header
  - **Pass (production/HTTPS only):** Cookie includes `Secure` and `SameSite=Lax` flags
  - **Note:** `Secure` flag only applies over HTTPS; on localhost HTTP it may not be present

---

## Phase 5: Payment & Webhook Verification

### Stripe webhook delivery (requires Stripe CLI)

- [ ] Start Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- [ ] Trigger a test event: `stripe trigger checkout.session.completed`
  - **Pass:** Stripe CLI shows `200` response (not `307` or `401`)
  - **Pass:** Server logs show webhook processed (check for idempotency log)
- [ ] Trigger a duplicate: `stripe trigger checkout.session.completed` (same event)
  - **Pass:** Server handles it gracefully (idempotency check prevents double-processing)

### Clerk webhook delivery

- [ ] In Clerk Dashboard > Webhooks, send a test event
  - **Pass:** Event is delivered successfully (not blocked by middleware)
  - **Pass:** Check server logs for successful processing

### Credit system manual check

- [ ] As a free user, send 10 messages in The Mirror
  - **Pass:** 11th message is blocked with a daily limit message
- [ ] As a Pro user, verify the credit summary shows correct breakdown (rollover, monthly, top-up)

---

## Phase 6: Performance & Bundle

### PERF-001: Bundle analysis

- [ ] Run: `ANALYZE=true npm run build`
  - **Pass:** Build completes and opens bundle analyzer report in browser
  - **Pass:** Review largest chunks — verify `lucide-react` and `recharts` are tree-shaken via `optimizePackageImports`

### Lighthouse audit

- [ ] Run Lighthouse on the landing page (`/`)
  - **Target:** Performance > 90, Accessibility > 90, Best Practices > 90, SEO > 90
- [ ] Run Lighthouse on a protected page (`/mirror`)
  - **Target:** Performance > 80, Accessibility > 90

### Security headers scan

- [ ] Visit https://securityheaders.com/ and enter your production URL
  - **Target:** Grade A or A+
  - **Pass:** Content-Security-Policy is listed, X-Powered-By is absent

---

## Phase 7: Unit Tests

- [ ] Run: `npm test`
  - **Pass:** All test files pass (5 files, 61+ tests)
  - **Pass:** No warnings or skipped tests

| Test File | Covers | Expected Tests |
|-----------|--------|---------------|
| `mbti-scoring.test.ts` | MBTI scoring algorithm | 20 |
| `credits.test.ts` | Free/Pro limits, deduction order, summary | 10 |
| `access.test.ts` | Premium report access, bundles, funnel ownership | 16 |
| `upload-validation.test.ts` | File category inference, extension validation, size limits | 12 |
| `idempotency.test.ts` | Webhook idempotency (new/duplicate/error) | 3 |

---

## Phase 8: Cross-Browser Spot Check

Test at minimum in two browsers. Priority pages: `/mirror`, `/store`, `/chat`.

- [ ] **Chrome (latest):** All pages render correctly, no console errors
- [ ] **Safari (latest):** All pages render correctly, safe-area-inset works on iOS
- [ ] **Firefox (latest):** All pages render correctly (optional but recommended)

---

## Sign-Off

| Phase | Status | Tester | Date |
|-------|--------|--------|------|
| Phase 1: Critical Fixes | | | |
| Phase 2: i18n | | | |
| Phase 3: UI/UX | | | |
| Phase 4: SEO | | | |
| Phase 5: Payments | | | |
| Phase 6: Performance | | | |
| Phase 7: Unit Tests | | | |
| Phase 8: Cross-Browser | | | |
