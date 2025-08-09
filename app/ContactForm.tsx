// "use client";

// import { useState, FormEvent, ChangeEvent } from "react";
// import Popup from "./Popup";

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// interface ContactFormProps {
//   trackEvent: (eventName: string) => void;
// }

// export default function ContactForm({ trackEvent }: ContactFormProps) {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [popupText, setPopupText] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const showAlert = (text: string) => {
//     setPopupText(text);
//     setShowPopup(true);
//   };

//   const handleInputChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     if (isSubmitting) return;

//     // בדיקת validation
//     if (
//       !formData.name.trim() ||
//       !formData.email.trim() ||
//       !formData.phone.trim() ||
//       !formData.message.trim()
//     ) {
//       showAlert("אנא מלא את כל השדות הנדרשים");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       showAlert("אנא הכנס כתובת אימייל תקינה");
//       return;
//     }

//     setIsSubmitting(true);
//     trackEvent("form_submit");

//     try {
//       const response = await fetch("https://formspree.io/f/manonkjq", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           name: formData.name.trim(),
//           email: formData.email.trim(),
//           phone: formData.phone.trim(),
//           message: formData.message.trim(),
//           _subject: `הודעה חדשה מהאתר מ-${formData.name.trim()}`,
//         }),
//       });

//       if (response.ok) {
//         setFormData({ name: "", email: "", phone: "", message: "" });
//         showAlert("ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.");
//       } else {
//         showAlert("שגיאה בשליחת הטופס. אנא נסה שוב.");
//       }
//     } catch (error) {
//       showAlert("שגיאת רשת. אנא בדוק את החיבור ונסה שוב.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gray-50 shadow-md relative">
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-4">
//           השאירו פרטים ואחזור אליכם בהקדם
//         </h3>

//         <div className="mb-2">
//           <label htmlFor="name" className="block text-gray-700">
//             שם *
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             value={formData.name}
//             onChange={handleInputChange}
//             className="w-full px-4 py-1 border rounded-md"
//             disabled={isSubmitting}
//           />
//         </div>

//         <div className="mb-2">
//           <label htmlFor="email" className="block text-gray-700">
//             מייל *
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full px-4 py-1 border rounded-md"
//             disabled={isSubmitting}
//           />
//         </div>

//         <div className="mb-2">
//           <label htmlFor="phone" className="block text-gray-700">
//             טלפון *
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             required
//             value={formData.phone}
//             onChange={handleInputChange}
//             className="w-full px-4 py-1 border rounded-md"
//             disabled={isSubmitting}
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="message" className="block text-gray-700">
//             הודעה *
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             rows={4}
//             value={formData.message}
//             onChange={handleInputChange}
//             className="w-full px-4 py-1 border rounded-md"
//             disabled={isSubmitting}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={isSubmitting}
//           className="w-full bg-brand-primary text-white px-6 py-3 rounded-md font-medium hover:bg-brand-lightTeal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isSubmitting ? "שולח..." : "שלח"}
//         </button>
//       </div>

//       <Popup
//         message={popupText}
//         visible={showPopup}
//         onClose={() => setShowPopup(false)}
//       />
//     </div>
//   );
// }
"use client";

import { useState, useMemo, FormEvent, ChangeEvent } from "react";
import Popup from "./Popup";

interface FormDataShape {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataShape>({
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

  const subject = useMemo(
    () => `הודעה חדשה מהאתר מ-${(formData.name || "").trim() || "מבקר"}`,
    [formData.name]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    // ולידציה בסיסית
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      showAlert("אנא מלא את כל השדות הנדרשים");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showAlert("אנא הכנס כתובת אימייל תקינה");
      return;
    }

    setIsSubmitting(true);
    try {
      // FormData כדי להימנע מ־CORS preflight (לא מגדירים Content-Type ידנית)
      const fd = new FormData();
      fd.append("name", formData.name.trim());
      fd.append("email", formData.email.trim());
      fd.append("phone", formData.phone.trim());
      fd.append("message", formData.message.trim());
      fd.append("_subject", subject);

      // שדה honeypot להפחתת ספאם (אופציונלי; קיים גם בטופס עצמו)
      fd.append("_gotcha", "");

      const response = await fetch("https://formspree.io/f/manonkjq", {
        method: "POST",
        body: fd,
        // לבקש JSON מ־Formspree כדי לדעת אם ok=true/false
        headers: { Accept: "application/json" },
      });

      let data: any = null;
      try {
        data = await response.json();
      } catch {
        // אם חזר HTML/ריק – נתפוס כאן
      }

      if (response.ok && data?.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
        showAlert("ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.");
      } else {
        const msg =
          data?.errors?.map((e: any) => e.message).join(" • ") ||
          data?.message ||
          `שגיאה בשליחת הטופס (${response.status})`;
        showAlert(msg);
      }
    } catch {
      showAlert("שגיאת רשת. אנא בדוק את החיבור ונסה שוב.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 shadow-md relative">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          השאירו פרטים ואחזור אליכם בהקדם
        </h3>

        {/* מאפשר fallback אם JS לא רץ (למשל NoScript/חסימות) */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/manonkjq"
          method="POST"
          noValidate
          className="space-y-3"
        >
          {/* שדות עזר ל־Formspree */}
          <input type="hidden" name="_subject" value={subject} />
          <input
            type="hidden"
            name="_next"
            value="https://estioffice.co.il/success"
          />
          {/* honeypot נגד ספאם (Formspree מזהה את _gotcha) */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700">
              שם *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
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
              autoComplete="email"
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
              autoComplete="tel"
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
      </div>

      <Popup
        message={popupText}
        visible={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}
