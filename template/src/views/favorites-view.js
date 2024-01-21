import { toGifSimpleView } from './gif-view.js';

export const toFavoritesView = (gifs) => `
  <div class="grid">
    ${gifs.map(toGifSimpleView).join('\n')}
  </div>
`;
