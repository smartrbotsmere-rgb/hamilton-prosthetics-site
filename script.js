document.addEventListener('DOMContentLoaded', function () {
      var items = document.querySelectorAll('.fade-up');
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.18 });
      items.forEach(function(item){ observer.observe(item); });
    });