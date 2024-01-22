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


export const renderHome = () => {

  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};


// Offset is only of future features
export const renderTrending = async (limit = 10, offset = 0) => {
  const trendingGifs = await loadTrendingGifs(limit, offset);
  q(CONTENT_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};


export const renderSearchAttributes = (page) => {
  const result = toSearchPageView() + toGifsNumSelectorView(page);
  q(CONTAINER_SELECTOR).innerHTML = result;
};

export const renderGifDetails = async (id) => {
  const gifByID = await loadGifByID(id);
  q(CONTAINER_SELECTOR).innerHTML = toDetailedGifView(gifByID);
};


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

const renderUploadedGIFs = async () => {

  const uploadedGIFsIDs = getUploadedStorage().filter((e) => e);

  if (uploadedGIFsIDs.length > 0) {
    const uploadedGIFsIDsAsString = uploadedGIFsIDs.join(',');
    const uploadedGIFsArr = await loadUploadedGIFs(uploadedGIFsIDsAsString);

    q(CONTAINER_SELECTOR).innerHTML = toUploadedGIFsView(uploadedGIFsArr);
  } else {
    alert('You don\'t have uploaded GIFs yet...');
  }

};

export const loadSearchPage = () => {

  if (!(q('.dropdown'))) {
    renderSearchAttributes('search');
  } else if ((q('.dropdown')) && q('.dropdown').classList.contains('trending')) {
    renderSearchAttributes('search');
  };
  q(CONTAINER_SELECTOR).innerHTML = toSearchPageView();
};

const loadUploadPage = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadPageView();
};

