"use client";
import CalBookingButton from "@/components/Calbookingbutton";
import Image from "next/image";

const HeroContent = () => (
  <div
    className="bg-gradient-to-b from-black/10 via-black/80 to-black/10 
               px-4 md:px-8 
               py-12 md:py-20 
               w-full max-w-screen-lg mx-auto text-white text-center
               rounded-xl shadow-2xl backdrop-blur-sm"
  >
    <h1
      className="text-brand-lightTeal font-bold text-center leading-snug
                 text-[clamp(1.4rem,5vw,2rem)] 
                 md:text-[2.4rem] 
                 mb-6"
    >
      אתם מתמקדים במטופלים, אני בכל השאר{" "}
    </h1>

    <div className="text-base md:text-xl leading-relaxed space-y-5 text-brand-lightGray">
      <p>היומן מתמלא, הטלפונים לא מפסיקים, הגבייה לא נגמרת - הכול נופל עליכם</p>{" "}
      <p>
        עם ניהול משרד מדויק, שיחות שנענות בזמן, פגישות מתואמות וגבייה שמסודרת
        כמו שצריך{" "}
      </p>
      <p>העסק שלכם מתנהל חלק ואתם חוזרים להתמקד במה שאתם הכי טובים בו</p>
    </div>

    <h2 className="text-lg md:text-2xl font-semibold text-brand-lightGray mt-6">
      ניהול משרד מרחוק לבעלי מקצועות בתחום הטיפול, הבריאות והשירות האישי,{" "}
    </h2>
  </div>
);

const HeroSection = () => {
  return (
    <section dir="rtl" className="relative w-full overflow-hidden">
      {/* תמונת רקע */}
      <Image
        src="/office.webp"
        alt="רקע משרד"
        fill
        className="object-cover brightness-50"
        priority
      />
      {/* שכבת כהות כללית */}
      <div className="absolute inset-0 bg-black opacity-20 z-0" />

      {/* תוכן עליון */}
      <div
        className="relative z-10 flex flex-col items-center justify-center 
                   min-h-screen px-4 md:px-6 gap-8"
      >
        <HeroContent />
        <CalBookingButton calUsername="esti-office" eventSlug="30min" />
        {/* הכפתור */}
      </div>
    </section>
  );
};

export default HeroSection;
