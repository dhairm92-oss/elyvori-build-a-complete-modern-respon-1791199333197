import { User, Truck, Store } from 'lucide-react';

export default function RolesSection() {
  const roles = [
    {
      title: "تطبيق العميل",
      desc: "تصفح المطاعم، استعراض القوائم، الطلب السهل، تتبع الطلب لحظة بلحظة، وخيارات دفع متعددة وسريعة.",
      icon: <User className="w-8 h-8 text-brand-600" />,
      tech: "Flutter (iOS & Android)",
      features: ["تصفح ذكي للقوائم", "تتبع مباشر للخريطة", "تقييم المطاعم والسائقين"]
    },
    {
      title: "تطبيق السائق",
      desc: "استقبال طلبات التوصيل القريبة، تحديد المسارات الأسرع، إدارة الأرباح، وتأكيد التسليم بسهولة.",
      icon: <Truck className="w-8 h-8 text-brand-600" />,
      tech: "Flutter (GPS & Navigation)",
      features: ["إشعارات الطلبات الفورية", "توجيه خرائط جوجل", "سجل الأرباح اليومية"]
    },
    {
      title: "لوحة تحكم صاحب المطعم",
      desc: "إدارة قوائم الطعام، استقبال وتأكيد الطلبات الواردة، مراقبة المخزون، وتحليل المبيعات والتقارير.",
      icon: <Store className="w-8 h-8 text-brand-600" />,
      tech: "Next.js (Web Dashboard)",
      features: ["إدارة القوائم والأسعار", "إدارة حالة الطلب", "تقارير الأرباح والمبيعات"]
    }
  ];

  return (
    <section id="roles" className="py-20 bg-zinc-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
            ثلاث واجهات رئيسية متكاملة
          </h2>
          <p className="text-zinc-600 text-lg">
            النظام مصمم خصيصاً ليخدم أطراف عملية التوصيل الثلاثة بتجربة مستخدم سلسة واحترافية.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center border border-brand-500/10">
                  {role.icon}
                </div>
                <span className="inline-block text-xs font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  {role.tech}
                </span>
                <h3 className="text-2xl font-bold text-zinc-900">{role.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{role.desc}</p>
                <ul className="space-y-2 pt-4 border-t border-zinc-100">
                  {role.features.map((f, i) => (
                    <li key={i} className="text-sm text-zinc-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}