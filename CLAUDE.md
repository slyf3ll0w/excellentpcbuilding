# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies (required on first clone)
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build (also validates all pages compile)
npm start          # Run production build locally
```

## Architecture

**Stack:** Next.js 15 App Router · React 19 · Tailwind CSS 4 · TypeScript

### Key data file
`lib/cities.ts` is the single source of truth for:
- The 14 service-area cities (slug + display name)
- The 2 service definitions (slug, copy, benefits list)
- `BASE_URL` used in sitemap and metadata canonical URLs

Adding a city: add one entry to the `cities` array — static params, sitemap, footer, and city grids all derive from it automatically.

### Page structure
- `app/page.tsx` — Home page (hero, services overview, why-us, city grid, contact form)
- `app/services/pc-build/page.tsx` — Service overview for build-only
- `app/services/parts-and-build/page.tsx` — Service overview for parts+build
- `app/services/pc-build/[city]/page.tsx` — SEO city landing pages for build-only (14 pages via `generateStaticParams`)
- `app/services/parts-and-build/[city]/page.tsx` — SEO city landing pages for parts+build (14 pages)
- `app/contact/page.tsx` — Standalone contact page
- `app/sitemap.ts` — Auto-generates XML sitemap from `cities` array

### Components
- `Header` — client component (needs `useState` for mobile menu), uses `usePathname` for active nav
- `Footer` — server component, renders city links from `lib/cities`
- `ContactForm` — client component; posts to Formspree. **Replace `YOUR_FORM_ID`** in `components/ContactForm.tsx` with a real Formspree form ID before going live

### SEO pattern
Each city page uses `generateMetadata` to produce a unique title/description/canonical per city × service combination. JSON-LD `Service` schema is inlined per city page. Root layout injects a `LocalBusiness` schema covering all 14 service areas.

### Images
Hero and service card images are fetched from `images.unsplash.com` (configured in `next.config.ts` `remotePatterns`). Logo is `/public/logo.png`.

### Styling
Dark theme: `#060B16` body, `#0D1626` cards, `#1A2840` borders, `#0070FF` accent blue. All defined as CSS variables in `app/globals.css`. Tailwind 4 via `@tailwindcss/postcss`.

### Contact form
Uses Formspree for form submission. Sign up at formspree.io, create a form, and replace `YOUR_FORM_ID` in `components/ContactForm.tsx`. No backend needed.
