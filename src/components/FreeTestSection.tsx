import React from 'react';
import { ArrowLeft, Clock, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { getNiche } from '../niches';

interface FreeTestSectionProps {
  onOpenInquiry: () => void;
}

/** "Show the number instead of explaining the problem": the free test is the heart of this page. */
export const FreeTestSection: React.FC<FreeTestSectionProps> = ({ onOpenInquiry }) => {
  const test = getNiche().freeTest;
  if (!test) return null;

  return (
    <section
      id="free-test"
      aria-labelledby="free-test-title"
      className="relative z-10 w-full scroll-mt-6 border-t border-slate-200/50 px-4 py-16 sm:px-8 sm:py-24 md:px-12 lg:px-16 xl:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <h2
              id="free-test-title"
              className="mb-4 font-heading text-3xl font-black leading-[1.25] text-slate-950 text-balance sm:text-4xl lg:text-5xl"
            >
              {test.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{test.sub}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* Steps */}
            <ol className="space-y-4">
              {test.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xs sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 font-heading text-lg font-bold text-white">
                    {['١', '٢', '٣'][i]}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-slate-950 sm:text-xl">{step.title}</h3>
                    <p className="mt-1 text-[15px] leading-7 text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* The number */}
            <div className="flex flex-col rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xs sm:p-6">
              <div className="grid flex-1 grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/60 p-5 text-center">
                  <Clock className="mb-3 h-6 w-6 text-slate-400" />
                  <span className="mb-1 text-xs font-semibold text-slate-500">{test.office.label}</span>
                  <span className="font-heading text-5xl font-black leading-none text-slate-400 sm:text-6xl">
                    {test.office.value}
                  </span>
                  <span className="mt-3 text-xs leading-5 text-slate-500">{test.office.note}</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-center text-white shadow-lg shadow-indigo-500/25">
                  <Zap className="mb-3 h-6 w-6 text-amber-300" />
                  <span className="mb-1 text-xs font-semibold text-indigo-100">{test.system.label}</span>
                  <span className="font-heading text-4xl font-black leading-none sm:text-5xl">{test.system.value}</span>
                  <span className="mt-3 text-xs leading-5 text-indigo-100/90">{test.system.note}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenInquiry}
                className="group mt-5 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-500/40 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/50"
              >
                <span>{test.cta}</span>
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              </button>
              <p className="mt-3 text-center text-xs text-slate-500">{test.note}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
