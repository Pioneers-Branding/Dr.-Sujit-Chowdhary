const https = require('https');

const articles = [
    'Ureteropelvic junction obstruction',
    'Choledochal cyst',
    'Bladder exstrophy',
    'Inguinal hernia',
    'Kidney stone'
];

function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch(e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
}

async function test() {
    for (const article of articles) {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(article)}&prop=pageimages&format=json&pithumbsize=800`;
        try {
            const data = await httpsGet(apiUrl);
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            if (pageId !== '-1' && pages[pageId].thumbnail) {
                console.log(`${article}: FOUND -> ${pages[pageId].thumbnail.source}`);
            } else {
                console.log(`${article}: NOT FOUND`);
            }
        } catch(e) {
            console.log(`${article}: ERROR -> ${e.message}`);
        }
    }
}

test();
