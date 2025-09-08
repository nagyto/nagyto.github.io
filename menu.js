document.addEventListener("DOMContentLoaded", () => {
  // Get elements by ID (update per page)
  const toggle = document.getElementById("menu-toggle-about"); // change per page
  const menu = document.getElementById("menu-about");
  const overlay = document.getElementById("menu-overlay-about");

  if (!toggle || !menu || !overlay) return; // safety check

  // Toggle menu open/close
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");   // hamburger → X
    menu.classList.toggle("active");     // slide menu
    overlay.classList.toggle("active");  // overlay
  });

  // Click overlay to close
  overlay.addEventListener("click", () => {
    toggle.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Close menu when clicking any link
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
});
