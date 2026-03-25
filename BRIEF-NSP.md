# Client Onboarding Brief — North Shore Projects (COMPLETED)

> **Status:** Filled out using existing project data from CLAUDE.md, progress.md, decisions.md, and the live site HTML files.
>
> **Fields marked `[UNKNOWN]`** = data not found in any project file or source code. These need to be confirmed with the client before launch.

---

## 1. BUSINESS DETAILS

| Field | Your Answer |
|-------|-------------|
| **Business name** | North Shore Projects |
| **Trading name** (if different) | Same — North Shore Projects |
| **ABN / ACN** | 96 695 301 341 — **[PLACEHOLDER — real ABN needed before launch]** |
| **Business structure** | [UNKNOWN] |
| **Date established** | [UNKNOWN] — site states "5+ Years in Business" in trust bar |
| **Domain name** | northshoreprojects.com.au |
| **Current website** | https://northshoreprojects.com.au (static HTML, 65+ pages built) |
| **Hosting preference** | [UNKNOWN] — not yet deployed. Static HTML is host-agnostic (Netlify, Vercel, S3, shared hosting all work) |

---

## 2. CONTACT DETAILS

| Field | Your Answer |
|-------|-------------|
| **Primary phone number** | 0451 488 266 (+61451488266) |
| **Secondary phone** | N/A — single number used across all services |
| **Do you want separate phone numbers per service?** | No — one number for everything (decision D14) |
| **General enquiry email** | northshoretiling8@gmail.com (default for general/homepage/contact pages) |
| **Do you want separate email addresses per service?** | Yes — three service-specific emails used in schema and footers |

### Service-specific emails

| Service | Email Address |
|---------|---------------|
| Tiling | northshoretiling8@gmail.com |
| Painting | northshorepainting8@gmail.com |
| Cleaning | northshoreremovals1@gmail.com |
| Removals | northshoreremovals1@gmail.com |
| General / Default | northshoretiling8@gmail.com |

### Physical address

| Field | Your Answer |
|-------|-------------|
| **Street address** | [UNKNOWN] — no street address in any page. JSON-LD uses addressLocality: "North Shore" only |
| **Suburb** | North Shore (general area, not a specific suburb) |
| **State** | NSW |
| **Postcode** | [UNKNOWN] |
| **Do you want the address shown publicly on the website?** | No — no address is displayed anywhere on the site. Mobile business model |

### Operating hours

| Day | Hours |
|-----|-------|
| Monday | 7am–6pm |
| Tuesday | 7am–6pm |
| Wednesday | 7am–6pm |
| Thursday | 7am–6pm |
| Friday | 7am–6pm |
| Saturday | 7am–6pm |
| Sunday | Closed |
| Public holidays | [UNKNOWN] |

---

## 3. SERVICES OFFERED

### Service 1: Tiling

| Field | Your Answer |
|-------|-------------|
| **Service name** | Tiling |
| **Short description** | Expert bathroom, kitchen, and floor tiling with certified waterproofing. Premium materials and precision craftsmanship for lasting results across Sydney's North Shore. |
| **Detailed description** | Bathroom tiling (walls, floors, shower recesses with certified waterproofing), kitchen splashbacks, floor tiling (living areas, hallways, high-traffic zones), outdoor & pool areas (weather-resistant patios, pool surrounds, alfresco), waterproofing (certified membrane installation to Australian standards). Includes: free on-site consultation, detailed written quote, quality materials, professional installation, site clean-up, workmanship guarantee. |
| **Starting price or price range** | Quote only (JSON-LD priceRange: "$$") |
| **Typical job duration** | Bathroom: 3–5 days. Varies by scope. |
| **Dedicated page?** | Yes — tiling.html (843 lines) |
| **Suburb landing pages?** | Yes — 17 suburb pages (suburbs/tiling-{suburb}.html) |
| **Meta Ads landing page?** | Yes — landing/tiling.html (inline CSS, noindex, conversion-optimised) |

### Service 2: Painting

| Field | Your Answer |
|-------|-------------|
| **Service name** | Painting |
| **Short description** | Interior and exterior painting that transforms spaces. Premium paints, proper prep work, and flawless finishes for homes and businesses. |
| **Detailed description** | Interior painting (walls, ceilings, doors, trims, architraves), exterior painting (facades, fences, decks, outdoor structures), feature walls & murals, commercial painting (offices, retail, commercial properties), surface preparation (sanding, filling, priming, repair). Uses premium Australian brands: Dulux, Taubmans, Haymes. Standard: 1 coat primer + 2 coats topcoat. Includes: free colour consultation, detailed written quote, premium quality paints, proper surface preparation, furniture protection, complete clean-up. |
| **Starting price or price range** | Quote only |
| **Typical job duration** | Single room: 1–2 days. Full house repaint: 5–10 days. |
| **Dedicated page?** | Yes — painting.html (806 lines) |
| **Suburb landing pages?** | Yes — 17 suburb pages (suburbs/painting-{suburb}.html) |
| **Meta Ads landing page?** | Yes — landing/painting.html |

### Service 3: Cleaning

| Field | Your Answer |
|-------|-------------|
| **Service name** | Cleaning |
| **Short description** | End of lease, deep cleaning, and commercial cleaning services. Bond-back guarantee and eco-friendly products for spotless results. |
| **Detailed description** | End of lease / bond cleaning (bond-back guarantee), deep cleaning (residential), commercial cleaning (offices, retail spaces), eco-friendly products. Includes: detailed quote, professional service, eco-friendly products, satisfaction guarantee. |
| **Starting price or price range** | Quote only |
| **Typical job duration** | Deep clean (2-3 bed): 4–6 hours. End-of-lease (2-3 bed): 6–8 hours. (From cleaning.html FAQ) |
| **Dedicated page?** | Yes — cleaning.html (748 lines) |
| **Suburb landing pages?** | Yes — 17 suburb pages (suburbs/cleaning-{suburb}.html) |
| **Meta Ads landing page?** | Yes — landing/cleaning.html |

### Service 4: Removals (external partner — but has a page)

| Field | Your Answer |
|-------|-------------|
| **Service name** | Removals |
| **Short description** | Stress-free home and office relocations. Careful handling, experienced movers, and complete peace of mind. |
| **Detailed description** | Home relocations, office relocations, packing services, furniture assembly, heavy item moving. Includes: free moving consultation, detailed written quote, protective wrapping, experienced movers, secure transport, transit insurance. |
| **Starting price or price range** | Quote only |
| **Typical job duration** | Local move (2-3 bed): 4–6 hours. (From removals.html FAQ) |
| **Dedicated page?** | Yes — removals.html exists on the domain (686 lines), though removals is handled by external partner |
| **Suburb landing pages?** | No — per decision D04 |
| **Meta Ads landing page?** | No |
| **Service email** | northshoreremovals1@gmail.com |

**Note:** Removals is handled by the external partner North Shore Removals (northshoreremovals.com). The nav links to the external site, but a removals.html page also exists on the NSP domain. The partner has their own Instagram (@northshoreremovals). Trust bar on removals page uses different stats: "500+ Moves Completed" and "0 Damage Claims" instead of "500+ Projects Completed".

### Services provided by external partners (referrals)

| Partner Service | Partner Name | Partner Website | Partner Instagram | Include on website? |
|----------------|-------------|-----------------|-------------------|---------------------|
| Removals | North Shore Removals | northshoreremovals.com | @northshoreremovals | Mention + dedicated page (removals.html) + nav links + hero slide. No suburb pages or landing page. |

---

## 4. SERVICE AREAS

### Primary region

| Field | Your Answer |
|-------|-------------|
| **Region name** | North Shore Sydney |
| **State** | NSW |
| **Country** | Australia (AU) |

### Suburbs / postcodes covered (17)

| # | Suburb | Postcode | Notes |
|---|--------|----------|-------|
| 1 | Chatswood | 2067 | High priority — featured in footer "Popular Areas" |
| 2 | Killara | 2071 | |
| 3 | Gordon | 2072 | |
| 4 | Pymble | 2073 | |
| 5 | Turramurra | 2074 | |
| 6 | Lindfield | 2070 | |
| 7 | Roseville | 2069 | |
| 8 | St Ives | 2075 | Slug: st-ives |
| 9 | Wahroonga | 2076 | |
| 10 | Lane Cove | 2066 | Slug: lane-cove. Featured in footer "Popular Areas" |
| 11 | Willoughby | 2068 | |
| 12 | Artarmon | 2064 | |
| 13 | Crows Nest | 2065 | Slug: crows-nest |
| 14 | North Sydney | 2060 | Slug: north-sydney. Featured in footer "Popular Areas" |
| 15 | Neutral Bay | 2089 | Slug: neutral-bay. Featured in footer "Popular Areas" |
| 16 | Mosman | 2088 | Featured in footer "Popular Areas" |
| 17 | Cremorne | 2090 | Featured in footer "Popular Areas" |

**Total suburb pages:** 17 suburbs x 3 services = 51 pages

**Naming convention:** `suburbs/{service}-{suburb-slug}.html` — slugs are lowercase with hyphens

### Nearby suburbs to cross-link

Each suburb page links 2–3 neighbouring suburbs. Determined by geography. Examples from the site:
- Chatswood ↔ Lane Cove, Willoughby, Artarmon
- Mosman ↔ Cremorne, Neutral Bay
- Gordon ↔ Killara, Pymble, Lindfield

---

## 4B. TRUST BAR / SOCIAL PROOF STATS

| Stat | Value | Display text |
|------|-------|-------------|
| **Years in business** | 5+ | "5+ Years in Business" |
| **Projects completed** | 500+ | "500+ Projects Completed" (removals page uses "500+ Moves Completed") |
| **Google rating** | 4.9 | "4.9 Google Rating" — **[PLACEHOLDER — needs real data]** |
| **Suburbs covered** | 17 | "17 Suburbs Covered" |
| **Removals-specific** | 0 | "0 Damage Claims" (removals.html only) |

---

## 5. PRICING STRUCTURE

| Field | Your Answer |
|-------|-------------|
| **Do you show prices on the website?** | Quote only — no prices listed anywhere. JSON-LD priceRange: "$$" |
| **Do you offer free quotes?** | Yes — emphasised across every page ("free, no-obligation quote") |
| **Minimum call-out or job fee** | [UNKNOWN] |
| **Do you charge by the hour, by the job, or by the square metre?** | [UNKNOWN] — likely by the job (quotes are "detailed" and "written") |

### Price list

N/A — all services are quote-only.

### Invoicing

| Field | Your Answer |
|-------|-------------|
| **Current invoicing tool** | [UNKNOWN] |
| **Want invoicing integrated or recommended?** | [UNKNOWN] |
| **Payment methods accepted** | [UNKNOWN] |
| **Payment terms** | [UNKNOWN] |

---

## 6. BRANDING

### Existing brand assets

| Asset | Status |
|-------|--------|
| **Logo** | Text-based logo only — "NSP" monogram in a styled div + "North Shore Projects" text. No image logo file. |
| **Logo file formats available** | N/A — CSS-rendered text, no image file |
| **Brand colour palette** | Primary: #1a1a2e (dark navy). Accent: #C19A6B (warm gold, updated from original #D4A853). Cream: #FAFAF8. Warm white: #FDFCFA. Body text: #71706E. Footer dark: #12121F. |
| **Favicon / app icon** | Need it — no `<link rel="icon">` on any page |
| **Brand guidelines document** | Don't have one — design system is documented in CSS custom properties and decisions.md |

### Brand direction

| Field | Your Answer |
|-------|-------------|
| **Primary colour preference** | #1a1a2e (dark navy) |
| **Secondary / accent colour** | #C19A6B (warm muted gold) |
| **Style preference** | Editorial / premium |
| **Font preference** | Serif headings (DM Serif Display) + sans-serif body (DM Sans, weights 400 + 500). Originally Montserrat + Open Sans — changed in v2 redesign (decision D18). |
| **Overall feel** | Premium, upmarket trades business targeting affluent North Shore homeowners |
| **Any brands you admire?** | [UNKNOWN] — the editorial aesthetic was chosen to differentiate from typical all-sans-serif trades websites |

### CSS custom properties (from styles.css)

```
--color-gold: #C19A6B
--color-gold-hover: (derived)
--color-gold-light: rgba(193,154,107,0.1)
--color-cream: #FAFAF8
--color-body: #71706E
--color-navy: #1a1a2e
```

---

## 7. TONE OF VOICE

| Field | Your Answer |
|-------|-------------|
| **How do you speak to customers?** | Professional but approachable. Confident without being pushy. |
| **First person or third person?** | First person plural — "We", "Our team", "We're your neighbours" |
| **Key selling points** | 1. Quality first — premium materials and proven techniques. 2. On time, every time — clear communication, projects start and finish on schedule. 3. Fair pricing — transparent quotes, no hidden costs. 4. Local team — "We're your neighbours. A Sydney-based team." 5. Fully licensed, ABN registered, fully insured. |
| **Words/phrases you use often** | "Free, no-obligation quote", "premium materials", "quality craftsmanship", "precision", "workmanship guarantee", "professional", "expert", "24 hours" (response time), "One Group. Removals, Renovations & Cleaning." |
| **Words/phrases to avoid** | [UNKNOWN] — no explicit guidance found. The tone avoids being overly casual or salesy. |
| **Do you use Australian English spelling?** | Yes — "colour" not "color" throughout. hreflang="en-AU" on all pages. |

### Unique selling proposition

"One Group. Removals, Renovations & Cleaning. Licensed, ABN registered, fully insured. Quality workmanship guaranteed. Serving Sydney's North Shore."

(From the homepage meta description and tagline.)

---

## 8. COMPETITORS

| # | Competitor Name | Website | What they do well | What they do poorly |
|---|----------------|---------|-------------------|---------------------|
| 1 | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] |
| 2 | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] |
| 3 | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] | [UNKNOWN] |

> No competitor analysis data was found in any project file. This section needs client input.

---

## 9. CONTENT & IMAGERY

### Photography

| Field | Your Answer |
|-------|-------------|
| **Do you have professional photos of your work?** | Some — tiling and painting have real project photos in galleries |
| **Number of photos available** | Tiling: 5 photos + 5 videos. Painting: 20 photos. Cleaning: placeholders only. |
| **Are they high resolution?** | Yes — photos appear to be from phone camera (PHOTO-2026-02-04/05 naming) |
| **Photo categories available** | Completed jobs (tiling bathrooms, painting interiors/exteriors). No before/after, no team photos. |
| **Do you want a gallery on each service page?** | Yes — tiling and painting have scrollable galleries with lightbox. Cleaning has placeholder. |
| **Are you willing to get professional photos taken?** | [UNKNOWN] |

### Photo files on disk

**Tiling** (`images/tiling/`):
- PHOTO-2026-02-05-19-54-22.jpg (+ 2, 3, 4, 5 variants)
- VIDEO-2026-02-05-19-52-11.mp4 (+ 2 variant)
- VIDEO-2026-02-05-19-52-12.mp4 (+ 2, 3 variants)

**Painting** (`images/painting/`):
- PHOTO-2026-02-04-19-46-01.jpg through 04 (+ variants = 15 files)
- painting-project-living-room-1.jpg
- painting-project-living-dining.jpg
- painting-project-bedroom-1.jpg
- painting-project-living-room-2.jpg
- painting-project-bedroom-2.jpg

**Hero images:** Currently using Unsplash URLs (external, not hosted):
- Tiling hero: unsplash photo-1523413363574-c30aa1c2a516
- Painting hero: unsplash photo-1562259949-e8e7689d7828
- Removals hero: unsplash photo-1600518464441-9154a4dea21b
- Cleaning hero: unsplash photo-1581578731548-c64695cc6952
- Contact hero: unsplash photo-1497366216548-37526070297c

**OG images:** Referenced but not yet created:
- images/og-home.jpg
- images/og-tiling.jpg
- images/og-painting.jpg
- images/og-cleaning.jpg
- images/og-contact.jpg

### Testimonials / reviews

| Field | Your Answer |
|-------|-------------|
| **Do you have Google reviews?** | [UNKNOWN] — site claims 87 reviews but this is a **placeholder** (decision D15). Real data needed. |
| **Google Business rating** | [UNKNOWN] — site shows 4.9 stars but this is **aspirational/placeholder** |
| **Do you have written testimonials from clients?** | Yes — 3 testimonials found on landing pages (may be real or placeholder — needs client confirmation) |
| **Can we display client names and suburbs?** | Yes — first name + last initial + suburb used on landing pages |

> **WARNING:** Aggregate review data in JSON-LD schema (4.9 stars, 87 reviews) may be placeholder. Must be confirmed with real data or removed before launch (per decision D15).

| # | Client Name | Suburb | Service | Testimonial Text | Source |
|---|-------------|--------|---------|-----------------|--------|
| 1 | Sarah M. | Chatswood | Tiling | "North Shore Projects completely transformed our bathroom. The tiling work was flawless and they finished on time. Highly recommend!" | landing/tiling.html (listed as Google Review) |
| 2 | James & Linda K. | Mosman | Painting | "The team painted our entire home inside and out. The attention to detail was incredible and the colour advice was spot on." | landing/painting.html (listed as Google Review) |
| 3 | Rachel T. | North Sydney | Cleaning | "Used North Shore Projects for our end of lease clean and got our full bond back. The place looked brand new!" | landing/cleaning.html (listed as Google Review) |

> **Note:** These testimonials appear on landing pages attributed as "Google Reviews". Needs client confirmation whether these are real reviews or placeholder copy.

### Blog / content marketing

| Field | Your Answer |
|-------|-------------|
| **Do you want a blog?** | No — removed from live site (decision D19). Blog files retained in `/blog/` but unlinked. May restore later. |
| **Blog topic ideas** | 5 posts were written: bathroom tile guide, interior painting tips, end-of-lease cleaning checklist, kitchen splashback trends 2026, how often to repaint. |
| **Who will write posts?** | AI-assisted (original posts generated by Claude) |
| **Posting frequency** | N/A — blog deactivated |

---

## 10. WEBSITE FEATURES & PAGES

### Core pages

- [x] Homepage (index.html)
- [x] Service page — one per service (tiling.html, painting.html, cleaning.html)
- [x] Contact / enquiry page (contact.html)
- [ ] About us page — not built
- [x] Suburb/area landing pages — 51 pages in /suburbs/
- [ ] Blog / articles — built but removed from navigation (D19)
- [x] Gallery / portfolio — inline on tiling and painting service pages
- [ ] Testimonials page — no standalone page
- [x] FAQ — inline accordion on every page (homepage, service pages, contact)
- [ ] Privacy policy — **needed, linked from footers but 404s**
- [ ] Terms & conditions — **needed, linked from footers but 404s**
- [x] Meta Ads landing pages — 3 in /landing/ (noindex, inline CSS)
- [ ] 404 error page — not built

### Contact form fields

- [x] Name (required, validated: letters/spaces/hyphens/apostrophes, min 2 chars, auto-capitalise)
- [x] Email (required, regex validated, auto-lowercase)
- [x] Phone (required, Australian format: 0/+61 prefix, 10 digits)
- [x] Service (dropdown on homepage/contact: tiling, painting, removals, cleaning, multiple/other. Hidden field on service pages.)
- [x] Suburb (text input on service pages, dropdown on contact page with 17 suburbs + "other")
- [ ] Preferred date/time — not included
- [x] Message / job description (required on service pages, optional on contact page. 10-1000 chars, live character counter)
- [ ] File upload — not included
- [ ] How did you hear about us? — not included
- [x] Prefer callback checkbox
- [x] Hidden fields: source (organic/meta-ad), service (on service pages), landing (on suburb pages)

### Form handling

| Field | Your Answer |
|-------|-------------|
| **Where should form submissions go?** | Email — routed to service-specific inbox based on `service` field |
| **Preferred form backend** | Custom API — package.json specifies Express + Nodemailer + Puppeteer (Node 18+). Forms POST to `/api/contact`. Server not yet deployed but dependencies are defined. |
| **Do you want email notifications on submission?** | Yes (implied by email routing architecture) |
| **Do you want an auto-reply to the customer?** | [UNKNOWN] — not implemented. Site shows "We'll be in touch within 24 hours" on success. |

### Form security

- Honeypot field: hidden `website_url` input (injected by JS, aria-hidden)
- Timestamp check: rejects submissions under 3 seconds
- Both show fake success to bots (decision D08)
- No CAPTCHA — by design, to reduce friction

### Other features

| Feature | Implemented | Notes |
|---------|:-----------:|-------|
| Click-to-call button (mobile) | Yes | Sticky bottom button on all pages: "Call for Quote" → tel:+61451488266 |
| WhatsApp chat link | No | Not implemented |
| Instagram feed embed | No | Links to Instagram profiles only, no feed embed |
| Google Maps embed | Placeholder | contact.html has placeholder div: "Google Map will be embedded here" |
| Before/after image slider | No | Not implemented |
| Video embed | Yes | Tiling gallery includes 5 MP4 videos with play overlay |
| Live chat widget | No | Not implemented |
| Online booking / scheduling | No | Not implemented |
| Scroll-to-top button | Yes | Appears after scrolling 300px on all pages |
| Scroll animations (AOS) | Yes | AOS 2.3.4 via jsDelivr CDN, 600ms duration, ease-out-cubic, fire once |

---

## 11. SEO & SEARCH

| Field | Your Answer |
|-------|-------------|
| **Do you have Google Search Console set up?** | No — not yet configured. Sitemap ready to submit. |
| **Do you have Google Analytics / GA4?** | No — GTM placeholder exists but not configured |
| **Do you have Google Tag Manager?** | No — placeholder `<!-- GOOGLE TAG MANAGER -->` and `<!-- GTM NOSCRIPT -->` on all pages. Container ID: `GTM-XXXXXXX` (placeholder) |
| **Primary keywords you want to rank for** | tiling Chatswood, tiling North Shore Sydney, painting Mosman, painting North Shore, cleaning North Shore Sydney, end of lease cleaning North Shore, bathroom tiling Sydney, house painter North Shore, [plus 51 suburb-specific long-tail keywords] |
| **Do you have a Google Business Profile?** | [UNKNOWN] — not yet configured (listed as to-do in CLAUDE.md) |
| **GBP listing name** | North Shore Projects |
| **GBP categories** | Tiler, Painter, Cleaning service, Home and construction business |

### SEO already implemented

- Unique `<title>` and `<meta description>` on every page
- JSON-LD structured data: LocalBusiness (homepage, contact), Service + HomeAndConstructionBusiness (service pages, suburb pages), Article (blog)
- Open Graph + Twitter Card tags on all pages
- Canonical URLs on all pages
- hreflang="en-AU" on all pages
- sitemap.xml with 65+ URLs (priority + changefreq)
- robots.txt: Allow all, Disallow /api/ and /landing/, sitemap reference
- Single H1 per page
- Breadcrumb navigation on suburb pages (Home > Service > Suburb)
- Descriptive alt text on images
- aria-labels on interactive elements
- Skip-to-content link on all pages

### Google Business Profile setup (needed)

| Field | Your Answer |
|-------|-------------|
| **Business description for GBP** | Professional tiling, painting and cleaning services across Sydney's North Shore. Licensed, ABN registered, fully insured. Quality workmanship guaranteed. Free, no-obligation quotes. |
| **GBP service areas** | Chatswood, Killara, Gordon, Pymble, Turramurra, Lindfield, Roseville, St Ives, Wahroonga, Lane Cove, Willoughby, Artarmon, Crows Nest, North Sydney, Neutral Bay, Mosman, Cremorne |
| **GBP photos available?** | Work samples (tiling + painting). No storefront or team photos. |
| **GBP posts** | [UNKNOWN] |
| **GBP Q&A** | Yes — FAQs already written per service (5 per service page + 5 general on contact page). Can repurpose. |

---

## 12. PAID ADVERTISING

| Field | Your Answer |
|-------|-------------|
| **Are you running or planning Google Ads?** | Planning — conversion tracking placeholder exists: `// CONVERSION TRACKING - fire GTM event here` |
| **Are you running or planning Meta (Facebook/Instagram) Ads?** | Planning — 3 landing pages built with `<!-- META PIXEL CODE HERE -->` placeholder and `source=meta-ad` hidden field |
| **Monthly ad budget** | [UNKNOWN] |
| **Do you have a Meta Business Manager account?** | [UNKNOWN] |
| **Do you have a Meta Pixel?** | No — placeholder only |
| **Target audience for ads** | Homeowners on Sydney's North Shore (affluent demographic, quality-conscious, renovation-active) |
| **Geographic targeting for ads** | Same as service area — 17 North Shore suburbs |

### Landing page infrastructure (already built)

| Page | URL | Features |
|------|-----|----------|
| Tiling | /landing/tiling.html | Inline CSS, no nav, noindex, gold top bar with phone, trust badges, benefits list, Google rating, testimonial section, form with source=meta-ad, Meta Pixel placeholder |
| Painting | /landing/painting.html | Same structure |
| Cleaning | /landing/cleaning.html | Same structure |

---

## 13. SOCIAL MEDIA

| Platform | Handle / URL | Active? |
|----------|-------------|---------|
| Instagram (Tiling) | @northshoretiling — https://www.instagram.com/northshoretiling?igsh=MW9vbzJtaXRoY3h3OQ== | [UNKNOWN] |
| Instagram (Painting) | @north.shore.painting — https://www.instagram.com/north.shore.painting?igsh=MWhmZ2JkdDljbXVydA== | [UNKNOWN] |
| Instagram (Removals) | @northshoreremovals — https://www.instagram.com/northshoreremovals?igsh=MWZqeGY3NXZyMXJ5YQ== | [UNKNOWN] |
| Instagram (Cleaning) | @northshore.cleaning — https://www.instagram.com/northshore.cleaning?igsh=MTZqOHI3emdibjk1OQ== | [UNKNOWN] |
| Facebook | [UNKNOWN] | [UNKNOWN] |
| TikTok | [UNKNOWN] | [UNKNOWN] |
| LinkedIn | [UNKNOWN] | [UNKNOWN] |
| YouTube | [UNKNOWN] | [UNKNOWN] |

| Field | Your Answer |
|-------|-------------|
| **Do you want social links on the website?** | Yes — Instagram links in navbar dropdown (homepage), navbar single link (service pages), footer, and mobile menu. 4 separate Instagram accounts (one per service). |
| **Do you want social share buttons on blog posts?** | N/A — blog removed |
| **Do you have a consistent social media presence?** | [UNKNOWN] |

---

## 14. INTEGRATIONS & TOOLS

| Tool | Currently Use | Want Integrated | Account Details |
|------|:------------:|:---------------:|-----------------|
| Google Analytics (GA4) | No | Yes (placeholder ready) | Not set up |
| Google Tag Manager | No | Yes (placeholder ready) | Container ID: GTM-XXXXXXX (placeholder) |
| Google Search Console | No | Yes | Sitemap ready at /sitemap.xml |
| Google Ads | No | Yes (placeholder ready) | Conversion snippet placeholder in code |
| Meta Pixel | No | Yes (placeholder ready) | `<!-- META PIXEL CODE HERE -->` in landing pages |
| Mailchimp / email marketing | [UNKNOWN] | [UNKNOWN] | |
| Xero / MYOB / QuickBooks | [UNKNOWN] | [UNKNOWN] | |
| ServiceM8 / Tradify / Fergus | [UNKNOWN] | [UNKNOWN] | |
| Calendly / booking tool | No | [UNKNOWN] | |
| Zapier / Make (automation) | [UNKNOWN] | [UNKNOWN] | |
| CRM (HubSpot / Zoho / other) | [UNKNOWN] | [UNKNOWN] | |

---

## 15. LEGAL & COMPLIANCE

| Field | Your Answer |
|-------|-------------|
| **Do you have a privacy policy?** | Need one drafted — linked from 45+ footers but page doesn't exist (404). Also linked from tiling.html consent checkbox. |
| **Do you have terms & conditions?** | Need them drafted — linked from 45+ footers but page doesn't exist (404). |
| **Do you hold any licences?** | [UNKNOWN] — site states "fully licensed" but specific licence numbers not provided |
| **Are you insured?** | Yes — site states "comprehensive public liability insurance" across all pages and FAQ answers. Amount: [UNKNOWN]. |
| **Do you want insurance/licence info displayed on the website?** | Yes — "Licensed, ABN registered, fully insured" appears in meta descriptions, hero text, FAQ answers, and trust badges on landing pages |

---

## 16. TIMELINE & PRIORITIES

| Field | Your Answer |
|-------|-------------|
| **Target launch date** | [UNKNOWN] |
| **Is there a hard deadline?** | [UNKNOWN] |
| **What's most important to launch with?** | Website (65+ pages built) > SEO (schema + sitemap done, needs GSC submission) > GBP (not started) > Ads (landing pages built, pixels not installed) > Branding (design system done, needs logo + favicon) |
| **What can wait until after launch?** | Blog (removed, can restore later), 404 page, image optimisation pipeline, CSS/JS minification automation, accessibility audit, performance audit |

### Phase preference

- [x] **Phased** — core site is built and ready. Remaining work is: form backend, real images, legal pages, tracking setup, GBP configuration.

### Launch blockers (from progress.md)

| Blocker | Status |
|---------|--------|
| Form backend (/api/contact) | Dependencies defined in package.json (Express + Nodemailer + Puppeteer, Node 18+) but server.js not yet written / deployed |
| Real images in /images/ | Partial — tiling + painting have gallery photos. Hero/OG/cleaning images needed |
| Privacy policy page | Not built — linked from 45+ pages |
| Terms & conditions page | Not built — linked from 45+ pages |
| Favicon + apple-touch-icon | Not created |
| Real ABN | Placeholder 96 695 301 341 needs replacing |
| Real review data | Placeholder 4.9 stars / 87 reviews needs real data or removal |

---

## 17. HOMEPAGE & PAGE CONTENT

### Hero section

| Field | Your Answer |
|-------|-------------|
| **Hero style** | Slideshow — 4 slides with crossfade (desktop) / instant switch (mobile), 5-second auto-rotate, arrow + indicator navigation on desktop, arrows/indicators hidden on mobile |

| Slide | Label | Headline | Subtitle | CTA |
|-------|-------|----------|----------|-----|
| 1 | Professional Tiling Services | Expert Tiling / Precision Craftsmanship | Bathroom, kitchen, and floor tiling with certified waterproofing. Premium materials and lasting results across Sydney's North Shore. | Learn More → tiling.html / Get a Quote → #contact |
| 2 | Professional Painting Services | Quality Painting / Transform Your Space | Interior and exterior painting with premium paints. Flawless finishes for homes and businesses. | Learn More → painting.html / Get a Quote → #contact |
| 3 | Professional Removals | Stress-Free Removals / Move with Confidence | Home and office relocations with careful handling. Experienced movers and complete peace of mind. | Learn More → northshoreremovals.com / Get a Quote → #contact |
| 4 | Professional Cleaning Services | Spotless Cleaning / Guaranteed Results | End of lease, deep cleaning, and commercial services. Bond-back guarantee and eco-friendly products. | Learn More → cleaning.html / Get a Quote → #contact |

### Process steps ("How It Works") — Homepage

| Step | Title | Description |
|------|-------|-------------|
| 01 | Get in Touch | Fill out our form or give us a call. Tell us about your project and we'll be in touch within 24 hours. |
| 02 | Free Consultation | We'll visit your property, assess the work needed, and provide a detailed, no-obligation quote. |
| 03 | Expert Execution | Our skilled team gets to work, keeping you informed every step of the way until completion. |
| 04 | Final Walkthrough | We do a thorough inspection together. We're not done until you're completely satisfied. |

### FAQ content — Homepage (5 general questions)

| # | Question | Answer |
|---|----------|--------|
| 1 | What areas do you service? | We service all of Sydney and surrounding areas, with a focus on the North Shore, Northern Beaches, and Inner West. |
| 2 | Are you licensed and insured? | Yes. Fully licensed, ABN registered, and carry comprehensive public liability insurance. |
| 3 | How do I get a quote? | Fill out our contact form or call. We'll arrange a free on-site consultation and provide a detailed, no-obligation quote within 48 hours. |
| 4 | Do you offer warranties on your work? | Yes. All projects come with a workmanship guarantee. Specific warranty period varies by service type. |
| 5 | How long will my project take? | Varies by scope. We'll provide an estimated timeline in your quote. |

### FAQ content — Tiling (5 questions)

| # | Question | Answer |
|---|----------|--------|
| 1 | Do you handle waterproofing? | Yes — certified waterproofing membrane installation to Australian standards. We issue a certificate. |
| 2 | How long does a bathroom tiling job take? | 3–5 days depending on size and complexity. Includes prep, waterproofing curing, installation, grouting. |
| 3 | Can you help me choose the right tiles? | Yes — we advise on types, sizes, patterns, grout colours. We work with all major suppliers and can source samples. |
| 4 | Do you supply the tiles? | Flexible — we can supply through trade accounts (often better prices) or work with tiles you've purchased. |
| 5 | What warranty do you offer? | Workmanship guarantee on all tiling work. If issues arise from our installation, we fix at no cost. |

### FAQ content — Painting (5 questions)

| # | Question | Answer |
|---|----------|--------|
| 1 | What paint brands do you use? | Premium Australian brands: Dulux, Taubmans, Haymes. Right product for each application. |
| 2 | How many coats? | Standard: 1 coat premium primer + 2 coats topcoat. Additional coats for dramatic colour changes or bare surfaces. |
| 3 | Do I need to move furniture? | No — we handle furniture moving and protection. Cover everything with drop sheets, return when dry. |
| 4 | How long does interior painting take? | Room: 1–2 days. Full house: 5–10 days depending on rooms and preparation needed. |
| 5 | Can you paint in wet weather? | Interior: yes. Exterior: requires dry conditions above 10°C. We schedule around weather. |

### FAQ content — Cleaning (5 questions)

| # | Question | Answer |
|---|----------|--------|
| 1 | How long does a cleaning job take? | 2-3 bed deep clean: 4–6 hours. End-of-lease: 6–8 hours. Larger properties may take longer. |
| 2 | Do you offer a bond-back guarantee? | Yes — end-of-lease cleaning includes bond-back guarantee with 72-hour callback if issues found. |
| 3 | What does a deep clean cover? | Kitchen appliances (inside and out), bathrooms, floors, skirting boards, window sills, light switches, door frames, hard-to-reach areas. |
| 4 | What cleaning products do you use? | Professional-grade eco-friendly products. |
| 5 | How often should I get a deep clean? | Every 3–6 months. Monthly or fortnightly maintenance for busy households or homes with pets. |

### FAQ content — Contact page (5 general questions)

| # | Question | Answer |
|---|----------|--------|
| 1 | What services do you offer? | Tiling, painting, and cleaning. Removals via trusted partner North Shore Removals. |
| 2 | How quickly can you provide a quote? | We respond within 24 hours. Phone quotes same day for straightforward jobs. Larger projects get an on-site visit. |
| 3 | Are you licensed and insured? | Yes. Fully licensed, ABN registered (96 695 301 341), comprehensive public liability insurance. |
| 4 | What suburbs do you cover? | 17 suburbs: Chatswood, Killara, Gordon, Pymble, Turramurra, Lindfield, Roseville, St Ives, Wahroonga, Lane Cove, Willoughby, Artarmon, Crows Nest, North Sydney, Neutral Bay, Mosman, Cremorne. May also service nearby areas. |
| 5 | Do you offer free quotes? | Yes. All quotes are free, no obligation. Detailed cost breakdown before any work begins. No hidden fees. |

---

## 18. LANDING PAGE COPY

| Field | Tiling | Painting | Cleaning |
|-------|--------|----------|----------|
| **Headline** | Expert Tiling Services | Expert Painting Services | Expert Cleaning Services |
| **Trust badges** | Licensed & Insured, Free Quotes, ABN Registered | Licensed & Insured, Free Quotes, ABN Registered | Licensed & Insured, Free Quotes, ABN Registered |
| **Testimonial** | "North Shore Projects completely transformed our bathroom. The tiling work was flawless and they finished on time. Highly recommend!" | "The team painted our entire home inside and out. The attention to detail was incredible and the colour advice was spot on." | "Used North Shore Projects for our end of lease clean and got our full bond back. The place looked brand new!" |
| **Attribution** | Sarah M., Chatswood (Google Review) | James & Linda K., Mosman (Google Review) | Rachel T., North Sydney (Google Review) |
| **Response time** | "We respond within 2 hours" | "We respond within 2 hours" | "We respond within 2 hours" |
| **Organic page response** | "within 24 hours" | "within 24 hours" | "within 24 hours" |

---

## 19. ADDITIONAL NOTES

### Technical architecture (decision D01)

The site is built as plain static HTML — no build step, no framework, no JavaScript dependencies beyond AOS (scroll animations). 65+ HTML files, one CSS file (2,885 lines), one JS file (form validation, 357 lines). This was chosen over Next.js because the site is a brochure/lead-gen site with zero dynamic content. Deploys anywhere.

### Key architectural decisions

- **Static HTML over Next.js** (D01) — zero build, zero runtime
- **51 suburb pages** (D02) — 17 suburbs x 3 services for local SEO dominance
- **Service-specific email routing** (D03) — different team members handle different trades
- **Removals via external partner** (D04) — listed in nav/schema but no dedicated pages
- **Honeypot + timestamp over CAPTCHA** (D08) — zero-friction spam prevention
- **Inline CSS on landing pages** (D07) — eliminates render-blocking request for ad pages
- **Editorial design system v2** (D18) — DM Serif Display + DM Sans, warm gold, cream backgrounds
- **Blog removed** (D19) — deactivated pre-launch, files retained for future use

### Removals partner

Removals is handled by an external business at northshoreremovals.com. NSP links to them from navigation, hero slideshow, and footer. They also have their own Instagram (@northshoreremovals). NSP does not build or maintain the removals website.

### Form dataLayer events

All form submissions push to Google Tag Manager dataLayer:
```javascript
{event: 'form_submission', service: 'tiling', source: 'organic'}
```

### What "complete" looks like for launch

1. Form backend live and routing to correct service email
2. Real ABN replacing placeholder
3. Real Google review data replacing placeholder (or remove aggregateRating from schema)
4. Privacy policy and terms pages created
5. Favicon and apple-touch-icon added
6. GTM container configured
7. Sitemap submitted to Google Search Console
8. Google Maps embed on contact page
9. All hero/OG images hosted locally (replace Unsplash URLs)

---

## CHECKLIST

- [x] All service descriptions are filled out (including removals — missed in first pass)
- [x] All 17 suburbs are listed with postcodes
- [x] Contact details (phone, 5 emails including removals) confirmed
- [x] Brand colours and design direction specified
- [x] Testimonials: 3 found on landing pages (need client confirmation if real or placeholder)
- [x] Photos: status documented (tiling + painting have real photos, cleaning needs photos)
- [ ] **ABN: PLACEHOLDER — real ABN needed**
- [ ] **Google Business Profile: not set up**
- [ ] **Timeline: [UNKNOWN]**
- [x] Trust bar stats documented
- [x] Process steps documented (per-service)
- [x] FAQ content documented (25 Q&As across 5 sections)
- [x] Landing page copy documented (headlines, testimonials, response times)
- [x] Form backend tech stack documented (Express + Nodemailer + Puppeteer)

---

*Completed brief for North Shore Projects. Data sourced from CLAUDE.md, progress.md, decisions.md, index.html, tiling.html, painting.html, cleaning.html, removals.html, contact.html, landing/tiling.html, landing/painting.html, landing/cleaning.html, package.json, js/form-validation.js, robots.txt, and sitemap.xml. Fields marked [UNKNOWN] require direct client input.*
