import React from 'react';
import { X, MessageSquareText, TrendingUp, CalendarCheck, Cpu, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { TAMAM_SOLUTIONS } from '../utils/automation-state';

interface SolutionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSolution: (solutionId: string) => void;
}

export const SolutionsDrawer: React.FC<SolutionsDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSolution,
}) => {
  if (!isOpen) return null;

  const getIcon = (id: string) => {
    switch (id) {
      case 'customer-support':
        return <MessageSquareText className="w-5 h-5 text-indigo-600" />;
      case 'lead-followup':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'appointment-reminders':
        return <CalendarCheck className="w-5 h-5 text-emerald-600" />;
      case 'custom-agent':
      default:
        return <Cpu className="w-5 h-5 text-violet-600" />;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="solutions-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
              حلول أتمتة الأعمال
            </div>
            <h2 id="solutions-title" className="text-xl sm:text-2xl font-heading font-bold text-slate-950">
              حلول TAMAM بالذكاء الاصطناعي
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice on unverified details */}
        <div className="px-6 pt-4">
          <p className="text-xs text-slate-500 leading-relaxed">
            تم تصميم هذه الحلول لتتكامل مباشرة مع أنظمتكم الحالية (واتساب، CRM، المنصات السحابية) دون تعقيد تشغيلي.
          </p>
        </div>

        {/* 4 Confirmed Solutions Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TAMAM_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="p-5 rounded-2xl border border-slate-200/90 hover:border-indigo-300 bg-slate-50/40 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-100 group-hover:scale-110 transition-transform">
                    {getIcon(sol.id)}
                  </div>
                  <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md">
                    {sol.highlight}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 mb-1">
                  {sol.title}
                </h3>
                <p className="text-xs text-indigo-900/70 font-medium mb-2">
                  {sol.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {sol.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectSolution(sol.id);
                  }}
                  className="text-xs font-semibold text-indigo-600 group-hover:text-indigo-800 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>طلب أتمتة هذه الخدمة</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            جاهزون لتخصيص وكيل ذكي لاحتياجات فريقك
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
