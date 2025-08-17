// import type { Handler } from "@netlify/functions";
// import { Resend } from "resend";

// // לוקח את המפתח לפי השם שהגדרת ב-Netlify
// const resend = new Resend(process.env.RESEND_KEY!);

// const json = (statusCode: number, body: unknown) => ({
//   statusCode,
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(body),
// });

// export const handler: Handler = async (event) => {
//   if (event.httpMethod !== "POST") {
//     return json(405, { ok: false, error: "Method Not Allowed" });
//   }

//   let payload: any = {};
//   try {
//     payload = JSON.parse(event.body || "{}");
//   } catch {
//     return json(400, { ok: false, error: "Invalid JSON body" });
//   }

//   const name = String(payload.name || "").trim();
//   const email = String(payload.email || "").trim();
//   const phone = String(payload.phone || "").trim();
//   const message = String(payload.message || "").trim();

//   if (!name || !email || !message || !phone) {
//     return json(400, { ok: false, error: "Missing required fields" });
//   }

//   // מייל השולח ומייל המקבל מוגדרים ב-Environment variables
//   const FROM = process.env.CONTACT_FROM;
//   const TO = process.env.CONTACT_TO;
//   if (!FROM || !TO || !process.env.RESEND_KEY) {
//     return json(500, { ok: false, error: "Server not configured (env vars)" });
//   }

//   try {
//     await resend.emails.send({
//       from: FROM, // כתובת מייל מאומתת ב-Resend
//       to: TO, // כתובת המייל שמקבלת את ההודעה
//       reply_to: email, // מאפשר לענות לשולח בלחיצה על Reply
//       subject: `הודעה חדשה מהאתר מ-${name}`,
//       text: `שם: ${name}
// אימייל: ${email}
// טלפון: ${phone}

// ${message}`,
//     });

//     return json(200, { ok: true });
//   } catch (error) {
//     console.error(error);
//     return json(500, { ok: false, error: "send_failed" });
//   }
// };



import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

// מפתח ה-API (ב-Netlify ENV בשם RESEND_KEY)
const resend = new Resend(process.env.RESEND_KEY!);

// עוזר להחזרת JSON עקבי
const json = (code: number, body: unknown) => ({
  statusCode: code,
  headers: {
    "Content-Type": "application/json",
    // אם תרצה לאפשר קריאה גם מדומיינים אחרים, שנה כאן את ה-Origin
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  body: JSON.stringify(body),
});

export const handler: Handler = async (event) => {
  // preflight אופציונלי
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method Not Allowed" });
  }

  // בדיקת משתני סביבה קריטיים
  const FROM = process.env.CONTACT_FROM; // למשל: alerts@estioffice.co.il (דומיין מאומת ב-Resend)
  const TO = process.env.CONTACT_TO; // המייל שמקבל את ההודעות
  const HAS_KEY = !!process.env.RESEND_KEY;
  if (!FROM || !TO || !HAS_KEY) {
    console.error("Missing ENV", { FROM: !!FROM, TO: !!TO, HAS_KEY });
    return json(500, { ok: false, error: "Server not configured (env vars)" });
  }

  // נפרש גוף JSON
  let payload: any = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Invalid JSON body" });
  }

  // שליפה וניקוי
  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const phone = String(payload.phone || "").trim();
  const message = String(payload.message || "").trim();

  // ולידציה בסיסית
  if (!name || !email || !phone || !message) {
    return json(400, { ok: false, error: "Missing required fields" });
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(email)) {
    return json(400, { ok: false, error: "Invalid email" });
  }

  // תוכן המייל
  const subject = `הודעה חדשה מהאתר מ-${name}`;
  const text = `שם: ${name}
אימייל: ${email}
טלפון: ${phone}

${message}`;

  try {
    const result = await resend.emails.send({
      from: FROM, // חייב להיות מדומיין מאומת ב-Resend
      to: TO, // הנמען (יכול להיות Gmail וכו')
      reply_to: email, // כדי שה-Reply יגיע לשולח
      subject,
      text,
    });

    // לוגים ל-Netlify → Functions → Logs
    console.log("Resend result:", result);

    // הצלחה אמיתית תחזיר לרוב מזהה הודעה
    const id = (result as any)?.id ?? null;
    if (id) return json(200, { ok: true, id });

    // אם אין id – נחזיר פרטים לעזרה בדיבוג
    return json(502, {
      ok: false,
      error: "no_id_from_resend",
      details: result,
    });
  } catch (err: any) {
    // שווה לפתוח את הלוגים כדי לראות את ההודעה המלאה
    console.error("Resend error:", err?.message || err);
    return json(500, { ok: false, error: err?.message || "send_failed" });
  }
};
