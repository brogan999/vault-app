# PART 2: Esoteric & Astrology Frameworks – Audit Report

Reference: audit criteria (birth data, ephemeris, timezone, per-framework rules).

---

## General checks

### Birth data collection

- **Settings (users table):** Birth data is collected in **Settings**: date, time (with “Unknown” checkbox), and location (name + lat/lng via geocoding). Stored in `users.birth_date`, `birth_time`, `birth_location_lat/lng/name`. **Gap:** Esoteric *tests* (birth-chart, vedic, human-design) each collect their own date/time/city/country in the test flow; they do **not** reuse `users.birth_*`. So birth data is not “collected once and reused” across frameworks. **Recommendation:** Prefer loading `users.birth_*` when available and only prompt in-test when missing.

### Birth time “unknown” handling

- **Settings:** When the user checks “I don’t know my birth time”, the app stores `birth_time = "unknown"`. Good.
- **In-test:** Birth-chart, vedic, and human-design use a text input for time; if left empty they default to `"12:00"` (e.g. `getHourOffset` → 12, `getTypeIndex` → 12). So **unknown time is not handled**: calculations that require time (Rising, Houses, Human Design, hourly Chinese Zodiac) are not omitted with an explanation; they silently use noon. **Recommendation:** When time is missing or “unknown”, do not compute Rising/Ascendant, Houses, Human Design type, or inner/secret Chinese Zodiac; show a clear message that these need birth time.

### Ephemeris

- **Current:** Western and Vedic sun-sign logic uses **fixed date-range cutoffs** (e.g. “if month === 3 && day <= 20 → Pisces”) in `birth-chart.ts` and `vedic.ts`. The audit requires **Swiss Ephemeris or equivalent** because sign boundaries shift year to year. **Gap:** No ephemeris library is used; all sign boundaries are hardcoded. **Recommendation:** Integrate Swiss Ephemeris (or equivalent) for Sun/Moon/planetary positions and replace fixed cutoffs.

### Timezone handling

- **Current:** Birth location is stored as lat/lng (and name) in Settings. The test scoring code does **not** convert birth location to IANA timezone or apply historical DST. Time is taken as entered (e.g. “14:30”) with no timezone. **Gap:** No timezone or DST handling. **Recommendation:** Use IANA/Olson data (e.g. via a timezone-from-lat-lng service or library) and convert birth moment to UTC for ephemeris input.

---

## Per-framework audit

### 1. Western astrology (birth-chart)

| Criterion | Status | Notes |
|----------|--------|------|
| Sun, Moon, Rising from ephemeris | ❌ | Sun from fixed date cutoffs; Moon/Rising from offset approximations, not ephemeris. |
| Full planetary positions (Sun–Pluto) in signs and houses | ❌ | Only Sun, Moon, Rising, Mercury, Venus, Mars as sign names; no degrees, no houses. |
| Tropical zodiac | ✅ | Tropical sign names used. |
| Placidus / house options | ❌ | No house system; no houses. |
| Aspects (conjunction, sextile, etc.) | ❌ | Not calculated. |
| Ascendant omitted when time unknown | ❌ | Time defaults to 12:00; Rising is still shown. |

**Summary:** Simplified “sun sign plus offsets”; no ephemeris, no houses, no aspects. Ascendant should be omitted when birth time is unknown.

---

### 2. Vedic astrology (vedic)

| Criterion | Status | Notes |
|----------|--------|------|
| Sidereal zodiac, Lahiri ayanamsa | ❌ | Uses same Western tropical sun-sign cutoffs; no ayanamsa. |
| Whole Sign house system | ❌ | No houses. |
| Moon sign (Rashi) and Nakshatra prominent | ❌ | Moon is an offset from Sun; no nakshatra. |
| Nakshatra Pada | ❌ | Not calculated. |
| Vimshottari Dasha from Moon nakshatra | ❌ | Not calculated. |
| UI explains why Vedic differs from Western | ⚠️ | Copy says “Vedic uses the sidereal zodiac, so signs can differ” but calculation is still tropical. |

**Summary:** Uses Western-style sign logic; no sidereal, no ayanamsa, no nakshatra/dasha. Implementation does not match the intended Vedic model.

---

### 3. Numerology (Life Path)

| Criterion | Status | Notes |
|----------|--------|------|
| Reduce month, day, year **separately** then sum and reduce | ✅ | `getLifePathFromDate` reduces month, day, year separately; then sums and reduces. |
| Master numbers 11, 22, 33 preserved | ✅ | `reduceToDigit` and final sum logic preserve 11, 22, 33. |
| Expression / Soul Urge / Personality from name | ➖ | Not implemented; audit only “if calculated”. |

**Summary:** Life Path implementation is correct. Name-based numbers are out of scope for current build.

---

### 4. Human Design

| Criterion | Status | Notes |
|----------|--------|------|
| Two charts (Personality + Design ~88° before birth) | ❌ | Single simplified “type” from date+hour hash; no Design chart. |
| 88° ecliptic offset (not “88 days”) | ❌ | No astronomical Design calculation. |
| Planetary positions → 64 Gates (I Ching) | ❌ | Not implemented. |
| Type from defined/undefined Centers | ❌ | Type is a deterministic hash (seed % 5), not bodygraph. |
| Authority, Profile, Strategy from chart | ❌ | Strategy is a static map from type; authority hardcoded “Emotional”. |
| Birth time required; no fallback if unknown | ❌ | Time defaults to 12:00 when missing. |

**Summary:** Placeholder only (type from date+hour, no real chart). When time is unknown, results should be omitted or clearly labeled as “needs birth time”.

---

### 5. Chinese Zodiac

| Criterion | Status | Notes |
|----------|--------|------|
| **Lunar** calendar; Jan–Feb boundary = Chinese New Year | ✅ | `getLunarYearFromDate` uses `CHINESE_NEW_YEAR_APPROX` for year boundary. |
| Element (Wood, Fire, Earth, Metal, Water) from 60-year cycle | ❌ | Only 12-year animal; element not exposed. |
| Yin/Yang assignment | ❌ | Not implemented. |
| Inner animal (month), secret animal (hour) if time available | ❌ | Not implemented. |

**Summary:** Lunar year and animal are correct; element, yin/yang, and time-based animals are missing.

---

### 6. Mayan astrology (Tzolkin)

| Criterion | Status | Notes |
|----------|--------|------|
| GMT correlation 584283 | ✅ | `GMT_CORRELATION = 584283` used. |
| JDN − 584283; Day Sign = result mod 20, Tone = (result mod 13) + 1 | ✅ | `getTzolkinFromDate` implements this. |
| 20 day signs and 13 tones correctly named | ✅ | `TZOLKIN_SIGNS` and tone 1–13. |
| Galactic Signature (Tone + Day Sign) displayed | ✅ | `typeLabel` / `typeCode` show signature. |

**Summary:** Tzolkin implementation matches the audit criteria.

---

## Recommended fixes (priority)

1. **Birth data:** Use `users.birth_*` when present; collect in-test only when missing; pass “unknown” through so time-dependent calculations can be skipped.
2. **Unknown time:** ✅ **Implemented.** When time is missing or "unknown": Western and Vedic omit Rising/Ascendant with a clear message; Human Design shows "Birth time required" and does not compute type.
3. **Ephemeris:** Integrate Swiss Ephemeris (or equivalent) for Western (and later Vedic) positions; remove fixed date-range sun-sign tables.
4. **Timezone:** Resolve birth place (lat/lng or name) to IANA timezone and convert birth time to UTC for ephemeris.
5. **Vedic:** Add sidereal/Lahiri ayanamsa and, if desired, nakshatra/dasha in a later phase.
6. **Human Design:** Either integrate a proper bodygraph engine (two charts, 88° offset, centers) or clearly label current output as “simplified / for fun” and hide or limit it when time is unknown.
7. **Chinese Zodiac:** ✅ **Implemented.** Element and Yin/Yang from the 60-year cycle are computed and displayed.

**Implementation status (as of last update):** Items 1 (birth data pre-fill), 2 (unknown time handling), 6 (HD omit when time unknown), and 7 (Chinese Zodiac element/yin-yang) are implemented in code. Items 3–5 (ephemeris, timezone, Vedic sidereal) remain recommended for a later phase.
