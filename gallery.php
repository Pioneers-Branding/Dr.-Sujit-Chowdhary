<?php
$page_title = 'Patient Image Gallery | Dr. Sujit Chowdhary';
$meta_description = 'Browse through our gallery of patient memories and successful surgical recoveries with Dr. Sujit Chowdhary.';
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
      "description": "Browse through our gallery of patient memories and successful surgical recoveries with Dr. Sujit Chowdhary."
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
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; }
        .gallery-card { border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm); background: #fff; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .gallery-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-md); }
        .gallery-img-wrapper { height: 320px; overflow: hidden; position: relative; }
        .gallery-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .gallery-card:hover .gallery-img-wrapper img { transform: scale(1.04); }
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
                <h4 class="accent-text">Patient Memories</h4>
                <h2>Our Happy Patients</h2>
            </div>
            
            <div class="gallery-grid mt-5">

                <!-- Image 1 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_family_1.jpg" alt="Patient Gallery Image 1">
                    </div>
                </div>

                <!-- Image 2 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_intl_patient_2.jpg" alt="Patient Gallery Image 2">
                    </div>
                </div>

                <!-- Image 3 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_laparoscopic_recovery_3.jpg" alt="Patient Gallery Image 3">
                    </div>
                </div>

                <!-- Image 4 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_newborn_care_4.jpg" alt="Patient Gallery Image 4">
                    </div>
                </div>

                <!-- Image 5 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_recovery_5.jpg" alt="Patient Gallery Image 5">
                    </div>
                </div>

                <!-- Image 6 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_6.jpg" alt="Patient Gallery Image 6">
                    </div>
                </div>

                <!-- Image 7 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_7.jpg" alt="Patient Gallery Image 7">
                    </div>
                </div>

                <!-- Image 8 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_8.jpg" alt="Patient Gallery Image 8">
                    </div>
                </div>

                <!-- Image 9 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_9.jpg" alt="Patient Gallery Image 9">
                    </div>
                </div>

                <!-- Image 10 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_10.jpg" alt="Patient Gallery Image 10">
                    </div>
                </div>

                <!-- Image 11 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_11.jpg" alt="Patient Gallery Image 11">
                    </div>
                </div>

                <!-- Image 12 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_12.jpg" alt="Patient Gallery Image 12">
                    </div>
                </div>

                <!-- Image 13 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_13.jpg" alt="Patient Gallery Image 13">
                    </div>
                </div>

                <!-- Image 14 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_14.jpg" alt="Patient Gallery Image 14">
                    </div>
                </div>

                <!-- Image 15 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_15.jpg" alt="Patient Gallery Image 15">
                    </div>
                </div>

                <!-- Image 16 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_16.jpg" alt="Patient Gallery Image 16">
                    </div>
                </div>

                <!-- Image 17 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_17.jpg" alt="Patient Gallery Image 17">
                    </div>
                </div>

                <!-- Image 18 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_18.jpg" alt="Patient Gallery Image 18">
                    </div>
                </div>

                <!-- Image 19 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_19.jpg" alt="Patient Gallery Image 19">
                    </div>
                </div>

                <!-- Image 20 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_20.jpg" alt="Patient Gallery Image 20">
                    </div>
                </div>

                <!-- Image 21 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_21.jpg" alt="Patient Gallery Image 21">
                    </div>
                </div>

                <!-- Image 22 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_22.jpg" alt="Patient Gallery Image 22">
                    </div>
                </div>

                <!-- Image 23 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.1s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_23.jpg" alt="Patient Gallery Image 23">
                    </div>
                </div>

                <!-- Image 24 -->
                <div class="gallery-card fade-in-up" style="animation-delay: 0.2s">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_24.jpg" alt="Patient Gallery Image 24">
                    </div>
                </div>

                <!-- Image 25 -->
                <div class="gallery-card fade-in-up">
                    <div class="gallery-img-wrapper">
                        <img src="assets/images/gallery_patient_25.jpg" alt="Patient Gallery Image 25">
                    </div>
                </div>


            </div>
        </div>
    </section>

    <!-- Footer -->

<?php include 'includes/footer.php'; ?>
</body>
</html>
