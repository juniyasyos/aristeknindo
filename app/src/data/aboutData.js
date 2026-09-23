const BASE = (import.meta.env?.BASE_URL || '/').replace(/\/$/, '');
const asset = (p) => `${BASE}/${p.replace(/^\//, '')}`;

export const ABOUT_DATA = {
  header: {
    badgeId: "PROFIL KORPORAT & KREDIBILITAS VENDOR",
    badgeEn: "CORPORATE PROFILE & VENDOR QUALIFICATION",
    titleId: "Dedikasi Presisi & Rekayasa Terpercaya untuk Kelancaran Industri Indonesia",
    titleEn: "Engineering Precision & Trusted Industrial Contracting for Indonesian Manufacturing",
    descriptionId: "PT. Aris Teknindo Mandiri adalah kontraktor mekanikal-elektrikal, permesinan presisi, dan otomasi industri berbadan hukum resmi. Kami hadir sebagai mitra teknis terpercaya bagi pabrik manufaktur dan otomotif di kawasan industri Jawa Barat dan sekitarnya.",
    descriptionEn: "PT. Aris Teknindo Mandiri is an officially registered mechanical-electrical, precision machining, and industrial automation contractor, serving as a trusted technical partner for manufacturing and automotive plants across West Java and beyond."
  },

  narrative: {
    tagId: "LATAR BELAKANG REKAYASA",
    tagEn: "ENGINEERING ROOTS",
    headingId: "Solusi Nyata di Titik Pertemuan Antara Kekuatan Mekanikal dan Kecerdasan Otomasi",
    headingEn: "Real Solutions at the Intersection of Mechanical Strength and Automation Intelligence",
    p1Id: "Berakar di Bekasi, Jawa Barat—jantung kawasan manufaktur dan otomotif terbesar di Indonesia—PT. Aris Teknindo Mandiri didirikan untuk menjembatani kesenjangan yang sering dihadapi pabrik: kebutuhan akan mitra yang tidak hanya mengerti logika pemrograman kontrol kelistrikan, tetapi juga memiliki kemampuan manufaktur fisik untuk memproduksi komponen logam presisi di bengkel sendiri.",
    p1En: "Rooted in Bekasi, West Java—the industrial heartland of Indonesia's manufacturing and automotive sectors—PT. Aris Teknindo Mandiri was established to bridge a common operational gap: the plant need for a partner who deeply understands electrical control programming logic while possessing direct in-house capabilities to fabricate high-precision metal parts.",
    p2Id: "Pengalaman lapangan bertahun-tahun dalam menangani troubleshooting mesin pabrik membuktikan bahwa kami mampu menjawab dua kebutuhan kunci industri sekaligus: kekuatan fisik suku cadang logam (machining toleransi ketat) dan stabilitas logika kendali (otomasi PLC & sensor presisi). Portofolio kerja kami menjadi bukti nyata dedikasi dalam menghadirkan suku cadang tahan lama dan sistem otomasi yang andal.",
    p2En: "Years of hands-on field experience resolving manufacturing line emergencies have proven our capability to deliver two core industrial demands simultaneously: high-tolerance metal spare parts and rock-solid automation logic. Our project history stands as tangible proof of our commitment to zero downtime and uncompromising engineering integrity."
  },

  visionMission: {
    tagId: "VISI & MISI KORPORAT",
    tagEn: "CORPORATE VISION & MISSION",
    headingId: "Komitmen Berkelanjutan untuk Mutu & Integritas",
    headingEn: "Enduring Commitment to Technical Quality & Integrity",
    visionId: "Menjadi perusahaan kontraktor rekayasa mekanikal, elektrikal, dan permesinan presisi terdepan di Indonesia yang dipercaya oleh industri manufaktur dan otomotif atas keunggulan mutu teknis, kecepatan penanganan, dan integritas kemitraan.",
    visionEn: "To become Indonesia's premier mechanical, electrical, and precision machining contracting company, trusted by manufacturing and automotive industries for engineering excellence, rapid execution, and partnership integrity.",
    missions: [
      {
        number: "01",
        titleId: "Presisi Tanpa Kompromi (Precision First)",
        titleEn: "Precision First Engineering",
        descId: "Memproduksi komponen permesinan (machining) dan fabrikasi dengan toleransi ukuran yang ketat sesuai spesifikasi gambar teknik (CAD drawing) guna menjamin durabilitas dan kecocokan sempurna di mesin pabrik.",
        descEn: "Fabricating precision-turned parts and structures within strict micrometer tolerances according to CAD drawings, guaranteeing maximum durability and seamless fit in factory lines."
      },
      {
        number: "02",
        titleId: "Keandalan Lini Pabrik (Zero Downtime Orientation)",
        titleEn: "Zero Downtime Orientation",
        descId: "Menyediakan jasa instalasi kelistrikan berstandar keselamatan tinggi, pemrograman PLC yang teruji, serta layanan tanggap darurat on-call guna meminimalisasi waktu henti mesin klien.",
        descEn: "Delivering code-compliant electrical installations, robust PLC programming sequences, and rapid on-call emergency troubleshooting to minimize costly plant downtime."
      },
      {
        number: "03",
        titleId: "Integritas Rantai Pasok (Authentic Supply Chain)",
        titleEn: "Authentic Supply Chain Integrity",
        descId: "Menyediakan pengadaan suku cadang otomasi dan mekanikal impor berkualitas tinggi dari 29+ prinsipal global terverifikasi dengan kepastian spesifikasi, orisinalitas, dan harga transparan.",
        descEn: "Securing tier-1 global industrial automation and mechanical spare parts from 29+ verified manufacturers with strict authenticity guarantees and honest commercial transparency."
      }
    ]
  },

  coreValues: [
    {
      number: "01",
      titleId: "Presisi Teknis",
      titleEn: "Engineering Precision",
      subId: "Berlandaskan Data & Toleransi Ketat",
      subEn: "Data-Driven & Tight Tolerances",
      descId: "Bekerja berdasarkan kalkulasi gambar teknik akurat, pemahaman metalurgi material, dan toleransi mikrometer yang dapat dipertanggungjawabkan pada setiap komponen.",
      descEn: "Grounding every manufactured part in verified CAD drawings, rigorous metallurgical standards, and repeatable micrometer tolerances."
    },
    {
      number: "02",
      titleId: "Respon Cepat",
      titleEn: "Rapid Response",
      subId: "Tanggap Terhadap Downtime Kritis",
      subEn: "Dedicated to Minimizing Downtime",
      descId: "Memahami bahwa setiap menit lini produksi pabrik terhenti menimbulkan kerugian biaya yang besar. Tim kami siap bertindak tanggap untuk troubleshooting darurat.",
      descEn: "Recognizing that every minute of plant downtime incurs severe financial impact. Our field technicians respond promptly to urgent maintenance calls."
    },
    {
      number: "03",
      titleId: "Transparansi Spesifikasi",
      titleEn: "Authenticity & Clarity",
      subId: "Jaminan Part Orisinil & Tanpa Biaya Tersembunyi",
      subEn: "Original Sourced Parts & Transparent Quotes",
      descId: "Kejujuran penuh dalam pemilihan mutu material, jaminan keaslian merek suku cadang impor yang disuplai, serta penawaran komersial yang transparan.",
      descEn: "Full integrity in material grading, verifiable brand authenticity for all supplied imported spares, and detailed, honest quotation breakdowns."
    },
    {
      number: "04",
      titleId: "Fasilitas Mandiri",
      titleEn: "Direct Execution",
      subId: "Workshop Bubut, Milling & CNC Milik Sendiri",
      subEn: "In-House Lathe, Milling & CNC Facilities",
      descId: "Pekerjaan diproses langsung di fasilitas workshop sendiri di Babelan, Bekasi. Tidak dioper ke pihak ketiga, sehingga kontrol mutu dan waktu pengiriman terjamin penuh.",
      descEn: "All fabrication and machining operations are performed in our own Babelan facility, giving us direct control over quality assurance and lead-time guarantees."
    }
  ],

  legalVerification: {
    tagId: "DATA LEGALITAS & AUDIT VENDOR",
    tagEn: "LEGAL DATA & VENDOR QUALIFICATION",
    headingId: "Informasi Badan Hukum Resmi & Fasilitas Operasional",
    headingEn: "Corporate Legal Identification & Operational Facility",
    subheadingId: "Data kepatuhan hukum yang siap digunakan tim Procurement & Vendor Management pabrik Anda:",
    subheadingEn: "Compliance data prepared for your plant Procurement & Vendor Management audits:",
    fields: [
      { labelId: "Nama Badan Hukum", labelEn: "Legal Entity Name", value: "PT. Aris Teknindo Mandiri" },
      { labelId: "Bentuk Badan Hukum", labelEn: "Corporate Structure", value: "Perseroan Terbatas (PT) Resmi Republik Indonesia" },
      { labelId: "No. Registrasi PT", labelEn: "Company Registration No.", value: "1280189" },
      { labelId: "Klasifikasi Bidang Usaha", labelEn: "Business Classification", value: "Mekanikal & Elektrikal Kontraktor, Fabrikasi Logam, Jasa Permesinan, Perdagangan Besar Komponen Industri" },
      { labelId: "Alamat Kantor & Workshop", labelEn: "Office & Workshop Address", value: "Perum Pondok Permata C17/46, Babelan, Bekasi – Jawa Barat, Indonesia" },
      { labelId: "Jangkauan Operasional", labelEn: "Operational Reach", value: "Bekasi, Cikarang, Karawang, MM2100, GIIC, KIIC, Jababeka, Jabodetabek & Nasional" },
      { labelId: "Dokumen Kualifikasi Vendor", labelEn: "Vendor Audit Dossier", value: "NIB, NPWP Perusahaan, Akta Notaris, SK Kemenkumham, Rekening PT Resmi (Tersedia atas Permintaan)" }
    ]
  },

  ctaVendor: {
    headingId: "Sedang Membuka Registrasi Vendor Baru atau Ingin Mengaudit Fasilitas Kami?",
    headingEn: "Enrolling New Vendors or Scheduling a Workshop Facility Audit?",
    descId: "Tim manajemen PT. Aris Teknindo Mandiri siap mengirimkan Company Profile resmi, melengkapi formulir rekanan vendor pabrik Anda, serta menerima kunjungan survei tim Vendor Management ke workshop kami di Babelan.",
    descEn: "The management team of PT. Aris Teknindo Mandiri is prepared to submit official corporate profiles, complete vendor assessment forms, and welcome your procurement team for an on-site facility audit.",
    ctaDocId: "Minta Dokumen Legalitas & Formulir Rekanan",
    ctaDocEn: "Request Vendor Dossier",
    ctaVisitId: "Jadwalkan Kunjungan Survei Workshop (WA)",
    ctaVisitEn: "Schedule Facility Audit (WhatsApp)"
  }
};
