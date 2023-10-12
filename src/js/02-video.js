import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LS_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(LS_KEY, data.seconds ?? 0);
  }, 1000)
);

if (localStorage.getItem(LS_KEY)) {
  const time = localStorage.getItem(LS_KEY);
  player.setCurrentTime(time);
}
