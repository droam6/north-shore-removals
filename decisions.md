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

---

## D31: Nav restructured — Services dropdown replaced with Move Types + Service Areas (mega-menu by council)

**Decision:** The single "Services" dropdown (Removals/Tiling/Painting/Cleaning) is replaced on every removals page by two new dropdowns: a single-column "Move Types" listing 4 service categories, and a 4-column mega-menu "Service Areas" grouped by local council. Top-level items now read: Home | Move Types ▾ | Service Areas ▾ | Pricing | Contact | [CTA]. Mobile uses a 2-level collapsible accordion mirroring the same hierarchy.

**What changed in code:**
- `css/styles.css` gained a Round-3 block for `.dropdown-mega` (4-col grid, accent border, hover/focus reveal), `.dropdown-mega-heading` (gold accent, bold, bottom-bordered, clickable to council page), and the mobile accordion (`.mobile-menu-accordion`, `.mobile-menu-accordion-panel`, nested variants, council-link styling).
- The new nav block is byte-identical across `index.html`, `contact.html`, and all 17 suburb pages. It uses absolute paths (`/`-rooted) so a single block works at every directory depth — no per-directory variants. The CTA href stays page-relative `#enquiry` so it scrolls to the local form on each page.
- The accordion toggle JS (≈10 lines) is scoped immediately after the mobile menu's closing `</div>` and is part of the propagated block — no dependency on the existing inline JS at the bottom of each page, no separate shared file.
- Sister-services items (Tiling/Painting/Cleaning) are no longer in the nav. Footer links remain unchanged.

**Rationale:**
- The previous "Services" dropdown was inherited from the multi-service parent site and didn't match a removals-only business. Move Types organises offerings by what the user actually wants ("apartment move", "single piano"), and Service Areas organises by where they live (council > suburb), which is how local-search users navigate.
- Mega-menu pattern (modelled after hollowayremovals.com.au and twomen.com.au) keeps 17 suburbs visible without a long list, and surfaces councils as their own landing pages — useful for council-name-based search queries.

**Trade-offs:**
- Byte-identical nav forced a switch from relative paths (`../index.html`) to absolute paths (`/`-rooted) site-wide. This works fine in production and via `npx serve .` for previews, but breaks `file://` previews — call out if local-file preview is ever needed.
- `landing/removals.html` (Meta Ads landing page) is intentionally NOT updated; adding a nav to a conversion-focused landing page would dilute its purpose. The brief listed it in Task 6 — flagged as ambiguity.

---

## D32: 4 Move Type pages created — Home, Office, Apartment, Furniture & Single Item

**Decision:** Created `move-types/home-moves.html`, `move-types/office-moves.html`, `move-types/apartment-moves.html`, `move-types/furniture-single-item.html`. Each has unique 300–400-word content tailored to the move type, unique meta + JSON-LD (`Residential Moving Service`, `Office Moving Service`, `Apartment Moving Service`, `Furniture Moving Service`), unique hero tagline and FAQ items. Forms submit with hidden `source=movetype-{slug}` and `service=removals`.

**Implementation:**
- `home-moves.html` was written by hand to lock down the template structure (head, body, nav, hero, content, service-areas grid, FAQ, CTA, contact form, footer, scripts). The other three were generated in a single PowerShell pass that read the template and applied scoped string substitutions for the unique parts. The nav, footer, and scripts therefore stay byte-identical across all four.
- Each page links to all 17 suburbs via the service-areas grid, cross-links to the other three move types in the closing paragraph, and links to `/#pricing` from the body. Form is page-local (`id="enquiry"`) so the CTA `#enquiry` anchor works correctly.

**Rationale:**
- These pages feed the new "Move Types" dropdown and create indexable landing surfaces for high-intent searches like "office removalists Sydney North Shore" or "piano movers Chatswood". Each page's unique content + JSON-LD `serviceType` is what differentiates them in search.

**Trade-offs:**
- The bulk of each page (nav + footer + scripts ≈ 60% of bytes) is shared. Without a templating system this means future nav/footer changes require touching all four (plus the 19 existing pages). A future refactor decision (D??, deferred) could extract the nav into a JS-injected partial.

---

## D33: 4 council placeholder pages created (noindexed)

**Decision:** Created `councils/council-1.html` through `councils/council-4.html` as minimal placeholder pages — H1, subhead, brief paragraph, suburb list (matching the dropdown groupings), and a working enquiry form. Each carries `<meta name="robots" content="noindex">` and the form sends hidden `source=council-{N}`. Pages are listed in `sitemap.xml` at priority 0.3 so Google discovers them once content lands but does not currently index them.

**Why noindex over omit:**
- Indexed too early, "Council 1 Service Area" with placeholder copy would compete with the suburb pages for the same queries and could be perceived as thin content (a Google quality penalty risk). Noindex blocks indexing while keeping the URL discoverable for the next round when content arrives. The sitemap entry tells Google the page exists; the robots meta tells it not to surface it yet.
- An alternative would be to omit them from the sitemap until content lands. We chose to include them so internal linking from the mega-menu doesn't generate "soft 404" suspicion — the page exists, it's just hidden from results until ready.

**Trade-offs:**
- Placeholder pages still cost crawl budget. For a 28-page site this is negligible.

---

## D34: Suburb-to-council groupings are best-guess geographic clusters; subject to client confirmation

**Decision:** The 17 suburbs are grouped into 4 placeholder council buckets in the mega-menu and in `councils/council-{N}.html`:
- Council 1 (4): Chatswood, Willoughby, Artarmon, Crows Nest
- Council 2 (8): Killara, Gordon, Pymble, Turramurra, Lindfield, Roseville, St Ives, Wahroonga
- Council 3 (3): Lane Cove, North Sydney, Neutral Bay
- Council 4 (2): Mosman, Cremorne

**Rationale (best-guess geographic logic, not authoritative LGAs):**
- Cluster 1 corresponds roughly to **Willoughby City Council** territory (Chatswood, Willoughby, Artarmon, Crows Nest are all WCC).
- Cluster 2 corresponds roughly to **Ku-ring-gai Council** (Killara, Gordon, Pymble, Turramurra, Lindfield, Roseville, St Ives, Wahroonga are all KMC).
- Cluster 3 mixes **Lane Cove Council** (Lane Cove) and **North Sydney Council** (North Sydney, Neutral Bay) — these are two separate LGAs sharing a column for visual balance only.
- Cluster 4 corresponds to **Mosman Council** (Mosman, Cremorne — Cremorne sits in Mosman LGA, despite postal address sometimes reading "Cremorne, NSW 2090").

**Trade-offs:**
- Cluster 3 conflates two genuine councils; if the client wants strict LGA accuracy, Lane Cove should split off (yielding 5 councils, breaking the 4-column grid). Also, "Crows Nest" technically straddles Willoughby and North Sydney council boundaries — placed in Council 1 (WCC) as the dominant association, but client may correct.
- Council names ("Council 1", etc.) are deliberately placeholder until the client confirms the desired grouping and naming.

**How to apply:** Once client confirms council names + groupings, rename `councils/council-{N}.html` → `councils/{actual-council-slug}.html`, update mega-menu hrefs in the propagated nav block (one PowerShell pass), update the sitemap, and replace placeholder content with real council pages. Remove `noindex` at that point.

---

## D35: Dropdown / mega-menu colour scheme realigned to dark navy

**Decision:** The Service Areas mega-menu (`.dropdown-mega-menu`) was rendering on a cream background, which broke the brand's dark-navy nav consistency. Both desktop dropdowns now render on `var(--color-navy)` with cream/white-alpha text and gold accents. The Move Types dropdown (`.dropdown-menu`) was already navy from the original Services dropdown CSS but lacked the gold accent border and drop shadow that the mega-menu had, so it has been visually aligned.

**What changed in code:**
- `.dropdown-menu` — added `border-top: 3px solid var(--color-gold)`, `box-shadow: 0 12px 40px rgba(0,0,0,0.4)`, increased item padding (`0.75rem 1.25rem`), boosted font-size (`0.875rem` → `0.92rem`) and link colour opacity (`rgba(250,250,248,0.7)` → `0.85`), softened hover bg.
- `.dropdown-mega-menu` — `background` flipped from `var(--color-cream)` to `var(--color-navy)`. Stronger `box-shadow`, more padding (`1.75rem 2rem`).
- `.dropdown-mega-heading` — kept gold (`var(--color-gold) !important`), border-bottom switched from dark-on-light to `rgba(250,250,248,0.12)` (light-on-dark), padding/margin tightened, font-size +0.03rem.
- `.dropdown-mega-heading:hover` — was gold-dark, now `var(--color-gold-light)` so the hover reads brighter against navy.
- `.dropdown-mega-column > a:not(.dropdown-mega-heading)` — colour switched from `var(--color-navy)` to `rgba(250,250,248,0.78)` (cream-alpha, readable against navy). Hover stays `var(--color-gold)`.
- Column row gap raised from `0.3rem` to `0.5rem` so the suburb list breathes on dark.

**Rationale:**
- The cream mega-menu was a holdover from the original CSS; on a dark-navy nav it created an awkward bright-card-floating-from-dark-bar effect.
- All new colours reference variables (`--color-gold`, `--color-gold-light`, `--color-navy`) so when Round 4 retunes the palette, the menus track automatically.

**Trade-offs:**
- Hover state on the council heading (`gold` → `gold-light` = `#FF5A67`) is bright on navy; A11y check should be done before launch (4.5:1 minimum contrast against `#1A1A2E`). The non-hover state (gold `#E63946` on navy) clears 4.5:1 by a comfortable margin.

---

## D36: Alternating white/cream section backgrounds on Move Type and Council pages

**Decision:** The 4 move-type and 4 council pages now alternate light-section backgrounds between pure white (`#ffffff`) and warm cream (`#F8F6F1`). The existing single off-white (`var(--color-warm-white)` = `#FDFCFA`) made long pages feel washed out. Existing pages (index, contact, suburbs) intentionally retain `.section-light` and are not touched.

**What changed in code:**
- `css/styles.css` — added two utility classes: `.section-white { background: #ffffff }` and `.section-warm { background: #F8F6F1 }`.
- All 4 move-type pages — `<section class="service-description section-light">` (lead) → `section-white`; `<section class="section section-light" id="areas">` (suburb grid) → `section-warm`; `<section class="faq-section" id="faq">` → `faq-section section-white`.
- All 4 council pages — intro `<section class="section section-light">` → `section-white`; suburb-list `<section class="section section-light" id="areas">` → `section-warm`.

**Rationale:**
- New utility classes were introduced rather than redefining `.section-light`, because `.section-light` is used heavily on existing pages (suburbs especially) and changing its value would unintentionally re-skin them. The brief explicitly asked existing pages NOT be re-skinned, so this is the safer path.
- The cream chosen (`#F8F6F1`) matches the brief's spec rather than the existing `--color-warm-white` (`#FDFCFA`) since the brief named a specific hex and called for a slightly stronger contrast against pure white.

**Trade-offs:**
- A separate cream tone now exists alongside `--color-warm-white`. If Round 4 wants the whole site to use one warm tone, these two should be reconciled. For now they're fine because they're applied to disjoint sets of pages.

---

## D37: Mobile menu font forced to inherit DM Sans, phone weight reduced

**Decision:** Mobile-menu text occasionally rendered in the system default sans (especially on `<button>` accordion toggles, which don't inherit `font-family` from `<body>` per the user-agent stylesheet). The phone-number link was also visually heavy at 600. Both fixed.

**What changed in code:**
- Added `.mobile-menu, .mobile-menu * { font-family: var(--font-body); }` so DM Sans is forced on every descendant including buttons and any future elements.
- Added `.mobile-menu-phone { font-weight: 400; }` *after* the existing `.mobile-menu-phone { font-weight: 600 }` rule (line 2996). Source-order resolves to 400. Could have edited the original line, but appending keeps the Round 3.5 changes localised in one block at the bottom of the file.

**Rationale:**
- `font-family: inherit` would have been simpler but is unreliable because some user-agent stylesheets explicitly set a font on `<button>`. Naming the variable directly is a stronger guarantee.
- 400 was chosen over 500 because the surrounding `.mobile-menu-link` (used for nav items in the menu) is unweighted (defaults to 400). 400 makes the phone visually equal to a regular nav link rather than promoted; the operator can promote it later via the design system if needed.

---

## D38: Emoji icon (📞) replaced with inline SVG in mobile menu

**Decision:** The mobile menu's phone-link icon was the literal Unicode `📞` (`&#x1F4DE;`) which renders as a coloured emoji glyph in most browsers. Replaced with an inline SVG (Feather-style phone outline) using `stroke="currentColor"` so it picks up whatever text colour the surrounding link uses (cream by default, gold on hover).

**What changed in code:**
- 27 HTML pages updated by PowerShell: the line `<a href="tel:+61451488266" class="mobile-menu-link mobile-menu-phone">&#x1F4DE; 0451 488 266</a>` became the same anchor wrapping the SVG followed by the number.
- The SVG is the same path the rest of the site uses for the floating mobile-call button (`a.mobile-call-btn`) — visual consistency.

**Rationale:**
- Coloured emoji glyphs (`📞`) render unpredictably across OS/browser combinations: Apple's emoji renders blue/grey, Windows renders flat black-and-orange, Android varies by version. None match the site's brand. An inline SVG with `currentColor` stroke is consistent across all browsers and inherits hover/active colour states from CSS.
- `stroke="currentColor"` ensures Round 4 colour palette changes flow through automatically.

**Trade-offs:**
- The mobile menu now has a small bit of inline SVG markup duplicated across 27 pages. Acceptable for a static site with no templating; if templating is introduced later, the SVG can be inlined once.

**Audit footnote:** A repo-wide grep for common emoji characters (`📞 ☎ 📧 📍 📷 ✉ ⏰ ✓ ★ ⭐ 🚚 📦`) and their hex entities returned zero matches after this change. The mobile menu's Instagram entry uses Font Awesome (`<i class="fab fa-instagram">`) which is an icon font, not an emoji — intentionally left as-is.

---

## D39: Mega-menu opening direction flipped left → right

**Decision:** The Service Areas mega-menu was anchored with `right: 0` against its `position: relative` parent, causing it to grow leftward from the trigger and overflow toward the page's left edge. Changed to `left: 0; right: auto;` so it now grows rightward from the trigger's left edge.

**What changed in code:**
- `css/styles.css` line ~3105: in `.dropdown-mega-menu`, `right: 0` → `left: 0` and `right: auto` added explicitly (defensive against later overrides).

**Rationale:**
- Right-anchoring made sense if the mega-menu were on the rightmost nav item — it isn't. "Service Areas" sits between "Move Types" and "Pricing", so the menu has plenty of room to grow rightward across the viewport.
- `max-width: calc(100vw - 2rem)` already in the rule clamps overflow if the trigger sits very close to the right edge on narrow desktops.

**Trade-offs:**
- On laptops where the nav is centred and the trigger sits near the page horizontal mid-point, the mega-menu's right edge may now land near the contact link or beyond. Safe due to max-width clamp, but worth eye-balling on real 13" / 14" screens during preview.

---

## D40: Instagram icon in mobile menu replaced with inline SVG

**Decision:** The mobile menu's Instagram entry used `<i class="fab fa-instagram">` from the Font Awesome 6.5.1 CDN. On some viewports (and intermittent network conditions where the FA CDN doesn't resolve fast enough before render) the glyph was rendering as an empty box. Replaced with an inline SVG (Feather-style camera-with-rounded-square outline) using `stroke="currentColor"`.

**What changed in code:**
- 27 pages updated: `<i class="fab fa-instagram"></i> Instagram` → SVG markup wrapping the glyph followed by the literal text `Instagram` (with surrounding `<a class="mobile-menu-link">` left intact). PowerShell ran the substitution in a single pass on the same set of pages that have the Round 3 mobile menu (index, contact, 17 suburbs, 4 move-types, 4 councils).
- Other Font Awesome usages were intentionally NOT touched — they appear in the navbar's instagram-link icon, the footer social icon, the contact-section social icon, suburb-grid map markers, contact-info phone/email/clock icons, the form trust note's lock icon, and several `fa-star` rating displays. Audit footnote below.

**Rationale:**
- Inline SVG eliminates the dependency on a third-party CDN for an icon that's part of the conversion path (mobile users tap-through to social as a trust signal). It's also already the same approach used for the phone icon in Round 3.5, so the mobile menu is now icon-font-free.

**Trade-offs:**
- The Instagram SVG glyph is a simplified Feather-style outline — not the official Instagram brand-coloured icon. Acceptable because (a) brand monochromy fits the rest of the site, (b) `currentColor` makes it follow link colour states, and (c) the official multi-colour Instagram glyph as inline SVG would balloon mobile-menu HTML and clash with the otherwise monochrome icon set.

**Audit footnote — Font Awesome usage across the repo (read-only, no replacements):**

| Icon class                | Count | Where used                                                             |
|---------------------------|------:|-------------------------------------------------------------------------|
| `fas fa-map-marker-alt`   | 255 | Suburb-card grid links across home, contact, all suburb/move-type pages |
| `fas fa-star`             | 131 | Rating star displays on every contact section + the new review cards    |
| `fab fa-instagram`        |  50 | Navbar Instagram link, footer social, contact-section social (mobile-menu uses SVG now) |
| `fas fa-phone`            |  30 | Contact info blocks                                                    |
| `fas fa-clock`            |  28 | Operating-hours displays                                                |
| `fas fa-check-circle`     |  28 | Form success messages                                                  |
| `fas fa-envelope`         |  27 | Email contact items                                                    |
| `fas fa-check`            |  22 | Feature checklists                                                     |
| `fas fa-truck`            |   1 | Landing page trust badge                                               |
| `fas fa-map-marked-alt`   |   1 | Contact-page Google Map placeholder                                    |
| `fas fa-lock`             |   1 | Form trust note                                                        |
| `fas fa-comments`         |   1 | Landing-page reviews trust badge                                       |
| **Total**                 | **575** | across 28 HTML files                                              |

The user can decide later whether to migrate any of these to inline SVG. None were touched in Round 3.6.

---

## D41: Google reviews bumped to 205+, 6 verified Birdeye reviews added in scrollable carousel

**Decision:** Replaced the homepage's previous "183+ Google Reviews" small badge with a dedicated reviews section featuring 6 verbatim reviews sourced from Birdeye (which syndicates the business's Google profile). All review-count references across the site (suburbs at "155", index/contact/landing/JSON-LD at "183") have been unified to "205+" for display and "205" for the JSON-LD `reviewCount` integer field.

**What changed in code:**
- `index.html` — new `<section id="reviews">` inserted between the FAQ and CTA banner. Section contains: maintenance comment (Birdeye source URL, last-updated date, "do not fabricate" warning), header "5.0 ★ 205+ Google Reviews", `.reviews-scroll-container` with 6 `<article class="review-card">` elements (5 stars + verbatim review text + reviewer name + time-ago + "via Google" attribution), left/right arrow nav buttons with disabled-state, link to "See all reviews on Google".
- `index.html` (additional) — inline IIFE added near the existing gallery/lightbox JS that wires the arrow buttons, computes scroll amount from card width, and toggles disabled state at scroll bounds.
- `css/styles.css` — appended `.reviews-section`, `.reviews-scroll-container` (scroll-snap-type: x mandatory + hidden scrollbar), `.reviews-scroll`, `.review-card` (navy bg, gold accent border-top, 320px / 360px+ widths, dropshadow), `.review-stars`/`.review-text`/`.review-meta` styling, `.reviews-nav` + `.reviews-arrow` (44px circular buttons with hover→gold inversion), `.reviews-link` (centered link with gold underline).
- All HTML files received the count substitutions — see Round 3.6 progress entry for full breakdown.

**Rationale:**
- The brief explicitly stipulated "DO NOT modify, edit, or improve the wording of these reviews. Use them verbatim." All 6 cards reproduce the brief's text byte-for-byte, including the typo "Wonderfull" in Andrew M.'s first review.
- "205+" with the trailing plus avoids the count looking stale immediately as new reviews come in. The JSON-LD `reviewCount` uses the literal "205" since the schema field expects an integer-as-string.
- Scrollable carousel uses CSS scroll-snap rather than a heavy JS slider library — better performance, native swipe on mobile, accessible to keyboard via arrow buttons.

**Maintenance:** Refresh quarterly. Source: https://getbirdeye.com.au/north-shore-removals-167399722215737. The maintenance HTML comment at the top of the section warns future contributors against fabricating reviews.

**Trade-offs:**
- The reviews section adds another light-on-the-eye section between FAQ and CTA banner; if homepage scroll length becomes a concern, it could be moved nearer the top of the conversion funnel later. Current placement (just before CTA) is the conversion-optimal spot — high social proof immediately before the action.
- Card width is fixed at 320px (mobile) / 360px (desktop). On wide desktops only ~3 cards are visible at once. The scroll arrows make the rest discoverable; a horizontal scroll bar is hidden by `scrollbar-width: none` for cleaner UX.
- The "via Google" attribution is text-only rather than a coloured Google "G" badge — keeps the card monochromatic and honest about source (Birdeye-syndicated Google reviews).
