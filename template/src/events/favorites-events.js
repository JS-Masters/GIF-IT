import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorites.js';
import { q } from './helpers.js';

/**
 *
 * @param {string} gifID - The value of the id-property of the gif-object
 */
export const toggleFavoriteStatus = (gifID) => {
  const favorites = getFavorites();
  const heartSpan = q(`button[data-gif-id="${gifID}"]`);

  if (favorites.includes(gifID)) {
    removeFavorite(gifID);
    heartSpan.classList.remove('active');
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifID);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
};

/**
 *
 * @param {string} gifID - The value of the id-property of the gif-object
 */
export const renderFavoriteStatus = (gifID) => {
  const favorites = getFavorites();

  return favorites.includes(gifID) ?
    `<button class="favorite active" data-gif-id="${gifID}">${FULL_HEART}</button>` :
    `<button class="favorite" data-gif-id="${gifID}">${EMPTY_HEART}</button>`;
};
