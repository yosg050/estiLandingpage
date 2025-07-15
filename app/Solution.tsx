import { FaStethoscope } from "react-icons/fa";

export default function Solution() {
  return (
    <div className="relative max-w-md md:max-w-3xl text-right space-y-4  mx-auto">
      {/* Background Icon */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 text-black">
        מה אני מציעה
      </h2>

      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        <FaStethoscope className="text-brand-lightTeal opacity-50 w-[300px] h-[300px] md:w-[600px] md:h-[600px]" />
      </div>
      {/* Foreground Content */}
      <div className="relative z-10">
        <h2 className="text-lg md:text-2xl font-bold mb-4">
          בדיוק בשביל זה השירות שלי קיים
        </h2>

        <p className="text-base md:text-lg lg:text-xl leading-relaxed space-y-2">
          <span className="block">
            שלום, אני אסתי גלר – עם ניסיון של מעל עשור בניהול ואדמניסטרציה בעולם
            הרפואה והקהילה
          </span>
          <span className="block">
            השירות שלי מעניק פתרון כולל לניהול הקליניקה – מרחוק, בלי להעסיק
            מזכירה. כך משתחררים מהעומס וחוזרים להתמקד במה שחשוב באמת: המטופלים.
          </span>

          <ul className="list-none  mr-6 space-y-1 text-brand-textMain">
            <li>
              <span className="text-green-400">✔</span> ניהול יומן ותיאום תורים
            </li>
            <li>
              <span className="text-green-400">✔</span> מענה לפניות והודעות
              חדשות
            </li>
            <li>
              <span className="text-green-400">✔</span> גבייה שוטפת ומעקב אחר
              תשלומים
            </li>
            <li>
              <span className="text-green-400">✔</span> ניהול טפסים, סיכומים
              ודוחות
            </li>
            <li>
              <span className="text-green-400">✔</span> עבודה עם מערכות CRM
              וכלים תפעוליים
            </li>
            <li>
              <span className="text-green-400">✔</span> שירות מותאם אישית, גמיש
              ודיסקרטי
            </li>
            <li>
              <span className="text-green-400">✔</span> חיסכון בזמן וצימצום
              עלויות
            </li>
          </ul>
          <span className="block mt-2 font-semibold">
            אני כאן כדי שתוכל לטפל בראש שקט – והקליניקה תמשיך להתנהל כמו שצריך.
          </span>
        </p>
      </div>
    </div>
  );
}
