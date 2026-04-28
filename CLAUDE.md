# North Shore Removals — Project Documentation

## Project
- **Name:** North Shore Removals
- **Type:** Static website (HTML/CSS/JS, no build step)
- **Domain:** https://northshoreremovals.com
- **Service:** Removals (primary). Sister sites for Tiling, Painting, Cleaning are reached via redirect pages.
- **Area:** North Shore Sydney, NSW, Australia
- **Phone:** 0451 488 266
- **Email:** northshoreremovals1@gmail.com
- **ABN:** 96 695 301 341
- **Hours:** Mon–Sat 7am–6pm

## Hosting & Deployment
- **Host:** Bluehost via cPanel **Git Version Control** (auto-pull on deploy)
- **Repo:** local git → push to remote → Bluehost cPanel pulls
- **Deploy flow:**
  1. Edit locally
  2. `git add` / `git commit` / `git push origin main`
  3. Bluehost cPanel → **Git Version Control** → **Manage** → **Pull or Deploy** → **Update from Remote**
- Always end a working session with `git push origin main` so the cPanel side has the latest commit available to pull.

## Forms
- **Provider:** Formspree
- **Endpoint:** `https://formspree.io/f/mojkgkpn` (account: northshoreremovals1@gmail.com)
- **Coverage:** wired across all 20 enquiry forms (index, contact, landing, 17 suburb pages)
- **Shared logic:** `js/form-validation.js` (validation, honeypot, anti-bot timestamp, `fetch()` JSON submit, success-state swap)
- **Sydney timestamp:** every form contains `<input type="hidden" name="submitted_sydney_time" id="sydney_time">`. The shared submit handler populates it with Sydney-formatted local time (`Australia/Sydney`, `en-AU`, suffixed `AEDT`) immediately before the JSON gather, so Formspree submissions and email notifications carry the correct local time.

## Project Structure

```
/
├── index.html                        # Homepage (removals service page)
├── tiling.html                       # Redirect → northshoretiles.com.au
├── painting.html                     # Redirect → northshorepaints.com.au
├── cleaning.html                     # Redirect → cleaning sister site
├── northshore-removals.html          # Redirect / canonical
├── contact.html                      # Contact / enquiry page
├── sitemap.xml
├── robots.txt
├── server.js / server.py             # Local-dev static servers
│
├── css/
│   └── styles.css                    # Full design system (navy + red + cream)
│
├── js/
│   ├── form-validation.js            # Shared form logic (loaded on all 20 form pages)
│   └── main.js                       # (legacy; not currently included in HTML)
│
├── images/
│   ├── favicon.png
│   └── logos/                        # NSRLOGO-HD-FINAL.png
│
├── suburbs/                          # 17 suburb landing pages
│   └── removals-{suburb-slug}.html
│
└── landing/
    └── removals.html                 # Meta Ads landing page (noindex)
```

## Suburbs Covered (17)
Chatswood, Killara, Gordon, Pymble, Turramurra, Lindfield, Roseville, St Ives, Wahroonga, Lane Cove, Willoughby, Artarmon, Crows Nest, North Sydney, Neutral Bay, Mosman, Cremorne.

**Suburb page naming:** `suburbs/removals-{suburb-slug}.html`. Slugs lowercase with hyphens (`st-ives`, `north-sydney`, `crows-nest`, `lane-cove`).

## Design System
- **Primary:** `#1A1A2E` (dark navy)
- **Accent:** `#E63946` (red — note CSS variable is misnamed `--color-gold`; same throughout the codebase)
- **Cream:** `#FAFAF8`
- **Heading font:** DM Serif Display
- **Body font:** DM Sans
- **Icons:** Font Awesome 6.5.1 (CDN)
- **Approach:** mobile-first responsive CSS, no framework

## Pricing (current)
| Crew | Weekday | Weekend | Minimum |
|---|---|---|---|
| 2 Men + Truck | $180/hr | $190/hr | 3 hours |
| 3 Men + Truck | $240/hr | $250/hr | 3 hours |
| 4 Men + Truck | $310/hr | $320/hr | 4 hours |
| Extra Man     | +$60/hr | +$60/hr | — |

All prices + GST. Source of truth: index.html `#pricing` section.

## SEO
- Unique `<title>` and `<meta description>` per page
- JSON-LD on every page (LocalBusiness / MovingCompany + Service)
- Open Graph and Twitter Card tags per page
- Canonical URLs, `hreflang="en-AU"`
- `sitemap.xml` + `robots.txt`
- Single H1 per page, semantic headings

## File Tracking Protocol

### Per-session expectations
1. **Read `progress.md` and `decisions.md` at the start** of any session that involves code changes.
2. **Log every file edited per session** in `progress.md` (append to the "Session log" section with the date).
3. **Add to `decisions.md`** for any non-trivial choice (next ID below).
4. **Never delete decision entries.**
5. **End every session** by running `git push origin main` so Bluehost's Git Version Control can pull.

### `decisions.md`
- **Next ID:** D45

## Shell / PowerShell note
This repo is worked on from Windows. When chaining commands in PowerShell, **use semicolons or separate lines, not `&&`** — `&&` is unsupported in Windows PowerShell 5.1 and produces a parser error. Use `git add .; git commit -m "..."; git push` (or run each on its own line).

## To-Do (not yet implemented)
- [ ] Configure Google Tag Manager container (placeholder in `<!-- GOOGLE TAG MANAGER -->`)
- [ ] Install Meta Pixel on landing page (placeholder in `<!-- META PIXEL CODE HERE -->`)
- [ ] Submit sitemap to Google Search Console
- [ ] Add real Google Map embed on contact page
- [ ] Create `privacy.html` and `terms.html`
- [ ] Replace placeholder ABN with real ABN if required
- [ ] Replace placeholder aggregate ratings with real review data
- [ ] Minify `form-validation.js` for production
- [ ] Rename misleading `--color-gold` CSS variable to `--color-red`
