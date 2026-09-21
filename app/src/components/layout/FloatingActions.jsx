import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { SITE } from '../../data/site';
import { useLanguage } from '../../context/LanguageContext';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const defaultMsg = t(
    "Halo PT Aris Teknindo Mandiri, saya ingin berkonsultasi mengenai kebutuhan pengadaan / proyek industri.",
    "Hello PT Aris Teknindo Mandiri, I would like to inquire about industrial procurement / engineering project."
  );
  const waUrl = `https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed z-40 bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-2.5 sm:gap-3">
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-canvas-card/90 backdrop-blur-sm border border-slate-border text-slate-muted hover:text-white hover:border-slate-active flex items-center justify-center shadow-lg transition-all hover:scale-105"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* WhatsApp Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white shadow-2xl transition-all hover:scale-105 animate-wa-glow"
        aria-label="Chat WhatsApp Langsung"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-transparent shrink-0" />
        <span className="text-xs font-bold tracking-wide font-sans">
          <span className="sm:hidden">WA Chat</span>
          <span className="hidden sm:inline">{t("Chat WhatsApp", "WhatsApp Chat")}</span>
        </span>
      </a>
    </div>
  );
}
