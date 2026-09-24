import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SITE } from '../../data/site';
import { CheckCircle2, Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function BrandCard({ brand }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-canvas-card/80 hover:bg-canvas-card border border-slate-border/80 hover:border-brand-red/50 transition-all duration-300 group cursor-default shadow-sm shrink-0 select-none">
      {/* Logo container: Always in authentic brand colors */}
      <div className="w-20 sm:w-28 h-7 sm:h-9 rounded-lg bg-white/95 group-hover:bg-white flex items-center justify-center p-1 sm:p-1.5 transition-all duration-300 shadow-sm">
        <img
          src={brand.logo}
          alt={`${brand.name} Logo`}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info details */}
      <div className="flex flex-col text-left pr-1">
        <div className="flex items-center gap-1">
          <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white leading-tight">
            {brand.name}
          </span>
          {brand.origin && (
            <span className="text-xs font-mono text-slate-400 border border-slate-700/60 rounded px-1.5 py-0.5 leading-none">
              {brand.origin}
            </span>
          )}
        </div>
        <span className="text-xs text-slate-400 group-hover:text-brand-redLight leading-tight mt-0.5 max-w-[130px] sm:max-w-[150px] truncate">
          {brand.category}
        </span>
      </div>
    </div>
  );
}

export default function BrandsStrip() {
  const { lang } = useLanguage();

  const automationBrands = SITE.brands.automation.filter(b => b.logo);
  const mechanicalBrands = SITE.brands.mechanical.filter(b => b.logo);

  // Repeat arrays for infinite seamless looping
  const track1Brands = [...automationBrands, ...automationBrands];
  const track2Brands = [...mechanicalBrands, ...mechanicalBrands];

  return (
    <section className="py-8 sm:py-12 bg-canvas-subtle/40 border-b border-slate-border/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
        
        {/* Header: Concise & Authoritative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-brand-red uppercase tracking-wider mb-1.5 sm:mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>{lang === 'id' ? "Rantai Pasok Terverifikasi" : "Verified Supply Chain"}</span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              {lang === 'id' 
                ? "Suku Cadang & Komponen Orisinal dari Prinsipal Dunia" 
                : "Genuine Components from Global Tier-1 Principals"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-muted max-w-md hidden sm:block">
            {lang === 'id'
              ? "Menyediakan komponen otomasi, sensor, bearing presisi, dan transmisi daya bergaransi resmi sesuai part number pabrik."
              : "Supplying genuine automation parts, sensors, precision bearings, and power transmission with factory part number verification."}
          </p>
        </div>

      </div>

      {/* Dual-Track Infinite Marquee Container with pause-on-hover */}
      <div className="relative w-full overflow-hidden pause-on-hover space-y-4">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-36 z-20 bg-gradient-to-r from-canvas via-canvas/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-36 z-20 bg-gradient-to-l from-canvas via-canvas/80 to-transparent" />

        {/* Track 1: Otomasi & Kontrol (Moving Left) */}
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              {lang === 'id' ? "Otomasi & Kontrol (PLC, Inverter, Sensor, Vision)" : "Automation & Control (PLC, Inverter, Sensors, Vision)"}
            </span>
          </div>
          <div className="animate-marquee-left flex gap-3.5 px-4">
            {track1Brands.map((brand, idx) => (
              <BrandCard key={`track1-${idx}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Track 2: Mekanikal & Motion (Moving Right) */}
        <div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider">
              {lang === 'id' ? "Mekanikal & Presisi (Bearing, Linear Motion, Gear, Rantai)" : "Mechanical & Motion (Bearings, Linear Motion, Gears, Chains)"}
            </span>
          </div>
          <div className="animate-marquee-right flex gap-3.5 px-4">
            {track2Brands.map((brand, idx) => (
              <BrandCard key={`track2-${idx}`} brand={brand} />
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Assurance Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 sm:mt-8">
        <div className="pt-3.5 sm:pt-4 border-t border-slate-border/50 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-muted gap-2.5 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium text-xs sm:text-sm">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              {lang === 'id' ? "100% Jaminan Suku Cadang Orisinal" : "100% Genuine Part Guarantee"}
            </span>
            <span className="hidden md:inline text-slate-border">•</span>
            <span className="text-slate-300 text-xs sm:text-sm hidden md:inline">
              {lang === 'id' ? "Inquiry Langsung dengan Nomor Seri / Drawing" : "Direct Inquiry by Serial Number / Drawing"}
            </span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm text-brand-redLight hover:text-white font-medium transition-colors group"
          >
            <span>{lang === 'id' ? "Lihat Katalog 29+ Brand Lengkap" : "View Full Parts Catalog"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
