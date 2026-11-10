import React from 'react';
import { CalendarCheck, Clock, LayoutDashboard, Moon, ShieldCheck, Languages } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const FACTS = [
  { icon: Languages, text: 'واجهة عربية كاملة من اليمين لليسار، بوضع فاتح وداكن.' },
  { icon: LayoutDashboard, text: 'لوحة تحكم لصاحب المنصة يدير منها العيادات المشتركة.' },
  { icon: ShieldCheck, text: 'بيانات كل عيادة معزولة عن غيرها بصلاحيات على مستوى قاعدة البيانات.' },
];

const SAMPLE_APPOINTMENTS = [
  { time: '٩:٠٠', service: 'كشف عام', status: 'مؤكد', tone: 'bg-emerald-50 text-emerald-700' },
  { time: '١٠:٣٠', service: 'تنظيف أسنان', status: 'مؤكد', tone: 'bg-emerald-50 text-emerald-700' },
  { time: '١٢:٠٠', service: 'متابعة', status: 'بانتظار التأكيد', tone: 'bg-amber-50 text-amber-700' },
  { time: '٤:٣٠', service: 'استشارة', status: 'مؤكد', tone: 'bg-emerald-50 text-emerald-700' },
];

export const WorkSection: React.FC = () => {
  return (
    <section
      id="work-section"
      aria-labelledby="work-title"
      className="relative z-10 w-full border-t border-slate-200/50 px-4 py-16 sm:px-8 sm:py-24 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2
              id="work-title"
              className="mb-4 font-heading text-3xl font-black leading-[1.25] text-slate-950 sm:text-4xl lg:text-5xl"
            >
              مش وعود… أنظمة شغّالة.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              مثال من اللي بنبنيه: منصة كاملة تدير مواعيد العيادات من أول رسالة لحد التأكيد.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid items-center gap-10 rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-xs sm:p-10 lg:grid-cols-2 lg:gap-14">
            {/* Description */}
            <div>
              <h3 className="mb-3 font-heading text-2xl font-bold text-slate-950 sm:text-3xl">
                وقتي: حجز مواعيد للعيادات
              </h3>
              <p className="mb-7 text-base leading-8 text-slate-600">
                منصة SaaS لحجز المواعيد، مبنية للعيادات الناطقة بالعربية. المريض بيحجز، والعيادة بتشوف جدولها،
                وصاحب المنصة بيدير كل العيادات المشتركة من مكان واحد.
              </p>
              <ul className="space-y-4">
                {FACTS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-[15px] leading-7 text-slate-700">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Illustrative dashboard */}
            <div className="relative">
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-indigo-500/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_30px_60px_-30px_rgba(49,46,129,0.35)]">
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <CalendarCheck className="h-5 w-5 text-indigo-600" />
                    <span className="font-heading text-[15px] font-semibold text-slate-900">مواعيد اليوم</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="h-3.5 w-3.5" />
                    ٤ مواعيد
                  </span>
                </div>
                <ul className="divide-y divide-slate-100 bg-white">
                  {SAMPLE_APPOINTMENTS.map((a) => (
                    <li key={a.time} className="flex items-center justify-between px-5 py-3.5">
                      <div className="flex items-center gap-4">
                        <span className="w-10 font-heading text-sm font-semibold tabular-nums text-slate-900">{a.time}</span>
                        <span className="text-sm text-slate-600">{a.service}</span>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${a.tone}`}>{a.status}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 text-xs text-slate-400">
                  <Moon className="h-3.5 w-3.5" />
                  تصور توضيحي لواجهة المنصة
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
