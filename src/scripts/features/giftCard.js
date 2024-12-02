const createElement = (tag, options) => Object.assign(document.createElement(tag), options);

const categoryProps = {
  work: {
    name: 'for work',
    img: './img/gifts/gift-for-work.png',
  },
  health: {
    name: 'for health',
    img: './img/gifts/gift-for-health.png',
  },
  harmony: {
    name: 'for harmony',
    img: './img/gifts/gift-for-harmony.png',
  },
};

export const createGiftCard = cardData => {
  const $container = createElement('div', {
    className: 'gift-card',
  });

  const $image = createElement('img', {
    className: 'gift-card__image',
    src: categoryProps[cardData.category].img,
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
    textContent: categoryProps[cardData.category].name,
  });

  $content.append($title, $description);
  $container.append($image, $content);

  return $container;
};
