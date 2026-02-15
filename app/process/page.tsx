import type { Metadata } from "next";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "מה התהליך? | אסתי גלר - ניהול משרד מרחוק",
  description:
    "תהליך פשוט ומהיר: שיחת היכרות, התאמת תהליכי עבודה והתחלת עבודה מיידית. גלו איך מתחילים לעבוד עם Esti Office.",
  alternates: {
    canonical: "https://estioffice.co.il/process",
  },
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Process />
    </main>
  );
}
