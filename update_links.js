const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/href="index\.html#videos"/g, 'href="videos.html"');
    c = c.replace(/href="#videos"/g, 'href="videos.html"');
    fs.writeFileSync(f, c);
    console.log('Updated ' + f);
});
