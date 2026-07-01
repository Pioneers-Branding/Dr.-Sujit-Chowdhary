const https = require('https');

const serviceToWikiMap = {
    'absent-testis.png': 'Cryptorchidism',
    'adrenal-tumor.png': 'Adrenal tumor',
    'anorectal-malformation.png': 'Anorectal malformation',
    'biliary-atresia.png': 'Biliary atresia',
    'choledochal-cyst.png': 'Choledochal cyst',
    'duplex-renal-system.png': 'Duplicated ureter',
    'exstrophy-epispadias.png': 'Bladder exstrophy',
    'hernia-hydrocele.png': 'Inguinal hernia',
    'hirschsprung.png': 'Hirschsprung\'s disease',
    'hydronephrosis.png': 'Hydronephrosis',
    'hypospadias.png': 'Hypospadias',
    'neuropathic-bladder.png': 'Neurogenic bladder dysfunction',
    'paediatric-gi.png': 'Pediatric surgery',
    'pediatric-gi-surgery.png': 'Pediatric surgery',
    'pediatric-oncosurgery.png': 'Childhood cancer',
    'pediatric-robotic-surgery.png': 'Robotic surgery',
    'pediatric-stone-disease.png': 'Kidney stone disease',
    'pediatric-tumors.png': 'Pediatric oncology',
    'pediatric-urodynamics.png': 'Urodynamic testing',
    'phimosis.png': 'Phimosis',
    'pujo.png': 'Ureteropelvic junction obstruction',
    'puv.png': 'Posterior urethral valve',
    'renal-tumor.png': 'Wilms\' tumor',
    'thoracoscopic-surgery.png': 'Video-assisted thoracoscopic surgery',
    'undescended-testis.png': 'Cryptorchidism',
    'uti.png': 'Urinary tract infection',
    'vesicoureteric-reflux.png': 'Vesicoureteral reflux',
    'voiding-dysfunction.png': 'Urinary incontinence'
};

function httpsGet(url) {
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

async function run() {
    console.log("Checking Wikipedia articles for thumbnails...");
    for (const [filename, article] of Object.entries(serviceToWikiMap)) {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(article)}&prop=pageimages&format=json&pithumbsize=800`;
        const data = await httpsGet(apiUrl);
        if (data && data.query && data.query.pages) {
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pageId !== '-1' && pages[pageId].thumbnail) {
                console.log(`${filename} -> ${article}: FOUND -> ${pages[pageId].thumbnail.source}`);
            } else {
                console.log(`${filename} -> ${article}: NOT FOUND`);
            }
        } else {
            console.log(`${filename} -> ${article}: FAILED API CALL`);
        }
    }
    console.log("Done checking.");
}

run();
