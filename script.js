// Animation on Scroll
document.addEventListener('DOMContentLoaded', () => {
    // Animate elements with data-aos attribute
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-aos]');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const animationType = element.getAttribute('data-aos');
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add(animationType);
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('pulse');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('pulse');
        });
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('shake');
        });
        
        button.addEventListener('animationend', () => {
            button.classList.remove('shake');
        });
    });
    
    // Add hover effects to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.classList.add('rotate');
        });
        
        link.addEventListener('mouseleave', () => {
            link.classList.remove('rotate');
        });
    });
    
    // Add hover effects to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.portfolio-img img').classList.add('glow');
        });
        
        item.addEventListener('mouseleave', () => {
            item.querySelector('.portfolio-img img').classList.remove('glow');
        });
    });
    
    // Hero text animation
    const heroTitle = document.querySelector('.hero-title');
    setTimeout(() => {
        heroTitle.classList.add('animate-text');
    }, 500);
    
    // Hero image animation
    const heroImage = document.querySelector('.animate-float');
    setTimeout(() => {
        heroImage.style.opacity = '1';
    }, 300);
    
    // Section header animations
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 500);
    });
    
    // Service card animations
    const serviceCardsAll = document.querySelectorAll('.service-card');
    serviceCardsAll.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 800);
    });
    
    // Testimonial animations
    const testimonials = document.querySelector('.testimonials-slider');
    testimonials.style.opacity = '0';
    
    setTimeout(() => {
        testimonials.style.transition = 'opacity 0.5s ease';
        testimonials.style.opacity = '1';
    }, 1200);
});
