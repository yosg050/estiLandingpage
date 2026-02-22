import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import CalBookingButton from "@/components/CalBookingButton";

export const metadata: Metadata = {
  title: "בלוג | טיפים לניהול קליניקה | Esti Office",
  description:
    "מאמרים וטיפים בנושא ניהול משרד רפואי, ייעול תהליכי עבודה, גבייה, ניהול יומן ועוד. תוכן מקצועי למטפלים עצמאיים.",
  alternates: {
    canonical: "https://estioffice.co.il/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white pt-24" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-brand-textMain mb-4 text-center">
          בלוג
        </h1>
        <p className="text-brand-textMuted text-lg text-center mb-12 max-w-2xl mx-auto">
          מאמרים, טיפים ותובנות בנושא ניהול משרד רפואי - כדי שתוכלו להתמקד
          בטיפול ולא בניירת
        </p>

        {posts.length === 0 ? (
          <p className="text-center text-brand-textMuted text-lg">
            פוסטים חדשים בקרוב...
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-brand-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-brand-lightGray"
              >
                {/* <time className="text-sm text-brand-textMuted">
                  {new Date(post.date).toLocaleDateString("he-IL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time> */}
                {/* <span className="text-sm text-brand-textMuted mx-2">·</span> */}
                <span className="text-sm text-brand-textMuted">
                  {post.readingTime}
                </span>

                <h2 className="text-xl font-bold text-brand-textMain mt-3 mb-3 group-hover:text-brand-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-brand-textMuted leading-relaxed">
                  {post.excerpt}
                </p>

                <span className="inline-block mt-4 text-brand-primary font-medium group-hover:underline">
                  קראו עוד ←
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 text-center bg-brand-background rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-brand-textMain mb-4">
            רוצים לשמוע איך זה עובד בפועל?
          </h2>
          <p className="text-brand-textMuted mb-6">
            קבעו שיחת היכרות חינם ונראה ביחד איך לייעל את ניהול המשרד שלכם
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalBookingButton calUsername="esti-office" eventSlug="30min" />
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-full font-medium hover:bg-brand-primary hover:text-white transition-colors"
            >
              צרו קשר
            </Link>
          </div>
          {/* <div className="mt-8 flex justify-center gap-6 text-sm text-brand-textMuted">
            <Link
              href="/services"
              className="hover:text-brand-primary transition-colors"
            >
              השירותים שלנו
            </Link>
            <Link
              href="/how-it-works"
              className="hover:text-brand-primary transition-colors"
            >
              איך זה עובד?
            </Link>
            <Link
              href="/about"
              className="hover:text-brand-primary transition-colors"
            >
              מי אני?
            </Link>
          </div> */}
        </section>
      </div>
    </main>
  );
}
