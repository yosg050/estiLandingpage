import { IoCodeWorking } from "react-icons/io5";

export default function Solution() {
    return (
        <div className="relative max-w-md md:max-w-3xl text-right space-y-4  mx-auto">
            {/* Background Icon */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-1 ">הפתרון</h2>

            <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
                <IoCodeWorking
                    className="text-[#DC5F00] opacity-10 w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
                />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10">
                <h2 className="text-lg md:text-2xl font-bold mb-4">
                    בדיוק בשביל זה אני כאן.
                </h2>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed space-y-2">
                    <span className="block">
                        שלום, אני אסתי גלר – ומביאה איתי ניסיון של למעלה מעשור בניהול משרדים בעסקים ובעמותות.
                    </span>
                    <span className="block">
                        באמצעות שירות ניהול משרד מרחוק, אני עוזרת לך להשתחרר מהעומס ולהחזיר לעצמך את הזמן והשליטה – בלי להעסיק מזכירה ובלי התחייבויות מיותרות.
                    </span>
                    <span className="block">
                        במקום לנסות להספיק הכול לבד – תקבל שירות מקצועי, יעיל ומותאם אישית לצרכים שלך.
                    </span>
                    <span className="block font-semibold mt-4">מה זה אומר בפועל?</span>
                    <span className="block mr-4">
                        <span className="text-green-300">✔</span> מענה מקצועי לכל המשימות השוטפות – מיילים, שירות לקוחות, תיאום פגישות<br />
                        <span className="text-green-300">✔</span> ניהול גבייה שוטפת – כולל חידוש הוראות קבע ומעקב אחר תשלומים<br />
                        <span className="text-green-300">✔</span> טיפול בטפסים ובדוחות – מילוי, מעקב, הגשה ועדכונים<br />
                        <span className="text-green-300">✔</span> שירות מותאם אישית – לפי היקף הפעילות והצרכים שלך<br />
                        <span className="text-green-300">✔</span> גמישות מלאה – ללא התחייבות, בהתאמה משתנה<br />
                        <span className="text-green-300">✔</span> תשלום לפי צורך בלבד – בלי עלויות קבועות מיותרות<br />
                        <span className="text-green-300">✔</span> חיסכון אמיתי – בזמן, בכסף ובעומס ניהולי
                    </span>
                    <span className="block mt-2 font-semibold">
                        אני כאן כדי לשחרר אותך מכל ההתעסקות הזו – כדי שאתה תוכל להתמקד בעסק שלך, ולעוף גבוה.
                    </span>
                </p>
            </div>
        </div>


    )
}