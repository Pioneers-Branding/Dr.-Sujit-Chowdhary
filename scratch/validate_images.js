const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary\\assets\\images\\services';
const files = fs.readdirSync(dir);

let emptyFilesCount = 0;

files.forEach(filename => {
    const stats = fs.statSync(path.join(dir, filename));
    if (stats.size <= 100) {
        console.error(`ERROR: ${filename} is too small (${stats.size} bytes)!`);
        emptyFilesCount++;
    } else {
        console.log(`${filename}: OK (${stats.size} bytes)`);
    }
});

if (emptyFilesCount === 0) {
    console.log('SUCCESS: All service images are valid, non-empty files.');
} else {
    console.error(`FAILED: ${emptyFilesCount} image files are empty/corrupted.`);
}
