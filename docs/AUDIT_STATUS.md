# Psychometric Audit – Implementation Status

Reference: `cursor-prompt-psychometric-tests.md` (audit criteria).

## Implemented

- **7-point Likert** – All psychometric tests (Big Five, Personality Type, Enneagram, Work Style) use 7-point Likert; Personality Type converted from forced-choice to Likert-7.
- **Response time tracking** – Per-item timing recorded on the questions page; `responseTimeMs` sent with each answer and stored in `item_responses.response_time_ms`.
- **Response time flagging** – Validation recompute computes `pct_fast_responses` (<500ms) and `pct_slow_responses` (>60s) per assessment and stores them in `validation_metrics`.
- **Validation pipeline** – Cronbach’s alpha and item-total min per scale; **test-retest** (Pearson r for users with 2 attempts 2–4 weeks apart); **convergent/discriminant** (cross-assessment correlations, e.g. Big Five E ↔ type E/I, Enneagram 8 ↔ DISC D). “Recompute from item data” on `/validation` runs all of the above; metrics stored in `validation_metrics`.
- **Attention checks** – 2 per assessment; `is_valid` set when 2+ fail; attention dimension excluded from scoring where applicable.
- **Schema** – `psychometric_audit_schema.sql` and `guest_test_schema.sql` provide `item_responses` (with `response_time_ms`, `presented_order`), `scale_scores`, `type_assignments`, `validation_metrics`, `esoteric_profiles`, birth data columns, `is_valid`/`startedAt` on test results.
- **AI Mirror** – System prompt includes all completed assessments (Big Five, type, Enneagram, Work Style, Life Path, Human Design, Chinese Zodiac, Mayan, Western/Vedic charts); framework differentiation and guardrails in prompts.
- **Guest flow** – Test without account; pay then account creation; navigation gated until sign-up/purchase.
- **Personality Type** – No “MBTI” in user-facing copy; type clarity index; character names (e.g. INTJ → “The Mastermind”); continuous scores shown with type.
- **Work Style** – Titled “Work Style Assessment”; workplace framing; circular/blend display.

## Deferred / Not yet done

- **Item counts** – Audit targets: Big Five 44–60 (currently 30+2 AC), Enneagram 108 (currently ~63), Work Style 48 (currently 24). Increasing would require adding and keying new items.
- **CFA** – Confirmatory Factor Analysis (CFI, RMSEA, SRMR) not computed in-app; requires external stats tool (e.g. R lavaan, Python sem) and N≥500. Documented in validation code comments.
- **Profile-based conversation starters** – Mirror chat context is assembled; specific “conversation starters” UI referencing user results to be verified or added.
- **PART 2 (Esoteric)** – Full audit in `docs/ESOTERIC_AUDIT_PART2.md`: birth data (not yet single-source), unknown time (defaults to noon; should omit Rising/HD when unknown), no ephemeris (fixed cutoffs), no timezone; Life Path and Mayan Tzolkin compliant; Western/Vedic/Human Design/Chinese Zodiac have gaps and recommended fixes.
- **PART 6 (Frontend UX)** – Summary only in `docs/PART6_FRONTEND_UX_SUMMARY.md`: results after completion, continuous scores, hedged esoteric copy, unified profile, character illustrations, Mirror from results; no code changes in this pass.

## How to run validation

1. Ensure `psychometric_audit_schema.sql` and `guest_test_schema.sql` have been run in Supabase.
2. After at least ~100 completions per assessment, open `/validation` and click “Recompute from item data”.
3. Check Cronbach α ≥ 0.70, item_total_min (flag r &lt; 0.30), test_retest_r (target ≥ 0.70), and convergent r_* metrics.
