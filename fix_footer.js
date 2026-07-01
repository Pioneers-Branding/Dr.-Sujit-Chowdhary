const fs = require('fs');

const standardHtml = fs.readFileSync('videos.html', 'utf8');
const standardFooterMatch = standardHtml.match(/<footer class="footer">[\s\S]*?<\/footer>/);

if (standardFooterMatch) {
    const standardFooter = standardFooterMatch[0];
    const files = [
        'service-renal-tumor.html',
        'service-biliary-atresia.html',
        'service-hirschsprung.html',
        'service-choledochal-cyst.html',
        'service-undescended-testis.html'
    ];
    
    files.forEach(f => {
        let content = fs.readFileSync(f, 'utf8');
        content = content.replace(/<footer class="footer">[\s\S]*?<\/footer>/, standardFooter);
        fs.writeFileSync(f, content);
        console.log('Fixed footer in ' + f);
    });
} else {
    console.log("Could not find standard footer in videos.html");
}
