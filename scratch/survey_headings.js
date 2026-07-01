const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    const mainMatch = content.match(/<div class="service-main fade-in-up">([\s\S]*?)<\/div>\s*<div class="sidebar/i);
    const mainContent = mainMatch ? mainMatch[1].trim() : 'No Main Content';
    
    // Find all h2 and h3 elements
    const headingRegex = /<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/gi;
    const headings = [];
    let match;
    while ((match = headingRegex.exec(mainContent)) !== null) {
        headings.push(`${match[1].toUpperCase()}: ${match[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()}`);
    }
    
    console.log(`${filename}: ${headings.join(' | ')}`);
});
