import React, { useState } from 'react';
import { X, CheckCircle, ArrowLeft, AlertCircle, Info, ExternalLink } from 'lucide-react';
import { TAMAM_SOLUTIONS, validateInquiryForm, InquiryFormData } from '../utils/automation-state';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageInterest?: string | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialPackageInterest,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    businessName: '',
    contact: '',
    notes: initialPackageInterest ? `بشأن باقة: ${initialPackageInterest}` : '',
    selectedSolutions: ['customer-support', 'lead-followup'],
  });

  React.useEffect(() => {
    if (initialPackageInterest) {
      setFormData((prev) => ({
        ...prev,
        notes: `بشأن باقة: ${initialPackageInterest}`,
      }));
    }
  }, [initialPackageInterest]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSolutionToggle = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedSolutions.includes(id);
      return {
        ...prev,
        selectedSolutions: exists
          ? prev.selectedSolutions.filter((item) => item !== id)
          : [...prev.selectedSolutions, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      businessName: '',
      contact: '',
      notes: '',
      selectedSolutions: ['customer-support'],
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
          <div>
            <h2 id="inquiry-title" className="text-xl sm:text-2xl font-heading font-bold text-slate-950">
              احكي لنا عن شغلك
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              شاركنا نوع المهام التي تود أتمتتها في شركتك
            </p>
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

        {/* Informative Config Note */}
        <div className="mx-6 mt-4 p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl flex items-start gap-2.5 text-xs text-amber-900 leading-relaxed">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">ملاحظة تشغيلية واضحة:</strong>
            لم يتم تزويد البراند بعد ببيانات تواصل رسمية أو رابط حجز. هذا النموذج يعمل بالكامل كواجهة تفاعلية جاهزة للربط المباشر مع نظامكم (CRM، بريد، أو رابط تقويم).
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">
              وصلتنا تفاصيل مشروعك!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mb-6 leading-relaxed">
              شكرًا لك يا <strong className="text-slate-900">{formData.name}</strong>. فريق تَمام سيراجع احتياجات شركة <strong className="text-slate-900">{formData.businessName}</strong> لتحضير مقترح أتمتة مخصص يناسب سير عملكم.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                إرسال استفسار آخر
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                العودة للرئيسية
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  الاسم الكريم <span className="text-red-500">*</span>
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="مثال: فيصل العتيبي"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-indigo-400 focus:border-indigo-400'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="inquiry-business" className="block text-xs font-semibold text-slate-700 mb-1.5">
                  اسم الشركة أو النشاط <span className="text-red-500">*</span>
                </label>
                <input
                  id="inquiry-business"
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="مثال: متجر رواء / عيادة النخبة"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                    errors.businessName ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-indigo-400 focus:border-indigo-400'
                  }`}
                />
                {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
              </div>
            </div>

            {/* Contact details */}
            <div>
              <label htmlFor="inquiry-contact" className="block text-xs font-semibold text-slate-700 mb-1.5">
                وسيلة التواصل (بريد إلكتروني أو رقم واتساب) <span className="text-red-500">*</span>
              </label>
              <input
                id="inquiry-contact"
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="info@company.com أو +966..."
                className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                  errors.contact ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-indigo-400 focus:border-indigo-400'
                }`}
              />
              {errors.contact && <p className="text-xs text-red-600 mt-1">{errors.contact}</p>}
            </div>

            {/* Solutions Checklist */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">
                المهام والحلول المراد أتمتتها (اختر ما يناسبك):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TAMAM_SOLUTIONS.map((solution) => {
                  const isChecked = formData.selectedSolutions.includes(solution.id);
                  return (
                    <button
                      key={solution.id}
                      type="button"
                      onClick={() => handleSolutionToggle(solution.id)}
                      className={`flex items-center gap-2.5 p-2.5 text-right text-xs rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'border-indigo-400 bg-indigo-50/60 text-indigo-950 font-medium'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <CheckCircle className="w-3.5 h-3.5" />}
                      </div>
                      <span className="leading-snug">{solution.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Notes */}
            <div>
              <label htmlFor="inquiry-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                ملاحظات أو تفاصيل إضافية عن سير العمل (اختياري)
              </label>
              <textarea
                id="inquiry-notes"
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="مثال: نستقبل أكثر من 100 محادثة يومياً ونريد أتمتة الردود وحجز المواعيد..."
                className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 resize-none transition-all"
              />
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#FF5722] to-[#F4511E] hover:from-[#F4511E] hover:to-[#E64A19] rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>إرسال التفاصيل</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-slate-400 text-center sm:text-left">
                بياناتك مشفرة ومحمية بالكامل
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
