const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';

const serviceMap = {
    'service-absent-testis.html': {
        name: 'Absent/Undescended Testis',
        type: 'urology'
    },
    'service-adrenal-tumor.html': {
        name: 'Adrenal Tumor',
        type: 'surgical'
    },
    'service-anorectal-malformation.html': {
        name: 'Anorectal Malformation',
        type: 'surgical'
    },
    'service-biliary-atresia.html': {
        name: 'Biliary Atresia',
        type: 'surgical'
    },
    'service-choledochal-cyst.html': {
        name: 'Choledochal Cyst',
        type: 'surgical'
    },
    'service-duplex-renal-system.html': {
        name: 'Duplex Renal System',
        type: 'urology'
    },
    'service-exstrophy-epispadias.html': {
        name: 'Exstrophy Epispadias',
        type: 'urology'
    },
    'service-hernia-hydrocele.html': {
        name: 'Hernia and Hydrocele',
        type: 'surgical'
    },
    'service-hirschsprung.html': {
        name: 'Hirschsprung Disease',
        type: 'surgical'
    },
    'service-hydronephrosis.html': {
        name: 'Hydronephrosis',
        type: 'urology'
    },
    'service-hypospadias.html': {
        name: 'Hypospadias',
        type: 'urology'
    },
    'service-neuropathic-bladder.html': {
        name: 'Neuropathic Bladder',
        type: 'urology'
    },
    'service-paediatric-gi.html': {
        name: 'Paediatric GI Surgery',
        type: 'surgical'
    },
    'service-pediatric-gi-surgery.html': {
        name: 'Pediatric GI Surgery',
        type: 'surgical'
    },
    'service-pediatric-oncosurgery.html': {
        name: 'Pediatric Oncosurgery',
        type: 'surgical'
    },
    'service-pediatric-robotic-surgery.html': {
        name: 'Pediatric Robotic Surgery',
        type: 'urology & surgery'
    },
    'service-pediatric-stone-disease.html': {
        name: 'Pediatric Stone Disease',
        type: 'urology'
    },
    'service-pediatric-tumors.html': {
        name: 'Pediatric Tumors',
        type: 'surgical'
    },
    'service-pediatric-urodynamics.html': {
        name: 'Pediatric Urodynamics',
        type: 'urology'
    },
    'service-phimosis.html': {
        name: 'Phimosis',
        type: 'urology'
    },
    'service-pujo.html': {
        name: 'PUJO',
        type: 'urology'
    },
    'service-puv.html': {
        name: 'PUV',
        type: 'urology'
    },
    'service-renal-tumor.html': {
        name: 'Renal Tumor',
        type: 'surgical'
    },
    'service-thoracoscopic-surgery.html': {
        name: 'Thoracoscopic Surgery',
        type: 'surgical'
    },
    'service-undescended-testis.html': {
        name: 'Undescended Testis',
        type: 'urology'
    },
    'service-uti.html': {
        name: 'UTI',
        type: 'urology'
    },
    'service-vesicoureteric-reflux.html': {
        name: 'Vesicoureteric Reflux',
        type: 'urology'
    },
    'service-voiding-dysfunction.html': {
        name: 'Voiding Dysfunction',
        type: 'urology'
    }
};

Object.keys(serviceMap).forEach(file => {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping: ${file} (does not exist)`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const meta = serviceMap[file];

    // Build the Meta Title and Meta Description
    const title = `${meta.name} Treatment in Delhi | Dr. Sujit Chowdhary`;
    const description = `Seeking ${meta.name} Treatment in Delhi? Consult Dr. Sujit Chowdhary for advanced pediatric ${meta.type} care, accurate diagnosis & effective treatment.`;
    const canonical = `https://www.drsujitchowdhary.com/${file}`;

    // Extract the <head> section
    const headMatch = content.match(/<head>([\s\S]*?)<\/head>/i);
    if (!headMatch) {
        console.log(`Error: Could not find <head> in ${file}`);
        return;
    }

    let headContent = headMatch[1];

    // Remove any existing description meta tag
    // This matches: <meta name="description" content="..." > (and handles optional closing quotes and spaces, plus typos like > or >>)
    headContent = headContent.replace(/<meta\s+name="description"[\s\S]*?>+/, '');
    headContent = headContent.replace(/<meta\s+content="[\s\S]*?"\s+name="description"[\s\S]*?>+/, '');

    // Remove any existing canonical link
    headContent = headContent.replace(/<link\s+rel="canonical"[\s\S]*?>+/, '');

    // Replace the title tag
    // We replace the title tag and append the new meta tags right after it
    const titleRegex = /<title>([\s\S]*?)<\/title>/i;
    const newTitleAndMetas = `<title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="${canonical}">`;

    if (titleRegex.test(headContent)) {
        headContent = headContent.replace(titleRegex, newTitleAndMetas);
    } else {
        // If no title tag exists, we prepend it to the head content
        headContent = newTitleAndMetas + '\n' + headContent;
    }

    // Replace the head section in the main content
    content = content.replace(/<head>([\s\S]*?)<\/head>/i, `<head>${headContent}</head>`);

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
});
console.log('All service pages successfully updated with SEO Meta tags and Canonical Links.');
