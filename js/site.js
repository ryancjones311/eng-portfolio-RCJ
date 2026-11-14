// Click any figure image to enlarge it; click again or press Esc to close.
(function () {
  var box = document.createElement('div');
  box.className = 'lightbox'; box.hidden = true;
  box.innerHTML = '<img alt="">';
  document.body.appendChild(box);
  var big = box.querySelector('img');
  function close() { box.hidden = true; document.body.style.overflow = ''; }
  document.addEventListener('click', function (e) {
    var img = e.target.closest('figure img');
    if (img && box.hidden) {
      big.src = img.currentSrc || img.src; big.alt = img.alt;
      box.hidden = false; document.body.style.overflow = 'hidden';
    } else if (!box.hidden) { close(); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
})();
