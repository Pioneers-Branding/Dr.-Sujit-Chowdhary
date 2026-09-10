<?php
// Local development router for PHP built-in server (php -S)
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// 1. Redirect /blogs or /blogs/* to main blog page
if (preg_match('#^/blogs(/.*)?$#i', $uri)) {
    header("Location: /blog.php", true, 301);
    exit;
}

// 2. Redirect deleted undescended testis service to homepage
if (preg_match('#^/service-?undescended-testis(\.(php|html))?$#i', $uri)) {
    header("Location: /", true, 301);
    exit;
}

// 3. Redirect old service-*.php or service-* URLs to /service/*.php
if (preg_match('#^/service-([a-z0-9-]+)(\.(php|html))?$#i', $uri, $matches)) {
    header("Location: /service/" . $matches[1] . ".php", true, 301);
    exit;
}

// 4. Serve existing static file directly
$filePath = __DIR__ . $uri;
if ($uri !== '/' && file_exists($filePath) && !is_dir($filePath)) {
    return false;
}

// 5. Handle extensionless PHP file routing (e.g. /about -> /about.php)
if ($uri !== '/' && file_exists($filePath . '.php')) {
    include $filePath . '.php';
    exit;
}

// 6. Handle directory index.php
if (is_dir($filePath) && file_exists(rtrim($filePath, '/') . '/index.php')) {
    include rtrim($filePath, '/') . '/index.php';
    exit;
}

return false;
