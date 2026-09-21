import fs from 'fs';
import path from 'path';

const planningDocs = {};

// 1. services-content.md
planningDocs['services-content.md'] = `# Rencana Konten & Struktur Halaman Layanan & Workshop (Services)
**PT. Aris Teknindo Mandiri (ATM)**  
*Dokumen Blueprint: Technical Capabilities, In-House Machinery & Scope*  
*Lokasi Dokumen: \`planning/services-content.md\`*

---

## 1. Ikhtisar Halaman & Target Audiens
Halaman **Layanan & Workshop** bertujuan membuktikan kedalaman teknis dan kepemilikan alat fisik perusahaan kepada *Engineering Leads*, *Maintenance Managers*, dan *Production Heads*.

* **Target Pengunjung**: Manajer Pabrik, Supervisor Maintenance, Engineer Proyek yang membutuhkan kepastian:
  1. *Mesin dan proses apa saja yang dimiliki workshop ATM sendiri?*
  2. *Berapa toleransi presisi dan kapasitas dimensi pengerjaannya?*
  3. *Bagaimana standar wiring panel dan PLC yang dirancang?*
* **Tone of Voice**: Lugas, teknis, presisi, berorientasi solusi *zero-downtime*.

---

## 2. Struktur 4 Pilar Layanan Teknis

\`\`\`mermaid
flowchart TD
    A["Header: Kapabilitas Rekayasa & Workshop Babelan"] --> B["1. Otomasi & Kontraktor PLC Industri"]
    A --> C["2. Fabrikasi & Machining Presisi (Bubut, Milling, CNC)"]
    A --> D["3. Fabrikasi Mesin, Sistem Konveyor & Cable Tray"]
    A --> E["4. Pengadaan Komponen Impor on-Demand (29 Brand Dunia)"]
    B --> F["Fasilitas Workshop Mandiri: Spesifikasi Mesin Bubut, Milling, CNC, Lab Panel"]
    C --> F
    D --> F
    E --> F
    F --> G["CTA: Kirim Drawing CAD / Konsultasi Lapangan"]
\`\`\`

---

## 3. Rincian Teknis Tiap Pilar

### 3.1 Pilar 1: Otomasi & Kontraktor PLC Industri
* **Lingkup**: Rancang bangun panel kontrol, integrasi logic sequence PLC, inverter drive, dan layar sentuh HMI.
* **Platform PLC yang Dikuasai**: Mitsubishi (MELSEC iQ-R, Q, FX), Omron (CJ2, CP1), Allen-Bradley (ControlLogix, CompactLogix), Siemens, Delta.
* **Standar Pengerjaan**:
  * Pengkabelan terlabel rapi dengan numbering ferrule & heat shrink.
  * Uji simulasi fungsional I/O sebelum unit dikirim ke pabrik.
  * Dukungan start-up & commissioning on-site langsung di mesin.

### 3.2 Pilar 2: Fabrikasi & Machining Presisi (Workshop Mandiri)
* **Lingkup**: Pembuatan suku cadang presisi tinggi dari material baja karbon (S45C, SCM440), stainless steel (SUS304, SUS316), bronze/kuningan, aluminium, hingga POM/Teflon.
* **Daftar Produk Machining**:
  * Shaft bertingkat, Poros eksentrik, Pin pasak (dowel pin).
  * Drive sprocket, Half shaft gear, Flange hidrolik presisi.
  * Rod cylinder silinder pneumatik/hidrolik, Bushing bronze tahan aus.
  * Rekondisi komponen aus dan pelapisan hard chrome.
* **Kapasitas & Toleransi**: Pengerjaan hingga toleransi mikrometer (ISO fit h6/g6) menggunakan Bubut, Milling & CNC.

### 3.3 Pilar 3: Fabrikasi Mesin, Sistem Konveyor & Cable Tray
* **Lingkup**: Rancang bangun struktur mekanikal dan instalasi infrastruktur pabrik.
* **Komponen & Sistem**:
  * Sistem konveyor perakitan kustom (Belt, Roller, Slat, Modular).
  * *Machine Safety Guard / Enclosure* (Pelindung operator akrilik/perforated standar K3).
  * Ducting industri, tangki penampung, dan rangka baja mesin.
  * Instalasi jalur *heavy-duty cable tray* galvanis pemisah rute power dan instrumen.

### 3.4 Pilar 4: Pengadaan Komponen Impor on-Demand
* **Lingkup**: Suplai komponen otomasi, sensor, bearing presisi, dan linear motion dari 29 merek tier-1 dunia.
* **Keunggulan**: Akses rantai pasok langsung dengan jaminan part orisinil 100% dan verifikasi cepat berdasarkan *Part Number*.

---

## 4. Tabel Peralatan & Fasilitas Workshop Babelan

| Peralatan | Tipe / Spesifikasi | Kemampuan Utama |
|---|---|---|
| **Mesin Bubut (Lathe)** | Industrial Turning Center | Poros silindris bertingkat, ulir presisi metrik/inci, pin pasak, bushing |
| **Mesin Milling & Center Bor** | Vertical Milling Machine | Perataan bidang, alur pasak (*keyway*), slotting, pengeboran pusat |
| **Mesin CNC** | Digital Computer Controlled | Kontur rumit 2D/3D, repetisi tinggi untuk suku cadang otomotif |
| **Area Assembly & Uji Panel** | Electrical Testing Bay | Wiring kabel terlabel, simulasi logic PLC, uji insulasi dan grounding |

---

## 5. Alur Konversi & Call-to-Action
* Formulir RFQ Drawing CAD/PDF langsung terintegrasi.
* Direct WhatsApp ke engineer on-call (\`0812 8380 895\`).
`;

// 2. products-content.md
planningDocs['products-content.md'] = `# Rencana Konten & Struktur Halaman Suku Cadang (Products / Sourcing)
**PT. Aris Teknindo Mandiri (ATM)**  
*Dokumen Blueprint: Verified Global Tier-1 Industrial Brands Catalog & RFQ*  
*Lokasi Dokumen: \`planning/products-content.md\`*

---

## 1. Filosofi Strategis Suku Cadang B2B
Berdasarkan analisis kebutuhan industri manufaktur, halaman Suku Cadang **tidak dibuat seperti toko e-commerce konsumen (B2C) dengan keranjang belanja atau tombol checkout**, melainkan sebagai:

1. **Direktori Otoritas Rantai Pasok**: Menampilkan 29 prinsipal global terverifikasi yang didukung ATM.
2. **Mesin Verifikasi Cepat (Part Number Search & Inquiry)**: Memfasilitasi tim *Purchasing* dan *Maintenance* pabrik untuk mengecek ketersediaan komponen berdasarkan kode seri / part number resmi.
3. **Penyelamat Downtime Kritis**: Menyediakan opsi alternatif produksi kustom (machining) jika suku cadang impor mengalami masa inden OEM luar negeri yang berbulan-bulan.

---

## 2. Taksonomi 29 Brand Industri Global Resmi

### 2.1 Kategori Otomasi & Kontrol (Automation & Control - 16 Brands)
1. **Mitsubishi Electric** (Jepang) — PLC, Inverter, HMI Touchscreen
2. **Yaskawa** (Jepang) — AC Drives, Servo Motor & Controllers
3. **Autonics** (Korea Selatan) — Proximity Sensors, Temperature Controllers, Encoders
4. **Panasonic SUNX** (Jepang) — Photoelectric Sensors, Laser Sensors, Safety Light Curtains
5. **Fuji Electric** (Jepang) — Inverters, Magnetic Contactors, Pushbuttons
6. **Hitachi** (Jepang) — Industrial Inverters & Power Drives
7. **COGNEX** (Amerika Serikat) — Machine Vision Systems & Industrial Barcode Readers
8. **Oriental Motor** (Jepang) — AC/DC Stepper Motors, Gearmotors, Brushless DC
9. **Sanyo Denki** (Jepang) — SANMOTION Servo Systems & Cooling Fans
10. **KOGANEI** (Jepang) — Pneumatic Actuators, Air Cylinders, Solenoid Valves
11. **Shihlin Electric** (Taiwan) — Motor Inverters & Industrial Switchgear
12. **Nidec-Shimpo** (Jepang) — Planetary Precision Gear Reducers
13. **NACHI** (Jepang) — Hydraulic Valves & Industrial Robotics
14. **Seametrics** (Amerika Serikat) — Magnetic Flow Meters & Industrial Sensors
15. **NITTA MOORE** (Jepang) — Pneumatic Tubing, Push-in Fittings, Hose Assemblies
16. **CASIX** (Global) — Precision Optical Sensors & Laser Crystals

### 2.2 Kategori Mekanikal, Bearing & Linear Motion (13 Brands)
1. **THK** (Jepang) — Linear Motion (LM) Guides, Ball Screws, Actuators
2. **HIWIN** (Taiwan) — Linear Guideways, Ball Screws, Industrial Stages
3. **NSK** (Jepang) — Precision Deep Groove Ball Bearings, Linear Guides
4. **NTN** (Jepang) — Pillow Block Bearings, Tapered Roller Bearings
5. **Koyo** (Jepang) — High-Precision Angular Contact & Needle Bearings
6. **TIMKEN** (Amerika Serikat) — Tapered Roller Bearings, Heavy Transmission Units
7. **FAG (Schaeffler)** (Jerman) — High-Performance Precision Roller Bearings
8. **IKO** (Jepang) — Needle Roller Bearings, Cam Followers, Linear Guides
9. **KHK Stock Gears** (Jepang) — Standard Spur, Helical, Bevel, and Worm Gears
10. **TSUBAKI** (Jepang) — Industrial Roller Chains, Sprockets, Cable Carriers
11. **SAMICK** (Korea Selatan) — Precision Linear Bushings & Shafts
12. **SIM (Sung-Il Machinery)** (Korea Selatan) — Precision Couplings & Support Units
13. **Hanshin RoboChain** (Korea Selatan) — Flexible Cable Drag Chains & Enclosures

---

## 3. Fitur Interaktif Halaman
* **Filter Tabs**: Semua Brand (29) | Otomasi & Kontrol (16) | Mekanikal & Motion (13).
* **Live Search**: Pencarian instan nama brand, kategori part, atau negara asal.
* **Part Number Action Banner**: Tombol direct WhatsApp terisi format RFQ part number resmi.
`;

// 3. projects-content.md
planningDocs['projects-content.md'] = `# Rencana Konten & Struktur Halaman Pengalaman Kerja (Projects / Portfolio)
**PT. Aris Teknindo Mandiri (ATM)**  
*Dokumen Blueprint: Technical Evidence & Field Case Studies*  
*Lokasi Dokumen: \`planning/projects-content.md\`*

---

## 1. Filosofi & Pendekatan Studi Kasus
Halaman ini menyajikan **bukti rekam jejak teknis nyata (*technical evidence*)**, bukan sekadar galeri kartu foto generik. Setiap proyek mendokumentasikan:
1. *Nama Sistem & Kategori Rekayasa*
2. *Masalah / Kendala Lapangan yang Dihadapi Pabrik*
3. *Tindakan & Solusi Rekayasa yang Dieksekusi ATM*
4. *Hasil Nyata & Dampak Terhadap Lini Produksi*
5. *Platform Perangkat / Merek Global yang Terlibat*

---

## 2. 4 Studi Kasus Proyek Lapangan Terdokumentasi

### Studi Kasus 1: Pembuatan Panel Control Weighing Automation System
* **Kategori**: Otomasi & Kontraktor PLC Industri
* **Sistem**: Penimbangan otomatis bahan baku batching industri
* **Kendala**: Kesalahan takaran manual pada pencampuran bahan baku yang menyebabkan cacat produk dan ketiadaan log pencatatan berat otomatis.
* **Solusi ATM**: 
  * Perancangan skematik elektrikal dan tata letak panel kontrol berstandar rapi.
  * Integrasi digital weight indicator dengan modul I/O PLC industri.
  * Pemrograman logic sequence takaran otomatis dan kalibrasi load cell.
* **Dampak**: Menghilangkan 100% deviasi human error pada bahan baku dan mencatat data takaran secara otomatis.
* **Hardware**: PLC Controller, Digital Weight Indicator, Inverter Drive, Schneider Switchgear.

### Studi Kasus 2: Troubleshoot & Instalasi Servo Motor FANUC
* **Kategori**: Diagnosa Mesin & Otomasi Otomotif
* **Sistem**: Lini manufaktur permesinan komponen otomotif
* **Kendala**: Mesin mengalami alarm kritis pada sumbu gerak servo FANUC sehingga lini produksi terhenti total (*line stop*).
* **Solusi ATM**:
  * Investigasi impedansi belitan motor dan modul drive servo FANUC on-site.
  * Penggantian unit servo motor dan penyelarasan parameter enkoder digital.
  * Uji sinkronisasi gerak sumbu mesin pada kecepatan operasional penuh.
* **Dampak**: Mesin kembali beroperasi normal dalam waktu singkat, meminimalisasi kerugian biaya downtime pabrik.
* **Hardware**: FANUC Servo Motors, FANUC Alpha Series Servo Drives.

### Studi Kasus 3: Upgrade HMI Touchscreen Allen-Bradley
* **Kategori**: Peremajaan Sistem Kontrol (System Retrofitting)
* **Sistem**: Antarmuka kontrol visual mesin manufaktur
* **Kendala**: Monitor tabung kontrol CRT lama buram dan sering rusak, menyulitkan operator mendiagnosa kode alarm mesin.
* **Solusi ATM**:
  * Penggantian terminal display lama ke Allen-Bradley PanelView modern layar sentuh.
  * Migrasi tag komunikasi database PLC dan perancangan antarmuka visual ergonomis.
  * Pembuatan sistem visualisasi alarm dan tren grafik parameter mesin secara real-time.
* **Dampak**: Mempercepat respon operator saat mendeteksi alarm mesin dan memangkas waktu set-up pergantian batch produk.
* **Hardware**: Allen-Bradley PanelView Touchscreen, EtherNet/IP Industrial Communication.

### Studi Kasus 4: Instalasi Cable Tray Kelistrikan Pabrik
* **Kategori**: Konstruksi Kelistrikan & Infrastruktur Pabrik
* **Sistem**: Jalur distribusi daya dan kabel sinyal instrumentasi pabrik
* **Kendala**: Jalur kabel semrawut, berisiko korsleting, dan sinyal analog PLC terganggu oleh noise induksi kabel tenaga (*power cable*).
* **Solusi ATM**:
  * Fabrikasi bracket penopang baja custom dan instalasi ratusan meter cable tray galvanis heavy-duty.
  * Pemisahan fisik (*physical segregation*) antara rute kabel daya dan kabel sinyal instrumen/PLC.
  * Penataan kabel rapi berstandar keselamatan K3 dan audit inspeksi pabrik.
* **Dampak**: Mencegah gangguan interferensi elektromagnetik pada sinyal kontrol PLC dan memenuhi standar audit K3 industri.
* **Hardware**: Galvanized Heavy Cable Trays, Custom Mounting Brackets, Fire-Retardant Cable Ties.

---

## 3. Call-to-Action Proyek
Setiap studi kasus dilengkapi tautan *"Diskusikan Proyek Serupa"* yang langsung membuka formulir RFQ atau chat WhatsApp dengan teknisi lapangan.
`;

// 4. contact-content.md
planningDocs['contact-content.md'] = `# Rencana Konten & Struktur Halaman Hubungi Kami (Contact & RFQ)
**PT. Aris Teknindo Mandiri (ATM)**  
*Dokumen Blueprint: Direct Technical Inquiry, Drawing Submission & Workshop Coordinates*  
*Lokasi Dokumen: \`planning/contact-content.md\`*

---

## 1. Tujuan Halaman
Halaman **Hubungi Kami** dirancang sebagai *alat konversi transaksi rekayasa* yang memudahkan Plant Manager, Procurement Lead, dan Maintenance Supervisor untuk:
1. Mengirimkan dokumen kebutuhan teknik (CAD/PDF drawing atau foto sampel).
2. Menghubungi hotline teknisi on-call untuk situasi darurat mesin (*downtime emergency*).
3. Mendapatkan alamat legal, jam operasional, dan petunjuk akses workshop di Babelan, Bekasi.

---

## 2. Struktur Dua Kolom Layar

### Kolom Kiri: Formulir Request for Quotation (RFQ)
* **Field Formulir**:
  1. *Nama Pabrik / Perusahaan* (Wajib)
  2. *Nama PIC & Departemen* (Wajib)
  3. *Nomor WhatsApp Aktif* (Wajib)
  4. *Email Kantor* (Opsional)
  5. *Jenis Kebutuhan Utama*:
     * Machining Presisi & Spare Part (Bubut / CNC)
     * Kontraktor Otomasi PLC & Perakitan Panel
     * Fabrikasi Konveyor, Cover Mesin & Cable Tray
     * Pengadaan Komponen Impor on-Demand
     * Troubleshooting / Penanganan Downtime Darurat
  6. *Rincian Gambar Teknik / Spesifikasi Part* (Wajib)
* **Fitur Penyerahan Cepat**: Setelah menekan submit, sistem menampilkan konfirmasi dan otomatis membuka WhatsApp dengan teks terformat rapi untuk diteruskan ke tim engineering ATM.

### Kolom Kanan: Informasi Operasional & Lokasi Fisik
* **Nama Legal**: PT. Aris Teknindo Mandiri (Reg. PT 1280189)
* **Alamat Kantor & Workshop**: Perum Pondok Permata C17/46, Babelan, Bekasi – Jawa Barat, Indonesia
* **Akses Kawasan**: Dekat dengan Cikarang, MM2100, GIIC, KIIC, Karawang, dan Jababeka.
* **Telepon Teknis**: \`0812 8380 895\` / \`0895 1442 9444\`
* **Email Resmi**: \`sales@aristeknindomandiri.com\` / \`admin@aristeknindomandiri.com\`
* **Jam Kerja**: Senin – Jumat: 08.00 – 17.00 WIB | Sabtu: 08.00 – 13.00 WIB
* **Hotline Darurat**: Layanan On-Call 24 Jam untuk Downtime Kritis Pabrik Rekanan.
`;

const planningDir = path.join(process.cwd(), 'planning');
for (const [filename, content] of Object.entries(planningDocs)) {
  fs.writeFileSync(path.join(planningDir, filename), content, 'utf-8');
  console.log('Written planning/' + filename);
}

