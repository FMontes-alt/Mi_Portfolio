document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    const fondoOscuro = "url('assets/images/bd.jpg')";
    const fondoClaro = "url('assets/images/bd-light.jpg')";

    function aplicarTemaClaro() {
        body.classList.add("light-theme");
        themeToggle.textContent = "🌞";
        body.style.backgroundImage = fondoClaro;
        localStorage.setItem("theme", "light");
    }

    function aplicarTemaOscuro() {
        body.classList.remove("light-theme");
        themeToggle.textContent = "🌙";
        body.style.backgroundImage = fondoOscuro;
        localStorage.setItem("theme", "dark");
    }

    // Al cargar, aplicar el tema guardado
    if (localStorage.getItem("theme") === "light") {
        aplicarTemaClaro();
    } else {
        aplicarTemaOscuro();
    }

    // Cambiar tema al pulsar el botón
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-theme")) {
            aplicarTemaOscuro();
        } else {
            aplicarTemaClaro();
        }
    });
});
