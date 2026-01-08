// Octagon Solutions - Main Script

// 1. Tailwind Configuration
// 1. Tailwind Configuration
// MOVED TO index.html (Inline) to ensure proper loading order with CDN.


// 2. DOMContentLoaded Logic
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const btnMobile = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (btnMobile && mobileMenu) {
        btnMobile.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-brand-black/95');
                navbar.classList.remove('bg-transparent'); // Assuming we start transparent on hero
            } else {
                navbar.classList.toggle('shadow-lg', window.scrollY > 50);
            }
        });
    }

    // --- Intersection Observer for Fade-in Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

});
