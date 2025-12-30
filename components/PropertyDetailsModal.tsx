
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BedDouble, Bath, MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { Property } from '../types';
import AreaIcon from './AreaIcon';

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'BM';
}

const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({ property, isOpen, onClose, lang }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const images = property?.images?.length ? property.images : property ? [property.imageUrl] : [];

  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
    }
  }, [property?.id, isOpen]);

  const goNext = () => {
    if (images.length > 1) {
      setActiveImageIndex((index) => (index + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (images.length > 1) {
      setActiveImageIndex((index) => (index - 1 + images.length) % images.length);
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = touchStartX.current - endX;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 50) return;
    if (deltaX > 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  if (!property) return null;

  const t = {
    EN: {
      features: "Features & Amenities",
      description: "Property Description",
      contact: "Interested? Contact Fiona",
      whatsapp: "WhatsApp Now",
      call: "Call Now",
      specs: "Property Specifications"
    },
    BM: {
      features: "Ciri-ciri & Kemudahan",
      description: "Penerangan Hartanah",
      contact: "Berminat? Hubungi Fiona",
      whatsapp: "WhatsApp Sekarang",
      call: "Hubungi Sekarang",
      specs: "Spesifikasi Hartanah"
    }
  }[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-[80] bg-white/20 hover:bg-white/40 text-white md:text-navy-900 md:bg-gray-100 md:hover:bg-gray-200 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div
                className="w-full lg:w-1/2 h-64 lg:h-auto relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img 
                  src={images[activeImageIndex]} 
                  alt={`${property.title} in ${property.location}`} 
                  className="w-full h-full object-cover"
                />
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goPrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
                      aria-label="Previous image"
                    >
                      <span className="text-xl font-bold">‹</span>
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-navy-900 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
                      aria-label="Next image"
                    >
                      <span className="text-xl font-bold">›</span>
                    </button>
                  </>
                )}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex gap-2 mb-2">
                    <span className="bg-amber-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase inline-block">
                      {property.type}
                    </span>
                  </div>
                  <h2 className="text-3xl font-black drop-shadow-lg">
                    {property.price}
                  </h2>
                </div>
              </div>

              <div className="w-full lg:w-1/2 p-6 md:p-10 overflow-y-auto">
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">{property.title}</h3>
                  <p className="text-gray-500 flex items-center gap-1">
                    <MapPin size={16} className="text-amber-500" /> {property.location}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-50 p-4 rounded-2xl">
                  <div className="text-center">
                    <BedDouble className="mx-auto text-amber-500 mb-1" size={20} />
                    <div className="font-bold text-navy-900">{property.beds}</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">{lang === 'EN' ? 'Beds' : 'Bilik'}</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <Bath className="mx-auto text-amber-500 mb-1" size={20} />
                    <div className="font-bold text-navy-900">{property.baths}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">{lang === 'EN' ? 'Baths' : 'Bilik air'}</div>
                  </div>
                <div className="text-center">
                  <AreaIcon className="mx-auto text-amber-500 mb-1" size={20} />
                  <div className="font-bold text-navy-900">{property.sqft}</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400">Sqft</div>
                </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-navy-900 mb-2 border-b pb-1">{t.description}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-navy-900 mb-3 border-b pb-1">{t.features}</h4>
                    <div className="grid grid-cols-2 gap-y-2">
                      {property.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PropertyDetailsModal;
