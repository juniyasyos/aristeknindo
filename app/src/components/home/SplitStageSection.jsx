import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { 
  Cpu, 
  Wrench, 
  Layers, 
  Boxes, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Check,
  Compass,
  Zap
} from 'lucide-react';

export default function SplitStageSection() {
  const { lang } = useLanguage();
  const section = HOME_DATA.pillarsSection;
  const pillars = section.pillars;

  // Pillar references
  const pAutomation = pillars[0];
  const pMachining = pillars[1];
  const pFabrication = pillars[2];
  const pSourcing = pillars[3];

  return (
    <section className="py-8 sm:py-16 lg:py-24 border-b border-slate-border/60 relative bg-canvas overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Bold & Authoritative with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 mb-6 sm:mb-12"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-canvas-card border border-brand-red/30 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-brand-redLight uppercase tracking-wider font-semibold">
                {lang === 'id' ? "Layanan Rekayasa & Fabrikasi Terpadu" : "Integrated Engineering & Fabrication Capabilities"}
              </span>
            </div>
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-tight">
              {lang === 'id' ? section.headingId : section.headingEn}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed hidden sm:block">
            {lang === 'id'
              ? "Menghubungkan rekayasa kontrol otomatis, pengerjaan spare part presisi di workshop mandiri, penataan jalur kabel K3, serta pengadaan 29+ brand dunia dalam satu pintu kemitraan."
              : "Bridging automation control engineering, in-house precision spare part machining, code-compliant cable routing, and global brand sourcing under single-point accountability."}
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* BENTO GRID: Interlocking 7-5 (Row 1) & 5-7 (Row 2) Architecture           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-5 mb-6 sm:mb-10">
          
          {/* ======================================================================= */}
          {/* BENTO CARD 1: Otomasi & Kontraktor PLC (lg:col-span-7)                 */}
          {/* ======================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 rounded-2xl border border-slate-border/80 bg-canvas-card/90 hover:border-brand-red/60 transition-colors shadow-xl overflow-hidden group flex flex-col justify-between relative"
          >
            
            {/* Background Graphic Photo with High Contrast Gradient */}
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
              <img
                src={pAutomation.image}
                alt={pAutomation.titleId}
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/95 to-canvas/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
            </div>

            <div className="p-3.5 sm:p-6 sm:p-8 relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="p-1 sm:p-1.5 rounded-lg bg-brand-red/20 text-brand-red border border-brand-red/30">
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-brand-redLight tracking-wider uppercase">
                      01 // OTOMASI & KONTROL PLC
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    IEC 60204-1 Standard
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-2xl font-bold text-white tracking-tight mb-2 sm:mb-3 group-hover:text-brand-redLight transition-colors">
                  {lang === 'id' ? pAutomation.titleId : pAutomation.titleEn}
                </h3>

                {/* Narrative: hidden on mobile for clean executive presentation */}
                <p className="hidden sm:block text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-6 max-w-xl">
                  {lang === 'id' ? pAutomation.solutionId : pAutomation.solutionEn}
                </p>

                {/* Key Deliverables Matrix: 2 on mobile, 4 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 mb-3 sm:mb-6">
                  {pAutomation.deliverables.slice(0, 4).map((item, idx) => (
                    <div key={idx} className={`items-start gap-2 text-[11px] sm:text-xs text-slate-200 ${idx >= 2 ? 'hidden sm:flex' : 'flex'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{lang === 'id' ? item.id : item.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Brands & CTA Link */}
              <div className="pt-3 sm:pt-4 border-t border-slate-border/80 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="hidden sm:flex flex-wrap items-center gap-1.5">
                  <span className="text-[10px] font-mono text-slate-400 mr-1">Controllers:</span>
                  {["Mitsubishi", "Omron", "Allen-Bradley", "Yaskawa"].map((b, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-subtle/80 text-slate-300 border border-slate-700/60">
                      {b}
                    </span>
                  ))}
                </div>

                <Link
                  to="/services#automation"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-redLight hover:text-white transition-colors group/link"
                >
                  <span>{lang === 'id' ? "Konsultasi Kebutuhan PLC" : "Consult PLC Requirements"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* BENTO CARD 2: Machining & Bubut Presisi (lg:col-span-5)                 */}
          {/* ======================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 rounded-2xl border border-slate-border/80 bg-canvas-card/90 hover:border-brand-red/60 transition-colors shadow-xl overflow-hidden group flex flex-col justify-between relative"
          >
            
            <div className="p-3.5 sm:p-6 sm:p-7 relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="p-1 sm:p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-emerald-400 tracking-wider uppercase">
                      02 // WORKSHOP MACHINING PRESISI
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 font-bold">
                    ±0.01 mm Presisi
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  {lang === 'id' ? pMachining.titleId : pMachining.titleEn}
                </h3>

                {/* Narrative: hidden on mobile */}
                <p className="hidden sm:block text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5 sm:mb-4">
                  {lang === 'id' 
                    ? "Produksi suku cadang mesin via Bubut, Milling, dan CNC di workshop Babelan. Solusi cepat 0-inden tanpa tunggu impor luar negeri."
                    : "Precision spare part machining via Lathe, Milling, and CNC at our Babelan facility. Fast 0-lead-time turnaround without overseas OEM delays."}
                </p>

                {/* Machining Photo Showcase */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 mb-3 sm:mb-4 h-28 sm:h-40 bg-black">
                  <img
                    src={pMachining.image}
                    alt="Precision Machined Spare Parts"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent" />
                  <div className="hidden sm:flex absolute bottom-2 left-3 right-3 items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-200">
                    <span>Reverse Engineering Fisik</span>
                    <span className="text-emerald-400">0-Inden Sourcing</span>
                  </div>
                </div>

                {/* Material & Part Tags: Hidden on mobile to reduce text clutter */}
                <div className="hidden sm:flex flex-wrap gap-1.5 mb-4">
                  {["Shaft Bertingkat", "Gear & Sprocket", "Flange Hydraulic", "Bushing Bronze", "S45C / SUS304"].map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-subtle text-slate-300 border border-slate-700/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Link */}
              <div className="pt-3 border-t border-slate-border/80 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono hidden xs:inline">Drawing CAD / Sampel Fisik</span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-white transition-colors group/link"
                >
                  <span>{lang === 'id' ? "Kirim Drawing Teknis" : "Submit Technical Drawing"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* BENTO CARD 3: Instalasi Cable Tray & Elektrikal (lg:col-span-5)        */}
          {/* ======================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 rounded-2xl border border-slate-border/80 bg-canvas-card/90 hover:border-brand-red/60 transition-colors shadow-xl overflow-hidden group flex flex-col justify-between relative"
          >
            
            <div className="p-3.5 sm:p-6 sm:p-7 relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="p-1 sm:p-1.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-amber-400 tracking-wider uppercase">
                      03 // FABRIKASI & KELISTRIKAN PABRIK
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-amber-950/60 text-amber-400 border border-amber-800/50 font-semibold">
                    Standar K3 Pabrik
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-amber-300 transition-colors">
                  {lang === 'id' ? pFabrication.titleId : pFabrication.titleEn}
                </h3>

                {/* Narrative: hidden on mobile */}
                <p className="hidden sm:block text-xs sm:text-sm text-slate-300 leading-relaxed mb-2.5 sm:mb-4">
                  {lang === 'id'
                    ? "Instalasi jalur cable tray galvanis rapi, penarikan kabel daya, dan relokasi jalur mesin berstandar audit keselamatan manufaktur."
                    : "Neat galvanized cable tray installation, industrial power wiring, and machinery cable relocation meeting strict plant HSE audit codes."}
                </p>

                {/* Cable Tray Photo Showcase */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 mb-3 sm:mb-4 h-28 sm:h-40 bg-black">
                  <img
                    src={pFabrication.image}
                    alt="Cable Tray Installation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent" />
                  <div className="hidden sm:flex absolute bottom-2 left-3 right-3 items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-200">
                    <span>Cable Ladder & Tray</span>
                    <span className="text-amber-400">Hot-Dip Galvanized</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-[10px] sm:text-xs">Pemisahan Power & Sinyal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="text-[10px] sm:text-xs">Safety Load Calculation</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Link */}
              <div className="pt-3 border-t border-slate-border/80 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono hidden xs:inline">Daya & Sinyal Instrumentasi</span>
                <Link
                  to="/services#fabrication"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-white transition-colors group/link"
                >
                  <span>{lang === 'id' ? "Diskusikan Jalur Kabel" : "Discuss Cable Routing"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* BENTO CARD 4: Pengadaan Spare Part 29+ Brand (lg:col-span-7)           */}
          {/* ======================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 rounded-2xl border border-slate-border/80 bg-canvas-card/90 hover:border-brand-red/60 transition-colors shadow-xl overflow-hidden group flex flex-col justify-between relative"
          >
            
            {/* Background Graphic Photo with High Contrast Gradient */}
            <div className="absolute inset-0 z-0 opacity-35 group-hover:opacity-45 transition-opacity duration-500">
              <img
                src={pSourcing.image}
                alt={pSourcing.titleId}
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/95 to-canvas/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent" />
            </div>

            <div className="p-3.5 sm:p-6 sm:p-8 relative z-10 flex flex-col justify-between h-full">
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="p-1 sm:p-1.5 rounded-lg bg-sky-500/20 text-sky-400 border border-sky-500/30">
                      <Boxes className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs font-bold text-sky-400 tracking-wider uppercase">
                      04 // PENGADAAN SUKU CADANG RESMI
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    29+ Tier-1 Brand Dunia
                  </span>
                </div>

                {/* Headline: Refined size on mobile */}
                <h3 className="text-base sm:text-2xl font-bold text-white tracking-tight mb-2 sm:mb-3 group-hover:text-sky-300 transition-colors">
                  {lang === 'id' ? pSourcing.titleId : pSourcing.titleEn}
                </h3>

                {/* Narrative: hidden on mobile */}
                <p className="hidden sm:block text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-6 max-w-xl">
                  {lang === 'id'
                    ? "Akses rantai pasok resmi komponen otomasi, sensor, bearing presisi, dan linear motion. Menjamin suku cadang 100% original sesuai kode part resmi mesin Anda."
                    : "Direct verified supply network for industrial automation, precision bearings, and linear motion. Guaranteeing 100% genuine parts matching your machine's exact part numbers."}
                </p>

                {/* 3 Pillar Category Highlights: Compact 3-Column on Mobile */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-3 sm:mb-6">
                  <div className="p-2 sm:p-3 rounded-lg bg-canvas/70 border border-slate-700/60 text-center sm:text-left">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-sky-400 block sm:mb-1 leading-tight">Otomasi & Kontrol</span>
                    <span className="text-[11px] text-slate-300 block leading-snug hidden sm:block">Mitsubishi, Yaskawa, Fuji, Autonics, Cognex</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-lg bg-canvas/70 border border-slate-700/60 text-center sm:text-left">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-sky-400 block sm:mb-1 leading-tight">Motion & Bearing</span>
                    <span className="text-[11px] text-slate-300 block leading-snug hidden sm:block">THK, NSK, Timken, NTN, IKO, Koyo, FAG</span>
                  </div>
                  <div className="p-2 sm:p-3 rounded-lg bg-canvas/70 border border-slate-700/60 text-center sm:text-left">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-sky-400 block sm:mb-1 leading-tight">Pneumatik & Transmisi</span>
                    <span className="text-[11px] text-slate-300 block leading-snug hidden sm:block">Koganei, Tsubaki, Nitta Moore, Samick</span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Part Number Inquiry CTA */}
              <div className="pt-3 sm:pt-4 border-t border-slate-border/80 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-400 font-mono">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Garansi Spesifikasi Resmi Pabrikan</span>
                </div>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-white transition-colors group/link"
                >
                  <span>{lang === 'id' ? "Cek Katalog 29+ Brand" : "View 29+ Brand Catalog"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Unified Bottom Assurance Strip with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5 }}
          className="p-3.5 sm:p-5 rounded-xl bg-canvas-card border border-slate-border/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 text-xs"
        >
          <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-2 sm:gap-6 text-slate-300 font-mono text-[11px] sm:text-xs">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-red shrink-0" />
              Workshop Mandiri Babelan, Bekasi
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-red shrink-0" />
              Drawing CAD 2D/3D & Reverse Engineering
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <Check className="w-4 h-4 text-brand-red shrink-0" />
              Uji Fungsi FAT & Start-Up di Pabrik
            </span>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-red hover:bg-brand-redDark text-white font-semibold transition-all shadow-md shadow-brand-red/20 w-full sm:w-auto text-center text-xs sm:text-sm"
            >
              <span>{lang === 'id' ? "Hubungi Tim Engineering ATM" : "Contact ATM Engineering Team"}</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
