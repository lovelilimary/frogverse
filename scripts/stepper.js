(function () {
  'use strict';

  document.addEventListener('click', function (e) {
    var container, valueEl, current, min, max;

    if (e.target.closest('[data-stepper-inc]')) {
      container = e.target.closest('.qty-stepper');
      if (!container) return;
      valueEl = container.querySelector('[data-stepper-value]');
      current = parseInt(valueEl.textContent, 10) || 1;
      max     = parseInt(container.dataset.stepperMax, 10) || 99;
      if (current < max) valueEl.textContent = current + 1;
      return;
    }

    if (e.target.closest('[data-stepper-dec]')) {
      container = e.target.closest('.qty-stepper');
      if (!container) return;
      valueEl = container.querySelector('[data-stepper-value]');
      current = parseInt(valueEl.textContent, 10) || 1;
      min     = parseInt(container.dataset.stepperMin, 10) || 1;
      if (current > min) valueEl.textContent = current - 1;
      return;
    }
  });

  function goToStep(wizardName, stepNum) {
    document.querySelectorAll('[data-wizard="' + wizardName + '"] [data-wizard-step]').forEach(function (panel) {
      panel.hidden = parseInt(panel.dataset.wizardStep, 10) !== stepNum;
    });

    document.querySelectorAll('[data-wizard-dot="' + wizardName + '"]').forEach(function (dot) {
      var dotStep = parseInt(dot.dataset.dotStep, 10);
      dot.classList.toggle('step-dot--active', dotStep === stepNum);
      dot.classList.toggle('step-dot--done', dotStep < stepNum);
    });
  }

  document.addEventListener('click', function (e) {
    var btn, wizardName, current, steps, currentStep;

    btn = e.target.closest('[data-wizard-next]');
    if (btn) {
      wizardName = btn.dataset.wizardNext;
      steps = document.querySelectorAll('[data-wizard="' + wizardName + '"] [data-wizard-step]');
      current = 1;
      steps.forEach(function (panel) {
        if (!panel.hidden) current = parseInt(panel.dataset.wizardStep, 10);
      });
      if (current < steps.length) goToStep(wizardName, current + 1);
      return;
    }

    btn = e.target.closest('[data-wizard-prev]');
    if (btn) {
      wizardName = btn.dataset.wizardPrev;
      steps = document.querySelectorAll('[data-wizard="' + wizardName + '"] [data-wizard-step]');
      current = 1;
      steps.forEach(function (panel) {
        if (!panel.hidden) current = parseInt(panel.dataset.wizardStep, 10);
      });
      if (current > 1) goToStep(wizardName, current - 1);
      return;
    }

    btn = e.target.closest('[data-wizard-goto]');
    if (btn) {
      wizardName = btn.dataset.wizardGoto.split(':')[0];
      currentStep = parseInt(btn.dataset.wizardGoto.split(':')[1], 10);
      goToStep(wizardName, currentStep);
    }
  });

  window.goToStep = goToStep;
})();
