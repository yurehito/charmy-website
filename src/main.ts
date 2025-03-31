import './styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger') as HTMLElement | null;
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
    const scrollTopBtn = document.querySelector('.scroll-top-btn') as HTMLElement | null;

    // Toggle mobile menu
    hamburger?.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.hamburger') && !target.closest('.nav-links') && navLinks?.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e: Event) {
            e.preventDefault();
            const target = e.target as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href) {
                document.querySelector(href)?.scrollIntoView({
                    behavior: 'smooth'
                });
                navLinks?.classList.remove('active');
                document.body.style.overflow = '';
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
