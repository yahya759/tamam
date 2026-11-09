import React, { useState } from 'react';
import { Menu, X, Sparkles, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenSolutions: () => void;
  onOpenHowItWorks: () => void;
  onOpenPackages: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSolutions,
  onOpenHowItWorks,
  onOpenPackages,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-30 w-full pt-6 pb-4 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="flex items-center justify-between">
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="التنقل الرئيسي">
          <button
            type="button"
            onClick={onOpenSolutions}
            className="transition-colors hover:text-slate-950 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1"
          >
            الحلول
          </button>
          <button
            type="button"
            onClick={onOpenHowItWorks}
            className="transition-colors hover:text-slate-950 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1"
          >
            طريقة العمل
          </button>
          <button
            type="button"
            onClick={onOpenPackages}
            className="transition-colors hover:text-slate-950 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md py-1"
          >
            الباقات
          </button>
        </nav>

        {/* Centered Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex flex-col text-right">
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-xl font-bold tracking-tight text-slate-950">TAMAM</span>
              <span className="text-slate-300 text-sm font-light">|</span>
              <span className="font-heading text-lg font-bold text-indigo-950">تَمام</span>
            </div>
          </div>
        </div>

        {/* Desktop Contact CTA Link */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onOpenInquiry}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors py-1 px-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
          >
            <span>تواصل معنا</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5 text-slate-400 group-hover:text-indigo-600" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/5 transition-all">
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-700">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSolutions();
              }}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              الحلول
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHowItWorks();
              }}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              طريقة العمل
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPackages();
              }}
              className="text-right py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
            >
              الباقات
            </button>
            <hr className="border-slate-100 my-1" />
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="flex items-center justify-between text-right py-2 px-3 rounded-lg bg-indigo-50/70 text-indigo-700 font-semibold hover:bg-indigo-100/70 transition-colors"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
