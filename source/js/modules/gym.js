const video = document.getElementById('video');
const button = document.querySelector('.gym-play');
const shadow = document.querySelector('.gym__shadow');
const closest = video.closest(('[data-validate="video"]'));


function handler() {
  if (closest) {
    if (video.paused) {
      video.play();
      shadow.style.opacity = '0';
      button.style.opacity = '0';
    } else {
      video.pause();
      button.style.opacity = '1';
    }
  }
}

const clickButton = button.addEventListener('click', handler);

export { clickButton };
