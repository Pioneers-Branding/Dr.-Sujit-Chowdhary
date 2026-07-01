const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const outputDir = path.join(dir, 'assets', 'images', 'services');

// The 27 target images (excluding absent-testis.jpg)
const targetImages = [
    'adrenal-tumor.png',
    'anorectal-malformation.png',
    'biliary-atresia.png',
    'choledochal-cyst.png',
    'duplex-renal-system.png',
    'exstrophy-epispadias.png',
    'hernia-hydrocele.png',
    'hirschsprung.png',
    'hydronephrosis.png',
    'hypospadias.png',
    'neuropathic-bladder.png',
    'paediatric-gi.png',
    'pediatric-gi-surgery.png',
    'pediatric-oncosurgery.png',
    'pediatric-robotic-surgery.png',
    'pediatric-stone-disease.png',
    'pediatric-tumors.png',
    'pediatric-urodynamics.png',
    'phimosis.png',
    'pujo.png',
    'puv.png',
    'renal-tumor.png',
    'thoracoscopic-surgery.png',
    'undescended-testis.png',
    'uti.png',
    'vesicoureteric-reflux.png',
    'voiding-dysfunction.png'
];

// 50 candidate Unsplash photo IDs (only the first part of the ID, which is much more reliable)
const candidateIds = [
    '1584515979956', // doctor and patient child
    '1579684428480', // doctor looking at CT scan
    '1581594693702', // pediatric checkup
    '1519689680058', // doctor holding baby feet
    '1579154204601', // lab diagnostics
    '1505751172876', // stethoscope B&W
    '1622253692010', // friendly checkup
    '1530026405186', // MRI scanner
    '1579684385127', // doctor consultation
    '1516627145497', // baby feet details
    '1516549655169', // doctor/computer
    '1584515980145', // stomach examination
    '1538333581680', // pediatrician office
    '1504813184591', // smiling doctor
    '1526253038950', // doctor and screen
    '1584515979961', // stethoscope & clipboard
    '1586549996438', // modern hospital corridor
    '1551601651',    // operating room lights
    '1576091160565', // blood vials / lab test
    '1550831107',    // science lab
    '1582213782179', // consultation with parents
    '1532938911079', // doctor writing clipboard
    '1584017911766', // child checking temperature
    '1631815589968', // pediatrician and baby
    '1629909613654', // doctors smiling
    '1612349317286', // doctor checkup hands
    '1516841273335', // child smiling
    '1631815590065', // child stethoscope check
    '1583947581908', // medical desk
    '1551076807',    // clinical scanner
    '1626307337775', // surgery/clinic
    '1581594541793', // pediatric nurse
    '1512678080538', // doctor uniform close-up
    '1588776814546', // medical mask / glove
    '1581333123624', // nurse and chart
    '1583947581781', // doctor blood pressure
    '1576091160399', // robotic surgery console
    '1584519098908', // pediatrician writing
    '1576091350841', // surgical tools
    '1576091160244', // operating room
    '1559839734',    // friendly female doctor
    '1584308666744', // medical thermometer
    '1584308666750', // medication bottle
    '1516613903046', // ultrasound probe
    '1586549996',    // hospital corridor
    '1576091159986', // hospital bed
    '1551076805',    // diagnostic scanner
    '1582560475093'  // doctor hands
];

function checkId(photoId) {
    return new Promise((resolve) => {
        const url = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;
        https.get(url, (res) => {
            if (res.statusCode === 200 && res.headers['content-length'] && parseInt(res.headers['content-length']) > 1000) {
                resolve({ photoId, size: parseInt(res.headers['content-length']) });
            } else {
                resolve(null);
            }
        }).on('error', () => resolve(null));
    });
}

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
    console.log("Testing candidate photo IDs on Unsplash sequentially...");
    const workingIds = [];
    
    // We check sequentially to ensure no rate-limiting or socket issues
    for (const id of candidateIds) {
        const result = await checkId(id);
        if (result) {
            console.log(`Working photo ID found: ${id} (Content Length: ${result.size})`);
            workingIds.push(id);
        } else {
            // console.log(`Invalid ID: ${id}`);
        }
    }
    
    console.log(`Found ${workingIds.length} working photo IDs.`);
    
    if (workingIds.length < targetImages.length) {
        console.error("Error: Not enough unique working photo IDs found to assign to all target images.");
        return;
    }
    
    console.log("Downloading unique images for each of the 27 target files...");
    for (let i = 0; i < targetImages.length; i++) {
        const filename = targetImages[i];
        const photoId = workingIds[i];
        try {
            await downloadImage(filename, photoId);
            const stats = fs.statSync(path.join(outputDir, filename));
            console.log(`[${i+1}/${targetImages.length}] Downloaded ${filename} using ID ${photoId} (${stats.size} bytes)`);
        } catch (err) {
            console.error(`Failed to download ${filename}:`, err.message);
        }
    }
    console.log("All unique service images successfully updated!");
}

run();
