import { toGifSimpleView } from './gif-view.js';


export const toTrendingView = (gifs) => `
  <div class="grid">
    ${gifs.map(toGifSimpleView).join('\n')}
  </div>
`;
