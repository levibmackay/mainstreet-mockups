(function(){
  "use strict";

  var header = document.getElementById('siteHeader');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 12){ header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(!prefersReduced && 'IntersectionObserver' in window){
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    var counters = new WeakMap();
    items.forEach(function(el){
      var parent = el.closest('section') || document.body;
      var count = counters.get(parent) || 0;
      counters.set(parent, count + 1);
      el.style.setProperty('--reveal-delay', Math.min(count * 80, 320) + 'ms');
    });
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add('in'); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function(el){ observer.observe(el); });
  } else {
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function(el){
      el.classList.add('in');
    });
  }
})();
