const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

const utiContent = `<h2>Expert Care for Urinary Tract Infections (UTI) in Children</h2>
<p>Urinary Tract Infections (UTI) are common in children and infants. In newborns and young children, a UTI can be a warning sign of an underlying structural problem in the urinary tract, such as Vesicoureteral Reflux (VUR) or blockages. It is crucial to diagnose and treat UTIs early to prevent permanent kidney scarring, hypertension, and long-term renal damage.</p>

<h3 class="mt-4">Symptoms of UTI in Kids</h3>
<p>Depending on the child's age, UTI symptoms can vary significantly:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>In Infants:</strong> Poor feeding, unexplained fever, irritability, vomiting, or failure to gain weight.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>In Older Children:</strong> Pain or burning sensation during urination, frequent voiding, urgency, bedwetting or daytime wetting, foul-smelling urine, and abdominal or flank pain.</li>
</ul>

<h3 class="mt-4">What causes recurrent UTIs?</h3>
<p>While an occasional UTI can happen, recurrent infections are often caused by:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Vesicoureteral Reflux (VUR):</strong> Urine flowing backward from the bladder to the kidneys.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urinary Obstruction:</strong> Structural blockages like PUJO or Posterior Urethral Valves (PUV).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Voiding Dysfunction:</strong> Poor bladder emptying habits or chronic constipation.</li>
</ul>

<h3 class="mt-4">Diagnosis and Evaluation</h3>
<p>To identify the root cause of recurrent infections, we perform:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Ultrasound Scan:</strong> To evaluate the size and structure of the kidneys and bladder.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Voiding Cystourethrogram (VCUG):</strong> An X-ray study to detect reflux or outlet blockages.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Nuclear Kidney Scans (DMSA/MAG3):</strong> To check for kidney scarring and function.</li>
</ul>
`;

const neuroBladderContent = `<h2>Expert Care for Neuropathic Bladder in Children</h2>
<p>A <strong>neuropathic bladder</strong> (or neurogenic bladder) is a condition where a child lacks bladder control due to a brain, spinal cord, or nerve condition. It is commonly associated with congenital spinal abnormalities like Spina Bifida (myelomeningocele), spinal trauma, or sacral agenesis. If not managed early and correctly, a neuropathic bladder can cause abnormally high pressures, leading to severe kidney damage, recurrent UTIs, and incontinence.</p>

<h3 class="mt-4">How Neuropathic Bladder Affects Children</h3>
<p>The nerves normally carry signals between the bladder and the brain. In neuropathic bladder, these signals are disrupted, leading to:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Flaccid Bladder:</strong> The bladder stretches easily but cannot contract to empty, causing constant overflow dribbling.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Spastic Bladder:</strong> The bladder muscle is overactive and contracts frequently under high pressure, causing reflux and leaks.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Sphincter Dyssynergia:</strong> The bladder muscle and outlet sphincter do not work together, creating blockages and high back-pressures.</li>
</ul>

<h3 class="mt-4">Common Symptoms</h3>
<p>Parents should watch for signs such as:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Constant dribbling of urine or poor stream.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Recurrent high-fever urinary tract infections (UTIs).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Inability to toilet train or frequent daytime/nighttime wetting.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Kidney swelling (hydronephrosis) detected on ultrasound.</li>
</ul>

<h3 class="mt-4">Comprehensive Management Plan</h3>
<p>Treatment is focused on lowering bladder pressure and preserving kidney function:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Clean Intermittent Catheterization (CIC):</strong> A safe method to empty the bladder regularly using a soft catheter.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Medication:</strong> Anticholinergic drugs to relax the bladder muscle and lower internal pressures.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Surgical Options:</strong> Procedures like bladder augmentation or Mitrofanoff appendicovesicostomy for children who need surgical enlargement or alternative catheter channels.</li>
</ul>
`;

const vurSymptomsContent = `<p>Urinary tract infection is the most common presentation seen in children younger than the age of 5. Common symptoms include:</p>
<ul class="about-list">
  <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Foul smelling or cloudy urine</li>
  <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Unexplained fever</li>
  <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Burning or pain while urinating</li>
  <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Frequency and urgency of urine</li>
  <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Vomiting or diarrhea in infants</li>
  <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> Poor feeding or increased irritability in infants</li>
</ul>
<p>Also, an ultrasound scan done during pregnancy showing swelling in the kidneys (antenatal hydronephrosis) can be a sign of VUR.</p>`;

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Separate target files for major replacement
    if (filename === 'service-uti.html') {
        const startMarker = '<h2>Expert Care for Uti</h2>';
        const endMarker = '<h3 class="mt-4">Why Early Intervention Matters</h3>';
        const startIndex = content.indexOf(startMarker);
        const endIndex = content.indexOf(endMarker);
        if (startIndex !== -1 && endIndex !== -1) {
            content = content.substring(0, startIndex) + utiContent + '\n\n' + content.substring(endIndex);
            console.log(`Replaced top content in ${filename}`);
        }
    } else if (filename === 'service-neuropathic-bladder.html') {
        const startMarker = '<h2>Expert Care for Neuropathic bladder</h2>';
        const endMarker = '<h3 class="mt-4">Why Early Intervention Matters</h3>';
        const startIndex = content.indexOf(startMarker);
        const endIndex = content.indexOf(endMarker);
        if (startIndex !== -1 && endIndex !== -1) {
            content = content.substring(0, startIndex) + neuroBladderContent + '\n\n' + content.substring(endIndex);
            console.log(`Replaced top content in ${filename}`);
        }
    } else if (filename === 'service-vesicoureteric-reflux.html') {
        // Fix the specific broken layout in Reflux
        const badMarkupRegex = /<\/ul>\s*<div\s*>\s*&nbsp;\s*Infants may have following symptoms\.[\s\S]*?Also ultrasound scan done during pregnancy showing swelling in kidneys can be because of VUR\./i;
        if (content.match(badMarkupRegex)) {
            content = content.replace(badMarkupRegex, vurSymptomsContent);
            console.log(`Fixed bad list markup in ${filename}`);
        }
    } else if (filename === 'service-pediatric-robotic-surgery.html') {
        // Replace external video player with the official YouTube robotic video
        const videoBlockRegex = /<div\s*>\s*<video[^>]*>[\s\S]*?<\/video>/gi;
        const youtubeEmbed = `<div style="max-width:550px; margin: 30px 0;">
    <iframe width="100%" height="310" src="https://www.youtube.com/embed/I-_-BYf5viE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
</div>`;
        if (content.match(videoBlockRegex)) {
            content = content.replace(videoBlockRegex, youtubeEmbed);
            console.log(`Replaced old external video with YouTube iframe in ${filename}`);
        }
    }
    
    // 2. Remove any img referencing pedsurgerydelhi.com
    const externalImgRegex = /<img[^>]*src="https:\/\/www\.pedsurgerydelhi\.com[^>]*>/gi;
    if (content.match(externalImgRegex)) {
        content = content.replace(externalImgRegex, '');
        console.log(`Removed external images from ${filename}`);
    }
    
    // 3. Fix empty <i> tags in lists
    const emptyIconRegex = /<li>\s*<i\s*>\s*<\/i>/gi;
    const emptyIconRegex2 = /<li>\s*<i\s+class=""\s*>\s*<\/i>/gi;
    const replacementIcon = '<li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i>';
    
    if (content.match(emptyIconRegex)) {
        content = content.replace(emptyIconRegex, replacementIcon);
        console.log(`Fixed empty <i> tags in ${filename}`);
    }
    if (content.match(emptyIconRegex2)) {
        content = content.replace(emptyIconRegex2, replacementIcon);
        console.log(`Fixed empty classless <i> tags in ${filename}`);
    }
    
    // 4. Ensure class="about-list" is added to lists inside service-main for premium styling
    const mainMatch = content.match(/<div class="service-main fade-in-up">([\s\S]*?)<\/div>\s*<div class="sidebar/i);
    if (mainMatch) {
        let mainContent = mainMatch[1];
        const originalMainContent = mainContent;
        // Find <ul> with no class or other class and replace
        mainContent = mainContent.replace(/<ul\s*>/g, '<ul class="about-list">');
        content = content.replace(originalMainContent, mainContent);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Cleanup script executed successfully!');
