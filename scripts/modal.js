/**
 * Frogverse — Modal Manager
 *
 * Usage (HTML):
 *   <button data-modal-open="myModal">Open</button>
 *
 *   <div class="modal-overlay" id="myModal">
 *     <div class="card-container">
 *       ...
 *       <button data-modal-close="myModal">Close</button>
 *     </div>
 *   </div>
 *
 * The .modal-overlay starts hidden (display:none in CSS).
 * Opening adds .modal-overlay--visible (display:flex).
 * Clicking the backdrop (outside card-container) also closes.
 */
(function () {
  'use strict';

  /**
   * Open a modal by ID.
   * @param {string} id - The modal element ID.
   */
  function openModal(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('modal-overlay--visible');
  }

  /**
   * Close a modal by ID.
   * @param {string} id - The modal element ID.
   */
  function closeModal(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('modal-overlay--visible');
  }

  // Delegate clicks for data-modal-open / data-modal-close
  document.addEventListener('click', function (e) {
    // Open trigger
    var openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      openModal(openBtn.dataset.modalOpen);
      return;
    }

    // Close trigger
    var closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      closeModal(closeBtn.dataset.modalClose);
      return;
    }

    // Backdrop click (click fell directly on .modal-overlay, not its children)
    if (e.target.classList.contains('modal-overlay--visible')) {
      e.target.classList.remove('modal-overlay--visible');
    }
  });

  // Expose globally for inline onclick handlers that still exist
  window.openModal = openModal;
  window.closeModal = closeModal;
})();
