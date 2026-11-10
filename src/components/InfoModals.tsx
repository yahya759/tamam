import React from 'react';
import { X, CheckCircle2, ArrowLeft, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'how-it-works' | 'packages';
  onOpenInquiry: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  type,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="info-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
          <h2 id="info-modal-title" className="text-xl sm:text-2xl font-heading font-bold text-slate-950">
            {type === 'how-it-works' ? 'طريقة العمل مع تَمام' : 'باقات وحلول تَمام'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {type === 'how-it-works' ? (
            <div className="space-y-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                نعتمد منهجية واضحة ومباشرة لتحويل المهام اليدوية والروتينية إلى مسارات أتمتة ذكية وموثوقة:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      تشخيص المهام المتكررة ونقاط الهدر
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      نجلس معك لفهم سير العمل الحالي: أين تضيع ساعات الفريق؟ ما الاستفسارات الأكثر تكراراً؟ وما المهام التي تحتاج أتمتة فورية؟
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      بناء وتدريب النظام الذكي وربطه بأدواتك
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      نقوم بتطوير وتدريب الوكيل أو مسار الأتمتة على بيانات شركتك الحقيقية ونربطه مع الواتساب، نظام CRM، التقويم، أو منصاتك السحابية.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm mb-1">
                      الإطلاق التجريبي والمتابعة المستمرة
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      اختبار شامل تحت إشراف دقيق للتأكد من دقة الردود وجودة الأتمتة، ثم تسليم النظام مع دعم فني مستمر وتطوير دوري.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-sm text-indigo-950 leading-relaxed">
                <div className="flex items-center gap-2 font-bold mb-1 text-indigo-900">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  <span>حلول مصممة خصيصاً لاحتياج شركتك</span>
                </div>
                نظراً لاختلاف حجم العمليات وعدد المحادثات وأنظمة كل شركة، لا نعتمد أسعاراً معلبة أو باقات جامدة. يتم تحديد التكلفة بدقة بناءً على نطاق الأتمتة الذي يحقق لك أعلى عائد ويخفف ساعات العمل اليدوية.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">أتمتة المهام الفردية</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    حل محدد مثل بوت واتساب ذكي للردود أو أتمتة جدولة وتذكير المواعيد.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">منظومة أتمتة شاملة</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    وكلاء ذكاء اصطناعي متعددين لمتابعة الصفقات، خدمة العملاء، وتنسيق العمليات اليومية.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            إغلاق
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm shadow-indigo-600/20"
          >
            <span>احكي لنا عن شغلك</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
