import type { Metadata } from "next";
import Solution from "@/components/Solution";

export const metadata: Metadata = {
  title: "אסתי גלר | מעל עשור ניסיון בניהול משרד מרחוק | Esti Office",
  description:
    "אסתי גלר מספקת ניהול משרד מרחוק לבעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי. שילוב של סדר תפעולי, רגישות אנושית וכלים דיגיטליים.",
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
