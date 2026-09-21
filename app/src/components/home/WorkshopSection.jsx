import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { 
  Wrench, 
  Layers, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  MapPin, 
  ArrowRight, 
  Crosshair,
  Sparkles
} from 'lucide-react';

export default function WorkshopSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.workshopSection;
  const [activeIdx, setActiveIdx] = useState(0);

  const activeFac = data.facilities[activeIdx] || data.facilities[0];

  // Station Icons Mapping
  const stationIcons = [Wrench, Layers, Cpu, Activity];

  // Anti-Broker Guarantees
  const guarantees = [
    {
      icon: ShieldCheck,
      titleId: "100% Fasilitas Mandiri (Anti-Broker)",
      titleEn: "100% In-House Facility (Anti-Broker)",
      descId: "Pengerjaan bubut, milling, dan perakitan panel ditangani langsung di workshop Babelan tanpa dioper ke pihak ketiga.",
      descEn: "All lathe turning, milling, and panel assembly are executed directly in our Babelan facility with zero outsourcing.",
      metric: "0% Broker",
    },
    {
      icon: Wrench,
      titleId: "Toleransi Presisi ±0.01 mm Terkalibrasi",
      titleEn: "Verified ±0.01 mm Tolerance Standard",
      descId: "Pengecekan dimensi ketat menggunakan mikrometer dan dial test indicator sebelum barang dikirim ke pabrik Anda.",
      descEn: "Strict dimensional inspection using calibrated micrometers and dial test indicators before factory shipment.",
      metric: "±0.01 mm",
    },
    {
      icon: FileText,
      titleId: "Review Drawing & DFM Gratis",
      titleEn: "Complimentary Drawing & DFM Review",
      descId: "Kirimkan file CAD/2D Anda. Tim teknis kami siap menelaah toleransi, kesesuaian material, dan estimasi waktu kerja.",
      descEn: "Share your CAD/2D drawings. Our engineers review tolerances, material suitability, and production timelines.",
      metric: "Free DFM",
    },
    {
      icon: MapPin,
      titleId: "Kunjungan & Site Audit Terbuka",
      titleEn: "Open Client Workshop Visits",
      descId: "Tim procurement dan engineering klien dipersilakan berkunjung langsung untuk inspeksi fasilitas dan menyaksikan uji mesin.",
      descEn: "Client procurement and engineering teams are welcome to inspect our facility and witness Factory Acceptance Tests.",
      metric: "Open Audit",
    },
  ];

  // WhatsApp link tailored to the current active station
  const waMessage = encodeURIComponent(
    lang === 'id'
      ? `Halo PT. Aris Teknindo Mandiri, saya ingin konsultasi pengerjaan komponen menggunakan fasilitas ${activeFac.titleId} dan ingin mengirimkan file drawing kerja teknis.`
      : `Hello PT. Aris Teknindo Mandiri, I would like to consult on component fabrication using ${activeFac.titleEn} and share technical engineering drawings.`
  );
  const waUrl = `https://wa.me/${SITE.contact.whatsappNumber}?text=${waMessage}`;

  return (
    <section className="py-8 sm:py-16 lg:py-24 border-b border-slate-border/60 relative bg-canvas overflow-hidden">
      {/* Blueprint Grid & Ambient Animated Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[130px] pointer-events-none animate-soft-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Zone: Anti-Broker & In-House Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-6 mb-5 sm:mb-10"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-brand-red/10 border border-brand-red/30 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-semibold text-brand-light tracking-wider uppercase">
                {lang === 'id' ? data.tagId : data.tagEn}
              </span>
            </div>
            
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-tight">
              {lang === 'id' ? data.headingId : data.headingEn}
            </h2>
            <p className="text-xs sm:text-base text-slate-muted mt-2 sm:mt-3 max-w-2xl leading-relaxed hidden sm:block">
              {lang === 'id' ? data.subheadingId : data.subheadingEn}
            </p>
          </div>

          {/* Physical Verification Location Badge */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl border border-slate-border/80 bg-canvas-card/80 backdrop-blur-sm self-start lg:self-end w-full sm:w-auto"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-emerald-400" />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Babelan, Bekasi
                </span>
                <span className="inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {lang === 'id' ? "Siap Dikunjungi" : "Open for Visits"}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-muted mt-0.5 hidden sm:block">
                {lang === 'id' ? "Survei bengkel kerja terbuka untuk tim engineering & purchasing" : "Open workshop survey for engineering & purchasing teams"}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Station Selector Bar: Optimized 2x2 on Mobile, 4-Cols on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
          {data.facilities.map((fac, idx) => {
            const Icon = stationIcons[idx] || Wrench;
            const isActive = activeIdx === idx;
            return (
              <button
                key={fac.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative text-left p-2 sm:p-4 rounded-xl transition-all duration-200 border flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? "bg-canvas-card border-brand-red shadow-lg shadow-brand-red/10 ring-1 ring-brand-red/40"
                    : "bg-canvas-card/50 border-slate-border/70 hover:border-slate-subtle/80 hover:bg-canvas-card/80"
                }`}
              >
                {/* Smooth Gliding Active Indicator on Top */}
                {isActive && (
                  <motion.div 
                    layoutId="activeStationTopBar"
                    className="absolute top-0 left-0 right-0 h-[2px] sm:h-[2.5px] bg-gradient-to-r from-brand-red/60 via-brand-red to-brand-red/60 shadow-[0_0_8px_rgba(220,38,38,0.8)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <span className={`text-[8px] sm:text-[10px] font-mono font-bold tracking-wider uppercase px-1 sm:px-2 py-0.5 rounded transition-colors ${
                    isActive 
                      ? "bg-brand-red/20 text-brand-light border border-brand-red/30" 
                      : "bg-canvas text-slate-subtle border border-slate-border/50"
                  }`}>
                    STATION 0{idx + 1}
                  </span>
                  <Icon className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${isActive ? "text-brand-light" : "text-slate-subtle"}`} />
                </div>

                <div>
                  <h3 className={`text-[11px] sm:text-sm font-bold truncate transition-colors ${isActive ? "text-white" : "text-slate-200"}`}>
                    {lang === 'id' ? fac.titleId : fac.titleEn}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-muted truncate mt-0.5 hidden sm:block">
                    {lang === 'id' ? fac.roleId : fac.roleEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* The Virtual Machine Station Inspector (Split Stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch mb-8 sm:mb-12">
          
          {/* Left: Viewport with Engineering HUD Overlay & Optical Scanline (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl border border-slate-border/80 bg-canvas-card overflow-hidden shadow-2xl flex-grow flex flex-col justify-between group">
              
              {/* HUD Header Bar */}
              <div className="relative z-20 flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 bg-canvas-alt/90 backdrop-blur-md border-b border-slate-border/80">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">
                    STATION 0{activeIdx + 1} // {activeFac.id.toUpperCase()}
                  </span>
                  <span className="hidden sm:inline text-[10px] font-mono text-slate-subtle border-l border-slate-border pl-2">
                    IN-HOUSE ASSET
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 sm:px-2 py-0.5 rounded border border-emerald-500/20">
                    ● {lang === 'id' ? "OPERASIONAL" : "OPERATIONAL"}
                  </span>
                </div>
              </div>

              {/* Machine Viewport Image Stage */}
              <div className="relative flex-grow min-h-[250px] sm:min-h-[380px] lg:min-h-[430px] bg-canvas overflow-hidden flex items-center justify-center">
                
                {/* AnimatePresence for Smooth Image Transition */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeFac.id}
                    src={activeFac.image}
                    alt={activeFac.titleId}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-cover object-center absolute inset-0"
                  />
                </AnimatePresence>

                {/* Laser Optical Scanline Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
                  <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-light to-transparent animate-laser-scan shadow-[0_0_10px_rgba(239,68,68,0.9)]" />
                </div>

                {/* HUD Corner Precision Crosshairs */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-brand-red/80 pointer-events-none z-10" />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-brand-red/80 pointer-events-none z-10" />
                <div className="absolute bottom-4 left-3 sm:bottom-16 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-brand-red/80 pointer-events-none z-10" />
                <div className="absolute bottom-4 right-3 sm:bottom-16 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-brand-red/80 pointer-events-none z-10" />

                {/* Subtle Viewfinder Optical Reticle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity z-10">
                  <Crosshair className="w-12 h-12 sm:w-16 sm:h-16 text-white" strokeWidth={1} />
                </div>

                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-canvas-card/30 to-transparent pointer-events-none z-10" />

                {/* Deliverables HUD Output Tags: Visible on Desktop, Hidden on Mobile to let image breathe */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 z-20 hidden sm:block">
                  <div className="p-2 sm:p-3 rounded-xl bg-canvas-card/90 backdrop-blur-md border border-slate-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2.5 shadow-lg">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-brand-light" />
                      <span className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-200 uppercase tracking-wider">
                        {lang === 'id' ? "Output Tipikal:" : "Typical Deliverables:"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <AnimatePresence mode="wait">
                        <motion.div 
                          key={activeFac.id} 
                          initial={{ opacity: 0, y: 4 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0 }} 
                          transition={{ duration: 0.25 }}
                          className="flex flex-wrap gap-1 sm:gap-1.5"
                        >
                          {(activeFac.outputs || []).map((out, oIdx) => (
                            <span
                              key={oIdx}
                              className="text-[10px] sm:text-[11px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-canvas-hover text-slate-200 border border-slate-border/70 flex items-center gap-1 hover:border-brand-red/50 transition-colors"
                            >
                              <span className="w-1 h-1 rounded-full bg-brand-red" />
                              {out}
                            </span>
                          ))}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Technical Parameter Sheet & Action Console (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl border border-slate-border/80 bg-canvas-card p-4 sm:p-6 lg:p-7 flex-grow flex flex-col justify-between shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFac.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Station Title & Role */}
                  <div className="mb-2.5 sm:mb-4">
                    <span className="text-[9px] sm:text-xs font-mono font-bold text-brand-light tracking-widest uppercase block mb-0.5 sm:mb-1">
                      {lang === 'id' ? activeFac.roleId : activeFac.roleEn}
                    </span>
                    <h3 className="text-base sm:text-2xl font-bold sm:font-extrabold text-white tracking-tight">
                      {lang === 'id' ? activeFac.titleId : activeFac.titleEn}
                    </h3>
                    {/* Hide redundant narrative paragraph on mobile to prevent wall of words */}
                    <p className="text-xs sm:text-sm text-slate-muted mt-2 leading-relaxed hidden sm:block">
                      {lang === 'id' ? activeFac.descId : activeFac.descEn}
                    </p>
                  </div>

                  {/* Technical Specifications Matrix (Data Sheet Plate) */}
                  <div className="mb-3 sm:mb-6 p-2.5 sm:p-4 rounded-xl bg-canvas border border-slate-border/80">
                    <div className="flex items-center justify-between pb-1.5 mb-1.5 sm:pb-3 sm:mb-3 border-b border-slate-border/60">
                      <span className="text-[9px] sm:text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-sm bg-brand-red" />
                        {lang === 'id' ? "Parameter Teknis Mesin" : "Technical Parameters"}
                      </span>
                      <span className="text-[8px] sm:text-[10px] font-mono text-slate-subtle">
                        ISO FIT
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
                      {(activeFac.specs || []).map((spec, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <span className="text-[8px] sm:text-[10px] font-mono text-slate-subtle uppercase block tracking-wider truncate">
                            {lang === 'id' ? spec.labelId : spec.labelEn}
                          </span>
                          <span className="text-[11px] sm:text-sm font-semibold text-slate-100 font-mono block">
                            {spec.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Capabilities List: Top 2 on Mobile, All on Desktop */}
                  <div className="mb-3 sm:mb-6">
                    <span className="text-[9px] sm:text-[11px] font-mono font-bold text-slate-subtle uppercase tracking-wider block mb-1 sm:mb-2">
                      {lang === 'id' ? "Cakupan Pengerjaan Utama:" : "Core Machining Scope:"}
                    </span>
                    <ul className="space-y-1 sm:space-y-2">
                      {activeFac.capabilities.map((cap, cIdx) => (
                        <li key={cIdx} className={`items-start gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-slate-200 ${cIdx >= 2 ? 'hidden sm:flex' : 'flex'}`}>
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Direct Action CTA Strip - Stacked on Mobile with Big Touch Targets */}
              <div className="pt-3 sm:pt-5 border-t border-slate-border/80 flex flex-col sm:flex-row gap-2 sm:gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:py-3.5 rounded-xl bg-brand-red hover:bg-brand-hover text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-brand-red/25 group text-center"
                >
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>{lang === 'id' ? "Kirim Drawing via WhatsApp" : "Send Drawing via WhatsApp"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:py-3 rounded-xl bg-canvas-hover hover:bg-slate-active text-slate-200 hover:text-white border border-slate-border text-xs sm:text-sm font-semibold transition-all text-center"
                  >
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-muted flex-shrink-0" />
                    <span>{lang === 'id' ? "Jadwalkan Kunjungan" : "Schedule Facility Visit"}</span>
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Guarantee Strip: Anti-Broker & Physical Workshop Reassurance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {guarantees.map((item, gIdx) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: gIdx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-2.5 sm:p-5 rounded-xl border border-slate-border/70 bg-canvas-card/60 backdrop-blur-sm hover:border-slate-muted transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-canvas-hover border border-slate-border flex items-center justify-center">
                      <ItemIcon className="w-3 h-3 sm:w-4 sm:h-4 text-brand-light" />
                    </div>
                    <span className="text-[8px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-canvas border border-slate-border/80 text-emerald-400 font-bold">
                      {item.metric}
                    </span>
                  </div>
                  <h4 className="text-[11px] sm:text-sm font-semibold sm:font-bold text-white mb-0.5 sm:mb-1.5 leading-snug">
                    {lang === 'id' ? item.titleId : item.titleEn}
                  </h4>
                  {/* Hide verbose paragraph on mobile for a sleek badge look */}
                  <p className="text-[11px] sm:text-xs text-slate-muted leading-relaxed hidden sm:block">
                    {lang === 'id' ? item.descId : item.descEn}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
