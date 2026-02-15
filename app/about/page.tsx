import type { Metadata } from "next";
import Solution from "@/components/Solution";

export const metadata: Metadata = {
  title: "מי אני? | אסתי גלר - ניהול משרד מרחוק",
  description:
    "מעל עשור של ניסיון בליווי בעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי. הכירו את אסתי גלר ואת Esti Office.",
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
