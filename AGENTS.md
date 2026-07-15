# AGENTS.md – Esti Office Landing Page

## Project Overview

Esti Office (estioffice.co.il) – a remote office management service for healthcare professionals in Israel. This is a Next.js 15 marketing website deployed on Netlify.

**Primary language:** Hebrew (RTL). All user-facing content is in Hebrew.
**Code language:** English (variables, comments, file names).

## Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS 3.4 with custom brand colors
- **UI Components:** Radix UI (via shadcn/ui pattern)
- **Font:** Rubik (Hebrew + Latin subsets)
- **Icons:** lucide-react, react-icons
- **Deployment:** Netlify (with Netlify Functions)
- **Email:** Resend API (via Netlify Function)
- **Scheduling:** Cal.com embed
- **Analytics:** Google Analytics 4 (G-6EBV9FJT3N)
- **Sitemap:** Dynamic via `app/sitemap.ts` (route at `/sitemap.xml`, auto-includes blog posts)

## Project Structure

```
app/
├── layout.tsx          # Root layout: metadata, Schema, GA, font, Navigation, Footer
├── page.tsx            # Homepage: Hero, Pain Points, Services, Process, About, FAQ, CTA
├── globals.css         # Tailwind + global styles
├── not-found.tsx       # Custom 404 page
├── services/page.tsx   # Services index page
├── about/page.tsx      # About page (wraps Solution component)
├── contact/page.tsx    # Contact page
├── how-it-works/page.tsx  # Process + FAQ + pricing (Server Component with Accordion)
├── process/page.tsx    # Legacy — redirects to /how-it-works via next.config.mjs
├── blog/page.tsx       # Blog index page
├── blog/[slug]/page.tsx # Individual blog post pages (Markdown via content/posts/)
├── sitemap.ts          # Dynamic sitemap (route /sitemap.xml, auto-includes blog posts)
components/
├── Navigation.tsx      # Client: sticky header with scroll-aware transparency
├── Footer.tsx          # Server: footer with nav links + contact info
├── HeroContent.tsx     # Client: hero section with gradient overlay + Cal.com CTA
├── HomeCTA.tsx         # Client: simplified contact form (name + phone) + Cal.com + WhatsApp
├── Services.tsx        # Server: service cards grid + target audience
├── Solution.tsx        # Server: about section with photo + values
├── ContactSection.tsx  # Client: full contact form
├── ContactForm.tsx     # Client: form component
├── CalBookingButton.tsx # Client: Cal.com popup trigger
├── Popup.tsx           # Client: alert popup
├── WhatsAppButton.tsx  # Client: floating WhatsApp button
├── AccessibilityWidget.tsx # Client: accessibility controls
├── Process.tsx         # Server: process/how-it-works steps
├── ui/                 # shadcn/ui primitives (accordion, etc.)
public/
├── robots.txt          # Allows all bots including AI crawlers
├── llms.txt            # AI-friendly site description
├── office.webp         # Hero background
├── esti-profile.jpg    # Profile photo
├── logoText.webp       # Logo
├── og-image.webp       # Open Graph image
netlify/functions/
├── contact.ts          # Resend email function
next.config.mjs         # Next.js config (redirects, images)
tailwind.config.ts      # Tailwind config with brand colors
```

## Brand Colors

```
brand-primary:    #1E5F74  (dark blue — primary actions, headings)
brand-lightTeal:  #A7D7C5  (light teal — accents, badges)
brand-softGreen:  #A8C686  (soft green — decorative)
brand-lightGray:  #E6E6E6  (light gray — borders)
brand-background: #F9FBFA  (near-white background)
brand-textMain:   #1F2D3D  (dark text)
brand-textMuted:  #7B8B99  (muted text)
```

## Key Development Rules

### RTL & Hebrew
- All user-facing text is Hebrew. Add `dir="rtl"` to section containers.
- Use `text-right` alignment for Hebrew content.
- Set `bidirectional: true` in document generation.
- Test layouts in RTL — margins and paddings may need mirroring.

### Server vs Client Components
- **page.tsx files MUST be Server Components** (no "use client") for SEO/indexing.
- Only add "use client" to components that genuinely need browser APIs (useState, useEffect, event handlers, usePathname).
- Keep interactive parts in separate Client Components, imported into Server Component pages.

### SEO Requirements (every new page)
1. Export `metadata: Metadata` with unique `title`, `description`, and `alternates.canonical`.
2. Single H1 tag containing primary keyword.
3. At least 500 words of unique content per page.
4. Minimum 3 internal links to other pages.
5. Schema markup (JSON-LD via `<Script type="application/ld+json">`).
6. Add the route to `app/sitemap.ts` `staticPages` (blog posts are auto-included).

### Metadata Template
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Primary Keyword] | [Context] | Esti Office",
  description: "[120-155 chars with keyword + CTA]",
  alternates: {
    canonical: "https://estioffice.co.il/[path]",
  },
};
```

### Schema Markup
- Organization, LocalBusiness, Person, Services are defined in `layout.tsx` (global @graph).
- FAQPage schema lives per-page where the FAQ is visible (`app/page.tsx`, `app/how-it-works/page.tsx`), sourced from `data/faqs.ts`.
- New service pages: add Service Schema specific to that service.
- Blog posts: add Article Schema with author/publisher references.
- All pages with breadcrumbs: add BreadcrumbList Schema.

### Internal Linking
- Use descriptive anchor text with keywords: `<Link href="/services/diary">שירותי ניהול יומן ותיאום תורים</Link>`
- Never use generic "לחצו כאן" or "קראו עוד".
- Every page links to relevant services and CTA (contact/booking).

### Contact Form
- Netlify Function at `/.netlify/functions/contact`
- **HomeCTA** (homepage): simplified form — name + phone only. Sends `message: "פנייה מדף הבית"`.
- **ContactSection** (contact page): full form — name, phone, email (optional), message.
- Backend requires: name, phone, message. Email is optional when phone present.
- Uses Resend API (env: RESEND_KEY, CONTACT_FROM, CONTACT_TO)

### Images
- `next.config.mjs` has image optimization enabled with `formats: ['image/avif', 'image/webp']` and `deviceSizes`.
- Use Next.js `<Image>` component with `width`, `height`, and `alt` (Hebrew alt text).
- Hero image uses `priority` prop.
- All images in `/public/` directory.

### CTA Patterns
Two primary CTAs used throughout the site:
1. **Cal.com booking:** `<CalBookingButton calUsername="esti-office" eventSlug="30min" />`
2. **WhatsApp:** Link to `https://wa.me/972533309144`

## Common Commands

```bash
# Development
npm run dev          # Starts on port 4000

# Build
npm run build        # Production build (sitemap served dynamically by app/sitemap.ts)

# Lint
npm run lint
```

## Known Issues (to fix)

1. **Solution.tsx stethoscope icon:** Currently commented out — decide whether to remove or restore with different styling.

> Resolved: contact form email is optional on both frontend and backend; sitemap is now dynamic (`app/sitemap.ts`); image optimization is enabled in `next.config.mjs`.

## Content Guidelines (for AI-generated content)

- Include statistics with sources (improves AI citation by 37%).
- Include expert quotes from "אסתי גלר, מנהלת Esti Office" (improves visibility by 115%).
- Use professional terminology: back office, CRM, workflow, SLA, scheduling.
- Structure with question-format H2 headings.
- Answer the question directly in the first paragraph, then elaborate.
- End every page/article with CTA to booking or contact.

## Blog / Posts Infrastructure

The blog is a planned feature. Implementation details:

### Structure
```
app/blog/
├── page.tsx           # Blog index — list of all posts, Server Component
├── [slug]/page.tsx    # Individual post page, Server Component
content/
├── posts/             # Markdown or MDX files for blog posts (alternative: hardcoded in page)
```

### Blog Index Page (`/blog`)
- Server Component (no "use client")
- Export `metadata` with title "בלוג | טיפים לניהול קליניקה | Esti Office"
- List all posts as cards with: title, excerpt, date, reading time
- Link each card to `/blog/[slug]`
- Add FAQPage Schema if relevant
- Internal links to services + CTA at bottom

### Blog Post Page (`/blog/[slug]`)
- Server Component with `generateStaticParams()` for SSG
- Export `generateMetadata()` for dynamic title/description per post
- Add Article Schema (JSON-LD) with author (אסתי גלר), datePublished, publisher
- Include BreadcrumbList Schema: Home > בלוג > [Post Title]
- Content structure: H1 title, date, author, body, CTA at bottom
- Internal links: related posts + relevant service pages
- Minimum 500 words per post

### Content Approach (TBD)
Two options — decide before implementing:
1. **MDX files** in `content/posts/` — more flexible, easier to write
2. **Hardcoded data** in a posts array — simpler, no extra dependencies

### After Adding Blog
- Update `Navigation.tsx` — add "בלוג" link
- Update `Footer.tsx` — add blog link
- Blog routes are auto-included by `app/sitemap.ts` (no action needed)
- Update `public/llms.txt` — add blog description

## Testimonials / Recommendations (המלצות)

**Status: Not yet decided** — could be a standalone page OR a section/banner on the homepage.

### Option A: Homepage Banner/Section
- Add a `Testimonials.tsx` component
- Import into `app/page.tsx` (between existing sections, e.g., after Services)
- Carousel or grid of 3-5 testimonial cards
- Each card: quote text, client name, profession, optional photo
- No separate route needed

### Option B: Standalone Page (`/testimonials`)
- `app/testimonials/page.tsx` — Server Component
- Export metadata with title "המלצות | לקוחות מספרים | Esti Office"
- Full list of testimonials with more detail
- Add Review Schema (JSON-LD) for each testimonial
- Internal links to services + CTA

### Option C: Both
- Short banner on homepage (3 featured testimonials)
- "לכל ההמלצות" link to full `/testimonials` page

### Testimonials Data Structure
```typescript
interface Testimonial {
  name: string;          // Client name (Hebrew)
  profession: string;    // e.g., "פיזיותרפיסטית", "רופא שיניים"
  quote: string;         // The testimonial text (Hebrew)
  image?: string;        // Optional profile photo path
  rating?: number;       // Optional 1-5 star rating
}
```

### Schema for Testimonials
- Use `Review` Schema with `author`, `reviewBody`, `reviewRating`
- Wrap in `AggregateRating` if showing average score
- Reference `LocalBusiness` as the `itemReviewed`

## Deployment

- Push to main branch → Netlify auto-deploys.
- Environment variables (Netlify dashboard): RESEND_KEY, CONTACT_FROM, CONTACT_TO.
- Google Search Console verification: `RQALfrohxvOxirfJI6NE3O3mUf2ZfaWRAVVmCLc57oY`.
