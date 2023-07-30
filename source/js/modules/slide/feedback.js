import {Swiper} from '../../vendor/swiper';

export const initswiper = () => new Swiper('.feedback__swiper', {
  cssMode: true,
  navigation: {
    nextEl: '.feedback-button-next',
    prevEl: '.feedback-button-prev',
  },
});
