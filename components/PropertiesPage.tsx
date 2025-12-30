"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import PropertyDetailsModal from '@/components/PropertyDetailsModal';
import Footer from '@/components/Footer';
import { Property } from '@/types';

export default function PropertiesPage() {
  const [lang, setLang] = useState<'EN' | 'BM'>('EN');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const subsales: Property[] = [
    {
      id: 'subsale-1',
      title: '2 Storey Bungalow - Impiana Villa',
      price: 'RM 718,000',
      location: 'Bandar Seri Impian, Impiana Villa, Kluang',
      beds: 5,
      baths: 5,
      sqft: 4000,
      imageUrl: '/impiana villa/exterior.jpg',
      type: 'Subsale',
      description: 'Fully furnished as per photos. Bank valuation around RM 1,000,000.',
      features: ['Land size 50x80', 'Fully furnished', 'Bank valuation RM 1 mil']
    },
    {
      id: 'subsale-2',
      title: '2 Storey Low Cost - Taman Sri Jaya',
      price: 'RM 148,000',
      location: 'Taman Sri Jaya, Kluang',
      beds: 2,
      baths: 1,
      sqft: 720,
      imageUrl: '/taman sri jaya/exterior.jpg',
      type: 'Subsale',
      description: 'Freehold low-cost unit with practical layout for small families.',
      features: ['720 sqft', 'Freehold', 'Affordable entry price']
    },
    {
      id: 'subsale-3',
      title: '2 Storey Terrace House - Taman Permata',
      price: 'RM 438,000',
      location: 'Taman Permata, Kluang',
      beds: 4,
      baths: 3,
      sqft: 1540,
      imageUrl: '/taman permata/exterior.jpg',
      type: 'Subsale',
      description: 'Non-bumi lot with bank value around RM 500,000.',
      features: ['22x70 (1,540 sqft)', 'Non-bumi', 'Bank value RM 500k']
    }
  ];

  const forRent: Property[] = [
    {
      id: 'rent-1',
      title: 'Double Storey Terrace House',
      price: 'RM 3,000 / month',
      location: 'Bandar Seri Impian, Kluang',
      beds: 4,
      baths: 4,
      sqft: 3400,
      imageUrl: '/house for rent/exterior.jpg',
      images: [
        '/house for rent/exterior.jpg',
        '/house for rent/livingroom.jpg',
        '/house for rent/livingroom2.jpg',
        '/house for rent/livingroom3.jpg',
        '/house for rent/bedroom.jpg',
        '/house for rent/bedroom2.jpg',
        '/house for rent/bedroom3.jpg'
      ],
      type: 'For Rent',
      description: 'Fully furnished family home, ready for immediate move-in.',
      features: ['Fully furnished', '3,400 sqft', 'Immediate move-in']
    },
    {
      id: 'rent-2',
      title: 'Room for Rent (Female Only)',
      price: 'RM 550 / month',
      location: 'Kluang',
      beds: 4,
      baths: 4,
      sqft: 1500,
      imageUrl: '/room for rent/bedroom.jpg',
      images: [
        '/room for rent/bedroom.jpg',
        '/room for rent/bedroom2.jpg',
        '/room for rent/livingroom.jpg',
        '/room for rent/livingroom2.jpg',
        '/room for rent/libingroom3.jpg',
        '/room for rent/kitchen.jpg'
      ],
      type: 'For Rent',
      description: 'Fully furnished room for female tenants only.',
      features: ['Fully furnished', 'Female only', 'Utilities discussable']
    },
    {
      id: 'rent-3',
      title: 'Impiana Square',
      price: 'From RM 700 / month',
      location: 'Bandar Seri Impian, Impiana Square',
      beds: 0,
      baths: 1,
      sqft: 1400,
      imageUrl: '/shop for rent/exterior.jpg',
      type: 'For Rent',
      description: 'Multiple options for first floor and ground floor, including main road and Lake Park facing lots.',
      features: ['20x70', 'Facing main road/Lake Park options', 'Multiple rental rates']
    }
  ];

  const newProjects: Property[] = [
    {
      id: 'new-1',
      title: 'Double Storey Semi D',
      price: 'RM 601,200',
      location: 'Taman Akasia @ Acacia Heights, Kluang',
      beds: 4,
      baths: 3,
      sqft: 3080,
      imageUrl: '/acacia/exterior.jpg',
      images: [
        '/acacia/exterior.jpg',
        '/acacia/livingroom.jpg',
        '/acacia/kitchen.jpg',
        '/acacia/dinningroom.jpg',
        '/acacia/bedroom.jpg',
        '/acacia/bedroom2.jpg',
        '/acacia/backyard.jpg'
      ],
      type: 'Residential',
      description: 'Acacia Heights is a gated and guarded residential enclave designed for families seeking spacious, secure, and comfortable living in Kluang. With a practical family-oriented layout and generous built-up size, the homes are ideal for multi-generation living and long-term own stay.\n\nThe development features landscaped green spaces, recreational areas, and dedicated jogging paths within the community, while enjoying convenient access to nearby schools, healthcare facilities, and town amenities. Acacia Heights is well-suited for buyers looking for a balanced lifestyle in an established and growing neighbourhood.',
      features: ['Land 40x77', 'Freehold', 'Free lawyer fees', 'Free stamp duty']
    },
    {
      id: 'new-2',
      title: 'Single Storey Bungalow',
      price: 'RM 380,000',
      location: 'Kota Impiana @ Halaman Garden, Kluang',
      beds: 4,
      baths: 2,
      sqft: 3456,
      imageUrl: '/halaman garden/exterior.jpg',
      images: [
        '/halaman garden/exterior.jpg',
        '/halaman garden/livingroom.jpg',
        '/halaman garden/kitchen.jpg',
        '/halaman garden/bedroom.jpg'
      ],
      type: 'Residential',
      description: 'Halaman Garden is a low-density residential development designed for families seeking a peaceful and practical living environment in Kluang. The homes feature functional layouts that prioritise daily comfort, natural ventilation, and ease of living, making them suitable for own-stay buyers.\n\nLocated within an established neighbourhood, Halaman Garden enjoys convenient access to daily amenities, schools, and town facilities, while maintaining a calm residential atmosphere. It is an ideal choice for homeowners looking for a balanced lifestyle in a well-connected yet tranquil community.',
      features: ['Land 54x64 (3,456 sqft)', 'Build up 1,423 sqft', 'Free MOT & MOC']
    },
    {
      id: 'new-3',
      title: 'Single Storey Terrace House',
      price: 'RM 373,000',
      location: 'Taman Saujana @ Hibiscus, Kluang',
      beds: 3,
      baths: 2,
      sqft: 1650,
      imageUrl: '/taman saujana/exterior.png',
      type: 'Residential',
      description: 'Hibiscus is a well-established residential neighbourhood offering a comfortable and practical living environment in Kluang. The homes are thoughtfully laid out to support everyday family living, with a focus on space efficiency, natural ventilation, and long-term comfort.\n\nLocated within a mature community, Taman Saujana Hibiscus enjoys easy access to daily amenities, schools, and town facilities, making it a suitable choice for own-stay buyers seeking convenience, stability, and a relaxed residential lifestyle.',
      features: ['22x75 (1,650 sqft)', 'Free legal & stamp duty', 'Booking RM 500']
    },
    {
      id: 'new-4',
      title: 'Double Storey Bungalow',
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
      description: 'Taman Parkland presents an exclusive double storey bungalow designed with a refined and elegant architectural concept, creating a luxurious yet comfortable living environment. The spacious interior layout is thoughtfully planned to enhance natural light, ventilation, and everyday functionality, making it ideal for family living.\n\nStrategically located within a well-established residential area, the development offers convenient access to nearby amenities, schools, healthcare facilities, and commercial hubs, providing a balanced lifestyle of privacy, comfort, and daily convenience.',
      features: [
        'Land 50x90',
        'Build up 28x50',
        'Free 3 years security',
        'Free MOT & MOC',
        'Free 3 years clubhouse membership'
      ]
    },
    {
      id: 'new-5',
      title: 'Single Storey Semi D',
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
      description: 'Located in the established neighbourhood of Taman Kluang Perdana, this single storey semi-detached home offers a rare combination of privacy, space, and everyday convenience. The layout provides generous living areas with good natural light and ventilation, ideal for comfortable family living.\n\nThe home is situated within close proximity to one of Kluang’s largest clubhouses, offering easy access to recreational facilities while still enjoying a peaceful residential environment. With daily amenities, schools, and town facilities nearby, it is well-suited for own-stay buyers seeking a balanced and well-connected lifestyle.',
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
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-32 pb-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black"
          >
            {lang === 'EN' ? 'Kluang Property Listings' : 'Senarai Hartanah Kluang'}
          </motion.h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            {lang === 'EN'
              ? 'Explore Kluang houses for sale, new projects, and curated rental opportunities.'
              : 'Terokai rumah untuk dijual di Kluang, projek baharu, dan peluang sewaan yang dipilih.'}
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">
              {lang === 'EN' ? 'New Projects' : 'Projek Baharu'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-3">
              {lang === 'EN' ? 'New Project Listings' : 'Senarai Projek Baharu'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProjects.map((property, index) => (
            <div key={property.id} id={property.id}>
              <PropertyCard
                property={property}
                index={index}
                lang={lang}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
      </section>

 
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">
              {lang === 'EN' ? 'Subsale' : 'Subsale'}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-3">
              {lang === 'EN' ? 'Subsale Listings' : 'Senarai Subsale'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subsales.map((property, index) => (
            <div key={property.id} id={property.id}>
              <PropertyCard
                property={property}
                index={index}
                lang={lang}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm">
                {lang === 'EN' ? 'For Rent' : 'Untuk Disewa'}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mt-3">
                {lang === 'EN' ? 'For Rent Listings' : 'Senarai Sewaan'}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forRent.map((property, index) => (
              <div key={property.id} id={property.id}>
                <PropertyCard
                  property={property}
                  index={index}
                  lang={lang}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />

      <PropertyDetailsModal
        isOpen={isModalOpen}
        property={selectedProperty}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </main>
  );
}

