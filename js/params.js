'use strict';

(function() {
  const params = new URLSearchParams(window.location.search);
  window.starConf = {
    transparent: params.has('transparent'),
    background: params.get('background') || params.get('bg'),
    stars: params.get('stars') || 200,
    speed: (Number(params.get('speed')) || 1) * 0.4,
    radius: Math.min(params.get('radius') || params.get('r') || 200, 1400), // depth * sqrt(2) - ~15 = 1400
  };
})();

document.addEventListener('DOMContentLoaded', function () {
  const bg = document.getElementsByClassName('bg')[0];

  if (starConf.transparent) {
    bg.classList.add('d-none');
  }

  if (starConf.background) {
    bg.getElementsByTagName('img')[0].src = starConf.background;
  }
});
