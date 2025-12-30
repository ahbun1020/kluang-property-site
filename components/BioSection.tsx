
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Users, TrendingUp } from 'lucide-react';

interface BioSectionProps {
  lang: 'EN' | 'BM';
}

const BioSection: React.FC<BioSectionProps> = ({ lang }) => {
  const content = {
    EN: {
      tag: 'Kluang Specialist',
      title: "Hello, I'm <span class='text-amber-500'>Fiona Mei</span><br />Your Kluang Property Partner",
      license: 'Certified Real Estate Negotiator',
      bio: 'Certified Real Estate Negotiator (REN 59021), specializing in residential properties in Kluang, Johor. Specializing in the Kluang real estate market for years, I am committed to providing a one-stop professional service from property selection and mortgage consultation to legal transfer. Whether you are a first-time homebuyer, looking for an upgrade, or a property investor, I will help you achieve your goals in the most transparent and efficient way.',
      feat1: 'Integrity',
      feat1Sub: 'Transparent transactions',
      feat2: '1000+ Clients',
      feat2Sub: 'Trusted by community',
      feat3: 'Market Insight',
      feat3Sub: 'Accurate analysis',
      feat4: 'Award Winning',
      feat4Sub: 'Best agent for 3 years',
      cta: 'Discover My Services',
      floatTitle: 'Kluang District',
      floatSub: 'Lead Expert'
    },
    BM: {
      tag: 'Pakar Kluang',
      title: "Hello, Saya <span class='text-amber-500'>Fiona Mei</span><br />Rakan Hartanah Kluang Anda",
      license: 'Perunding Hartanah Berlesen',
      bio: 'Perunding Hartanah Berlesen (REN 59021), khusus dalam hartanah kediaman di Kluang, Johor. Pakar dalam pasaran hartanah Kluang selama bertahun-tahun, saya komited untuk menyediakan perkhidmatan profesional sehenti daripada pemilihan hartanah dan perundingan gadai janji kepada pindah milik sah. Sama ada anda pembeli rumah kali pertama, mencari ruang naik taraf, atau pelabur hartanah, saya akan membantu anda mencapai matlamat anda dengan cara yang paling telus dan cekap.',
      feat1: 'Integriti',
      feat1Sub: 'Transaksi telus',
      feat2: '1000+ Pelanggan',
      feat2Sub: 'Dipercayai komuniti',
      feat3: 'Wawasan Pasaran',
      feat3Sub: 'Analisis tepat',
      feat4: 'Pemenang Anugerah',
      feat4Sub: 'Ejen terbaik 3 tahun',
      cta: 'Ketahui Perkhidmatan Saya',
      floatTitle: 'Daerah Kluang',
      floatSub: 'Pakar Utama'
    }
  }[lang];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="/images/agent.jpg" 
                  alt="Fiona Mei Professional Portrait" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/10 to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-10 -right-6 md:right-0 bg-white p-6 rounded-2xl shadow-2xl border border-amber-500/20 z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-amber-500 p-3 rounded-xl text-white shadow-lg shadow-amber-500/20">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-navy-900 font-bold text-lg leading-tight">{content.floatTitle}</div>
                  <div className="text-amber-500 font-bold">{content.floatSub}</div>
                </div>
              </div>
            </motion.div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-navy-900/5 rounded-full -z-10 blur-3xl"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm"
              >
                {content.tag}
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-900 leading-tight" dangerouslySetInnerHTML={{ __html: content.title }} />
              <div className="flex items-center gap-2">
                <span className="bg-navy-900 text-white px-3 py-1 rounded font-bold text-sm tracking-tight">REN 59021</span>
                <span className="text-gray-500 font-medium">{content.license}</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {content.bio}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="mt-1 text-amber-500 group-hover:scale-110 transition-transform"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="font-bold text-navy-900">{content.feat1}</h4>
                  <p className="text-sm text-gray-500">{content.feat1Sub}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="mt-1 text-amber-500 group-hover:scale-110 transition-transform"><Users size={24} /></div>
                <div>
                  <h4 className="font-bold text-navy-900">{content.feat2}</h4>
                  <p className="text-sm text-gray-500">{content.feat2Sub}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="mt-1 text-amber-500 group-hover:scale-110 transition-transform"><TrendingUp size={24} /></div>
                <div>
                  <h4 className="font-bold text-navy-900">{content.feat3}</h4>
                  <p className="text-sm text-gray-500">{content.feat3Sub}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="mt-1 text-amber-500 group-hover:scale-110 transition-transform"><Award size={24} /></div>
                <div>
                  <h4 className="font-bold text-navy-900">{content.feat4}</h4>
                  <p className="text-sm text-gray-500">{content.feat4Sub}</p>
                </div>
              </div>
            </div>

            <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all hover:gap-4 active:scale-95 shadow-lg shadow-navy-900/10">
              {content.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
