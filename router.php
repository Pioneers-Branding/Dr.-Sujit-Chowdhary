<?php
// Local development router for PHP built-in server (php -S)
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Handle old service-*.php or service-* URLs with 301 redirection
if (preg_match('#^/service-([a-z0-9-]+)(\.(php|html))?$#i', $uri, $matches)) {
    header("Location: https://drsujitchowdhary.com/service/" . $matches[1] . ".php", true, 301);
    exit;
}

// Serve static assets or existing files directly
$filePath = __DIR__ . $uri;
if ($uri !== '/' && file_exists($filePath) && !is_dir($filePath)) {
    return false;
}

return false;
