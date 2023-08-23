const initSwiper = new Swiper('.feedback__swiper', {
  cssMode: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.feedback-button--next',
    prevEl: '.feedback-button--prev',
  },
});

export {initSwiper};
