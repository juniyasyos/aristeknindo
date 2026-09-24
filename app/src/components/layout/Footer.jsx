import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SITE } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';
import { asset } from '../../utils/asset';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-canvas-alt border-t border-slate-border text-slate-muted pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={asset('/images/logo-dark-mode.webp')}
                alt="PT. Aris Teknindo Mandiri"
                width="160"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </Link>
            
            <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
              {t(
                "Mitra rekayasa terpadu untuk industri manufaktur dan otomotif. Menyediakan solusi permesinan machining presisi, fabrikasi logam, dan kontraktor otomasi berbasis PLC.",
                "Integrated engineering partner for manufacturing and automotive industries. Delivering precision machining, metal fabrication, and PLC-based industrial automation solutions."
              )}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-canvas-card border border-slate-border text-xs text-slate-text">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span>{SITE.registration}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-text font-semibold mb-4 pb-2 border-b border-slate-border/50">
              {t("Navigasi Perusahaan", "Corporate Links")}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>{t("Profil Perusahaan & Legalitas", "Company Profile & Legal Verification")}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>{t("Kontraktor Otomasi PLC", "PLC Automation Contractor")}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>{t("Fasilitas Workshop Babelan", "Babelan Workshop Facilities")}</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>{t("Studi Kasus & Rekam Jejak Proyek", "Case Studies & Portfolio")}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>{t("Permintaan Quotation (RFQ)", "Request for Quotation")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Suku Cadang & Brand */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-text font-semibold mb-4 pb-2 border-b border-slate-border/50">
              {t("Brand Industri Didukung", "Supported Global Brands")}
            </h4>
            <div className="space-y-3">
              <p className="text-xs text-slate-subtle">
                {t("Pengadaan suku cadang impor standar internasional", "International standard industrial spare parts supply")}
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {["Mitsubishi", "Yaskawa", "THK", "HIWIN", "NSK", "Timken", "Tsubaki", "Cognex", "Autonics", "Fuji Electric"].map(brand => (
                  <span key={brand} className="px-2 py-1 rounded bg-canvas-card border border-slate-border text-slate-muted">
                    {brand}
                  </span>
                ))}
              </div>
              <Link to="/products" className="inline-flex items-center gap-1 text-xs text-brand-red hover:text-brand-light font-semibold pt-1">
                <span>{t("Lihat 29+ Brand Lengkap →", "View All 29+ Brands →")}</span>
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Workshop */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-text font-semibold mb-4 pb-2 border-b border-slate-border/50">
              {t("Workshop & Kontak", "Workshop & Contact")}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="leading-snug">{SITE.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${SITE.contact.phoneRaw}`} className="hover:text-white font-mono transition-colors">
                    {SITE.contact.phoneDisplay}
                  </a>
                  <span>/</span>
                  <a href={`tel:${SITE.contact.phoneSecondaryRaw}`} className="hover:text-white font-mono transition-colors">
                    {SITE.contact.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <a 
                  href={`https://wa.me/${SITE.contact.whatsappNumber}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 text-xs font-mono transition-colors"
                >
                  <span>Chat WhatsApp: {SITE.contact.phoneDisplay}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${SITE.contact.emailSales}`} className="hover:text-white font-mono text-xs">
                  {SITE.contact.emailSales}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span className="text-xs text-slate-subtle leading-tight">
                  {t(SITE.contact.hoursId, SITE.contact.hoursEn)}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-subtle">
          <p>© 2026 PT. Aris Teknindo Mandiri. {t("Hak Cipta Dilindungi.", "All Rights Reserved.")}</p>
          <div className="flex items-center gap-4">
            <span>{t("Kontraktor Mekanikal & Otomasi PLC", "Mechanical & PLC Automation Contractor")}</span>
            <span>•</span>
            <span className="font-mono text-slate-muted">{SITE.domain}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
