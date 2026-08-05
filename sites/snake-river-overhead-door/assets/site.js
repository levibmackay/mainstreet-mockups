(function(){
  "use strict";

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- scroll-aware sticky header (mirrors index.html) ---------- */
  var header = document.getElementById('siteHeader');
  var lastY = window.scrollY || 0;
  var ticking = false;

  function onScrollHeader(){
    var y = window.scrollY || 0;
    if (header){
      header.classList.toggle('is-compact', y > 40);
      if (!reduceMotion){
        if (y > lastY && y > 120){
          header.classList.add('is-hidden');
        } else {
          header.classList.remove('is-hidden');
        }
      }
    }
    lastY = y;
    ticking = false;
  }

  if (header){
    window.addEventListener('scroll', function(){
      if (!ticking){
        window.requestAnimationFrame(onScrollHeader);
        ticking = true;
      }
    }, { passive:true });
    onScrollHeader();
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    Array.prototype.forEach.call(revealEls, function(el){ io.observe(el); });
  } else {
    Array.prototype.forEach.call(revealEls, function(el){ el.classList.add('is-visible'); });
  }
})();
