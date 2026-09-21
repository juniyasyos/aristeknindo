import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { HOME_DATA } from '../data/homeData';
import { SITE } from '../data/site';
import { CheckCircle2, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

export default function Projects() {
  const { lang } = useLanguage();
  const cases = HOME_DATA.caseStudiesSection.cases;

  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:py-20 border-b border-slate-border/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3 block">
            {lang === 'id' ? "REKAM JEJAK PEKERJAAN LAPANGAN" : "FIELD CASE STUDIES & TRACK RECORD"}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'id'
              ? "Studi Kasus Teknis: Pekerjaan Nyata di Lini Industri Manufaktur & Otomotif"
              : "Technical Case Studies: Proven Results Across Automotive & Industrial Plants"}
          </h1>
          <p className="text-base sm:text-lg text-slate-muted max-w-3xl mx-auto leading-relaxed">
            {lang === 'id'
              ? "Dokumentasi pekerjaan langsung yang pernah ditangani tim PT. Aris Teknindo Mandiri, membuktikan keahlian kami pada platform industri global seperti FANUC, Allen-Bradley, hingga weighing automation."
              : "Documented project milestones executed by PT. Aris Teknindo Mandiri, highlighting technical proficiency with global platforms including FANUC, Allen-Bradley, and weighing automation."}
          </p>
        </div>
      </section>

      {/* Case Studies Detailed View */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-10 rounded-2xl border border-slate-border bg-canvas-card"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-mono uppercase text-brand-redLight bg-brand-red/10 px-2.5 py-0.5 rounded border border-brand-red/20">
                      {cs.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {cs.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {lang === 'id' ? cs.titleId : cs.titleEn}
                  </h2>

                  <div className="text-xs font-mono text-slate-subtle mb-6">
                    <span>{lang === 'id' ? "Sistem: " : "System: "}</span>
                    <span className="text-slate-200">{lang === 'id' ? cs.systemId : cs.systemEn}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-canvas-subtle/80 border border-slate-border/60">
                      <span className="text-xs font-mono text-slate-subtle uppercase tracking-wider block mb-1">
                        {lang === 'id' ? "Lingkup Pekerjaan & Tindakan Teknis:" : "Scope & Engineering Actions:"}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {lang === 'id' ? cs.scopeId : cs.scopeEn}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                      <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                        {lang === 'id' ? "Dampak di Lini Pabrik:" : "Plant Operational Impact:"}
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                        {lang === 'id' ? cs.impactId : cs.impactEn}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono text-slate-subtle block mb-2">
                      Hardware & Platform Terkait:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cs.brandsInvolved.map((b, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2.5 py-1 rounded bg-canvas text-xs font-mono text-slate-300 border border-slate-border"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-border/60 flex items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-redDark text-white text-xs font-semibold shadow-md transition-all"
                    >
                      <span>{lang === 'id' ? "Diskusikan Proyek Serupa" : "Discuss Similar Project"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {cs.images.map((img, iIdx) => (
                    <div key={iIdx} className="rounded-xl overflow-hidden border border-slate-border bg-canvas shadow-lg">
                      <img src={img} alt={cs.titleId} className="w-full h-52 object-cover object-center" />
                      <div className="p-2 bg-canvas-card border-t border-slate-border/60 text-[10px] font-mono text-slate-subtle text-right">
                        Foto Lapangan Riil ATM
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
