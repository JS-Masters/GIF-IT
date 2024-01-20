import { toGifSimpleView } from "./gif-view.js";


export const toSearchView = (gifs) => `
  <div class="grid">
    ${gifs.map(toGifSimpleView).join('\n')}
  </div>
`;
