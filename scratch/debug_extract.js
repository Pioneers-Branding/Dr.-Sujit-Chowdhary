const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary\\service-absent-testis.html', 'utf8');
const testimonialRegex = /<div class="testimonial-card card">([\s\S]*?)<\/div>/g;
let match = testimonialRegex.exec(content);
if (match) {
    console.log('MATCH 1:', JSON.stringify(match[1]));
    const text = match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    console.log('CLEANED TEXT:', JSON.stringify(text));
} else {
    console.log('NO MATCH');
}
