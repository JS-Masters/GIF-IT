import { toGifSimpleView } from './gif-view.js';

/**
 * Converts an array of GIFs into a favorites view HTML string.
 *
 * @param {Array<object>} gifs - The array of GIFs.
 * @returns {string} The HTML string representing the favorites view.
 */
export const toFavoritesView = (gifs) => `
  <div class="grid">
  <h2>Here are your Favorite GIFs:</h2>
    ${gifs.map(toGifSimpleView).join('\n')}
  </div>
`;
