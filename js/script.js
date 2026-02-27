// MSIH Open Arbitration Website - Interactive Functions

document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contributionForm = document.querySelector('.contribution-form');
    if (contributionForm) {
        contributionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const caseType = document.getElementById('case-type').value;
            const outcome = document.getElementById('outcome').value;
            const details = document.getElementById('details').value;
            
            // Basic validation
            if (!caseType || !outcome) {
                alert('Please select both Case Type and Outcome.');
                return;
            }
            
            // In a real application, this would send data to a server
            // For now, show a success message
            alert('Thank you for contributing to the Open Arbitration Database! Your submission has been recorded anonymously.');
            
            // Reset form
            contributionForm.reset();
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Search functionality placeholder
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        const searchInput = searchBox.querySelector('input');
        const searchButton = searchBox.querySelector('button');
        
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Search functionality would query the arbitration database for: "${query}"\n\nIn a full implementation, this would display search results.`);
                // In a real implementation, this would:
                // 1. Send search query to backend API
                // 2. Display results in a modal or results section
                // 3. Update UI with search results
            } else {
                alert('Please enter a search term.');
            }
        });
        
        // Allow Enter key to trigger search
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Stats counter animation (placeholder for future implementation)
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const finalValue = parseInt(stat.textContent);
            if (!isNaN(finalValue)) {
                // This would animate counting up in a real implementation
                // For now, just leave as static
            }
        });
    }
    
    // Initialize animations when stats come into view
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.database-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Mobile menu toggle (for future responsive enhancements)
    function initMobileMenu() {
        // This would be implemented when adding mobile hamburger menu
        console.log('Mobile menu ready for implementation');
    }
    
    initMobileMenu();
    
    // Update copyright year
    const yearElement = document.querySelector('footer .footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2026', currentYear);
    }
});