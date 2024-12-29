document.addEventListener('DOMContentLoaded', function () {
    new Splide('#carousel', {
        type: 'loop',
        autoplay: true,
        pauseOnHover: true,
        interval: 4000,
        arrows: true,  // Flechas para navegar
        pagination: false,  // Ocultar puntos de paginación
    }).mount();
}); 