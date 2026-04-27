# North Shore Removals — Architectural Decisions Log

> Records every significant design and technical decision in the project.
> Decisions D01–D21 are inherited from upstream NORTH-SHORE-PROJECTS / NORTH-SHORE-PAINTING / NORTH-SHORE-TILING repos. The previously-recorded D22 ("cleaning pivot") was overwritten — the pivot did not actually take place; this site has always shipped as North Shore Removals.
>
> Format: ID, decision, rationale, trade-offs.

---

## D23: Pricing update — 2-man rate increased; per-team minimum hour notes added

**Decision:** Raised the 2-man crew rate from $170/$180 to $180/$190 (weekday/weekend). Held 3-man at $240/$250 and 4-man at $310/$320. Replaced the single "Minimum 3 hours" note with per-row minimums shown directly under each crew name: 3 hour minimum for 2-man and 3-man, **4 hour minimum for 4-man** (raised from 3 hr).

**What changed in code:**
- `index.html` — pricing table rebuilt with per-row minimum sub-lines under the crew label; section subtitle and footer note dropped the universal "Minimum 3 hours" claim; meta description updated to "from $180/hr".
- `index.html`, `contact.html`, all 17 suburb pages — FAQ "Rates start at $170/hr" → "$180/hr".

**Rationale:**
- 2-man rate raise reflects revised pricing for current operating costs.
- 4-man minimum bumped to 4 hr because larger crews are unprofitable on shorter bookings — explicitly per-row to avoid surprise on the day.
- Minimum is shown under the crew name (column 1) rather than duplicated in both rate cells, keeping the price column clean.

**Trade-offs:**
- Per-row minimums make the table denser; users now have to read the sub-line. Accepted because the previous footer-only minimum was easy to miss and didn't differentiate by crew size.

---

## D24: Hero rebranded — "North Shore Removals" replaces "Sydney Removalists"

**Decision:** Hero `section-label` on `index.html` changed from "Sydney Removalists — Enabling Your Next Move" to "North Shore Removals — Enabling Your Next Move".

**What changed in code:**
- `index.html` line 167 only.

**Rationale:**
- Brand consistency: the rest of the page says "North Shore Removals"; the hero label was the odd one out.
- Hero is the highest-impact branding surface; mismatch between hero label and brand name dilutes recognition.

**Trade-offs:**
- The page `<title>`, `og:title`, and `twitter:title` still begin with "Sydney Removalists — Enabling Your Next Move | North Shore Removals". Left unchanged because the Round 2 brief specified hero only and SEO/social titles already include the brand. Revisit if title consolidation is desired.

---

## D25: "On-Time Guarantee" removed from What's Included

**Decision:** Removed the `<li>On-time guarantee</li>` bullet from the "What's Included" sidebar on `index.html`. Other five bullets (Free in-home quote, Furniture blankets & protection, Disassembly & reassembly, Fully insured team, No hidden fees) retained.

**What changed in code:**
- `index.html` — single `<li>` removed; sidebar still has 5 bullets.

**Rationale:**
- Operator no longer wants to make an explicit on-time guarantee in the marketing copy.

**Trade-offs:**
- A prose mention remains in `index.html:209` ("Every move comes with our on-time guarantee and full insurance coverage."). Left in place because the Round 2 brief specified bullet/line item only. If the guarantee wording should be removed entirely, that prose line should be revisited.

---

## D26: Client-side Sydney timestamp injected to fix UTC display in Formspree submissions

**Decision:** Every form now sends a `submitted_sydney_time` field carrying the user's submission time formatted in `Australia/Sydney`, so the email notification and Formspree dashboard show local time rather than UTC.

**Implementation:**
- Added `<input type="hidden" name="submitted_sydney_time" id="sydney_time">` to all 20 forms (index, contact, landing/removals, 17 suburb pages).
- Population logic added to the **shared** `js/form-validation.js`, inside the existing submit handler immediately before the JSON gather loop. The handler already calls `e.preventDefault()` and submits via `fetch()` to Formspree, so populating the hidden value before the gather inserts it into the JSON payload automatically — no second listener required.
- Formatted via `toLocaleString('en-AU', { timeZone: 'Australia/Sydney', day, month: 'short', year, hour, minute, hour12 })` and suffixed with literal " AEDT".

**Rationale:**
- Formspree timestamps in UTC; the operator was reading the wrong time on every submission.
- Integrating into the shared submit handler beats 20 inline scripts (don't repeat yourself) and beats a separate `submit` listener (would be fragile against the existing `preventDefault()`-based fetch flow).

**Trade-offs:**
- The "AEDT" label is hardcoded and will be incorrect during AEST (~Apr–Oct). Acceptable as a first-pass fix; flagged in `progress.md` for follow-up. A correct version would derive the offset/abbreviation from the Date object.
- Field is computed at submit time, not at page load, so back-dating is impossible if the page sat open for hours — desirable behaviour.

---

## D27: Stale "cleaning pivot" docs overwritten

**Decision:** Rewrote `CLAUDE.md`, `progress.md`, and `decisions.md` to describe the actual project state (a removals website hosted on Bluehost via Git Version Control). Previous content described a hypothetical fork-to-cleaning pivot that never landed.

**What changed:**
- `CLAUDE.md` now documents: project facts, hosting/deploy flow (Bluehost cPanel Git Version Control), forms (Formspree mojkgkpn + shared `form-validation.js`), suburb naming, design tokens, pricing snapshot, file-tracking protocol with PowerShell `;` reminder.
- `progress.md` reset to a fresh log starting today (2026-04-27) with a session entry covering Round 2 edits.
- `decisions.md` (this file) keeps the inherited D01–D21 reference, drops the spurious D22, and starts new entries at D23.

**Rationale:**
- Stale docs were actively misleading: the audit at the start of this session flagged that all three files described a different business than the actual site.
- Better to rewrite once with current truth than patch around the old wording.

**Trade-offs:**
- D22 content was deleted rather than archived, losing a (fictional) historical record. Acceptable because the entry described work that never happened; preserving it would just continue to mislead future sessions.

---

## D28: Meta titles aligned to "North Shore Removals" branding

**Decision:** Replaced "Sydney Removalists" with "North Shore Removals" in `index.html` `<title>`, `og:title`, and `twitter:title`. Brand suffix and separator preserved per the Round 2.5 brief — the resulting strings are "North Shore Removals — Enabling Your Next Move | North Shore Removals".

**What changed in code:**
- `index.html` lines 9, 16, 25 only.

**Rationale:**
- Closes the inconsistency flagged in the Round 2 report: hero label was already "North Shore Removals" but the SEO title block still led with "Sydney Removalists".
- Keeps brand-first messaging in social previews and search snippets.

**Trade-offs:**
- The brand now appears twice in each title (once as the lead, once as the suffix). Operator chose this explicitly via the brief ("preserve the rest of each title string"). If duplication harms SEO display, the suffix can be dropped in a separate pass.
- `northshore-removals.html` still has `<title>North Shore Removals | Sydney Removalists</title>` (a redirect page with "Sydney Removalists" as a descriptive SEO tail). Not changed because applying the same substitution produces "North Shore Removals | North Shore Removals" — pure redundancy on a low-traffic redirect. Logged in `progress.md` Known Issues.

---

## D29: "On-time guarantee" removed from all prose

**Decision:** Round 2 removed only the bullet from "What's Included". Round 2.5 also rewrites the prose mention in the SERVICE DESCRIPTION section so the on-time guarantee is gone from the site entirely. Sentence "Every move comes with our on-time guarantee and full insurance coverage." → "Every move comes with full insurance coverage."

**What changed in code:**
- `index.html` line 209 only. Codebase grep for "on-time guarantee" / "on time guarantee" returns zero matches after this change.

**Rationale:**
- Operator no longer wants to make any on-time guarantee in marketing copy. Bullet alone wasn't enough — the prose paragraph still made the same promise.
- Sentence rewrite preserves grammar and reads cleanly without the dropped clause.

**Trade-offs:**
- None of substance. Adjacent prose still says "your belongings arrive safely and on time" — descriptive of operations, not a guarantee, so left untouched.

---

## D30: Sydney timezone abbreviation derived dynamically (AEDT vs AEST)

**Decision:** `js/form-validation.js` no longer hardcodes " AEDT" on the `submitted_sydney_time` field. New helper `getSydneyTimestamp()` returns the formatted Sydney local time with the correct abbreviation — AEDT during DST (October–April), AEST otherwise.

**Implementation:**
- Helper added near the other utility helpers (`capitaliseWords`, `stripNonDigits`).
- Submit handler now calls `sydneyHidden.value = getSydneyTimestamp();` instead of a 9-line inline literal.
- Offset detection uses a diff of two `toLocaleString` parses (Sydney-formatted vs UTC-formatted, both TZ-naive strings), which yields Sydney's offset from UTC in minutes east. 660 = AEDT, 600 = AEST.

**Rationale:**
- Round 2 left a known issue: the AEDT label was wrong roughly half the year (during AEST, ~April–October).
- The Round 2.5 brief proposed a `getTimezoneOffset()`-based detection. That works only when the browser is itself in Sydney; it returns the *browser's* local offset, not Sydney's. Because the form is a public website that anyone can fill out from any timezone, the implementation here uses a browser-TZ-independent technique (diff of two TZ-naive parses) so the abbreviation stays correct regardless of where the user is.

**Trade-offs:**
- Minor extra work per submission (two `toLocaleString` calls and a Date parse). Negligible — runs once on submit, not on every keystroke.
- Spelt-out comment in code explains why a single `getTimezoneOffset()` call would be wrong. Kept short so future readers don't re-introduce the simpler-looking bug.

**Mental verification:** for 2026-04-27 in Sydney (DST ended 2026-04-05) the helper returns `AEST` — correct.
