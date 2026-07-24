<?php
if (!isset($current_page)) {
    $current_page = '';
}
?>
<!-- Header / Navbar -->
<header>
    <div class="container flex-between">
        <a href="index.php" class="logo">
            <img src="assets/images/logo.png" alt="Dr. Sujit Chowdhary Logo" class="header-logo">
        </a>
        <nav class="nav-links">
            <a href="index.php" class="<?php echo ($current_page === 'home') ? 'active' : ''; ?>">Home</a>
            <a href="about.php" class="<?php echo ($current_page === 'about') ? 'active' : ''; ?>">About</a>
            <div class="dropdown">
                <a href="services.php" class="<?php echo ($current_page === 'services' || strpos($current_page, 'service-') === 0) ? 'active' : ''; ?>">Services <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-content">
                    <a href="service-absent-testis.php" class="<?php echo ($current_page === 'service-absent-testis') ? 'active' : ''; ?>">Absent Testis</a>
                    <a href="service-adrenal-tumor.php" class="<?php echo ($current_page === 'service-adrenal-tumor') ? 'active' : ''; ?>">Adrenal Tumor</a>
                    <a href="service-anorectal-malformation.php" class="<?php echo ($current_page === 'service-anorectal-malformation') ? 'active' : ''; ?>">Anorectal Malformation</a>
                    <a href="service-biliary-atresia.php" class="<?php echo ($current_page === 'service-biliary-atresia') ? 'active' : ''; ?>">Biliary Atresia</a>
                    <a href="service-duplex-renal-system.php" class="<?php echo ($current_page === 'service-duplex-renal-system') ? 'active' : ''; ?>">Duplex Renal System</a>
                    <a href="service-exstrophy-epispadias.php" class="<?php echo ($current_page === 'service-exstrophy-epispadias') ? 'active' : ''; ?>">Exstrophy Epispadias</a>
                    <a href="service-hernia-hydrocele.php" class="<?php echo ($current_page === 'service-hernia-hydrocele') ? 'active' : ''; ?>">Hernia and Hydrocele</a>
                    <a href="service-hirschsprung.php" class="<?php echo ($current_page === 'service-hirschsprung') ? 'active' : ''; ?>">Hirschsprung</a>
                    <a href="service-hydronephrosis.php" class="<?php echo ($current_page === 'service-hydronephrosis') ? 'active' : ''; ?>">Hydronephrosis</a>
                    <a href="service-hypospadias.php" class="<?php echo ($current_page === 'service-hypospadias') ? 'active' : ''; ?>">Hypospadias Surgery</a>
                    <a href="service-neuropathic-bladder.php" class="<?php echo ($current_page === 'service-neuropathic-bladder') ? 'active' : ''; ?>">Neuropathic Bladder</a>
                    <a href="service-pediatric-stone-disease.php" class="<?php echo ($current_page === 'service-pediatric-stone-disease') ? 'active' : ''; ?>">Pediatric Endourology & Stones</a>
                    <a href="service-pediatric-oncosurgery.php" class="<?php echo ($current_page === 'service-pediatric-oncosurgery') ? 'active' : ''; ?>">Pediatric Oncosurgery</a>
                    <a href="service-pediatric-robotic-surgery.php" class="<?php echo ($current_page === 'service-pediatric-robotic-surgery') ? 'active' : ''; ?>">Pediatric Robotic Surgery</a>
                    <a href="service-pediatric-tumors.php" class="<?php echo ($current_page === 'service-pediatric-tumors') ? 'active' : ''; ?>">Pediatric Tumors</a>
                    <a href="service-pediatric-urodynamics.php" class="<?php echo ($current_page === 'service-pediatric-urodynamics') ? 'active' : ''; ?>">Pediatric Urodynamics</a>
                    <a href="service-phimosis.php" class="<?php echo ($current_page === 'service-phimosis') ? 'active' : ''; ?>">Phimosis</a>
                    <a href="service-pujo.php" class="<?php echo ($current_page === 'service-pujo') ? 'active' : ''; ?>">PUJO</a>
                    <a href="service-puv.php" class="<?php echo ($current_page === 'service-puv') ? 'active' : ''; ?>">PUV</a>
                    <a href="service-renal-tumor.php" class="<?php echo ($current_page === 'service-renal-tumor') ? 'active' : ''; ?>">Renal Tumor</a>
                    <a href="service-thoracoscopic-surgery.php" class="<?php echo ($current_page === 'service-thoracoscopic-surgery') ? 'active' : ''; ?>">Thoracoscopic Surgery</a>
                    <a href="service-undescended-testis.php" class="<?php echo ($current_page === 'service-undescended-testis') ? 'active' : ''; ?>">Undescended Testis</a>
                    <a href="service-uti.php" class="<?php echo ($current_page === 'service-uti') ? 'active' : ''; ?>">UTI</a>
                    <a href="service-choledochal-cyst.php" class="<?php echo ($current_page === 'service-choledochal-cyst') ? 'active' : ''; ?>">Choledochal Cyst</a>
                    <a href="service-vesicoureteric-reflux.php" class="<?php echo ($current_page === 'service-vesicoureteric-reflux') ? 'active' : ''; ?>">Vesicoureteric Reflux</a>
                    <a href="service-voiding-dysfunction.php" class="<?php echo ($current_page === 'service-voiding-dysfunction') ? 'active' : ''; ?>">Voiding Dysfunction</a>
                    <a href="service-pediatric-gi-surgery.php" class="<?php echo ($current_page === 'service-pediatric-gi-surgery') ? 'active' : ''; ?>">Pediatric Gastrointestinal Surgery</a>
                </div>
            </div>
            <a href="gallery.php" class="<?php echo ($current_page === 'gallery') ? 'active' : ''; ?>">Gallery</a>
            <a href="international-patients.php" class="<?php echo ($current_page === 'intl') ? 'active' : ''; ?>">Intl. Patients</a>
            <a href="blog.php" class="<?php echo ($current_page === 'blog') ? 'active' : ''; ?>">Blog</a>
            <a href="contact.php" class="<?php echo ($current_page === 'contact') ? 'active' : ''; ?>">Contact</a>
        </nav>
        <a href="contact.php" class="btn btn-primary d-none-mobile">Book Appointment</a>
        <div class="menu-toggle"><span></span><span></span><span></span></div>
    </div>
</header>
