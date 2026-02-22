import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Settings, Rocket } from "lucide-react";
import CalBookingButton from "@/components/CalBookingButton";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "איך עובד שירות ניהול משרד מרחוק? | תהליך, תמחור, התנסות | Esti Office",
  description:
    "תהליך פשוט: שיחת היכרות בחינם, התאמת תהליכי עבודה, ותחילת עבודה מיידית. חבילות מותאמות אישית, ללא התחייבות וללא עלויות נסתרות.",
  alternates: {
    canonical: "https://estioffice.co.il/how-it-works",
  },
};

const steps = [
  {
    number: 1,
    title: "שיחת היכרות",
    icon: <Phone className="h-8 w-8 text-white" />,
    description:
      "שיחה קצרה של כ-30 דקות שבה נכיר את העסק שלכם ונבין את הצרכים.",
    details: [
      "נבין איך העסק שלכם פועל היום",
      "נזהה את הנקודות שדורשות את הכי הרבה זמן ניהולי",
      "נבדוק עם אילו כלים אתם עובדים כרגע",
      "ללא התחייבות - השיחה בחינם",
    ],
  },
  {
    number: 2,
    title: "התאמת תהליכי עבודה",
    icon: <Settings className="h-8 w-8 text-white" />,
    description: "נבנה עבורכם תהליכים מותאמים אישית לצרכים שהגדרנו.",
    details: [
      "מיפוי של מסע הלקוח/מטופל - מהפנייה הראשונה ועד המעקב",
      "הגדרת נהלי עבודה ברורים (גבייה, תיעוד, תיאום)",
      "התאמה או הקמה של מערכות דיגיטליות",
      "הכנת תבניות ותהליכים אוטומטיים",
    ],
  },
  {
    number: 3,
    title: "התחלת עבודה מיידית",
    icon: <Rocket className="h-8 w-8 text-white" />,
    description: "מתחילים לעבוד באופן מיידי, ללא עיכובים.",
    details: [
      "תקופת הרצה של שבוע-שבועיים לבדיקת התאמה",
      "זמינות ביום-יום - שאלות, עדכונים ותיאומים",
      "דוחות חודשיים על פעילות ומצב תפעולי",
      "גמישות מלאה - אפשר להוסיף או להוריד שירותים בכל שלב",
    ],
  },
];

const faqItems = [
  {
    question: "איך אפשר לייעל את התפעול השוטף של מרפאה?",
    answer:
      "באמצעות מיקור חוץ של ניהול המשרד תיאום תורים, גבייה ומענה לפניות – אפשר לחסוך זמן יקר ולהתמקד רק בטיפול.",
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
    answer:
      "אנחנו בונים ביחד חבילה מותאמת אישית לצרכים שלכם ושל העסק שלכם. התמחור מבוסס על היקף השירותים שנבחרים - ללא עלויות נסתרות.",
  },
  {
    question: "האם שיחת ההיכרות בחינם?",
    answer:
      "כן. שיחת ההיכרות היא ללא עלות וללא התחייבות. המטרה שלה היא להבין אם ואיך אפשר לעזור.",
  },
  {
    question: "האם אפשר להתחיל עם שירות אחד ולהרחיב אחר כך?",
    answer:
      "בהחלט. הרבה לקוחות מתחילים עם ניהול יומן או גבייה בלבד, ומרחיבים את השירותים עם הזמן לפי הצורך.",
  }
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white pt-24" dir="rtl">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            איך זה עובד?
          </h1>
          <p className="text-gray-600 text-xl leading-relaxed">
            תהליך פשוט ומהיר שמאפשר לכם להתחיל לעבוד איתנו תוך זמן קצר -
            בלי ביורוקרטיה, בלי התחייבות
          </p>
        </div>
      </section>

      {/* Expanded Steps */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="flex h-1.5">
                  <div className="w-1/3 bg-brand-primary"></div>
                  <div className="w-1/3 bg-brand-softGreen"></div>
                  <div className="w-1/3 bg-brand-lightTeal"></div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-lightTeal rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {step.number}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-4">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className="text-brand-lightTeal mt-1 flex-shrink-0">
                              &#10003;
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">תמחור</h2>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              כל עסק הוא שונה, ולכן אני לא מציעה &quot;חבילות מדף&quot;.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              אחרי שיחת ההיכרות, נבנה ביחד חבילת שירות מותאמת אישית - רק מה
              שאתם צריכים, בלי שירותים מיותרים ובלי עלויות נסתרות.
            </p>
            <p className="text-gray-600 leading-relaxed">
              התמחור מבוסס על היקף השירותים ומשתנה בהתאם לצרכים. אפשר להתחיל
              בקטן ולהרחיב עם הזמן.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-gray-600 text-lg text-center mb-10">
            כל מה שרציתם לדעת לפני שמתחילים
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

      {/* CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            מוכנים להתחיל?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            שיחת היכרות של 30 דקות - בחינם וללא התחייבות
          </p>
          <CalBookingButton calUsername="esti-office" eventSlug="30min" />
        </div>
      </section>
    </main>
  );
}
