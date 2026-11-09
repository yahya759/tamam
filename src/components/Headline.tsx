import React from 'react';
import { Sparkles } from 'lucide-react';

export const Headline: React.FC = () => {
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
          <span className="block mb-2 sm:mb-3 text-slate-950">
            خلّي الشغل المتكرر يمشي تلقائيًا.
          </span>
          <span className="block pt-1 text-transparent bg-clip-text bg-gradient-to-l from-indigo-950 via-slate-900 to-indigo-900">
            ووقتك؟ تَمام.
          </span>
        </h1>
      </div>
    </div>
  );
};
