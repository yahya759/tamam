import React from 'react';
import {
  Database, CalendarClock, Cpu, Check, ArrowLeft, HelpCircle, Clock,
  PackageCheck, ShoppingCart, Truck, Receipt, Boxes,
} from 'lucide-react';
import { TAMAM_PACKAGES } from '../utils/automation-state';
import { ScrollReveal } from './ScrollReveal';
import { getNiche } from '../niches';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
  onOpenConsultation: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onOpenConsultation,
}) => {
  const niche = getNiche();
  const getPackageVisual = (id: string) => {
    switch (id) {
      case 'crm-inquiries':
        return {
          icon: <Database className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-indigo-50/80 border-indigo-100 group-hover:border-indigo-200',
          badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-100/90',
        };
      case 'appointments-whatsapp-offers':
        return {
          icon: <CalendarClock className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-blue-50/80 border-blue-100 group-hover:border-blue-200',
          badgeColor: 'text-blue-700 bg-blue-50 border-blue-100/90',
        };
      case 'store-cod-confirmation':
        return {
          icon: <PackageCheck className="w-5 h-5 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-emerald-50/80 border-emerald-100 group-hover:border-emerald-200',
          badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100/90',
        };
      case 'store-abandoned-cart':
        return {
          icon: <ShoppingCart className="w-5 h-5 text-orange-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-orange-50/80 border-orange-100 group-hover:border-orange-200',
          badgeColor: 'text-orange-700 bg-orange-50 border-orange-100/90',
        };
      case 'store-order-tracking':
        return {
          icon: <Truck className="w-5 h-5 text-sky-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-sky-50/80 border-sky-100 group-hover:border-sky-200',
          badgeColor: 'text-sky-700 bg-sky-50 border-sky-100/90',
        };
      case 'store-shipping-invoice':
        return {
          icon: <Receipt className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-indigo-50/80 border-indigo-100 group-hover:border-indigo-200',
          badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-100/90',
        };
      case 'store-inventory-sync':
        return {
          icon: <Boxes className="w-5 h-5 text-teal-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-teal-50/80 border-teal-100 group-hover:border-teal-200',
          badgeColor: 'text-teal-700 bg-teal-50 border-teal-100/90',
        };
      case 'custom-automation':
      default:
        return {
          icon: <Cpu className="w-5 h-5 text-violet-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-violet-50/80 border-violet-100 group-hover:border-violet-200',
          badgeColor: 'text-violet-700 bg-violet-50 border-violet-100/90',
        };
    }
  };

  return (
    <section
      id="packages-section"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-slate-200/50"
      aria-labelledby="packages-title"
    >
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal>
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2
            id="packages-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tight leading-[1.25] mb-4 sm:mb-5"
          >
            حلول تناسب طريقة شغلك
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ابدأ من أكثر مهمة تستهلك وقتك، واختر النظام المناسب لعملك.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Packages Cards with Staggered Scroll & Hover Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
        {(niche.packagesList ?? TAMAM_PACKAGES.map((basePkg) => ({ ...basePkg, ...(niche.packages[basePkg.id] ?? {}) }))).map((pkg, idx) => {
          const visual = getPackageVisual(pkg.id);
          return (
            <ScrollReveal key={pkg.id} delay={idx * 140} className="h-full">
              <div
                className="relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-3xl bg-white/90 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200/80 transition-all duration-400 hover:-translate-y-2 group"
              >
                <div>
                  {/* Package Header with Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shadow-xs ${visual.accentBg}`}
                    >
                      {visual.icon}
                    </div>
                    {pkg.badge && (
                      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${visual.badgeColor}`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Package Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-3 group-hover:text-indigo-950 transition-colors">
                    {pkg.name}
                  </h3>

                  {/* Price + delivery time */}
                  <div className="grid grid-cols-2 mb-5 rounded-2xl border border-slate-200 bg-white overflow-hidden">
                    <div className="p-4">
                      <span className="block text-[11px] font-semibold text-slate-400 mb-1">السعر</span>
                      <span className="block text-lg sm:text-xl font-heading font-bold text-slate-950 leading-tight">{pkg.price}</span>
                      <span className="block mt-1 text-[11px] text-slate-500 leading-snug">{pkg.priceNote}</span>
                    </div>
                    <div className="p-4 border-r border-slate-200 bg-slate-50/60">
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 mb-1">
                        <Clock className="w-3 h-3" />
                        مدة التسليم
                      </span>
                      <span className="block text-lg sm:text-xl font-heading font-bold text-slate-950 leading-tight">{pkg.duration}</span>
                      <span className="block mt-1 text-[11px] text-slate-500 leading-snug">{pkg.durationNote}</span>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-6 p-3.5 rounded-2xl bg-indigo-50/60 border border-indigo-100/80">
                    <span className="block text-[11px] font-semibold text-indigo-600 mb-1">القيمة</span>
                    <p className="text-sm text-slate-800 font-medium leading-relaxed">{pkg.value}</p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{pkg.promise}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                      ما تشمله الباقة:
                    </span>
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100 group-hover:bg-indigo-100 transition-colors">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package CTA Button */}
                <div className="pt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.name)}
                    className="w-full py-3.5 px-4 text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-indigo-600 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 group-hover:bg-indigo-600"
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Closing Callout Below Packages */}
      <ScrollReveal delay={200}>
        <div className="mt-14 sm:mt-18 text-center flex flex-col items-center">
          <div className="max-w-2xl mx-auto p-5 sm:p-6 rounded-3xl bg-indigo-50/70 border border-indigo-100/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-right">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <HelpCircle className="w-5 h-5" />
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                مو متأكد أي حل يناسبك؟ قل لنا عن طريقة شغلك، ونساعدك تحدد نقطة البداية.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-semibold text-indigo-950 bg-white hover:bg-slate-50 border border-indigo-200 rounded-xl transition-all shadow-2xs hover:shadow-xs cursor-pointer shrink-0"
            >
              كلّمنا عن شغلك
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
