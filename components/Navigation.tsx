"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/services", label: "מה כולל השירות" },
  { href: "/about", label: "מי אני?" },
  { href: "/how-it-works", label: "איך זה עובד?" },
  { href: "/blog", label: "מאמרים" },
  { href: "/contact", label: "יצירת קשר" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 100;
      setIsScrolled(shouldBeScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // On home page, header starts transparent; on other pages, always solid
  const isHome = pathname === "/";
  const showSolid = !isHome || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center relative">
        {showSolid && (
          <div className="flex items-center gap-4">
            <Link href="/">
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
            </Link>
          </div>
        )}
        <div
          className={`flex items-center ${
            showSolid ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        ></div>

        {/* Desktop Navigation */}
        <nav className="flex items-center space-x-6" dir="rtl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors hidden md:block mt-2 ml-6 px-4 py-2 rounded-full group ${
                  showSolid
                    ? "text-black hover:text-white"
                    : "text-white hover:text-white"
                } ${isActive && showSolid ? "font-bold" : ""}`}
              >
                <span
                  className={`absolute inset-0 rounded-full transition-all duration-300 ease-out ${
                    isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                  } ${showSolid ? "bg-brand-primary" : "bg-brand-primary/80"}`}
                ></span>
                <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${showSolid ? "text-black" : "text-white"}`}
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
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative text-black hover:text-white transition-colors py-2 px-4 rounded-full group text-right ${
                      isActive ? "font-bold" : ""
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full bg-brand-primary transition-all duration-300 ease-out ${
                        isActive ? "scale-100" : "scale-0 group-hover:scale-100"
                      }`}
                    ></span>
                    <span className={`relative z-10 ${isActive ? "text-white" : ""}`}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
