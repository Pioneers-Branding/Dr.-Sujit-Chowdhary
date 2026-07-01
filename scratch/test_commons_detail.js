const https = require('https');

const url = 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Stethoscope_2.jpg';

https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0 (Contact: admin@example.com)' } }, (res) => {
    console.log(`Status code: ${res.statusCode}`);
    console.log(`Headers:`, res.headers);
}).on('error', err => console.error(err));
