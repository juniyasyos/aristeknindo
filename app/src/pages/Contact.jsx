import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { SITE } from '../data/site';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle2, 
  Upload, 
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    picName: '',
    phone: '',
    email: '',
    serviceType: 'machining',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Halo PT. Aris Teknindo Mandiri, kami ingin mengajukan Request for Quotation (RFQ):\n- Perusahaan: ${formData.company}\n- PIC: ${formData.picName}\n- Kontak: ${formData.phone}\n- Kebutuhan: ${formData.serviceType}\n- Detail: ${formData.description}`;
    window.open(`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. Header Banner */}
      <section className="relative py-12 sm:py-16 lg:py-24 border-b border-slate-border/60 overflow-hidden bg-canvas">
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
            <span className="font-mono text-[10px] sm:text-xs text-brand-redLight uppercase tracking-wider font-semibold">
              {lang === 'id' ? "RESPON TEKNIS & PENAWARAN HARGA" : "TECHNICAL INQUIRY & RFQ"}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-xl sm:text-3xl lg:text-5xl font-bold sm:font-extrabold text-white tracking-tight leading-snug sm:leading-[1.18] mb-3 sm:mb-6"
          >
            {lang === 'id'
              ? "Hubungi Tim Rekayasa & Workshop Kami"
              : "Connect with Our Engineering & Workshop Team"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {lang === 'id'
              ? "Kirimkan gambar teknik part CAD/PDF atau deskripsi masalah otomasi pabrik Anda. Kami siap menelaah spesifikasi dan menerbitkan penawaran harga resmi."
              : "Submit your CAD/PDF drawings or automation challenge. Our team will review specs and provide a comprehensive formal quotation."}
          </motion.p>
        </div>
      </section>

      {/* 2. Main Grid: Form Left, Info Right */}
      <section className="py-8 sm:py-16 lg:py-24 bg-canvas relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-start">
            
            {/* Form Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-canvas-card/90 backdrop-blur-sm border border-slate-border/80 rounded-2xl p-4 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h2 className="text-lg sm:text-2xl font-bold text-white mb-1.5 sm:mb-2 leading-snug">
                {lang === 'id' ? "Formulir Request for Quotation (RFQ)" : "Request for Quotation (RFQ) Form"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 sm:mb-8 leading-relaxed">
                {lang === 'id'
                  ? "Lengkapi formulir di bawah ini agar tim teknis kami dapat meninjau spesifikasi dan memberikan penawaran harga resmi."
                  : "Complete your plant requirements for fast evaluation and official quotation by our engineers."}
              </p>

              {submitted && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm mb-6 flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    {lang === 'id'
                      ? "Formulir berhasil diproses! WhatsApp terbuka untuk konfirmasi langsung ke engineer."
                      : "Form processed! Opening WhatsApp for instant direct technical follow-up."}
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-slate-400 uppercase mb-1">
                      {lang === 'id' ? "Nama Pabrik / Perusahaan *" : "Company / Plant Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. PT. Manufaktur Otomotif"
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-slate-400 uppercase mb-1">
                      {lang === 'id' ? "Nama PIC / Departemen *" : "PIC Name / Department *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      placeholder="e.g. Bpk. Hendra (Maintenance)"
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-slate-400 uppercase mb-1">
                      {lang === 'id' ? "No. WhatsApp Aktif *" : "Active WhatsApp Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0812XXXXXXXX"
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-mono text-slate-400 uppercase mb-1">
                      {lang === 'id' ? "Email Kantor" : "Work Email"}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="pic@company.co.id"
                      className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-slate-400 uppercase mb-1">
                    {lang === 'id' ? "Jenis Kebutuhan Utama *" : "Primary Requirement Scope *"}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white focus:outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="machining">Machining Presisi & Spare Part (Bubut/CNC)</option>
                    <option value="automation">Kontraktor Otomasi PLC & Perakitan Panel</option>
                    <option value="fabrication">Fabrikasi Konveyor, Rangka Mesin & Cable Tray</option>
                    <option value="sourcing">Pengadaan Komponen Impor on-Demand</option>
                    <option value="troubleshoot">Penanganan Masalah / Downtime Darurat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] sm:text-xs font-mono text-slate-400 uppercase mb-1">
                    {lang === 'id' ? "Rincian Gambar Teknik / Spesifikasi *" : "Drawing Specs / Description *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={lang === 'id' 
                      ? "Jelaskan nama part, jumlah, toleransi, atau lampiran kode part/prinsipal yang dicari..." 
                      : "Describe part name, quantity, tolerances, or serial numbers..."}
                    className="w-full px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-canvas border border-slate-border text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-canvas-subtle border border-slate-border/70 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <Upload className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red shrink-0" />
                    <span>{lang === 'id' ? "File CAD/PDF dapat dilampirkan via WhatsApp setelah submit" : "CAD/PDF blueprints can be forwarded via WhatsApp"}</span>
                  </span>
                  <span className="font-mono text-emerald-400 shrink-0 font-semibold">100% Aman</span>
                </div>

                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-brand-red/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'id' ? "Kirim Permintaan & Teruskan ke WhatsApp" : "Submit RFQ & Forward to WhatsApp"}</span>
                  </button>
                </motion.div>

              </form>
            </motion.div>

            {/* Contact Information & Workshop Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 sm:p-6 rounded-2xl border border-slate-border/80 bg-canvas-card/90 shadow-xl"
              >
                <h3 className="text-sm sm:text-base font-bold text-white mb-3 sm:mb-4 pb-2 border-b border-slate-border/60">
                  {lang === 'id' ? "Informasi Kontak Operasional" : "Direct Operational Contact"}
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs">Workshop & Kantor:</span>
                      <span className="text-slate-300 leading-relaxed text-xs">{SITE.contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs">Telepon Teknis:</span>
                      <span className="font-mono text-slate-200 text-xs">{SITE.contact.phoneDisplay} / {SITE.contact.phoneSecondary}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs">Email Penawaran & Tender:</span>
                      <span className="font-mono text-slate-200 text-xs">{SITE.contact.emailSales}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs">Jam Operasional:</span>
                      <span className="text-xs text-slate-300">{lang === 'id' ? SITE.contact.hoursId : SITE.contact.hoursEn}</span>
                      <span className="text-[11px] text-amber-400 block mt-1">
                        * {lang === 'id' ? SITE.contact.emergencyNoteId : SITE.contact.emergencyNoteEn}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Instant WhatsApp Card */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 sm:p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 shadow-xl flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Fast Response WhatsApp</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                    {lang === 'id' ? "Diskusi Langsung dengan Tim Lapangan" : "Direct Chat with Field Engineers"}
                  </h4>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {lang === 'id'
                      ? "Punya kendala darurat mesin mati di pabrik? Hubungi nomor on-call teknisi kami sekarang."
                      : "Experiencing emergency line stoppage? Contact our on-call technician immediately."}
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo teknisi PT. Aris Teknindo Mandiri, kami butuh diskusi teknis darurat.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md w-full text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat Langsung: {SITE.contact.phoneDisplay}</span>
                  </a>
                </motion.div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
