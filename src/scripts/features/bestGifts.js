import { gifts } from '../data/gifts';
import { getRandomItems } from '../utils/getRandomItems';
import { createGiftCard } from './giftCard';

const $cardContainer = document.querySelector('.gifts__cards');

const randomGifts = getRandomItems(gifts, 4);
randomGifts.forEach(giftData => {
  const $giftCard = createGiftCard(giftData);
  $cardContainer.append($giftCard);
});
