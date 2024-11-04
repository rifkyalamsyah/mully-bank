// header
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('hidden');
});
// header end

// swiper js
const swiperEl = document.querySelector('swiper-container');
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
swiperEl.initialize();
// swiper js end
