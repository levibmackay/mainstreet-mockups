(function(){
  "use strict";

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var header = document.getElementById('site-header');
  function onScroll(){
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-stagger'));

  if (!prefersReduced && 'IntersectionObserver' in window) {
    /* stagger sibling reveals within their own section so entrances read as
       one staged move rather than everything arriving at once */
    var counters = new WeakMap();
    items.forEach(function(el){
      if (!el.classList.contains('reveal')) return;
      var parent = el.closest('section') || document.body;
      var n = counters.get(parent) || 0;
      counters.set(parent, n + 1);
      el.style.setProperty('--reveal-delay', Math.min(n * 90, 360) + 'ms');
    });

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        entry.target.classList.toggle('in', entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('in'); });
  }
})();
