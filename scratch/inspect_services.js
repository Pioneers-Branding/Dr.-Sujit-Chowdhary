const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';

const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

const results = [];

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title
    const titleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : 'No Title';
    
    // Extract service-main
    const mainMatch = content.match(/<div class="service-main fade-in-up">([\s\S]*?)<\/div>\s*<div class="sidebar/i);
    const mainContent = mainMatch ? mainMatch[1].trim() : 'No Main Content Match';
    const contentLength = mainContent.length;
    const firstLines = mainContent.substring(0, 100).replace(/\s+/g, ' ') + '...';
    
    // Extract FAQs
    const faqCount = (content.match(/<div class="faq-item">/g) || []).length;
    
    // Check for duplicate testimonials
    const mentionsAbdominalTestis = content.includes('abdominal testis');
    const mentionsAbsentTestisInTestimonials = content.includes('absent, non-palpable, or undescended testis') || content.includes('absent testis');
    const mentionsDaycareProcedure = content.includes('daycare procedure was smooth');
    const hasDuplicateTestimonials = content.includes('Manish Gupta') && content.includes('Aarti R.') && content.includes('Sanjay V.');

    results.push({
        filename,
        title,
        contentLength,
        snippet: firstLines,
        faqCount,
        hasAbdominalTestis: mentionsAbdominalTestis,
        hasDuplicateTestimonials,
    });
});

fs.writeFileSync(path.join(dir, 'scratch', 'inspection_results.json'), JSON.stringify(results, null, 2), 'utf8');
console.log(`Saved results for ${results.length} files to scratch/inspection_results.json`);
