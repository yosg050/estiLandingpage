// HeroSection.tsx
import Image from "next/image";

const HeroContent = () => (
  <div className="max-w-md md:max-w-2xl text-right text-brand-textMain space-y-4 z-10">
    <h2 className="text-[clamp(1rem,4vh,2.2rem)] md:text-[clamp(1rem,4vh,3rem)] font-bold mb-4">
      נמאס לך להתעסק באדמיניסטרציה במקום במטופלים?
    </h2>
    <p className="text-base md:text-xl leading-loose space-y-4">
      <span className="block mr-2">
        פתחת קליניקה בשביל לטפל – לא בשביל לרדוף אחרי גבייה, תורים וניירת.
      </span>
      <span className="block mr-2">
        מטופלת חיכתה למענה – אבל היית באמצע טיפול?
      </span>
      <span className="block mr-2">
        היומן מתבלגן, ההודעות נערמות – ואת/ה רק רוצה שקט בעבודה?
      </span>
      <span className="block mr-2">
        גבייה שהתפספסה, תור שהתפספס – ואת/ה לבד מול כל זה?
      </span>
      <span className="block font-semibold text-lg mt-2">
        הגיע הזמן לשים סוף לעומס הניהולי – ולהחזיר לעצמך את השקט המקצועי.
      </span>
    </p>
  </div>
);

const HeroSection = () => {
  return (
    <section dir="rtl" className="min-h-screen w-full">
      {/* מובייל: רקע עם סמל */}
      <div className="flex flex-col md:hidden bg-brand-lightGray relative min-h-screen">
        <div className="absolute inset-0 z-0 opacity-30 flex items-center justify-center">
          <Image
            src="/eg-logo.png"
            alt="Office Services Symbol"
            width={300}
            height={300}
            className="object-contain"
            priority
        
          />
        </div>

        <div className="z-10 flex flex-col items-center justify-center h-full px-4 pt-16 pb-8">
          <HeroContent />
        </div>
      </div>

      {/* דסקטופ: פיצול לשני חלקים */}
      <div className="hidden md:flex h-screen">
        {/* צד ימין – רקע בלבד */}
        <div className="w-1/3 bg-brand-lightGray flex items-center justify-center p-4">
          <div className="relative w-full max-w-[720px] aspect-square">
            <Image
              src="/eg-logo.png"
              alt="Office Services Symbol"
              fill
              className="object-contain opacity-30"
              priority
            />
          </div>
        </div>

        {/* צד שמאל – תוכן */}
        <div className="w-2/3 bg-brand-lightGray flex items-center justify-center p-4">
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
