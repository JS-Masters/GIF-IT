import { getGifByIdURL, getGifsByIDs, getTrendingURL, RANDOM_GIF_URL, searchByQueryURL } from '../common/constants.js';
import { addToUploadedStorage } from '../data/uploaded.js';
import { UPLOAD_URL } from '../common/constants.js';


// НЕ ЗАБРАВЯЙТЕ ALERTS/ERRORS HANDLING при грешки със заявките !!!


/**
 * Loads trending GIFs from the API.
 * @param {number} limit - The number of GIFs to load.
 * @param {number} offset - The offset for pagination.
 * @returns {Promise<Array>} - A promise that resolves to an array of trending GIFs.
 */
export const loadTrendingGifs = async (limit, offset) => {

  const response = await fetch(getTrendingURL(limit, offset));
  const result = await response.json();
  return result.data;
};


// НЕ ЗАБРАВЯЙТЕ ALERTS/ERRORS HANDLING при грешки със заявките !!!

/**
 * Loads a GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<Object>} - A promise that resolves to the GIF data.
 */
export const loadGifByID = async (id) => {

  const response = await fetch(getGifByIdURL(id));
  const result = await response.json();

  return result.data;
};


/**
 * Loads searched GIFs based on the provided query, limit, and offset.
 *
 * @param {string} query - The search query.
 * @param {number} limit - The maximum number of GIFs to load.
 * @param {number} offset - The offset for pagination.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF data.
 */
export const loadSearchedGifs = async (query, limit, offset) => {
  const response = await fetch(searchByQueryURL(query, limit, offset));
  const result = await response.json();

  return result.data;
};


/**
 * Loads GIFs by their IDs.
 * @param {Array<string>} favorites - The array of GIF IDs to load.
 * @returns {Promise<Array<object>>} - A promise that resolves to an array of GIF data.
 */
export const loadGifsByIDs = async (favorites) => {
  const response = await fetch(getGifsByIDs(favorites));
  const result = await response.json();
  return result.data;
};

/**
 * Loads a random GIF from the server.
 * @returns {Promise<Object>} A promise that resolves to the data of the random GIF.
 */
export const loadRandomGif = async () => {
  const response = await fetch(RANDOM_GIF_URL);
  const result = await response.json();

  return result.data;
};

/**
 * Loads uploaded GIFs by their IDs.
 * @param {Array} IDs - An array of GIF IDs.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF data.
 */
export const loadUploadedGIFs = async (IDs) => {
  const response = await fetch(getGifsByIDs(IDs));
  const result = await response.json();

  return result.data;
};

/**
 * Uploads a GIF using the specified options.
 * @param {Object} options - The options for the upload.
 * @returns {Promise<void>} - A promise that resolves when the GIF is uploaded.
 */
export const uploadGif = async (options) => {

  const response = await fetch(UPLOAD_URL, options);
  const result = await response.json();
  addToUploadedStorage(result.data.id);
};
