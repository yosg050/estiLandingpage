// HeroSection.jsx
import Image from "next/image";

const HeroContent = () => (
    <div className="max-w-md md:max-w-2xl text-right text-white space-y-4">
        <h2 className="text-[clamp(1rem,3vh,2.2rem)] md:text-[clamp(1rem,3vh,3rem)] font-bold mb-4">
            נמאס לכם להתעסק בבירוקרטיה במקום בעסק או בעשייה?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
            <span className="block">
                חלמתם להקים עסק מצליח או לנהל עמותה עם שליחות – אבל בפועל שוקעים בטלפונים, תיאומים, ניירת ושירות לקוחות?
            </span>
            <span className="block">
                אתם לא לבד. בעלי עסקים קטנים ומנהלי עמותות רבים מוצאים את עצמם שוקעים בניהול היומיומי,
                במקום להתמקד במה שהם באמת טובים בו – לקדם את העסק, לשרת את הקהילה ולצמוח.
            </span>
            <span className="block">
                לפעמים, גם כשכבר רוצים עזרה – העסקת מזכירה במשרה מלאה פשוט לא מתאימה:
            </span>
            <span className="block mr-4">
                <span className="text-red-300">❌</span> העלויות קבועות<br />
                <span className="text-red-300">❌</span> יש מחויבות לטווח ארוך<br />
                <span className="text-red-300">❌</span> אין גמישות אמיתית בצרכים
            </span>
            <span className="block font-semibold mt-2">
                בדיוק בשביל זה אני כאן.
            </span>
            <span className="block mt-1">
                היי, אני אסתי גלר, ואחרי ניסיון של למעלה מעשור של ניהול משרדים בעסקים ובעמותות,
                אני מציעה שירות ניהול משרד מרחוק – שמותאם אישית לצרכים שלכם.
            </span>
            <span className="block mr-4">
                <span className="text-green-300">✔</span> שירות מקצועי, אישי וגמיש<br />
                <span className="text-green-300">✔</span> תשלום רק לפי צורך – בלי התחייבות למשרה מלאה<br />
                <span className="text-green-300">✔</span> חיסכון בזמן, כסף והתעסקות
            </span>
            <span className="block mt-1">
                מענה למיילים, תיאום פגישות, גבייה, שירות לקוחות,<br />
                חידוש הוראות קבע, מילוי טפסים והגשת דוחות
            </span>
            <span className="block">
                אני כאן כדי לשחרר אתכם מכל ההתעסקות הזו – כדי שתוכלו להתמקד בעסק או בשליחות שלכם, ולהעלות אותו שלב.
            </span>
        </p>
    </div>

);

const HeroSection = () => {
    return (
        <section dir="rtl" className="min-h-screen w-full">

            {/* מובייל: תצוגה עם לוגו ברקע */}
            <div className="flex flex-col md:hidden bg-orange-700 relative min-h-screen">
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src="/logo2.png"
                        alt="Office Services Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <div className="z-10 flex flex-col items-center justify-center h-full px-4 pt-16 pb-8">
                    <HeroContent />
                </div>
            </div>

            {/* דסקטופ: פיצול ימין-שמאל */}
            <div className="hidden md:flex h-screen">
                {/* צד ימין – לוגו */}
                <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
                    <div className="relative aspect-square w-[clamp(180px,35vw,800px)]">
                        <Image
                            src="/logo2.png"
                            alt="Office Services Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>


                {/* צד שמאל – טקסט */}
                <div className="w-1/2 bg-orange-700 text-white flex items-center justify-center p-8">
                    <HeroContent />
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
