const $slider = document.querySelector('.slider__container');
const $sliderPrevBtn = document.querySelector('.slider__button_prev');
const $sliderNextBtn = document.querySelector('.slider__button_next');

let currentStep = 0;
let countSteps = getStepsCount();
let sliderStepOffset = getSliderStepOffset();

function getStepsCount() {
  return matchMedia('(width <= 768px)').matches ? 6 : 3;
}

function setSliderStep(step) {
  currentStep = step;
  $slider.style.left = `${-sliderStepOffset * step}px`;
}

function getSliderStepOffset() {
  const sliderFullWidth = 1989; // $slider.scrollWidth;
  return (sliderFullWidth - $slider.clientWidth) / countSteps;
}

function updateBtnState(step) {
  $sliderPrevBtn.disabled = step === 0;
  $sliderNextBtn.disabled = step === countSteps;
}

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

window.addEventListener('resize', () => {
  countSteps = getStepsCount();
  sliderStepOffset = getSliderStepOffset();
  setSliderStep(0);
  updateBtnState(0);
});
