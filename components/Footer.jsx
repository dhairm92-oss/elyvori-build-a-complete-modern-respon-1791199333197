export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-xl">
            ت
          </div>
          <span className="text-xl font-bold">توصيل برو - قالب منصة التوصيل المتكاملة</span>
        </div>
        <p className="text-sm text-zinc-400">
          جميع الحقوق محفوظة © {new Date().getFullYear()} - مدعوم بـ Flutter و Next.js و PostgreSQL
        </p>
      </div>
    </footer>
  );
}