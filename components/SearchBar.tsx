
"use client";

import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface SearchBarProps {
  lang: 'EN' | 'BM';
}

const SearchBar: React.FC<SearchBarProps> = ({ lang }) => {
  const router = useRouter();
  const [selectedArea, setSelectedArea] = useState<string>('');
  const content = {
    EN: {
      area: 'Select Area',
      allAreas: 'All Areas',
      budget: 'Budget Range',
      noLimit: 'No Limit',
      type: 'Property Type',
      allTypes: 'All Types',
      search: 'Search Now',
      areas: [
        'Kota Impiana',
        'Taman Kluang Perdana',
        'Taman Parkland',
        'Taman Permata',
        'Taman Saujana',
        'Taman Sri Jaya',
        'Taman Mengkibol',
        'Bandar Seri Impian',
        'Taman Akasia'
      ],
      budgets: [
        'RM 100k - RM 300k',
        'RM 300k - RM 500k',
        'RM 500k - RM 800k',
        'RM 800k+'
      ],
      types: [
        'Single Storey Terrace',
        'Double Storey Terrace',
        'Semi-D',
        'Bungalow',
        'Cluster House'
      ]
    },
    BM: {
      area: 'Pilih Kawasan',
      allAreas: 'Semua Kawasan',
      budget: 'Julat Bajet',
      noLimit: 'Tiada Had',
      type: 'Jenis Hartanah',
      allTypes: 'Semua Jenis',
      search: 'Cari Sekarang',
      areas: [
        'Kota Impiana',
        'Taman Kluang Perdana',
        'Taman Parkland',
        'Taman Permata',
        'Taman Saujana',
        'Taman Sri Jaya',
        'Taman Mengkibol',
        'Bandar Seri Impian',
        'Taman Akasia'
      ],
      budgets: [
        'RM 100k - RM 300k',
        'RM 300k - RM 500k',
        'RM 500k - RM 800k',
        'RM 800k+'
      ],
      types: [
        'Teres Setingkat',
        'Teres Dua Tingkat',
        'Semi-D',
        'Banglo',
        'Rumah Kluster'
      ]
    }
  }[lang];

  const handleSearch = () => {
    if (!selectedArea || selectedArea === content.allAreas) {
      router.push('/properties');
      return;
    }

    const areaTargets: Record<string, string> = {
      'Kota Impiana': '/properties#new-2',
      'Taman Akasia': '/properties#new-1',
      'Taman Saujana': '/properties#new-3',
      'Bandar Seri Impian': '/#properties',
      'Taman Parkland': '/properties#new-4',
      'Taman Kluang Perdana': '/properties#new-5',
      'Taman Permata': '/properties#subsale-3',
      'Taman Sri Jaya': '/properties#subsale-2'
    };

    router.push(areaTargets[selectedArea] ?? '/properties');
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-5xl mx-auto -mt-16 relative z-20 px-4"
    >
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="flex-1 w-full space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <MapPin size={14} className="text-amber-500" /> {content.area}
          </label>
          <select
            className="w-full bg-gray-50 border-none rounded-lg p-3 text-navy-900 focus:ring-2 focus:ring-amber-500 outline-none cursor-pointer font-medium"
            value={selectedArea || content.allAreas}
            onChange={(event) => setSelectedArea(event.target.value)}
          >
            <option>{content.allAreas}</option>
            {content.areas.map(area => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
          className="w-full md:w-auto bg-navy-900 hover:bg-navy-800 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-navy-900/10"
        >
          <Search size={20} />
          {content.search}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
