import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudiesSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.caseStudiesSection;

  return (
    <section className="py-8 sm:py-16 lg:py-24 border-b border-slate-border/60 relative bg-canvas overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-6 sm:mb-12"
        >
          <span className="text-[10px] sm:text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
            {lang === 'id' ? data.tagId : data.tagEn}
          </span>
          <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold sm:font-extrabold text-white mt-1.5 sm:mt-2 mb-2 sm:mb-4 tracking-tight">
            {lang === 'id' ? data.headingId : data.headingEn}
          </h2>
          <p className="text-xs sm:text-base text-slate-muted hidden sm:block">
            {lang === 'id' ? data.subheadingId : data.subheadingEn}
          </p>
        </motion.div>

        {/* Case Study Cards Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {data.cases.map((cs, cIdx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: cIdx * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-slate-border bg-canvas-card overflow-hidden hover:border-slate-muted transition-colors flex flex-col group shadow-xl"
            >
              <div className="grid grid-cols-2 gap-2 p-2 sm:p-3 bg-canvas border-b border-slate-border/50">
                {cs.images.slice(0, 2).map((img, iIdx) => (
                  <div key={iIdx} className="h-28 sm:h-44 rounded-lg overflow-hidden bg-canvas-subtle relative">
                    <img
                      src={img}
                      alt={cs.titleId}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="p-3.5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2.5 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-brand-redLight bg-brand-red/10 px-2 py-0.5 rounded border border-brand-red/20">
                    {cs.category}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                    {cs.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-brand-light transition-colors leading-snug">
                  {lang === 'id' ? cs.titleId : cs.titleEn}
                </h3>
                
                <div className="text-[10px] sm:text-xs font-mono text-slate-subtle mb-2.5 sm:mb-4">
                  <span>{lang === 'id' ? "Sistem: " : "System: "}</span>
                  <span className="text-slate-200">{lang === 'id' ? cs.systemId : cs.systemEn}</span>
                </div>

                {/* Scope of Work: Visible on Desktop, Hidden on Mobile to reduce text density */}
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-canvas-subtle/80 border border-slate-border/60 mb-2.5 sm:mb-4 hidden sm:block">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-subtle uppercase tracking-wider block mb-1">
                    {lang === 'id' ? "Lingkup Pekerjaan:" : "Scope of Work:"}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'id' ? cs.scopeId : cs.scopeEn}
                  </p>
                </div>

                {/* Field Impact: High Priority Outcome on all viewports */}
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-canvas-subtle/80 border border-slate-border/60 mb-3 sm:mb-6 flex-grow">
                  <span className="text-[9px] sm:text-[11px] font-mono text-slate-subtle uppercase tracking-wider block mb-1">
                    {lang === 'id' ? "Dampak & Hasil di Lapangan:" : "Field Impact:"}
                  </span>
                  <p className="text-[11px] sm:text-xs text-emerald-300 leading-relaxed">
                    {lang === 'id' ? cs.impactId : cs.impactEn}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-slate-border/50 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {cs.brandsInvolved.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 rounded bg-canvas font-mono text-[10px] text-slate-muted border border-slate-border"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  <span className="sm:hidden text-[10px] font-mono text-slate-400">
                    Selesai & Beroperasi
                  </span>

                  <Link
                    to="/projects"
                    className="text-xs font-semibold text-brand-redLight hover:text-white inline-flex items-center gap-1 group/link py-1 ml-auto sm:ml-0"
                  >
                    <span>{lang === 'id' ? "Dokumentasi Lengkap" : "View Case"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
