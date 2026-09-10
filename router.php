<?php
// Local development router for PHP built-in server (php -S)
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// 1. Redirect /blogs or /blogs/* to main blog page (exact /blogs -> homepage, /blogs/* -> /blog.php)
if ($uri === '/blogs' || $uri === '/blogs/') {
    header("Location: /", true, 301);
    exit;
}
if (preg_match('#^/blogs/.+$#i', $uri)) {
    header("Location: /blog.php", true, 301);
    exit;
}

// 2. Redirect /pin, /pin/*, or ?pin/* query strings to homepage
if (preg_match('#^/pin(/.*)?$#i', $uri) || (isset($_SERVER['QUERY_STRING']) && preg_match('#^pin/#i', $_SERVER['QUERY_STRING']))) {
    header("Location: /", true, 301);
    exit;
}

// 3. Redirect specific legacy URLs to gallery.php
if ($uri === '/service/gallery.php' || strcasecmp($uri, '/EHBA.php/gallery.php') === 0 || strcasecmp($uri, '/case-study.php') === 0) {
    header("Location: /gallery.php", true, 301);
    exit;
}

// 4. Redirect legacy tumor URLs to pediatric-tumours page (/service/pediatric-tumors.php)
if (preg_match('#^/(pediatric-tumours\.php|Wilms\'?s-tumour\.php|Renal-Tumor\.php)(/.*)?$#i', $uri)) {
    header("Location: /service/pediatric-tumors.php", true, 301);
    exit;
}

// 5. Redirect double service prefix (service/service/...) and service index to homepage
if (preg_match('#^/service/service/#i', $uri) || $uri === '/service/index.php') {
    header("Location: /", true, 301);
    exit;
}

// 6. Redirect foreign / spam / old CMS directory paths to homepage
if (preg_match('#^/(index\.php/)?(shop|contents|toyu|cate-[0-9-]+|information|reserve)(/.*)?$#i', $uri) || $uri === '/index.php/') {
    header("Location: /", true, 301);
    exit;
}

// 7. Redirect legacy clinic & landing pages to homepage
if (preg_match('#^/(children\'?s-hospital-urology-clinic|kids-urologist-in-delhi|paediatric-urology-clinic|paediatric-urologist-in-delhi|paediatric-urology-surgery|best-paediatric-urologist)(/.*)?$#i', $uri)) {
    header("Location: /", true, 301);
    exit;
}

// 8. Redirect compound .php/ URLs to homepage
if (preg_match('#^/[A-Za-z0-9_\'-]+\.php/.+$#i', $uri)) {
    header("Location: /", true, 301);
    exit;
}

// 9. Redirect legacy condition/procedure .php and .html files to homepage
if (preg_match('#^/(Esophageal-Subtitution|Duplex-Pelvicalyceal|Pediatric-urodynamics|Biliary-Atresia|Robotic|Urology|Exstrophy-epispadias|Hirschsprung\'?s-Disease|anorectal-malformation|Pediatric-Laparoscopy|EHBA|Pelvic-ureteric|Conjoined-twin-surgery|Circumcision|Pediatric-urology|Urinary-Tract|Thoracoscopic-surgery|Testis-undescended|International-Patients|Hypsopadias|Undescended-testis|Hernia-and-Hydrocele|Neuropathic-bladder|Testicular-Torsion|daycare-surgery|Antenatal-Hydronephrosis|Cholechodd-cyst|Hydronephrosis|Urinary-stone|Rectourethral-Fistula|Disorder-of-sexual-differentiation|Vesicoureteric)\.php$#i', $uri) || strcasecmp($uri, '/service-hirschsprung.html') === 0) {
    header("Location: /", true, 301);
    exit;
}

// 10. Redirect legacy assets/reviews files to homepage
if (preg_match('#^/assets/reviews(/.*)?$#i', $uri)) {
    header("Location: /", true, 301);
    exit;
}

// 10. Redirect deleted undescended testis service to homepage
if (preg_match('#^/service-?undescended-testis(\.(php|html))?$#i', $uri)) {
    header("Location: /", true, 301);
    exit;
}

// 11. Redirect old service-*.php or service-* URLs to /service/*.php
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
