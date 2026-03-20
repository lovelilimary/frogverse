'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const timerDays = document.getElementById('timerDays');
  const timerHours = document.getElementById('timerHours');
  const timerMins = document.getElementById('timerMins');
  const timerSecs = document.getElementById('timerSecs');

  let totalSeconds = 0;

  function updateTimer() {
    if (totalSeconds <= 0) {
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMins.textContent = '00';
      timerSecs.textContent = '00';
      return;
    }

    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    timerDays.textContent = String(d).padStart(2, '0');
    timerHours.textContent = String(h).padStart(2, '0');
    timerMins.textContent = String(m).padStart(2, '0');
    timerSecs.textContent = String(s).padStart(2, '0');

    totalSeconds--;
  }

  updateTimer();
  setInterval(updateTimer, 1000);

  const feedBtn = document.getElementById('feedBtn');
  const feedModalInline = document.getElementById('feedModalInline');
  const cancelFeedBtn = document.getElementById('cancelFeedBtn');
  const confirmFeedBtn = document.getElementById('confirmFeedBtn');
  const feedSuccessOverlay = document.getElementById('feedSuccessOverlay');
  const feedSuccessBtn = document.getElementById('feedSuccessBtn');

  const homeSections = ['tokenBadges', 'feedSection', 'statsSection', 'xpSection']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function showFeedModal() {
    homeSections.forEach(el => el.style.display = 'none');
    feedModalInline.style.display = 'block';
    if (typeof initGameButtons === 'function') initGameButtons();
  }

  function hideFeedModal() {
    feedModalInline.style.display = 'none';
    homeSections.forEach(el => el.style.display = '');
  }

  if (feedBtn) {
    feedBtn.addEventListener('click', showFeedModal);
  }

  if (cancelFeedBtn) {
    cancelFeedBtn.addEventListener('click', hideFeedModal);
  }

  if (confirmFeedBtn && feedSuccessOverlay) {
    confirmFeedBtn.addEventListener('click', () => {
      hideFeedModal();
      feedSuccessOverlay.style.display = 'flex';
      requestAnimationFrame(() => {
        if (typeof initGameButtons === 'function') initGameButtons();
      });
    });
  }

  if (feedSuccessBtn && feedSuccessOverlay) {
    feedSuccessBtn.addEventListener('click', () => {
      feedSuccessOverlay.style.display = 'none';
    });
  }

  const presetBtns = document.querySelectorAll('.feed-modal__preset');
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.style.outline = 'none');
      btn.style.outline = '2px solid #ffe18f';
      btn.style.outlineOffset = '-2px';
    });
  });

  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#frogImg', {
      y: -8,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.side-btn__icon-wrap', {
      scale: 1.05,
      duration: 1.5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.3,
    });

    gsap.to('.token-badge', {
      rotation: 5,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });

    gsap.to('#feedBtn', {
      filter: 'drop-shadow(0 0 12px rgba(255, 225, 143, 0.6))',
      duration: 1.5,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.feed-section__progress-fill', {
      backgroundPosition: '200% center',
      duration: 2,
      ease: 'none',
      repeat: -1,
    });
  }

  const sideButtons = {
    'btnRental': 'rental.html',
    'btnLeaderboard': 'leaderboard.html',
    'btnWallet': 'wallet.html',
    'btnRewards': 'rewards.html',
  };

  Object.entries(sideButtons).forEach(([id, page]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        console.log(`Navigate to: ${page}`);
      });
    }
  });

});
