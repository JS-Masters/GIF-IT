import { API_KEY } from '../common/constants.js';

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


/**
 * Returns the URL for retrieving a GIF by its ID.
 *
 * @param {string} id - The ID of the GIF.
 * @returns {string} The URL for retrieving the GIF.
 */
export const getGifByIdURL = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

/**
 * Returns the URL for fetching GIFs by their IDs.
 *
 * @param {string} favorites - The IDs of the favorite GIFs.
 * @returns {string} The URL for fetching GIFs by their IDs.
 */
export const getGifsByIDs = (favorites) => `https://api.giphy.com/v1/gifs?api_key=${API_KEY}&ids=${favorites}&rating=g`;
