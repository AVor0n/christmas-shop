const menuLink = document.querySelector('.nav__item');
const isMenuPage = /gifts(?:\.html)?$/u.test(window.location.pathname);

if (isMenuPage) {
  menuLink?.classList.add('active');
} else {
  menuLink?.classList.remove('active');
}
