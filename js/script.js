document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // 2. Sticky Navbar & Scroll detection
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // 4. Counter Animation for Experience Section
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter-number');
        
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / 50; // Controls speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger counters when scrolled into view
    const counterSection = document.querySelector('.experience-section');
    if (counterSection) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.unobserve(counterSection);
            }
        }, { threshold: 0.5 });
        counterObserver.observe(counterSection);
    }
    
    // 5. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        if (header) {
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all others
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    const content = faq.querySelector('.faq-content');
                    if (content) content.style.maxHeight = null;
                });

                if (!isActive) {
                    item.classList.add('active');
                    const content = item.querySelector('.faq-content');
                    if (content) {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                }
            });
        }
    });

    // 6. Hero Slider Auto-Scroll
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (sliderContainer && slides.length > 0) {
        let currentSlideIndex = 0;
        const totalSlides = slides.length;
        
        const updateSlider = () => {
            sliderContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
        };

        const nextSlide = () => {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
            updateSlider();
        };

        // Auto scroll every 4 seconds
        let sliderInterval = setInterval(nextSlide, 4000);

        // Allow manual dot clicking globally
        window.goToSlide = (index) => {
            currentSlideIndex = index;
            updateSlider();
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, 4000); // reset interval
        };
    }

    // 7. Reviews Auto-Scroll
    const reviewsContainer = document.querySelector('#reviews .scroll-container');
    if (reviewsContainer) {
        let reviewsInterval;
        const startReviewsScroll = () => {
             reviewsInterval = setInterval(() => {
                 const card = reviewsContainer.querySelector('.card');
                 if(!card) return;
                 const cardWidth = card.offsetWidth + 32; 
                 if (reviewsContainer.scrollLeft + reviewsContainer.clientWidth >= reviewsContainer.scrollWidth - 10) {
                     reviewsContainer.scrollTo({ left: 0, behavior: 'smooth' });
                 } else {
                     reviewsContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
                 }
             }, 3500);
        };
        startReviewsScroll();
        reviewsContainer.addEventListener('mouseenter', () => clearInterval(reviewsInterval));
        reviewsContainer.addEventListener('mouseleave', startReviewsScroll);
        reviewsContainer.addEventListener('touchstart', () => clearInterval(reviewsInterval), {passive: true});
        reviewsContainer.addEventListener('touchend', startReviewsScroll, {passive: true});
    }

    // 8. Patient Images Auto-Scroll
    const patientContainers = document.querySelectorAll('.patient-scroll-container');
    patientContainers.forEach(container => {
        let interval;
        const startScroll = () => {
            interval = setInterval(() => {
                const card = container.querySelector('.patient-scroll-card');
                if (!card) return;
                const cardWidth = card.offsetWidth + 24; 
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
                }
            }, 3000);
        };
        startScroll();
        container.addEventListener('mouseenter', () => clearInterval(interval));
        container.addEventListener('mouseleave', startScroll);
        container.addEventListener('touchstart', () => clearInterval(interval), {passive: true});
        container.addEventListener('touchend', startScroll, {passive: true});
    });
});
