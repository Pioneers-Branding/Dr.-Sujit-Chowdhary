<?php
// Prevent browser caching for dynamic page content
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

if (!isset($page_title)) {
    $page_title = "Dr. Sujit Chowdhary | Pediatric Urologist in Delhi";
}
if (!isset($meta_description)) {
    $meta_description = "Dr. Sujit Chowdhary is a leading Pediatric Urologist and Surgeon in New Delhi, India with over 31 years of experience.";
}
$css_version = file_exists(__DIR__ . '/../css/index.css') ? filemtime(__DIR__ . '/../css/index.css') : time();
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title><?php echo htmlspecialchars($page_title); ?></title>
    <meta name="description" content="<?php echo htmlspecialchars($meta_description); ?>">
    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/index.css?v=<?php echo $css_version; ?>">
    <?php if (isset($extra_head) && !empty($extra_head)) { echo $extra_head; } ?>
</head>
