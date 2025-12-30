"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MortgageModal from '@/components/MortgageModal';
import Footer from '@/components/Footer';

export default function LoanToolsPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');
  const [isMortgageModalOpen, setIsMortgageModalOpen] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-10 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">
            {lang === 'EN' ? 'Home Loan Calculator Malaysia' : 'Kalkulator Pinjaman Rumah Malaysia'}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            {lang === 'EN'
              ? 'Estimate your home loan and monthly repayment for properties in Kluang, Malaysia.'
              : 'Anggarkan pinjaman rumah dan bayaran bulanan untuk hartanah di Kluang, Malaysia.'}
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">
                {lang === 'EN' ? 'Loan Readiness Assessment' : 'Penilaian Kesediaan Pinjaman'}
              </h2>
              <p className="text-gray-500 mt-2">
                {lang === 'EN'
                  ? 'Use the calculator to estimate monthly repayments before shortlisting a home.'
                  : 'Gunakan kalkulator untuk anggaran bayaran bulanan sebelum menyenarai pendek rumah.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsMortgageModalOpen(true)}
              className="bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-xl font-bold"
            >
              {lang === 'EN' ? 'Open Calculator' : 'Buka Kalkulator'}
            </button>
          </div>
        </div>
      </section>

      <Footer lang={lang} />

      <MortgageModal
        isOpen={isMortgageModalOpen}
        onClose={() => setIsMortgageModalOpen(false)}
        lang={lang}
      />
    </main>
  );
}
