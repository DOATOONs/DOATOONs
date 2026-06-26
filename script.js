// Load header and footer dynamically
function loadComponent(elementId, filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Re-execute scripts in loaded content if needed
            const scripts = document.getElementById(elementId).querySelectorAll('script');
            scripts.forEach(script => {
                eval(script.textContent);
            });
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load header and footer on page load
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
});

// Smooth scroll for navigation links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Active navigation highlighting
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set active link after header is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(setActiveNavLink, 500);
});

// Update active link on page change
window.addEventListener('load', setActiveNavLink);
