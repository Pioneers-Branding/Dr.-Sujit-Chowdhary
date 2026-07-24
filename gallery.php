<?php
$page_title = 'Patient Image Gallery | Dr. Sujit Chowdhary';
$meta_description = 'Watch patient testimonials and educational videos by Dr. Sujit Chowdhary, the best paediatric urologist in New Delhi, India.';
$current_page = 'gallery';
$extra_head = <<<'EOD'
<style>
        .page-header { background: var(--gradient-primary); color: white; padding: 100px 0 60px; text-align: center; }
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

<div class="page-header">
        <div class="container fade-in-up">
            <h1>Patient Image Gallery</h1>
            <div class="breadcrumb">
                <a href="index.php">Home</a> <span>/</span> <span>Gallery</span>
            </div>
        </div>
    </div>

        <!-- Testimonial Videos -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Patient Memories</h4>
                <h2>Our Happy Patients</h2>
                <p style="max-width: 600px; text-align: center; margin: 15px auto;">Browse through our gallery of happy, healthy patients who have successfully recovered after their specialized treatments with Dr. Chowdhary.</p>
            </div>
            
            <div class="grid-3 mt-5">

                <!-- Gallery Image 1 -->
                <div class="gallery-item fade-in-up">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 1</span>
                    </div>
                </div>
                <!-- Gallery Image 2 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.1s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 2</span>
                    </div>
                </div>
                <!-- Gallery Image 3 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.2s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 3</span>
                    </div>
                </div>
                <!-- Gallery Image 4 -->
                <div class="gallery-item fade-in-up">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 4</span>
                    </div>
                </div>
                <!-- Gallery Image 5 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.1s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 5</span>
                    </div>
                </div>
                <!-- Gallery Image 6 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.2s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 6</span>
                    </div>
                </div>
                <!-- Gallery Image 7 -->
                <div class="gallery-item fade-in-up">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 7</span>
                    </div>
                </div>
                <!-- Gallery Image 8 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.1s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 8</span>
                    </div>
                </div>
                <!-- Gallery Image 9 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.2s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 9</span>
                    </div>
                </div>
                <!-- Gallery Image 10 -->
                <div class="gallery-item fade-in-up">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 10</span>
                    </div>
                </div>
                <!-- Gallery Image 11 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.1s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 11</span>
                    </div>
                </div>
                <!-- Gallery Image 12 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.2s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 12</span>
                    </div>
                </div>
                <!-- Gallery Image 13 -->
                <div class="gallery-item fade-in-up">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 13</span>
                    </div>
                </div>
                <!-- Gallery Image 14 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.1s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 14</span>
                    </div>
                </div>
                <!-- Gallery Image 15 -->
                <div class="gallery-item fade-in-up" style="animation-delay: 0.2s">
                    <div style="background: #e9ecef; height: 280px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--text-light); border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-sm);">
                        <i class="fas fa-image" style="font-size: 3rem; color: var(--secondary-teal); opacity: 0.7;"></i>
                        <span style="margin-top: 10px; font-weight: 500;">Patient Image 15</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->

<?php include 'includes/footer.php'; ?>
</body>
</html>
