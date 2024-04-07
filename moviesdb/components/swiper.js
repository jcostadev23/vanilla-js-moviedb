let swiper;

function startSwiper() {
  swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function updateSlides() {
  if (typeof Swiper !== undefined) {
    startSwiper();
  } else {
    document.addEventListener('DOMContentLoaded', startSwiper);
  }

  if (window.innerWidth <= 760) {
    swiper.params.slidesPerView = 2;
  }

  swiper.update();
}

updateSlides();
window.addEventListener('resize', updateSlides);
