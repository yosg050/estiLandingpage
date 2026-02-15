import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroContent";
import CalBookingButton from "@/components/CalBookingButton";
import HomeCTA from "@/components/HomeCTA";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import {
  Phone,
  Settings,
  Rocket,
  PhoneOff,
  Wallet,
  CalendarX,
  FileText,
} from "lucide-react";

const painPoints = [
  {
    icon: <PhoneOff className="h-6 w-6 text-brand-primary" />,
    title: "לקוחות מתקשרים - ואין מי שיענה",
    description:
      "באמצע טיפול אי אפשר לענות לטלפון. מטופלים חדשים שלא מקבלים מענה - פונים למישהו אחר.",
  },
  {
    icon: <Wallet className="h-6 w-6 text-brand-primary" />,
    title: "הגבייה לא מסודרת",
    description:
      "מטופלים חייבים כסף, אתם לא זוכרים למי שלחתם תזכורת ולמי לא. כל חודש נשאר כסף שלא נגבה.",
  },
  {
    icon: <CalendarX className="h-6 w-6 text-brand-primary" />,
    title: "היומן מתנהל על הברך",
    description:
      "ביטולים שלא מתעדכנים, חלונות ריקים שאף אחד לא ממלא, תזכורות שלא נשלחות.",
  },
  {
    icon: <FileText className="h-6 w-6 text-brand-primary" />,
    title: "כל הערב שקועים בניירת",
    description:
      "תיעוד פגישות, דוחות, חשבוניות - העבודה הניהולית לא נגמרת גם אחרי שהמטופל האחרון יצא.",
  },
];

const processSteps = [
  {
    icon: <Phone className="h-6 w-6 text-white" />,
    title: "שיחת היכרות",
    description: "שיחה קצרה שבה נכיר את העסק שלכם ונבין את הצרכים",
    num: 1,
  },
  {
    icon: <Settings className="h-6 w-6 text-white" />,
    title: "התאמת תהליכי עבודה",
    description: "נבנה תהליכים מותאמים אישית לצרכים שהגדרנו",
    num: 2,
  },
  {
    icon: <Rocket className="h-6 w-6 text-white" />,
    title: "התחלת עבודה מיידית",
    description: "מתחילים לעבוד באופן מיידי, ללא עיכובים",
    num: 3,
  },
];

const faqItems = [
  {
    question: "איך אפשר לייעל את התפעול השוטף של מרפאה?",
    answer:
      "באמצעות מיקור חוץ של ניהול המשרד - תיאום תורים, גבייה ומענה לפניות – אפשר לחסוך זמן יקר ולהתמקד רק בטיפול.",
  },
  {
    question: "האם שירות ניהול משרד מרחוק עדיף על מזכירה במרפאה?",
    answer:
      "כן, השירות חוסך בעלויות, גמיש יותר, אינו מצריך מיקום פיזי, ונעשה על ידי מזכירה מיומנת ומנוסה בתחום.",
  },
  {
    question: "האם אפשר לשלב את השירות עם המערכות הקיימות שלי?",
    answer:
      "בוודאי. אני מתאימה את עצמי לכל מערכת שאתם עובדים איתה - בין אם זה CRM, מערכת תורים או ניהול מסמכים.",
  },
  {
    question: "איך אפשר להבטיח מעקב שוטף אחרי פניות ותשלומים?",
    answer:
      "השירות כולל תיעוד מלא של כל פנייה, גבייה שוטפת, שליחת חשבוניות, והפקת דוחות חודשיים לפי הצורך.",
  },
  {
    question: "איך התמחור עובד?",
    answer: "אנחנו בונים ביחד חבילה מותאמת אישית לצרכים שלכם ושל העסק שלכם.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Pain Points - Agitation */}
      <section className="py-16 px-4 bg-white" dir="rtl">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            מכירים את זה?
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
            אתם מסיימים יום עבודה מול מטופלים, ואז מתחילים עוד שעתיים של
            אדמיניסטרציה
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Teaser */}
      <section className="py-12 px-4 bg-gray-50" dir="rtl">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            מה נכנס לחבילה?
          </h2>

          <div className="flex flex-col md:flex-row items-stretch gap-4 mb-8">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100">
              <IoCalendarOutline className="h-6 w-6 text-brand-primary flex-shrink-0" />
              <span className="text-gray-800 font-medium">
                יומן, תורים ומענה לפניות
              </span>
            </div>
            <div className="flex-1 flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100">
              <MdOutlineAttachMoney className="h-6 w-6 text-brand-primary flex-shrink-0" />
              <span className="text-gray-800 font-medium">
                גבייה, חשבוניות וסדר פיננסי
              </span>
            </div>
            <div className="flex-1 flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100">
              <BsLightning className="h-6 w-6 text-brand-primary flex-shrink-0" />
              <span className="text-gray-800 font-medium">
                אוטומציות וכלים דיגיטליים
              </span>
            </div>
          </div>

          <p className="text-center">
            <Link
              href="/services"
              className="text-brand-primary hover:text-brand-lightTeal font-medium transition-colors underline underline-offset-4"
            >
              לרשימת השירותים המלאה
            </Link>
          </p>
        </div>
      </section>

      {/* 4. Process Steps */}
      <section className="py-16 px-4 bg-white" dir="rtl">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            3 צעדים ומתחילים
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            תהליך פשוט ומהיר שמאפשר לכם להתחיל לעבוד איתנו תוך זמן קצר
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3 flex-1">
                <div className="relative">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-md">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 bg-brand-lightTeal rounded-full flex items-center justify-center text-white font-bold text-sm shadow">
                    {step.num}
                  </div>
                </div>
                <span className="font-bold text-gray-800">{step.title}</span>
                <span className="text-gray-500 text-sm">
                  {step.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About / Trust */}
      <section className="py-16 px-4 bg-gray-50" dir="rtl">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <Image
                src="/esti-profile.jpg"
                alt="אסתי גלר - מנהלת משרד מרחוק"
                width={200}
                height={200}
                className="rounded-full shadow-lg object-cover w-40 h-40 md:w-48 md:h-48"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                אני אסתי גלר. מעל עשור אני עובדת עם מטפלים, רופאים ויועצים כדי
                שהם יוכלו להתמקד במה שהם עושים הכי טוב.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                הקמתי את Esti Office לאחר שראיתי שוב ושוב בעלי מקצוע מצוינים
                שטובעים בניהול במקום לטפל. אצלי זה אישי - זמינות, דיוק, והובלת
                התהליך מקצה לקצה.
              </p>
              <div className="flex justify-start gap-4 mb-6">
                {" "}
                <Link
                  href="/about"
                  className="text-brand-primary hover:text-brand-lightTeal font-medium transition-colors underline underline-offset-4 "
                >
                  עוד . . .{" "}
                </Link>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                {["שקט ניהולי", "דיוק ויעילות", "יחס אנושי"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-16 px-4 bg-white" dir="rtl">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-gray-600 text-lg text-center mb-10">
            תשובות לשאלות שבעלי מקצוע שואלים לפני שמתחילים
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-right text-base font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-right leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 7. CTA - Embedded Form + Cal.com + WhatsApp */}
      <HomeCTA />
    </main>
  );
}
