const https = require('https');

const ids = [
    '1502740479091-635887520287',
    '1516549655169-df83a0774514',
    '1581594693702-fbdc51b2763b',
    '1582560475093-b688ab9240d5',
    '1516613902367-e3174f5fd93c'
];

function checkId(photoId) {
    return new Promise((resolve) => {
        const url = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;
        https.get(url, (res) => {
            console.log(`${photoId}: Status ${res.statusCode}, Length ${res.headers['content-length']}`);
            resolve();
        }).on('error', err => {
            console.log(`${photoId}: Error ${err.message}`);
            resolve();
        });
    });
}

async function run() {
    for (const id of ids) {
        await checkId(id);
    }
}
run();
