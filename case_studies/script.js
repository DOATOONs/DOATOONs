// Case studies page specific functionality

document.addEventListener('DOMContentLoaded', function() {
    const caseStudyCards = document.querySelectorAll('.case-study');
    
    caseStudyCards.forEach((card, index) => {
        card.style.opacity = '0.8';
        card.style.transform = 'translateX(-20px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 100);
    });
});
