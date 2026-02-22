# Esti Office - Page Builder Skill

## Overview

This skill guides creating new pages for estioffice.co.il. Every page follows a strict template to ensure SEO compliance, consistent design, and proper Next.js 15 patterns.

## Page Template

### File Structure

```
app/[section]/[slug]/page.tsx   ← Server Component (NO "use client")
```

### Minimal page.tsx Template

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import CalBookingButton from "@/components/CalBookingButton";

export const metadata: Metadata = {
  title: "[Primary Keyword] | אסתי גלר - ניהול משרד מרחוק",
  description:
    "[150-160 chars Hebrew description with primary + secondary keywords]",
  alternates: {
    canonical: "https://estioffice.co.il/[path]",
  },
  openGraph: {
    title: "[Title]",
    description: "[Description]",
    url: "https://estioffice.co.il/[path]",
    siteName: "Esti Office",
    locale: "he_IL",
    type: "website", // or "article" for blog posts
  },
};

export default function PageName() {
  return (
    <main className="min-h-screen bg-white pt-24" dir="rtl">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            [H1 with primary keyword]
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed">
            [Subtitle/description]
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          {/* Content with H2/H3 headings, paragraphs, lists */}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">רוצים להתחיל?</h2>
          <p className="text-gray-600 text-lg mb-8">
            שיחת היכרות של 30 דקות - בחינם וללא התחייבות
          </p>
          <CalBookingButton calUsername="esti-office" eventSlug="30min" />
        </div>
      </section>
    </main>
  );
}
```

## Critical Rules

### DO:

- Export `metadata: Metadata` with unique title, description, canonical
- Use single H1 per page with primary keyword
- Add `dir="rtl"` to main content sections
- Include at least 3 `<Link href="...">` to other pages
- Add CalBookingButton or WhatsApp CTA
- Use semantic HTML (section, article, nav, aside)
- Use Tailwind classes from the project's design system
- Add page-specific JSON-LD Schema via `<Script type="application/ld+json">`
- Keep content above 600 words for service pages, 800 for blog posts

### DON'T:

- Never add `"use client"` to page.tsx files
- Never use the same title/description as another page
- Never skip canonical URL
- Never use "לחצו כאן" as anchor text - use descriptive Hebrew text
- Never import heavy client libraries in page.tsx (move to separate client components)

## Service Page Specifics

Each service page should include:

1. **Hero** - H1 + subtitle + relevant icon
2. **Problem** - What pain point this service solves (2-3 paragraphs)
3. **Solution** - How Esti Office handles it (detailed, 3-5 points)
4. **Expert Quote** - Blockquote from Esti Geller with name and title
5. **Statistics** - 2-3 concrete numbers (e.g., "saves 8+ hours/week")
6. **Comparison Table** - vs. traditional secretary or DIY
7. **FAQ** - 3-5 Q&A specific to this service (with FAQPage Schema potential)
8. **Related Links** - Links to other services and relevant blog posts
9. **CTA** - CalBookingButton

### Service Page Schema Template

```tsx
<Script
  type="application/ld+json"
  id="service-schema"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "[Service Name in Hebrew]",
      description: "[Service description]",
      provider: {
        "@type": "Organization",
        name: "Esti Office",
        url: "https://estioffice.co.il",
      },
      areaServed: { "@type": "Country", name: "Israel" },
      serviceType: "[Service type]",
    }),
  }}
/>
```

## Blog Post Specifics

Each blog post should include:

1. **Metadata** - title, description, datePublished, dateModified
2. **Hero** - H1 + publish date + estimated read time
3. **Introduction** - Hook + what the reader will learn (100 words)
4. **Content** - H2 sections as questions, first paragraph answers the question directly
5. **Expert Quote** - At least one from Esti
6. **Statistics** - At least 2 data points with sources
7. **Conclusion** - Summary + CTA
8. **Related Articles** - Links to 2-3 other blog posts
9. **Service Link** - Link to the most relevant service page

### Blog Post Schema Template

```tsx
<Script
  type="application/ld+json"
  id="article-schema"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "[Article title]",
      author: {
        "@type": "Person",
        name: "אסתי גלר",
        url: "https://estioffice.co.il/about",
      },
      publisher: {
        "@type": "Organization",
        name: "Esti Office",
        url: "https://estioffice.co.il",
      },
      datePublished: "[ISO date]",
      dateModified: "[ISO date]",
      mainEntityOfPage: "https://estioffice.co.il/blog/[slug]",
    }),
  }}
/>
```

## Design System Reference

### Colors (from tailwind.config.ts)

- `brand-primary` - Main teal/dark green
- `brand-lightTeal` - Accent teal
- `brand-softGreen` - Soft green accent

### Common Patterns

- Section padding: `py-16 px-4`
- Container: `container mx-auto max-w-4xl` (or max-w-3xl for narrow)
- Card: `bg-white rounded-2xl shadow-md p-8`
- Tag/badge: `px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm`
- Alternating sections: bg-white → bg-gray-50 → bg-white

### Shared Components Available

- `CalBookingButton` - Cal.com booking embed
- `WhatsAppButton` - Floating WhatsApp button (already in layout)
- `Footer` - Global footer (already in layout)
- `Navigation` - Global nav (already in layout)
- `ContactForm` / `ContactSection` - Contact form components
- `Accordion` - From @radix-ui, used for FAQ

## After Creating a New Page

1. Add URL to `next-sitemap.config.js` additionalPaths
2. Add link in `Navigation.tsx` (if top-level page)
3. Add link in `Footer.tsx`
4. Add internal links FROM existing pages TO the new page
5. Update `public/llms.txt` with new page info
6. Run `pnpm build` to verify no errors
