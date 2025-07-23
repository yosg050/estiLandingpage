"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Popup from "./Popup";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  trackEvent: (eventName: string) => void;
}

export default function ContactForm({ trackEvent }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showAlert = (text: string) => {
    setPopupText(text);
    setShowPopup(true);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // מניעת שליחה כפולה

    setIsSubmitting(true);
    trackEvent("form_submit");

    try {
      const response = await fetch("https://formspree.io/f/manonkjq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        showAlert("תודה רבה! אני כבר על זה – ניצור קשר בקרוב");
      } else {
        showAlert("אירעה שגיאה בשליחת הטופס. נסו שוב.");
      }
    } catch {
      showAlert("שגיאת רשת. נסו שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 shadow-md relative">
      <form onSubmit={handleSubmit} noValidate>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">
            השאירו פרטים ואחזור אליכם בהקדם
          </h3>

          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700">
              שם *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border rounded-md"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700">
              מייל *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border rounded-md"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="phone" className="block text-gray-700">
              טלפון *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              הודעה *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-primary text-white px-6 py-3 rounded-md font-medium hover:bg-brand-lightTeal transition-colors"
          >
            {isSubmitting ? "שולח..." : "שלח"}
          </button>
        </div>
      </form>

      <Popup
        message={popupText}
        visible={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}
