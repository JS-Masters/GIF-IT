import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Converts a GIF object into a simple view HTML string.
 *
 * @param {Object} gif - The GIF object to convert.
 * @returns {string} - The HTML string representing the simple view of the GIF.
 */
export const toGifSimpleView = (gif) => `
<div class="gif-box">
  <img class="gifs" id=${gif.id} src="${gif.images.original.url}">
  ${renderFavoriteStatus(gif.id)}
</div>`;


/**
 * Converts a GIF object into a detailed GIF view HTML string.
 * @param {Object} gif - The GIF object.
 * @returns {string} - The HTML string representing the detailed GIF view.
 */
export const toDetailedGifView = (gif) => `
  <div class="gif-single-view">
    <div class="uploaded-by">
      ${'user' in gif ?
    `<h3>Uploaded by:</h3>
      <img class="user-avatar" src="${gif.user.avatar_url}" alt="User Avatar"></img>
      <a href="${gif.user.profile_url}" class="username-link" target="_blank">${gif.user.username}</a>`: ''}
    </div>
    <h1>${gif.title}</h1>
    <div class="gif-box">
      <img class="gifs" id=${gif.id} src="${gif.images.original.url}" alt="${gif.title}">
      ${renderFavoriteStatus(gif.id)}
    </div>
      <button class="share-button" data-page="${gif.id}">Share</button>
      <button class="download-btn" data-gif-url="${gif.images.original.url}">Download</button>
  </div>
  <div class="comments">
    <h2>Comments:</h2>
    <div id="comments-container">
    </div>
    <textarea id="comment-input" placeholder="Leave your comment here..."></textarea>
    <button id="add-comment-button" data-gif-id="${gif.id}">Add comment</button>
  </div>
`;
