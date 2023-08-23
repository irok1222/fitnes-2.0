import { iosVhFix } from './utils/ios-vh-fix';
import { Form } from './modules/form-validate/form';
import { initModals } from './modules/modals/init-modals';
import { swiper } from './modules/slide/coach';
import { initSwiper } from './modules/slide/feedback';
import { initTabs } from './modules/init-tabs';
import { initAccordions } from './modules/init-accordion';


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();

  // Modules
  const viewElement = document.getElementById('subscription');
  const btn = document.querySelector('.hero__button');

  function handleButtonClick() {
    viewElement.scrollIntoView({block: 'center', behavior: 'smooth'});
  }

  btn.addEventListener('click', handleButtonClick);

  const video = document.querySelector('.gym__video');
  const button = document.querySelector('.gym-play');
  const shadow = document.querySelector('.gym__shadow');

  button.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      shadow.style.opacity = '0';
      button.style.opacity = '0';
    } else {
      video.pause();
      button.style.opacity = '1';
    }
  }, false);
  initTabs();
  initAccordions();

  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
