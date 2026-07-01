const fs = require('fs');
const crypto = require('crypto');
const https = require('https');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const outputDir = path.join(dir, 'assets', 'images', 'services');

const imageMapping = {
    'adrenal-tumor.png': 'Pediatric_MRI_scanner.jpg',
    'anorectal-malformation.png': 'Doctor_examines_child_in_hospital.jpg',
    'biliary-atresia.png': 'Pediatrician_examines_child_2016.jpg',
    'choledochal-cyst.png': 'Pediatrician_giving_injection_to_child.jpg',
    'duplex-renal-system.png': 'Kidney_ultrasound.jpg',
    'exstrophy-epispadias.png': 'Newborn_infant_in_hospital.jpg',
    'hernia-hydrocele.png': 'Hospital_Bed_and_Equipment.jpg',
    'hirschsprung.png': 'Childrens_Hospital_ward.jpg',
    'hydronephrosis.png': 'Hydro.jpg',
    'hypospadias.png': 'Stethoscope_on_clipboard.jpg',
    'neuropathic-bladder.png': 'Doctor_with_patient_consultation.jpg',
    'paediatric-gi.png': 'Gupta_Ford_Vinson_surgery.jpg',
    'pediatric-gi-surgery.png': 'Operating_theater_at_general_hospital.jpg',
    'pediatric-oncosurgery.png': 'Trying_out_hats_to_wear_after_chemotherapy_-_cropped.jpg',
    'pediatric-robotic-surgery.png': 'Robotic_surgery_system_da_Vinci.jpg',
    'pediatric-stone-disease.png': 'Nefrolit.jpg',
    'pediatric-tumors.png': 'Medical_laboratory.jpg',
    'pediatric-urodynamics.png': 'Ultrasound_machine.jpg',
    'phimosis.png': 'Stethoscope_on_medical_clipboard.jpg',
    'pujo.png': 'Operation_room_hospital.jpg',
    'puv.png': 'Ultrasound_Scan_ND_0119092150_0939241.png',
    'renal-tumor.png': 'Ultrasound_Scan_ND_04281050_091823.png',
    'thoracoscopic-surgery.png': 'Laproscopic_Surgery_Robot.jpg',
    'undescended-testis.png': 'Stethoscope_2.jpg',
    'uti.png': 'Medical_Laboratory_Scientist_at_Work.jpg',
    'vesicoureteric-reflux.png': 'Kidney_dialysis_machine.jpg',
    'voiding-dysfunction.png': 'Pediatrician_using_stethoscope_on_child.jpg'
};

const userAgent = 'PediatricClinicMarketingBot/1.0 (https://www.drsujitchowdhary.com; admin@drsujitchowdhary.com)';

function getCommonsUrl(filename) {
    const cleanName = filename.replace(/\s+/g, '_');
    const hash = crypto.createHash('md5').update(cleanName).digest('hex');
    const a = hash[0];
    const ab = hash.substring(0, 2);
    return `https://upload.wikimedia.org/wikipedia/commons/${a}/${ab}/${cleanName}`;
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const options = {
            headers: {
                'User-Agent': userAgent,
                'Accept': 'image/webp,image/apng,image/png,image/jpeg,*/*'
            }
        };
        
        https.get(url, options, (response) => {
            if (response.statusCode === 302 || response.statusCode === 301) {
                https.get(response.headers.location, options, (res) => {
                    res.pipe(file);
                    file.on('finish', () => file.close(resolve));
                }).on('error', err => { fs.unlink(dest, () => reject(err)); });
            } else if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => file.close(resolve));
            } else {
                fs.unlink(dest, () => reject(new Error(`Status Code: ${response.statusCode}`)));
            }
        }).on('error', err => { fs.unlink(dest, () => reject(err)); });
    });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
    console.log("Starting throttled downloads from Wikimedia Commons using MD5 hashes...");
    
    let index = 1;
    for (const [filename, wikiName] of Object.entries(imageMapping)) {
        const url = getCommonsUrl(wikiName);
        const dest = path.join(outputDir, filename);
        console.log(`[${index}/${Object.keys(imageMapping).length}] Downloading ${filename} from: ${url}`);
        
        // Wait 4 seconds to prevent 429 block
        await sleep(4000);
        
        try {
            await downloadImage(url, dest);
            const stats = fs.statSync(dest);
            console.log(`-> Saved ${filename} (${stats.size} bytes)`);
        } catch (err) {
            console.error(`-> Failed to download ${filename}:`, err.message);
        }
        index++;
    }
    console.log("Downloads completed.");
}

run();
