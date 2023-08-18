const swiper = new Swiper('.coach__swiper', {
  cssMode: true,
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.coach__button--next',
    prevEl: '.coach__button--prev',
  },

  breakpoints: {

    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1199: {
      slidesPerView: 4,
    },
  },
});
export {swiper};
