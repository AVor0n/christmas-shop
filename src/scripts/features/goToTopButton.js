const $goToTopBtn = document.querySelector('.go-to-start');

document.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    $goToTopBtn.classList.remove('hidden');
  } else {
    $goToTopBtn.classList.add('hidden');
  }
});
