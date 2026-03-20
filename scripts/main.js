'use strict';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
  });

  gsap.registerPlugin(ScrollTrigger);
});
