document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var pages = form.pages ? form.pages.value : '';
      var message = form.message.value.trim();
      var body = encodeURIComponent(
        'Hi Nexovara Tech, my name is ' + (name || '—') +
        '.\nProject: ' + (pages || '—') +
        '\n\n' + (message || '')
      );
      window.location.href = 'mailto:flxsck7@gmail.com?subject=Website%20Quote%20Request&body=' + body;
    });
  }
});
