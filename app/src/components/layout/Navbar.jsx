import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-border py-3 shadow-2xl shadow-black/50' 
        : 'bg-[#0B0F17]/80 backdrop-blur-sm border-b border-slate-border/50 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/images/logo-dark-mode.png"
              alt="PT. Aris Teknindo Mandiri"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {SITE.nav.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`px-2.5 py-1.5 rounded-md text-xs font-medium tracking-normal transition-all ${
                    isActive
                      ? 'text-white bg-brand-red/20 border border-brand-red/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-canvas-card'
                  }`}
                >
                  {t(item.labelId, item.labelEn)}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-border text-xs font-mono text-slate-muted hover:text-white hover:border-slate-active transition-colors"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-muted" />
              <span className={lang === 'id' ? 'text-brand-red font-bold' : 'text-slate-muted'}>ID</span>
              <span className="text-slate-subtle">/</span>
              <span className={lang === 'en' ? 'text-brand-red font-bold' : 'text-slate-muted'}>EN</span>
            </button>

            {/* Request Quote Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-red hover:bg-brand-hover text-white text-xs font-semibold shadow-lg shadow-brand-red/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t("Minta Penawaran", "Request Quote")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-border text-xs font-mono text-slate-200 active:bg-canvas-card"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-brand-red" />
              <span className="font-bold">{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-slate-border text-slate-muted hover:text-white hover:bg-canvas-card focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0B0F17]/98 border-b border-slate-border backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5 mt-3 shadow-2xl animate-fade-in">
          {SITE.nav.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.key}
                to={item.path}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-brand-red/20 border border-brand-red/40 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-canvas-card'
                }`}
              >
                {t(item.labelId, item.labelEn)}
              </Link>
            );
          })}
          
          <div className="pt-3 border-t border-slate-border/80">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-brand-red hover:bg-brand-hover text-white text-sm font-bold shadow-lg shadow-brand-red/20 active:scale-[0.98] transition-all"
            >
              <span>{t("Minta Penawaran Proyek", "Request a Quote")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
