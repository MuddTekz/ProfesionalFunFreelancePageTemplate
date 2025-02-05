/* script.js */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const darkModeToggle = document.getElementById("dark-mode-toggle");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
