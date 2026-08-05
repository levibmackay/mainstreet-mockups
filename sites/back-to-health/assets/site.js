(function(){
  "use strict";

  var header = document.getElementById('siteHeader');
  function onScroll(){
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if (!reduceMotion && 'IntersectionObserver' in window){
    /* stagger within each section so a group of cards arrives as one move */
    var counters = new WeakMap();
    items.forEach(function(el){
      var parent = el.closest('section') || document.body;
      var n = counters.get(parent) || 0;
      counters.set(parent, n + 1);
      el.style.setProperty('--reveal-delay', Math.min(n * 85, 340) + 'ms');
    });

    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function(el){ io.observe(el); });
  } else {
    items.forEach(function(el){ el.classList.add('is-visible'); });
  }
})();
