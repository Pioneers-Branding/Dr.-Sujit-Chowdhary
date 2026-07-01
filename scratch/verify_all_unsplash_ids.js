const https = require('https');

const candidateMap = {
    'adrenal-tumor': '1579684428480-1a896d83b75b',
    'anorectal-malformation': '1581594693702-fbdc51b2763b',
    'biliary-atresia': '1584515979956-d9f6e5d09982',
    'choledochal-cyst': '1531875456244-4ad1ffe47c1a',
    'duplex-renal-system': '1516549655169-df83a0774514',
    'exstrophy-epispadias': '1581594693702-fbdc51b2763b', // Wait, let's make sure it's unique. If we duplicate, we will have identical sizes again. Let's find another pediatrician image!
    'exstrophy-epispadias-alt': '1519689680058-324335c77eba',
    'hernia-hydrocele': '1505751172876-fa1923c5c528',
    'hirschsprung': '1622253692010-333f2da6031d',
    'hydronephrosis': '1530026405186-ed1ea000d73a',
    'hypospadias': '1606318313647-137a1e2b02e4',
    'neuropathic-bladder': '1579684385127-1ef15d508118',
    'paediatric-gi': '1516627145497-ae6968895b74',
    'pediatric-gi-surgery': '1584515980145-63554e815bc0',
    'pediatric-oncosurgery': '1538333581680-956170e27ede',
    'pediatric-robotic-surgery': '1576091160399-112ba8d25d1d',
    'pediatric-stone-disease': '1579154204601-01588f351e67',
    'pediatric-tumors': '1504813184591-01592f259d15',
    'pediatric-urodynamics': '1526253038950-d0f29f27de1d',
    'phimosis': '1584515979961-d7f6d2e85bf1',
    'pujo': '1516613903046-5f72cf904351',
    'puv': '1586549996438-b4b1a27e7d6b',
    'renal-tumor': '1576091160550-2173dba999ef',
    'thoracoscopic-surgery': '1551601651-789a9f24b94f',
    'uti': '1576091160565-d0d4002fae5d',
    'vesicoureteric-reflux': '1550831107-155398cb6433', // Wait, let's verify if this works.
    'voiding-dysfunction': '1582213782179-e3c6a9cdfa81'
};

function checkId(key, photoId) {
    return new Promise((resolve) => {
        const url = `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=800&q=80`;
        https.get(url, (res) => {
            console.log(`${key} (${photoId}): Status ${res.statusCode}, Length ${res.headers['content-length']}`);
            resolve(res.statusCode === 200);
        }).on('error', err => {
            console.log(`${key} (${photoId}): Error ${err.message}`);
            resolve(false);
        });
    });
}

async function run() {
    console.log("Checking candidate IDs...");
    for (const [key, id] of Object.entries(candidateMap)) {
        await checkId(key, id);
    }
    console.log("Completed checks.");
}
run();
