# Conversion funnel: free test → full product

Quick reference for the in-app flow and how it can drive sign-up and upgrade.

## Current flow (post–test results)

After someone finishes a test they land on **Test results** with:

1. **Back to Store** — browse more assessments (now fixed to stay in-app; uses locale-aware Link).
2. **Talk to the Mirror** (primary CTA) — opens **Chat** so they can ask the AI about their results.
3. **Retake Test** — same assessment again.
4. **Go to Mirror** — **Mirror** dashboard (overview, widgets, journal, etc.).

Plus **Explore more tests** and **Premium upgrade** (per test or bundle).

## Suggested funnel logic

- **Aha moment:** Chat (“Talk to the Mirror”) — they see their results reflected in conversation and get value.
- **Habit / home base:** Mirror dashboard (“Go to Mirror”) — one place for all their data and the AI.
- **Deeper commitment:** Store — more free tests, then **bundle / premium** for full product.

So the funnel is: **Results → Talk to the Mirror → Go to Mirror → (more tests / upgrade in Store)**.

## CTA order and copy (tuning)

- **Primary:** “Talk to the Mirror” — already the main button; reinforces that the product is the AI + their data.
- **Secondary:** “Go to Mirror” — natural next step after one chat (dashboard, history, trends).
- **Tertiary:** “Back to Store” — for “what else can I do?” and eventual upgrade.

Optional tweaks:

- Add a one-line under “Talk to the Mirror” like “Ask the AI about your results” to clarify value.
- On Mirror, surface a clear “Upgrade” or “Get all assessments” that goes to Store or pricing.
- For guests: after a free test, prompt sign-up to save results and unlock Chat/Mirror (if that’s the desired gate).

## Where these links live

- **Results page:** `app/[locale]/(protected)/test/[testId]/results/[attemptId]/page.tsx` — Back to Store, Talk to the Mirror, Retake, Go to Mirror.
- **Store:** NavRail “Store”, plus “View all assessments” in ExploreMoreTests.
- All internal links in that flow use `@/i18n/navigation` Link so locale is preserved and “Back to Store” stays in-app (no redirect to login).
