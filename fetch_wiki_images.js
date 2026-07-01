const fs = require('fs');
const https = require('https');
const path = require('path');

const serviceToWikiMap = {
    'uti.png': 'Urinary tract infection',
    'hydronephrosis.png': 'Hydronephrosis',
    'paediatric-gi.png': 'Human gastrointestinal tract',
    'neuropathic-bladder.png': 'Neurogenic bladder dysfunction',
    'pujo.png': 'Ureteropelvic junction obstruction',
    'puv.png': 'Posterior urethral valve',
    'renal-tumor.png': "Wilms' tumor",
    'biliary-atresia.png': 'Biliary atresia',
    'hirschsprung.png': "Hirschsprung's disease",
    'choledochal-cyst.png': 'Choledochal cyst',
    'undescended-testis.png': 'Cryptorchidism'
};

const outputDir = path.join(__dirname, 'assets', 'images', 'services');

function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0 (Contact: no-reply@example.com)' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`Status ${res.statusCode}: ${data.substring(0,100)}`));
                }
            });
        }).on('error', reject);
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0' } }, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                https.get(response.headers.location, { headers: { 'User-Agent': 'MedicalImageBot/1.0' } }, (res) => {
                    res.pipe(file);
                    file.on('finish', () => file.close(resolve));
                }).on('error', err => { fs.unlink(dest, () => reject(err)); });
            } else {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            }
        }).on('error', err => { fs.unlink(dest, () => reject(err)); });
    });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchWikiImage(articleTitle) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&format=json&pithumbsize=800`;
    try {
        const data = await httpsGet(apiUrl);
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pageId !== '-1' && pages[pageId].thumbnail) {
            return pages[pageId].thumbnail.source;
        }
        return null;
    } catch (err) {
        console.error(`Error fetching API for ${articleTitle}:`, err.message);
        return null;
    }
}

async function run() {
    console.log("Fetching specific medical images from Wikipedia sequentially...");
    for (const [filename, article] of Object.entries(serviceToWikiMap)) {
        await sleep(2000); // Throttling
        const imageUrl = await fetchWikiImage(article);
        if (imageUrl) {
            const dest = path.join(outputDir, filename);
            try {
                await downloadImage(imageUrl, dest);
                console.log(`Successfully downloaded specific image for ${filename}`);
            } catch (err) {
                console.error(`Failed to download image for ${filename}:`, err.message);
            }
        } else {
            console.log(`No specific image found for ${article}.`);
        }
    }
    console.log("Process complete.");
}

run();
