import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { getAllPosts, getPostBySlug } from "@/lib/posts";


interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Esti Office`,
    description: post.excerpt,
    alternates: {
      canonical: `https://estioffice.co.il/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = (await getAllPosts()).filter((p) => p.slug !== post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
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
    mainEntityOfPage: `https://estioffice.co.il/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "בית",
        item: "https://estioffice.co.il",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "בלוג",
        item: "https://estioffice.co.il/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://estioffice.co.il/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-white pt-24 max-w-5xl mx-auto" dir="rtl">
        {" "}
        <article className="container mx-auto px-6 py-12 max-w-3xl">
          {/* Breadcrumbs */}
          <nav className="text-sm text-brand-textMuted mb-8">
            <Link
              href="/"
              className="hover:text-brand-primary transition-colors"
            >
              בית
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/blog"
              className="hover:text-brand-primary transition-colors"
            >
              בלוג
            </Link>
            <span className="mx-2">/</span>
            <span className="text-brand-textMain">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-textMain mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-brand-textMuted text-sm">
              {/* <span>{post.author}</span> */}
              {/* <span>·</span> */}
              {/* <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("he-IL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time> */}
              {/* <span>·</span> */}
              <span>{post.readingTime}</span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-brand-textMain leading-relaxed prose-p:text-justify prose-li:text-justify prose-headings:text-right prose-headings:text-brand-textMain prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-3 prose-blockquote:border-r-4 prose-blockquote:border-l-0 prose-blockquote:border-brand-primary prose-blockquote:pr-4 prose-blockquote:pl-0 prose-blockquote:text-brand-textMuted prose-blockquote:italic prose-a:text-brand-primary prose-a:font-medium hover:prose-a:underline prose-strong:text-brand-textMain"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* CTA */}
          <section className="mt-16 bg-brand-background rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-brand-textMain mb-3">
              מוכנים להפסיק לרוץ אחרי הניירת?
            </h2>
            <p className="text-brand-textMuted mb-6">
              בואו נדבר ונתחיל להתניע את העסק שלכם
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-full font-medium hover:bg-brand-primary hover:text-white transition-colors"
              >
                ליצירת קשר{" "}
              </Link>
            </div>
          </section>

          {/* Related Posts */}
          {allPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-brand-textMain mb-6">
                מאמרים נוספים
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {allPosts.slice(0, 2).map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block bg-brand-background rounded-xl p-5 hover:shadow-md transition-shadow border border-brand-lightGray"
                  >
                    <h3 className="font-bold text-brand-textMain group-hover:text-brand-primary transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-brand-textMuted">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="text-brand-primary font-medium hover:underline"
            >
              → חזרה לכל המאמרים
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
