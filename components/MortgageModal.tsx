
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calculator, DollarSign, Calendar, TrendingUp, Info } from 'lucide-react';

interface MortgageModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'EN' | 'BM';
  initialPrice?: string;
}

const MortgageModal: React.FC<MortgageModalProps> = ({ isOpen, onClose, lang, initialPrice }) => {
  const [propertyPrice, setPropertyPrice] = useState<number>(500000);
  const [downPayment, setDownPayment] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(4.2);
  const [tenure, setTenure] = useState<number>(35);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    if (initialPrice) {
      const price = parseInt(initialPrice.replace(/[^0-9]/g, ''));
      if (!isNaN(price)) {
        setPropertyPrice(price);
        setDownPayment(Math.round(price * 0.1));
      }
    }
  }, [initialPrice, isOpen]);

  useEffect(() => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = tenure * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const x = Math.pow(1 + monthlyRate, numberOfPayments);
      const monthly = (principal * x * monthlyRate) / (x - 1);
      setMonthlyPayment(monthly);
    }
  }, [propertyPrice, downPayment, interestRate, tenure]);

  const t = {
    EN: {
      title: 'Mortgage Calculator',
      sub: 'Estimate your monthly installments based on your budget.',
      price: 'Property Price (RM)',
      down: 'Down Payment (RM)',
      rate: 'Interest Rate (%)',
      tenure: 'Loan Tenure (Years)',
      resultLabel: 'Estimated Monthly Payment',
      disclaimer: 'This is an estimation. Actual rates may vary.',
    },
    BM: {
      title: 'Kalkulator Gadai Janji',
      sub: 'Anggarkan ansuran bulanan anda berdasarkan bajet anda.',
      price: 'Harga Hartanah (RM)',
      down: 'Bayaran Muka (RM)',
      rate: 'Kadar Faedah (%)',
      tenure: 'Tempoh Pinjaman (Tahun)',
      resultLabel: 'Anggaran Bayaran Bulanan',
      disclaimer: 'Ini adalah anggaran. Kadar sebenar mungkin berbeza.',
    }
  }[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
            className="fixed inset-0 bg-navy-900/80 backdrop-blur-md z-[120]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-[130] flex items-center justify-center p-4"
          >
            <div className="w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-gray-100 relative">
              <div className="p-8 md:p-10 bg-navy-900 text-white relative">
                <button onClick={onClose} className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors">
                  <X size={24} />
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-500 p-3 rounded-2xl">
                    <Calculator size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black">{t.title}</h2>
                    <p className="text-gray-400 text-sm">{t.sub}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <DollarSign size={14} className="text-amber-500" /> {t.price}
                    </label>
                    <input type="number" value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-navy-900 font-bold focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <TrendingUp size={14} className="text-amber-500" /> {t.down}
                    </label>
                    <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-navy-900 font-bold focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <TrendingUp size={14} className="text-amber-500" /> {t.rate}
                    </label>
                    <input type="number" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-navy-900 font-bold focus:border-amber-500 outline-none transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Calendar size={14} className="text-amber-500" /> {t.tenure}
                    </label>
                    <select value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl p-4 text-navy-900 font-bold focus:border-amber-500 outline-none appearance-none"
                    >
                      {[5, 10, 15, 20, 25, 30, 35].map(y => <option key={y} value={y}>{y} Years</option>)}
                    </select>
                  </div>
                </div>

                <div className="bg-navy-900 rounded-3xl p-8 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-amber-500 font-black uppercase tracking-[0.3em] text-xs mb-2">{t.resultLabel}</p>
                    <h3 className="text-5xl md:text-6xl font-black text-white mb-2">RM {Math.round(monthlyPayment).toLocaleString()}</h3>
                    <p className="text-gray-400 text-xs italic flex items-center justify-center gap-1"><Info size={12} /> {t.disclaimer}</p>
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

export default MortgageModal;
