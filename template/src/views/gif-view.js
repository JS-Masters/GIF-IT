import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Converts a GIF object into a simple view HTML string.
 *
 * @param {Object} gif - The GIF object to convert.
 * @returns {string} - The HTML string representing the simple view of the GIF.
 */
export const toGifSimpleView = (gif) => `<div class="grid-item"><img class="gifs" id=${gif.id} src="${gif.images.fixed_width.url}"></div>`;


/**
 * Converts a GIF object into a detailed GIF view HTML string.
 * @param {Object} gif - The GIF object.
 * @returns {string} - The HTML string representing the detailed GIF view.
 */
export const toDetailedGifView = (gif) => `
  <div class="gif-single-view">
    <div class="uploaded-by">
      ${'user' in gif ?
    `<span>Uploaded by:</span>
      <img class="user-avatar" src="${gif.user.avatar_url}" alt="User Avatar"></img>
      <a href="${gif.user.profile_url}" class="username-link" target="_blank">${gif.user.username}</a>`: ''}
    </div>
    <h1>${gif.title}</h1>
    <img class="gifs" id=${gif.id} src="${gif.images.original.url}" alt="${gif.title}">
    ${renderFavoriteStatus(gif.id)}
  </div>
  <div class="user-info">
    <button class="share-button" data-page="${gif.id}">Share</button>
    <button class="download-btn" data-gif-url="${gif.images.original.url}">Download</button>
  </div>

  <div class="comments">
    <h2>Comments</h2>
    <div id="commentsContainer"></div>
    <textarea id="commentInput" placeholder="What do you think..."></textarea>
    <button id="addCommentButton" data-gif-id="${gif.id}">Add comment</button>
  </div>
`;
