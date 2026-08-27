<?php
$page_title = 'Our Blog & Insights | Dr. Sujit Chowdhary';
$meta_description = 'Learn more about Dr. Sujit Chowdhary, his experience, awards, and dedication to pediatric surgery.';
$current_page = 'blog';
$extra_head = <<<'EOD'
<style>
        .page-header { background: var(--gradient-primary); color: white; padding: 60px 0 30px; text-align: center; }
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

<!-- Page Header -->
    
    <div class="page-header">
        <div class="container fade-in-up">
            <h1>Our Blog & Insights</h1>
            <div class="breadcrumb">
                <a href="index.php">Home</a> <span>/</span> <span>Blog</span>
            </div>
        </div>
    </div>

    <section class="section">
        <div class="container">
            <div class="section-title fade-in-up">
                <h4 class="accent-text">Latest Articles</h4>
                <h2>Pediatric Health Insights</h2>
                <p style="max-width: 600px; margin: 15px auto; text-align: center;">Stay informed with the latest updates, medical advice, and research insights in the field of pediatric surgery and urology.</p>
            </div>
            
            <div class="grid-3 mt-5">
                <!-- Featured Blog Card 1 -->
                <div class="card fade-in-up" style="padding: 0; overflow: hidden;">
                    <div style="height: 200px; overflow: hidden;">
                        <img src="assets/images/blog/child-bladder-infection-symptoms.jpg" alt="Child Bladder Infection Symptoms: Signs Parents Should Know" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="padding: 25px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.85rem;">Pediatric Urology</span>
                            <span style="color: #777; font-size: 0.8rem;"><i class="fas fa-calendar-alt"></i> 24 Aug 2026</span>
                        </div>
                        <h3 style="font-size: 1.2rem; line-height: 1.4;">Child Bladder Infection Symptoms: Signs Parents Should Know</h3>
                        <p class="mt-2" style="font-size: 0.9rem; color: #555;">Learn about child bladder infection symptoms, burning urination, daytime wetting, risk factors, and expert UTI care...</p>
                        <a href="blog/child-bladder-infection-symptoms.php" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Featured Blog Card 2 -->
                <div class="card fade-in-up" style="animation-delay: 0.1s; padding: 0; overflow: hidden;">
                    <div style="height: 200px; overflow: hidden;">
                        <img src="assets/images/blog/how-to-recognize-urological-problems-in-newborns.jpg" alt="How to Recognize Urological problems in Newborns?" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="padding: 25px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.85rem;">Pediatric Urology</span>
                            <span style="color: #777; font-size: 0.8rem;"><i class="fas fa-calendar-alt"></i> 18 Aug 2026</span>
                        </div>
                        <h3 style="font-size: 1.2rem; line-height: 1.4;">How to Recognize Urological problems in Newborns?</h3>
                        <p class="mt-2" style="font-size: 0.9rem; color: #555;">Learn key physical and visual signs of newborn urological issues, diaper wetting patterns, scrotal swelling, and early care...</p>
                        <a href="blog/how-to-recognize-urological-problems-in-newborns.php" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Featured Blog Card 2 -->
                <div class="card fade-in-up" style="animation-delay: 0.1s; padding: 0; overflow: hidden;">
                    <div style="height: 200px; overflow: hidden;">
                        <img src="assets/images/blog/hydronephrosis-in-children.jpg" alt="Hydronephrosis in Children | Symptoms, Diagnosis & Treatment" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="padding: 25px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.85rem;">Pediatric Urology</span>
                            <span style="color: #777; font-size: 0.8rem;"><i class="fas fa-calendar-alt"></i> 12 Aug 2026</span>
                        </div>
                        <h3 style="font-size: 1.2rem; line-height: 1.4;">Hydronephrosis in Children | Symptoms, Diagnosis & Treatment</h3>
                        <p class="mt-2" style="font-size: 0.9rem; color: #555;">Learn about pediatric hydronephrosis, causes like PUJO and VUR, symptoms, ultrasound grading, and robotic treatment options...</p>
                        <a href="blog/hydronephrosis-in-children.php" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Featured Blog Card 3 -->
                <div class="card fade-in-up" style="animation-delay: 0.2s; padding: 0; overflow: hidden;">
                    <div style="height: 200px; overflow: hidden;">
                        <img src="assets/images/blog/causes-of-red-urine-in-a-child.png" alt="Causes of Red Urine in a Child? {Complete Guide}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="padding: 25px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.85rem;">Pediatric Urology</span>
                            <span style="color: #777; font-size: 0.8rem;"><i class="fas fa-calendar-alt"></i> 05 Aug 2026</span>
                        </div>
                        <h3 style="font-size: 1.2rem; line-height: 1.4;">Causes of Red Urine in a Child? {Complete Guide}</h3>
                        <p class="mt-2" style="font-size: 0.9rem; color: #555;">Learn about benign dietary causes and clinical causes of red blood cells in urine (hematuria), symptoms, and treatment...</p>
                        <a href="blog/causes-of-red-urine-in-a-child.php" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Footer -->

<?php include 'includes/footer.php'; ?>
</body>
</html>
