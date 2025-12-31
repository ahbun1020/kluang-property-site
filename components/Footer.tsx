
"use client";

import React, { useState } from 'react';
import { Facebook, MessageCircle, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  lang: 'EN' | 'BM';
}

const XiaohongshuIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
    <rect x="10" y="10" width="44" height="44" rx="10" fill="#FF2E44" />
    <text
      x="32"
      y="35"
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#FFFFFF"
      fontSize="18"
      fontWeight="800"
      letterSpacing="0.5"
    >
      小红书
    </text>
  </svg>
);

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const content = {
    EN: {
      desc: "Your Kluang property expert, dedicated to turning every expectation into a warm home. Buying, selling, or renting, we're with you. Certified Real Estate Negotiator (REN 59021), specializing in residential properties in Kluang, Johor. Your trusted Kluang property specialist.",
      quick: 'Quick Links',
      areas: 'Service Areas',
      contact: 'Contact Us',
      links: [
        { label: 'Featured Houses', href: '/#properties' },
        { label: 'Kluang District Analysis', href: '/districts/kluang-town' },
        { label: 'About', href: '/about' },
        { label: 'Guide', href: '/guide' },
        { label: 'Loan Tools', href: '/#loan-readiness' },
        { label: 'FAQ', type: 'faq' }
      ],
      policy: 'Privacy Policy',
      terms: 'Terms of Service',
      fbLink: "https://www.facebook.com/FionaK.S.Mei"
    },
    BM: {
      desc: "Pakar hartanah Kluang anda, berdedikasi untuk mengubah setiap jangkaan menjadi rumah yang selesa. Membeli, menjual atau menyewa, kami bersama anda. Perunding Hartanah Berlesen (REN 59021), khusus dalam hartanah kediaman di Kluang, Johor. Pakar hartanah Kluang yang dipercayai.",
      quick: 'Pautan Pantas',
      areas: 'Kawasan Perkhidmatan',
      contact: 'Hubungi Kami',
      links: [
        { label: 'Rumah Pilihan', href: '/#properties' },
        { label: 'Analisis Daerah Kluang', href: '/districts/kluang-town' },
        { label: 'Tentang', href: '/about' },
        { label: 'Panduan', href: '/guide' },
        { label: 'Alat Pinjaman', href: '/#loan-readiness' },
        { label: 'Soalan Lazim', type: 'faq' }
      ],
      policy: 'Dasar Privasi',
      terms: 'Syarat Perkhidmatan',
      fbLink: "https://www.facebook.com/perumahan.kluang"
    }
  }[lang];

  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-tighter text-navy-900">
              FIONA <span className="text-amber-500">MEI</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              {content.desc}
            </p>
            <div className="flex gap-4">
              <a href={content.fbLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.xiaohongshu.com/user/profile/63cf758a000000002600414b?xsec_token=YBHABL0UP8HVJxDIxkZkTh4VrHadPgGiEtkx7Q7c7OpFA=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODlFRjo6PEo2NzUyOTgwNjg5OTc4NjpL&apptime=1766760716&share_id=34ca2e6c1a1947deb325ab525fe4ce82" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#ff2442] hover:text-white hover:border-[#ff2442] transition-all p-2">
                <XiaohongshuIcon size={22} />
              </a>
              <a href="https://wa.me/60167100902" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-navy-900 font-bold text-lg mb-6">{content.quick}</h4>
            <ul className="space-y-4">
              {content.links.map((link) => (
                <li key={link.label}>
                  {link.type === 'faq' ? (
                    <button
                      type="button"
                      onClick={() => setIsFaqOpen(true)}
                      className="text-gray-500 hover:text-amber-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className="text-gray-500 hover:text-amber-500 transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-navy-900 font-bold text-lg mb-6">{content.areas}</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 font-bold text-xl flex items-center gap-2">
                <MapPin className="text-amber-500" size={20} /> Kluang
              </li>
              <li className="text-gray-400 text-sm">Johor, Malaysia</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-navy-900 font-bold text-lg mb-6">{content.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-amber-500 mt-1" size={20} />
                <div className="text-gray-500">
                  <div className="font-semibold">EUM REALTY KLUANG</div>
                  <div>No.5,(Floor 1) Jalan Indah 1/1,</div>
                  <div>Taman Kluang Indah, 86000 Kluang, Johor</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="text-amber-500 mt-1" size={20} />
                <span className="text-gray-500">+60 16-710 0902</span>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-amber-500 mt-1" size={20} />
                <span className="text-gray-500">b.seri.impian@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2024 Fiona Mei (REN 59021). All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-500 transition-colors">{content.policy}</a>
            <a href="#" className="hover:text-amber-500 transition-colors">{content.terms}</a>
          </div>
        </div>
      </div>

      {isFaqOpen && (
        <>
          <div
            className="fixed inset-0 bg-navy-900/70 backdrop-blur-sm z-[140]"
            onClick={() => setIsFaqOpen(false)}
          />
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy-900">FAQ</h3>
                  <p className="text-gray-500 mt-2">Frequently asked questions</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFaqOpen(false)}
                  className="text-gray-400 hover:text-navy-900 transition-colors"
                >
                  Close
                </button>
              </div>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-navy-900">1. Is there a consultation fee?</h4>
                  <p className="mt-2 text-gray-500">No. Consultations, project matching, and purchase guidance are provided free of charge to buyers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">2. Is the focus limited to Kluang properties?</h4>
                  <p className="mt-2 text-gray-500">Yes. The service focuses exclusively on Kluang for deeper local insight on pricing, neighbourhoods, and future development.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">3. Can first-time home buyers get support?</h4>
                  <p className="mt-2 text-gray-500">Yes. Guidance covers loan readiness, documentation, legal process, and key handover.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">4. Can support be provided for home loans and EPF withdrawal?</h4>
                  <p className="mt-2 text-gray-500">Yes. Support includes loan assessment, DSR calculation, bank coordination, and EPF withdrawal guidance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">5. What support is provided after purchase?</h4>
                  <p className="mt-2 text-gray-500">Post-purchase support includes defect inspection guidance, utility setup, and basic renovation advice.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
