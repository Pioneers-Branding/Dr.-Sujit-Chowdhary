const fs = require('fs');

const templateSrc = fs.readFileSync('about.html', 'utf8');

// Extract Header and Footer
// The header includes from <!DOCTYPE html> down to <header>...</header>
const headerRegex = /([\s\S]*?)<div class="page-header">/;
const headerMatch = templateSrc.match(headerRegex);
const headerContent = headerMatch ? headerMatch[1] : '';

const footerRegex = /(<!-- Footer -->[\s\S]*)/;
const footerMatch = templateSrc.match(footerRegex);
const footerContent = footerMatch ? footerMatch[1] : '';

// -------------------------------------
// 1. Generate International Patients Page
// -------------------------------------
const intlContent = `
    <div class="page-header">
        <div class="container fade-in-up">
            <h1>International Patients</h1>
            <div class="breadcrumb">
                <a href="index.html">Home</a> <span>/</span> <span>International Patients</span>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="grid-2 align-items-center">
                <div class="fade-in-up">
                    <h4 class="accent-text">Seamless Healthcare Experience</h4>
                    <h2>World-Class Care, Far From Home</h2>
                    <p>Traveling across borders for medical treatment can be overwhelming. Dr. Sujit Chowdhary and his dedicated International Patient Support Team are committed to making your journey as smooth and comfortable as possible. From pre-arrival teleconsultations to your safe journey back home, we provide end-to-end assistance.</p>
                    <ul class="about-list mt-3">
                        <li><i class="fas fa-check-circle"></i> Medical Visa Assistance & Documentation</li>
                        <li><i class="fas fa-check-circle"></i> Airport Pick-up and Drop-off</li>
                        <li><i class="fas fa-check-circle"></i> Language Interpreters</li>
                        <li><i class="fas fa-check-circle"></i> Accommodation & Travel Planning</li>
                        <li><i class="fas fa-check-circle"></i> Multi-cuisine Dietary Support</li>
                    </ul>
                </div>
                <div class="fade-in-up" style="animation-delay: 0.2s">
                    <img src="assets/images/banner1.jpg" alt="International Patients" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-light">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Your Journey</h4>
                <h2>How It Works</h2>
            </div>
            <div class="grid-3 mt-5">
                <div class="process-step card fade-in-up">
                    <div class="step-number">01</div>
                    <h4>Online Consultation</h4>
                    <p>Share your medical reports with us. Dr. Chowdhary will review them and conduct a detailed video consultation to discuss the diagnosis, proposed treatment, and estimated costs.</p>
                </div>
                <div class="process-step card fade-in-up" style="animation-delay: 0.1s">
                    <div class="step-number">02</div>
                    <h4>Travel & Arrival</h4>
                    <p>Once you decide to proceed, we assist with your medical visa invitation letter. Upon arrival in New Delhi, our representative will receive you at the airport and transfer you to your accommodation.</p>
                </div>
                <div class="process-step card fade-in-up" style="animation-delay: 0.2s">
                    <div class="step-number">03</div>
                    <h4>Treatment & Care</h4>
                    <p>Your child will undergo treatment at our state-of-the-art JCI accredited facility. Post-surgery, we ensure comprehensive follow-up care until your child is fit to travel back.</p>
                </div>
            </div>
        </div>
    </section>
`;

let intlHtml = headerContent.replace(/<title>.*?<\/title>/, '<title>International Patients | Dr. Sujit Chowdhary</title>');
// Fix active state in navigation (if 'About' is active, remove it)
intlHtml = intlHtml.replace(/<a href="about.html" class="active">/, '<a href="about.html">');

fs.writeFileSync('international-patients.html', intlHtml + intlContent + footerContent);
console.log("Created international-patients.html");

// -------------------------------------
// 2. Generate Blog Page
// -------------------------------------
const blogContent = `
    <div class="page-header">
        <div class="container fade-in-up">
            <h1>Our Blog & Insights</h1>
            <div class="breadcrumb">
                <a href="index.html">Home</a> <span>/</span> <span>Blog</span>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Latest Articles</h4>
                <h2>Pediatric Health Insights</h2>
                <p style="max-width: 600px; margin: 15px auto; text-align: center;">Stay informed with the latest updates, medical advice, and research insights in the field of pediatric surgery and urology.</p>
            </div>
            
            <div class="grid-3 mt-5">
                <!-- Blog Card 1 -->
                <div class="card fade-in-up" style="padding: 0; overflow: hidden;">
                    <div style="background: #e9ecef; height: 200px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                        <i class="fas fa-image font-2xl"></i>
                    </div>
                    <div style="padding: 25px;">
                        <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.9rem;">Pediatric Urology</span>
                        <h3 class="mt-2" style="font-size: 1.3rem;">Understanding Hydronephrosis in Infants</h3>
                        <p class="mt-2" style="font-size: 0.95rem;">A comprehensive guide for parents to understand the causes, symptoms, and modern treatment options...</p>
                        <a href="#" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Blog Card 2 -->
                <div class="card fade-in-up" style="animation-delay: 0.1s; padding: 0; overflow: hidden;">
                    <div style="background: #e9ecef; height: 200px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                        <i class="fas fa-image font-2xl"></i>
                    </div>
                    <div style="padding: 25px;">
                        <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.9rem;">Surgical Advancements</span>
                        <h3 class="mt-2" style="font-size: 1.3rem;">The Benefits of Robotic Surgery in Pediatrics</h3>
                        <p class="mt-2" style="font-size: 0.95rem;">How robotic-assisted techniques are revolutionizing recovery times and precision in complex pediatric cases...</p>
                        <a href="#" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Blog Card 3 -->
                <div class="card fade-in-up" style="animation-delay: 0.2s; padding: 0; overflow: hidden;">
                    <div style="background: #e9ecef; height: 200px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                        <i class="fas fa-image font-2xl"></i>
                    </div>
                    <div style="padding: 25px;">
                        <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.9rem;">Patient Care</span>
                        <h3 class="mt-2" style="font-size: 1.3rem;">Post-Operative Care: What Parents Need to Know</h3>
                        <p class="mt-2" style="font-size: 0.95rem;">Essential tips and guidelines to ensure a smooth, safe, and comfortable recovery for your child at home...</p>
                        <a href="#" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5 fade-in-up">
                <a href="#" class="btn btn-primary">Load More Articles</a>
            </div>
        </div>
    </section>
`;

let blogHtml = headerContent.replace(/<title>.*?<\/title>/, '<title>Our Blog & Insights | Dr. Sujit Chowdhary</title>');
blogHtml = blogHtml.replace(/<a href="about.html" class="active">/, '<a href="about.html">');

fs.writeFileSync('blog.html', blogHtml + blogContent + footerContent);
console.log("Created blog.html");
