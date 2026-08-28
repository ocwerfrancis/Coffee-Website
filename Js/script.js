const navLinks = document.querySelectorAll('.nav-menu .nav-link')
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

for (const link of navLinks) {
    link.addEventListener('click', () => menuCloseButton.click());
}

menuOverlay.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    menuOverlay.classList.remove('show-overlay');
});


document.addEventListener('DOMContentLoaded', function () {
    new Typed('#typed-text', {
        strings: [
            'Make your day great with our special Coffee!',
            'Freshly brewed, every single day.',
            'Where every cup tells a story.',
            'Your favorite coffee spot in town.',
            'Rich flavor. Warm moments.'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
    });
});

const swiper = new Swiper('.slider-wrapper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});