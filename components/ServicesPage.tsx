"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, TrendingUp, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-black">
            How I Help You Buy the Right Property in Kluang
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Clear guidance from shortlisting to key handover, with practical support at each step.
          </p>
          <a
            href="https://wa.me/60167100902"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold mt-8"
          >
            WhatsApp for Free Consultation
          </a>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Who I Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-amber-500 mb-3"><Users size={24} /></div>
              <h3 className="font-bold text-navy-900">First-time Buyers</h3>
              <p className="text-gray-500 mt-2">Structured guidance to reduce uncertainty and avoid costly mistakes.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-amber-500 mb-3"><TrendingUp size={24} /></div>
              <h3 className="font-bold text-navy-900">Upgraders</h3>
              <p className="text-gray-500 mt-2">Focused shortlists that match new space needs and future plans.</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="text-amber-500 mb-3"><Briefcase size={24} /></div>
              <h3 className="font-bold text-navy-900">Investors</h3>
              <p className="text-gray-500 mt-2">Location and demand checks to support stable long-term value.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Property matching and shortlisting focused on Kluang',
              'Loan and DSR readiness with affordability guidance',
              'New project vs subsale comparison with pros and cons',
              'Viewing preparation and negotiation strategy',
              'SPA, lawyer, and bank coordination guidance',
              'After-purchase support: handover checklist, utilities, defect checks',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <CheckCircle2 size={18} className="text-amber-500 mt-0.5" />
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500">
            Use the <Link href="/loan-tools" className="text-amber-600 hover:text-amber-500">Loan Tools</Link> to estimate affordability before viewing.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: 'Step 1', text: 'Share budget and preferred area' },
              { step: 'Step 2', text: 'Shortlist and schedule viewing' },
              { step: 'Step 3', text: 'Loan check and offer or booking guidance' },
              { step: 'Step 4', text: 'SPA to handover support' },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <div className="text-amber-500 font-bold text-sm uppercase tracking-widest">{item.step}</div>
                <div className="text-navy-900 font-bold mt-2">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/properties" className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-3 rounded-xl font-bold">
              Properties
            </Link>
            <Link href="/guide" className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-3 rounded-xl font-bold">
              Guide
            </Link>
            <Link href="/loan-tools" className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-3 rounded-xl font-bold">
              Loan Tools
            </Link>
            <Link href="/#contact" className="bg-navy-900 hover:bg-navy-800 text-white px-5 py-3 rounded-xl font-bold">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-navy-900">Ready to discuss your shortlist?</h2>
            <p className="text-gray-500 mt-2">Get clear guidance before making a decision.</p>
          </div>
          <a
            href="https://wa.me/60167100902"
            className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            WhatsApp for Free Consultation
          </a>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
