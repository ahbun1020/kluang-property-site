"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KluangTownDistrictPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');

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
            To view available homes in Kluang, visit the <Link href="/properties" className="text-amber-600 hover:text-amber-500">properties page</Link>.
            For a structured buyer roadmap, see the <Link href="/guide" className="text-amber-600 hover:text-amber-500">buyer guide</Link> or use the
            <Link href="/loan-tools" className="text-amber-600 hover:text-amber-500"> loan tools</Link> to estimate affordability.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">FAQ</h2>
          <div className="space-y-3 text-gray-600">
            <p>What makes Kluang Town attractive for long-term living?</p>
            <p>Are homes in Kluang Town suitable for rental demand?</p>
            <p>How close are schools and healthcare facilities to central neighbourhoods?</p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
