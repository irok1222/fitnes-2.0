import {Swiper} from '../../vendor/swiper';

export const swiper = () => new Swiper('.coach__swiper', {
  cssMode: true,
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
