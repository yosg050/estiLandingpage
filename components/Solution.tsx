import Image from "next/image";
import Link from "next/link";
import { FaStethoscope } from "react-icons/fa";
import imege from "../public/esti-profile.jpg";

export default function Solution() {
  return (
    <section
      dir="rtl"
      className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-10 text-right"
    >
      {/* כותרת */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
        אסתי גלר - מזכירה וירטואלית ומנהלת משרד מרחוק
      </h1>

      {/* עטיפה רספונסיבית */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        {/* תמונה */}
        <div className="order-1 md:order-2 w-full md:w-[35%] flex justify-center md:justify-end">
          <div className="w-full max-w-[360px] md:max-w-[420px]">
            <Image
              src={imege}
              alt="אסתי גלר - ניהול משרד מרחוק לרופאים ומטפלים"
              width={800}
              height={1000}
              className="rounded-2xl shadow-lg object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* טקסט + אייקון רקע */}
        <div className="relative order-2 md:order-1 w-full md:w-[65%] text-[1.05rem] md:text-[1.125rem] leading-relaxed">
          {/* אייקון רקע - ממורכז מתחת לטקסט בלבד */}
          {/* <div
            aria-hidden="true"
            className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none"
          >
            <FaStethoscope className="text-brand-lightTeal/30 w-[220px] h-[220px] md:w-[350px] md:h-[350px]" />
          </div> */}

          {/* טקסט */}
          <div className="relative z-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 ">
              נעים להכיר – אני אסתי גלר
            </h3>

            <p className="mt-2">
              מעל עשור אני מלווה בעלי מקצוע בתחומי הטיפול, הבריאות והשירות האישי
              בעבודה השוטפת. לאורך השנים נחשפתי שוב ושוב לאותה בעיה: עומס ניהולי
              שגוזל זמן ואנרגיה ופוגע ביכולת להתמקד בעבודה המקצועית.
            </p>

            <p className="mt-2">
              מתוך ההבנה הזו הקמתי את <strong>Esti Office</strong> - ניהול משרד
              מרחוק לבעלי מקצוע שמתמחים בנתינת שירות אישי. לרופאים ורופאות
              יועצים ומטפלים רגשיים, קוסמטיקאיות, מטפלים/ות ברפואה משלימה - אני
              מביאה שילוב של סדר תפעולי, רגישות אנושית והיכרות עמוקה עם מערכות
              ניהול וכלים דיגיטליים - כדי להעניק לכם <strong>שקט ניהולי</strong>{" "}
              וביטחון שהכול מתנהל כמו שצריך
            </p>

            <p className="mt-2">
              אצלי זה אישי: זמינות, דיוק, והובלת התהליך מקצה לקצה - כך שאתם
              יכולים להתמקד בטיפול, בידיעה שיש מי שמחזיק את הקצוות.
            </p>

            {/* דגשים קצרים */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm md:text-base">
              <div className="bg-white border border-gray-200 md:border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-4">
                <strong className="block text-brand-darkTeal mb-1">
                  שקט ניהולי
                </strong>
                <div className="text-gray-700">פחות רעש, יותר שליטה.</div>
              </div>

              <div className="bg-white border border-gray-200 md:border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-4">
                <strong className="block text-brand-darkTeal mb-1">
                  דיוק ויעילות
                </strong>
                <div className="text-gray-700">תהליכים שעובדים בשבילכם.</div>
              </div>

              <div className="bg-white border border-gray-200 md:border-gray-300 rounded-xl shadow-md hover:shadow-lg transition p-4">
                <strong className="block text-brand-darkTeal mb-1">
                  יחס אנושי
                </strong>
                <div className="text-gray-700">ליווי אישי, קשוב וצמוד.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Hub - factual block, synced with llms.txt for AEO citation */}
      <div className="mt-14 bg-white border border-gray-200 rounded-2xl shadow-md p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black">
          Esti Office — עובדות על השירות
        </h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-[1.05rem] max-w-3xl mx-auto">
          <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="font-semibold text-brand-darkTeal">מייסדת</dt>
            <dd className="text-gray-700">אסתי גלר (Esti Geller)</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="font-semibold text-brand-darkTeal">ניסיון</dt>
            <dd className="text-gray-700">מעל עשור בליווי בעלי מקצוע</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="font-semibold text-brand-darkTeal">אזור שירות</dt>
            <dd className="text-gray-700">ישראל (שירות מרחוק)</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="font-semibold text-brand-darkTeal">שעות פעילות</dt>
            <dd className="text-gray-700">ראשון–חמישי, 08:00–17:00</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="font-semibold text-brand-darkTeal">מודל עבודה</dt>
            <dd className="text-gray-700">מודולרי, ללא התחייבות, ללא עלויות מעביד</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-gray-100 pb-2">
            <dt className="font-semibold text-brand-darkTeal">שפת השירות</dt>
            <dd className="text-gray-700">עברית</dd>
          </div>
        </dl>

        <p className="mt-6 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          השירות כולל ניהול יומן ותיאום תורים, גבייה וסדר פיננסי, תיעוד והפקת
          דוחות, ניהול מערכות וכלים דיגיטליים, אוטומציות, ושמירה על דיסקרטיות
          וחיסיון. רוצים את הפירוט המלא? קראו על{" "}
          <Link
            href="/services"
            className="text-brand-primary font-medium hover:underline"
          >
            שירותי משרד מרחוק ומזכירה וירטואלית במיקור חוץ
          </Link>{" "}
          או על{" "}
          <Link
            href="/how-it-works"
            className="text-brand-primary font-medium hover:underline"
          >
            תהליך ההתחלה והתמחור
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
