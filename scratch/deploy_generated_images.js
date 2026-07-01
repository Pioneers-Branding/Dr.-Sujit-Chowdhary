const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\GC Venture\\.gemini\\antigravity-ide\\brain\\35baa0c3-2a83-49bd-8a55-0ae0172191b7';
const outputDir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary\\assets\\images\\services';

const generatedImages = {
    A: 'pediatric_urology_reconstruction_1782669721144.png',
    B: 'kidney_urinary_tract_1782669734968.png',
    C: 'pediatric_gi_abdomen_1782669749045.png',
    D: 'pediatric_oncology_tumors_1782669764032.png',
    E: 'robotic_minimally_invasive_1782669778413.png'
};

const categoryMapping = {
    // Category A: Pediatric Urology & Reconstruction
    'hypospadias.png': 'A',
    'phimosis.png': 'A',
    'undescended-testis.png': 'A',
    'exstrophy-epispadias.png': 'A',
    'absent-testis.png': 'A',
    'hernia-hydrocele.png': 'A',
    
    // Category B: Kidney & Urinary Tract
    'hydronephrosis.png': 'B',
    'duplex-renal-system.png': 'B',
    'pujo.png': 'B',
    'puv.png': 'B',
    'vesicoureteric-reflux.png': 'B',
    'uti.png': 'B',
    'voiding-dysfunction.png': 'B',
    'neuropathic-bladder.png': 'B',
    'pediatric-stone-disease.png': 'B',
    'pediatric-urodynamics.png': 'B',
    
    // Category C: Paediatric GI & Abdomen
    'anorectal-malformation.png': 'C',
    'biliary-atresia.png': 'C',
    'choledochal-cyst.png': 'C',
    'hirschsprung.png': 'C',
    'paediatric-gi.png': 'C',
    'pediatric-gi-surgery.png': 'C',
    
    // Category D: Pediatric Oncology & Tumors
    'adrenal-tumor.png': 'D',
    'renal-tumor.png': 'D',
    'pediatric-oncosurgery.png': 'D',
    'pediatric-tumors.png': 'D',
    
    // Category E: Advanced Minimally Invasive / Robotic Surgery
    'pediatric-robotic-surgery.png': 'E',
    'thoracoscopic-surgery.png': 'E'
};

function copyFile(src, dest) {
    fs.copyFileSync(src, dest);
}

async function run() {
    console.log("Starting deployment of custom AI-generated medical category images...");
    
    // Ensure output dir exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    for (const [filename, category] of Object.entries(categoryMapping)) {
        const srcFile = path.join(artifactDir, generatedImages[category]);
        const destFile = path.join(outputDir, filename);
        
        try {
            copyFile(srcFile, destFile);
            const stats = fs.statSync(destFile);
            console.log(`Successfully deployed ${filename} (Category ${category}) -> Size: ${stats.size} bytes`);
        } catch (err) {
            console.error(`Failed to copy to ${filename}:`, err.message);
        }
    }
    
    console.log("Image deployment completed.");
}

run();
