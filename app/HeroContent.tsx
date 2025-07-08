// HeroSection.tsx
import Image from "next/image";

const HeroContent = () => (
<div className="max-w-md md:max-w-2xl text-right text-brand-textMain space-y-4 z-10">
  <h2 className="text-[clamp(1rem,4vh,2.2rem)] md:text-[clamp(1rem,4vh,3rem)] font-bold mb-4">
    רוצה להוריד מעצמך את עומס הניהול ולהתמקד במטופלים?
  </h2>
  <p className="text-base md:text-xl leading-loose space-y-4">
    <span className="block mr-2">
      רופאים רבים מנהלים קליניקה מצליחה, אך מוצאים את עצמם מתמרנים בין טיפול לבין אינספור משימות ניהוליות.
    </span>
    <span className="block mr-2">
      היומן משתנה, המטופלים ממתינים למענה, מסמכים נערמים והצורך לשלב בין הכל מורגש בכל יום מחדש.
    </span>
    <span className="block mr-2">
      בין תור לתור, בין בדיקה לשיחה לא פשוט למצוא זמן להתארגנות, תכנון וסדר תפעולי שוטף.
    </span>
    <span className="block font-semibold text-lg mt-2">
      הניהול הוא חלק בלתי נפרד מהקליניקה אבל לא אמור לבוא על חשבון הריכוז, השקט והנוכחות בטיפול.
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
            src="/eg-logo.webp"
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
              src="/eg-logo.webp"
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
