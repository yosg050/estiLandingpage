"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Services from "./Services";
import HeroSection from "./HeroContent";
import Solution from "./Solution";
import Process from "./Process";
import Navigation from "./Navigation";
import ContactSection from "./Contactsection";

export default function LandingPage() {
  const [isNearContact, setIsNearContact] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  const trackEvent = (eventName: string) => {
    // Here you would implement your analytics tracking
    console.log(`Event tracked: ${eventName}`);
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <Navigation
        isScrolled={isScrolled}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
      />

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

      <div className="container mx-auto">
        <Process />
      </div>

      {/* Contact Section */}
      <ContactSection trackEvent={trackEvent} />

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
