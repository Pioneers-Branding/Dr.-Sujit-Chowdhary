const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const mainMatch = content.match(/<div class="service-main fade-in-up">([\s\S]*?)<\/div>\s*<div class="sidebar/i);
    if (mainMatch) {
        const fullMainBlock = mainMatch[1];
        const imgMatch = fullMainBlock.match(/<img[^>]*src="([^"]*)"[^>]*>/i);
        const imgSrc = imgMatch ? imgMatch[1] : 'No Image Tag';
        console.log(`${filename}: Image in HTML -> ${imgSrc}`);
    } else {
        console.log(`${filename}: No service-main block`);
    }
});
