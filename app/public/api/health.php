<?php
/**
 * PT. Aris Teknindo Mandiri - Server Health & Engine Status API
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'status' => 'online',
    'app' => 'PT. Aris Teknindo Mandiri',
    'engine' => 'PHP ' . PHP_VERSION,
    'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'PHP-CLI/Embedded',
    'php_sapi' => php_sapi_name(),
    'timezone' => date_default_timezone_get(),
    'server_time' => date('c'),
    'timestamp' => time()
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
