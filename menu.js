document.querySelectorAll('.navbar').forEach(navbar => {
  const toggle = navbar.querySelector('.menu-toggle');
  const menu = navbar.querySelector('.menu');
  const overlay = document.getElementById('menu-overlay');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    toggle.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });
});
