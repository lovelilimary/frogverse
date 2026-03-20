(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-tab-target]');
    if (!btn) return;

    const group = btn.closest('[data-tab-group]');
    if (!group) return;

    const groupName = group.dataset.tabGroup;
    const targetId  = btn.dataset.tabTarget;

    document.querySelectorAll('[data-tab-panel="' + groupName + '"]').forEach(function (panel) {
      panel.hidden = panel.id !== targetId;
    });

    group.querySelectorAll('[data-tab-target]').forEach(function (tabBtn) {
      const isActive = tabBtn.dataset.tabTarget === targetId;
      tabBtn.classList.toggle('game-btn--gold', isActive);
      tabBtn.classList.toggle('game-btn--gray', !isActive);
    });
  });
})();
