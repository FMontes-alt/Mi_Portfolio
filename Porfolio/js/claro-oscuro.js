document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
        });
    }
});
