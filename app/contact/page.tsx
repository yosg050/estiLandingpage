import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "צור קשר | מזכירה וירטואלית לרופאים ומטפלים | Esti Office",
  description:
    "רוצים מזכירה וירטואלית לעסק שלכם? שיחת היכרות בחינם וללא התחייבות – טלפון, WhatsApp או קביעת פגישה אונליין.",
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
