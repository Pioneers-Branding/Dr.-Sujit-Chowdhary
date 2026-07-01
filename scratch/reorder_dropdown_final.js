const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.endsWith('.html') && !file.endsWith('.bak'));

const targetOrder = [
    'service-absent-testis.html',
    'service-adrenal-tumor.html',
    'service-anorectal-malformation.html',
    'service-biliary-atresia.html',
    'service-duplex-renal-system.html',
    'service-exstrophy-epispadias.html',
    'service-hernia-hydrocele.html',
    'service-hirschsprung.html',
    'service-hydronephrosis.html',
    'service-hypospadias.html',
    'service-neuropathic-bladder.html',
    'service-pediatric-stone-disease.html',
    'service-pediatric-oncosurgery.html',
    'service-pediatric-robotic-surgery.html',
    'service-pediatric-tumors.html',
    'service-pediatric-urodynamics.html',
    'service-phimosis.html',
    'service-pujo.html',
    'service-puv.html',
    'service-renal-tumor.html',
    'service-thoracoscopic-surgery.html',
    'service-undescended-testis.html',
    'service-uti.html',
    'service-choledochal-cyst.html', // 24th item (Row 8, Col 3)
    'service-vesicoureteric-reflux.html',
    'service-voiding-dysfunction.html',
    'service-pediatric-gi-surgery.html' // 27th item (Row 9, Col 3)
];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    const regex = /<div class="dropdown-content">([\s\S]*?)<\/div>/i;
    const match = content.match(regex);
    if (!match) {
        console.log(`No dropdown-content found in ${file}`);
        return;
    }

    const originalBlock = match[1];

    const linkMap = {};
    const linkRegex = /<a\s+href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi;
    let m;
    while ((m = linkRegex.exec(originalBlock)) !== null) {
        const href = m[1];
        const attrs = m[2];
        const text = m[3].trim();
        linkMap[href] = { attrs, text };
    }

    let newBlock = '\n';
    targetOrder.forEach(href => {
        const item = linkMap[href];
        if (item) {
            newBlock += `                        <a href="${href}"${item.attrs}>${item.text}</a>\n`;
        } else {
            console.log(`Warning: href ${href} not found in ${file}`);
        }
    });
    newBlock += '                    ';

    content = content.replace(regex, `<div class="dropdown-content">${newBlock}</div>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated dropdown in ${file}`);
});

console.log("Updated dropdown reordering completed successfully across all pages.");
