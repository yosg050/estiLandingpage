import { IoCalendarOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { SlSpeech } from "react-icons/sl";

export default function Services() {
  const services = [
    {
      title: "ניהול יומן ותיאום פגישות",
      description: "ניהול ותיאום פגישות מול לקוחות וספקים, ניהול יומן אישי ועסקי.",
      icon: <IoCalendarOutline className="h-8 w-8 text-white" />,
    },
    {
      title: "הזנת נתונים ודוחות חודשיים",
      description: "הזנת מידע מדויק ועדכני במערכות העסקיות, הפקת דוחות חודשיים מפורטים לניתוח ביצועים ומעקב אחר מדדי הצלחה, תוך שמירה על ארגון וסדר",
      icon: <HiOutlinePresentationChartLine className="h-8 w-8 text-white" />,
    },
    {
      title: "הפקת מסמכים עסקיים",
      description: "כתיבה והפקת מכתבים רשמיים, הצעות מחיר, חשבוניות, סיכומי פגישות ומסמכים נוספים ברמה מקצועית, מותאמים לצרכים העסקיים ולמיתוג הארגוני",
      icon: <IoDocumentTextOutline className="h-8 w-8 text-white" />,
    },
    {
      title: "ניהול מערכות CRM ואוטומציות",
      description: "תפעול, תחזוקה ושדרוג של מערכות CRM, ניהול קשרי לקוחות בצורה חכמה, יצירת תהליכים אוטומטיים לשיפור חוויית הלקוח ולהגברת היעילות התפעולית",
      icon: <BsPeople className="h-8 w-8 text-white" />,
    },
    {
      title: "גבייה מלקוחות והנהלת חשבונות",
      description: "ניהול תהליכי גבייה בצורה אדיבה ואסרטיבית, טיפול בהפקת חשבוניות וקבלות, מעקב אחר תשלומים, והתנהלות שוטפת מול הנהלת חשבונות וגורמים פיננסיים.",
      icon: <MdOutlineAttachMoney className="h-8 w-8 text-white" />,
    },
    {
      title: "התנהלות מול ספקים ולקוחות",
      description: "יצירת קשר רציף עם ספקים ולקוחות, טיפול שוטף בדרישות ובבעיות, קידום פתרונות מותאמים לצורכי העסק ולשמירה על יחסי עבודה תקינים ומוצלחים.",
      icon: <SlSpeech className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-4 bg-gray-50 md:mr-8 md:ml-8 flex items-center"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">מה אני מציעה</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* פס עליון צבעוני */}
              <div className="flex h-2">
                <div className="w-1/3 bg-black"></div>
                <div className="w-1/3  bg-orange-700"></div>
                <div className="w-1/3 bg-[#DC5F00]"></div>
              </div>

              {/* גוף הכרטיס */}
              <div className="p-6">
                <div className="w-16 h-16 bg-[#DC5F00] rounded-full flex items-center justify-center mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-gray-700 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
