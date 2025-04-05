function toggleMenu() {
  const menu = document.querySelector(".ham-icon");
  const nav = document.querySelector(".nav-ham-links");
  menu.classList.toggle("open");
  nav.classList.toggle("open");
}
