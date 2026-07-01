const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Check if the links are already added to avoid duplicates
    if (!content.includes('href="blog.html"')) {
        const targetRegex = /(<a href="gallery\.html"[^>]*>Gallery<\/a>)/i;
        const replacement = `$1\n                <a href="international-patients.html">Intl. Patients</a>\n                <a href="blog.html">Blog</a>`;
        
        content = content.replace(targetRegex, replacement);
        
        // Let's set active class if we are currently on the page
        if (f === 'international-patients.html') {
            content = content.replace(/<a href="international-patients\.html">/, '<a href="international-patients.html" class="active">');
        } else if (f === 'blog.html') {
            content = content.replace(/<a href="blog\.html">/, '<a href="blog.html" class="active">');
        }
        
        fs.writeFileSync(f, content);
        console.log(`Updated navigation in ${f}`);
    }
});
