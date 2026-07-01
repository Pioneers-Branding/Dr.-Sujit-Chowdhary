const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html') && !file.endsWith('.bak'));

const results = [];

files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/i);
    const descMatch = content.match(/<meta\s+name="description"\s+content="([\s\S]*?)"/i) || content.match(/<meta\s+content="([\s\S]*?)"\s+name="description"/i);
    const h1Match = content.match(/<h1>([\s\S]*?)<\/h1>/i);
    
    results.push({
        file: f,
        title: titleMatch ? titleMatch[1].trim() : 'NONE',
        description: descMatch ? descMatch[1].trim() : 'NONE',
        h1: h1Match ? h1Match[1].trim() : 'NONE'
    });
});

console.log(JSON.stringify(results, null, 2));
