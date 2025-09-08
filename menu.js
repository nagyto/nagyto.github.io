document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("menu-overlay");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");  // hamburger → X
    menu.classList.toggle("active");    // slide menu
    overlay.classList.toggle("active"); // show overlay
  });

  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
