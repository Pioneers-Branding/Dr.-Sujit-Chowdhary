const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/GC Venture/OneDrive/Desktop/Dr. Sujit Chowdhary';
const files = fs.readdirSync(rootDir);
const phpFiles = files.filter(f => f.endsWith('.php'));

console.log(`Verifying ${phpFiles.length} PHP files...`);

let issueCount = 0;
phpFiles.forEach(file => {
    const filePath = path.join(rootDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check include head
    if (!content.includes("include 'includes/head.php';")) {
        console.warn(`[WARN] ${file} is missing head.php include`);
        issueCount++;
    }

    // Check include header
    if (!content.includes("include 'includes/header.php';")) {
        console.warn(`[WARN] ${file} is missing header.php include`);
        issueCount++;
    }

    // Check include footer
    if (!content.includes("include 'includes/footer.php';")) {
        console.warn(`[WARN] ${file} is missing footer.php include`);
        issueCount++;
    }

    // Check for leftover href="*.html" references
    const leftoverHtmlLinks = content.match(/href="[a-zA-Z0-9_-]+\.html(#?[a-zA-Z0-9_-]*)"/g);
    if (leftoverHtmlLinks) {
        console.warn(`[WARN] ${file} has leftover .html links:`, leftoverHtmlLinks);
        issueCount++;
    }
});

console.log(`Verification completed. Total issues found: ${issueCount}`);
