// Select elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.getElementById('menu-overlay');

// Toggle menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close menu when overlay clicked
overlay.addEventListener('click', () => {
  menuToggle.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
});
