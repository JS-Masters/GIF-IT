import { toGifSimpleView } from './gif-view.js';

/**
 * Converts an array of GIFs into a favorites view HTML string.
 *
 * @param {Array<object>} gifs - The array of GIFs.
 * @returns {string} The HTML string representing the favorites view.
 */
export const toFavoritesView = (gifs) => `
<h2>Here are your favorite GIFs</h2>
<div class="content">
  <div class="grid">
    ${gifs.map(toGifSimpleView).join('\n')}
  </div>
</div>
`;
