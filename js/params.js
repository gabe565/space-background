'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const bg = document.getElementsByClassName('bg')[0];

    if (params.has('transparent')) {
        bg.classList.add('d-none');
    }
});
