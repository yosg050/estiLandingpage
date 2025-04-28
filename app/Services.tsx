export default function Services() {
  return (
      // Services Section - Added min-h-screen to fill viewport height
      <section id="services" className="min-h-screen py-20 px-4 bg-gray-50 md:mr-8 md:ml-8 flex items-center" dir="rtl">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">מה אני מציעה</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">ניהול יומן ותיאום פגישות</h3>
              <p className="text-gray-600 text-center">
                ניהול ותיאום פגישות מול לקוחות וספקים, , ניהול יומן אישי ועסקי.
              </p>
            </div>
            
            {/* Remaining service items... */}
            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">הזנת נתונים ודוחות חודשיים
              </h3>
              <p className="text-gray-600 text-center">
                הזנת מידע מדויק ועדכני במערכות העסקיות, הפקת דוחות חודשיים מפורטים לניתוח ביצועים ומעקב אחר מדדי הצלחה, תוך שמירה על ארגון וסדר
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">הפקת מסמכים עסקיים</h3>
              <p className="text-gray-600 text-center">
                כתיבה והפקת מכתבים רשמיים, הצעות מחיר, חשבוניות, סיכומי פגישות ומסמכים נוספים ברמה מקצועית, מותאמים לצרכים העסקיים ולמיתוג הארגוני
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">ניהול מערכות CRM ואוטומציות</h3>
              <p className="text-gray-600 text-center">
                תפעול, תחזוקה ושדרוג של מערכות CRM, ניהול קשרי לקוחות בצורה חכמה, יצירת תהליכים אוטומטיים לשיפור חוויית הלקוח ולהגברת היעילות התפעולית
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">גבייה מלקוחות והנהלת חשבונות</h3>
              <p className="text-gray-600 text-center">
                ניהול תהליכי גבייה בצורה אדיבה ואסרטיבית, טיפול בהפקת חשבוניות וקבלות, מעקב אחר תשלומים, והתנהלות שוטפת מול הנהלת חשבונות וגורמים פיננסיים.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FF8800] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">התנהלות מול ספקים ולקוחות</h3>
              <p className="text-gray-600 text-center">
                יצירת קשר רציף עם ספקים ולקוחות, טיפול שוטף בדרישות ובבעיות, קידום פתרונות מותאמים לצורכי העסק ולשמירה על יחסי עבודה תקינים ומוצלחים.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            {/* <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#FF8800] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#e67a00] transition-colors"
            >
              Get Started Today
            </button> */}
          </div>
        </div>
      </section>
  );
}
