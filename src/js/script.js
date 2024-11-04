// AOS
AOS.init({
  once: true,
});

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

// accordion
const accordion = document.querySelectorAll('.accordion__item');

accordion.forEach((item) => {
  const label = item.querySelector('.accordion__item-label');
  const content = item.querySelector('.accordion__item-content');

  label.addEventListener('click', () => {
    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }

    // rotate icon
    const icon = label.querySelector('.icon');
    if (icon) {
      icon.style.transform = item.classList.contains('active')
        ? 'rotate(180deg)'
        : 'rotate(0deg)';
    }
  });
});
// accordion end
