import { CONTENT_SELECTOR } from '../common/constants.js';
import { loadSearchedGifs } from '../requests/request-service.js';
import { toSearchView } from '../views/search-view.js';
import { q } from './helpers.js';
import { renderSearchAttributes } from './navigation-events.js';


// Offset is only of future features
/**
 * Renders the search results for GIFs.
 * 
 * @param {string} query - The search query.
 * @param {number} [limit=10] - The maximum number of GIFs to load.
 * @param {number} [offset=0] - The offset for pagination.
 * @returns {Promise<void>} - A promise that resolves when the search results are rendered.
 */
export const renderSearchGifs = async (query, limit = 10, offset = 0) => {

  const searchedGifs = await loadSearchedGifs(query, limit, offset);
  if (!(q('.dropdown'))) {
    renderSearchAttributes('search');
  } else if ((q('.dropdown')) && q('.dropdown').classList.contains('trending')) {
    renderSearchAttributes('search');
  };

  q(CONTENT_SELECTOR).innerHTML = toSearchView(searchedGifs);
};
