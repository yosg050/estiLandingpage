"use client";

import type React from "react";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import CalBookingButton from "@/components/Calbookingbutton";

interface ContactSectionProps {
  trackEvent: (eventName: string) => void;
}

export default function ContactSection({ trackEvent }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-10 min-h-screen py-10 px-4 bg-white flex items-center"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          יצירת קשר
        </h2>
        <p className="text-xl font-semibold mb-3 mx-auto md:mr-8 max-w-md md:max-w-none text-center">
          תנו לי לטפל בבירוקרטיה – כדי שאתם תוכלו לטפל באנשים. <br />
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto md:mr-8 md:ml-8">
          <div className="flex flex-col items-center w-full  justify-center">
            {/* עוטף פנימי שמיישר את כל האייקונים מימין ומרכז את הכל בדף */}
            <div className="space-y-6">
              <a
                href="tel:97253309144"
                className="flex flex-col md:flex-row items-center md:items-center text-lg transition-colors group"
                onClick={() => trackEvent("phone_click")}
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0 overflow-hidden">
                  <span className="absolute inset-0 bg-brand-primary rounded-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-brand-lightTeal rounded-full scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
                  <Phone className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="block md:inline group-hover:text-brand-primary transition-colors duration-300">
                  053-3309144
                </span>
              </a>
              <a
                href="https://wa.me/972533309144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center md:items-center text-lg transition-colors group"
                onClick={() => trackEvent("whatsapp_click")}
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0 overflow-hidden">
                  <span className="absolute inset-0 bg-brand-primary rounded-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-brand-lightTeal rounded-full scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
                  <FaWhatsapp className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="block md:inline group-hover:text-brand-primary transition-colors duration-300">
                  WhatsApp
                </span>
              </a>
              <a
                href="mailto:estigeller1@gmail.com"
                className="flex flex-col md:flex-row items-center md:items-center text-lg transition-colors group"
                onClick={() => trackEvent("email_click")}
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0 overflow-hidden">
                  <span className="absolute inset-0 bg-brand-primary rounded-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-brand-lightTeal rounded-full scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
                  <Mail className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="block md:inline group-hover:text-brand-primary transition-colors duration-300">
                  estigeller1@gmail.com
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/estigeller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center md:items-center text-lg transition-colors group"
                onClick={() => trackEvent("linkedin_click")}
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0 overflow-hidden">
                  <span className="absolute inset-0 bg-brand-primary rounded-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-brand-lightTeal rounded-full scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
                  <FaLinkedinIn className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="block md:inline group-hover:text-brand-primary transition-colors duration-300">
                  LinkedIn
                </span>
              </a>
              {/* <a
                href="https://www.facebook.com/estioffice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center md:items-center text-lg transition-colors group"
                onClick={() => trackEvent("facebook_click")}
              >
                <div className="relative w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0 overflow-hidden">
                  <span className="absolute inset-0 bg-brand-primary rounded-full transition-all duration-300"></span>
                  <span className="absolute inset-0 bg-brand-lightTeal rounded-full scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
                  <FaFacebookF className="h-6 w-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="block md:inline group-hover:text-brand-primary transition-colors duration-300">
                  Facebook
                </span>
              </a> */}
              <CalBookingButton calUsername="esti-office" eventSlug="30min" />
            </div>
          </div>

          {/* Form component will need similar responsive adjustments */}
          <div className="mx-auto w-full max-w-md md:max-w-none  justify-center mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
