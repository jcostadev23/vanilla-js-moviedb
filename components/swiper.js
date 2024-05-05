function startSwiper() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    direction: "horizontal",
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 6,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

window.addEventListener("resize", startSwiper);
