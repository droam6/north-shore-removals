# North Shore Removals — Website Documentation

## Local Path
- **Mac:** `~/Desktop/NSP/NSP-Website-Building/NORTH-SHORE-CLEANING`

## Business
- **Name:** North Shore Removals
- **Domain:** https://northshoreremovals.com
- **Service:** Cleaning (primary). Redirect pages link to sister sites for Tiling, Painting, and Removals.
- **Area:** North Shore Sydney, NSW, Australia
- **Phone:** 0451 488 266
- **Email:** northshorecleans@gmail.com
- **ABN:** 12 345 678 901
- **Hours:** Mon-Sat 7am-6pm

## Sister Sites
- **Tiling:** northshoretiling.com.au (linked from `tiling.html` redirect)
- **Painting:** northshorepainting.com.au (linked from `painting.html` redirect)
- **Removals:** northshoreremovals.com (linked from `northshore-removals.html` redirect)

## Project Structure

```
/
├── index.html                  # Homepage (cleaning service page)
├── tiling.html                 # Redirect → northshoretiling.com.au
├── painting.html               # Redirect → northshorepainting.com.au
├── northshore-removals.html    # Redirect → northshoreremovals.com
├── contact.html                # Contact / enquiry page
├── sitemap.xml                 # XML sitemap (25 URLs)
├── robots.txt                  # Crawler directives
├── CLAUDE.md                   # This file
│
├── css/
│   ├── styles.css              # Full design system CSS (teal accent #2A9D8F)
│   └── styles.min.css          # Minified CSS
│
├── js/
│   └── form-validation.js      # Form validation (IIFE, 357 lines)
│
├── images/
│   └── logos/                  # Brand logos
│
├── suburbs/                    # 17 cleaning suburb landing pages
│   ├── cleaning-chatswood.html
│   ├── cleaning-killara.html
│   ├── cleaning-gordon.html
│   ├── cleaning-pymble.html
│   ├── cleaning-turramurra.html
│   ├── cleaning-lindfield.html
│   ├── cleaning-roseville.html
│   ├── cleaning-st-ives.html
│   ├── cleaning-wahroonga.html
│   ├── cleaning-lane-cove.html
│   ├── cleaning-willoughby.html
│   ├── cleaning-artarmon.html
│   ├── cleaning-crows-nest.html
│   ├── cleaning-north-sydney.html
│   ├── cleaning-neutral-bay.html
│   ├── cleaning-mosman.html
│   └── cleaning-cremorne.html
│
├── blog/
│   ├── index.html                              # Blog listing (2 cleaning articles)
│   ├── how-often-deep-clean-home.html          # Deep cleaning frequency guide
│   └── end-of-lease-cleaning-checklist.html    # End of lease cleaning checklist
│
├── landing/                    # Meta Ads landing page (conversion-optimized)
│   └── cleaning.html
│
└── src/                        # Next.js source (unused scaffold)
    └── app/
```

## Suburbs Covered (17)
Chatswood, Killara, Gordon, Pymble, Turramurra, Lindfield, Roseville, St Ives, Wahroonga, Lane Cove, Willoughby, Artarmon, Crows Nest, North Sydney, Neutral Bay, Mosman, Cremorne

## Suburb Page Naming Convention
`suburbs/cleaning-{suburb-slug}.html`
- Slugs use lowercase with hyphens: `st-ives`, `north-sydney`, `crows-nest`, `lane-cove`

## Design System
- **Primary colour:** #1a1a2e (dark navy)
- **Accent colour:** #2A9D8F (teal)
- **Heading font:** DM Serif Display (Google Fonts)
- **Body font:** DM Sans (Google Fonts)
- **Icons:** Font Awesome 6.5.1 (CDN)
- **Approach:** Mobile-first responsive CSS

## SEO Implementation
- Unique `<title>` and `<meta description>` on every page
- JSON-LD structured data on every page (LocalBusiness + Service schemas)
- Open Graph and Twitter Card tags on every page
- Canonical URLs on every page
- hreflang="en-AU" on every page
- Sitemap XML with 25 pages
- robots.txt with sitemap reference
- Proper heading hierarchy (single H1 per page)
- aria-labels on interactive elements

## Form Structure
All enquiry forms POST to `/api/contact` with fields:
- name, email, phone, service, suburb, message
- Hidden `source` field (organic / meta-ad)
- dataLayer push on submission: `{event: 'form_submission', service, source}`

## Internal Linking Strategy
- Homepage → 17 cleaning suburb pages, blog, contact
- Suburb pages → homepage, 2-3 nearby suburb pages
- Blog posts → homepage, 1-2 suburb pages
- Footer → services (redirects for non-cleaning), 6 popular suburb pages
- Nav dropdown → Cleaning (homepage), Tiling/Painting/Removals (redirect pages)

## To-Do (Not Yet Implemented)
- [ ] Configure Google Tag Manager container
- [ ] Install Meta Pixel
- [ ] Set up form backend (/api/contact endpoint)
- [ ] Configure Google My Business
- [ ] Submit sitemap to Google Search Console
- [ ] Add actual Google Map embed on contact page
- [ ] Create privacy.html and terms.html pages
- [ ] Add favicon and apple-touch-icon
- [ ] Replace placeholder ABN with real ABN
- [ ] Replace placeholder aggregate ratings with real review data
- [ ] Minify form-validation.js for production

---

## File Tracking Protocol

### `progress.md`
- **Purpose:** Tracks what has been built, what remains, and known issues
- **When to update:** After completing any feature, fixing a bug, or discovering a new issue

### `decisions.md`
- **Purpose:** Logs every significant architectural or design decision with rationale
- **When to update:** When making a non-trivial choice
- **Next ID:** D23

### Rules for All Sessions
1. **Read both files at the start** of any session that involves code changes
2. **Update `progress.md`** whenever you complete a task
3. **Add to `decisions.md`** whenever you make a non-trivial choice
4. **Never delete decision entries**
5. **Keep `progress.md` timestamps current**
