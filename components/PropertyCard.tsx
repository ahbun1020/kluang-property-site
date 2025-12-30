
import React from 'react';
import { BedDouble, Bath, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Property } from '../types';
import AreaIcon from './AreaIcon';

interface PropertyCardProps {
  property: Property;
  index: number;
  lang: 'EN' | 'BM';
  onViewDetails: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index, lang, onViewDetails }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div 
        className="relative h-64 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(property)}
      >
        <img 
          src={property.imageUrl} 
          alt={`${property.title} in ${property.location}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {property.type}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white font-black text-xl drop-shadow-lg">
          {property.price}
        </div>
      </div>
      
      <div className="p-5 space-y-4 flex flex-col flex-1">
        <div className="flex-1">
          <h3 
            className="text-lg font-bold text-navy-900 group-hover:text-amber-500 transition-colors line-clamp-1 cursor-pointer"
            onClick={() => onViewDetails(property)}
          >
            {property.title}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <MapPin size={14} className="text-amber-500" />
            {property.location}
          </p>
        </div>

        <div className="flex items-center justify-between border-t pt-4 border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-600">
            <BedDouble size={18} className="text-navy-900" />
            <span className="text-sm font-semibold">{property.beds} {lang === 'EN' ? 'Beds' : 'Bilik'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Bath size={18} className="text-navy-900" />
            <span className="text-sm font-semibold">{property.baths} {lang === 'EN' ? 'Baths' : 'Bilik air'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <AreaIcon size={18} className="text-navy-900" />
            <span className="text-sm font-semibold">{property.sqft}</span>
          </div>
        </div>

        <motion.button 
          whileTap={{ scale: 0.98 }}
          onClick={() => onViewDetails(property)}
          className="w-full bg-gray-50 hover:bg-navy-900 hover:text-white text-navy-900 font-bold py-3 rounded-lg border border-gray-100 transition-all"
        >
          {lang === 'EN' ? 'View Details' : 'Lihat Butiran'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
