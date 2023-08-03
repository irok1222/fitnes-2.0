const videoEl = document.getElementsByTagName('video');
const button = document.getElementById('gym__btn');

const play = () => button.addEventListener('click', function () {
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
});

export {play};


l
