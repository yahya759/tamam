import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { WHATSAPP_DISPLAY } from '../config';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-xl overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-6 pb-4">
          <h2 id="privacy-title" className="font-heading text-xl font-bold text-slate-950">
            سياسة الخصوصية
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="cursor-pointer rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5 p-6 text-sm leading-7 text-slate-600">
          <section>
            <h3 className="mb-1 font-heading text-base font-semibold text-slate-900">شو بنجمع؟</h3>
            <p>
              لما تعبّي نموذج التواصل أو تراسلنا على واتساب، بنستلم الاسم، اسم الشركة، وسيلة التواصل،
              والملاحظات اللي بتكتبها. ما بنطلب أي بيانات ثانية.
            </p>
          </section>
          <section>
            <h3 className="mb-1 font-heading text-base font-semibold text-slate-900">ليش؟</h3>
            <p>عشان نرد عليك ونحضّر لك مقترح أتمتة مناسب لشغلك. ما بنستخدمها لغير هالغرض.</p>
          </section>
          <section>
            <h3 className="mb-1 font-heading text-base font-semibold text-slate-900">مع مين بنشاركها؟</h3>
            <p>
              ما بنبيع بياناتك ولا بنشاركها مع جهات تسويقية. ممكن تمرّ عبر أدوات بنستخدمها لاستلام
              الطلبات وتنظيمها (مثل واتساب وأنظمة إدارة العملاء)، وبتخضع لسياساتها.
            </p>
          </section>
          <section>
            <h3 className="mb-1 font-heading text-base font-semibold text-slate-900">قياس الزيارات</h3>
            <p>
              ممكن نستخدم أدوات قياس (مثل Google Analytics أو Meta Pixel) لنفهم كيف بتتفاعل الناس مع
              الموقع، وهي بتجمع بيانات استخدام عامة بدون ما تعرّف عليك بالاسم.
            </p>
          </section>
          <section>
            <h3 className="mb-1 font-heading text-base font-semibold text-slate-900">حذف بياناتك</h3>
            <p>
              لو بدك نحذف أي بيانات وصلتنا منك أو تعدّلها، راسلنا على واتساب{' '}
              <span dir="ltr" className="font-medium text-slate-900">{WHATSAPP_DISPLAY}</span>{' '}
              وبنتجاوب معك.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
