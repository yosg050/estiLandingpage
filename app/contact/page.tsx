import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "יצירת קשר | שיחת ייעוץ חינם | Esti Office",
  description:
    "רוצים לשמוע איך אפשר לייעל את הניהול שלכם? שיחת היכרות בחינם – טלפון, WhatsApp, מייל או קביעת פגישה.",
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
