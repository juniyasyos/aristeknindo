<?php
/**
 * PT. Aris Teknindo Mandiri
 * Production PHP Entrypoint & SPA Handler
 */

// Set security headers
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('Referrer-Policy: strict-origin-when-cross-origin');

// Locate index.html
$indexHtml = __DIR__ . '/index.html';

if (file_exists($indexHtml)) {
    // Cache control: HTML shell should not be cached aggressively
    header('Cache-Control: no-cache, no-store, must-revalidate');
    header('Pragma: no-cache');
    header('Expires: 0');
    header('Content-Type: text/html; charset=UTF-8');
    readfile($indexHtml);
    exit;
}

// Fallback error if index.html not found
http_response_code(500);
header('Content-Type: text/plain; charset=UTF-8');
echo "500 Internal Server Error: index.html not found. Please run the build command first.";
