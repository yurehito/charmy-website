document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
    const scrollTopBtn = document.querySelector('.scroll-top-btn') as HTMLElement | null;

    // Toggle mobile menu
    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                document.querySelector(href)?.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu after clicking a link
                navLinks?.classList.remove('active');
            }
        });
    });

    // Scroll to top button visibility
    window.addEventListener('scroll', () => {
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    // Scroll to top functionality
    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
