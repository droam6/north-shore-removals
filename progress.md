# North Shore Removals — Progress Tracker

> Last updated: 2026-04-27
> This file logs work session-by-session. Older "cleaning pivot" notes were stale and have been removed (the live site has always been the removals service).

---

## Site state — current
- Live at https://northshoreremovals.com via Bluehost Git Version Control.
- 20 enquiry forms wired to Formspree `mojkgkpn` (index, contact, landing/removals, 17 suburb pages).
- Shared form logic in `js/form-validation.js` (validation, honeypot, JSON submit).
- 17 suburb pages under `/suburbs/removals-*.html`.
- Pricing: 2-man $180/$190 (3hr min), 3-man $240/$250 (3hr min), 4-man $310/$320 (4hr min), extra man +$60/hr. + GST.

---

## Session log

### 2026-04-27 — Round 2.5 cleanup
**Files modified:**
- `index.html` — `<title>`, `og:title`, `twitter:title` "Sydney Removalists" → "North Shore Removals" (3 lines, brand suffix preserved); prose mention "Every move comes with our on-time guarantee and full insurance coverage." rewritten to "Every move comes with full insurance coverage." (line 209).
- `js/form-validation.js` — added `getSydneyTimestamp()` helper that derives the AEDT/AEST suffix dynamically from Sydney's actual UTC offset (computed by diffing two `toLocaleString` parses, so it works regardless of the user's browser timezone). Submit handler now calls the helper instead of hardcoding " AEDT".
- `.gitignore` — added `round*-*.txt` pattern under a "Local scratch files for Claude Code prompts" comment.
- `round1-audit.txt` — deleted from working tree (was untracked).
- `round25-cleanup.txt` — retained on disk per Round 2.5 instructions; covered by new ignore rule.
- `progress.md`, `decisions.md` — this entry / D28–D30 added.

**Verification:**
- `git check-ignore round25-cleanup.txt` confirms `.gitignore:13:round*-*.txt` matches.
- No "Sydney Removalists" remaining in any HTML page's title/og/twitter (one tail-position occurrence remains in `northshore-removals.html` — see decisions D28 / Known issues).
- Mental DST test: today is 2026-04-27, Sydney DST ended 2026-04-05, helper returns `AEST`. Sanity-check passes.

**Not committed yet** — awaiting local preview.

---

### 2026-04-27 — Round 2 content edits
**Files modified:**
- `index.html` — meta description ($170 → $180); hero label ("Sydney Removalists" → "North Shore Removals"); removed "On-time guarantee" bullet from What's Included; pricing subtitle (dropped universal "Minimum 3 hours" claim); pricing table (2-man rate $170/$180 → $180/$190; per-row minimum sub-lines added: 3hr for 2-/3-man, **4hr for 4-man — changed from 3hr**); pricing footer note (dropped "Minimum 3 hours"); FAQ price ($170 → $180); added `submitted_sydney_time` hidden input to enquiry form.
- `contact.html` — FAQ price ($170 → $180, dropped "Minimum 3 hours"); added `submitted_sydney_time` hidden input.
- `landing/removals.html` — added `submitted_sydney_time` hidden input.
- `suburbs/removals-*.html` (×17) — FAQ price ($170 → $180); added `submitted_sydney_time` hidden input.
- `js/form-validation.js` — populator added inside the existing submit handler that sets `#sydney_time` to Sydney-formatted local time + " AEDT" before the JSON gather.
- `CLAUDE.md`, `progress.md`, `decisions.md` — rewritten to reflect actual site state (the previous "cleaning pivot" wording was wrong).

**Decisions logged:** D23, D24, D25, D26, D27 (see `decisions.md`).

**Not committed yet** — awaiting local preview.

---

## Known issues / housekeeping
| Issue | Severity | Notes |
|-------|----------|-------|
| ABN `96 695 301 341` may be placeholder | Medium | Confirm with operator before launch material |
| Aggregate rating "5.0 / 183 reviews" hardcoded in JSON-LD | Medium | Replace with real data or remove `aggregateRating` |
| `--color-gold` CSS variable holds a red value (`#E63946`) | Low | Misleading name; rename to `--color-red` in a separate pass |
| `js/main.js` is unreferenced legacy code | Low | Targets selectors (`#header`, `.mobile-toggle`) that don't exist in current markup; safe to delete |
| `form-validation.js` always shows the success state on fetch failure | Low | Intentional fallback per existing code; flag if Formspree errors need surfacing |
| `northshore-removals.html` `<title>` ends "...| Sydney Removalists" | Low | SEO tail on a redirect page; left untouched in Round 2.5 because replacing yields "North Shore Removals \| North Shore Removals" |

## High-priority pending
- Configure GTM container
- Install Meta Pixel on landing page
- Submit sitemap to Google Search Console
- Real Google Map embed on contact page
- Create `privacy.html` and `terms.html`

## Medium-priority
- Minify `form-validation.js` for production
- Custom 404 page
- Accessibility audit (WAVE / axe)
