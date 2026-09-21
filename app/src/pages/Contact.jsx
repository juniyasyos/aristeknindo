import React, { useState } from 'react';
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
  ShieldCheck 
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
    // Construct WhatsApp message URL for direct send option
    const text = `Halo PT. Aris Teknindo Mandiri, kami ingin mengajukan Request for Quotation (RFQ):\n- Perusahaan: ${formData.company}\n- PIC: ${formData.picName}\n- Kontak: ${formData.phone}\n- Kebutuhan: ${formData.serviceType}\n- Detail: ${formData.description}`;
    window.open(`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="flex flex-col">
      
      {/* Header */}
      <section className="relative pt-12 pb-16 lg:py-20 border-b border-slate-border/60 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold mb-3 block">
            {lang === 'id' ? "RESPON TEKNIS & PENAWARAN HARGA" : "TECHNICAL INQUIRY & RFQ"}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {lang === 'id'
              ? "Hubungi Tim Rekayasa & Workshop Kami"
              : "Connect with Our Engineering & Workshop Team"}
          </h1>
          <p className="text-base sm:text-lg text-slate-muted max-w-3xl mx-auto leading-relaxed">
            {lang === 'id'
              ? "Kirimkan gambar teknik part CAD/PDF atau deskripsi masalah otomasi pabrik Anda. Kami siap menelaah spesifikasi dan menerbitkan penawaran harga resmi."
              : "Submit your CAD/PDF drawings or automation challenge. Our team will review specs and provide a comprehensive formal quotation."}
          </p>
        </div>
      </section>

      {/* Main Grid: Form Left, Info Right */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-canvas-card border border-slate-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {lang === 'id' ? "Formulir Request for Quotation (RFQ)" : "Request for Quotation (RFQ) Form"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-muted mb-8">
                {lang === 'id'
                  ? "Isi data kebutuhan pabrik Anda untuk penanganan cepat oleh engineer ATM:"
                  : "Complete your plant requirements for fast evaluation by our engineers:"}
              </p>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    {lang === 'id'
                      ? "Formulir berhasil diproses! WhatsApp terbuka untuk konfirmasi langsung ke engineer."
                      : "Form processed! Opening WhatsApp for instant direct technical follow-up."}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "Nama Pabrik / Perusahaan *" : "Company / Plant Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. PT. Manufaktur Otomotif"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "Nama PIC / Departemen *" : "PIC Name / Department *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.picName}
                      onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                      placeholder="e.g. Bpk. Hendra (Maintenance)"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "No. WhatsApp Aktif *" : "Active WhatsApp Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0812XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                      {lang === 'id' ? "Email Kantor" : "Work Email"}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="pic@company.co.id"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
                    {lang === 'id' ? "Jenis Kebutuhan Utama *" : "Primary Requirement Scope *"}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white focus:outline-none focus:border-brand-red"
                  >
                    <option value="machining">Machining Presisi & Spare Part (Bubut/CNC)</option>
                    <option value="automation">Kontraktor Otomasi PLC & Perakitan Panel</option>
                    <option value="fabrication">Fabrikasi Konveyor, Rangka Mesin & Cable Tray</option>
                    <option value="sourcing">Pengadaan Komponen Impor on-Demand</option>
                    <option value="troubleshoot">Penanganan Masalah / Downtime Darurat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-subtle uppercase mb-1.5">
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
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas border border-slate-border text-xs text-white placeholder-slate-subtle focus:outline-none focus:border-brand-red"
                  />
                </div>

                <div className="p-3.5 rounded-xl bg-canvas-subtle border border-slate-border/70 flex items-center justify-between text-xs text-slate-subtle">
                  <span className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-brand-red" />
                    {lang === 'id' ? "Drawing CAD/PDF dapat dikirim langsung via WhatsApp setelah submit" : "CAD/PDF blueprints can be forwarded directly via WhatsApp"}
                  </span>
                  <span className="font-mono text-emerald-400">Secure</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-redDark text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-red/25 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'id' ? "Kirim Permintaan & Teruskan ke WhatsApp" : "Submit RFQ & Forward to WhatsApp"}</span>
                </button>

              </form>
            </div>

            {/* Contact Information & Workshop Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-2xl border border-slate-border bg-canvas-card shadow-xl">
                <h3 className="text-base font-bold text-white mb-4">
                  {lang === 'id' ? "Informasi Kontak Operasional" : "Direct Operational Contact"}
                </h3>

                <div className="space-y-4 text-xs text-slate-muted">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Workshop & Kantor:</span>
                      <span>{SITE.contact.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Telepon Teknis:</span>
                      <span>{SITE.contact.phoneDisplay} / {SITE.contact.phoneSecondary}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Email Penawaran & Tender:</span>
                      <span className="font-mono text-slate-300">{SITE.contact.emailSales}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Jam Operasional:</span>
                      <span>{lang === 'id' ? SITE.contact.hoursId : SITE.contact.hoursEn}</span>
                      <span className="text-[11px] text-amber-400 block mt-1">
                        * {lang === 'id' ? SITE.contact.emergencyNoteId : SITE.contact.emergencyNoteEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Fast Response WhatsApp</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {lang === 'id' ? "Diskusi Langsung dengan Tim Lapangan" : "Direct Chat with Field Engineers"}
                  </h4>
                  <p className="text-xs text-slate-muted mb-4">
                    {lang === 'id'
                      ? "Punya kendala darurat mesin mati di pabrik? Hubungi nomor on-call teknisi kami sekarang."
                      : "Experiencing emergency line stoppage? Contact our on-call technician immediately."}
                  </p>
                </div>

                <a
                  href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent("Halo teknisi PT. Aris Teknindo Mandiri, kami butuh diskusi teknis darurat.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Langsung: {SITE.contact.phoneDisplay}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
