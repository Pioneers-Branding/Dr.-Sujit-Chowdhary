const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html') && !file.endsWith('.bak'));

files.forEach(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf8');
    
    // Find FAQs count
    const faqMatches = content.match(/<div class="faq-item">/gi) || [];
    
    // Find Book an Appointment structure
    const hasContactSection = content.includes('class="section contact-section"');
    const hasOldSection = content.includes('id="appointment"') && !hasContactSection;
    
    console.log(`${f}: FAQs = ${faqMatches.length}, isContactSection = ${hasContactSection}, hasOldSection = ${hasOldSection}`);
});
