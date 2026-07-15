# Esti Office - SEO & GEO Strategy

## Context

Esti Office (estioffice.co.il) is a remote office management service for healthcare professionals in Israel. The site is built on Next.js 15 + React 19 + Tailwind CSS, deployed on Netlify.

**CRITICAL STATUS (Jun 2026):** Site IS indexed (GSC baseline: 27 clicks / 194 impressions / avg position 8.95 over 3 months). Ranks **#1** for the niche term "מזכירה וירטואלית לרופאים", but general high-demand terms ("שירותי משרד מרחוק", "מזכירה וירטואלית") are stuck on pages 4–8. Strategy is hybrid niche-first: protect the #1 niche asset while pushing the general anchors to page 1.

**TERMINOLOGY GUARDRAIL:** Do NOT use medical-*service* terms in machine-read fields (JSON-LD, meta keywords, llms.txt, FAQ schema): avoid "מזכירה רפואית", "מזכירות רפואית", "ניהול מרפאות/קליניקות" as a service. These cause the site to be classified as a medical service. The audience (רופאים, מטפלים, מטופלים) stays — it is safe and is the source of the #1 ranking. Never use "קליניקה" (not native Hebrew) — use "מרפאה" or "עסק".

## Target Market

- **Primary:** Doctors, therapists, counselors with private practices in Israel
- **Secondary:** Cosmeticians, alternative medicine practitioners, personal service professionals
- **Language:** Hebrew (he-IL)
- **Geography:** Israel only

## Competitive Landscape

| Competitor          | Strength                            | Weakness              |
| ------------------- | ----------------------------------- | --------------------- |
| medihelp.co.il      | Medical niche focus, personal story | Single page, no blog  |
| misrad-online.co.il | Rich blog content, good SEO         | Not medical-specific  |
| medads.co.il        | Boutique medical secretary service  | Limited content depth |

**Key Advantage:** Most competitors are NOT specifically focused on the medical/therapy niche. Esti Office can own this space with aggressive content strategy.

## Keyword Strategy

### Anchor Keywords (locked)

- שירותי משרד מרחוק → / (homepage primary anchor)
- מיקור חוץ מזכירות / מזכירה וירטואלית → /services
- מזכירה וירטואלית → / + /services (secondary)
- מנהלת משרד מרחוק → /about
- עלות שירותי משרד / כמה עולה מזכירה וירטואלית → /how-it-works
- מזכירה וירטואלית לרופאים (niche, ranks #1 — preserve exact match) → / + /about

### Long-tail Keywords (blog posts)

- עלות שירותי משרד → cost article (already getting impressions)
- שירותי מזכירות לפי שעה → secretary-by-hour article
- שירותי משרד לעסקים קטנים → small-business article
- מזכירה דיגיטלית → consider (already ranks ~28)

**Dropped (do NOT target):** "מזכירה מהבית" / "מזכירה לעבודה מהבית" — SERP is almost entirely job boards (employment intent, not demand). Use "מזכירה במיקור חוץ" instead.

## URL Structure

```
/                        → Homepage (hub)
/services                → Services overview (hub)
/services/diary          → Calendar & appointment management
/services/billing        → Billing & financial management
/services/systems        → Digital systems & CRM management
/services/automation     → Automation & technology
/about                   → About Esti (E-E-A-T)
/how-it-works            → Process + FAQ + Pricing
/faq                     → Standalone FAQ (FAQPage Schema)
/contact                 → Contact
/blog                    → Blog index
/blog/[slug]             → Individual blog posts
```

## SEO Requirements per Page

### Every Page MUST Have:

1. `export const metadata: Metadata` with unique title + description + canonical
2. Single H1 with primary keyword
3. Minimum 600 words of unique Hebrew content
4. At least 3 internal links to other pages
5. CTA (Cal.com booking or WhatsApp link)
6. Page-specific JSON-LD Schema markup

### Title Format

`[Primary Keyword] | אסתי גלר - ניהול משרד מרחוק`

### Schema Requirements by Page Type

- **Service pages:** Service schema (name, description, provider, areaServed)
- **FAQ page:** FAQPage schema
- **About page:** Person schema (extended)
- **Blog posts:** Article/BlogPosting schema (headline, author, datePublished, dateModified)
- **Contact page:** LocalBusiness schema with contactPoint

## GEO (AI Engine Optimization)

To be cited by ChatGPT, Gemini, Perplexity:

1. Include 2-3 concrete statistics per service page
2. Add expert quotes from Esti with full name and title
3. Use Q&A format for headings (H2 as questions)
4. Include comparison tables (AI prefers structured data)
5. Show "last updated" date on every page
6. Keep llms.txt updated with all page URLs
7. Use professional terminology: back office, CRM, workflow, SLA

## Internal Linking Rules

- Every service page links to: homepage, 2+ other service pages, related blog post
- Blog posts link to: relevant service page, homepage, 1-2 other blog posts
- Homepage links to: all service pages, latest blog posts
- Footer: links to ALL pages
- Anchor text: descriptive Hebrew keywords, NEVER "לחצו כאן"

## Content Guidelines

- Tone: Professional, warm, personal - speaking directly to healthcare professionals
- Language: Hebrew, with professional terms in English where natural (CRM, back office, SLA)
- Every article needs: Esti's expert quote, at least 2 statistics, Q&A headings, internal links, CTA
- Blog post minimum: 800 words
- Service page minimum: 600 words
