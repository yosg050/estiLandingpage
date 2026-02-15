import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "יצירת קשר | אסתי גלר - ניהול משרד מרחוק",
  description:
    "צרו קשר עם אסתי גלר לשיחת היכרות ללא התחייבות. טלפון, וואטסאפ, מייל או טופס - נשמח לשמוע מכם.",
  alternates: {
    canonical: "https://estioffice.co.il/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="container mx-auto">
        <ContactSection />
      </div>
    </main>
  );
}
