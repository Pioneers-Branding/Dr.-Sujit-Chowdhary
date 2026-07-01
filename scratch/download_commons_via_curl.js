const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const outputDir = path.join(dir, 'assets', 'images', 'services');

const imageMap = {
    'adrenal-tumor.png': 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Pediatric_MRI_scanner.jpg',
    'anorectal-malformation.png': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Doctor_examines_child_in_hospital.jpg',
    'biliary-atresia.png': 'https://upload.wikimedia.org/wikipedia/commons/7/70/Pediatrician_examines_child_2016.jpg',
    'choledochal-cyst.png': 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pediatrician_giving_injection_to_child.jpg',
    'duplex-renal-system.png': 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Kidney_ultrasound.jpg',
    'exstrophy-epispadias.png': 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Newborn_infant_in_hospital.jpg',
    'hernia-hydrocele.png': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hospital_Bed_and_Equipment.jpg',
    'hirschsprung.png': 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Childrens_Hospital_ward.jpg',
    'hydronephrosis.png': 'https://upload.wikimedia.org/wikipedia/commons/2/28/Hydro.jpg',
    'hypospadias.png': 'https://upload.wikimedia.org/wikipedia/commons/7/79/Stethoscope_on_clipboard.jpg',
    'neuropathic-bladder.png': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Doctor_with_patient_consultation.jpg',
    'paediatric-gi.png': 'https://upload.wikimedia.org/wikipedia/commons/5/57/Gupta_Ford_Vinson_surgery.jpg',
    'pediatric-gi-surgery.png': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Operating_theater_at_general_hospital.jpg',
    'pediatric-oncosurgery.png': 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Trying_out_hats_to_wear_after_chemotherapy_-_cropped.jpg',
    'pediatric-robotic-surgery.png': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Robotic_surgery_system_da_Vinci.jpg',
    'pediatric-stone-disease.png': 'https://upload.wikimedia.org/wikipedia/commons/d/df/Nefrolit.jpg',
    'pediatric-tumors.png': 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Medical_laboratory.jpg',
    'pediatric-urodynamics.png': 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Ultrasound_machine.jpg',
    'phimosis.png': 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Stethoscope_on_medical_records.jpg',
    'pujo.png': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Operation_room_hospital.jpg',
    'puv.png': 'https://upload.wikimedia.org/wikipedia/commons/8/85/Ultrasound_Scan_ND_0119092150_0939241.png',
    'renal-tumor.png': 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Ultrasound_Scan_ND_04281050_091823.png',
    'thoracoscopic-surgery.png': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Laproscopic_Surgery_Robot.jpg',
    'undescended-testis.png': 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Stethoscope_2.jpg',
    'uti.png': 'https://upload.wikimedia.org/wikipedia/commons/4/47/Medical_Laboratory_Scientist_at_Work.jpg',
    'vesicoureteric-reflux.png': 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kidney_dialysis_machine.jpg',
    'voiding-dysfunction.png': 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Pediatrician_using_stethoscope_on_child.jpg'
};

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

async function run() {
    console.log("Starting secure downloads via curl.exe...");
    
    let index = 1;
    for (const [filename, url] of Object.entries(imageMap)) {
        const dest = path.join(outputDir, filename);
        console.log(`[${index}/${Object.keys(imageMap).length}] Downloading ${filename}...`);
        
        try {
            // Using curl.exe with -L to follow redirects and -A for browser user agent
            const cmd = `curl.exe -L -A "${userAgent}" "${url}" -o "${dest}"`;
            execSync(cmd, { stdio: 'ignore' });
            
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
