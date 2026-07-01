const fs = require('fs');

const file = 'videos.html';
let content = fs.readFileSync(file, 'utf8');

// Find the start of Testimonial Videos and end of Educational Videos
const startIdx = content.indexOf('<!-- Testimonial Videos -->');
const endIdx = content.indexOf('<!-- Footer -->');

if (startIdx !== -1 && endIdx !== -1) {
    let newSection = `    <!-- Testimonial Videos -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Real Stories</h4>
                <h2>Patient Testimonials</h2>
                <p style="max-width: 600px; text-align: center; margin: 15px auto;">Hear directly from the parents of our young patients about their experience, treatment journey, and successful outcomes under Dr. Chowdhary's care.</p>
            </div>
            
            <div class="grid-3 mt-5">`;

    for (let i = 1; i <= 15; i++) {
        let delay = '';
        if (i % 3 === 2) delay = ' style="animation-delay: 0.1s"';
        if (i % 3 === 0) delay = ' style="animation-delay: 0.2s"';

        newSection += `
                <!-- Video Card ${i} -->
                <div class="video-card fade-in-up"${delay}>
                    <div style="background: #e9ecef; height: 220px; display: flex; align-items: center; justify-content: center; color: var(--text-light); font-size: 3rem; cursor: pointer;">
                        <i class="fas fa-play-circle" style="color: var(--secondary-teal);"></i>
                    </div>
                    <div class="video-info">
                        <h4>Patient Testimonial ${i}</h4>
                        <p class="mt-2" style="font-size: 0.9rem;">Parents share their journey and experience after successful treatment.</p>
                    </div>
                </div>`;
    }

    newSection += `
            </div>
        </div>
    </section>

    `;

    const newContent = content.substring(0, startIdx) + newSection + content.substring(endIdx);
    fs.writeFileSync(file, newContent);
    console.log("Successfully replaced testimonials and removed educational videos.");
} else {
    console.log("Could not find markers.");
}
