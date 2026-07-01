const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

const testimonialsByFile = {};

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all quotes and authors
    const quotes = [];
    const quoteRegex = /<p class="quote">([\s\S]*?)<\/p>/g;
    const authorRegex = /<div class="author[^"]*">\s*<h5>([\s\S]*?)<\/h5>\s*<span>([\s\S]*?)<\/span>/g;
    
    let quoteMatch;
    while ((quoteMatch = quoteRegex.exec(content)) !== null) {
        quotes.push(quoteMatch[1].trim());
    }
    
    testimonialsByFile[filename] = quotes;
});

fs.writeFileSync(path.join(dir, 'scratch', 'testimonials.json'), JSON.stringify(testimonialsByFile, null, 2), 'utf8');
console.log('Saved testimonials to scratch/testimonials.json');
