import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HOME_DATA } from '../data/homeData';
import { SITE } from '../data/site';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export default function Projects() {
  const { lang } = useLanguage();
  const cases = HOME_DATA.caseStudiesSection.cases;

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
              {lang === 'id' ? "REKAM JEJAK PEKERJAAN LAPANGAN" : "FIELD CASE STUDIES & TRACK RECORD"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-xl sm:text-3xl lg:text-5xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-[1.18] mb-3 sm:mb-6"
          >
            {lang === 'id'
              ? "Dokumentasi Studi Kasus Teknis di Lini Manufaktur & Otomotif"
              : "Documented Engineering Case Studies in Manufacturing & Automotive"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {lang === 'id'
              ? "Dokumentasi pekerjaan langsung yang pernah ditangani tim PT. Aris Teknindo Mandiri, membuktikan keahlian kami pada platform industri global seperti FANUC, Allen-Bradley, hingga weighing automation."
              : "Documented project milestones executed by PT. Aris Teknindo Mandiri, highlighting technical proficiency with global platforms including FANUC, Allen-Bradley, and weighing automation."}
          </motion.p>
        </div>
      </section>

      {/* 2. Case Studies Detailed View */}
      <section className="py-8 sm:py-16 lg:py-24 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-12 relative z-10">
          {cases.map((cs, cIdx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: cIdx * 0.08 }}
              className="p-4 sm:p-8 lg:p-10 rounded-2xl border border-slate-border/80 bg-canvas-card/90 backdrop-blur-sm relative overflow-hidden shadow-xl hover:border-brand-red/50 transition-colors group"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                
                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="text-[10px] sm:text-xs font-mono uppercase text-brand-redLight bg-brand-red/10 px-2 sm:px-2.5 py-0.5 rounded border border-brand-red/20 font-semibold">
                        {cs.category}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {cs.badge}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 group-hover:text-brand-light transition-colors leading-snug">
                      {lang === 'id' ? cs.titleId : cs.titleEn}
                    </h2>

                    <div className="text-[11px] sm:text-xs font-mono text-slate-400 mb-4 sm:mb-6">
                      <span>{lang === 'id' ? "Sistem: " : "System: "}</span>
                      <span className="text-slate-200 font-semibold">{lang === 'id' ? cs.systemId : cs.systemEn}</span>
                    </div>

                    <div className="space-y-2.5 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="p-3 sm:p-4 rounded-xl bg-canvas-subtle/80 border border-slate-border/60">
                        <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                          {lang === 'id' ? "Lingkup Pekerjaan & Tindakan Teknis" : "Scope & Engineering Actions"}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {lang === 'id' ? cs.scopeId : cs.scopeEn}
                        </p>
                      </div>

                      <div className="p-3 sm:p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                        <span className="text-[10px] sm:text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                          {lang === 'id' ? "Dampak di Lini Pabrik" : "Plant Operational Impact"}
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                          {lang === 'id' ? cs.impactId : cs.impactEn}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <span className="text-[10px] sm:text-xs font-mono text-slate-400 block mb-2">
                        Hardware & Platform Terkait
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {cs.brandsInvolved.map((b, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-canvas text-[11px] sm:text-xs font-mono text-slate-300 border border-slate-700/60"
                          >
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-border/60 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-brand-red hover:bg-brand-redDark text-white text-xs sm:text-sm font-semibold shadow-md transition-all text-center w-full sm:w-auto"
                      >
                        <span>{lang === 'id' ? "Diskusikan Proyek Serupa" : "Discuss Similar Project"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <a
                        href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(`Halo tim teknis PT ATM, kami ingin mendiskusikan kebutuhan terkait proyek: ${cs.titleId}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white hover:bg-canvas-subtle transition-all text-center w-full sm:w-auto"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Konsultasi Teknis</span>
                      </a>
                    </motion.div>
                  </div>

                </div>

                {/* Media Column */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3 w-full">
                  {cs.images.map((img, iIdx) => (
                    <div key={iIdx} className="rounded-xl overflow-hidden border border-slate-border bg-canvas shadow-lg relative group/img">
                      <img src={img} alt={cs.titleId} className="w-full h-44 sm:h-52 object-cover object-center group-hover/img:scale-105 transition-transform duration-700" />
                      <div className="p-2 bg-canvas-card/95 border-t border-slate-border/60 text-[10px] font-mono text-slate-400 text-right">
                        Dokumentasi Lapangan Riil ATM
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
