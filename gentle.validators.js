/**
 * GENTLE'S GRAND LIBRARY - CHIVALROUS FORM VALIDATION
 * Intimate, theatrical feedback in Gentle's voice when they're alone in the archive.
 * Self-attaches without requiring edits to gentlibrary.js.
 */

const GentleValidator = (() => {
    const FIELD_CONFIG = [
        {
            ids: ['book-title', 'title', 'volume-title', 'deed-title', 'deed-name'],
            label: 'Volume Title',
            required: true,
            minLength: 2,
            maxLength: 160,
            messages: {
                empty: "Ah, dear—every grand tale requires a proper title before it may grace our shelves!",
                tooShort: "A mere whisper of a title, sweetheart! Pray grant this volume at least two letters of dignity.",
                tooLong: "It is the proper etiquette—and good craftsmanship—to keep a title under 160 characters so it does not overflow the spine, my partner in crime!"
            }
        },
        {
            ids: ['book-author', 'author', 'architect', 'scribe'],
            label: 'Author / Scribe',
            required: true,
            minLength: 2,
            maxLength: 120,
            messages: {
                empty: "Pray name the author or chronicler behind this work, darling—even a mysterious pseudonym deserves credit!",
                tooShort: "Two characters at minimum, La Brava, so our archive may honor the hand that penned it.",
                tooLong: "A splendidly long attribution, my dear, though I fear it exceeds our 120-character ledger space."
            }
        },
        {
            ids: ['book-pages', 'pages', 'page-count'],
            label: 'Pages',
            required: false,
            min: 1,
            max: 20000,
            messages: {
                invalidNumber: "Splendidly poetic, sweetheart, yet a page count must be a proper number!",
                outOfRange: "Proper etiquette calls for precision, dear—please enter a page count between 1 and 20,000."
            }
        },
        {
            ids: ['book-marginalia', 'marginalia', 'gentle-marginalia'],
            label: 'Marginalia',
            required: true,
            minLength: 2,
            maxLength: 400,
            messages: {
                empty: "Surely a dramatic quote or annotation belongs in the margin, darling—do not leave me speechless!",
                tooShort: "Give me just a touch more flair than a single character, sweetheart!",
                tooLong: "How passionately you annotate, La Brava! Still, proper etiquette keeps marginalia within 400 characters so the margin stays tidy."
            }
        },
        {
            ids: ['book-notes', 'notes', 'labrava-notes'],
            label: 'Notes',
            required: true,
            minLength: 2,
            maxLength: 800,
            messages: {
                empty: "The notes ought to be worthy to accompany my royal Imperial tea, my dear",
                tooShort: "A single character will hardly do for our afternoon tea, my dear!",
                tooLong: "Your reflections are a joy to behold, my partner in crime, yet let us trim these notes to 800 characters or fewer."
            }
        }
    ];

    function findForm() {
        return (
            document.getElementById('add-volume-form') ||
            document.querySelector('#scribe-modal form') ||
            document.querySelector('form')
        );
    }

    function findInput(config, form) {
        const root = form || document;
        for (const id of config.ids) {
            const escaped = typeof CSS !== 'undefined' && typeof CSS.escape === 'function'
                ? CSS.escape(id)
                : id;
            const el = root.querySelector(`#${escaped}`) || document.getElementById(id);
            if (el) return el;
        }
        return null;
    }

    function getOrCreateErrorEl(input) {
        const group = input.closest('.form-group') || input.parentElement;
        if (!group) return null;

        let errorEl = group.querySelector('.gentle-validation-msg');
        if (!errorEl) {
            errorEl = document.createElement('p');
            errorEl.className = 'gentle-validation-msg';
            errorEl.setAttribute('role', 'alert');
            errorEl.style.cssText = [
                'margin: 0.35rem 0 0',
                'font-family: "Cormorant Garamond", serif',
                'font-style: italic',
                'font-size: 0.98rem',
                'color: #00ff88',
                'text-shadow: 0 0 8px rgba(0, 255, 136, 0.35)'
            ].join(';');
            group.appendChild(errorEl);
        }
        return errorEl;
    }

    function setFieldFeedback(input, message) {
        const errorEl = getOrCreateErrorEl(input);
        if (message) {
            input.setAttribute('aria-invalid', 'true');
            input.style.borderColor = '#ff007f';
            input.style.boxShadow = '0 0 0 2px rgba(255, 0, 127, 0.35)';
            if (errorEl) {
                errorEl.textContent = `🎩 ${message}`;
                errorEl.style.display = 'block';
            }
        } else {
            input.removeAttribute('aria-invalid');
            input.style.borderColor = '';
            input.style.boxShadow = '';
            if (errorEl) {
                errorEl.textContent = '';
                errorEl.style.display = 'none';
            }
        }
    }

    function isPageField(config) {
        return (
            config.ids.includes('book-pages') ||
            config.ids.includes('pages') ||
            config.ids.includes('page-count')
        );
    }

    function validateField(config, form) {
        const input = findInput(config, form);
        if (!input) return true;

        const rawValue = input.value;
        const trimmed = rawValue.trim();

        if (config.required && !trimmed) {
            setFieldFeedback(input, config.messages.empty);
            return false;
        }

        if (config.minLength && trimmed.length > 0 && trimmed.length < config.minLength) {
            setFieldFeedback(input, config.messages.tooShort);
            return false;
        }

        if (config.maxLength && rawValue.length > config.maxLength) {
            setFieldFeedback(input, config.messages.tooLong);
            return false;
        }

        if (isPageField(config) && trimmed !== '') {
            const num = Number(trimmed);
            if (!Number.isFinite(num) || !Number.isInteger(num)) {
                setFieldFeedback(input, config.messages.invalidNumber);
                return false;
            }
            if (num < config.min || num > config.max) {
                setFieldFeedback(input, config.messages.outOfRange);
                return false;
            }
        }

        setFieldFeedback(input, '');
        return true;
    }

    function validateForm(form) {
        const targetForm = form || findForm();
        if (!targetForm) return true;

        let firstInvalidInput = null;
        let allValid = true;

        FIELD_CONFIG.forEach((cfg) => {
            const valid = validateField(cfg, targetForm);
            if (!valid) {
                allValid = false;
                if (!firstInvalidInput) {
                    firstInvalidInput = findInput(cfg, targetForm);
                }
            }
        });

        if (!allValid && firstInvalidInput) {
            firstInvalidInput.focus();
        }

        return allValid;
    }

    function clearFormValidation(form) {
        const targetForm = form || findForm();
        if (!targetForm) return;

        FIELD_CONFIG.forEach((cfg) => {
            const input = findInput(cfg, targetForm);
            if (input) setFieldFeedback(input, '');
        });
    }

    function attach(form) {
        const targetForm = form || findForm();
        if (!targetForm || targetForm.dataset.gentleBound === 'true') return;
        targetForm.dataset.gentleBound = 'true';

        FIELD_CONFIG.forEach((cfg) => {
            const input = findInput(cfg, targetForm);
            if (!input) return;

            input.addEventListener('blur', () => validateField(cfg, targetForm));
            input.addEventListener('input', () => {
                if (input.getAttribute('aria-invalid') === 'true') {
                    validateField(cfg, targetForm);
                }
            });
        });

        // Capture phase intercepts before gentlibrary.js handles submit
        targetForm.addEventListener(
            'submit',
            (e) => {
                if (!validateForm(targetForm)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
            },
            true
        );

        targetForm.addEventListener('reset', () => {
            setTimeout(() => clearFormValidation(targetForm), 0);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => attach(findForm()));
    } else {
        attach(findForm());
    }

    return {
        attach,
        validateForm,
        clearFormValidation
    };
})();