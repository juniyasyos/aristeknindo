import { asset } from "../../utils/asset";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { SITE } from '../../data/site';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Cpu, 
  Wrench, 
  Layers, 
  Boxes,
  Clock,
  Gauge,
  ShieldCheck,
  TrendingDown,
  Sparkles,
  Zap
} from 'lucide-react';

export default function SplitStageSection() {
  const { lang } = useLanguage();
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: "case-plc",
      number: "01",
      icon: <Cpu className="w-4 h-4" />,
      tag: "Otomasi & Kontrol",
      navTitleId: "Downtime PLC & Modul Rusak",
      navTitleEn: "PLC Downtime & Module Failure",
      navDescId: "Panel lama mati & inden luar negeri 3 bulan",
      navDescEn: "Outdated panel failure & 3-month OEM lead time",
      
      // Problem Column (Bottleneck)
      problemBadgeId: "SITUASI KRITIS DI PABRIK KLIEN",
      problemBadgeEn: "PLANT OPERATIONAL BOTTLENECK",
      problemTitleId: "Lini Produksi Stop Karena Modul PLC Lama Rusak & Supplier Luar Negeri Inden 3 Bulan",
      problemTitleEn: "Production Line Halted Due to Outdated PLC Failure with 3-Month Overseas Lead Time",
      problemDescId: "Mesin produksi berhenti total karena relay/PLC jadul mati. Komponen lama sudah discontinued (obsolete), supplier luar negeri meminta waktu inden 60–90 hari, menyebabkan potensi kerugian ratusan juta per shift.",
      problemDescEn: "Critical production line paralyzed by obsolete PLC/relay failure. Overseas supplier quoted 60-90 days lead time, causing staggering downtime losses per shift.",
      symptomsId: [
        "Mesin produksi mati total tanpa sinyal output",
        "Modul kontrol lama sudah diskontinu (obsolete)",
        "Estimasi inden suku cadang luar negeri 2–3 bulan"
      ],
      symptomsEn: [
        "Line halted completely with zero controller output",
        "Outdated control hardware discontinued (obsolete)",
        "Overseas replacement quoted at 2-3 months delay"
      ],

      // Solution Column (ATM Breakthrough)
      solutionBadgeId: "TEROBOSAN REKAYASA TEKNIS ATM",
      solutionBadgeEn: "ATM ENGINEERING BREAKTHROUGH",
      solutionTitleId: "Retrofit PLC Modern Multi-Brand & Commissioning Start-Up dalam 7 Hari Kerja",
      solutionTitleEn: "Multi-Brand Modern PLC Retrofit & On-Site Commissioning Within 7 Working Days",
      solutionDescId: "Engineer ATM merancang arsitektur kontrol baru, menulis ladder logic (Mitsubishi / Omron / Allen-Bradley), merakit panel baru berstandar IEC 60204-1, dan melakukan start-up langsung di pabrik klien.",
      solutionDescEn: "ATM engineers engineered a new control architecture, authored fresh ladder logic (Mitsubishi / Omron / AB), assembled a neat IEC 60204-1 panel, and conducted on-site commissioning.",
      deliverablesId: [
        "Migrasi Ladder Logic & Pemrograman HMI Touchscreen Baru",
        "Perakitan Panel Rapi Berlabel Ferrule & Standar IEC 60204-1",
        "Uji Simulasi I/O & Start-Up Mesin Langsung di Lokasi Pabrik"
      ],
      deliverablesEn: [
        "Ladder Logic Migration & Custom Touchscreen HMI Design",
        "Neat Panel Wiring with Numbered Ferrules & IEC Compliance",
        "Complete I/O Simulation Testing & On-Site Machine Start-Up"
      ],
      image: asset("/images/project-hmi-1.webp"),
      metrics: [
        { labelId: "Lead Time Selesai", labelEn: "Turnaround Time", val: "7 Hari", noteId: "vs Inden 90 Hari", noteEn: "vs 90-Day Import" },
        { labelId: "Uji Fungsi I/O", labelEn: "Commissioning", val: "100% FAT", noteId: "Start-up di Pabrik", noteEn: "On-site Factory Start" },
        { labelId: "Standar Keamanan", labelEn: "Safety Code", val: "IEC 60204-1", noteId: "Panel Industri Rapi", noteEn: "Industrial Code" }
      ],
      actionLabelId: "Konsultasi Solusi PLC Sekarang",
      actionLabelEn: "Consult PLC Retrofit Now",
      link: "/services#automation"
    },

    {
      id: "case-machining",
      number: "02",
      icon: <Wrench className="w-4 h-4" />,
      tag: "Workshop Mandiri Babelan",
      navTitleId: "Spare Part Aus Tanpa Drawing",
      navTitleEn: "Broken Part Without CAD Drawing",
      navDescId: "Reverse engineering presisi toleransi ±0.01 mm",
      navDescEn: "Precision reverse engineering to ±0.01 mm",

      problemBadgeId: "SITUASI KRITIS DI PABRIK KLIEN",
      problemBadgeEn: "PLANT OPERATIONAL BOTTLENECK",
      problemTitleId: "Spare Part Shaft / Gear Patah Mendadak & Tidak Memiliki Gambar Teknik CAD Asli",
      problemTitleEn: "Machine Shaft / Gear Broken with Zero Original CAD Drawings Available",
      problemDescId: "Komponen mesin impor buatan Jepang/Jerman aus drastis. Buku manual tidak menyertakan gambar teknik detail, pabrikan mesin asal sudah tutup atau tidak melayani suku cadang satuan.",
      problemDescEn: "Critical mechanical component on imported machinery failed. No technical drawings exist, OEM maker is unreachable or refuses small-batch orders, risking prolonged line stoppage.",
      symptomsId: [
        "Tidak ada file drawing teknik CAD 2D/3D dari pabrikan",
        "Part aus menyebabkan getaran dan mesin macet",
        "Biaya part OEM impor sangat mahal dengan minimum order besar"
      ],
      symptomsEn: [
        "Zero CAD drawing files available from original OEM",
        "Worn parts generating excessive vibration & jamming",
        "Prohibitive OEM replacement cost with minimum orders"
      ],

      solutionBadgeId: "TEROBOSAN REKAYASA TEKNIS ATM",
      solutionBadgeEn: "ATM ENGINEERING BREAKTHROUGH",
      solutionTitleId: "Reverse Engineering Fisik & Pengerjaan di Workshop Babelan (Toleransi ±0.01 mm)",
      solutionTitleEn: "Physical Reverse Engineering & In-House Machining (Tolerance ±0.01 mm)",
      solutionDescId: "Tim teknis ATM mengukur sampel fisik yang patah menggunakan micrometer & dial gauge, menyusun gambar kerja CAD 3D, memilih material paduan tangguh (S45C / SUS304 / SKD11), dan membubut di workshop mandiri Babelan.",
      solutionDescEn: "ATM engineers measured the worn physical sample using micrometers & dial gauges, modeled accurate 3D CAD drawings, selected high-grade alloy (S45C / SUS304 / SKD11), and machined it in Babelan.",
      deliverablesId: [
        "Pengukuran Reverse Engineering Akurat dari Sampel Fisik",
        "Machining Bubut, Milling & CNC dengan Toleransi ±0.01 mm",
        "0-Inden Sourcing: Part Siap Pasang dalam 2–5 Hari Kerja"
      ],
      deliverablesEn: [
        "Precise Reverse Engineering Modeling from Physical Samples",
        "Lathe, Milling & CNC Machining with Strict ±0.01 mm Tolerance",
        "0-Lead-Time: Ready-to-Install Parts within 2–5 Working Days"
      ],
      image: asset("/images/part-shaft-gear.webp"),
      metrics: [
        { labelId: "Akurasi Ukur", labelEn: "Accuracy", val: "±0.01 mm", noteId: "Mikrometer Verified", noteEn: "Micrometer Verified" },
        { labelId: "Lead Time Sourcing", labelEn: "Turnaround", val: "2-5 Hari", noteId: "0-Inden Luar Negeri", noteEn: "Zero Import Delay" },
        { labelId: "Efisiensi Biaya", labelEn: "Cost Savings", val: "40-60%", noteId: "vs Part OEM Impor", noteEn: "vs OEM Import Cost" }
      ],
      actionLabelId: "Kirim Sampel / Drawing untuk Estimasi",
      actionLabelEn: "Send Sample / Drawing for Quote",
      link: "/contact"
    },

    {
      id: "case-cabletray",
      number: "03",
      icon: <Layers className="w-4 h-4" />,
      tag: "Infrastruktur Pabrik",
      navTitleId: "Kabel Semrawut & Bahaya K3",
      navTitleEn: "Messy Cabling & HSE Hazard",
      navDescId: "Penataan cable tray galvanis standar audit pabrik",
      navDescEn: "Galvanized cable tray routing for HSE audit",

      problemBadgeId: "SITUASI KRITIS DI PABRIK KLIEN",
      problemBadgeEn: "PLANT OPERATIONAL BOTTLENECK",
      problemTitleId: "Kabel Mesin Berantakan di Lantai, Rawan Korsleting & Gagal Lolos Audit K3 Pabrik",
      problemTitleEn: "Machine Cables Exposed on Plant Floor, High Short-Circuit Risk & HSE Audit Failure",
      problemDescId: "Kabel daya tegangan tinggi dan kabel sinyal sensor bertumpuk tanpa proteksi di area lalu lintas operator & forklift. Rawan korsleting, interferensi elektromagnetik pada sensor mesin, dan berisiko kebakaran.",
      problemDescEn: "Heavy power cables and low-voltage sensor lines mixed carelessly on plant floors. Severe danger from forklift traffic, electromagnetic noise disrupting sensors, and fire hazards.",
      symptomsId: [
        "Kabel berserakan di lantai membahayakan operator & forklift",
        "Noise sinyal kontrol menyebabkan error pembacaan sensor",
        "Temuan pelanggaran audit K3 keselamatan manufaktur"
      ],
      symptomsEn: [
        "Floor-cluttered cables risking forklift cuts & worker injury",
        "Electromagnetic noise causing erratic sensor faults",
        "Non-compliance flags during plant occupational safety audits"
      ],

      solutionBadgeId: "TEROBOSAN REKAYASA TEKNIS ATM",
      solutionBadgeEn: "ATM ENGINEERING BREAKTHROUGH",
      solutionTitleId: "Instalasi Cable Tray Hot-Dip Galvanized & Pemisahan Jalur Tegangan K3",
      solutionTitleEn: "Hot-Dip Galvanized Cable Tray Installation & Strict Power-Signal Separation",
      solutionDescId: "ATM merancang dan memasang jalur cable ladder serta perforated tray galvanis anti-karat dengan bracket penyangga kokoh anti-lendut. Memisahkan jalur daya dari kabel sinyal instrumen untuk mengeliminasi noise secara total.",
      solutionDescEn: "ATM designed and installed heavy-duty anti-corrosion galvanized cable ladders/trays with reinforced brackets. Fully segregated power lines from PLC signal wires to eliminate noise and satisfy audits.",
      deliverablesId: [
        "Pemasangan Cable Tray Perforated & Cable Ladder Hot-Dip Galvanized",
        "Pemisahan Ketat Jalur Kabel Power 380V & Sinyal Kontrol 24VDC",
        "Bracket Penyangga Beban Kokoh Tahan Getaran Mesin Pabrik"
      ],
      deliverablesEn: [
        "Perforated Cable Tray & Hot-Dip Galvanized Ladder Installation",
        "Strict Physical Separation: 380V Power vs 24VDC Signal Cables",
        "Vibration-Resistant Heavy-Duty Structural Mounting Brackets"
      ],
      image: asset("/images/project-cabletray-1.webp"),
      metrics: [
        { labelId: "Kesesuaian Audit", labelEn: "Audit Compliance", val: "100% K3", noteId: "Standar Keselamatan", noteEn: "Plant HSE Standard" },
        { labelId: "Interferensi", labelEn: "Signal Quality", val: "0-Noise", noteId: "Sensor Akurat", noteEn: "Clean Signal Flow" },
        { labelId: "Proteksi Fisik", labelEn: "Durability", val: "Galvanis", noteId: "Tahan Karat & Beban", noteEn: "Heavy Corrosion Proof" }
      ],
      actionLabelId: "Diskusikan Penataan Jalur Kabel",
      actionLabelEn: "Discuss Cable Routing Plan",
      link: "/services#fabrication"
    },

    {
      id: "case-sourcing",
      number: "04",
      icon: <Boxes className="w-4 h-4" />,
      tag: "Rantai Pasok Terverifikasi",
      navTitleId: "Risiko Suku Cadang Palsu",
      navTitleEn: "Counterfeit Part Risks",
      navDescId: "Jaminan 100% original dari 29+ brand dunia",
      navDescEn: "100% genuine guaranteed from 29+ brands",

      problemBadgeId: "SITUASI KRITIS DI PABRIK KLIEN",
      problemBadgeEn: "PLANT OPERATIONAL BOTTLENECK",
      problemTitleId: "Kekhawatiran Barang Tiruan / Rekondisi yang Merusak Mesin Bernilai Miliaran",
      problemTitleEn: "Severe Threat of Counterfeit or Refurbished Parts Damaging High-Value Production Lines",
      problemDescId: "Pasar umum marak beredar bearing, inverter, dan sensor rekondisi yang dilabeli ulang menyerupai barang baru. Jika dipasang pada mesin berkecepatan tinggi, part palsu bisa pecah seketika dan merusak sistem drive utama.",
      problemDescEn: "Industrial market is flooded with reconditioned or counterfeit bearings and sensors. Installing fake parts on high-speed machinery causes catastrophic mechanical seizing and burnt drives.",
      symptomsId: [
        "Maraknya bearing & sensor rekondisi berlabel palsu di pasaran",
        "Part KW cepat aus dan memicu kerusakan motor/inverter",
        "Kesulitan menemukan part number spesifik yang cocok 100%"
      ],
      symptomsEn: [
        "Market flooded with re-labeled, second-hand components",
        "Counterfeit parts failing prematurely and torching inverters",
        "Struggles finding exact genuine factory part numbers"
      ],

      solutionBadgeId: "TEROBOSAN REKAYASA TEKNIS ATM",
      solutionBadgeEn: "ATM ENGINEERING BREAKTHROUGH",
      solutionTitleId: "Akses Suplai Resmi 29+ Brand Terkemuka Dunia dengan Garansi Keaslian 100%",
      solutionTitleEn: "Direct Supply Access from 29+ Global Tier-1 Brands with 100% Authenticity Guarantee",
      solutionDescId: "ATM menyediakan jalur suplai resmi suku cadang otomasi (Mitsubishi, Yaskawa, Omron, Fuji) dan komponen mekanikal (THK, NSK, Timken, NTN, IKO) bergaransi 100% baru dan asli sesuai kode katalog pabrikan resmi.",
      solutionDescEn: "ATM provides verified supply channels for automation parts (Mitsubishi, Yaskawa, Omron, Fuji) and precision mechanics (THK, NSK, Timken, NTN, IKO) backed by official manufacturer warranties.",
      deliverablesId: [
        "100% Jaminan Suku Cadang Asli & Baru Langsung dari Prinsipal",
        "Verifikasi Kesesuaian Nomor Part (Part Number) Sebelum Pengiriman",
        "Dukungan Teknis Kompatibilitas & Penggantian Part di Lapangan"
      ],
      deliverablesEn: [
        "100% Genuine, Brand-New Components Directly from Verified Principals",
        "Strict Exact Part Number Verification Prior to Delivery",
        "On-Site Compatibility Consultation & Technical Installation Support"
      ],
      image: asset("/images/part-sprocket.webp"),
      metrics: [
        { labelId: "Jaringan Suplai", labelEn: "Global Network", val: "29+ Brand", noteId: "Jepang, Jerman, AS", noteEn: "Japan, Germany, USA" },
        { labelId: "Jaminan Orisinal", labelEn: "Authenticity", val: "100% Asli", noteId: "Garansi Pabrikan", noteEn: "Official Warranty" },
        { labelId: "Metode Inquiry", labelEn: "Inquiry Speed", val: "Foto Part", noteId: "Cek Stok Cepat", noteEn: "Quick Match by Photo" }
      ],
      actionLabelId: "Cek Ketersediaan Part Number",
      actionLabelEn: "Verify Part Number Availability",
      link: "/products"
    }
  ];

  const currentCase = cases[activeCase];

  return (
    <section className="py-16 lg:py-24 border-b border-slate-border/60 relative bg-canvas overflow-hidden">
      {/* Background Tech Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-brand-red/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Problem Solver Persona */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-canvas-card border border-brand-red/30 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-red" />
              <span className="font-mono text-xs text-brand-redLight uppercase tracking-wider font-semibold">
                {lang === 'id' ? "Engineering Problem-Solver // PT. ATM" : "Engineering Problem-Solver // PT. ATM"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {lang === 'id' 
                ? "Solusi Nyata Mengatasi Kendala Kritis Lini Produksi Pabrik" 
                : "Operational Problem-Solver for Critical Factory Bottlenecks"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            {lang === 'id'
              ? "Kami tidak hanya menyediakan suku cadang, tetapi menyelesaikan bottleneck manufaktur nyata: dari mesin stop karena modul obsolete, hingga pembuatan part presisi tanpa drawing asli."
              : "We don't just sell components; we eliminate critical manufacturing bottlenecks: from downtime due to obsolete PLCs to machining precision parts without original drawings."}
          </p>
        </div>

        {/* 4 Interactive Problem Scenario Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {cases.map((c, idx) => {
            const isActive = activeCase === idx;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCase(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#151D2C] border-brand-red ring-1 ring-brand-red/50 shadow-xl shadow-brand-red/10'
                    : 'bg-canvas-card/60 hover:bg-canvas-card border-slate-border/80 hover:border-slate-border'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`p-1.5 rounded-lg ${isActive ? 'bg-brand-red text-white' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'}`}>
                    {c.icon}
                  </span>
                  <span className={`font-mono text-[10px] uppercase tracking-wider font-bold ${isActive ? 'text-brand-redLight' : 'text-slate-500'}`}>
                    KASUS {c.number}
                  </span>
                </div>

                <div>
                  <h3 className={`font-mono text-xs sm:text-sm font-bold tracking-tight mb-1 transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {lang === 'id' ? c.navTitleId : c.navTitleEn}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {lang === 'id' ? c.navDescId : c.navDescEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* THE TRANSFORMATION ARENA: Before (Bottleneck) vs After (ATM Breakthrough) */}
        {/* ========================================================================= */}
        <div className="rounded-2xl border border-slate-border bg-canvas-card shadow-2xl overflow-hidden mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* --------------------------------------------------------------------- */}
            {/* LEFT SIDE: The Factory Bottleneck (5 Cols)                            */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#141217] border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between">
              <div>
                {/* Bottleneck Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px] font-bold tracking-wider mb-4">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? currentCase.problemBadgeId : currentCase.problemBadgeEn}</span>
                </div>

                {/* Problem Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4">
                  {lang === 'id' ? currentCase.problemTitleId : currentCase.problemTitleEn}
                </h3>

                {/* Problem Narrative */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'id' ? currentCase.problemDescId : currentCase.problemDescEn}
                </p>

                {/* Key Bottleneck Symptoms */}
                <div className="space-y-2.5 p-4 rounded-xl bg-canvas/60 border border-slate-800/80 mb-6">
                  <span className="font-mono text-[11px] text-amber-400 font-semibold tracking-wider block">
                    {lang === 'id' ? "Dampak & Risiko Operasional:" : "Operational Impact & Symptoms:"}
                  </span>
                  {(lang === 'id' ? currentCase.symptomsId : currentCase.symptomsEn).map((symptom, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span className="leading-snug">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Setiap jam mesin berhenti = kerugian kapasitas produksi</span>
              </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            {/* RIGHT SIDE: The ATM Breakthrough & Deliverables (7 Cols)             */}
            {/* --------------------------------------------------------------------- */}
            <div className="lg:col-span-7 p-6 sm:p-8 bg-[#0F1626]/80 flex flex-col justify-between">
              <div>
                
                {/* Solution Badge & Location Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'id' ? currentCase.solutionBadgeId : currentCase.solutionBadgeEn}</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    KASUS 0{activeCase + 1} // ATM-SOLVER
                  </span>
                </div>

                {/* Solution Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
                  {lang === 'id' ? currentCase.solutionTitleId : currentCase.solutionTitleEn}
                </h3>

                {/* Solution Narrative */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {lang === 'id' ? currentCase.solutionDescId : currentCase.solutionDescEn}
                </p>

                {/* Real Photo Asset of Solution */}
                <div className="relative rounded-xl overflow-hidden border border-slate-700/80 mb-6 h-48 sm:h-56 bg-black group">
                  <img
                    src={currentCase.image}
                    alt={currentCase.solutionTitleId}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-canvas/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-200">
                    <span className="truncate">Hasil Pengerjaan Tim Teknis PT. ATM</span>
                    <span className="text-emerald-400 font-bold shrink-0">100% Teruji</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase block">
                    {lang === 'id' ? "Output Pengerjaan Terverifikasi:" : "Verified Project Deliverables:"}
                  </span>
                  {(lang === 'id' ? currentCase.deliverablesId : currentCase.deliverablesEn).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* 3 Performance Impact Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-800">
                  {currentCase.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3 rounded-lg bg-canvas/70 border border-slate-800 text-left">
                      <span className="font-mono text-lg sm:text-xl font-black text-white tracking-tight block">
                        {m.val}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-300 block leading-tight mt-0.5">
                        {lang === 'id' ? m.labelId : m.labelEn}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">
                        {lang === 'id' ? m.noteId : m.noteEn}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={currentCase.link}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-red hover:bg-brand-redDark text-white text-xs sm:text-sm font-semibold shadow-lg shadow-brand-red/25 transition-all group text-center"
                >
                  <span>{lang === 'id' ? currentCase.actionLabelId : currentCase.actionLabelEn}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={`https://wa.me/${SITE.contact.whatsappNumber}?text=${encodeURIComponent(`Halo tim engineer PT. Aris Teknindo Mandiri, saya ingin mendiskusikan masalah lini produksi kami terkait: ${currentCase.navTitleId}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-canvas-card hover:bg-canvas border border-slate-700 text-white text-xs sm:text-sm font-medium transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'id' ? "Konsultasi Cepat via WhatsApp" : "Quick WhatsApp Consultation"}</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Operational Guarantee Strip */}
        <div className="p-4 sm:p-5 rounded-xl bg-canvas-card border border-slate-border/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <span className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              Workshop Mandiri Babelan, Bekasi
            </span>
            <span className="flex items-center gap-2">
              ● Pemotongan Downtime Kritis Pabrik
            </span>
            <span className="flex items-center gap-2">
              ● Jaminan 100% Suku Cadang Orisinal
            </span>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs text-brand-redLight hover:text-white transition-colors"
          >
            <span>Kirim Spesifikasi Masalah Pabrik Anda</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
