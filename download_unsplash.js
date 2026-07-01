const fs = require('fs');
const https = require('https');
const path = require('path');

const imageMap = {
    'neuropathic-bladder.png': '1579684385127-1ef15d508118',
    'pujo.png': '1551076805-e16760c06477',
    'renal-tumor.png': '1576091160399-112ba8d25d1d',
    'biliary-atresia.png': '1559839734-2b71ea197ec2',
    'choledochal-cyst.png': '1527613426400-9ce7ce61d497',
    'undescended-testis.png': '1505751172876-fa1923c5c528'
};

const outputDir = path.join(__dirname, 'assets', 'images', 'services');

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

async function downloadAll() {
    console.log("Restoring Unsplash images for failed Wikipedia downloads...");
    for (const [filename, photoId] of Object.entries(imageMap)) {
        try {
            await downloadImage(filename, photoId);
            console.log(`Restored ${filename}`);
        } catch (err) {
            console.error(`Failed to restore ${filename}:`, err.message);
        }
    }
}

downloadAll();
