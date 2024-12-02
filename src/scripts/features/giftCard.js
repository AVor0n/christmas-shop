import { categories } from '../data/categories';
import { showModal } from './giftModal';

const createElement = (tag, options) => Object.assign(document.createElement(tag), options);

export const createGiftCard = cardData => {
  const $container = createElement('div', {
    className: 'gift-card',
  });

  const $image = createElement('img', {
    className: 'gift-card__image',
    src: categories[cardData.category].img,
  });

  const $content = createElement('div', {
    className: 'gift-card__content',
  });

  const $title = createElement('h3', {
    className: 'gift-card__title',
    textContent: cardData.name,
  });

  const $description = createElement('span', {
    className: `gift-card__category gift-card__category_${cardData.category}`,
    textContent: categories[cardData.category].name,
  });

  $content.append($title, $description);
  $container.append($image, $content);
  $container.addEventListener('click', () => {
    showModal(cardData);
  });

  return $container;
};
