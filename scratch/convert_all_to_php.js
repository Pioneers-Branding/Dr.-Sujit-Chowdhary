const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/GC Venture/OneDrive/Desktop/Dr. Sujit Chowdhary';

// Map HTML filename basenames to current_page values
function getPageKey(filename) {
    const name = path.basename(filename, '.html');
    if (name === 'index') return 'home';
    if (name === 'about') return 'about';
    if (name === 'services') return 'services';
    if (name === 'gallery') return 'gallery';
    if (name === 'international-patients') return 'intl';
    if (name === 'blog') return 'blog';
    if (name === 'contact') return 'contact';
    return name; // e.g. service-absent-testis
}

const files = fs.readdirSync(rootDir);
const htmlFiles = files.filter(f => f.endsWith('.html') && !f.endsWith('.bak.html'));

console.log(`Found ${htmlFiles.length} HTML files to convert.`);

htmlFiles.forEach(file => {
    const filePath = path.join(rootDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const pageKey = getPageKey(file);

    // 1. Extract Title
    const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : 'Dr. Sujit Chowdhary | Pediatric Urologist';

    // 2. Extract Meta Description
    const metaMatch = content.match(/<meta\s+name="description"\s+content="([\s\S]*?)"/i);
    const metaDesc = metaMatch ? metaMatch[1].trim() : 'Dr. Sujit Chowdhary is a leading Pediatric Urologist and Surgeon in New Delhi, India.';

    // 3. Extract custom <style> inside <head> if any
    const headMatch = content.match(/<head>([\s\S]*?)<\/head>/i);
    let extraHead = '';
    if (headMatch) {
        const headInner = headMatch[1];
        const styleMatches = headInner.match(/<style[\s\S]*?<\/style>/gi);
        if (styleMatches) {
            extraHead = styleMatches.join('\n');
        }
    }

    // 4. Extract Body Content between </header> and footer / floating icons
    let mainContent = '';
    const headerEndIdx = content.indexOf('</header>');
    if (headerEndIdx !== -1) {
        const afterHeader = content.substring(headerEndIdx + '</header>'.length);
        
        // Find start of footer
        let footerStartIdx = afterHeader.indexOf('<footer');
        if (footerStartIdx === -1) {
            footerStartIdx = afterHeader.indexOf('<!-- Footer');
        }
        if (footerStartIdx === -1) {
            footerStartIdx = afterHeader.indexOf('<!-- Scripts');
        }
        if (footerStartIdx === -1) {
            footerStartIdx = afterHeader.indexOf('</body>');
        }

        if (footerStartIdx !== -1) {
            mainContent = afterHeader.substring(0, footerStartIdx).trim();
        } else {
            mainContent = afterHeader.trim();
        }
    } else {
        // Fallback: use body content
        const bodyMatch = content.match(/<body[\s\S]*?>([\s\S]*?)<\/body>/i);
        mainContent = bodyMatch ? bodyMatch[1].trim() : content;
    }

    // Replace all internal .html links with .php links
    mainContent = mainContent.replace(/href="([a-zA-Z0-9_-]+)\.html(#?[a-zA-Z0-9_-]*)"/g, 'href="$1.php$2"');
    
    // Replace form in contact page if needed
    if (file === 'contact.html') {
        mainContent = mainContent.replace(
            /<form action="#" class="contact-form">/i,
            `<form action="includes/process-contact.php" method="POST" class="contact-form">
                <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>
                    <div class="alert alert-success" style="background:#d4edda; color:#155724; padding: 12px 20px; border-radius:8px; margin-bottom:20px;">
                        <i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We will get back to you shortly.
                    </div>
                <?php endif; ?>`
        );
        // Ensure inputs have name attributes for form submit
        mainContent = mainContent.replace('<input type="text" placeholder="Your Name" class="form-control" required>', '<input type="text" name="name" placeholder="Your Name" class="form-control" required>');
        mainContent = mainContent.replace('<input type="email" placeholder="Email Address" class="form-control" required>', '<input type="email" name="email" placeholder="Email Address" class="form-control" required>');
        mainContent = mainContent.replace('<input type="tel" placeholder="Phone Number" class="form-control" required>', '<input type="tel" name="phone" placeholder="Phone Number" class="form-control" required>');
        mainContent = mainContent.replace('<textarea placeholder="Message / Medical Condition" rows="5" class="form-control" required></textarea>', '<textarea name="message" placeholder="Message / Medical Condition" rows="5" class="form-control" required></textarea>');
    }

    // Escape quotes in strings for PHP variables
    const safeTitle = title.replace(/'/g, "\\'");
    const safeMetaDesc = metaDesc.replace(/'/g, "\\'");

    let phpCode = `<?php
$page_title = '${safeTitle}';
$meta_description = '${safeMetaDesc}';
$current_page = '${pageKey}';
`;

    if (extraHead) {
        phpCode += `$extra_head = <<<'EOD'\n${extraHead}\nEOD;\n`;
    }

    phpCode += `?>
<!DOCTYPE html>
<html lang="en">
<?php include 'includes/head.php'; ?>
<body>

<?php include 'includes/header.php'; ?>

${mainContent}

<?php include 'includes/footer.php'; ?>
</body>
</html>
`;

    const targetPhpFile = path.join(rootDir, file.replace('.html', '.php'));
    fs.writeFileSync(targetPhpFile, phpCode, 'utf8');
    console.log(`Converted: ${file} -> ${path.basename(targetPhpFile)}`);
});

console.log('Conversion completed successfully!');
