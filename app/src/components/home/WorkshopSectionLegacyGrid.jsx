import React from 'react';
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
