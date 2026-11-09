/**
 * TAMAM | تَمام — Hero Section
 * Modern AI & Automation Brand for Businesses
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InquiryModal } from './components/InquiryModal';
import { SolutionsDrawer } from './components/SolutionsDrawer';
import { InfoModal } from './components/InfoModals';
import { PainPointsSection } from './components/PainPointsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PackagesSection } from './components/PackagesSection';
import { ClosingCtaSection } from './components/ClosingCtaSection';
import { DarkFooter } from './components/DarkFooter';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [infoModalType, setInfoModalType] = useState<'how-it-works' | 'packages' | null>(null);
  const [preselectedSolution, setPreselectedSolution] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handleOpenInquiryWithSolution = (solutionId: string) => {
    setPreselectedSolution(solutionId);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-[#FAFAFA] text-slate-900 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-950">
      {/* Background Subtle Vertical Grid Guidelines (softened to not compete with the headline) */}
      <div
        className="pointer-events-none absolute inset-0 bg-vertical-grid opacity-25 z-0"
        aria-hidden="true"
      />

      {/* Subtle Floating Accent Marks (inspired by reference image's quiet vertical accents) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0" aria-hidden="true">
        {/* Left lavender dash */}
        <span className="absolute top-1/3 right-[12%] w-[1.5px] h-9 bg-indigo-300/40 rounded-full" />
        {/* Amber accent tick */}
        <span className="absolute top-1/2 right-[22%] w-[1.5px] h-7 bg-amber-400/50 rounded-full" />
        {/* Center-left subtle tick */}
        <span className="absolute top-[60%] left-[16%] w-[1.5px] h-8 bg-slate-300/60 rounded-full" />
        {/* Top-right subtle tick */}
        <span className="absolute top-[28%] left-[28%] w-[1.5px] h-6 bg-orange-300/40 rounded-full" />
      </div>

      {/* 1. Header & Navigation */}
      <Navbar
        onOpenSolutions={() => {
          const el = document.getElementById('how-it-works-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setIsSolutionsOpen(true);
          }
        }}
        onOpenHowItWorks={() => {
          const el = document.getElementById('how-it-works-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setInfoModalType('how-it-works');
          }
        }}
        onOpenPackages={() => {
          const el = document.getElementById('packages-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setInfoModalType('packages');
          }
        }}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* 2. Hero */}
      <HeroSection
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onOpenSolutions={() => setIsSolutionsOpen(true)}
      />

      {/* 3. Bottom Solutions Ribbon & Circular Badge (Completing the Hero Section) */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-8 pt-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200/60 pt-4 w-full">
          {/* Solutions Text Strip (Zero-Pill discipline: clean typographic metadata) */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="text-slate-400 font-normal">حلول تَمام الأساسية:</span>
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-slate-700">
              <button
                type="button"
                onClick={() => handleOpenInquiryWithSolution('customer-support')}
                className="hover:text-indigo-600 transition-colors cursor-pointer"
              >
                ردود العملاء
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={() => handleOpenInquiryWithSolution('lead-followup')}
                className="hover:text-indigo-600 transition-colors cursor-pointer"
              >
                المتابعة
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={() => handleOpenInquiryWithSolution('appointment-reminders')}
                className="hover:text-indigo-600 transition-colors cursor-pointer"
              >
                المواعيد
              </button>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <button
                type="button"
                onClick={() => handleOpenInquiryWithSolution('custom-agent')}
                className="hover:text-indigo-600 transition-colors cursor-pointer"
              >
                وكلاء الذكاء الاصطناعي
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Section 1: Repetitive Tasks & Pain Points */}
      <PainPointsSection onLearnMore={() => setIsSolutionsOpen(true)} />

      {/* 5. Section 2: How TAMAM Works (From manual to smart workflow) */}
      <HowItWorksSection onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* 6. Section 3: Packages & Offerings (حلول تناسب طريقة شغلك) */}
      <PackagesSection
        onSelectPackage={(pkgName) => {
          setSelectedPackage(pkgName);
          setIsInquiryOpen(true);
        }}
        onOpenConsultation={() => {
          setSelectedPackage(null);
          setIsInquiryOpen(true);
        }}
      />

      {/* 7. Closing CTA Section (جاهز تخفف الشغل اليدوي عن فريقك؟) */}
      <ClosingCtaSection onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* 8. Refined Dark Footer */}
      <DarkFooter
        onOpenSolutions={() => setIsSolutionsOpen(true)}
        onOpenHowItWorks={() => {
          const el = document.getElementById('how-it-works-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setInfoModalType('how-it-works');
          }
        }}
        onOpenPackages={() => {
          const el = document.getElementById('packages-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            setInfoModalType('packages');
          }
        }}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Modals & Drawers */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => {
          setIsInquiryOpen(false);
          setPreselectedSolution(null);
          setSelectedPackage(null);
        }}
        initialPackageInterest={selectedPackage}
      />

      <SolutionsDrawer
        isOpen={isSolutionsOpen}
        onClose={() => setIsSolutionsOpen(false)}
        onSelectSolution={(solutionId) => {
          handleOpenInquiryWithSolution(solutionId);
        }}
      />

      <InfoModal
        isOpen={infoModalType !== null}
        type={infoModalType || 'how-it-works'}
        onClose={() => setInfoModalType(null)}
        onOpenInquiry={() => {
          setInfoModalType(null);
          setIsInquiryOpen(true);
        }}
      />
    </div>
  );
}
