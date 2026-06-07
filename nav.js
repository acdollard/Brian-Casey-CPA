const nav = document.querySelector('header nav[aria-label="Main"]');
if (nav) {
  const toggle = nav.querySelector('.nav-toggle-btn');
  const menu = nav.querySelector('.nav-menu');

  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open);
  }

  toggle.addEventListener('click', () => {
    setOpen(!nav.classList.contains('nav-open'));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  window.matchMedia('(min-width: 769px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}
