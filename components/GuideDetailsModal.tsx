
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface GuideDetailsModalProps {
  guide: {
    title: string;
    desc: string;
    icon: React.ReactNode;
    content: {
      subtitle: string;
      text: string;
      points: string[];
    }[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'BM';
}

const GuideDetailsModal: React.FC<GuideDetailsModalProps> = ({ guide, isOpen, onClose, lang }) => {
  if (!guide) return null;

  const t = {
    EN: {
      contact: "Need personal advice? Contact Fiona now",
      whatsapp: "Chat on WhatsApp",
      call: "Direct Call",
      license: "REN 59021"
    },
    BM: {
      contact: "Perlukan nasihat peribadi? Hubungi Fiona sekarang",
      whatsapp: "Sembang di WhatsApp",
      call: "Panggilan Terus",
      license: "REN 59021"
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
            className="fixed inset-0 bg-navy-900/80 backdrop-blur-md z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-3xl max-h-[85vh] bg-navy-800 text-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-navy-700 relative">
              {/* Header */}
              <div className="p-8 md:p-12 bg-navy-900 border-b border-navy-700 relative">
                <button 
                  onClick={onClose}
                  className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X size={28} />
                </button>
                
                <div className="bg-navy-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-navy-700">
                  {guide.icon}
                </div>
                <div className="flex items-center gap-3 mb-2">
                   <Sparkles className="text-amber-500" size={18} />
                   <span className="text-amber-500 text-sm font-bold tracking-widest uppercase">Expert Guide</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black">{guide.title}</h2>
              </div>

              {/* Body Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 custom-scrollbar">
                {guide.content.map((section, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="text-2xl font-bold flex items-center gap-4">
                      <span className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-lg font-black border border-amber-500/20">
                        {idx + 1}
                      </span>
                      {section.subtitle}
                    </h3>
                    <p className="text-gray-400 leading-relaxed pl-14 text-lg">
                      {section.text}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-14">
                      {section.points.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-3 text-sm text-gray-300 bg-navy-900/40 p-4 rounded-2xl border border-navy-700/30 group hover:border-amber-500/30 transition-colors">
                          <CheckCircle2 size={18} className="text-amber-500 shrink-0" />
                          <span className="font-medium">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GuideDetailsModal;
