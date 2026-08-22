<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <img src="<?php echo $path_prefix; ?>assets/images/logo.png" alt="Dr. Sujit Chowdhary Logo" class="footer-logo">
                <p>Dedicated to providing world-class paediatric surgical & urological care with compassion and precision.</p>
                <div class="footer-socials">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="<?php echo $path_prefix; ?>index.php">Home</a></li>
                    <li><a href="<?php echo $path_prefix; ?>about.php">About Dr. Chowdhary</a></li>
                    <li><a href="<?php echo $path_prefix; ?>services.php">All Services</a></li>
                    <li><a href="<?php echo $path_prefix; ?>index.php#reviews">Patient Reviews</a></li>
                    <li><a href="<?php echo $path_prefix; ?>contact.php">Contact Us</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>Our Services</h4>
                <ul>
                    <li><a href="<?php echo $path_prefix; ?>service/uti.php">Urinary Tract Infection</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/hydronephrosis.php">Hydronephrosis</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/paediatric-gi.php">Paediatric GI Surgery</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/neuropathic-bladder.php">Neuropathic Bladder</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/pujo.php">PUJO Treatment</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/puv.php">PUV Treatment</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/pediatric-robotic-surgery.php">Robotic Surgery</a></li>
                    <li><a href="<?php echo $path_prefix; ?>service/hypospadias.php">Hypospadias Surgery</a></li>
                </ul>
            </div>
            
            <div class="footer-contact">
                <h4>Contact Info</h4>
                <p><i class="fas fa-map-marker-alt"></i> D6, Club, 2, opposite Vasant Vihar, Vasant Vihar, New Delhi, Delhi 110057</p>
                <p><i class="fas fa-phone-alt"></i> 98732 06761</p>
                <p><i class="fas fa-envelope"></i> sujitchowdhary@hotmail.com</p>
                <p><i class="fas fa-clock"></i> 24 Hours</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Dr. Sujit Chowdhary. All Rights Reserved. Dedicated to Excellence in Pediatric Care.</p>
        </div>
    </div>
</footer>

<!-- Scripts -->
<?php $js_version = file_exists(__DIR__ . '/../js/script.js') ? filemtime(__DIR__ . '/../js/script.js') : time(); ?>
<script src="<?php echo $path_prefix; ?>js/script.js?v=<?php echo $js_version; ?>"></script>
<!-- Floating Icons -->
<div class="floating-icons">
    <a href="https://wa.me/919873206761" target="_blank" class="float-icon whatsapp" title="Chat on WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
    <a href="tel:9873206761" class="float-icon callback" title="Call Now">
        <i class="fas fa-phone-alt"></i>
    </a>
</div>
