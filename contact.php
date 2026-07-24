<?php
$page_title = 'Contact Us | Dr. Sujit Chowdhary';
$meta_description = 'Dr. Sujit Chowdhary is a leading Pediatric Urologist and Surgeon in New Delhi, India.';
$current_page = 'contact';
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
            <h1>Contact Us</h1>
            <div class="breadcrumb">
                <a href="index.php">Home</a> <span>/</span> <span>Contact</span>
            </div>
        </div>
    </div>

    <section class="section bg-light">
        <div class="container grid-2">
            <div class="card fade-in-up">
                <h2 style="margin-bottom:0.5rem">Send a Message</h2>
                <p class="mb-4">Fill out the form below and we will get back to you to schedule an appointment.</p>
                <form action="includes/process-contact.php" method="POST" class="contact-form">
                <?php if (isset($_GET['status']) && $_GET['status'] === 'success'): ?>
                    <div class="alert alert-success" style="background:#d4edda; color:#155724; padding: 12px 20px; border-radius:8px; margin-bottom:20px;">
                        <i class="fas fa-check-circle"></i> Thank you! Your message has been sent successfully. We will get back to you shortly.
                    </div>
                <?php endif; ?>
                    <div class="form-group mb-3">
                        <input type="text" name="name" placeholder="Your Name" class="form-control" required>
                    </div>
                    <div class="form-group mb-3">
                        <input type="email" name="email" placeholder="Email Address" class="form-control" required>
                    </div>
                    <div class="form-group mb-3">
                        <input type="tel" name="phone" placeholder="Phone Number" class="form-control" required>
                    </div>
                    <div class="form-group mb-3">
                        <textarea name="message" placeholder="Message / Medical Condition" rows="5" class="form-control" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
            
            <div class="fade-in-up" style="animation-delay: 0.2s">
                <div class="card mb-4 bg-white">
                    <h3 class="mb-4">Get In Touch</h3>
                    <div class="bubble" style="box-shadow:none; padding: 10px 0; background:transparent;">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h5>Clinical Address</h5>
                            <p>D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057</p>
                        </div>
                    </div>
                    <div class="bubble" style="box-shadow:none; padding: 10px 0; background:transparent;">
                        <i class="fas fa-phone-alt"></i>
                        <div>
                            <h5>Phone & Email</h5>
                            <p>98732 06761 <br> sujitchowdhary@hotmail.com</p>
                        </div>
                    </div>
                    <div class="bubble" style="box-shadow:none; padding: 10px 0; background:transparent;">
                        <i class="fab fa-google"></i>
                        <div>
                            <h5>Google Profile</h5>
                            <p><a href="https://share.google/ZDYFDGzk371tPER2n" target="_blank" style="color:var(--primary-blue); font-weight:600; text-decoration: underline;">View Profile & Reviews</a></p>
                        </div>
                    </div>

                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.320839107355!2d77.1648039!3d28.5601269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3fef8d5f005%3A0xd080c4b0d8a5754!2sDr%20Sujit%20Chowdhary%3A%20Robotic%20Pediatric%20Urologist%2F%20Surgeon%20in%20Delhi%2C%20India%20%7C%20Neuropathic%20Bladder%2C%20Urinary%20Stone%2C%20Hydronephrosis!5e0!3m2!1sen!2sin!4v1780577721558!5m2!1sen!2sin" width="100%" height="300" style="border:0; border-radius:var(--radius-md);" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>
</body>
</html>
