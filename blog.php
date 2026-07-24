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
                <!-- Blog Card 1 -->
                <div class="card fade-in-up" style="padding: 0; overflow: hidden;">
                    <div style="background: #e9ecef; height: 200px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                        <i class="fas fa-image font-2xl"></i>
                    </div>
                    <div style="padding: 25px;">
                        <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.9rem;">Pediatric Urology</span>
                        <h3 class="mt-2" style="font-size: 1.3rem;">Understanding Hydronephrosis in Infants</h3>
                        <p class="mt-2" style="font-size: 0.95rem;">A comprehensive guide for parents to understand the causes, symptoms, and modern treatment options...</p>
                        <a href="#" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Blog Card 2 -->
                <div class="card fade-in-up" style="animation-delay: 0.1s; padding: 0; overflow: hidden;">
                    <div style="background: #e9ecef; height: 200px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                        <i class="fas fa-image font-2xl"></i>
                    </div>
                    <div style="padding: 25px;">
                        <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.9rem;">Surgical Advancements</span>
                        <h3 class="mt-2" style="font-size: 1.3rem;">The Benefits of Robotic Surgery in Pediatrics</h3>
                        <p class="mt-2" style="font-size: 0.95rem;">How robotic-assisted techniques are revolutionizing recovery times and precision in complex pediatric cases...</p>
                        <a href="#" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>

                <!-- Blog Card 3 -->
                <div class="card fade-in-up" style="animation-delay: 0.2s; padding: 0; overflow: hidden;">
                    <div style="background: #e9ecef; height: 200px; display: flex; align-items: center; justify-content: center; color: var(--text-light);">
                        <i class="fas fa-image font-2xl"></i>
                    </div>
                    <div style="padding: 25px;">
                        <span style="color: var(--secondary-teal); font-weight: 600; font-size: 0.9rem;">Patient Care</span>
                        <h3 class="mt-2" style="font-size: 1.3rem;">Post-Operative Care: What Parents Need to Know</h3>
                        <p class="mt-2" style="font-size: 0.95rem;">Essential tips and guidelines to ensure a smooth, safe, and comfortable recovery for your child at home...</p>
                        <a href="#" class="btn btn-outline mt-3" style="padding: 8px 15px; font-size: 0.9rem;">Read More</a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-5 fade-in-up">
                <a href="#" class="btn btn-primary">Load More Articles</a>
            </div>
        </div>
    </section>
<!-- Footer -->

<?php include 'includes/footer.php'; ?>
</body>
</html>
