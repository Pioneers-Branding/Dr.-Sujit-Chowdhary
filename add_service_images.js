const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const files = fs.readdirSync(directoryPath);

const serviceImageMap = {
    'service-uti.html': 'uti.png',
    'service-hydronephrosis.html': 'hydronephrosis.png',
    'service-paediatric-gi.html': 'paediatric-gi.png',
    'service-neuropathic-bladder.html': 'neuropathic-bladder.png',
    'service-pujo.html': 'pujo.png',
    'service-puv.html': 'puv.png',
    'service-renal-tumor.html': 'renal-tumor.png',
    'service-biliary-atresia.html': 'biliary-atresia.png',
    'service-hirschsprung.html': 'hirschsprung.png',
    'service-choledochal-cyst.html': 'choledochal-cyst.png',
    'service-undescended-testis.html': 'undescended-testis.png'
};

files.forEach(file => {
    if (serviceImageMap[file]) {
        const filePath = path.join(directoryPath, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if the image is already added
        if (content.includes(`assets/images/services/${serviceImageMap[file]}`)) {
            console.log(`Image already exists in ${file}`);
            return;
        }

        // Find the service-main div and the first h2 inside it
        const targetStr = '<div class="service-main fade-in-up">\n';
        // wait, let's use a more flexible regex because formatting could be different
        // we'll replace `<div class="service-main fade-in-up">` with itself + the image tag
        
        const imageTag = `                <img src="assets/images/services/${serviceImageMap[file]}" alt="Service Illustration" class="service-hero-image" style="width: 100%; height: auto; border-radius: var(--radius-md); margin-bottom: 30px; box-shadow: var(--shadow-sm); object-fit: cover; max-height: 400px;">\n`;
        
        // Let's replace the first occurrence of '<div class="service-main fade-in-up">'
        // To be safe, let's match `<div class="service-main` and its closing `>`
        const regex = /(<div\s+class="[^"]*service-main[^"]*"[^>]*>\s*)/;
        
        if (regex.test(content)) {
            content = content.replace(regex, `$1${imageTag}`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`Could not find target div in ${file}`);
        }
    }
});
console.log("Done updating images.");
