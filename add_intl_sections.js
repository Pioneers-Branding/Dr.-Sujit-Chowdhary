const fs = require('fs');

const file = 'international-patients.html';
let content = fs.readFileSync(file, 'utf8');

const newSections = `
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
                    
                    <form action="#" class="contact-form">
                        <div class="form-group mb-3">
                            <input type="text" placeholder="Patient Name" class="form-control" required>
                        </div>
                        <div class="form-group grid-2" style="gap:1rem; margin-bottom: 1rem;">
                            <input type="text" placeholder="Country" class="form-control" required>
                            <input type="tel" placeholder="WhatsApp Number" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <input type="email" placeholder="Email Address" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <textarea placeholder="Describe the medical condition briefly..." rows="4" class="form-control" required></textarea>
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

`;

const footerTag = '<!-- Footer -->';
if (content.includes(footerTag) && !content.includes('faq-section')) {
    content = content.replace(footerTag, newSections + footerTag);
    fs.writeFileSync(file, content);
    console.log("Successfully added FAQ and Appointment sections.");
} else {
    console.log("Could not find footer tag or sections already added.");
}
