# North Shore Removals — Progress Tracker

> Last updated: 2026-03-21 (Site created from NORTH-SHORE-PAINTING fork, adapted for cleaning)

---

## Site Creation — COMPLETE

| Item | Status | Notes |
|------|--------|-------|
| Forked from NORTH-SHORE-PAINTING | Done | Clean copy, fresh git init |
| Cleaning homepage created | Done | New index.html with 6 cleaning services, trust bar, FAQ, gallery placeholders |
| Accent colour: teal #2A9D8F | Done | CSS variables updated from orange #E07B39 |
| Domain: northshoreremovals.com | Done | All canonical, OG, JSON-LD URLs updated |
| Branding: North Shore Removals | Done | Nav, footer, titles, JSON-LD |
| Email: northshorecleans@gmail.com | Done | All contact sections, JSON-LD |
| Logo: NSCLOGO-HD-FINAL.png | Done | Navbar, footer, hero across all pages |
| Instagram: @northshorecleans | Done | Nav, mobile menu, footer |
| Redirect pages | Done | tiling.html → northshoretiles.com.au, painting.html → northshorepaints.com.au, northshore-removals.html → northshoreremovals.com |
| 17 cleaning suburb pages | Done | Renamed from painting-*, content adapted for cleaning services |
| 2 cleaning blog posts | Done | Deep cleaning frequency guide + end of lease checklist |
| Landing page | Done | landing/cleaning.html (was landing/painting.html) |
| Sitemap rewritten | Done | 25 cleaning-focused URLs |
| Nav link structure | Done | Cleaning → index.html (homepage), Painting → painting.html (redirect), Tiling → tiling.html (redirect) |
| CLAUDE.md rewritten | Done | Cleaning-specific repo docs |
| .gitignore | Done | Includes *.MOV/*.mov |

---

## REMAINING WORK

### High Priority (blocks launch)

| Item | Blocked By | Notes |
|------|-----------|-------|
| Form backend (`/api/contact`) | Hosting decision | Need serverless function or email service |
| Privacy policy page (`privacy.html`) | Legal content | Currently 404 |
| Terms & conditions page (`terms.html`) | Legal content | Currently 404 |
| Favicon + apple-touch-icon | Asset creation | No `<link rel="icon">` on any page |

### Medium Priority (blocks marketing)

| Item | Blocked By | Notes |
|------|-----------|-------|
| Google Tag Manager container | GTM account | Replace placeholder |
| Meta Pixel installation | Meta Business account | Replace placeholder in landing page |
| Google My Business setup | GMB account | Needed for local SEO |
| Google Search Console | DNS verification | Submit sitemap.xml |
| Google Maps embed on contact page | Maps API key | Currently placeholder |

### Low Priority

| Item | Notes |
|------|-------|
| CSS minification | styles.min.css needs re-minifying with teal variables |
| JS minification | form-validation.js is unminified |
| 404 page | No custom 404.html |
| Accessibility audit | Needs WAVE/axe testing |

---

## KNOWN ISSUES

| Issue | Severity | Details |
|-------|----------|---------|
| ABN is placeholder | Medium | `12 345 678 901` is a dummy — needs real ABN |
| Aggregate ratings in schema | Medium | 4.9 stars / 120 reviews hardcoded — need real data or remove |
| Suburb page content is adapted from painting | Low | Some phrasing may sound slightly mechanical from sed replacements |
| Gallery has no real photos | Medium | Placeholder divs in gallery, no actual cleaning project images |
