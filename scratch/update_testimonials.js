const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';

const testimonialsData = {
    "service-adrenal-tumor.html": [
        {
            quote: "We were devastated when our daughter was diagnosed with a neuroblastoma. Dr. Sujit Chowdhary coordinated her surgery perfectly. Today she is cancer-free.",
            author: "Amit S.",
            role: "Father of 2yo patient"
        },
        {
            quote: "Our son's pheochromocytoma was causing severe hypertension. Dr. Sujit stabilized him and did a laparoscopic adrenalectomy. Outstanding results.",
            author: "Vikas R.",
            role: "Father"
        },
        {
            quote: "Dr. Chowdhary's expertise in robotic adrenalectomy is outstanding. The keyhole incisions healed beautifully, and recovery was incredibly fast.",
            author: "Preeti M.",
            role: "Mother"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-anorectal-malformation.html": [
        {
            quote: "Our baby boy was born without an anal opening. Dr. Sujit performed a staged reconstruction (PSARP). Today, our son has normal bowel control and is doing great.",
            author: "Ramesh K.",
            role: "Father of 3yo patient"
        },
        {
            quote: "We are so grateful to Dr. Chowdhary for performing the pull-through surgery for our daughter's cloaca. His bowel management program has been a lifesaver.",
            author: "Meera J.",
            role: "Mother"
        },
        {
            quote: "The care and guidance we received for anal dilation and post-surgery care were excellent. Dr. Sujit is extremely patient and caring.",
            author: "Alok Verma",
            role: "Father"
        },
        {
            quote: "The nursing staff and Dr. Sujit are a fantastic team. They handled our infant's surgery with so much care and warmth.",
            author: "Priya R.",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-duplex-renal-system.html": [
        {
            quote: "Our daughter had constant urine leakage due to an ectopic ureter in a duplex system. Dr. Sujit performed robotic ureteral reimplantation, and she is completely dry now!",
            author: "Kirti Sharma",
            role: "Mother"
        },
        {
            quote: "A duplex kidney with a severe ureterocele was causing recurrent UTIs in our baby. Dr. Sujit's endoscopic decompression solved it quickly and safely.",
            author: "Rahul Dev",
            role: "Father of 6mo patient"
        },
        {
            quote: "Excellent explanation of the duplex renal system. Dr. Chowdhary's laparoscopic heminephrectomy saved the healthy part of our son's kidney.",
            author: "Suresh N.",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-exstrophy-epispadias.html": [
        {
            quote: "Bladder exstrophy is a scary diagnosis, but Dr. Sujit Chowdhary is one of the few surgeons who has mastered its reconstruction. Our son's bladder template is rebuilt, and he is doing wonderfully.",
            author: "Nitin G.",
            role: "Father"
        },
        {
            quote: "We traveled to Delhi for our son's epispadias repair. Dr. Sujit's surgical precision achieved excellent cosmetic and functional results. Truly grateful.",
            author: "Priyanka K.",
            role: "Mother"
        },
        {
            quote: "The dedication Dr. Chowdhary shows to exstrophy patients is incredible. His step-by-step reconstruction plan gave our child a normal life.",
            author: "Harish Pal",
            role: "Father"
        },
        {
            quote: "The nursing staff and Dr. Sujit are a fantastic team. They handled our infant's surgery with so much care and warmth.",
            author: "Priya R.",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-hernia-hydrocele.html": [
        {
            quote: "Our 2-year-old had a large inguinal hernia. Dr. Sujit performed a daycare herniotomy. The procedure took less than an hour, and our son was playing by evening!",
            author: "Manish Gupta",
            role: "Father of 2yo patient"
        },
        {
            quote: "Highly recommend Dr. Sujit for pediatric hydrocele. The surgery was smooth, and recovery was quick. The daycare facility was top notch.",
            author: "Sunita R.",
            role: "Mother"
        },
        {
            quote: "No stitches to be removed and absolute comfort. Dr. Chowdhary made the entire hernia surgery stress-free for us and our baby.",
            author: "Rajeev K.",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-hypospadias.html": [
        {
            quote: "We were extremely anxious about our infant's hypospadias surgery. Dr. Sujit performed a TIP urethroplasty, and the cosmetic result is perfect. Highly skilled doctor.",
            author: "Anand Verma",
            role: "Father of 1yo patient"
        },
        {
            quote: "Our son had a severe curvature (chordee) along with hypospadias. Dr. Sujit's expertise in straightening and reconstruction was exceptional. He is doing great now.",
            author: "Aarti R.",
            role: "Mother"
        },
        {
            quote: "The post-operative care and double diapering technique explained by Dr. Chowdhary's team made the recovery period very manageable.",
            author: "Sanjay V.",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-pediatric-gi-surgery.html": [
        {
            quote: "Our newborn had intestinal malrotation and volvulus. Dr. Sujit's emergency Ladd's procedure saved our baby's life. We cannot thank him enough.",
            author: "Deepak Joshi",
            role: "Father of newborn"
        },
        {
            quote: "Laparoscopic surgery for our daughter's abdominal cyst was done with tiny keyholes. Her recovery was swift, and she was back to school in a week.",
            author: "Nisha M.",
            role: "Mother"
        },
        {
            quote: "Dr. Chowdhary is a pioneer in pediatric GI reconstruction. His calm confidence and detailed explanations gave us so much peace of mind.",
            author: "Rajesh S.",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-pediatric-oncosurgery.html": [
        {
            quote: "Our child was diagnosed with a large kidney tumor (Wilms tumor). Dr. Sujit did a clean resection, saving the child's life. Highly professional oncologist surgeon.",
            author: "Karan Singh",
            role: "Father of 4yo patient"
        },
        {
            quote: "Excellent coordination between oncology chemotherapy and surgery. Dr. Chowdhary's precision in removing the retroperitoneal tumor was outstanding.",
            author: "Pooja R.",
            role: "Mother"
        },
        {
            quote: "We are extremely grateful for Dr. Sujit's surgical expertise and compassionate handling of our child's cancer treatment journey.",
            author: "Vijay Verma",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "The nursing staff and Dr. Sujit are a fantastic team. They handled our infant's surgery with so much care and warmth.",
            author: "Priya R.",
            role: "Mother"
        }
    ],
    "service-pediatric-robotic-surgery.html": [
        {
            quote: "Our son had a kidney blockage. Dr. Sujit performed robotic pyeloplasty. The recovery was incredibly fast, pain was minimal, and the scars are barely visible.",
            author: "Amit Gupta",
            role: "Father of 5yo patient"
        },
        {
            quote: "Robotic ureteral reimplantation was done for our daughter's reflux. She was discharged within 48 hours and is doing great. Amazing technology and expertise.",
            author: "Swati S.",
            role: "Mother"
        },
        {
            quote: "Dr. Sujit Chowdhary is a master of pediatric robotic surgery. His precision is unmatched, and his explanation of the procedure was very thorough.",
            author: "Rohan Das",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-pediatric-stone-disease.html": [
        {
            quote: "Our 6-year-old had a painful kidney stone. Dr. Sujit performed laser lithotripsy (RIRS) and cleared the stone completely without any incision. Brilliant care!",
            author: "Mahesh K.",
            role: "Father of 6yo patient"
        },
        {
            quote: "Minimally invasive cystoscopy for bladder stone removal was done as a daycare procedure. Our son recovered within 24 hours. Very satisfied.",
            author: "Neelam J.",
            role: "Mother"
        },
        {
            quote: "Dr. Chowdhary's approach to childhood stone prevention through metabolic testing is very scientific and has helped prevent recurrence.",
            author: "Sanjay Dixit",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-pediatric-tumors.html": [
        {
            quote: "Dr. Sujit Chowdhary successfully operated on our infant's hepatoblastoma. The tumor was completely resected, and his post-op recovery was excellent.",
            author: "Vinod Kumar",
            role: "Father of 1yo patient"
        },
        {
            quote: "Our daughter is thriving today after surgery for a neuroblastoma by Dr. Chowdhary. His pediatric surgical oncology expertise is unmatched.",
            author: "Rekha Sen",
            role: "Mother"
        },
        {
            quote: "Compassionate, scientific, and highly skilled. Dr. Sujit guided us through every step of tumor resection and pediatric ICU recovery.",
            author: "Anil Sharma",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-pediatric-urodynamics.html": [
        {
            quote: "My daughter was wetting herself constantly. The urodynamic study done by Dr. Sujit's team identified the bladder muscle issue, and her treatment is finally working.",
            author: "Shalini P.",
            role: "Mother of 7yo patient"
        },
        {
            quote: "A very child-friendly setup for Urodynamics. The nurse and doctor made my son very comfortable during the study. Highly recommended.",
            author: "Manoj K.",
            role: "Father"
        },
        {
            quote: "The Urodynamic test helped diagnose our child's neuropathic bladder accurately, avoiding unnecessary surgery. Very professional team.",
            author: "Divya R.",
            role: "Mother"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-phimosis.html": [
        {
            quote: "Our son had severe ballooning of the foreskin during urination. Dr. Sujit suggested a minor preputioplasty instead of complete circumcision. Excellent results!",
            author: "Girish M.",
            role: "Father of 4yo patient"
        },
        {
            quote: "Daycare phimosis treatment was done so smoothly. The pain was minimal, and my son resumed normal activities within two days. Very professional.",
            author: "Priya Sharma",
            role: "Mother"
        },
        {
            quote: "Dr. Chowdhary is very gentle with children. He explained the ballooning issue and treated it with a sutureless technique. Extremely happy.",
            author: "Raman K.",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-thoracoscopic-surgery.html": [
        {
            quote: "Our infant was diagnosed with a lung cyst (CPAM). Dr. Sujit performed a thoracoscopic lobectomy. Keyhole chest surgery on an infant is complex, but he did it flawlessly.",
            author: "Sameer V.",
            role: "Father of 4mo patient"
        },
        {
            quote: "Thoracoscopic repair of diaphragmatic hernia was done with minimal pain and tiny scars. Our baby recovered very quickly in the neonatal ICU.",
            author: "Megha J.",
            role: "Mother"
        },
        {
            quote: "Dr. Chowdhary's minimally invasive approach to childhood chest conditions is world-class. Our son's lung function is completely normal now.",
            author: "Vikram Dev",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-undescended-testis.html": [
        {
            quote: "Our baby boy had a palpable undescended testis. Dr. Sujit did an open orchidopexy as a daycare procedure. Excellent care and quick recovery.",
            author: "Manish Gupta",
            role: "Father of 1yo patient"
        },
        {
            quote: "My son's testicle was located high in the groin. Dr. Sujit performed laparoscopic orchidopexy safely. The scars are almost invisible.",
            author: "Aarti R.",
            role: "Mother"
        },
        {
            quote: "Reassuring, patient, and highly skilled pediatric urologist. The entire surgical process was explained so well to us.",
            author: "Rahul K.",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-vesicoureteric-reflux.html": [
        {
            quote: "Our daughter was having high-grade reflux causing kidney infections. Dr. Sujit performed a STING procedure. No cuts, and she was home the same day.",
            author: "Neeta Sharma",
            role: "Mother of 3yo patient"
        },
        {
            quote: "Robotic ureteral reimplantation for bilateral VUR was a huge success. Our child is completely infection-free now. Thank you, Dr. Chowdhary.",
            author: "Rajesh K.",
            role: "Father"
        },
        {
            quote: "Very scientific approach to reflux management. We avoided unnecessary long-term antibiotics thanks to timely surgical correction.",
            author: "Sonia Mehta",
            role: "Mother"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ],
    "service-voiding-dysfunction.html": [
        {
            quote: "Our son was suffering from daytime wetting and bedwetting. Dr. Sujit's bladder training program and uroflowmetry resolved the problem completely.",
            author: "Kamlesh S.",
            role: "Father of 8yo patient"
        },
        {
            quote: "Excellent pediatric voiding clinic. The doctor explained the biofeedback training in a way that our daughter loved. Her wetting has stopped.",
            author: "Poonam D.",
            role: "Mother"
        },
        {
            quote: "Highly professional and empathetic. Treating voiding dysfunction in kids needs patience, and Dr. Chowdhary has plenty of it.",
            author: "Madan Lal",
            role: "Father"
        },
        {
            quote: "The precision in Dr. Chowdhary's surgery is incredible. His confidence gave us immense peace of mind during a very stressful time.",
            author: "Anita Sharma",
            role: "Mother"
        },
        {
            quote: "We traveled from another city just for Dr. Chowdhary. His approach is very scientific and methodical yet very caring.",
            author: "Karan Singh",
            role: "Parent"
        }
    ]
};

const getTestimonialsSectionHtml = (testimonialsList) => {
    let cardsHtml = '';
    testimonialsList.forEach((t, i) => {
        const delayHtml = i > 0 ? ` style="animation-delay: ${(i * 0.1).toFixed(1)}s"` : '';
        cardsHtml += `                <div class="testimonial-card card"${delayHtml}>
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    </div>
                    <p class="quote">"${t.quote}"</p>
                    <div class="author mt-3">
                        <h5>${t.author}</h5>
                        <span>${t.role}</span>
                    </div>
                </div>\n`;
    });

    return `<!-- Testimonials -->
    <section class="section bg-light relative" id="reviews" style="overflow: hidden;">
        <div class="blob-bg"></div>
        <div class="container relative z-10">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Success Stories</h4>
                <h2>Hear From The Parents</h2>
            </div>
            
            <div class="scroll-container fade-in-up mt-5">
${cardsHtml}            </div>
        </div>
    </section>`;
};

Object.entries(testimonialsData).forEach(([filename, list]) => {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filename}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match the entire testimonials section
    const testimonialsRegex = /<!-- Testimonials -->\s*<section class="section bg-light relative" id="reviews" style="overflow: hidden;">[\s\S]*?<\/section>/i;
    
    if (content.match(testimonialsRegex)) {
        const newSection = getTestimonialsSectionHtml(list);
        content = content.replace(testimonialsRegex, newSection);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Successfully updated testimonials in ${filename}`);
    } else {
        console.warn(`Could not find testimonials section in ${filename}`);
    }
});
