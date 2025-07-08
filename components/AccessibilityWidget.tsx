"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Eye,
  Type,
  MousePointer,
  Palette,
  Keyboard,
  PauseCircle,
  Sun,
  Moon,
} from "lucide-react";

/* ---------- helper: close-on-outside-click ---------- */
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  handler: () => void,
  active = true
) {
  useEffect(() => {
    if (!active) return;

    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler(); // לחיצה בחוץ → סגור
    };

    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler, active]);
}

/* ---------- טיפוס הגדרות ---------- */
interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
  dyslexicFont: boolean;
//   keyboardFocus: boolean;
//   stopAnimations: boolean;
  darkMode: boolean;
}

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    grayscale: false,
    underlineLinks: false,
    bigCursor: false,
    dyslexicFont: false,
    // keyboardFocus: false,
    // stopAnimations: false,
    darkMode: false,
  });

  /* ref למעטפת (כפתור + תפריט) */
  const widgetRef = useRef<HTMLDivElement>(null);
  useOutsideClick(widgetRef, () => setIsOpen(false), isOpen);

  /* ---------- ניהול סגנונות דינמיים ---------- */
  const styleRefs = useRef<Record<string, HTMLStyleElement | null>>({});

  const manageStyleTag = (id: string, css: string, on: boolean) => {
    if (on && !styleRefs.current[id]) {
      const style = document.createElement("style");
      style.id = id;
      style.textContent = css;
      document.head.appendChild(style);
      styleRefs.current[id] = style;
    } else if (!on && styleRefs.current[id]) {
      styleRefs.current[id]!.remove();
      styleRefs.current[id] = null;
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    /* Dark-mode */
    html.classList.toggle("dark", settings.darkMode);

    /* Font-size */
    html.style.fontSize = `${settings.fontSize}%`;

    /* Contrast + Grayscale */
    const filters = [];
    if (settings.highContrast) filters.push("contrast(175%)");
    if (settings.grayscale) filters.push("grayscale(100%)");
    html.style.filter = filters.join(" ");

    /* Dyslexic font */
    if (settings.dyslexicFont) {
      body.style.fontFamily = "'OpenDyslexic', Arial, sans-serif";
      body.style.letterSpacing = "0.1em";
    } else {
      body.style.fontFamily = "";
      body.style.letterSpacing = "";
    }

    /* Dynamic styles */
    manageStyleTag(
      "underline-links",
      "a{text-decoration:underline!important}",
      settings.underlineLinks
    );
    // manageStyleTag(
    //   "keyboard-focus",
    //   "a:focus,button:focus,input:focus,[tabindex]:focus{outline:3px solid #005FFF!important;box-shadow:0 0 10px #005FFF}",
    //   settings.keyboardFocus
    // );
    // manageStyleTag(
    //   "stop-animations",
    //   "*,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important;scroll-behavior:auto!important}",
    //   settings.stopAnimations
    // );

    /* Big cursor */
    html.style.cursor = settings.bigCursor
      ? 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="white" stroke="black" stroke-width="2" d="M6,2 L6,26 L12,20 L18,29 L22,27 L16,18 L25,18 Z"/></svg>\') 2 2, auto'
      : "auto";
  }, [settings]);

  /* ---------- פעולות ---------- */
  const toggleSetting = (key: keyof AccessibilitySettings) =>
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));

  const changeFontSize = (delta: number) =>
    setSettings((prev) => ({
      ...prev,
      fontSize: Math.max(75, Math.min(200, prev.fontSize + delta)),
    }));

  const reset = () =>
    setSettings({
      fontSize: 100,
      highContrast: false,
      grayscale: false,
      underlineLinks: false,
      bigCursor: false,
      dyslexicFont: false,
    //   keyboardFocus: false,
    //   stopAnimations: false,
      darkMode: false,
    });

  /* ---------- נתוני כפתורי האפשרויות ---------- */
  const options = [
    // { key: "darkMode", label: "מצב כהה", icon: Moon },
    { key: "highContrast", label: "ניגודיות גבוהה", icon: Eye },
    // { key: "keyboardFocus", label: "הדגשת פוקוס", icon: Keyboard },
    // { key: "stopAnimations", label: "עצירת אנימציות", icon: PauseCircle },
    { key: "bigCursor", label: "סמן גדול", icon: MousePointer },
    { key: "underlineLinks", label: "הדגשת קישורים", icon: Type },
    { key: "dyslexicFont", label: "גופן קריא", icon: Type },
    { key: "grayscale", label: "גווני אפור", icon: Palette },
  ] as const;

  /* ---------- UI ---------- */
  return (
    <div ref={widgetRef} className="fixed bottom-2 left-2 z-50" dir="rtl">
      {/* כפתור פתיחה */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="
          fixed bottom-4 left-4 z-50
          bg-blue-600 text-white
          px-3 py-3 rounded-xl
          border-2 border-white ring-2 ring-blue-600
          shadow hover:bg-blue-700
          transition-all duration-300
        "
        title="פתח תפריט נגישות"
        aria-label="פתח תפריט נגישות"
      >
        {/* אייקון נגישות */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm8 7h-5v12a1 1 0 11-2 0v-5h-2v5a1 1 0 11-2 0V9H4a1 1 0 110-2h16a1 1 0 110 2z" />
        </svg>
      </button>

      {/* תפריט  */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border dark:border-gray-700 p-4">
          {/* כותרת וסגירה */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              תפריט נגישות
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              aria-label="סגור"
            >
              &times;
            </button>
          </div>

          {/* גודל גופן */}
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 font-bold">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              גודל טקסט
            </span>
            <div className="flex items-center space-x-2 space-x-reverse">
              <button
                onClick={() => changeFontSize(-10)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 px-2.5 py-1 rounded text-lg font-bold"
                disabled={settings.fontSize <= 75}
                aria-label="הקטן גופן"
              >
                –
              </button>
              <span className="w-12 text-center text-sm text-gray-700 dark:text-gray-300">
                {settings.fontSize}%
              </span>
              <button
                onClick={() => changeFontSize(10)}
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 px-2.5 py-1 rounded text-lg font-bold"
                disabled={settings.fontSize >= 200}
                aria-label="הגדל גופן"
              >
                +
              </button>
            </div>
          </div>

          {/* שאר האפשרויות */}
          {options.map(({ key, label, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              <span className="flex items-center text-sm text-gray-700 dark:text-gray-300 font-bold">
                <Icon size={16} className="ml-2" />
                {label}
              </span>
              <button
                onClick={() => toggleSetting(key)}
                className={`relative w-12 h-6 rounded-full transition-colors  ${
                  settings[key] ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-pressed={settings[key]}
              >
                <span className="sr-only ">{label}</span>
                <div
                  className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    settings[key] ? "translate-x-6" : ""
                  }`}
                />
              </button>
            </div>
          ))}

          {/* איפוס */}
          <button
            onClick={reset}
            className="w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition-colors"
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
