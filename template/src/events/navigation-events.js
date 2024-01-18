import { q, setActiveNav } from "./helpers.js";
import { CONTAINER_SELECTOR, TRENDING_CONTENT_SELECTOR, HOME, TRENDING} from "../common/constants.js";
import { loadTrendingGifs, loadGifByID } from "../requests/request-service.js";
import { toGifsNumSelectorView, toTrendingView } from "../views/ternding-view.js";
import { toDetailedGifView } from "../views/detailed-gif-view.js";

export {
    loadPage,
    renderTrending,
    renderGifsNumSelector,
    renderGifByID
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

    };

};

// Offset is only of future features
const renderTrending = async (limit = 10, offset = 0) => {

    const trendingGifs = await loadTrendingGifs(limit, offset);

    q(TRENDING_CONTENT_SELECTOR).innerHTML = toTrendingView(trendingGifs);

};


const renderGifsNumSelector =  () => {
    q(CONTAINER_SELECTOR).innerHTML = toGifsNumSelectorView();
}

const renderGifByID = async (id) => {
    const gifByID = await loadGifByID(id);

    q(CONTAINER_SELECTOR).innerHTML = toDetailedGifView(gifByID);
}

