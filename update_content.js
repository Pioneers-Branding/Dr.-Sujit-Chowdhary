const fs = require("fs");
const path = require("path");

const dir = "c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary";

const serviceData = {
    "service-uti.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Ignoring a child's recurrent UTIs can lead to severe complications. Repeated infections cause inflammation that may result in renal scarring, which permanently damages the kidney tissue. Over time, this scarring can lead to early-onset hypertension and chronic kidney disease in adulthood. Addressing the root cause promptly ensures that your child's urinary system develops healthily without these risks.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>We provide a holistic treatment journey for every child. Beyond immediate medical and surgical interventions, we focus on lifestyle modifications, dietary advice, and bladder and bowel training to prevent future infections. Our multidisciplinary approach ensures that parents are fully equipped with the knowledge and tools needed to support their child's ongoing urological health.</p>`,
        treatmentOptions: [
            { icon: "fa-pills", title: "Medical Management", desc: "Low-dose antibiotic prophylaxis to prevent breakthrough infections while the child grows or awaits definitive treatment." },
            { icon: "fa-syringe", title: "STING Procedure", desc: "A 15-minute endoscopic injection to treat Vesicoureteral Reflux (VUR) without any external cuts or stitches." },
            { icon: "fa-hospital", title: "Ureteral Reimplantation", desc: "Surgical correction for high-grade reflux or structural blockages, often performed using robotic-assisted techniques." }
        ]
    },
    "service-biliary-atresia.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Time is of the essence when treating Biliary Atresia. If the Kasai procedure is performed within the first 60 days of life, the success rate for establishing bile flow is significantly higher. Delayed surgery increases the risk of irreversible liver cirrhosis, making a liver transplant the only viable option. Early screening and prompt surgical care are crucial to preserving the infant's native liver.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>Our care extends beyond the operating room. We offer specialized nutritional support, as infants with Biliary Atresia often struggle to absorb essential fats and vitamins. Continuous monitoring by our paediatric hepatology team ensures that any signs of cholangitis or portal hypertension are managed immediately, providing the best possible quality of life for your child.</p>`,
        treatmentOptions: [
            { icon: "fa-cut", title: "Kasai Procedure", desc: "A surgical bypass that connects a loop of the small intestine directly to the liver to restore bile drainage." },
            { icon: "fa-pills", title: "Nutritional Therapy", desc: "Specialized formulas and vitamin supplements to support growth and development despite impaired bile flow." },
            { icon: "fa-procedures", title: "Transplant Evaluation", desc: "Ongoing assessment and preparation for a potential liver transplant if the Kasai procedure is insufficient." }
        ]
    },
    "service-choledochal-cyst.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>A choledochal cyst can lead to recurrent episodes of cholangitis, pancreatitis, and progressive liver damage if left untreated. More importantly, there is a significant risk of malignant transformation (cancer) within the cyst wall as the child grows older. Complete surgical excision at a young age eliminates these risks and allows for normal biliary function to be restored.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>We utilize the most advanced diagnostic imaging, including MRCP, to precisely map the biliary anatomy before surgery. Post-operatively, our focus is on ensuring smooth recovery and long-term follow-up to monitor liver function. We prioritize minimally invasive techniques to reduce pain and scarring, allowing your child to return to their normal activities quickly.</p>`,
        treatmentOptions: [
            { icon: "fa-scissors", title: "Cyst Excision", desc: "Complete surgical removal of the choledochal cyst to eliminate the risk of recurrent infections and malignancy." },
            { icon: "fa-project-diagram", title: "Hepaticojejunostomy", desc: "Reconstruction of the biliary tract by connecting the remaining healthy bile duct directly to the small intestine." },
            { icon: "fa-robot", title: "Minimally Invasive Surgery", desc: "Utilizing laparoscopic or robotic-assisted techniques for precision, faster recovery, and minimal scarring." }
        ]
    },
    "service-hirschsprung.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Without prompt treatment, Hirschsprung disease can lead to severe constipation, bowel obstruction, and a life-threatening infection called enterocolitis. Early surgical intervention to remove the aganglionic (nerve-less) section of the bowel is essential to prevent these complications and establish normal bowel function. Delays can result in massive dilation of the colon and systemic illness.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>We understand that Hirschsprung disease requires long-term management. Our team provides comprehensive bowel management programs, including dietary guidance and biofeedback therapy, to help children achieve continence as they grow. We work closely with families to handle any post-surgical challenges, ensuring a supportive environment for the child's development.</p>`,
        treatmentOptions: [
            { icon: "fa-cut", title: "Pull-Through Procedure", desc: "Surgical removal of the affected bowel segment and connecting the healthy colon directly to the anus." },
            { icon: "fa-stethoscope", title: "Bowel Management", desc: "Tailored dietary plans, laxatives, and enemas to manage post-operative bowel habits and prevent enterocolitis." },
            { icon: "fa-user-md", title: "Transanal Approach", desc: "A minimally invasive surgical technique performed entirely through the anus, avoiding abdominal incisions." }
        ]
    },
    "service-hydronephrosis.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>While many cases of mild hydronephrosis resolve on their own, severe or worsening cases can indicate a significant blockage. If this obstruction is not addressed, the increased pressure can lead to irreversible kidney damage and loss of function. Regular monitoring and timely surgical intervention are vital to preserving the affected kidney's health and ensuring its proper growth.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>Our approach is highly individualized, relying on advanced imaging like MAG3 diuretic renograms to assess kidney function and drainage. We prioritize non-operative management whenever safe, but when surgery is necessary, Dr. Chowdhary employs cutting-edge minimally invasive techniques. We also provide continuous follow-up care to monitor the kidney's development throughout childhood.</p>`,
        treatmentOptions: [
            { icon: "fa-eye", title: "Active Surveillance", desc: "Regular monitoring with ultrasounds and scans for mild cases that are likely to resolve spontaneously." },
            { icon: "fa-cut", title: "Laparoscopic Pyeloplasty", desc: "Surgical correction of blockages at the ureteropelvic junction (UPJ) using minimally invasive keyhole surgery." },
            { icon: "fa-robot", title: "Robotic Pyeloplasty", desc: "Highly precise robotic-assisted reconstruction of the urinary tract for complex or delicate cases." }
        ]
    },
    "service-neuropathic-bladder.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>A neuropathic bladder can cause abnormally high pressures within the urinary tract, leading to severe kidney damage over time. It can also cause persistent incontinence, which significantly impacts a child's quality of life and social development. Early and proactive management is crucial to protect kidney function, achieve urinary continence, and foster the child's independence.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>Managing a neuropathic bladder is a lifelong journey. We provide a customized care plan that includes urodynamic testing, medication, and specialized catheterization training. Our team works closely with parents and children to develop a routine that fits their lifestyle, aiming for maximum independence and confidence as the child transitions into adolescence and adulthood.</p>`,
        treatmentOptions: [
            { icon: "fa-pills", title: "Medical Management", desc: "Use of anticholinergic medications to relax the bladder muscle and lower internal pressures." },
            { icon: "fa-hands-wash", title: "Clean Intermittent Catheterization", desc: "Training families and children to safely empty the bladder using a catheter to prevent kidney damage." },
            { icon: "fa-hospital-user", title: "Bladder Augmentation", desc: "A major surgical procedure using a segment of the bowel to enlarge the bladder and reduce pressure." }
        ]
    },
    "service-paediatric-gi.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Paediatric gastrointestinal anomalies often present as emergencies in newborns or as chronic issues affecting growth in older children. Prompt surgical correction of congenital defects is essential to establish a functioning digestive tract and prevent life-threatening complications. Timely intervention ensures that the child receives adequate nutrition and avoids long-term developmental delays.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>Our paediatric GI surgery team collaborates closely with neonatologists, gastroenterologists, and dietitians. We emphasize minimally invasive surgery to ensure faster recovery, less pain, and minimal scarring. Post-operative care is tailored to support the child's nutritional needs and monitor their growth trajectory, providing a complete continuum of care from diagnosis to full recovery.</p>`,
        treatmentOptions: [
            { icon: "fa-video", title: "Laparoscopic Surgery", desc: "Minimally invasive approaches for conditions like appendicitis, gallbladder issues, and reflux." },
            { icon: "fa-baby", title: "Neonatal GI Reconstruction", desc: "Complex surgical repair of congenital anomalies such as esophageal atresia and imperforate anus." },
            { icon: "fa-apple-alt", title: "Nutritional Support", desc: "Post-surgical dietary management to ensure optimal healing, growth, and digestive function." }
        ]
    },
    "service-pujo.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Pelvic Ureteric Junction Obstruction (PUJO) restricts urine flow from the kidney to the bladder. If the obstruction is severe, the back-pressure can cause significant kidney damage, resulting in loss of renal function. Early diagnosis through prenatal and postnatal screening allows us to intervene before irreversible damage occurs, preserving the kidney and preventing recurrent infections and pain.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>We utilize a conservative, watchful waiting approach for mild cases, supported by advanced nuclear scans. When surgery is indicated, Dr. Chowdhary’s expertise in minimally invasive techniques ensures a highly successful pyeloplasty with a very short hospital stay. Our post-operative protocol involves careful monitoring to confirm unobstructed drainage and normal kidney growth.</p>`,
        treatmentOptions: [
            { icon: "fa-eye", title: "Watchful Waiting", desc: "Careful monitoring of mild PUJO cases with sequential ultrasounds and diuretic renograms." },
            { icon: "fa-cut", title: "Laparoscopic Pyeloplasty", desc: "The gold standard minimally invasive surgery to remove the obstruction and reconnect the ureter." },
            { icon: "fa-robot", title: "Robotic Pyeloplasty", desc: "Advanced robotic-assisted surgery offering 3D vision and enhanced precision for delicate repairs." }
        ]
    },
    "service-puv.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Posterior Urethral Valves (PUV) is a urological emergency in newborn boys. The severe blockage can cause rapid kidney and bladder deterioration. Immediate relief of the obstruction is vital to halt further damage and give the kidneys a chance to recover. Delayed treatment can lead to end-stage renal disease, requiring dialysis or a kidney transplant early in life.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>Treating PUV is a marathon, not a sprint. Even after the valves are successfully ablated, the child may have a "valve bladder" that functions poorly. Our comprehensive care includes regular urodynamic studies, kidney function tests, and continuous bladder management to protect the upper urinary tract and ensure the best long-term outcome for your child.</p>`,
        treatmentOptions: [
            { icon: "fa-video", title: "Endoscopic Valve Ablation", desc: "Primary treatment using a miniature cystoscope to cut the obstructive valves without external incisions." },
            { icon: "fa-band-aid", title: "Vesicostomy", desc: "A temporary surgical opening in the bladder to allow urine to drain freely in very small or sick infants." },
            { icon: "fa-shield-alt", title: "Valve Bladder Management", desc: "Long-term care involving medications and catheterization to manage persistent bladder dysfunction." }
        ]
    },
    "service-renal-tumor.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>Paediatric renal tumors, such as Wilms' tumor, are highly aggressive but also highly curable if detected and treated early. Rapid surgical intervention, combined with oncology protocols, is essential to remove the tumor and prevent metastasis. Early treatment significantly increases survival rates and the likelihood of preserving healthy kidney tissue.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>We work within a multidisciplinary oncology board to provide integrated care. Our surgical approach aims for complete tumor resection while striving for nephron-sparing surgery (partial nephrectomy) whenever safe. We provide comprehensive support to families navigating cancer treatment, ensuring coordinated care with paediatric oncologists for chemotherapy and radiation as needed.</p>`,
        treatmentOptions: [
            { icon: "fa-cut", title: "Radical Nephrectomy", desc: "Surgical removal of the entire affected kidney and surrounding tissues to ensure complete tumor clearance." },
            { icon: "fa-hand-holding-medical", title: "Nephron-Sparing Surgery", desc: "Removal of only the tumor, preserving the remaining healthy kidney tissue (for bilateral or specific cases)." },
            { icon: "fa-pills", title: "Coordinated Chemotherapy", desc: "Collaborative management with oncologists to shrink the tumor before surgery or eliminate remaining cells post-op." }
        ]
    },
    "service-undescended-testis.html": {
        additionalMainContent: `
                <h3 class="mt-4">Why Early Intervention Matters</h3>
                <p>An undescended testis (cryptorchidism) that remains in the abdomen is exposed to higher body temperatures, which can impair future fertility and increase the risk of testicular cancer. Surgical correction (orchidopexy) is recommended before the child reaches 12 to 18 months of age to maximize functional outcomes, preserve fertility, and allow for easier screening for abnormalities later in life.</p>
                
                <h3 class="mt-4">Comprehensive Care Approach</h3>
                <p>Our approach ensures the utmost care and minimal discomfort for your child. For palpable testes, we perform a straightforward daycare procedure. For non-palpable testes hidden in the abdomen, we use advanced laparoscopy for both diagnosis and treatment in a single setting. Our team provides clear post-operative guidance to ensure a smooth and rapid recovery at home.</p>`,
        treatmentOptions: [
            { icon: "fa-cut", title: "Open Orchidopexy", desc: "A standard daycare surgical procedure to bring a palpable undescended testis down into the scrotum." },
            { icon: "fa-video", title: "Laparoscopic Orchidopexy", desc: "Keyhole surgery to locate and bring down a non-palpable testis located high in the abdomen." },
            { icon: "fa-search-plus", title: "Diagnostic Laparoscopy", desc: "A minimally invasive exploration to confirm the presence, location, and condition of a missing testis." }
        ]
    }
};

const getHtmlFiles = (dirPath) => {
    return fs.readdirSync(dirPath)
        .filter(file => file.startsWith("service-") && file.endsWith(".html"))
        .map(file => path.join(dirPath, file));
};

const files = getHtmlFiles(dir);

files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    const filename = path.basename(file);
    const data = serviceData[filename];
    
    if (data) {
        // 1. Inject additional content into service-main
        if (!content.includes("Why Early Intervention Matters")) {
            content = content.replace(/(<\/div>\s*<div class="sidebar fade-in-up")/i, `\n${data.additionalMainContent}\n            $1`);
        }

        // 2. Remove existing Treatment Options block
        const treatmentRegex = /<!-- Treatment Options -->[\\s\\S]*?(?=<!-- (Surgical Process|Testimonials|Why Choose) |<section class="section">|<section class="section bg-light">|<!-- Surgical Process -->)/i;
        
        let removedOld = false;
        if (content.match(/<!-- Treatment Options -->/)) {
             const startIdx = content.indexOf("<!-- Treatment Options -->");
             // find the closing of this section
             const endSectionRegex = /<\/section>/g;
             endSectionRegex.lastIndex = startIdx;
             const match = endSectionRegex.exec(content);
             
             if (match) {
                 const endIdx = match.index + 10; // length of </section>
                 content = content.substring(0, startIdx) + content.substring(endIdx);
             }
        }

        // 3. Inject new Treatment Options block
        const treatmentHtml = `<!-- Treatment Options -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Advanced Care</h4>
                <h2>Treatment Options</h2>
            </div>
            <div class="grid-3 mt-5">
                <div class="card fade-in-up">
                    <div class="service-icon"><i class="fas ${data.treatmentOptions[0].icon}"></i></div>
                    <h3>${data.treatmentOptions[0].title}</h3>
                    <p>${data.treatmentOptions[0].desc}</p>
                </div>
                <div class="card fade-in-up" style="animation-delay: 0.1s">
                    <div class="service-icon"><i class="fas ${data.treatmentOptions[1].icon}"></i></div>
                    <h3>${data.treatmentOptions[1].title}</h3>
                    <p>${data.treatmentOptions[1].desc}</p>
                </div>
                <div class="card fade-in-up" style="animation-delay: 0.2s">
                    <div class="service-icon"><i class="fas ${data.treatmentOptions[2].icon}"></i></div>
                    <h3>${data.treatmentOptions[2].title}</h3>
                    <p>${data.treatmentOptions[2].desc}</p>
                </div>
            </div>
        </div>
    </section>

    `;
        // insert before <!-- Surgical Process -->
        if (!content.includes("<!-- Treatment Options -->")) {
             content = content.replace(/<!-- Surgical Process -->/, treatmentHtml + "<!-- Surgical Process -->");
        }

        fs.writeFileSync(file, content, "utf8");
        console.log("Updated " + filename);
    }
});
