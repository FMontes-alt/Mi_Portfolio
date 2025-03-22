document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
            header.classList.add("hide-header"); // Ocultar al bajar
        } else {
            header.classList.remove("hide-header"); // Mostrar al subir
        }

        lastScrollY = window.scrollY;
    });
});