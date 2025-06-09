import { FaStethoscope } from "react-icons/fa";

export default function Solution() {
    return (
        <div className="relative max-w-md md:max-w-3xl text-right space-y-4  mx-auto">
            {/* Background Icon */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 ">הפתרון</h2>

            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
                <FaStethoscope
                    className="text-brand-lightTeal opacity-50 w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
                <h2 className="text-lg md:text-2xl font-bold mb-4">
                    בדיוק בשביל זה אני כאן.
                </h2>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed space-y-2">
                    <span className="block">
                        שלום, אני אסתי גלר – עם ניסיון של מעל עשור בניהול בעולם הרפואה והקהילה
                    </span>
                    <span className="block">
                        דרך שירות ניהול משרד מרחוק, אני עוזרת לרופאים ומטפלים לשחרר את העומס – ולזכות בשקט, סדר ותפעול שוטף שמאפשר להם להתמקד במטופלים.
                    </span>
                    <span className="block">
                        בלי להעסיק מזכירה, בלי התחייבות – רק שירות אישי, דיסקרטי ומדויק לצרכים של הקליניקה שלך.
                    </span>
                    <span className="block font-semibold mt-4">מה אני עושה עבורך?</span>
                    <span className="block mr-4">
                        <span className="text-green-300">✔</span> ניהול יומן ותיאום תורים<br />
                        <span className="text-green-300">✔</span> מענה ללקוחות ופניות חדשות<br />
                        <span className="text-green-300">✔</span> גבייה שוטפת ומעקב אחר תשלומים<br />
                        <span className="text-green-300">✔</span> סיוע בניהול טפסים, סיכומים ודוחות<br />
                        <span className="text-green-300">✔</span> עבודה עם מערכות CRM ומערכות רלוונטיות לקליניקות<br />
                        <span className="text-green-300">✔</span> שירות גמיש, זמין ומותאם אישית<br />
                        <span className="text-green-300">✔</span> חיסכון בזמן, בכסף ובעיקר – בעצבים
                    </span>
                    <span className="block mt-2 font-semibold">
                        אני כאן כדי שתוכל לטפל בראש שקט – והקליניקה תמשיך להתנהל כמו שצריך.
                    </span>
                </p>
            </div>

        </div>


    )
}