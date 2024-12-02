import { shuffle } from './shuffle';

export const getRandomItems = (arr, count) => shuffle(arr.slice()).slice(0, count);
