document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active"); // Muestra/oculta el menú
        menuToggle.classList.toggle("open");  // Cambia el estilo del botón
    });
});