import { gifts } from '../data/gifts';
import { getRandomItems } from '../utils/getRandomItems';
import { createGiftCard } from './giftCard';

const $cardContainer = document.querySelector('.gifts-gallery__cards');

const randomGifts = getRandomItems(gifts, gifts.length);
randomGifts.forEach(giftData => {
  const $giftCard = createGiftCard(giftData);
  $cardContainer.append($giftCard);
});
