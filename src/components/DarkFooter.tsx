import React from 'react';
import { ArrowUpLeft, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_DISPLAY, waLink } from '../config';
import { getNiche } from '../niches';
import { trackEvent } from '../lib/analytics';

interface DarkFooterProps {
  onOpenSolutions: () => void;
  onOpenHowItWorks: () => void;
  onOpenPackages: () => void;
  onOpenInquiry: () => void;
  onOpenPrivacy: () => void;
}

export const DarkFooter: React.FC<DarkFooterProps> = ({
  onOpenSolutions,
  onOpenHowItWorks,
  onOpenPackages,
  onOpenInquiry,
  onOpenPrivacy,
}) => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 w-full bg-slate-950 text-slate-300 border-t border-slate-800/90 pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
      {/* Subtle Ambient Glow Behind Footer Header */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-96 h-48 bg-indigo-500/10 blur-3xl rounded-full"
        aria-hidden="true"
      />

      <div className="w-full max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Textual Slogan */}
          <div className="md:col-span-6 flex flex-col items-start">
            {/* Logo Emblem & Wordmark */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20">
                <span>ت</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl text-white tracking-tight">TAMAM</span>
                <span className="text-slate-600">|</span>
                <span className="font-heading font-bold text-lg text-slate-300">تَمام</span>
              </div>
            </div>

            {/* Exact Requested Brand Textual Slogan */}
            <p className="font-heading font-bold text-lg sm:text-xl text-white mb-3">
              خلّي الشغل المتكرر يمشي تلقائيًا.
            </p>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-normal">
              نبني أنظمة وأتمتة ذكية لشركتك للرد على العملاء، تنظيم المواعيد، ومتابعة الفرص بدقة وكفاءة.
            </p>
          </div>

          {/* Existing Sections Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-heading">
              أقسام الموقع
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenSolutions}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>الحلول</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenHowItWorks}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>طريقة العمل</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenPackages}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>الباقات</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <span>تواصل معنا</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Communication Action (Connecting with verified project method) */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-heading">
                قناة الاستشارة
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                نموذج الاستشارة المباشر متاح لتحديد احتياجات شركتك والبدء في تصميم سير عملك المؤتمت.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenInquiry}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs hover:shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-indigo-400" />
              <span>كلّمنا عن شغلك</span>
            </button>

            <a
              href={waLink(getNiche().waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', 'contact')}
              className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#4ade80] border border-[#25D366]/30 text-xs sm:text-sm font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span dir="ltr">{WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>© {currentYear} TAMAM | تَمام — أتمتة ذكية للشركات. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              سياسة الخصوصية
            </button>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>العودة للأعلى</span>
              <ArrowUpLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
