"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import GuideSection from '@/components/GuideSection';
import GuideDetailsModal from '@/components/GuideDetailsModal';
import MortgageModal from '@/components/MortgageModal';
import Footer from '@/components/Footer';

export default function GuidePage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isMortgageModalOpen, setIsMortgageModalOpen] = useState(false);

  const handleViewGuide = (guide: any) => {
    setSelectedGuide(guide);
    setIsGuideModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-10 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">
            {lang === 'EN' ? 'Buying Property in Kluang' : 'Panduan Membeli Hartanah di Kluang'}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            {lang === 'EN'
              ? 'A step-by-step guide to home selection, loan readiness, legal process, and key handover.'
              : 'Panduan langkah demi langkah untuk pemilihan rumah, kesediaan pinjaman, proses undang-undang, dan penyerahan kunci.'}
          </p>
        </div>
      </section>

      <GuideSection
        lang={lang}
        onViewGuide={handleViewGuide}
        onOpenCalculator={() => setIsMortgageModalOpen(true)}
      />

      <Footer lang={lang} />

      <GuideDetailsModal
        isOpen={isGuideModalOpen}
        guide={selectedGuide}
        onClose={() => setIsGuideModalOpen(false)}
        lang={lang}
      />
      <MortgageModal
        isOpen={isMortgageModalOpen}
        onClose={() => setIsMortgageModalOpen(false)}
        lang={lang}
      />
    </main>
  );
}
