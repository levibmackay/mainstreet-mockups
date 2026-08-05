(function(){
  "use strict";

  var header = document.getElementById('siteHeader');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  document.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = Array.prototype.slice.call(document.querySelectorAll('.focus-in'));

  if(reduceMotion || !('IntersectionObserver' in window)){
    targets.forEach(function(t){ t.classList.add('is-sharp'); });
    return;
  }

  /* stagger the focus-pull per section so groups sharpen in sequence */
  var counters = new WeakMap();
  targets.forEach(function(el){
    var parent = el.closest('section') || document.body;
    var n = counters.get(parent) || 0;
    counters.set(parent, n + 1);
    el.style.setProperty('--reveal-delay', Math.min(n * 90, 360) + 'ms');
  });

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      entry.target.classList.toggle('is-sharp', entry.isIntersecting);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function(t){ io.observe(t); });
})();
