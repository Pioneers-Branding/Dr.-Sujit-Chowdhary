const fs = require('fs');
const https = require('https');
const path = require('path');

const imageMap = {
    'choledochal-cyst.png': '1584515979956-d9f6e5d09982',
    'exstrophy-epispadias.png': '1581594693702-fbdc51b2763b',
    'hernia-hydrocele.png': '1519689680058-324335c77eba',
    'pediatric-stone-disease.png': '1579154204601-01588f351e67',
    'pujo.png': '1516549655169-df83a0774514'
};

const outputDir = path.join(__dirname, '..', 'assets', 'images', 'services');

function downloadImage(filename, photoId) {
    return new Promise((resolve, reject) => {
        const url = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;
        const dest = path.join(outputDir, filename);
        const file = fs.createWriteStream(dest);

        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                https.get(response.headers.location, (res) => {
                    res.pipe(file);
                    file.on('finish', () => file.close(resolve));
                }).on('error', err => fs.unlink(dest, () => reject(err)));
            } else {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            }
        }).on('error', err => fs.unlink(dest, () => reject(err)));
    });
}

async function run() {
    console.log("Starting downloads for missing service page images with verified IDs...");
    for (const [filename, photoId] of Object.entries(imageMap)) {
        try {
            await downloadImage(filename, photoId);
            const stats = fs.statSync(path.join(outputDir, filename));
            console.log(`Successfully downloaded ${filename} (Size: ${stats.size} bytes)`);
        } catch (err) {
            console.error(`Failed to download ${filename}:`, err.message);
        }
    }
    console.log("Downloads completed.");
}

run();
