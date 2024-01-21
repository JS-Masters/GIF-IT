import { getGifByIdURL, getGifsByIDs, getTrendingURL, RANDOM_GIF_URL, searchByQueryURL } from "../common/constants.js";
import { addToUploadedStorage } from "../data/uploaded.js";
import { UPLOAD_URL } from "../common/constants.js";




// НЕ ЗАБРАВЯЙТЕ ALERTS/ERRORS HANDLING при грешки със заявките !!!
export const loadTrendingGifs = async (limit, offset) => {

    const response = await fetch(getTrendingURL(limit, offset));
    const result = await response.json();
    return result.data;
};
// НЕ ЗАБРАВЯЙТЕ ALERTS/ERRORS HANDLING при грешки със заявките !!!

export const loadGifByID = async (id) => {

    const response = await fetch(getGifByIdURL(id));
    const result = await response.json();

    return result.data;
};


export const loadSearchedGifs = async (query, limit, offset) => {
    const response = await fetch(searchByQueryURL(query, limit, offset));
    const result = await response.json();

    return result.data;
}

/**
 * 
 * @param {string} favorites comma separated IDs
 */
export const loadGifsByIDs = async (favorites) => {
    const response = await fetch(getGifsByIDs(favorites));
    const result = await response.json();
    return result.data;
};

export const loadRandomGif = async () => {
    const response = await fetch(RANDOM_GIF_URL);
    const result = await response.json();

    return result.data;
};

export const loadUploadedGIFs = async (IDs) => {
    const response = await fetch(getGifsByIDs(IDs));
    const result = await response.json();

    return result.data;
}

export const uploadGif = async (options) => {

    const response = await fetch(UPLOAD_URL, options);
    const result = await response.json();
    addToUploadedStorage(result.data.id);
};
