import { renderFavoriteStatus } from '../events/favorites-events.js';


export const toGifSimpleView = (gif) => `<div class="grid-item"><img class="gifs" id=${gif.id} src="${gif.images.fixed_width.url}"></div>`;


export const toDetailedGifView = (gif) => `
  <div class="gif-single-view">
    <h1>${gif.title}</h1>
    <img class="gifs" id=${gif.id} src="${gif.images.original.url}">
  </div>
  <div class="user-info">
    ${'user' in gif ?
    `<h2>Uploaded by:</h2>
    <img class="user-avatar" src="${gif.user.avatar_url}"></img>
    <a href="${gif.user.profile_url}" class="username-link" target="_blank">${gif.user.username}</a>`: ''}
    <button class="share-button" data-page="${gif.id}">Share</button>
    <button class="download-btn" data-gif-url="${gif.images.original.url}">Download</button>
  </div>
  ${renderFavoriteStatus(gif.id)}
  <div class="comments">
  <h2>Comments</h2>
  <div id="commentsContainer"></div>
  <textarea id="commentInput" placeholder="What do you think..."></textarea>
  <button id="addCommentButton" data-gif-id="${gif.id}">Add comment</button>
</div>
`;
