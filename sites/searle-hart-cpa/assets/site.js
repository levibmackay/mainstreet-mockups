(function(){
  "use strict";

  var header = document.getElementById('site-header');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if(reduceMotion || !('IntersectionObserver' in window)){
    items.forEach(function(el){ el.classList.add('is-visible'); });
    return;
  }

  /* stagger each reveal against its own section so groups enter in sequence
     rather than every element on the page firing at once */
  var counters = new WeakMap();
  items.forEach(function(el){
    if(el.classList.contains('stagger')) return;
    var parent = el.closest('section') || document.body;
    var n = counters.get(parent) || 0;
    counters.set(parent, n + 1);
    el.style.setProperty('--reveal-delay', Math.min(n * 90, 360) + 'ms');
  });

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  items.forEach(function(el){ io.observe(el); });
})();
