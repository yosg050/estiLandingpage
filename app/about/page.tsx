import type { Metadata } from "next";
import Solution from "@/components/Solution";

export const metadata: Metadata = {
  title: "אסתי גלר | מזכירה וירטואלית לרופאים ומטפלים עצמאיים | Esti Office",
  description:
    "אסתי גלר – מזכירה וירטואלית ומנהלת משרד מרחוק לרופאים, פסיכולוגים ומטפלים עצמאיים. מעל עשור שנים ניסיון, ניהול יומן וגבייה ממטופלים.",
  alternates: {
    canonical: "https://estioffice.co.il/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <section
        className="min-h-screen py-10 px-4 bg-white flex items-center"
        dir="rtl"
      >
        <div className="container mx-auto">
          <Solution />
        </div>
      </section>
    </main>
  );
}
