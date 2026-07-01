const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://images.unsplash.com/featured/800x600/?pediatrician';
const dest = path.join(__dirname, 'test_featured.png');
const file = fs.createWriteStream(dest);

https.get(url, (response) => {
    console.log(`Initial Status: ${response.statusCode}`);
    if (response.headers.location) {
        console.log(`Redirecting to: ${response.headers.location}`);
        https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded size: ${fs.statSync(dest).size} bytes`);
                fs.unlinkSync(dest);
            });
        });
    } else {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded size: ${fs.statSync(dest).size} bytes`);
            fs.unlinkSync(dest);
        });
    }
}).on('error', err => console.error(err));
