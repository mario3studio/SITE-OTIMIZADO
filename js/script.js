document.addEventListener('DOMContentLoaded', () => {
    // Função para clonar os elementos do slider
    function setupSliderClones(selector) {
        const track = document.querySelector(selector);
        if (track) {
            const elements = [...track.children];
            elements.forEach(element => {
                const clone = element.cloneNode(true);
                track.appendChild(clone);
            });
        }
    }
    
    setupSliderClones('.slider-track');
    setupSliderClones('.slider-galery-track');
    setupSliderClones('.slider-track-servicos');

    // Funcionalidade para o menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-container');

    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menuList.hidden = isExpanded;
        });
    }
});