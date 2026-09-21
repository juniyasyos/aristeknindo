import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';

export default function WorkflowSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.workflowSection;

  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-canvas-subtle/30 border-b border-slate-border/60 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-16"
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

        {/* 5-Step Workflow Cards Grid with Staggered Entrance */}
        <div className="relative">
          {/* Subtle connecting line across steps on desktop */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-4 md:gap-6 relative z-10">
            {data.steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-row md:flex-col items-center md:items-start gap-2.5 md:gap-0 p-2.5 sm:p-4 md:p-6 rounded-xl border border-slate-border bg-canvas-card hover:border-brand-red/60 transition-colors relative group shadow-lg"
              >
                {/* Accent top hover highlight bar */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="font-mono text-base sm:text-2xl md:text-3xl font-black text-brand-red/90 group-hover:text-brand-red md:mb-2.5 transition-colors shrink-0 w-7 md:w-auto">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold sm:font-bold text-white md:mb-2 leading-snug group-hover:text-brand-light transition-colors">
                    {lang === 'id' ? item.titleId : item.titleEn}
                  </h3>
                  {/* Hide verbose paragraph on mobile to prevent excessive scrolling */}
                  <p className="text-xs text-slate-muted leading-relaxed hidden md:block">
                    {lang === 'id' ? item.descId : item.descEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
