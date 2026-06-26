// Contact page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const company = document.getElementById('company').value.trim();
            const service = document.getElementById('service').value;
            const budget = document.getElementById('budget').value;
            const message = document.getElementById('message').value.trim();

            // Validate form
            if (!name || !email || !service || !message) {
                showMessage('Please fill out all required fields.', 'error');
                return;
            }

            // Validate email
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Prepare form data
            const formData = {
                name: name,
                email: email,
                phone: phone,
                company: company,
                service: service,
                budget: budget,
                message: message,
                timestamp: new Date().toISOString()
            };

            // Log form data (in production, this would be sent to a server)
            console.log('Form submitted:', formData);

            // Save to localStorage as demo
            const submissions = JSON.parse(localStorage.getItem('contactFormSubmissions') || '[]');
            submissions.push(formData);
            localStorage.setItem('contactFormSubmissions', JSON.stringify(submissions));

            // Show success message
            showMessage('Thank you! We\'ve received your message and will get back to you within 24 hours.', 'success');

            // Reset form
            contactForm.reset();

            // Clear message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Animate FAQ items on scroll
    const faqItems = document.querySelectorAll('.faq-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    faqItems.forEach(item => {
        item.style.opacity = '0.7';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
});
