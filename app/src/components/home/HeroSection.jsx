import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { asset } from '../../utils/asset';

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const data = HOME_DATA.hero;

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 bg-canvas">
      {/* Background Image: Full screen/section industrial visual */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.06, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          src={asset('/images/bg-hero-section.webp')}
          alt="Industrial Automation and Machining Background"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover select-none pointer-events-none origin-right"
          style={{ objectPosition: '100% center' }}
        />
        {/* Dark Gradient Overlay for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/85 to-[#0B0F17]/25 sm:via-[#0B0F17]/90 sm:to-transparent lg:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8 sm:pt-24 sm:pb-16 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Category Kicker */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full bg-canvas/90 backdrop-blur-md border border-brand-red/40 shadow-sm mb-2.5 sm:mb-5 max-w-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse flex-shrink-0" />
            <span className="font-mono text-xs text-brand-redLight font-medium tracking-wide uppercase truncate">
              {lang === 'id' ? data.badgeId : data.badgeEn}
            </span>
          </motion.div>

          {/* H1 Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-[1.18] mb-3 sm:mb-5"
          >
            {lang === 'id' ? data.h1Id : data.h1En}
          </motion.h1>

          {/* Concise Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-5 sm:mb-8 max-w-xl line-clamp-3 sm:line-clamp-none"
          >
            {lang === 'id' ? data.descriptionId : data.descriptionEn}
          </motion.p>

          {/* CTAs: Compact button heights on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto mb-5 sm:mb-10"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-brand-red hover:bg-brand-redDark text-white font-semibold text-sm shadow-lg shadow-brand-red/30 transition-all group text-center"
              >
                <span>{lang === 'id' ? data.ctaDrawingId : data.ctaDrawingEn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a
                href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo tim teknis PT. Aris Teknindo Mandiri, saya ingin berkonsultasi mengenai kebutuhan machining / otomasi PLC pabrik kami.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-lg bg-canvas/90 hover:bg-canvas backdrop-blur-md border border-slate-border text-white text-sm font-medium hover:border-slate-muted transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{lang === 'id' ? data.ctaWhatsappId : data.ctaWhatsappEn}</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Key Quick Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-slate-border/60 max-w-2xl bg-canvas-card/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-xl p-2.5 sm:p-0 border sm:border-0 border-slate-border/50"
          >
            {data.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.08 }}
                className={`flex flex-col p-1 sm:p-0 ${idx >= 2 ? 'hidden xs:flex' : 'flex'}`}
              >
                <span className="font-mono text-base sm:text-xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-300 mt-0.5 leading-tight truncate sm:whitespace-normal">
                  {lang === 'id' ? stat.labelId : stat.labelEn}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
