// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle project details
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const details = document.getElementById(targetId);
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            this.textContent = 'Read Less';
        } else {
            details.classList.add('hidden');
            this.textContent = 'Read More';
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenuButton = document.getElementById('close-mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Optional: Highlight active navigation link on scroll
// ... (other parts of your script.js) ...

const sections = document.querySelectorAll('main section[id]');
const navLinksDesktop = document.querySelectorAll('.nav-links a');
const navLinksMobile = document.querySelectorAll('.mobile-menu-link');
const headerHeight = document.querySelector('header')?.offsetHeight || 74; // Or your actual header height

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 20; // Adjusted offset
        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinksDesktop.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
    navLinksMobile.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});

