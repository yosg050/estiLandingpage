"use client";
import { useEffect } from "react";

interface PopupProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Popup({ message, visible, onClose }: PopupProps) {
  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-2xl rounded-xl overflow-hidden max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* פס עליון צבעוני */}
        <div className="flex h-1.5">
          <div className="w-1/3 bg-brand-primary"></div>
          <div className="w-1/3 bg-brand-softGreen"></div>
          <div className="w-1/3 bg-brand-lightTeal"></div>
        </div>

        {/* גוף ההודעה */}
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-gray-700 text-lg font-medium">{message}</p>
        </div>
      </div>
    </div>
  );
}
