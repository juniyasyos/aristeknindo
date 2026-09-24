import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { ArrowRight, MessageSquare, PhoneCall, MapPin, FileCheck } from 'lucide-react';

export default function CtaSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.ctaSection;

  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-gradient-to-b from-canvas to-canvas-card relative overflow-hidden">
      {/* Ambient Pulsing Glow Background */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none animate-soft-glow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-redLight font-mono text-xs mb-3 sm:mb-6">
            <FileCheck className="w-3.5 h-3.5" />
            <span>RFQ & Engineering Consultation</span>
          </div>

          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold sm:font-extrabold text-white tracking-tight mb-2 sm:mb-4">
            {lang === 'id' ? data.headingId : data.headingEn}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-muted max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
            {lang === 'id' ? data.subheadingId : data.subheadingEn}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-10">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-sm sm:text-base shadow-xl shadow-brand-red/30 transition-all group"
              >
                <span>{lang === 'id' ? "Upload Drawing / Request Quote" : "Upload Drawing / Request Quote"}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a
                href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo tim teknis PT. Aris Teknindo Mandiri, kami ingin mendiskusikan kebutuhan machining / kelistrikan pabrik kami.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-canvas-card hover:bg-canvas-subtle border border-slate-border text-white font-semibold text-sm sm:text-base transition-all"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {SITE.contact.phoneDisplay}</span>
              </a>
            </motion.div>
          </div>

          <div className="pt-4 sm:pt-8 border-t border-slate-border/50 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs text-slate-muted text-center">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
              <span className="sm:hidden">Workshop Babelan, Bekasi 17610</span>
              <span className="hidden sm:inline">{SITE.contact.address}</span>
            </span>
            <span className="hidden sm:inline text-slate-border">•</span>
            <span className="flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              {SITE.contact.phoneSecondary}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
