"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Popup from "./Popup";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
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
    service: "",
    message: "",
  });

  const [popupText, setPopupText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const showAlert = (text: string) => {
    setPopupText(text);
    setShowPopup(true);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // showAlert("תודה שפניתם אלי! אצור איתכם קשר בהקדם."); //test alert
    try {
      const response = await fetch("https://formspree.io/f/manonkjq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully:", formData);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        showAlert("תודה רבה! אני כבר על זה – ניצור קשר בקרוב");
      } else {
        console.error("Form submission error");
        showAlert("אירעה שגיאה בשליחת הטופס. נסו שוב.");
      }
    } catch (error) {
      console.error("Network error:", error);
      showAlert("שגיאת רשת. נסו שוב מאוחר יותר.");
    }
  };

  return (
    <div className="bg-gray-50 shadow-md relative">
      <div className="flex h-2">
        <div className="w-1/3 bg-black"></div>
        <div className="w-1/3 bg-[#CF0A0A]"></div>
        <div className="w-1/3 bg-[#DC5F00]"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">
          תשאירו פרטים ואחזור אליכם בהקדם
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 ">
              שם *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC5F00]"
              required
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
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC5F00]"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="phone" className="block text-gray-700 ">
              טלפון *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC5F00]"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              הודעה *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#DC5F00]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#DC5F00] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e67a00] transition-colors"
            onClick={() => trackEvent("form_submit")}
          >
            שלח
          </button>
        </form>
      </div>

      <Popup message={popupText} visible={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}


