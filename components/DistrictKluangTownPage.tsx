"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KluangTownDistrictPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What makes Kluang Town attractive for long-term living?',
      answer:
        'The town offers a balanced lifestyle with essential amenities nearby, less congestion than larger cities, and practical value for everyday living.',
    },
    {
      question: 'Is Kluang Town suitable for rental demand?',
      answer:
        'Yes. Rental demand is supported by schools, healthcare access, commercial areas, and established residential neighbourhoods.',
    },
    {
      question: 'How close are schools and healthcare facilities to central neighbourhoods?',
      answer:
        'Most central neighbourhoods are a short drive from schools, clinics, and hospitals, making day-to-day family routines more convenient.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-10 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">Kluang Town Property & Lifestyle Overview</h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            A district-level overview focused on livability, accessibility, and homebuyer decision points within Kluang Town.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Kluang Town at a Glance</h2>
          <p className="text-gray-600">A quick snapshot for buyers and renters.</p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Typical buyer profile: Families, first-time buyers, upgraders</li>
            <li>Convenience level: Amenities within short driving distance</li>
            <li>Common property types: Terrace, semi-D, selected low-density homes</li>
            <li>Rental demand drivers: Schools, offices, healthcare, retail</li>
            <li>Lifestyle: Town convenience with calmer residential streets</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Why Live in Kluang Town</h2>
          <p className="text-gray-600">
            Kluang Town is the central hub for day-to-day conveniences, offering a balanced mix of retail, dining, education,
            and healthcare services. It suits buyers who value short travel times and access to established amenities while
            still seeking residential privacy.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Accessibility & Daily Conveniences</h2>
          <p className="text-gray-600">
            The town center provides direct access to arterial roads, public transport nodes, and essential services. Daily
            routines such as school drop-offs, grocery runs, and medical visits are typically within a short driving radius,
            reducing commute strain for working families.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Who Is This Area Suitable For</h2>
          <p className="text-gray-600">
            Kluang Town is suitable for owner-occupiers prioritizing convenience, as well as investors seeking properties
            with stable rental demand driven by proximity to schools, offices, and commercial clusters.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Property Types Commonly Found</h2>
          <p className="text-gray-600">
            Typical home choices include terrace houses, semi-detached homes, and selected low-density enclaves. Buyers can
            also find commercial-adjacent residences for mixed lifestyle or rental strategies.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Related Listings</h2>
          <p className="text-gray-600">
            Explore a curated mix of town-adjacent homes and established neighbourhood options.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Subsale terraces near town centre</li>
            <li>Shoplots and mixed-use locations</li>
            <li>Family-friendly neighbourhood homes</li>
          </ul>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-xl font-bold"
          >
            View Available Homes
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">FAQ</h2>
          <p className="text-gray-600">About living in Kluang Town.</p>
          <div className="space-y-4 text-gray-600">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const contentId = `kluang-town-faq-${index}`;

              return (
                <div key={faq.question} className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
                  <button
                    type="button"
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-navy-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl leading-none">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div
                    id={contentId}
                    role="region"
                    aria-hidden={!isOpen}
                    className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
      <Script
        id="kluang-town-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
