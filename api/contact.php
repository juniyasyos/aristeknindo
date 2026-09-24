<?php
/**
 * PT. Aris Teknindo Mandiri - RFQ / Contact Submission Handler
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method Not Allowed. Only POST is accepted.'
    ]);
    exit;
}

// Support both JSON body and multipart/x-www-form-urlencoded
$rawBody = file_get_contents('php://input');
$body = json_decode($rawBody, true);
$data = is_array($body) ? $body : $_POST;

$company     = trim($data['company'] ?? '');
$picName     = trim($data['picName'] ?? '');
$phone       = trim($data['phone'] ?? '');
$email       = trim($data['email'] ?? '');
$serviceType = trim($data['serviceType'] ?? 'general');
$description = trim($data['description'] ?? '');

// Validation
$errors = [];
if (empty($company))     $errors[] = 'Company name is required';
if (empty($picName))     $errors[] = 'PIC name is required';
if (empty($phone))       $errors[] = 'Phone / WhatsApp is required';
if (empty($description)) $errors[] = 'Description / technical specs is required';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors' => $errors,
        'message' => 'Lengkapi data yang dibutuhkan.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// Log submission
$logsDir = __DIR__ . '/../data/logs';
if (!is_dir($logsDir)) {
    @mkdir($logsDir, 0755, true);
}
$logEntry = [
    'timestamp'   => date('c'),
    'ip'          => $_SERVER['REMOTE_ADDR'] ?? 'UNKNOWN',
    'company'     => $company,
    'picName'     => $picName,
    'phone'       => $phone,
    'email'       => $email,
    'serviceType' => $serviceType,
    'description' => $description,
];

@file_put_contents(
    $logsDir . '/rfq_inquiries.log',
    json_encode($logEntry, JSON_UNESCAPED_UNICODE) . PHP_EOL,
    FILE_APPEND | LOCK_EX
);

// Send email notification using PHP mail() if server supports it
$toSales = "sales@aristeknindomandiri.com";
$subject = "RFQ Baru dari Website: " . $company . " (" . $picName . ")";
$emailBody = "Permintaan RFQ Baru:\n\n"
    . "Perusahaan: " . $company . "\n"
    . "PIC: " . $picName . "\n"
    . "No. HP / WA: " . $phone . "\n"
    . "Email: " . $email . "\n"
    . "Kebutuhan: " . $serviceType . "\n"
    . "Deskripsi:\n" . $description . "\n\n"
    . "Waktu: " . date('Y-m-d H:i:s') . "\n"
    . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? '-');

$mailSent = false;
if (function_exists('mail') && !empty($email)) {
    $headers = "From: noreply@aristeknindomandiri.com\r\n"
             . "Reply-To: " . ($email ?: $toSales) . "\r\n"
             . "X-Mailer: PHP/" . phpversion();
    $mailSent = @mail($toSales, $subject, $emailBody, $headers);
}

echo json_encode([
    'success' => true,
    'message' => 'Permintaan penawaran teknis berhasil dikirim ke server.',
    'email_dispatched' => $mailSent,
    'data' => [
        'company' => $company,
        'picName' => $picName,
        'phone' => $phone,
        'serviceType' => $serviceType,
        'submitted_at' => date('c')
    ]
], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
