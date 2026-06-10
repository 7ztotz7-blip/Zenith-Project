/* Zenith — Premium UI Effects */
(function () {
  'use strict';

  /* ── 1. Spotlight effect on cards ──────────────────────────────
     Tracks mouse position per card and updates CSS custom properties
     --sx, --sy so the radial-gradient spotlight follows the cursor.
  ─────────────────────────────────────────────────────────────── */
  function initSpotlight() {
    var SELECTORS = '.card, .course-card, .track-card, .lesson-card, .stat-card, .spotlight-card';
    var cards = document.querySelectorAll(SELECTORS);
    cards.forEach(function (card) {
      if (!card.classList.contains('spotlight-card')) {
        card.classList.add('spotlight-card');
      }
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--sx', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--sy', (e.clientY - rect.top) + 'px');
      });
      card.addEventListener('mouseleave', function () {
        card.style.setProperty('--sx', '-999px');
        card.style.setProperty('--sy', '-999px');
      });
    });
  }

  /* ── 2. Scroll reveal (IntersectionObserver) ───────────────────
     Any element with [data-reveal] or .card/.anim-up gets a smooth
     fade-up as it enters the viewport. Stagger siblings with
     data-reveal-group on the parent.
  ─────────────────────────────────────────────────────────────── */
  function initReveal() {
    if (!window.IntersectionObserver) return;

    /* Auto-tag elements that should reveal */
    var autoReveal = document.querySelectorAll(
      '.card:not(.no-reveal), section, .anim-up:not([class*="delay-"]), [data-reveal]'
    );

    autoReveal.forEach(function (el) {
      if (!el.classList.contains('reveal') && !el.hasAttribute('data-revealed')) {
        el.classList.add('reveal');
      }
    });

    /* Handle stagger groups */
    document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
      var children = group.children;
      Array.from(children).forEach(function (child, i) {
        child.classList.add('reveal');
        child.style.transitionDelay = (i * 0.08) + 's';
      });
    });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-scale').forEach(function (el) {
      obs.observe(el);
    });
  }

  /* ── 3. Number count-up ────────────────────────────────────────
     Elements with data-count="target" animate from 0 to target
     when they scroll into view.
  ─────────────────────────────────────────────────────────────── */
  function initCountUp() {
    if (!window.IntersectionObserver) return;
    var els = document.querySelectorAll('[data-count]');
    if (!els.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var suffix = el.getAttribute('data-count-suffix') || '';
        var duration = 1200;
        var start = performance.now();

        function tick(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          /* Ease-out cubic */
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ── 4. Parallax hero ──────────────────────────────────────────
     Elements with .parallax-bg shift at half scroll speed.
  ─────────────────────────────────────────────────────────────── */
  function initParallax() {
    var els = document.querySelectorAll('.parallax-bg');
    if (!els.length) return;
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      els.forEach(function (el) {
        el.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
      });
    }, { passive: true });
  }

  /* ── 5. Gradient orb parallax ──────────────────────────────────
     Orbs move subtly on mouse move for depth.
  ─────────────────────────────────────────────────────────────── */
  function initOrbParallax() {
    var orbs = document.querySelectorAll('.orb');
    if (!orbs.length) return;
    document.addEventListener('mousemove', function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 2;
      var y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach(function (orb, i) {
        var depth = (i % 3 + 1) * 8;
        orb.style.transform = 'translate(' + (x * depth) + 'px, ' + (y * depth) + 'px)';
      });
    }, { passive: true });
  }

  /* ── 6. Active nav link underline ─────────────────────────────
     Adds .link-hover to all eligible anchor tags in main content.
  ─────────────────────────────────────────────────────────────── */
  function initLinkEffects() {
    document.querySelectorAll('.page-body a:not(.btn):not(.nav-link):not(.card)').forEach(function (a) {
      a.classList.add('link-hover');
    });
  }

  /* ── 7. Input focus glow ───────────────────────────────────────
     Adds glow ring to inputs/textareas on focus.
  ─────────────────────────────────────────────────────────────── */
  function initInputGlow() {
    document.querySelectorAll('input, textarea, select').forEach(function (el) {
      el.addEventListener('focus', function () {
        el.style.boxShadow = '0 0 0 3px var(--accent-glow), ' + (el.style.boxShadow || '');
      });
      el.addEventListener('blur', function () {
        el.style.boxShadow = '';
      });
    });
  }

  /* ── Init ──────────────────────────────────────────────────────
  ─────────────────────────────────────────────────────────────── */
  function init() {
    initSpotlight();
    initReveal();
    initCountUp();
    initParallax();
    initOrbParallax();
    initLinkEffects();
    initInputGlow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
