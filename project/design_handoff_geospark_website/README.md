# Handoff: GeoSpark Onestop Solution — Marketing Website

## Overview
A five-page marketing website for GeoSpark Onestop Solution, a Kenyan integrated land-services firm (land survey & geospatial, construction, urban planning, interior design, landscaping, real-estate management). Pages: **Home, Services, Projects, About, Contact**, plus two shared components (**CtaBanner**, **Footer**).

## About the Design Files
The files in this bundle are **design references created in HTML**. They are prototypes showing the intended look and behavior — **not production code to copy directly**. The `.dc.html` files use a custom prototyping runtime (`support.js`) with a template syntax (`{{ }}` holes, `<sc-for>`, `<sc-if>`, `<dc-import>`); ignore that machinery. Your task is to **recreate these designs in the target codebase's existing environment** (Next.js/React, Vue, Astro, etc.) using its established patterns. If no environment exists yet, choose an appropriate modern web framework (a static-friendly React or Astro site is a good fit) and implement the designs there.

Open each `.dc.html` file directly in a browser to see the live design. All styling is inline on the elements, so every measurement and color can be read straight off the markup.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-perfectly.

## Design Tokens

### Colors (CSS custom properties, light theme)
- `--bg: #f6f7f3` — page background (warm off-white)
- `--surface: rgba(255,255,255,0.66)` — glass surfaces (nav)
- `--card: rgba(255,255,255,0.82)` — cards (with `backdrop-filter: blur(12–16px)`)
- `--ink: #141d12` — primary text
- `--muted: #5b6656` — secondary text
- `--line: rgba(20,29,18,0.1)` — hairline borders
- `--accent: #2E6417` — brand green (primary)
- `--emerald: #0025CC` — brand blue (secondary; despite the token name)

### Dark theme (`body[data-theme="dark"]`)
- `--bg: #070d13`, `--surface: rgba(255,255,255,0.05)`, `--card: rgba(16,26,36,0.6)`, `--ink: #e9f1f6`, `--muted: #8ba1ae`, `--line: rgba(233,241,246,0.1)`, `--accent: #7FBF4D`, `--emerald: #5C7CFF`
- Theme is user-toggleable from the nav; persisted in `localStorage` key `gs-theme`.

### Typography (Google Fonts)
- **Space Grotesk** (400–700) — headings. H1: `clamp(36px, 5.6vw, 80px)`, weight 700, letter-spacing −0.035em, line-height 1.04. H2: `clamp(28px, 3.6vw, 52px)`, letter-spacing −0.03em.
- **Instrument Sans** (400–600) — body. 14–19px, line-height 1.6–1.7.
- **IBM Plex Mono** (400–500) — eyebrows/labels/coordinates. 10.5–12px, letter-spacing 0.14–0.28em, uppercase.

### Shape & effects
- Border radius: cards 18–24px, buttons/pills 999px, small chips 6–12px.
- Glassmorphism: `backdrop-filter: blur(12–18px)` on nav/cards.
- Selection: `::selection { background: var(--accent); color: #fff }`.
- Focus: `outline: 2px solid var(--accent); outline-offset: 3px`.
- `prefers-reduced-motion: reduce` collapses all animations/transitions.

## Shared Elements (all pages)

### Navigation
Fixed pill nav, top 14px, max-width 1180px, glass background, hairline border. Logo mark (inline SVG, green→blue gradient "G") + links (Home, Services, Projects, About, Contact — animated underline on hover, `.gs-link`), theme toggle (sun/moon), gradient "Contact us" pill CTA. Collapses to burger menu ≤820px (dropdown panel of links).

### Hero atmosphere (each page)
- Grid-paper background: 64px CSS grid lines masked by a radial ellipse.
- Drifting SVG contour-line groups (survey-map aesthetic), green/blue at 10–13% opacity, `gsDrift` 20–26s ease-in-out loops.
- Two blurred radial glow circles (green/blue at ~10%), `gsDrift2` loops.
- Floating mono "coordinate" labels (e.g. "RTK FIX · ±8 MM", blinking `▮` cursor), hidden ≤900px.
- Cursor-following radial glow overlay (fixed, pointer-events none).

### Scroll reveal
Elements with `data-reveal` start `opacity: 0; translateY(26px)` and transition in (0.7s, cubic-bezier(.22,1,.36,1)) when they enter the viewport (IntersectionObserver, threshold 0.12), staggered by the attribute value in ms.

### Page transitions
A fixed full-viewport veil (`background: var(--bg)`, z-index above everything):
- **On load**: veil fades out (0.45s ease, 0.05s delay) then `visibility: hidden`.
- **On internal link click**: intercept, fade veil in (0.28s ease), then navigate after ~320ms. Skip for external links, hash links, and modified clicks. Reset veil on `pageshow` (bfcache).
- In a SPA framework, implement as route-transition crossfade instead.

### CtaBanner (shared, above footer)
Full-width dark panel (deep navy/green gradient), white H2 "Let's build something…", subcopy, gradient pill button → Contact. Contour SVG texture.

### Footer (shared)
Dark panel: logo + blurb, link columns, social icon buttons (WhatsApp icon links to `https://wa.me/254704453850`), legal line.

## Screens

### 1. Home (`Home.dc.html`)
- **Hero**: mono eyebrow, H1 with gradient-text span (green→blue `background-clip: text`), lead paragraph, two CTAs (gradient pill "Start a project" → Contact; outlined pill "Contact us" → Contact), stat strip (4 cells in a 1px-gap grid over `--line`).
- **What we do**: 6 service cards in `repeat(auto-fit, minmax(310px, 1fr))` grid, gap 20px. Card: glass, 22px radius, icon chip, 21px title, 14.5px description, "Enquire →" link. Hover: lift −6px + green shadow + radial glow (`.gs-line` pattern), arrow slides.
- **Who we are**: two-column; Mission/Vision paragraphs ("**Mission:** To shape…", "**Vision:** To be…").
- **Leadership**: 3 founder cards (photo, name, role in accent, bio, mono skill chips). Photos in `assets/`.
- **Testimonials**: 3 quote cards.

### 2. Services (`Services.dc.html`)
- Hero + 6 detailed service cards (icon, name, tagline, bullet list with 5px square markers, "Enquire →").
- **How We Work** ("A straight line from brief to handover."): 4 steps in `repeat(auto-fit, minmax(220px, 1fr))`, gap 0, hairline left/right borders per cell. Step label `01 · BRIEF` (mono 12px). **Hover effect**: label sits at 35% opacity and fades to full `--accent` (0.5s); the title carries a 2px bottom border in `--line` that transitions to `--accent`.
- **FAQ**: accordion cards; `+` toggles answer, one open at a time.

### 3. Projects (`Projects.dc.html`)
- Hero, then **Leaflet map** (380px, 24px radius) with custom div-icon markers (pulsing dot), popups per project. OpenStreetMap tiles.
- **Filter chips**: pill buttons (All + 6 categories); active = filled `--accent`, white text.
- **Project cards**: `repeat(auto-fill, minmax(300px, 1fr))`, gap 20px, fixed height 340px. Gradient cover (150px) + category pill, title (2-line clamp), mono location, description (3-line clamp).
- **Lazy-load skeleton effect**: each card renders under a skeleton overlay ("FETCHING TILE ▮" mono label on the cover area + shimmer sweep 1.4s + gray placeholder bars). When the card scrolls into view (IO threshold 0.12), it rises in (0.48s, staggered 70ms) and the skeleton crossfades away ~420ms later (staggered 170ms) with an 8px settle. Changing a filter replays the effect for the new result set.

### 4. About (`About.dc.html`)
- Hero, Our story (2 paragraphs + image stack), values cards.
- **Journey timeline**: 4 columns (FOUNDED / EXPANSION / TODAY / VISION), hairline-bordered like How We Work. Each has a 10px rounded-square dot — first two green with `gsPulse` box-shadow ring animation (3s, staggered 0/0.5s), last two blue with a blue-ring variant (1s/1.5s). Same label + title-underline hover effect as Services (underline turns blue on the blue cards).
- Team section (same founder cards as Home).

### 5. Contact (`Contact.dc.html`)
- Hero ("We respond within one working day, by email, phone or WhatsApp…"). **No CTA button in nav on this page.**
- Contact-method cards (grid 2×): WhatsApp (wa.me link), phone, email, location.
- **Enquiry form**: name, phone, email, service select, message; submit builds a `mailto:hello@geospark.co.ke` with subject `Project enquiry: <service>`; success state swaps in a confirmation.
- Leaflet map of office location.

## Interactions & Behavior summary
- Theme toggle (light/dark, localStorage `gs-theme`).
- Scroll-reveal on `data-reveal` elements (stagger by attribute ms value).
- Nav shadow deepens on scroll.
- Cursor radial glow follows mouse (rAF-throttled).
- Card hovers: translateY(−6px) + colored shadow; radial glow sweep; arrow nudge 5px.
- How We Work / Journey hover: label opacity 0.35→1, title underline `--line`→brand color, 0.5s ease.
- Journey dots: pulsing box-shadow rings, staggered.
- Projects: filter state, Leaflet marker sync with filter, skeleton lazy-load (see above).
- FAQ accordion: single-open, `+`/`−` marker.
- Page-transition crossfade veil (see Shared Elements).
- Copy style note: no em dashes anywhere in site copy (client preference) — keep it that way when editing text.

## State Management
Per page, minimal local state: `isDark`, `menuOpen`; Projects adds `filter`; Services/Contact add accordion/form state (`openFaq`, form fields, `sent`). No backend; the form is mailto-based. Map data is a static in-file array of ~8 projects (title, category, location, lat/lng, description).

## Assets
- `assets/logo-full.png` — logo (also used as favicon)
- `assets/team-alvin.jpg`, `assets/team-josh.jpg`, `assets/team-maggie.jpg` — founder photos
- Leaflet 1.9.4 (CDN) + OpenStreetMap tiles for maps
- Google Fonts: Space Grotesk, Instrument Sans, IBM Plex Mono
- All other imagery is inline SVG (contours, icons, logo mark)

## Files
- `Home.dc.html`, `Services.dc.html`, `Projects.dc.html`, `About.dc.html`, `Contact.dc.html` — the five pages
- `CtaBanner.dc.html`, `Footer.dc.html` — shared components imported by every page
- `support.js` — prototype runtime (reference only; do not port)
- `assets/` — images
