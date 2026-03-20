let _uid = 0;
const uid = (p) => `${p}${++_uid}`;

const BTN_R = 6;
const BTN_K = BTN_R * 0.5523;
const FRAME_R = 15;
const FRAME_K = FRAME_R * 0.5523;

function buildNotchPath(w, h, r, k) {
  return [
    `M ${w - r} 0`,
    `C ${w - r} ${k}, ${w - k} ${r}, ${w} ${r}`,
    `V ${h - r}`,
    `C ${w - k} ${h - r}, ${w - r} ${h - k}, ${w - r} ${h}`,
    `H ${r}`,
    `C ${r} ${h - k}, ${k} ${h - r}, 0 ${h - r}`,
    `V ${r}`,
    `C ${k} ${r}, ${r} ${k}, ${r} 0`,
    `H ${w - r}`,
    `Z`
  ].join(' ');
}

function buttonSVG(w, h) {
  const gid = uid('bg');
  const path = buildNotchPath(w, h, BTN_R, BTN_K);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
  <defs><linearGradient id="${gid}" x1="${w / 2}" y1="0" x2="${w / 2}" y2="${h}" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="var(--btn-fill-top)"/><stop offset="1" stop-color="var(--btn-fill-bottom)"/>
  </linearGradient></defs>
  <path d="${path}" fill="url(#${gid})" stroke="var(--btn-stroke)" stroke-width="2"/>
</svg>`;
}

function applyBg(btn) {
  const w = btn.offsetWidth;
  const h = btn.offsetHeight;
  if (w === 0 || h === 0) return;

  let bg = btn.querySelector('.game-btn__bg');
  if (!bg) {
    bg = document.createElement('div');
    bg.className = 'game-btn__bg';
    btn.insertBefore(bg, btn.firstChild);
  }
  bg.innerHTML = buttonSVG(w, h);

  btn.querySelectorAll(':scope > span').forEach(s => {
    if (!s.classList.contains('game-btn__text')) s.classList.add('game-btn__text');
  });
}

function frameFillSVG(w, h) {
  const path = buildNotchPath(w, h, FRAME_R, FRAME_K);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="position:absolute;inset:0;z-index:-1;pointer-events:none;">
  <path d="${path}" fill="var(--frame-bg, rgba(0,0,0,0.85))"/>
</svg>`;
}

function applyFrameFill(frame) {
  const w = frame.offsetWidth;
  const h = frame.offsetHeight;
  if (w === 0 || h === 0) return;

  let fill = frame.querySelector('.game-frame__fill');
  if (!fill) {
    fill = document.createElement('div');
    fill.className = 'game-frame__fill';
    fill.style.cssText = 'position:absolute;inset:-20px;z-index:-1;pointer-events:none;';
    frame.insertBefore(fill, frame.firstChild);
  }
  fill.innerHTML = frameFillSVG(w, h);
}

function initGameButtons() {
  document.querySelectorAll('.game-btn').forEach(applyBg);
  document.querySelectorAll('.game-frame--filled').forEach(applyFrameFill);
}

let _resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(() => {
    document.querySelectorAll('.game-btn').forEach(applyBg);
    document.querySelectorAll('.game-frame--filled').forEach(applyFrameFill);
  }, 100);
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGameButtons);
} else {
  initGameButtons();
}
