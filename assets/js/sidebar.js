/* Zenith — Sidebar toggle (collapse / mobile drawer) */
(function () {
  /* Auto-load premium.js once (idempotent) */
  if (!document.querySelector('script[data-zenith-premium]')) {
    var base = (function () {
      var scripts = document.querySelectorAll('script[src*="sidebar.js"]');
      if (scripts.length) {
        return scripts[scripts.length - 1].src.replace(/sidebar\.js.*$/, '');
      }
      return 'assets/js/';
    })();
    var s = document.createElement('script');
    s.src = base + 'premium.js';
    s.setAttribute('data-zenith-premium', '1');
    document.head.appendChild(s);
  }
  var KEY = 'zenith_sidebar';
  var BP  = 768; // mobile breakpoint px

  /* ── 1. Anti-FOUC: apply collapsed state before first paint ── */
  if (localStorage.getItem(KEY) === 'collapsed' && window.innerWidth >= BP) {
    document.documentElement.classList.add('sb-pre-collapsed');
  }

  /* ── 2. Full init after DOM is ready ── */
  document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.querySelector('.sidebar');
    var topbar  = document.querySelector('.topbar');
    if (!sidebar || !topbar) return;

    /* Wrap bare text nodes in nav-links + sidebar-logo so CSS can hide them */
    ['.nav-link', '.sidebar-logo'].forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.childNodes.forEach(function (node) {
          if (node.nodeType === 3 && node.textContent.trim()) {
            var span = document.createElement('span');
            span.className = 'nav-label';
            span.textContent = node.textContent;
            el.replaceChild(span, node);
          }
        });
      });
    });

    /* Mobile overlay */
    var overlay = document.createElement('div');
    overlay.className = 'sb-overlay';
    overlay.addEventListener('click', function () { setState(true); });
    document.body.appendChild(overlay);

    /* Toggle button */
    var btn = document.createElement('button');
    btn.className = 'sb-toggle';
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.innerHTML = '<i class="ti ti-layout-sidebar"></i>';
    btn.addEventListener('click', onToggle);

    /* Group [toggle | title] so topbar space-between still works */
    var titleEl = topbar.querySelector('.topbar-title');
    if (titleEl) {
      var grp = document.createElement('div');
      grp.style.cssText = 'display:flex;align-items:center;gap:8px;min-width:0;';
      topbar.insertBefore(grp, titleEl);
      grp.appendChild(btn);
      grp.appendChild(titleEl);
    } else {
      topbar.insertBefore(btn, topbar.firstChild);
    }

    /* Apply initial state without transition flash */
    var main = document.querySelector('.main');
    sidebar.style.transition = 'none';
    if (main) main.style.transition = 'none';

    /* Swap anti-FOUC class → real class */
    document.documentElement.classList.remove('sb-pre-collapsed');

    var mob = window.innerWidth < BP;
    if (mob) {
      /* Mobile: always start hidden, no margin */
      sidebar.classList.remove('sb-collapsed');
      if (main) main.style.marginLeft = '';
    } else {
      /* Desktop: restore saved state */
      if (localStorage.getItem(KEY) === 'collapsed') {
        sidebar.classList.add('sb-collapsed');
        if (main) main.style.marginLeft = '64px';
      } else {
        if (main) main.style.marginLeft = '230px';
      }
    }

    /* Re-enable transitions after 2 frames (prevents initial flash) */
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        sidebar.style.transition = '';
        if (main) main.style.transition = '';
      });
    });

    /* Resize: sync state when crossing breakpoint */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var main = document.querySelector('.main');
        if (window.innerWidth < BP) {
          sidebar.classList.remove('sb-collapsed');
          sidebar.classList.remove('sb-mobile-open');
          overlay.classList.remove('active');
          if (main) main.style.marginLeft = '';
        } else {
          sidebar.classList.remove('sb-mobile-open');
          overlay.classList.remove('active');
          if (localStorage.getItem(KEY) === 'collapsed') {
            sidebar.classList.add('sb-collapsed');
            if (main) main.style.marginLeft = '64px';
          } else {
            sidebar.classList.remove('sb-collapsed');
            if (main) main.style.marginLeft = '230px';
          }
        }
      }, 150);
    });
  });

  /* ── State helpers ── */
  function setState(collapsed) {
    var sidebar = document.querySelector('.sidebar');
    var main    = document.querySelector('.main');
    var overlay = document.querySelector('.sb-overlay');
    var mob     = window.innerWidth < BP;

    if (mob) {
      if (collapsed) {
        sidebar.classList.remove('sb-mobile-open');
        if (overlay) overlay.classList.remove('active');
      } else {
        sidebar.classList.add('sb-mobile-open');
        if (overlay) overlay.classList.add('active');
      }
    } else {
      if (collapsed) {
        sidebar.classList.add('sb-collapsed');
        if (main) main.style.marginLeft = '64px';
      } else {
        sidebar.classList.remove('sb-collapsed');
        if (main) main.style.marginLeft = '230px';
      }
      localStorage.setItem(KEY, collapsed ? 'collapsed' : 'expanded');
    }
  }

  function onToggle() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    if (window.innerWidth < BP) {
      setState(!sidebar.classList.contains('sb-mobile-open'));
    } else {
      setState(!sidebar.classList.contains('sb-collapsed'));
    }
  }
})();
