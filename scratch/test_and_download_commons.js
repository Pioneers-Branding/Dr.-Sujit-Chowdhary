const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const outputDir = path.join(dir, 'assets', 'images', 'services');

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

const candidateUrls = [
    'https://upload.wikimedia.org/wikipedia/commons/e/e4/Stethoscope_2.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/6f/Stethoscope_on_medical_records.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Hospital_Bed_and_Equipment.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Pediatrician_examines_child_2016.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c2/Ultrasound_machine.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/4d/Robotic_surgery_system_da_Vinci.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Newborn_infant_in_hospital.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/7b/Doctor_with_patient_consultation.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/4/47/Medical_Laboratory_Scientist_at_Work.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e3/Operating_theater_at_general_hospital.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/bd/Pediatric_MRI_scanner.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Childrens_Hospital_ward.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/aa/Medical_laboratory.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Laproscopic_Surgery_Robot.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/3a/Trying_out_hats_to_wear_after_chemotherapy_-_cropped.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/57/Gupta_Ford_Vinson_surgery.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/28/Hydro.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/df/Nefrolit.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/85/Ultrasound_Scan_ND_0119092150_0939241.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kidney_ultrasound.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b1/Ultrasound_Scan_ND_04281050_091823.png',
    'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kidney_dialysis_machine.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Doctor_smiling_at_camera.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pediatrician_measuring_baby_height.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Stethoscope_on_clipboard.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5f/Operation_room_hospital.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pediatrician_giving_injection_to_child.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/65/Stethoscope_macro.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Operating_theater_during_surgery.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d7/Pediatrician_using_stethoscope_on_child.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c7/Doctor_examines_child_in_hospital.jpg'
];

function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0 (Contact: admin@example.com)' } }, (res) => {
            if (res.statusCode === 200) {
                resolve({ url, size: parseInt(res.headers['content-length'] || '0') });
            } else {
                resolve(null);
            }
        }).on('error', () => resolve(null));
    });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, { headers: { 'User-Agent': 'MedicalImageBot/1.0 (Contact: admin@example.com)' } }, (response) => {
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

async function run() {
    console.log("Checking Wikimedia candidate URLs sequentially...");
    const workingUrls = [];
    
    for (const url of candidateUrls) {
        const result = await checkUrl(url);
        if (result) {
            console.log(`Working URL: ${url} (${result.size} bytes)`);
            workingUrls.push(url);
        } else {
            console.log(`Failed URL: ${url}`);
        }
    }
    
    console.log(`Found ${workingUrls.length} working URLs.`);
    
    if (workingUrls.length < targetImages.length) {
        console.error("Error: Not enough working URLs found to assign to all target images.");
        return;
    }
    
    console.log("Downloading unique images from Wikimedia...");
    for (let i = 0; i < targetImages.length; i++) {
        const filename = targetImages[i];
        const url = workingUrls[i];
        const dest = path.join(outputDir, filename);
        try {
            await downloadImage(url, dest);
            const stats = fs.statSync(dest);
            console.log(`[${i+1}/${targetImages.length}] Downloaded ${filename} (${stats.size} bytes)`);
        } catch (err) {
            console.error(`Failed to download ${filename}:`, err.message);
        }
    }
    console.log("All unique service images successfully updated from Wikimedia!");
}

run();
