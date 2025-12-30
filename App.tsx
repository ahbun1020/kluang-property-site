
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import BioSection from './components/BioSection';
import GuideSection from './components/GuideSection';
import Footer from './components/Footer';
import PropertyDetailsModal from './components/PropertyDetailsModal';
import GuideDetailsModal from './components/GuideDetailsModal';
import MortgageModal from './components/MortgageModal';
import { Property } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for guide modal management
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  // State for mortgage calculator
  const [isMortgageModalOpen, setIsMortgageModalOpen] = useState(false);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  // Handler for viewing a guide step in detail
  const handleViewGuide = (guide: any) => {
    setSelectedGuide(guide);
    setIsGuideModalOpen(true);
  };

  const t = {
    EN: {
      heroTag: "Kluang's Most Trusted Real Estate Expert",
      heroTitle: "Find Your <span class='text-amber-500'>Dream Home</span><br/>in Kluang",
      heroSub: "With years of local experience, Fiona Mei provides professional, transparent, and hassle-free real estate services.",
      scrollDown: "EXPLORE",
      featuredTitle: "Featured Properties",
      viewAll: "View All Properties →",
      whatsapp: "WhatsApp Fiona"
    },
    BM: {
      heroTag: "Pakar Hartanah Kluang Paling Dipercayai",
      heroTitle: "Cari <span class='text-amber-500'>Rumah Idaman</span><br/>di Kluang",
      heroSub: "Dengan pengalaman tempatan bertahun-tahun, Fiona Mei menyediakan perkhidmatan hartanah yang profesional, telus dan mudah.",
      scrollDown: "TEROKAI",
      featuredTitle: "Hartanah Pilihan",
      viewAll: "Lihat Semua Hartanah →",
      whatsapp: "WhatsApp Fiona"
    }
  }[lang];

  const MOCK_PROPERTIES: Property[] = [
    {
      id: '1',
      title: lang === 'EN' ? 'Modern Double Storey - Bandar Seri Impian' : 'Rumah Teres Dua Tingkat Moden - Bandar Seri Impian',
      price: 'RM 588,000',
      location: 'Taman Seri Impian, Kluang',
      beds: 4,
      baths: 4,
      sqft: 2200,
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Residential',
      description: lang === 'EN' 
        ? "Beautiful modern double storey terrace house located in the serene neighborhood of Bandar Seri Impian. Features high ceilings, natural ventilation, and a spacious master bedroom." 
        : "Rumah teres dua tingkat moden yang cantik terletak di kawasan kejiranan Bandar Seri Impian yang tenang. Menampilkan siling tinggi, pengudaraan semula jadi, dan bilik tidur utama yang luas.",
      features: ['24/7 Security', 'Near Park', 'Fiber Optic Ready', 'Spacious Car Porch']
    },
    {
      id: '2',
      title: lang === 'EN' ? 'Renovated Semi-D - Kluang Baru Minimalist' : 'Semi-D Diubahsuai - Kluang Baru Minimalis',
      price: 'RM 750,000',
      location: 'Kluang Baru, Kluang',
      beds: 5,
      baths: 4,
      sqft: 2800,
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Residential',
      description: lang === 'EN' 
        ? "Expertly renovated Semi-D with minimalist interiors. Located in the heart of Kluang Baru with easy access to schools and markets." 
        : "Semi-D yang diubahsuai dengan mahir dengan hiasan dalaman minimalis. Terletak di tengah-tengah Kluang Baru dengan akses mudah ke sekolah dan pasar.",
      features: ['Modern Kitchen', 'Autogate', 'Fully Furnished', 'Strategic Location']
    },
    {
      id: '3',
      title: lang === 'EN' ? 'Panoramic Single Storey - Perfect for First Home' : 'Rumah Teres Setingkat - Sesuai Untuk Rumah Pertama',
      price: 'RM 320,000',
      location: 'Taman Parkland, Kluang',
      beds: 3,
      baths: 2,
      sqft: 1400,
      imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Residential',
      description: lang === 'EN' 
        ? "Affordable single storey house in Taman Parkland. Perfect for small families or first-time homebuyers." 
        : "Rumah setingkat mampu milik di Taman Parkland. Sesuai untuk keluarga kecil atau pembeli rumah kali pertama.",
      features: ['Near Grocery', 'Quiet Area', 'Fully Tiled', 'Low Entry Cost']
    },
    {
      id: '4',
      title: lang === 'EN' ? 'Prime Shop Lot - Strategic Investment' : 'Lot Kedai Utama - Pelaburan Strategik',
      price: 'RM 1,200,000',
      location: 'Kluang Town Center',
      beds: 0,
      baths: 2,
      sqft: 3200,
      imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      type: 'Commercial',
      description: lang === 'EN' 
        ? "Excellent investment opportunity in Kluang Town Center. High visibility and heavy foot traffic area." 
        : "Peluang pelaburan yang cemerlang di Pusat Bandar Kluang. Keterlihatan tinggi dan kawasan trafik pejalan kaki yang sesak.",
      features: ['Prime Location', 'Wide Frontage', 'Ample Parking', 'Stable Tenant Potential']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-hero bg-fixed bg-cover bg-center flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center text-white z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-navy-900/40 backdrop-blur-md border border-amber-500/50 px-6 py-2.5 rounded-full flex items-center gap-3">
              <Star className="text-amber-500 fill-amber-500" size={20} />
              <span className="text-amber-500 font-bold text-xs md:text-sm tracking-widest uppercase">{t.heroTag}</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black mb-10 leading-[1.05] tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.heroTitle }}
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200/90 max-w-3xl mx-auto mb-16 leading-relaxed font-medium px-4"
          >
            {t.heroSub}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-400 group cursor-pointer"
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] group-hover:text-amber-500 transition-colors">{t.scrollDown}</span>
            <div className="relative w-0.5 h-16 bg-gray-600/50 rounded-full overflow-hidden">
              <motion.div 
                animate={{ y: [-64, 64] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 w-full h-1/2 bg-amber-500 shadow-[0_0_10px_#F59E0B]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SearchBar lang={lang} />

      <section id="properties" className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Featured Listings</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight">
              {t.featuredTitle}
            </h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
          </div>
          <button className="text-navy-900 font-bold border-b-2 border-navy-900 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all">
            {t.viewAll}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {MOCK_PROPERTIES.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              index={index} 
              lang={lang} 
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>

      <BioSection lang={lang} />
      <GuideSection 
        lang={lang} 
        onViewGuide={handleViewGuide} 
        onOpenCalculator={() => setIsMortgageModalOpen(true)}
      />
      <Footer lang={lang} />

      {/* Property Details Modal */}
      <PropertyDetailsModal 
        isOpen={isModalOpen} 
        property={selectedProperty} 
        onClose={() => setIsModalOpen(false)} 
        lang={lang}
      />

      {/* Guide Details Modal */}
      <GuideDetailsModal 
        isOpen={isGuideModalOpen} 
        guide={selectedGuide} 
        onClose={() => setIsGuideModalOpen(false)} 
        lang={lang}
      />

      {/* Mortgage Calculator Modal */}
      <MortgageModal 
        isOpen={isMortgageModalOpen} 
        onClose={() => setIsMortgageModalOpen(false)} 
        lang={lang}
        initialPrice={selectedProperty?.price}
      />

      {/* Fixed WhatsApp CTA */}
      <motion.a 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/60167100902"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:pl-2 font-bold text-sm">
          {t.whatsapp}
        </span>
      </motion.a>
    </div>
  );
};

const MessageCircle: React.FC<{size?: number; className?: string}> = ({size = 24, className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
  </svg>
);

export default App;
