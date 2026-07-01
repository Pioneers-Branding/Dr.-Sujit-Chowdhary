const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    const originalLength = c.length;
    
    // Remove Reviews link
    c = c.replace(/\s*<a[^>]*href="[^"]*#reviews"[^>]*>Reviews<\/a>/gi, '');
    
    if (c.length !== originalLength) {
        fs.writeFileSync(f, c);
        console.log('Removed Reviews link in ' + f);
    }
});
