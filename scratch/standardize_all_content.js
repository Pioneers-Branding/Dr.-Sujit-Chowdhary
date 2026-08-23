const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';
const files = fs.readdirSync(dir)
    .filter(file => file.startsWith('service-') && file.endsWith('.html'));

const serviceTitles = {
    'service-absent-testis.html': 'Absent Testis',
    'service-adrenal-tumor.html': 'Adrenal Tumor',
    'service-anorectal-malformation.html': 'Anorectal Malformation',
    'service-biliary-atresia.html': 'Biliary Atresia',
    'service-choledochal-cyst.html': 'Choledochal Cyst',
    'service-duplex-renal-system.html': 'Duplex Renal System',
    'service-exstrophy-epispadias.html': 'Exstrophy Epispadias',
    'service-hernia-hydrocele.html': 'Hernia and Hydrocele',
    'service-hirschsprung.html': 'Hirschsprung',
    'service-hydronephrosis.html': 'Hydronephrosis',
    'service-hypospadias.html': 'Hypospadias Surgery',
    'service-neuropathic-bladder.html': 'Neuropathic Bladder',
    'service-paediatric-gi.html': 'Paediatric GI',
    'service-pediatric-gi-surgery.html': 'Pediatric Gastrointestinal Surgery',
    'service-pediatric-oncosurgery.html': 'Pediatric Oncosurgery',
    'service-pediatric-robotic-surgery.html': 'Pediatric Robotic Surgery',
    'service-pediatric-stone-disease.html': 'Pediatric Endourology & Stones',
    'service-pediatric-tumors.html': 'Pediatric Tumors',
    'service-pediatric-urodynamics.html': 'Pediatric Urodynamics',
    'service-phimosis.html': 'Phimosis',
    'service-pujo.html': 'PUJO',
    'service-puv.html': 'PUV',
    'service-renal-tumor.html': 'Renal Tumor',
    'service-thoracoscopic-surgery.html': 'Thoracoscopic Surgery',
    'service-undescended-testis.html': 'Undescended Testis',
    'service-uti.html': 'UTI',
    'service-vesicoureteric-reflux.html': 'Vesicoureteric Reflux',
    'service-voiding-dysfunction.html': 'Voiding Dysfunction'
};

const serviceData = {
    'service-absent-testis.html': {
        understanding: `<p>An <strong>absent testis</strong> (clinically non-palpable testis) means the testicle cannot be felt in the scrotum. This might be because the testis is located high up inside the abdomen or groin (undescended), or because it never properly formed or shriveled up before birth (vanishing/absent testis) due to a prenatal vascular event. Proper medical evaluation, usually involving diagnostic laparoscopy, is necessary to confirm the diagnosis.</p>`,
        causes: `<p>The descent of the testicle during late pregnancy is a complex process. Key factors that can cause or contribute to a testicle remaining undescended or absent include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Premature Birth:</strong> The testicles normally descend during the third trimester; premature infants are at a significantly higher risk because their development was cut short.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Low Birth Weight:</strong> Statistically, newborns with a lower birth weight have a higher incidence of undescended testes.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hormonal Imbalances:</strong> A lack of maternal or fetal hormones that trigger the testicular descent pathway can arrest the movement.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Factors:</strong> A family history of undescended testes or associated genetic syndromes can increase the probability.</li>
</ul>`,
        signs: `<p>Parents or pediatricians can identify a potential undescended testicle by looking for the following signs:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>An Empty Scrotal Sac:</strong> The scrotum on one or both sides looks flat, small, or feels completely empty.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Asymmetric Appearance:</strong> One side of the scrotum looks visibly larger or more developed than the other side.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>A Bulge in the Groin:</strong> The testicle may sometimes be felt as a small, smooth lump in the groin area (inguinal canal) where it stopped descending.</li>
</ul>`
    },
    'service-adrenal-tumor.html': {
        understanding: `<p><strong>Adrenal tumors</strong> in children are rare growths that form on the adrenal glands, which sit on top of the kidneys. The most common type is neuroblastoma (arising from the adrenal medulla), followed by rarer adrenocortical tumors (adenomas or carcinomas) and pheochromocytomas. These tumors can affect hormone production and require specialized multi-disciplinary care.</p>`,
        causes: `<p>Most pediatric adrenal tumors occur due to genetic predisposition, inherited syndromes, or spontaneous gene mutations during development. Key contributing factors include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Syndromes:</strong> Conditions like Beckwith-Wiedemann syndrome, Li-Fraumeni syndrome, or Carney complex are strongly linked to adrenal growths.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Spontaneous Mutations:</strong> Cellular errors during rapid embryonic development of the adrenal gland.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Endocrine Imbalances:</strong> Abnormal signals causing localized cell hyperplasia.</li>
</ul>`,
        signs: `<p>Signs vary depending on the tumor type and whether it secretes excess hormones:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Swelling:</strong> A firm, palpable mass in the abdomen or upper side.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hormonal Symptoms:</strong> Early signs of puberty (virilization), rapid hair growth, acne, or rapid weight gain.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hypertension:</strong> High blood pressure, sweating, and heart palpitations (typical of pheochromocytoma).</li>
</ul>`
    },
    'service-anorectal-malformation.html': {
        understanding: `<p>An **anorectal malformation** (ARM) or imperforate anus is a congenital birth defect where the anus and rectum do not develop properly. In this condition, the anal opening is absent, misplaced, or too narrow. Frequently, the rectum connects to other pelvic organs (like the bladder, urethra, or vagina) via a fistula, preventing normal bowel function.</p>`,
        causes: `<p>ARM develops early in pregnancy (between the 5th and 12th weeks) when the hindgut is dividing. Key factors include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abnormal Embryonic Development:</strong> Interruption in the separation of the cloaca into the rectum and urogenital tracts.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Factors:</strong> A higher incidence in families with a history of malformations or associated syndromes (VACTERL association).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Environmental Influences:</strong> Antenatal maternal factors during early fetal formation.</li>
</ul>`,
        signs: `<p>Parents or pediatricians will observe these signs immediately after birth:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Absence of Anal Opening:</strong> The anus is completely closed or replaced by a flat skin surface.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Failure to Pass Stool:</strong> The newborn does not pass meconium within the first 24 to 48 hours of life.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abnormal Fistula Discharges:</strong> Stool or gas exiting from the urethra, bladder, or vagina.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Swelling:</strong> Progressive abdominal distension and vomiting.</li>
</ul>`
    },
    'service-biliary-atresia.html': {
        understanding: `<p><strong>Biliary atresia</strong> is a life-threatening liver disease in infants where the bile ducts inside or outside the liver become inflamed and blocked. This prevents bile (a digestive fluid) from draining into the gallbladder and small intestine, causing bile to back up and damage liver cells, leading to cirrhosis and liver failure.</p>`,
        causes: `<p>The exact cause of biliary atresia is still under investigation, but research points to several potential triggers:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Viral/Bacterial Infections:</strong> Postnatal infections that trigger an abnormal inflammatory response.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Immune System Problems:</strong> An autoimmune attack on the bile ducts after birth.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Mutations:</strong> Defects in genes responsible for bile duct formation.</li>
</ul>`,
        signs: `<p>Symptoms typically develop between two to eight weeks after birth:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Persistent Jaundice:</strong> Yellowing of the skin and eyes that lasts beyond two weeks.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Pale Clay-Colored Stools:</strong> Stools lack normal color because no bile reaches the intestine.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Dark Urine:</strong> Excess bilirubin is filtered by the kidneys, turning the urine dark tea-colored.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Swelling:</strong> Enlarged liver (hepatomegaly) and spleen due to bile backup.</li>
</ul>`
    },
    'service-choledochal-cyst.html': {
        understanding: `<p>A <strong>choledochal cyst</strong> is a congenital dilation or swelling of the bile ducts (the tubes that carry bile from the liver to the duodenum). These cysts cause bile stasis, which can lead to stone formation, recurrent liver infections, pancreatitis, and long-term risk of bile duct cancer if left untreated.</p>`,
        causes: `<p>Choledochal cysts are congenital and are widely believed to be caused by:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abnormal Pancreaticobiliary Junction (APBDJ):</strong> The pancreatic and bile ducts join outside the duodenum, allowing pancreatic juices to flow backward into the bile duct, weakening its walls.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Congenital Weakness:</strong> Weakness in the structural walls of the bile duct since birth.</li>
</ul>`,
        signs: `<p>Symptoms can appear at any age, from infancy to adulthood:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Jaundice:</strong> Yellow skin and eyes due to blocked bile flow.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Pain:</strong> Recurrent pain in the upper right quadrant of the abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Mass:</strong> A palpable lump on the right side of the upper abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Fever & Nausea:</strong> Signs of ductal infection (cholangitis) or pancreas inflammation.</li>
</ul>`
    },
    'service-duplex-renal-system.html': {
        understanding: `<p>A <strong>duplex renal system</strong> is a congenital condition where a single kidney has two separate drainage tubes (ureters). It can be complete (two separate ureters opening into the bladder) or incomplete (ureters join together before reaching the bladder). While many children remain asymptomatic, it can cause reflux, blockage, or incontinence.</p>`,
        causes: `<p>The duplex renal system occurs early in pregnancy due to:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Duplicate Ureteric Buds:</strong> Two ureteric buds arise from the mesonephric duct during embryonic development, leading to duplication.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Factors:</strong> Tendency to run in families with a history of congenital kidney anomalies.</li>
</ul>`,
        signs: `<p>Common presentations include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent UTIs:</strong> Urinary tract infections caused by urine pooling in the duplicate system.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urinary Incontinence:</strong> Continuous urine leakage or dribbling if one of the ureters is ectopic (opens outside the bladder).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Kidney Swelling:</strong> Hydronephrosis or swelling in the upper part of the kidney.</li>
</ul>`
    },
    'service-exstrophy-epispadias.html': {
        understanding: `<p>The <strong>bladder exstrophy-epispadias complex</strong> is a rare, severe congenital birth defect where the bladder does not form closed inside the body. Instead, the bladder and urethra are split open and exposed on the lower abdomen, accompanied by separated pelvic bones and malformed genitals.</p>`,
        causes: `<p>This complex developmental anomaly is caused by:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Cloacal Membrane Failure:</strong> Failure of the lower abdominal wall and bladder tissue to close properly during early fetal development (first 4-8 weeks).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Multifactorial Causes:</strong> A combination of genetic mutations and environmental influences.</li>
</ul>`,
        signs: `<p>The condition is obvious at birth:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Exposed Bladder:</strong> A red, moist mass of bladder mucosa visible on the lower abdominal wall.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Constant Wetness:</strong> Urine constantly dripping directly from the exposed bladder template.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Epispadias/Genital Anomalies:</strong> Urethra opening on the top side of the penis in boys, or a split clitoris in girls.</li>
</ul>`
    },
    'service-hernia-hydrocele.html': {
        understanding: `<p><strong>Inguinal hernia and hydrocele</strong> are common childhood conditions in the groin. A hydrocele occurs when fluid gathers around the testicle in a small pouch, while a hernia occurs when a loop of intestine or ovary slides down into the groin channel (processus vaginalis).</p>`,
        causes: `<p>Both conditions stem from the same embryological cause:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Patent Processus Vaginalis:</strong> The natural pathway between the abdomen and scrotum fails to close before birth, leaving an open channel.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Pressure:</strong> Crying or straining pushes fluid (hydrocele) or bowel loops (hernia) into this channel.</li>
</ul>`,
        signs: `<p>Signs to watch for in your child:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Groin or Scrotal Swelling:</strong> A bulge that becomes larger and more prominent when the child cries, coughs, or stands, and disappears when lying flat.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Scrotal Transillumination:</strong> In hydroceles, the scrotum glows when a light is shone through it.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Irritability/Pain:</strong> Fussiness, especially if the hernia bulge becomes firm, tender, and cannot be gently pushed back (incarcerated hernia).</li>
</ul>`
    },
    'service-hirschsprung.html': {
        understanding: `<p><strong>Hirschsprung's disease</strong> is a congenital condition characterized by the absence of nerve cells (ganglion cells) in the muscular wall of the distal bowel. This lack of nerves prevents the bowel from relaxing, causing a functional obstruction that stops stool from moving forward.</p>`,
        causes: `<p>Hirschsprung's disease occurs during early pregnancy due to:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Arrested Nerve Migration:</strong> Neural crest cells fail to travel all the way to the end of the large intestine during fetal development.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Mutations:</strong> Associated with mutations in the RET gene and syndromic links like Down syndrome.</li>
</ul>`,
        signs: `<p>Most symptoms appear in the first few days of life:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Failure to Pass Meconium:</strong> The newborn does not pass the first stool within 24 to 48 hours of birth.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Distension:</strong> Severe swelling or bloating of the abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Bilious Vomiting:</strong> Vomiting green-colored bile due to bowel blockage.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Chronic Constipation:</strong> Severe constipation that does not respond to standard dietary adjustments.</li>
</ul>`
    },
    'service-hydronephrosis.html': {
        understanding: `<p><strong>Hydronephrosis</strong> is the swelling of one or both kidneys due to urine backup. It is not a disease in itself but rather a physical symptom of an underlying condition, such as a blockage in the urinary tract or urine flowing backward from the bladder (reflux).</p>`,
        causes: `<p>Hydronephrosis can be congenital or acquired, caused by:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Blockages (Obstruction):</strong> Narrowing at the kidney-ureter junction (UPJO), ureter-bladder junction (UVJO), or posterior urethral valves (PUV).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Vesicoureteral Reflux (VUR):</strong> Failure of the valve mechanism, letting urine travel backward into the kidney.</li>
</ul>`,
        signs: `<p>While frequently diagnosed during routine prenatal ultrasounds, postnatal signs include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent UTIs:</strong> High-fever urinary infections due to pooled urine in the kidney.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal/Flank Pain:</strong> Pain in the side or back, which may worsen with high fluid intake.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hematuria:</strong> Blood in the urine.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Palpable Abdominal Mass:</strong> An enlarged, swollen kidney that can be felt during physical exam.</li>
</ul>`
    },
    'service-hypospadias.html': {
        understanding: `<p><strong>Hypospadias</strong> is a common congenital condition where the opening of the urethra is on the underside of the penis rather than at the tip. It is often accompanied by a downward bend of the penis (chordee) and an incomplete, hooded foreskin.</p>`,
        causes: `<p>Hypospadias occurs during the 8th to 14th week of pregnancy due to:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hormonal Imbalances:</strong> A disruption in testosterone signaling that halts normal closure of the urethral tube.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Predisposition:</strong> Family history of hypospadias or associated endocrine syndromes.</li>
</ul>`,
        signs: `<p>Key visual and functional signs include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Underside Opening:</strong> The urethral opening is located below the tip, along the shaft, or in severe cases, near the scrotum.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Downward Bend (Chordee):</strong> The penis curves downward, which becomes apparent during erection.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hooded Foreskin:</strong> The foreskin only develops on the top half of the glans, leaving the underside exposed.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abnormal Stream:</strong> Splattering or spraying of the urinary stream, requiring the child to sit to urinate.</li>
</ul>`
    },
    'service-neuropathic-bladder.html': {
        understanding: `<p>A <strong>neuropathic bladder</strong> (or neurogenic bladder) is a bladder dysfunction caused by a neurological disease or spinal cord injury. The bladder may either fail to store urine (causing leaks) or fail to empty completely (causing urine backup and high kidney pressures).</p>`,
        causes: `<p>Neuropathic bladder results from spinal nerve malformations or injuries, including:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Spina Bifida (Myelomeningocele):</strong> A congenital defect where the spinal cord does not close properly during gestation.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Tethered Cord Syndrome:</strong> The spinal cord is abnormally stretched or bound.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Spinal Trauma or Tumors:</strong> Acquired nerve damage affecting the bladder reflex pathways.</li>
</ul>`,
        signs: `<p>Common signs in children include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urinary Incontinence:</strong> Continuous dribbling of urine or frequent daytime/nighttime wetting.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Difficulty Emptying:</strong> Straining or poor urine stream, leaving a full bladder.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent UTIs:</strong> Frequent bladder or kidney infections accompanied by unexplained fevers.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Renal Hydronephrosis:</strong> Swollen kidneys on ultrasound scans due to high backup pressures.</li>
</ul>`
    },
    'service-paediatric-gi.html': {
        understanding: `<p><strong>Paediatric gastrointestinal (GI) conditions</strong> include a variety of congenital and acquired surgical disorders of the esophagus, stomach, intestines, liver, and biliary tree, such as appendicitis, bowel obstruction, and abdominal cysts.</p>`,
        causes: `<p>These conditions arise from diverse developmental and inflammatory processes:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Congenital Anomalies:</strong> Development errors during fetal growth leading to structural blockages (e.g. malrotation).</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Acute Inflammation:</strong> Infections or obstructions of organs, such as acute appendicitis or gallstones.</li>
</ul>`,
        signs: `<p>GI symptoms in children require prompt evaluation:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Persistent Vomiting:</strong> Especially green or yellow bilious vomiting, indicating obstruction.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Pain:</strong> Severe, sharp, or crampy pain causing irritability or crying.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Bloating/Distension:</strong> A visibly swollen or hard abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Blood in Stool:</strong> Dark red or bright red blood in stools.</li>
</ul>`
    },
    'service-pediatric-gi-surgery.html': {
        understanding: `<p><strong>Pediatric gastrointestinal surgery</strong> addresses structural and developmental anomalies of the digestive tract in children. Surgical intervention is often required to restore normal digestive flow and prevent serious nutritional or systemic complications.</p>`,
        causes: `<p>These conditions arise from errors during early fetal development or acute blockages:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Embryological Malrotations:</strong> Intestines fail to fold and rotate properly in the abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Bowel Obstructions:</strong> Intestinal duplications, strictures, or thick meconium plugs.</li>
</ul>`,
        signs: `<p>Common surgical signs to watch for:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Bilious Vomiting:</strong> Throwing up green fluid is a hallmark of bowel blockage.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Severe Bloating:</strong> Abdominal distension paired with inability to pass gas or stool.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Failure to Thrive:</strong> Significant weight loss or inability to gain weight due to digestive tract dysfunction.</li>
</ul>`
    },
    'service-pediatric-oncosurgery.html': {
        understanding: `<p><strong>Pediatric oncosurgery</strong> involves the surgical diagnosis and resection of solid tumors and cancers in infants and children. Surgical excision is integrated with chemotherapy and radiation to maximize cure rates while preserving healthy development.</p>`,
        causes: `<p>Childhood cancers differ significantly from adult cancers:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>DNA Mutations:</strong> Rapidly dividing cells undergo gene mutations early in development.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Congenital Syndromes:</strong> Associated with predisposing genetic syndromes (e.g. Beckwith-Wiedemann, WAGR).</li>
</ul>`,
        signs: `<p>Parents should seek evaluation for these persistent signs:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Lump:</strong> A firm, usually painless mass felt in the child's abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Unexplained Fever:</strong> Persistent fevers that do not respond to antibiotics.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Weight Loss & Fatigue:</strong> Chronic tiredness, loss of appetite, and weight loss.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Bone/Joint Pain:</strong> Unexplained limping or localized bone pain.</li>
</ul>`
    },
    'service-pediatric-robotic-surgery.html': {
        understanding: `<p><strong>Pediatric robotic surgery</strong> is an advanced minimally invasive surgical technique that uses high-precision robotic arms controlled by a specialized surgeon. It provides 3D magnification and extreme precision for delicate reconstructions, particularly in pediatric urology.</p>`,
        causes: `<p>It is used to correct congenital anatomical anomalies that require complex suturing, including:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urinary Blockages:</strong> Ureteropelvic junction obstruction (UPJO) requiring robotic pyeloplasty.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Vesicoureteral Reflux:</strong> Bilateral VUR requiring robotic ureteric reimplantation.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Cysts/Tumors:</strong> Choledochal cysts or renal tumors requiring minimally invasive excision.</li>
</ul>`,
        signs: `<p>The need for robotic reconstruction is usually identified during diagnostic scans:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Kidney Swelling (Hydronephrosis):</strong> Found on ultrasounds or MAG3 nuclear kidney scans.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent Kidney Infections:</strong> Accompanied by high fevers and flank pain.</li>
</ul>`
    },
    'service-pediatric-stone-disease.html': {
        understanding: `<p><strong>Pediatric stone disease</strong> (urolithiasis) is the formation of solid mineral deposits (stones) in the kidneys, ureters, or bladder of children. Endourology uses tiny endoscopes inserted through natural passages (urethra) to locate and fragment these stones without incisions.</p>`,
        causes: `<p>Stones form due to mineral accumulation in the urinary tract. Causes include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Metabolic Disorders:</strong> Conditions like hypercalciuria (excess calcium in urine) or cystinuria.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Anatomical Blockages:</strong> Slow urine drainage allows minerals to crystallize and grow into stones.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Dehydration:</strong> Inadequate fluid intake concentrates urine, increasing stone risk.</li>
</ul>`,
        signs: `<p>Children present with symptoms that differ from adults:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Sudden, Severe Pain:</strong> Sharp pain in the lower back, side (flank), or lower abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hematuria:</strong> Pink, red, or brown blood in the urine.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Painful/Frequent Urination:</strong> Crying during urination (especially in infants) or constant urgency.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>UTIs & Fever:</strong> High fever and chills indicating a stone block paired with infection.</li>
</ul>`
    },
    'service-pediatric-tumors.html': {
        understanding: `<p><strong>Pediatric tumors</strong> encompass a range of benign and cancerous growths in children. Common solid tumors include Wilms tumor (kidneys), neuroblastoma (nerve tissue), hepatoblastoma (liver), and rhabdomyosarcoma (muscles). Treating these tumors requires close collaboration between surgeons and oncology specialists.</p>`,
        causes: `<p>Unlike adult cancers, environmental factors rarely cause pediatric tumors. Common causes include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Embryonic Cell Mutations:</strong> Genetic errors in cells that were supposed to form mature organs during pregnancy.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Predisposition:</strong> Inherited syndromes or chromosome deletions.</li>
</ul>`,
        signs: `<p>Signs depend heavily on the tumor's location:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Palpable Abdominal Mass:</strong> A large, firm lump felt in the belly.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Pain & Swelling:</strong> Chronic bloating and unexplained discomfort.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Systemic Signs:</strong> Persistent fever, fatigue, weight loss, and poor appetite.</li>
</ul>`
    },
    'service-pediatric-urodynamics.html': {
        understanding: `<p>A <strong>pediatric urodynamic study</strong> is a specialized outpatient test that measures how well your child's bladder fills, stores, and empties urine. It evaluates the coordination between the bladder muscle and the urinary sphincter to diagnose nerve or muscle dysfunction.</p>`,
        causes: `<p>Urodynamic testing is indicated to find the cause of bladder problems, including:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Neurological Conditions:</strong> Nerve blockages from Spina Bifida or spinal cord tethering.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Severe Incontinence:</strong> Daytime wetting or bedwetting that does not respond to standard medication.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Outlet Blockage:</strong> High pressure due to Posterior Urethral Valves (PUV) or sphincter dyssynergia.</li>
</ul>`,
        signs: `<p>Your child may require a urodynamic study if they show these symptoms:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Continuous Dribbling:</strong> Leaking urine throughout the day without sensing a full bladder.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urinary Urgency & Frequency:</strong> Needing to urinate immediately and very frequently.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent High-Fever UTIs:</strong> Caused by incomplete bladder emptying.</li>
</ul>`
    },
    'service-phimosis.html': {
        understanding: `<p><strong>Phimosis</strong> is a condition where the foreskin of the penis is too tight to be retracted (pulled back) over the glans. It can be physiological (normal adhesion in infants, which separates naturally over time) or pathological (scarring due to infection or trauma).</p>`,
        causes: `<p>The causes of phimosis vary by type:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Physiological Phimosis:</strong> Present since birth; normal developmental adhesions between the glans and foreskin.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Pathological Phimosis:</strong> Scarring from recurrent infections (balanitis) or forceable retraction of a tight foreskin.</li>
</ul>`,
        signs: `<p>Signs that indicate pathological phimosis or complications:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Inability to Retract:</strong> Foreskin cannot be pulled back past the age of 5-6 years.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Foreskin Ballooning:</strong> The foreskin puffs up with urine during voiding because the opening is too small.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Redness and Scarring:</strong> A contracted, white fibrous ring at the foreskin tip, indicating scar tissue.</li>
</ul>`
    },
    'service-pujo.html': {
        understanding: `<p><strong>Pelviureteric Junction Obstruction</strong> (PUJO) is a blockage or severe narrowing at the point where the kidney pelvis connects to the ureter. This impairs urine flow from the kidney to the bladder, causing urine to pool and swell the kidney (hydronephrosis).</p>`,
        causes: `<p>PUJO is a congenital condition caused by:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Intrinsic Narrowing:</strong> Poorly developed muscle tissue at the junction, preventing normal peristaltic flow.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Crossing Vessel:</strong> An abnormal lower-pole renal blood vessel that crosses and compresses the ureter.</li>
</ul>`,
        signs: `<p>Symptoms can present at birth or develop later in childhood:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Antenatal Hydronephrosis:</strong> Kidney swelling detected on routine pregnancy ultrasounds.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Flank or Side Pain:</strong> Recurrent abdominal or side pain, which may worsen after drinking fluids.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent UTIs:</strong> Urinary tract infections due to urine stasis.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hematuria:</strong> Blood in the urine, sometimes triggered by minor trauma.</li>
</ul>`
    },
    'service-puv.html': {
        understanding: `<p><strong>Posterior Urethral Valves</strong> (PUV) is a congenital condition in baby boys where abnormal membrane folds in the urethra block urine flow out of the bladder. The severe backup pressure damages the bladder wall, ureters, and developing kidneys.</p>`,
        causes: `<p>PUV is a developmental anomaly that occurs early in gestation:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Developmental Error:</strong> Failure of the embryological folds (wolffian duct remnants) to regress, leaving valve-like leaflets in the prostatic urethra.</li>
</ul>`,
        signs: `<p>Symptoms range from severe prenatal signs to postnatal voiding issues:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Bilateral Hydronephrosis:</strong> Swelling of both kidneys and low amniotic fluid (oligohydramnios) on prenatal ultrasound.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Weak Urine Stream:</strong> A slow, dribbling, or interrupted stream in a newborn male.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Distended Bladder:</strong> A hard, palpable bladder mass in the lower abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent UTIs:</strong> Severe urinary tract infections accompanied by high fevers.</li>
</ul>`
    },
    'service-renal-tumor.html': {
        understanding: `<p><strong>Renal tumors</strong> in children are growths on the kidneys. The most common type is Wilms tumor (nephroblastoma), followed by rarer tumors like mesoblastic nephroma or renal cell carcinoma. Early surgical resection paired with chemotherapy yields excellent cure rates.</p>`,
        causes: `<p>Pediatric renal tumors develop early in childhood due to:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Genetic Alterations:</strong> Mutations in the WT1 gene or other chromosome loci.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Congenital Anomalies:</strong> Associated with syndromes like Beckwith-Wiedemann or WAGR syndrome.</li>
</ul>`,
        signs: `<p>Common clinical signs of a renal tumor include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Abdominal Mass:</strong> A large, firm, painless mass felt on one side of the abdomen.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hematuria:</strong> Blood in the urine due to tumor invasion of the collecting system.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>High Blood Pressure:</strong> Elevation of blood pressure caused by kidney compression or renin release.</li>
</ul>`
    },
    'service-thoracoscopic-surgery.html': {
        understanding: `<p><strong>Thoracoscopic surgery</strong> (Video-Assisted Thoracoscopic Surgery or VATS) is a minimally invasive surgical procedure in the chest. In children, it is used to resect congenital lung cysts (CPAM), repair diaphragmatic hernias, or clear chest cavity infections (empyema) using tiny incisions.</p>`,
        causes: `<p>It is indicated for children requiring thoracic surgical procedures, including:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Congenital Lung Lesions:</strong> Abnormal tissue development like bronchogenic cysts or CPAM.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Pleural Empyema:</strong> A buildup of pus in the space around the lungs due to severe pneumonia.</li>
</ul>`,
        signs: `<p>Symptoms indicating the need for chest evaluation include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Respiratory Distress:</strong> Rapid breathing, grunting, or chest retractions in infants.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent Pneumonia:</strong> Repeated severe chest infections in the same area of the lung.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Chest Pain & Cough:</strong> Persistent coughing or pain, especially with breathing.</li>
</ul>`
    },
    'service-undescended-testis.html': {
        understanding: `<p>An <strong>undescended testis</strong> (cryptorchidism) is a condition where a testicle has not moved down into the scrotal sac before birth. The testicle may be located along the normal descent path (groin canal) or inside the abdomen, requiring surgical relocation (orchidopexy) to preserve function.</p>`,
        causes: `<p>The exact cause is multifactorial, involving:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Premature Birth & Low Birth Weight:</strong> Early birth interrupts the natural descent process that normally occurs in the third trimester.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Hormonal Imbalances:</strong> Deficiencies in maternal or fetal hormones (androgens) that guide the descent pathway.</li>
</ul>`,
        signs: `<p>Visual and physical signs include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Empty Scrotum:</strong> The scrotal sac on one or both sides is flat and empty.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Groin Bulge:</strong> A small, smooth, palpable lump felt in the groin area.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Asymmetric Scrotum:</strong> One side of the scrotum appears significantly smaller than the other.</li>
</ul>`
    },
    'service-uti.html': {
        understanding: `<p>A <strong>urinary tract infection</strong> (UTI) in children is a bacterial infection of the bladder (cystitis) or kidneys (pyelonephritis). While common, recurrent UTIs in young children are often a critical sign of underlying urological anomalies that must be investigated.</p>`,
        causes: `<p>UTIs develop when bacteria enter the urinary tract. Contributing factors include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Vesicoureteral Reflux (VUR):</strong> Urine flowing backward from the bladder to the kidneys, carrying bacteria.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Anatomical Obstructions:</strong> Conditions like PUJO or PUV that prevent complete drainage of urine.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Voiding Dysfunction:</strong> Infrequent voiding, constipation, or poor bladder hygiene.</li>
</ul>`,
        signs: `<p>Symptoms depend strongly on the child's age:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>In Infants:</strong> Unexplained high fever, irritability, poor feeding, vomiting, or diarrhea.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>In Older Children:</strong> Pain or burning sensation during urination, frequent urination, urgency, bedwetting, or foul-smelling urine.</li>
</ul>`
    },
    'service-vesicoureteric-reflux.html': {
        understanding: `<p><strong>Vesicoureteric reflux</strong> (VUR) is a condition where urine flows backward from the bladder into the ureters and kidneys. This backflow exposes the kidneys to bacteria from the bladder, which can lead to recurrent kidney infections (pyelonephritis) and permanent renal scarring.</p>`,
        causes: `<p>VUR can be classified into two primary types:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Primary VUR:</strong> A congenital defect where the ureter enters the bladder wall too straight, failing to form a proper one-way valve.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Secondary VUR:</strong> Caused by abnormally high pressures in the bladder due to blockages (like PUV) or nerve damage (neuropathic bladder).</li>
</ul>`,
        signs: `<p>Common signs and symptoms include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Recurrent UTIs:</strong> Frequent urinary infections, often accompanied by high fevers.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Antenatal Hydronephrosis:</strong> Swollen kidneys detected on pregnancy ultrasounds.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Voiding Symptoms:</strong> Urgency, frequency, or burning during urination in older children.</li>
</ul>`
    },
    'service-voiding-dysfunction.html': {
        understanding: `<p><strong>Voiding dysfunction</strong> refers to a range of urination problems in children who have already been toilet trained. It is characterized by abnormal bladder storage or emptying patterns, usually caused by functional coordination issues rather than nerve defects.</p>`,
        causes: `<p>Voiding dysfunction is most commonly a functional, learned behavior:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Habitual Urine Holding:</strong> Children hold their urine too long because they do not want to interrupt play.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Constipation:</strong> A full rectum presses against the bladder, disrupting normal sphincter relaxation.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>History of Pain:</strong> A past painful UTI makes the child afraid to urinate, causing them to contract their muscles.</li>
</ul>`,
        signs: `<p>Symptoms indicating a voiding dysfunction include:</p>
<ul class="about-list">
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urinary Incontinence:</strong> Daytime wetting or sudden accidents in toilet-trained children.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Urgency and Frequency:</strong> Feeling a sudden, intense need to urinate and going very frequently.</li>
    <li><i class="fas fa-check-circle" style="color: var(--secondary-teal); margin-right: 8px;"></i> <strong>Interrupted Stream:</strong> Dribbling, straining, or a start-and-stop stream during voiding.</li>
</ul>`
    }
};

// Curated list of 15 key services to display in the sidebar
const defaultLinks = [
    { href: 'service-undescended-testis.html', text: 'Undescended Testis' },
    { href: 'service-hypospadias.html', text: 'Hypospadias Surgery' },
    { href: 'service-pediatric-robotic-surgery.html', text: 'Pediatric Robotic Surgery' },
    { href: 'service-uti.html', text: 'UTI' },
    { href: 'service-vesicoureteric-reflux.html', text: 'Vesicoureteric Reflux' },
    { href: 'service-hernia-hydrocele.html', text: 'Hernia and Hydrocele' },
    { href: 'service-hydronephrosis.html', text: 'Hydronephrosis' },
    { href: 'service-pujo.html', text: 'PUJO' },
    { href: 'service-phimosis.html', text: 'Phimosis' },
    { href: 'service-neuropathic-bladder.html', text: 'Neuropathic Bladder' },
    { href: 'service-voiding-dysfunction.html', text: 'Voiding Dysfunction' },
    { href: 'service-duplex-renal-system.html', text: 'Duplex Renal System' },
    { href: 'service-puv.html', text: 'PUV' },
    { href: 'service-pediatric-stone-disease.html', text: 'Pediatric Endourology & Stones' },
    { href: 'service-exstrophy-epispadias.html', text: 'Exstrophy Epispadias' }
];

files.forEach(filename => {
    const filePath = path.join(dir, filename);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get corresponding data or fallback to absent-testis as safety template
    const key = serviceData[filename] ? filename : 'service-absent-testis.html';
    const data = serviceData[key];
    const pageTitle = serviceTitles[filename] || 'Pediatric Surgery';
    
    // 1. Build the main body content block (Understanding, Causes, Signs)
    const newMainContentBody = `
<h3 class="mt-4">Understanding ${pageTitle}</h3>
${data.understanding}

<h3 class="mt-4">Causes of ${pageTitle}</h3>
${data.causes}

<h3 class="mt-4">Signs of ${pageTitle}</h3>
${data.signs}
`;

    // 2. We replace the main content block inside <div class="service-main fade-in-up">
    // But we need to keep the image tag!
    const mainMatch = content.match(/<div class="service-main fade-in-up">([\s\S]*?)<\/div>\s*<div class="sidebar/i);
    if (mainMatch) {
        const fullMainBlock = mainMatch[1];
        
        // Find the image tag inside fullMainBlock
        const imgMatch = fullMainBlock.match(/<img[^>]*src="assets\/images\/services\/[^>]*>/i);
        const imgTag = imgMatch ? imgMatch[0] : '';
        
        // Assemble the new inner content of service-main
        let finalMainInner = `\n                ${imgTag}\n${newMainContentBody}\n            `;
        
        // Let's see: if there was "Why Early Intervention Matters" in the original file, we preserve it at the end of the new inner content!
        const preservationMatch = fullMainBlock.match(/(<h3[^>]*>Why Early Intervention Matters<\/h3>[\s\S]*?)$/i);
        if (preservationMatch) {
            finalMainInner += `\n${preservationMatch[1]}\n            `;
        }
        
        content = content.replace(fullMainBlock, finalMainInner);
    }
    
    // 3. Clean up any remaining iframe or video tags inside the file
    content = content.replace(/<iframe[^>]*src="https:\/\/www\.youtube\.com[^>]*>([\s\S]*?)<\/iframe>/gi, '');
    content = content.replace(/<iframe[^>]*src="[^"]*youtube\.com[^>]*>([\s\S]*?)<\/iframe>/gi, '');
    content = content.replace(/<video[^>]*>([\s\S]*?)<\/video>/gi, '');
    content = content.replace(/<div\s*>(\s*<iframe[^>]*><\/iframe>\s*)*<\/div>/gi, ''); // remove empty wrapper div if leftover

    // 4. Generate the right sidebar links
    let links = [...defaultLinks];
    const isPresent = links.some(l => l.href === filename);
    if (!isPresent && serviceTitles[filename]) {
        links.push({ href: filename, text: serviceTitles[filename] });
    }
    
    let sidebarLinksHtml = '';
    links.forEach(l => {
        const isActive = l.href === filename;
        const activeClass = isActive ? ' class="active"' : '';
        sidebarLinksHtml += `                    <li><a href="${l.href}"${activeClass}>${l.text}</a></li>\n`;
    });
    
    // Match and replace the entire sidebar block
    const sidebarRegex = /<div class="sidebar fade-in-up"[\s\S]*?<\/ul>([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/i;
    const sidebarMatch = content.match(sidebarRegex);
    
    if (sidebarMatch) {
        // Prepare the new sidebar content
        const newSidebar = `<div class="sidebar fade-in-up" style="animation-delay: 0.2s">
                <h4 class="mb-3">Other Services</h4>
                <ul class="sidebar-links">
${sidebarLinksHtml}                </ul>
                <div class="contact-card text-center mt-5" style="background:var(--gradient-primary); padding:30px; border-radius:var(--radius-md); color:white;">
                    <i class="fas fa-phone font-2xl mb-3" style="font-size: 2rem;"></i>
                    <h4>Need Consultation?</h4>
                    <p style="color:white; opacity:0.8;">Book an appointment with Dr. Sujit Chowdhary today.</p>
                    <a href="contact.html" class="btn mix-blend mt-2" style="background:white; color:var(--primary-blue); font-weight: 700;">Book Now</a>
                </div>
            </div>
        </div>
    </section>`;
        
        // Find the index of <div class="sidebar fade-in-up"
        const sidebarStartIndex = content.indexOf('<div class="sidebar fade-in-up"');
        const sectionEndIndex = content.indexOf('</section>', sidebarStartIndex) + 10;
        
        if (sidebarStartIndex !== -1 && sectionEndIndex !== -1) {
            content = content.substring(0, sidebarStartIndex) + newSidebar + content.substring(sectionEndIndex);
        }
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Standardized page structure and sidebar in ${filename}`);
});

console.log('Restructuring executed successfully!');
