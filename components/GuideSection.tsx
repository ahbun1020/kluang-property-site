
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calculator, FileText, Key, Search, ArrowRight } from 'lucide-react';

interface GuideSectionProps {
  lang: 'EN' | 'BM';
  onViewGuide: (guide: any) => void;
  onOpenCalculator: () => void;
}

const GuideSection: React.FC<GuideSectionProps> = ({ lang, onViewGuide, onOpenCalculator }) => {
  const content = {
    EN: {
      title: 'Buying Process Made Simple',
      sub: 'A structured guide for buyers seeking a clear, professional process in Kluang. Who is this guide for? This guide is designed for first-time buyers, upgraders, and investors planning to own property in Kluang. Certified Real Estate Negotiator (REN 59021), specializing in residential properties in Kluang, Johor.',
      learnMore: 'Learn More',
      calculator: 'Mortgage Calculator',
      steps: [
        {
          id: 'search',
          icon: <Search className="text-amber-500" size={28} />,
          title: "Find Your Ideal Home",
          desc: "A professional framework to shortlist homes that truly fit your lifestyle, family needs, and long-term plans.",
          content: [
            {
              subtitle: "Strategic Location Analysis",
              text: "We evaluate each location beyond price, focusing on long-term livability, daily convenience, and risk factors - so you don't just buy a house, but choose the right place to live.",
              points: [
                "Area growth potential",
                "Flood-risk & zoning considerations",
                "Security & neighbourhood profile",
                "Access to daily amenities & schools"
              ]
            },
            {
              subtitle: "Community Matching",
              text: "Every family has different priorities. We help match you with neighbourhoods that align with your lifestyle preferences, family structure, and future plans.",
              points: [
                "Parks & recreational spaces",
                "Nearby schools & childcare options",
                "Traffic patterns & daily commute comfort",
                "Overall community environment"
              ]
            }
          ]
        },
        {
          id: 'loan',
          icon: <Calculator className="text-amber-500" size={28} />,
          title: "Loan Readiness Assessment",
          desc: "Ensuring your budget and loan eligibility align comfortably with your home choice.",
          hasCalculator: true,
          content: [
            {
              subtitle: "Financial Capacity Review",
              text: "Before proceeding with any property, we assess your financial comfort level to reduce approval risks and long-term strain.",
              points: ["DSR assessment & affordability check", "Estimated loan eligibility range", "Margin of finance overview"]
            },
            {
              subtitle: "Bank Coordination Support",
              text: "We provide structured support throughout the loan application process by coordinating with suitable banking partners and ensuring documentation readiness.",
              points: ["EPF withdrawal guidance", "Document preparation & checklist", "Interest rate comparison across banks"]
            }
          ]
        },
        {
          id: 'legal',
          icon: <FileText className="text-amber-500" size={28} />,
          title: "Booking & Legal",
          desc: "Transparent booking process and coordination with reliable legal panels.",
          content: [
            {
              subtitle: "Seamless SPA Execution",
              text: "We guide buyers through the Sale & Purchase Agreement (SPA) process by ensuring all legal steps are clearly explained and properly coordinated for a smooth execution.",
              points: ["SPA preparation & explanation", "Stamp duty overview & consultation", "Legal fee estimation & timeline clarity"]
            }
          ]
        },
        {
          id: 'keys',
          icon: <Key className="text-amber-500" size={28} />,
          title: "Handover & Keys",
          desc: "The final step, with guidance during handover and defect checking.",
          content: [
            {
              subtitle: "Welcome Home",
              text: "We support you through the final stage of your home purchase, from inspection to key handover, so you can transition into your new home with confidence.",
              points: ["Defect checking guidance during inspection", "Utility application & account setup support", "Renovation planning & basic advisory"]
            }
          ]
        }
      ]
    },
    BM: {
      title: 'Proses Pembelian Dipermudahkan',
      sub: 'Panduan berstruktur untuk pembeli yang mahukan proses yang jelas dan profesional di Kluang. Untuk siapa panduan ini? Panduan ini direka untuk pembeli kali pertama, pembeli naik taraf, dan pelabur yang merancang memiliki hartanah di Kluang. Perunding Hartanah Berlesen (REN 59021), khusus dalam hartanah kediaman di Kluang, Johor.',
      learnMore: 'Ketahui Lebih Lanjut',
      calculator: 'Kalkulator Gadai Janji',
      steps: [
                {
          id: 'search',
          icon: <Search className="text-amber-500" size={28} />,
          title: "Cari Rumah Idaman",
          desc: "Rangka kerja profesional untuk menyenarai pendek rumah yang benar-benar sesuai dengan gaya hidup, keperluan keluarga, dan perancangan jangka panjang anda.",
          content: [
            {
              subtitle: "Analisis Lokasi Strategik",
              text: "Kami menilai setiap lokasi melebihi harga semata-mata, dengan fokus pada kebolehhunian jangka panjang, kemudahan harian, dan faktor risiko - supaya anda bukan sekadar membeli rumah, tetapi memilih tempat tinggal yang tepat.",
              points: [
                "Potensi pertumbuhan kawasan",
                "Pertimbangan risiko banjir & zon",
                "Profil keselamatan & kejiranan",
                "Akses ke kemudahan harian & sekolah"
              ]
            },
            {
              subtitle: "Padanan Komuniti",
              text: "Setiap keluarga mempunyai keutamaan berbeza. Kami membantu memadankan anda dengan kejiranan yang selari dengan gaya hidup, struktur keluarga, dan rancangan masa depan.",
              points: [
                "Taman & ruang rekreasi",
                "Sekolah & pilihan penjagaan kanak-kanak berdekatan",
                "Corak trafik & keselesaan perjalanan harian",
                "Persekitaran komuniti keseluruhan"
              ]
            }
          ]
        },
        {
          id: 'loan',
          icon: <Calculator className="text-amber-500" size={28} />,
          title: "Konsultasi Pinjaman",
          desc: "Bekerjasama dengan bank-bank utama untuk menilai kapasiti pinjaman anda.",
          hasCalculator: true,
          content: [
            {
              subtitle: "Audit Kapasiti Kewangan",
              text: "Semakan menyeluruh DSR (Nisbah Khidmat Hutang) anda untuk kelulusan bank yang lancar.",
              points: ["Pengiraan DSR", "Semakan pra-kelulusan", "Margin pembiayaan"]
            }
          ]
        },
        {
          id: 'legal',
          icon: <FileText className="text-amber-500" size={28} />,
          title: "Tempahan & Perundangan",
          desc: "Proses tempahan yang telus dan penyelarasan dengan panel guaman yang dipercayai.",
          content: [
            {
              subtitle: "Pelaksanaan SPA",
              text: "Memastikan semua dokumen undang-undang diterangkan dengan jelas.",
              points: ["Penyediaan SPA", "Konsultasi duti setem", "Anggaran yuran guaman"]
            }
          ]
        },
        {
          id: 'keys',
          icon: <Key className="text-amber-500" size={28} />,
          title: "Penyerahan Kunci",
          desc: "Langkah terakhir dengan panduan semasa penyerahan kunci dan semakan kecacatan.",
          content: [
            {
              subtitle: "Selamat Pulang ke Rumah",
              text: "Pemeriksaan akhir dan penyerahan kunci rumah baru anda di Kluang.",
              points: ["Panduan semakan kecacatan", "Sokongan permohonan utiliti", "Nasihat pengubahsuaian"]
            }
          ]
        }
      ]
    }
  }[lang];

  return (
    <section id="guide" className="py-24 bg-navy-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-500 font-bold uppercase tracking-[0.2em] text-sm"
          >
            Guide
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">{content.title}</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {content.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((step, index) => (
            <motion.div
              key={step.id}
              id={step.id === 'loan' ? 'loan-readiness' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-3 inline-block">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {step.desc}
              </p>
              
              <div className="space-y-3 mt-auto pt-6 border-t border-gray-50">
                <button 
                  onClick={() => onViewGuide(step)}
                  className="w-full flex items-center justify-between text-navy-900 font-bold text-sm bg-gray-50 p-3 rounded-xl hover:bg-navy-900 hover:text-white transition-all group/btn"
                >
                  {content.learnMore} <ChevronRight size={16} className="text-amber-500 group-hover/btn:text-white" />
                </button>
                
                {step.hasCalculator && (
                  <button 
                    onClick={onOpenCalculator}
                    className="w-full flex items-center justify-between text-white font-bold text-sm bg-amber-500 p-3 rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20"
                  >
                    {content.calculator} <Calculator size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
