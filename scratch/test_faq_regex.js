const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html') && !file.endsWith('.bak'));

files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const regex = /<section class="section bg-light" id="faq">[\s\S]*?(?=<!-- Footer -->|<footer)/i;
    const match = content.match(regex);
    console.log(`${f}: matched = ${!!match}`);
});
