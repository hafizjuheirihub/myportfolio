// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Exclude certificate links from smooth scroll
        if (!this.classList.contains('certificate-link')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
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

// --- CERTIFICATE MODAL SCRIPT ---
// Get the modal elements
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImage");
const certificateLinks = document.querySelectorAll(".certificate-link");
const closeModalButton = document.getElementById("closeModalButton");

// Function to open modal
function openModal(imageSrc) {
    if (modal && modalImg) {
        modal.style.display = "flex"; // Use flex to enable centering
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

// Function to close modal
function closeModal() {
    if (modal) {
        modal.style.display = "none";
        modalImg.src = ""; // Clear image src to avoid showing old image briefly
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }
}

// Add click listeners to all certificate links
certificateLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        const imageSrc = this.getAttribute("data-image-src");
        openModal(imageSrc);
    });
});

// Add click listener to the close button
if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
}

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Close the modal with the Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal && modal.style.display === "flex") {
        closeModal();
    }
});
