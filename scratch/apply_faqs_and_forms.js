const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';

const faqDatabase = {
    'service-absent-testis.html': {
        subtext: "Daycare laparoscopic orchidopexy is highly successful in bringing down abdominal or absent testes. Schedule a consultation today.",
        faqs: [
            { q: "At what age should an undescended testis be operated?", a: "Surgery (orchidopexy) is recommended between 6 months and 1 year of age to preserve germ cells and future fertility." },
            { q: "What investigations are required for a non-palpable testis?", a: "Diagnostic laparoscopy is the gold standard, as ultrasound and MRI cannot confirm with certainty whether a testis is absent." },
            { q: "Can hormone injections bring the testis down?", a: "Hormone therapy (like HCG) has a very low success rate and is no longer recommended in modern pediatric urology." },
            { q: "Is a laparoscopic orchidopexy performed as a daycare procedure?", a: "Yes, laparoscopic orchidopexy is routinely performed as a daycare procedure, and the child can go home the same day." },
            { q: "What if the testicle is found to be vanished or atrophic?", a: "If diagnostic laparoscopy reveals a blind-ending vessel or atrophic tissue, the non-functional tissue is removed, and a cosmetic prosthesis can be placed later during puberty." },
            { q: "What is the recovery time after laparoscopic orchidopexy?", a: "Most infants recover quickly and are active the same day. Vigorous play and stridulent toys (like straddling bicycles) should be avoided for 2 weeks." },
            { q: "Does having one absent or undescended testis affect future fertility?", a: "With timely surgical descent of the other testis, fertility rates are generally normal or near-normal. Prompt surgery minimizes the risk." }
        ]
    },
    'service-adrenal-tumor.html': {
        subtext: "Surgical removal of adrenal tumors is key to protecting your child's health. Schedule a consultation today.",
        faqs: [
            { q: "Are adrenal tumors in children always cancerous?", a: "Not always. While neuroblastomas are malignant, many adrenocortical tumors or pheochromocytomas can be benign, though they still require removal." },
            { q: "Can the kidney be saved during adrenal surgery?", a: "Yes, since the adrenal gland sits adjacent to the kidney but has its own separate capsule, the kidney is successfully preserved in almost all cases." },
            { q: "What is the role of laparoscopic surgery in adrenal tumors?", a: "For smaller, well-localized adrenal tumors, minimally invasive laparoscopic or robotic-assisted surgery is highly effective, leading to faster recovery." },
            { q: "What is a pheochromocytoma?", a: "It is a rare adrenal tumor that secretes hormones (adrenaline), causing symptoms like severe high blood pressure and rapid heart rate." },
            { q: "What preparation is needed before adrenal tumor surgery?", a: "Certain tumors (like pheochromocytomas) require pre-operative medication to stabilize blood pressure before surgical removal." },
            { q: "How long is the hospital stay after adrenalectomy?", a: "Typically, children stay in the hospital for 3 to 5 days, depending on whether the surgery was laparoscopic or open." },
            { q: "Will my child need hormone replacements after surgery?", a: "If only one adrenal gland is removed, the remaining healthy gland takes over, and hormone replacement is generally not required." }
        ]
    },
    'service-anorectal-malformation.html': {
        subtext: "Specialized reconstructive surgery offers the best outcomes for anorectal malformation. Schedule a consultation today.",
        faqs: [
            { q: "What is an anorectal malformation (ARM)?", a: "It is a congenital birth defect where the anus and rectum do not develop properly, preventing normal bowel movements." },
            { q: "Is immediate surgery required after birth?", a: "Yes, temporary colostomy or primary reconstruction is performed within the first 24 to 48 hours of life to allow stool passage." },
            { q: "What is a PSARP procedure?", a: "Posterior Sagittal Anorectoplasty (PSARP) is the definitive surgical procedure to reconstruct the anus and place the rectum inside the muscle complex." },
            { q: "Will my child achieve normal bowel control after surgery?", a: "Most children with low-type malformations achieve excellent bowel control, while high-type malformations may require long-term bowel management program support." },
            { q: "What is a temporary colostomy?", a: "It is a temporary diversion where the bowel is brought to the abdominal wall to pass stool into a bag, protecting the surgical site during healing." },
            { q: "When is the colostomy reversed?", a: "Typically, the colostomy is reversed 2 to 3 months after the main PSARP reconstruction has healed." },
            { q: "Are there any long-term dietary needs for these children?", a: "Children are monitored closely for constipation, and a high-fiber diet, adequate fluid intake, or laxatives may be recommended." }
        ]
    },
    'service-biliary-atresia.html': {
        subtext: "Early Kasai surgery is critical for restoring bile flow in biliary atresia. Schedule a consultation today.",
        faqs: [
            { q: "What is Biliary Atresia?", a: "It is a rare childhood disease of the liver where the bile ducts are blocked, leading to bile buildup and liver damage." },
            { q: "What is the Kasai Portoenterostomy procedure?", a: "It is the primary surgical treatment that bypasses the blocked bile ducts by connecting a loop of the small intestine directly to the liver." },
            { q: "What is the ideal age for the Kasai procedure?", a: "It should ideally be performed before 60 days of age. Early surgery significantly improves the chance of restoring bile flow." },
            { q: "Is a liver transplant always necessary?", a: "While the Kasai procedure helps delay or avoid a transplant, many children with biliary atresia may eventually require a liver transplant later in childhood." },
            { q: "What are the main signs of biliary atresia?", a: "Persistent jaundice beyond 2 weeks of life, pale or clay-colored stools, and dark urine are key red flags." },
            { q: "How long is the hospital recovery after Kasai surgery?", a: "Typically, children stay in the hospital for 7 to 10 days for monitoring of bile drainage and nutritional support." },
            { q: "What postoperative care is needed?", a: "Long-term follow-up involves nutritional supplements (fat-soluble vitamins), antibiotics to prevent cholangitis, and liver function monitoring." }
        ]
    },
    'service-choledochal-cyst.html': {
        subtext: "Complete cyst excision prevents long-term liver and biliary complications. Schedule a consultation today.",
        faqs: [
            { q: "What is a Choledochal Cyst?", a: "It is a congenital cystic dilation of the bile ducts that can cause bile stasis, jaundice, liver damage, or infection." },
            { q: "Why is surgical removal of a choledochal cyst necessary?", a: "Removal is essential to prevent complications such as recurrent cholangitis, pancreatitis, stone formation, and long-term risk of malignancy." },
            { q: "What does the surgery involve?", a: "It involves complete excision of the cyst followed by reconstruction of the biliary pathway, usually connecting the liver duct to the small intestine (Hepaticojejunostomy)." },
            { q: "Can this procedure be performed laparoscopically?", a: "Yes, laparoscopic or robotic-assisted excision of choledochal cysts is now the standard approach, offering excellent visualization and quicker recovery." },
            { q: "What are the common symptoms of a choledochal cyst in children?", a: "Abdominal pain, jaundice, and a palpable abdominal mass are the classic symptoms." },
            { q: "What is the typical recovery period?", a: "Children stay in the hospital for 4 to 6 days after surgery and return to normal activity within 2 to 3 weeks." },
            { q: "Are there any long-term dietary restrictions after cyst removal?", a: "Once fully recovered, children can typically enjoy a normal, healthy diet without any lifelong restrictions." }
        ]
    },
    'service-duplex-renal-system.html': {
        subtext: "Most duplex kidneys need no treatment, but symptomatic cases deserve expert evaluation. Schedule a consultation today.",
        faqs: [
            { q: "What is a duplex renal system?", a: "It is a congenital condition where a kidney has two separate ureters draining it instead of one." },
            { q: "Does a duplex renal system always require surgery?", a: "No, many children with duplex kidneys lead completely healthy lives without any symptoms or need for intervention." },
            { q: "What complications can arise from a duplex system?", a: "The most common complications are urinary tract infections (UTIs), vesicoureteric reflux (VUR), or obstruction (ureterocele)." },
            { q: "What is an ectopic ureter?", a: "In a duplex system, one of the ureters may drain into an abnormal location, such as the urethra or vagina, causing continuous urine leakage." },
            { q: "How is a duplex renal system diagnosed?", a: "It is diagnosed using ultrasound, MCUG scans, and renal isotope scans (like DMSA or MAG3) to assess function." },
            { q: "What surgical treatments are available?", a: "Surgery depends on the issue and can include ureteral reimplantation, excision of an obstructed segment, or endoscopic puncture of a ureterocele." },
            { q: "Can a duplex kidney function normally?", a: "Yes, the functional capacity of a duplex kidney is usually excellent and equal to or better than a single kidney." }
        ]
    },
    'service-exstrophy-epispadias.html': {
        subtext: "Staged functional reconstruction helps children with bladder exstrophy achieve continence. Schedule a consultation today.",
        faqs: [
            { q: "What is bladder exstrophy?", a: "It is a severe congenital malformation where the bladder is malformed and exposed on the lower abdominal wall." },
            { q: "When is the primary closure of bladder exstrophy performed?", a: "Primary closure is ideally performed within the first 72 hours of life, often in combination with pelvic osteotomy." },
            { q: "What is epispadias?", a: "Epispadias is a malformation where the urethra opens on the top (dorsal) aspect of the penis rather than the tip." },
            { q: "How is urinary continence achieved in these children?", a: "Continence is achieved through staged reconstructions, bladder neck repair, or bladder augmentation combined with clean intermittent catheterization." },
            { q: "What is a pelvic osteotomy?", a: "It is a surgical procedure to shape the pelvic bones closer together, which supports the bladder closure and improves long-term continence." },
            { q: "Can children with exstrophy go on to have normal renal function?", a: "Yes, with specialized care and timely surgical reconstruction, the kidneys can be successfully protected for life." },
            { q: "What long-term follow-up is necessary?", a: "Children require long-term follow-up with a pediatric urologist to monitor kidney health, bladder growth, and sexual development." }
        ]
    },
    'service-hernia-hydrocele.html': {
        subtext: "Daycare herniotomy is safe and prevents emergency complications like incarceration. Schedule a consultation today.",
        faqs: [
            { q: "What causes hernia and hydrocele in children?", a: "They are caused by a patent processus vaginalis—a passage between the abdomen and scrotum that failed to close before birth." },
            { q: "Do pediatric hydroceles go away on their own?", a: "Many simple hydroceles resolve spontaneously by 1 to 2 years of age. If they persist beyond this age, surgery is recommended." },
            { q: "Is pediatric hernia repair urgent?", a: "Yes, a hernia requires elective surgery soon after diagnosis to prevent incarceration (where the bowel gets trapped)." },
            { q: "What does the surgery (herniotomy) involve?", a: "It is a daycare procedure involving a small groin incision to close the open passage. No mesh is used in pediatric hernia repairs." },
            { q: "Can hernia repair be performed laparoscopically?", a: "Yes, laparoscopic herniotomy is highly effective, allowing the surgeon to inspect the opposite side for a silent hernia." },
            { q: "What is the recovery time for a child after hernia surgery?", a: "Most children recover within 24 to 48 hours, though strenuous physical play should be limited for about a week." },
            { q: "Is there any risk of recurrence?", a: "The recurrence rate after a pediatric herniotomy is very low (less than 1%) when performed by an expert pediatric surgeon." }
        ]
    },
    'service-hirschsprung.html': {
        subtext: "Minimally invasive pull-through surgery restores normal bowel passage for your child. Schedule a consultation today.",
        faqs: [
            { q: "What is Hirschsprung Disease?", a: "It is a congenital condition where nerve cells (ganglion cells) are missing from parts of the intestine, causing severe constipation or bowel blockage." },
            { q: "When does Hirschsprung disease usually present?", a: "It usually presents in newborns who fail to pass meconium (first stool) within the first 24 to 48 hours of life." },
            { q: "What is a pull-through surgery?", a: "It is the definitive surgery where the diseased segment of the colon without nerve cells is removed, and the healthy colon is pulled down to the anus." },
            { q: "Can this surgery be performed laparoscopically?", a: "Yes, laparoscopic-assisted pull-through is the modern standard, avoiding large abdominal incisions and reducing recovery time." },
            { q: "Is a temporary stoma always required?", a: "Not always. Many babies can undergo a primary one-stage pull-through without needing a temporary colostomy." },
            { q: "What is Hirschsprung-associated enterocolitis (HAEC)?", a: "It is a serious bowel infection that can occur before or after surgery, presenting with fever, abdominal swelling, and foul-smelling diarrhea. It requires urgent medical care." },
            { q: "Will my child have normal bowel habits after pull-through surgery?", a: "Most children achieve normal bowel function, though some may experience temporary constipation or incontinence during potty training years." }
        ]
    },
    'service-hydronephrosis.html': {
        subtext: "Early diagnosis and treatment of hydronephrosis is key to saving kidney function. Schedule a consultation today.",
        faqs: [
            { q: "What is hydronephrosis?", a: "Hydronephrosis is the swelling of one or both kidneys due to a buildup of urine, often caused by a blockage in the urinary tract." },
            { q: "Does antenatal hydronephrosis always require surgery after birth?", a: "No, many cases of hydronephrosis detected on pregnancy scans resolve spontaneously and only require ultrasound monitoring and antibiotic prophylaxis." },
            { q: "What is the most common cause of hydronephrosis in children?", a: "Pelviureteric Junction Obstruction (PUJO) is the most common cause, where the junction between the kidney and ureter is narrowed." },
            { q: "How is hydronephrosis evaluated?", a: "Evaluation is done using postnatal ultrasound and a kidney scan (DTPA or MAG3) to measure kidney drainage and function." },
            { q: "When is surgery (pyeloplasty) indicated?", a: "Surgery is indicated if there is a significant blockage, deterioration of kidney function, recurrent pain, or infections." },
            { q: "What is a pyeloplasty?", a: "It is a surgical procedure to remove the blocked segment and reconnect the ureter to the kidney pelvis. It is highly successful." },
            { q: "Can pyeloplasty be performed laparoscopically or robotically?", a: "Yes, minimally invasive laparoscopic or robotic pyeloplasty is standard, providing excellent results and quick recovery." }
        ]
    },
    'service-hypospadias.html': {
        subtext: "Advanced single-stage hypospadias reconstruction restores function and appearance. Schedule a consultation today.",
        faqs: [
            { q: "What is Hypospadias?", a: "It is a congenital condition where the urinary opening is on the underside of the penis rather than at the tip." },
            { q: "What is the ideal age for hypospadias surgery?", a: "The ideal age for surgery is between 6 months and 18 months, before the child starts potty training." },
            { q: "Is circumcision recommended for a baby with hypospadias?", a: "No, circumcision should not be performed because the foreskin tissue is often needed by the surgeon to reconstruct the urethra." },
            { q: "What is chordee, and how is it treated?", a: "Chordee is a downward curvature of the penis often associated with hypospadias. It is corrected during the same surgical procedure." },
            { q: "How long is a urinary catheter left in place after surgery?", a: "A small, soft catheter is typically left in place for 7 to 10 days to allow the newly reconstructed urethra to heal." },
            { q: "What are the main complications of hypospadias surgery?", a: "The most common complications are urethrocutaneous fistula (a small leak) and urethral stricture, which can be repaired if they occur." },
            { q: "Will my child have normal sexual function and fertility in the future?", a: "Yes, successful repair of hypospadias restores a straight penis and normal urinary stream, preserving normal sexual function and fertility." }
        ]
    },
    'service-neuropathic-bladder.html': {
        subtext: "Early management of neuropathic bladder protects the kidneys and achieves dryness. Schedule a consultation today.",
        faqs: [
            { q: "What is a neuropathic bladder?", a: "It is a bladder dysfunction caused by nerve damage, common in children with spina bifida, spinal cord injuries, or sacral agenesis." },
            { q: "What are the risks of untreated neuropathic bladder?", a: "Untreated neuropathic bladder can lead to high bladder pressures, kidney damage (hydronephrosis), and recurrent kidney infections." },
            { q: "What is Clean Intermittent Catheterization (CIC)?", a: "CIC is a safe and painless procedure where a small tube is inserted into the bladder regularly to empty it completely, reducing pressure and infection risks." },
            { q: "What medications are used for neuropathic bladder?", a: "Anticholinergic medications are often prescribed to relax the bladder muscle, decrease bladder pressure, and increase capacity." },
            { q: "When is bladder augmentation surgery required?", a: "Augmentation is required if medication and CIC fail to control high bladder pressure, using a piece of bowel to enlarge the bladder." },
            { q: "What is a Mitrofanoff procedure?", a: "It is a surgical creation of a small channel between the bladder and abdominal wall (often using the appendix) for easy catheterization." },
            { q: "Can a child with a neuropathic bladder achieve dryness?", a: "Yes, with a combination of CIC, medication, and timely surgery, most children can achieve complete social dryness and protect their kidneys." }
        ]
    },
    'service-paediatric-gi.html': {
        subtext: "Expert GI reconstruction corrects congenital anomalies and restores digestive health. Schedule a consultation today.",
        faqs: [
            { q: "What conditions are treated by pediatric GI surgeons?", a: "Pediatric GI surgery manages congenital anomalies and acquired diseases of the esophagus, stomach, intestines, liver, and biliary system." },
            { q: "What is gastroesophageal reflux (GERD) surgery in children?", a: "Surgery (Nissen Fundoplication) is performed to wrap the top of the stomach around the lower esophagus, preventing reflux when medical therapy fails." },
            { q: "How are intestinal obstructions in newborns diagnosed?", a: "They are diagnosed via X-rays, contrast studies, and clinical symptoms like green (bilious) vomiting and abdominal distension." },
            { q: "What is laparoscopic GI surgery?", a: "It is a minimally invasive approach using keyhole incisions to perform procedures like fundoplication, splenectomy, and bowel resections." },
            { q: "How is recovery managed after major bowel surgery?", a: "Recovery includes specialized IV nutrition (TPN) if needed, pain management, and a gradual return to oral feeding as the bowel heals." },
            { q: "What is congenital pyloric stenosis?", a: "It is a narrowing of the stomach outlet in infants, causing projectile vomiting, cured by a simple surgical procedure (pyloromyotomy)." },
            { q: "Will my child have long-term digestive problems after GI surgery?", a: "Most children recover completely and grow normally as the intestine adapts remarkably well after reconstruction." }
        ]
    },
    'service-pediatric-gi-surgery.html': {
        subtext: "Congenital gastrointestinal conditions are treated with high success using modern methods. Schedule a consultation today.",
        faqs: [
            { q: "What conditions are treated by pediatric GI surgeons?", a: "Pediatric GI surgery manages congenital anomalies and acquired diseases of the esophagus, stomach, intestines, liver, and biliary system." },
            { q: "What is gastroesophageal reflux (GERD) surgery in children?", a: "Surgery (Nissen Fundoplication) is performed to wrap the top of the stomach around the lower esophagus, preventing reflux when medical therapy fails." },
            { q: "How are intestinal obstructions in newborns diagnosed?", a: "They are diagnosed via X-rays, contrast studies, and clinical symptoms like green (bilious) vomiting and abdominal distension." },
            { q: "What is laparoscopic GI surgery?", a: "It is a minimally invasive approach using keyhole incisions to perform procedures like fundoplication, splenectomy, and bowel resections." },
            { q: "How is recovery managed after major bowel surgery?", a: "Recovery includes specialized IV nutrition (TPN) if needed, pain management, and a gradual return to oral feeding as the bowel heals." },
            { q: "What is congenital pyloric stenosis?", a: "It is a narrowing of the stomach outlet in infants, causing projectile vomiting, cured by a simple surgical procedure (pyloromyotomy)." },
            { q: "Will my child have long-term digestive problems after GI surgery?", a: "Most children recover completely and grow normally as the intestine adapts remarkably well after reconstruction." }
        ]
    },
    'service-pediatric-oncosurgery.html': {
        subtext: "Comprehensive surgical care for pediatric solid tumors offers the best chance of cure. Schedule a consultation today.",
        faqs: [
            { q: "What is the role of surgery in pediatric cancer?", a: "Surgery is used for biopsy, complete removal of solid tumors, and placement of chemotherapy access devices (ports)." },
            { q: "What are the most common solid tumors in children?", a: "Wilms tumor (kidney), Neuroblastoma (adrenal/nerve tissue), Hepatoblastoma (liver), and rhabdomyosarcoma are the most common." },
            { q: "Is chemotherapy given before or after tumor surgery?", a: "It depends on the tumor type. Often, chemotherapy is given first (neoadjuvant) to shrink the tumor and make surgical removal safer." },
            { q: "What is a chemo port?", a: "A chemo port is a small device placed under the skin to allow safe and painless administration of chemotherapy and blood draws." },
            { q: "Can organ preservation be achieved during tumor removal?", a: "Yes, whenever oncologically safe, modern techniques focus on preserving normal organ function and adjacent vital structures." },
            { q: "How long is the recovery period after major tumor surgery?", a: "Typically, children stay in the hospital for 5 to 7 days, with chemotherapy resuming once the surgical incisions are fully healed." },
            { q: "What long-term surveillance is required after cancer surgery?", a: "Regular check-ups with scans (CT/MRI/Ultrasound) and blood tests are scheduled to monitor for recurrence and support healthy growth." }
        ]
    },
    'service-pediatric-robotic-surgery.html': {
        subtext: "Minimally invasive robotic surgery offers unmatched precision and rapid recovery. Schedule a consultation today.",
        faqs: [
            { q: "Is robotic surgery safe for infants and small children?", a: "Yes, robotic surgery is highly safe and precise, using specialized micro-instruments designed specifically for pediatric anatomy." },
            { q: "What are the main advantages of robotic-assisted surgery?", a: "It offers 3D high-definition visualization, 360-degree instrument articulation, greater precision, smaller scars, and faster recovery." },
            { q: "Which pediatric procedures are commonly performed robotically?", a: "Pyeloplasty for hydronephrosis, ureteral reimplantation for VUR, adrenalectomy, and choledochal cyst excision are commonly performed." },
            { q: "Does the robot perform the surgery automatically?", a: "No, the surgeon is in complete control of the robotic arms at all times, translating their hand movements into precise micro-actions." },
            { q: "How small are the incisions in robotic surgery?", a: "The incisions are keyhole-sized, typically ranging between 5mm to 8mm, resulting in minimal post-operative discomfort." },
            { q: "What is the recovery time after robotic pyeloplasty?", a: "Most children can go home within 24 to 48 hours and return to light activities in a few days." },
            { q: "Is robotic surgery covered by health insurance?", a: "Most major health insurance policies cover robotic-assisted procedures in the same way they cover traditional laparoscopic surgeries." }
        ]
    },
    'service-pediatric-stone-disease.html': {
        subtext: "Stitchless endourology and laser therapy safely clear pediatric kidney stones. Schedule a consultation today.",
        faqs: [
            { q: "Are kidney stones common in children?", a: "Kidney stones are less common in children than adults, but their incidence is rising due to dietary factors and metabolic abnormalities." },
            { q: "What are the symptoms of kidney stones in a child?", a: "Symptoms include severe flank or abdominal pain, blood in the urine (hematuria), nausea, vomiting, and recurrent UTIs." },
            { q: "What is PCNL (Percutaneous Nephrolithotomy) in children?", a: "PCNL is a minimally invasive procedure where a small scope is inserted through a tiny back incision to break and remove large kidney stones." },
            { q: "What is Mini-PCNL?", a: "Mini-PCNL uses ultra-thin instruments (miniaturized scopes) designed specifically to perform safe stone removal in infants and young children." },
            { q: "What is RIRS (Retrograde Intrarenal Surgery)?", a: "RIRS is a stitchless procedure where a flexible laser scope is passed through the urethra into the kidney to dust stones." },
            { q: "How can recurrent kidney stones be prevented in children?", a: "Prevention involves a metabolic workup (24-hour urine test), increased fluid intake, reduced sodium diet, and specific medical therapy." },
            { q: "Is a stent left in the ureter after stone surgery?", a: "A temporary soft tube (DJ Stent) is often left in place for 1 to 2 weeks to ensure urine flows freely while the ureter heals." }
        ]
    },
    'service-pediatric-tumors.html': {
        subtext: "Expert multi-disciplinary surgical removal of solid tumors protects your child's growth. Schedule a consultation today.",
        faqs: [
            { q: "What is the role of surgery in pediatric cancer?", a: "Surgery is used for biopsy, complete removal of solid tumors, and placement of chemotherapy access devices (ports)." },
            { q: "What are the most common solid tumors in children?", a: "Wilms tumor (kidney), Neuroblastoma (adrenal/nerve tissue), Hepatoblastoma (liver), and rhabdomyosarcoma are the most common." },
            { q: "Is chemotherapy given before or after tumor surgery?", a: "It depends on the tumor type. Often, chemotherapy is given first (neoadjuvant) to shrink the tumor and make surgical removal safer." },
            { q: "What is a chemo port?", a: "A chemo port is a small device placed under the skin to allow safe and painless administration of chemotherapy and blood draws." },
            { q: "Can organ preservation be achieved during tumor removal?", a: "Yes, whenever oncologically safe, modern techniques focus on preserving normal organ function and adjacent vital structures." },
            { q: "How long is the recovery period after major tumor surgery?", a: "Typically, children stay in the hospital for 5 to 7 days, with chemotherapy resuming once the surgical incisions are fully healed." },
            { q: "What long-term surveillance is required after cancer surgery?", a: "Regular check-ups with scans (CT/MRI/Ultrasound) and blood tests are scheduled to monitor for recurrence and support healthy growth." }
        ]
    },
    'service-pediatric-urodynamics.html': {
        subtext: "Urodynamic studies provide critical insights into bladder storage and pressure. Schedule a consultation today.",
        faqs: [
            { q: "What is a pediatric urodynamic study (UDS)?", a: "It is a series of tests that evaluate how well your child's bladder fills, stores, and empties urine." },
            { q: "Which children need a urodynamic study?", a: "Children with neuropathic bladder, spina bifida, posterior urethral valves, unexplained wetting, or recurrent UTIs benefit from UDS." },
            { q: "Is the urodynamic study painful?", a: "It is generally not painful, though placing the tiny catheter can cause temporary mild discomfort. Children are supported throughout the test." },
            { q: "How long does a urodynamic test take?", a: "The test typically takes about 45 to 60 minutes to complete in a comfortable, child-friendly environment." },
            { q: "Does the study require general anesthesia?", a: "No, the study is performed while the child is awake to obtain accurate measurements of bladder sensation and muscle activity." },
            { q: "What preparation is required before the test?", a: "The child should not have an active UTI. A stool cleanout is often recommended the night before to ensure the rectum is empty." },
            { q: "What information does the study provide to the doctor?", a: "It measures bladder capacity, pressure inside the bladder, flow rate, and pelvic floor muscle activity during urination." }
        ]
    },
    'service-phimosis.html': {
        subtext: "Physiological tightness is normal, but pathological phimosis requires expert care. Schedule a consultation today.",
        faqs: [
            { q: "Is a tight foreskin normal in infant boys?", a: "Yes, physiological phimosis (non-retractile foreskin) is completely normal in newborns and infants, resolving naturally in most boys by age 3 to 5." },
            { q: "When does phimosis require medical treatment?", a: "Treatment is needed if there is pain during urination, foreskin ballooning, recurrent foreskin infections (balanitis), or BXO (scarring)." },
            { q: "What is the first-line non-surgical treatment for phimosis?", a: "Application of a topical steroid cream combined with gentle, non-forced retraction exercises is highly successful." },
            { q: "What is BXO (Balanitis Xerotica Obliterans)?", a: "BXO is a chronic inflammatory skin condition that causes white, scarred tissue at the tip of the foreskin, requiring circumcision." },
            { q: "Is circumcision the only surgical option?", a: "No, in some cases, a conservative procedure called preputioplasty can be performed to widen the foreskin opening without removing it." },
            { q: "Is pediatric circumcision performed as a daycare procedure?", a: "Yes, it is a safe daycare procedure under short general anesthesia, and the child can go home the same day." },
            { q: "What is the recovery process after circumcision?", a: "Complete healing takes about 7 to 10 days. Petroleum jelly is applied to the site, and loose clothing is recommended." }
        ]
    },
    'service-pujo.html': {
        subtext: "Laparoscopic pyeloplasty is highly successful in relieving PUJ obstruction. Schedule a consultation today.",
        faqs: [
            { q: "What is PUJO (Pelviureteric Junction Obstruction)?", a: "It is a narrowing at the junction where the renal pelvis connects to the ureter, blocking urine flow out of the kidney." },
            { q: "What are the long-term risks of untreated PUJO?", a: "Untreated severe PUJO can cause progressive loss of kidney function, chronic kidney pain, and kidney stone formation." },
            { q: "What is a pyeloplasty surgery?", a: "It is the surgical correction of PUJO, where the narrowed junction is excised and the wide ureter is reconnected to the kidney." },
            { q: "Can pyeloplasty be performed laparoscopically?", a: "Yes, laparoscopic pyeloplasty is highly successful, offering minimal scarring and a shorter hospital stay." },
            { q: "What is the purpose of a DJ stent in PUJO surgery?", a: "A temporary double-J stent is placed inside the ureter to keep it open and protect the repair during early healing." },
            { q: "How is the DJ stent removed?", a: "The stent is removed 4 to 6 weeks later via a simple, quick cystoscopy procedure under light sedation." },
            { q: "What is the success rate of pyeloplasty?", a: "The success rate of pyeloplasty is extremely high, exceeding 95% in restoring normal drainage and preserving kidney function." }
        ]
    },
    'service-puv.html': {
        subtext: "Endoscopic valve ablation relieves bladder obstruction and protects renal health. Schedule a consultation today.",
        faqs: [
            { q: "What are Posterior Urethral Valves (PUV)?", a: "PUV is a congenital condition in boys where abnormal flaps of tissue in the urethra block urine flow from the bladder." },
            { q: "How is PUV diagnosed?", a: "It is often suspected on antenatal ultrasound showing a dilated bladder, and confirmed after birth via a Micturating Cystourethrogram (MCUG)." },
            { q: "What is the immediate treatment for PUV after birth?", a: "The initial treatment is bladder drainage using a catheter, followed by endoscopic valve ablation (removal of the flaps)." },
            { q: "What is endoscopic valve ablation?", a: "It is a minimally invasive procedure where a small cystoscope is passed into the urethra to cauterize or cut the valve tissue." },
            { q: "Can PUV cause long-term kidney issues?", a: "Yes, PUV boys require lifelong kidney monitoring as the backpressure can cause chronic kidney disease and bladder dysfunction." },
            { q: "What is a vesicostomy?", a: "If a newborn is too small for endoscopic scopes, a temporary surgical opening (vesicostomy) is made to drain urine directly from the bladder." },
            { q: "Will my child have normal bladder control?", a: "Many PUV boys experience delayed bladder control or 'valve bladder' syndrome, which is managed with medication and bladder training." }
        ]
    },
    'service-renal-tumor.html': {
        subtext: "Surgical resection of Wilms tumor is highly effective and saves lives. Schedule a consultation today.",
        faqs: [
            { q: "Are renal tumors in children common?", a: "Renal tumors, primarily Wilms tumors (nephroblastoma), account for about 5% of all childhood cancers and are highly treatable." },
            { q: "What are the common symptoms of a Wilms tumor?", a: "The most common symptom is a painless, firm swelling or lump in the abdomen, sometimes accompanied by blood in the urine, fever, or high blood pressure." },
            { q: "Is the entire kidney removed during Wilms tumor surgery?", a: "Yes, in most cases, a complete nephrectomy (removal of the affected kidney and tumor) is performed, while protecting the opposite healthy kidney." },
            { q: "What is the role of chemotherapy in Wilms tumor treatment?", a: "Chemotherapy is almost always part of the treatment, used either before surgery to shrink the tumor or after surgery to clear any remaining cells." },
            { q: "Can a child lead a normal life with only one kidney?", a: "Yes, a single healthy kidney grows larger and functions perfectly, allowing the child to lead a completely normal, active life without restrictions." },
            { q: "What is the survival/cure rate for Wilms tumor?", a: "With modern multi-disciplinary treatment (surgery and chemotherapy), the cure rate for Wilms tumor is excellent, exceeding 90%." },
            { q: "What long-term follow-up is necessary?", a: "Regular follow-up with abdominal ultrasounds, chest X-rays, and blood tests is scheduled to monitor kidney function and ensure no recurrence." }
        ]
    },
    'service-thoracoscopic-surgery.html': {
        subtext: "Keyhole chest surgery avoids muscle damage and leads to quick recovery. Schedule a consultation today.",
        faqs: [
            { q: "What is thoracoscopic surgery in children?", a: "It is a minimally invasive chest surgery using keyhole incisions to treat lung, pleural, and esophageal conditions." },
            { q: "Is it safe for infants?", a: "Yes, specialized ultra-thin scopes are safe and effective even in newborns for congenital lung lesions." },
            { q: "What chest conditions are treated thoracoscopically?", a: "Empyema drainage, lung biopsies, congenital lung malformations (CPAM), and mediastinal tumor removals." },
            { q: "How long is the recovery?", a: "Children experience much less pain than open thoracotomy, returning home within 2 to 4 days." },
            { q: "Are chest tubes needed?", a: "A temporary chest tube is often left for 1 to 2 days to drain fluid and air." },
            { q: "What are the main benefits?", a: "Minimal pain, avoided shoulder muscle damage, and virtually invisible scars." },
            { q: "When can a child return to school?", a: "Most children can resume school and light activities within 1 to 2 weeks." }
        ]
    },
    'service-undescended-testis.html': {
        subtext: "Timely orchidopexy preserves testicular cells and future fertility. Schedule a consultation today.",
        faqs: [
            { q: "At what age should an undescended testis be operated?", a: "Surgery (orchidopexy) is recommended between 6 months and 1 year of age to preserve germ cells and future fertility." },
            { q: "What investigations are required for a non-palpable testis?", a: "Diagnostic laparoscopy is the gold standard, as ultrasound and MRI cannot confirm with certainty whether a testis is absent." },
            { q: "Can hormone injections bring the testis down?", a: "Hormone therapy (like HCG) has a very low success rate and is no longer recommended in modern pediatric urology." },
            { q: "Is a laparoscopic orchidopexy performed as a daycare procedure?", a: "Yes, laparoscopic orchidopexy is routinely performed as a daycare procedure, and the child can go home the same day." },
            { q: "What if the testicle is found to be vanished or atrophic?", a: "If diagnostic laparoscopy reveals a blind-ending vessel or atrophic tissue, the non-functional tissue is removed, and a cosmetic prosthesis can be placed later during puberty." },
            { q: "What is the recovery time after laparoscopic orchidopexy?", a: "Most infants recover quickly and are active the same day. Vigorous play and stridulent toys (like straddling bicycles) should be avoided for 2 weeks." },
            { q: "Does having one absent or undescended testis affect future fertility?", a: "With timely surgical descent of the other testis, fertility rates are generally normal or near-normal. Prompt surgery minimizes the risk." }
        ]
    },
    'service-uti.html': {
        subtext: "Early identification and treatment of UTIs prevents long-term kidney scarring. Schedule a consultation today.",
        faqs: [
            { q: "What are the common symptoms of a UTI in young children?", a: "Symptoms in young children include unexplained fever, irritability, vomiting, poor feeding, strong-smelling urine, or pain during urination." },
            { q: "Why do some children get recurrent UTIs?", a: "Recurrent UTIs are often linked to structural issues like Vesicoureteric Reflux (VUR), PUJO, bowel habits (constipation), or bladder holding." },
            { q: "How is a UTI diagnosed in children?", a: "Diagnosis requires a clean-catch or catheterized urine sample for routine analysis and culture to identify the specific bacteria." },
            { q: "What investigations are needed after a child's first UTI?", a: "Common tests include an ultrasound of the kidneys/bladder and sometimes a contrast scan (MCUG/VCUG) to check for reflux." },
            { q: "Can untreated UTIs cause long-term damage?", a: "Yes, untreated or repeated kidney infections can lead to permanent kidney scarring, high blood pressure, and impaired kidney function." },
            { q: "What is the STING procedure for UTI/Reflux?", a: "It is a minimally invasive daycare procedure where a gel (Deflux) is injected under the ureteric opening to stop backward urine flow." },
            { q: "How can parents help prevent UTIs in their children?", a: "Ensure adequate fluid intake, encourage complete bladder emptying every 3 hours, avoid bubble baths, and aggressively manage constipation." }
        ]
    },
    'service-vesicoureteric-reflux.html': {
        subtext: "Endoscopic STING injections and robotic reimplantation offer high cure rates for VUR. Schedule a consultation today.",
        faqs: [
            { q: "What is Vesicoureteric Reflux (VUR)?", a: "VUR is a condition where urine flows backward from the bladder up into the ureters and kidneys, increasing infection risks." },
            { q: "How is VUR graded?", a: "VUR is graded from Grade I (mild reflux into ureter only) to Grade V (severe reflux with dilation of the ureter and kidney)." },
            { q: "Does VUR always require surgery?", a: "No, lower grades (I-III) often resolve spontaneously as the child grows. They are managed with low-dose prophylactic antibiotics." },
            { q: "What is the endoscopic STING procedure?", a: "It is a daycare procedure where a bulking agent (like Deflux) is injected under the ureteric opening to prevent backflow." },
            { q: "When is open or robotic ureteral reimplantation surgery needed?", a: "It is needed for high-grade reflux, failure of endoscopic treatment, or breakthrough kidney infections." },
            { q: "What is ureteral reimplantation?", a: "It is a surgical procedure to change the path of the ureters into the bladder wall to create a functional one-way valve." },
            { q: "Can VUR cause kidney damage?", a: "Yes, recurrent UTIs associated with untreated VUR can lead to renal scarring, high blood pressure, and impaired kidney function." }
        ]
    },
    'service-voiding-dysfunction.html': {
        subtext: "Bladder rehabilitation and biofeedback successfully cure daytime wetting and urgency. Schedule a consultation today.",
        faqs: [
            { q: "What is pediatric voiding dysfunction?", a: "It is an abnormal bladder emptying pattern in a toilet-trained child, causing wetting, urgency, or urinary retention." },
            { q: "What causes voiding dysfunction in children?", a: "It is commonly caused by poor toilet habits, holding urine too long, pelvic floor muscle incoordination, and chronic constipation." },
            { q: "How is voiding dysfunction diagnosed?", a: "Diagnosis is based on a voiding diary, uroflowmetry test, bladder ultrasound scans, and sometimes urodynamics." },
            { q: "What is the link between constipation and bladder wetting?", a: "A full rectum presses against the bladder, reducing its capacity and causing bladder muscle contractions, leading to wetting." },
            { q: "What is uroflowmetry?", a: "It is a non-invasive test where the child voids into a special toilet to measure urine flow rate and pattern." },
            { q: "What does bladder rehabilitation/training involve?", a: "It involves timed voiding (every 2-3 hours), proper posture, biofeedback, high-fiber diet, and treating constipation." },
            { q: "Are medications used to treat bladder wetting?", a: "Yes, medications like anticholinergics or desmopressin are sometimes used alongside bladder training for symptom control." }
        ]
    }
};

Object.keys(faqDatabase).forEach(file => {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) {
        console.log(`Skipping ${file} - does not exist.`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    const data = faqDatabase[file];

    // Generate FAQ Section HTML
    let faqItemsHtml = '';
    data.faqs.forEach(faq => {
        faqItemsHtml += `
                <div class="faq-item">
                    <div class="faq-header">
                        <h5>${faq.q}</h5>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>${faq.a}</p>
                    </div>
                </div>`;
    });

    const newFaqAndContactHtml = `    <!-- FAQ -->
    <section class="section bg-light" id="faq">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Common Queries</h4>
                <h2>Frequently Asked Questions</h2>
            </div>
            
            <div class="faq-accordion fade-in-up mt-5">
${faqItemsHtml}
            </div>
        </div>
    </section>

    <!-- Appointment -->
    <section class="section contact-section" id="contact">
        <div class="container">
            <div class="grid-2 align-items-center">
                <div class="contact-form-wrapper card fade-in-up">
                    <div class="section-title text-left mb-4">
                        <h4 class="accent-text">Get in Touch</h4>
                        <h2 style="margin-bottom:0.5rem">Book an Appointment</h2>
                        <p>${data.subtext}</p>
                    </div>
                    
                    <form action="#" class="contact-form">
                        <div class="form-group mb-3">
                            <input type="text" placeholder="Parent's Name" class="form-control" required>
                        </div>
                        <div class="form-group grid-2" style="gap:1rem; margin-bottom: 1rem;">
                            <input type="tel" placeholder="Contact Number" class="form-control" required>
                            <input type="email" placeholder="Email Address" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <textarea placeholder="Tell us about your child's condition" rows="4" class="form-control" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Request Call Back</button>
                    </form>
                </div>
                
                <div class="map-wrapper fade-in-up" style="animation-delay: 0.2s">
                    <div class="contact-info-bubbles">
                        <div class="bubble">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h5>Clinic Address</h5>
                                <p>D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057</p>
                            </div>
                        </div>
                        <div class="bubble mt-3">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <h5>Call for Emergency</h5>
                                <p>+91 98732 06761</p>
                            </div>
                        </div>
                        <div class="bubble mt-3">
                            <i class="fab fa-google"></i>
                            <div>
                                <h5>Google Profile</h5>
                                <p><a href="https://share.google/ZDYFDGzk371tPER2n" target="_blank" style="color:var(--primary-blue); font-weight:600;">View Profile & Reviews</a></p>
                            </div>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.320839107355!2d77.1648039!3d28.5601269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3fef8d5f005%3A0xd080c4b0d8a5754!2sDr%20Sujit%20Chowdhary%3A%20Robotic%20Pediatric%20Urologist%2F%20Surgeon%20in%20Delhi%2C%20India%20%7C%20Neuropathic%20Bladder%2C%20Urinary%20Stone%2C%20Hydronephrosis!5e0!3m2!1sen!2sin!4v1780577721558!5m2!1sen!2sin" width="100%" height="300" style="border:0; border-radius:var(--radius-md);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
\n`;

    const regex = /<section class="section bg-light" id="faq">[\s\S]*?(?=<!-- Footer -->|<footer)/i;
    
    if (regex.test(content)) {
        content = content.replace(regex, newFaqAndContactHtml);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated FAQs & Appointment in ${file}`);
    } else {
        console.log(`Error: FAQ section match failed in ${file}`);
    }
});

console.log("Successfully completed updates on all 28 service pages.");
