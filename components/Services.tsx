import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { MdOutlineAutoMode } from "react-icons/md";
import CalBookingButton from "@/components/CalBookingButton";

export default function Services() {
  const services = [
    {
      title: "ניהול יומן ותיאום פגישות",
      description:
        "ניהול יומנים, תיאום פגישות עם לקוחות ומטופלים, שליחת תזכורות, טיפול בביטולים ושינויים. כולל מילוי חלונות ריקים וניהול רשימת המתנה - כדי שהיומן שלכם תמיד מלא ומסודר.",
      icon: <IoCalendarOutline className="h-8 w-8 text-white" />,
    },
    {
      title: "תיעוד, מעקב והפקת דוחות",
      description:
        "הזנת מידע ותיעוד פגישות, מעקב שוטף והפקת דוחות ניהוליים. תקבלו תמונת מצב ברורה של הפעילות בכל רגע - בלי שתצטרכו לחפש בניירות.",
      icon: <HiOutlineDocumentReport className="h-8 w-8 text-white" />,
    },
    {
      title: "דיסקרטיות וחיסיון מלא",
      description:
        "טיפול בלקוחות ומטופלים בצורה דיסקרטית ושמירה מלאה על פרטיותם. כל התקשורת מתנהלת בהתאם לנהלי הפרטיות של העסק שלכם.",
      icon: <MdOutlinePrivacyTip className="h-8 w-8 text-white" />,
    },
    {
      title: "ניהול מערכות וכלים דיגיטליים",
      description:
        "עבודה שוטפת עם תוכנות ניהול ייעודיות, כולל הקמה, תחזוקה ואופטימיזציה. אני עובדת עם מגוון מערכות CRM ותוכנות ניהול קליניקות.",
      icon: <HiOutlineCog6Tooth className="h-8 w-8 text-white" />,
    },
    {
      title: "גבייה וסדר פיננסי",
      description:
        "גבייה מלקוחות, שליחת תזכורות תשלום, טיפול בהוראות קבע, ניהול ספקים ועבודה שוטפת מול הנהלת החשבונות. הכסף מגיע בזמן - בלי שתצטרכו לרדוף אחרי אף אחד.",
      icon: <MdOutlineAttachMoney className="h-8 w-8 text-white" />,
    },
    {
      title: "אוטומציות וטכנולוגיה עדכנית",
      description:
        "הטמעת כלים טכנולוגיים חכמים: תזכורות אוטומטיות בוואטסאפ, טפסים דיגיטליים, מערכות זימון עצמי ואוטומציות שחוסכות שעות של עבודה ידנית.",
      icon: <MdOutlineAutoMode className="h-8 w-8 text-white" />,
    },
  ];

  const targetAudience = [
    "פסיכולוגים ופסיכולוגיות קליניים",
    "מטפלים ומטפלות רגשיים",
    "רופאים ורופאות יועצים",
    "פיזיותרפיסטים ומרפאים בעיסוק",
    "קוסמטיקאיות ומטפלים/ות אסתטיים",
    "מטפלים/ות ברפואה משלימה",
    "דיאטניות ויועצי תזונה",
    "קלינאיות תקשורת",
  ];

  return (
    <section
      id="services"
      className="scroll-mt-4 py-20 px-4 bg-gray-50"
      dir="rtl"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Intro */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          מה כולל השירות?
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          השירות בנוי בצורה מודולרית - אתם בוחרים בדיוק את מה שאתם צריכים.
          כל חבילה מותאמת אישית לצרכים של העסק שלכם, בלי שירותים מיותרים
          ובלי עלויות נסתרות.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 group"
            >
              <div className="flex h-1.5">
                <div className="w-1/3 bg-brand-primary"></div>
                <div className="w-1/3 bg-brand-softGreen"></div>
                <div className="w-1/3 bg-brand-lightTeal"></div>
              </div>

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

        {/* Target Audience */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">
            למי השירות מתאים?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {targetAudience.map((profession, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-lightTeal flex-shrink-0">
                  &#10003;
                </span>
                {profession}
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            ולכל בעל מקצוע שנותן שירות אישי ורוצה לשחרר את עצמו מהנטל הניהולי
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            רוצים לשמוע איך זה יעבוד אצלכם?
          </p>
          <CalBookingButton calUsername="esti-office" eventSlug="30min" />
        </div>
      </div>
    </section>
  );
}
