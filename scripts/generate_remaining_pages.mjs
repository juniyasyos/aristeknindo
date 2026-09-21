import fs from 'fs';
import path from 'path';

const pages = {};

// 1. About.jsx
pages['About.jsx'] = `import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ABOUT_DATA } from '../../data/aboutData';
import { SITE } from '../../data/site';
import { 
  Building2, 
  CheckCircle2, 
  Target, 
  Compass, 
  Quote, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Sparkles, 
  Wrench, 
  FileText, 
  MessageSquare,
  MapPin,
  FileCheck
} from 'lucide-react';

export default function About() {
  const { lang } = useLanguage();
  const data = ABOUT_DATA;

  return (
    <div className="flex flex-col">
      
      {/* 1. Header Banner */}
      <section className="relative pt-12 pb-16 lg:py-20 border-b border-slate-border/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-brand-red/30 mb-6">
            <ShieldCheck className="w-4 h-4 text-brand-red" />
            <span className="font-mono text-xs text-brand-redLight uppercase tracking-wider font-semibold">
              {lang === 'id' ? data.header.badgeId : data.header.badgeEn}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
            {lang === 'id' ? data.header.titleId : data.header.titleEn}
          </h1>

          <p className="text-base sm:text-lg text-slate-muted max-w-3xl mx-auto leading-relaxed">
            {lang === 'id' ? data.header.descriptionId : data.header.descriptionEn}
          </p>
        </div>
      </section>

      {/* 2. Narrative & Engineering Roots */}
      <section className="py-16 lg:py-20 border-b border-slate-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
                {lang === 'id' ? data.narrative.tagId : data.narrative.tagEn}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6 leading-snug">
                {lang === 'id' ? data.narrative.headingId : data.narrative.headingEn}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-muted leading-relaxed">
                <p>{lang === 'id' ? data.narrative.p1Id : data.narrative.p1En}</p>
                <p>{lang === 'id' ? data.narrative.p2Id : data.narrative.p2En}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-border/50 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-xs text-slate-subtle block mb-1">Badan Hukum</span>
                  <span className="text-sm font-mono font-bold text-white">PT Resmi</span>
                </div>
                <div>
                  <span className="text-xs text-slate-subtle block mb-1">Nomor Registrasi</span>
                  <span className="text-sm font-mono font-bold text-emerald-400">1280189</span>
                </div>
                <div>
                  <span className="text-xs text-slate-subtle block mb-1">Lokasi Workshop</span>
                  <span className="text-sm font-mono font-bold text-white">Babelan, Bekasi</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-border bg-canvas-card shadow-2xl relative group">
                <img
                  src={data.narrative.image}
                  alt="ATM Engineering Roots"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="p-4 bg-canvas-card border-t border-slate-border/70 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-mono">Fasilitas Workshop Babelan</span>
                  <span className="text-emerald-400 font-mono">Operasional Mandiri</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-16 lg:py-20 bg-canvas-subtle/30 border-b border-slate-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? data.visionMission.tagId : data.visionMission.tagEn}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              {lang === 'id' ? data.visionMission.headingId : data.visionMission.headingEn}
            </h2>
          </div>

          {/* Vision Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-canvas-card via-canvas-card to-canvas border border-brand-red/30 shadow-xl mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 rounded-xl bg-brand-red/20 text-brand-red flex-shrink-0 mt-1">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-brand-redLight font-bold tracking-wider block mb-2">
                  {lang === 'id' ? "VISI PERUSAHAAN" : "CORPORATE VISION"}
                </span>
                <p className="text-base sm:text-xl font-medium text-white leading-relaxed">
                  "{lang === 'id' ? data.visionMission.visionId : data.visionMission.visionEn}"
                </p>
              </div>
            </div>
          </div>

          {/* 3 Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.visionMission.missions.map((m) => (
              <div
                key={m.number}
                className="p-6 rounded-xl border border-slate-border bg-canvas-card hover:border-slate-muted transition-all flex flex-col"
              >
                <span className="font-mono text-2xl font-black text-brand-red mb-3">
                  {m.number}
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {lang === 'id' ? m.titleId : m.titleEn}
                </h3>
                <p className="text-xs text-slate-muted leading-relaxed flex-grow">
                  {lang === 'id' ? m.descId : m.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Director's Statement (Wibawa & Tanggung Jawab) */}
      <section className="py-16 lg:py-24 border-b border-slate-border/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Director Portrait (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative rounded-2xl overflow-hidden border border-slate-border bg-canvas-card shadow-2xl w-full max-w-sm">
                <img
                  src={data.directorStatement.image}
                  alt="Direktur Utama PT. Aris Teknindo Mandiri"
                  className="w-full h-[420px] object-cover object-top"
                />
                <div className="p-4 bg-canvas-card/95 border-t border-slate-border/80">
                  <span className="text-xs font-mono uppercase text-brand-red font-semibold block">
                    {lang === 'id' ? data.directorStatement.signerTitleId : data.directorStatement.signerTitleEn}
                  </span>
                  <span className="text-xs text-slate-muted">
                    {SITE.name} — {lang === 'id' ? data.directorStatement.signerLocId : data.directorStatement.signerLocEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote & Commitment (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-red uppercase tracking-wider mb-3">
                <Quote className="w-4 h-4" />
                <span>{lang === 'id' ? data.directorStatement.tagId : data.directorStatement.tagEn}</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                {lang === 'id' ? data.directorStatement.headingId : data.directorStatement.headingEn}
              </h2>

              <div className="relative pl-6 border-l-2 border-brand-red mb-8">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed italic">
                  "{lang === 'id' ? data.directorStatement.quoteId : data.directorStatement.quoteEn}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-border/50">
                <p className="text-sm font-bold text-white">
                  {lang === 'id' ? data.directorStatement.signerTitleId : data.directorStatement.signerTitleEn}
                </p>
                <p className="text-xs text-slate-muted">
                  PT. Aris Teknindo Mandiri (Reg. No. 1280189)
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 4 Core Engineering Values */}
      <section className="py-16 lg:py-20 bg-canvas-subtle/30 border-b border-slate-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? "ETIKA & NILAI KERJA" : "CORE ENGINEERING VALUES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              {lang === 'id' 
                ? "4 Prinsip Operasional yang Menjaga Kepercayaan Pabrik Rekanan" 
                : "4 Operational Principles Safeguarding Client Trust"}
            </h2>
            <p className="text-sm text-slate-muted">
              {lang === 'id'
                ? "Bukan nilai klise, melainkan komitmen operasional nyata yang kami terapkan di workshop dan di lapangan:"
                : "Actionable engineering commitments upheld in our workshop and on client plant floors:"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.coreValues.map((val) => (
              <div
                key={val.number}
                className="p-6 rounded-xl border border-slate-border bg-canvas-card hover:border-brand-red/50 transition-all flex flex-col group"
              >
                <span className="font-mono text-3xl font-black text-brand-red/70 group-hover:text-brand-red mb-3">
                  {val.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {lang === 'id' ? val.titleId : val.titleEn}
                </h3>
                <span className="text-xs font-medium text-brand-redLight mb-3">
                  {lang === 'id' ? val.subId : val.subEn}
                </span>
                <p className="text-xs text-slate-muted leading-relaxed flex-grow">
                  {lang === 'id' ? val.descId : val.descEn}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Legalitas & Kepatuhan Badan Hukum */}
      <section className="py-16 lg:py-20 border-b border-slate-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? data.legalVerification.tagId : data.legalVerification.tagEn}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">
              {lang === 'id' ? data.legalVerification.headingId : data.legalVerification.headingEn}
            </h2>
            <p className="text-sm text-slate-muted">
              {lang === 'id' ? data.legalVerification.subheadingId : data.legalVerification.subheadingEn}
            </p>
          </div>

          {/* Legal Data Table */}
          <div className="rounded-2xl border border-slate-border bg-canvas-card overflow-hidden shadow-xl">
            <div className="divide-y divide-slate-border/60">
              {data.legalVerification.fields.map((f, idx) => (
                <div key={idx} className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-center">
                  <div className="sm:col-span-4">
                    <span className="text-xs font-mono text-slate-subtle uppercase">
                      {lang === 'id' ? f.labelId : f.labelEn}
                    </span>
                  </div>
                  <div className="sm:col-span-8">
                    <span className="text-sm font-semibold text-slate-200">
                      {f.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. Vendor Verification CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-canvas to-canvas-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-redLight font-mono text-xs mb-6">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Vendor Enrollment & Facility Survey</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            {lang === 'id' ? data.ctaVendor.headingId : data.ctaVendor.headingEn}
          </h2>

          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            {lang === 'id' ? data.ctaVendor.descId : data.ctaVendor.descEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-semibold text-sm shadow-lg shadow-brand-red/25 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'id' ? data.ctaVendor.ctaDocId : data.ctaVendor.ctaDocEn}</span>
            </Link>

            <a
              href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent("Halo Manajemen PT. Aris Teknindo Mandiri, kami ingin menjadwalkan kunjungan verifikasi workshop / meminta formulir rekanan vendor pabrik.")}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-canvas-card hover:bg-canvas-subtle border border-slate-border text-white font-semibold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'id' ? data.ctaVendor.ctaVisitId : data.ctaVendor.ctaVisitEn}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
`;

// 2. Services.jsx
pages['Services.jsx'] = `import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
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
              ? "Layanan Rekayasa Terintegrasi: Dari Machining Presisi Hingga Kontraktor PLC"
              : "Integrated Engineering: In-House Machining to Turnkey PLC Contracting"}
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
                        {lang === 'id' ? "Tantangan Pabrik:" : "Operational Challenge:"}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-muted">
                        {lang === 'id' ? p.problemId : p.problemEn}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-canvas-subtle/80 border border-emerald-500/20">
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-1">
                        {lang === 'id' ? "Solusi Eksekusi ATM:" : "ATM Execution Solution:"}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-muted">
                        {lang === 'id' ? p.solutionId : p.solutionEn}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-subtle block mb-3">
                      {lang === 'id' ? "Output & Deliverables Teknis:" : "Deliverables & Scope:"}
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
                      href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent(\`Halo tim teknis PT ATM, kami ingin mendiskusikan kebutuhan: \${p.titleId}\`)}\`}
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
`;

// 3. Products.jsx
pages['Products.jsx'] = `import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SITE } from '../../data/site';
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
              href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent("Halo tim supply PT ATM, kami ingin menanyakan stok / penawaran harga untuk Part Number berikut:")}\`}
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
                className={\`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all \${
                  activeCategory === 'all'
                    ? 'bg-brand-red text-white'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }\`}
              >
                {lang === 'id' ? "Semua Brand (29)" : "All Brands (29)"}
              </button>
              <button
                onClick={() => setActiveCategory('automation')}
                className={\`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all \${
                  activeCategory === 'automation'
                    ? 'bg-brand-red text-white'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }\`}
              >
                {lang === 'id' ? "Otomasi & Kontrol (16)" : "Automation & Control (16)"}
              </button>
              <button
                onClick={() => setActiveCategory('mechanical')}
                className={\`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all \${
                  activeCategory === 'mechanical'
                    ? 'bg-brand-red text-white'
                    : 'bg-canvas-card border border-slate-border text-slate-300 hover:bg-canvas-subtle'
                }\`}
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
                    href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent(\`Halo tim supply PT ATM, kami ingin meminta penawaran harga untuk suku cadang brand: \${b.name}\`)}\`}
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
`;

// 4. Projects.jsx
pages['Projects.jsx'] = `import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
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
`;

// 5. Contact.jsx
pages['Contact.jsx'] = `import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SITE } from '../../data/site';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle2, 
  Upload, 
  ShieldCheck 
} from 'lucide-react';

export default function Contact() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    picName: '',
    phone: '',
    email: '',
    serviceType: 'machining',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Construct WhatsApp message URL for direct send option
    const text = \`Halo PT. Aris Teknindo Mandiri, kami ingin mengajukan Request for Quotation (RFQ):\\n- Perusahaan: \${formData.company}\\n- PIC: \${formData.picName}\\n- Kontak: \${formData.phone}\\n- Kebutuhan: \${formData.serviceType}\\n- Detail: \${formData.description}\`;
    window.open(\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent(text)}\`, '_blank');
  };

  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:py-20 border-b border-slate-border/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3 block">
            {lang === 'id' ? "RESPON TEKNIS & PENAWARAN HARGA" : "TECHNICAL INQUIRY & RFQ"}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'id'
              ? "Hubungi Tim Rekayasa & Workshop Kami"
              : "Connect with Our Engineering & Workshop Team"}
          </h1>
          <p className="text-base sm:text-lg text-slate-muted max-w-3xl mx-auto leading-relaxed">
            {lang === 'id'
              ? "Kirimkan gambar teknik part CAD/PDF atau deskripsi masalah otomasi pabrik Anda. Kami siap menelaah spesifikasi dan menerbitkan penawaran harga resmi."
              : "Submit your CAD/PDF drawings or automation challenge. Our team will review specs and provide a comprehensive formal quotation."}
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Info Right */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-canvas-card border border-slate-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {lang === 'id' ? "Formulir Request for Quotation (RFQ)" : "Request for Quotation (RFQ) Form"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted mb-8">
                {lang === 'id'
                  ? "Isi data kebutuhan pabrik Anda untuk penanganan cepat oleh engineer ATM:"
                  : "Complete your plant requirements for fast evaluation by our engineers:"}
              </p>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    {lang === 'id'
                      ? "Formulir berhasil diproses! WhatsApp terbuka untuk konfirmasi langsung ke engineer."
                      : "Form processed! Opening WhatsApp for instant direct technical follow-up."}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "Nama Pabrik / Perusahaan *" : "Company / Plant Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. PT. Manufaktur Otomotif"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "Nama PIC / Departemen *" : "PIC Name / Department *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      placeholder="e.g. Bpk. Hendra (Maintenance)"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "No. WhatsApp Aktif *" : "Active WhatsApp Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0812XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "Email Kantor" : "Work Email"}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="pic@company.co.id"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                    {lang === 'id' ? "Jenis Kebutuhan Utama *" : "Primary Requirement Scope *"}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white focus:outline-none focus:border-brand-red"
                  >
                    <option value="machining">Machining Presisi & Spare Part (Bubut/CNC)</option>
                    <option value="automation">Kontraktor Otomasi PLC & Perakitan Panel</option>
                    <option value="fabrication">Fabrikasi Konveyor, Rangka Mesin & Cable Tray</option>
                    <option value="sourcing">Pengadaan Komponen Impor on-Demand</option>
                    <option value="troubleshoot">Penanganan Masalah / Downtime Darurat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                    {lang === 'id' ? "Rincian Gambar Teknik / Spesifikasi *" : "Drawing Specs / Description *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={lang === 'id' 
                      ? "Jelaskan nama part, jumlah, toleransi, atau lampiran kode part/prinsipal yang dicari..." 
                      : "Describe part name, quantity, tolerances, or serial numbers..."}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-canvas-subtle border border-slate-border/70 flex items-center justify-between text-xs text-slate-subtle">
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-brand-red" />
                    {lang === 'id' ? "Drawing CAD/PDF dapat dikirim langsung via WhatsApp setelah submit" : "CAD/PDF blueprints can be forwarded directly via WhatsApp"}
                  </span>
                  <span className="font-mono text-emerald-400">Secure</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-red/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'id' ? "Kirim Permintaan & Teruskan ke WhatsApp" : "Submit RFQ & Forward to WhatsApp"}</span>
                </button>

              </form>
            </div>

            {/* Contact Information & Workshop Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl border border-slate-border bg-canvas-card shadow-xl">
                <h3 className="text-base font-bold text-white mb-4">
                  {lang === 'id' ? "Informasi Kontak Operasional" : "Direct Operational Contact"}
                </h3>

                <div className="space-y-4 text-xs text-slate-muted">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Workshop & Kantor:</span>
                      <span>{SITE.contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Telepon Teknis:</span>
                      <span>{SITE.contact.phoneDisplay} / {SITE.contact.phoneSecondary}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Email Penawaran & Tender:</span>
                      <span className="font-mono text-slate-300">{SITE.contact.emailSales}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Jam Operasional:</span>
                      <span>{lang === 'id' ? SITE.contact.hoursId : SITE.contact.hoursEn}</span>
                      <span className="text-[11px] text-amber-400 block mt-1">
                        * {lang === 'id' ? SITE.contact.emergencyNoteId : SITE.contact.emergencyNoteEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Fast Response WhatsApp</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {lang === 'id' ? "Diskusi Langsung dengan Tim Lapangan" : "Direct Chat with Field Engineers"}
                  </h4>
                  <p className="text-xs text-slate-muted mb-4">
                    {lang === 'id'
                      ? "Punya kendala darurat mesin mati di pabrik? Hubungi nomor on-call teknisi kami sekarang."
                      : "Experiencing emergency line stoppage? Contact our on-call technician immediately."}
                  </p>
                </div>

                <a
                  href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent("Halo teknisi PT. Aris Teknindo Mandiri, kami butuh diskusi teknis darurat.")}\`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Langsung: {SITE.contact.phoneDisplay}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
`;

// 6. App.jsx
pages['App.jsx'] = `import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
`;

// 7. main.jsx
pages['main.jsx'] = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
`;

// Write all pages
const pagesDir = path.join(process.cwd(), 'app/src/pages');
fs.mkdirSync(pagesDir, { recursive: true });

for (const [filename, content] of Object.entries(pages)) {
  if (filename === 'App.jsx') {
    fs.writeFileSync(path.join(process.cwd(), 'app/src/App.jsx'), content, 'utf-8');
    console.log('Written app/src/App.jsx');
  } else if (filename === 'main.jsx') {
    fs.writeFileSync(path.join(process.cwd(), 'app/src/main.jsx'), content, 'utf-8');
    console.log('Written app/src/main.jsx');
  } else {
    fs.writeFileSync(path.join(pagesDir, filename), content, 'utf-8');
    console.log("Written app/src/pages/" + filename);
  }
}


