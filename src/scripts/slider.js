const $slider = document.querySelector('.slider__container');
const $sliderContainer = document.querySelector('.slider__content');
const $sliderPrevBtn = document.querySelector('.slider__button_prev');
const $sliderNextBtn = document.querySelector('.slider__button_next');

$slider.style.left = 0;
let currentStep = 0;
const countSteps = 3;
let sliderStepOffset;

function setSliderStep(step) {
  currentStep = step;
  $slider.style.left = `${-sliderStepOffset * step}px`;
}

function getSliderStepOffset() {
  return ($slider.scrollWidth - $sliderContainer.clientWidth) / countSteps;
}

function updateBtnState(step) {
  $sliderPrevBtn.disabled = step === 0;
  $sliderNextBtn.disabled = step === countSteps;
}

sliderStepOffset = getSliderStepOffset();

$sliderNextBtn.addEventListener('click', () => {
  const newStep = currentStep + 1;
  setSliderStep(newStep);
  updateBtnState(newStep);
});

$sliderPrevBtn.addEventListener('click', () => {
  const newStep = currentStep - 1;
  setSliderStep(newStep);
  updateBtnState(newStep);
});
