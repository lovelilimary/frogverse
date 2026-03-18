/**
 * Frogverse — Quantity Stepper & Step Wizard
 *
 * === Quantity Stepper ===
 * Usage (HTML):
 *   <div class="qty-stepper">
 *     <button class="qty-stepper__btn" data-stepper-dec>−</button>
 *     <span class="qty-stepper__value" data-stepper-value>1</span>
 *     <button class="qty-stepper__btn" data-stepper-inc>+</button>
 *   </div>
 *
 * Optional: data-stepper-min="1" data-stepper-max="99" on the container.
 *
 * === Step Wizard ===
 * Usage (HTML):
 *   <div data-wizard="promo">
 *     <div data-wizard-step="1">Step 1 content</div>
 *     <div data-wizard-step="2" hidden>Step 2 content</div>
 *     <div data-wizard-step="3" hidden>Step 3 content</div>
 *   </div>
 *   <button data-wizard-next="promo">Next</button>
 *   <button data-wizard-prev="promo">Back</button>
 *
 * Step indicator dots update automatically if present:
 *   <span data-wizard-dot="promo" data-dot-step="1" class="step-dot step-dot--active"></span>
 */
(function () {
  'use strict';

  // ===================== QUANTITY STEPPER =====================
  document.addEventListener('click', function (e) {
    var container, valueEl, current, min, max;

    // Increment
    if (e.target.closest('[data-stepper-inc]')) {
      container = e.target.closest('.qty-stepper');
      if (!container) return;
      valueEl = container.querySelector('[data-stepper-value]');
      current = parseInt(valueEl.textContent, 10) || 1;
      max     = parseInt(container.dataset.stepperMax, 10) || 99;
      if (current < max) valueEl.textContent = current + 1;
      return;
    }

    // Decrement
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

  // ===================== STEP WIZARD =====================
  function goToStep(wizardName, stepNum) {
    // Toggle panels
    document.querySelectorAll('[data-wizard="' + wizardName + '"] [data-wizard-step]').forEach(function (panel) {
      panel.hidden = parseInt(panel.dataset.wizardStep, 10) !== stepNum;
    });

    // Update step dots
    document.querySelectorAll('[data-wizard-dot="' + wizardName + '"]').forEach(function (dot) {
      var dotStep = parseInt(dot.dataset.dotStep, 10);
      dot.classList.toggle('step-dot--active', dotStep === stepNum);
      dot.classList.toggle('step-dot--done', dotStep < stepNum);
    });
  }

  document.addEventListener('click', function (e) {
    var btn, wizardName, current, steps, currentStep;

    // Next button
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

    // Previous button
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

    // Direct step jump
    btn = e.target.closest('[data-wizard-goto]');
    if (btn) {
      wizardName = btn.dataset.wizardGoto.split(':')[0];
      currentStep = parseInt(btn.dataset.wizardGoto.split(':')[1], 10);
      goToStep(wizardName, currentStep);
    }
  });

  // Expose for inline handlers
  window.goToStep = goToStep;
})();
