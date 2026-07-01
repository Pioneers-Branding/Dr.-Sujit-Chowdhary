const fs = require('fs');
let content = fs.readFileSync('gallery.html', 'utf8');

// Update Title and Headers
content = content.replace(/<title>.*?<\/title>/, '<title>Patient Image Gallery | Dr. Sujit Chowdhary</title>');
content = content.replace(/<h1>.*?<\/h1>/, '<h1>Patient Image Gallery</h1>');
content = content.replace(/<span>Videos<\/span>/g, '<span>Gallery</span>');
content = content.replace(/<h2>Patient Testimonials<\/h2>/, '<h2>Our Happy Patients</h2>');
content = content.replace(/<h4 class="accent-text">Real Stories<\/h4>/, '<h4 class="accent-text">Patient Memories</h4>');
content = content.replace(/Hear directly from the parents.*?<\/p>/, "Browse through our gallery of happy, healthy patients who have successfully recovered after their specialized treatments with Dr. Chowdhary.</p>");

// Update the grid of 15 placeholders from videos to images
const startIdx = content.indexOf('<div class="grid-3 mt-5">');
const endIdx = content.indexOf('</section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    let newGrid = '<div class="grid-3 mt-5">\n';
    
    for (let i = 1; i <= 15; i++) {
        let delay = '';
        if (i % 3 === 2) delay = ' style="animation-delay: 0.1s"';
        if (i % 3 === 0) delay = ' style="animation-delay: 0.2s"';
        
        newGrid += `
                <!-- Gallery Image ${i} -->
                <div class="gallery-item fade-in-up"${delay}>
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image ${i}</span>
                    </div>
                </div>`;
    }
    newGrid += '\n            </div>\n        </div>\n    ';
    content = content.substring(0, startIdx) + newGrid + content.substring(endIdx);
}

// Write the file back
fs.writeFileSync('gallery.html', content);
console.log("Successfully updated gallery.html to Image Gallery");
