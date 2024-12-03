const $burger = document.querySelector('.burger');
const $navList = document.querySelector('.nav__list');
const $navLinks = document.querySelectorAll('.nav__link');

$burger.addEventListener('click', () => {
  $navList.classList.toggle('active');
  $burger.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

$navLinks.forEach($link =>
  $link.addEventListener('click', () => {
    $navList.classList.remove('active');
    $burger.classList.remove('active');
    document.body.style.overflow = 'initial';
  }),
);
