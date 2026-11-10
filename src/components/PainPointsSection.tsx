import React from 'react';
import { MessagesSquare, UserMinus, CalendarClock, Sparkles } from 'lucide-react';
import { PAIN_POINTS } from '../utils/automation-state';
import { ScrollReveal } from './ScrollReveal';
import { getNiche } from '../niches';

interface PainPointsSectionProps {
  onLearnMore?: () => void;
}

export const PainPointsSection: React.FC<PainPointsSectionProps> = ({ onLearnMore }) => {
  const niche = getNiche();
  const getCardVisual = (id: string) => {
    switch (id) {
      case 'endless-messages':
        return {
          icon: <MessagesSquare className="w-6 h-6 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-indigo-50/80 border-indigo-100 group-hover:border-indigo-200',
          indicator: 'رسائل متكررة',
          indicatorColor: 'text-indigo-700 bg-indigo-50/90 border border-indigo-100/80',
        };
      case 'missed-followups':
        return {
          icon: <UserMinus className="w-6 h-6 text-amber-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-amber-50/80 border-amber-100 group-hover:border-amber-200',
          indicator: 'فرص بيعية معلّقة',
          indicatorColor: 'text-amber-800 bg-amber-50/90 border border-amber-100/80',
        };
      case 'repetitive-tasks':
      default:
        return {
          icon: <CalendarClock className="w-6 h-6 text-blue-600 transition-transform duration-300 group-hover:scale-110" />,
          accentBg: 'bg-blue-50/80 border-blue-100 group-hover:border-blue-200',
          indicator: 'جدولة يدوية',
          indicatorColor: 'text-blue-700 bg-blue-50/90 border border-blue-100/80',
        };
    }
  };

  return (
    <section
      id="pain-points"
      className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-t border-slate-200/50"
      aria-labelledby="pain-points-title"
    >
      {/* Section Header with Scroll Animation */}
      <ScrollReveal>
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2
            id="pain-points-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-950 tracking-tight leading-[1.25] mb-4 sm:mb-5 text-balance"
          >
            {niche.pain.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {niche.pain.sub}
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Balanced Cards Grid with Staggered Scroll & Hover Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
        {PAIN_POINTS.map((base, idx) => {
          const o = niche.pain.items[base.id];
          const card = { ...base, ...(o ? { title: o.title, description: o.description } : {}) };
          const visual = { ...getCardVisual(base.id), ...(o ? { indicator: o.indicator } : {}) };
          return (
            <ScrollReveal key={card.id} delay={idx * 120} className="h-full">
              <div
                className="relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-3xl bg-white/85 border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-indigo-500/8 hover:border-indigo-200/80 transition-all duration-400 hover:-translate-y-2 group"
              >
                <div>
                  {/* Card Icon & Tag Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shadow-xs ${visual.accentBg}`}
                    >
                      {visual.icon}
                    </div>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${visual.indicatorColor}`}>
                      {visual.indicator}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-2.5 group-hover:text-indigo-950 transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Subtle Visual Cue */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-400 group-hover:text-indigo-600 transition-colors">
                    هدر في الوقت اليدوي
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-indigo-500 group-hover:scale-125 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Closing Statement Below Cards */}
      <ScrollReveal delay={200}>
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-indigo-50/70 border border-indigo-100/90 shadow-xs text-sm sm:text-base text-slate-800 font-medium transition-transform hover:scale-105">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              <strong className="text-indigo-950 font-bold font-heading">TAMAM</strong> {niche.pain.closing}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
