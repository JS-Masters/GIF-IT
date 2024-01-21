import { renderFavoriteStatus } from "../events/favorites-events.js"


export const toGifSimpleView = (gif) => `<div class="grid-item"><img class="gifs" id=${gif.id} src="${gif.images.fixed_width.url}"></div>`;


export const toDetailedGifView = (gif) => 
// if()
`
    <div class="gif-single-view">
        <h1>${gif.title}</h1>
        <img class="gifs" id=${gif.id} src="${gif.images.original.url}">
    </div>
    <div class="user-info">
        <h2>Uploaded by:</h2>
        ${gif.hasOwnProperty('user') ? 
        `<img class="user-avatar" src="${gif.user.avatar_url}"></img>
        <a href="${gif.user.profile_url}" class="username-link" target="_blank">${gif.user.username}</a>`
        : ''}
        <button class="share-button" data-page="${gif.id}">Share</button>
        <button class="download-btn" data-gif-url="${gif.images.original.url}">Download</button>
    </div>
    ${renderFavoriteStatus(gif.id)}`;