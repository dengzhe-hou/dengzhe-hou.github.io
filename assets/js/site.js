/* Site behaviour: theme toggle, mobile menu, research-motif signal.
   No dependencies. The initial theme is set by the inline script in
   _layouts/default.html before first paint; this file only handles clicks. */
(function () {
  'use strict';
  var root = document.documentElement;

  /* ---- Theme toggle ------------------------------------------------------
     No data-theme = follow the system. A click stores an explicit choice. */
  var toggle = document.getElementById('theme-toggle');
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function current() {
    return root.getAttribute('data-theme') || (mq && mq.matches ? 'dark' : 'light');
  }
  function label() {
    if (!toggle) return;
    var next = current() === 'dark' ? 'light' : 'dark';
    toggle.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    toggle.title = 'Switch to ' + next + ' theme';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
    if (mq) {
      if (mq.addEventListener) mq.addEventListener('change', label);
      else if (mq.addListener) mq.addListener(label);
    }
    label();
  }

  /* ---- Mobile menu (<=720px) ---------------------------------------------
     The nav itself becomes a full-screen panel. Closes on Escape, on a link
     click or on "Close"; focus returns to the button. */
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    var setMenu = function (open) {
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
      nav.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    };
    btn.addEventListener('click', function () {
      setMenu(btn.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        btn.focus();
      }
    });
    /* leaving the mobile breakpoint with the menu open: reset it */
    var wide = window.matchMedia ? window.matchMedia('(min-width: 721px)') : null;
    if (wide) {
      var reset = function () { if (wide.matches) setMenu(false); };
      if (wide.addEventListener) wide.addEventListener('change', reset);
      else if (wide.addListener) wide.addListener(reset);
    }
  }

  /* ---- Research motif: run the travelling signal dots once in view -------
     Static (no JS, print, reduced motion) shows only the arcs. */
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fig = document.querySelector('.motif');
  if (fig && !reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        fig.classList.add('live');
        io.disconnect();
      }
    }, { threshold: 0.6 });
    io.observe(fig);
  }
})();
