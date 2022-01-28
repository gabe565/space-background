'use strict';

window.starConf = new URLSearchParams(window.location.search);

document.addEventListener('DOMContentLoaded', function () {
  const bg = document.getElementsByClassName('bg')[0];

  if (starConf.has('transparent')) {
    bg.classList.add('d-none');
  }

  if (starConf.has('bg')) {
    bg.getElementsByTagName('img')[0].src = starConf.get('bg');
  }
});
