// Services page specific functionality

// Animate service cards on scroll
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    serviceCards.forEach(card => {
        card.style.opacity = '0.7';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
});

// Handle service selection
function selectService(serviceName) {
    console.log('Selected service:', serviceName);
    // Can be extended with more functionality
}
