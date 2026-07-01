const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find the select block
    const selectMatch = content.match(/<select[\s\S]*?<\/select>/i);
    if (selectMatch) {
        const selectHtml = selectMatch[0];
        const selectedMatch = selectHtml.match(/<option[^>]*selected[^>]*>([\s\S]*?)<\/option>/i);
        const selectedVal = selectedMatch ? selectedMatch[1].trim() : 'None';
        console.log(`${filename}: Selected in form: ${selectedVal}`);
    } else {
        console.log(`${filename}: No select element found`);
    }
});
