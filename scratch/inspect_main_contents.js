const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = [
    'service-absent-testis.html',
    'service-adrenal-tumor.html',
    'service-anorectal-malformation.html',
    'service-duplex-renal-system.html',
    'service-exstrophy-epispadias.html',
    'service-hernia-hydrocele.html'
];

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    const mainMatch = content.match(/<div class="service-main fade-in-up">([\s\S]*?)<\/div>\s*<div class="sidebar/i);
    const mainContent = mainMatch ? mainMatch[1].trim() : 'No Main Content';
    
    console.log(`=== FILE: ${filename} ===`);
    console.log(mainContent.substring(0, 1000));
    console.log('===========================\n');
});
