import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HOME_DATA } from '../data/homeData';
import { SITE } from '../data/site';
import { 
  Wrench, 
  Cpu, 
  Layers, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Building2,
  Check
} from 'lucide-react';

export default function Services() {
  const { lang } = useLanguage();
  const pillars = HOME_DATA.pillarsSection.pillars;
  const facilities = HOME_DATA.workshopSection.facilities;

  return (
    <div className="flex flex-col">
      
      {/* 1. Header Banner */}
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
            <span className="font-mono text-[10px] sm:text-xs text-brand-redLight uppercase tracking-wider font-semibold">
              {lang === 'id' ? "KAPABILITAS & FASILITAS REKAYASA" : "ENGINEERING CAPABILITIES & WORKSHOP"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-xl sm:text-3xl lg:text-5xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-[1.18] mb-3 sm:mb-6"
          >
            {lang === 'id'
              ? "Layanan Permesinan Presisi dan Kontraktor Otomasi PLC Terintegrasi"
              : "Integrated Precision Machining & Turnkey PLC Contracting"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {lang === 'id'
              ? "PT. Aris Teknindo Mandiri memiliki fasilitas workshop mandiri di Babelan, Bekasi yang siap mengeksekusi pengerjaan suku cadang, instalasi kelistrikan, dan integrasi kontrol mesin tanpa ketergantungan pihak ketiga."
              : "PT. Aris Teknindo Mandiri operates an in-house workshop facility in Babelan, Bekasi, ready to manufacture precision components, execute electrical installations, and program industrial automation."}
          </motion.p>
        </div>
      </section>

      {/* 2. 4 Pillars In-Depth */}
      <section className="py-8 sm:py-16 lg:py-24 border-b border-slate-border/60 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12 relative z-10">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.id}
              id={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="scroll-mt-24 p-4 sm:p-8 lg:p-10 rounded-2xl border border-slate-border/80 bg-canvas-card/90 backdrop-blur-sm relative overflow-hidden shadow-xl group hover:border-brand-red/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                
                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="font-mono text-xl sm:text-2xl font-black text-brand-red">{p.number}</span>
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 bg-slate-800/80 border border-slate-700 px-2 sm:px-2.5 py-0.5 rounded">
                        {lang === 'id' ? p.badgeId : p.badgeEn}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-5 group-hover:text-brand-light transition-colors leading-snug">
                      {lang === 'id' ? p.headlineId : p.headlineEn}
                    </h2>

                    <div className="space-y-2.5 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="p-3 sm:p-4 rounded-xl bg-canvas-subtle/80 border border-amber-500/20">
                        <span className="text-[10px] sm:text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                          {lang === 'id' ? "Tantangan Lapangan" : "Operational Challenge"}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {lang === 'id' ? p.problemId : p.problemEn}
                        </p>
                      </div>

                      <div className="p-3 sm:p-4 rounded-xl bg-canvas-subtle/80 border border-emerald-500/20">
                        <span className="text-[10px] sm:text-xs font-mono text-emerald-400 font-bold uppercase block mb-1">
                          {lang === 'id' ? "Solusi Pengerjaan ATM" : "ATM Engineering Solution"}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {lang === 'id' ? p.solutionId : p.solutionEn}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 sm:mb-3">
                        {lang === 'id' ? "Lingkup & Output Pengerjaan" : "Scope & Deliverables"}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5">
                        {p.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{lang === 'id' ? item.id : item.en}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-brand-red hover:bg-brand-redDark text-white text-xs sm:text-sm font-semibold shadow-md transition-all text-center w-full sm:w-auto"
                      >
                        <span>{lang === 'id' ? "Minta Penawaran Layanan Ini" : "Request RFQ for This Service"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <a
                        href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(`Halo tim teknis PT ATM, kami ingin mendiskusikan kebutuhan: ${p.titleId}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white hover:bg-canvas-subtle transition-all text-center w-full sm:w-auto"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>WhatsApp Engineer</span>
                      </a>
                    </motion.div>
                  </div>

                </div>

                {/* Media Column */}
                <div className="lg:col-span-5 w-full">
                  <div className="rounded-xl overflow-hidden border border-slate-border bg-canvas shadow-xl relative group/img">
                    <img
                      src={p.image}
                      alt={p.titleId}
                      className="w-full h-48 sm:h-72 object-cover object-center group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="p-2.5 sm:p-3 bg-canvas-card/95 border-t border-slate-border flex items-center justify-between text-[11px] sm:text-xs text-slate-300">
                      <span className="font-medium truncate mr-2">{p.titleId}</span>
                      <span className="text-emerald-400 font-mono shrink-0">Babelan Facility</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Workshop Equipment Specs */}
      <section className="py-8 sm:py-16 lg:py-20 bg-canvas-subtle/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-6 sm:mb-12"
          >
            <span className="text-[10px] sm:text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? "FASILITAS WORKSHOP MANDIRI" : "IN-HOUSE WORKSHOP MACHINERY"}
            </span>
            <h2 className="text-lg sm:text-3xl font-bold sm:font-extrabold text-white mt-1.5 sm:mt-2 mb-2 sm:mb-4 tracking-tight">
              {lang === 'id'
                ? "Daftar Peralatan & Kapasitas Mesin di Workshop Babelan"
                : "Equipment & Capacity Roster at Babelan Workshop"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {facilities.map((fac, idx) => (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-5 rounded-xl border border-slate-border bg-canvas-card flex flex-col hover:border-brand-red/50 transition-colors shadow-lg relative group overflow-hidden"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-32 sm:h-40 rounded-lg overflow-hidden mb-3 sm:mb-4 bg-canvas">
                  <img src={fac.image} alt={fac.titleId} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1 group-hover:text-brand-light transition-colors">
                  {lang === 'id' ? fac.titleId : fac.titleEn}
                </h3>
                <span className="text-[11px] sm:text-xs font-medium text-brand-redLight mb-2 sm:mb-3">
                  {lang === 'id' ? fac.roleId : fac.roleEn}
                </span>
                <p className="text-xs text-slate-muted mb-3 sm:mb-4 flex-grow leading-relaxed">
                  {lang === 'id' ? fac.descId : fac.descEn}
                </p>
                <div className="pt-2.5 sm:pt-3 border-t border-slate-border/50 space-y-1">
                  {fac.capabilities.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{c}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
