(function () {
  'use strict';

  function openModal(id) {
    var el = document.getElementById(id);
    if (el) el.classList.add('modal-overlay--visible');
  }

  function closeModal(id) {
    var el = document.getElementById(id);
    if (el) el.classList.remove('modal-overlay--visible');
  }

  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-modal-open]');
    if (openBtn) {
      openModal(openBtn.dataset.modalOpen);
      return;
    }

    var closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn) {
      closeModal(closeBtn.dataset.modalClose);
      return;
    }

    if (e.target.classList.contains('modal-overlay--visible')) {
      e.target.classList.remove('modal-overlay--visible');
    }
  });

  window.openModal = openModal;
  window.closeModal = closeModal;
})();
