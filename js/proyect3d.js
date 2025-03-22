document.addEventListener("DOMContentLoaded", () => {
    const orbit = document.getElementById("project-orbit");
    const items = orbit.querySelectorAll(".portfolio-item");
    const total = items.length;
    const radius = 200; // distancia desde el centro

    items.forEach((item, i) => {
        const angle = (360 / total) * i;
        item.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
});