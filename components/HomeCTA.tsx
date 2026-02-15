"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import CalBookingButton from "@/components/CalBookingButton";
import Popup from "@/components/Popup";
import { FaWhatsapp } from "react-icons/fa6";

interface FormData {
  name: string;
  phone: string;
  preferredTime: string;
}

export default function HomeCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    preferredTime: "",
  });

  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showAlert = (text: string) => {
    setPopupText(text);
    setShowPopup(true);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name.trim() || !formData.phone.trim()) {
      showAlert("אנא מלאו שם וטלפון");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: "",
          message: formData.preferredTime
            ? `שעה מועדפת לחזרה: ${formData.preferredTime}`
            : "פנייה מדף הבית",
          subject: `פנייה חדשה מהאתר – ${formData.name.trim()}`,
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.ok) {
        setFormData({ name: "", phone: "", preferredTime: "" });
        showAlert("הפרטים נשלחו בהצלחה! נחזור אליכם בהקדם.");
      } else {
        showAlert(data?.error || `שגיאה בשליחה (${res.status})`);
      }
    } catch {
      showAlert("שגיאת רשת. אנא בדקו את החיבור ונסו שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50" dir="rtl">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          בואו נדבר - בלי התחייבות
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
          שיחת היכרות קצרה שבה נבין אם ואיך אפשר לעזור
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Simplified Contact Form */}
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              השאירו פרטים ונחזור אליכם
            </h3>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="home-name" className="block text-gray-700 mb-1">
                  שם *
                </label>
                <input
                  type="text"
                  id="home-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-xl"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="home-phone"
                  className="block text-gray-700 mb-1"
                >
                  טלפון *
                </label>
                <input
                  type="tel"
                  id="home-phone"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-xl"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="home-time" className="block text-gray-700 mb-1">
                  שעה מועדפת לחזרה
                </label>
                <select
                  id="home-time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-xl bg-white"
                  disabled={isSubmitting}
                >
                  <option value="">לא משנה</option>
                  <option value="בוקר (8:00-12:00)">בוקר (8:00-12:00)</option>
                  <option value="צהריים (12:00-15:00)">
                    צהריים (12:00-15:00)
                  </option>
                  <option value="אחר הצהריים (15:00-17:00)">
                    אחר הצהריים (15:00-17:00)
                  </option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white px-6 py-3 rounded-2xl font-medium hover:bg-brand-lightTeal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "שולח..." : "שלחו פרטים"}
              </button>
            </form>
          </div>

          {/* Alternative Contact Options */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-2">
                רוצים לקבוע פגישה מיידית?{" "}
              </h3>
              <p className="text-gray-600 mb-4">
                לקביעת שיחת היכרות של 30 דקות - בלי התחייבות
              </p>
              <CalBookingButton calUsername="esti-office" eventSlug="30min" />
            </div>

            <div className="border-t pt-6 text-center md:text-right">
              <h3 className="text-xl font-semibold mb-2">מעדיפים WhatsApp?</h3>
              <p className="text-gray-600 mb-4">שלחו הודעה ונחזור אליכם</p>
              <a
                href="https://wa.me/972533309144"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="h-5 w-5" />
                שלחו הודעה בוואטסאפ
              </a>
            </div>

            <p className="text-gray-400 text-sm text-center md:text-right">
              <a
                href="/contact"
                className="text-brand-primary underline underline-offset-4"
              >
                כל הדרכים ליצירת קשר
              </a>
            </p>
          </div>
        </div>
      </div>

      <Popup
        message={popupText}
        visible={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </section>
  );
}
