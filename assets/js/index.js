const darkModeSetting = document.body.dataset.darkmode;

if (
  darkModeSetting !== 'never' &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  document.body.classList.add("dark");
}

const siteNav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.site-nav__toggle');
const navMenu = document.querySelector('.site-nav__menu');
const navLinks = navMenu ? Array.from(navMenu.querySelectorAll('a')) : [];

const closeMenu = () => {
  if (!siteNav || !navToggle) return;

  siteNav.classList.remove('site-nav--open');
  document.body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open navigation menu');
};

if (siteNav && navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('site-nav--open');
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && siteNav.classList.contains('site-nav--open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  const desktopViewport = window.matchMedia('(min-width: 901px)');
  const handleViewportChange = (event) => {
    if (event.matches) closeMenu();
  };

  if (desktopViewport.addEventListener) {
    desktopViewport.addEventListener('change', handleViewportChange);
  } else {
    desktopViewport.addListener(handleViewportChange);
  }

  const updateNavBackground = () => {
    siteNav.classList.toggle('site-nav--scrolled', window.scrollY > 12);
  };

  updateNavBackground();
  window.addEventListener('scroll', updateNavBackground, { passive: true });
}
