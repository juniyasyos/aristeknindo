const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
const asset = (p) => `${BASE}/${p.replace(/^\//, "")}`;

export const SITE = {
  name: "PT. Aris Teknindo Mandiri",
  shortName: "ATM",
  tagline: "Industrial Engineering, Automation & Mechanical Contractor",
  subTagline: "Solusi Terintegrasi Mekanikal, Elektrikal, Fabrikasi Presisi, Machining, dan Otomasi Industri PLC",
  registration: "Perseroan Terbatas — No. Registrasi 1280189",
  established: "Bekasi, Jawa Barat",
  domain: "aristeknindomandiri.com",
  
  contact: {
    address: "Perum Pondok Permata C17/46, Babelan, Bekasi – Jawa Barat, Indonesia",
    phoneDisplay: "0812 8380 895",
    phoneSecondary: "0895 1442 9444",
    phoneRaw: "+628128380895",
    whatsappNumber: "628128380895",
    emailSales: "sales@aristeknindomandiri.com",
    emailAdmin: "admin@aristeknindomandiri.com",
    hoursId: "Senin – Jumat: 08.00 – 17.00 WIB | Sabtu: 08.00 – 13.00 WIB",
    hoursEn: "Monday – Friday: 08:00 – 17:00 WIB | Saturday: 08:00 – 13:00 WIB",
    emergencyNoteId: "Layanan Darurat On-Call Tersedia untuk Downtime Kritis",
    emergencyNoteEn: "On-Call Emergency Support Available for Critical Downtime",
  },

  nav: [
    { key: "home", path: "/", labelId: "Beranda", labelEn: "Home" },
    { key: "about", path: "/about", labelId: "Tentang Kami", labelEn: "About Us" },
    { key: "services", path: "/services", labelId: "Layanan & Workshop", labelEn: "Capabilities & Workshop" },
    { key: "products", path: "/products", labelId: "Suku Cadang", labelEn: "Industrial Parts" },
    { key: "projects", path: "/projects", labelId: "Pengalaman Kerja", labelEn: "Portfolio Projects" },
    { key: "contact", path: "/contact", labelId: "Hubungi Kami", labelEn: "Contact Us" },
  ],

  // 29 Authentic Brands Extracted from Official Master PDF
  brands: {
    automation: [
      { name: "Mitsubishi Electric", origin: "Japan", category: "PLC, Inverter, HMI", logo: asset("/images/brands/mitsubishi-electric.png") },
      { name: "Yaskawa", origin: "Japan", category: "Servo Drives & Inverters", logo: asset("/images/brands/yaskawa.svg") },
      { name: "Autonics", origin: "South Korea", category: "Sensors & Controllers", logo: asset("/images/brands/autonics.png") },
      { name: "Panasonic SUNX", origin: "Japan", category: "Industrial Sensors & Safety", logo: asset("/images/brands/panasonic.svg") },
      { name: "Fuji Electric", origin: "Japan", category: "Inverters & Switchgear", logo: asset("/images/brands/fuji-electric.svg") },
      { name: "Hitachi", origin: "Japan", category: "Industrial Drives & Inverters", logo: asset("/images/brands/hitachi.svg") },
      { name: "COGNEX", origin: "USA", category: "Machine Vision & Barcode Readers", logo: asset("/images/brands/cognex.svg") },
      { name: "Oriental Motor", origin: "Japan", category: "AC/DC Motors & Steppers", logo: asset("/images/brands/oriental-motor.svg") },
      { name: "Sanyo Denki", origin: "Japan", category: "SANMOTION Servo & Steppers", logo: asset("/images/brands/sanyo-denki.png") },
      { name: "KOGANEI", origin: "Japan", category: "Pneumatics & Cylinders", logo: asset("/images/brands/koganei.png") },
      { name: "Shihlin Electric", origin: "Taiwan", category: "Inverters & Contactors", logo: asset("/images/brands/shihlin-electric.png") },
      { name: "Nidec-Shimpo", origin: "Japan", category: "Precision Gear Reducers", logo: asset("/images/brands/nidec-shimpo.svg") },
      { name: "NACHI", origin: "Japan", category: "Hydraulics & Robotics", logo: asset("/images/brands/nachi.svg") },
      { name: "Seametrics", origin: "USA", category: "Flow Sensors & Meters", logo: asset("/images/brands/seametrics.png") },
      { name: "NITTA MOORE", origin: "Japan", category: "Tubing, Fittings, Pneumatics", logo: asset("/images/brands/nitta-moore.svg") },
      { name: "CASIX", origin: "Global", category: "Industrial Optical Sensors", logo: asset("/images/brands/casix.png") },
    ],
    mechanical: [
      { name: "THK", origin: "Japan", category: "Linear Motion Guides & Actuators", logo: asset("/images/brands/thk.svg") },
      { name: "HIWIN", origin: "Taiwan", category: "Linear Guideways & Ball Screws", logo: asset("/images/brands/hiwin.svg") },
      { name: "NSK", origin: "Japan", category: "Precision Bearings & Linear Guides", logo: asset("/images/brands/nsk.png") },
      { name: "NTN", origin: "Japan", category: "Industrial Bearings & Precision Parts", logo: asset("/images/brands/ntn.svg") },
      { name: "Koyo", origin: "Japan", category: "Precision Ball & Roller Bearings", logo: asset("/images/brands/koyo.svg") },
      { name: "TIMKEN", origin: "USA", category: "Tapered Bearings & Transmission", logo: asset("/images/brands/timken.svg") },
      { name: "FAG", origin: "Germany", category: "Schaeffler Precision Bearings", logo: asset("/images/brands/fag.svg") },
      { name: "IKO", origin: "Japan", category: "Needle Bearings & Linear Motion", logo: asset("/images/brands/iko.svg") },
      { name: "KHK Stock Gears", origin: "Japan", category: "Standard Precision Gears", logo: asset("/images/brands/khk-gears.png") },
      { name: "TSUBAKI", origin: "Japan", category: "Roller Chains & Power Transmission", logo: asset("/images/brands/tsubaki.svg") },
      { name: "SAMICK", origin: "South Korea", category: "Linear Bushings & Guides", logo: asset("/images/brands/samick.png") },
      { name: "SIM (Sung-Il)", origin: "South Korea", category: "Precision Couplings & Support Units", logo: asset("/images/brands/sung-il.png") },
      { name: "Hanshin RoboChain", origin: "South Korea", category: "Cable Drag Chains & Carriers", logo: asset("/images/brands/hanshin.png") },
    ],
    projectHighlights: [
      { name: "FANUC", category: "Servo Motors & Troubleshooting", logo: asset("/images/brands/fanuc.svg") },
      { name: "Allen-Bradley", category: "HMI Touchscreen Upgrade", logo: asset("/images/brands/allen-bradley.svg") },
    ]
  }
};
