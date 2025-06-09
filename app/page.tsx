"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowUp, Phone, Mail, Menu, X } from "lucide-react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from "./ContactForm"
import Services from "./Services"
import HeroSection from "./HeroContent"
import Solution from "./Solution"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [selectedService, setSelectedService] = useState("")
  const [isNearContact, setIsNearContact] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll events for back-to-top button, floating WhatsApp, and header background
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        setIsNearContact(rect.top < window.innerHeight && rect.bottom > 0)
      }

      // Update isScrolled state based on scroll position
      const shouldBeScrolled = window.scrollY > 100;
      setIsScrolled(shouldBeScrolled);

      const header = document.querySelector("header")
      if (header) {
        if (shouldBeScrolled) {
          header.classList.add("bg-white", "shadow-md")
          header.classList.remove("bg-transparent")
        } else {
          header.classList.remove("bg-white", "shadow-md")
          header.classList.add("bg-transparent")
        }
      }
    }

    // Call handleScroll immediately when the component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const trackEvent = (eventName: string) => {
    // Here you would implement your analytics tracking
    console.log(`Event tracked: ${eventName}`)
    // Example: if using Google Analytics
    // if (window.gtag) window.gtag('event', eventName);
  }
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
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
    <main className="min-h-screen bg-white" >
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`} >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center relative">

          {isScrolled && (
            <div className="h-20 w-44 relative m-0 p-0">  {/* 80px גובה, 176px רוחב */}
              <a href="/" className="block m-0 p-0">
                <Image
                  src="/logoText.png"
                  alt="Small Logo"
                  fill
                  className="object-contain m-0 p-0"
                  priority
                />
              </a>
            </div>

          )}
          <div className={`flex items-center ${isScrolled ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-6" dir="rtl">
            <button
              onClick={scrollToTop}
              className="text-black hover:text-brand-primary  transition-colors hidden md:block mt-2 ml-6"
            >
              בית
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-black hover:text-brand-primary  transition-colors hidden md:block mt-2"
            >
              הפתרון
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-black hover:text-brand-primary  transition-colors hidden md:block mt-2"
            >
              מה תקבלו?
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-brand-primary  transition-colors hidden md:block mt-2"
            >
              יצירת קשר
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-brand-primary transition-colors py-2" dir="rtl"
              >
                בית
              </button>
              <button
                onClick={() => {
                  scrollToSection("solution");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-brand-primary  transition-colors py-2"
              >
                הפתרון
              </button>

              <button
                onClick={() => {
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-brand-primary  transition-colors py-2" dir="rtl"
              >
                מה תקבלו?
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-brand-primary  transition-colors py-2"
              >
                יצירת קשר
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <HeroSection />

      <section id="solution" className=" scroll-mt-8 min-h-screen py-10 px-4 bg-white flex items-center" dir="rtl">
        <div className="container mx-auto">
          <Solution />
        </div>
      </section>

      <Services />
      {/* Contact Section */}
      <section id="contact" className=" scroll-mt-10 min-h-screen py-10 px-4 bg-white flex items-center " dir="rtl">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">יצירת קשר</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto md:mr-8 md:ml-8">
            {/* Contact Information */}
            <div className="flex flex-col justify-center text-center md:text-right md:mr-8">
              <p className="text-xl font-semibold mb-8 mx-auto md:mr-8 max-w-md md:max-w-none">
                תנו לי לטפל בבירוקרטיה – כדי שאתם תוכלו לטפל באנשים. <br />
                שירותי ניהול משרד למרפאות – מקצועי, אנושי ומדויק.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:97253309144"
                  className="flex flex-col md:flex-row items-center md:items-start text-lg hover:text-brand-primary  transition-colors"
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
                  className="flex flex-col md:flex-row items-center md:items-start text-lg hover:text-brand-primary  transition-colors"
                  onClick={() => trackEvent("whatsapp_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <FaWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">WhatsApp</span>
                </a>

                <a
                  href="mailto:estigeller1@gmail.com"
                  className="flex flex-col md:flex-row items-center md:items-start text-lg hover:text-brand-primary  transition-colors"
                  onClick={() => trackEvent("email_click")}
                >
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">estigeller1@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Form component will need similar responsive adjustments */}
            <div className="mx-auto w-full max-w-md md:max-w-none">
              <ContactForm trackEvent={trackEvent} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-black text-white py-1 px-4">
        <div className="container mx-auto">
        </div>
      </footer> */}

      {/* Floating WhatsApp Button */}
      {!isNearContact && (
        <a
          href="https://wa.me/972533309144"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 left-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          onClick={() => trackEvent("whatsapp_float_click")}
        >
          <FaWhatsapp className="h-10 w-10" />
        </a>
      )}


      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-40 bg-brand-primary text-white p-3 rounded-full shadow-lg hover:bg-brand-darkBlue transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </main>
  )
}