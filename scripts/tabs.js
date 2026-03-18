/**
 * Frogverse — Generic Tab Switcher
 *
 * Usage (HTML):
 *   <div data-tab-group="myTabs">
 *     <button data-tab-target="panelA" class="game-btn game-btn--gold">Tab A</button>
 *     <button data-tab-target="panelB" class="game-btn game-btn--gray">Tab B</button>
 *   </div>
 *   <div id="panelA" data-tab-panel="myTabs">Content A</div>
 *   <div id="panelB" data-tab-panel="myTabs" hidden>Content B</div>
 *
 * The first visible panel is active by default.
 * Active tab gets .game-btn--gold, inactive gets .game-btn--gray.
 */
(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-tab-target]');
    if (!btn) return;

    const group = btn.closest('[data-tab-group]');
    if (!group) return;

    const groupName = group.dataset.tabGroup;
    const targetId  = btn.dataset.tabTarget;

    // Hide all panels in this group
    document.querySelectorAll('[data-tab-panel="' + groupName + '"]').forEach(function (panel) {
      panel.hidden = panel.id !== targetId;
    });

    // Toggle button styles
    group.querySelectorAll('[data-tab-target]').forEach(function (tabBtn) {
      const isActive = tabBtn.dataset.tabTarget === targetId;
      tabBtn.classList.toggle('game-btn--gold', isActive);
      tabBtn.classList.toggle('game-btn--gray', !isActive);
    });
  });
})();
