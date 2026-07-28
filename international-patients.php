<?php
$page_title = 'International Patients | Dr. Sujit Chowdhary';
$meta_description = 'Learn more about Dr. Sujit Chowdhary, his experience, awards, and dedication to pediatric surgery.';
$current_page = 'intl';
$extra_head = <<<'EOD'
<style>
        .page-header { background: var(--gradient-primary); color: white; padding: 60px 0 30px; text-align: center; }
        .page-header h1 { color: white; margin-bottom: 10px; }
        .breadcrumb { display: flex; justify-content: center; gap: 10px; font-weight: 500; }
        .breadcrumb a { color: rgba(255,255,255,0.7); }
        .breadcrumb a:hover { color: white; }
    </style>
EOD;
?>
<!DOCTYPE html>
<html lang="en">
<?php include 'includes/head.php'; ?>
<body>

<?php include 'includes/header.php'; ?>

<!-- Page Header -->
    
    <div class="page-header">
        <div class="container fade-in-up">
            <h1>International Patients</h1>
            <div class="breadcrumb">
                <a href="index.php">Home</a> <span>/</span> <span>International Patients</span>
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
                    <p class="mt-3">Our internationally accredited facilities ensure your child receives the highest standard of pediatric surgical and urological care. We understand cultural nuances and strive to provide a "home away from home" environment, allowing you to focus entirely on your child's recovery.</p>
                    <ul class="about-list mt-3">
                        <li><i class="fas fa-check-circle"></i> Medical Visa Assistance & Documentation</li>
                        <li><i class="fas fa-check-circle"></i> Airport Pick-up and Drop-off</li>
                        <li><i class="fas fa-check-circle"></i> Language Interpreters</li>
                        <li><i class="fas fa-check-circle"></i> Accommodation & Travel Planning</li>
                        <li><i class="fas fa-check-circle"></i> Multi-cuisine Dietary Support</li>
                    </ul>
                </div>
                <div class="fade-in-up" style="animation-delay: 0.2s">
                    <img src="assets/images/doctor.jpeg" alt="Dr. Sujit Chowdhary" style="width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);">
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Our Facilities</h4>
                <h2>Dedicated International Desk</h2>
                <p style="max-width: 700px; text-align: center; margin: 15px auto;">We have a specialized unit dedicated solely to international guests, ensuring that every logistical and medical need is met with precision and empathy.</p>
            </div>
            <div class="grid-3 mt-5">
                <div class="card fade-in-up text-center">
                    <i class="fas fa-globe font-2xl" style="color: var(--secondary-teal); margin-bottom: 15px;"></i>
                    <h4>Global Standards</h4>
                    <p class="mt-2">Treatment protocols matching the best international pediatric hospitals, featuring advanced robotic and minimally invasive technology.</p>
                </div>
                <div class="card fade-in-up text-center" style="animation-delay: 0.1s">
                    <i class="fas fa-comments font-2xl" style="color: var(--secondary-teal); margin-bottom: 15px;"></i>
                    <h4>Multilingual Support</h4>
                    <p class="mt-2">Dedicated interpreters to bridge any communication gaps, ensuring you fully understand every aspect of the treatment plan.</p>
                </div>
                <div class="card fade-in-up text-center" style="animation-delay: 0.2s">
                    <i class="fas fa-hotel font-2xl" style="color: var(--secondary-teal); margin-bottom: 15px;"></i>
                    <h4>Comfortable Stay</h4>
                    <p class="mt-2">Partnered with nearby hotels and guest houses to offer comfortable, sanitized, and budget-friendly accommodation options for the family.</p>
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

    <!-- FAQ Section -->
    <section class="section faq-section bg-light" id="faq">
        <div class="container grid-2">
            <div class="faq-text fade-in-up">
                <h4 class="accent-text">Still have questions?</h4>
                <h2>Frequently Asked Questions</h2>
                <p>We understand traveling abroad for medical care can raise many questions. Here are some of the most common questions from our international families.</p>
                <a href="#appointment" class="btn btn-outline mt-3">Ask a Custom Question</a>
            </div>
            
            <div class="faq-accordion fade-in-up" style="animation-delay: 0.2s">
                <div class="faq-item">
                    <div class="faq-header">
                        <h5>Do you assist with Medical Visas?</h5>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>Yes. Once you have consulted with Dr. Chowdhary online and decided on a treatment plan, we will issue a formal Medical Visa Invitation Letter to help expedite your visa process at the Indian Embassy.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-header">
                        <h5>Can I get a cost estimate before traveling?</h5>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>Absolutely. After reviewing your child's medical reports through our online consultation, our team will provide you with a comprehensive and transparent cost estimate covering surgery, hospital stay, and other related expenses.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-header">
                        <h5>How long will we need to stay in India?</h5>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>The duration depends on the complexity of the procedure. For many minimally invasive surgeries, a stay of 1-2 weeks is sufficient. We will give you a clear timeline during your initial consultation so you can plan your travel accordingly.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-header">
                        <h5>Are language interpreters available?</h5>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>Yes, our dedicated international desk can arrange professional interpreters for Arabic, French, Russian, and many other languages to ensure clear and seamless communication throughout your stay.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-header">
                        <h5>What about food and accommodation?</h5>
                        <i class="fas fa-plus"></i>
                    </div>
                    <div class="faq-content">
                        <p>We partner with several nearby hotels, service apartments, and guest houses to suit various budgets. In the hospital, our dietary team accommodates multiple international cuisines and specific dietary requirements, including Halal meals.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact & Map -->
    <section class="section contact-section" id="appointment">
        <div class="container">
            <div class="grid-2 align-items-center">
                <div class="contact-form-wrapper card fade-in-up">
                    <div class="section-title text-left mb-4">
                        <h4 class="accent-text">International Desk</h4>
                        <h2 style="margin-bottom:0.5rem">Book an Appointment</h2>
                        <p>Send us your details and medical reports. Our international team will get back to you shortly.</p>
                    </div>
                    
                    <form action="includes/process-contact.php" method="POST" class="contact-form">
                    <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>
                        <div class="alert alert-success" style="background:#d4edda; color:#155724; padding: 12px 20px; border-radius:8px; margin-bottom:20px;">
                            <i class="fas fa-check-circle"></i> Thank you! Your request has been submitted successfully. We will get back to you shortly.
                        </div>
                    <?php endif; ?>
                        <div class="form-group mb-3">
                            <input type="text" placeholder="Patient Name" name="name" class="form-control" required>
                        </div>
                        <div class="form-group grid-2" style="gap:1rem; margin-bottom: 1rem;">
                            <input type="text" placeholder="Country" class="form-control" required>
                            <input type="tel" placeholder="WhatsApp Number" class="form-control" required name="phone">
                        </div>
                        <div class="form-group mb-3">
                            <input type="email" placeholder="Email Address" class="form-control" required name="email">
                        </div>
                        <div class="form-group mb-3">
                            <textarea placeholder="Describe the medical condition briefly..." rows="4" class="form-control" required name="message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Request Tele-Consultation</button>
                    </form>
                </div>
                
                <div class="map-wrapper fade-in-up" style="animation-delay: 0.2s">
                    <div class="contact-info-bubbles">
                        <div class="bubble">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h5>International Clinic Address</h5>
                                <p>D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057</p>
                            </div>
                        </div>
                        <div class="bubble mt-3">
                            <i class="fab fa-whatsapp"></i>
                            <div>
                                <h5>International Support Line</h5>
                                <p>+91 98732 06761 (Available 24/7)</p>
                            </div>
                        </div>

                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.320839107355!2d77.1648039!3d28.5601269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3fef8d5f005%3A0xd080c4b0d8a5754!2sDr%20Sujit%20Chowdhary%3A%20Robotic%20Pediatric%20Urologist%2F%20Surgeon%20in%20Delhi%2C%20India%20%7C%20Neuropathic%20Bladder%2C%20Urinary%20Stone%2C%20Hydronephrosis!5e0!3m2!1sen!2sin!4v1780577721558!5m2!1sen!2sin" width="100%" height="350" style="border:0; border-radius:var(--radius-md);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

<!-- Footer -->

<?php include 'includes/footer.php'; ?>
</body>
</html>
