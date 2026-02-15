import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-brand-background"
      dir="rtl"
    >
      <h1 className="text-4xl font-bold text-brand-primary mb-4">
        הדף לא נמצא
      </h1>
      <p className="text-brand-textMuted text-lg mb-8">
        מצטערים, הדף שחיפשת אינו קיים.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-primary text-white rounded-full font-semibold hover:bg-brand-lightTeal transition-colors"
      >
        חזרה לדף הבית
      </Link>
    </main>
  );
}
