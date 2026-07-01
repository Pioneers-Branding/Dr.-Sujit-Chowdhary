const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

let errors = 0;

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check external images
    if (content.includes('pedsurgerydelhi.com')) {
        console.error(`ERROR: ${filename} still contains pedsurgerydelhi.com references!`);
        errors++;
    }
    
    // Check empty icons
    if (content.match(/<li>\s*<i\s*>\s*<\/i>/i) || content.match(/<li>\s*<i\s+class=""\s*>\s*<\/i>/i)) {
        console.error(`ERROR: ${filename} still contains empty list icons!`);
        errors++;
    }
    
    // Check specific placeholders
    if ((filename === 'service-uti.html' || filename === 'service-neuropathic-bladder.html') && content.includes('Phimosis is defined as inability')) {
        console.error(`ERROR: ${filename} still contains general urology/phimosis placeholder!`);
        errors++;
    }
});

if (errors === 0) {
    console.log('Verification PASSED: No external images, no empty icons, and all placeholders resolved.');
} else {
    console.error(`Verification FAILED with ${errors} error(s).`);
}
