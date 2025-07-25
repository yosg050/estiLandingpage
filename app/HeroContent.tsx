import Image from "next/image";

const HeroContent = () => (
  <div
    className="bg-gradient-to-b from-black/10 via-black/80 to-black/10 
               px-4 md:px-8 
               py-12 md:py-20 
               w-full max-w-screen-lg mx-auto text-white"
  >
    <h1
      className="text-brand-lightTeal font-bold text-center leading-snug
                 text-[clamp(1.4rem,5vw,2rem)] 
                 md:text-[2.4rem] 
                 mb-6"
    >
      אסתי גלר – שירותי מזכירות רפואית וניהול משרד מרחוק
    </h1>

    <div className="text-base md:text-xl leading-relaxed space-y-5 text-brand-lightGray">
      <p>
        ניהול קליניקה מצליחה דורש הרבה מעבר למקצועיות טיפולית – הוא מצריך גם
        מענה לפניות, תיאום תורים, גבייה, ומעקב מסמכים. כל אלו גוזלים זמן ומשאבים
        מהדבר החשוב באמת: טיפול איכותי.
      </p>
      <p>
        היומן עמוס, הפניות נערמות ואתה צריך לתמרן בין המטופלים למשימות תפעול
        שוטפות. התוצאה? איבוד לקוחות.
      </p>
      <p className="font-bold">אתה לא לבד.</p>
      <p className="font-bold">
        אני כאן בשבילך – עם ניסיון של מעל עשור בניהול ותיאום תפעולי לרופאים
        ואנשי מקצוע בתחום הבריאות. בעזרת ניהול מדויק, שקט נפשי ואמינות מלאה –
        המרפאה שלך מתנהלת בצורה חלקה ויעילה.
      </p>
    </div>

    <h2 className="text-lg md:text-2xl font-semibold text-brand-lightGray mt-6">
      כדי שתשומת הלב תחזור להיות רק למטופלים.
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
      {/* שכבת כהות כללית (אם צריך) */}
      <div className="absolute inset-0 bg-black opacity-20 z-0" />

      {/* תוכן עליון */}
      <div
        className="relative z-10 flex items-center justify-center 
                   min-h-screen px-4 md:px-6"
      >
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;

// import Image from "next/image";

// const HeroContent = () => (
//   <div className="w-full px-8 md:px-16 text-right text-brand-textMain space-y-4 z-10">
//     <h1 className="text-[clamp(1.4rem,5vw,4rem)] md:text-[clamp(2rem,6vh,5rem)] font-bold mb-4">
//       שירותי מזכירות רפואית וניהול משרד מרחוק
//     </h1>
//     <p className="text-base md:text-xl leading-loose space-y-4">
//       <span className="block mr-2">
//         ניהול קליניקה מצליחה דורש הרבה מעבר למקצועיות טיפולית – הוא מצריך גם
//         מענה לפניות, תיאום תורים, גבייה, ומעקב מסמכים. כל אלו גוזלים זמן
//         ומשאבים מהדבר החשוב באמת – טיפול איכותי.
//       </span>
//       <span className="block mr-2">
//         היומן עמוס, הפניות נערמות, והזמן מתפצל בין מטופלים לבין משימות תפעול
//         שוטפות. התוצאה: עומס, חוסר ריכוז, ואיבוד לקוחות.
//       </span>
//       <span className="block mr-2 font-bold">
//         אתם לא לבד. אני אסתי גלר – עם ניסיון של מעל עשור בליווי קליניקות
//         ורופאים – עוזרת לך לנהל את הצד התפעולי של הקליניקה ביעילות, בשקט,
//         ובאמינות מלאה.
//       </span>
//       <span className="block mr-2">
//         ניהול יומן, מענה לפניות, גבייה, סידור מסמכים – הכל מתבצע מרחוק, באופן
//         מותאם אישי
//       </span>
//       <span className="block font-semibold text-lg mt-2">
//         כדי שתהיה שליטה מלאה – ותשומת הלב תחזור למקום שבו היא באמת צריכה
//         להיות: למטופלים.
//       </span>
//     </p>
//   </div>
// );

// const HeroSection = () => {
//   return (
//     <section dir="rtl" className="min-h-screen w-full">
//       {/* מובייל: רקע עם סמל */}
//       <div className="flex flex-col md:hidden bg-brand-lightGray relative min-h-screen">
//         <div className="absolute inset-0 z-0 opacity-30 flex items-center justify-center">
//           <Image
//             src="/eg-logo.webp"
//             alt="Office Services Symbol"
//             width={300}
//             height={300}
//             className="auto-height"
//             priority
//           />
//         </div>

//         <div className="z-10 flex flex-col items-center justify-center h-full px-4 pt-16 pb-8">
//           <HeroContent />
//         </div>
//       </div>

//       {/* דסקטופ: פיצול לשני חלקים */}
//       <div className="hidden md:flex h-screen">
//         {/* צד ימין – רקע בלבד */}
//         <div className="w-1/2 h-screen relative">
//           <Image
//             src="/office.webp"
//             alt="Office background"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* צד שמאל – תוכן */}
//         <div className="w-1/2 bg-brand-lightGray flex items-center justify-center p-4">
//           <HeroContent />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
