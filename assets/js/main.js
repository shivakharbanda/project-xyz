/**
 * social.i Consultancy - Main JavaScript
 * Handles mobile menu, smooth scrolling, and form interactions
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('hidden');
      navLinks.classList.toggle('flex');

      // Toggle icon between hamburger and X
      const svg = this.querySelector('svg');
      const path = svg.querySelector('path');

      if (navLinks.classList.contains('flex')) {
        // Show X icon
        path.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      } else {
        // Show hamburger icon
        path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      }
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.add('hidden');
        navLinks.classList.remove('flex');

        // Reset to hamburger icon
        const svg = mobileMenuToggle.querySelector('svg');
        const path = svg.querySelector('path');
        path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnToggle = mobileMenuToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('flex')) {
        navLinks.classList.add('hidden');
        navLinks.classList.remove('flex');

        // Reset to hamburger icon
        const svg = mobileMenuToggle.querySelector('svg');
        const path = svg.querySelector('path');
        path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      }
    });
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');

    // Skip if it's just '#'
    if (targetId === '#') {
      e.preventDefault();
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active Navigation Link Based on Scroll Position
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[name="name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const message = this.querySelector('textarea[name="message"]').value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Success message (in a real application, this would send data to a server)
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}

// Add scroll animation on elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.service-card, .value-item, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Animated Counters with Color Transition (Red → Yellow → Green)
function interpolateColor(progress) {
  // Red: rgb(239, 68, 68) - #EF4444
  // Yellow: rgb(245, 158, 11) - #F59E0B
  // Green: rgb(16, 185, 129) - #10B981

  let r, g, b;

  if (progress < 0.5) {
    // Red to Yellow (0-50%)
    const localProgress = progress * 2; // 0 to 1
    r = Math.round(239 + (245 - 239) * localProgress);
    g = Math.round(68 + (158 - 68) * localProgress);
    b = Math.round(68 + (11 - 68) * localProgress);
  } else {
    // Yellow to Green (50-100%)
    const localProgress = (progress - 0.5) * 2; // 0 to 1
    r = Math.round(245 + (16 - 245) * localProgress);
    g = Math.round(158 + (185 - 158) * localProgress);
    b = Math.round(11 + (129 - 11) * localProgress);
  }

  return `rgb(${r}, ${g}, ${b})`;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(number, target, prefix, suffix) {
  // Handle large numbers (millions)
  if (target >= 1000000) {
    const millions = (number / 1000000).toFixed(1);
    return `${prefix}${millions}M${suffix}`;
  }

  // Handle regular numbers with commas for thousands
  if (target >= 1000 && !suffix.includes('%')) {
    return `${prefix}${Math.round(number).toLocaleString()}${suffix}`;
  }

  // Handle percentages and smaller numbers
  return `${prefix}${Math.round(number)}${suffix}`;
}

function animateCounter(element) {
  const target = parseFloat(element.getAttribute('data-target'));
  const prefix = element.getAttribute('data-prefix') || '';
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2500; // 2.5 seconds
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);

    const currentValue = target * easedProgress;

    // Update the number
    element.textContent = formatNumber(currentValue, target, prefix, suffix);

    // Update the color
    element.style.color = interpolateColor(progress);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      // Ensure final value is exact
      element.textContent = formatNumber(target, target, prefix, suffix);
      element.style.color = interpolateColor(1);
    }
  }

  requestAnimationFrame(updateCounter);
}

// Intersection Observer for Counters
const counterObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;

      // Only animate once
      if (!counter.hasAttribute('data-animated')) {
        counter.setAttribute('data-animated', 'true');
        animateCounter(counter);
      }
    }
  });
}, {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
});

// Observe all counter elements
document.querySelectorAll('.counter').forEach(counter => {
  counterObserver.observe(counter);
});
