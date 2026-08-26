const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');

menuOpenButton.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    menuOverlay.classList.add('show-overlay');
});

menuCloseButton.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    menuOverlay.classList.remove('show-overlay');
});

menuOverlay.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    menuOverlay.classList.remove('show-overlay');
});
