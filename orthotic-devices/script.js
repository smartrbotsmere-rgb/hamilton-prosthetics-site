document.addEventListener('DOMContentLoaded', function () {
      var input = document.getElementById('condition-search');
      var chips = document.querySelectorAll('.condition-chip');
      var empty = document.getElementById('condition-empty');
      input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        var visibleCount = 0;
        chips.forEach(function (chip) {
          var match = chip.textContent.toLowerCase().indexOf(q) !== -1;
          chip.classList.toggle('hidden-chip', !match);
          if (match) visibleCount++;
        });
        empty.classList.toggle('hidden', visibleCount !== 0);
      });
    });