const initSwiper = new Swiper('.feedback__swiper', {
  cssMode: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.feedback__button--next',
    prevEl: '.feedback__button--prev',
  },
});

export {initSwiper};
