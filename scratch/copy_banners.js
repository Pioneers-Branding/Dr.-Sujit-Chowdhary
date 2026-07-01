const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\GC Venture\\.gemini\\antigravity-ide\\brain\\d80051ac-082e-41b9-bd92-ac031b534c0c';
const destDir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary\\assets\\images';

const banner1Src = path.join(srcDir, 'media__1782712573161.png');
const banner3Src = path.join(srcDir, 'media__1782712618155.png');

const banner1Dest = path.join(destDir, 'banner1.png');
const banner3Dest = path.join(destDir, 'banner3.png');

try {
    fs.copyFileSync(banner1Src, banner1Dest);
    console.log(`Successfully copied 1st banner to: ${banner1Dest}`);
} catch (err) {
    console.error(`Error copying 1st banner: ${err.message}`);
}

try {
    fs.copyFileSync(banner3Src, banner3Dest);
    console.log(`Successfully copied 3rd banner to: ${banner3Dest}`);
} catch (err) {
    console.error(`Error copying 3rd banner: ${err.message}`);
}
