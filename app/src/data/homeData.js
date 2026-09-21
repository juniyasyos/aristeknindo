export const HOME_DATA = {
  hero: {
    badgeId: "Mekanikal, Elektrikal & Kontraktor Otomasi PLC • Bekasi",
    badgeEn: "Mechanical, Electrical & PLC Automation Contractor • Bekasi",
    h1Id: "Fabrikasi Presisi & Kontraktor Otomasi PLC Industri",
    h1En: "Precision Machining & Industrial PLC Automation",
    descriptionId: "Mendukung keandalan lini produksi manufaktur dan otomotif melalui pengerjaan spare part di workshop mandiri serta perancangan sistem kontrol PLC.",
    descriptionEn: "Supporting manufacturing and automotive production reliability through in-house spare part machining and turnkey PLC automation systems.",
    ctaDrawingId: "Kirim Drawing / Minta Penawaran",
    ctaDrawingEn: "Submit Drawing / Request Quote",
    ctaWhatsappId: "Konsultasi via WhatsApp",
    ctaWhatsappEn: "WhatsApp Consultation",
    stats: [
      { value: "Workshop", labelId: "Bubut, Milling & CNC Mandiri", labelEn: "In-house Lathe, Milling & CNC" },
      { value: "29+", labelId: "Brand Industri Global Terverifikasi", labelEn: "Verified Global Tier-1 Brands" },
      { value: "0-Inden", labelId: "Alternatif Cepat Tanpa Inden Luar Negeri", labelEn: "Rapid In-House Machining" },
      { value: "Bekasi", labelId: "Akses Cikarang & Karawang", labelEn: "Cikarang & Karawang Hub" }
    ],
    image: "/images/hero-industrial.jpg"
  },

  brandsTicker: {
    headingId: "Akses Suplai Komponen Standar Industri dari Prinsipal Terkemuka Dunia",
    headingEn: "Direct Industrial Supply Access from Verified Global Principals",
    subheadingId: "Kami menyuplai komponen otomasi, sensor, bearing presisi, dan linear motion dari 29+ merek terpercaya:",
    subheadingEn: "Supplying genuine automation parts, sensors, precision bearings, and linear motion from 29+ world-class brands:"
  },

  pillarsSection: {
    tagId: "PANGGUNG KAPABILITAS REKAYASA",
    tagEn: "ENGINEERING CAPABILITY STAGE",
    headingId: "Solusi Terintegrasi Kebutuhan Lini Produksi Pabrik",
    headingEn: "Integrated Engineering Solutions for Plant Operations",
    subheadingId: "Pilih kapabilitas di sebelah kiri untuk melihat detail masalah, metode pengerjaan, dan output teknis kami.",
    subheadingEn: "Select a capability on the left to review the operational challenge, our technical solution, and deliverables.",
    pillars: [
      {
        id: "otomasi-plc",
        number: "01",
        titleId: "Otomasi & Kontraktor PLC Industri",
        titleEn: "Industrial Automation & PLC Contracting",
        shortDescId: "Rancang bangun kontrol PLC, HMI touchscreen, inverter, dan perakitan panel kabel.",
        shortDescEn: "Turnkey PLC control systems, HMI touchscreens, inverter drives, and panel wiring.",
        badgeId: "Otomasi & Kontrol",
        badgeEn: "Automation & Control",
        headlineId: "Rancang Bangun Sistem Kontrol PLC & Integrasi Panel dari Konsep hingga Start-up",
        headlineEn: "Turnkey PLC Control Systems & Panel Integration from Concept to Commissioning",
        problemId: "Lini produksi menghadapi mesin berhenti karena panel kontrol lama rusak, ketergantungan proses manual yang rawan human error, atau integrasi mesin baru yang belum sinkron.",
        problemEn: "Production lines facing downtime due to outdated relay panels, manual process errors, or unsynchronized machinery requiring modern PLC sequence control.",
        solutionId: "ATM merancang arsitektur kontrol, memprogram ladder logic (Mitsubishi, Omron, Allen-Bradley), merakit panel rapi berstandar industri, serta melakukan uji fungsi dan start-up langsung di pabrik klien.",
        solutionEn: "ATM designs control schematics, writes robust PLC ladder logic (Mitsubishi, Omron, Allen-Bradley), builds neat industrial control panels, and executes on-site commissioning.",
        deliverables: [
          { id: "PLC Programming (Mitsubishi, Omron, Allen-Bradley)", en: "PLC Programming (Mitsubishi, Omron, Allen-Bradley)" },
          { id: "Desain HMI Touchscreen & SCADA Monitoring", en: "HMI Touchscreen Design & SCADA Monitoring" },
          { id: "Perakitan Panel Distribusi & Kontrol Daya Rapi", en: "Neat Control & Power Distribution Panel Assembly" },
          { id: "Integrasi Sensor, Inverter Drive, & Servo Motor", en: "Sensor, Inverter Drive & Servo Motor Integration" }
        ],
        brandsCovered: ["Mitsubishi Electric", "Yaskawa", "Autonics", "Panasonic SUNX", "Fuji Electric", "Allen-Bradley", "FANUC"],
        actionLabelId: "Konsultasi Kebutuhan PLC",
        actionLabelEn: "Consult PLC Requirements",
        image: "/images/project-hmi-1.webp",
        link: "/services#automation",
        specs: [
          { labelId: "Main Controller", labelEn: "Main Controller", val: "Mitsubishi Q/FX, Omron CJ/NX, Allen-Bradley" },
          { labelId: "Standar Wiring", labelEn: "Wiring Standard", val: "IEC 60204-1 Industrial Safety Code" },
          { labelId: "HMI / SCADA", labelEn: "HMI / SCADA", val: "Pro-Face, Mitsubishi GOT, Weintek Touchscreen" },
          { labelId: "Uji Fungsi", labelEn: "Testing & Validation", val: "Factory Acceptance Test (FAT) & SAT On-Site" }
        ],
        hotspots: [
          { x: 26, y: 30, titleId: "Ladder Logic Multi-Brand", titleEn: "Multi-Brand Ladder Logic", descId: "Mitsubishi, Omron & Allen-Bradley", descEn: "Mitsubishi, Omron & Allen-Bradley" },
          { x: 68, y: 52, titleId: "Standar Kabel IEC", titleEn: "IEC Standard Wiring", descId: "Penataan kabel rapi & bernomor ferrule", descEn: "Neat wiring & numbered ferrules" },
          { x: 48, y: 78, titleId: "HMI & Alarm Diagnostic", titleEn: "HMI & Alarm Diagnostics", descId: "Touchscreen UI & status monitoring", descEn: "Touchscreen UI & status monitoring" }
        ]
      },
      {
        id: "machining-presisi",
        number: "02",
        titleId: "Fabrikasi & Machining Presisi",
        titleEn: "Precision Machining & Spare Parts",
        shortDescId: "Pembuatan spare part kustom via Bubut, Milling, dan CNC toleransi presisi.",
        shortDescEn: "Custom spare part fabrication via precision Lathe, Milling, and CNC.",
        badgeId: "Workshop Mandiri",
        badgeEn: "In-House Workshop",
        headlineId: "Pembuatan Spare Part Mesin Presisi Tinggi Sesuai Drawing CAD atau Sampel Fisik",
        headlineEn: "High-Precision Spare Part Machining Matching CAD Drawings or Physical Samples",
        problemId: "Part mesin impor aus, patah, atau aus drastis. Pemesanan suku cadang asli ke OEM luar negeri (inden) butuh 2-4 bulan dengan biaya tinggi yang melumpuhkan lini produksi.",
        problemEn: "Critical imported machine parts wear out or break. Sourcing OEM parts overseas requires 2-4 months lead time and prohibitive costs, halting manufacturing throughput.",
        solutionId: "Diproduksi langsung di workshop ATM Babelan menggunakan kombinasi mesin Bubut, Milling, dan CNC dengan toleransi ukuran mikrometer ketat sesuai gambar teknik CAD atau pengukuran reverse-engineering sampel fisik.",
        solutionEn: "Manufactured directly at ATM's Babelan workshop utilizing precision Lathes, Milling, and CNC equipment to tight micrometer tolerances based on CAD drawings or sample reverse engineering.",
        deliverables: [
          { id: "Shaft Bertingkat, Pin Pasak & Rod Silinder", en: "Stepped Shafts, Dowel Pins & Cylinder Rods" },
          { id: "Drive Sprocket, Half Shaft Gear & Flange Hydraulic", en: "Drive Sprockets, Half Shaft Gears & Hydraulic Flanges" },
          { id: "Bearing Support, Bushing Bronze & Drum Pulley", en: "Bearing Supports, Bronze Bushings & Drum Pulleys" },
          { id: "Rekondisi Part Aus & Hard Chrome Coating", en: "Worn Part Reconditioning & Surface Hardening" }
        ],
        brandsCovered: ["THK", "HIWIN", "NSK", "KHK Stock Gears", "Tsubaki", "Koyo", "Timken"],
        actionLabelId: "Kirim Drawing untuk Dihitung Biaya",
        actionLabelEn: "Submit Drawing for Quote",
        image: "/images/part-shaft-gear.webp",
        link: "/services#machining",
        specs: [
          { labelId: "Kapasitas Workshop", labelEn: "Workshop Capacity", val: "Bubut s/d Ø600mm x 2000mm, Milling, CNC 3-Axis" },
          { labelId: "Toleransi Ukur", labelEn: "Tolerance Accuracy", val: "Presisi tinggi hingga ±0.01 mm (Mikrometer)" },
          { labelId: "Pilihan Material", labelEn: "Material Grades", val: "S45C, SS400, SKD11, SUS304/316, Bronze, POM" },
          { labelId: "Lead Time Produksi", labelEn: "Production Lead Time", val: "2 - 5 Hari Kerja (0-Inden Luar Negeri)" }
        ],
        hotspots: [
          { x: 30, y: 35, titleId: "Toleransi Presisi ±0.01 mm", titleEn: "Tolerance ±0.01 mm", descId: "Uji mikrometer & dial gauge presisi", descEn: "Strict micrometer & dial gauge validation" },
          { x: 72, y: 48, titleId: "Material S45C / SUS304", titleEn: "S45C / SUS304 Material", descId: "Pilihan baja paduan & stainless tahan aus", descEn: "Wear-resistant alloy steel & stainless options" },
          { x: 45, y: 75, titleId: "Reverse Engineering", titleEn: "Reverse Engineering", descId: "Dapat dikerjakan dari sampel fisik tanpa drawing", descEn: "Manufactured from physical sample without drawing" }
        ]
      },
      {
        id: "fabrikasi-konveyor",
        number: "03",
        titleId: "Fabrikasi Mesin & Sistem Konveyor",
        titleEn: "Conveyor Systems & Plant Fabrication",
        shortDescId: "Sistem konveyor perakitan, safety guard mesin, tangki, dan instalasi cable tray.",
        shortDescEn: "Assembly conveyor systems, machine safety guards, industrial tanks & cable trays.",
        badgeId: "Struktur & Sistem",
        badgeEn: "Structure & Systems",
        headlineId: "Rancang Bangun Konveyor, Cover Mesin Pengaman, Tangki & Instalasi Cable Tray",
        headlineEn: "Custom Assembly Conveyors, Machine Safety Guards, Industrial Tanks & Cable Trays",
        problemId: "Kebutuhan ekspansi fasilitas transfer material pabrik, peningkatan proteksi K3 operator mesin (safety guard), serta penataan jalur kabel daya dan sinyal yang rapi berstandar audit.",
        problemEn: "Plant demands for automated material transfer lines, mandatory HSE operator safety guards, and code-compliant heavy industrial power/signal cable tray routing.",
        solutionId: "Fabrikasi struktur baja/stainless custom, perakitan meja konveyor sabuk/roller berkecepatan variabel, pembuatan cover pengaman akrilik/perforated, dan instalasi cable tray rapi berstandar K3.",
        solutionEn: "Custom steel/stainless structural fabrication, variable-speed belt/roller conveyor assembly, operator safety guards, and industrial-grade cable tray routing compliant with HSE audits.",
        deliverables: [
          { id: "Belt Conveyor, Roller Conveyor & Chain Feeder", en: "Belt Conveyors, Roller Conveyors & Chain Feeders" },
          { id: "Machine Safety Enclosure / Protective Cover", en: "Machine Safety Enclosures & Operator Guards" },
          { id: "Ducting, Tangki Industri & Rangka Baja Mesin", en: "Ducting, Storage Tanks & Structural Machine Frames" },
          { id: "Instalasi Jalur Cable Tray Daya & Instrumentasi", en: "Heavy Power & Instrumentation Cable Tray Installation" }
        ],
        brandsCovered: ["Hanshin RoboChain", "TSUBAKI", "Casix", "Nitta Moore"],
        actionLabelId: "Diskusikan Kebutuhan Fabrikasi",
        actionLabelEn: "Discuss Fabrication Needs",
        image: "/images/project-cabletray-1.webp",
        link: "/services#fabrication",
        specs: [
          { labelId: "Tipe Tray / Jalur", labelEn: "Tray / Trunking Type", val: "Perforated Tray, Cable Ladder, Trunking Galvanis" },
          { labelId: "Finishing Proteksi", labelEn: "Surface Finish", val: "Hot-Dip Galvanized & Electro-Plated Anti Karat" },
          { labelId: "Standar K3", labelEn: "HSE Standards", val: "Pemisahan Jalur Kabel Power & Sinyal Kontrol" },
          { labelId: "Fabrikasi Terkait", labelEn: "Related Fabrication", val: "Rangka Mesin, Safety Guard Akrilik, Tangki" }
        ],
        hotspots: [
          { x: 28, y: 35, titleId: "Cable Tray Galvanis", titleEn: "Galvanized Cable Tray", descId: "Tahan korosi & lingkungan pabrik", descEn: "Corrosion resistant for plant environment" },
          { x: 68, y: 42, titleId: "Safety Routing K3", titleEn: "HSE Safety Routing", descId: "Pemisahan tegangan tinggi & sinyal PLC", descEn: "Separation of power & PLC signal cables" },
          { x: 50, y: 75, titleId: "Beban & Penyangga", titleEn: "Load & Bracket Support", descId: "Bracket kokoh anti-lendut jangka panjang", descEn: "Sturdy long-span anti-sag brackets" }
        ]
      },
      {
        id: "pengadaan-part",
        number: "04",
        titleId: "Pengadaan Komponen Impor on-Demand",
        titleEn: "On-Demand Global Industrial Sourcing",
        shortDescId: "Suplai suku cadang otomasi, sensor, bearing, dan motion tier-1 dunia.",
        shortDescEn: "Sourcing genuine automation parts, sensors, bearings, and motion hardware.",
        badgeId: "29+ Brand Dunia",
        badgeEn: "29+ Global Brands",
        headlineId: "Suplai Komponen Standar Industri Internasional untuk Kebutuhan Maintenance Berkala",
        headlineEn: "Genuine International Industrial Components for Preventive & Corrective Maintenance",
        problemId: "Tim Purchasing dan Maintenance kesulitan menemukan suku cadang pengganti standar Jepang, Korea, atau Eropa dengan kode part spesifik tanpa resiko barang tiruan.",
        problemEn: "Procurement and maintenance departments struggle to source exact replacement parts from Japan, Korea, or Europe with authentic certification and transparent lead times.",
        solutionId: "Akses rantai pasok langsung untuk komponen elektrik, kontrol, sensor, bearing, dan linear motion dari 29 merek terkemuka dunia dengan garansi keaslian spesifikasi.",
        solutionEn: "Direct supply chain network for electrical automation, sensors, precision bearings, and linear motion hardware from 29 verified global brands with guaranteed authenticity.",
        deliverables: [
          { id: "Automation: Mitsubishi Electric, Yaskawa, Autonics, Cognex, Fuji", en: "Automation: Mitsubishi Electric, Yaskawa, Autonics, Cognex, Fuji" },
          { id: "Sensors & Pneumatics: Panasonic SUNX, Koganei, Seametrics, Casix", en: "Sensors & Pneumatics: Panasonic SUNX, Koganei, Seametrics, Casix" },
          { id: "Linear Motion & Guides: THK, HIWIN, Samick, Hanshin", en: "Linear Motion & Guides: THK, HIWIN, Samick, Hanshin" },
          { id: "Bearings & Power Transmission: NSK, NTN, Koyo, Timken, FAG, Tsubaki", en: "Bearings & Transmission: NSK, NTN, Koyo, Timken, FAG, Tsubaki" }
        ],
        brandsCovered: ["THK", "NSK", "Timken", "Autonics", "Mitsubishi", "Yaskawa", "HIWIN", "NTN", "Cognex"],
        actionLabelId: "Kirim Part Number untuk Cek Stok",
        actionLabelEn: "Check Part Availability",
        image: "/images/part-sprocket.webp",
        link: "/products",
        specs: [
          { labelId: "Cakupan Brand", labelEn: "Brand Coverage", val: "29+ Merek Resmi (Mitsubishi, Yaskawa, THK, NSK, dll.)" },
          { labelId: "Jaminan Kualitas", labelEn: "Quality Guarantee", val: "100% Baru & Orisinal dari Pabrikan Resmi" },
          { labelId: "Metode Inquiry", labelEn: "Inquiry Method", val: "Cukup Foto Nameplate Mesin atau Kode Part" },
          { labelId: "Waktu Pengiriman", labelEn: "Delivery Sourcing", val: "Ready Stock / Fast-Sourcing (0-Inden Luar Negeri)" }
        ],
        hotspots: [
          { x: 32, y: 35, titleId: "Verifikasi Part Number", titleEn: "Part Number Verification", descId: "Kesesuaian 100% dengan mesin existing", descEn: "100% exact match for existing machinery" },
          { x: 70, y: 52, titleId: "Brand Global Terkemuka", titleEn: "Verified Tier-1 Brands", descId: "Japan, Germany, USA, South Korea, Taiwan", descEn: "Japan, Germany, USA, South Korea, Taiwan" },
          { x: 45, y: 78, titleId: "Alternatif Cepat", titleEn: "Fast Alternative", descId: "Solusi cepat saat part OEM inden berbulan-bulan", descEn: "Quick turnaround when OEM import takes months" }
        ]
      }
    ]
  },

  workshopSection: {
    tagId: "BUKTI KAPASITAS FISIK",
    tagEn: "IN-HOUSE PHYSICAL CAPABILITIES",
    headingId: "Dikerjakan di Fasilitas Mandiri, Bukan Dilempar ke Pihak Ketiga",
    headingEn: "Executed in Our Own Workshop, Not Brokered to Third Parties",
    subheadingId: "Workshop teknis kami di Babelan, Bekasi dilengkapi mesin konvensional dan CNC untuk menjamin toleransi presisi dan kepastian jadwal pengiriman.",
    subheadingEn: "Our dedicated technical workshop in Babelan, Bekasi is equipped with conventional and CNC machinery, guaranteeing precision tolerances and delivery certainty.",
    facilities: [
      {
        id: "bubut",
        titleId: "Mesin Bubut (Lathe)",
        titleEn: "Industrial Lathe Machines",
        roleId: "Pengerjaan Komponen Silindris & Poros Presisi",
        roleEn: "Precision Cylindrical & Shaft Turning",
        descId: "Digunakan untuk pembubutan poros bertingkat, ulir presisi metrik/inci, pin pasak, bushing bronze, dan rekondisi bagian mesin yang aus dengan toleransi mikrometer.",
        descEn: "Handles precision stepped shafts, metric/inch threading, dowel pins, bronze bushings, and reconditioning of worn machine parts to micrometer tolerances.",
        image: "/images/workshop-lathe.webp",
        capabilities: ["Shaft bertingkat hingga diameter besar", "Ulir baut & drat khusus", "Bushing bronze & bearing housing", "Toleransi ketat sesuai ISO fit"],
        specs: [
          { labelId: "Kapasitas Diameter", labelEn: "Max Swing Diameter", val: "Hingga Ø600 mm" },
          { labelId: "Panjang Kerja Max", labelEn: "Max Bed Length", val: "Hingga 2000 mm (2 Meter)" },
          { labelId: "Akurasi Toleransi", labelEn: "Tolerance Accuracy", val: "±0.01 mm (ISO Fit Standard)" },
          { labelId: "Material Support", labelEn: "Supported Materials", val: "S45C, SKD11, SUS304/316, Bronze, POM" }
        ],
        outputs: ["Shaft Bertingkat", "Ulir Drat Presisi", "Bushing Bronze", "Pin Pasak & Rod"]
      },
      {
        id: "milling",
        titleId: "Mesin Milling & Center Bor",
        titleEn: "Milling & Center Drilling",
        roleId: "Perataan Bidang, Alur Pasak & Profil Gigi",
        roleEn: "Surface Planing, Keyways & Gear Profiles",
        descId: "Fasilitas penyerutan bidang datar, pembuatan alur pasak (keyway), kantong slotting, profil sprocket roda gigi, dan titik bor pusat presisi tinggi.",
        descEn: "Equipped for flat surface facing, precision keyway slotting, pocket machining, sprocket profiling, and coordinate center hole drilling.",
        image: "/images/workshop-milling.webp",
        capabilities: ["Alur pasak (keyway) presisi", "Flange hidrolik & dudukan mesin", "Pengeboran multi-titik presisi", "Perataan permukaan balok logam"],
        specs: [
          { labelId: "Meja Kerja Mesin", labelEn: "Working Table", val: "Heavy-duty Bed Clamping" },
          { labelId: "Operasi Utama", labelEn: "Primary Operations", val: "Facing bidang, alur pasak (keyway), slotting" },
          { labelId: "Pengeboran Pusat", labelEn: "Drilling Accuracy", val: "Pengeboran koordinat multi-titik presisi" },
          { labelId: "Material Support", labelEn: "Supported Materials", val: "Baja balok, SS400, Cast Iron, Aluminium, Stainless" }
        ],
        outputs: ["Flange Hidrolik", "Alur Pasak Keyway", "Dudukan Mesin", "Profil Sprocket"]
      },
      {
        id: "cnc",
        titleId: "Mesin CNC Presisi",
        titleEn: "Computer Numerical Control (CNC)",
        roleId: "Kontur Rumit & Repetisi Presisi Tinggi",
        roleEn: "Complex Contours & High-Repeatability Runs",
        descId: "Pengerjaan kontur 2D/3D rumit dengan kontrol numerik komputer untuk suku cadang mesin otomotif yang membutuhkan repetisi akurasi digital seragam.",
        descEn: "Processes intricate 2D/3D geometries with digital computer control for automotive production parts demanding tight, identical repeatability.",
        image: "/images/workshop-cnc.webp",
        capabilities: ["Kontur rumit digital CAD/CAM", "Akurasi repetisi tinggi", "Komponen jig & fixture khusus", "Bahan baja, stainless, kuningan, & POM"],
        specs: [
          { labelId: "Sistem Kontrol", labelEn: "Control System", val: "Digital 3-Axis CNC CAD/CAM Controller" },
          { labelId: "Akurasi Repetisi", labelEn: "Repeatability", val: "Konsisten ±0.01 mm antar batch produksi" },
          { labelId: "Kapabilitas Geometri", labelEn: "Geometry Scope", val: "Kontur 2D/3D kompleks & komponen rumit" },
          { labelId: "Material Support", labelEn: "Supported Materials", val: "Baja paduan, Stainless, Kuningan, POM/Teflon" }
        ],
        outputs: ["Half Shaft Gear", "Sprocket Presisi", "Bracket Mesin CNC", "Jig & Fixture"]
      },
      {
        id: "panel-assembly",
        titleId: "Area Assembly & Uji Panel",
        titleEn: "Panel Assembly & Wiring Bay",
        roleId: "Wiring Rapi & Simulasi I/O Sebelum Kirim",
        roleEn: "Neat Wiring & Pre-Shipment I/O Simulation",
        descId: "Area perakitan kabel panel kontrol, instalasi ducting kabel, terminal block, pemasangan inverter drive, serta uji simulasi I/O PLC sebelum dikirim ke pabrik.",
        descEn: "Dedicated space for control panel wiring, cable ducting, inverter drive installation, and exhaustive PLC I/O functional simulation prior to field deployment.",
        image: "/images/project-weighing-2.webp",
        capabilities: ["Standar penataan kabel rapi & terlabel", "Simulasi run-test logic PLC", "Pemeriksaan isolasi & grounding", "Pengujian tombol emergency & interlock"],
        specs: [
          { labelId: "Standar Wiring", labelEn: "Wiring Standard", val: "IEC 60204-1 & Penomoran Ferrule Rapi" },
          { labelId: "Uji Simulasi", labelEn: "Simulation Testing", val: "Factory Acceptance Test (FAT) Run-Test Logic" },
          { labelId: "Komponen Terpasang", labelEn: "Integrated Hardware", val: "PLC, Inverter Drive, HMI, Breaker, Contactor" },
          { labelId: "Inspeksi Safety", labelEn: "Safety Inspection", val: "Grounding, Megger test, emergency interlock" }
        ],
        outputs: ["Panel Kontrol PLC", "Panel Inverter Drive", "Box HMI Touchscreen", "Panel Distribusi Daya"]
      }
    ]
  },

  caseStudiesSection: {
    tagId: "REKAM JEJAK PEKERJAAN",
    tagEn: "DOCUMENTED FIELD TRACK RECORD",
    headingId: "Bukti Rekayasa di Lapangan: Proyek Riil yang Telah Kami Tangani",
    headingEn: "Engineering in Action: Documented Field Projects Delivered",
    subheadingId: "Bukan sekadar klaim pemasaran, berikut dokumentasi pekerjaan teknis langsung yang teruji di lini industri manufaktur dan otomotif:",
    subheadingEn: "Concrete technical execution verified across automotive and industrial production lines:",
    cases: [
      {
        id: "weighing-system",
        titleId: "Panel Control Weighing Automation System",
        titleEn: "Weighing Automation System Control Panel",
        category: "Otomasi & Kontraktor PLC",
        badge: "Integrasi PLC & Sensor",
        images: ["/images/project-weighing-1.webp", "/images/project-weighing-2.webp"],
        systemId: "Sistem Penimbangan Bahan Baku Otomatis",
        systemEn: "Automated Raw Material Batch Weighing",
        scopeId: "Perancangan skematik elektrikal, perakitan panel kabel terlabel rapi, integrasi modul penimbang digital dengan PLC, dan kalibrasi load cell.",
        scopeEn: "Electrical schematic design, labelled panel wiring, load cell module interfacing with industrial PLC, and field precision calibration.",
        impactId: "Menghilangkan potensi human error pada takaran bahan baku pabrik dan menyajikan data penimbangan yang akurat dan tercatat otomatis.",
        impactEn: "Eliminated batch weighing manual discrepancies and delivered continuous, automated weight data acquisition to supervisory systems.",
        brandsInvolved: ["PLC Controller", "Digital Weight Indicator", "Industrial Inverters"]
      },
      {
        id: "fanuc-servo",
        titleId: "Troubleshoot & Instalasi Servo Motor FANUC",
        titleEn: "FANUC Servo Motor Troubleshooting & Installation",
        category: "Diagnosa & Perbaikan Mesin",
        badge: "Spesialisasi Otomotif",
        images: ["/images/project-fanuc-1.webp", "/images/project-fanuc-2.webp"],
        systemId: "Lini Manufaktur Komponen Otomotif",
        systemEn: "Automotive Precision Machining Cell",
        scopeId: "Investigasi alarm drive servo FANUC, pengujian resistansi lilitan motor, penggantian unit servo, setting parameter encoder, dan uji gerak sumbu mesin.",
        scopeEn: "Root-cause diagnostics of FANUC servo drive alarms, winding insulation testing, unit replacement, encoder parameter syncing, and axis test run.",
        impactId: "Mengatasi downtime kritis pada lini perakitan otomotif sehingga siklus produksi kembali berjalan dengan presisi posisi normal.",
        impactEn: "Resolved critical line-stop downtime in automotive assembly, restoring high-speed positional motion precision.",
        brandsInvolved: ["FANUC Servo Motors", "FANUC Drive Modules"]
      },
      {
        id: "hmi-upgrade",
        titleId: "Upgrade HMI Touchscreen Allen-Bradley",
        titleEn: "Allen-Bradley Touchscreen HMI Modernization",
        category: "Peremajaan Sistem Kontrol",
        badge: "Modernisasi Sistem",
        images: ["/images/project-hmi-1.webp", "/images/project-hmi-2.webp", "/images/project-hmi-3.webp"],
        systemId: "Antarmuka Kontrol Mesin Manufaktur",
        systemEn: "Manufacturing Line Machine Interface",
        scopeId: "Penggantian monitor kontrol usang ke unit touchscreen Allen-Bradley PanelView, konversi program grafis, pemetaan tag komunikasi PLC, dan pembuatan alarm banner.",
        scopeEn: "Replacement of obsolete monochrome CRT monitors with Allen-Bradley PanelView touchscreens, graphic tag database migration, and alarm display setup.",
        impactId: "Memudahkan operator memantau parameter produksi secara visual, mendeteksi sumber alarm secara seketika, dan mempercepat waktu set-up mesin.",
        impactEn: "Empowered machine operators with intuitive graphics, instantaneous fault alarm tracking, and drastically reduced batch changeover times.",
        brandsInvolved: ["Allen-Bradley PanelView", "Industrial Communications"]
      },
      {
        id: "cable-tray",
        titleId: "Instalasi Cable Tray Kelistrikan Pabrik",
        titleEn: "Industrial Power & Instrumentation Cable Tray Installation",
        category: "Konstruksi & Kelistrikan",
        badge: "Standar Keselamatan K3",
        images: ["/images/project-cabletray-1.webp", "/images/project-cabletray-2.webp"],
        systemId: "Infrastruktur Distribusi Daya & Sinyal Pabrik",
        systemEn: "Plant-wide Power & Signal Distribution Grid",
        scopeId: "Fabrikasi bracket penopang, pemasangan ratusan meter jalur cable tray galvanis berkapasitas berat, pemisahan rute kabel daya dan sinyal instrumen.",
        scopeEn: "Custom support bracket fabrication, installation of heavy-duty galvanized cable trays, and dedicated segregation between power and signal conductors.",
        impactId: "Mencegah interferensi elektromagnetik (noise sinyal), memastikan jalur kabel rapi teratur, serta memenuhi syarat inspeksi keselamatan kerja K3 industri.",
        impactEn: "Prevented electrical noise coupling into PLC analog loops, organized plant cabling architecture, and achieved full compliance with industrial HSE audits.",
        brandsInvolved: ["Industrial Galvanized Cable Trays", "Heavy Structural Brackets"]
      }
    ]
  },

  workflowSection: {
    tagId: "PROSEDUR KERJASAMA",
    tagEn: "TRANSPARENT WORKFLOW",
    headingId: "Alur Kerja Sama Rekayasa dengan Pabrik Anda",
    headingEn: "How Plant Engineers & Procurement Partner with ATM",
    subheadingId: "Dari telaah gambar teknik hingga mesin running di lini pabrik, kami bekerja dengan tahapan terukur:",
    subheadingEn: "From initial technical drawing review to live line commissioning, our transparent 5-step process ensures certainty:",
    steps: [
      {
        step: "01",
        titleId: "Kirim Input Kebutuhan",
        titleEn: "Submit Requirement Input",
        descId: "Kirimkan file CAD (.dwg/.step), PDF drawing teknik, atau foto sampel part aus beserta nomor seri komponen yang dicari via WhatsApp atau form.",
        descEn: "Share your CAD files (.dwg/.step), engineering PDFs, or photos of worn sample parts and part serial numbers via WhatsApp or our request form."
      },
      {
        step: "02",
        titleId: "Telaah Teknis & Cek Lokasi",
        titleEn: "Technical Review & Site Survey",
        descId: "Tim engineer kami meninjau toleransi material dan kelayakan fabrikasi, atau menjadwalkan kunjungan on-site untuk inspeksi sistem kelistrikan/PLC.",
        descEn: "Our engineering leads analyze material tolerances and feasibility, or schedule a field visit for electrical and PLC scope measurements."
      },
      {
        step: "03",
        titleId: "Penawaran Resmi & Jadwal",
        titleEn: "Formal Quotation & Timeline",
        descId: "Kami menerbitkan surat penawaran harga resmi (Quotation) terperinci dengan spesifikasi material jelas dan kepastian komitmen target hari kerja.",
        descEn: "We issue a comprehensive formal quotation with explicit material specifications, pricing breakdowns, and guaranteed completion lead times."
      },
      {
        step: "04",
        titleId: "Fabrikasi / Pemrograman",
        titleEn: "Fabrication / Programming",
        descId: "Proses pengerjaan dilakukan langsung di workshop Babelan (Bubut, CNC, Assembly Panel) atau penyusunan logic kontrol di internal lab ATM.",
        descEn: "Direct manufacturing at our Babelan facility (Lathe, Milling, CNC, Panel Assembly) or control algorithm simulation in our internal lab."
      },
      {
        step: "05",
        titleId: "Pengiriman & Commissioning",
        titleEn: "Delivery & Commissioning",
        descId: "Part dikirim langsung ke plant atau tim teknisi kami turun ke pabrik untuk instalasi, kalibrasi, dan uji jalan (test-run) bersama tim Anda.",
        descEn: "Parts delivered on-site or our technicians deploy to your factory floor for installation, wiring, and joint trial test-runs until 100% stable."
      }
    ]
  },

  ctaSection: {
    headingId: "Punya Gambar Teknik Part yang Ingin Dibuat, atau Kendala Sistem PLC di Pabrik Anda?",
    headingEn: "Have an Engineering Part Drawing to Machine, or a Critical PLC Automation Challenge?",
    subheadingId: "Tim teknis PT. Aris Teknindo Mandiri siap menelaah drawing CAD Anda atau berkunjung ke pabrik untuk survei kebutuhan instalasi kelistrikan & mekanikal.",
    subheadingEn: "Our engineering team is ready to evaluate your CAD blueprints or deploy on-site to inspect your plant's electrical, automation, or mechanical needs.",
    phoneLabel: "Hotline Langsung Tim Teknis (Fast Response):",
    addressLabel: "Workshop & Kantor: Perum Pondok Permata C17/46, Babelan, Bekasi"
  }
};
