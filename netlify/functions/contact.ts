import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

// לוקח את המפתח לפי השם שהגדרת ב-Netlify
const resend = new Resend(process.env.RESEND_KEY!);

const json = (statusCode: number, body: unknown) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, error: "Method Not Allowed" });
  }

  let payload: any = {};
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, error: "Invalid JSON body" });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const phone = String(payload.phone || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !email || !message || !phone) {
    return json(400, { ok: false, error: "Missing required fields" });
  }

  // מייל השולח ומייל המקבל מוגדרים ב-Environment variables
  const FROM = process.env.CONTACT_FROM;
  const TO = process.env.CONTACT_TO;
  if (!FROM || !TO || !process.env.RESEND_KEY) {
    return json(500, { ok: false, error: "Server not configured (env vars)" });
  }

  try {
    await resend.emails.send({
      from: FROM, // כתובת מייל מאומתת ב-Resend
      to: TO, // כתובת המייל שמקבלת את ההודעה
      reply_to: email, // מאפשר לענות לשולח בלחיצה על Reply
      subject: `הודעה חדשה מהאתר מ-${name}`,
      text: `שם: ${name}
אימייל: ${email}
טלפון: ${phone}

${message}`,
    });

    return json(200, { ok: true });
  } catch (error) {
    console.error(error);
    return json(500, { ok: false, error: "send_failed" });
  }
};
