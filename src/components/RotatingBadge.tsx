import React from 'react';
import { ArrowDownLeft } from 'lucide-react';

interface RotatingBadgeProps {
  onClick?: () => void;
}

const BADGE_TEXT = 'TRANSFORM YOUR BUSINESS · TAMAM AI · ';
const CHARACTERS = BADGE_TEXT.split('');
const ANGLE_STEP = 360 / CHARACTERS.length;

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center select-none group shrink-0 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      aria-label="شعار تَمام التفاعلي: أتمتة ذكية ونمو مستمر"
      title="اضغط لاستكشاف حلول تَمام"
    >
      {/* Outer Rotating Circular Typography (Direct vector transformation) */}
      <svg
        className="w-full h-full animate-spin-slow group-hover:[animation-play-state:paused]"
        viewBox="0 0 160 160"
        aria-hidden="true"
      >
        {CHARACTERS.map((char, index) => {
          const rotation = index * ANGLE_STEP;
          return (
            <text
              key={index}
              x="80"
              y="22"
              transform={`rotate(${rotation}, 80, 80)`}
              textAnchor="middle"
              className="text-[10px] font-heading font-extrabold fill-slate-500 group-hover:fill-slate-900 transition-colors uppercase select-none"
            >
              {char}
            </text>
          );
        })}
      </svg>

      {/* Central Icon */}
      <div className="absolute inset-0 m-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600">
        <ArrowDownLeft className="w-4 h-4 text-white stroke-[2.2]" />
      </div>
    </div>
  );
};
