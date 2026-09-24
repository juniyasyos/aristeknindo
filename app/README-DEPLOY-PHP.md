# Panduan Menjalankan Project di Server PHP (PT. Aris Teknindo Mandiri)

Project ini telah dikonfigurasi agar hasil build SPA React 19 dapat langsung disajikan dan berjalan di web server dengan mesin PHP (Apache, cPanel, Nginx + PHP-FPM, LiteSpeed, XAMPP, Laragon, ataupun PHP CLI).

---

## 1. Perintah Build & Menjalankan Lokal

Masuk ke folder `app`:
```bash
cd app
```

### Mem-build Project untuk Server PHP
```bash
bun run build
# atau
npm run build
```
Hasil build akan berada di dalam folder `app/dist/`. Semua file PHP, konfigurasi `.htaccess`, dan aset akan otomatis digenerate ke dalam folder ini.

### Menjalankan Server Lokal PHP (Testing)
Untuk menjalankan server lokal menggunakan engine PHP (tanpa perlu Node.js runtime):
```bash
bun run serve:php
# atau
npm run serve:php
# atau langsung dengan PHP CLI:
php -S 0.0.0.0:8000 -t dist router.php
```
Buka di browser: `http://localhost:8000`

---

## 2. Cara Deploy ke Server Hosting / Production

### A. cPanel / Shared Hosting (Apache / LiteSpeed)
1. Jalankan perintah `npm run build` di lokal.
2. Buka folder `app/dist/`.
3. Kompres seluruh isi folder `dist/` menjadi `.zip` (pastikan file tersembunyi seperti `.htaccess` ikut terkompres).
4. Masuk ke **cPanel File Manager** dan buka folder root domain (biasanya `public_html/`).
5. Ekstrak file zip ke dalam `public_html/`.
6. Struktur di `public_html/` harus berisi:
   - `.htaccess`
   - `index.html`
   - `index.php`
   - `assets/` (folder CSS & JS)
   - `images/` (folder gambar)
   - `api/` (folder endpoint PHP)
   - `favicon.ico`, `robots.txt`, `sitemap.xml`, dll.
7. Selesai! Subhalaman seperti `/about`, `/services`, `/contact` akan langsung berjalan lancar tanpa error 404 saat di-refresh.

### B. VPS (Nginx + PHP-FPM)
Jika menggunakan Nginx, tambahkan konfigurasi blok lokasi berikut pada server block Anda:
```nginx
server {
    listen 80;
    server_name aristeknindomandiri.com www.aristeknindomandiri.com;
    root /var/www/aristeknindo/app/dist;
    index index.php index.html;

    # SPA Fallback
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # Pass PHP scripts to FastCGI server
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock; # Sesuaikan dengan versi PHP server
    }

    # Static assets cache
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

---

## 3. Berkas PHP yang Disediakan

1. **`index.php`**: Entrypoint utama server. Mengirimkan HTTP Security Headers dan menyajikan frontend SPA (`index.html`).
2. **`.htaccess`**: Konfigurasi URL Rewriting untuk server Apache/cPanel agar browser refresh pada rute `/about`, `/contact`, dll. tetap dialihkan ke aplikasi SPA.
3. **`router.php`**: Router khusus untuk testing cepat menggunakan built-in web server PHP CLI (`php -S`).
4. **`api/health.php`**: Endpoint untuk cek status engine PHP (`http://domain.com/api/health.php`).
5. **`api/contact.php`**: Endpoint backend pemrosesan RFQ / Contact form dengan validasi dan logging server-side.
