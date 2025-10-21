import { Phone, Settings, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: 1,
      title: "שיחת היכרות",
      description: "שיחה קצרה שבה נכיר את המרפאה ונבין את הצרכים שלך.",
      icon: <Phone className="h-8 w-8 text-white" />,
    },
    {
      number: 2,
      title: "התאמת תהליכי עבודה",
      description: "נבנה עבורך תהליכי עבודה המותאמים אישית לצרכים שהגדרנו.",
      icon: <Settings className="h-8 w-8 text-white" />,
    },
    {
      number: 3,
      title: "התחלת עבודה מיידית",
      description: "מתחילים בעבודה באופן מיידי, ללא עיכובים.",
      icon: <Rocket className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section
      id="process"
      className="scroll-mt-4 min-h-screen py-20 px-4 bg-white md:mr-8 md:ml-8 flex items-center"
      dir="rtl"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          מה התהליך?
        </h2>
        <p className="text-center text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          תהליך פשוט ומהיר שמאפשר לכם להתחיל לעבוד איתנו תוך זמן קצר
        </p>

        {/* Desktop Layout - Row with Arrows */}
        <div className="hidden lg:flex items-center justify-center gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step Card */}
              <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 w-80 group">
                {/* Top Colorful Bar */}
                <div className="flex h-1.5">
                  <div className="w-1/3 bg-brand-primary"></div>
                  <div className="w-1/3 bg-brand-softGreen"></div>
                  <div className="w-1/3 bg-brand-lightTeal"></div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  {/* Step Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-lightTeal rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between cards (not after last card) */}
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center mx-4">
                  <svg
                    className="w-8 h-8 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout - Column */}
        <div className="lg:hidden flex flex-col items-center gap-6 max-w-sm mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="w-full">
              {/* Step Card */}
              <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 group">
                {/* Top Colorful Bar */}
                <div className="flex h-1">
                  <div className="w-1/3 bg-brand-primary"></div>
                  <div className="w-1/3 bg-brand-softGreen"></div>
                  <div className="w-1/3 bg-brand-lightTeal"></div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  {/* Step Number Badge */}
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                      <div className="scale-75">{step.icon}</div>
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-brand-lightTeal rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Down Arrow (not after last card) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-3">
                  <svg
                    className="w-6 h-6 text-brand-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">מוכנים להתחיל? בואו נדבר</p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="relative group px-8 py-4 rounded-full font-semibold text-white text-base md:text-lg transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
            dir="rtl"
          >
            <span className="absolute inset-0 bg-brand-primary transition-all duration-300"></span>
            <span className="absolute inset-0 bg-brand-lightTeal scale-0 group-hover:scale-100 transition-all duration-300 ease-out"></span>
            <span className="absolute inset-0 shadow-lg group-hover:shadow-xl transition-shadow duration-300"></span>
            <span className="relative z-10">צרו קשר עכשיו</span>
          </button>
        </div>
      </div>
    </section>
  );
}
