const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    const originalLength = c.length;
    
    // Remove Events link
    c = c.replace(/\s*<a[^>]*href="[^"]*#events"[^>]*>Events<\/a>/gi, '');
    
    // Remove FAQ link
    c = c.replace(/\s*<a[^>]*href="[^"]*#faq"[^>]*>FAQ<\/a>/gi, '');
    
    if (c.length !== originalLength) {
        fs.writeFileSync(f, c);
        console.log('Removed Events and FAQ links in ' + f);
    }
});
