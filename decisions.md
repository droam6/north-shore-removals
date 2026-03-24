# North Shore Removals — Architectural Decisions Log

> Records every significant design and technical decision in the project.
> Inherits decisions D01-D22 from the original NORTH-SHORE-PROJECTS and NORTH-SHORE-PAINTING repos.
> Format: Decision, rationale, and any trade-offs.

---

## D22: Site Split — Cleaning-Only Repo from NORTH-SHORE-PAINTING

**Decision:** Create the NORTH-SHORE-CLEANING repo by forking from NORTH-SHORE-PAINTING (which was itself forked from NORTH-SHORE-TILING, which was forked from NORTH-SHORE-PROJECTS), then adapting all content for cleaning services at `northshoreremovals.com`.

**What changed:**
- Forked NORTH-SHORE-PAINTING into NORTH-SHORE-CLEANING with fresh git history
- Created new cleaning homepage (index.html) with 6 cleaning services (house, end of lease, office, carpet, window, spring cleaning), trust bar, FAQ, and gallery placeholders
- Accent colour changed from warm orange (#E07B39) to teal (#2A9D8F) in CSS variables
- Domain: northshorepainting.com.au → northshoreremovals.com across all files
- Branding: "North Shore Painting" → "North Shore Removals"
- Email: northshorepainting@gmail.com → northshorecleans@gmail.com
- Logo: NSPAINTLOGO-HD-FINAL.png → NSCLOGO-HD-FINAL.png
- Instagram: @northshorepainting → @northshorecleans
- 17 suburb pages renamed from painting-* to cleaning-* with cleaning-specific content
- 2 cleaning blog posts created (replacing painting articles)
- Landing page renamed from landing/painting.html → landing/cleaning.html
- Redirect pages: tiling.html → northshoretiling.com.au, painting.html → northshorepainting.com.au, northshore-removals.html → northshoreremovals.com
- Nav structure: Cleaning → index.html (homepage), Painting → painting.html (redirect to sister site)
- Painting images and videos deleted

**Rationale:**
- Forking from NORTH-SHORE-PAINTING (rather than starting fresh) provides a clean, already-split codebase with redirect pages and single-service structure that's easy to adapt
- Teal accent colour (#2A9D8F) differentiates the cleaning brand visually from the painting site's orange and the tiling site's gold
- Same architectural patterns (suburb pages, blog, landing pages, redirect pages) ensure consistency across the family of sites

**Trade-offs:**
- Suburb page content was adapted via sed replacements — some phrasing may need manual editorial polish
- Gallery has placeholder items until real cleaning photos are added
- Blog posts are newly created rather than adapted from existing cleaning articles
