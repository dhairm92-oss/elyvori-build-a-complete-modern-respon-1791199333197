import Link from 'next/link';
import { ShoppingBag, Truck, Store, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-xl">
            ت
          </div>
          <span className="text-xl font-black text-zinc-900">توصيل برو</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#features" className="hover:text-brand-600 transition-colors">المميزات</a>
          <a href="#roles" className="hover:text-brand-600 transition-colors">بوابات الاستخدام</a>
          <a href="#tech" className="hover:text-brand-600 transition-colors">التقنيات</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#roles" className="bg-brand-600 hover:bg-brand-700 text-white font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-brand-600/25">
            ابدأ الآن
          </a>
        </div>
      </div>
    </header>
  );
}