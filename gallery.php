<?php
$page_title = 'Patient Image Gallery | Dr. Sujit Chowdhary';
$meta_description = 'Browse through our gallery of patient memories, successful surgical recoveries, international patient care, and clinical milestones with Dr. Sujit Chowdhary.';
$current_page = 'gallery';
$extra_head = <<<'EOD'
<link rel="canonical" href="https://drsujitchowdhary.com/gallery.php">
<meta name="robots" content="index, follow">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://drsujitchowdhary.com/gallery.php",
      "url": "https://drsujitchowdhary.com/gallery.php",
      "name": "Patient Image Gallery | Dr. Sujit Chowdhary",
      "description": "Browse through our gallery of patient memories, successful surgical recoveries, international patient care, and clinical milestones with Dr. Sujit Chowdhary."
    }
  ]
}
</script>
<style>
        .page-header { background: var(--gradient-primary); color: white; padding: 60px 0 30px; text-align: center; }
        .page-header h1 { color: white; margin-bottom: 10px; }
        .breadcrumb { display: flex; justify-content: center; gap: 10px; font-weight: 500; }
        .breadcrumb a { color: rgba(255,255,255,0.7); }
        .breadcrumb a:hover { color: white; }
        .gallery-card { border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); background: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .gallery-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .gallery-img-wrapper { height: 260px; overflow: hidden; position: relative; }
        .gallery-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .gallery-card:hover .gallery-img-wrapper img { transform: scale(1.05); }
        .gallery-caption { padding: 18px 20px; }
        .gallery-caption h4 { font-size: 1.05rem; color: var(--primary-blue); margin-bottom: 6px; font-weight: 600; }
        .gallery-caption p { font-size: 0.85rem; color: var(--text-light); margin: 0; line-height: 1.4; }
    </style>
EOD;
?>
<!DOCTYPE html>
<html lang="en">
<?php include 'includes/head.php'; ?>
<body>

<?php include 'includes/header.php'; ?>

<div class="page-header">
        <div class="container fade-in-up">
            <h1>Patient Image Gallery</h1>
            <div class="breadcrumb">
                <a href="index.php">Home</a> <span>/</span> <span>Gallery</span>
            </div>
        </div>
    </div>

    <!-- Gallery Section -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Patient Memories & Clinical Milestones</h4>
                <h2>Our Happy Patients</h2>
                <p style="max-width: 650px; text-align: center; margin: 15px auto;">Browse through our photo gallery featuring patient recoveries, international patient care, neonatal nursing, and international academic presentations with Dr. Sujit Chowdhary.</p>
            </div>
            
            <div class="grid-3 mt-5">

                <!-- Photo 1: Patient Family -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_family_1.jpg" alt="Pediatric Patient Family Recovery in Ward">
                    </div>
                    <div class="gallery-caption">
                        <h4>Family & Pediatric Inpatient Care</h4>
                        <p>Comfortable, supportive post-operative ward care bringing peace of mind to parents and children.</p>
                    </div>
                </div>

                <!-- Photo 2: International Patient -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_intl_patient_2.jpg" alt="International Patient Father and Infant">
                    </div>
                    <div class="gallery-caption">
                        <h4>International Patient Care</h4>
                        <p>Welcoming international families seeking world-class pediatric urology and surgical reconstructive care in India.</p>
                    </div>
                </div>

                <!-- Photo 3: Laparoscopic Recovery -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_laparoscopic_recovery_3.jpg" alt="Mother holding child showing laparoscopic keyhole scars">
                    </div>
                    <div class="gallery-caption">
                        <h4>Laparoscopic Keyhole Recovery</h4>
                        <p>Minimal surgical incision marks following successful keyhole abdominal reconstruction in a young child.</p>
                    </div>
                </div>

                <!-- Photo 4: Newborn Care -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_newborn_care_4.jpg" alt="Nurse holding newborn in clinical care unit">
                    </div>
                    <div class="gallery-caption">
                        <h4>Specialized Neonatal Post-Op Care</h4>
                        <p>Warm, attentive clinical care and nursing support for infants following neonatal surgical interventions.</p>
                    </div>
                </div>

                <!-- Photo 5: Outpatient Scar Healing -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_recovery_5.jpg" alt="Mother with young boy showing healed surgical incision">
                    </div>
                    <div class="gallery-caption">
                        <h4>Outpatient Follow-up & Healing</h4>
                        <p>Happy mother and child during a routine outpatient checkup demonstrating excellent surgical scar healing.</p>
                    </div>
                </div>

                <!-- Photo 6: APAPU Podium -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/apapu_podium.jpg" alt="Dr. Sujit Chowdhary Keynote Address at APAPU Conference">
                    </div>
                    <div class="gallery-caption">
                        <h4>Academic Keynote Address</h4>
                        <p>Dr. Sujit Chowdhary presenting surgical research insights at the Asian Association of Pediatric Urologists (APAPU).</p>
                    </div>
                </div>

                <!-- Photo 7: APAPU Lamp Lighting -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/apapu_lamp.jpg" alt="Inaugural Lamp Lighting Ceremony at Medical Congress">
                    </div>
                    <div class="gallery-caption">
                        <h4>Inaugural Medical Congress Ceremony</h4>
                        <p>Participating in traditional lamp lighting to inaugurate international pediatric surgical symposiums.</p>
                    </div>
                </div>

                <!-- Photo 8: APAPU Presentation -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/apapu_presentation.jpg" alt="Clinical Presentation on Pediatric Surgical Reconstruction">
                    </div>
                    <div class="gallery-caption">
                        <h4>Surgical Technique Workshop</h4>
                        <p>Demonstrating advanced reconstructive techniques and clinical outcomes to global medical delegates.</p>
                    </div>
                </div>

                <!-- Photo 9: APAPU Delegation -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/apapu_audience.jpg" alt="International Pediatric Urology Delegates Audience">
                    </div>
                    <div class="gallery-caption">
                        <h4>Global Surgical Collaboration</h4>
                        <p>Exchanging clinical protocols and advancements with leading pediatric surgeons worldwide.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Footer -->

<?php include 'includes/footer.php'; ?>
</body>
</html>
