(function(){
  "use strict";

  var header = document.getElementById('siteHeader');
  function onScroll(){
    if(!header) return;
    header.classList.toggle('scrolled', (window.scrollY || 0) > 20);
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    Array.prototype.forEach.call(nav.querySelectorAll('a'), function(a){
      a.addEventListener('click', function(){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && nav.classList.contains('open')){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  if(reduceMotion || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){ el.classList.add('in'); });
    return;
  }

  var seen = new WeakMap();
  revealEls.forEach(function(el){
    var group = el.closest('section') || document.body;
    var n = seen.get(group) || 0;
    seen.set(group, n + 1);
    el.style.setProperty('--d', Math.min(n * 75, 300) + 'ms');
  });

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function(el){ io.observe(el); });
})();
