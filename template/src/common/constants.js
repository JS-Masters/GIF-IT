const API_KEY = 'Y2dRM6tx3BMNPo0bSuIVSD2N2zIxCMm8';

export const HOME = 'home';
export const TRENDING = 'trending';
export const UPLOADED = 'uploaded';
export const FAVORITES = 'favorites';

export const CONTAINER_SELECTOR = '#container';
export const CONTENT_SELECTOR = '#content';

export const EMPTY_HEART = '♡';
export const FULL_HEART = '❤';

// Request URLs

export const UPLOAD_URL = `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`;

export const RANDOM_GIF_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;

/**
 *
 * @param {number} limit
 * @param {number} offset
 * @return {string}
 */
export const getTrendingURL = (limit, offset) => `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;


/**
 *
 * @param {number} limit
 * @param {number} offset
 * @return {string}
 */
export const searchByQueryURL = (query, limit, offset) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;


export const getGifByIdURL = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

export const getGifsByIDs = (favorites) => `https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${favorites}&rating=g`;
