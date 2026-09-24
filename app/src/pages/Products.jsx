import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { SITE } from '../data/site';
import { ShieldCheck, Search, MessageSquare, ArrowRight, Tag, CheckCircle2, SlidersHorizontal } from 'lucide-react';

export default function Products() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const automationBrands = SITE.brands.automation.map(b => ({ ...b, group: 'automation' }));
  const mechanicalBrands = SITE.brands.mechanical.map(b => ({ ...b, group: 'mechanical' }));
  const allBrands = [...automationBrands, ...mechanicalBrands];

  const filteredBrands = allBrands.filter(b => {
    const matchesCategory = activeCategory === 'all' || b.group === activeCategory;
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.origin.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      
      {/* 1. Header */}
      <section className="relative py-12 sm:py-16 lg:py-24 border-b border-slate-border/60 overflow-hidden bg-canvas">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none animate-soft-glow" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-canvas-card border border-brand-red/30 mb-4 sm:mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="font-mono text-xs text-brand-redLight uppercase tracking-wider font-semibold">
              29 Verified Global Tier-1 Brands
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-[1.18] mb-3 sm:mb-6"
          >
            {lang === 'id'
              ? "Pengadaan Komponen & Suku Cadang Standar Industri Internasional"
              : "Global Industrial Spare Parts Sourcing & Supply"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {lang === 'id'
              ? "Kami menyediakan akses langsung ke 29 prinsipal terkemuka dunia untuk otomasi kontrol, sensor, bearing presisi, dan linear motion guna menjaga keandalan mesin pabrik Anda."
              : "Direct supply network to 29 verified global manufacturers for automation controls, sensors, precision bearings, and linear motion hardware."}
          </motion.p>
        </div>
      </section>

      {/* 2. Part Number RFQ Notice Box */}
      <section className="py-6 sm:py-8 bg-brand-red/10 border-b border-brand-red/30 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {lang === 'id' ? "Punya Nomor Seri (Part Number) atau Foto Part Lama?" : "Have a Specific Part Number or Nameplate Photo?"}
                </h3>
              </div>
              <p className="text-sm text-slate-300">
                {lang === 'id'
                  ? "Cukup kirimkan foto kode seri via WhatsApp untuk pengecekan spesifikasi & penawaran harga cepat."
                  : "Send your part serial photo via WhatsApp for instant spec verification and fast quotation."}
              </p>
            </div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0">
              <a
                href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo tim supply PT ATM, kami ingin menanyakan stok / penawaran harga untuk Part Number berikut:")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md whitespace-nowrap transition-all text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{lang === 'id' ? "Cek Part Number via WhatsApp" : "Check Part Number via WA"}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Brands Grid with Filters */}
      <section className="py-8 sm:py-16 lg:py-24 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Controls: Search & Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }`}
              >
                {lang === 'id' ? "Semua Brand (29)" : "All Brands (29)"}
              </button>
              <button
                onClick={() => setActiveCategory('automation')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                  activeCategory === 'automation'
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }`}
              >
                {lang === 'id' ? "Otomasi & Kontrol (16)" : "Automation & Control (16)"}
              </button>
              <button
                onClick={() => setActiveCategory('mechanical')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-mono font-semibold transition-all ${
                  activeCategory === 'mechanical'
                    ? 'bg-brand-red text-white shadow-md shadow-brand-red/20'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }`}
              >
                {lang === 'id' ? "Mekanikal & Motion (13)" : "Mechanical & Motion (13)"}
              </button>
            </div>

            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'id' ? "Cari nama merek / kategori..." : "Search brand or category..."}
                className="w-full pl-9 pr-4 py-2 sm:py-2.5 rounded-lg bg-canvas-card border border-slate-border text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-red transition-colors shadow-sm"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {filteredBrands.map((b, idx) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.4) }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 rounded-xl border border-slate-border/80 bg-canvas-card hover:border-brand-red/50 transition-all flex flex-col justify-between group shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-canvas-subtle text-slate-300 border border-slate-700/60">
                      {b.origin}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Original
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-light transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted mt-1 leading-snug">
                    {b.category}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-border/50">
                  <a
                    href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(`Halo tim supply PT ATM, kami ingin meminta penawaran harga untuk suku cadang brand: ${b.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>{lang === 'id' ? "Minta Penawaran Brand Ini" : "Inquire This Brand"}</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
