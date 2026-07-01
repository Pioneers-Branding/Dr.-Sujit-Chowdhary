const fs = require('fs');
const files = [
    'service-renal-tumor.html',
    'service-biliary-atresia.html',
    'service-hirschsprung.html',
    'service-choledochal-cyst.html',
    'service-undescended-testis.html'
];
files.forEach(f => {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/js\/main\.js/g, 'js/script.js');
    fs.writeFileSync(f, c);
    console.log('Fixed script tag in ' + f);
});
