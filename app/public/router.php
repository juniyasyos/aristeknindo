<?php
/**
 * PT. Aris Teknindo Mandiri
 * Local PHP Built-in Server Router
 * 
 * Usage:
 *   php -S 0.0.0.0:8000 router.php
 *   or:
 *   php -S 0.0.0.0:8000 -t dist router.php
 */

$rootDir = __DIR__;
$distDir = is_dir($rootDir . '/dist') ? $rootDir . '/dist' : $rootDir;

// Determine working document root
$docRoot = rtrim($_SERVER['DOCUMENT_ROOT'] ?? $distDir, '/');
if (empty($docRoot) || !is_dir($docRoot)) {
    $docRoot = $distDir;
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = rawurldecode($uri);

// Prevent path traversal
if (str_contains($uri, '..')) {
    http_response_code(400);
    echo "Bad Request";
    exit;
}

$targetFile = $docRoot . $uri;

// 1. Static file check (CSS, JS, images, fonts, etc.)
if ($uri !== '/' && file_exists($targetFile) && !is_dir($targetFile)) {
    // If it is a PHP file, execute it
    if (pathinfo($targetFile, PATHINFO_EXTENSION) === 'php') {
        include $targetFile;
        exit;
    }
    // Return false to let the built-in server handle the static asset directly
    return false;
}

// 2. Direct API call routing (e.g. /api/health or /api/health.php)
if (str_starts_with($uri, '/api/')) {
    $apiFile = $docRoot . $uri;
    if (!str_ends_with($apiFile, '.php')) {
        $apiFile .= '.php';
    }
    if (file_exists($apiFile)) {
        include $apiFile;
        exit;
    }
}

// 3. SPA Fallback: Route all subpaths (/about, /services, /products, /contact, etc.)
$entryPhp = $docRoot . '/index.php';
if (file_exists($entryPhp)) {
    include $entryPhp;
    exit;
}

$entryHtml = $docRoot . '/index.html';
if (file_exists($entryHtml)) {
    header('Content-Type: text/html; charset=UTF-8');
    readfile($entryHtml);
    exit;
}

http_response_code(404);
echo "404 Not Found - Build the app first using 'npm run build' or 'bun run build'.";
