import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { AutomationChatDemo } from './AutomationChatDemo';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenSolutions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInquiry, onOpenSolutions }) => {
  return (
    <main className="relative z-10 flex w-full flex-1 items-center px-4 py-10 sm:px-8 sm:py-14 md:px-12 lg:px-16 lg:py-16 xl:px-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Copy */}
        <div className="text-start">
          <h1 className="font-heading font-bold text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.25] text-indigo-950">
            <span className="hero-rise block text-indigo-950" style={{ animationDelay: '80ms' }}>
              خلّي الشغل المتكرر يمشي تلقائيًا.
            </span>
            <span className="hero-rise block text-indigo-600" style={{ animationDelay: '320ms' }}>
              ووقتك؟ تَمام.
            </span>
          </h1>

          <p
            className="hero-rise mt-7 max-w-xl text-lg leading-9 text-slate-600 sm:text-xl"
            style={{ animationDelay: '560ms' }}
          >
            نبني أنظمة ذكية تردّ على العملاء، تتابع الفرص، وتنظّم المواعيد — لتخفيف المهام اليدوية ومساعدة فريقك يركّز على نمو شركتك.
          </p>

          <div
            className="hero-rise mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6"
            style={{ animationDelay: '720ms' }}
          >
            <button
              type="button"
              onClick={onOpenInquiry}
              className="group flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-500/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/50 active:translate-y-0"
            >
              <span>احكي لنا عن شغلك</span>
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onOpenSolutions}
              className="group flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-base font-medium text-slate-700 underline decoration-slate-300 underline-offset-8 transition-colors hover:text-slate-950 hover:decoration-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span>اكتشف حلول TAMAM</span>
              <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-900" />
            </button>
          </div>
        </div>

        {/* Live product moment */}
        <div className="hero-rise pb-6 lg:pb-0" style={{ animationDelay: '480ms' }}>
          <AutomationChatDemo />
          <p className="mt-8 text-center text-xs text-slate-400">
            مثال توضيحي لمحادثة بعد الأتمتة
          </p>
        </div>
      </div>
    </main>
  );
};
