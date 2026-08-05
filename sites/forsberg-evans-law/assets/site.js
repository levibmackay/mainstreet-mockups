(function(){
  "use strict";

  var header = document.getElementById('siteHeader');
  function onScroll(){
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 16);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!reduce && 'IntersectionObserver' in window){
    /* per-section stagger so grouped items arrive as one staged move */
    var counters = new WeakMap();
    items.forEach(function(el){
      var parent = el.closest('section') || document.body;
      var n = counters.get(parent) || 0;
      counters.set(parent, n + 1);
      el.style.setProperty('--reveal-delay', Math.min(n * 80, 320) + 'ms');
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
