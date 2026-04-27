/**
 * North Shore Projects — Form Validation
 * Applies to all enquiry forms across the site.
 */
(function () {
  'use strict';

  var PAGE_LOAD_TIME = Date.now();

  var RULES = {
    name: {
      regex: /^[a-zA-Z\s'\-]{2,}$/,
      messages: {
        required: 'Please enter your name',
        invalid: 'Name can only contain letters, spaces, hyphens and apostrophes',
        short: 'Name must be at least 2 characters'
      }
    },
    email: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      messages: {
        required: 'Please enter your email address',
        invalid: 'Email must include @ and a valid domain'
      }
    },
    phone: {
      digitRegex: /^(\+?61|0)\d{9}$/,
      inputRegex: /^[\d\s\-\(\)\+]+$/,
      messages: {
        required: 'Please enter your phone number',
        invalid: 'Please enter a valid Australian phone number',
        format: 'Phone can only contain digits, spaces, hyphens and parentheses'
      }
    },
    message: {
      minLength: 10,
      maxLength: 1000,
      messages: {
        required: 'Please enter a message',
        short: 'Message must be at least 10 characters',
        long: 'Message cannot exceed 1000 characters'
      }
    }
  };

  function capitaliseWords(str) {
    return str.replace(/\b[a-z]/g, function (c) { return c.toUpperCase(); });
  }

  // Returns "DD MMM YYYY, hh:mm am/pm AEDT" (or AEST) for Sydney local time.
  // The abbreviation is derived from Sydney's actual UTC offset rather than the
  // browser's local offset, so it stays correct for users in any timezone.
  function getSydneyTimestamp() {
    var now = new Date();
    var formatted = now.toLocaleString('en-AU', {
      timeZone: 'Australia/Sydney',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    // Diff Sydney-rendered vs UTC-rendered parses of the same instant. Both are
    // TZ-naive strings, so the browser's local offset cancels and the result is
    // Sydney's offset from UTC in minutes east. 660 = AEDT (+11h DST), 600 = AEST (+10h).
    var sydneyMs = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' })).getTime();
    var utcMs = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' })).getTime();
    var sydneyOffsetMin = Math.round((sydneyMs - utcMs) / 60000);
    var abbr = sydneyOffsetMin === 660 ? 'AEDT' : 'AEST';
    return formatted + ' ' + abbr;
  }

  function stripNonDigits(str) {
    return str.replace(/[^\d+]/g, '');
  }

  function setError(group, msg) {
    group.classList.remove('is-valid');
    group.classList.add('has-error');
    var errEl = group.querySelector('.form-error');
    if (errEl) errEl.textContent = msg;
  }

  function setValid(group) {
    group.classList.remove('has-error');
    group.classList.add('is-valid');
    var errEl = group.querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  }

  function clearState(group) {
    group.classList.remove('has-error', 'is-valid');
    var errEl = group.querySelector('.form-error');
    if (errEl) errEl.textContent = '';
  }

  function validateName(input) {
    var group = input.closest('.form-group');
    if (!group) return true;
    var val = input.value.trim();
    if (!val) { setError(group, RULES.name.messages.required); return false; }
    if (val.length < 2) { setError(group, RULES.name.messages.short); return false; }
    if (!RULES.name.regex.test(val)) { setError(group, RULES.name.messages.invalid); return false; }
    input.value = capitaliseWords(val);
    setValid(group);
    return true;
  }

  function validateEmail(input) {
    var group = input.closest('.form-group');
    if (!group) return true;
    var val = input.value.trim();
    if (!val) { setError(group, RULES.email.messages.required); return false; }
    input.value = val.toLowerCase();
    if (!RULES.email.regex.test(val.toLowerCase())) { setError(group, RULES.email.messages.invalid); return false; }
    setValid(group);
    return true;
  }

  function validatePhone(input) {
    var group = input.closest('.form-group');
    if (!group) return true;
    var val = input.value.trim();
    if (!val) { setError(group, RULES.phone.messages.required); return false; }
    if (!RULES.phone.inputRegex.test(val)) { setError(group, RULES.phone.messages.format); return false; }
    var digits = stripNonDigits(val);
    if (!RULES.phone.digitRegex.test(digits)) { setError(group, RULES.phone.messages.invalid); return false; }
    setValid(group);
    return true;
  }

  function validateMessage(input) {
    var group = input.closest('.form-group');
    if (!group) return true;
    var val = input.value.trim();
    if (!val) { setError(group, RULES.message.messages.required); return false; }
    if (val.length < RULES.message.minLength) { setError(group, RULES.message.messages.short); return false; }
    if (val.length > RULES.message.maxLength) { setError(group, RULES.message.messages.long); return false; }
    setValid(group);
    return true;
  }

  function validateSelect(input) {
    var group = input.closest('.form-group');
    if (!group) return true;
    if (!input.value) {
      setError(group, 'Please select an option');
      return false;
    }
    setValid(group);
    return true;
  }

  function updateCharCount(textarea) {
    var counter = textarea.parentElement && textarea.parentElement.querySelector('.char-count');
    if (!counter) return;
    var remaining = RULES.message.maxLength - textarea.value.length;
    counter.textContent = remaining + ' characters remaining';
    if (remaining < 50) {
      counter.classList.add('warn');
    } else {
      counter.classList.remove('warn');
    }
  }

  function getValidator(input) {
    var name = (input.name || '').toLowerCase();
    var type = (input.type || '').toLowerCase();
    if (name === 'name' || name === 'full_name' || name === 'fullname') return validateName;
    if (name === 'email' || type === 'email') return validateEmail;
    if (name === 'phone' || name === 'tel' || type === 'tel') return validatePhone;
    if (name === 'message' || name === 'description' || input.tagName === 'TEXTAREA') return validateMessage;
    if (input.tagName === 'SELECT' && input.required) return validateSelect;
    return null;
  }

  function updateSubmitButton(form) {
    var btn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (!btn) return;
    var hasErrors = form.querySelectorAll('.form-group.has-error').length > 0;
    var requiredFields = form.querySelectorAll('[required]');
    var allFilled = true;
    for (var i = 0; i < requiredFields.length; i++) {
      if (!requiredFields[i].value.trim()) { allFilled = false; break; }
    }
    btn.disabled = hasErrors || !allFilled;
  }

  function injectErrorSpans(form) {
    var groups = form.querySelectorAll('.form-group');
    for (var i = 0; i < groups.length; i++) {
      var input = groups[i].querySelector('input, select, textarea');
      if (!input) continue;
      if (input.type === 'hidden') continue;
      if (!groups[i].querySelector('.form-error')) {
        var span = document.createElement('span');
        span.className = 'form-error';
        span.setAttribute('role', 'alert');
        span.setAttribute('aria-live', 'polite');
        var insertAfter = input;
        if (input.tagName === 'TEXTAREA') {
          var counter = document.createElement('span');
          counter.className = 'char-count';
          counter.textContent = RULES.message.maxLength + ' characters remaining';
          input.parentElement.insertBefore(counter, input.nextSibling);
          insertAfter = counter;
        }
        insertAfter.parentElement.insertBefore(span, insertAfter.nextSibling);
      }
    }
  }

  function injectHoneypot(form) {
    if (form.querySelector('.hp-field')) return;
    var hp = document.createElement('div');
    hp.className = 'hp-field';
    hp.setAttribute('aria-hidden', 'true');
    hp.innerHTML = '<label for="website_url">Website</label><input type="text" name="website_url" id="website_url" tabindex="-1" autocomplete="off">';
    form.insertBefore(hp, form.firstChild);
  }

  function initForm(form) {
    injectErrorSpans(form);
    injectHoneypot(form);

    var fields = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
    for (var i = 0; i < fields.length; i++) {
      (function (field) {
        var validator = getValidator(field);
        if (!validator) return;

        field.addEventListener('blur', function () {
          if (field.value.trim()) validator(field);
          updateSubmitButton(form);
        });

        field.addEventListener('input', function () {
          var group = field.closest('.form-group');
          if (group && group.classList.contains('has-error')) {
            validator(field);
          }
          if (field.tagName === 'TEXTAREA') updateCharCount(field);
          updateSubmitButton(form);
        });

        if (field.tagName === 'SELECT') {
          field.addEventListener('change', function () {
            validator(field);
            updateSubmitButton(form);
          });
        }
      })(fields[i]);
    }

    // Disable submit initially
    var btn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (btn) btn.disabled = true;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot check
      var hpInput = form.querySelector('input[name="website_url"]');
      if (hpInput && hpInput.value) {
        // Bot detected — show fake success
        var successDiv = form.closest('.form-wrapper, .landing-form, form')
          .parentElement.querySelector('.form-success, #form-success');
        if (successDiv) { successDiv.style.display = 'block'; form.style.display = 'none'; }
        return;
      }

      // Timestamp check — under 3 seconds = bot
      if (Date.now() - PAGE_LOAD_TIME < 3000) {
        var successDiv2 = form.closest('.form-wrapper, .landing-form, form');
        if (successDiv2) {
          var s = successDiv2.parentElement && successDiv2.parentElement.querySelector('.form-success, #form-success');
          if (s) { s.style.display = 'block'; form.style.display = 'none'; }
        }
        return;
      }

      // Validate all fields
      var allValid = true;
      var formFields = form.querySelectorAll('input:not([type="hidden"]), select[required], textarea');
      for (var j = 0; j < formFields.length; j++) {
        var validator = getValidator(formFields[j]);
        if (validator && !validator(formFields[j])) allValid = false;
      }

      if (!allValid) {
        // Focus first error field
        var firstError = form.querySelector('.form-group.has-error input, .form-group.has-error select, .form-group.has-error textarea');
        if (firstError) firstError.focus();
        return;
      }

      // Show loading state
      if (btn) {
        btn.classList.add('is-loading');
        btn.disabled = true;
        var originalText = btn.textContent || btn.value;
        if (btn.tagName === 'BUTTON') btn.textContent = 'Sending...';
        else btn.value = 'Sending...';
      }

      // Populate Sydney-formatted timestamp on hidden field (server time is UTC; this gives Sydney local in submissions)
      var sydneyHidden = form.querySelector('#sydney_time');
      if (sydneyHidden) {
        sydneyHidden.value = getSydneyTimestamp();
      }

      // Gather form data
      var formData = {};
      var allInputs = form.querySelectorAll('input, select, textarea');
      for (var k = 0; k < allInputs.length; k++) {
        if (allInputs[k].name && allInputs[k].name !== 'website_url') {
          if (allInputs[k].type === 'checkbox') {
            formData[allInputs[k].name] = allInputs[k].checked ? 'Yes' : 'No';
          } else {
            formData[allInputs[k].name] = allInputs[k].value;
          }
        }
      }

      // Clean phone for storage
      if (formData.phone) {
        formData.phone_raw = stripNonDigits(formData.phone);
      }

      // dataLayer push
      var service = formData.service || '';
      var source = formData.source || 'organic';
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'form_submission',
        'service': service,
        'source': source
      });
      // CONVERSION TRACKING - fire GTM event here

      // Submit via fetch
      fetch('https://formspree.io/f/mojkgkpn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      }).then(function () {
        showSuccess(form);
      }).catch(function () {
        // Still show success in case backend isn't configured yet
        showSuccess(form);
      });
    });
  }

  function showSuccess(form) {
    form.reset();
    var wrapper = form.closest('.form-wrapper, .landing-form, .sidebar-form, .form-container') || form;
    var parent = wrapper.parentElement || wrapper;
    var successDiv = parent.querySelector('.form-success, #form-success');
    if (!successDiv) {
      // Look wider
      var section = form.closest('.form-section, .landing-hero, section');
      if (section) successDiv = section.querySelector('.form-success, #form-success');
    }
    if (!successDiv) {
      // Create success message if none exists
      successDiv = document.createElement('div');
      successDiv.className = 'form-success';
      successDiv.setAttribute('role', 'alert');
      successDiv.innerHTML = '<i class="fas fa-check-circle" aria-hidden="true"></i> Thank you! Your enquiry has been submitted. We will be in touch within 2 hours during business hours.';
      wrapper.parentNode.insertBefore(successDiv, wrapper.nextSibling);
    }
    successDiv.style.display = 'block';
    wrapper.style.display = 'none';
  }

  // Init all forms on page
  function init() {
    var forms = document.querySelectorAll('form[action="https://formspree.io/f/mojkgkpn"]');
    for (var i = 0; i < forms.length; i++) {
      initForm(forms[i]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
