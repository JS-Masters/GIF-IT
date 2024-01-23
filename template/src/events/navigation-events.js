import { q, setActiveNav } from './helpers.js';
import { CONTAINER_SELECTOR, CONTENT_SELECTOR, FAVORITES, HOME, TRENDING, UPLOADED, HOME_SEARCH_BUTTON, HOME_UPLOAD_BUTTON } from '../common/constants.js';
import { loadTrendingGifs, loadGifByID, loadGifsByIDs, loadRandomGif, loadUploadedGIFs } from '../requests/request-service.js';
import { toTrendingView } from '../views/ternding-view.js';
import { toGifsNumSelectorView } from '../views/gifs-num-selector-view.js';
import { getFavorites } from '../data/favorites.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toDetailedGifView, toGifSimpleView } from '../views/gif-view.js';
import { getUploadedStorage } from '../data/uploaded.js';
import { toUploadedGIFsView } from '../views/uploaded-gifs-view.js';
import { toHomeView } from '../views/home-view.js';
import { toSearchPageView } from '../views/search-page-view.js';
import { toUploadPageView } from '../views/upload-page-view.js';

/**
 * Loads the specified page and performs the necessary actions based on the page.
 * @param {string} page - The page to load.
 * @returns {Promise<void>} - A promise that resolves when the page is loaded.
 */
export const loadPage = async (page = '') => {

  switch (page) {
  case HOME:
    setActiveNav(HOME);
    renderHome();
    break;

  case TRENDING:
    setActiveNav(TRENDING);
    renderSearchAttributes('trending');
    await renderTrending();
    break;

  case FAVORITES:
    setActiveNav(FAVORITES);
    await renderFavorites();
    break;

  case UPLOADED:
    // setActiveNav(UPLOADED);
    await renderUploadedGIFs();
    break;

  case HOME_SEARCH_BUTTON:
    loadSearchPage();
    break;

  case HOME_UPLOAD_BUTTON:
    loadUploadPage();
    break;

  };

};


/**
 * Renders the home view by updating the innerHTML of the container element.
 */
export const renderHome = () => {

  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};


/**
 * Renders the trending GIFs on the page.
 * 
 * @param {number} limit - The maximum number of trending GIFs to load.
 * @param {number} offset - The offset for pagination.
 * @returns {Promise<void>} - A promise that resolves when the trending GIFs are rendered.
 */
export const renderTrending = async (limit = 10, offset = 0) => {
  const trendingGifs = await loadTrendingGifs(limit, offset);
  q(CONTENT_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};


/**
 * Renders the search attributes on the page.
 * 
 * @param {number} page - The current page number.
 * @returns {void}
 */
export const renderSearchAttributes = (page) => {
  const result = toSearchPageView() + toGifsNumSelectorView(page);
  q(CONTAINER_SELECTOR).innerHTML = result;
};


/**
 * Renders the details of a GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @returns {Promise<void>} - A promise that resolves when the GIF details are rendered.
 */
export const renderGifDetails = async (id) => {
  const gifByID = await loadGifByID(id);
  q(CONTAINER_SELECTOR).innerHTML = toDetailedGifView(gifByID);
};


/**
 * Renders the favorites section.
 * If there are favorite GIFs, it loads and displays them.
 * If there are no favorite GIFs, it loads and displays a random GIF.
 * @returns {Promise<void>} A promise that resolves once the rendering is complete.
 */
export const renderFavorites = async () => {

  const favorites = getFavorites().filter(Boolean);

  if (favorites.length > 0) {
    const favoritesAsString = favorites.join(',');
    const favoriteGifsArr = await loadGifsByIDs(favoritesAsString);
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifsArr);
  } else {
    const randomGif = await loadRandomGif();
    q(CONTAINER_SELECTOR).innerHTML = toGifSimpleView(randomGif);
  };
};


/**
 * Renders the uploaded GIFs on the page.
 * 
 * @returns {Promise<void>} A promise that resolves when the GIFs are rendered.
 */
const renderUploadedGIFs = async () => {

  const uploadedGIFsIDs = getUploadedStorage().filter(Boolean);

  if (uploadedGIFsIDs.length > 0) {
    const uploadedGIFsIDsAsString = uploadedGIFsIDs.join(',');
    const uploadedGIFsArr = await loadUploadedGIFs(uploadedGIFsIDsAsString);

    q(CONTAINER_SELECTOR).innerHTML = toUploadedGIFsView(uploadedGIFsArr);
  } else {
    alert('You don\'t have uploaded GIFs yet...');
  }

};

/**
 * Loads the search page.
 * If there is no dropdown element, it renders the search attributes.
 * If there is a dropdown element with the 'trending' class, it renders the search attributes.
 * Finally, it updates the inner HTML of the container element with the search page view.
 */
export const loadSearchPage = () => {

  if (!(q('.dropdown'))) {
    renderSearchAttributes('search');
  } else if ((q('.dropdown')) && q('.dropdown').classList.contains('trending')) {
    renderSearchAttributes('search');
  };
  q(CONTAINER_SELECTOR).innerHTML = toSearchPageView();
};


/**
 * Loads the upload page by updating the innerHTML of the container element.
 */
const loadUploadPage = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadPageView();
};

