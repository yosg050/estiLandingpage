"use client";

import { useState, useEffect } from "react";

export default function CalBookingButton({
  calUsername = "esti-office",
  eventSlug = "30min",
  className = "",
  isMenuOpen = false, // ← מקבל מההורה
}: {
  calUsername?: string;
  eventSlug?: string;
  className?: string;
  isMenuOpen?: boolean; // ← טיפוס ל־prop
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  console.log("isMenuOpen", isMenuOpen);
  // הקפאת גלילה כשהמודאל פתוח
  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={handleClick}
        className={`
    relative group
    px-4 py-2 md:px-6 md:py-3
    rounded-full
    font-semibold text-white
    transition-all duration-300 ease-in-out
    overflow-hidden
    ${isMenuOpen ? "text-[10px] md:text-xs" : "text-base md:text-lg"}
    ${className}
  `}
        dir="rtl"
      >
        {/* רקע רגיל */}
        <span className="absolute inset-0 bg-brand-primary transition-all duration-300"></span>

        {/* רקע אליפסה שמופיע ב-hover */}
        <span className="absolute inset-0 bg-brand-lightTeal scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>

        {/* צל */}
        <span className="absolute inset-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300"></span>

        {/* טקסט */}
        <span className="relative z-10">לקביעת פגישה מיידית</span>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] relative flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="סגור"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex-1 overflow-auto">
              <iframe
                src={`https://cal.com/${calUsername}/${eventSlug}?embed=true`}
                className="w-full min-h-[600px] h-full rounded-lg"
                frameBorder="0"
                allow="camera; microphone; autoplay; display-capture"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
