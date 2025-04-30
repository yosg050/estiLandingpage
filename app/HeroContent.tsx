// HeroSection.jsx
import Image from "next/image";

const HeroContent = () => (
    <div className="max-w-md md:max-w-2xl text-right text-white space-y-4">
        <h2 className="text-[clamp(1rem,4vh,2.2rem)] md:text-[clamp(1rem,4vh,3rem)] font-bold mb-4">
            נמאס לכם להתעסק בבירוקרטיה במקום בעסק שלך או בעשייה שלך?
        </h2>
        <p className="text-base md:text-xl leading-loose space-y-4">

            <span className="block">
                חלמתם להקים עסק מצליח או לנהל עמותה עם שליחות – אבל בפועל שוקעים בטלפונים, תיאומים, ניירת ושירות לקוחות?
            </span>
            <span className="block">
                חשבונית לא שודרה, לקוח לא קיבל מענה – ואת בכלל היית בפגישה חשובה?
            </span>
            <span className="block">
                היומן מבולגן, הדו"חות נערמים, והטלפון לא מפסיק לצלצל?
            </span>
            <span className="block">
                שוב פעם הסתיימה הוראת הקבע של תורם ואתם לא מצליחים לחדש?
            </span>
            <span className="block font-semibold text-lg mt-2">
                כל כך הרבה אדמיניסטרציה ותפעול – וכל כך מעט זמן לנהל את העסק באמת.
            </span>
        </p>
    </div>

);

const HeroSection = () => {
    return (
        <section dir="rtl" className="min-h-screen w-full">

            {/* מובייל: תצוגה עם לוגו ברקע */}
            <div className="flex flex-col md:hidden bg-orange-700 relative min-h-screen">
                <div className="absolute inset-0 z-0 opacity-30 flex items-center justify-center">
                    <Image
                        src="/logo.png"
                        alt="Office Services Logo"
                        width={200}
                        height={200}
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
