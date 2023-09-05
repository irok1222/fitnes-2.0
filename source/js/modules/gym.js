const button = document.querySelector('.gym-play');
const shadow = document.querySelector('.gym__shadow');

const clickButton = () => {
  const video = document.querySelector('.gym__video');
  if (!video) {
    return;
  }

  button.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      shadow.style.opacity = '0';
      button.style.opacity = '0';
    } else {
      video.pause();
      button.style.opacity = '1';
    }
  });
};

export { clickButton };
