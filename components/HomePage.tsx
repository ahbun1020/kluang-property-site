
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import BioSection from '@/components/BioSection';
import GuideSection from '@/components/GuideSection';
import Footer from '@/components/Footer';
import PropertyDetailsModal from '@/components/PropertyDetailsModal';
import GuideDetailsModal from '@/components/GuideDetailsModal';
import MortgageModal from '@/components/MortgageModal';
import { Property } from '@/types';


export default function Home() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isMortgageModalOpen, setIsMortgageModalOpen] = useState(false);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

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
      title: lang === 'EN' ? '(Smart Home) Double Storey Terrace House' : '(Rumah Pintar) Rumah Teres Dua Tingkat',
      price: 'RM 408,000',
      location: 'Impiana Damai, Kluang',
      beds: 4,
      baths: 3,
      sqft: 1650,
      imageUrl: '/impiana damai/exterior.jpg',
      images: [
        '/impiana damai/exterior.jpg',
        '/impiana damai/living room.jpg',
        '/impiana damai/kitchen.jpg',
        '/impiana damai/bedroom.jpg'
      ],
      type: 'Residential',
      description: lang === 'EN'
        ? 'Impiana Damai is a gated and guarded residential enclave within Bandar Seri Impian, Kluang, designed for modern family living. Surrounded by greenery and established neighbourhoods, it offers a calm yet convenient lifestyle with easy access to daily amenities and town facilities.\n\nEach home comes with a basic smart home system, thoughtfully integrated at key living spaces to enhance everyday comfort, security, and convenience — making it a practical choice for long-term living.'
        : 'Impiana Damai ialah komuniti berpagar dan berpengawal di Bandar Seri Impian, Kluang, direka untuk kehidupan keluarga moden. Dikelilingi kehijauan dan kejiranan yang matang, ia menawarkan gaya hidup yang tenang serta mudah dengan akses ke kemudahan harian dan fasiliti bandar.\n\nSetiap rumah dilengkapi sistem rumah pintar asas yang disepadukan di ruang utama untuk meningkatkan keselesaan, keselamatan, dan kemudahan harian — pilihan praktikal untuk jangka panjang.',
      features: ['22x75 / 22x90', 'Free MOT & MOC', 'Free 2 years security', 'Smart home points']
    },
    {
      id: '2',
      title: lang === 'EN' ? 'Single Storey Terrace House' : 'Rumah Teres Setingkat',
      price: 'RM 370,000',
      location: 'Impiana Bayu, Kluang',
      beds: 4,
      baths: 2,
      sqft: 1900,
      imageUrl: '/impiana bayu/exterior.png',
      type: 'Residential',
      description: lang === 'EN'
        ? 'Located in Impiana Bayu, Kluang, this single storey terrace home is designed for comfortable everyday living. The layout offers a practical and spacious interior, complemented by an additional 5ft extended backyard, ideal for a wet kitchen, laundry area, or future home extension.\n\nSet within an established residential neighbourhood, the home provides a balance of peaceful surroundings and convenient access to nearby amenities, making it suitable for families, retirees, or own-stay buyers looking for long-term value.'
        : 'Terletak di Impiana Bayu, Kluang, rumah teres setingkat ini direka untuk keselesaan harian. Susun atur yang praktikal dan lapang diserikan dengan tambahan ruang belakang 5 kaki, sesuai untuk dapur basah, kawasan dobi, atau peluasan rumah pada masa hadapan.\n\nBerada dalam kejiranan yang matang, rumah ini menawarkan suasana tenang serta akses mudah ke kemudahan sekitar, sesuai untuk keluarga, warga emas, atau pembeli yang ingin tinggal sendiri untuk jangka panjang.',
      features: ['20x95', 'Free MOT & MOC', '5ft extended backyard', 'Booking RM 500']
    },
    {
      id: '3',
      title: lang === 'EN' ? 'Single Storey Semi D' : 'Semi-D Setingkat',
      price: 'RM 668,000',
      location: 'Taman Kluang Perdana, Kluang',
      beds: 4,
      baths: 3,
      sqft: 3420,
      imageUrl: '/taman kluang perdana/exterior1.jpg',
      images: [
        '/taman kluang perdana/exterior1.jpg',
        '/taman kluang perdana/living room.jpg',
        '/taman kluang perdana/dinning room.jpg',
        '/taman kluang perdana/master room.jpg',
        '/taman kluang perdana/bedroom.jpg'
      ],
      type: 'Residential',
      description: lang === 'EN'
        ? 'Located in the established neighbourhood of Taman Kluang Perdana, this single storey semi-detached home offers a rare combination of privacy, space, and everyday convenience. The layout provides generous living areas with good natural light and ventilation, ideal for comfortable family living.\n\nThe home is situated within close proximity to one of Kluang’s largest clubhouses, offering easy access to recreational facilities while still enjoying a peaceful residential environment. With daily amenities, schools, and town facilities nearby, it is well-suited for own-stay buyers seeking a balanced and well-connected lifestyle.'
        : 'Terletak di kejiranan matang Taman Kluang Perdana, rumah semi-D setingkat ini menawarkan gabungan privasi, ruang, dan kemudahan harian. Susun atur menyediakan ruang tamu yang luas dengan pencahayaan serta pengudaraan yang baik, sesuai untuk kehidupan keluarga yang selesa.\n\nRumah ini berhampiran salah satu kelab terbesar di Kluang, memudahkan akses kepada kemudahan rekreasi sambil menikmati suasana perumahan yang tenang. Dengan kemudahan harian, sekolah, dan fasiliti bandar berdekatan, ia sesuai untuk pembeli yang ingin tinggal sendiri dengan gaya hidup seimbang dan mudah dihubungi.',
      features: [
        'Land 38x90',
        'Booking RM 0',
        'Free 3 years security',
        'Free MOT & MOC',
        'Free EV charger',
        'Free solar heater',
        'Free digital lockset',
        'Free auto gate motor'
      ]
    },
    {
      id: '4',
      title: lang === 'EN' ? 'Double Storey Bungalow' : 'Bungalow Dua Tingkat',
      price: 'RM 998,000',
      location: 'Taman Parkland, Kluang',
      beds: 5,
      baths: 5,
      sqft: 4500,
      imageUrl: '/taman parkland/exterior.jpg',
      images: [
        '/taman parkland/exterior.jpg',
        '/taman parkland/livingroom.jpg',
        '/taman parkland/kitchen.jpg',
        '/taman parkland/masterroom.jpg',
        '/taman parkland/bedroom.jpg',
        '/taman parkland/studyroom.jpg'
      ],
      type: 'Residential',
      description: lang === 'EN'
        ? 'Taman Parkland presents an exclusive double storey bungalow designed with a refined and elegant architectural concept, creating a luxurious yet comfortable living environment. The spacious interior layout is thoughtfully planned to enhance natural light, ventilation, and everyday functionality, making it ideal for family living.\n\nStrategically located within a well-established residential area, the development offers convenient access to nearby amenities, schools, healthcare facilities, and commercial hubs, providing a balanced lifestyle of privacy, comfort, and daily convenience.'
        : 'Taman Parkland menampilkan bungalow dua tingkat eksklusif dengan konsep seni bina yang kemas dan elegan, mewujudkan suasana hidup yang mewah namun selesa. Susun atur dalaman yang luas dirancang untuk memaksimumkan pencahayaan semula jadi, pengudaraan, dan fungsi harian, sesuai untuk keluarga.\n\nTerletak strategik dalam kawasan perumahan matang, pembangunan ini menawarkan akses mudah ke kemudahan sekitar, sekolah, fasiliti kesihatan, dan hab komersial, memberikan gaya hidup seimbang dari segi privasi, keselesaan, dan kemudahan harian.',
      features: [
        'Land 50x90',
        'Build up 28x50',
        'Free 3 years security',
        'Free MOT & MOC',
        'Free 3 years clubhouse membership'
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      
      <section className="relative min-h-[80vh] md:min-h-[85vh] bg-hero flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center text-white z-10 pt-20">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center mb-8">
            <div className="bg-navy-900/40 backdrop-blur-md border border-amber-500/50 px-6 py-2.5 rounded-full flex items-center gap-3">
              <Star className="text-amber-500 fill-amber-500" size={20} />
              <span className="text-amber-500 font-bold text-xs md:text-sm tracking-widest uppercase">{t.heroTag}</span>
            </div>
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black mb-10 leading-[1.05] tracking-tight drop-shadow-2xl"
            dangerouslySetInnerHTML={{ __html: t.heroTitle }}
          />
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-xs md:text-base text-white/90 max-w-3xl mx-auto mb-16 leading-relaxed font-medium drop-shadow-lg"
          >
            {t.heroSub}
          </motion.p>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/60 group cursor-pointer">
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] group-hover:text-amber-500 transition-colors">{t.scrollDown}</span>
            <div className="relative w-0.5 h-16 bg-white/20 rounded-full overflow-hidden">
              <motion.div animate={{ y: [-64, 64] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute inset-0 w-full h-1/2 bg-amber-500 shadow-[0_0_15px_#F59E0B]"
              />
            </div>
          </div>
        </div>
      </section>

      <SearchBar lang={lang} />

      <section id="properties" className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">Featured Listings</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight">{t.featuredTitle}</h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full"></div>
          </div>
          <Link
            href="/properties"
            className="text-navy-900 font-bold border-b-2 border-navy-900 pb-1 hover:text-amber-500 hover:border-amber-500 transition-all"
          >
            {t.viewAll}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PROPERTIES.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} lang={lang} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </section>

      <BioSection lang={lang} />

      {/* New Image Visualization Section */}

      <GuideSection lang={lang} onViewGuide={handleViewGuide} onOpenCalculator={() => setIsMortgageModalOpen(true)} />
      <Footer lang={lang} />

      <PropertyDetailsModal isOpen={isModalOpen} property={selectedProperty} onClose={() => setIsModalOpen(false)} lang={lang} />
      <GuideDetailsModal isOpen={isGuideModalOpen} guide={selectedGuide} onClose={() => setIsGuideModalOpen(false)} lang={lang} />
      <MortgageModal isOpen={isMortgageModalOpen} onClose={() => setIsMortgageModalOpen(false)} lang={lang} initialPrice={selectedProperty?.price} />

      <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://wa.me/60167100902" target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:pl-2 font-bold text-sm">
          {t.whatsapp}
        </span>
      </motion.a>
    </main>
  );
}

