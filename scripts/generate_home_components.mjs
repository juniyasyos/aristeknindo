import fs from 'fs';
import path from 'path';

const components = {};

// 1. HeroSection.jsx
components['HeroSection.jsx'] = `import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { ArrowRight, MessageSquare, Wrench } from 'lucide-react';

export default function HeroSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.hero;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-border/50">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-canvas-card border border-brand-red/30 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-mono text-xs text-brand-redLight font-medium tracking-wide uppercase">
                {lang === 'id' ? data.badgeId : data.badgeEn}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              {lang === 'id' ? data.h1Id : data.h1En}
            </h1>

            <p className="text-base sm:text-lg text-slate-muted leading-relaxed mb-8 max-w-2xl">
              {lang === 'id' ? data.descriptionId : data.descriptionEn}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-red hover:bg-brand-redDark text-white font-semibold shadow-lg shadow-brand-red/25 transition-all group"
              >
                <span>{lang === 'id' ? data.ctaDrawingId : data.ctaDrawingEn}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <a
                href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent("Halo tim teknis PT. Aris Teknindo Mandiri, saya ingin berkonsultasi mengenai kebutuhan machining / otomasi PLC pabrik kami.")}\`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-canvas-card hover:bg-canvas-subtle border border-slate-border text-white font-medium hover:border-slate-muted transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'id' ? data.ctaWhatsappId : data.ctaWhatsappEn}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-border/60 w-full">
              {data.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-muted mt-1 leading-snug">
                    {lang === 'id' ? stat.labelId : stat.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-border/80 bg-canvas-card shadow-2xl group">
              <img
                src={data.image}
                alt="Industrial Engineering ATM"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-canvas-card/90 backdrop-blur-md border border-slate-border/70 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Wrench className="w-4 h-4 text-brand-red" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      PT. Aris Teknindo Mandiri
                    </span>
                  </div>
                  <p className="text-xs text-slate-muted">
                    {lang === 'id' 
                      ? "Fasilitas Workshop Babelan: Bubut, Milling, CNC & Perakitan Panel" 
                      : "Babelan Workshop: Lathe, Milling, CNC & Panel Assembly"}
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end">
                  <span className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active Lab
                  </span>
                  <span className="font-mono text-[10px] text-slate-subtle">Reg. 1280189</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
`;

// 2. BrandsStrip.jsx
components['BrandsStrip.jsx'] = `import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { CheckCircle2, Shield } from 'lucide-react';

export default function BrandsStrip() {
  const { lang } = useLanguage();
  const data = HOME_DATA.brandsTicker;
  
  const allBrands = [
    ...SITE.brands.automation,
    ...SITE.brands.mechanical
  ];

  return (
    <section className="py-10 bg-canvas-subtle/50 border-b border-slate-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-red uppercase tracking-wider mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? "Rantai Pasok Terverifikasi" : "Verified Supply Chain"}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'id' ? data.headingId : data.headingEn}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-muted max-w-md">
            {lang === 'id' ? data.subheadingId : data.subheadingEn}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {allBrands.map((brand, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-card border border-slate-border/80 hover:border-brand-red/50 hover:bg-canvas transition-colors group cursor-default"
            >
              <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-white">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-subtle border-l border-slate-border pl-2 group-hover:text-brand-redLight">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-border/40 flex flex-wrap items-center justify-between text-xs text-slate-muted gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% Original Part Guarantee
            </span>
            <span className="hidden sm:inline-block text-slate-border">•</span>
            <span className="hidden sm:inline">Direct Inquiry by Part Number</span>
          </div>
          <span className="font-mono text-slate-subtle">
            29 Tier-1 Global Industrial Brands
          </span>
        </div>

      </div>
    </section>
  );
}
`;

// 3. SplitStageSection.jsx (Option A: Interactive Split Stage)
components['SplitStageSection.jsx'] = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Tag } from 'lucide-react';

export default function SplitStageSection() {
  const { lang } = useLanguage();
  const section = HOME_DATA.pillarsSection;
  const [activeTab, setActiveTab] = useState(0);

  const activePillar = section.pillars[activeTab];

  return (
    <section className="py-16 lg:py-24 border-b border-slate-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
            {lang === 'id' ? section.tagId : section.tagEn}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {lang === 'id' ? section.headingId : section.headingEn}
          </h2>
          <p className="text-sm sm:text-base text-slate-muted max-w-3xl">
            {lang === 'id' ? section.subheadingId : section.subheadingEn}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Vertical Tab Selector */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            {section.pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={\`w-full text-left p-4 sm:p-5 rounded-xl border transition-all flex flex-col items-start min-w-[260px] lg:min-w-0 \${
                    isActive
                      ? 'bg-canvas-card border-brand-red shadow-lg shadow-brand-red/10 ring-1 ring-brand-red/50'
                      : 'bg-canvas-card/40 border-slate-border/60 hover:bg-canvas-card hover:border-slate-border'
                  }\`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={\`font-mono text-xs font-bold \${isActive ? 'text-brand-red' : 'text-slate-subtle'}\`}>
                      {pillar.number}
                    </span>
                    <span className={\`text-[10px] px-2 py-0.5 rounded font-mono uppercase \${
                      isActive ? 'bg-brand-red/20 text-brand-redLight' : 'bg-slate-border/50 text-slate-subtle'
                    }\`}>
                      {lang === 'id' ? pillar.badgeId : pillar.badgeEn}
                    </span>
                  </div>
                  <h3 className={\`text-base font-bold transition-colors \${isActive ? 'text-white' : 'text-slate-300'}\`}>
                    {lang === 'id' ? pillar.titleId : pillar.titleEn}
                  </h3>
                  <p className="text-xs text-slate-muted mt-1 line-clamp-2">
                    {lang === 'id' ? pillar.shortDescId : pillar.shortDescEn}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Stage */}
          <div className="lg:col-span-8 bg-canvas-card border border-slate-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-border/60">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2xl font-black text-brand-red">
                    {activePillar.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-subtle">
                    {lang === 'id' ? activePillar.badgeId : activePillar.badgeEn}
                  </span>
                </div>
                <Link
                  to={activePillar.link}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-redLight hover:text-white transition-colors"
                >
                  <span>{lang === 'id' ? activePillar.actionLabelId : activePillar.actionLabelEn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug">
                {lang === 'id' ? activePillar.headlineId : activePillar.headlineEn}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-canvas-subtle/80 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? "Tantangan Pabrik" : "Plant Operational Challenge"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                    {lang === 'id' ? activePillar.problemId : activePillar.problemEn}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-canvas-subtle/80 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Lightbulb className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? "Solusi Rekayasa ATM" : "ATM Engineering Solution"}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                    {lang === 'id' ? activePillar.solutionId : activePillar.solutionEn}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-6 border-t border-slate-border/60">
                <div className="md:col-span-7">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-subtle mb-3">
                    {lang === 'id' ? "Lingkup Pekerjaan & Output Teknis:" : "Scope & Technical Deliverables:"}
                  </h4>
                  <ul className="space-y-2.5">
                    {activePillar.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">
                          {lang === 'id' ? item.id : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-subtle mb-2">
                      <Tag className="w-3 h-3 text-brand-red" />
                      <span>{lang === 'id' ? "Brand Terkait:" : "Supported Brands:"}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activePillar.brandsCovered.map((brand, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2 py-0.5 rounded bg-canvas-subtle text-[11px] font-mono text-slate-300 border border-slate-border/60"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-slate-border bg-canvas shadow-lg">
                    <img
                      src={activePillar.image}
                      alt={activePillar.titleId}
                      className="w-full h-44 object-cover object-center"
                    />
                    <div className="p-2.5 bg-canvas-card border-t border-slate-border/60 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-subtle truncate">
                        {lang === 'id' ? activePillar.titleId : activePillar.titleEn}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">In-House</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-border/60 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-muted">
                  {lang === 'id'
                    ? "Butuh estimasi pengerjaan atau konsultasi spesifikasi?"
                    : "Need a cost estimate or technical specification review?"}
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-redDark text-white text-xs font-semibold shadow-md transition-all"
                >
                  <span>{lang === 'id' ? "Minta Penawaran Cepat" : "Request Fast Quotation"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
`;

// 4. WorkshopSection.jsx
components['WorkshopSection.jsx'] = `import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { CheckCircle2 } from 'lucide-react';

export default function WorkshopSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.workshopSection;

  return (
    <section className="py-16 lg:py-24 bg-canvas-subtle/30 border-b border-slate-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
            {lang === 'id' ? data.tagId : data.tagEn}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {lang === 'id' ? data.headingId : data.headingEn}
          </h2>
          <p className="text-sm sm:text-base text-slate-muted">
            {lang === 'id' ? data.subheadingId : data.subheadingEn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.facilities.map((fac) => (
            <div
              key={fac.id}
              className="rounded-xl border border-slate-border bg-canvas-card overflow-hidden hover:border-slate-muted transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-canvas">
                <img
                  src={fac.image}
                  alt={fac.titleId}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-card via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-canvas/80 backdrop-blur-sm border border-slate-border text-[10px] font-mono text-white">
                  Babelan Workshop
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-bold text-white mb-1">
                  {lang === 'id' ? fac.titleId : fac.titleEn}
                </h3>
                <span className="text-xs font-medium text-brand-redLight mb-3">
                  {lang === 'id' ? fac.roleId : fac.roleEn}
                </span>
                <p className="text-xs text-slate-muted leading-relaxed mb-4 flex-grow">
                  {lang === 'id' ? fac.descId : fac.descEn}
                </p>

                <div className="pt-3 border-t border-slate-border/50">
                  <span className="text-[10px] font-mono text-slate-subtle uppercase tracking-wider block mb-2">
                    {lang === 'id' ? "Kemampuan Utama:" : "Key Specs:"}
                  </span>
                  <ul className="space-y-1.5">
                    {fac.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

// 5. CaseStudiesSection.jsx
components['CaseStudiesSection.jsx'] = `import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { CheckCircle2 } from 'lucide-react';

export default function CaseStudiesSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.caseStudiesSection;

  return (
    <section className="py-16 lg:py-24 border-b border-slate-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
            {lang === 'id' ? data.tagId : data.tagEn}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {lang === 'id' ? data.headingId : data.headingEn}
          </h2>
          <p className="text-sm sm:text-base text-slate-muted">
            {lang === 'id' ? data.subheadingId : data.subheadingEn}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.cases.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl border border-slate-border bg-canvas-card overflow-hidden hover:border-slate-muted transition-all flex flex-col"
            >
              <div className="grid grid-cols-2 gap-2 p-3 bg-canvas border-b border-slate-border/50">
                {cs.images.slice(0, 2).map((img, iIdx) => (
                  <div key={iIdx} className="h-44 rounded-lg overflow-hidden bg-canvas-subtle relative">
                    <img
                      src={img}
                      alt={cs.titleId}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase text-brand-redLight bg-brand-red/10 px-2.5 py-0.5 rounded border border-brand-red/20">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cs.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {lang === 'id' ? cs.titleId : cs.titleEn}
                </h3>
                
                <div className="text-xs font-mono text-slate-subtle mb-4">
                  <span>{lang === 'id' ? "Sistem: " : "System: "}</span>
                  <span className="text-slate-200">{lang === 'id' ? cs.systemId : cs.systemEn}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-canvas-subtle/80 border border-slate-border/60 mb-4">
                  <span className="text-[11px] font-mono text-slate-subtle uppercase tracking-wider block mb-1">
                    {lang === 'id' ? "Lingkup Pekerjaan:" : "Scope of Work:"}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === 'id' ? cs.scopeId : cs.scopeEn}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-6">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                    {lang === 'id' ? "Hasil & Dampak di Lini Pabrik:" : "Field Result & Operational Impact:"}
                  </span>
                  <p className="text-xs text-emerald-200 leading-relaxed">
                    {lang === 'id' ? cs.impactId : cs.impactEn}
                  </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-border/50 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-slate-subtle text-[11px]">Hardware / Platform:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.brandsInvolved.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2 py-0.5 rounded bg-canvas text-[10px] font-mono text-slate-300 border border-slate-border"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

// 6. WorkflowSection.jsx
components['WorkflowSection.jsx'] = `import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';

export default function WorkflowSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.workflowSection;

  return (
    <section className="py-16 lg:py-24 bg-canvas-subtle/30 border-b border-slate-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold text-brand-red tracking-widest uppercase">
            {lang === 'id' ? data.tagId : data.tagEn}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-4 tracking-tight">
            {lang === 'id' ? data.headingId : data.headingEn}
          </h2>
          <p className="text-sm sm:text-base text-slate-muted">
            {lang === 'id' ? data.subheadingId : data.subheadingEn}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {data.steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 rounded-xl border border-slate-border bg-canvas-card hover:border-brand-red/50 transition-colors relative group"
            >
              <div className="font-mono text-3xl font-black text-brand-red/80 group-hover:text-brand-red mb-3">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">
                {lang === 'id' ? item.titleId : item.titleEn}
              </h3>
              <p className="text-xs text-slate-muted leading-relaxed">
                {lang === 'id' ? item.descId : item.descEn}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

// 7. CtaSection.jsx
components['CtaSection.jsx'] = `import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { HOME_DATA } from '../../data/homeData';
import { SITE } from '../../data/site';
import { ArrowRight, MessageSquare, PhoneCall, MapPin, FileCheck } from 'lucide-react';

export default function CtaSection() {
  const { lang } = useLanguage();
  const data = HOME_DATA.ctaSection;

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-canvas to-canvas-card relative overflow-hidden">
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-redLight font-mono text-xs mb-6">
          <FileCheck className="w-3.5 h-3.5" />
          <span>RFQ & Engineering Consultation</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
          {lang === 'id' ? data.headingId : data.headingEn}
        </h2>
        
        <p className="text-base sm:text-lg text-slate-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {lang === 'id' ? data.subheadingId : data.subheadingEn}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-base shadow-xl shadow-brand-red/30 transition-all group"
          >
            <span>{lang === 'id' ? "Upload Drawing / Request Quote" : "Upload Drawing / Request Quote"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href={\`https://wa.me/\${SITE.contact.whatsappNumber}?text=\${encodeURIComponent("Halo tim teknis PT. Aris Teknindo Mandiri, kami ingin mendiskusikan kebutuhan machining / kelistrikan pabrik kami.")}\`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-canvas-card hover:bg-canvas-subtle border border-slate-border text-white font-semibold text-base transition-all"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp: {SITE.contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="pt-8 border-t border-slate-border/50 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-muted">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-red" />
            {SITE.contact.address}
          </span>
          <span className="hidden sm:inline text-slate-border">•</span>
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
            {SITE.contact.phoneSecondary}
          </span>
        </div>
      </div>
    </section>
  );
}
`;

// 8. Home.jsx
components['Home.jsx'] = `import React from 'react';
import HeroSection from '../components/home/HeroSection';
import BrandsStrip from '../components/home/BrandsStrip';
import SplitStageSection from '../components/home/SplitStageSection';
import WorkshopSection from '../components/home/WorkshopSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import WorkflowSection from '../components/home/WorkflowSection';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BrandsStrip />
      <SplitStageSection />
      <WorkshopSection />
      <CaseStudiesSection />
      <WorkflowSection />
      <CtaSection />
    </div>
  );
}
`;

// Execution
const homeDir = path.join(process.cwd(), 'app/src/components/home');
fs.mkdirSync(homeDir, { recursive: true });

for (const [filename, content] of Object.entries(components)) {
  if (filename === 'Home.jsx') {
    fs.writeFileSync(path.join(process.cwd(), 'app/src/pages/Home.jsx'), content, 'utf-8');
    console.log('Written app/src/pages/Home.jsx');
  } else {
    fs.writeFileSync(path.join(homeDir, filename), content, 'utf-8');
    console.log("Written app/src/components/home/" + filename);
  }
}

