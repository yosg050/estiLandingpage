import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/services", label: "מה כולל השירות" },
  { href: "/about", label: "מי אני?" },
  { href: "/how-it-works", label: "איך זה עובד?" },
  { href: "/blog", label: "מאמרים" },
  { href: "/contact", label: "יצירת קשר" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Description */}
          <div>
            <Link href="/">
              <Image
                src="/logoText.webp"
                alt="Esti Office"
                width={150}
                height={60}
                className="object-contain brightness-200 mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              ניהול משרד מרחוק לבעלי מקצוע בתחומי הטיפול, הבריאות והשירות
              האישי. שקט ניהולי מקצה לקצה.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <h3 className="text-white font-semibold mb-4">ניווט</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">יצירת קשר</h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0533309144"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                053-3309144
              </a>
              <a
                href="mailto:estigeller1@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                estigeller1@gmail.com
              </a>
              <a
                href="https://wa.me/972533309144"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/estigeller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <FaLinkedinIn className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-1 pt-1 text-center text-gray-500 text-sm">
          <p>&copy; Esti Office כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
}
