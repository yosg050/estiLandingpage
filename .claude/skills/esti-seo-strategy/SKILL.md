# Esti Office - SEO & GEO Strategy

## Context

Esti Office (estioffice.co.il) is a remote office management service for healthcare professionals in Israel. The site is built on Next.js 15 + React 19 + Tailwind CSS, deployed on Netlify.

**CRITICAL STATUS (Feb 2026):** Site is NOT indexed in Google (site:estioffice.co.il returns 0 results). All SEO work depends on fixing this first.

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

### Primary Keywords (service pages)

- ניהול משרד רפואי מרחוק → /services (hub) + /services/diary
- מזכירה רפואית מרחוק → /services/diary
- שירותי גבייה רפואית → /services/billing
- ניהול מערכות CRM למרפאה → /services/systems
- אוטומציות למרפאה פרטית → /services/automation

### Long-tail Keywords (blog posts)

- מזכירה במרפאה vs ניהול משרד מרחוק → comparison article
- 5 סימנים שצריכים עזרה בניהול המשרד → awareness article
- כמה עולה מזכירה רפואית → cost comparison article
- איך אוטומציות חוסכות שעות עבודה במרפאה → educational article
- גבייה ממטופלים מדריך → how-to article

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
