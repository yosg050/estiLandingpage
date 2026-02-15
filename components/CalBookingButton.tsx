"use client";

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function CalBookingButton({
  calUsername = "esti-office",
  eventSlug = "30min",
  className = "",
  isMenuOpen = false,
}: {
  calUsername?: string;
  eventSlug?: string;
  className?: string;
  isMenuOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
        <span className="absolute inset-0 bg-brand-primary transition-all duration-300"></span>
        <span className="absolute inset-0 bg-brand-lightTeal scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
        <span className="absolute inset-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300"></span>
        <span className="relative z-10">לקביעת פגישה מיידית</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-2 md:p-4"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg w-full max-w-4xl h-[95vh] md:max-h-[90vh] relative flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 left-2 md:top-4 md:left-4 z-[100] bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="סגור"
            >
              <IoClose className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="flex-1 overflow-auto">
              <iframe
                src={`https://cal.com/${calUsername}/${eventSlug}?embed=true`}
                className="w-full h-full min-h-[500px] md:min-h-[600px] rounded-lg"
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
