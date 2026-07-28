const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/GC Venture/OneDrive/Desktop/Dr. Sujit Chowdhary';
const files = fs.readdirSync(rootDir).filter(f => f.endsWith('.php'));

let updatedCount = 0;

files.forEach(file => {
    if (file === 'contact.php') return; // contact.php is already set up

    const filePath = path.join(rootDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Check if file contains contact form action="#"
    if (content.includes('<form action="#" class="contact-form">')) {
        let formReplacement = `<form action="includes/process-contact.php" method="POST" class="contact-form">\n`;
        formReplacement += `                    <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>\n`;
        formReplacement += `                        <div class="alert alert-success" style="background:#d4edda; color:#155724; padding: 12px 20px; border-radius:8px; margin-bottom:20px;">\n`;
        formReplacement += `                            <i class="fas fa-check-circle"></i> Thank you! Your request has been submitted successfully. We will get back to you shortly.\n`;
        formReplacement += `                        </div>\n`;
        formReplacement += `                    <?php endif; ?>`;

        content = content.replace('<form action="#" class="contact-form">', formReplacement);

        // Add name="name" to text input inside form if not present
        content = content.replace(/(<input type="text"[^>]*placeholder="[^"]*Name[^"]*")([^>]*>)/i, (m, g1, g2) => {
            if (!g1.includes('name=')) {
                return `${g1} name="name"${g2}`;
            }
            return m;
        });

        // Add name="phone" to tel input
        content = content.replace(/(<input type="tel"[^>]*)([^>]*>)/i, (m, g1, g2) => {
            if (!g1.includes('name=')) {
                return `${g1} name="phone"${g2}`;
            }
            return m;
        });

        // Add name="email" to email input
        content = content.replace(/(<input type="email"[^>]*)([^>]*>)/i, (m, g1, g2) => {
            if (!g1.includes('name=')) {
                return `${g1} name="email"${g2}`;
            }
            return m;
        });

        // Add name="message" to textarea
        content = content.replace(/(<textarea[^>]*)([^>]*>)/i, (m, g1, g2) => {
            if (!g1.includes('name=')) {
                return `${g1} name="message"${g2}`;
            }
            return m;
        });
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
        console.log(`Updated form in ${file}`);
    }
});

console.log(`Form update complete. Updated ${updatedCount} PHP files.`);
