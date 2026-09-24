import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_DATA } from '../data/aboutData';
import { SITE } from '../data/site';
import { 
  Building2, 
  CheckCircle2, 
  Target, 
  Compass, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Sparkles, 
  Wrench, 
  FileText, 
  MessageSquare,
  MapPin,
  FileCheck,
  ArrowRight
} from 'lucide-react';
import { asset } from '../utils/asset';

export default function About() {
  const { lang } = useLanguage();
  const data = ABOUT_DATA;

  return (
    <div className="flex flex-col">
      
      {/* 1. Header Banner */}
      <section className="relative py-12 sm:py-16 lg:py-24 border-b border-slate-border/60 overflow-hidden bg-canvas">
        {/* Ambient Glow & Tech Grid */}
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
            <span className="font-mono text-xs text-brand-redLight uppercase tracking-wider font-semibold">
              {lang === 'id' ? data.header.badgeId : data.header.badgeEn}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-[1.18] mb-3 sm:mb-6"
          >
            {lang === 'id' ? data.header.titleId : data.header.titleEn}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {lang === 'id' ? data.header.descriptionId : data.header.descriptionEn}
          </motion.p>
        </div>
      </section>

      {/* 2. Narrative & Engineering Roots (Hero-style Industrial Background) */}
      <section className="relative py-8 sm:py-16 lg:py-24 border-b border-slate-border/60 overflow-hidden bg-canvas">
        {/* Background Image: Full section industrial visual reference from Hero */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img
            src={asset('/images/bg-hero-section.webp')}
            alt="Industrial Automation Background"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-right opacity-25 lg:opacity-35"
          />
          {/* Dark Gradient Overlay for Maximum Text Legibility and Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/95 sm:via-[#0B0F17]/90 to-[#0B0F17]/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Narrative Story (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-red/15 border border-brand-red/35 mb-3 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                <span className="text-xs font-mono font-semibold text-brand-redLight tracking-widest uppercase">
                  {lang === 'id' ? data.narrative.tagId : data.narrative.tagEn}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold sm:font-extrabold text-white mt-1 mb-3 sm:mb-6 leading-snug tracking-tight">
                {lang === 'id' ? data.narrative.headingId : data.narrative.headingEn}
              </h2>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>{lang === 'id' ? data.narrative.p1Id : data.narrative.p1En}</p>
                <p>{lang === 'id' ? data.narrative.p2Id : data.narrative.p2En}</p>
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-border/70 grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-canvas-card/80 border border-slate-border/70 backdrop-blur-md">
                  <span className="text-xs text-slate-400 block mb-0.5 sm:mb-1 font-mono">Badan Hukum</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white">PT Resmi Terdaftar</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-canvas-card/80 border border-slate-border/70 backdrop-blur-md">
                  <span className="text-xs text-slate-400 block mb-0.5 sm:mb-1 font-mono">Nomor Registrasi</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">1280189</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-xl bg-canvas-card/80 border border-slate-border/70 backdrop-blur-md col-span-2 sm:col-span-1">
                  <span className="text-xs text-slate-400 block mb-0.5 sm:mb-1 font-mono">Lokasi Workshop</span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white">Babelan, Bekasi</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: High-tech Engineering Credential Panel (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-slate-border/80 bg-canvas-card/90 backdrop-blur-md p-4 sm:p-7 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-red/10 rounded-full blur-[70px] pointer-events-none" />
                
                <div className="flex items-center justify-between gap-2 border-b border-slate-border/70 pb-3 sm:pb-4 mb-4 sm:mb-5">
                  <div className="flex items-center gap-2">
                    <span className="p-1 sm:p-1.5 rounded-lg bg-brand-red/20 text-brand-red border border-brand-red/30">
                      <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                      {lang === 'id' ? "Infrastruktur Rekayasa" : "Engineering Infrastructure"}
                    </span>
                  </div>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 font-semibold">
                    100% In-House
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5">
                  <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-canvas-subtle/60 border border-slate-border/50">
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {lang === 'id' ? "Workshop Machining Mandiri" : "Self-Operated Machining Workshop"}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-snug">
                        {lang === 'id' 
                          ? "Mesin Bubut, Milling, dan CNC presisi hingga ±0.01 mm di Babelan, Bekasi." 
                          : "Lathe, Milling, and CNC precision machining up to ±0.01 mm in Babelan, Bekasi."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-canvas-subtle/60 border border-slate-border/50">
                    <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {lang === 'id' ? "Kontrol Otomasi & PLC Teruji" : "Proven Automation & PLC Engineering"}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-snug">
                        {lang === 'id'
                          ? "Pemrograman multi-brand: Mitsubishi, Omron, Allen-Bradley, Yaskawa & HMI SCADA."
                          : "Multi-brand programming: Mitsubishi, Omron, Allen-Bradley, Yaskawa & HMI SCADA."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-canvas-subtle/60 border border-slate-border/50">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {lang === 'id' ? "Kepatuhan K3 & Standar Pabrik" : "HSE Compliance & Plant Safety"}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-snug">
                        {lang === 'id'
                          ? "Instalasi jalur kabel daya berstandar audit industri manufaktur dan otomotif."
                          : "Power cable routing installations meeting strict manufacturing HSE audit codes."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-border/70 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Kawasan Industri Jawa Barat</span>
                  <span className="text-brand-redLight font-semibold">Siaga Darurat On-Call</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-8 sm:py-16 lg:py-20 bg-canvas-subtle/30 border-b border-slate-border/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-6 sm:mb-12"
          >
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? data.visionMission.tagId : data.visionMission.tagEn}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white mt-1.5 sm:mt-2 mb-2 sm:mb-4 tracking-tight">
              {lang === 'id' ? data.visionMission.headingId : data.visionMission.headingEn}
            </h2>
          </motion.div>

          {/* Vision Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-canvas-card via-canvas-card to-canvas border border-brand-red/30 shadow-xl mb-6 sm:mb-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="flex items-start gap-3 sm:gap-4 relative z-10">
              <div className="p-2 sm:p-3 rounded-xl bg-brand-red/20 text-brand-red flex-shrink-0 mt-0.5 sm:mt-1">
                <Target className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-brand-redLight font-bold tracking-wider block mb-1 sm:mb-2">
                  {lang === 'id' ? "VISI PERUSAHAAN" : "CORPORATE VISION"}
                </span>
                <p className="text-sm sm:text-lg font-medium text-white leading-relaxed">
                  "{lang === 'id' ? data.visionMission.visionId : data.visionMission.visionEn}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3 Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {data.visionMission.missions.map((m, idx) => (
              <motion.div
                key={m.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-6 rounded-xl border border-slate-border bg-canvas-card hover:border-brand-red/50 transition-all flex flex-col shadow-lg relative group overflow-hidden"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-xl sm:text-2xl font-black text-brand-red mb-2 sm:mb-3">
                  {m.number}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2 leading-snug group-hover:text-brand-light transition-colors">
                  {lang === 'id' ? m.titleId : m.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed flex-grow">
                  {lang === 'id' ? m.descId : m.descEn}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Core Engineering Values */}
      <section className="py-8 sm:py-16 lg:py-20 bg-canvas-subtle/30 border-b border-slate-border/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-6 sm:mb-14"
          >
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? "ETIKA & NILAI KERJA" : "CORE ENGINEERING VALUES"}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold sm:font-extrabold text-white mt-1.5 sm:mt-2 mb-2 sm:mb-4 tracking-tight">
              {lang === 'id' 
                ? "4 Prinsip Operasional yang Menjaga Kepercayaan Pabrik Rekanan" 
                : "4 Operational Principles Safeguarding Client Trust"}
            </h2>
            <p className="text-sm text-slate-muted">
              {lang === 'id'
                ? "Prinsip kerja profesional yang kami terapkan secara konsisten di workshop dan di lapangan."
                : "Operational engineering standards upheld across our workshop and on client plant floors."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {data.coreValues.map((val, idx) => (
              <motion.div
                key={val.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-6 rounded-xl border border-slate-border bg-canvas-card hover:border-brand-red/50 transition-all flex flex-col group shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-2xl sm:text-3xl font-black text-brand-red/70 group-hover:text-brand-red mb-2 sm:mb-3 transition-colors">
                  {val.number}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-brand-light transition-colors">
                  {lang === 'id' ? val.titleId : val.titleEn}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-brand-redLight mb-2 sm:mb-3">
                  {lang === 'id' ? val.subId : val.subEn}
                </span>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed flex-grow">
                  {lang === 'id' ? val.descId : val.descEn}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Legalitas & Kepatuhan Badan Hukum */}
      <section className="py-8 sm:py-16 lg:py-20 border-b border-slate-border/60 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-10 text-center sm:text-left"
          >
            <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
              {lang === 'id' ? data.legalVerification.tagId : data.legalVerification.tagEn}
            </span>
            <h2 className="text-xl sm:text-3xl font-bold sm:font-extrabold text-white mt-1.5 sm:mt-2 mb-2 sm:mb-3 tracking-tight">
              {lang === 'id' ? data.legalVerification.headingId : data.legalVerification.headingEn}
            </h2>
            <p className="text-sm text-slate-muted">
              {lang === 'id' ? data.legalVerification.subheadingId : data.legalVerification.subheadingEn}
            </p>
          </motion.div>

          {/* Legal Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-slate-border bg-canvas-card overflow-hidden shadow-xl"
          >
            <div className="divide-y divide-slate-border/60">
              {data.legalVerification.fields.map((f, idx) => (
                <div key={idx} className="p-3.5 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-6 items-center hover:bg-canvas-subtle/50 transition-colors">
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
          </motion.div>

        </div>
      </section>

      {/* 6. Vendor Verification CTA */}
      <section className="py-8 sm:py-16 lg:py-24 bg-gradient-to-b from-canvas to-canvas-card relative overflow-hidden">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none animate-soft-glow" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-redLight font-mono text-xs mb-3 sm:mb-6">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Vendor Enrollment & Facility Survey</span>
            </div>

            <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold sm:font-extrabold text-white mb-2 sm:mb-4 tracking-tight">
              {lang === 'id' ? data.ctaVendor.headingId : data.ctaVendor.headingEn}
            </h2>

            <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
              {lang === 'id' ? data.ctaVendor.descId : data.ctaVendor.descEn}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-semibold text-sm shadow-lg shadow-brand-red/25 transition-all text-center"
                >
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>{lang === 'id' ? data.ctaVendor.ctaDocId : data.ctaVendor.ctaDocEn}</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo Manajemen PT. Aris Teknindo Mandiri, kami ingin menjadwalkan kunjungan verifikasi workshop / meminta formulir rekanan vendor pabrik.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-7 sm:py-4 rounded-xl bg-canvas-card hover:bg-canvas-subtle border border-slate-border text-white font-semibold text-sm transition-all text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'id' ? data.ctaVendor.ctaVisitId : data.ctaVendor.ctaVisitEn}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
