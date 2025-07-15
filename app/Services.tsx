import { IoCalendarOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsPeople } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { SlSpeech } from "react-icons/sl";

export default function Services() {
  const services = [
    {
      title: "ניהול יומן ותיאום תורים",
      description:
        "פתיחת יומנים, תיאום תורים עם מטופלים, שליחת תזכורות וביטולים.",
      icon: <IoCalendarOutline className="h-8 w-8 text-white" />,
    },
    {
      title: "עדכון תיקים והפקת דוחות",
      description:
        "הזנת מידע רפואי, תיעוד מפגשים, מעקב טיפולי והפקת דוחות שוטפים לניהול המרפאה",
      icon: <HiOutlinePresentationChartLine className="h-8 w-8 text-white" />,
    },
    {
      title: "שמירה על חיסיון רפואי",
      description: "טיפול בלקוחות בצורה דיסקרטית ושמירה על הפרטיות שלהם.",
      icon: <IoDocumentTextOutline className="h-8 w-8 text-white" />,
    },
    {
      title: "ניהול מערכות של המרפאה",
      description:
        "עבודה שוטפת עם תוכנות ייעודיות לקליניקות כולל הקמה, תחזוקה ואופטימיזציה.",
      icon: <BsPeople className="h-8 w-8 text-white" />,
    },
    {
      title: "שירותי גביה",
      description:
        "גבייה ממטופלים, שליחת תזכורות, טיפול בהוראות קבע שהסתיימו וטיפול בכל הנדרש מול הנהלת חשבונות.",
      icon: <MdOutlineAttachMoney className="h-8 w-8 text-white" />,
    },
    {
      title: "קשר שוטף עם ספקים",
      description:
        "ניהול שיח שוטף עם ספקי שירות, מענה אישי שמייצג אותך בצורה מקצועית ואכפתית.",
      icon: <SlSpeech className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section
      id="services"
      className=" scroll-mt-4 min-h-screen py-20 px-4 bg-gray-50 md:mr-8 md:ml-8 flex items-center"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
           מה כולל השירות?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* פס עליון צבעוני */}
              <div className="flex h-2">
                <div className="w-1/3 bg-brand-primary"></div>
                <div className="w-1/3  bg-brand-softGreen"></div>
                <div className="w-1/3 bg-brand-lightTeal"></div>
              </div>

              {/* גוף הכרטיס */}
              <div className="p-4">
                <div className="w-16 h-16  bg-brand-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
