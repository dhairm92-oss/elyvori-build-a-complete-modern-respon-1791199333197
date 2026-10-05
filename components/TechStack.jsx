export default function TechStack() {
  const techs = [
    {
      name: "Flutter",
      role: "تطبيقات الهواتف للعملاء والسائقين",
      desc: "إطار عمل قوي لبناء تطبيقات هاتف متميزة تعمل بكفاءة عالية على نظامي أندرويد و iOS."
    },
    {
      name: "Next.js",
      role: "لوحة تحكم المطاعم والواجهة التعريفية",
      desc: "إطار عمل React متقدم يوفر أداءً فائقاً وسرعة تحميل عالية للمتصفحات."
    },
    {
      name: "PostgreSQL",
      role: "قاعدة البيانات الأساسية",
      desc: "قاعدة بيانات علائقية متقدمة وآمنة لإدارة آلاف العمليات والطلبات المتزامنة."
    }
  ];

  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900">
            المداخن التقنية الحديثة
          </h2>
          <p className="text-zinc-600 text-lg">
            تم اختيار التقنيات بعناية لضمان الاستقرار، الأداء العالي، وقابلية التوسع المستقبلي.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 space-y-4 hover:border-brand-500/50 transition-colors">
              <span className="text-xs font-bold text-brand-600 bg-white px-3 py-1 rounded-full border border-zinc-200">
                {t.role}
              </span>
              <h3 className="text-2xl font-black text-zinc-900">{t.name}</h3>
              <p className="text-zinc-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}