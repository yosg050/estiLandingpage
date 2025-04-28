"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowUp, Phone, Mail, MessageSquare, Menu, X } from "lucide-react"
import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa6";
import ContactForm from "./ContactForm"
import Services from "./Services"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [selectedService, setSelectedService] = useState("")
  const [isNearContact, setIsNearContact] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)


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


  return (

    <main className="min-h-screen bg-white" >
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`} >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center relative" style={{ paddingLeft: "5%", paddingRight: "5%" }}>
          {isScrolled && (
            <div className="h-12 md:h-16 w-12 md:w-16 relative">
              <a href="/" >
                <Image
                  src="/logo.png"
                  alt="Small Logo"
                  fill
                  className="object-contain"
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
              className="text-black hover:text-[#FF8800] transition-colors hidden md:block mt-2 ml-6"
            >
              בית
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-black hover:text-[#FF8800] transition-colors hidden md:block mt-2"
            >
              מה אנחנו מציעים
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-[#FF8800] transition-colors hidden md:block mt-2"
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
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-[#FF8800] transition-colors py-2" dir="rtl"
              >
                בית
              </button>
              <button
                onClick={() => {
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-[#FF8800] transition-colors py-2"
              >
                מה אני מציעה
              </button>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
                className="text-black hover:text-[#FF8800] transition-colors py-2"
              >
                יצירת קשר
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800/50 relative" style={{ height: "100vh", maxHeight: "-webkit-fill-available" }} dir="rtl">
        {/* תמונה ברקע */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/logo.png"
            alt="Office Services Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* תוכן */}
        <div className="flex flex-col items-center justify-center h-full px-4 pt-16 pb-8 relative z-10" >
          <div className="max-w-md md:max-w-2xl mx-auto text-center text-gray-100">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              תן לעסק שלך לעבוד בשבילך
            </h2>
            <p className="text-base  md:text-lg">
              שמי אסתי ואני מתמחה בשירותי משרד וירטואליים. <br className="hidden md:block" />
              <br className="hidden md:block" />
              עם מגוון רחב של שירותים, אני מספקת פתרונות לעסקים קטנים ועמותות.
            </p>
          </div>
        </div>
      </section>

      <Services />
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-10 px-4 bg-white flex items-center" dir="rtl">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">יצירת קשר</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto md:mr-8 md:ml-8">
            {/* Contact Information */}
            <div className="flex flex-col justify-center text-center md:text-right md:mr-8">
              <p className="text-gray-600 mb-8 mx-auto md:mr-8 max-w-md md:max-w-none">
                הגיע הזמן לקחת את העסק שלכם לשלב הבא! <br />צרו קשר עוד היום וגלו איך שירותי המשרד שלנו יקפיצו אתכם קדימה.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:97253309144"
                  className="flex flex-col md:flex-row items-center md:items-start text-lg hover:text-[#FF8800] transition-colors"
                  onClick={() => trackEvent("phone_click")}
                >
                  <div className="w-12 h-12 bg-[#FF8800] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">053-3309144</span>
                </a>

                <a
                  href="https://wa.me/972533309144"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row items-center md:items-start text-lg hover:text-[#FF8800] transition-colors"
                  onClick={() => trackEvent("whatsapp_click")}
                >
                  <div className="w-12 h-12 bg-[#FF8800] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
                    <FaWhatsapp className="h-6 w-6 text-white" />
                  </div>
                  <span className="block md:inline">WhatsApp</span>
                </a>

                <a
                  href="mailto:estigeller1@gmail.com"
                  className="flex flex-col md:flex-row items-center md:items-start text-lg hover:text-[#FF8800] transition-colors"
                  onClick={() => trackEvent("email_click")}
                >
                  <div className="w-12 h-12 bg-[#FF8800] rounded-full flex items-center justify-center mx-auto mb-2 md:mb-0 md:mr-8 md:ml-4 md:mx-0">
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
          className="fixed bottom-24 left-4 z-40 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          onClick={() => trackEvent("whatsapp_float_click")}
        >
          <FaWhatsapp className="h-12 w-12" />
        </a>
      )}


      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-40 bg-[#FF8800] text-white p-3 rounded-full shadow-lg hover:bg-[#e67a00] transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </main>
  )
}