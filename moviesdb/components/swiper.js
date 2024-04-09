let swiper;

function startSwiper() {
  const slidesPerView = window.innerWidth <= 760 ? 2 : 4
  swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: slidesPerView,
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

window.addEventListener('resize', startSwiper);
