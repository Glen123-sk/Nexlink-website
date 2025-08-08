// Navbar Scroll Animation
window.addEventListener('scroll-Weiter', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Services Card Scroll Animation
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% of card is visible
);

cards.forEach((card) => observer.observe(card));
