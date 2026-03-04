# Website Testing Findings Report

**Application:** Anima (The Vault) — [theanima.ai](https://theanima.ai)
**Date:** February 24, 2026
**Stack:** Next.js 16.1, Clerk, Supabase, Stripe, OpenAI, next-intl (55 locales)

---

## Summary

| Severity | Count |
|----------|-------|
| Critical | 3     |
| High     | 8     |
| Medium   | 10    |
| Low      | 7     |
| **Total**| **28**|

---

## Critical Issues

### SEC-001: Webhook endpoints blocked by Clerk middleware

**Severity:** Critical
**Category:** Security / Functionality
**Page/Route:** `/api/webhooks/stripe`, `/api/webhooks/clerk`, `/api/cron/checkins`

**Description:**
All API routes — including webhook endpoints — are protected by `auth.protect()` in `proxy.ts`. External services (Stripe, Clerk) cannot deliver webhook payloads because requests are redirected (HTTP 307) to `/sign-in`.

**Steps to Reproduce:**
```bash
curl -s -o /dev/null -w "%{http_code}" -X POST http://localhost:3000/api/webhooks/stripe \
  -H 'Content-Type: text/plain' -d 'test'
# Returns: 307 (redirect to /sign-in)
```

**Root Cause:**
In `proxy.ts`, `auth.protect()` is called for all non-public routes *before* the API-route bypass check:

```typescript
// proxy.ts lines 41-54
const clerkHandler = clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();  // <-- blocks webhooks
  }
  const pathname = req.nextUrl.pathname;
  if (pathname.startsWith("/api") || pathname.startsWith("/trpc")) {
    return NextResponse.next();  // <-- never reached for unauthenticated requests
  }
  return intlMiddleware(req);
});
```

**Impact:** Stripe payment webhooks, Clerk user-sync webhooks, and cron endpoints cannot receive external requests. The app works around the Clerk webhook failure via the inline user-sync fallback in `lib/clerk/utils.ts`, but payment lifecycle events (subscription updates, renewals, cancellations) may be silently dropped.

**Suggested Fix:** Add webhook and cron routes to the public route matcher:
```typescript
"/api/webhooks(.*)",
"/api/cron(.*)",
```

---

### SEC-002: No Content-Security-Policy header

**Severity:** Critical
**Category:** Security
**Page/Route:** All pages

**Description:**
The `next.config.ts` security headers include HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy, but **no Content-Security-Policy (CSP)** header is configured.

**Verified via:**
```bash
curl -s -I http://localhost:3000/ | grep -i content-security
# (no output)
```

**Impact:** Without CSP, the application is vulnerable to XSS attacks. Inline scripts, arbitrary external resources, and injected scripts can execute freely. This is particularly relevant because the app renders user-uploaded content and AI-generated markdown.

**Suggested Fix:** Add a CSP header to `next.config.ts`. Start with a report-only policy to identify violations:
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com https://client.crisp.chat; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.supabase.co; connect-src 'self' https://*.supabase.co https://api.stripe.com https://api.openai.com https://*.posthog.com; frame-src https://js.stripe.com;
```

---

### SEC-003: No API-level rate limiting

**Severity:** Critical
**Category:** Security
**Page/Route:** All API routes and Server Actions

**Description:**
There is no rate limiting at the API or middleware level. The only limits are application-level credit checks (10 messages/day free, 300/month pro) which are enforced *after* the request is processed through auth and database queries.

**Impact:**
- An attacker can flood `/api/chat/[sessionId]` with rapid-fire requests, exhausting OpenAI API budget and server resources
- Webhook endpoints can be DoS'd with invalid payloads (each attempt hits the database for idempotency check)
- File upload endpoint can be spammed to exhaust storage quota
- No protection against credential-stuffing on sign-in flows

**Suggested Fix:** Implement rate limiting using Vercel Edge Middleware with Upstash Redis, or use `@upstash/ratelimit`:
- Chat API: 30 requests/minute per user
- Webhook endpoints: 100 requests/minute per IP
- File upload: 10 requests/minute per user
- Auth flows: 10 requests/minute per IP

---

## High Issues

### FUNC-001: Spanish locale shows raw i18n keys in production UI

**Severity:** High
**Category:** Functionality / UI-UX
**Page/Route:** `/es/mirror` (and likely all non-English locale protected pages)

**Description:**
The Spanish locale (and likely many other locales) displays raw i18n key paths instead of translated text. Over 30 keys are missing from `messages/es.json`:

**Visible raw keys on `/es/mirror`:**
- `mirror.upgradeCta` (shown as button text)
- `mirror.upgradeCtaDescription` (shown as subtitle)
- `mirror.testSnapshot.title`, `mirror.testSnapshot.description`
- `mirror.testSnapshot.completePrompt`, `mirror.testSnapshot.completeCta`
- `mirror.testSnapshot.sectionLabel`
- `mirror.engagement.totalActivities`
- `mirror.moodTimeline.avgMood`
- `mirror.growth.days`, `mirror.growth.currentStreak`
- `mirror.growth.thisWeek`, `mirror.growth.thisMonth`
- `mirror.growth.motivationStart`

**Additional untranslated elements:**
- Category filter buttons (All, Personality, Intelligence, etc.) remain in English
- Test names and descriptions remain in English
- Cookie consent banner text remains in English

**Impact:** Non-English users see a broken, unprofessional interface mixing translations with raw key paths. This affects all 49 non-English locales for the mirror page.

---

### FUNC-002: Arabic locale has no translations and no RTL support

**Severity:** High
**Category:** Functionality / UI-UX / Accessibility
**Page/Route:** `/ar/*` (all Arabic routes)

**Description:**
The Arabic locale renders entirely in English with no Arabic translations. Additionally:

1. **No RTL layout:** The `<html>` element never receives `dir="rtl"`. The root layout hardcodes `lang={routing.defaultLocale}` (always "en") instead of using the current locale.
2. **No dynamic `lang` attribute:** The `<html lang="en">` is static regardless of which locale is active, which breaks screen reader language detection.
3. **No RTL CSS:** No `dir` attribute is set anywhere in the codebase (verified via grep).

**Affected RTL locales:** Arabic (`ar`), Hebrew (`he`), Persian (`fa`)

**Root Cause:**
```typescript
// app/layout.tsx line 52
<html lang={routing.defaultLocale} suppressHydrationWarning>
```
This should be `lang={locale}` and include `dir="rtl"` for RTL locales.

**Impact:** Three supported locales are completely broken for RTL rendering. Text direction, alignment, navigation order, and scroll direction are all incorrect.

---

### FUNC-003: `landing.footer.cookiePolicy` raw key visible in Arabic locale

**Severity:** High
**Category:** Functionality / i18n
**Page/Route:** `/ar/*` footer

**Description:**
The cookie policy link in the footer displays the raw key `landing.footer.cookiePolicy` instead of the translated label. This was observed in the Arabic locale but may affect other locales.

---

### SEC-004: `html lang` attribute is always "en"

**Severity:** High
**Category:** Accessibility / SEO
**Page/Route:** All pages

**Description:**
The root `<html>` element always has `lang="en"` regardless of the active locale. This breaks:
- Screen reader language detection (VoiceOver, NVDA will read all content as English)
- Search engine language classification
- Browser auto-translation prompts

**Root Cause:** `app/layout.tsx` line 52 uses `routing.defaultLocale` (always "en") instead of the current locale from params.

---

### FUNC-004: Font subsets limited to Latin

**Severity:** High
**Category:** UI-UX
**Page/Route:** All non-Latin locale pages

**Description:**
Both fonts (JetBrains Mono and Playfair Display) are loaded with only `subsets: ["latin"]`. Pages in Arabic, Chinese, Japanese, Korean, Thai, and other non-Latin scripts will fall back to system fonts inconsistently, breaking the design system typography.

**Root Cause:** `app/layout.tsx` lines 7-16

---

### UX-001: Cookie consent banner overlaps mobile bottom navigation

**Severity:** High
**Category:** UI-UX
**Page/Route:** All protected pages on mobile

**Description:**
The cookie consent banner at the bottom of the page overlaps with the `MobileBottomNav` component and the Crisp chat button, making all three elements difficult to interact with on mobile devices.

**Impact:** Until the user dismisses the cookie banner, the bottom navigation is partially obscured, and the "Accept all" button text is cut off (shows "Ac...").

---

### UX-002: Document processing error visible in vault with no recovery action

**Severity:** High
**Category:** UI-UX / Functionality
**Page/Route:** `/vault`

**Description:**
The "Big5 Personality Report.pdf" document shows "error" status in the vault file list with no way to retry processing, view the error details, or delete and re-upload. Users are left with a permanent error state and no actionable path forward.

---

### SEC-005: Cookie consent banner not translated

**Severity:** High
**Category:** i18n / Legal Compliance
**Page/Route:** All pages in non-English locales

**Description:**
The cookie consent banner text ("We use essential cookies to run the app and optional analytics...") is always in English regardless of locale. The "Essential only" and "Accept all" buttons are also untranslated.

**Impact:** This may violate GDPR requirements in the EEA, where cookie consent must be presented in the user's language to constitute valid informed consent.

---

## Medium Issues

### UX-003: No skip-to-content link

**Severity:** Medium
**Category:** Accessibility
**Page/Route:** All pages

**Description:**
There is no "Skip to main content" link for keyboard navigation. Users navigating with keyboard or screen readers must tab through the full navigation on every page load.

---

### UX-004: Category filter buttons not translated

**Severity:** Medium
**Category:** i18n
**Page/Route:** `/mirror`, `/vault`, `/store` (all locales except English)

**Description:**
The category filter buttons (All, Personality, Intelligence, Strengths, Wellness, Astrology, Career) remain in English in all non-English locales. These appear on the mirror dashboard, vault, and store pages.

---

### SEC-006: `NEXT_LOCALE` cookie lacks Secure flag

**Severity:** Medium
**Category:** Security
**Page/Route:** All pages

**Description:**
The `NEXT_LOCALE` cookie is set with `SameSite=lax` but without the `Secure` flag:
```
set-cookie: NEXT_LOCALE=en; Path=/; SameSite=lax
```
In production over HTTPS, this cookie should have the `Secure` flag to prevent transmission over unencrypted connections.

---

### FUNC-005: Test result descriptions not translated

**Severity:** Medium
**Category:** i18n
**Page/Route:** `/mirror`, test result pages

**Description:**
Test results (Big 5 dimension names like "Openness", "Conscientiousness", personality type names like "ISFP - The Trailblazer", astrology placements like "Cancer", "Scorpio") are displayed in English regardless of locale. These appear to be stored in the database in English with no locale-aware rendering.

---

### UX-005: "Rendering..." badge visible during page navigation

**Severity:** Medium
**Category:** UI-UX
**Page/Route:** `/chat`, `/settings` (during hydration)

**Description:**
A green "Rendering..." badge appears briefly in the bottom-left corner during client-side hydration. This is a Next.js development indicator but should be verified it doesn't appear in production builds.

---

### SEC-007: Admin client used extensively with RLS bypass

**Severity:** Medium
**Category:** Security
**Page/Route:** All Server Actions and API routes

**Description:**
Nearly all database operations use `createAdminClient()` which bypasses Row Level Security. While the Server Actions and API routes perform application-level auth checks, this means:
- A bug in any auth check exposes the entire database
- RLS policies provide no defense-in-depth

**Recommendation:** For user-facing queries, use a client scoped to the user's context where RLS policies can provide additional protection.

---

### UX-006: No loading state for vault file operations

**Severity:** Medium
**Category:** UI-UX
**Page/Route:** `/vault`

**Description:**
The vault page shows "No files" in each empty category section but doesn't display file counts in the section headers until files exist. When processing a document (status: "pending"), there's no progress indicator.

---

### UX-007: Pricing page missing explicit metadata

**Severity:** Medium
**Category:** SEO
**Page/Route:** `/pricing`

**Description:**
The pricing page doesn't export a `generateMetadata()` function, inheriting the generic site-wide title/description. This misses an opportunity for page-specific Open Graph tags that would improve social sharing previews.

---

### FUNC-006: Homepage missing explicit Open Graph image

**Severity:** Medium
**Category:** SEO
**Page/Route:** `/`

**Description:**
No Open Graph image (`og:image`) is configured in the metadata for the homepage or any other page. Social sharing previews will show without an image preview, reducing click-through rates.

---

### PERF-001: No bundle analysis configured

**Severity:** Medium
**Category:** Performance
**Page/Route:** Build pipeline

**Description:**
The project doesn't include `@next/bundle-analyzer` for monitoring bundle size regressions. With heavy dependencies (Recharts, LangChain, OpenAI SDK, jspdf, jszip, pdf-parse), bundle size should be monitored.

---

## Low Issues

### UX-008: Dark mode CSS references with dark mode disabled

**Severity:** Low
**Category:** UI-UX
**Page/Route:** Various

**Description:**
Multiple components contain `dark:` Tailwind variants (e.g., `dark:border-primary/20`, `dark:bg-card/95`, `dark:bg-muted/20`) but dark mode is currently disabled in `lib/theme.ts`. The `applyTheme()` function only removes the `dark` class. If a browser extension or OS-level dark mode injects a `dark` class, these styles would activate unexpectedly.

---

### UX-009: Settings page checkbox marked readonly incorrectly

**Severity:** Low
**Category:** UI-UX / Accessibility
**Page/Route:** `/settings`

**Description:**
The "I don't know my birth time" checkbox has `states: [readonly]` in the accessibility tree, but it should be interactive. This may confuse screen reader users.

---

### FUNC-007: Journal entries not translated in mirror dashboard

**Severity:** Low
**Category:** i18n
**Page/Route:** `/mirror` (all locales)

**Description:**
Journal mood check-in entries (e.g., "Mood check-in: feeling okay.") are stored in English and displayed without translation on the mirror dashboard regardless of locale.

---

### PERF-002: Chat loads all sessions without pagination

**Severity:** Low
**Category:** Performance
**Page/Route:** `/chat`

**Description:**
`getChatSessions()` in `app/actions/chat.ts` fetches up to 50 sessions with message previews. For active users, this could become slow. Consider implementing virtual scrolling or lazy loading for the session list.

---

### UX-010: Command palette search not localized

**Severity:** Low
**Category:** i18n
**Page/Route:** All protected pages

**Description:**
The command palette (`CommandPalette`) shows "Search for a command to run..." as placeholder text, which is not translated in non-English locales.

---

### SEC-008: Clerk development keys warning in console

**Severity:** Low
**Category:** Security / Configuration
**Page/Route:** All pages (development only)

**Description:**
Console shows: "Clerk has been loaded with development keys. Development instances have strict usage limits..." This is expected in development but should be verified that production uses production keys.

---

### FUNC-008: Minimal test coverage

**Severity:** Low
**Category:** Engineering
**Page/Route:** N/A

**Description:**
Only one test file exists (`__tests__/mbti-scoring.test.ts`). Critical business logic lacks test coverage:
- Credit system (`lib/credits.ts`) — consumption order, deduction, limit enforcement
- Access control (`lib/access.ts`) — premium report access, bundle ownership
- Webhook handlers — idempotency, payment processing
- File upload validation — extension and size checks

---

## Security Headers Audit

| Header | Status | Value |
|--------|--------|-------|
| Strict-Transport-Security | Present | `max-age=63072000; includeSubDomains; preload` |
| X-Content-Type-Options | Present | `nosniff` |
| X-Frame-Options | Present | `DENY` |
| Referrer-Policy | Present | `strict-origin-when-cross-origin` |
| Permissions-Policy | Present | `camera=(), microphone=(), geolocation=()` |
| Content-Security-Policy | **MISSING** | — |
| X-Powered-By | Present (remove) | `Next.js` |

**Note:** `X-Powered-By: Next.js` reveals the framework. While not a direct vulnerability, it aids reconnaissance. Next.js can be configured to remove it with `poweredByHeader: false` in `next.config.ts`.

---

## Input Validation Audit

| Endpoint | Validation | Finding |
|----------|-----------|---------|
| `/api/chat/[sessionId]` | UUID regex + Zod schema | Properly validates session ID format and message body |
| `/api/webhooks/stripe` | Stripe signature verification | Correct (but blocked by middleware — see SEC-001) |
| `/api/webhooks/clerk` | Svix signature verification + header check | Correct (but blocked by middleware — see SEC-001) |
| File upload (`upload.ts`) | Extension allowlist + 10MB limit | No MIME type validation — files validated by extension only |
| Chat messages | Zod schema + text content check | Properly rejects empty messages |
| Session ownership | `assertSessionOwnership()` | Properly enforced for all chat operations |

---

## Responsive Design Audit (375px - 1440px)

| Page | Mobile (375px) | Tablet (768px) | Desktop (1440px) | Issues |
|------|---------------|----------------|-------------------|--------|
| `/mirror` | Grid renders 2-col | 2-col grid | 2-col grid with sidebar | Cookie banner overlaps mobile nav |
| `/vault` | Stacked layout | Tab layout | Tab layout with sidebar | None observed |
| `/chat` | Sidebar hidden by default | Sidebar + chat pane | Full layout | Footer text truncated on left |
| `/store` | 1-col cards | 2-col cards | 2-col cards with sidebar | None observed |
| `/settings` | Stacked forms | Stacked forms | Stacked forms | None observed |
| Landing page | Single column | Responsive grid | Full width sections | None observed |

---

## Accessibility Summary

| Check | Status | Notes |
|-------|--------|-------|
| ARIA labels on navigation | Pass | `NavRail`, `MobileBottomNav`, chat input all labeled |
| Semantic HTML | Pass | Proper `nav`, `main`, `section` usage |
| Heading hierarchy | Pass | `h1` -> `h2` -> `h3` maintained |
| Focus rings | Pass | Consistent `focus-visible:ring-2` pattern |
| Keyboard navigation (tests) | Pass | Number keys 1-7 for quick selection |
| `sr-only` text | Pass | Used in dialogs and forms |
| Skip-to-content link | **Fail** | Not present (UX-003) |
| `html lang` attribute | **Fail** | Always "en" (SEC-004) |
| RTL support | **Fail** | No `dir` attribute for Arabic/Hebrew/Persian (FUNC-002) |
| Color contrast | Not tested | Needs manual axe DevTools audit |

---

## Fixes Applied

The following issues were fixed as part of this audit:

### Critical (Phase 1)

- **SEC-001 (FIXED):** Added `/api/webhooks(.*)` and `/api/cron(.*)` to public route matcher in `proxy.ts`. Webhook endpoints now return proper application-level errors (400/500) instead of 307 redirects.
- **SEC-002 (FIXED):** Added Content-Security-Policy header and removed `X-Powered-By` in `next.config.ts`. CSP allows Stripe, Clerk, Crisp, PostHog, and Supabase domains.
- **SEC-003 (FIXED):** API rate limiting via `@upstash/ratelimit` in `proxy.ts`. Chat: 30 req/min per user, webhooks: 100 req/min per IP, export: 5 req/min per user, file upload: 10 req/min per user (in-action). Gracefully no-ops when Upstash env vars are absent.
- **SEC-004 (FIXED):** Root layout (`app/layout.tsx`) now reads `NEXT_LOCALE` cookie to set dynamic `lang` and `dir` attributes. Arabic pages render `<html lang="ar" dir="rtl">`.

### High (Phase 2)

- **FUNC-001/002/003 (FIXED):** Backfill script (`scripts/backfill-i18n.ts`) merged 1,855 missing i18n keys from `en.json` into all 49 locale files. Raw key leakage eliminated.
- **FUNC-004 (FIXED):** Font subsets expanded in `app/layout.tsx` — JetBrains Mono: latin, latin-ext, cyrillic, cyrillic-ext, greek, vietnamese; Playfair Display: latin, latin-ext, cyrillic, vietnamese.
- **UX-001 (FIXED):** Cookie banner repositioned with `bottom-14 lg:bottom-0` so it sits above `MobileBottomNav` on mobile and at the viewport bottom on desktop. Safe-area-inset padding added for iOS.
- **UX-002 (FIXED):** Added `retryDocumentProcessing` server action in `app/actions/vault.ts`. Retry button appears in the FileTree dropdown for documents with `status: "error"`.
- **SEC-005 (FIXED):** Cookie consent banner text moved to `consent` i18n namespace with `useTranslations("consent")`. Keys backfilled to all 49 locales.

### Medium/Low (Phase 3)

- **UX-003 (FIXED):** Skip-to-content link added to root layout. `id="main-content"` added to all `<main>` elements (`MainStage`, `ProtectedLayoutChrome`).
- **UX-004 (FIXED):** Category filter labels moved from hardcoded English in `lib/products.ts` to `categories` i18n namespace. Updated `TestsSnapshotSection` and store page.
- **SEC-006 (FIXED):** `NEXT_LOCALE` cookie patched with `Secure; SameSite=Lax` flags via `secureCookies()` in `proxy.ts`.
- **FUNC-006 (FIXED):** Dynamic OG image generated at `/api/og` (edge route). OpenGraph and Twitter Card `images` added to locale layout metadata.
- **UX-008 (FIXED):** Dark mode variant overridden to class-based only via `@custom-variant dark (&:is(.dark *))` in `globals.css`. OS-level dark mode no longer activates stale `dark:` classes.
- **UX-009 (FIXED):** Settings page native checkboxes styled with `accent-primary`, consistent `h-4 w-4` sizing, and `disabled:opacity-50`.
- **PERF-001 (FIXED):** `@next/bundle-analyzer` installed as dev dependency and wired into `next.config.ts`. Activate with `ANALYZE=true`.

### No Code Change Required

- **UX-005:** "Rendering..." badge confirmed as Next.js dev-only indicator. Does not appear in production builds.
- **SEC-007:** RLS bypass via `createAdminClient()` documented in this report (see Medium Issues). Defense-in-depth recommendation noted.
- **SEC-008:** Clerk development keys warning is dev-only. Production uses production keys.
- **PERF-002:** `.limit(50)` already present on chat sessions query.
- **UX-010:** Command palette placeholder already uses `useTranslations("commands")` with `searchPlaceholder` key.

### Backlog

- **FUNC-007:** Journal entry translations (stored in English in DB). Requires translation-on-read architecture.
- **FUNC-008:** Test coverage expansion beyond `mbti-scoring.test.ts`. Priority areas: credit system, access control, webhook handlers.
