/**
 * North Shore Projects - Main JavaScript
 * One Group. Removals, Renovations & Cleaning.
 */

// ==================== DOM ELEMENTS ====================
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav a');

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    if (!mobileToggle || !mobileMenu) return;

    // Toggle mobile menu
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';

        // Update ARIA attributes
        const isOpen = mobileMenu.classList.contains('active');
        mobileToggle.setAttribute('aria-expanded', isOpen);
        mobileToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.setAttribute('aria-label', 'Open menu');
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.setAttribute('aria-label', 'Open menu');
        }
    });

    // Mobile dropdown toggle
    const mobileDropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const mobileDropdown = document.querySelector('.mobile-dropdown');

    if (mobileDropdownToggle && mobileDropdown) {
        mobileDropdownToggle.addEventListener('click', () => {
            mobileDropdown.classList.toggle('active');
            const isExpanded = mobileDropdown.classList.contains('active');
            mobileDropdownToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking dropdown links
        const dropdownLinks = mobileDropdown.querySelectorAll('.mobile-dropdown-menu a');
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
                mobileToggle.setAttribute('aria-expanded', 'false');
                mobileToggle.setAttribute('aria-label', 'Open menu');
            });
        });
    }
}

// ==================== HEADER SCROLL EFFECT ====================
function initHeaderScroll() {
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            if (scrollTopBtn) scrollTopBtn.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            if (scrollTopBtn) scrollTopBtn.classList.remove('visible');
        }
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== PROCESS ANIMATION ====================
function initProcessAnimation() {
    const processSteps = document.querySelectorAll('.step-card');
    const connector = document.querySelector('.steps-connector');

    if (!processSteps.length || !connector) return;

    let isPlaying = false;
    let currentStep = 0;
    let animationTimeout;

    function animateStep(stepIndex) {
        if (stepIndex >= processSteps.length) {
            isPlaying = false;
            return;
        }

        // Mark previous steps as completed
        if (stepIndex > 0) {
            processSteps[stepIndex - 1].classList.remove('active');
            processSteps[stepIndex - 1].classList.add('completed');
        }

        // Activate current step
        processSteps[stepIndex].classList.add('active');
        currentStep = stepIndex;

        // Continue to next step
        animationTimeout = setTimeout(() => {
            animateStep(stepIndex + 1);
        }, 1500);
    }

    function startProcess() {
        if (isPlaying) return;

        // Reset first
        isPlaying = false;
        currentStep = 0;
        clearTimeout(animationTimeout);
        processSteps.forEach(step => {
            step.classList.remove('active', 'completed');
        });
        connector.classList.remove('animated');

        isPlaying = true;

        // Start connector animation
        setTimeout(() => {
            connector.classList.add('animated');
        }, 100);

        // Start step animations
        setTimeout(() => {
            animateStep(0);
        }, 300);
    }

    // Auto-play when section comes into view
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isPlaying && currentStep === 0) {
                setTimeout(startProcess, 500);
            }
        });
    }, { threshold: 0.5 });

    const processContainer = document.querySelector('.process-container');
    if (processContainer) {
        processObserver.observe(processContainer);
    }
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');
        const originalText = submitBtn.textContent;

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        if (formStatus) formStatus.style.display = 'none';

        const preferCallback = document.getElementById('preferCallback');
        const serviceRadio = document.querySelector('input[name="service"]:checked');
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            suburb: document.getElementById('suburb').value,
            message: document.getElementById('message').value,
            service: serviceRadio ? serviceRadio.value : '',
            preferCallback: preferCallback ? preferCallback.checked : false
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (formStatus) {
                formStatus.style.display = 'block';
                if (result.success) {
                    formStatus.innerHTML = '<div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 8px;"><i class="fas fa-check-circle"></i> ' + result.message + '</div>';
                    contactForm.reset();
                } else {
                    formStatus.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px;"><i class="fas fa-exclamation-circle"></i> ' + result.error + '</div>';
                }
            }
        } catch (error) {
            if (formStatus) {
                formStatus.style.display = 'block';
                formStatus.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px;"><i class="fas fa-exclamation-circle"></i> Connection error. Please try again or call us directly.</div>';
            }
        }

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    });
}

// ==================== FORM VALIDATION ====================
function initFormValidation() {
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    if (!phoneInput || !emailInput) return;

    // --- Phone: Live Formatting ---
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0, 10);

        if (value.startsWith('04')) {
            let formattedValue = value.substring(0, 4);
            if (value.length > 4) formattedValue += ' ' + value.substring(4, 7);
            if (value.length > 7) formattedValue += ' ' + value.substring(7, 10);
            e.target.value = formattedValue;
        } else {
            e.target.value = value;
        }

        // Reset validity while typing so the bubble disappears
        phoneInput.setCustomValidity("");
    });

    // --- Validation Logic: Only on Blur with Custom Helpers ---
    const validateField = (input, pattern, errorMessage) => {
        input.addEventListener('blur', () => {
            const isValid = pattern.test(input.value);

            if (input.value === "") {
                input.style.borderColor = "";
                input.setCustomValidity("");
            } else if (!isValid) {
                input.style.borderColor = "#e74c3c"; // Red for error
                input.setCustomValidity(errorMessage);
                input.reportValidity(); // Shows the helper bubble immediately on blur
            } else {
                input.style.borderColor = "";
                input.setCustomValidity("");
            }
        });

        // Reset red color when they start typing again
        input.addEventListener('input', () => {
            input.style.borderColor = "";
            input.setCustomValidity("");
        });
    };

    // Apply validation rules with custom helpers
    validateField(
        phoneInput,
        /^04\d{2}\s\d{3}\s\d{3}$/,
        "Please enter a valid 10-digit mobile number starting with 04 (e.g., 0412 345 678)."
    );

    validateField(
        emailInput,
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address (e.g., name@example.com)."
    );
}

// ==================== FAQ ACCORDION ====================
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item-accordion');

    if (!faqItems.length) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items (optional - remove for multi-open)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            question.setAttribute('aria-expanded', !isActive);
        });

        // Keyboard accessibility
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });

    // Open first item by default
    if (faqItems[0]) {
        faqItems[0].classList.add('active');
        faqItems[0].querySelector('.faq-question').setAttribute('aria-expanded', 'true');
    }
}

// ==================== HERO SLIDER ====================
function initHeroSlider() {
    const slider = document.getElementById('serviceSlider');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const dots = document.querySelectorAll('.slider-dot');
    const contentSlides = document.querySelectorAll('.service-slide');
    const bgSlides = document.querySelectorAll('.hero .hero-slide');

    if (!slider || !contentSlides.length) return;

    let currentSlide = 0;
    let autoPlayInterval;
    const totalSlides = contentSlides.length;

    function goToSlide(index) {
        // Handle wrap-around
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        // Update content slides
        contentSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });

        // Update background slides
        bgSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) dot.classList.add('active');
        });

        currentSlide = index;
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            stopAutoPlay();
            startAutoPlay();
        });
    });

    // Pause on hover
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    });

    // Start autoplay
    startAutoPlay();
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initHeroSlider();
    initProcessAnimation();
    initContactForm();
    initFormValidation();
    initFaqAccordion();
});

// ==================== AOS INITIALIZATION ====================
// Note: AOS library is loaded separately via CDN
// This will initialize when the library is ready
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: 'mobile'
    });
}
