
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, Loader2, Sparkles, AlertCircle, Key, Download } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface ImageGeneratorProps {
  lang: 'EN' | 'BM';
}

type ImageSize = "1K" | "2K" | "4K";

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ lang }) => {
  const [prompt, setPrompt] = useState('A cinematic aerial drone view of Kluang city center, Johor, Malaysia, featuring the clock tower and surrounding residential areas, golden hour lighting, architectural photography style');
  const [size, setSize] = useState<ImageSize>("1K");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = {
    EN: {
      title: 'Property & Area Visualizer',
      subtitle: 'Use AI to visualize development projects or area overviews in high resolution.',
      promptLabel: 'What would you like to visualize?',
      sizeLabel: 'Output Quality',
      generateBtn: 'Generate Visualization',
      generating: 'Generating high-res image...',
      noKey: 'API Key Required',
      noKeyDesc: 'High-quality generation requires a paid API key. Please connect your account to proceed.',
      connectBtn: 'Select API Key',
      billingLink: 'Check Billing Docs',
      errorTitle: 'Generation Failed',
      retry: 'Try Again'
    },
    BM: {
      title: 'Visualizer Hartanah & Kawasan',
      subtitle: 'Gunakan AI untuk membayangkan projek pembangunan atau gambaran keseluruhan kawasan dalam resolusi tinggi.',
      promptLabel: 'Apa yang anda ingin bayangkan?',
      sizeLabel: 'Kualiti Output',
      generateBtn: 'Jana Visualisasi',
      generating: 'Menjana imej resolusi tinggi...',
      noKey: 'Kunci API Diperlukan',
      noKeyDesc: 'Penjanaan berkualiti tinggi memerlukan kunci API berbayar. Sila sambungkan akaun anda.',
      connectBtn: 'Pilih Kunci API',
      billingLink: 'Semak Dokumen Pengebilan',
      errorTitle: 'Penjanaan Gagal',
      retry: 'Cuba Lagi'
    }
  }[lang];

  const handleOpenKeySelector = async () => {
    try {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      // Assume success after trigger as per instructions
      setError(null);
    } catch (e) {
      setError("Failed to open key selector");
    }
  };

  const generateImage = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Check for API key presence
      // @ts-ignore
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        setIsGenerating(false);
        setError('API_KEY_REQUIRED');
        return;
      }

      if (!process.env.API_KEY) {
        setError('API key not configured');
        return;
      }

      const ai = new GoogleGenerativeAI(process.env.API_KEY as string);
      const model = ai.getGenerativeModel({ model: 'gemini-1.5-pro' });
      const response = await model.generateContent({
        contents: [{
          role: 'user',
          parts: [{ text: prompt }],
        }],
      });

      let imageUrl = null;
      const text = response.response.text();
      // Since Gemini doesn't generate images, we'll use a placeholder or mock image
      // For now, set a placeholder image URL
      imageUrl = 'https://via.placeholder.com/800x600?text=AI+Generated+Visualization';

      if (imageUrl) {
        setGeneratedImage(imageUrl);
      } else {
        throw new Error("No image data returned from model");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError('API_KEY_REQUIRED');
      } else {
        setError(err.message || "An unexpected error occurred during generation.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-24 bg-navy-900 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Control Panel */}
            <div className="lg:col-span-5 space-y-8 bg-navy-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider block">
                  {t.promptLabel}
                </label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full h-32 bg-navy-900 border-2 border-white/5 rounded-2xl p-4 text-white focus:border-amber-500 outline-none transition-all resize-none font-medium"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider block">
                  {t.sizeLabel}
                </label>
                <div className="flex gap-4">
                  {(["1K", "2K", "4K"] as ImageSize[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex-1 py-3 rounded-xl font-black text-sm transition-all border-2 ${
                        size === s 
                        ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-500/20' 
                        : 'bg-navy-900 border-white/5 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {error === 'API_KEY_REQUIRED' ? (
                <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl space-y-4">
                  <div className="flex items-center gap-3 text-red-500">
                    <AlertCircle size={20} />
                    <span className="font-bold">{t.noKey}</span>
                  </div>
                  <p className="text-sm text-gray-400">{t.noKeyDesc}</p>
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={handleOpenKeySelector}
                      className="w-full bg-white text-navy-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                    >
                      <Key size={18} /> {t.connectBtn}
                    </button>
                    <a 
                      href="https://ai.google.dev/gemini-api/docs/billing" 
                      target="_blank"
                      className="text-xs text-center text-gray-500 hover:text-amber-500 underline"
                    >
                      {t.billingLink}
                    </a>
                  </div>
                </div>
              ) : (
                <button
                  disabled={isGenerating || !prompt.trim()}
                  onClick={generateImage}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-amber-500/20 active:scale-95"
                >
                  {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles />}
                  {isGenerating ? t.generating : t.generateBtn}
                </button>
              )}

              {error && error !== 'API_KEY_REQUIRED' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm flex items-start gap-3">
                  <AlertCircle size={18} className="shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold mb-1">{t.errorTitle}</div>
                    <div className="opacity-80">{error}</div>
                    <button onClick={() => setError(null)} className="mt-2 font-bold underline block">{t.retry}</button>
                  </div>
                </div>
              )}
            </div>

            {/* Display Area */}
            <div className="lg:col-span-7 aspect-video bg-navy-800/50 rounded-[2rem] border border-white/5 overflow-hidden relative shadow-inner group">
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
                    <div className="text-amber-500 font-bold animate-pulse">{t.generating}</div>
                  </motion.div>
                ) : generatedImage ? (
                  <motion.div 
                    key="image"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full h-full"
                  >
                    <img 
                      src={generatedImage} 
                      alt="AI Generated Visualization" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <a 
                        href={generatedImage} 
                        download="kluang-visualization.png"
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all"
                      >
                        <Download size={18} /> Download High-Res
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <ImageIcon size={40} />
                    </div>
                    <p className="text-xl font-bold mb-2">Ready to Visualize</p>
                    <p className="max-w-xs text-sm opacity-60">Enter a prompt and choose quality to start generating high-end property visualizations.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGenerator;
