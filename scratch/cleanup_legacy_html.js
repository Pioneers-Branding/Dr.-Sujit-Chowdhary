const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/GC Venture/OneDrive/Desktop/Dr. Sujit Chowdhary';
const files = fs.readdirSync(rootDir);

const htmlFiles = files.filter(f => f.endsWith('.html') || f.endsWith('.html.bak'));
const phpFiles = new Set(files.filter(f => f.endsWith('.php')));

console.log(`Found ${htmlFiles.length} legacy HTML/bak files in root.`);

let deleteCount = 0;
let missingPhp = [];

htmlFiles.forEach(file => {
    // Determine expected PHP filename
    let baseName = file.replace(/\.bak$/, '');
    let phpName = baseName.replace(/\.html$/, '.php');

    if (phpFiles.has(phpName)) {
        fs.unlinkSync(path.join(rootDir, file));
        deleteCount++;
        console.log(`Deleted legacy file: ${file} (corresponding ${phpName} exists)`);
    } else {
        missingPhp.push(file);
        console.warn(`[SKIP] Missing PHP for ${file}`);
    }
});

console.log(`Cleanup complete. Deleted ${deleteCount} legacy HTML files. ${missingPhp.length} missing PHP files.`);
