"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavigationProps {
  isScrolled: boolean;
  scrollToTop: () => void;
  scrollToSection: (id: string) => void;
}

export default function Navigation({
  isScrolled,
  scrollToTop,
  scrollToSection,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
            onClick={() => scrollToSection("process")}
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
            <span className="relative z-10">מה התהליך?</span>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden"
            dir="rtl"
          >
            <div className="flex flex-col space-y-4 px-6">
              <button
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }}
                className="relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right"
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
                  scrollToSection("process");
                  setIsMenuOpen(false);
                }}
                className="relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right"
                dir="rtl"
              >
                <span className="absolute inset-0 rounded-full bg-brand-primary transition-all duration-300 ease-out scale-0 group-hover:scale-100"></span>
                <span className="relative z-10">מה התהליך?</span>
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
      </div>
    </header>
  );
}
