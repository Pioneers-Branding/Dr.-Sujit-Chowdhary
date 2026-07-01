const fs = require('fs');

const path = 'C:\\Users\\GC Venture\\.gemini\\antigravity-ide\\brain\\d80051ac-082e-41b9-bd92-ac031b534c0c\\.system_generated\\steps\\145\\content.md';
const content = fs.readFileSync(path, 'utf8');

// Let's search for "title" or similar keywords
const regexes = [
    /"title":"([^"]+)"/i,
    /<title>([^<]+)<\/title>/i,
    /"videoDetails":\s*\{[\s\S]*?"title":"([^"]+)"/i
];

regexes.forEach(r => {
    const match = content.match(r);
    if (match) {
        console.log(`Matched with ${r}: ${match[1]}`);
    }
});

// Let's also scan for common urology/surgery terms
const terms = ['robotic', 'kidney', 'bladder', 'ureter', 'surgery', 'pediatric', 'hypospadias', 'testis', 'pyeloplasty'];
terms.forEach(term => {
    const idx = content.toLowerCase().indexOf(term);
    if (idx !== -1) {
        console.log(`Found term "${term}" at index ${idx}`);
    }
});
