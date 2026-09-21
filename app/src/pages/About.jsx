import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_DATA } from '../data/aboutData';
import { SITE } from '../data/site';
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
              href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo Manajemen PT. Aris Teknindo Mandiri, kami ingin menjadwalkan kunjungan verifikasi workshop / meminta formulir rekanan vendor pabrik.")}`}
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
