# Global Content & Website Blueprint
**PT. Aris Teknindo Mandiri (ATM)**  
*Acuan Utama Perancangan & Pengembangan Website Company Profile*  
*Sumber: SRS Versi 1.0 (Draft) & resume.yml (ATM Company Profile Master)*

---

## 1. Metadata & Identitas Resmi Perusahaan

| Parameter | Nilai / Keterangan |
|---|---|
| **Nama Legal** | PT. Aris Teknindo Mandiri |
| **Nama Singkat / Brand** | ATM |
| **Legalitas Perusahaan** | Perseroan Terbatas — No. Registrasi: `1280189` |
| **Kategori Bisnis** | Mekanikal & Elektrikal Kontraktor, Fabrikasi, Machining, Otomasi Industri |
| **Tagline Utama** | *Industrial Engineering, Automation & Mechanical Contractor* |
| **Sub-tagline** | Solusi Terintegrasi Mekanikal, Elektrikal, Fabrikasi, Machining, dan Otomasi Industri |
| **Domain Resmi** | `aristeknindomandiri.com` *(disepakati di SRS)* |
| **Alamat Kantor & Workshop** | Perum Pondok Permata C17/46, Babelan, Bekasi – Jawa Barat, Indonesia |
| **Nomor Telepon (WhatsApp CTA Utama)** | `0812 8380 895` *(Rujukan cover PDF & primary CTA)* |
| **Nomor Telepon Sekunder** | `0895 1442 9444` |
| **Email Resmi** | `sales@aristeknindomandiri.com` & `admin@aristeknindomandiri.com` |
| **Jam Operasional** | Senin – Jumat: 08.00 – 17.00 WIB \| Sabtu: 08.00 – 13.00 WIB (Minggu: On-call emergency) |

---

## 2. Arah Brand & Gaya Komunikasi (Tone of Voice)

### Positioning
PT. Aris Teknindo Mandiri diposisikan sebagai mitra rekayasa industri dan kontraktor otomasi tepercaya di Indonesia yang mampu memberikan solusi terpadu dari hulu ke hilir (*end-to-end*): mulai dari perancangan konsep, pemrograman PLC, pengadaan part import berkualitas standar internasional, fabrikasi, machining presisi, hingga instalasi dan commissioning di pabrik.

### Target Audiens
1. **Plant Managers / Factory Managers**: Mencari kontraktor berkapabilitas solid dan tepat waktu.
2. **Engineering & Maintenance Teams (Khususnya Industri Otomotif & Manufaktur)**: Membutuhkan solusi troubleshooting PLC, upgrade HMI/servo, atau machining part kustom presisi tinggi.
3. **Industrial Procurement / Purchasing**: Membutuhkan penawaran harga kompetitif, kejelasan spesifikasi, dan kelancaran suplai komponen import.

### Karakter & Gaya Bahasa
* **Teknis & Presisi**: Menggunakan peristilahan teknis baku industri rekayasa tanpa ambigu.
* **Kredibel & Terpercaya**: Menampilkan pengalaman nyata, fasilitas mesin workshop, dan alur kerja terstruktur.
* **Modern B2B Tone**: Lugas, padat informasi, bebas dari gaya bahasa promosi yang berlebihan (*hype-free*).

---

## 3. Sistem Multi-Bahasa (SRS FR-07)

Website dirancang mendukung dua bahasa secara terintegrasi:

* **Bahasa Indonesia (ID - Default)**: Bahasa komunikasi utama untuk pasar industri domestik.
* **English (EN - Secondary)**: Bahasa pendukung bagi jajaran ekspatriat / manajemen multinasional di kawasan industri (Cikarang, Karawang, Bekasi, dsb.).

> [!NOTE]
> Istilah teknik internasional seperti *Programmable Logic Controller (PLC)*, *Human-Machine Interface (HMI)*, *Cable Tray*, *Servo Motor*, *Machining*, dan *Commissioning* tetap dipertahankan dalam kedua versi bahasa guna menjaga akurasi konteks engineering.

---

## 4. Sistem Desain Visual & Karakter UI (SRS Bagian 3)

### Konsep Desain: *Dark Industrial Engineering Portfolio*
Sesuai arahan SRS Bagian 3, website mengusung nuansa **gelap (dark/black basis)** bergaya industrial modern. Gaya ini memberikan kesan kokoh (*robust*), presisi, premium, dan berteknologi tinggi.

### Palet Warna & Kode Warna Visual

Tabel palet warna berikut dilengkapi dengan sampel visual (*color swatch*), kode HEX, RGB, nama variabel CSS, dan peruntukan elemen antarmuka:

#### 1. Warna Latar & Permukaan (*Dark Canvas & Surfaces*)

| Preview | Kode HEX | Format RGB | Variabel CSS | Penggunaan Utama pada UI |
|:---:|:---|:---|:---|:---|
| <span style="display:inline-block;width:24px;height:24px;background-color:#0B0F17;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#0B0F17` | `rgb(11, 15, 23)` | `--bg-canvas` | Latar belakang dasar (*body canvas*), navbar background |
| <span style="display:inline-block;width:24px;height:24px;background-color:#111724;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#111724` | `rgb(17, 23, 36)` | `--bg-surface-alt` | Warna selang-seling section (*alternate background*), footer base |
| <span style="display:inline-block;width:24px;height:24px;background-color:#161F30;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#161F30` | `rgb(22, 31, 48)` | `--bg-card` | Kartu komponen, card layanan, form background |
| <span style="display:inline-block;width:24px;height:24px;background-color:#1D283D;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#1D283D` | `rgb(29, 40, 61)` | `--bg-card-hover` | Efek sorot (*hover state*) kartu dan list item |

#### 2. Warna Identitas Brand (*Brand Accents - Red & Black ATM*)

| Preview | Kode HEX | Format RGB | Variabel CSS | Penggunaan Utama pada UI |
|:---:|:---|:---|:---|:---|
| <span style="display:inline-block;width:24px;height:24px;background-color:#DC2626;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#DC2626` | `rgb(220, 38, 38)` | `--brand-red` | Tombol CTA utama (*Primary Button*), active indicator, accent line |
| <span style="display:inline-block;width:24px;height:24px;background-color:#B91C1C;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#B91C1C` | `rgb(185, 28, 28)` | `--brand-red-hover` | Hover & pressed state pada tombol CTA |
| <span style="display:inline-block;width:24px;height:24px;background-color:#EF4444;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#EF4444` | `rgb(239, 68, 68)` | `--brand-red-light` | Icon highlight, link hover, focus ring glow |
| <span style="display:inline-block;width:24px;height:24px;background-color:#0F1115;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#0F1115` | `rgb(15, 17, 21)` | `--brand-dark` | Elemen industrial dark, badge solid, frame bayangan |

#### 3. Tipografi & Kontras Teks (*Text & Typography*)

| Preview | Kode HEX | Format RGB | Variabel CSS | Penggunaan Utama pada UI |
|:---:|:---|:---|:---|:---|
| <span style="display:inline-block;width:24px;height:24px;background-color:#F8FAFC;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#F8FAFC` | `rgb(248, 250, 252)` | `--text-primary` | Judul utama (`H1`, `H2`, `H3`), label tombol, menu aktif |
| <span style="display:inline-block;width:24px;height:24px;background-color:#94A3B8;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#94A3B8` | `rgb(148, 163, 184)` | `--text-secondary` | Paragraf deskripsi, label form, subtitle section |
| <span style="display:inline-block;width:24px;height:24px;background-color:#64748B;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#64748B` | `rgb(100, 116, 139)` | `--text-muted` | Metadata kecil, caption gambar, copyright footer |

#### 4. Garis Pembatas & Status Teknis (*Borders & Indicators*)

| Preview | Kode HEX | Format RGB | Variabel CSS | Penggunaan Utama pada UI |
|:---:|:---|:---|:---|:---|
| <span style="display:inline-block;width:24px;height:24px;background-color:#1E293B;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#1E293B` | `rgb(30, 41, 59)` | `--border-subtle` | Garis divider section, border kartu default, garis tabel |
| <span style="display:inline-block;width:24px;height:24px;background-color:#334155;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#334155` | `rgb(51, 65, 85)` | `--border-active` | Border input form aktif, outline kartu terpilih |
| <span style="display:inline-block;width:24px;height:24px;background-color:#22C55E;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#22C55E` | `rgb(34, 197, 94)` | `--status-success` | Badge WhatsApp CTA, indikator sistem running |
| <span style="display:inline-block;width:24px;height:24px;background-color:#0284C7;border:1px solid #475569;border-radius:4px;vertical-align:middle;"></span> | `#0284C7` | `rgb(2, 132, 199)` | `--tech-cyan` | Badge kategori Automation / PLC, technical tag |

```css
/* Snippet Konfigurasi CSS / Tailwind Roots */
:root {
  /* Canvas & Surface */
  --bg-canvas: #0B0F17;
  --bg-surface-alt: #111724;
  --bg-card: #161F30;
  --bg-card-hover: #1D283D;

  /* Brand Accents */
  --brand-red: #DC2626;
  --brand-red-hover: #B91C1C;
  --brand-red-light: #EF4444;
  --brand-dark: #0F1115;

  /* Typography */
  --text-primary: #F8FAFC;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;

  /* Borders & Highlights */
  --border-subtle: #1E293B;
  --border-active: #334155;
  --status-whatsapp: #22C55E;
  --tech-badge: #0284C7;
}
```

### Tipografi
* **Heading (Judul)**: *Plus Jakarta Sans* / *Inter* (Semi-bold hingga Bold) — Tegas, modern, dan presisi.
* **Body Text**: *Inter* (Regular, Medium) — Memiliki tingkat keterbacaan (*legibility*) tinggi di layar desktop maupun mobile.
* **Data Teknis / Specs / Badges**: *JetBrains Mono* atau Monospace Tabular — Untuk menampilkan kode part, nomor spesifikasi, dan parameter teknis.

### Prinsip UI & Interaksi
* **Radius Sudut**: Berkarakter tegas (`8px`), bukan lingkaran penuh (*rounded pill*), selaras dengan bentuk mesin industri.
* **Animasi**: Hanya micro-interactions halus saat hover (200–300ms transition). Tidak menggunakan animasi berat yang mengganggu kecepatan akses.
* **Grafis & Ikonografi**: Menggunakan ikon garis teknik (*lucide/heroicons style*), tekstur CAD wireframe tipis, dan foto asli workshop/proyek.

---

## 5. Arsitektur Informasi & Struktur Navigasi

Mengacu pada Information Architecture di SRS Bagian 4 dan penyesuaian status di `resume.yml`:

```
Website Structure (Main Navigation)
│
├── 1. Home (Beranda)
├── 2. About (Tentang Kami)
│   ├── Profil Perusahaan
│   ├── Visi & Misi
│   └── Fasilitas Workshop (Bubut, Milling, CNC)
├── 3. Services (Layanan & Kapabilitas)
│   ├── Kontraktor Otomasi PLC
│   ├── Fabrikasi & Machining
│   ├── Instalasi & Wiring Elektrikal
│   └── Troubleshooting & System Upgrade
├── 4. Products (Katalog Part)
│   ├── Automation & Control Part
│   └── Mekanikal Part
├── 5. Industries (Sektor Industri) ---------> [STATUS: ON HOLD / SEMENTARA DISISIPKAN DI HOME]
├── 6. Projects (Pengalaman Kerja / Portfolio)
└── 7. Contact (Hubungi Kami & Request Quote)
```

### Elemen Navigasi Global
1. **Top Navbar**: Logo ATM, menu navigasi utama, tombol ganti bahasa (ID/EN), dan tombol cepat **"Minta Penawaran"**.
2. **Floating WhatsApp CTA**: Tombol melayang di sudut kanan bawah untuk interaksi instan calon pelanggan langsung ke nomor `0812 8380 895`.
3. **Global Footer 4 Kolom**:
   * *Kolom 1*: Profil ringkas PT. Aris Teknindo Mandiri & No. Registrasi legalitas.
   * *Kolom 2*: Navigasi cepat halaman profil, layanan PLC, dan portofolio.
   * *Kolom 3*: Kategori produk part (Automation, Mekanikal, Presisi).
   * *Kolom 4*: Alamat fisik workshop, kontak telepon, email official, serta jam kerja.
   * *Bottom Bar*: Copyright © 2026 PT. Aris Teknindo Mandiri.

---

## 6. Standar Teknis, SEO & Kinerja (SRS Bagian 6 & 8)

* **Responsif Multi-Device**: Tampilan optimal di perangkat Mobile (smartphone), Tablet, Laptop, hingga Desktop monitor lebar.
* **Dasar SEO Teknis**:
  * Struktur heading baku (`H1`, `H2`, `H3`).
  * Meta title, meta description, dan Open Graph preview untuk WhatsApp/LinkedIn sharing.
  * Target kata kunci: *kontraktor mekanikal elektrikal bekasi*, *kontraktor otomasi plc cikarang*, *jasa fabrikasi machining bekasi*, *supplier spare part industri import*.
* **Optimasi Kecepatan**: Implementasi *lazy loading* untuk galeri foto mesin/proyek dan kompresi gambar format modern (WebP/SVG) guna menjamin *page load* di bawah 2 detik.
* **Keamanan Form**: Sanitasi input pada form pesan/penawaran (*Request a Quote*) untuk mencegah spamming.
