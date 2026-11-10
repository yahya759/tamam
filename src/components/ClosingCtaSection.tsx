import React from 'react';
import { ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { getNiche } from '../niches';

interface ClosingCtaSectionProps {
  onOpenInquiry: () => void;
}

export const ClosingCtaSection: React.FC<ClosingCtaSectionProps> = ({ onOpenInquiry }) => {
  const niche = getNiche();
  return (
    <section
      id="closing-cta"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-slate-200/60"
      aria-labelledby="cta-heading"
    >
      {/* Background Soft Glow Aura */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] md:w-[720px] h-[260px] sm:h-[380px] rounded-full bg-gradient-to-tr from-violet-200/20 via-indigo-100/30 to-purple-200/15 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="w-full max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl p-8 sm:p-12 md:p-16 text-center bg-gradient-to-b from-white/95 to-slate-50/90 border border-slate-200/90 shadow-xl shadow-indigo-500/5 group">
            {/* Ambient Top Glow Line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60"
              aria-hidden="true"
            />

            {/* Micro Badge */}
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-6 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              <span>خطوتك الأولى نحو أتمتة أعمالك</span>
            </div>

            {/* Main Title */}
            <h2
              id="cta-heading"
              className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-slate-950 tracking-tight leading-[1.3] sm:leading-[1.25] mb-4 sm:mb-5 max-w-3xl mx-auto"
            >
              {niche.closing.title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal">
              {niche.closing.sub}
            </p>

            {/* Primary Action Button (Warm Orange CTA matching brand identity) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onOpenInquiry}
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/50 flex items-center justify-center gap-2.5 group/btn"
              >
                <span>كلّمنا عن شغلك</span>
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover/btn:-translate-x-1" />
              </button>
            </div>

            {/* Reassurance Micro-points */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>جلسة استكشافية لفهم مهامك</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>حلول مفصّلة حسب واقع شركتك</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>بدون التزامات أو تعقيدات</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
