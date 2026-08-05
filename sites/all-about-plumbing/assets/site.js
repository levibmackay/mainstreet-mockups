(function(){
  "use strict";

  var header = document.getElementById('siteHeader');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 12){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!prefersReduced && 'IntersectionObserver' in window){
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

    /* assign a per-item stagger delay (CSS transition-delay) up front, grouped
       by enclosing section, so both the "in" and "out" transitions stagger
       identically without needing setTimeout on every intersection change */
    var counters = new WeakMap();
    items.forEach(function(el){
      var parent = el.closest('section') || document.body;
      var count = counters.get(parent) || 0;
      counters.set(parent, count + 1);
      el.style.setProperty('--reveal-delay', Math.min(count * 90, 360) + 'ms');
    });

    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        entry.target.classList.toggle('in', entry.isIntersecting);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

    items.forEach(function(el){ observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
