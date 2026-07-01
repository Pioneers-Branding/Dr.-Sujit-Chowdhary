const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const outputDir = path.join(dir, 'assets', 'images', 'services');

const imageMap = {
    'adrenal-tumor.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Pediatric_MRI_scanner.jpg/800px-Pediatric_MRI_scanner.jpg',
    'anorectal-malformation.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Doctor_examines_child_in_hospital.jpg/800px-Doctor_examines_child_in_hospital.jpg',
    'biliary-atresia.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Pediatrician_examines_child_2016.jpg/800px-Pediatrician_examines_child_2016.jpg',
    'choledochal-cyst.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Pediatrician_giving_injection_to_child.jpg/800px-Pediatrician_giving_injection_to_child.jpg',
    'duplex-renal-system.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kidney_ultrasound.jpg/800px-Kidney_ultrasound.jpg',
    'exstrophy-epispadias.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Newborn_infant_in_hospital.jpg/800px-Newborn_infant_in_hospital.jpg',
    'hernia-hydrocele.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hospital_Bed_and_Equipment.jpg/800px-Hospital_Bed_and_Equipment.jpg',
    'hirschsprung.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Childrens_Hospital_ward.jpg/800px-Childrens_Hospital_ward.jpg',
    'hydronephrosis.png': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Hydro.jpg',
    'hypospadias.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Stethoscope_on_clipboard.jpg/800px-Stethoscope_on_clipboard.jpg',
    'neuropathic-bladder.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Doctor_with_patient_consultation.jpg/800px-Doctor_with_patient_consultation.jpg',
    'paediatric-gi.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gupta_Ford_Vinson_surgery.jpg/800px-Gupta_Ford_Vinson_surgery.jpg',
    'pediatric-gi-surgery.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Operating_theater_at_general_hospital.jpg/800px-Operating_theater_at_general_hospital.jpg',
    'pediatric-oncosurgery.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Trying_out_hats_to_wear_after_chemotherapy_-_cropped.jpg/800px-Trying_out_hats_to_wear_after_chemotherapy_-_cropped.jpg',
    'pediatric-robotic-surgery.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Robotic_surgery_system_da_Vinci.jpg/800px-Robotic_surgery_system_da_Vinci.jpg',
    'pediatric-stone-disease.png': 'https://upload.wikimedia.org/wikipedia/commons/d/df/Nefrolit.jpg',
    'pediatric-tumors.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Medical_laboratory.jpg/800px-Medical_laboratory.jpg',
    'pediatric-urodynamics.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Ultrasound_machine.jpg/800px-Ultrasound_machine.jpg',
    'phimosis.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Stethoscope_on_medical_records.jpg/800px-Stethoscope_on_medical_records.jpg',
    'pujo.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Operation_room_hospital.jpg/800px-Operation_room_hospital.jpg',
    'puv.png': 'https://upload.wikimedia.org/wikipedia/commons/8/85/Ultrasound_Scan_ND_0119092150_0939241.png',
    'renal-tumor.png': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Ultrasound_Scan_ND_04281050_091823.png',
    'thoracoscopic-surgery.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Laproscopic_Surgery_Robot.jpg/800px-Laproscopic_Surgery_Robot.jpg',
    'undescended-testis.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Stethoscope_2.jpg/800px-Stethoscope_2.jpg',
    'uti.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Medical_Laboratory_Scientist_at_Work.jpg/800px-Medical_Laboratory_Scientist_at_Work.jpg',
    'vesicoureteric-reflux.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kidney_dialysis_machine.jpg/800px-Kidney_dialysis_machine.jpg',
    'voiding-dysfunction.png': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pediatrician_using_stethoscope_on_child.jpg/800px-Pediatrician_using_stethoscope_on_child.jpg'
};

const userAgent = 'PediatricClinicMarketingBot/1.0 (https://www.drsujitchowdhary.com; admin@drsujitchowdhary.com)';

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
    console.log("Starting throttled downloads from Wikimedia Commons...");
    
    let index = 1;
    for (const [filename, url] of Object.entries(imageMap)) {
        const dest = path.join(outputDir, filename);
        console.log(`[${index}/${Object.keys(imageMap).length}] Downloading ${filename}...`);
        
        // Wait 4 seconds between requests to completely avoid CP5032 Varnish 429 block
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
