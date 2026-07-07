# Choosing deployment tech stack

_Started 2026-07-06 21:11 UTC_

---

## User

which tech stack for this deployment

## Assistant

_[tool: list_files]_

_[tool: update_todos]_

_[tool: read_file]_

For this site, keep it simple — it's a 5-page static marketing site with no backend (mailto form, static project data, Leaflet via CDN).

**Recommended: Astro + vanilla JS/CSS, deployed on Cloudflare Pages or Netlify (free tier).**

Why it fits:
- No server needed — everything (theme toggle, scroll reveal, filters, FAQ, form) is small client-side JS. Astro ships zero JS by default and lets you add just those bits.
- Shared nav/CtaBanner/Footer become Astro components; inline styles from the handoff port straight across.
- Leaflet + Google Fonts stay as CDN/link tags.
- Free hosting, global CDN, custom domain (geospark.co.ke), automatic HTTPS, deploy on git push.

Alternative if the team already knows React: **Next.js with `output: 'export'`** (static export) on Vercel — same hosting story, heavier tooling than the site needs.

Avoid: WordPress or anything with a database/server — nothing here requires one, and it adds hosting cost and maintenance.

If you later want the enquiry form to submit without opening the mail app, add a form service (Netlify Forms or Formspree) — no backend change needed.

Next step when you're ready: I can restructure the handoff notes for the chosen stack, or you can hand the `design_handoff_geospark_website/` folder to a developer as-is (the README already explains everything).

## User

what about seo\

## Assistant

_[tool: update_todos]_

SEO is a strength of this stack, not a concern. Astro's static output means every page is real HTML that Google indexes directly — no JS rendering issues like a client-side React app would have.

What the developer should add at build time:
- **Per-page `<title>` + meta description** — e.g. "Land Survey & Geospatial Services in Kenya | GeoSpark" — with target keywords (land survey Kenya, urban planning Nairobi, etc.)
- **Open Graph / Twitter tags** so links preview well on WhatsApp and social — matters for a Kenyan client base sharing via WhatsApp
- **Structured data (JSON-LD)**: `LocalBusiness` schema with address, phone, geo-coordinates, service list — helps Google Maps / local results
- **`sitemap.xml` + `robots.txt`** — Astro generates the sitemap with one integration
- **Google Business Profile** — biggest local-SEO lever, independent of the site
- Semantic headings (one H1 per page — the designs already do this), descriptive alt text on team/project photos, clean URLs (`/services`, `/projects`)

Things already in your favor: fast load (static, minimal JS) helps Core Web Vitals; mobile-responsive design; real text content rather than text-in-images.

One caveat: the Projects page's lazy-load skeleton effect should be progressive enhancement — cards must exist in the HTML from the start (they do in the design), just visually revealed later, so crawlers see all content.

I can write per-page title/description copy into the handoff README if you want it ready for the developer.

