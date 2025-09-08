document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const overlay = document.getElementById("menu-overlay");

  // Toggle menu open/close
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");   // hamburger → X
    menu.classList.toggle("active");     // slide menu
    overlay.classList.toggle("active");  // show overlay
  });

  // Click overlay to close menu
  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");   // X → hamburger
    menu.classList.remove("active");     // slide menu out
    overlay.classList.remove("active");  // hide overlay
  });
});
