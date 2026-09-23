import React from 'react';
import { Link } from 'react-router-dom';
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
  ShieldAlert
} from 'lucide-react';

export default function Services() {
  const { lang } = useLanguage();
  const pillars = HOME_DATA.pillarsSection.pillars;
  const facilities = HOME_DATA.workshopSection.facilities;

  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:py-20 border-b border-slate-border/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3 block">
            {lang === 'id' ? "KAPABILITAS & FASILITAS REKAYASA" : "ENGINEERING CAPABILITIES & WORKSHOP"}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'id'
              ? "Layanan Permesinan Presisi dan Kontraktor Otomasi PLC Terintegrasi"
              : "Integrated Precision Machining & Turnkey PLC Contracting"}
          </h1>
          <p className="text-base sm:text-lg text-slate-muted max-w-3xl mx-auto leading-relaxed">
            {lang === 'id'
              ? "PT. Aris Teknindo Mandiri memiliki fasilitas workshop mandiri di Babelan, Bekasi yang siap mengeksekusi pengerjaan suku cadang, instalasi kelistrikan, dan integrasi kontrol mesin tanpa ketergantungan pihak ketiga."
              : "PT. Aris Teknindo Mandiri operates an in-house workshop facility in Babelan, Bekasi, ready to manufacture precision components, execute electrical installations, and program industrial automation."}
          </p>
        </div>
      </section>

      {/* 4 Pillars In-Depth */}
      <section className="py-16 lg:py-20 border-b border-slate-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {pillars.map((p, idx) => (
            <div
              key={p.id}
              id={p.id}
              className="scroll-mt-28 p-6 sm:p-10 rounded-2xl border border-slate-border bg-canvas-card relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-2xl font-black text-brand-red">{p.number}</span>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-subtle bg-slate-border/40 px-2.5 py-0.5 rounded">
                      {lang === 'id' ? p.badgeId : p.badgeEn}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {lang === 'id' ? p.headlineId : p.headlineEn}
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 rounded-xl bg-canvas-subtle/80 border border-amber-500/20">
                      <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-1">
                        {lang === 'id' ? "Tantangan Lapangan" : "Operational Challenge"}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-muted">
                        {lang === 'id' ? p.problemId : p.problemEn}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-canvas-subtle/80 border border-emerald-500/20">
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-1">
                        {lang === 'id' ? "Solusi Pengerjaan ATM" : "ATM Engineering Solution"}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-muted">
                        {lang === 'id' ? p.solutionId : p.solutionEn}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-subtle block mb-3">
                      {lang === 'id' ? "Lingkup & Output Pengerjaan" : "Scope & Deliverables"}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {p.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                          <span>{lang === 'id' ? item.id : item.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-border/60 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-redDark text-white text-xs font-semibold shadow-md transition-all"
                    >
                      <span>{lang === 'id' ? "Minta Penawaran Layanan Ini" : "Request RFQ for This Service"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(`Halo tim teknis PT ATM, kami ingin mendiskusikan kebutuhan: ${p.titleId}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white hover:bg-canvas-subtle transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Engineer</span>
                    </a>
                  </div>

                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-slate-border bg-canvas shadow-xl">
                    <img
                      src={p.image}
                      alt={p.titleId}
                      className="w-full h-72 object-cover object-center"
                    />
                    <div className="p-3 bg-canvas-card border-t border-slate-border flex items-center justify-between text-xs text-slate-muted">
                      <span>{p.titleId}</span>
                      <span className="text-emerald-400 font-mono">Babelan Facility</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Equipment Specs */}
      <section className="py-16 lg:py-20 bg-canvas-subtle/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? "FASILITAS WORKSHOP MANDIRI" : "IN-HOUSE WORKSHOP MACHINERY"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              {lang === 'id'
                ? "Daftar Peralatan & Kapasitas Mesin di Workshop Babelan"
                : "Equipment & Capacity Roster at Babelan Workshop"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac) => (
              <div key={fac.id} className="p-5 rounded-xl border border-slate-border bg-canvas-card flex flex-col">
                <div className="h-40 rounded-lg overflow-hidden mb-4 bg-canvas">
                  <img src={fac.image} alt={fac.titleId} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {lang === 'id' ? fac.titleId : fac.titleEn}
                </h3>
                <span className="text-xs font-medium text-brand-redLight mb-3">
                  {lang === 'id' ? fac.roleId : fac.roleEn}
                </span>
                <p className="text-xs text-slate-muted mb-4 flex-grow">
                  {lang === 'id' ? fac.descId : fac.descEn}
                </p>
                <div className="pt-3 border-t border-slate-border/50 space-y-1">
                  {fac.capabilities.map((c, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="truncate">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
