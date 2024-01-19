import { API_KEY } from "../common/constants.js";

export {
    loadTrendingGifs,
    loadGifByID,
    loadSearchedGifs
};


/**
 * 
 * @param {number} limit 
 * @param {number} offset 
 * @return {string}
 */
const getTrendingURL = (limit, offset) => `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=g&bundle=messaging_non_clips`;


/**
 * 
 * @param {number} limit 
 * @param {number} offset 
 * @return {string}
 */
const searchByQuery = (query, limit, offset) => `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`;


const getGifByIdURL = (id) => `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}&rating=g`;

// НЕ ЗАБРАВЯЙТЕ ALERTS/ERRORS HANDLING при грешки със заявките !!!
const loadTrendingGifs = async (limit, offset) => {

    const response = await fetch(getTrendingURL(limit, offset));
    const result = await response.json();
    return result.data;
};
// НЕ ЗАБРАВЯЙТЕ ALERTS/ERRORS HANDLING при грешки със заявките !!!

const loadGifByID = async (id) => {

    const response = await fetch(getGifByIdURL(id));
    const result = await response.json();

    return result.data;
};


const loadSearchedGifs = async (query, limit, offset) => {
    const response = await fetch(searchByQuery(query, limit, offset));
    const result = await response.json();

    return result.data;
}
