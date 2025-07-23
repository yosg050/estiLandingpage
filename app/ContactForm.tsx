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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // חשוב! עצור את השליחה הרגילה של הטופס
    e.preventDefault();
    e.stopPropagation();

    console.log("Form submission started"); // Debug log

    if (isSubmitting) {
      console.log("Already submitting, returning");
      return;
    }

    // בדיקה שכל השדות מלאים
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      showAlert("אנא מלא את כל השדות הנדרשים");
      return;
    }

    setIsSubmitting(true);

    try {
      trackEvent("form_submit");
      console.log("Sending to Formspree..."); // Debug log

      const response = await fetch("https://formspree.io/f/manonkjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `הודעה חדשה מהאתר מ-${formData.name}`,
        }),
      });

      console.log("Response status:", response.status); // Debug log

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result); // Debug log
        setFormData({ name: "", email: "", phone: "", message: "" });
        showAlert("ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.");
      } else {
        const errorText = await response.text();
        console.error("Error response:", errorText); // Debug log
        showAlert("שגיאה בשליחת הטופס. נסה שוב.");
      }
    } catch (error) {
      console.error("Network error:", error); // Debug log
      showAlert("שגיאת רשת. נסה שוב מאוחר יותר.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 shadow-md relative">
      <form
        onSubmit={handleSubmit}
        noValidate
        data-netlify="false"
        className="p-6"
        // הוסף את זה כדי למנוע שליחה כפולה
        action="#"
        method="post"
      >
        <h3 className="text-xl font-semibold mb-4">
          השאירו פרטים ואחזור אליכם בהקדם
        </h3>

        <div className="mb-2">
          <label htmlFor="name" className="block text-gray-700">
            שם *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-1 border rounded-md"
            disabled={isSubmitting}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700">
            מייל *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-1 border rounded-md"
            disabled={isSubmitting}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="phone" className="block text-gray-700">
            טלפון *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-1 border rounded-md"
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-primary text-white px-6 py-3 rounded-md font-medium hover:bg-brand-lightTeal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "שולח..." : "שלח"}
        </button>
      </form>

      <Popup
        message={popupText}
        visible={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}
