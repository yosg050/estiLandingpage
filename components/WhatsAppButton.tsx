"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/972533309144"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_button")}
      className="fixed bottom-3 right-3 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="לחצו כאן ליצירת קשר"
    >
      <FaWhatsapp className="h-8 w-8 text-white" />
    </a>
  );
}
