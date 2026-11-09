import React from 'react';
import { Search, Sliders, CheckCircle2, ArrowLeft } from 'lucide-react';
import { WORKFLOW_STEPS } from '../utils/automation-state';
import { ScrollReveal } from './ScrollReveal';

interface HowItWorksSectionProps {
  onOpenInquiry?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenInquiry }) => {
  const getStepIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case '01':
        return <Search className="w-5 h-5 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />;
      case '02':
        return <Sliders className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:scale-110" />;
      case '03':
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />;
    }
  };

  return (
    <section
      id="how-it-works-section"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-slate-200/50"
      aria-labelledby="workflow-title"
    >
      {/* Section Header with Scroll Reveal */}
      <ScrollReveal>
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2
            id="workflow-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tight leading-[1.25] mb-4 sm:mb-5"
          >
            من شغل يدوي… إلى سير عمل أذكى.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            ما في حل واحد يناسب كل الشركات. نبدأ من طريقة شغلك، ونبني أتمتة تخدم احتياجك اليومي.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Numbered & Connected Steps */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Visual Connector Line on Desktop (flows right to left in RTL) */}
        <div
          className="hidden md:block absolute top-7 right-[16%] left-[16%] h-[2px] bg-gradient-to-l from-indigo-200 via-blue-200 to-emerald-200 z-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full">
          {WORKFLOW_STEPS.map((step, idx) => (
            <ScrollReveal key={step.stepNumber} delay={idx * 130} className="h-full">
              <div
                className="relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-3xl bg-white/85 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200/80 transition-all duration-400 hover:-translate-y-2 group"
              >
                <div>
                  {/* Top Step Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center group-hover:scale-105 group-hover:border-indigo-200 transition-all">
                      {getStepIcon(step.stepNumber)}
                    </div>
                    <span className="font-heading font-black text-2xl sm:text-3xl text-slate-300 group-hover:text-indigo-600 transition-colors tracking-tight select-none">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-3 flex items-center gap-2 group-hover:text-indigo-950 transition-colors">
                    <span>{step.stepNumber}</span>
                    <span className="text-slate-300 text-sm font-light">—</span>
                    <span>{step.title}</span>
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Phase Status Pill */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                    المرحلة {idx + 1} من 3
                  </span>
                  <span className="text-[11px] text-indigo-600 font-semibold group-hover:underline">
                    خطوة مدروسة
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Closing Statement & Consultation Prompt */}
      <ScrollReveal delay={200}>
        <div className="mt-14 sm:mt-18 text-center flex flex-col items-center">
          <p className="text-lg sm:text-xl font-heading font-bold text-slate-900 mb-6">
            أتمتة تبدأ من احتياجك، وتندمج مع طريقة شغلك.
          </p>

          {onOpenInquiry && (
            <button
              type="button"
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-indigo-900 bg-indigo-50 hover:bg-indigo-100/90 border border-indigo-200/80 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-xs hover:shadow-md"
            >
              <span>ابدأ بتحديد احتياج فريقك مع تَمام</span>
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
            </button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
};
