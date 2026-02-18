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

  // ולידציה בסיסית – email אופציונלי (HomeCTA שולח בלי email)
  if (!name || !phone || !message) {
    return json(400, { ok: false, error: "Missing required fields" });
  }
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRx.test(email)) {
    return json(400, { ok: false, error: "Invalid email" });
  }

  // תוכן המייל
  const subject = `הודעה חדשה מהאתר מ-${name}`;
  const text = `שם: ${name}
אימייל: ${email}
טלפון: ${phone}

${message}`;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      ...(email ? { reply_to: email } : {}),
      subject,
      text,
    });

    console.log("Resend result:", { data, error });

    if (error) {
      return json(502, { ok: false, error });
    }

    if (data?.id) {
      return json(200, { ok: true, id: data.id });
    }

    return json(502, {
      ok: false,
      error: "no_id_from_resend_shape",
      details: { data, error },
    });
  } catch (e: any) {
    console.error("Resend exception:", e?.message || e);
    return json(500, { ok: false, error: e?.message || "send_failed" });
  }
};
