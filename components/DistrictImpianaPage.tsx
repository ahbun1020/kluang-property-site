"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ImpianaDistrictPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-10 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">Impiana Kluang Area Guide</h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            A focused area analysis of Impiana, highlighting neighbourhood positioning, family suitability, and available housing types.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Overview of Impiana Developments</h2>
          <p className="text-gray-600">
            Impiana Kluang includes distinct residential precincts such as Impiana Bayu, Impiana Damai, and Impiana Heights.
            These projects are known for planned layouts, gated environments, and family-oriented design choices.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Why Impiana Is Popular Among Families</h2>
          <p className="text-gray-600">
            Buyers often choose Impiana for its community planning, green spaces, and modern home layouts. The area supports
            practical family living with easy access to schools and daily amenities.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Infrastructure & Growth Potential</h2>
          <p className="text-gray-600">
            The wider Impiana corridor benefits from ongoing township development and improved road connectivity. This creates
            a balance of livability today with potential upside in longer-term value.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Types of Homes Available</h2>
          <p className="text-gray-600">
            The area features a range of terrace homes and semi-detached options, with select bungalow-style homes in low-density
            pockets. This makes Impiana suitable for both growing families and long-term owner-occupiers.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Related Listings</h2>
          <p className="text-gray-600">
            View available homes in Kluang on the <Link href="/properties" className="text-amber-600 hover:text-amber-500">properties page</Link>,
            including Impiana Bayu, Impiana Damai, and Impiana Heights. For purchase readiness, review the
            <Link href="/guide" className="text-amber-600 hover:text-amber-500"> buyer guide</Link> or use the
            <Link href="/loan-tools" className="text-amber-600 hover:text-amber-500"> loan tools</Link> to estimate affordability.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">FAQ</h2>
          <div className="space-y-3 text-gray-600">
            <p>Is Impiana Kluang suitable for family living?</p>
            <p>How does Impiana compare to the town center for daily convenience?</p>
            <p>Are newer precincts better than established areas within Impiana?</p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
