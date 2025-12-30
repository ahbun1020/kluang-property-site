"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MatureNeighbourhoodsPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-10 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">Mature Residential Neighbourhoods in Kluang</h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            A stability-focused guide to established residential areas suited for long-term ownership and predictable daily living.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">What Defines a Mature Area</h2>
          <p className="text-gray-600">
            Mature neighbourhoods typically feature stable occupancy, completed infrastructure, and well-established amenities.
            These areas appeal to buyers seeking long-term livability with fewer development uncertainties.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Popular Mature Neighbourhoods in Kluang</h2>
          <p className="text-gray-600">
            Common mature areas include Taman Saujana, Taman Kluang Perdana, and Parkland. These neighbourhoods are known for
            their complete surrounding facilities, established community profiles, and consistent demand for owner-occupation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Pros & Cons Compared to New Developments</h2>
          <p className="text-gray-600">
            Mature neighbourhoods offer immediate convenience and stable surroundings, while newer developments may offer newer
            designs and facilities. Buyers should weigh lifestyle priorities against future growth potential when deciding.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Who Should Consider These Areas</h2>
          <p className="text-gray-600">
            These areas suit buyers prioritizing stability, completed infrastructure, and predictability in day-to-day life.
            They also appeal to families who value established schools and community services.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Related Listings</h2>
          <p className="text-gray-600">
            View available homes in Kluang on the <Link href="/properties" className="text-amber-600 hover:text-amber-500">properties page</Link>.
            For decision guidance, review the <Link href="/guide" className="text-amber-600 hover:text-amber-500">buyer guide</Link> or check
            <Link href="/loan-tools" className="text-amber-600 hover:text-amber-500"> loan tools</Link> before finalizing affordability.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">FAQ</h2>
          <div className="space-y-3 text-gray-600">
            <p>Are mature neighbourhoods in Kluang still good value today?</p>
            <p>How do older areas compare with new projects for long-term ownership?</p>
            <p>What factors affect resale stability in established neighbourhoods?</p>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
