import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeadlineSwitchProps {
  isAutomated: boolean;
  onToggle: () => void;
}

export const HeadlineSwitch: React.FC<HeadlineSwitchProps> = ({
  isAutomated,
  onToggle,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center select-none w-full">
      {/* Small Intro Kicker */}
      <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-indigo-700 bg-indigo-50/90 rounded-full border border-indigo-100/90 shadow-xs transition-transform hover:scale-105">
        <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
        <span>أتمتة ذكية للشركات</span>
      </div>

      {/* Main Big Headline */}
      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-slate-950 tracking-tight leading-[1.3] sm:leading-[1.25]">
          {/* First Sentence: Continuous, uninterrupted, crystal clear */}
          <span className="block mb-2 sm:mb-3 text-slate-950">
            خلّي الشغل المتكرر يمشي تلقائيًا.
          </span>

          {/* Second Sentence + Neon Switch Companion */}
          <div className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-3 pt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-indigo-950 via-slate-900 to-indigo-900">
              ووقتك؟ تَمام.
            </span>

            {/* Neon Blue-Purple Automation Switch Element */}
            <div className="relative inline-flex items-center group my-1">
              {/* Soft surrounding neon ambient glow */}
              <div
                className={`absolute -inset-1.5 rounded-full blur-md transition-all duration-400 pointer-events-none ${
                  isAutomated
                    ? 'bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-violet-500/50 opacity-80 group-hover:opacity-100'
                    : 'opacity-0'
                }`}
                aria-hidden="true"
              />

              {/* Subtle reflection beneath the switch */}
              <div
                className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4/5 h-2 blur-sm rounded-full pointer-events-none transition-opacity duration-400 ${
                  isAutomated
                    ? 'bg-gradient-to-r from-blue-600/30 via-indigo-600/40 to-violet-600/30 opacity-90'
                    : 'opacity-0'
                }`}
                aria-hidden="true"
              />

              {/* The interactive Switch */}
              <button
                type="button"
                role="switch"
                aria-checked={isAutomated}
                aria-label={
                  isAutomated
                    ? 'وضع الأتمتة مفعّل (تلقائي). اضغط للتحويل إلى الوضع اليدوي'
                    : 'الوضع اليدوي مفعّل. اضغط لتشغيل الأتمتة التلقائية'
                }
                onClick={onToggle}
                className={`relative inline-flex items-center cursor-pointer transition-all duration-400 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/50 rounded-full px-2 py-1 select-none shrink-0 z-10
                  ${
                    isAutomated
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-[0_4px_20px_rgba(99,102,241,0.45)] ring-1 ring-white/60 border border-indigo-300/40'
                      : 'bg-slate-200 hover:bg-slate-300/90 text-slate-700 border border-slate-300 shadow-inner'
                  }
                  w-28 sm:w-34 md:w-38 h-9 sm:h-11 md:h-12
                `}
              >
                {/* Switch Text: Displays "تلقائي" clearly */}
                <div className="w-full flex items-center justify-between px-1.5 sm:px-2 font-heading font-bold text-xs sm:text-sm">
                  <span
                    className={`transition-all duration-300 ${
                      isAutomated
                        ? 'opacity-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] text-white'
                        : 'opacity-0'
                    }`}
                  >
                    تلقائي
                  </span>
                  <span
                    className={`transition-all duration-300 ${
                      !isAutomated ? 'opacity-100 text-slate-700' : 'opacity-0'
                    }`}
                  >
                    يدوي
                  </span>
                </div>

                {/* Tactile Knob with smooth sliding and neon dot */}
                <div
                  className={`absolute top-1 bottom-1 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-400 ease-out
                    w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                    ${
                      isAutomated
                        ? 'left-1 right-auto'
                        : 'right-1 left-auto'
                    }
                  `}
                >
                  <div
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                      isAutomated ? 'bg-indigo-600 shadow-xs shadow-indigo-500' : 'bg-slate-400'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </h1>
      </div>

      {/* Switch Status Micro-Callout with Updated Non-Numerical Phrasing */}
      <div className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-slate-200/80 shadow-xs text-xs sm:text-sm text-slate-600 font-medium transition-all duration-300">
        <span
          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
            isAutomated ? 'bg-emerald-500 animate-pulse shadow-xs shadow-emerald-500/50' : 'bg-slate-400'
          }`}
        />
        <span>
          {isAutomated ? (
            <span>
              الأتمتة الذكية نشطة —{' '}
              <strong className="text-indigo-600 font-semibold font-heading">
                أتمتة ذكية للردود والمتابعة والمواعيد
              </strong>
            </span>
          ) : (
            <span className="text-slate-500">
              الوضع التقليدي اليدوي — اضغط على المفتاح لتجربة تفعيل الأتمتة
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
