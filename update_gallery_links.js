const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    const originalLength = c.length;
    
    // Replace href="videos.html" with href="gallery.html"
    // Also replace >Videos</a> with >Gallery</a> where href is gallery.html
    c = c.replace(/href="videos\.html"([^>]*)>Videos<\/a>/gi, 'href="gallery.html"$1>Gallery</a>');
    
    // If there is any remaining href="videos.html", replace the href
    c = c.replace(/href="videos\.html"/gi, 'href="gallery.html"');
    
    // Also update any loose >Videos</a> that might have been changed earlier
    // Wait, let's just make sure we got the main navigation
    
    if (c !== fs.readFileSync(f, 'utf8')) {
        fs.writeFileSync(f, c);
        console.log('Updated links in ' + f);
    }
});
