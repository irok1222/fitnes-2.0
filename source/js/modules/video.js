const video = document.getElementsByTagName('#video');
const button = document.getElementById('gym__btn');

const play = () => video.addEventListener('play', (evt) => {
  video.play();
});


export {play};
