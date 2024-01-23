import { getGifByIdURL, getGifsByIDsURL, getTrendingURL, searchByQueryURL } from './request-urls.js';
import { addToUploadedStorage } from '../data/uploaded.js';
import { UPLOAD_URL, RANDOM_GIF_URL } from '../common/constants.js';


/**
 * Loads trending GIFs from the API.
 * @param {number} limit - The number of GIFs to load.
 * @param {number} offset - The offset for pagination.
 * @returns {Promise<Array>} - A promise that resolves to an array of trending GIFs.
 */
export const loadTrendingGifs = async (limit, offset) => {

  try {
    const response = await fetch(getTrendingURL(limit, offset));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    return result.data;
  } catch (error) {
    alert(error.message);
  };

};


/**
 * Loads a GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<Object>} - A promise that resolves to the GIF data.
 */
export const loadGifByID = async (id) => {

  try {
    const response = await fetch(getGifByIdURL(id));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    return result.data;
  } catch (error) {
    alert(error.message);
  };

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

  try {
    const response = await fetch(searchByQueryURL(query, limit, offset));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    return result.data;
  } catch (error) {
    alert(error.message);
  };

};


/**
 * Loads GIFs by their IDs.
 * @param {Array<string>} favorites - The array of GIF IDs to load.
 * @returns {Promise<Array<object>>} - A promise that resolves to an array of GIF data.
 */
export const loadGifsByIDs = async (favorites) => {

  try {
    const response = await fetch(getGifsByIDsURL(favorites));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    return result.data;
  } catch (error) {
    alert(error.message);
  };

};

/**
 * Loads a random GIF from the server.
 * @returns {Promise<Object>} A promise that resolves to the data of the random GIF.
 */
export const loadRandomGif = async () => {

  try {
    const response = await fetch(RANDOM_GIF_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    return result.data;

  } catch (error) {
    alert(error.message);
  };

};

/**
 * Loads uploaded GIFs by their IDs.
 * @param {Array} IDs - An array of GIF IDs.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF data.
 */
export const loadUploadedGIFs = async (IDs) => {

  try {
    const response = await fetch(getGifsByIDsURL(IDs));
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    return result.data;

  } catch (error) {
    alert(error.message);
  };

};

/**
 * Uploads a GIF using the specified options.
 * @param {Object} options - The options for the upload.
 * @returns {Promise<void>} - A promise that resolves when the GIF is uploaded.
 */
export const uploadGif = async (options) => {

  try {
    const response = await fetch(UPLOAD_URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    };
    const result = await response.json();
    addToUploadedStorage(result.data.id);
  } catch (error) {
    alert(error.message);
  };

};
