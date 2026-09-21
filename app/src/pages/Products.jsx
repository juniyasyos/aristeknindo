import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE } from '../data/site';
import { ShieldCheck, Search, MessageSquare, ArrowRight, Tag, CheckCircle2 } from 'lucide-react';

export default function Products() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const automationBrands = SITE.brands.automation.map(b => ({ ...b, group: 'automation' }));
  const mechanicalBrands = SITE.brands.mechanical.map(b => ({ ...b, group: 'mechanical' }));
  const allBrands = [...automationBrands, mechanicalBrands];

  const filteredBrands = allBrands.flat().filter(b => {
    const matchesCategory = activeCategory === 'all' || b.group === activeCategory;
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          b.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.origin.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:py-20 border-b border-slate-border/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-redLight font-mono text-xs mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>29 Verified Global Tier-1 Brands</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'id'
              ? "Pengadaan Komponen & Suku Cadang Standar Industri Internasional"
              : "Global Industrial Spare Parts Sourcing & Supply"}
          </h1>

          <p className="text-base sm:text-lg text-slate-muted max-w-3xl mx-auto leading-relaxed">
            {lang === 'id'
              ? "Kami menyediakan akses langsung ke 29 prinsipal terkemuka dunia untuk otomasi kontrol, sensor, bearing presisi, dan linear motion guna menjaga keandalan mesin pabrik Anda."
              : "Direct supply network to 29 verified global manufacturers for automation controls, sensors, precision bearings, and linear motion hardware."}
          </p>
        </div>
      </section>

      {/* Part Number RFQ Notice Box */}
      <section className="py-8 bg-brand-red/10 border-b border-brand-red/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white">
                {lang === 'id' ? "Punya Nomor Seri (Part Number) atau Foto Part Lama?" : "Have a Specific Part Number or Nameplate Photo?"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'id'
                  ? "Cukup kirimkan foto kode seri via WhatsApp untuk pengecekan spesifikasi & penawaran harga cepat."
                  : "Send your part serial photo via WhatsApp for instant spec verification and fast quotation."}
              </p>
            </div>
            <a
              href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo tim supply PT ATM, kami ingin menanyakan stok / penawaran harga untuk Part Number berikut:")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md whitespace-nowrap transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'id' ? "Cek Part Number via WhatsApp" : "Check Part Number via WA"}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Brands Grid with Filters */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-brand-red text-white'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }`}
              >
                {lang === 'id' ? "Semua Brand (29)" : "All Brands (29)"}
              </button>
              <button
                onClick={() => setActiveCategory('automation')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCategory === 'automation'
                    ? 'bg-brand-red text-white'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }`}
              >
                {lang === 'id' ? "Otomasi & Kontrol (16)" : "Automation & Control (16)"}
              </button>
              <button
                onClick={() => setActiveCategory('mechanical')}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all ${
                  activeCategory === 'mechanical'
                    ? 'bg-brand-red text-white'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }`}
              >
                {lang === 'id' ? "Mekanikal & Motion (13)" : "Mechanical & Motion (13)"}
              </button>
            </div>

            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-slate-subtle absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={lang === 'id' ? "Cari nama merek / kategori..." : "Search brand or category..."}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-canvas-card border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
              />
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBrands.map((b, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-border bg-canvas-card hover:border-slate-muted transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-canvas-subtle text-slate-subtle border border-slate-border">
                      {b.origin}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Original
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-redLight transition-colors">
                    {b.name}
                  </h3>
                  <p className="text-xs text-slate-muted mt-1">
                    {b.category}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-border/50">
                  <a
                    href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(`Halo tim supply PT ATM, kami ingin meminta penawaran harga untuk suku cadang brand: ${b.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>{lang === 'id' ? "Minta Penawaran Brand Ini" : "Inquire This Brand"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
