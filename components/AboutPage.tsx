"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import BioSection from '@/components/BioSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-10 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">
            {lang === 'EN'
              ? 'About Fiona Mei | Kluang Real Estate Negotiator (REN 59021)'
              : 'Mengenai Fiona Mei | Perunding Hartanah Kluang (REN 59021)'}
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            {lang === 'EN'
              ? 'Learn about Fiona Mei and the advisory approach to Kluang property selection.'
              : 'Ketahui mengenai Fiona Mei dan pendekatan khidmat nasihat untuk pemilihan hartanah di Kluang.'}
          </p>
        </div>
      </section>

      <BioSection lang={lang} />

      <Footer lang={lang} />
    </main>
  );
}
