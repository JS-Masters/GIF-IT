import { toGifSimpleView } from './gif-view.js';


export const toNoFavoritesView = (randomGif) => `
<h2>You don\'t have Favorite GIFs yet! Here\'s a Random GIF for you:</h2>
${toGifSimpleView(randomGif)}
<button id="reload-random-button" data-page="favorites">GIF me one more</button>
`;
