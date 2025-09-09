const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  menuToggle.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
});
