import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const playOn = function (duration) {
  const currentTime = duration.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime.toString());
};

player.on('timeupdate', throttle(playOn, 1000));

const playedTime = localStorage.getItem(LOCALSTORAGE_KEY);

player
  .setCurrentTime(playedTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
