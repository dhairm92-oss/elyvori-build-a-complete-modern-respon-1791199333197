import { ArrowLeft, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-2 rounded-full text-sm font-semibold border border-brand-500/20">
              <Zap className="w-4 h-4" />
              قالب أساسي جاهز للتشغيل الفوري
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight">
              تطبيق توصيل متكامل لـ <span className="text-brand-600">العميل، السائق، وصاحب المطعم</span>
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed">
              حلول تقنية متكاملة مبنية بأحدث التقنيات Flutter و Next.js مع قاعدة بيانات PostgreSQL قوية لتغطية كافة عمليات التوصيل وإدارة الطلبات بكفاءة تامة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#roles" className="flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-brand-600/30 text-lg">
                استعرض البوابات
                <ArrowLeft className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10"></div>
            <div className="bg-zinc-900 rounded-3xl p-8 text-white shadow-2xl border border-zinc-800 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="text-sm text-zinc-400">نظام إدارة التوصيل الحي</span>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div className="space-y-4 font-mono text-sm text-zinc-300">
                <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                  <span className="text-brand-400">[Client App]</span> طلب وجبة برجر (#1092)
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                  <span className="text-yellow-400">[Restaurant Dashboard]</span> قبول الطلب وتحضير الطعام
                </div>
                <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                  <span className="text-emerald-400">[Driver App]</span> استلام الطلب وتتبع الموقع (GPS)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}