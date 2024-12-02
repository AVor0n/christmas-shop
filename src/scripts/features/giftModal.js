import { categories } from '../data/categories';

const $modal = document.querySelector('.gift-info');
const $closeBtn = $modal.querySelector('.gift-info__close');

const getIndicator = filled =>
  `<svg class="gift-info__stat-indicator ${
    filled ? 'gift-info__stat-indicator_fill' : ''
  }" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="m12.196 9.882-.548-.317 1.468-.393-.243-.905-2.372.636-1.12-.646a1.408 1.408 0 0 0 0-.514l1.12-.646 2.372.636.243-.905-1.468-.393.548-.317 2.35-.14.346-1.957-1.867-.679-1.298 1.965-.547.316.393-1.468-.905-.242-.636 2.373-1.12.646a1.405 1.405 0 0 0-.444-.257V5.383l1.737-1.737-.662-.663-1.075 1.075v-.633l1.05-2.1L8 0 6.482 1.326l1.05 2.1v.632L6.456 2.983l-.663.663L7.53 5.383v1.292a1.405 1.405 0 0 0-.444.257l-1.12-.646-.635-2.373-.905.243.393 1.467-.548-.316-1.297-1.965-1.868.679.346 1.956 2.35.141.548.317-1.467.393.242.905L5.5 7.097l1.12.646a1.408 1.408 0 0 0 0 .514l-1.12.646-2.373-.636-.242.905 1.467.393-.547.317-2.35.14-.347 1.957 1.868.679 1.297-1.965.548-.316-.393 1.467.905.243.636-2.373 1.12-.646c.13.11.28.199.443.257v1.292l-1.737 1.737.663.663 1.074-1.075v.633l-1.05 2.1L8 16l1.518-1.326-1.05-2.1v-.632l1.075 1.075.662-.663-1.737-1.737V9.325c.165-.058.315-.146.444-.257l1.12.646.636 2.373.905-.242-.393-1.468.547.316 1.298 1.965 1.867-.679-.346-1.956-2.35-.141Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></svg>`;
const getIndicators = value => Array.from({ length: 5 }, (_, idx) => getIndicator(idx < value)).join('');

const closeModal = () => {
  $modal.close();
  document.body.style.overflowY = 'initial';
};

export const showModal = giftData => {
  $modal.showModal();
  document.body.style.overflowY = 'hidden';
  document.addEventListener('click', event => {
    if (event.target.classList.contains('gift-info')) {
      closeModal();
    }
  });

  const $title = $modal.querySelector('.gift-card__title');
  const $image = $modal.querySelector('.gift-info__image');
  const $category = $modal.querySelector('.gift-card__category');
  const $description = $modal.querySelector('.gift-info__description');
  const [$live, $create, $love, $dream] = Array.from($modal.querySelectorAll('.gift-info__stat-value'));
  const [$liveIndicators, $createIndicators, $loveIndicators, $dreamIndicators] = Array.from(
    $modal.querySelectorAll('.gift-info__stat-indicators'),
  );

  $title.textContent = giftData.name;
  $description.textContent = giftData.description;
  $category.textContent = categories[giftData.category].name;
  $category.className = `gift-card__category gift-card__category_${giftData.category}`;
  $image.src = categories[giftData.category].img;

  $love.textContent = giftData.superpowers.love;
  $create.textContent = giftData.superpowers.create;
  $live.textContent = giftData.superpowers.live;
  $dream.textContent = giftData.superpowers.dream;

  $liveIndicators.innerHTML = getIndicators(parseInt(giftData.superpowers.love, 10) / 100);
  $createIndicators.innerHTML = getIndicators(parseInt(giftData.superpowers.create, 10) / 100);
  $loveIndicators.innerHTML = getIndicators(parseInt(giftData.superpowers.live, 10) / 100);
  $dreamIndicators.innerHTML = getIndicators(parseInt(giftData.superpowers.dream, 10) / 100);
};

$closeBtn.addEventListener('click', closeModal);
