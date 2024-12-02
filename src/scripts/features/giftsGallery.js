import { gifts } from '../data/gifts';
import { getRandomItems } from '../utils/getRandomItems';
import { createGiftCard } from './giftCard';

const $cardContainer = document.querySelector('.gifts-gallery__cards');
const $tabs = document.querySelectorAll('.tabs__tab');

const randomGifts = getRandomItems(gifts, gifts.length);

const fillContainer = data => {
  data.forEach(giftData => {
    const $giftCard = createGiftCard(giftData);
    $cardContainer.append($giftCard);
  });
};

$tabs.forEach($tab => {
  $tab.addEventListener('click', () => {
    const { category } = $tab.dataset;
    $cardContainer.innerHTML = '';
    const filteredGifts = category === 'all' ? randomGifts : randomGifts.filter(gift => gift.category === category);
    fillContainer(filteredGifts);

    $tabs.forEach(tab => tab.classList.remove('tabs__tab_active'));
    $tab.classList.add('tabs__tab_active');
  });
});

fillContainer(randomGifts);
