
"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  lang: 'EN' | 'BM';
  setLang: (l: 'EN' | 'BM') => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = {
    EN: [
      { n: 'Home', l: '/' },
      { n: 'Properties', l: '#properties' },
      { n: 'About', l: '/about' },
      { n: 'Guide', l: '/guide' },
      { n: 'Loan Tools', l: '/loan-tools' },
      { n: 'Contact', l: '#contact' },
    ],
    BM: [
      { n: 'Utama', l: '/' },
      { n: 'Hartanah', l: '#properties' },
      { n: 'Tentang', l: '/about' },
      { n: 'Panduan', l: '/guide' },
      { n: 'Alat Pinjaman', l: '/loan-tools' },
      { n: 'Hubungi', l: '#contact' },
    ]
  }[lang];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
            FIONA <span className="text-amber-500">MEI</span>
          </Link>
          <span className={`hidden md:block text-xs border px-2 py-0.5 rounded ${isScrolled ? 'border-navy-900 text-navy-900' : 'border-white text-white'}`}>REN 59021</span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {items.map((item) => (
            <Link key={item.n} href={item.l} className={`font-medium hover:text-amber-500 transition-colors ${isScrolled ? 'text-navy-900' : 'text-white'}`}>
              {item.n}
            </Link>
          ))}
          <div className="flex items-center gap-1 bg-navy-900/10 backdrop-blur rounded-full p-1 border border-white/20">
            <button onClick={() => setLang('EN')} className={`px-3 py-1 text-xs font-bold rounded-full ${lang === 'EN' ? 'bg-amber-500 text-white' : (isScrolled ? 'text-navy-900' : 'text-white')}`}>EN</button>
            <button onClick={() => setLang('BM')} className={`px-3 py-1 text-xs font-bold rounded-full ${lang === 'BM' ? 'bg-amber-500 text-white' : (isScrolled ? 'text-navy-900' : 'text-white')}`}>BM</button>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2">
            <Phone size={18} /> {lang === 'EN' ? 'Consult Now' : 'Hubungi'}
          </button>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button className={`text-2xl ${isScrolled ? 'text-navy-900' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`lg:hidden ${isScrolled ? 'bg-white' : 'bg-navy-900/95'} border-t ${isScrolled ? 'border-gray-100' : 'border-white/10'}`}>
          <div className="container mx-auto px-4 md:px-8 py-4 flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.n}
                href={item.l}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold ${isScrolled ? 'text-navy-900' : 'text-white'} hover:text-amber-500 transition-colors`}
              >
                {item.n}
              </Link>
            ))}
            <div className="flex items-center gap-2">
              <button onClick={() => setLang('EN')} className={`px-3 py-1 text-xs font-bold rounded-full ${lang === 'EN' ? 'bg-amber-500 text-white' : (isScrolled ? 'text-navy-900 border border-gray-200' : 'text-white border border-white/30')}`}>EN</button>
              <button onClick={() => setLang('BM')} className={`px-3 py-1 text-xs font-bold rounded-full ${lang === 'BM' ? 'bg-amber-500 text-white' : (isScrolled ? 'text-navy-900 border border-gray-200' : 'text-white border border-white/30')}`}>BM</button>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 w-fit">
              <Phone size={18} /> {lang === 'EN' ? 'Consult Now' : 'Hubungi'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
