"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import Services from "./Services";
import HeroSection from "./HeroContent";
import Solution from "./Solution";
import CalBookingButton from "@/components/Calbookingbutton";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNearContact, setIsNearContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll events for back-to-top button, floating WhatsApp, and header background
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsNearContact(rect.top < window.innerHeight && rect.bottom > 0);
      }

      // Update isScrolled state based on scroll position
      const shouldBeScrolled = window.scrollY > 100;
      setIsScrolled(shouldBeScrolled);

      const header = document.querySelector("header");
      if (header) {
        if (shouldBeScrolled) {
          header.classList.add("bg-white", "shadow-md");
          header.classList.remove("bg-transparent");
        } else {
          header.classList.remove("bg-white", "shadow-md");
          header.classList.add("bg-transparent");
        }
      }
    };

    // Call handleScroll immediately when the component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const trackEvent = (eventName: string) => {
    // Here you would implement your analytics tracking
    console.log(`Event tracked: ${eventName}`);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center relative">
          {isScrolled && (
            <div className="flex items-center gap-4">
              {/* הלוגו */}
              <div
                style={{
                  position: "relative",
                  height: "80px",
                  width: "176px",
                  marginRight: "8px",
                }}
              >
                <Image
                  src="/logoText.webp"
                  alt="אסתי גלר - שירותי מזכירות רפואית וניהול משרד מרחוק"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* כפתור Cal */}
            </div>
          )}
          <div
            className={`flex items-center ${
              isScrolled ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          ></div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6" dir="rtl">
            <button
              onClick={scrollToTop}
              className={`relative transition-colors hidden md:block mt-2 ml-6 px-4 py-2 rounded-full group ${
                isScrolled
                  ? "text-black hover:text-white"
                  : "text-white hover:text-white"
              }`}
            >
              {/* רקע אליפסה שמופיע ב-hover */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ease-out scale-0 group-hover:scale-100 ${
                  isScrolled ? "bg-brand-primary" : "bg-brand-primary/80"
                }`}
              ></span>
              <span className="relative z-10">בית</span>
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className={`relative transition-colors hidden md:block mt-2 ml-6 px-4 py-2 rounded-full group ${
                isScrolled
                  ? "text-black hover:text-white"
                  : "text-white hover:text-white"
              }`}
            >
              {/* רקע אליפסה שמופיע ב-hover */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ease-out scale-0 group-hover:scale-100 ${
                  isScrolled ? "bg-brand-primary" : "bg-brand-primary/80"
                }`}
              ></span>
              <span className="relative z-10">מה כולל השירות</span>
            </button>

            <button
              onClick={() => scrollToSection("solution")}
              className={`relative transition-colors hidden md:block mt-2 ml-6 px-4 py-2 rounded-full group ${
                isScrolled
                  ? "text-black hover:text-white"
                  : "text-white hover:text-white"
              }`}
            >
              {/* רקע אליפסה שמופיע ב-hover */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ease-out scale-0 group-hover:scale-100 ${
                  isScrolled ? "bg-brand-primary" : "bg-brand-primary/80"
                }`}
              ></span>
              <span className="relative z-10">מי אני?</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`relative transition-colors hidden md:block mt-2 ml-6 px-4 py-2 rounded-full group ${
                isScrolled
                  ? "text-black hover:text-white"
                  : "text-white hover:text-white"
              }`}
            >
              {/* רקע אליפסה שמופיע ב-hover */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-300 ease-out scale-0 group-hover:scale-100 ${
                  isScrolled ? "bg-brand-primary" : "bg-brand-primary/80"
                }`}
              ></span>
              <span className="relative z-10">יצירת קשר</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden bg-white py-4 px-4 shadow-lg rounded-b-xl"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right"
                dir="rtl"
              >
                <span className="absolute inset-0 rounded-full bg-brand-primary transition-all duration-300 ease-out scale-0 group-hover:scale-100"></span>
                <span className="relative z-10">בית</span>
              </button>

              <button
                onClick={() => {
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }}
                className="relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right"
                dir="rtl"
              >
                <span className="absolute inset-0 rounded-full bg-brand-primary transition-all duration-300 ease-out scale-0 group-hover:scale-100"></span>
                <span className="relative z-10">מה כולל השירות</span>
              </button>

              <button
                onClick={() => {
                  scrollToSection("solution");
                  setIsMenuOpen(false);
                }}
                className="relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right"
              >
                <span className="absolute inset-0 rounded-full bg-brand-primary transition-all duration-300 ease-out scale-0 group-hover:scale-100"></span>
                <span className="relative z-10">מי אני?</span>
              </button>

              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right"
              >
                <span className="absolute inset-0 rounded-full bg-brand-primary transition-all duration-300 ease-out scale-0 group-hover:scale-100"></span>
                <span className="relative z-10">יצירת קשר</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection />

      <Services />
      <section
        id="solution"
        className="scroll-mt-8 min-h-screen py-10 px-4 bg-white flex items-center"
        dir="rtl"
      >
        <div className="container mx-auto">
          <Solution />
        </div>
      </section>

      {/* Contact Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto md:mr-8 md:ml-8 ">
            <div className="flex flex-col items-center w-full">
              {/* עוטף פנימי שמיישר את כל האייקונים מימין ומרכז את הכל בדף */}
              <div className="space-y-6">
                <a
                  href="tel:97253309144"
                  className="flex flex-col md:flex-row items-center md:items-center text-lg hover:text-brand-primary transition-colors"
                  onClick={() => trackEvent("phone_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">053-3309144</span>
                </a>

                <a
                  href="https://wa.me/972533309144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center md:items-center text-lg hover:text-brand-primary transition-colors"
                  onClick={() => trackEvent("whatsapp_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <FaWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">WhatsApp</span>
                </a>

                <a
                  href="mailto:estigeller1@gmail.com"
                  className="flex flex-col md:flex-row items-center md:items-center text-lg hover:text-brand-primary transition-colors"
                  onClick={() => trackEvent("email_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">estigeller1@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/estigeller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center md:items-center text-lg hover:text-brand-primary transition-colors"
                  onClick={() => trackEvent("linkedin_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <FaLinkedinIn className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">LinkedIn</span>
                </a>

                <a
                  href="https://www.facebook.com/estioffice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center md:items-center text-lg hover:text-brand-primary transition-colors"
                  onClick={() => trackEvent("facebook_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <FaFacebookF className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">Facebook</span>
                </a>

                <CalBookingButton calUsername="esti-office" eventSlug="30min" />
              </div>
            </div>

            {/* Form component will need similar responsive adjustments */}
            <div className="mx-auto w-full max-w-md md:max-w-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/972533309144"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        onClick={() => trackEvent("whatsapp_float_click")}
        aria-label="לחצו כאן ליצירת קשר"
      >
        <FaWhatsapp className="h-8 w-8 text-white" />
      </a>
    </main>
  );
}
