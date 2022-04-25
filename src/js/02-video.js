import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const KEY_LS = `video-current-time`;
const player = new Player('vimeo-player');

const parsedData = JSON.parse(localStorage.getItem(KEY_LS));
const prevTime = parsedData ? parsedData.seconds : 0;

player.setCurrentTime(prevTime);
function getCurrentTime(data) {
  const currentTime = data.seconds;
  localStorage.setItem(KEY_LS, JSON.stringify({ seconds: currentTime }));
  console.log(`${currentTime}`);
}

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
