const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\GC Venture\\OneDrive\\Desktop\\Dr. Sujit Chowdhary';

const getHtmlFiles = (dirPath) => {
    return fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.html'))
        .map(file => path.join(dirPath, file));
};

const floatingIconsHtml = `
    <!-- Floating Icons -->
    <div class="floating-icons">
        <a href="https://wa.me/919873206761" target="_blank" class="float-icon whatsapp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <a href="tel:9873206761" class="float-icon callback">
            <i class="fas fa-phone-alt"></i>
        </a>
    </div>
</body>`;

const googleBubble = `
                        <div class="bubble mt-3">
                            <i class="fab fa-google"></i>
                            <div>
                                <h5>Google Profile</h5>
                                <p><a href="https://share.google/ZDYFDGzk371tPER2n" target="_blank" style="color:var(--primary-blue); font-weight:600;">View Profile</a></p>
                            </div>
                        </div>
                    </div>`;

const files = getHtmlFiles(dir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Remove topbar socials
    content = content.replace(/<div class="topbar-socials">[\s\S]*?<\/div>/, '');

    // Replace phone
    content = content.replace(/\+91 9876543210/g, '98732 06761');

    // Replace long address
    content = content.replace(/123 Medical Hub, Health Avenue, New Delhi, India 110001/g, 'D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057');
    
    // Replace short address (in footer)
    content = content.replace(/123 Medical Hub, Health Avenue, New Delhi/g, 'D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057');

    // Replace timings
    content = content.replace(/Mon - Sat: 9:00 AM - 6:00 PM/g, '24 Hours');
    content = content.replace(/Mon-Sat: 09:00 AM - 06:00 PM/g, '24 Hours');

    // Add Google Profile Bubble in contact section
    content = content.replace(/<\/div>\s*<iframe src=/g, googleBubble + '\\n                    <iframe src=');

    // Add Google Profile to footer contact
    if (!content.includes('share.google/ZDYFDGzk371tPER2n') || content.match(/share\.google/g).length < 2) {
        const footerGoogle = `\\n                    <p><i class="fab fa-google"></i> <a href="https://share.google/ZDYFDGzk371tPER2n" target="_blank" style="color:rgba(255,255,255,0.7);">GBP Profile</a></p>`;
        content = content.replace(/(<p><i class="fas fa-clock"><\/i> 24 Hours<\/p>)/, '$1' + footerGoogle);
    }

    // Add floating icons before </body>
    if (!content.includes('floating-icons')) {
        content = content.replace(/<\/body>/i, floatingIconsHtml);
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
});
