"use client"

import { useState, FormEvent, ChangeEvent } from "react"

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

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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
        alert("Thank you for your message! We will contact you shortly.");
      } else {
        console.error("Form submission error");
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">תשאירו פרטים ואחזור אליכם בהקדם</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block text-gray-700 ">
            שם  *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8800]"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8800]"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8800]"
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
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF8800]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FF8800] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e67a00] transition-colors"
          onClick={() => trackEvent("form_submit")}
        >
          שלח
        </button>
      </form>
    </div>
  );
}