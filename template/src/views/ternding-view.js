import { toGifSimpleView } from './gif-view.js';


/**
 * Converts an array of GIFs into a trending view HTML string.
 *
 * @param {Array<object>} gifs - The array of GIFs.
 * @returns {string} The HTML string representing the trending view.
 */
export const toTrendingView = (gifs) => `
  <h2> Top Tranding GIFs are here:</h2>
    ${gifs.map(toGifSimpleView).join('\n')}
`;
