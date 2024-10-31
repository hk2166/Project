// Alert on Button Click in Hero Section
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('.btn');

  startButton.addEventListener('click', () => {
    alert('Welcome! Thanks for getting started with us.');
  });
});

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hover Effect for Feature Cards with Overlay Text
document.querySelectorAll('.feature-card').forEach(card => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.textContent = 'Explore More';
  overlay.style.position = 'absolute';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  overlay.style.color = 'white';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.3s ease';

  card.style.position = 'relative';
  card.appendChild(overlay);

  card.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
  });

  card.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
});
