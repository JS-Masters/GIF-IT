import { q, setActiveNav } from "./helpers.js";
import { CONTAINER_SELECTOR, CONTENT_SELECTOR, FAVORITES, HOME, TRENDING } from "../common/constants.js";
import { loadTrendingGifs, loadGifByID, loadSearchedGifs, loadGifsByIDs, loadRandomGif } from "../requests/request-service.js";
import { toTrendingView } from "../views/ternding-view.js";
import { toDetailedGifView } from "../views/detailed-gif-view.js";
import { toGifsNumSelectorView } from "../views/gifs-num-selector-view.js";
import { toSearchedView } from '../views/searched-view.js';
import { getFavorites } from "../data/favorites.js";
import { favoritesView } from "../views/favorites-view.js";

export {
    loadPage,
    renderTrending,
    renderGifsNumSelector,
    renderGifByID,
    renderSearchedGifs,
    renderFavorites
}


const loadPage = async (page = '') => {

    switch (page) {
        case HOME:
            break;

        case TRENDING:
            setActiveNav(TRENDING);
            renderGifsNumSelector();
            await renderTrending();
            break;

            case FAVORITES:
            setActiveNav(FAVORITES);
            await renderFavorites();
            break;

    };

};

// Offset is only of future features
const renderTrending = async (limit = 10, offset = 0) => {

    const trendingGifs = await loadTrendingGifs(limit, offset);

    q(CONTENT_SELECTOR).innerHTML = toTrendingView(trendingGifs);

};


const renderGifsNumSelector = () => {
    q(CONTAINER_SELECTOR).innerHTML = toGifsNumSelectorView();
}

const renderGifByID = async (id) => {
    const gifByID = await loadGifByID(id);

    q(CONTAINER_SELECTOR).innerHTML = toDetailedGifView(gifByID);
}

// Offset is only of future features
const renderSearchedGifs = async (query, limit = 10, offset = 0) => {
    const searchedGifs = await loadSearchedGifs(query, limit, offset);
    renderGifsNumSelector();
    q(CONTENT_SELECTOR).innerHTML = toSearchedView(searchedGifs);
};

const renderFavorites = async () => {
    const favorites = getFavorites();
// console.log(favorites)
    if (favorites.length > 0) {
        const favoritesAsString = favorites.join(',');
        const favoritesGifsArr = await loadGifsByIDs(favoritesAsString);
        q(CONTAINER_SELECTOR).innerHTML = favoritesView(favoritesGifsArr);
    } else {
        const randomGif = await loadRandomGif();
        q(CONTAINER_SELECTOR).innerHTML = `<img class="gifs" id=${randomGif.id} src="${randomGif.images.original.url}">`;
    };
};