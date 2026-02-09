import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineAutoMode } from "react-icons/md";


export default function Services() {
  const services = [
    //1
    {
      title: "ניהול יומן ותיאום פגישות",
      description:
        "ניהול יומנים, תיאום פגישות עם לקוחות ומטופלים, שליחת תזכורות, טיפול בביטולים ושינויים.",
      icon: <IoCalendarOutline className="h-8 w-8 text-white" />,
    },
    //2
    {
      title: "תיעוד, מעקב והפקת דוחות",
      description: "הזנת מידע ותיעוד פגישות, מעקב שוטף והפקת דוחות ניהוליים.",
      icon: <HiOutlineDocumentReport className="h-8 w-8 text-white" />,
    },
    //3
    {
      title: "דיסקרטיות וחיסיון מלא",
      description:
        "טיפול בלקוחות ומטופלים בצורה דיסקרטית ושמירה מלאה על פרטיותם.",
      icon: <MdOutlinePrivacyTip className="h-8 w-8 text-white" />,
    },
    //4
    {
      title: "ניהול מערכות וכלים דיגיטליים",
      description:
        "עבודה שוטפת עם תוכנות ניהול ייעודיות, כולל הקמה, תחזוקה ואופטימיזציה.",
      icon: <HiOutlineCog6Tooth className="h-8 w-8 text-white" />,
    },
    //5
    {
      title: "גבייה וסדר פיננסי",
      description:
        "גבייה מלקוחות, שליחת תזכורות תשלום, טיפול בהוראות קבע, ניהול ספקים ועבודה שוטפת מול הנהלת החשבונות.",
      icon: <MdOutlineAttachMoney className="h-8 w-8 text-white" />,
    },
    {
      title: "אוטומציות וטכנולוגיה עדכנית",
      description:
        "הטמעת כלים טכנולוגיים חכמים: תזכורות אוטומטיות בוואטסאפ, טפסים דיגיטליים, מערכות זימון עצמי ואוטומציות שחוסכות שעות זמן.",
      icon: <MdOutlineAutoMode className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-4 min-h-screen py-20 px-4 bg-gray-50 md:mr-8 md:ml-8 flex items-center"
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
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 group"
            >
              {/* פס עליון צבעוני דק */}
              <div className="flex h-1.5">
                <div className="w-1/3 bg-brand-primary"></div>
                <div className="w-1/3 bg-brand-softGreen"></div>
                <div className="w-1/3 bg-brand-lightTeal"></div>
              </div>

              {/* גוף הכרטיס */}
              <div className="p-6">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
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
