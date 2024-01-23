import { toGifSimpleView } from './gif-view.js';


/**
 * Converts an array of GIFs into a search view HTML string.
 *
 * @param {Array<object>} gifs - The array of GIFs.
 * @returns {string} The search view HTML string.
 */
export const toSearchView = (gifs) => `
  <div class="grid">
    ${gifs.map(toGifSimpleView).join('\n')}
  </div>
`;
