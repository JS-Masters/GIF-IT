import { q, setActiveNav } from "./helpers.js";
import { CONTAINER_SELECTOR, CONTENT_SELECTOR, FAVORITES, HOME, TRENDING } from "../common/constants.js";
import { loadTrendingGifs, loadGifByID, loadGifsByIDs, loadRandomGif } from "../requests/request-service.js";
import { toTrendingView } from "../views/ternding-view.js";
import { toGifsNumSelectorView } from "../views/gifs-num-selector-view.js";
import { getFavorites } from "../data/favorites.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { toDetailedGifView, toGifSimpleView } from "../views/gif-view.js";



export const loadPage = async (page = '') => {

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


export const renderHome = () => {
    // missing toHomeView()
};



// Offset is only of future features
export const renderTrending = async (limit = 10, offset = 0) => {
    const trendingGifs = await loadTrendingGifs(limit, offset);
    q(CONTENT_SELECTOR).innerHTML = toTrendingView(trendingGifs);
};


export const renderGifsNumSelector = () => {
    q(CONTAINER_SELECTOR).innerHTML = toGifsNumSelectorView();
};

export const renderGifDetails = async (id) => {
    const gifByID = await loadGifByID(id);
    q(CONTAINER_SELECTOR).innerHTML = toDetailedGifView(gifByID);
};



export const renderFavorites = async () => {

    const favorites = getFavorites().filter((id) => id);

    if (favorites.length > 0) {
        const favoritesAsString = favorites.join(',');
        const favoriteGifsArr = await loadGifsByIDs(favoritesAsString);
        q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favoriteGifsArr);
    } else {
        const randomGif = await loadRandomGif();
        q(CONTAINER_SELECTOR).innerHTML = toGifSimpleView(randomGif);
    };
};